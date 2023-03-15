// Fixation cross
var fixation = {
  type: jsPsychHtmlKeyboardResponse,
  stimulus: '<div style="font-size:60px;">+</div>',
  choices: "NO_KEYS",
  trial_duration: 500,
  data: {
    variable: 'fixation'
  }
};

// Stimulus presentation
var stimulus_abs = {
  type: jsPsychHtmlKeyboardResponse,
  stimulus: function() {
        var stim = '<p style="font-size:80px">'+jsPsych.timelineVariable('stim')+'</p>';
        return stim;
    },
  choices: "NO_KEYS",
  trial_duration: 2500,
  data: {
    variable: 'stimulus'
  }
}

// Forget or Remember probe
var probe = {
  type: jsPsychHtmlKeyboardResponse,
  stimulus: function() {
        var stim = '<p style="font-size:40px;font-weight:bold;">'+jsPsych.timelineVariable('probetype')+'</p>';
        return stim;
    },
  trial_duration: 1000,
  choices: "NO_KEYS",
  data: {
    variable: 'probe'
  }
};


var stimuli_round0_abs = [
{stim: 'N', version: 'abs', round: '0', probetype: 'FORGET'},
{stim: 'R', version: 'abs', round: '0', probetype: 'REMEMBER'},
{stim: 'G', version: 'abs', round: '0', probetype: 'REMEMBER'},
{stim: 'A', version: 'abs', round: '0', probetype: 'FORGET'},
{stim: 'W', version: 'abs', round: '0', probetype: 'REMEMBER'},
{stim: 'P', version: 'abs', round: '0', probetype: 'FORGET'},
{stim: 'V', version: 'abs', round: '0', probetype: 'REMEMBER'},
{stim: 'F', version: 'abs', round: '0', probetype: 'FORGET'}
]

var stimuli_round1_abs = [
{stim: 'G', version: 'abs', round: '1', probetype: 'FORGET'},
{stim: 'E', version: 'abs', round: '1', probetype: 'REMEMBER'},
{stim: 'C', version: 'abs', round: '1', probetype: 'FORGET'},
{stim: 'Y', version: 'abs', round: '1', probetype: 'REMEMBER'},
{stim: 'H', version: 'abs', round: '1', probetype: 'FORGET'},
{stim: 'N', version: 'abs', round: '1', probetype: 'REMEMBER'},
{stim: 'U', version: 'abs', round: '1', probetype: 'FORGET'},
{stim: 'I', version: 'abs', round: '1', probetype: 'REMEMBER'},
{stim: 'K', version: 'abs', round: '1', probetype: 'FORGET'},
{stim: 'R', version: 'abs', round: '1', probetype: 'REMEMBER'},
]
//ROUND 2
var stimuli_round2_abs = [
{stim: 'A', version: 'abs', round: '2', probetype: 'FORGET'},
{stim: 'C', version: 'abs', round: '2', probetype: 'REMEMBER'},
{stim: 'T', version: 'abs', round: '2', probetype: 'FORGET'},
{stim: 'U', version: 'abs', round: '2', probetype: 'REMEMBER'},
{stim: 'L', version: 'abs', round: '2', probetype: 'REMEMBER'},
{stim: 'I', version: 'abs', round: '2', probetype: 'FORGET'},
{stim: 'D', version: 'abs', round: '2', probetype: 'REMEMBER'},
{stim: 'G', version: 'abs', round: '2', probetype: 'REMEMBER'},
{stim: 'O', version: 'abs', round: '2', probetype: 'FORGET'},
{stim: 'W', version: 'abs', round: '2', probetype: 'FORGET'},
]
//ROUND 3
var stimuli_round3_abs = [
{stim: 'G', version: 'abs', round: '3', probetype: 'FORGET'},
{stim: 'S', version: 'abs', round: '3', probetype: 'REMEMBER'},
{stim: 'R', version: 'abs', round: '3', probetype: 'REMEMBER'},
{stim: 'T', version: 'abs', round: '3', probetype: 'FORGET'},
{stim: 'J', version: 'abs', round: '3', probetype: 'FORGET'},
{stim: 'F', version: 'abs', round: '3', probetype: 'FORGET'},
{stim: 'C', version: 'abs', round: '3', probetype: 'REMEMBER'},
{stim: 'U', version: 'abs', round: '3', probetype: 'REMEMBER'},
{stim: 'Q', version: 'abs', round: '3', probetype: 'FORGET'},
{stim: 'Y', version: 'abs', round: '3', probetype: 'REMEMBER'},
]

//ROUND 4
var stimuli_round4_abs = [
{stim: 'Y', version: 'abs', round: '4', probetype: 'REMEMBER'},
{stim: 'U', version: 'abs', round: '4', probetype: 'REMEMBER'},
{stim: 'C', version: 'abs', round: '4', probetype: 'FORGET'},
{stim: 'B', version: 'abs', round: '4', probetype: 'FORGET'},
{stim: 'L', version: 'abs', round: '4', probetype: 'REMEMBER'},
{stim: 'W', version: 'abs', round: '4', probetype: 'FORGET'},
{stim: 'M', version: 'abs', round: '4', probetype: 'REMEMBER'},
{stim: 'G', version: 'abs', round: '4', probetype: 'REMEMBER'},
{stim: 'S', version: 'abs', round: '4', probetype: 'FORGET'},
{stim: 'R', version: 'abs', round: '4', probetype: 'FORGET'},
]
//ROUND 5
var stimuli_round5_abs = [
{stim: 'T', version: 'abs', round: '5', probetype: 'REMEMBER'},
{stim: 'A', version: 'abs', round: '5', probetype: 'FORGET'},
{stim: 'K', version: 'abs', round: '5', probetype: 'REMEMBER'},
{stim: 'W', version: 'abs', round: '5', probetype: 'REMEMBER'},
{stim: 'U', version: 'abs', round: '5', probetype: 'FORGET'},
{stim: 'E', version: 'abs', round: '5', probetype: 'REMEMBER'},
{stim: 'C', version: 'abs', round: '5', probetype: 'REMEMBER'},
{stim: 'G', version: 'abs', round: '5', probetype: 'FORGET'},
{stim: 'N', version: 'abs', round: '5', probetype: 'FORGET'},
{stim: 'O', version: 'abs', round: '5', probetype: 'FORGET'},
]

var removal_abs_recall_round0 = {
  type: jsPsychSurveyMultiSelect,
  questions: [
    {
      prompt: "Which letters did you have to remember?", 
      options: ['A', 'F', 'G', 'N', 'P', 'R', 'V', 'W'],
      horizontal: true,
      required: false,
      name: 'Recall'
    }, 
  ], 
  data: {
    variable: 'recall',
    task: 'removal',
    round: '1'
  }
};

var removal_abs_recall_round1 = {
  type: jsPsychSurveyMultiSelect,
  questions: [
    {
      prompt: "Which letters did you have to remember?", 
      options: ['C', 'E', 'G', 'H', 'I', 'K', 'N', 'R', 'U', 'Y'],
      horizontal: true,
      required: false,
      name: 'Recall'
    }, 
  ], 
  data: {
    variable: 'recall',
    task: 'removal',
    round: '1'
  }
};

var removal_abs_recall_round2 = {
  type: jsPsychSurveyMultiSelect,
  questions: [
    {
      prompt: "Which letters did you have to remember?", 
      options: ['A', 'C', 'D', 'G', 'I', 'L', 'O', 'T', 'U', 'W'],
      horizontal: true,
      required: false,
      name: 'Recall'
    }, 
  ], 
  data: {
    variable: 'recall',
    task: 'removal',
    round: '1'
  }
};

var removal_abs_recall_round3 = {
  type: jsPsychSurveyMultiSelect,
  questions: [
    {
      prompt: "Which letters did you have to remember?", 
      options: ['C', 'F', 'G', 'J', 'Q', 'R', 'S', 'T', 'U', 'Y'],
      horizontal: true,
      required: false,
      name: 'Recall'
    }, 
  ], 
  data: {
    variable: 'recall',
    task: 'removal',
    round: '1'
  }
};

var removal_abs_recall_round4 = {
  type: jsPsychSurveyMultiSelect,
  questions: [
    {
      prompt: "Which letters did you have to remember?", 
      options: ['B', 'C', 'G', 'L', 'M', 'R', 'S', 'U', 'W', 'Y'],
      horizontal: true,
      required: false,
      name: 'Recall'
    }, 
  ], 
  data: {
    variable: 'recall',
    task: 'removal',
    round: '1'
  }
};

var removal_abs_recall_round5 = {
  type: jsPsychSurveyMultiSelect,
  questions: [
    {
      prompt: "Which letters did you have to remember?", 
      options: ['B', 'C', 'G', 'L', 'M', 'R', 'S', 'U', 'W', 'Y'],
      horizontal: true,
      required: false,
      name: 'Recall'
    }, 
  ], 
  data: {
    variable: 'recall',
    task: 'removal',
    round: '1'
  }
};






var iteration = [fixation, stimulus_abs, probe]

var removal_abs_round0 = {
  timeline: iteration,
   timeline_variables: stimuli_round0_abs
}

var removal_abs_round1 = {
  timeline: iteration,
   timeline_variables: stimuli_round1_abs
}

var removal_abs_round2 = {
  timeline: iteration,
   timeline_variables: stimuli_round2_abs
}

var removal_abs_round3 = {
  timeline: iteration,
   timeline_variables: stimuli_round3_abs
}

var removal_abs_round4 = {
  timeline: iteration,
   timeline_variables: stimuli_round4_abs
}

var removal_abs_round5 = {
  timeline: iteration,
   timeline_variables: stimuli_round5_abs
}


