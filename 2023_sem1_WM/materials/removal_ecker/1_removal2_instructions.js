//-------------------- Welcome
var removal2_welcome = {
  type: jsPsychInstructions,
  pages: [
    "You will now play a MEMORY UPDATING game."
  ],
  show_clickable_nav: true,
  allow_backward: true,
  key_forward: -1,
  key_backward: -1,
  button_label_next: "continue",
  button_label_previous: "go back",
  data: {variable: 'welcome', task: "removal2_practice"}
};

//-------------------- Instructions
var removal2_instructions = {
  type: jsPsychInstructions,
  pages: [
    "<p style = 'text-align: center;'>" + 
      "In this game, you will see three <strong>letters</strong> in a black frame.<br><br>" +
      "For example, you might see the letters 'A', 'B', and 'C'.<br><br>" +
      "You get 2 seconds to remember these letters before they disappear again.<br><br><br>" +
      "<img width = 400 src = removal_ecker/img/instructions1.png></img><br><br>",
      
    "<p style = 'text-align: center;'>" + 
      "Next, the letters will be replaced by new letters, one by one.<br><br>" +
      "Just before a letter is about to be replaced, the corresponding frame will turn red.<br><br>" +
      "For example, you might see the middle frame turn red.<br><strong>This means that you should forget the letter 'B'.</strong><br><br><br>" +
      "<img width = 400 src = removal_ecker/img/instructions3.png></img><br><br>",
    
    "<p style = 'text-align: center;'>" + 
      "Next, the new letter appears. For example, you might see the letter 'S' appear in the middle frame.<br><br>" +
      "You should now remember the new string of letters: A, S, C.<br><br>" +
      "Press the <strong>spacebar</strong> to continue as soon as you have updated the letter in your head.<br><br><br>" +
      "<img width = 400 src = removal_ecker/img/instructions4.png></img><br><br>",
      
    "<p style = 'text-align: center;'>" + 
      "On each round, the number of updating steps varies randomly between 1 and 21 steps.<br><br>" +
      "At the end of the round, you will see the three empty frames again.<br><br>" +
      "Your job will be to fill in the three current letters in the empty text boxes.<br><br>" +
      "In our example, the correct answer would be 'A', 'S', 'C'.<br><br><br>" +
      "<img width = 400 src = removal_ecker/img/instructions5.png></img><br><br>",
      
    "<p style = 'text-align: center;'>" +
      "Click 'continue' to practice this game.",
  ],
  show_clickable_nav: true,
  allow_backward: true,
  key_forward: -1,
  key_backward: -1,
  button_label_next: "continue",
  button_label_previous: "go back",
  data: {variable: "instructions", task: "removal2_practice"}
};

var removal2_practice_start = {
  type: jsPsychHtmlKeyboardResponse,
  stimulus:    "<p style = 'text-align: center;'>" +
      "You will now practice two rounds of the game.<br><br>" +
      "When you are ready to start the first practice round, press any key to start.",
  choices: 'ALL_KEYS',
  data: {variable: "practice_start", task: "removal2_practice"}
};

var removal2_updating_loop_practice1 = {
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
    {encoding: ['K', 'B', 'T'], interval_empty: ['1800', '500', '1800'], interval_cue: ['1500', '200', '1500'], position: [2, 0, 1], letter: ['I', 'W', 'A'], length: 2, correct: ['W', 'A' ,'I']},
]
}

var removal2_updating_loop_practice2 = {
  timeline: [removal2_encoding, removal2_emptyscreen, removal2_positioncue, removal2_newletter],
  loop_function: function(){
    if(trial_count == jsPsych.timelineVariable('length')){
      trial_count = 0
      return false;
    } else {
      trial_count += 1
      return true;
    }
  },
  timeline_variables: [
    {encoding: ['M', 'Q', 'F'], interval_empty: ['1800', '500', '1800', '500'], interval_cue: ['1500', '200', '200', '1500'], position: [1, 2, 1, 0], letter: ['P', 'K', 'Z', 'E'], length: 3, correct: ['E', 'Z', 'K']},
]
}

var removal2_interblock_practice = {
  type: jsPsychHtmlKeyboardResponse,
  stimulus: 'Press any key to start the second practice block.',
  choices: "ALL_KEYS",
  data: {
    variable: 'interblock',
    task: 'removal2'
  }
};

var acc = 0

var removal2_feedback = {
  type: jsPsychHtmlKeyboardResponse,
  stimulus: function(){
    var response = jsPsych.data.get().last(1).values()[0].response
    var correct =  jsPsych.data.get().last(1).values()[0].correct

    var resp1 = response[0]['value'].toUpperCase()
    var resp2 = response[1]['value'].toUpperCase()
    var resp3 = response[2]['value'].toUpperCase()
    
    if(correct[0] == resp1) {
      acc += 1
      }
    if(correct[1] == resp2) {
      acc += 1
    }
    if(correct[2] == resp3) {
      acc += 1
    }
    return "<div style='font-size:20px;'><b>You correctly recalled <font color='blue'>" + acc + " out of 3</font> letters.</b><br><br><br>"
  },
  trial_duration: 1500,
  data: {
    score: acc,
  },
  on_finish: function(){
    acc = 0
  }
}




var removal2_practice_end = {
  type: jsPsychHtmlKeyboardResponse,
  stimulus:    "<p style = 'text-align: center;'>" +
      "Great job! You are now done practicing the game.<br><br>" +
      "press any key to continue to the real game.",
  choices: 'ALL_KEYS',
  data: {
    variable: 'practice',
    task: 'removal2'
  }
};

var removal2_start = {
  type: jsPsychHtmlKeyboardResponse,
  stimulus:   "<p style = 'text-align: center;'>" +
      "You will now play the real game.<br><br>" +
      "There will be a total of 12 rounds.<br><br>" +
      "Note that you won't receive feedback for the rest of the game.<br><br>" +
      "Press any key to start when you are ready.",
  choices: 'ALL_KEYS',
  data: {variable: "test_start", task: "removal2"}
};

var removal2_end = {
  type: jsPsychHtmlButtonResponse,
  stimulus: "Great work!<br><br>" + 
  "You are now finished playing this game.<br><br>" +
  "Click 'finish' to continue.<br><br>",
  choices: ['Finish'],
  data: {variable: "finish", task: "removal2"},
};
