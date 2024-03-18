# Packages ----------------------------------------------------------------
library(tidyverse)
library(qualtRics)
library(jsonlite)
library(here)
library(sjlabelled)

# Functions ---------------------------------------------------------------
source(here("2024_sem2", "scripts", "custom_functions", "create_codebook.R"))
source(here("2024_sem2", "scripts", "custom_functions", "functions_exclusions.R"))

# Data --------------------------------------------------------------------
study_data_online <- 
  fetch_survey(
    surveyID = "SV_a4SePQfBV8LT3lY", 
    verbose  = T,
    force_request = T,
    label = F,
    convert = F,
    add_var_labels = F
  ) %>% 
  rename_with(tolower) %>% 
  mutate(id = paste0("O_", 1:n())) %>% 
  sjlabelled::var_labels(
    id = "Blinded participant ID"
  ) %>%
  filter(finished==1) |> 
  filter(`duration (in seconds)` > 0) 



# Flanker Task ------------------------------------------------------------


flanker_prac <-
  study_data_online |>
  select(id, data_flanker_prac) |>
  filter(!is.na(data_flanker_prac)) |>
  filter(data_flanker_prac != "[]") |>
  mutate(across(c(matches("data_flanker_prac")), ~map_if(., .p =  ~!is.na(.x), .f = jsonlite::fromJSON))) |>
  unnest(data_flanker_prac) |>
  select(id, time_elapsed, rt, variable, task, response, stimtype, correct) |>
  mutate(condition = ifelse(str_detect(stimtype, "^incongruent"), "incongruent", "congruent"))

flanker_data <-
  study_data_online |>
  select(id, data_flanker) |>
  filter(!is.na(data_flanker)) |>
  filter(data_flanker != "[]") |>
  mutate(across(c(matches("data_flanker")), ~map_if(., .p =  ~!is.na(.x), .f = jsonlite::fromJSON))) |>
  unnest(data_flanker) |>
  select(id, rt, response, variable, task, stimtype, correct, time_elapsed) |>
  mutate(condition = ifelse(str_detect(stimtype, "^incongruent"), "incongruent", "congruent")) |>
  filter(!variable %in% c("interblock", "test_start"))


flanker <- flanker_data |> 
  filter(rt > 250, correct == TRUE) |>
  group_by(id) |> 
  filter(scale(rt) |> as.numeric() < 3.2) |> 
  group_by(id, condition) |> 
  summarise(rt = mean(rt, na.rm = T)) |> 
  pivot_wider(names_from = 'condition', values_from = 'rt') |> 
  ungroup() |> 
  mutate(Flanker = incongruent - congruent) |> 
  select(id, Flanker)


## Shifting Task ----


shifting_prac <-
  study_data_online |>
  select(id, data_shifting_prac) |>
  filter(!is.na(data_shifting_prac)) |>
  filter(data_shifting_prac != "[]") |>
  mutate(across(c(matches("data_shifting_prac")), ~map_if(., .p =  ~!is.na(.x), .f = jsonlite::fromJSON))) |>
  unnest(data_shifting_prac) |>
  select(id, variable, task, rt, correct, rule, condition, response, time_elapsed) 

shifting_data <-
  study_data_online |>
  select(id, data_shifting) |>
  filter(!is.na(data_shifting)) |>
  filter(data_shifting != "[]") |>
  mutate(across(c(matches("data_shifting")), ~map_if(., .p =  ~!is.na(.x), .f = jsonlite::fromJSON))) |>
  unnest(data_shifting) |>
  select(id, variable, task, rt, correct, rule, condition, response, time_elapsed) |>
  filter(!variable %in% c("interblock", "test_start"))


shifting <- shifting_data |> 
  filter(lag(correct, 1) != FALSE) |> 
  filter(correct == TRUE) |> 
  filter(rt > 250) |> 
  group_by(id) |> 
  filter(scale(rt) |> as.numeric() < 3.2) |> 
  filter(condition != "first") |> 
  group_by(id, condition) |> 
  summarise(rt = mean(rt, na.rm = T)) |> 
  pivot_wider(names_from = 'condition', values_from = 'rt') |> 
  ungroup() |> 
  mutate(Shifting = switch - `repeat`) |> 
  select(id, Shifting)


left_join(flanker, shifting) |> 
  pivot_longer(c(Flanker, Shifting), names_to = "task", values_to = "difference") |> 
  ggplot(aes(x = task, y = difference)) +
  geom_boxplot() +
  geom_point() +
  scale_y_continuous(breaks = seq(-200, 1000, 100)) +
  geom_jitter(width = 0.1) +
  theme_classic() +
  geom_hline(yintercept = 0, linetype = "dashed", outlier.shape = NA) +
  labs(y = "RT difference\n", x = '\nTask')

t.test(flanker$Flanker, mu = 0, alternative = "greater")
t.test(shifting$Shifting, mu = 0, alternative = "greater")

# Removal task ------------------------------------------------------------

removal <- 
  study_data |> 
  select(id, data_removal2_01, data_removal2_02, data_removal2_03) |> 
  filter(!is.na(data_removal2_01), !is.na(data_removal2_02), !is.na(data_removal2_03)) |> 
  mutate(across(c(matches("data_removal2")), ~map_if(., .p =  ~!is.na(.x), .f = jsonlite::fromJSON))) |> 
  mutate(data_removal = pmap(list(data_removal2_01, data_removal2_02, data_removal2_03), function(data_removal2_01, data_removal2_02, data_removal2_03) {
    bind_rows(data_removal2_01, data_removal2_02, data_removal2_03)})) |> 
  unnest(data_removal) |> 
  select(-c(starts_with("data_removal2"), stimulus, trial_type, trial_index, time_elapsed, internal_node_id)) |> 
  mutate(
    accuracy = pmap(
      list(
        response = response,
        variable = variable,
        correct = correct
      ),
      function(response, variable, correct) {
        
        if(variable != "recall") {
          return(NA)
        }
        
        if(variable == "recall") {
          
          responses <- response$value
          
          correct_responses <- str_to_lower(responses) == str_to_lower(correct)
          return(sum(correct_responses))
        }
        
      }
    )
  ) 

removal_recall <- removal |> 
  filter(variable == "recall") |> 
  group_by(id) |> 
  unnest(accuracy) |> 
  summarise(
    recall_accuracy = sum(accuracy) / (n()*3)
  )

removal_RT <- removal |> 
  filter(variable == "newletter") |> 
  unnest(response) |> 
  filter(rt > 300) |> 
  group_by(id) |> 
  mutate(slow_outlier = ifelse(scale(log(rt)) |> as.numeric() > 3.2, TRUE, FALSE)) |> 
  filter(slow_outlier == FALSE) |> 
  group_by(id, duration_cue) |> 
  summarise(rt = mean(rt, na.rm = TRUE)) |> 
  pivot_wider(names_from = 'duration_cue', values_from = 'rt') |> 
  rename(
    rt_long_cue = `1500`,
    rt_short_cue = `200`
  ) |> 
  ungroup() 

removal_clean <- removal_RT |> 
  right_join(removal_recall) |> 
  full_join(vars03_unp) |> 
  left_join(vars11_dems) |> 
  left_join(vars12_att) |> 
  select(-starts_with("chaos"), -ends_with("missing"), -c(quic_monitoring_mean, quic_par_predict_mean, quic_par_env_mean, quic_phys_env_mean, quic_safety_mean, attention_check_sum, attention_interrupt_sum, att_check01, change_env_mean), starts_with("sd_")) |> 
  rename(quic_mean = quic_total_mean, perc_unp_mean = pcunp_mean) |> 
  mutate(
    study_type = ifelse(str_detect(id, "L_"), "lab", "online")
  ) |> 
  select(id, study_type, everything()) |> 
  sjlabelled::var_labels(
    rt_long_cue = "REMOVAL TASK: Mean updating response time on trials with a long updating cue (1500ms)",
    rt_short_cue = "REMOVAL TASK: Mean updating response time on trials with a short updating cue (200ms)",
    recall_accuracy = "REMOVAL TASK: Overall accuracy on the recall of the final three letters at the end of a trial",
    quic_mean = "Mean score on the QUIC unpredictability questionnaire",
    perc_unp_mean = "Mean score on the Perceived Unpredictability questionnaire",
    dems_edu = "Highest obtained education of participant",
    study_type = "Assessment location; Lab or Online"
  ) 

removal_codebook <- create_codebook(removal_clean)

write_csv(removal_clean, "2023_sem1_WM/data/removal_data_clean.csv")
openxlsx::write.xlsx(removal_codebook, "2023_sem1_WM/data/removal_codebook.xlsx")

