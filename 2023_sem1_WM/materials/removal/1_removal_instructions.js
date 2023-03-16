//-------------------- Welcome
var removal_welcome = {
  type: jsPsychInstructions,
  pages: [
    "Welcome to the <b>Forgetting</b> game!"
  ],
  show_clickable_nav: true,
  allow_backward: true,
  key_forward: -1,
  key_backward: -1,
  button_label_next: "continue",
  button_label_previous: "go back",
  data: {variable: 'welcome', task: "removal_practice"}
};

//-------------------- Instructions
var removal_instructions = {
  type: jsPsychInstructions,
  pages: [
    "<p style = 'text-align: center;'>" + 
      "In this game, you will see a series of either <strong>letters</strong> or <strong>images</strong>.<br><br><br>" +
      "<img width = 600 src = removal/stimuli/instructions1.png></img><br><br>",
      
    "<p style = 'text-align: center;'>" + 
      "Each item will be shown for 2 seconds. During this time, you have to memorize it well as you can.<br><br><br>",
      
    "<p style = 'text-align: center;'>" + 
      "After the item disappears, you will see either the word <strong>REMEMBER</strong> or the word <strong>FORGET</strong>.<br><br>" + 
      "If you see the word <strong>REMEMBER</strong>, you should continue holding the item that you just saw in memory.<br><br>" +
      "If you see the word <strong>FORGET</strong>, you should do your best to remove the item that you just saw from your memory.",
      
    "<p style = 'text-align: center;'>" + 
      "At the end of a series, you will see all items again on your screen.<br><br>" +
      "Your job is to select all items that were followed by the word <strong>REMEMBER</strong>.<br><br>" +
      "You should not select any items that were followed by the word <strong>FORGET</strong>!",
      
    "<p style = 'text-align: center;'>" +
      "Click 'continue' to practice this game.",
  ],
  show_clickable_nav: true,
  allow_backward: true,
  key_forward: -1,
  key_backward: -1,
  button_label_next: "continue",
  button_label_previous: "go back",
  data: {variable: "instructions", task: "removal_practice"}
};

var removal_practice_abs_start = {
  type: jsPsychHtmlKeyboardResponse,
  stimulus:    "<p style = 'text-align: center;'>" +
      "You will now practice the game with <strong>LETTERS</strong>.<br><br>" +
      "When you are ready to start the practice round, press any key to start.",
  choices: 'ALL_KEYS',
  data: {variable: "practice_start", task: "removal_practice"}
};

var removal_practice_eco_start = {
  type: jsPsychHtmlKeyboardResponse,
  stimulus:    "<p style = 'text-align: center;'>" +
      "You will now practice the game with <strong>IMAGES</strong>.<br><br>" +
      "When you are ready to start the practice round, press any key to start.",
  choices: 'ALL_KEYS',
  data: {variable: "practice_start", task: "removal_practice"}
};

var removal_practice_finish = {
  type: jsPsychHtmlKeyboardResponse,
  stimulus:    "<p style = 'text-align: center;'>" +
      "Great job! You are now done practicing the game.<br><br>" +
      "press any key to continue to the real game.",
  choices: 'ALL_KEYS',
  data: {variable: "practice_finish", task: "removal_practice"}
};

var removal_eco_start = {
  type: jsPsychHtmlKeyboardResponse,
  stimulus:   "<p style = 'text-align: center;'>" +
      "You will now play the game with <strong>IMAGES</strong><br><br>" +
      "There will be a total of 5 rounds.<br><br>" +
      "Note that you won't receive feedback for the rest of the game.<br><br>" +
      "Press any key to start when you are ready.",
  choices: 'ALL_KEYS',
  data: {variable: "test_start", task: "removal"}
};

var removal_abs_start = {
  type: jsPsychHtmlKeyboardResponse,
  stimulus:   "<p style = 'text-align: center;'>" +
      "You will now play the game with <strong>LETTERS</strong><br><br>" +
      "There will be a total of 5 rounds.<br><br>" +
      "Note that you won't receive feedback for the rest of the game.<br><br>" +
      "Press any key to start when you are ready.",
  choices: 'ALL_KEYS',
  data: {variable: "test_start", task: "removal"}
};

var removal_finish = {
  type: jsPsychHtmlKeyboardResponse,
  stimulus:   "<p style = 'text-align: center;'>" +
      "Great job!<br><br>" +
      "You are now done playing the <strong>FORGETTING</strong> game<br><br>" +
      "Press any key to continue.",
  choices: 'ALL_KEYS',
  data: {variable: "test_finish", task: "removal"}
};