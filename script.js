document.addEventListener('keydown', function(event) {
    var keyName = event.key;
    var charCode = event.keyCode;
    var shiftKeyPressed = event.shiftKey;
    var altKeyPressed = event.altKey;


    if (shiftKeyPressed && altKeyPressed) {
        alert("Key Pressed: " + keyName + "\nCharCode: " + charCode + 
        "\nSHIFT Key Pressed: " + shiftKeyPressed + "\nALT Key Pressed: " + altKeyPressed);
    }

    else {
        alert("Key Pressed: " + keyName + "\nCharCode: " + charCode + 
        "\nSHIFT Key Pressed:  " + shiftKeyPressed + "\nALT Key Pressed: " + altKeyPressed);
    }
  });