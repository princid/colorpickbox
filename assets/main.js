function findColor() {
  let element = document.getElementsByName("color");

  // Making an empty string, so that later on I can append the value inside this empty string.
  let selectedElements = "";


  // Making an empty array, so that later on I can push the values inside this empty array.
//   let selectedElements = [];

  let len = element.length;

  for (let i = 0; i < len; i++) {
    if (element[i].checked == true) {
      selectedElements += element[i].value + "\n"; // appending the values in string
    //   selectedElements.push(element[i].value); //  pushing the elements in array
    }
  }
  document.getElementById("result").innerText = selectedElements;


  // Green Text
  let greenTxt = document.getElementById('green');
  if(greenTxt.checked == true){
    let greener = document.getElementById('greenBoy');
    greener.innerText = greenTxt.value;
    greener.classList.add("greenBox");
  }
  else{
    let greener = document.getElementById('greenBoy');
    greener.innerText = "";
  }
  
  // Red Text
  let redTxt = document.getElementById('red');
  if(redTxt.checked == true){
    let redeer = document.getElementById('redBoy');
    redeer.innerText = redTxt.value;
    redeer.classList.add("redBox");
  }
  else{
    let redeer = document.getElementById('redBoy');
    redeer.innerText = "";
  }

  // Blue Text
  let blueTxt = document.getElementById('blue');
  if(blueTxt.checked == true){
    let blueer = document.getElementById('blueBoy');
    blueer.innerText = blueTxt.value;
    blueer.classList.add("blueBox");
  }
  else{
    let blueer = document.getElementById('blueBoy');
    blueer.innerText = "";
  }


  // Pink Text
  let pinkTxt = document.getElementById('pink');
  if(pinkTxt.checked == true){
    let pinker = document.getElementById('pinkBoy');
    pinker.innerText = pinkTxt.value;
    pinker.classList.add("pinkBox");
  }
  else{
    let pinker = document.getElementById('pinkBoy');
    pinker.innerText = "";
  }

  // Orange Text
  let orangeTxt = document.getElementById('orange');
  if(orangeTxt.checked == true){
    let oranger = document.getElementById('orangeBoy');
    oranger.innerText = orangeTxt.value;
    oranger.classList.add("orangeBox");
  }
  else{
    let oranger = document.getElementById('orangeBoy');
    oranger.innerText = "";
  }

  console.log(selectedElements);
}
