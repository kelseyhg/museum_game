
var totalCollectables = 11;
var collectableCount = 0;


$(document).ready(function() {
	console.log ("js is connected");

	$("#basicExampleModal").modal("show");
	$("#vase").hide();
	$("#label").hide();
	$("#shield").hide();
	$("#solve-room").hide();
	$("#greek-room").hide();
	$("#roman-room").hide();

});

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

$(".collectable").on("click", function(){
	this.remove();
	console.log(this.id);
	collectableCount ++;
	var obj = collectables.find((o, i) => {
    if (o.name === this.id) {
    	console.log(collectables[i]);
    	$("#modal-text").text(collectables[i].collectionText);
		$("#modal-title").text("Object Collected!");
		var seeBook= $('<input id="modalButton" type="button" value="see guidebook"/>');
		$("#modal-text").append(seeBook);
		$("#basicExampleModal").modal("show");
		$("#modalButton").on("click", function(){
			openBook(i);
		})
    	var iconId = "\"" + collectables[i].class + "\"";
    	console.log(iconId);
    	//$(iconId).show();
    	$("#shield").show();
    	//document.getElementById(collectables[i].class).style.visibility = "visible";
    
    }

	});
	// Move to task 2
	if (collectableCount === totalCollectables) {
		$("#modal-text").text("You found all the dropped artifacts and labels. Click on \"fix artifact\" when you're ready to move on.");
		$("#modal-title").text("Good Job!");
		$("#basicExampleModal").modal("show");
		$("#step-1").css("color", "gray");
		$("#step-2").css("color", "black");
	};
});

//collect post-it note
$("#note").on("click", function(){
	this.remove();
	$("#modal-text").text("Looks like a note from the mastermind to his thief!");
	$("#modal-title").text("Note Collected!");
	var postIt = ("<img id=\"post-it\" src=\"./img/note.png\">");
	console.log(postIt);
	$("#modal-text").append(postIt);
	$("#basicExampleModal").modal("show");

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
	{name: "shield-1", class: "shield", icon: "./img/shield-icon.png", image: "./img/shield-1.png", spread: 1, collectionText:"Looks like a piece of...something."},
	{name: "shield-2", class: "shield", icon: "./img/shield-icon.png", image: "./img/shield-2.png", spread: 1, collectionText:"Shiny."},
	{name: "shield-3", class: "shield", icon: "./img/shield-icon.png", image: "./img/shield-3.png", spread: 1, collectionText:"We'll have to put this back together when we find all the pieces."},
	{name: "shield-5", class: "shield", icon: "./img/shield-icon.png", image: "./img/shield-5.png", spread: 1, collectionText:"Don't cut yourself on those jagged edges!"},
	{name: "shield-7", class: "shield", icon: "./img/shield-icon.png", image: "./img/shield-7.png", spread: 1, collectionText:"Our thief sure did some damage here."},
	{name: "shield-8", class: "shield", icon: "./img/shield-icon.png", image: "./img/shield-8.png", spread: 1, collectionText:"Another piece of our mystery artifact."},
	{name: "label-1", class: "label", icon: "./img/label-icon.png", image: "./img/label-1.png", spread: 0, collectionText:"An artifact label!"},
	{name: "label-2", class: "label", icon: "./img/label-icon.png", image: "./img/label-2.png", spread: 0, collectionText:"What does this label even belong with?"},
	{name: "label-3", class: "label", icon: "./img/label-icon.png", image: "./img/label-3.png", spread: 0, collectionText:"We'll need to match these labels with their artifacts later"},
	{name: "label-4", class: "label", icon: "./img/label-icon.png", image: "./img/label-4.png", spread: 0, collectionText:"Another stray label"},
	{name: "greek-vase", class: "greek-vase", icon: "./img/shield-icon.png", image: "./img/shield-1.png", spread: 3, collectionText:"Looks Greek to me, but we'll pick it up anyway."},
	{name: "helmet", class: "helmet", icon: "./img/helemt.png", image: "./img/waterloo-helmet.png", spread: 1, collectionText:"A helmet fit for a Viking."}
	
];


