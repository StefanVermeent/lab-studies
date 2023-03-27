library(tidyverse)
library(glue)

set.seed(1245)
n_trials = 10

trial_settings = 1:n_trials |> 
  map_df(function(x){
    length = 1
    while(runif(1,0,1) > 0.10 & length < 21) {
      length = length + 1
    }
    
    # Interval of the empty screen (in ms)
    interval_empty <- sample(c(500, 1800), size = length, replace = T) |> 
      paste0(collapse = "', '") 
    
    # Interval of the visual cue (in ms)
    interval_cue <- sample(c(200, 1500), size = length, replace = T) |> 
      paste0(collapse = "', '")
    
    # Position of the stimulus to be replaced (left, center, or right)
    position <- sample(c(0,1,2), size = length, replace = T) 
    
    # Initial set of letters to be encoded
    encoding <- sample(letters, size = 3, replace = FALSE)
    
    # Replacement letter
    letter <- str_to_upper(sample(letters[!letters %in% encoding], size = length, replace = FALSE))# |> 
     # paste0(collapse = "', '")
    
    correct_recall <- encoding
    
    n = 1
      while(n <= length) {
        if(position[n] == 0) {
          correct_recall[1] <- letter[n]
        }
        if(position[n] == 1) {
          correct_recall[2] <- letter[n]
        }
        if(position[n] == 2) {
          correct_recall[3] <- letter[n]
        }
        n = n+1
      }
      
    encoding <- str_to_upper(encoding) |> paste0(collapse = "', '")
    position <- position |> paste0(collapse = "', '")
    letter <- letter |> paste0(collapse = "', '")
    correct_recall <- correct_recall |> paste0(collapse = "', '")
    
    list(
      encoding       = encoding,
      length         = length - 1,
      interval_empty = interval_empty,
      interval_cue   = interval_cue,
      position       = position,
      letter         = letter,
      correct_recall = correct_recall
    )
  })

glue_data(
  trial_settings,
  "{{encoding: ['{encoding}'], interval_empty: ['{interval_empty}'], interval_cue: ['{interval_cue}'], position: ['{position}'], letter: ['{letter}'], length: {length}, correct: ['{correct_recall}']}},\n\n"
)

