//Variables declaration
var backImg = ["./images/back.jpg"];
var frontImg = ["./images/bat.jpg", "./images/makeup.jpg", "./images/moon.jpg", "./images/pumpkin.jpg", "./images/skeleton.jpg", "./images/spider.jpg", "./images/bat.jpg", "./images/makeup.jpg", "./images/moon.jpg", "./images/pumpkin.jpg", "./images/skeleton.jpg", "./images/spider.jpg"];
var matchCounter = 0;
var unmatchCounter = 0;


//Function newGame: 
var btn1 = document.getElementById("btn1");
var newGame = function () {
    for (var i = 0; i < card.length; i++) {
        card[i].style.visibility = "visible";
        card[i].src = "./images/back.jpg";
    }
    fisherYates();
    cardEvent();
}
btn1.addEventListener("click", newGame); //when the NEW GAME btn is clicked

//Function fisherYates randomizes the frontImg array
var fisherYates = function () {
    for (var flips = 0; flips < 100; flips++) {
        var i = Math.floor(Math.random() * frontImg.length);
        var j = Math.floor(Math.random() * frontImg.length);
        var temp = frontImg[i];
        frontImg[i] = frontImg[j];
        frontImg[j] = temp;
    }
}

//Function cardEvent:
var card = document.getElementsByClassName("card");
var cardEvent = function () {
    for (var i = 0; i < card.length; i++) {
        card[i].addEventListener("click", showImage);
        card[i].addEventListener("click", checkImgPair);
    }
}

//Function showImage assignes a front img to each card in the grid when the card is clicked
var card = document.getElementsByClassName("card");
var showImage = function () {
    for (var i = 0; i < card.length; i++) {
        var x = event.target;
        if (x === card[i]) {
            card[i].src = frontImg[i];
        }
    }
}

//Function checkImgPair checks if a pair of img have the same src
var imgPair = [];
var checkImgPair = function () {
    imgPair.push(this);
    var len = imgPair.length;
    if (len === 2) {
        disableCard();
        if (imgPair[0].src === imgPair[1].src) {
            match();
        } else {
            unmatched();
        }
    }
}

//Function disableCard disables all the grid for a second when two cards were clicked
var disableCard = function () {
    for (var i = 0; i < card.length; i++) {
        card[i].removeEventListener("click", showImage);
        card[i].removeEventListener("click", checkImgPair);
    }
    setTimeout(function () {
        cardEvent();
    }, 1000);
}

//Function match that disables the pairs when they match until the end of the game
var match = function () {
    imgPair[0].removeEventListener("click", showImage);
    imgPair[1].removeEventListener("click", showImage);
    imgPair = [];
    scoreCounter();
}

//Function scoreCounter records the number of matches and displays a modal when the user find all the pairs
var modal = document.getElementById("display-score");
var span = document.getElementsByClassName("close")[0];
var scoreCounter = function () {
    matchCounter = matchCounter + 1;
    if (matchCounter === 6) {
        modal.style.display = "block";
        document.getElementsByTagName("p")[0].innerHTML = "YOU WON " + "<br/>" + "Wrong guesses: " + unmatchCounter;
        span.onclick = function () {
            modal.style.display = "none";
            matchCounter = 0; //I assign the value 0 to matchCounter but it doesn't change anything...
        }
    }
}
//The modal contains btn2 to remove the modal and start the game again 
var btn2 = document.getElementById("btn2");
btn2.onclick = function () {
    modal.style.display = "none";
}
btn2.addEventListener("click", newGame);

//Function unmatched returns the cards unmatched after 1 sec delay and records the wrong guesses
var interval;
var unmatched = function () {
    interval = setTimeout(function () {
        imgPair[0].src = "./images/back.jpg";
        imgPair[1].src = "./images/back.jpg";
        imgPair = [];
    }, 1000);
    unmatchCounter = unmatchCounter + 1;
}




