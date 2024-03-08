
//------------------------- Obejects to hold trial information for the practice session

// Shape instructions

var shifting_welcome = {
  type: jsPsychInstructions,
  pages: [
    "Welkom bij het <b>Wissel</b> spel!<br><br><br><br>"
  ],
  show_clickable_nav: true,
  allow_backward: true,
  key_forward: -1,
  key_backward: -1,
  button_label_next: "verder",
  data: {variable: 'welcome', task: "shifting_practice"}
};

var shifting_direction_instructions = {
    type: jsPsychInstructions,
    pages: [
          "<p style = 'text-align: center;'>We gaan een spel spelen waarin je wisselt tussen geslacht en richting.<br><br></p>",
        "<p style = 'text-align: center;'> We zullen eerst het RICHTING-spel spelen.<br><br>" +
        "In het RICHTING-spel kies je de pijl die dezelfde RICHTING opwijst als de persoon in het midden van het scherm.<br><br></p>",
        "Als de persoon naar LINKS kijkt, druk dan op de 'A'-toets op uw toetsenbord:<br><br><br>Voorbeeld:"+
        "<div style = 'text-align: center;'>" + female_l + "</div>" +
        "<br><br><br><div>" + prompt_left + prompt_right + "</div><br><br><br>",
        "Als de persoon naar RECHTS kijkt, druk dan op de 'L'-toets op uw toetsenbord:<br><br><br>Voorbeeld:"+
        "<div style = 'text-align: center;'>" + male_r + "</div>" +
        "<br><br><br><div>" + prompt_left + prompt_right + "</div><br><br><br>",
        "<p style = 'text-align: center;'> U gaat nu het RICHTING-spel oefenen.<br><br>" +
        "Antwoord zo snel als je kan zonder fouten te maken. Af en toe een fout maken is niet erg. Ga in dat geval gewoon door.<br><br>" +
        "Klik op 'verder' om het RICHTING-spel te oefenen.</p>"
    ],
    show_clickable_nav: true,
    allow_backward: true,
    key_forward: -1,
    key_backward: -1,
    button_label_next: "verder",
    button_label_previous: "ga terug",
    data: {variable: "instructions", task: "shifting_practice"}
};

// direction practice

var shifting_direction_practice_start = {
    type: jsPsychHtmlKeyboardResponse,
    stimulus: "<p style = 'text-align: center;'>" +
      "Je gaat het RICHTING-spel nu 4 keer oefenen.<br>" +
      "Plaats je vingers op de 'A'-toets en 'L'-toets op je toetsenbord.<br><br><br>" +
      "Druk op een willekeurige toets als je klaar bent om te oefenen.",
  choices: "ALL_KEYS",
  data: {
    variable: 'practice_start', task: 'shifting_practice'
  }
}

var shifting_direction_practice = {
  timeline: [
    {
      type: jsPsychCategorizeHtml,
      choices: ['A','L'],
      correct_text: "<p style = 'color:green;font-size:40px'>Goed!</p>",
      incorrect_text:"<p style = 'color:red;font-size:40px'>Fout!</p>",
      show_stim_with_feedback: false,
      feedback_duration: 500,
      prompt: "<br><br><br><div style='width: 500px; height:50px;'>" + prompt_left + prompt_right + "</div><br><br>"+
              "<div style='width: 500px;'><h1 style='float: left; margin:0;'>A</h1><h1 style='float: right; margin:0;'>L</h1></div>",
      data: {variable: "direction_practice", rule: "direction", condition: "repeat", task: "shifting_practice"},
      stimulus: function(){
        stim = jsPsych.timelineVariable('stimulus');
        return stim
      },
      key_answer: function(){
        key = jsPsych.timelineVariable('key_answer');
        return key
    }
    }
  ],
  timeline_variables: [
    {stimulus: "<div>" + female_l + "</div>"     , key_answer: 'A'},
    {stimulus: "<div>" + male_r + "</div>"    , key_answer: 'L'},
    {stimulus: "<div>" + male_l + "</div>" , key_answer: 'A'},
    {stimulus: "<div>" + female_l + "</div>"         , key_answer: 'A'},
    {stimulus: "<div>" + male_r + "</div>"        , key_answer: 'L'},
    {stimulus: "<div>" + female_r + "</div>"    , key_answer: 'L'}
  ]
};

var shifting_direction_confirmation = {
  type: jsPsychHtmlButtonResponse,
  stimulus: "<p>Wil je het RICHTING-spel nog eens oefenen?</p>",
  choices: ['Nee, ik ben klaar', 'Ja, oefen nog eens'],
  prompt: "",
  data: {variable: "living_confirmation", task: "shifting_practice"}
};

var shifting_direction_practice_loop = {
  timeline: [shifting_direction_practice_start,shifting_direction_practice,cursor_on,shifting_direction_confirmation],
  loop_function: function(data){
    console.log(jsPsych.data.get().last(1).values()[0].response == 1)
    if(jsPsych.data.get().last(1).values()[0].response == 1){
      return true;
    } else {
      return false;
    }
  }
};

// direction instructions

var shifting_gender_instructions = {
    type: jsPsychInstructions,
    pages: [
         "<p style = 'text-align: center;'>We kunnen ook vergelijken op GESLACHT. <br><br>In het GESLACHT-spel kies je het plaatje dat hetzelfde GESLACHT heeft als de persoon in het midden van het scherm.<br><br></p>",
        "als de persoon een MAN is, druk dan op de 'A'-toets op uw toetsenbord:<br><br><br>Voorbeeld:"+
        "<div style = 'text-align: center;'>" + male_l + "</div>" +
        "<br><br><br><div>" + prompt_male + prompt_female + "</div><br><br><br>",
        "Als de persoon een VROUW is, druk dan op de 'L'-toets op uw toetsenbord:<br><br><br>Voorbeeld:"+
        "<div style = 'text-align: center;'>" + female_r + "</div>" +
        "<br><br><br><div>" + prompt_male + prompt_female + "</div><br><br><br>",
        "<p style = 'text-align: center;'>U gaat nu het GESLACHT-spel oefenen.<br><br>" +
        "Antwoord zo snel al je kan zonder fouten te maken. Af en toe een fout maken is niet erg. Ga in dat geval gewoon door.<br><br>" +
        "Klik op 'verder' om het GESLACHT-spel te oefenen.</p>"
    ],
    show_clickable_nav: true,
    allow_backward: true,
    key_forward: -1,
    key_backward: -1,
    button_label_next: "verder",
    button_label_previous: "ga terug",
    data: {variable: "instructions", task: "shifting_instructions"}
};

// direction practice

var shifting_gender_practice_start = {
    type: jsPsychHtmlKeyboardResponse,
    stimulus: "<p style = 'text-align: center;'>" +
      "Je gaat het GESLACHT-spel nu 6 keer oefenen.<br>" +
      "Plaats je vingers op de 'A'-toets (KLEINER) en 'L'-toets (GROTER) op je toetsenbord.<br><br><br>" +
      "Druk op een willekeurige toets als je klaar bent om te oefenen.",
  choices: "ALL_KEYS",
  data: {
    variable: 'practice_start', task: 'shifting_practice'
  }
}

var shifting_gender_practice = {
  timeline: [
    {
      type: jsPsychCategorizeHtml,
      choices: ['A','L'],
      correct_text: "<p style = 'color:green;font-size:40px'>Correct!</p>",
      incorrect_text:"<p style = 'color:red;font-size:40px'>Incorrect!</p>",
      show_stim_with_feedback: false,
      feedback_duration: 500,
      prompt: "<br><br><br><div style='width: 500px; height:50px;'>" + prompt_male + prompt_female + "</div><br><br>"+
              "<div style='width: 500px;'><h1 style='float: left; margin:0;'>A</h1><h1 style='float: right; margin:0'>L</h1></div>",
      data: {variable: "direction_practice",rule: "direction", condition: "repeat", task: "shifting_practice"},
      stimulus: function(){
        stim = jsPsych.timelineVariable('stimulus');
        return stim
      },
      key_answer: function(){
        key = jsPsych.timelineVariable('key_answer');
        return key
    }
    }
  ],
  timeline_variables: [
    {stimulus: "<div style='font-size:60px'>" + male_l +"</div>", key_answer: 'A'},
    {stimulus: "<div style='font-size:60px'>" + female_l +"</div>"   , key_answer: 'L'},
    {stimulus: "<div style='font-size:60px'>" + female_r +"</div>"   , key_answer: 'L'},
    {stimulus: "<div style='font-size:60px'>" + male_l +"</div>"   , key_answer: 'A'},
    {stimulus: "<div style='font-size:60px'>" + female_r +"</div>" , key_answer: 'L'},
    {stimulus: "<div style='font-size:60px'>" + male_r +"</div>" , key_answer: 'A'}
  ]
};

var shifting_gender_confirmation = {
  type: jsPsychHtmlButtonResponse,
  stimulus: "<p>Wil je het GESLACHT-spel nog eens oefenen?</p>",
  choices: ['Nee, ik ben klaar', 'Ja, oefen nog eens'],
  prompt: "",
  data: {variable: 'direction_confirmation', task: "shifting_practice"}
};

var shifting_gender_practice_loop = {
  timeline: [shifting_gender_practice_start, shifting_gender_practice,cursor_on,shifting_gender_confirmation],
  loop_function: function(data){
    if(jsPsych.data.get().last(1).values()[0].response == 1){
      return true;
    } else {
      return false;
    }
  }
};

// shifting instructions

var shifting_full_instructions = {
    type: jsPsychInstructions,
    pages: ["<div style = 'text-align: center;'>Goed gedaan!<br><br>" +
            "Nu gaan we beide spellen tegelijk spelen.<br><ul>" +
            "<li>Als je het woord RICHTING ziet, kies dan het plaatje dat dezelfde RICHTING opkijkt als de persoon in het midden.</li>" +
            "<li>Als je het woord GESLACHT ziet, kies dan het plaatje dat hetzelfde GESLACHT heeft als de persoon in het midden.</li>" +
            "</ul><p>Je ziet steeds de volgende plaatjes ter herinnering:</p></div><br><br>" +
            "<div style='width: 60%; padding-left:20%; padding-right:20%;'>" +
            "<div>" + prompt_male + prompt_left + prompt_right + prompt_female + "</div><br><br><br><br>" +
            "<div><h1 style='float: left; margin:0;'>A</h1><h1 style='float: right; margin:0;'>L</h1></div><br>" +
            "<div><p style='float: left; margin:0;'>altijd links</p><p style='float: right; margin:0;'>altijd rechts</p></div>" +
            "</div><br><br>"],
    show_clickable_nav: true,
    allow_backward: true,
    key_forward: -1,
    key_backward: -1,
    button_label_next: "verder",
    data: {variable: "shifting_instructions", task: "shifting_instructions"}
};

var shifting_test_start = {
    type: jsPsychHtmlKeyboardResponse,
    stimulus: "<p style = 'text-align: center;'>" +
      "Vanaf nu krijg je geen feedback meer.<br><br>" +
      "Plaats je vingers op de 'A'-toets en 'L'-toets op uw toetsenbord.<br><br><br>" +
      "Druk op een willekeurige toets als je klaar bent om te starten.",
  choices: "ALL_KEYS",
  data: {
    variable: 'test_start', task: 'shifting'
  }
}


