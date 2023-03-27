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
var stimulus_eco = {
  type: jsPsychImageKeyboardResponse,
  stimulus: function() {
        var stim =  jsPsych.timelineVariable('stim');
        return stim;
    },
  stimulus_width: 200,
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

var removal_recall = {
  type: jsPsychSurveyMultiSelect,
  questions: [
    {
      prompt: "Which letters did you have to remember?", 
      options: ['stimuli/BOSS/alarmclock01.png', 'stimuli/BOSS/avcable.png', 'stimuli/BOSS/battery02b.png'],
      horizontal: true,
      required: false,
      name: 'Recall'
    }, 
  ], 
};


var hits = 0
var false_alarm = 0

var removal_practice_preload = {
  type: jsPsychPreload,
  images: [
    'removal/stimuli/practice/apple03a.png','removal/stimuli/practice/banana04b.png','removal/stimuli/practice/breadslice.png',
  'removal/stimuli/practice/broccoli01b.png','removal/stimuli/practice/cabbage.png','removal/stimuli/practice/cauliflower02.png',
  'removal/stimuli/practice/cherrytomato02.png','removal/stimuli/practice/cookie02a.png'
  ]
}


var removal_round0_preload = {
  type: jsPsychPreload,
  images: [
    'removal/stimuli/practice/apple03a.png','removal/stimuli/practice/breadslice.png', 'removal/stimuli/practice/cabbage.png', 
    'removal/stimuli/practice/cherrytomato02.png', 'removal/stimuli/practice/banana04b.png', 'removal/stimuli/practice/broccoli01b.png', 
    'removal/stimuli/practice/cauliflower02.png', 'removal/stimuli/practice/cookie02a.png', 
  ]
}
// practice round
var stimuli_round0_eco = [
{stim: 'removal/stimuli/practice/apple03a.png', version: 'eco', round: '0', probetype: 'REMEMBER'},
{stim: 'removal/stimuli/practice/breadslice.png', version: 'eco', round: '0', probetype: 'FORGET'},
{stim: 'removal/stimuli/practice/cabbage.png', version: 'eco', round: '0', probetype: 'FORGET'},
{stim: 'removal/stimuli/practice/cherrytomato02.png', version: 'eco', round: '0', probetype: 'REMEMBER'},
{stim: 'removal/stimuli/practice/banana04b.png', version: 'eco', round: '0', probetype: 'FORGET'},
{stim: 'removal/stimuli/practice/broccoli01b.png', version: 'eco', round: '0', probetype: 'REMEMBER'},
{stim: 'removal/stimuli/practice/cauliflower02.png', version: 'eco', round: '0', probetype: 'REMEMBER'},
{stim: 'removal/stimuli/practice/cookie02a.png', version: 'eco', round: '0', probetype: 'FORGET'},

]


var removal_round1_preload = {
  type: jsPsychPreload,
  images: [
    'removal/stimuli/BOSS/threeholepunch03.png', 'removal/stimuli/BOSS/pencilsharpener02a.png', 'removal/stimuli/BOSS/spatula03.png', 
    'removal/stimuli/BOSS/qtip.png', 'removal/stimuli/BOSS/manshoe.png','removal/stimuli/BOSS/tuque03a.png', 
    'removal/stimuli/BOSS/makeupbrush04.png','removal/stimuli/BOSS/spoon01.png','removal/stimuli/BOSS/grater01a.png', 
    'removal/stimuli/BOSS/overalls.png'
  ]
}
var stimuli_round1_eco = [
{stim: 'removal/stimuli/BOSS/threeholepunch03.png', version: 'eco', round: '1', probetype: 'REMEMBER'},
{stim: 'removal/stimuli/BOSS/pencilsharpener02a.png', version: 'eco', round: '1', probetype: 'REMEMBER'},
{stim: 'removal/stimuli/BOSS/spatula03.png', version: 'eco', round: '1', probetype: 'FORGET'},
{stim: 'removal/stimuli/BOSS/qtip.png', version: 'eco', round: '1', probetype: 'FORGET'},
{stim: 'removal/stimuli/BOSS/manshoe.png', version: 'eco', round: '1', probetype: 'FORGET'},
{stim: 'removal/stimuli/BOSS/tuque03a.png', version: 'eco', round: '1', probetype: 'REMEMBER'},
{stim: 'removal/stimuli/BOSS/makeupbrush04.png', version: 'eco', round: '1', probetype: 'FORGET'},
{stim: 'removal/stimuli/BOSS/spoon01.png', version: 'eco', round: '1', probetype: 'FORGET'},
{stim: 'removal/stimuli/BOSS/grater01a.png', version: 'eco', round: '1', probetype: 'REMEMBER'},
{stim: 'removal/stimuli/BOSS/overalls.png', version: 'eco', round: '1', probetype: 'REMEMBER'},
]

var removal_round2_preload = {
  type: jsPsychPreload,
  images: [
    'removal/stimuli/BOSS/sock01a.png',
    'removal/stimuli/BOSS/plate01b.png',
    'removal/stimuli/BOSS/measuringcup01.png', 
    'removal/stimuli/BOSS/toaster01.png', 
    'removal/stimuli/BOSS/highheelshoe01.png', 
    'removal/stimuli/BOSS/shirt01.png', 
    'removal/stimuli/BOSS/moccasin.png', 
    'removal/stimuli/BOSS/remotecontrol04.png', 
    'removal/stimuli/BOSS/alarmclock01.png', 
    'removal/stimuli/BOSS/soapdispenser01.png'
  ]
}
//ROUND 2
var stimuli_round2_eco = [
{stim: 'removal/stimuli/BOSS/sock01a.png', version: 'eco', round: '2', probetype: 'REMEMBER'},
{stim: 'removal/stimuli/BOSS/plate01b.png', version: 'eco', round: '2', probetype: 'REMEMBER'},
{stim: 'removal/stimuli/BOSS/measuringcup01.png', version: 'eco', round: '2', probetype: 'FORGET'},
{stim: 'removal/stimuli/BOSS/toaster01.png', version: 'eco', round: '2', probetype: 'FORGET'},
{stim: 'removal/stimuli/BOSS/highheelshoe01.png', version: 'eco', round: '2', probetype: 'REMEMBER'},
{stim: 'removal/stimuli/BOSS/shirt01.png', version: 'eco', round: '2', probetype: 'REMEMBER'},
{stim: 'removal/stimuli/BOSS/moccasin.png', version: 'eco', round: '2', probetype: 'REMEMBER'},
{stim: 'removal/stimuli/BOSS/remotecontrol04.png', version: 'eco', round: '2', probetype: 'FORGET'},
{stim: 'removal/stimuli/BOSS/alarmclock01.png', version: 'eco', round: '2', probetype: 'FORGET'},
{stim: 'removal/stimuli/BOSS/soapdispenser01.png', version: 'eco', round: '2', probetype: 'FORGET'},
]

var removal_round3_preload = {
  type: jsPsychPreload,
  images: [
    'removal/stimuli/BOSS/pencil01.png', 
    'removal/stimuli/BOSS/computermouse06.png', 
    'removal/stimuli/BOSS/mechanicalpencil02.png', 
    'removal/stimuli/BOSS/shorts01.png', 
    'removal/stimuli/BOSS/slipper01b.png', 
    'removal/stimuli/BOSS/cd.png', 
    'removal/stimuli/BOSS/tupperware03a.png', 
    'removal/stimuli/BOSS/laptop01a.png', 
    'removal/stimuli/BOSS/foodprocessor.png', 
    'removal/stimuli/BOSS/cap01a.png'
  ]
}
//ROUND 3
var stimuli_round3_eco = [
{stim: 'removal/stimuli/BOSS/pencil01.png', version: 'eco', round: '3', probetype: 'FORGET'},
{stim: 'removal/stimuli/BOSS/computermouse06.png', version: 'eco', round: '3', probetype: 'REMEMBER'},
{stim: 'removal/stimuli/BOSS/mechanicalpencil02.png', version: 'eco', round: '3', probetype: 'FORGET'},
{stim: 'removal/stimuli/BOSS/shorts01.png', version: 'eco', round: '3', probetype: 'REMEMBER'},
{stim: 'removal/stimuli/BOSS/slipper01b.png', version: 'eco', round: '3', probetype: 'REMEMBER'},
{stim: 'removal/stimuli/BOSS/cd.png', version: 'eco', round: '3', probetype: 'REMEMBER'},
{stim: 'removal/stimuli/BOSS/tupperware03a.png', version: 'eco', round: '3', probetype: 'FORGET'},
{stim: 'removal/stimuli/BOSS/laptop01a.png', version: 'eco', round: '3', probetype: 'FORGET'},
{stim: 'removal/stimuli/BOSS/foodprocessor.png', version: 'eco', round: '3', probetype: 'REMEMBER'},
{stim: 'removal/stimuli/BOSS/cap01a.png', version: 'eco', round: '3', probetype: 'FORGET'},
]

var removal_round4_preload = {
  type: jsPsychPreload,
  images: [
    'removal/stimuli/BOSS/ruler04.png', 
    'removal/stimuli/BOSS/highlighter02b.png', 
    'removal/stimuli/BOSS/ramekin01.png', 
    'removal/stimuli/BOSS/coffeepot03a.png', 
    'removal/stimuli/BOSS/fryingpan02a.png', 
    'removal/stimuli/BOSS/garlicpress02a.png', 
    'removal/stimuli/BOSS/pitcher02b.png',
    'removal/stimuli/BOSS/bleachbottle.png', 
    'removal/stimuli/BOSS/strainer02.png', 
    'removal/stimuli/BOSS/bowl01.png'
  ]
}
//ROUND 4
var stimuli_round4_eco = [
{stim: 'removal/stimuli/BOSS/ruler04.png', version: 'eco', round: '4', probetype: 'REMEMBER'},
{stim: 'removal/stimuli/BOSS/highlighter02b.png', version: 'eco', round: '4', probetype: 'FORGET'},
{stim: 'removal/stimuli/BOSS/ramekin01.png', version: 'eco', round: '4', probetype: 'REMEMBER'},
{stim: 'removal/stimuli/BOSS/coffeepot03a.png', version: 'eco', round: '4', probetype: 'REMEMBER'},
{stim: 'removal/stimuli/BOSS/fryingpan02a.png', version: 'eco', round: '4', probetype: 'REMEMBER'},
{stim: 'removal/stimuli/BOSS/garlicpress02a.png', version: 'eco', round: '4', probetype: 'FORGET'},
{stim: 'removal/stimuli/BOSS/pitcher02b.png', version: 'eco', round: '4', probetype: 'FORGET'},
{stim: 'removal/stimuli/BOSS/bleachbottle.png', version: 'eco', round: '4', probetype: 'FORGET'},
{stim: 'removal/stimuli/BOSS/strainer02.png', version: 'eco', round: '4', probetype: 'REMEMBER'},
{stim: 'removal/stimuli/BOSS/bowl01.png', version: 'eco', round: '4', probetype: 'FORGET'},
]

var removal_round5_preload = {
  type: jsPsychPreload,
  images: [
    'removal/stimuli/BOSS/corkscrew03a.png', 
    'removal/stimuli/BOSS/measuringspoon.png',
    'removal/stimuli/BOSS/envelope03a.png', 
    'removal/stimuli/BOSS/styrofoamcup.png', 
    'removal/stimuli/BOSS/cottonpad.png',
    'removal/stimuli/BOSS/sandal.png', 
    'removal/stimuli/BOSS/mug01.png', 
    'removal/stimuli/BOSS/eraser.png', 
    'removal/stimuli/BOSS/spatula04.png', 
    'removal/stimuli/BOSS/avcable.png'
  ]
}
//ROUND 5
var stimuli_round5_eco = [
{stim: 'removal/stimuli/BOSS/corkscrew03a.png', version: 'eco', round: '5', probetype: 'FORGET'},
{stim: 'removal/stimuli/BOSS/measuringspoon.png', version: 'eco', round: '5', probetype: 'FORGET'},
{stim: 'removal/stimuli/BOSS/envelope03a.png', version: 'eco', round: '5', probetype: 'REMEMBER'},
{stim: 'removal/stimuli/BOSS/styrofoamcup.png', version: 'eco', round: '5', probetype: 'REMEMBER'},
{stim: 'removal/stimuli/BOSS/cottonpad.png', version: 'eco', round: '5', probetype: 'FORGET'},
{stim: 'removal/stimuli/BOSS/sandal.png', version: 'eco', round: '5', probetype: 'FORGET'},
{stim: 'removal/stimuli/BOSS/mug01.png', version: 'eco', round: '5', probetype: 'FORGET'},
{stim: 'removal/stimuli/BOSS/eraser.png', version: 'eco', round: '5', probetype: 'REMEMBER'},
{stim: 'removal/stimuli/BOSS/spatula04.png', version: 'eco', round: '5', probetype: 'REMEMBER'},
{stim: 'removal/stimuli/BOSS/avcable.png', version: 'eco', round: '5', probetype: 'REMEMBER'},
]

var removal_eco_recall_round0 = {
  type: jsPsychSurveyMultiSelect,
  questions: [
    {
      prompt: "Which images did you have to remember?", 
      options: [
        '<img src="removal/stimuli/practice/apple03a.png" width="70"></img>', '<img src="removal/stimuli/practice/banana04b.png" width="70"></img>',   
'<img src="removal/stimuli/practice/breadslice.png" width="70"></img>', '<img src="removal/stimuli/practice/broccoli01b.png" width="70"></img>',   
'<img src="removal/stimuli/practice/cabbage.png" width="70"></img>', '<img src="removal/stimuli/practice/cauliflower02.png" width="70"></img>',
'<img src="removal/stimuli/practice/cherrytomato02.png" width="70"></img>', '<img src="removal/stimuli/practice/cookie02a.png" width="70"></img>'
],
      horizontal: false,
      required: false,
      name: 'Recall'
    }, 
  ], 
  data: {
    variable: 'recall',
    task: 'removal_eco',
    round: '0'
  }
};

var removal_eco_recall_round1 = {
  type: jsPsychSurveyMultiSelect,
  questions: [
    {
      prompt: "Which images did you have to remember?", 
      options: [
        '<img src="removal/stimuli/BOSS/grater01a.png" width="70"></img>',          '<img src="removal/stimuli/BOSS/makeupbrush04.png" width="70"></img>',     
'<img src="removal/stimuli/BOSS/manshoe.png" width="70"></img>',            '<img src="removal/stimuli/BOSS/overalls.png" width="70"></img>',       
'<img src="removal/stimuli/BOSS/pencilsharpener02a.png" width="70"></img>', '<img src="removal/stimuli/BOSS/qtip.png" width="70"></img>',             
'<img src="removal/stimuli/BOSS/spatula03.png" width="70"></img>',          '<img src="removal/stimuli/BOSS/spoon01.png" width="70"></img>',           
'<img src="removal/stimuli/BOSS/threeholepunch03.png" width="70"></img>',   '<img src="removal/stimuli/BOSS/tuque03a.png" width="70"></img>'
],
      horizontal: false,
      required: false,
      name: 'Recall'
    }, 
  ], 
  data: {
    variable: 'recall',
    task: 'removal_eco',
    round: '1'
  }
};

var removal_eco_recall_round2 = {
  type: jsPsychSurveyMultiSelect,
  questions: [
    {
      prompt: "Which images did you have to remember?", 
      options: [
        '<img src="removal/stimuli/BOSS/alarmclock01.png" width="70"></img>',    '<img src="removal/stimuli/BOSS/highheelshoe01.png" width="70"></img>',
 '<img src="removal/stimuli/BOSS/measuringcup01.png" width="70"></img>',  '<img src="removal/stimuli/BOSS/moccasin.png" width="70"></img>' ,     
'<img src="removal/stimuli/BOSS/plate01b.png" width="70"></img>',        '<img src="removal/stimuli/BOSS/remotecontrol04.png" width="70"></img>',
'<img src="removal/stimuli/BOSS/shirt01.png" width="70"></img>',         '<img src="removal/stimuli/BOSS/soapdispenser01.png" width="70"></img>',
'<img src="removal/stimuli/BOSS/sock01a.png" width="70"></img>',        '<img src="removal/stimuli/BOSS/toaster01.png" width="70"></img>'
],
      horizontal: false,
      required: false,
      name: 'Recall'
    }, 
  ], 
  data: {
    variable: 'recall',
    task: 'removal_eco',
    round: '2'
  }
};

var removal_eco_recall_round3 = {
  type: jsPsychSurveyMultiSelect,
  questions: [
    {
      prompt: "Which images did you have to remember?", 
      options: [
        '<img src="removal/stimuli/BOSS/cap01a.png" width="70"></img>',             '<img src="removal/stimuli/BOSS/cd.png" width="70"></img>',               
 '<img src="removal/stimuli/BOSS/computermouse06.png" width="70"></img>',   '<img src="removal/stimuli/BOSS/foodprocessor.png" width="70"></img>',    
'<img src="removal/stimuli/BOSS/laptop01a.png" width="70"></img>',         '<img src="removal/stimuli/BOSS/mechanicalpencil02.png" width="70"></img>',
'<img src="removal/stimuli/BOSS/pencil01.png" width="70"></img>' ,         '<img src="removal/stimuli/BOSS/shorts01.png" width="70"></img>',      
 '<img src="removal/stimuli/BOSS/slipper01b.png" width="70"></img>',         '<img src="removal/stimuli/BOSS/tupperware03a.png" width="70"></img>"  
],
      horizontal: false,
      required: false,
      name: 'Recall'
    }, 
  ], 
  data: {
    variable: 'recall',
    task: 'removal_eco',
    round: '3'
  }
};

var removal_eco_recall_round4 = {
  type: jsPsychSurveyMultiSelect,
  questions: [
    {
      prompt: "Which images did you have to remember?", 
      options: [
        '<img src="removal/stimuli/BOSS/bleachbottle.png" width="70"></img>',   '<img src="removal/stimuli/BOSS/bowl01.png" width="70"></img>',         '<img src="removal/stimuli/BOSS/coffeepot03a.png" width="70"></img>',  
 '<img src="removal/stimuli/BOSS/fryingpan02a.png" width="70"></img>',   '<img src="removal/stimuli/BOSS/garlicpress02a.png" width="70"></img>', '<img src="removal/stimuli/BOSS/highlighter02b.png" width="70"></img>',
 '<img src="removal/stimuli/BOSS/pitcher02b.png" width="70"></img>',     '<img src="removal/stimuli/BOSS/ramekin01.png" width="70"></img>',      '<img src="removal/stimuli/BOSS/ruler04.png" width="70"></img>',       
'<img src="removal/stimuli/BOSS/strainer02.png" width="70"></img>' 
],
      horizontal: false,
      required: false,
      name: 'Recall'
    }, 
  ], 
  data: {
    variable: 'recall',
    task: 'removal_eco',
    round: '4'
  }
};

var removal_eco_recall_round5 = {
  type: jsPsychSurveyMultiSelect,
  questions: [
    {
      prompt: "Which images did you have to remember?", 
      options: [
        '<img src="removal/stimuli/BOSS/avcable.png" width="70"></img>',        '<img src="removal/stimuli/BOSS/corkscrew03a.png" width="70"></img>' ,  '<img src="removal/stimuli/BOSS/cottonpad.png" width="70"></img>',     
'<img src="removal/stimuli/BOSS/envelope03a.png" width="70"></img>',    '<img src="removal/stimuli/BOSS/eraser.png" width="70"></img>',         '<img src="removal/stimuli/BOSS/measuringspoon.png" width="70"></img>',
 '<img src="removal/stimuli/BOSS/mug01.png" width="70"></img>',          '<img src="removal/stimuli/BOSS/sandal.png" width="70"></img>',         '<img src="removal/stimuli/BOSS/spatula04.png" width="70"></img>',     
'<img src="removal/stimuli/BOSS/styrofoamcup.png" width="70"></img>' 
],
      horizontal: false,
      required: false,
      name: 'Recall'
    }, 
  ], 
  data: {
    variable: 'recall',
    task: 'removal_eco',
    round: '5'
  }
};



var removal_round1_start = {
  type: jsPsychHtmlKeyboardResponse,
  stimulus:    "<p style = 'text-align: center;'>" +
      "You will now begin round 1 of 4.<br><br>" +
      "press any key to start.",
  choices: "ALL_KEYS",
  data: {variable: "test_start", task: "removal_eco"}
};

var removal_round2_start = {
  type: jsPsychHtmlKeyboardResponse,
  stimulus:    "<p style = 'text-align: center;'>" +
      "You will now begin round 2 of 4.<br><br>" +
      "press any key to start.",
  choices: "ALL_KEYS",
  data: {variable: "test_start", task: "removal_eco"}
};

var removal_round3_start = {
  type: jsPsychHtmlKeyboardResponse,
  stimulus:    "<p style = 'text-align: center;'>" +
      "You will now begin round 3 of 4.<br><br>" +
      "press any key to start.",
  choices: "ALL_KEYS",
  data: {variable: "test_start", task: "removal_eco"}
};

var removal_round4_start = {
  type: jsPsychHtmlKeyboardResponse,
  stimulus:    "<p style = 'text-align: center;'>" +
      "You will now begin round 4 of 4.<br><br>" +
      "press any key to start.",
  choices: "ALL_KEYS",
  data: {variable: "test_start", task: "removal_eco"}
};

var removal_round5_start = {
  type: jsPsychHtmlKeyboardResponse,
  stimulus:    "<p style = 'text-align: center;'>" +
      "You will now begin round 5 of 5.<br><br>" +
      "press any key to start.",
  choices: "ALL_KEYS",
  data: {variable: "test_start", task: "removal_eco"}
};


var iteration = [fixation, stimulus_eco, probe]

var removal_eco_round0 = {
  timeline: iteration,
   timeline_variables: stimuli_round0_eco
}

var removal_eco_round1 = {
  timeline: iteration,
   timeline_variables: stimuli_round1_eco
}

var removal_eco_round2 = {
  timeline: iteration,
   timeline_variables: stimuli_round2_eco
}

var removal_eco_round3 = {
  timeline: iteration,
   timeline_variables: stimuli_round3_eco
}

var removal_eco_round4 = {
  timeline: iteration,
   timeline_variables: stimuli_round4_eco
}

var removal_eco_round5 = {
  timeline: iteration,
   timeline_variables: stimuli_round5_eco
}


// Extra loop for practice trial to include feedback
var removal_eco_practice_feedback = {
  timeline: [removal_collect_hits_falsealarms, removal_abs_feedback],
   timeline_variables: [
     {correct_items: ['<img src="removal/stimuli/practice/apple03a.png" width="70"></img>', '<img src="removal/stimuli/practice/cherrytomato02.png" width="70"></img>', '<img src="removal/stimuli/practice/broccoli01b.png" width="70"></img>', '<img src="removal/stimuli/practice/cauliflower02.png" width="70"></img>'], 
     incorrect_items: ['<img src="removal/stimuli/practice/breadslice.png" width="70"></img>', '<img src="removal/stimuli/practice/cabbage.png" width="70"></img>', '<img src="removal/stimuli/practice/banana04b.png" width="70"></img>', '<img src="removal/stimuli/practice/cookie02a.png" width="70"></img>']}
   ]
}

