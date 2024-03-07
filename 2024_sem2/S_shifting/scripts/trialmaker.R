set.seed(485)

# Abstract Stimuli ------------------------------------------------------

# stimulus set 1
trials01 <- tibble(
  type     = c('first', sample(c(rep('repeat',16), rep('switch',16)), size = 32, replace = F)),
  rule     = c('gender', rep(NA, 32)),
  variable = "shifting1",
  task     = "shifting",
  stimulus = sample(c('female_l', 'female_r', 'male_l', 'male_r'), 33, replace = T),
  key_answer = NA
)

trials01 <- trials01 |>
  mutate(
    valid1 = ifelse(type == lag(type,1) & type == lag(type,2) & type == lag(type,3), FALSE, TRUE),
    valid2 = ifelse(stimulus == lag(stimulus,1) & stimulus == lag(stimulus,2), FALSE, TRUE),
    valid3 = ifelse(type == "repeat" & type == lag(type,1) & type == lag(type,2) & lag(type,3) == "switch", FALSE, TRUE),
  )

n = 1
while(any(c(trials01$valid1, trials01$valid2, trials01$valid3) == FALSE, na.rm = T)) {
  trials01 <- trials01 |>
    mutate(
      type = c('first', sample(c(rep('repeat',16), rep('switch',16)), size = 32, replace = F)),
      stimulus = sample(c('female_l', 'female_r', 'male_l', 'male_r'), 33, replace = T),
      valid1 = ifelse(type == lag(type,1) & type == lag(type,2) & type == lag(type,3), FALSE, TRUE),
      valid2 = ifelse(stimulus == lag(stimulus,1) & stimulus == lag(stimulus,2), FALSE, TRUE),
      valid3 = ifelse(type == "repeat" & type == lag(type,1) & type == lag(type,2) & lag(type,3) == "switch", FALSE, TRUE),
    )
}

n = 1
while(n<=32){
  trials01 <- trials01 |>
    mutate(
      rule = case_when(
        is.na(rule) & type == "repeat" & lag(rule, n=1) == 'gender' ~ 'gender',
        is.na(rule) & type == "repeat" & lag(rule, n=1) == 'direction' ~ 'direction',
        is.na(rule) & type == "switch" & lag(rule, n=1) == 'gender' ~ 'direction',
        is.na(rule) & type == "switch" & lag(rule, n=1) == 'direction' ~ 'gender',
        TRUE ~ rule
      )
    )
  n = n+1
}

trials01 <- trials01 |>
  mutate(
    key_answer = case_when(
      rule == 'gender' & str_detect(stimulus, "^female") ~ 'L',
      rule == 'gender' & str_detect(stimulus, "^male") ~ 'A',
      rule == 'direction' & str_detect(stimulus, "_l$") ~ 'A',
      rule == 'direction' & str_detect(stimulus, "_r$") ~ 'L',
    )
  )



# stimulus set 2
set.seed(47)

# Abstract Stimuli ------------------------------------------------------

# stimulus set 1
trials02 <- tibble(
  type     = c('first', sample(c(rep('repeat',16), rep('switch',16)), size = 32, replace = F)),
  rule     = c('gender', rep(NA, 32)),
  variable = "shifting1",
  task     = "shifting",
  stimulus = sample(c('female_l', 'female_r', 'male_l', 'male_r'), 33, replace = T),
  key_answer = NA
)

trials02 <- trials02 |>
  mutate(
    valid1 = ifelse(type == lag(type,1) & type == lag(type,2) & type == lag(type,3), FALSE, TRUE),
    valid2 = ifelse(stimulus == lag(stimulus,1) & stimulus == lag(stimulus,2), FALSE, TRUE),
    valid3 = ifelse(type == "repeat" & type == lag(type,1) & type == lag(type,2) & lag(type,3) == "switch", FALSE, TRUE),
  
    )

n = 1
while(any(c(trials02$valid1, trials02$valid2, trials02$valid3) == FALSE, na.rm = T)) {
  trials02 <- trials02 |>
    mutate(
      type = c('first', sample(c(rep('repeat',16), rep('switch',16)), size = 32, replace = F)),
      stimulus = sample(c('female_l', 'female_r', 'male_l', 'male_r'), 33, replace = T),
      valid1 = ifelse(type == lag(type,1) & type == lag(type,2) & type == lag(type,3), FALSE, TRUE),
      valid2 = ifelse(stimulus == lag(stimulus,1) & stimulus == lag(stimulus,2), FALSE, TRUE),
      valid3 = ifelse(type == "repeat" & type == lag(type,1) & type == lag(type,2) & lag(type,3) == "switch", FALSE, TRUE),
    )
}

n = 1
while(n<=32){
  trials02 <- trials02 |>
    mutate(
      rule = case_when(
        is.na(rule) & type == "repeat" & lag(rule, n=1) == 'gender' ~ 'gender',
        is.na(rule) & type == "repeat" & lag(rule, n=1) == 'direction' ~ 'direction',
        is.na(rule) & type == "switch" & lag(rule, n=1) == 'gender' ~ 'direction',
        is.na(rule) & type == "switch" & lag(rule, n=1) == 'direction' ~ 'gender',
        TRUE ~ rule
      )
    )
  n = n+1
}

trials02 <- trials02 |>
  mutate(
    key_answer = case_when(
      rule == 'gender' & str_detect(stimulus, "^female") ~ 'L',
      rule == 'gender' & str_detect(stimulus, "^male") ~ 'A',
      rule == 'direction' & str_detect(stimulus, "_l$") ~ 'A',
      rule == 'direction' & str_detect(stimulus, "_r$") ~ 'L',
    )
  )


glue_data(
  trials01,
  "{{stimulus: {stimulus}, key_answer: '{key_answer}', data: {{rule: '{rule}', type: '{type}', variable: '{variable}', task: '{task}'}}}},"
)

glue_data(
  trials02,
  "{{stimulus: {stimulus}, key_answer: '{key_answer}', data: {{rule: '{rule}', type: '{type}', variable: '{variable}', task: '{task}'}}}},"
)
