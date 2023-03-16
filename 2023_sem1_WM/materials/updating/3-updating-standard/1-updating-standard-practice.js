//------------------------- Shape stimuli

var circle     = "img/3-updating-standard/circle.png";
var triangle   = "img/3-updating-standard/triangle.png";
var square     = "img/3-updating-standard/square.png";

//------------------------- Example sequence
var example_sequance = "<div><img src='" + circle + "'height = '100' width = '100'>" + 
                         "<img src='" + square + "'height = '100' width = '100'>" + 
                         "<img src='" + triangle + "'height = '100' width = '100'>" +
                         "<img src='" + triangle + "'height = '100' width = '100'>" +
                         "<img src='" + square + "'height = '100' width = '100'>" +
                         "<img src='" + triangle + "'height = '100' width = '100'>" +
                       "</div>";

var updating_standard_practice_seq = [square,triangle,square,circle,square];

//------------------------- Set up response questions and options

var updating_standard_questions = [
  "How many <strong>squares</strong> did you count?",
  "How many <strong>triangles</strong> did you count?",
  "How many <strong>circles</strong> did you count?"
];

// define response options
var updating_standard_answers = [0,1,2,3,4,5,6,7];

//------------------------- Objects to hold practice trials

// Instructions
var updating_standard_instructions = {
    type: 'instructions',
    pages: [
        "<p style = 'text-align: left;'>"+ 
        "Now you will play a <strong>Shape Counting</strong> game.<br><br>" + 
        "You will see a series of shapes (squares, triangles, and circles) one at a time." +
        " Your job is to keep a MENTAL count for each type of shape. " +
        " You can keep count out loud or in your head, but please DO NOT use your fingers or a pencil/pen and paper to count." + 
        "<br><br>" +
        "After you see each shape series, you will be asked how many of each type of shape you saw.<br><br>" +
        "Click 'continue' to see an example.</p>",
        "<div style='text-align:left;'>" + 
        "In this example, let's say you see the following series of shapes:<br><br>" +
        example_sequance + "<br><br>" +
        "In this example, the correct count number for each shape would be:<br><br>" +
        "<strong>Squares: 2<br>Triangles: 3<br>Circles: 1</strong><br><br>" +
        "Click the 'continue' button to practice the <strong>Shape Counting</strong> game.<br></div>"
    ],
    show_clickable_nav: true,
    allow_backward: true,
    key_forward: -1,
    key_backward: -1,
    button_label_next: "continue",
    button_label_previous: "go back",
    data: {variable: "updating_standard_instructions", task: "updating_standard"}
};

// Practice trial

var updating_standard_practice_start = {
  type: 'html-button-response',
  stimulus: "You are about to start the practice round.<br><br><strong>Click start when you are ready!<strong><br><br>",
  choices: ['Start'],
  data: {variable: "updating_standard_practice_start", task: "updating_standard"}
};

var updating_standard_practice =  {
    type: 'animation',
    stimuli: updating_standard_practice_seq,
    frame_time: 1000,
    frame_isi: 500,
    choices: -1,
    data: {variable: "updating_standard_practice_animation", task: "updating_standard"}
};

// Practice recall

var updating_standard_practice_answers = {
  type: 'survey-likert',
  data: {variable: "updating_standard_practice_answers", task: "updating_standard"},
  button_label: 'continue',
  questions: [
    {prompt: updating_standard_questions[0], labels: updating_standard_answers, required: true},
    {prompt: updating_standard_questions[1], labels: updating_standard_answers, required: true},
    {prompt: updating_standard_questions[2], labels: updating_standard_answers, required: true},
    ]
};

// Practice feedback

var updating_standard_feedback = {
  type: 'html-button-response',
  stimulus: function() {
    var feedbackData = jsPsych.data.get().last(1).values()[0].responses;
    var squares  = JSON.parse(feedbackData).Q0;
    var triangles = JSON.parse(feedbackData).Q1;
    var circles   = JSON.parse(feedbackData).Q2;
    return "The the correct number of each shape was:<br><br>" + 
    "<strong>Squares: 3<br>Triangles: 1<br>Circles: 1</strong><br><br>" + 
    "Your answers: <br><br><span style='color: blue;'>" +
    "<strong> Squares: " + squares + "<br>Triangles: " + triangles + "<br>Circles: " + circles + "</strong></span><br><br>";
    },
  choices: ['continue'],
  data: {variable: "updating_standard_practice_feedback", task: "updating_standard"}
};

var updating_standard_confirmation = {
  type: 'html-button-response',
  stimulus: "<p>Would you like to practice the <strong>Shape Counting</strong> game again?</p>",
  choices: ['No, I am ready to continue', 'Yes, practice again'],
  prompt: "",
  data: {variable: "updating_standard_practice_confirmation", task: "updating_standard"}
};

var updating_standard_practice_loop = {
  timeline: [
    updating_standard_practice_start,
    updating_standard_practice,
    updating_standard_practice_answers,
    updating_standard_feedback,
    updating_standard_confirmation
  ],
  loop_function: function(data){
    if(jsPsych.data.get().last(1).values()[0].button_pressed == 1){
      return true;
    } else {
      return false;
    }
  }
};

var updating_standard_practice_finish = {
  type: 'html-button-response',
  stimulus: "<div style = 'text-align: left;'>" +
  "Great job!<br><br>" +
  "You are now finished practicing the <strong>Shape Counting</strong> game.<br><br>" +
  "Next, you will play the actual game.<br><ul>" +
  "<li><strong>The series will be longer in the real game than in the practice round</strong>.</li>" +
  "<li>Remember to keep a running count of each type of shape you see.</li></ul><br>" +
  "You will play <b>5 rounds of the game</b>. From now on you will not receive feedback after each round.<br><br>" +
  "Click the button below to begin. <br><br></div>",
  choices: ['Start'],
  data: {variable: "updating_standard_practice_finish", task: "updating_standard"}
};