// // Ideas to Workon
// Making Aces 1 or 11
// Identifying suit of card
// Setting number of decks
// Betting / Maintaining chip counts
// Visuals / buttons / interactive
// Tips or "What does the book say?"
// Double Down / Split options
// Multiple Hands
// Add auto STAY on 21 with message

(() => {

// ****** FIX THE IFS AT THE BOTTOM - Losing by bust vs by comparison

//  Generates random number 1-13
//  Meant to signify Ace, 2, 3... etc Jack, Queen, King
//  console.log((Math.floor(Math.random() * 13)) + 1);

let playGame = confirm("Would you like to play Blackjack?")
// let playGame =


while (playGame == true) {
    let playerHand = newHand();
    let dealerHand = dealerNew();
    let playerAction = "";

// PLAYER SIDE TO HIT STAY OR BUST

    do {
        playerAction = prompt("Type 'hit' to draw, 'stay' to stay." + "\nPlayer hand: " + playerHand)

        if (playerAction == 'hit') {
            let newcard = draw();
            playerHand = playerHand + cardValue(newcard);
            if (playerHand > 21) {
                alert("Player draws a " + cardType(newcard) + ".\nPlayer Hand: " + playerHand + ". You cannot draw anymore cards.");
            } else if (playerHand == 21) {
                alert("Player draws a " + cardType(newcard) + ".\nPlayer Hand: 21");
                break;
            } else {
                alert("Player draws a " + cardType(newcard) + "\nPlayer Hand: " + playerHand);
            }
            // if (playerHand > 21) {
            //     alert("Player has busted with " + playerHand);
            // }
        } else if (playerAction == 'stay') {
            alert("Player stays on " + playerHand + "\nPlayer hand: " + playerHand);
            break;
        }
    } while (playerHand <= 21)
    if (playerHand < 22) {
        alert("Dealers reveals: " + dealerHand + "\nPlayer's Hand: " + playerHand)
    }
    if (playerHand < 22) {
        do {
            if (dealerHand > 17 && dealerHand <= 21) {
                alert("Dealer stays on " + dealerHand);
                break;
            } else if (dealerHand > 21) {
                alert("Dealer busts with " + dealerHand + "\nPlayer wins!");
                break;
            } else if (dealerHand < 17) {
                let newcard = draw();
                dealerHand = dealerHand + cardValue(newcard);
                alert("Dealer draws a " + cardType(newcard) + "\nDealer's Hand: " + dealerHand + "\nPlayer's Hand: " + playerHand);
            }
        } while (dealerHand < 100)
    }
    // PLAYER DOES NOT BUST, DEALER DOES NOT BUST, PLAYER WINS
    if (playerHand > dealerHand && playerHand <= 21 && dealerHand <= 21) {
        alert("Players " + playerHand + " beats dealers " + dealerHand + "\nWinner Winner Chicken Dinner!");
        //     alert("Player wins lotsa money");
    }
    // PLAYER DOES NOT BUST, DEALER BUSTS, PLAYER WINS
    else if (playerHand <= 21 && dealerHand > 21) {
        alert("Winner Winner Chicken Dinner!")
    }
    // PLAYER AND DEALER TIE - PUSH
    else if (playerHand == dealerHand) {
        alert("Its a push. Both dealer and player have " + playerHand + ".");
    }
    // PLAYER BUSTS, DEALER DOES NOT, PLAYER LOSES
    else if (playerHand > 21) {
        alert("Player busted with " + playerHand + ".\nBetter luck next time!")
    }
    // PLAYER DOES NOT BUST, DEALER DOES NOT BUST, DEALER WINS
    else {
        alert("Dealer's " + dealerHand + " beats Player's " + playerHand + "\nBetter luck next time!");
    }
    //(dealerHand > playerHand && dealerHand <= 21)

    playGame = confirm("Would you like to play Blackjack?")

}

function draw() {
    return ((Math.floor(Math.random() * 13)) + 1);
}

function cardType(x) {
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

function cardValue(x) {
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

function newHand() {
    let firstCard = draw();
    let secondCard = draw();

    let total = 0;
    total = cardValue(firstCard) + cardValue(secondCard);

    alert("Player draws " + cardType(firstCard) + " " + cardType(secondCard) + "\nPlayer Hand: " + total);

    return total;

}

function dealerNew() {
    let firstCard = draw();
    let secondCard = draw();

    let total = 0;
    total = cardValue(firstCard) + cardValue(secondCard);

    alert("Dealer showing: " + cardType(firstCard));
    // alert("Dealer's hand current total: " + total);
    return total;

}

})();