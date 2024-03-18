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

# Self-report -------------------------------------------------------------

## Non-recoded standard deviations in item responses ----

study_data <- response_sd(study_data, "stai")
study_data <- response_sd(study_data, "chaos")
study_data <- response_sd(study_data, "quic")
study_data <- response_sd(study_data, "violence")
study_data <- response_sd(study_data, "ses")
study_data <- response_sd(study_data, "fos")
study_data <- response_sd(study_data, "depression")


## meta data ----

vars01_meta <- 
  study_data %>% 
  rename(
    meta_duration       = `duration (in seconds)`,
    meta_start          = startdate,
    meta_end            = enddate,
    meta_recorded       = recordeddate,
    meta_finished       = finished,
    meta_captcha        = q_recaptchascore,
    meta_feedback       = feedback
  ) %>%
  separate(meta_resolution, into = c("meta_resolution_width", "meta_resolution_height"), sep = "x") %>%
  mutate(
    meta_study_mode             = ifelse(str_detect(id, "O"), "Online", "Lab"),
    meta_resolution_height = as.numeric(meta_resolution_height),
    meta_resolution_width  = as.numeric(meta_resolution_width),
    meta_resolution_ratio  = meta_resolution_width / meta_resolution_height) %>%
  mutate(
    meta_task_duration        = timestamp_tasks - timestamp_consent,
    meta_state_duration       = timestamp_state - timestamp_tasks,
    meta_ace_duration         = timestamp_ace - timestamp_state,
    meta_temp_orient_duration = timestamp_temp_orient - timestamp_ace,
    meta_psychopath_duration  = timestamp_psychopath - timestamp_temp_orient,
    meta_dems_duration        = timestamp_dems - timestamp_psychopath,
    
    meta_task_duration_z        = scale(meta_task_duration) %>% as.numeric(),
    meta_state_duration_z       = scale(meta_state_duration) %>% as.numeric(),
    meta_ace_duration_z         = scale(meta_ace_duration) %>% as.numeric(),
    meta_temp_orient_duration_z = scale(meta_temp_orient_duration) %>% as.numeric(),
    meta_psychopath_duration_z  = scale(meta_psychopath_duration) %>% as.numeric(),
    meta_dems_duration_z        = scale(meta_dems_duration) %>% as.numeric()
  ) %>% 
  mutate(meta_feedback = str_replace_all(meta_feedback, "\\.|\\,|\\n|\\!|\\-|\\;|\\\\|\\<3|\\(|\\)", " ")) |> 
  select(id, starts_with("meta_"))


## Current state ----

vars02_state <- 
  study_data %>%
  select(id, starts_with('stai_s')) %>%
  # Recode variables
  mutate(across(matches("stai_s(01|02|05|08|10|11|15|16|19|20)"), ~ 5 - .)) %>%
  # Tidy labels
  mutate(across(matches("stai_s"), ~set_label(x = ., label = str_replace_all(get_label(.), "^.*-\\s", "")))) %>%
  mutate(across(matches("stai_s(01|02|05|08|10|11|15|16|19|20)"), ~set_label(x = ., label = str_c(get_label(.), " (recoded)")))) %>%
  # Create composites
  mutate(
    stai_s_mean = across(matches("stai_s"))  %>% rowMeans(., na.rm = T),
    stai_s_missing = across(matches("stai_s")) %>% is.na() %>% rowSums(., na.rm = T)
  ) %>%
  var_labels(
    stai_s_mean    = "Mean score of the State-Trait Anxiety Scale (state subscale). Higher scores mean more state anxiety.",
  )



## Unpredictability ----

vars03_unp <- 
  study_data %>% 
  select(id,starts_with(c("chaos", "unp", "quic", "change_env")), sd_quic, sd_chaos) %>% 
  # Recode variables
  mutate(across(matches("chaos(01|02|04|07|12|14|15)"), ~ 6 - .)) %>%
  mutate(across(matches("quic(01|02|03|04|05|06|07|08|09|11|14|16|22|32)"), ~ 6 - .)) %>%
  # Tidy labels
  mutate(across(matches("(quic\\d\\d)|(chaos\\d\\d)|change_env(\\d\\d)|(unp\\d\\d)"), ~set_label(x = ., label = str_replace_all(get_label(.), "^.*-\\s", "")))) %>%
  mutate(across(matches("(chaos(01|02|04|12|14|15))|(quic(01|02|03|04|05|06|07|08|09|11|14|16|22|32))"), ~set_label(x = ., label = str_c(get_label(.), " (recoded)")))) %>%
  # Create composites
  mutate(
    pcunp_mean               = across(matches("unp\\d\\d")) %>% rowMeans(., na.rm = T),
    pcunp_missing            = across(matches("unp\\d\\d")) %>% is.na() %>% rowSums(., na.rm = T),
    
    change_env_mean          = across(matches("change_env\\d\\d")) %>% rowMeans(., na.rm = T),
    change_env_missing       = across(matches("change_env\\d\\d")) %>% is.na() %>% rowSums(., na.rm = T),
    
    chaos_mean               = across(matches("chaos\\d\\d")) %>% rowMeans(., na.rm = T),
    chaos_missing            = across(matches("chaos\\d\\d")) %>% is.na() %>% rowSums(., na.rm = T),
    
    quic_monitoring_mean     = across(matches("quic(01|02|03|04|05|06|07|08|09)")) %>%  rowMeans(., na.rm = T),
    quic_monitoring_missing  = across(matches("quic(01|02|03|04|05|06|07|08|09)")) %>% is.na() %>% rowSums(., na.rm = T),
    
    quic_par_predict_mean    = across(matches("quic(10|11|12|13|14|15|16|17|18|19|20|21)")) %>% rowMeans(., na.rm = T),
    quic_par_predict_missing = across(matches("quic(10|11|12|13|14|15|16|17|18|19|20|21)")) %>% is.na() %>% rowSums(., na.rm = T),
    
    quic_par_env_mean        = across(matches("quic(22|23|24|25|26|27)")) %>% rowMeans(., na.rm = T),
    quic_par_env_missing     = across(matches("quic(22|23|24|25|26|27)")) %>% is.na() %>% rowSums(., na.rm = T),
    
    quic_phys_env_mean       = across(matches("quic(28|29|30|31|32|33|34)")) %>% rowMeans(., na.rm = T),
    quic_phys_env_missing    = across(matches("quic(28|29|30|31|32|33|34)")) %>% is.na() %>% rowSums(., na.rm = T),
    
    quic_safety_mean         = across(matches("quic(35|36|37)")) %>% rowMeans(., na.rm = T),
    quic_safety_missing      = across(matches("quic(35|36|37)")) %>% is.na() %>% rowSums(., na.rm = T),
    
    quic_total_mean          = across(matches("quic\\d\\d")) %>% rowMeans(., na.rm = T),
    quic_total_missing       = across(matches("quic\\d\\d")) %>% is.na() %>% rowSums(., na.rm = T)
    
  ) %>%
  var_labels(
    pcunp_mean                = "Mean score of the Perceived Unpredictability Scale. Higher scores mean more perceived unpredictability prior to age 13.",
    chaos_mean                = "Mean score of the Confusion, Hubbub, and Order Scale (CHAOS; adapted). Higher scores mean more household chaos prior to age 13.",
    quic_monitoring_mean      = "Mean scores of the 'Parental Monitoring and Involvement' subscale of the Questionnaire of Unpredictability in Childhood (QUIC; adapted). 
                                 Higher scores mean more unpredictability prior to age 13.",
    quic_par_predict_mean     = "Mean scores of the 'Parental Predictability' subscale of the Questionnaire of Unpredictability in Childhood (QUIC; adapted). 
                                 Higher scores mean more unpredictability prior to age 13.",
    quic_par_env_mean         = "Mean scores of the 'Parental Environment' subscale of the Questionnaire of Unpredictability in Childhood (QUIC; adapted). 
                                 Higher scores mean more unpredictability prior to age 13.",
    quic_phys_env_mean        = "Mean scores of the 'Physical Environment' subscale of the Questionnaire of Unpredictability in Childhood (QUIC; adapted). 
                                 Higher scores mean more unpredictability prior to age 13.",
    quic_safety_mean          = "Mean scores of the 'Safety and Security' subscale of the Questionnaire of Unpredictability in Childhood (QUIC; adapted). 
                                 Higher scores mean more unpredictability prior to age 13.",
    quic_total_mean           = "Mean score of all items of the Questionnaire of Unpredictability in Childhood (QUIC; adapted). 
                                 Higher scores mean more unpredictability prior to age 13."
  ) 


## Violence ----

vars04_vio <- 
  study_data %>% 
  select(id,matches("violence\\d\\d"), aces_fighting1, aces_fighting2, sd_violence) %>% 
  # Recode variables
  mutate(across(matches("violence(01|03)"), ~ 6 - .)) %>%
  # Tidy labels
  mutate(across(matches("violence\\d\\d|aces_fighting\\d"), ~set_label(x = ., label = str_replace_all(get_label(.), "^.*-\\s", "")))) %>%
  mutate(across(matches("violence(01|03)"), ~set_label(x = ., label = str_c(get_label(.), " (recoded)")))) %>%
  # Create composites
  mutate(
    nvs_mean           = across(matches("violence\\d\\d$")) %>% rowMeans(., na.rm = T),
    nvs_missing        = across(matches("violence\\d\\d$")) %>% is.na() %>% rowSums(., na.rm = T),
    fighting_mean      = across(matches("aces_fighting\\d")) %>% rowMeans(., na.rm = T),
    vio_comp           = across(c(nvs_mean, fighting_mean)) %>% scale %>% rowMeans(., na.rm = F)
  ) %>%
  var_labels(
    nvs_mean           = "Mean score of the Neighborhood Violence Scale (NVS). Higher scores mean more neighborhood violence prior to age 13.",
    fighting_mean      = "Mean score of the two fighting exposure items. Higher scores mean more fighting exposure prior to age 13.",
    vio_comp           = "Violence Exposure: Composite measure consisting of the unweighted average of the NVS (nvs_mean) and fighting average (fighting_mean).
                          Both measures were standardized before averaging. Higher scores mean more violence exposure prior to age 13."
  ) 


## SES ----

vars05_ses <- 
  study_data %>% 
  select(id,matches("ses\\d\\d"), dems_edu_first, dems_edu_second, sd_ses) %>% 
  # Recode Variables
  mutate(across(matches("ses07"), ~ 6 - .)) %>%
  # Tidy labels
  mutate(across(matches("(ses\\d\\d)"), ~set_label(x = ., label = str_replace_all(get_label(.), "^.*-\\s", "")))) %>%
  mutate(across(matches("ses07"), ~set_label(x = ., label = str_c(get_label(.), " (recoded)")))) %>% 
  mutate(
    edu_caregivers          = across(c(dems_edu_first, dems_edu_second)) %>% rowMeans(., na.rm = T),
    ses_mean                = across(starts_with("ses"))%>% rowMeans(., na.rm = T)
  ) 


## Bullying ----

vars06_bully <- 
  study_data |> 
  select(id, matches('bullying')) |> 
  mutate(
    bullying_primary_sum   = across(contains("primary")) |> rowSums(x = _, na.rm = T),
    bullying_secondary_sum = across(contains("secondary")) |> rowSums(x = _, na.rm = T),
    bullying_overall_sum   = across(matches("(primary_|secondary_)\\d")) |> rowSums(x = _, na.rm = T)
  ) |> 
  mutate(across(matches("bullying"), ~set_label(x = ., label = str_replace_all(get_label(.), "^.*-\\s", "")))) %>%
  var_labels(
    bullying_primary_sum             = "Sum-score of all bullying items for primary school",
    bullying_secondary_sum              = "Sum-score of all bullying items for secondary school",
    bullying_overall_sum                  = "Sum-score of all bullying items across primary and secondary school"
  )


## Family Psychopathology ----

vars07_psycho <- 
  study_data |>
  select(id, starts_with('psycho'), starts_with("psych"), divorce_occurred, divorce_age, divorce01, divorce02, divorce03, divorce04) %>%
  mutate(across(-id, ~ifelse(. == 99, NA, .))) |> 
  mutate(across(matches("psych1"), 
                ~case_when(
                  . == 1  ~ 0,
                  . == 2 ~ 1,
                  . == 3 ~ 2
                )),
         across(matches('psycho2(01|03|05|07|09|11)'), ~5 - .)
  ) |> 
  mutate(
    fam_psych_sum = across(matches('psych1')) |> rowSums(x = _, na.rm = T),
    fam_func_mean = across(matches('psycho2')) |> rowMeans(x = _, na.rm = T)
  ) |> 
  select(id, fam_psych_sum, fam_func_mean, divorce_occurred, divorce_age, divorce01, divorce02, divorce03, divorce04,) |> 
  var_labels(
    fam_psych_sum             = "Sum-score over the family psychopathology items (first questionnaire). Each item was coded as follows: 0 = no; 1 = yes; 2 = yes, a lot",
    fam_func_mean             = "Average over the family functioning items",
    divorce_occurred          = "1 = yes, 2 = no",
    divorce_age               = "if divorce_occurred = 1, participant's age at which divorce occurred.",
    divorce01                 = "Did you feel like there was no trouble talking about issues concerning you as a child?",
    divorce02                 = "Did you feel like your parents could both participate in important family events without creating a bad atmosphere?",
    divorce03                 = "Did you feel like your parents were generally good at dealing with conflicts between them?",
    divorce04                 = "Did you feel like your parents respected each other as a person?",
    
  )

## Temporal Orientation ----

vars08_temp_orientation <- 
  study_data %>% 
  select(id,starts_with(c('impuls', 'fos')), sd_fos) %>% 
  # Recode variables
  mutate(across(matches("fos(01|03|04|06|08|11|13|15)"), ~ 6 - .)) %>%
  # Tidy labels
  mutate(across(matches("(fos\\d\\d)|impuls\\d\\d"), ~set_label(x = ., label = str_replace_all(get_label(.), "^.*-\\s", "")))) %>%
  mutate(across(matches("fos(01|03|04|06|08|11|13|15)"), ~set_label(x = ., label = str_c(get_label(.), " (recoded)")))) %>%
  # Create composites
  mutate(
    impuls_mean         = across(matches("impuls")) %>% rowMeans(., na.rm = T),
    impuls_missing      = across(matches("impuls")) %>% is.na() %>% rowSums(., na.rm = T),
    
    fos_pa_mean         = across(matches("fos(01|06|07|12|13)")) %>% rowMeans(., na.rm = T),
    fos_pa_missing      = across(matches("fos(01|06|07|12|13)")) %>% is.na() %>% rowSums(., na.rm = T),
    
    fos_tp_mean         = across(matches("fos(02|05|08|11|14)")) %>% rowMeans(., na.rm = T),
    fos_tp_missing      = across(matches("fos(02|05|08|11|14)")) %>% is.na() %>% rowSums(., na.rm = T),
    
    fos_fc_mean         = across(matches("fos(03|04|09|10|15)")) %>% rowMeans(., na.rm = T),
    fos_fc_missing      = across(matches("fos(03|04|09|10|15)")) %>% is.na() %>% rowSums(., na.rm = T),
    
    fos_fo_mean         = across(matches("fos\\d\\d")) %>% rowMeans(., na.rm = T),
    fos_fo_missing      = across(matches("fos\\d\\d")) %>% is.na() %>% rowSums(., na.rm = T)
  ) %>%
  var_labels(
    impuls_mean = "Mean score of the 'Motor Impulsivity' subscale of the Barrett Impulsivity Scale (BIS). Higher scores mean more impulsivity.",
    fos_pa_mean = "Mean score of the 'Planning Ahead' subscale of the Future Orientation Scale (FOS). Higher scores mean more planning ahead.",
    fos_tp_mean = "Mean score of the 'Time Perspective' subscale of the Future Orientation Scale (FOS). Higher scores mean longer time perspective.",
    fos_fc_mean = "Mean score of the 'Anticipation of Future Consequences' subscale of the Future Orientation Scale (FOS). Higher scores mean more anticipation.",
    fos_fo_mean = "Mean score of the total Future Orientation Scale (FOS). Higher scores mean more future orientation."
  )

## Depressive Symptoms ----

vars09_dep <- 
  study_data %>% 
  select(id, matches("depression\\d\\d$"), sd_depression) %>% 
  # Recode variables
  mutate(across(matches("depression(04|08|12|16)"), ~ 5 - .)) %>%
  # Tidy labels
  mutate(across(matches("(depression\\d\\d)"), ~set_label(x = ., label = str_replace_all(get_label(.), "^.*-\\s", "")))) %>%
  mutate(across(matches("depression(04|08|12|16)"), ~set_label(x = ., label = str_c(get_label(.), " (recoded)")))) %>%
  # Create composites
  mutate(
    depression_mean = across(matches("depression\\d\\d")) %>% rowMeans(., na.rm = T),
    impuls_missing  = across(matches("depression\\d\\d")) %>% is.na() %>% rowSums(., na.rm = T)
  ) %>%
  var_labels(
    depression_mean = "Mean score of the Center for Epidemiologic Studies Depression Scale (CESD). Higher scores mean more depressive symptoms."
  )

## Family Composition ----

vars10_fam_comp <- 
  study_data %>%
  select(id, starts_with("fam_composition")) %>%
  mutate(across(contains("fam_composition"), as.character)) %>%
  pivot_longer(-id, names_to = "option", values_to = "value") %>%
  drop_na(value) %>%
  mutate(
    fam_composition = case_when(
      option == "fam_composition_1" ~ "I lived with my mother, but not father, most of the time.",
      option == "fam_composition_2" ~ "I lived with my father, but not mother, most of the time.",
      option == "fam_composition_3" ~ "I lived with my mother and father an equal amount of time (joint custody)",
      option == "fam_composition_4" ~ "I lived with my extended family on mother's side (grandparents, aunts ,uncles, cousins)",
      option == "fam_composition_5" ~ "I lived with my extended family on father's side (grandparents, aunts ,uncles, cousins)",
      option == "fam_composition_6" ~ "I was in foster care most of the time.",
      option == "fam_composition_9_text" ~ str_c("Other, namely:", value),
      option == "fam_composition_10" ~ "Prefer not to say.",
    )
  ) %>%
  group_by(id) %>%
  summarise(family_composition = str_c(fam_composition, collapse = " & ")) %>%
  mutate(fam_composition_multiple = ifelse(str_detect(family_composition, "\\s&\\s"), 1, 0)) 

## Demographics ----

vars11_dems <- 
  study_data %>% 
  select(id, matches("dems_(age|sex|gender|born|english|class_current|edu|occupation|income)"), ptsd, adhd) |> 
  mutate(dems_edu = ifelse(str_detect(id, "L_"), 3, dems_edu)) |> 
  var_labels(
    dems_age = "Participant age in years",
    dems_sex = "Participant sex. 0 = Male; 1 = Female; 2 = Intersex; 3 = Prefer not to say",
    dems_gender = "Participant gender. 1 = Man; 2 = Woman; 3 = Non-binary; 4 = Other; 5 = Prefer not to say",
    dems_edu_first = "Level of education of first caregiver",
    dems_edu_second = "Level of education of second caregiver",
    adhd = "Have you been diagnosed with attention deficit hyperactivity disorder (ADHD)? 0 = no, 1 = yes",
    ptsd = "Have you been diagnosed with Post-Traumatic Stress Disorder (PTSD)? 0 = no, 1 = yes"
  )


## Attention ----

vars12_att <- 
  study_data %>% 
  select(id,starts_with("att_check"), att_getup, att_interrupted, att_noise) %>% 
  mutate(
    attention_check_sum     = (ifelse(att_check01 == 5, 0, 1)),
    attention_interrupt_sum = att_getup + att_interrupted
  ) |> 
  var_labels(
    att_getup = "Did the participant ever get up during the study? 0 = no, 1 = yes",
    att_interrupted = "Was the participant ever interrupted during the study? 0 = no, 1 = yes",
    att_noise = "How noisy was the environment? Scale from 1 (not at all noisy) to 5 (very noisy)"
  )

## Admin ----

vars13_admin <- 
  study_data %>% 
  select(ends_with("id"))



# Attention Tasks ---------------------------------------------------------

## Flanker data ----

round0_remember_eco <- c('removal/stimuli/practice/apple03a.png','removal/stimuli/practice/cherrytomato02.png','removal/stimuli/practice/broccoli01b.png','removal/stimuli/practice/cauliflower02.png')
round0_forget_eco <- c('removal/stimuli/practice/breadslice.png','removal/stimuli/practice/cabbage.png','removal/stimuli/practice/banana04b.png','removal/stimuli/practice/cookie02a.png')

round1_remember_eco <- c('removal/stimuli/BOSS/threeholepunch03.png','removal/stimuli/BOSS/pencilsharpener02a.png','removal/stimuli/BOSS/tuque03a.png','removal/stimuli/BOSS/grater01a.png','removal/stimuli/BOSS/overalls.png')
round1_forget_eco <- c('removal/stimuli/BOSS/spatula03.png','removal/stimuli/BOSS/qtip.png','removal/stimuli/BOSS/manshoe.png','removal/stimuli/BOSS/makeupbrush04.png','removal/stimuli/BOSS/spoon01.png')

round2_remember_eco <- c('removal/stimuli/BOSS/sock01a.png','removal/stimuli/BOSS/plate01b.png','removal/stimuli/BOSS/highheelshoe01.png','removal/stimuli/BOSS/shirt01.png','removal/stimuli/BOSS/moccasin.png')
round2_forget_eco <- c('removal/stimuli/BOSS/measuringcup01.png','removal/stimuli/BOSS/toaster01.png','removal/stimuli/BOSS/remotecontrol04.png','removal/stimuli/BOSS/alarmclock01.png','removal/stimuli/BOSS/soapdispenser01.png')

round3_remember_eco <- c('removal/stimuli/BOSS/computermouse06.png','removal/stimuli/BOSS/shorts01.png','removal/stimuli/BOSS/slipper01b.png','removal/stimuli/BOSS/cd.png','removal/stimuli/BOSS/foodprocessor.png')
round3_forget_eco <- c('removal/stimuli/BOSS/pencil01.png','removal/stimuli/BOSS/mechanicalpencil02.png','removal/stimuli/BOSS/tupperware03a.png','removal/stimuli/BOSS/laptop01a.png','removal/stimuli/BOSS/cap01a.png')

round4_remember_eco <- c('removal/stimuli/BOSS/ruler04.png','removal/stimuli/BOSS/ramekin01.png','removal/stimuli/BOSS/coffeepot03a.png','removal/stimuli/BOSS/fryingpan02a.png','removal/stimuli/BOSS/strainer02.png')
round4_forget_eco <- c('removal/stimuli/BOSS/highlighter02b.png','removal/stimuli/BOSS/garlicpress02a.png','removal/stimuli/BOSS/pitcher02b.png','removal/stimuli/BOSS/bleachbottle.png','removal/stimuli/BOSS/bowl01.png')

round0_remember_abs <- c('R', 'G', 'W', 'V')
round0_forget_abs <- c('N', 'A', 'P', 'F')

round1_remember_abs <- c('E', 'Y', 'N', 'I', 'R')
round1_forget_abs <- c('G', 'C', 'H', 'U', 'K')

round2_remember_abs <- c('C', 'U', 'L', 'D', 'G')
round2_forget_abs <- c('A', 'T', 'I', 'O', 'W')

round3_remember_abs <- c('S', 'R', 'C', 'U', 'Y')
round3_forget_abs <- c('G', 'T', 'J', 'F', 'Q')

round4_remember_abs <- c('Y', 'U', 'L', 'M', 'G')
round4_forget_abs <- c('C', 'B', 'W', 'S', 'R')



removal_data_eco <- 
  study_data_online %>% 
  select(id, data_removal_eco) |> 
  filter(!is.na(data_removal_eco)) |> 
  mutate(across(c(matches("data_removal_eco")), ~map_if(., .p =  ~!is.na(.x), .f = jsonlite::fromJSON))) |> 
  unnest(data_removal_eco) |> 
  select(id, rt, response, variable, task, round) |> 
  filter(variable == "recall") |> 
  mutate(
    removal_hits = pmap_dbl(list(id,rt,response,variable,task,round), function(id,rt,response,variable,task,round){
      x = unlist(response$Recall) |>
        str_extract_all(string = _, pattern = "removal.*\\.png") %in% c(round0_remember_eco,round1_remember_eco,round2_remember_eco,round3_remember_eco,round4_remember_eco) |> 
        sum()
    }),
    removal_fa = pmap_dbl(list(id,rt,response,variable,task,round), function(id,rt,response,variable,task,round){
      x = unlist(response$Recall) |>
        str_extract_all(string = _, pattern = "removal.*\\.png") %in% c(round0_forget_eco,round1_forget_eco,round2_forget_eco,round3_forget_eco,round4_forget_eco) |> 
        sum()
    })
  ) |> 
  filter(round != 0) |> 
  group_by(id) |> 
  summarise(
    removal_hits_eco = ifelse(sum(removal_hits) == 20, 0.975, sum(removal_hits) / 20),
    removal_fa_eco   = ifelse(sum(removal_fa) == 0, 0.025, sum(removal_fa) / 20)
  ) |> 
  mutate(
    removal_hits_eco_z  = qnorm(p = removal_hits_eco),
    removal_fa_eco_z = qnorm(p = removal_fa_eco),
    removal_dprime_eco = removal_hits_eco_z - removal_fa_eco_z
  ) |> 
  var_labels(
    removal_hits_eco   = "Ecological Removal: raw (unstandardized) hit rate",
    removal_fa_eco     = "Ecological Removal: raw (unstandardized) false alarm rate",
    removal_hits_eco_z = "Ecological Removal: Z-transformed hit rate",
    removal_fa_eco_z   = "Ecological Removal: Z-transformed false alarm rate",
    removal_dprime_eco = "Ecological Removal: D-prime (removal_hits_abs_z - removal_fa_abs_z)"
  )

removal_data_abs <- 
  study_data_online %>% 
  select(id, data_removal_abs) |> 
  filter(!is.na(data_removal_abs)) |> 
  mutate(across(c(matches("data_removal_abs")), ~map_if(., .p =  ~!is.na(.x), .f = jsonlite::fromJSON))) |> 
  unnest(data_removal_abs) |> 
  select(id, rt, response, variable, task, round) |> 
  filter(variable == "recall") |>
  group_by(id, round) |> 
  mutate(
    removal_hits = pmap_dbl(list(id,rt,response,variable,task,round), function(id,rt,response,variable,task,round){
      if(round == 0) x = response |> unlist(x = _) %in% c(round0_remember_abs) |> sum()
      if(round == 1) x = response |> unlist(x = _) %in% c(round1_remember_abs) |> sum()
      if(round == 2) x = response |> unlist(x = _) %in% c(round2_remember_abs) |> sum()
      if(round == 3) x = response |> unlist(x = _) %in% c(round3_remember_abs) |> sum()
      if(round == 4) x = response |> unlist(x = _) %in% c(round4_remember_abs) |> sum()
      x
    }),
    removal_fa = pmap_dbl(list(id,rt,response,variable,task,round), function(id,rt,response,variable,task,round){
      if(round == 0) x = response |> unlist(x = _) %in% c(round0_forget_abs) |> sum()
      if(round == 1) x = response |> unlist(x = _) %in% c(round1_forget_abs) |> sum()
      if(round == 2) x = response |> unlist(x = _) %in% c(round2_forget_abs) |> sum()
      if(round == 3) x = response |> unlist(x = _) %in% c(round3_forget_abs) |> sum()
      if(round == 4) x = response |> unlist(x = _) %in% c(round4_forget_abs) |> sum()
      x
    })
  ) |> 
  filter(round != "0") |> 
  group_by(id) |> 
  summarise(
    removal_hits_abs = ifelse(sum(removal_hits) == 20, 0.975, sum(removal_hits) / 20),
    removal_fa_abs   = ifelse(sum(removal_fa) == 0, 0.025, sum(removal_fa) / 20)
  ) |> 
  mutate(
    removal_hits_abs_z  = qnorm(p = removal_hits_abs),
    removal_fa_abs_z = qnorm(p = removal_fa_abs),
    removal_dprime_abs = removal_hits_abs_z - removal_fa_abs_z
  ) |> 
  var_labels(
    removal_hits_abs   = "Abstract Removal: raw (unstandardized) hit rate",
    removal_fa_abs     = "Abstract Removal: raw (unstandardized) false alarm rate",
    removal_hits_abs_z = "Abstract Removal: Z-transformed hit rate",
    removal_fa_abs_z   = "Abstract Removal: Z-transformed false alarm rate",
    removal_dprime_abs = "Abstract Removal: D-prime (removal_hits_abs_z - removal_fa_abs_z)"
  )

## Shifting Task ----

shifting_data_abs_long <- 
  study_data |> 
  select(id, data_shifting_abs1, data_shifting_abs2) |> 
  filter(!is.na(data_shifting_abs1), !is.na(data_shifting_abs2)) |> 
  mutate(across(c(matches("data_shifting_abs")), ~map_if(., .p =  ~!is.na(.x), .f = jsonlite::fromJSON))) |> 
  mutate(data_shifting_abs = pmap(list(data_shifting_abs1, data_shifting_abs2), function(data_shifting_abs1, data_shifting_abs2) {
    bind_rows(data_shifting_abs1, data_shifting_abs2)})) |> 
  unnest(data_shifting_abs) |> 
  select(id, rt, correct, response, variable, task, rule, type) |> 
  group_by(id) |> 
  mutate(rt_lag_correct = ifelse(lag(correct)==TRUE, T, F)) |> 
  filter(type!="first") |> 
  mutate(
    rt_fast  = ifelse(rt>200, T, F),
    rt_slow  = ifelse(rt<5000, T, F),
    rt_z     = ifelse(rt_fast & rt_slow & rt_lag_correct, rt, NA) %>% scale() %>% as.numeric(),
    rt_z     = ifelse(rt_z < 3,T,F),
    rt_keep  = ifelse(correct==TRUE & rt_fast & rt_slow & rt_z & rt_lag_correct,T,F),
  ) |> 
  var_labels(
    # All trials
    id = "Participant identifier",
    rt = "Response time (in seconds)",
    correct = "Correct or incorrect response",
    response = "Response given by participant (left or right arrow key)",
    variable = "Trial type",
    rule = "Task rule on current trial: categorize based on color or shape",
    type = "Task type relative to previous trial: repeat same rule or switch to other rule",
    rt_lag_correct = "TRUE if response on previous trial was correct, FALSE if response on previous trial was incorrect. If FALSE, current trial should be removed from analyses",
    rt_fast = "TRUE if current trial is a fast outlier (<200 ms), FALSE if not an outlier",
    rt_slow = "TRUE if current trial is a slow outlier (>5000ms), FALSE if not an outlier",
    rt_z = "TRUE if response in current trial is more than 3 SD above the participant's mean response time, FALSE if response is within 3 SD.",
    rt_keep = "Based on the previous filtering variables (rt_*), should the current trial be removed. TRUE if it should be kept, FALSE if it should be excluded."
  )

shifting_abs_data_sum <- shifting_data_abs_long |> 
  filter(rt_keep == TRUE) |> 
  group_by(id) |> 
  summarize(
    # All trials
    shifting_abs_total_rt            = mean(rt,na.rm=T),
    shifting_abs_correct       = sum(correct==TRUE, na.rm=T),
    shifting_abs_valid_trials  = ifelse(rt_keep, 1, 0) %>% sum(),
    # Repeat trials
    shifting_abs_repeat_rt           = ifelse(type == "repeat", rt, NA) %>% mean(na.rm=T),
    shifting_abs_repeat_correct      = sum(correct==TRUE & type=="repeat", na.rm=T),
    shifting_abs_repeat_valid_trials = ifelse(type == "repeat" & rt_keep, 1, 0) %>% sum(),
    # Switch trials
    shifting_abs_switch_rt           = ifelse(type == "switch", rt, NA) %>% mean(na.rm=T),
    shifting_abs_switch_correct      = sum(correct==TRUE & type=="switch", na.rm=T),
    shifting_abs_switch_valid_trials = ifelse(type == "switch" & rt_keep,1,0) %>% sum(),
    # Switch cost
    shifting_abs_switch_cost         = shifting_abs_switch_rt - shifting_abs_repeat_rt
    
  ) |>
  var_labels(
    # All trials
    shifting_abs_total_rt            = "Abstract Shifting: Mean reaction time for all trials (ms)",
    shifting_abs_correct             = "Abstract Shifting: Total number of correct responses across all trials",
    shifting_abs_valid_trials        = "Abstract Shifting: Number of **valid** trials completed",
    # Repeat trials
    shifting_abs_repeat_rt           = "Abstract Shifting: Mean reaction time for all 'repeat' trials (ms)",
    shifting_abs_repeat_correct      = "Abstract Shifting: Number of 'repeat' trials with a correct response",
    shifting_abs_repeat_valid_trials = "Abstract Shifting: Number of **valid** 'repeat' trials",
    # Switch trials
    shifting_abs_switch_rt           = "Abstract Shifting: Mean reaction time for all 'switch' trials (ms)",
    shifting_abs_switch_correct      = "Abstract Shifting: Number of 'switch' trials with a correct response",
    shifting_abs_switch_valid_trials = "Abstract Shifting: Number of **valid** 'switch' trials",
    # Switch Cost
    shifting_abs_switch_cost = "Abstract Shifting: The difference between the average reaction time for **valid** switch trials and average reaction time for **valid** repeat trials (ms)"
  )



shifting_data_eco_long <- 
  study_data |> 
  select(id, data_shifting_eco1, data_shifting_eco2) |> 
  filter(!is.na(data_shifting_eco1), !is.na(data_shifting_eco2)) |> 
  mutate(across(c(matches("data_shifting_eco")), ~map_if(., .p =  ~!is.na(.x), .f = jsonlite::fromJSON))) |> 
  mutate(data_shifting_eco = pmap(list(data_shifting_eco1, data_shifting_eco2), function(data_shifting_eco1, data_shifting_eco2) {
    bind_rows(data_shifting_eco1, data_shifting_eco2)})) |> 
  unnest(data_shifting_eco) |> 
  mutate(
    emotion = ifelse(str_detect(stimulus, "066_y_m_a_b\\.jpg|140_y_f_a_a\\.jpg|CFD-WF-007-029-A\\.jpg|CFD-WM-024-010-A\\.jpg"), "angry", "happy")
  ) |> 
  select(id, rt, correct, response, variable, task, rule, type, emotion) |> 
  group_by(id) |> 
  mutate(rt_lag_correct = ifelse(lag(correct)==TRUE, T, F)) |> 
  filter(type!="first") |> 
  mutate(
    rt_fast  = ifelse(rt>200, T, F),
    rt_slow  = ifelse(rt<5000, T, F),
    rt_z     = ifelse(rt_fast & rt_slow & rt_lag_correct, rt, NA) %>% scale() %>% as.numeric(),
    rt_z     = ifelse(rt_z < 3,T,F),
    rt_keep  = ifelse(correct==TRUE & rt_fast & rt_slow & rt_z & rt_lag_correct,T,F),
  ) |> 
  var_labels(
    # All trials
    id = "Participant identifier",
    rt = "Response time (in seconds)",
    correct = "Correct or incorrect response",
    response = "Response given by participant (left or right arrow key)",
    variable = "Trial type",
    rule = "Task rule on current trial: categorize based on color or shape",
    type = "Task type relative to previous trial: repeat same rule or switch to other rule",
    rt_lag_correct = "TRUE if response on previous trial was correct, FALSE if response on previous trial was incorrect. If FALSE, current trial should be removed from analyses",
    rt_fast = "TRUE if current trial is a fast outlier (<200 ms), FALSE if not an outlier",
    rt_slow = "TRUE if current trial is a slow outlier (>5000ms), FALSE if not an outlier",
    rt_z = "TRUE if response in current trial is more than 3 SD above the participant's mean response time, FALSE if response is within 3 SD.",
    rt_keep = "Based on the previous filtering variables (rt_*), should the current trial be removed. TRUE if it should be kept, FALSE if it should be excluded."
  )


shifting_eco_data_sum <- shifting_data_eco_long |> 
  filter(rt_keep == TRUE) |> 
  group_by(id) |> 
  summarize(
    # All trials
    # All trials
    shifting_eco_total_rt            = mean(rt,na.rm=T),
    shifting_eco_correct       = sum(correct==TRUE, na.rm=T),
    shifting_eco_valid_trials  = ifelse(rt_keep, 1, 0) %>% sum(),
    # Repeat trials
    shifting_eco_repeat_rt           = ifelse(type == "repeat", rt, NA) %>% mean(na.rm=T),
    shifting_eco_repeat_correct      = sum(correct==TRUE & type=="repeat", na.rm=T),
    shifting_eco_repeat_valid_trials = ifelse(type == "repeat" & rt_keep, 1, 0) %>% sum(),
    # Switch trials
    shifting_eco_switch_rt           = ifelse(type == "switch", rt, NA) %>% mean(na.rm=T),
    shifting_eco_switch_correct      = sum(correct==TRUE & type=="switch", na.rm=T),
    shifting_eco_switch_valid_trials = ifelse(type == "switch" & rt_keep,1,0) %>% sum(),
    
    shifting_eco_angry_repeat_rt     = ifelse(type == "repeat" & emotion == "happy", rt, NA) %>% mean(na.rm = T),
    # Switch cost
    shifting_eco_switch_cost         = shifting_eco_switch_rt - shifting_eco_repeat_rt
  ) |>
  var_labels(
    # All trials
    shifting_eco_total_rt            = "Ecological Shifting: Mean reaction time for all trials (ms)",
    shifting_eco_correct             = "Ecological Shifting: Total number of correct responses across all trials",
    shifting_eco_valid_trials        = "Ecological Shifting: Number of **valid** trials completed",
    # Repeat trials
    shifting_eco_repeat_rt           = "Ecological Shifting: Mean reaction time for all 'repeat' trials (ms)",
    shifting_eco_repeat_correct      = "Ecological Shifting: Number of 'repeat' trials with a correct response",
    shifting_eco_repeat_valid_trials = "Ecological Shifting: Number of **valid** 'repeat' trials",
    # Switch trials
    shifting_eco_switch_rt           = "Ecological Shifting: Mean reaction time for all 'switch' trials (ms)",
    shifting_eco_switch_correct      = "Ecological Shifting: Number of 'switch' trials with a correct response",
    shifting_eco_switch_valid_trials = "Ecological Shifting: Number of **valid** 'switch' trials",
    
    shifting_eco_angry_repeat_rt     = "Ecological Shifting: Mean reaction time for all 'repeat trials with an angry face",
    # Switch Cost
    shifting_eco_switch_cost         = "Ecological Shifting: The difference between the average reaction time for **valid** switch trials and average reaction time for **valid** repeat trials (ms)"
  )

shifting_data <- full_join(shifting_abs_data_sum, shifting_eco_data_sum) |> 
  full_join(vars03_unp) |> 
  left_join(vars05_ses) |> 
  left_join(vars11_dems) |> 
  left_join(vars12_att) |> 
  select(-ends_with("missing"), -c(quic_monitoring_mean, quic_par_predict_mean, quic_par_env_mean, quic_phys_env_mean, quic_safety_mean, attention_check_sum, attention_interrupt_sum, att_check01, change_env_mean), -starts_with("sd_")) |> 
  rename(quic_mean = quic_total_mean, perc_unp_mean = pcunp_mean) |> 
  mutate(
    study_type = ifelse(str_detect(id, "L_"), "lab", "online")
  ) |> 
  select(id, study_type, everything()) 


shifting_codebook <- create_codebook(shifting_data) 


write_csv(shifting_data_eco_long, "2023_sem1_WM/data/shifting_data_eco_long.csv")
write_csv(shifting_data_abs_long, "2023_sem1_WM/data/shifting_data_abs_long.csv")
write_csv(shifting_data, "2023_sem1_WM/data/shifting_data.csv")
openxlsx::write.xlsx(shifting_codebook, "2023_sem1_WM/data/shifting_codebook.xlsx")




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

