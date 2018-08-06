
var totalCollectables = 7;
var collectableCount = 0;


$(document).ready(function() {
	console.log ("js is connected");

	$("#vase").hide();
	$("#label").hide();
	$("#shield").hide();
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
    	//alert(collectables[i].collectionText);
    	//var iconId = "\"" + collectables[i].class + "\"";
    	//console.log(iconId);
    	//$(iconId).show();
    	//$("#shield").show();
    	//document.getElementById(collectables[i].class).style.visibility = "visible";
    
    }

	});

	if (collectableCount === totalCollectables) {
		alert("Good job! You found all the dropped artifacts and labels.");
		$("#step-1").css("color", "gray");
		$("#step-2").css("color", "black");
	};
});




var collectables = [
	{name: "shield-1", class: "shield", icon: "./img/shield-icon.png", image: "./img/shield-1.png", collectionText:"Looks like a piece of...something."},
	{name: "shield-2", class: "shield", icon: "./img/shield-icon.png", image: "./img/shield-2.png", collectionText:"Shiny."},
	{name: "shield-3", class: "shield", icon: "./img/shield-icon.png", image: "./img/shield-3.png", collectionText:"We'll have to put this back together when we find all the pieces."},
	{name: "shield-5", class: "shield", icon: "./img/shield-icon.png", image: "./img/shield-5.png", collectionText:"Don't cut yourself on those jagged edges!"},
	{name: "shield-7", class: "shield", icon: "./img/shield-icon.png", image: "./img/shield-7.png", collectionText:"Our thief sure did some damage here."},
	{name: "shield-8", class: "shield", icon: "./img/shield-icon.png", image: "./img/shield-8.png", collectionText:"Another piece of our mystery artifact."},
	{name: "label-1", class: "label", icon: "./img/label-icon.png", image: "./img/label-1.png", collectionText:"An artifact label!"},
	{name: "greek-vase", class: "greek-vase", icon: "./img/shield-icon.png", image: "./img/shield-1.png", collectionText:"Looks Greek to me, but we'll pick it up anyway."},
	
];


