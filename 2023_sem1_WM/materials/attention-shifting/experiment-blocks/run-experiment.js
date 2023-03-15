//-------------------------- Close experiment

var end = {
  type: 'html-button-response',
  stimulus: "Great work!<br><br>" + 
  "You are now finished playing all the games.<br><br>" +
  "Click 'finish' to exit.<br><br>",
  choices: ['Finish'],
  data: {variable: "end"},
};

//-------------------------- Create session timeline based on counterbalance scheme

// Shifting then Updating, Standard first
var counter_balance_01 = {
  timeline: [
      shape_instructions,                  //-----------------
      shape_practice_loop,                 // 
      color_instructions,                  // 
      color_practice_loop,                 // 
      shifting_instructions,               // 
      shifting_01,                         // Standard Shifting
      shifting_02,                         // 
      shifting_03,                         // 
      shifting_04,                         // 
      end
  ]
};

timeline.push(
  counter_balance_01
);

//-------------------------- Run the Session

jsPsych.init({
  timeline: timeline,
  //show_progress_bar: true,
  preload_images: [
    "img/2-shifting-faces/03F_AN_C.png",
    "img/2-shifting-faces/03F_HA_O.png",
    "img/2-shifting-faces/35M_AN_C.png",
    "img/2-shifting-faces/35M_HA_O.png",
    'img/2-shifting-faces/angry.png' ,
    'img/2-shifting-faces/happy.png' ,
    'img/2-shifting-faces/female.jpg',
    'img/2-shifting-faces/male.png',
    'img/3-updating-standard/circle.png',
    'img/3-updating-standard/triangle.png',
    'img/3-updating-standard/square.png',
    'img/4-updating-objects/fivedollarbill.jpg',
    'img/4-updating-objects/uta_bus.png',
    'img/4-updating-objects/angry.png',
  ],
  on_finish: function() {
    var subjID = jsPsych.data.get().select("ID").values[0];
    jsPsych.data.get().localSave('csv', 'your-shifting-data.csv');
  }
});