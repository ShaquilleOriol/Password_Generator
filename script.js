function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
};

var generateBtn = document.querySelector("#generate");

generateBtn.addEventListener("click", writePassword);


var special = ['!','@','#','$','%','^','&','*','(',')','+','-','.','?','<','=',':',';','{','}'];
var lower = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var upper = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
var numerical = ['1','2','3','4','5','6','7','8','9'];
var allChar = special + lower + upper + numerical;
var specNumLow = special + numerical + lower;
var specNumUpp = special + numerical + upper;
var specLowUpp = special + lower + upper;
var numLowUpp = numerical + lower + upper;
var specNum = special + numerical;
var specLow = special + lower;
var uppSpec = upper + special;
var lowNum = lower + numerical;
var lowUpp = lower + upper;
var numUpp = numerical + upper;

function generatePassword(){


var getCharAmount = prompt("What is the amount of characters would you like your password to be? Please choose a whole number between 8 and 128.");

if (getCharAmount < 8 || getCharAmount > 128){
  alert('Sorry Invalid amount. Password must contain atleast 8 characters, but contain less than 128 characters. Try again!');
  return;
}
else if (getCharAmount === null){
  return;
}

var password = [];

var getUpper = confirm("Click OK if you would like UpperCase letters.");
var getLower = confirm("Click OK if you would like LowerCase letters.");
var getSpecial = confirm("Click OK if you would like Special Characters.");
var getNumerical = confirm("Click OK if you would like Numbers");


if (getLower === false && getUpper === false && getSpecial === false && getNumerical === false){
  alert('Please confirm atleast one character to generate new password.');
  return;
}

else if ((getLower === true) && (getUpper === true) && (getSpecial === true) && (getNumerical === true)){
  for (i = 0; i < getCharAmount; i++){
    var ranChar = allChar[Math.floor(Math.random() * allChar.length)];
    password.push(ranChar);
  };
  return password.join("");
}

else if ((getLower === true) && (getUpper === false) && (getSpecial === true) && (getNumerical === true)){
  for (i = 0; i < getCharAmount; i++){
    var ranChar = specNumLow[Math.floor(Math.random() * specNumLow.length)];
    password.push(ranChar);
  };
  return password.join("");
}

else if ((getLower === false) && (getUpper === true) && (getSpecial === true) && (getNumerical === true)){
  for (i = 0; i < getCharAmount; i++){
    var ranChar = specNumUpp[Math.floor(Math.random() * specNumUpp.length)];
    password.push(ranChar);
  };
  return password.join("");
}

else if ((getLower === false) && (getUpper === true) && (getSpecial === true) && (getNumerical === true)){
  for (i = 0; i < getCharAmount; i++){
    var ranChar = specNumUpp[Math.floor(Math.random() * specNumUpp.length)];
    password.push(ranChar);
  };
  return password.join("");
}

else if ((getLower === true) && (getUpper === true) && (getSpecial === true) && (getNumerical === false)){
  for (i = 0; i < getCharAmount; i++){
    var ranChar = specLowUpp[Math.floor(Math.random() * specLowUpp.length)];
    password.push(ranChar);
  };
  return password.join("");
}

else if ((getLower === true) && (getUpper === true) && (getSpecial === false) && (getNumerical === true)){
  for (i = 0; i < getCharAmount; i++){
    var ranChar = numLowUpp[Math.floor(Math.random() * numLowUpp.length)];
    password.push(ranChar);
  };
  return password.join("");
}

else if ((getLower === false) && (getUpper === false) && (getSpecial === true) && (getNumerical === true)){
  for (i = 0; i < getCharAmount; i++){
    var ranChar = specNum[Math.floor(Math.random() * specNum.length)];
    password.push(ranChar);
  };
  return password.join("");
}

else if ((getLower === true) && (getUpper === false) && (getSpecial === true) && (getNumerical === false)){
  for (i = 0; i < getCharAmount; i++){
    var ranChar = specLow[Math.floor(Math.random() * specLow.length)];
    password.push(ranChar);
  };
  return password.join("");
}

else if ((getLower === false) && (getUpper === true) && (getSpecial === true) && (getNumerical === false)){
  for (i = 0; i < getCharAmount; i++){
    var ranChar = uppSpec[Math.floor(Math.random() * uppSpec.length)];
    password.push(ranChar);
  };
  return password.join("");
}

else if ((getLower === true) && (getUpper === false) && (getSpecial === false) && (getNumerical === true)){
  for (i = 0; i < getCharAmount; i++){
    var ranChar = specNumUpp[Math.floor(Math.random() * specNumUpp.length)];
    password.push(ranChar);
  };
  return password.join("");
}

else if ((getLower === false) && (getUpper === true) && (getSpecial === false) && (getNumerical === true)){
  for (i = 0; i < getCharAmount; i++){
    var ranChar = numUpp[Math.floor(Math.random() * numUpp.length)];
    password.push(ranChar);
  };
  return password.join("");
}

else if ((getLower === true) && (getUpper === true) && (getSpecial === false) && (getNumerical === false)){
  for (i = 0; i < getCharAmount; i++){
    var ranChar = lowUpp[Math.floor(Math.random() * lowUpp.length)];
    password.push(ranChar);
  };
  return password.join("");
}

else if ((getLower === false) && (getUpper === false) && (getSpecial === true) && (getNumerical === false)){
  for (i = 0; i < getCharAmount; i++){
    var ranChar = special[Math.floor(Math.random() * special.length)];
    password.push(ranChar);
  };
  return password.join("");
}

else if ((getLower === true) && (getUpper === false) && (getSpecial === false) && (getNumerical === false)){
  for (i = 0; i < getCharAmount; i++){
    var ranChar = lower[Math.floor(Math.random() * lower.length)];
    password.push(ranChar);
  };
  return password.join("");
}

else if ((getLower === false) && (getUpper === true) && (getSpecial === false) && (getNumerical === false)){
  for (i = 0; i < getCharAmount; i++){
    var ranChar = upper[Math.floor(Math.random() * upper.length)];
    password.push(ranChar);
  };
  return password.join("");
}

else if ((getLower === false) && (getUpper === false) && (getSpecial === false) && (getNumerical === true)){
  for (i = 0; i < getCharAmount; i++){
    var ranChar = numerical[Math.floor(Math.random() * numerical.length)];
    password.push(ranChar);
  };
  return password.join("");
}

passwordEl.textContent = password

}