var encoding_display = function(stimuli){
  
  // var boxes = ["black", "black", "black", "black", "black"];
  var letter1 = stimuli[0];
  var letter2 = stimuli[1];
  var letter3 = stimuli[2];
  
  
  html = "<style>";
  html += ".grid-container {";
  html += "display: grid;";
  html += "grid-template-columns: auto;";
  html += "grid-template-rows: auto auto;";
  html += "padding: 0px;";
  html += "position:relative;";
  html += "justify-content: center;";
  html += "text-align: center;";
  html += "}";
  html += ".grid-item {";
  //html += "padding: 0px;";
  html += "justify-content: center;";
  html += "text-align: center;";
  html += "}";
  html += "</style>";
  
  html += "<div class='grid-container' style = 'height:100px; margin: auto;'>";
  html += "<div class='grid-item'>";
  html += "<div style = 'display: inline-grid; width: 500px; height: 90px; font-size: 70px; grid: 70px / auto auto auto;'>";
  html += "<div style = 'margin: auto; border:4px solid black; background:white; width: 90px; height: 90px;'>";
  html += "<div style = 'margin: auto; padding: 25px 0px'><span>" + letter1 + "</span></div>";
  html += "</div>";
  html += "<div style = 'margin: auto; border:4px solid black; background:white; width: 90px; height: 90px;'>";
  html += "<div style = 'margin: auto; padding: 25px 0px'><span>" + letter2 + "</span></div>";
  html += "</div>";
  html += "<div style = 'margin: auto; border:4px solid black; background:white; width: 90px; height: 90px;'>";
  html += "<div style = 'margin: auto; padding: 25px 0px'><span>" + letter3 + "</span></div>";
  html += "</div>";
  
  html += "</div></div>";
  
  return html;
};


var cueing_display = function(position){
  
  var boxes = ['solid black','solid black','solid black'];

  if(position == 0) {
    boxes[0] = 'solid red';
  }
  
  if(position == 1) {
    boxes[1] = 'solid red';
  }
  
  if(position == 2) {
    boxes[2] = 'solid red';
  }
  
  

  
  html = "<style>";
  html += ".grid-container {";
  html += "display: grid;";
  html += "grid-template-columns: auto;";
  html += "grid-template-rows: auto auto;";
  html += "padding: 0px;";
  html += "position:relative;";
  html += "justify-content: center;";
  html += "text-align: center;";
  html += "}";
  html += ".grid-item {";
  // html += "padding: 0px;";
  html += "justify-content: center;";
  html += "text-align: center;";
  html += "}";
  html += "</style>";
  
  html += "<div class='grid-container' style = 'height:100px';>";
  html += "<div class='grid-item'>";
  html += "<div style = 'display: inline-grid; width: 500px; height: 90px; font-size: 70px; grid: 70px / auto auto auto;'>";
  html += "<div style = 'margin: auto; border:4px " + boxes[0] + "; background:white; width: 90px; height: 90px;'>";
  html += "<div style = 'margin: auto; padding: 25px 0px'><span></span></div>";
  html += "</div>";
  html += "<div style = 'margin: auto; border:4px " + boxes[1] + "; background:white; width: 90px; height: 90px;'>";
  html += "<div style = 'margin: auto; padding: 25px 0px'><span></span></div>";
  html += "</div>";
  html += "<div style = 'margin: auto; border:4px " + boxes[2] + "; background:white; width: 90px; height: 90px;'>";
  html += "<div style = 'margin: auto; padding: 25px 0px'><span></span></div>";
  html += "</div>";
  
  html += "</div></div>";
  
  return html;
};



var update_display = function(letter, position){


  var letters = ['', '', '']

  if(position == 0){
    letters[0] = letter
  }
  
  if(position == 1){
    letters[1] = letter
  }
  
  if(position == 2){
    letters[2] = letter
  }
  
  html = "<style>";
  html += ".grid-container {";
  html += "display: grid;";
  html += "grid-template-columns: auto;";
  html += "grid-template-rows: auto auto;";
  html += "padding: 0px;";
  html += "position:relative;";
  html += "justify-content: center;";
  html += "text-align: center;";
  html += "}";
  html += ".grid-item {";
  // html += "padding: 0px;";
  html += "justify-content: center;";
  html += "text-align: center;";
  html += "}";
  html += "</style>";
  
  html += "<div class='grid-container' style = 'height:100px';>";
  html += "<div class='grid-item'>";
  html += "<div style = 'display: inline-grid; width: 500px; height: 90px; font-size: 70px; grid: 70px / auto auto auto;'>";
  html += "<div style = 'margin: auto; border:4px solid black; background:white; width: 90px; height: 90px;'>";
  html += "<div style = 'margin: auto; padding: 25px 0px'><span>" + letters[0] + "</span></div>";
  html += "</div>";
  html += "<div style = 'margin: auto; border:4px solid black; background:white; width: 90px; height: 90px;'>";
  html += "<div style = 'margin: auto; padding: 25px 0px'><span>" + letters[1] + "</span></div>";
  html += "</div>";
  html += "<div style = 'margin: auto; border:4px solid black; background:white; width: 90px; height: 90px;'>";
  html += "<div style = 'margin: auto; padding: 25px 0px'><span>" + letters[2] + "</span></div>";
  html += "</div>";
  
  html += "</div></div>";
  
  return html;
};


var recall_display = function(letter, position){
  
  html = "<style>";
  html += ".grid-container {";
  html += "display: grid;";
  html += "grid-template-columns: auto;";
  html += "grid-template-rows: auto auto;";
  html += "padding: 0px;";
  html += "position:relative;";
  html += "justify-content: center;";
  html += "text-align: center;";
  html += "}";
  html += ".grid-item {";
  // html += "padding: 0px;";
  html += "justify-content: center;";
  html += "text-align: center;";
  html += "}";
  html += "</style>";
  
  html += "<div class='grid-container' style = 'height:100px';>";
  html += "<div class='grid-item'>";
  html += "<div style = 'display: inline-grid; width: 500px; height: 90px; font-size: 70px; grid: 70px / auto auto auto;'>";
  html += "<div style = 'margin: auto; border:4px solid black; background:white; width: 90px; height: 90px;'>";
  html += "<div style = 'margin: auto; padding: 25px 0px'><span><input name='first' type='text' size='4'/></span></div>";
  html += "</div>";
  html += "<div style = 'margin: auto; border:4px solid black; background:white; width: 90px; height: 90px;'>";
  html += "<div style = 'margin: auto; padding: 25px 0px'><span><span><input name='second' type='text' size='4'/></span></div>";
  html += "</div>";
  html += "<div style = 'margin: auto; border:4px solid black; background:white; width: 90px; height: 90px;'>";
  html += "<div style = 'margin: auto; padding: 25px 0px'><span><span><input name='third' type='text' size='4'/></span></div>";
  html += "</div>";
  
  html += "</div></div><br><br><br><br>";
  
  return html;
};

