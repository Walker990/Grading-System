function gradeChecker() {
  var song1 = new Audio("Audio/wave.mp3");
  var song2 = new Audio("Audio/wave.mp3");
  var song3 = new Audio("Audio/fun.mp3");
  var song4 = new Audio("Audio/reggea.mp3");
  var song5 = new Audio("Audio/jezz.mp3");
  var song6 = new Audio("Audio/pled.mp3");

  var score = parseInt(inp.value); 

  if (score >= 70 && score <= 100) {
    china.value = "A-- Excellent👌";
    china.style.color = 'Red'
    song1.play();
  } else if (score >= 60 && score <= 69) {
    china.value = "B-- veryGood 😁";
    china.style.color = 'blue'
    song2.play();
  } else if (score >= 50 && score <= 59) {
    china.value = "'C'-- Fair 👍";
    console.log(china.style);
    china.style.color = 'yellow'
   song3.play();
  } else if (score >= 45 && score <= 49) {
    china.value = "D--Good👏 ";
    china.style.value = 'brown'
    song4.play();
  } else if (score >= 40 && score <= 44) {
    china.value = "P --Poor 🤦‍♂️";
    china.style.color = 'red'
    song5.play();
  } else if (score >= 0 && score <= 39) {
    china.value = "F --Fail😢";
    china.style.color = 'red'
    song6.play();
  } else if (score > 100) {
    china.value = "'Not Defined' -Error😒";
    china.style.color = 'yellow';
  }

  else{
    china.value = 'Invalid input'
    console.log('invalid input')
  }

  inp.value = '';
}
