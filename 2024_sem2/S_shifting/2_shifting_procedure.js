
var shifting_test = {
  type: jsPsychCategorizeHtml,
  choices: ['A','L'],
  correct_text: "",
  incorrect_text: "",
  feedback_duration: 250,
  show_stim_with_feedback: false,
  key_answer: function(){return jsPsych.timelineVariable('key_answer')},
  stimulus: function(){
    var stim = ""
    if(jsPsych.timelineVariable('data')['rule'] == "gender") {
      stim += "<div style = 'text-align: center;'><h1>GESLACHT<br></h1><br><br><br><div style = 'font-size:60px'>" + jsPsych.timelineVariable('stimulus') + "</div></div>";
    }
    if(jsPsych.timelineVariable('data')['rule'] == "direction") {
      stim += "<div style = 'text-align: center;'><h1>RICHTING<br></h1><br><br><br><div style = 'font-size:60px'>" + jsPsych.timelineVariable('stimulus') + "</div></div>";
    }
        return stim
      },
  prompt: "<br><br><br><div style='width: 600px; height:50px;'>" + prompt_male + prompt_left + prompt_right + prompt_female + "</div><br><br>" +
          "<div style='width: 600px;'><h1 style='float: left; margin:0;'>A</h1><h1 style='float: right; margin:0;'>L</h1></div>",
  data: {
    rule: function(){return jsPsych.timelineVariable('data')['rule']},
    condition: function(){
      return jsPsych.timelineVariable('data')['type']
    },
    variable: function(){return jsPsych.timelineVariable('data')['variable']},
    task: function(){return jsPsych.timelineVariable('data')['task']},
  },
};

var shifting_procedure01 = {
  timeline: [shifting_test],
  timeline_variables: [
   {stimulus: male_r, key_answer: 'A', data: {rule: 'gender', type: 'first', variable: 'shifting1', task: 'shifting'}},
{stimulus: female_l, key_answer: 'A', data: {rule: 'direction', type: 'switch', variable: 'shifting1', task: 'shifting'}},
{stimulus: male_r, key_answer: 'L', data: {rule: 'direction', type: 'repeat', variable: 'shifting1', task: 'shifting'}},
{stimulus: male_r, key_answer: 'A', data: {rule: 'gender', type: 'switch', variable: 'shifting1', task: 'shifting'}},
{stimulus: female_r, key_answer: 'L', data: {rule: 'gender', type: 'repeat', variable: 'shifting1', task: 'shifting'}},
{stimulus: female_l, key_answer: 'A', data: {rule: 'direction', type: 'switch', variable: 'shifting1', task: 'shifting'}},
{stimulus: female_l, key_answer: 'A', data: {rule: 'direction', type: 'repeat', variable: 'shifting1', task: 'shifting'}},
{stimulus: male_l, key_answer: 'A', data: {rule: 'direction', type: 'repeat', variable: 'shifting1', task: 'shifting'}},
{stimulus: female_r, key_answer: 'L', data: {rule: 'gender', type: 'switch', variable: 'shifting1', task: 'shifting'}},
{stimulus: female_r, key_answer: 'L', data: {rule: 'gender', type: 'repeat', variable: 'shifting1', task: 'shifting'}},
{stimulus: female_l, key_answer: 'A', data: {rule: 'direction', type: 'switch', variable: 'shifting1', task: 'shifting'}},
{stimulus: male_r, key_answer: 'A', data: {rule: 'gender', type: 'switch', variable: 'shifting1', task: 'shifting'}},
{stimulus: male_r, key_answer: 'A', data: {rule: 'gender', type: 'repeat', variable: 'shifting1', task: 'shifting'}},
{stimulus: female_l, key_answer: 'A', data: {rule: 'direction', type: 'switch', variable: 'shifting1', task: 'shifting'}},
{stimulus: female_l, key_answer: 'A', data: {rule: 'direction', type: 'repeat', variable: 'shifting1', task: 'shifting'}},
{stimulus: female_r, key_answer: 'L', data: {rule: 'direction', type: 'repeat', variable: 'shifting1', task: 'shifting'}},
{stimulus: female_l, key_answer: 'L', data: {rule: 'gender', type: 'switch', variable: 'shifting1', task: 'shifting'}},
{stimulus: female_l, key_answer: 'L', data: {rule: 'gender', type: 'repeat', variable: 'shifting1', task: 'shifting'}},
{stimulus: male_l, key_answer: 'A', data: {rule: 'direction', type: 'switch', variable: 'shifting1', task: 'shifting'}},
{stimulus: female_l, key_answer: 'L', data: {rule: 'gender', type: 'switch', variable: 'shifting1', task: 'shifting'}},
{stimulus: female_l, key_answer: 'L', data: {rule: 'gender', type: 'repeat', variable: 'shifting1', task: 'shifting'}},
{stimulus: male_l, key_answer: 'A', data: {rule: 'direction', type: 'switch', variable: 'shifting1', task: 'shifting'}},
{stimulus: female_r, key_answer: 'L', data: {rule: 'direction', type: 'repeat', variable: 'shifting1', task: 'shifting'}},
{stimulus: male_r, key_answer: 'L', data: {rule: 'direction', type: 'repeat', variable: 'shifting1', task: 'shifting'}},
{stimulus: female_r, key_answer: 'L', data: {rule: 'gender', type: 'switch', variable: 'shifting1', task: 'shifting'}},
{stimulus: female_l, key_answer: 'A', data: {rule: 'direction', type: 'switch', variable: 'shifting1', task: 'shifting'}},
{stimulus: female_r, key_answer: 'L', data: {rule: 'direction', type: 'repeat', variable: 'shifting1', task: 'shifting'}},
{stimulus: male_r, key_answer: 'A', data: {rule: 'gender', type: 'switch', variable: 'shifting1', task: 'shifting'}},
{stimulus: female_l, key_answer: 'A', data: {rule: 'direction', type: 'switch', variable: 'shifting1', task: 'shifting'}},
{stimulus: female_l, key_answer: 'A', data: {rule: 'direction', type: 'repeat', variable: 'shifting1', task: 'shifting'}},
{stimulus: male_r, key_answer: 'A', data: {rule: 'gender', type: 'switch', variable: 'shifting1', task: 'shifting'}},
{stimulus: male_l, key_answer: 'A', data: {rule: 'gender', type: 'repeat', variable: 'shifting1', task: 'shifting'}},
{stimulus: female_l, key_answer: 'L', data: {rule: 'gender', type: 'repeat', variable: 'shifting1', task: 'shifting'}},
  ],
};

//------------------------- Standard Shifting - Set 2

var shifting_procedure02 = {
  timeline: [shifting_test],
  timeline_variables: [
    {stimulus: female_l, key_answer: 'L', data: {rule: 'gender', type: 'first', variable: 'shifting1', task: 'shifting'}},
{stimulus: male_r, key_answer: 'A', data: {rule: 'gender', type: 'repeat', variable: 'shifting1', task: 'shifting'}},
{stimulus: male_l, key_answer: 'A', data: {rule: 'gender', type: 'repeat', variable: 'shifting1', task: 'shifting'}},
{stimulus: female_l, key_answer: 'L', data: {rule: 'gender', type: 'repeat', variable: 'shifting1', task: 'shifting'}},
{stimulus: female_r, key_answer: 'L', data: {rule: 'direction', type: 'switch', variable: 'shifting1', task: 'shifting'}},
{stimulus: female_l, key_answer: 'A', data: {rule: 'direction', type: 'repeat', variable: 'shifting1', task: 'shifting'}},
{stimulus: female_l, key_answer: 'L', data: {rule: 'gender', type: 'switch', variable: 'shifting1', task: 'shifting'}},
{stimulus: female_r, key_answer: 'L', data: {rule: 'direction', type: 'switch', variable: 'shifting1', task: 'shifting'}},
{stimulus: male_r, key_answer: 'L', data: {rule: 'direction', type: 'repeat', variable: 'shifting1', task: 'shifting'}},
{stimulus: male_r, key_answer: 'A', data: {rule: 'gender', type: 'switch', variable: 'shifting1', task: 'shifting'}},
{stimulus: female_r, key_answer: 'L', data: {rule: 'direction', type: 'switch', variable: 'shifting1', task: 'shifting'}},
{stimulus: female_r, key_answer: 'L', data: {rule: 'gender', type: 'switch', variable: 'shifting1', task: 'shifting'}},
{stimulus: female_l, key_answer: 'L', data: {rule: 'gender', type: 'repeat', variable: 'shifting1', task: 'shifting'}},
{stimulus: male_r, key_answer: 'A', data: {rule: 'gender', type: 'repeat', variable: 'shifting1', task: 'shifting'}},
{stimulus: female_l, key_answer: 'A', data: {rule: 'direction', type: 'switch', variable: 'shifting1', task: 'shifting'}},
{stimulus: female_l, key_answer: 'A', data: {rule: 'direction', type: 'repeat', variable: 'shifting1', task: 'shifting'}},
{stimulus: male_l, key_answer: 'A', data: {rule: 'direction', type: 'repeat', variable: 'shifting1', task: 'shifting'}},
{stimulus: female_r, key_answer: 'L', data: {rule: 'gender', type: 'switch', variable: 'shifting1', task: 'shifting'}},
{stimulus: male_l, key_answer: 'A', data: {rule: 'gender', type: 'repeat', variable: 'shifting1', task: 'shifting'}},
{stimulus: male_l, key_answer: 'A', data: {rule: 'direction', type: 'switch', variable: 'shifting1', task: 'shifting'}},
{stimulus: female_r, key_answer: 'L', data: {rule: 'direction', type: 'repeat', variable: 'shifting1', task: 'shifting'}},
{stimulus: male_l, key_answer: 'A', data: {rule: 'gender', type: 'switch', variable: 'shifting1', task: 'shifting'}},
{stimulus: female_l, key_answer: 'L', data: {rule: 'gender', type: 'repeat', variable: 'shifting1', task: 'shifting'}},
{stimulus: male_l, key_answer: 'A', data: {rule: 'gender', type: 'repeat', variable: 'shifting1', task: 'shifting'}},
{stimulus: male_r, key_answer: 'L', data: {rule: 'direction', type: 'switch', variable: 'shifting1', task: 'shifting'}},
{stimulus: male_l, key_answer: 'A', data: {rule: 'direction', type: 'repeat', variable: 'shifting1', task: 'shifting'}},
{stimulus: female_l, key_answer: 'L', data: {rule: 'gender', type: 'switch', variable: 'shifting1', task: 'shifting'}},
{stimulus: male_r, key_answer: 'L', data: {rule: 'direction', type: 'switch', variable: 'shifting1', task: 'shifting'}},
{stimulus: male_l, key_answer: 'A', data: {rule: 'direction', type: 'repeat', variable: 'shifting1', task: 'shifting'}},
{stimulus: male_l, key_answer: 'A', data: {rule: 'gender', type: 'switch', variable: 'shifting1', task: 'shifting'}},
{stimulus: female_l, key_answer: 'L', data: {rule: 'gender', type: 'repeat', variable: 'shifting1', task: 'shifting'}},
{stimulus: male_l, key_answer: 'A', data: {rule: 'direction', type: 'switch', variable: 'shifting1', task: 'shifting'}},
{stimulus: male_l, key_answer: 'A', data: {rule: 'gender', type: 'switch', variable: 'shifting1', task: 'shifting'}},
  ]
};

var shifting_interblock = {
  type: jsPsychHtmlButtonResponse,
  stimulus: "Goed gedaan! Je bent nu halverwege.<br>Neem even pauze als u dat nodig heeft en druk op 'verder' als je klaar bent voor de rest van het spel.<br><br>",
  choices: ['verder'],
  data: {
    task: 'shifting',
    variable: 'interblock'
  }
}


