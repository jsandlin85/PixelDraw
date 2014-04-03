var cardElement = '<section class="container"><div class="card"><figure class="front">&nbsp;</figure><figure class="back">&nbsp;</figure></div></section>';

var flipTimeout = 100; // how long (in ms) a box will be inactive after being flipped

var boxSize = 55;

var boxPadding = 5;

// -------------------

var yBoxes = Math.floor($(window).height() / boxSize)

var xBoxes = Math.floor($(window).width() / boxSize)

var numberOfBoxes = xBoxes * yBoxes;

var xPadding = ($(window).width() - (xBoxes * boxSize) + boxPadding) / 2

var yPadding = ($(window).height() - (yBoxes * boxSize)) / 2 - boxPadding

console.log("numberOfBoxes = " + numberOfBoxes);

// draw the boxes
for (var i = 0; i < numberOfBoxes; i++) {
    $("body").prepend(cardElement);
    console.log("element added");
};

// center the boxes in the window
$("body").css("padding-left", xPadding + "px").css("padding-top", yPadding + "px");

// flip the boxes
$(".card").mouseenter(function() {
    // we have to do this so that we can reference the object inside the setTimeout function
    var card = $(this);

    // if it hasn't been inactivated by a recent flip
    if (!card.hasClass("inactive")) {

        // flip that motha fucka
        if (card.hasClass("flipped")) {
            card.removeClass("flipped");
        } else {
            card.addClass("flipped");
        }

        // and then keep it from being re-flipped for a short while
        card.addClass("inactive");
        setTimeout(function() {
            card.removeClass("inactive");
        }, flipTimeout);

    }
});