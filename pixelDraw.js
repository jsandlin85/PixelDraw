var cardElement = '<section class="container"><div class="card"><figure class="front">&nbsp;</figure><figure class="back">&nbsp;</figure></div></section>';

var boxSize = 55;

var boxPadding = 5;

var yBoxes = Math.floor($(window).height() / boxSize)

var xBoxes = Math.floor($(window).width() / boxSize)

var numberOfBoxes = xBoxes * yBoxes - 1;

var xPadding = ($(window).width() - (xBoxes * boxSize) + boxPadding) / 2

var yPadding = ($(window).height() - (yBoxes * boxSize)) / 2 - boxPadding

console.log("numberOfBoxes = " + numberOfBoxes);

for (var i = 0; i < numberOfBoxes; i++) {
    $("body").prepend(cardElement);
    console.log("element added");
};


$(".card").hover(function() {
    if ($(this).hasClass("flipped")) {
        $(this).removeClass("flipped");
    } else {
        $(this).addClass("flipped");
    }

});

$("body").css("padding-left", xPadding + "px").css("padding-top", yPadding + "px");