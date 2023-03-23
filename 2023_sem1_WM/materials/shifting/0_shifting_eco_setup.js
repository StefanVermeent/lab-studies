//-------------------- Stimuli for task

var preload_shifting1 = {
  type: jsPsychPreload,
  images: [
     'shifting/img/2-shifting-faces/140_y_f_a_a.jpg',
     'shifting/img/2-shifting-faces/140_y_f_h_b.jpg',
     'shifting/img/2-shifting-faces/066_y_m_a_b.jpg',
     'shifting/img/2-shifting-faces/066_y_m_h_b.jpg' 
  ]
}  

var preload_shifting2 = {
  type: jsPsychPreload,
  images: [
     'shifting/img/2-shifting-faces/CFD-WF-007-029-A.jpg',
     'shifting/img/2-shifting-faces/CFD-WF-007-003-HO.jpg',
     'shifting/img/2-shifting-faces/CFD-WM-024-010-A.jpg',
     'shifting/img/2-shifting-faces/CFD-WM-024-003-HO.jpg'
  ]
}  


var female_angry1 = "<img src='shifting/img/2-shifting-faces/140_y_f_a_a.jpg'>";
var female_happy1 = "<img src='shifting/img/2-shifting-faces/140_y_f_h_b.jpg'>";
var male_angry1   = "<img src='shifting/img/2-shifting-faces/066_y_m_a_b.jpg'>";
var male_happy1   = "<img src='shifting/img/2-shifting-faces/066_y_m_h_b.jpg'>";

var female_angry2 = "<img src='shifting/img/2-shifting-faces/CFD-WF-007-029-A.jpg'>";
var female_happy2 = "<img src='shifting/img/2-shifting-faces/CFD-WF-007-003-HO.jpg'>";
var male_angry2   = "<img src='shifting/img/2-shifting-faces/CFD-WM-024-010-A.jpg'>";
var male_happy2   = "<img src='shifting/img/2-shifting-faces/CFD-WM-024-003-HO.jpg'>";

var angry  = "<img src='shifting/img/2-shifting-faces/angry.png'  height=100>";
var happy  = "<img src='shifting/img/2-shifting-faces/happy.png'  height=100 style='padding-left: 20px;'>";
var female = "<img src='shifting/img/2-shifting-faces/female.jpg' height=100 style='padding-right: 20px;'>";
var male   = "<img src='shifting/img/2-shifting-faces/male.png'   height=100>";

//-------------------- Response prompts

var prompt_angry  = "<div style='float:right; text-align: right;' >" + happy  +  "</div>";
var prompt_happy  = "<div style='float:left;  text-align: left;'  >" + angry  + "</div>";
var prompt_female = "<div style='float:left;  text-align: left;'  >" + female + "</div>";
var prompt_male   = "<div style='float:right; text-align: right;' >" + male   + "</div>";

//-------------------- All stimuli and rule (gender or emotion) combinations

var female_happy_gender1  = "<div style = 'text-align: center;'><h1>Gender <br></h1>" + female_happy1 + "</div>";
var female_angry_gender1  = "<div style = 'text-align: center;'><h1>Gender <br></h1>" + female_angry1 + "</div>";
var female_happy_emotion1 = "<div style = 'text-align: center;'><h1>Emotion<br></h1>" + female_happy1 + "</div>";
var female_angry_emotion1 = "<div style = 'text-align: center;'><h1>Emotion<br></h1>" + female_angry1 + "</div>";
var male_happy_gender1    = "<div style = 'text-align: center;'><h1>Gender <br></h1>" + male_happy1   + "</div>";
var male_angry_gender1    = "<div style = 'text-align: center;'><h1>Gender <br></h1>" + male_angry1   + "</div>";
var male_happy_emotion1   = "<div style = 'text-align: center;'><h1>Emotion<br></h1>" + male_happy1   + "</div>";
var male_angry_emotion1   = "<div style = 'text-align: center;'><h1>Emotion<br></h1>" + male_angry1   + "</div>";

var female_happy_gender2  = "<div style = 'text-align: center;'><h1>Gender <br></h1>" + female_happy2 + "</div><br><br>";
var female_angry_gender2  = "<div style = 'text-align: center;'><h1>Gender <br></h1>" + female_angry2 + "</div>";
var female_happy_emotion2 = "<div style = 'text-align: center;'><h1>Emotion<br></h1>" + female_happy2 + "</div>";
var female_angry_emotion2 = "<div style = 'text-align: center;'><h1>Emotion<br></h1>" + female_angry2 + "</div>";
var male_happy_gender2    = "<div style = 'text-align: center;'><h1>Gender <br></h1>" + male_happy2   + "</div>";
var male_angry_gender2    = "<div style = 'text-align: center;'><h1>Gender <br></h1>" + male_angry2   + "</div>";
var male_happy_emotion2   = "<div style = 'text-align: center;'><h1>Emotion<br></h1>" + male_happy2   + "</div>";
var male_angry_emotion2   = "<div style = 'text-align: center;'><h1>Emotion<br></h1>" + male_angry2   + "</div>";