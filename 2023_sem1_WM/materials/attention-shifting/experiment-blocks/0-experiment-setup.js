//-------------------- Start the Experiment

// timeline
var timeline = [];

timeline.push({
  type: 'instructions',
  pages: [
    "Welcome to the <b>color-shape</b> game."
  ],
  show_clickable_nav: true,
  allow_backward: true,
  key_forward: -1,
  key_backward: -1,
  button_label_next: "continue",
  data: {variable: 'welcome'}
});