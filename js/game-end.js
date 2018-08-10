
var guessCounter = 0;

 function partFour(){
	//replace celt background with filled-in image
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
	hunt();
};

function hunt(){
	console.log("hunt is on");
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
	console.log("You've found it! The museum is saved");
	restartGame();
};

function gameLose() {
	$("#end-modal-title").text("Too slow!");
	$("#end-modal-text").text("The thieves have absconded with the hoard! It's a sad day for the museum.");
	$("#winLoseModal").modal("show");
	console.log("the hoard is gone and it's your fault.")
	restartGame();
}

function restartGame() {
	$("#restart").on("click", function() {
	location.reload();
});
}


