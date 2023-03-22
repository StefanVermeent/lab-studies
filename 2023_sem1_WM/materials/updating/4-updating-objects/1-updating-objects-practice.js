//------------------------- Prepare Stimuli

// define shapes
var bill  = "img/4-updating-objects/fivedollarbill.jpg";
var bus   = "img/4-updating-objects/uta_bus.png";
var angry = "img/4-updating-objects/angry.png";

// example sequence
var example_sequence = "<div><img src='" + bill  + "'height = '75' style='vertical-align: middle;'>" + 
                            "<img src='" + bus   + "'width  = '150' style='vertical-align: middle;'>" + 
                            "<img src='" + angry + "'height = '75' style='vertical-align: middle;'>" +
                            "<img src='" + bus   + "'width  = '150' style='vertical-align: middle;'>" +
                            "<img src='" + bill  + "'height = '75' style='vertical-align: middle;'>" +
                       "</div>";

// define questions
var updating_ecological_questions = [
  "How many <strong>bills</strong> did you count?",
  "How many <strong>buses</strong> did you count?",
  "How many <strong>faces</strong> did you count?"
];

// define response options
var updating_ecological_answers = [0,1,2,3,4,5,6,7];

// define practice sequence
var updating_ecological_practice_seq = [bill,bus,angry,bill,bus];

// Instructions
var updating_ecological_instructions = {
    type: 'instructions',
    pages: [
        "<p style = 'text-align: left;'>"+ 
        "You will now play a <strong>Counting</strong> game.<br><br>" + 
        "In this game, you will see a series of pictures ($5 bill, UTA bus, and a face) one at a time." +
        " Your job is to keep a MENTAL count for each object. " +
        " You can count out loud or in your head, but please DO NOT use your fingers or a pencil/pen and paper to count." + 
        "<br><br>" +
        "After you see each object series, you will be asked to report the number of each type of object you saw in the series.<br><br>" +
        "Click 'continue' to see an example.</p>",
        "<div style='text-align:left;'>" + 
        "In this example, let's say you see the following series of objects:<br><br>" +
        example_sequence + "<br><br>" +
        "In this example, the correct count number for each object would be:<br><br>" +
        "<strong>Bills: 2<br>Buses: 2<br>Faces: 1</strong><br><br>" +
        "Click the 'continue' button to practice the <strong>Counting</strong> game.<br></div>"
    ],
    show_clickable_nav: true,
    allow_backward: true,
    key_forward: -1,
    key_backward: -1,
    button_label_next: "continue",
    button_label_previous: "go back",
    data: {variable: "updating_ecological_instructions", task: "updating_ecological"}
};

var updating_ecological_practice_start = {
  type: 'html-button-response',
  stimulus: "You are about to start the practice round.<br><br><strong>Click start when you are ready!<strong><br><br>",
  choices: ['Start'],
  data: {variable: "updating_ecological_practice_start", task: "updating_ecological"}
};

var updating_ecological_practice = {
    type: 'animation',
    stimuli: updating_ecological_practice_seq,
    frame_time: 1000,
    frame_isi: 500,
    choices: -1,
    data: {variable: "updating_ecological_practice", task: "updating_ecological"}
};

var updating_ecological_practice_answers = {
  type: 'survey-likert',
  data: {variable: "updating_ecological_practice_answers", task: "updating_ecological"},
  button_label: 'continue',
  questions: [
    {prompt: updating_ecological_questions[0], labels: updating_ecological_answers, required: true},
    {prompt: updating_ecological_questions[1], labels: updating_ecological_answers, required: true},
    {prompt: updating_ecological_questions[2], labels: updating_ecological_answers, required: true},
    ]
};

var updating_ecological_feedback = {
  type: 'html-button-response',
  stimulus: function() {
    var feedbackData = jsPsych.data.get().last(1).values()[0].responses;
    var bills = JSON.parse(feedbackData).Q0;
    var buses = JSON.parse(feedbackData).Q1;
    var faces = JSON.parse(feedbackData).Q2;
    return "The the correct number of each object was:<br><br>" + 
    "<strong>Bills: 2<br>Buses: 2<br>Faces: 1</strong><br><br>" + 
    "Your answers: <br><br><span style='color: blue;'>" +
    "<strong>Bills: " + bills + "<br>Buses: " + buses + "<br>Faces: " + faces + "</strong></span><br><br>";
    },
  choices: ['continue'],
  data: {variable: "updating_ecological_feedback", task: "updating_ecological"}
};

var updating_ecological_confirmation = {
  type: 'html-button-response',
  stimulus: "<p>Would you like to practice the <strong>Counting</strong> game again?</p>",
  choices: ['No, I am ready to continue', 'Yes, practice again'],
  prompt: "",
  data: {variable: "updating_ecological_confirmation", task: "updating_ecological"}
};

var updating_ecological_practice_loop = {
  timeline: [
    updating_ecological_practice_start,
    updating_ecological_practice,
    updating_ecological_practice_answers,
    updating_ecological_feedback,
    updating_ecological_confirmation
  ],
  loop_function: function(data){
    if(jsPsych.data.get().last(1).values()[0].button_pressed == 1){
      return true;
    } else {
      return false;
    }
  }
};

var updating_ecological_practice_finish = {
  type: 'html-button-response',
  stimulus: "<div style = 'text-align: left;'>" +
  "Great job!<br><br>" +
  "You are now finished practicing the <strong>Counting</strong> game.<br><br>" +
  "Next, you will play the actual game.<br><ul>" +
  "<li><strong>The series will be longer in the real game than in the practice round</strong>.</li>" +
  "<li>Remember to keep a running count of each picture you see.</li></ul><br>" +
  "You will play <b>5 rounds of the game</b>. From now on you will not receive feedback after each round.<br><br>" +
  "Click the button below to begin. <br><br></div>",
  choices: ['Start'],
  data: {variable: "updating_ecological_practice_finish", task: "updating_ecological"}
};