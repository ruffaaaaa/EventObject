document.addEventListener('keyup', function(event) { //The keyup event is used when a key is released.
    var keyName = event.key;
    var charCode = event.which;  
    var shiftKeyPressed = event.shiftKey;
    var altKeyPressed = event.altKey;
    
   
    alert("Key Pressed: " + keyName + "\nCharCode: " + charCode + 
    "\nSHIFT Key Pressed: " + shiftKeyPressed + "\nALT Key Pressed: " + altKeyPressed);
    
    
  });