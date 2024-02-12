numberOfQuest = document.querySelectorAll("input").length;
numberOfButtons = document.querySelectorAll("button").length;
var answers = [];
correctAns = 0;
// console.log(numberOfButtons);
// console.log(document.querySelectorAll("select")[0].name);
// console.log(document.querySelectorAll("select")[0].value);

let snip1 = new Audio("Songs/IWasMadeToLoveHer Snippet.mp3");
let snip2 = new Audio("Songs/Aint That Peculiar Snippet.mp3");
let snip3 = new Audio("Songs/ItsTheSameOldSong Snippet.mp3");
let snip4 = new Audio("Songs/Bernadette Snippet.mp3");
let snip5 = new Audio("Songs/You Cant Hurry Love Snippet.mp3");
let snip6 = new Audio("Songs/ReachOutI'llBeThere Snippet.mp3");
let snip7 = new Audio("Songs/What'sGoingOnSnippet.mp3");
let snip8 = new Audio("Songs/My Girl Snippet.mp3");
let snip9 = new Audio("Songs/IWasMadeToLoveHer Snippet.mp3");
let snip10 = new Audio("Songs/IWasMadeToLoveHer Snippet.mp3");
let snip11 = new Audio("Songs/IWasMadeToLoveHer Snippet.mp3");
let snip12 = new Audio("Songs/IWasMadeToLoveHer Snippet.mp3");

numberOfSongs = 12;

let songs = [snip1, snip2, snip3, snip4, snip5, snip6, snip7, snip8,
             snip9, snip10, snip11, snip12];


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
        buttonAnimation2(buttonId);
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
    
        // default: console.log("Unknown");
    }
}

function pauseAll(){
    for(var i = 0; i < numberOfSongs; i++) {
        console.log("main for loop");  
        songs[i].pause()
      } 
}

function pauseClick(id){
    // console.log(id);
    buttonAnimation2(id);
}

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
        if (i == 0 && document.querySelectorAll("input")[i].value == "J"){
            correctAns++;
            document.querySelectorAll("input")[i].classList.remove("wrong");
            document.querySelectorAll("input")[i].classList.add("correct");
            document.querySelectorAll("input")[i].disabled = true
        }
        if (i == 0 && document.querySelectorAll("input")[i].value != "J"){
            document.querySelectorAll("input")[i].classList.add("wrong");
        }

        if (i == 1 && document.querySelectorAll("input")[i].value == "H"){
            correctAns++;
            document.querySelectorAll("input")[i].classList.remove("wrong");
            document.querySelectorAll("input")[i].classList.add("correct");
            document.querySelectorAll("input")[i].disabled = true
        }
        if (i == 1 && document.querySelectorAll("input")[i].value != "H"){
            document.querySelectorAll("input")[i].classList.add("wrong");
        }

        if (i == 2 && document.querySelectorAll("input")[i].value == "B"){
            correctAns++;
            document.querySelectorAll("input")[i].classList.remove("wrong");
            document.querySelectorAll("input")[i].classList.add("correct");
            document.querySelectorAll("input")[i].disabled = true
        }
        if (i == 2 && document.querySelectorAll("input")[i].value != "B"){
            document.querySelectorAll("input")[i].classList.add("wrong");
        }

        if (i == 3 && document.querySelectorAll("input")[i].value == "A"){
            correctAns++;
            document.querySelectorAll("input")[i].classList.remove("wrong");
            document.querySelectorAll("input")[i].classList.add("correct");
            document.querySelectorAll("input")[i].disabled = true
        }
        if (i == 3 && document.querySelectorAll("input")[i].value != "A"){
            document.querySelectorAll("input")[i].classList.add("wrong");
        }

        if (i == 4 && document.querySelectorAll("input")[i].value == "K"){
            correctAns++;
            document.querySelectorAll("input")[i].classList.remove("wrong");
            document.querySelectorAll("input")[i].classList.add("correct");
            document.querySelectorAll("input")[i].disabled = true
        }
        if (i == 4 && document.querySelectorAll("input")[i].value != "K"){
            document.querySelectorAll("input")[i].classList.add("wrong");
        }

        if (i == 5 && document.querySelectorAll("input")[i].value == "C"){
            correctAns++;
            document.querySelectorAll("input")[i].classList.remove("wrong");
            document.querySelectorAll("input")[i].classList.add("correct");
            document.querySelectorAll("input")[i].disabled = true
        }
        if (i == 5 && document.querySelectorAll("input")[i].value != "C"){
            document.querySelectorAll("input")[i].classList.add("wrong");
        }

        if (i == 6 && document.querySelectorAll("input")[i].value == "I"){
            correctAns++;
            document.querySelectorAll("input")[i].classList.remove("wrong");
            document.querySelectorAll("input")[i].classList.add("correct");
            document.querySelectorAll("input")[i].disabled = true
        }
        if (i == 6 && document.querySelectorAll("input")[i].value != "I"){
            document.querySelectorAll("input")[i].classList.add("wrong");
        }

        if (i == 7 && document.querySelectorAll("input")[i].value == "L"){
            correctAns++;
            document.querySelectorAll("input")[i].classList.remove("wrong");
            document.querySelectorAll("input")[i].classList.add("correct");
            document.querySelectorAll("input")[i].disabled = true
        }
        if (i == 7 && document.querySelectorAll("input")[i].value != "L"){
            document.querySelectorAll("input")[i].classList.add("wrong");
        }

        if (i == 8 && document.querySelectorAll("input")[i].value == "J"){
            correctAns++;
            document.querySelectorAll("input")[i].classList.remove("wrong");
            document.querySelectorAll("input")[i].classList.add("correct");
            document.querySelectorAll("input")[i].disabled = true
        }
        if (i == 8 && document.querySelectorAll("input")[i].value != "J"){
            document.querySelectorAll("input")[i].classList.add("wrong");
        }

        if (i == 9 && document.querySelectorAll("input")[i].value == "J"){
            correctAns++;
            document.querySelectorAll("input")[i].classList.remove("wrong");
            document.querySelectorAll("input")[i].classList.add("correct");
            document.querySelectorAll("input")[i].disabled = true
        }
        if (i == 9 && document.querySelectorAll("input")[i].value != "J"){
            document.querySelectorAll("input")[i].classList.add("wrong");
        }

        if (i == 10 && document.querySelectorAll("input")[i].value == "J"){
            correctAns++;
            document.querySelectorAll("input")[i].classList.remove("wrong");
            document.querySelectorAll("input")[i].classList.add("correct");
            document.querySelectorAll("input")[i].disabled = true
        }
        if (i == 10 && document.querySelectorAll("input")[i].value != "J"){
            document.querySelectorAll("input")[i].classList.add("wrong");
        }

        if (i == 11 && document.querySelectorAll("input")[i].value == "J"){
            correctAns++;
            document.querySelectorAll("input")[i].classList.remove("wrong");
            document.querySelectorAll("input")[i].classList.add("correct");
            document.querySelectorAll("input")[i].disabled = true
        }
        if (i == 11 && document.querySelectorAll("input")[i].value != "J"){
            document.querySelectorAll("input")[i].classList.add("wrong");
        }
    }
    document.querySelectorAll("#textChange")[0].innerText = "Number Correct: " + correctAns;
    inCorrectAns = 12 - correctAns;
    percentCorrect = correctAns/12;
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

    document.querySelectorAll("#textChange")[0].innerText = "Number Correct:";
}

function buttonAnimation(buttonNumber) {
    // console.log(buttonNumber);
    
    var activeButton = document.querySelector("#button" + buttonNumber);
  
    activeButton.classList.add("pressed");
  
    setTimeout(function() {
      activeButton.classList.remove("pressed");
    }, 100);
    
  }

  function buttonAnimation2(buttonId) {
    // console.log("Button ID is: " + buttonId);
    
    var activeButton = document.querySelector("#" + buttonId);
  
    activeButton.classList.add("pressed");
  
    setTimeout(function() {
      activeButton.classList.remove("pressed");
    }, 100);
    
  }

function welcome(){
    window.location.href = 'file:///C:/Gronkle/Engineering/Web%20Development/Museum/Ver3/mainPage.html';
    // window.location.href = 'file:///C:/burnett/MuseumVer2/mainPage.html';

}