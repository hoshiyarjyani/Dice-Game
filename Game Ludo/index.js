alert("Welcome To Ludo Game");
let name1 = prompt("Pleasse Enter Player1 Name");
document.getElementById("p1").innerHTML=name1;
document.getElementById("Tn1").innerHTML=name1;
let name2 = prompt("Pleasse Enter Player2 Name");
document.getElementById("p2").innerHTML=name2;
document.getElementById("Tn2").innerHTML=name2;
var sumT1 = 0;
var sumT2 = 0;

function myFunction() {
  var num1 = Math.floor(Math.random() * 6 + 1);

  var num2 = Math.floor(Math.random() * 6 + 1);

  if (num1) {
    if (num1 == 1) {
      Adocument.querySelectorAll("img")[0].setttribute("src", "dice1.png");
    } else if (num1 == 2) {
      document.querySelectorAll("img")[0].setAttribute("src", "dice2.png");
    } else if (num1 == 3) {
      document.querySelectorAll("img")[0].setAttribute("src", "dice3.png");
    } else if (num1 == 4) {
      document.querySelectorAll("img")[0].setAttribute("src", "dice4.png");
    } else if (num1 == 5) {
      document.querySelectorAll("img")[0].setAttribute("src", "dice5.png");
    } else if (num1 == 6) {
      document.querySelectorAll("img")[0].setAttribute("src", "dice6.png");
    }
  }
  if (num2) {
    if (num2 == 1) {
      document.querySelectorAll("img")[1].setAttribute("src", "dice1.png");
    } else if (num2 == 2) {
      document.querySelectorAll("img")[1].setAttribute("src", "dice2.png");
    } else if (num2 == 3) {
      document.querySelectorAll("img")[1].setAttribute("src", "dice3.png");
    } else if (num2 == 4) {
      document.querySelectorAll("img")[1].setAttribute("src", "dice4.png");
    } else if (num2 == 5) {
      document.querySelectorAll("img")[1].setAttribute("src", "dice5.png");
    } else if (num2 == 6) {
      document.querySelectorAll("img")[1].setAttribute("src", "dice6.png");
    }
  }
  if (sumT1 > sumT2 && sumT1>=100) {
    document.getElementById("win").innerHTML =name1+ " is Winner! (Refrsh The Page && Start Again)";
  } else if (sumT1 < sumT2 && sumT2>=100) {
    document.getElementById("win").innerHTML =name2+ " is Winner! (Refrsh The Page && Start Again)";
  } else if(sumT1 == sumT2 && sumT1>=100){
    document.getElementById("win").innerHTML = "Match Tie - (Refrsh The Page && Start Again)";
  }

  let sum1 = 0;
  let sum2 = 0;

  if (num1) {
    sum1 += num1;
  }
  if (num2) {
    sum2 += num2;
  }

  document.querySelector("#score1").innerHTML = sum1;
  document.querySelector("#score2").innerHTML = sum2;

  sumT1 += num1;
  sumT2 += num2;
  document.querySelector("#scoreT1").innerHTML = sumT1;
  document.querySelector("#scoreT2").innerHTML = sumT2;

  totel(num1, num2);
}
