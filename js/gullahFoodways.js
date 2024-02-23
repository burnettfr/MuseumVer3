numberOfQuest = document.querySelectorAll("input").length;
var answers = [];
correctAns = 0;
/*console.log(numberOfQuest);
console.log(document.querySelectorAll("select")[0].name);
console.log(document.querySelectorAll("select")[0].value);
*/

document.querySelector("#button1").addEventListener("click", handleClick);

document.querySelector("#button2").addEventListener("click", startOver);

document.querySelector("#button3").addEventListener("click", welcome);

function handleClick(){
    buttonNumber = 1;
    buttonAnimation(buttonNumber);
    correctAns = 0;
    /*alert("I got clicked");*/
    readAns();
}

function startOver(){
    buttonNumber = 2;
    buttonAnimation(buttonNumber);
    /*alert("Start Over");*/
    reset();
}

function readAns(){
    for (var i = 0; i < numberOfQuest; i++) {
        if (i == 0 && document.querySelectorAll("input")[i].value.toUpperCase() == "F"){
            correctAns++;
            document.querySelectorAll("input")[i].classList.remove("wrong");
            document.querySelectorAll("input")[i].classList.add("correct");
            document.querySelectorAll("input")[i].disabled = true
        }
        if (i == 0 && document.querySelectorAll("input")[i].value.toUpperCase() != "F"){
            document.querySelectorAll("input")[i].classList.add("wrong");
        }

        if (i == 1 && document.querySelectorAll("input")[i].value.toUpperCase() == "G"){
            correctAns++;
            document.querySelectorAll("input")[i].classList.remove("wrong");
            document.querySelectorAll("input")[i].classList.add("correct");
            document.querySelectorAll("input")[i].disabled = true
        }
        if (i == 1 && document.querySelectorAll("input")[i].value.toUpperCase() != "G"){
            document.querySelectorAll("input")[i].classList.add("wrong");
        }

        if (i == 2 && document.querySelectorAll("input")[i].value.toUpperCase() == "D"){
            correctAns++;
            document.querySelectorAll("input")[i].classList.remove("wrong");
            document.querySelectorAll("input")[i].classList.add("correct");
            document.querySelectorAll("input")[i].disabled = true
        }
        if (i == 2 && document.querySelectorAll("input")[i].value.toUpperCase() != "D"){
            document.querySelectorAll("input")[i].classList.add("wrong");
        }

        if (i == 3 && document.querySelectorAll("input")[i].value.toUpperCase() == "J"){
            correctAns++;
            document.querySelectorAll("input")[i].classList.remove("wrong");
            document.querySelectorAll("input")[i].classList.add("correct");
            document.querySelectorAll("input")[i].disabled = true
        }
        if (i == 3 && document.querySelectorAll("input")[i].value.toUpperCase() != "J"){
            document.querySelectorAll("input")[i].classList.add("wrong");
        }

        if (i == 4 && document.querySelectorAll("input")[i].value.toUpperCase() == "K"){
            correctAns++;
            document.querySelectorAll("input")[i].classList.remove("wrong");
            document.querySelectorAll("input")[i].classList.add("correct");
            document.querySelectorAll("input")[i].disabled = true
        }
        if (i == 4 && document.querySelectorAll("input")[i].value.toUpperCase() != "K"){
            document.querySelectorAll("input")[i].classList.add("wrong");
        }

        if (i == 5 && document.querySelectorAll("input")[i].value.toUpperCase() == "L"){
            correctAns++;
            document.querySelectorAll("input")[i].classList.remove("wrong");
            document.querySelectorAll("input")[i].classList.add("correct");
            document.querySelectorAll("input")[i].disabled = true
        }
        if (i == 5 && document.querySelectorAll("input")[i].value.toUpperCase() != "L"){
            document.querySelectorAll("input")[i].classList.add("wrong");
        }

        if (i == 6 && document.querySelectorAll("input")[i].value.toUpperCase() == "I"){
            correctAns++;
            document.querySelectorAll("input")[i].classList.remove("wrong");
            document.querySelectorAll("input")[i].classList.add("correct");
            document.querySelectorAll("input")[i].disabled = true
        }
        if (i == 6 && document.querySelectorAll("input")[i].value.toUpperCase() != "I"){
            document.querySelectorAll("input")[i].classList.add("wrong");
        }
       
    }
    document.querySelectorAll("#textChange")[0].innerText = "Number Correct: " + correctAns;
    inCorrectAns = numberOfQuest - correctAns;
    percentCorrect = correctAns/numberOfQuest;
    // console.log(percentCorrect);

    if (percentCorrect < 0.35)
        popUp1(correctAns, inCorrectAns);
    else if (percentCorrect < 0.65 )
        popUp2(correctAns, inCorrectAns);
    else if (percentCorrect < 0.99 )
        popUp3(correctAns, inCorrectAns);
    else
        popUp4(correctAns, inCorrectAns);

    }

function reset(){
    for (var i = 0; i < numberOfQuest; i++) {
        document.querySelectorAll("input")[i].value = " "
        document.querySelectorAll("input")[i].classList.remove("wrong");
        document.querySelectorAll("input")[i].classList.remove("correct");
        document.querySelectorAll("input")[i].disabled = false
    }

    document.querySelectorAll("#textChange")[0].innerText = "Number Correct:";
}

function buttonAnimation(buttonNumber) {
    /*alert("Button Animation");*/
    
    var activeButton = document.querySelector("#button" + buttonNumber);
  
    activeButton.classList.add("pressed");
  
    setTimeout(function() {
      activeButton.classList.remove("pressed");
    }, 100);
    
  }


 function welcome(){
    // window.location.href = 'file:///C:/Gronkle/Engineering/Web%20Development/Museum/Ver3/mainPage.html'
    window.location.href = 'file:///C:/burnett/MuseumVer3/mainPage.html'

 }

