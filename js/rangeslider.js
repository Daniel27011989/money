var slider = document.getElementById("dinero");
var output = document.getElementById("resdinero");
output.innerHTML = slider.value; // Display the default slider value

// Update the current slider value (each time you drag the slider handle)
slider.oninput = function() {
  output.innerHTML = slider.value;
} 

var slider2 = document.getElementById("dias");
var output2 = document.getElementById("resdias");
output.innerHTML = slider2.value; // Display the default slider value

// Update the current slider value (each time you drag the slider handle)
slider2.oninput = function() {
  output2.innerHTML = slider2.value;
} 