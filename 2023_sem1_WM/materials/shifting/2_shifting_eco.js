
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
    {stimulus: male_happy_gender1, key_answer: 'ArrowRight', data: {rule: 'gender', type: 'first', variable: 'face_shifting', task: 'shifting_eco1'}},
    {stimulus: male_happy_gender1, key_answer: 'ArrowRight', data: {rule: 'gender', type: 'repeat', variable: 'face_shifting', task: 'shifting_eco1'}},
    {stimulus: female_happy_gender1, key_answer: 'ArrowLeft', data: {rule: 'gender', type: 'repeat', variable: 'face_shifting', task: 'shifting_eco1'}},
    {stimulus: male_happy_gender1, key_answer: 'ArrowRight', data: {rule: 'gender', type: 'repeat', variable: 'face_shifting', task: 'shifting_eco1'}},
    {stimulus: male_happy_emotion1, key_answer: 'ArrowRight', data: {rule: 'emotion', type: 'switch', variable: 'face_shifting', task: 'shifting_eco1'}},
    {stimulus: male_angry_gender1, key_answer: 'ArrowRight', data: {rule: 'gender', type: 'switch', variable: 'face_shifting', task: 'shifting_eco1'}},
    {stimulus: female_angry_emotion1, key_answer: 'ArrowLeft', data: {rule: 'emotion', type: 'switch', variable: 'face_shifting', task: 'shifting_eco1'}},
    {stimulus: female_happy_emotion1, key_answer: 'ArrowRight', data: {rule: 'emotion', type: 'repeat', variable: 'face_shifting', task: 'shifting_eco1'}},
    {stimulus: female_angry_emotion1, key_answer: 'ArrowLeft', data: {rule: 'emotion', type: 'repeat', variable: 'face_shifting', task: 'shifting_eco1'}},
    {stimulus: female_happy_gender1, key_answer: 'ArrowLeft', data: {rule: 'gender', type: 'switch', variable: 'face_shifting', task: 'shifting_eco1'}},
    {stimulus: female_angry_gender1, key_answer: 'ArrowLeft', data: {rule: 'gender', type: 'repeat', variable: 'face_shifting', task: 'shifting_eco1'}},
    {stimulus: male_happy_gender1, key_answer: 'ArrowRight', data: {rule: 'gender', type: 'repeat', variable: 'face_shifting', task: 'shifting_eco1'}},
    {stimulus: female_angry_gender1, key_answer: 'ArrowLeft', data: {rule: 'gender', type: 'repeat', variable: 'face_shifting', task: 'shifting_eco1'}},
    {stimulus: female_happy_emotion1, key_answer: 'ArrowRight', data: {rule: 'emotion', type: 'switch', variable: 'face_shifting', task: 'shifting_eco1'}},
    {stimulus: male_happy_gender1, key_answer: 'ArrowRight', data: {rule: 'gender', type: 'switch', variable: 'face_shifting', task: 'shifting_eco1'}},
    {stimulus: female_angry_gender1, key_answer: 'ArrowLeft', data: {rule: 'gender', type: 'repeat', variable: 'face_shifting', task: 'shifting_eco1'}},
    {stimulus: female_angry_emotion1, key_answer: 'ArrowLeft', data: {rule: 'emotion', type: 'switch', variable: 'face_shifting', task: 'shifting_eco1'}},
    {stimulus: female_happy_emotion1, key_answer: 'ArrowRight', data: {rule: 'emotion', type: 'repeat', variable: 'face_shifting', task: 'shifting_eco1'}},
    {stimulus: male_happy_gender1, key_answer: 'ArrowRight', data: {rule: 'gender', type: 'switch', variable: 'face_shifting', task: 'shifting_eco1'}},
    {stimulus: female_happy_emotion1, key_answer: 'ArrowRight', data: {rule: 'emotion', type: 'switch', variable: 'face_shifting', task: 'shifting_eco1'}},
    {stimulus: male_angry_gender1, key_answer: 'ArrowRight', data: {rule: 'gender', type: 'switch', variable: 'face_shifting', task: 'shifting_eco1'}},
    {stimulus: female_happy_emotion1, key_answer: 'ArrowRight', data: {rule: 'emotion', type: 'switch', variable: 'face_shifting', task: 'shifting_eco1'}},
    {stimulus: male_happy_emotion1, key_answer: 'ArrowRight', data: {rule: 'emotion', type: 'repeat', variable: 'face_shifting', task: 'shifting_eco1'}},
    {stimulus: female_happy_emotion1, key_answer: 'ArrowRight', data: {rule: 'emotion', type: 'repeat', variable: 'face_shifting', task: 'shifting_eco1'}},
    {stimulus: male_happy_gender1, key_answer: 'ArrowRight', data: {rule: 'gender', type: 'switch', variable: 'face_shifting', task: 'shifting_eco1'}},
    {stimulus: male_angry_emotion1, key_answer: 'ArrowLeft', data: {rule: 'emotion', type: 'switch', variable: 'face_shifting', task: 'shifting_eco1'}},
    {stimulus: female_happy_emotion1, key_answer: 'ArrowRight', data: {rule: 'emotion', type: 'repeat', variable: 'face_shifting', task: 'shifting_eco1'}},
    {stimulus: female_angry_emotion1, key_answer: 'ArrowLeft', data: {rule: 'emotion', type: 'repeat', variable: 'face_shifting', task: 'shifting_eco1'}},
    {stimulus: male_happy_gender1, key_answer: 'ArrowRight', data: {rule: 'gender', type: 'switch', variable: 'face_shifting', task: 'shifting_eco1'}},
    {stimulus: male_angry_emotion1, key_answer: 'ArrowLeft', data: {rule: 'emotion', type: 'switch', variable: 'face_shifting', task: 'shifting_eco1'}},
    {stimulus: female_angry_emotion1, key_answer: 'ArrowLeft', data: {rule: 'emotion', type: 'repeat', variable: 'face_shifting', task: 'shifting_eco1'}},
    {stimulus: female_happy_emotion1, key_answer: 'ArrowRight', data: {rule: 'emotion', type: 'repeat', variable: 'face_shifting', task: 'shifting_eco1'}},
    {stimulus: male_angry_gender1, key_answer: 'ArrowRight', data: {rule: 'gender', type: 'switch', variable: 'face_shifting', task: 'shifting_eco1'}},
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
    {stimulus: male_angry_gender2, key_answer: 'ArrowRight', data: {rule: 'gender', type: 'first', variable: 'face_shifting', task: 'shifting_eco2'}},
    {stimulus: female_angry_emotion2, key_answer: 'ArrowLeft', data: {rule: 'emotion', type: 'switch', variable: 'face_shifting', task: 'shifting_eco2'}},
    {stimulus: male_happy_gender2, key_answer: 'ArrowRight', data: {rule: 'gender', type: 'switch', variable: 'face_shifting', task: 'shifting_eco2'}},
    {stimulus: male_happy_gender2, key_answer: 'ArrowRight', data: {rule: 'gender', type: 'repeat', variable: 'face_shifting', task: 'shifting_eco2'}},
    {stimulus: male_happy_gender2, key_answer: 'ArrowRight', data: {rule: 'gender', type: 'repeat', variable: 'face_shifting', task: 'shifting_eco2'}},
    {stimulus: male_happy_emotion2, key_answer: 'ArrowRight', data: {rule: 'emotion', type: 'switch', variable: 'face_shifting', task: 'shifting_eco2'}},
    {stimulus: male_happy_emotion2, key_answer: 'ArrowRight', data: {rule: 'emotion', type: 'repeat', variable: 'face_shifting', task: 'shifting_eco2'}},
    {stimulus: female_angry_gender2, key_answer: 'ArrowLeft', data: {rule: 'gender', type: 'switch', variable: 'face_shifting', task: 'shifting_eco2'}},
    {stimulus: female_happy_emotion2, key_answer: 'ArrowRight', data: {rule: 'emotion', type: 'switch', variable: 'face_shifting', task: 'shifting_eco2'}},
    {stimulus: male_angry_emotion2, key_answer: 'ArrowLeft', data: {rule: 'emotion', type: 'repeat', variable: 'face_shifting', task: 'shifting_eco2'}},
    {stimulus: male_happy_emotion2, key_answer: 'ArrowRight', data: {rule: 'emotion', type: 'repeat', variable: 'face_shifting', task: 'shifting_eco2'}},
    {stimulus: male_happy_gender2, key_answer: 'ArrowRight', data: {rule: 'gender', type: 'switch', variable: 'face_shifting', task: 'shifting_eco2'}},
    {stimulus: male_happy_emotion2, key_answer: 'ArrowRight', data: {rule: 'emotion', type: 'switch', variable: 'face_shifting', task: 'shifting_eco2'}},
    {stimulus: male_happy_gender2, key_answer: 'ArrowRight', data: {rule: 'gender', type: 'switch', variable: 'face_shifting', task: 'shifting_eco2'}},
    {stimulus: female_angry_emotion2, key_answer: 'ArrowLeft', data: {rule: 'emotion', type: 'switch', variable: 'face_shifting', task: 'shifting_eco2'}},
    {stimulus: female_angry_emotion2, key_answer: 'ArrowLeft', data: {rule: 'emotion', type: 'repeat', variable: 'face_shifting', task: 'shifting_eco2'}},
    {stimulus: male_happy_emotion2, key_answer: 'ArrowRight', data: {rule: 'emotion', type: 'repeat', variable: 'face_shifting', task: 'shifting_eco2'}},
    {stimulus: male_angry_gender2, key_answer: 'ArrowRight', data: {rule: 'gender', type: 'switch', variable: 'face_shifting', task: 'shifting_eco2'}},
    {stimulus: male_happy_gender2, key_answer: 'ArrowRight', data: {rule: 'gender', type: 'repeat', variable: 'face_shifting', task: 'shifting_eco2'}},
    {stimulus: female_happy_gender2, key_answer: 'ArrowLeft', data: {rule: 'gender', type: 'repeat', variable: 'face_shifting', task: 'shifting_eco2'}},
    {stimulus: male_happy_gender2, key_answer: 'ArrowRight', data: {rule: 'gender', type: 'repeat', variable: 'face_shifting', task: 'shifting_eco2'}},
    {stimulus: female_happy_gender2, key_answer: 'ArrowLeft', data: {rule: 'gender', type: 'repeat', variable: 'face_shifting', task: 'shifting_eco2'}},
    {stimulus: female_happy_emotion2, key_answer: 'ArrowRight', data: {rule: 'emotion', type: 'switch', variable: 'face_shifting', task: 'shifting_eco2'}},
    {stimulus: female_happy_gender2, key_answer: 'ArrowLeft', data: {rule: 'gender', type: 'switch', variable: 'face_shifting', task: 'shifting_eco2'}},
    {stimulus: male_happy_emotion2, key_answer: 'ArrowRight', data: {rule: 'emotion', type: 'switch', variable: 'face_shifting', task: 'shifting_eco2'}},
    {stimulus: female_angry_emotion2, key_answer: 'ArrowLeft', data: {rule: 'emotion', type: 'repeat', variable: 'face_shifting', task: 'shifting_eco2'}},
    {stimulus: male_happy_gender2, key_answer: 'ArrowRight', data: {rule: 'gender', type: 'switch', variable: 'face_shifting', task: 'shifting_eco2'}},
    {stimulus: female_happy_gender2, key_answer: 'ArrowLeft', data: {rule: 'gender', type: 'repeat', variable: 'face_shifting', task: 'shifting_eco2'}},
    {stimulus: female_angry_gender2, key_answer: 'ArrowLeft', data: {rule: 'gender', type: 'repeat', variable: 'face_shifting', task: 'shifting_eco2'}},
    {stimulus: male_angry_gender2, key_answer: 'ArrowRight', data: {rule: 'gender', type: 'repeat', variable: 'face_shifting', task: 'shifting_eco2'}},
    {stimulus: female_angry_emotion2, key_answer: 'ArrowLeft', data: {rule: 'emotion', type: 'switch', variable: 'face_shifting', task: 'shifting_eco2'}},
    {stimulus: male_happy_emotion2, key_answer: 'ArrowRight', data: {rule: 'emotion', type: 'repeat', variable: 'face_shifting', task: 'shifting_eco2'}},
    {stimulus: female_angry_gender2, key_answer: 'ArrowLeft', data: {rule: 'gender', type: 'switch', variable: 'face_shifting', task: 'shifting_eco2'}},
  ]
};

var eco_shifting_interblock = {
  type: jsPsychHtmlButtonResponse,
  stimulus: "Good job! You are halfway there. Take a break if needed and press 'continue' when you are ready for the final block.",
  choices: ['Continue'],
  data: {
    task: 'shifting_eco',
    variable: 'interblock'
  }
}