//------------------------- Standard Shifting - Set 1

var abs_shifting_01 = {
  type: jsPsychCategorizeHtml,
  choices: ['ArrowLeft','ArrowRight'],
  correct_text: "",
  incorrect_text: "",
  feedback_duration: 250,
  show_stim_with_feedback: false,
  prompt: "<div style='width: 600px; height:50px;'>" + prompt_yellow + prompt_tri + prompt_circle + prompt_blue + "</div><br><br>" +
          "<div style='width: 600px;'><h1 style='float: left; margin:0;'>&#x21E6</h1><h1 style='float: right; margin:0;'>&#x21E8</h1></div>",
  data: {variable: "shifting_01", task: 'shifting_abs'},
  timeline: [
    {stimulus: bluetriangle_color  , key_answer: 'ArrowRight', data: {rule: "color", type: "first" , variable: "shifting_01", task: "shifting_abs"}},
    {stimulus: yellowcircle_color  , key_answer: 'ArrowLeft', data: {rule: "color", type: "repeat", variable: "shifting_01", task: "shifting_abs"}},
    {stimulus: yellowtriangle_shape, key_answer: 'ArrowLeft', data: {rule: "shape", type: "switch", variable: "shifting_01", task: "shifting_abs"}},
    {stimulus: bluetriangle_color  , key_answer: 'ArrowRight', data: {rule: "color", type: "switch", variable: "shifting_01", task: "shifting_abs"}},
    {stimulus: bluecircle_color    , key_answer: 'ArrowRight', data: {rule: "color", type: "repeat", variable: "shifting_01", task: "shifting_abs"}},
    {stimulus: yellowtriangle_shape, key_answer: 'ArrowLeft', data: {rule: "shape", type: "switch", variable: "shifting_01", task: "shifting_abs"}},
    {stimulus: yellowtriangle_color, key_answer: 'ArrowLeft', data: {rule: "color", type: "switch", variable: "shifting_01", task: "shifting_abs"}},
    {stimulus: yellowtriangle_shape, key_answer: 'ArrowLeft', data: {rule: "shape", type: "switch", variable: "shifting_01", task: "shifting_abs"}},
    {stimulus: bluetriangle_color  , key_answer: 'ArrowRight', data: {rule: "color", type: "switch", variable: "shifting_01", task: "shifting_abs"}}
  ]
};

//------------------------- Standard Shifting - Set 2

var abs_shifting_02 = {
  type: jsPsychCategorizeHtml,
  choices: ['ArrowLeft','ArrowRight'],
  correct_text: "",
  incorrect_text: "",
  feedback_duration: 250,
  show_stim_with_feedback: false,
  prompt: "<div style='width: 600px; height:50px;'>" + prompt_yellow + prompt_tri + prompt_circle + prompt_blue + "</div><br><br>" +
          "<div style='width: 600px;'><h1 style='float: left; margin:0;'>&#x21E6</h1><h1 style='float: right; margin:0;'>&#x21E8</h1></div>",
  data: {variable: "shifting_02", task: 'shifting_abs'},
  timeline: [
    {stimulus: bluetriangle_color  , key_answer: 'ArrowRight', data: {rule: "color", type: "repeat", variable: "shifting_02", task: "shifting_abs"}},
    {stimulus: yellowtriangle_color, key_answer: 'ArrowLeft', data: {rule: "color", type: "repeat", variable: "shifting_02", task: "shifting_abs"}},
    {stimulus: yellowcircle_shape  , key_answer: 'ArrowRight', data: {rule: "shape", type: "switch", variable: "shifting_02", task: "shifting_abs"}},
    {stimulus: bluecircle_shape    , key_answer: 'ArrowRight', data: {rule: "shape", type: "repeat", variable: "shifting_02", task: "shifting_abs"}},
    {stimulus: yellowcircle_color  , key_answer: 'ArrowLeft', data: {rule: "color", type: "switch", variable: "shifting_02", task: "shifting_abs"}},
    {stimulus: yellowcircle_color  , key_answer: 'ArrowLeft', data: {rule: "color", type: "repeat", variable: "shifting_02", task: "shifting_abs"}},
    {stimulus: bluetriangle_shape  , key_answer: 'ArrowLeft', data: {rule: "shape", type: "switch", variable: "shifting_02", task: "shifting_abs"}},
    {stimulus: yellowcircle_color  , key_answer: 'ArrowLeft', data: {rule: "color", type: "switch", variable: "shifting_02", task: "shifting_abs"}}
  ]
};

//------------------------- Standard Shifting - Set 3

var abs_shifting_03 = {
  type: jsPsychCategorizeHtml,
  choices: ['ArrowLeft','ArrowRight'],
  correct_text: "",
  incorrect_text: "",
  feedback_duration: 250,
  show_stim_with_feedback: false,
  prompt: "<div style='width: 600px; height:50px;'>" + prompt_yellow + prompt_tri + prompt_circle + prompt_blue + "</div><br><br>" +
          "<div style='width: 600px;'><h1 style='float: left; margin:0;'>&#x21E6</h1><h1 style='float: right; margin:0;'>&#x21E8</h1></div>",
  data: {variable: "shifting_03", task: 'shifting_abs'},
  timeline: [
    {stimulus: yellowcircle_color  , key_answer: 'ArrowLeft', data: {rule: "color", type: "repeat", variable: "shifting_03", task: "shifting_abs"}},
    {stimulus: yellowtriangle_color, key_answer: 'ArrowLeft', data: {rule: "color", type: "repeat", variable: "shifting_03", task: "shifting_abs"}},
    {stimulus: bluetriangle_color  , key_answer: 'ArrowRight', data: {rule: "color", type: "repeat", variable: "shifting_03", task: "shifting_abs"}},
    {stimulus: bluecircle_shape    , key_answer: 'ArrowRight', data: {rule: "shape", type: "switch", variable: "shifting_03", task: "shifting_abs"}},
    {stimulus: bluecircle_color    , key_answer: 'ArrowRight', data: {rule: "color", type: "switch", variable: "shifting_03", task: "shifting_abs"}},
    {stimulus: bluecircle_shape    , key_answer: 'ArrowRight', data: {rule: "shape", type: "switch", variable: "shifting_03", task: "shifting_abs"}},
    {stimulus: yellowcircle_shape  , key_answer: 'ArrowRight', data: {rule: "shape", type: "repeat", variable: "shifting_03", task: "shifting_abs"}},
    {stimulus: bluetriangle_shape  , key_answer: 'ArrowLeft', data: {rule: "shape", type: "repeat", variable: "shifting_03", task: "shifting_abs"}}
  ]
};

//------------------------- Standard Shifting - Set 4

var abs_shifting_04 = {
  type: jsPsychCategorizeHtml,
  choices: ['ArrowLeft','ArrowRight'],
  correct_text: "",
  incorrect_text: "",
  feedback_duration: 250,
  show_stim_with_feedback: false,
  prompt: "<div style='width: 600px; height:50px;'>" + prompt_yellow + prompt_tri + prompt_circle + prompt_blue + "</div><br><br>" +
          "<div style='width: 600px;'><h1 style='float: left; margin:0;'>&#x21E6</h1><h1 style='float: right; margin:0;'>&#x21E8</h1></div>",
  data: {variable: "shifting_04", task: 'shifting_abs'},
  timeline: [
    {stimulus: bluecircle_shape    , key_answer: 'ArrowRight', data: {rule: "shape", type: "repeat", variable: "shifting_04", task: "shifting_abs"}},
    {stimulus: yellowcircle_shape  , key_answer: 'ArrowRight', data: {rule: "shape", type: "repeat", variable: "shifting_04", task: "shifting_abs"}},
    {stimulus: yellowcircle_color  , key_answer: 'ArrowLeft', data: {rule: "color", type: "switch", variable: "shifting_04", task: "shifting_abs"}},
    {stimulus: yellowtriangle_color, key_answer: 'ArrowLeft', data: {rule: "color", type: "repeat", variable: "shifting_04", task: "shifting_abs"}},
    {stimulus: bluetriangle_shape  , key_answer: 'ArrowLeft', data: {rule: "shape", type: "switch", variable: "shifting_04", task: "shifting_abs"}},
    {stimulus: bluecircle_shape    , key_answer: 'ArrowRight', data: {rule: "shape", type: "repeat", variable: "shifting_04", task: "shifting_abs"}},
    {stimulus: bluecircle_color    , key_answer: 'ArrowRight', data: {rule: "color", type: "switch", variable: "shifting_04", task: "shifting_abs"}},
    {stimulus: yellowtriangle_color, key_answer: 'ArrowLeft', data: {rule: "color", type: "repeat", variable: "shifting_04", task: "shifting_abs"}}
  ]
};