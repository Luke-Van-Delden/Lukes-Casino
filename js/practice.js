"use strict";

(() => {
    // Create Header at top, create Player and Dealer Hand Object Initial values
    $(document).ready(function() {
        $('#imageOfGame').html(`<img src="images/blackjackTitle.jpeg" alt="Blackjack Title Image" class="header">`)
        $('#nameOfGame').html(`<h1 class="header align-items-center">Welcome to Luke's Blackjack Table</h1>`)
        $('body').addClass('feltBackground')
    });
// Event Listeners

    // Clicking OK stores
    $('.acceptGame').click( function () {
        let playerName = $('#playerNamer').val()
        $('#startUp').css('display', "none");

    })

    $('#myBtn').ready( function() {
        $('#startUp').css('display', 'flex')
        $('.modal-content').css('width', 'auto')
        $('.modal-content').css('height', 'auto')
    })

    $('.close').click(function() {
        $('#startUp').css('display', "none");
    })

    // TODO: Work on this so modal disappears when not clicking on it
    // window.onclick = function(event) {
    //     if (event.target == $('#myModal')) {
    //         $('#myModal').css('display', 'none')
    //     }
    // }



// Get the <span> element that closes the modal
//     var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
//     btn.onclick = function() {
//         modal.style.display = "block";
//     }

// When the user clicks on <span> (x), close the modal
//     span.onclick = function() {
//         modal.style.display = "none";
//     }

// When the user clicks anywhere outside of the modal, close it
//     window.onclick = function(event) {
//         if (event.target == modal) {
//             modal.style.display = "none";
//         }
//     }

})();