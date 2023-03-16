//------------------------- End of the task and save data

var updating_standard_end = {
  type: 'html-button-response',
  stimulus: "Great work!<br><br>" + 
  "You are now finished playing this game.<br><br>" +
  "Click 'finish' to continue.<br><br>",
  choices: ['Finish'],
  data: {variable: "updating_standard_finish", task: "updating_standard"},
  on_finish: function() {
    var subjID = jsPsych.data.get().select("ID").values[0];
    var updating_standard_data = jsPsych.data.get().filter([{variable: "ID"}, {variable: "counter_balance_scheme"}, {task: "updating_standard"}]);
    updating_standard_data.localSave('csv', subjID + "_updating_standard" + ".csv");
  }
};