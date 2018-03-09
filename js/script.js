const wrapper = document.getElementById("wrapper");
const myAssignment = document.getElementById("myAssignment");
const myAnswer = document.getElementById("myAnswer");
const feedback = document.getElementById("feedback");

let mySum;
let sound = new Audio();

makeSum();
myAnswer.addEventListener("keyPress", keyPressed, false);

keyPressed();


function makeSum() {
 var a = Math.floor(Math.random() * 10 + 1);
 var b = Math.floor(Math.random() * 10 + 1);
  c = a * b;

 mySum = a + " x " + b + " = ";
 myAssignment.innerHTML = mySum;
 myAnswer.focus();

}

function keyPressed()
      {

        myAnswer.addEventListener("keypress", function(evt){
          if (evt.keyCode == 13) {
            if (eval(c) == myAnswer.value) {
              alert("Goed");
              makeSum();
            }else{
                alert("Fout");
              }
          }
        });
      }
