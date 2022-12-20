"use strict";

//TODO: SEPERATE THE VALUE AND DRAWN INTO SEPERATE ROWS, REFACTOR HTML REQUIRED
// Add split functionality
// Create Cheatsheat for best play - Object, array, or if statement
// add animation
// create navbar at top to take to other games
// link to blackjack to learn for current value of cards (Think for me button)
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
        aces: 0,
        chipCount: 0,
        splitit: []
    };
    var dealerHand = {
        value: 0,
        drawn: [],
        aces: 0,
        splitit: []
    };

    var hitCounter = 0

    var numberOfHands = 0
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
                x.splitit.push("Ace")
                break;
            case 2:
                x.value += 2;
                x.drawn.push(frontdiv + "2" + randomSuit() + closediv);
                x.splitit.push("2")
                break;
            case 3:
                x.value += 3;
                x.drawn.push(frontdiv + "3" + randomSuit() + closediv);
                x.splitit.push("3")

                break;
            case 4:
                x.value += 4;
                x.drawn.push(frontdiv + "4" + randomSuit() + closediv);
                x.splitit.push("4")

                break;
            case 5:
                x.value += 5;
                x.drawn.push(frontdiv + "5" + randomSuit() + closediv);
                x.splitit.push("5")

                break;
            case 6:
                x.value += 6;
                x.drawn.push(frontdiv + "6" + randomSuit() + closediv);
                x.splitit.push("6")

                break;
            case 7:
                x.value += 7;
                x.drawn.push(frontdiv + "7" + randomSuit() + closediv);
                x.splitit.push("7")

                break;
            case 8:
                x.value += 8;
                x.drawn.push(frontdiv + "8" + randomSuit() + closediv);
                x.splitit.push("8")

                break;
            case 9:
                x.value += 9;
                x.drawn.push(frontdiv + "9" + randomSuit() + closediv);
                x.splitit.push("9")

                break;
            case 10:
                x.value += 10;
                x.drawn.push(frontdiv + "10" + randomSuit() + closediv);
                x.splitit.push("10")
                break;
            case 11:
                x.value += 10;
                x.drawn.push(frontdiv + "J" + randomSuit() + closediv);
                x.splitit.push("Jack")

                break;
            case 12:
                x.value += 10;
                x.drawn.push(frontdiv + "Q" + randomSuit() + closediv);
                x.splitit.push("Queen")

                break;
            case 13:
                x.value += 10;
                x.drawn.push(frontdiv + "K" + randomSuit() + closediv);
                x.splitit.push("King")

                break;
        }


    }

    // Clicking OK stores
    function displayPandD() {
        let playerName = $('#playerNamer').val()
        if (playerName === "") {
            playerName = "Player"
        }
        let setChips = $('#setChips').val()
        if (setChips === "") {
            setChips = 10000
        }
        setChips = parseInt(setChips)
        let setBet = $('#setInitialBet').val()
        if (setBet === "") {
            setBet = 500
        }
        setBet = parseInt(setBet)
        if (numberOfHands === 0) {
            playerHand.chipCount = setChips
            numberOfHands++
        }
        numberOfHands++
        $('#currentChips').html(`${playerName}'s chip total: ${playerHand.chipCount}`)
        $('#currentBet').html(`Current Bet: ${setBet}`)
        $('#startUp').css('display', "none");
        $('#dealerHand').html(`<h1 class="">Dealer: ${dealerHand.value}<br>${dealerHand.drawn.join("")}</h1>`)
        $('#playerHand').html(`<h1 class="">${playerName}: ${playerHand.value}<br>${playerHand.drawn.join("")}</h1>`)
        $('#actionBar').html(`<button type="button" class="btn btn-success mb-2 hit fontshadowing barButtons">Hit!</button>`)
        $('#actionBar').append(`<button type="button" class="btn btn-danger mb-2 stay fontshadowing barButtons">Stay!</button>`)
        $('#actionBar').append(`<button type="button" class="btn btn-info mb-2 double fontshadowing barButtons hidden" id="doubleDown">Double Down!</button>`)

        // Split appears only when splits available, doesn't create additional hands
        if (playerHand.splitit[0] == playerHand.splitit[1]) {
            $('#actionBar').append(`<button type="button" class="btn btn-info mb-2 split fontshadowing barButtons hidden" id="split">Split! (Working on functionality)</button>`)
        }


        $('#asktips').html(`<button type="button" class="btn btn-warning mb-2 tips fontshadowing barButtons" id="tips">What's the book say? (Not Currently Functional)</button>`)

        // Player runs out of chips
        if (playerHand.chipCount <= 0) {
            document.documentElement.innerHTML = '';
            $('body').css('background-image', 'url("/images/bouncer.gif")').css('background-size', '100vw 100vh')
            setTimeout(function () {
                let counter = 0
                setInterval(function () {
                    if (counter < 1) {
                        // Couldn't figure out why Classes / ID's didnt work and required inline styling
                        $('body').append(`<button style='color: dodgerblue; margin-left: 10vw; font-size: 6em; width: 75vw; background-color: blanchedalmond' onClick="window.location.reload();">CLICK HERE TO CHANGE IDENTITY AND TAKE OUT HIGH INTEREST LOAN AND START OVER</button>`)
                        counter++
                    } else {
                        clearInterval()
                    }
                }, 200)
            }, 15000)
        }
        //Cheat code for Kara
        if (playerName === "kdawg") {
            playerHand.value = 21
            playerHand.drawn = ["Ace of Franks", "Jack"]
            $('#actionBar').html(`<h1 class="altshadowing text-center">Blackjack! I can't believe you got the Ace of Franks!</h1>`)
            setTimeout(function () {
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
            $('#doubleDown').css('display', 'none')
            $('#playerHand').html(`<h1 class="">${playerName}: ${playerHand.value}<br>${playerHand.drawn.join("")}</h1>`)
            if (playerHand.value > 21 && playerHand.aces > 0) {
                playerHand.aces -=
                    playerHand.value = playerHand.value - 10
                displayPandD()
            } else if (playerHand.value > 21) {
                $('#actionBar').html(`<h1 class="text-center altshadowing" id="busted">${playerName} busts with ${playerHand.value}</h1>`)
                $('#asktips').empty()
                playerHand.chipCount = playerHand.chipCount - setBet
                $('#currentChips').html(`${playerName}'s chip total: ${playerHand.chipCount}`)
                console.log(playerHand.chipCount)
                setTimeout(function () {
                    $('#actionBar').append(`<button type="button" class="btn btn-success mb-2 acceptGame fontshadowing">Play again (${setBet})</button>`)
                    clickStart()
                }, 1000);
            }
        })

        $('.double').click(function () {
            drawCard(playerHand)
            $('#doubleDown').css('display', 'none')
            $('#playerHand').html(`<h1 class="">${playerName}: ${playerHand.value}<br>${playerHand.drawn.join("")}</h1>`)
            if (playerHand.value > 21 && playerHand.aces > 0) {
                playerHand.aces -=
                    playerHand.value = playerHand.value - 10
                $('#playerHand').html(`<h1 class="">${playerName}: ${playerHand.value}<br>${playerHand.drawn.join("")}</h1>`)
            }
            if (playerHand.value > 21) {
                $('#actionBar').html(`<h1 class="text-center altshadowing" id="busted">${playerName} busts with ${playerHand.value}</h1>`)
                $('#asktips').empty()
                playerHand.chipCount = playerHand.chipCount - (setBet * 2)
                $('#currentChips').html(`${playerName}'s chip total: ${playerHand.chipCount}`)
                console.log(playerHand.chipCount)
                setTimeout(function () {
                    $('#actionBar').append(`<button type="button" class="btn btn-success mb-2 acceptGame fontshadowing">Play again (${setBet})</button>`)
                    clickStart()
                }, 1000);
            } else if (playerHand.value <= 21) {
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
                            playerHand.chipCount = playerHand.chipCount - (setBet * 2)
                            $('#currentChips').html(`${playerName}'s chip total: ${playerHand.chipCount}`)
                            console.log(playerHand.chipCount)
                            setTimeout(function () {
                                $('#actionBar').append(`<button type="button" class="btn btn-success mb-2 acceptGame fontshadowing">Play again (${setBet})</button>`)
                                clickStart()
                            }, 1000);
                        } else if (playerHand.value > dealerHand.value) {
                            $('#actionBar').html(`<h1 class="text-center altshadowing">${playerName} wins with ${playerHand.value}.</h1>`)
                            playerHand.chipCount = playerHand.chipCount + (setBet * 2)
                            $('#currentChips').html(`${playerName}'s chip total: ${playerHand.chipCount}`)
                            console.log(playerHand.chipCount)
                            setTimeout(function () {
                                $('#actionBar').append(`<button type="button" class="btn btn-success mb-2 acceptGame fontshadowing">Play again (${setBet})</button>`)
                                clickStart()
                            }, 1000);
                        } else if (playerHand.value === dealerHand.value) {
                            $('#actionBar').html(`<h1 class="text-center altshadowing">${playerName} and Dealer push on ${playerHand.value}.</h1>`)
                            $('#currentChips').html(`${playerName}'s chip total: ${playerHand.chipCount}`)
                            setTimeout(function () {
                                $('#actionBar').append(`<button type="button" class="btn btn-success mb-2 acceptGame fontshadowing">Play again (${setBet})</button>`)
                                clickStart()
                            }, 1000);
                        }
                    } else if (dealerHand.value > 21 && dealerHand.aces > 0) {
                        dealerHand.aces -=
                            dealerHand.value = dealerHand.value - 10
                        $('#dealerHand').html(`<h1 class="">Dealer: ${dealerHand.value}<br>${dealerHand.drawn.join("")}</h1>`)
                    } else if (dealerHand.value > 21) {
                        clearInterval(waitingToDraw)
                        $('#actionBar').empty()
                        $('#actionBar').html(`<h1 class="text-center altshadowing">Dealer busts with ${dealerHand.value}. ${playerName} wins ${setBet}</h1>`)
                        playerHand.chipCount = playerHand.chipCount + (setBet * 2)
                        $('#currentChips').html(`${playerName}'s chip total: ${playerHand.chipCount}`)
                        setTimeout(function () {
                            $('#actionBar').append(`<button type="button" class="btn btn-success mb-2 acceptGame fontshadowing">Play again (${setBet})</button>`)
                            clickStart()
                        }, 1000);
                    } else if (dealerHand.value < 17) {
                        drawCard(dealerHand)
                        $('#dealerHand').html(`<h1 class="">Dealer: ${dealerHand.value}<br>${dealerHand.drawn.join("")}</h1>`)
                        $('#actionBar').html(`<h1 class="text-center altshadowing">Dealer has ${dealerHand.value}.</h1>`)
                    }
                }, 1000);
            }
        })


        $('.stay').click(function playerDone() {
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
                        playerHand.chipCount = playerHand.chipCount - setBet
                        $('#currentChips').html(`${playerName}'s chip total: ${playerHand.chipCount}`)
                        console.log(playerHand.chipCount)
                        setTimeout(function () {
                            $('#actionBar').append(`<button type="button" class="btn btn-success mb-2 acceptGame fontshadowing">Play again (${setBet})</button>`)
                            clickStart()
                        }, 1000);
                    } else if (playerHand.value > dealerHand.value) {
                        $('#actionBar').html(`<h1 class="text-center altshadowing">${playerName} wins with ${playerHand.value}.</h1>`)
                        playerHand.chipCount = playerHand.chipCount + setBet
                        $('#currentChips').html(`${playerName}'s chip total: ${playerHand.chipCount}`)
                        console.log(playerHand.chipCount)
                        setTimeout(function () {
                            $('#actionBar').append(`<button type="button" class="btn btn-success mb-2 acceptGame fontshadowing">Play again (${setBet})</button>`)
                            clickStart()
                        }, 1000);
                    } else if (playerHand.value === dealerHand.value) {
                        $('#actionBar').html(`<h1 class="text-center altshadowing">${playerName} and Dealer push on ${playerHand.value}.</h1>`)
                        $('#currentChips').html(`${playerName}'s chip total: ${playerHand.chipCount}`)
                        setTimeout(function () {
                            $('#actionBar').append(`<button type="button" class="btn btn-success mb-2 acceptGame fontshadowing">Play again (${setBet})</button>`)
                            clickStart()
                        }, 1000);
                    }
                } else if (dealerHand.value > 21 && dealerHand.aces > 0) {
                    dealerHand.aces -=
                        dealerHand.value = dealerHand.value - 10
                    $('#dealerHand').html(`<h1 class="">Dealer: ${dealerHand.value}<br>${dealerHand.drawn.join("")}</h1>`)
                } else if (dealerHand.value > 21) {
                    clearInterval(waitingToDraw)
                    $('#actionBar').empty()
                    $('#actionBar').html(`<h1 class="text-center altshadowing">Dealer busts with ${dealerHand.value}. ${playerName} wins ${setBet}</h1>`)
                    playerHand.chipCount = playerHand.chipCount + setBet
                    $('#currentChips').html(`${playerName}'s chip total: ${playerHand.chipCount}`)
                    setTimeout(function () {
                        $('#actionBar').append(`<button type="button" class="btn btn-success mb-2 acceptGame fontshadowing">Play again (${setBet})</button>`)
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
        if (randomnumber === 1) {
            return heart
        }
        if (randomnumber === 2) {
            return diamond
        }
        if (randomnumber === 3) {
            return spades
        }
        if (randomnumber === 4) {
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
                aces: 0,
                chipCount: playerHand.chipCount,
                splitit: []
            };
            dealerHand = {
                value: 0,
                drawn: [],
                aces: 0,
                splitit: []
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
    $('#setChips').keyup(function (event) {
        let keyStroke = event.key;
        if (keyStroke === 'Enter') {
            dealHands()
            displayPandD()
        }
    })
    $('#setInitialBet').keyup(function (event) {
        let keyStroke = event.key;
        if (keyStroke === 'Enter') {
            dealHands()
            displayPandD()
        }
    })
})();