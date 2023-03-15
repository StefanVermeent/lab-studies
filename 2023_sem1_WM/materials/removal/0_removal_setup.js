
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
var stimulus = {
  type: jsPsychHtmlKeyboardResponse,
  stimulus: jsPsych.timelineVariable('stim'),
  choices: "NO_KEYS",
  trial_duration: 2000,
  data: {
    variable: 'stimulus'
  }
}

// Forget or Remember probe
var probe = {
  type: jsPsychHtmlKeyboardResponse,
  stimulus: '<p style = "color:red;font-size:40px">' + jsPsych.timelineVariable('probetype') + '</p>',
  trial_duration: 2000,
  choices: "NO_KEYS",
  data: {
    variable: 'probe'
  }
};


// General variables
var fullscreenmode = {
  type: jsPsychFullscreen,
  fullscreen_mode: true
};

var cursor_off = {
    type: jsPsychCallFunction,
    func: function() {
        document.body.style.cursor= "none";
    }
};

var cursor_on = {
    type: jsPsychCallFunction,
    func: function() {
        document.body.style.cursor= "auto";
    }
};


