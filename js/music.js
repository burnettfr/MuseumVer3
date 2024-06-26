numberOfQuest = document.querySelectorAll("input").length;
numberOfButtons = document.querySelectorAll("button").length;
numberOfSongs = numberOfQuest;

var answers = [];
correctAns = 0;
// console.log(numberOfButtons);
// console.log(document.querySelectorAll("select")[0].name);
// console.log(document.querySelectorAll("select")[0].value);

let snip1 = new Audio("Songs/IWasMadeToLoveHer.mp3");
let snip2 = new Audio("Songs/CloudNine.mp3");
let snip3 = new Audio("Songs/ISecondThatEmotion.mp3");
let snip4 = new Audio("Songs/Bernadette.mp3");
let snip5 = new Audio("Songs/You Cant Hurry Love.mp3");
let snip6 = new Audio("Songs/My Girl.mp3");
let snip7 = new Audio("Songs/IHeardItThroughTheGrapevine.mp3");
let snip8 = new Audio("Songs/ReachOutI'llBeThere.mp3");
let snip9 = new Audio("Songs/(IKnow)I'mLosingYou.mp3");
let snip10 = new Audio("Songs/ICan'tHelpMyself(SugarPieHoneyBunch).mp3");
let snip11 = new Audio("Songs/Ain'tNoMountainHighEnough.mp3");
let snip12 = new Audio("Songs/What'sGoingOn.mp3");
let snip13 = new Audio("Songs/ItsTheSameOldSong.mp3");
let snip14 = new Audio("Songs/Aint That Peculiar.mp3");

let songs = [snip1, snip2, snip3, snip4, snip5, snip6, snip7, snip8,
             snip9, snip10, snip11, snip12, snip13, snip14];


for (var i = 0; i < numberOfButtons - 2; i = i +2) {
    document.querySelectorAll("button")[i].addEventListener("click", function(){
        // console.log(document.querySelectorAll("button")[i].innerText);
        var buttonId = this.id;
        songClick(buttonId);
    });
}

for (var i = 1; i < numberOfButtons - 2; i = i +2) {
    document.querySelectorAll("button")[i].addEventListener("click", function(){
        // console.log(document.querySelectorAll("button")[i].innerText);
        var buttonId = this.id;
        buttonAnimation(buttonId);
        pauseAll();
    });
}

document.querySelector("#button1").addEventListener("click", handleClick);

document.querySelector("#button2").addEventListener("click", startOver);

document.querySelector("#button3").addEventListener("click", welcome);



function songClick(id){
    // console.log(id);
    for(var i = 0; i < numberOfSongs; i++) {
        songs[i].pause()
      } 

    for (var i = 0; i < numberOfButtons - 2; i = i +2) {
        document.querySelectorAll("button")[i].classList.remove("pressed");
    }

    buttonAnimation2(id);

    switch (id) {
        case "song1":
            snip1.play();

            // document.querySelector("#song1p").addEventListener("click", function(){
            // // var bId = this.id;
            // // console.log("You pressed button with ID: " + bId);
            //     snip1.pause();
            // });

            break

        case "song2":
            snip2.play();
            break

        case "song3":
            snip3.play();
            break;

        case "song4":
            snip4.play();
            break;

        case "song5":
            snip5.play();
            break;

        case "song6":
            snip6.play();
            break;

        case "song7":
            snip7.play();
            break;

        case "song8":
            snip8.play();
            break;

        case "song9":
            snip9.play();
            break;

        case "song10":
            snip10.play();
            break;

        case "song11":
            snip11.play();
            break;

        case "song12":
            snip12.play(); 
            break;

        case "song13":
            snip13.play(); 
            break;

        case "song14":
            snip14.play(); 
            break;
    
        // default: console.log("Unknown");
    }
}

function pauseAll(){
    for(var i = 0; i < numberOfSongs; i++) {
        songs[i].pause()
      } 
}

function pauseClick(id){
    // console.log(id);
    buttonAnimation2(id);
}

function handleClick(){
    buttonNumber = 1;
    buttonAnimation3(buttonNumber);
    correctAns = 0;
    /*alert("I got clicked");*/
    readAns();
}

function startOver(){
    buttonNumber = 2;
    buttonAnimation3(buttonNumber);
    /*alert("Start Over");*/
    reset();
    pauseAll();
}

function readAns(){
    for (var i = 0; i < numberOfQuest; i++) {
        if (i == 0 && document.querySelectorAll("input")[i].value.toUpperCase() == "L"){
            correctAns++;
            document.querySelectorAll("input")[i].classList.remove("wrong");
            document.querySelectorAll("input")[i].classList.add("correct");
            document.querySelectorAll("input")[i].disabled = true
        }
        if (i == 0 && document.querySelectorAll("input")[i].value.toUpperCase() != "L"){
            document.querySelectorAll("input")[i].classList.add("wrong");
        }

        if (i == 1 && document.querySelectorAll("input")[i].value.toUpperCase() == "N"){
            correctAns++;
            document.querySelectorAll("input")[i].classList.remove("wrong");
            document.querySelectorAll("input")[i].classList.add("correct");
            document.querySelectorAll("input")[i].disabled = true
        }
        if (i == 1 && document.querySelectorAll("input")[i].value.toUpperCase() != "N"){
            document.querySelectorAll("input")[i].classList.add("wrong");
        }

        if (i == 2 && document.querySelectorAll("input")[i].value.toUpperCase() == "K"){
            correctAns++;
            document.querySelectorAll("input")[i].classList.remove("wrong");
            document.querySelectorAll("input")[i].classList.add("correct");
            document.querySelectorAll("input")[i].disabled = true
        }
        if (i == 2 && document.querySelectorAll("input")[i].value.toUpperCase() != "K"){
            document.querySelectorAll("input")[i].classList.add("wrong");
        }

        if (i == 3 && document.querySelectorAll("input")[i].value.toUpperCase() == "A"){
            correctAns++;
            document.querySelectorAll("input")[i].classList.remove("wrong");
            document.querySelectorAll("input")[i].classList.add("correct");
            document.querySelectorAll("input")[i].disabled = true
        }
        if (i == 3 && document.querySelectorAll("input")[i].value.toUpperCase() != "A"){
            document.querySelectorAll("input")[i].classList.add("wrong");
        }

        if (i == 4 && document.querySelectorAll("input")[i].value.toUpperCase() == "M"){
            correctAns++;
            document.querySelectorAll("input")[i].classList.remove("wrong");
            document.querySelectorAll("input")[i].classList.add("correct");
            document.querySelectorAll("input")[i].disabled = true
        }
        if (i == 4 && document.querySelectorAll("input")[i].value.toUpperCase() != "M"){
            document.querySelectorAll("input")[i].classList.add("wrong");
        }

        if (i == 5 && document.querySelectorAll("input")[i].value.toUpperCase() == "P"){
            correctAns++;
            document.querySelectorAll("input")[i].classList.remove("wrong");
            document.querySelectorAll("input")[i].classList.add("correct");
            document.querySelectorAll("input")[i].disabled = true
        }
        if (i == 5 && document.querySelectorAll("input")[i].value.toUpperCase() != "P"){
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

        if (i == 7 && document.querySelectorAll("input")[i].value.toUpperCase() == "D"){
            correctAns++;
            document.querySelectorAll("input")[i].classList.remove("wrong");
            document.querySelectorAll("input")[i].classList.add("correct");
            document.querySelectorAll("input")[i].disabled = true
        }
        if (i == 7 && document.querySelectorAll("input")[i].value.toUpperCase() != "D"){
            document.querySelectorAll("input")[i].classList.add("wrong");
        }

        if (i == 8 && document.querySelectorAll("input")[i].value.toUpperCase() == "O"){
            correctAns++;
            document.querySelectorAll("input")[i].classList.remove("wrong");
            document.querySelectorAll("input")[i].classList.add("correct");
            document.querySelectorAll("input")[i].disabled = true
        }
        if (i == 8 && document.querySelectorAll("input")[i].value.toUpperCase() != "O"){
            document.querySelectorAll("input")[i].classList.add("wrong");
        }

        if (i == 9 && document.querySelectorAll("input")[i].value.toUpperCase() == "B"){
            correctAns++;
            document.querySelectorAll("input")[i].classList.remove("wrong");
            document.querySelectorAll("input")[i].classList.add("correct");
            document.querySelectorAll("input")[i].disabled = true
        }
        if (i == 9 && document.querySelectorAll("input")[i].value.toUpperCase() != "B"){
            document.querySelectorAll("input")[i].classList.add("wrong");
        }

        if (i == 10 && document.querySelectorAll("input")[i].value.toUpperCase() == "G"){
            correctAns++;
            document.querySelectorAll("input")[i].classList.remove("wrong");
            document.querySelectorAll("input")[i].classList.add("correct");
            document.querySelectorAll("input")[i].disabled = true
        }
        if (i == 10 && document.querySelectorAll("input")[i].value.toUpperCase() != "G"){
            document.querySelectorAll("input")[i].classList.add("wrong");
        }

        if (i == 11 && document.querySelectorAll("input")[i].value.toUpperCase() == "J"){
            correctAns++;
            document.querySelectorAll("input")[i].classList.remove("wrong");
            document.querySelectorAll("input")[i].classList.add("correct");
            document.querySelectorAll("input")[i].disabled = true
        }
        if (i == 11 && document.querySelectorAll("input")[i].value.toUpperCase() != "J"){
            document.querySelectorAll("input")[i].classList.add("wrong");
        }

        if (i == 12 && document.querySelectorAll("input")[i].value.toUpperCase() == "C"){
            correctAns++;
            document.querySelectorAll("input")[i].classList.remove("wrong");
            document.querySelectorAll("input")[i].classList.add("correct");
            document.querySelectorAll("input")[i].disabled = true
        }
        if (i == 12 && document.querySelectorAll("input")[i].value.toUpperCase() != "C"){
            document.querySelectorAll("input")[i].classList.add("wrong");
        }

        if (i == 13 && document.querySelectorAll("input")[i].value.toUpperCase() == "H"){
            correctAns++;
            document.querySelectorAll("input")[i].classList.remove("wrong");
            document.querySelectorAll("input")[i].classList.add("correct");
            document.querySelectorAll("input")[i].disabled = true
        }
        if (i == 13 && document.querySelectorAll("input")[i].value.toUpperCase() != "H"){
            document.querySelectorAll("input")[i].classList.add("wrong");
        }
    }
    document.querySelectorAll("#textChange")[0].innerText = "Number Correct: " + correctAns;
    inCorrectAns = numberOfQuest - correctAns;
    percentCorrect = correctAns/numberOfQuest;
    console.log(percentCorrect);

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

    for (var i = 0; i < numberOfButtons - 2; i = i +2) {
        document.querySelectorAll("button")[i].classList.remove("pressed");
    }

    document.querySelectorAll("#textChange")[0].innerText = "Number Correct:";
}

function buttonAnimation(buttonNumber) {
    // console.log(buttonNumber);
    
    // var activeButton = document.querySelector("#button" + buttonNumber);
    var activeButton = document.querySelector("#" + buttonNumber);
  
    activeButton.classList.add("pressed");
  
    setTimeout(function() {
      activeButton.classList.remove("pressed");
    }, 100);
    
  }

  function buttonAnimation2(buttonId) {
    // console.log("Button ID is: " + buttonId);
    
    var activeButton = document.querySelector("#" + buttonId);
  
    activeButton.classList.add("pressed");
  
    // setTimeout(function() {
    //   activeButton.classList.remove("pressed");
    // }, 100);
    
  }

  function buttonAnimation3(buttonNumber) {
    // console.log(buttonNumber);
    
    var activeButton = document.querySelector("#button" + buttonNumber);
    // var activeButton = document.querySelector("#" + buttonNumber);
  
    activeButton.classList.add("pressed");
  
    setTimeout(function() {
      activeButton.classList.remove("pressed");
    }, 100);
    
  }


  

function welcome(){
    // window.location.href = 'file:///C:/Gronkle/Engineering/Web%20Development/Museum/Ver3/mainPage.html';
    window.location.href = 'file:///C:/burnett/MuseumVer3/mainPage.html';

}