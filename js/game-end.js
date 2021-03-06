
var guessCounter = 0;

 function partFour(){
	$("#celt-room-reassemble").hide();
	$("#celt-bg").attr("src", "./img/celtic_exhibit_complete.png");
	var hoardSpot = "<div id=\"hidden-hoard\"></div>"; 
	$("#roman-room").append(hoardSpot);
	$("#celt-room").show();
	$("#modal-text").text("Remember the note we found? Let's use it to identify the hiding place of the missing Winchester Hoard. Just click where you think the hoard has been hidden. But hurry! We don't want the schemer to beat us to the punch.");
	$("#modal-title").text("Find the Hoard");
	var postIt = ("<img id=\"post-it\" src=\"./img/note.png\">");
	$("#modal-text").append(postIt);
	$("#basicExampleModal").modal("show");
	$("#dialog").text("You only have three guesses, so think carefully! Check the guidebook for more on Celtic beliefs.");
	hunt();
};

function hunt(){
	console.log(guessCounter);
	$("#hidden-hoard").click(function() {
		gameWin();

	});

	$(".bg").click(function() {
		console.log("a click");
		guessCounter ++;
		console.log(guessCounter);
			if (guessCounter === 3) {
				gameLose();
			}

	});
};

function gameWin() {
	$("#winLoseModal").modal("show");
	var winSound = document.getElementById("winMusic");
		winSound.play();
	restartGame();
};

function gameLose() {
	$("#end-modal-title").text("Too slow!");
	$("#end-modal-text").text("The thieves have absconded with the hoard! It's a sad day for the museum.");
	$("#winLoseModal").modal("show");
	restartGame();
}

function restartGame() {
	$("#restart").on("click", function() {
	location.reload();
});
}


