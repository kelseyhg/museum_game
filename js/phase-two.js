
var shieldPieces = [
  {slot: "#slot-one", piece: "#puzzle-1", url: "url('./img/puzzle-1.png')"},
  {slot: "#slot-two", piece: "#puzzle-2", url: "url('./img/puzzle-2.png')"},
  {slot: "#slot-three", piece: "#puzzle-3", url: "url('./img/puzzle-3.png')"},
  {slot: "#slot-four", piece: "#puzzle-4", url: "url('./img/puzzle-4.png')"},
  {slot: "#slot-five", piece: "#puzzle-5", url: "url('./img/puzzle-5.png')"},
  {slot: "#slot-six", piece: "#puzzle-6", url: "url('./img/puzzle-6.png')"},
  {slot: "#slot-seven", piece: "#puzzle-7", url: "url('./img/puzzle-7.png')"},
  {slot: "#slot-eight", piece: "#puzzle-8", url: "url('./img/puzzle-8.png')"}
]


var puzzleCount = 0;

function partTwo() {
	$("#roman-room").hide();
	$("#celt-room").hide();
	$("#greek-room").hide();
	$("#solve-room").show();
  $("#modal-text").text("Drag and drop the pieces into the correct positions to repair the artifact.");
  $("#modal-title").text("Shield Repair 101");
  $("#basicExampleModal").modal("show");

};

 $( ".draggable" ).draggable({
  revert: "invalid"
});

$(".puzzle-slots").droppable();


for (var i = 0; i < shieldPieces.length; i++) {
  $(shieldPieces[i].slot).droppable(
   { accept: shieldPieces[i].piece, drop:function(event,ui){
    var pingSound = document.getElementById("ping");
    pingSound.play();
      puzzleCount ++;
      for (var j = 0; j < shieldPieces.length; j++) {
        var activeDiv = ("#" + this.id);
        if (activeDiv ===  shieldPieces[j].slot) {
          console.log("#" + this.id);
          $(shieldPieces[j].piece).remove();
          $(activeDiv).css("background-image", shieldPieces[j].url);
          
        };
      };

      console.log('this:', this)
        checkCompletion();
    }});

}

function checkCompletion() {
	if (puzzleCount === 8) {
	$("#modal-text").text("You've repaired the shield! Click on \"return artifacts\" for the next task.");
	$("#modal-title").text("Good Job!");
	$("#basicExampleModal").modal("show");
  $("#shield").attr("src", "./img/shield-whole-icon.png");
	$("#step-2").css("color", "gray");
	$("#step-3").css("color", "black");
  $("#slide-0").attr("src", "./img/shield-modal.png");
  $("#step-3").on("click", function(){
      partThree();
    });

}}
