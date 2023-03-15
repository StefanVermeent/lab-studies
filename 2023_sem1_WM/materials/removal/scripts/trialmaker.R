library(tidyverse)
set.seed(38458)

round_length <- 10

create_trial <- function(stim, round_length, version, round){
  tibble(
    stim      = sample(stim, round_length, replace = F),
    version   = version,
    round     = round,
    probetype = sample(probes, round_length, replace = F)
  ) |> 
    glue::glue_data("{{stim: '{stim}', version: '{version}', round: '{round}', probetype: '{probetype}'}},")
}

extract_images <- function(round){
  str_extract(round, "'.*\\.png'") |> 
    as_tibble() |> 
    arrange(value) |> 
    unlist() |> 
    paste0(collapse = ',')
}


# Abstract stimuli --------------------------------------------------------

stim_abs <- stringr::str_to_upper(letters)
probes <- c(rep('REMEMBER',round_length/2), rep('FORGET', round_length/2))



extract_letters <- function(round){
  str_extract(round, "'[A-Z]'") |> 
    as_tibble() |> 
    arrange(value) |> 
    unlist() |> 
    paste0(collapse = ',')
}


# Abstract trials
abs_round1 <- create_trial(stim_abs, round_length, "abs", "1")
abs_round2 <- create_trial(stim_abs, round_length, "abs", "2")
abs_round3 <- create_trial(stim_abs, round_length, "abs", "3")
abs_round4 <- create_trial(stim_abs, round_length, "abs", "4")
abs_round5 <- create_trial(stim_abs, round_length, "abs", "5")

abs_recall_round1 <- extract_letters(abs_round1) 
abs_recall_round2 <- extract_letters(abs_round2) 
abs_recall_round3 <- extract_letters(abs_round3) 
abs_recall_round4 <- extract_letters(abs_round4) 
abs_recall_round5 <- extract_letters(abs_round5) 



# Ecological stimuli ------------------------------------------------------

eco_list <- readxl::read_xlsx("2023_sem1_WM/materials/removal/scripts/BOSS_NORMS_December15_2014.xlsx", sheet = 6) |> 
  filter(`Modal category` %in% c("Kitchen&utensils", "Clothing", "Stationary&schoolsupplies", "Electronic devices&accessories",
                                 "Skincare&bathroom items", "Householdarticles&cleaners")) |> 
  select(filename = FILENAME, agreement = "% Category Agreement", category = `Modal category`) |> 
  filter(agreement > .80) |> 
  filter(!filename %in% c("cellphone","floppydisk02a.png","usbkey","cassettetape01a", "antenna", "butterdish",
                          "expansioncard","floppydisk02a","fork07b", "pda","telephone01b","taperecorder",
                          "stapleremover", "videocamera01a")) |> 
  mutate(filename = paste0("2023_sem1_WM/materials/removal/stimuli/BOSS/", filename, ".png"))

list.files("2023_sem1_WM/materials/removal/stimuli/BOSS/", full.names = T) |> 
  map(function(x) {
    if(!x %in% eco_list$filename) {
      file.remove(x)
    }
  })

stim_eco <- eco_list$filename |> str_remove_all("2023_sem1_WM/materials/")
stim_eco_sub <- sample(stim_eco, 5*round_length, replace = F)
  
# Abstract trials
eco_round1 <- create_trial(stim_eco_sub[1:10], round_length, "eco", "1")
eco_round2 <- create_trial(stim_eco_sub[11:20], round_length, "eco", "2")
eco_round3 <- create_trial(stim_eco_sub[21:30], round_length, "eco", "3")
eco_round4 <- create_trial(stim_eco_sub[31:40], round_length, "eco", "4")
eco_round5 <- create_trial(stim_eco_sub[41:50], round_length, "eco", "5")

eco_recall_round1 <- extract_images(eco_round1) 
eco_recall_round2 <- extract_images(eco_round2) 
eco_recall_round3 <- extract_images(eco_round3) 
eco_recall_round4 <- extract_images(eco_round4) 
eco_recall_round5 <- extract_images(eco_round5) 

