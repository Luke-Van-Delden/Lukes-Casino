// // Ideas to Workon
// Making Aces 1 or 11
// Identifying suit of card
// Setting number of decks
// Betting / Maintaining chip counts
// Visuals / buttons / interactive
// Tips or "What does the book say?"
// Double Down / Split options
// Multiple Hands


// ****** FIX THE IFS AT THE BOTTOM - Losing by bust vs by comparison

//  Generates random number 1-13
//  Meant to signify Ace, 2, 3... etc Jack, Queen, King
//  console.log((Math.floor(Math.random() * 13)) + 1);

let playGame = confirm("Would you like to play Blackjack?")

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
            alert("You've drawn a " + cardType(newcard) + "\n Your hand: " + playerHand);
            if (playerHand > 21) {
                alert("Player has busted with " + playerHand);
            }
        }
        else if (playerAction == 'stay') {
            alert("Player stays on " + playerHand + "\nPlayer hand: " + playerHand);
            break;
        }
    } while (playerHand <= 21)
    alert("Dealers reveals: " + dealerHand + "\nPlayer's Hand :" + playerHand)
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
                alert("Dealer draws a " + cardType(newcard) + "\nDealer's new total is: " + dealerHand + "\nPlayer's hand: " + playerHand);
            }
        } while (dealerHand < 100)
    }
    if (playerHand > dealerHand && playerHand <= 21 && dealerHand < 21) {
        alert("Players " + playerHand + " beats dealers " + dealerHand + "\nWinner Winner Chicken Dinner!");
        alert("Player wins lotsa money");
    } else if (playerHand <= 21 && dealerHand > 21) {
        alert("Winner Winner Chicken Dinner!")
    } else if (playerHand == dealerHand) {
        alert("Its a push. Both dealer and player have " + playerHand);
    } else {
        alert("Dealer's " + dealerHand + " beats Player's " + playerHand + "\nluck next time!");
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

    alert("Dealer showing: " + cardType(firstCard));
    // alert("Dealer's hand current total: " + total);
    return total;

}
