const interes = 8.4 / 100; 
var slider = document.getElementById("dinero");
var output = document.getElementById("resdinero");
var slider2 = document.getElementById("meses");
var output2 = document.getElementById("resmeses");
var output3 = document.getElementById("pago");

output.innerHTML = slider.value; // Display the default slider value

// Update the current slider value (each time you drag the slider handle)
slider.oninput = function() {
  output.innerHTML = slider.value;
  var pagomensual = slider.value/slider2.value;
  var interesmensual = slider.value * (interes / 12);
  var pago = pagomensual + interesmensual;
  output3.innerHTML = pago.toFixed(2);
} 

output2.innerHTML = slider2.value; // Display the default slider value

// Update the current slider value (each time you drag the slider handle)
slider2.oninput = function() {
  output2.innerHTML = slider2.value;
  var pagomensual = slider.value/slider2.value;
  var interesmensual = slider.value * (interes / 12);
  var pago = pagomensual + interesmensual;
  output3.innerHTML = pago.toFixed(2);
} 
