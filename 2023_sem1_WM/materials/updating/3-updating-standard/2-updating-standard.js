//-------------------------- Set up updating rounds

var updating_start_01 = "You are about to start <b>round 1</b>.<br><br><strong>Click start when you are ready!<strong><br><br>";
var updating_start_02 = "You are about to start <b>round 2</b>.<br><br><strong>Click start when you are ready!<strong><br><br>";
var updating_start_03 = "You are about to start <b>round 3</b>.<br><br><strong>Click start when you are ready!<strong><br><br>";
var updating_start_04 = "You are about to start <b>round 4</b>.<br><br><strong>Click start when you are ready!<strong><br><br>";
var updating_start_05 = "You are about to start <b>round 5</b>.<br><br><strong>Click start when you are ready!<strong><br><br>";

// declare variable to hold sequence of shapes
var updating_sequence_01 = [circle,square,circle,triangle,circle,square,circle,triangle,triangle];
var updating_sequence_02 = [square,triangle,circle,circle,triangle,square,circle,triangle,square];
var updating_sequence_03 = [circle,triangle,circle,triangle,square,triangle,circle,square,circle];
var updating_sequence_04 = [triangle,square,circle,square,square,circle,square,square,triangle];
var updating_sequence_05 = [triangle,square,triangle,circle,square,triangle,square,triangle,circle];

// answer keys - squares, trianlges, circles
var updating_key_01 = JSON.stringify({"Q0": 2, "Q1": 3, "Q2": 4,});
var updating_key_02 = JSON.stringify({"Q0": 3, "Q1": 3, "Q2": 3,});
var updating_key_03 = JSON.stringify({"Q0": 2, "Q1": 3, "Q2": 4,});
var updating_key_04 = JSON.stringify({"Q0": 5, "Q1": 2, "Q2": 2,});
var updating_key_05 = JSON.stringify({"Q0": 3, "Q1": 4, "Q2": 2,});

//-------------------------- Standard Updating

var updating_standard = {
  timeline: [
    {
      type: 'html-button-response',
      stimulus: jsPsych.timelineVariable('stimulus'),
      choices: ['Start'],
      data: jsPsych.timelineVariable('data1'),
    },
    {
      type: 'animation',
      stimuli: jsPsych.timelineVariable('sequence'),
      frame_time: 1000,
      frame_isi: 500,
      choices: -1,
      data: jsPsych.timelineVariable('data2'),
    },
    {
      type: 'survey-likert',
      data: jsPsych.timelineVariable('data3'),
      button_label: 'Next',
      questions: [
        {prompt: updating_standard_questions[0], labels: updating_standard_answers, required: true},
        {prompt: updating_standard_questions[1], labels: updating_standard_answers, required: true},
        {prompt: updating_standard_questions[2], labels: updating_standard_answers, required: true},
      ]
    }
  ],
  timeline_variables: [
    {
      stimulus: updating_start_01,
      data1: {variable: "updating_01_start", task: "updating_standard"},
      sequence: updating_sequence_01,
      data2: {variable: "updating_01_animation", task: "updating_standard"},
      data3: {variable: "updating_01_answers"  , correct: updating_key_01, task: "updating_standard"}
    },
    {
      stimulus: updating_start_02,
      data1: {variable: "updating_02_start", task: "updating_standard"},
      sequence: updating_sequence_02,
      data2: {variable: "updating_02_animation", task: "updating_standard"},
      data3: {variable: "updating_02_answers"  , correct: updating_key_02, task: "updating_standard"}
    },
    {
      stimulus: updating_start_03,
      data1: {variable: "updating_03_start", task: "updating_standard"},
      sequence: updating_sequence_03,
      data2: {variable: "updating_03_animation", task: "updating_standard"},
      data3: {variable: "updating_03_answers"  , correct: updating_key_03, task: "updating_standard"}
    },
    {
      stimulus: updating_start_04,
      data1: {variable: "updating_04_start", task: "updating_standard"},
      sequence: updating_sequence_04,
      data2: {variable: "updating_04_animation", task: "updating_standard"},
      data3: {variable: "updating_04_answers"  , correct: updating_key_04, task: "updating_standard"}
    },
    {
      stimulus: updating_start_05,
      data1: {variable: "updating_05_start", task: "updating_standard"},
      sequence: updating_sequence_05,
      data2: {variable: "updating_05_animation", task: "updating_standard"},
      data3: {variable: "updating_05_answers"  , correct: updating_key_05, task: "updating_standard"}
    }
  ]
};