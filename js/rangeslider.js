const interes = 8.4; 
var slider = document.getElementById("dinero");
var output = document.getElementById("resdinero");
output.innerHTML = slider.value; // Display the default slider value

// Update the current slider value (each time you drag the slider handle)
slider.oninput = function() {
  output.innerHTML = slider.value;
} 

var slider2 = document.getElementById("dias");
var output2 = document.getElementById("resdias");
output2.innerHTML = slider2.value; // Display the default slider value

// Update the current slider value (each time you drag the slider handle)
slider2.oninput = function() {
  output2.innerHTML = slider2.value;
} 

var output3 = document.getElementById("pago");

// Update the current Pago value (each time you drag the slider handle)
slider.oninput = function() {
	var pago = (slider2.value/360) * interes * slider.value;
	output3.innerHTML = pago.toFixed(2);
} 
slider2.oninput = function() {
	var pago = (slider2.value/360) * interes * slider.value;
	output3.innerHTML = pago.toFixed(2);
} 