
//-------------------------- Face Shifting - Set 1

var eco_shifting_01 = {
  type: jsPsychCategorizeHtml,
  choices: ['ArrowLeft','ArrowRight'],
  correct_text: "",
  incorrect_text: "",
  feedback_duration: 250,
  show_stim_with_feedback: false,
  prompt: "<div style='width: 600px;'>" + prompt_female + prompt_angry + prompt_happy +  prompt_male + "</div><br><br><br>" +
          "<div style='width: 600px;'><h1 style='float: left; margin:0;'>&#x21E6</h1><h1 style='float: right; margin:0;'>&#x21E8</h1></div>",
  data: {variable: "shifting_01", task: 'shifting_eco'},
  timeline: [
    {stimulus: male_happy_emotion  , key_answer: 'ArrowRight', data: {rule: "gender" , type: "first" , variable: "face_shifting_01", task: "shifting_eco"}},
    {stimulus: male_angry_emotion  , key_answer: 'ArrowLeft', data: {rule: "emotion", type: "switch", variable: "face_shifting_01", task: "shifting_eco"}},
    {stimulus: female_angry_emotion, key_answer: 'ArrowLeft', data: {rule: "emotion", type: "repeat", variable: "face_shifting_01", task: "shifting_eco"}},
    {stimulus: female_happy_emotion, key_answer: 'ArrowRight', data: {rule: "emotion", type: "repeat", variable: "face_shifting_01", task: "shifting_eco"}},
    {stimulus: male_happy_gender   , key_answer: 'ArrowRight', data: {rule: " gender", type: "switch", variable: "face_shifting_01", task: "shifting_eco"}},
    {stimulus: female_happy_emotion, key_answer: 'ArrowRight', data: {rule: "emotion", type: "switch", variable: "face_shifting_01", task: "shifting_eco"}},
    {stimulus: female_happy_emotion, key_answer: 'ArrowRight', data: {rule: "emotion", type: "repeat", variable: "face_shifting_01", task: "shifting_eco"}},
    {stimulus: male_angry_gender   , key_answer: 'ArrowRight', data: {rule: " gender", type: "switch", variable: "face_shifting_01", task: "shifting_eco"}},
    {stimulus: male_angry_gender   , key_answer: 'ArrowRight', data: {rule: " gender", type: "repeat", variable: "face_shifting_01", task: "shifting_eco"}}
  ]
};

//-------------------------- Face Shifting - Set 2

var eco_shifting_02 = {
  type: jsPsychCategorizeHtml,
  choices: ['ArrowLeft','ArrowRight'],
  correct_text: "",
  incorrect_text: "",
  feedback_duration: 250,
  show_stim_with_feedback: false,
  prompt: "<div style='width: 600px;'>" + prompt_female + prompt_angry + prompt_happy + prompt_male + "</div><br><br><br>" +
          "<div style='width: 600px;'><h1 style='float: left; margin:0;'>&#x21E6</h1><h1 style='float: right; margin:0;'>&#x21E8</h1></div>",
  data: {variable: "shifting_02", task: 'shifting_eco'},
  timeline: [
    {stimulus: female_happy_gender , key_answer: 'ArrowLeft', data: {rule: " gender", type: "repeat", variable: "face_shifting_02", task: "shifting_eco"}},
    {stimulus: male_happy_emotion  , key_answer: 'ArrowRight', data: {rule: "emotion", type: "switch", variable: "face_shifting_02", task: "shifting_eco"}},
    {stimulus: male_happy_emotion  , key_answer: 'ArrowRight', data: {rule: "emotion", type: "repeat", variable: "face_shifting_02", task: "shifting_eco"}},
    {stimulus: male_angry_gender   , key_answer: 'ArrowRight', data: {rule: " gender", type: "switch", variable: "face_shifting_02", task: "shifting_eco"}},
    {stimulus: female_angry_emotion, key_answer: 'ArrowLeft', data: {rule: "emotion", type: "switch", variable: "face_shifting_02", task: "shifting_eco"}},
    {stimulus: female_angry_emotion, key_answer: 'ArrowLeft', data: {rule: "emotion", type: "repeat", variable: "face_shifting_02", task: "shifting_eco"}},
    {stimulus: female_angry_emotion, key_answer: 'ArrowLeft', data: {rule: "emotion", type: "repeat", variable: "face_shifting_02", task: "shifting_eco"}},
    {stimulus: male_happy_gender   , key_answer: 'ArrowRight', data: {rule: " gender", type: "switch", variable: "face_shifting_02", task: "shifting_eco"}}
  ]
};

//-------------------------- Face Shifting - Set 3

var eco_shifting_03 = {
  type: jsPsychCategorizeHtml,
  choices: ['ArrowLeft','ArrowRight'],
  correct_text: "",
  incorrect_text: "",
  feedback_duration: 250,
  show_stim_with_feedback: false,
  prompt: "<div style='width: 600px;'>" + prompt_female + prompt_angry + prompt_happy + prompt_male + "</div><br><br><br>" +
          "<div style='width: 600px;'><h1 style='float: left; margin:0;'>&#x21E6</h1><h1 style='float: right; margin:0;'>&#x21E8</h1></div>",
  data: {variable: "shifting_03", task: 'shifting_eco'},
  timeline: [
    {stimulus: female_angry_emotion, key_answer: 'ArrowLeft', data: {rule: "emotion", type: "switch", variable: "face_shifting_03", task: "shifting_eco"}},
    {stimulus: female_angry_emotion, key_answer: 'ArrowLeft', data: {rule: "emotion", type: "repeat", variable: "face_shifting_03", task: "shifting_eco"}},
    {stimulus: female_happy_gender , key_answer: 'ArrowLeft', data: {rule: " gender", type: "switch", variable: "face_shifting_03", task: "shifting_eco"}},
    {stimulus: male_happy_emotion  , key_answer: 'ArrowRight', data: {rule: "emotion", type: "switch", variable: "face_shifting_03", task: "shifting_eco"}},
    {stimulus: female_angry_gender , key_answer: 'ArrowLeft', data: {rule: " gender", type: "switch", variable: "face_shifting_03", task: "shifting_eco"}},
    {stimulus: male_happy_gender   , key_answer: 'ArrowRight', data: {rule: " gender", type: "repeat", variable: "face_shifting_03", task: "shifting_eco"}},
    {stimulus: female_happy_emotion, key_answer: 'ArrowRight', data: {rule: "emotion", type: "switch", variable: "face_shifting_03", task: "shifting_eco"}},
    {stimulus: male_happy_emotion  , key_answer: 'ArrowRight', data: {rule: "emotion", type: "repeat", variable: "face_shifting_03", task: "shifting_eco"}}
  ]
};

//-------------------------- Face Shifting - Set 4

var eco_shifting_04 = {
  type: jsPsychCategorizeHtml,
  choices: ['ArrowLeft','ArrowRight'],
  correct_text: "",
  incorrect_text: "",
  feedback_duration: 250,
  show_stim_with_feedback: false,
  prompt: "<div style='width: 600px;'>" + prompt_female + prompt_angry + prompt_happy + prompt_male + "</div><br><br><br>" +
          "<div style='width: 600px;'><h1 style='float: left; margin:0;'>&#x21E6</h1><h1 style='float: right; margin:0;'>&#x21E8</h1></div>",
  data: {variable: "shifting_04", task: 'shifting_eco'},
  timeline: [
    {stimulus: female_happy_gender , key_answer: 'ArrowLeft', data: {rule: " gender", type: "switch", variable: "face_shifting_04", task: "shifting_eco"}},
    {stimulus: female_happy_gender , key_answer: 'ArrowLeft', data: {rule: " gender", type: "repeat", variable: "face_shifting_04", task: "shifting_eco"}},
    {stimulus: male_angry_gender   , key_answer: 'ArrowRight', data: {rule: " gender", type: "repeat", variable: "face_shifting_04", task: "shifting_eco"}},
    {stimulus: male_angry_gender   , key_answer: 'ArrowRight', data: {rule: " gender", type: "repeat", variable: "face_shifting_04", task: "shifting_eco"}},
    {stimulus: female_angry_emotion, key_answer: 'ArrowLeft', data: {rule: "emotion", type: "switch", variable: "face_shifting_04", task: "shifting_eco"}},
    {stimulus: male_happy_emotion  , key_answer: 'ArrowRight', data: {rule: "emotion", type: "repeat", variable: "face_shifting_04", task: "shifting_eco"}},
    {stimulus: male_angry_emotion  , key_answer: 'ArrowLeft', data: {rule: "emotion", type: "repeat", variable: "face_shifting_04", task: "shifting_eco"}},
    {stimulus: male_angry_gender   , key_answer: 'ArrowRight', data: {rule: " gender", type: "switch", variable: "face_shifting_04", task: "shifting_eco"}}
  ]
};