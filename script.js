function print(val) {  
  return console.log(val);
}
function qs(val) {
  return document.querySelector(val);
}

let listOfQuestions = ["Is your website gluten-free?", "Why did the computer catch a cold?", "Why don't oysters donate to charity?", "Why did the scarecrow win an award?", "How does a penguin build its house?", "What's a pirate's favorite letter?"];

let listOfAnswers = ["Our website is 100% gluten-free, vegan, and even compatible with your grandma's ancient browser.", "It left its Windows open.", "Because they are shellfish!", "Because he was outstanding in his field!", "Igloos it together!", "Arrrrr, you might think it's R, but it's the C they love!"];

function generateBoxes() {
  let divs = "<h1>ACCORDIAN</h1>";
  for(let i=0; i<listOfQuestions.length; i++) {
    divs += `<section id="s${i}"> <div class="question" id="q${i}" onclick="revealAnswer(this)"><p>${listOfQuestions[i]}</p><p class="expandq${i}">▼</p></div><div class="answer" id="a${i}">${listOfAnswers[i]}</div></section>`
  }
  qs(".block").innerHTML = divs;
}

function revealAnswer(that) {

  let q = qs(`#${that.id}`);
  let a = q.nextElementSibling;
  print(a.offsetHeight);
  let expand = qs(`.expand${that.id}`);

  // print(q);
  // print(a);
  // print(a.style.height);
  if(a.style.height == `${a.scrollHeight}px`) {
    a.style.height = "0px";
    expand.textContent = "▼";
    // a.style.display = "none";
    // print("ok")
  }
  else {
    a.style.height = `${a.scrollHeight}px`;
    expand.textContent = "▲";
    // a.style.display = "flex";
    // print('no');
  }
}

generateBoxes();
