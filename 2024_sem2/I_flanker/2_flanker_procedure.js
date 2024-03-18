var flanker_present_arrows = {
  type: jsPsychHtmlKeyboardResponse,
  stimulus: function(){
    return jsPsych.timelineVariable('stim')
  },
  choices: ['A', 'L'],
  data: {
    variable: 'test',
    task: 'flanker',
    location: function(){
      return jsPsych.timelineVariable('location')
    },
    stimtype: function(){
      return jsPsych.timelineVariable('stimtype')
    },
    correct_response: function(){
      return jsPsych.timelineVariable('correct_response')
    }
  },
  on_finish: function(data) { {
    if(jsPsych.pluginAPI.compareKeys(data.response, jsPsych.timelineVariable('correct_response', true))) {
      data.correct = true;
    } else {
      data.correct = false;
    }
  }
  }
};


var flanker_test_procedure01 = {
  timeline: [flanker_fixation, flanker_present_arrows],
  timeline_variables: [
    {location: 'top',    correct_response: 'A', stimtype: 'congruent_left', gender: 'male', stim: location_stim(up=left_m+left_m+left_m+left_m+left_m, down=null)},
    {location: 'top',    correct_response: 'L', stimtype: 'congruent_right', gender: 'male', stim: location_stim(up=right_m+right_m+right_m+right_m+right_m, down=null)},
    {location: 'top',    correct_response: 'A', stimtype: 'incongruent_left', gender: 'male', stim: location_stim(up=right_m+right_m+left_m+right_m+right_m, down=null)},
    {location: 'top',    correct_response: 'L', stimtype: 'incongruent_right', gender: 'male', stim: location_stim(up=left_m+left_m+right_m+left_m+left_m, down=null)},
    {location: 'bottom', correct_response: 'A', stimtype: 'congruent_left', gender: 'male', stim: location_stim(up=null, down=left_m+left_m+left_m+left_m+left_m)},
    {location: 'bottom', correct_response: 'L', stimtype: 'congruent_right', gender: 'male', stim: location_stim(up=null, down=right_m+right_m+right_m+right_m+right_m)},
    {location: 'bottom', correct_response: 'A', stimtype: 'incongruent_left', gender: 'male', stim: location_stim(up=null, down=right_m+right_m+left_m+right_m+right_m)},
    {location: 'bottom', correct_response: 'L', stimtype: 'incongruent_right', gender: 'male', stim: location_stim(up=null, down=left_m+left_m+right_m+left_m+left_m)},
    
    {location: 'top',    correct_response: 'A', stimtype: 'congruent_left', gender: 'female', stim: location_stim(up=left_f+left_f+left_f+left_f+left_f, down=null)},
    {location: 'top',    correct_response: 'L', stimtype: 'congruent_right', gender: 'female', stim: location_stim(up=right_f+right_f+right_f+right_f+right_f, down=null)},
    {location: 'top',    correct_response: 'A', stimtype: 'incongruent_left', gender: 'female', stim: location_stim(up=right_f+right_f+left_f+right_f+right_f, down=null)},
    {location: 'top',    correct_response: 'L', stimtype: 'incongruent_right', gender: 'female', stim: location_stim(up=left_f+left_f+right_f+left_f+left_f, down=null)},
    {location: 'bottom', correct_response: 'A', stimtype: 'congruent_left', gender: 'female', stim: location_stim(up=null, down=left_f+left_f+left_f+left_f+left_f)},
    {location: 'bottom', correct_response: 'L', stimtype: 'congruent_right', gender: 'female', stim: location_stim(up=null, down=right_f+right_f+right_f+right_f+right_f)},
    {location: 'bottom', correct_response: 'A', stimtype: 'incongruent_left', gender: 'female', stim: location_stim(up=null, down=right_f+right_f+left_f+right_f+right_f)},
    {location: 'bottom', correct_response: 'L', stimtype: 'incongruent_right', gender: 'female', stim: location_stim(up=null, down=left_f+left_f+right_f+left_f+left_f)},
    
  ],
  randomize_order: true,
  repetitions: 2,
};

var flanker_interblock = {
  type: jsPsychHtmlButtonResponse,
  stimulus: "Goed gedaan! Je bent nu halverwege.<br>Neem even pauze als je dat nodig hebt en druk op 'verder' als je klaar bent voor de rest van het spel.<br><br>",
  choices: ['verder'],
  data: {
    task: 'flanker',
    variable: 'interblock'
  }
}

var flanker_test_start = {
    type: jsPsychHtmlKeyboardResponse,
    stimulus: "<p style = 'text-align: center;'>" +
      "Plaats je vingers op de 'A'-toets en 'L'-toets op je toetsenbord.<br><br><br>" +
      "Druk op een willekeurige toets als je klaar ben om door te gaan.",
  choices: "ALL_KEYS",
  data: {
    variable: 'test_start', task: 'flanker'
  }
}

var flanker_test_procedure02 = {
  timeline: [flanker_fixation, flanker_present_arrows],
  timeline_variables: [
    {location: 'top',    correct_response: 'A', stimtype: 'congruent_left', gender: 'male', stim: location_stim(up=left_m+left_m+left_m+left_m+left_m, down=null)},
    {location: 'top',    correct_response: 'L', stimtype: 'congruent_right', gender: 'male', stim: location_stim(up=right_m+right_m+right_m+right_m+right_m, down=null)},
    {location: 'top',    correct_response: 'A', stimtype: 'incongruent_left', gender: 'male', stim: location_stim(up=right_m+right_m+left_m+right_m+right_m, down=null)},
    {location: 'top',    correct_response: 'L', stimtype: 'incongruent_right', gender: 'male', stim: location_stim(up=left_m+left_m+right_m+left_m+left_m, down=null)},
    {location: 'bottom', correct_response: 'A', stimtype: 'congruent_left', gender: 'male', stim: location_stim(up=null, down=left_m+left_m+left_m+left_m+left_m)},
    {location: 'bottom', correct_response: 'L', stimtype: 'congruent_right', gender: 'male', stim: location_stim(up=null, down=right_m+right_m+right_m+right_m+right_m)},
    {location: 'bottom', correct_response: 'A', stimtype: 'incongruent_left', gender: 'male', stim: location_stim(up=null, down=right_m+right_m+left_m+right_m+right_m)},
    {location: 'bottom', correct_response: 'L', stimtype: 'incongruent_right', gender: 'male', stim: location_stim(up=null, down=left_m+left_m+right_m+left_m+left_m)},
    
    {location: 'top',    correct_response: 'A', stimtype: 'congruent_left', gender: 'female', stim: location_stim(up=left_f+left_f+left_f+left_f+left_f, down=null)},
    {location: 'top',    correct_response: 'L', stimtype: 'congruent_right', gender: 'female', stim: location_stim(up=right_f+right_f+right_f+right_f+right_f, down=null)},
    {location: 'top',    correct_response: 'A', stimtype: 'incongruent_left', gender: 'female', stim: location_stim(up=right_f+right_f+left_f+right_f+right_f, down=null)},
    {location: 'top',    correct_response: 'L', stimtype: 'incongruent_right', gender: 'female', stim: location_stim(up=left_f+left_f+right_f+left_f+left_f, down=null)},
    {location: 'bottom', correct_response: 'A', stimtype: 'congruent_left', gender: 'female', stim: location_stim(up=null, down=left_f+left_f+left_f+left_f+left_f)},
    {location: 'bottom', correct_response: 'L', stimtype: 'congruent_right', gender: 'female', stim: location_stim(up=null, down=right_f+right_f+right_f+right_f+right_f)},
    {location: 'bottom', correct_response: 'A', stimtype: 'incongruent_left', gender: 'female', stim: location_stim(up=null, down=right_f+right_f+left_f+right_f+right_f)},
    {location: 'bottom', correct_response: 'L', stimtype: 'incongruent_right', gender: 'female', stim: location_stim(up=null, down=left_f+left_f+right_f+left_f+left_f)},
  ],
  randomize_order: true,
  repetitions: 2,
};