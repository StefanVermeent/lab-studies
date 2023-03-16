//------------------------- End of the task and save data

var updating_ecological_end = {
  type: 'html-button-response',
  stimulus: "Great work!<br><br>" + 
  "You are now finished playing this game.<br><br>" +
  "Click 'finish' to continue.<br><br>",
  choices: ['Finish'],
  data: {variable: "updating_ecological_finish", task: "updating_ecological"},
  on_finish: function() {
    var subjID = jsPsych.data.get().select("ID").values[0];
    var updating_ecological_data = jsPsych.data.get().filter([{variable: "ID"}, {variable: "counter_balance_scheme"}, {task: "updating_ecological"}]);
    updating_ecological_data.localSave('csv', subjID + "_updating_ecological" + ".csv");
  }
};