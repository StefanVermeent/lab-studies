
var trial_count = -1;

var removal2_preload = {
  type: jsPsychPreload,
  images: [
    "removal_ecker/img/instructions1.png",
    "removal_ecker/img/instructions2.png",
    "removal_ecker/img/instructions3.png",
    "removal_ecker/img/instructions4.png",
    "removal_ecker/img/instructions5.png",
  ]
};

// Fixation cross
var fixation = {
  on_start: function(){
    trial_count += 1
  },
  type: jsPsychHtmlKeyboardResponse,
  stimulus: '<div style="font-size:60px;">+</div>',
  choices: "NO_KEYS",
  trial_duration: 500,
  data: {
    variable: 'fixation',
    task: 'removal2_notlog'
  }
};


var removal2_encoding = {
  type: jsPsychHtmlKeyboardResponse,
  stimulus: function(){
    var letters = jsPsych.timelineVariable('encoding')
    if(trial_count == 0){
      stim = encoding_display(letters)
    } else {
      stim = encoding_display(['', '', ''])
    }
    return stim
  },
  choices: "NO_KEYS",
  trial_duration: function(){
    if(trial_count == 0){
      duration = 2000
    } else {
      duration = 0
    }
    return duration
  },
  data: {
    variable: 'encoding',
    task: 'removal2',
    stimulus: ''
  }
}

var removal2_emptyscreen = {
  type: jsPsychHtmlKeyboardResponse,
  stimulus: function(){
    stim = encoding_display(['', '', ''])
    return stim
  },
  choices: "NO_KEYS",
  trial_duration: function(){
    duration = jsPsych.timelineVariable('interval_empty')[trial_count]
    return duration
  },
  data: {
    variable: 'emptyscreen',
    task: 'removal2_notlog',
    stimulus: ''
  }
}

var removal2_positioncue = {
  type: jsPsychHtmlKeyboardResponse,
  stimulus: function(){
    position = jsPsych.timelineVariable('position')[trial_count]
    stim = cueing_display(position)
    return stim
  },
  choices: "NO_KEYS",
  trial_duration: function(){
    duration = jsPsych.timelineVariable('interval_cue')[trial_count]
    return duration
  },
  data: {
    variable: 'cue',
    task: 'removal2_notlog',
    stimulus: ''
  }
}

var removal2_newletter = {
  type: jsPsychHtmlKeyboardResponse,
  stimulus: function(){
    position = jsPsych.timelineVariable('position')[trial_count]
    letter = jsPsych.timelineVariable('letter')[trial_count]
    stim = update_display(letter, position)
    return stim
  },
  choices: "ALL_KEYS",
  trial_duration: 5000,
  data: {
    variable: 'newletter',
    task: function(){return jsPsych.timelineVariable('task'),
    stimulus: '',
    position: function(){return jsPsych.timelineVariable('position')[trial_count]},
    letter: function(){return jsPsych.timelineVariable('letter')[trial_count]},
    duration_cue: function(){return jsPsych.timelineVariable('interval_cue')[trial_count]},
    duration_int: function(){return jsPsych.timelineVariable('interval_empty')[trial_count]},
    correct: function(){return jsPsych.timelineVariable('correct')}
  },
  on_finish: function(){
    
    if(trial_count == jsPsych.timelineVariable('length')) {
      console.log("STOP")
      trial_count = -1
      jsPsych.endCurrentTimeline();
    }
  }
}

var removal2_recall = {
  type: jsPsychSurveyHtmlForm,
  preamble: '<p>Type the most recent letters in the correct position</b></p>',
  html: function(){
    stim = recall_display()
    return stim
  },
  dataAsArray: true,
  data: {
    variable: 'recall',
    task: function(){return jsPsych.timelineVariable('task'),
    stimulus: '',
    correct: function(){return jsPsych.data.get().last(1).values()[0].correct}
  }
  
};

var removal2_interblock = {
  type: jsPsychHtmlKeyboardResponse,
  stimulus: 'Press any key to start the next block.',
  choices: "ALL_KEYS",
  data: {
    variable: 'interblock',
    task: 'removal2_notlog'
  }
};



var removal2_updating_loop_01 = {
  timeline: [removal2_encoding, removal2_emptyscreen, removal2_positioncue, removal2_newletter],
  loop_function: function(){
    if(trial_count == jsPsych.timelineVariable('length')){
      trial_count = 0
      console_log("REACHED THE END")
      return false;
    } else {
      trial_count += 1
      return true;
    }
  },
  timeline_variables: [
{encoding: ['Q', 'G', 'R'], interval_empty: ['1800', '1800', '500'], interval_cue: ['1500', '1500', '1500'], position: ['2', '1', '0'], letter: ['S', 'F', 'L'], length: 2, correct: ['L', 'F', 'S'], task: 'removal2_01'},
]
}

var removal2_updating_loop_02 = {
  timeline: [removal2_encoding, removal2_emptyscreen, removal2_positioncue, removal2_newletter],
  loop_function: function(){
    if(trial_count == jsPsych.timelineVariable('length')){
      trial_count = 0
      console_log("REACHED THE END")
      return false;
    } else {
      trial_count += 1
      return true;
    }
  },
  timeline_variables: [
    {encoding: ['M', 'V', 'C'], interval_empty: ['500', '1800', '1800', '500', '500', '500', '500', '1800', '500', '1800'], interval_cue: ['1500', '1500', '1500', '200', '1500', '200', '200', '1500', '1500', '200'], position: ['0', '0', '2', '0', '0', '2', '0', '2', '2', '0'], letter: ['W', 'B', 'U', 'O', 'E', 'A', 'P', 'X', 'S', 'K'], length: 9, correct: ['K', 'v', 'S'], task: 'removal2_01'},
]
}

var removal2_updating_loop_03 = {
  timeline: [removal2_encoding, removal2_emptyscreen, removal2_positioncue, removal2_newletter],
  loop_function: function(){
    if(trial_count == jsPsych.timelineVariable('length')){
      trial_count = 0
      console_log("REACHED THE END")
      return false;
    } else {
      trial_count += 1
      return true;
    }
  },
  timeline_variables: [
  {encoding: ['O', 'F', 'H'], interval_empty: ['1800', '500', '500', '1800', '500', '500', '1800', '500', '500', '1800', '500', '1800', '1800', '500', '500', '500', '500'], interval_cue: ['1500', '200', '200', '1500', '200', '200', '1500', '200', '1500', '1500', '200', '200', '1500', '200', '1500', '1500', '1500'], position: ['1', '0', '0', '2', '2', '0', '1', '0', '1', '2', '0', '0', '0', '2', '0', '0', '0'], letter: ['Q', 'P', 'K', 'X', 'B', 'D', 'Y', 'T', 'Z', 'S', 'U', 'R', 'L', 'J', 'M', 'G', 'C'], length: 16, correct: ['C', 'Z', 'J'], task: 'removal2_01'},
]
}

var removal2_updating_loop_04 = {
  timeline: [removal2_encoding, removal2_emptyscreen, removal2_positioncue, removal2_newletter],
  loop_function: function(){
    if(trial_count == jsPsych.timelineVariable('length')){
      trial_count = 0
      console_log("REACHED THE END")
      return false;
    } else {
      trial_count += 1
      return true;
    }
  },
  timeline_variables: [
  {encoding: ['M', 'L', 'U'], interval_empty: ['500', '1800', '500', '500', '500', '500', '500', '1800', '500', '1800', '1800', '500', '500', '1800', '1800', '1800', '1800', '1800', '1800', '1800', '1800'], interval_cue: ['1500', '1500', '200', '1500', '1500', '1500', '200', '200', '200', '200', '200', '1500', '200', '1500', '1500', '1500', '1500', '1500', '200', '1500', '200'], position: ['2', '0', '0', '2', '2', '1', '1', '1', '0', '0', '1', '0', '0', '2', '2', '2', '2', '0', '0', '1', '0'], letter: ['K', 'Z', 'E', 'W', 'P', 'S', 'N', 'O', 'D', 'R', 'Q', 'X', 'J', 'A', 'T', 'H', 'F', 'I', 'Y', 'B', 'C'], length: 20, correct: ['C', 'B', 'F'], task: 'removal2_02'},
]
}

var removal2_updating_loop_05 = {
  timeline: [removal2_encoding, removal2_emptyscreen, removal2_positioncue, removal2_newletter],
  loop_function: function(){
    if(trial_count == jsPsych.timelineVariable('length')){
      trial_count = 0
      console_log("REACHED THE END")
      return false;
    } else {
      trial_count += 1
      return true;
    }
  },
  timeline_variables: [
 {encoding: ['T', 'R', 'A'], interval_empty: ['500', '1800', '500', '500', '500', '500', '500', '1800'], interval_cue: ['1500', '200', '200', '200', '1500', '1500', '200', '1500'], position: ['1', '2', '2', '2', '1', '0', '1', '0'], letter: ['N', 'Z', 'K', 'P', 'L', 'D', 'X', 'O'], length: 7, correct: ['O', 'X', 'P'], task: 'removal2_02'},
  ]
};

var removal2_updating_loop_06 = {
  timeline: [removal2_encoding, removal2_emptyscreen, removal2_positioncue, removal2_newletter],
  loop_function: function(){
    if(trial_count == jsPsych.timelineVariable('length')){
      trial_count = 0
      console_log("REACHED THE END")
      return false;
    } else {
      trial_count += 1
      return true;
    }
  },
  timeline_variables: [
   {encoding: ['U', 'E', 'A'], interval_empty: ['500', '1800', '500', '1800', '1800', '500', '500', '1800', '500', '1800', '500', '1800', '1800', '500', '500', '500', '1800', '500', '500', '500'], interval_cue: ['1500', '200', '1500', '200', '200', '1500', '1500', '1500', '200', '1500', '200', '200', '200', '200', '200', '1500', '200', '1500', '200', '200'], position: ['2', '1', '0', '2', '2', '1', '2', '1', '2', '0', '0', '1', '0', '0', '1', '2', '0', '0', '1', '1'], letter: ['X', 'K', 'F', 'Z', 'D', 'L', 'B', 'W', 'M', 'C', 'V', 'G', 'S', 'J', 'N', 'O', 'Y', 'P', 'T', 'I'], length: 19, correct: ['P', 'I', 'O'], task: 'removal2_02'},
]
}

var removal2_updating_loop_07 = {
  timeline: [removal2_encoding, removal2_emptyscreen, removal2_positioncue, removal2_newletter],
  loop_function: function(){
    if(trial_count == jsPsych.timelineVariable('length')){
      trial_count = 0
      console_log("REACHED THE END")
      return false;
    } else {
      trial_count += 1
      return true;
    }
  },
  timeline_variables: [
    {encoding: ['Q', 'C', 'Y'], interval_empty: ['1800', '500', '500', '500', '500', '500', '500', '1800', '1800', '500', '1800', '500', '500', '1800', '500'], interval_cue: ['200', '200', '200', '1500', '200', '200', '200', '200', '200', '200', '200', '1500', '200', '1500', '1500'], position: ['2', '1', '0', '2', '1', '2', '1', '1', '1', '0', '0', '2', '2', '1', '1'], letter: ['I', 'J', 'U', 'K', 'O', 'E', 'M', 'W', 'Z', 'L', 'R', 'V', 'B', 'X', 'S'], length: 14, correct: ['R', 'S', 'B'], task: 'removal2_03'},
]
}

var removal2_updating_loop_08 = {
  timeline: [removal2_encoding, removal2_emptyscreen, removal2_positioncue, removal2_newletter],
  loop_function: function(){
    if(trial_count == jsPsych.timelineVariable('length')){
      trial_count = 0
      console_log("REACHED THE END")
      return false;
    } else {
      trial_count += 1
      return true;
    }
  },
  timeline_variables: [
    {encoding: ['Z', 'K', 'M'], interval_empty: ['500', '500', '1800', '500', '500', '500', '500', '500', '1800', '1800', '1800', '1800', '1800', '500', '1800', '1800', '500', '500', '1800', '500', '500'], interval_cue: ['200', '200', '1500', '1500', '1500', '200', '1500', '1500', '200', '1500', '200', '200', '1500', '1500', '200', '200', '200', '200', '1500', '200', '200'], position: ['0', '0', '1', '0', '0', '0', '0', '0', '0', '1', '2', '1', '1', '2', '2', '1', '1', '2', '0', '2', '0'], letter: ['D', 'I', 'A', 'Q', 'U', 'X', 'L', 'Y', 'S', 'G', 'P', 'H', 'W', 'T', 'F', 'O', 'R', 'V', 'C', 'B', 'J'], length: 20, correct: ['J', 'R', 'B'], task: 'removal2_03'},
]
}

var removal2_updating_loop_09 = {
  timeline: [removal2_encoding, removal2_emptyscreen, removal2_positioncue, removal2_newletter],
  loop_function: function(){
    if(trial_count == jsPsych.timelineVariable('length')){
      trial_count = 0
      console_log("REACHED THE END")
      return false;
    } else {
      trial_count += 1
      return true;
    }
  },
  timeline_variables: [
   {encoding: ['L', 'A', 'G'], interval_empty: ['500'], interval_cue: ['200'], position: ['0'], letter: ['S'], length: 0, correct: ['S', 'A', 'G'], task: 'removal2_03'},
]
}

var removal2_updating_loop_10 = {
  timeline: [removal2_encoding, removal2_emptyscreen, removal2_positioncue, removal2_newletter],
  loop_function: function(){
    if(trial_count == jsPsych.timelineVariable('length')){
      trial_count = 0
      console_log("REACHED THE END")
      return false;
    } else {
      trial_count += 1
      return true;
    }
  },
  timeline_variables: [
   {encoding: ['Y', 'I', 'B'], interval_empty: ['500', '1800'], interval_cue: ['200', '200'], position: ['1', '1'], letter: ['H', 'G'], length: 1, correct: ['y', 'G', 'B'], task: 'removal2_03'},
]
}




 



