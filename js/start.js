
var totalCollectables = 21;
var collectableCount = 0;


$(document).ready(function() {
	console.log ("js is connected");

	$("#basicExampleModal").modal("show");
	$("#solve-room").hide();
	$("#greek-room").hide();
	$("#roman-room").hide();
	$("#celt-room-reassemble").hide();
	$(".hidden").hide();

});

//moving between rooms

$('.greek').on('click', function(){
	$("#roman-room").hide();
	$("#celt-room").hide();
	$("#greek-room").show();

});

$('.roman').on('click', function(){
	$("#greek-room").hide();
	$("#celt-room").hide();
	$("#roman-room").show();

});

$('.celt').on('click', function(){
	$("#greek-room").hide();
	$("#roman-room").hide();
	$("#celt-room").show();

});

//controls the object collection process
$(".collectable").on("click", function(){
	this.remove();
	var clickSound = document.getElementById("click");
		clickSound.play();
	collectableCount ++;
	var obj = collectables.find((o, i) => {
    if (o.name === this.id) {
    	$("#dialog").text(collectables[i].collectionText);
		var seeBook= $('<input id="guideButton" type="button" class="btn" value="see guidebook"/>');
		$("#dialog").append(seeBook);
		$("#guideButton").on("click", function(){
			openBook(i);
		})
		if (collectables[i].class === "shield") {
			$("#slide-0").attr("src", "./img/shield-pieces.png");
		} else {
			var collectedImage = collectables[i].image;
			var imageSlide = ("#slide-" + i);
   			$(imageSlide).attr("src", collectedImage);
    }};

	});

	// Move to task 2
	if (collectableCount === totalCollectables) {
		$("#dialog").text("");
		$("#modal-text").text("You found all the dropped artifacts and labels. Click on \"fix artifact\" when you're ready to move on.");
		$("#modal-title").text("Good Job!");
		$("#basicExampleModal").modal("show");
		$("#step-1").css("color", "gray");
		$("#step-2").css("color", "black");
		$("#step-2").on("click", function(){
			partTwo();
		});
	};
});

//collect post-it note
$("#note").on("click", function(){
	this.remove();
	var clickSound = document.getElementById("click");
		clickSound.play();
	$("#modal-text").text("Looks like a note from the mastermind to his thief!");
	$("#modal-title").text("Note Collected!");
	var postIt = ("<img id=\"post-it\" src=\"./img/note.png\">");
	$("#modal-text").append(postIt);
	$("#basicExampleModal").modal("show");
	$("#dialog").text("We\'ll need that note later to find what's missing.");


});

// Show guidebook from info bar
$("#guidebook").on("click", function() {
	$("#lightbox").modal("show");
});

// Show guidebook from modal button
function openBook(page){
	var slide = collectables[page].spread;
	$("#basicExampleModal").modal("hide");
	$("#lightbox").modal("show").carousel(slide);

};


var collectables = [
	{name: "shield-1", class: "shield", image: "./img/shield-pieces.png", spread: 1, collectionText:"Looks like a piece of...something."},
	{name: "torc", class: "a-torc", image: "./img/torc-whole.png", spread: 1, collectionText:"What a stunning gold alloy! Looks too big to be a bracelet though."},
	{name: "label-1", class: "label", image: "./img/torc-label.png", spread: 0, collectionText:"An artifact label!"},
	{name: "bog-body", class: "bog", image: "./img/bog.png", spread: 2, collectionText:"Somebody left behind a leather jacket with a head attached."},
	{name: "label-3", class: "label", image: "./img/helmet-label.png", spread: 0, collectionText:"We'll need to match these labels with their artifacts later."},
	{name: "label-4", class: "label", image: "./img/shield-label.png", spread: 0, collectionText:"Another stray label"},
	{name: "roman-coin", class: "coin", image: "./img/roman-coin.png", spread: 3, collectionText:"Is that a Roman emperor?"},
	{name: "label-2", class: "label", image: "./img/roman-coin-label.png", spread: 0, collectionText:"What does this label even belong with?"},
	{name: "label-5", class: "label", image: "./img/bog-label.png", spread: 0, collectionText:"Who knew robbers made such a mess?"},
	{name: "label-6", class: "label", image: "./img/british-coin-label.png", spread: 0, collectionText:"Another label for the display."},
	{name: "british-coin", class: "coin", image: "./img/british-coin.png", spread: 3, collectionText:"Think you can buy an ice cream with that?"},
	{name: "greek-vase", class: "vase", image: "./img/greek-vase.png", spread: 3, collectionText:"Looks Greek to me, but we'll pick it up anyway."},
	{name: "viking-helmet", class: "helmet", image: "./img/waterloo-helmet.png", spread: 1, collectionText:"A helmet fit for a Viking."},
	{name: "roman-helmet", class: "helmet", image: "./img/roman-helmet.png", spread: 3, collectionText:"Sweet gladiator style."},
	{name: "shield-2", class: "shield", image: "./img/shield-pieces.png", spread: 1, collectionText:"Shiny. is that bronze?"},
	{name: "shield-3", class: "shield", image: "./img/shield-pieces.png", spread: 1, collectionText:"We'll have to put this back together when we find all the pieces."},
	{name: "shield-4", class: "shield", image: "./img/shield-pieces.png", spread: 1, collectionText:"This does NOT belong here."},
	{name: "shield-5", class: "shield", image: "./img/shield-pieces.png", spread: 1, collectionText:"Don't cut yourself on those jagged edges!"},
	{name: "shield-6", class: "shield", image: "./img/shield-pieces.png", spread: 1, collectionText:"Okay, thief, we get it, you have no respect for history."},
	{name: "shield-7", class: "shield", image: "./img/shield-pieces.png", spread: 1, collectionText:"Our thief sure did some damage here."},
	{name: "shield-8", class: "shield", image: "./img/shield-pieces.png", spread: 1, collectionText:"Another piece of our mystery artifact."}
	
];


