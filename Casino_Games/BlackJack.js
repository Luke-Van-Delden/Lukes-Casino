
//  Generates random number 1-13
//  Meant to signify Ace, 2, 3... etc Jack, Queen, King
//  console.log((Math.floor(Math.random() * 13)) + 1);



let playerHand = newHand();
let playerAction = "";

do{
    playerAction = prompt("Type 'hit' to draw, 'stay' to stay.")
    if (playerAction == 'hit'){
        let newcard = draw()
        alert("You've drawn a " + cardType(newcard));
        playerHand = playerHand + cardValue(newcard);
        alert("Your new total is: " + playerHand);
    }
    else if (playerAction == 'stay') {
        alert("Player stays on " + playerHand);
        break;
    }
} while (playerHand <=21 )

if (playerHand > 21) {
    alert("Player had busted. Better luck next time!");
}

function draw (){
    return ((Math.floor(Math.random() * 13)) + 1);
}

function cardType (x) {
    switch (x) {
        case 1:
            return "Ace (1 or 11)";
            break;
        case 2:
            return "2";
            break;
        case 3:
            return "3";
            break;
        case 4:
            return "4";
            break;
        case 5:
            return "5";
            break;
        case 6:
            return "6";
            break;
        case 7:
            return "7";
            break;
        case 8:
            return "8";
            break;
        case 9:
            return "9";
            break;
        case 10:
            return "10";
            break;
        case 11:
            return "Jack";
            break;
        case 12:
            return "Queen";
            break;
        case 13:
            return "King";
            break;
    }
}

function cardValue (x){
    switch (x) {
        case 1:
            return 1;
            break;
        case 2:
            return 2;
            break;
        case 3:
            return 3;
            break;
        case 4:
            return 4;
            break;
        case 5:
            return 5;
            break;
        case 6:
            return 6;
            break;
        case 7:
            return 7;
            break;
        case 8:
            return 8;
            break;
        case 9:
            return 9;
            break;
        case 10:
            return 10;
            break;
        case 11:
            return 10;
            break;
        case 12:
            return 10;
            break;
        case 13:
            return 10;
            break;
    }
}

function newHand (){
    let firstCard = draw();
    console.log("First card: " + cardType(firstCard) + " Value of (" + cardValue(firstCard) + ")");

    let secondCard = draw();
    cardType(secondCard);
    console.log("Second card: " + cardType(secondCard) + " Value of (" + cardValue(secondCard) + ")");

    let total = 0;
    total = cardValue(firstCard) + cardValue(secondCard);
    console.log("Current Hand Total: " + total);

    alert("Your hand current total: " + total);
    return total;

}

