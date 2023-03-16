//-------------------------- Set up updating rounds

var updating_ecological_start_01 = "You are about to start <b>round 1</b>.<br><br><strong>Click start when you are ready!<strong><br><br>";
var updating_ecological_start_02 = "You are about to start <b>round 2</b>.<br><br><strong>Click start when you are ready!<strong><br><br>";
var updating_ecological_start_03 = "You are about to start <b>round 3</b>.<br><br><strong>Click start when you are ready!<strong><br><br>";
var updating_ecological_start_04 = "You are about to start <b>round 4</b>.<br><br><strong>Click start when you are ready!<strong><br><br>";
var updating_ecological_start_05 = "You are about to start <b>round 5</b>.<br><br><strong>Click start when you are ready!<strong><br><br>";

// declare variable to hold sequence of shapes
var updating_ecological_sequence_01 = [bus,bill,bus,angry,bus,bill,bus,angry,angry];
var updating_ecological_sequence_02 = [bill,angry,bus,bus,angry,bill,bus,angry,bill];
var updating_ecological_sequence_03 = [bus,angry,bus,angry,bill,angry,bus,bill,bus];
var updating_ecological_sequence_04 = [angry,bill,bus,bill,bill,bus,bill,bill,angry];
var updating_ecological_sequence_05 = [angry,angry,bus,bill,bill,bill,angry,angry,bus];

var updating_ecological_key_01 = JSON.stringify({"Q0": 2, "Q1": 4, "Q2": 3});
var updating_ecological_key_02 = JSON.stringify({"Q0": 3, "Q1": 3, "Q2": 3});
var updating_ecological_key_03 = JSON.stringify({"Q0": 2, "Q1": 4, "Q2": 3});
var updating_ecological_key_04 = JSON.stringify({"Q0": 5, "Q1": 2, "Q2": 2});
var updating_ecological_key_05 = JSON.stringify({"Q0": 3, "Q1": 2, "Q2": 4});

//-------------------------- Standard Updating

var updating_ecological = {
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
        {prompt: updating_ecological_questions[0], labels: updating_ecological_answers, required: true},
        {prompt: updating_ecological_questions[1], labels: updating_ecological_answers, required: true},
        {prompt: updating_ecological_questions[2], labels: updating_ecological_answers, required: true},
      ]
    }
  ],
  timeline_variables: [
    {
      stimulus: updating_start_01,
      data1: {variable: "updating_eco_01_start", task: "updating_ecological"},
      sequence: updating_ecological_sequence_01,
      data2: {variable: "updating_eco_01_animation", task: "updating_ecological"},
      data3: {variable: "updating_eco_01_answers"  , correct: updating_ecological_key_01, task: "updating_ecological"}
    },
    {
      stimulus: updating_start_02,
      data1: {variable: "updating_eco_02_start", task: "updating_ecological"},
      sequence: updating_ecological_sequence_02,
      data2: {variable: "updating_eco_02_animation", task: "updating_ecological"},
      data3: {variable: "updating_eco_02_answers"  , correct: updating_ecological_key_02, task: "updating_ecological"}
    },
    {
      stimulus: updating_start_03,
      data1: {variable: "updating_eco_03_start", task: "updating_ecological"},
      sequence: updating_ecological_sequence_03,
      data2: {variable: "updating_eco_03_animation", task: "updating_ecological"},
      data3: {variable: "updating_eco_03_answers"  , correct: updating_ecological_key_03, task: "updating_ecological"}
    },
    {
      stimulus: updating_start_04,
      data1: {variable: "updating_eco_04_start", task: "updating_ecological"},
      sequence: updating_ecological_sequence_04,
      data2: {variable: "updating_eco_04_animation", task: "updating_ecological"},
      data3: {variable: "updating_eco_04_answers"  , correct: updating_ecological_key_04, task: "updating_ecological"}
    },
    {
      stimulus: updating_start_05,
      data1: {variable: "updating_eco_05_start", task: "updating_ecological"},
      sequence: updating_ecological_sequence_05,
      data2: {variable: "updating_eco_05_animation", task: "updating_ecological"},
      data3: {variable: "updating_eco_05_answers"  , correct: updating_ecological_key_05, task: "updating_ecological"}
    }
  ]
};