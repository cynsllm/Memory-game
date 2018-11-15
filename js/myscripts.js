//The array contains all the images src
var imagesArray = ["./images/ananas.jpg", "./images/banana.jpg", "./images/citrus.jpg", "./images/kiwi.jpg", "./images/papaye.jpg", "./images/water-melon.jpg", "./images/ananas.jpg", "./images/banana.jpg", "./images/citrus.jpg", "./images/kiwi.jpg", "./images/papaye.jpg", "./images/water-melon.jpg"];

var counter = 0;


//Var definitions 
var card1 = document.getElementById("card1");
var card2 = document.getElementById("card2");
var card3 = document.getElementById("card3");
var card4 = document.getElementById("card4");
var card5 = document.getElementById("card5");
var card6 = document.getElementById("card6");
var card7 = document.getElementById("card7");
var card8 = document.getElementById("card8");
var card9 = document.getElementById("card9");
var card10 = document.getElementById("card10");
var card11 = document.getElementById("card11");
var card12 = document.getElementById("card12");

//Func that assignes an image to each card and shows image when card is clicked

//var card = document.getElementsByClassName("card");
//function showImage() {
// for (var i = 0; i<card.length; i++) {
//  for(var j = 0; j<imagesArray.length; j++) {
//   var x = event.target;
//  if(x === card[i]) {
//    card[i].src = imagesArray[j]; 
// }
// }
// }
//}





function showImage() {
    var x = event.target;
    if (x.id === "card1") {
        card1.src = imagesArray[0];
    } else if (x.id === "card2") {
        card2.src = imagesArray[1];
    } else if (x.id === "card3") {
        card3.src = imagesArray[2];
    } else if (x.id === "card4") {
        card4.src = imagesArray[3];
    } else if (x.id === "card5") {
        card5.src = imagesArray[4];
    } else if (x.id === "card6") {
        card6.src = imagesArray[5];
    } else if (x.id === "card7") {
        card7.src = imagesArray[6];
    } else if (x.id === "card8") {
        card8.src = imagesArray[7];
    } else if (x.id === "card9") {
        card9.src = imagesArray[8];
    } else if (x.id === "card10") {
        card10.src = imagesArray[9];
    } else if (x.id === "card11") {
        card11.src = imagesArray[10];
    } else if (x.id === "card12") {
        card12.src = imagesArray[11];
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
btn1.addEventListener("click", newGame);

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



