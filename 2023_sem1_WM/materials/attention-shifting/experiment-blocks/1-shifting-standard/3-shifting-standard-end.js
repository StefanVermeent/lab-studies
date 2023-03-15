//------------------------- End of the task and save data

var shifting_end = {
  type: 'html-button-response',
  stimulus: "Great work!<br><br>" + 
  "You are now finished playing this game.<br><br>" +
  "Click 'finish' to continue.<br><br>",
  choices: ['Finish'],
  data: {variable: "shifting_standard_finish", task: "shifting_standard"}
  //on_finish: function() {
  //  var subjID = jsPsych.data.get().select("ID").values[0];
  //  var shifting_standard_data = jsPsych.data.get().filter([{variable: "ID"}, {variable: "counter_balance_scheme"}, {task: "shifting_standard"}]);
  //  shifting_standard_data.localSave('csv', subjID + "_shifting_standard" + ".csv");
  //}
};