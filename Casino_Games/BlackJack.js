
//  Generates random number 1-13
//  Meant to signify Ace, 2, 3... etc Jack, Queen, King
//  console.log((Math.floor(Math.random() * 13)) + 1);

let playGame = confirm("Would you like to play Blackjack?")
let dealerHand;

while (playGame == true) {
    let playerHand = newHand();
    let playerAction = "";
// PLAYER SIDE TO HIT STAY OR BUST
    do {
        playerAction = prompt("Type 'hit' to draw, 'stay' to stay.")

        if (playerAction == 'hit') {
            let newcard = draw()
            alert("You've drawn a " + cardType(newcard));
            playerHand = playerHand + cardValue(newcard);
            alert("Your new total is: " + playerHand);
            if (playerHand > 21) {
                alert("Player has busted");
            }
        } else if (playerAction == 'stay') {
            alert("Player stays on " + playerHand);
            break;
        }
    } while (playerHand <= 21)

    if (playerHand < 22) {
        let dealerHand = dealerNew();

        do {
            if (dealerHand > 17 && dealerHand <= 21) {
                alert("Dealer stays on " + dealerHand);
                break;
            } else if (dealerHand > 21) {
                alert("Dealer busts")
                break;
            } else if (dealerHand < 17) {
                let newcard = draw()
                alert("Dealer draws a " + cardType(newcard));
                dealerHand = dealerHand + cardValue(newcard);
                alert("Dealer's new total is: " + dealerHand);
            }
        } while (dealerHand !== true)

        console.log(dealerHand + " " + playerHand)
    }
    if (playerHand > dealerHand && playerHand <= 21) {
        alert("Players " + playerHand + " beats dealers " + dealerHand);
        alert("Player wins lotsa money");
    } else if (playerHand <= 21 && dealerHand > 21) {
        alert("Dealer busted, winner winner chicken dinner!")
    } else if (playerHand == dealerHand) {
        alert("Its a push. Both dealer and player have " + playerHand);
    } else {
        alert("Better luck next time!");
    }
    playGame = confirm("Would you like to play Blackjack?")

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
    let secondCard = draw();

    let total = 0;
    total = cardValue(firstCard) + cardValue(secondCard);

    alert("Your hand: " + cardType(firstCard) + " & " + cardType(secondCard));

    alert("Your hand current total: " + total);
    return total;

}

function dealerNew (){
    let firstCard = draw();
    let secondCard = draw();

    let total = 0;
    total = cardValue(firstCard) + cardValue(secondCard);

    alert("Dealer's hand: " + cardType(firstCard) + " & " + cardType(secondCard));

    alert("Dealer's hand current total: " + total);
    return total;

}
