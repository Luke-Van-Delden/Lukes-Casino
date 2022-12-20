"use strict";

//TODO: Create Cheatsheat for best play - Object, array, or if statement
// CSS the Cards
// add card images for each
// add animation
// create navbar at top to take to other games
// refine style
// link to blackjack to learn for current value of cards (Think for me button)
// Track Chips / bets
// ON/Off switch for quickdeal

(() => {
    // Create Header at top, create Player and Dealer Hand Object Initial values
    $(document).ready(function () {
        $('#imageOfGame').html(`<img src="images/blackjackTitle.jpeg" alt="Blackjack Title Image" class="header">`)
        $('#nameOfGame').html(`<h1 class="header align-items-center d-flex justify-content-center">Welcome to Luke's Blackjack Table</h1>`)
        $('body').addClass('feltBackground')
        callModal()
        // $('.playingCard div').html(`${heart}`)
    });

    // Creating Variables
    var playerHand = {
        value: 0,
        drawn: [],
        aces: 0
    };
    var dealerHand = {
        value: 0,
        drawn: [],
        aces: 0
    };

    const heart = `<span class="red">&hearts;</span>`
    const diamond = `<span class="red">&diams;</span>`
    const spades = `<span class="black">&spades;</span>`
    const clubs = `<span class="black">&clubs;</span>`
    const frontdiv = `<div class="playingCard cardText">`
    const closediv = `</div>`


    // Draws random card. Adds the value to playerhand.value and pushes to playerhand.drawn array
    function drawCard(x) {
        let random = randomNumber()
        switch (random) {
            case 1:
                x.value += 11;
                x.drawn.push(frontdiv + "Ace" + randomSuit() + closediv);
                x.aces += 1
                break;
            case 2:
                x.value += 2;
                x.drawn.push(frontdiv + "2" + randomSuit() + closediv);

                break;
            case 3:
                x.value += 3;
                x.drawn.push(frontdiv + "3" + randomSuit() + closediv);

                break;
            case 4:
                x.value += 4;
                x.drawn.push(frontdiv + "4" + randomSuit() + closediv);

                break;
            case 5:
                x.value += 5;
                x.drawn.push(frontdiv + "5" + randomSuit() + closediv);

                break;
            case 6:
                x.value += 6;
                x.drawn.push(frontdiv + "6" + randomSuit() + closediv);

                break;
            case 7:
                x.value += 7;
                x.drawn.push(frontdiv + "7" + randomSuit() + closediv);

                break;
            case 8:
                x.value += 8;
                x.drawn.push(frontdiv + "8" + randomSuit() + closediv);

                break;
            case 9:
                x.value += 9;
                x.drawn.push(frontdiv + "9" + randomSuit() + closediv);

                break;
            case 10:
                x.value += 10;
                x.drawn.push(frontdiv + "10" + randomSuit() + closediv);

                break;
            case 11:
                x.value += 10;
                x.drawn.push(frontdiv + "J" + randomSuit() + closediv);

                break;
            case 12:
                x.value += 10;
                x.drawn.push(frontdiv + "Q" + randomSuit() + closediv);

                break;
            case 13:
                x.value += 10;
                x.drawn.push(frontdiv + "K" + randomSuit() + closediv);

                break;
        }


    }


    // Clicking OK stores
    function displayPandD() {
        let playerName = $('#playerNamer').val()
        if (playerName === "") {
            playerName = "Player"
        }
        $('#startUp').css('display', "none");
        $('#dealerHand').html(`<h1 class="">Dealer: ${dealerHand.value}<br>${dealerHand.drawn.join("")}</h1>`)
        $('#playerHand').html(`<h1 class="">${playerName}: ${playerHand.value}<br>${playerHand.drawn.join("")}</h1>`)
        $('#actionBar').html(`<button type="button" class="btn btn-success mb-2 hit fontshadowing barButtons">Hit!</button>`)
        $('#actionBar').append(`<button type="button" class="btn btn-danger mb-2 stay fontshadowing barButtons">Stay!</button>`)
        $('#asktips').html(`<button type="button" class="btn btn-warning mb-2 tips fontshadowing barButtons" id="tips">What's the book say? (Not Currently Functional)</button>`)

        //Cheat code for Kara
        if (playerName === "kdawg") {
            playerHand.value = 21
            playerHand.drawn = ["Ace of Franks", "Jack"]
            $('#actionBar').html(`<h1 class="altshadowing text-center">Blackjack! I can't believe you got the Ace of Franks!</h1>`)
            var frankie = setTimeout(function () {
                $('#actionBar').append(`<img src="images/dancing-dog.gif" alt="dogdance" id="kdawg">`)
            }, 3000);
            $('#dealerHand').html(`<h1 class="">Dealer: ${dealerHand.value}<br>Dealer showing ${dealerHand.drawn}</h1>`)
            $('#playerHand').html(`<h1 class="">${playerName}: ${playerHand.value}<br>${playerHand.drawn.join("")}</h1>`)
        }

        $('#asktips').click(function () {
            $('#asktips').append(`<div class="d-flex justify-content-center"><h1 class="altshadowing">The book says to !</h1></div>`)
        })


        $('.hit').click(function () {
            drawCard(playerHand)
            $('#playerHand').html(`<h1 class="">${playerName}: ${playerHand.value}<br>${playerHand.drawn.join("")}</h1>`)
            if (playerHand.value > 21 && playerHand.aces > 0) {
                playerHand.aces -=
                    playerHand.value = playerHand.value - 10
                displayPandD()
            } else if (playerHand.value > 21) {
                $('#actionBar').html(`<h1 class="text-center altshadowing" id="busted">${playerName} busts with ${playerHand.value}</h1>`)
                $('#asktips').empty()
                var timeoutId = setTimeout(function () {
                    $('#actionBar').append(`<button type="button" class="btn btn-success mb-2 acceptGame fontshadowing">Play again</button>`)
                    clickStart()
                }, 1000);
            }
        })

        $('.stay').click(function () {
            $('#asktips').empty()
            $('#actionBar').html(`<h1 class="text-center altshadowing">${playerName} stays with ${playerHand.value}. Dealer is drawing.</h1>`)
            var waitingToDraw = setInterval(function () {
                if (dealerHand.value >= 17 && dealerHand.value <= 21) {
                    clearInterval(waitingToDraw);
                    $('#actionBar').empty()
                    $('#dealerHand').html(`<h1 class="">Dealer: ${dealerHand.value}<br>${dealerHand.drawn.join("")}</h1>`)
                    $('#actionBar').html(`<h1 class="text-center altshadowing">Dealer stays on ${dealerHand.value}.</h1>`)
                    if (dealerHand.value > playerHand.value) {
                        $('#actionBar').html(`<h1 class="text-center altshadowing">Dealer wins with ${dealerHand.value}.</h1>`)
                        var dealerwinner = setTimeout(function () {
                            $('#actionBar').append(`<button type="button" class="btn btn-success mb-2 acceptGame fontshadowing">Play again</button>`)
                            clickStart()
                        }, 1000);
                    } else if (playerHand.value > dealerHand.value) {
                        $('#actionBar').html(`<h1 class="text-center altshadowing">${playerName} wins with ${playerHand.value}.</h1>`)
                        var playerwinner = setTimeout(function () {
                            $('#actionBar').append(`<button type="button" class="btn btn-success mb-2 acceptGame fontshadowing">Play again</button>`)
                            clickStart()
                        }, 1000);
                    } else if (playerHand.value === dealerHand.value) {
                        $('#actionBar').html(`<h1 class="text-center altshadowing">${playerName} and Dealer push on ${playerHand.value}.</h1>`)
                        var push = setTimeout(function () {
                            $('#actionBar').append(`<button type="button" class="btn btn-success mb-2 acceptGame fontshadowing">Play again</button>`)
                            clickStart()
                        }, 1000);
                    }
                } else if (dealerHand.value > 21 && dealerHand.aces > 0) {
                    dealerHand.aces -=
                        dealerHand.value = dealerHand.value - 10
                    if (dealerHand.value < 17) {
                        drawCard(dealerHand)
                        $('#dealerHand').html(`<h1 class="">Dealer: ${dealerHand.value}<br>${dealerHand.drawn.join("")}</h1>`)
                        $('#actionBar').html(`<h1 class="text-center altshadowing">Dealer has ${dealerHand.value}.</h1>`)
                    } else if (dealerHand.value > 21) {
                        clearInterval(waitingToDraw)
                        $('#dealerHand').html(`<h1 class="">Dealer: ${dealerHand.value}<br>${dealerHand.drawn.join("")}</h1>`)
                        $('#actionBar').empty()
                        $('#actionBar').html(`<h1 class="text-center altshadowing">Dealer busts with ${dealerHand.value}. ${playerName} WINS!!!</h1>`)
                        var timeoutId = setTimeout(function () {
                            $('#actionBar').append(`<button type="button" class="btn btn-success mb-2 acceptGame fontshadowing">Play again</button>`)
                            clickStart()
                        }, 1000);
                    }
                } else if (dealerHand.value > 21) {
                    clearInterval(waitingToDraw)
                    $('#actionBar').empty()
                    $('#actionBar').html(`<h1 class="text-center altshadowing">Dealer busts with ${dealerHand.value}. ${playerName} WINS!!!</h1>`)
                    var timeoutId = setTimeout(function () {
                        $('#actionBar').append(`<button type="button" class="btn btn-success mb-2 acceptGame fontshadowing">Play again</button>`)
                        clickStart()
                    }, 1000);
                } else if (dealerHand.value < 17) {
                    drawCard(dealerHand)
                    $('#dealerHand').html(`<h1 class="">Dealer: ${dealerHand.value}<br>${dealerHand.drawn.join("")}</h1>`)
                    $('#actionBar').html(`<h1 class="text-center altshadowing">Dealer has ${dealerHand.value}.</h1>`)
                }
            }, 1000);
        })
    }

    // Deals 2 cards to the dealer and the player. Cards have value + drawn properties.
    function dealHands() {
        // let player = playerHand
        // let dealer = dealerHand
        drawCard(playerHand)
        drawCard(playerHand)
        drawCard(dealerHand)

    }

    // Generates random number between 1-13
    function randomNumber() {
        return ((Math.floor(Math.random() * 13)) + 1)
    }

    function randomSuit() {
        let randomnumber = ((Math.floor(Math.random() * 4)) + 1)
        if (randomnumber === 1){
            return heart
        }
        if (randomnumber === 2){
            return diamond
        }
        if (randomnumber === 3){
            return spades
        }
        if (randomnumber === 4){
            return clubs
        }
    }

    //Calls modal
    function callModal() {
        $('#startUp').css('display', 'flex')
        $('.modal-content').css('width', '40vw')
        $('.modal-content').css('height', '60vh')
    }

    // Advance upon click, initialize game
    clickStart()

    function clickStart() {
        $('.acceptGame').click(function () {
            playerHand = {
                value: 0,
                drawn: [],
                aces: 0
            };
            dealerHand = {
                value: 0,
                drawn: [],
                aces: 0
            };
            dealHands()
            displayPandD();
        })
    }


    // Advance upon enter, initialize game
    $('#playerNamer').keyup(function (event) {
        let keyStroke = event.key;
        if (keyStroke === 'Enter') {
            dealHands()
            displayPandD()
        }
    })

    // $('.close').click(function () {
    //     $('#startUp').css('display', "none");
    // })

    // TODO: Work on this so modal disappears when not clicking on it
    // window.onclick = function(event) {
    //     if (event.target == $('#myModal')) {
    //         $('#myModal').css('display', 'none')
    //     }
    // }
})();