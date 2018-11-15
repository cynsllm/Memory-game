//The array contains all the images src
var imagesArray = ["./images/ananas.jpg", "./images/banana.jpg", "./images/citrus.jpg", "./images/kiwi.jpg", "./images/papaye.jpg", "./images/water-melon.jpg", "./images/ananas.jpg", "./images/banana.jpg", "./images/citrus.jpg", "./images/kiwi.jpg", "./images/papaye.jpg", "./images/water-melon.jpg"];

var counter = 0;



//Func that assignes an image to each card and shows image when card is clicked

var card = document.getElementsByClassName("card");
function showImage() {
    for (var i = 0; i < card.length; i++) {
        var x = event.target;
        console.log(x); 
        if (x === card[i]) {
            card[i].src = imagesArray[i];
        }
    }
}



//Func that randomizes the array of images
function fisherYates() {
    for (var flips = 0; flips < 100; flips++) {
        var i = Math.floor(Math.random() * imagesArray.length);
        var j = Math.floor(Math.random() * imagesArray.length);
        var temp = imagesArray[i];
        imagesArray[i] = imagesArray[j];
        imagesArray[j] = temp;
    }
}

//Func new game randomize + returns all the cards
var newGame = function () {
    fisherYates();
    back();
    game();
}

//Func that returns all the cards back
var back = function () {
    for (var i = 0; i < card.length; i++) {
        card[i].src = "./images/back.jpg";
    }
}
var btn1 = document.getElementById("btn1");
btn1.addEventListener("click", new);

//new game modal
var btn2 = document.getElementById("btn2");
btn2.addEventListener("click", newGame);
// replay 
btn2.onclick = function () {
    modal.style.display = "none";
}

//Func that checks if cards are the same
var openedImg = [];
var imgOpen = function () {
    openedImg.push(this);
    console.log(openedImg);
    var len = openedImg.length;
    if (len === 2) {
        console.log(openedImg[0]);
        console.log(openedImg[1]);
        disableGame();
        if (openedImg[0].src === openedImg[1].src) {
            console.log("same");
            matched();


        } else {
            console.log("different");
            unmatched();
        }
    }
}

//Func that disables the cards when match
var matched = function () {
    openedImg[0].removeEventListener("click", showImage);
    openedImg[1].removeEventListener("click", showImage);
    openedImg = [];
    scoreCounter();
}



//Func that returns the cards unmatched after 1 sec delay
var interval;
var unmatched = function () {
    interval = setTimeout(function () {
        openedImg[0].src = "./images/back.jpg";
        openedImg[1].src = "./images/back.jpg";
        openedImg = [];
    }, 1000);
}


//Add event listener to each card
var card = document.getElementsByClassName("card");
game = function () {
    for (var i = 0; i < card.length; i++) {
        card[i].addEventListener("click", showImage);
        card[i].addEventListener("click", imgOpen);
    }
}

//disable for a second
disableGame = function () {
    for (var i = 0; i < card.length; i++) {
        card[i].removeEventListener("click", showImage);
        card[i].removeEventListener("click", imgOpen);
    }
    setTimeout(function () {
        game()
    }, 1000);
}

//display you won 
var modal = document.getElementById("display-score");
scoreCounter = function () {
    console.log(counter = counter + 1);
    if (counter === 6) {
        console.log("you won");
        // get the modal
        var span = document.getElementsByClassName("close")[0]; // get the span that closes the modal
        modal.style.display = "block";
        span.onclick = function () {
            modal.style.display = "none";
        }
    }
}



