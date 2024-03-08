//-------------------- Welcome
var flanker_welcome = {
  type: jsPsychInstructions,
  pages: [
    "Welkom bij het <b>Gezichten</b> spel!<br><br><br><br>"
  ],
  show_clickable_nav: true,
  allow_backward: true,
  key_forward: -1,
  key_backward: -1,
  button_label_next: "verder",
  data: {variable: 'welcome', task: "flanker_practice"}
};

//-------------------- Instructions
var flanker_instructions = {
  type: jsPsychInstructions,
  pages: [
    "<p style = 'text-align: center;'>"+
      "In dit spel zie je steeds vijf gezichten, zoals hieronder:<br><br><br>" +
      "<div>" + left_m+left_m+left_m+left_m+left_m + "</div><br><br><br>" +
      "Jouw taak is om de richting van het <strong>MIDDELSTE GEZICHT</strong> aan te geven.<br><br><br>",

     "<p style = 'text-align: center;'>"+
      "Soms kijken alle gezichten dezelfde kant op, zoals hieronder:<br><br><br>" +
      "<div>" + right_f+right_f+right_f+right_f+right_f + "</div><br><br><br>",

     "<p style = 'text-align: center;'>"+
      "Soms kijken de gezichten de <strong>andere</strong> kant op, zoals hieronder:<br><br><br>" +
      "<div>" + right_f+right_f+left_f+right_f+right_f + "</div><br><br><br>",

      "<p style = 'text-align: center;'>"+
      "Jouw taak is <i>altijd</i> om de richting van het middelste gezicht te bepalen. De andere gezichten moet je <i>altijd</i> negeren.<br><br>" +

      "<div style = 'float: left;'>Als de persoon naar LINKS kijkt<br>Druk dan op de 'A'-toets.</div>" +
      "<div style = 'float: right;'>Als de persoon naar RECHTS kijkt<br>Druk dan op de 'L'-toets.</div><br><br><br><br>" +

      "In het voorbeeld hieronder kijkt het middelste gezicht naar LINKS.<br>" +
      "In dit geval druk je dus op de 'A'-toets.<br><br>" +
      "<div>" + right_m+right_m+left_m+right_m+right_m + "</div></p><br><br><br>",

     "<p style = 'text-align: center;'>"+
      "Antwoord zo snel als je kunt zonder fouten te maken.<br>Af en toe een fout maken is niet erg. Ga in dat geval gewoon door.<br><br>" +
      "Klik op 'verder' om het spel te oefenen.<br><br><br>"
  ],
  show_clickable_nav: true,
  allow_backward: true,
  key_forward: -1,
  key_backward: -1,
  button_label_next: "verder",
  button_label_previous: "ga terug",
  data: {variable: "instructions", task: "flanker_practice"}
};

//-------------------- Practice

var flanker_practice_start = {
  type: jsPsychHtmlKeyboardResponse,
  stimulus:    "<p style = 'text-align: center;'>" +
      "Je gaat het spel nu <strong>8 keer</strong> oefenen.<br><br>" +
      "Plaats je vingers op de 'A'- en 'L'-toets op je toetsenbord.<br><br>" +
      "Druk op een willekeurige knop als je klaar bent om te oefenen.",
  choices: "ALL_KEYS",
  data: {variable: "practice_start", task: "flanker_practice"}
};


var flanker_practice = {
    type: jsPsychHtmlKeyboardResponse,
    stimulus: function() {
      return jsPsych.timelineVariable('practice_stim')
    },
    choices: ['A', 'L'],
    data: {
      variable: 'practice',
      task: 'flanker_practice',
      location: function(){
        return jsPsych.timelineVariable('location')
      },
      stimtype: function(){
        return jsPsych.timelineVariable('stimtype')
      }
    },
    on_finish: function(data) {
      if(jsPsych.pluginAPI.compareKeys(data.response, jsPsych.timelineVariable('correct_response', true))) {
        data.correct = true;
      } else {
        data.correct = false;
      }
    }
};


var flanker_practice_procedure = {
  timeline: [flanker_fixation, flanker_practice, feedback],
  timeline_variables: [
    {location: 'top',    correct_response: 'A',  stimtype: 'congruent_left',    practice_stim: location_stim(up=left_m+left_m+left_m+left_m+left_m, down=null)},
    {location: 'top',    correct_response: 'L', stimtype: 'congruent_right',   practice_stim: location_stim(up=right_f+right_f+right_f+right_f+right_f, down=null)},
    {location: 'top',    correct_response: 'A',  stimtype: 'incongruent_left',  practice_stim: location_stim(up=right_m+right_m+left_m+right_m+right_m, down=null)},
    {location: 'top',    correct_response: 'L', stimtype: 'incongruent_right', practice_stim: location_stim(up=left_f+left_f+right_f+left_f+left_f, down=null)},
    {location: 'bottom', correct_response: 'A',  stimtype: 'congruent_left',    practice_stim: location_stim(up=null, down=left_m+left_m+left_m+left_m+left_m)},
    {location: 'bottom', correct_response: 'L', stimtype: 'congruent_right',   practice_stim: location_stim(up=null, down=right_f+right_f+right_f+right_f+right_f)},
    {location: 'bottom', correct_response: 'A',  stimtype: 'incongruent_left',  practice_stim: location_stim(up=null, down=right_m+right_m+left_m+right_m+right_m)},
    {location: 'bottom', correct_response: 'L', stimtype: 'incongruent_right', practice_stim: location_stim(up=null, down=left_f+left_f+right_f+left_f+left_f)},
  ],
  randomize_order: true,
  repetitions: 1,
};



// Finish Practice trials
var flanker_practice_finish = {
  type: jsPsychHtmlKeyboardResponse,
  stimulus: "<p style = 'text-align: center;'>" +
  "Goed gedaan!<br><br>" +
  "Je gaat nu het echte spel spelen.<br><br>" +
  "Het spel duurt ongeveer twee minuten. Vanaf nu krijg je geen feedback meer.<br><br>" +
  "Druk op een willekeurige knop om te beginnen! <br><br>",
  choices: "ALL_KEYS",
  data: {variable: "practice_finish", task: "flanker_practice"}
};

var flanker_end = {
  type: jsPsychHtmlButtonResponse,
  stimulus:
  "Goed gedaan!<br><br>" +
  "Je bent nu klaar met het <strong>Gezichten</strong> spel.<br><br>" +
  "Klik op 'verder' om verder te gaan.<br><br>",
  choices: ['verder'],
  data: {variable: "end", task: "flanker"}
};
