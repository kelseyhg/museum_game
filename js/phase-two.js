
var puzzleCount = 0;

$("#step-2").on("click", function(){
	$("#roman-room").hide();
	$("#celt-room").hide();
	$("#greek-room").hide();
	$("#solve-room").show();


});

 $( ".draggable" ).draggable({
  snap: true,
  snapTolerance: 40,
  revert: "invalid"
});



 $( "#puzzle-1" ).draggable({ snap: "#slot-one", snapMode: "inner"});
 $( "#puzzle-2" ).draggable({ snap: "#slot-two", snapMode: "inner"});
 $( "#puzzle-3" ).draggable({ snap: "#slot-three", snapMode: "inner"});
 $( "#puzzle-4" ).draggable({ snap: "#slot-four", snapMode: "inner"});
 $( "#puzzle-5" ).draggable({ snap: "#slot-five", snapMode: "inner"});
 $( "#puzzle-6" ).draggable({ snap: "#slot-six", snapMode: "inner"});
 $( "#puzzle-7" ).draggable({ snap: "#slot-seven", snapMode: "inner"});
 $( "#puzzle-8" ).draggable({ snap: "#slot-eight", snapMode: "inner"});


$(".puzzle-slots").droppable();

$( "#slot-one" ).droppable(
   { accept: "#puzzle-1", drop:function(event,ui){
      puzzleCount ++; 
      $( "#puzzle-1" ).remove();
      $("#slot-one").css("background-image", "url('./img/puzzle-1.png')");
      checkCompletion();
      console.log(puzzleCount);
  	}}
);
$( "#slot-two" ).droppable(
   { accept: "#puzzle-2", drop:function(event,ui){
      puzzleCount ++; 
      $( "#puzzle-2" ).remove();
      $("#slot-two").css("background-image", "url('./img/puzzle-2.png')");
      checkCompletion();
       console.log(puzzleCount);
  }}
);
$( "#slot-three" ).droppable(
   { accept: "#puzzle-3", drop:function(event,ui){
      puzzleCount ++;
      $( "#puzzle-3" ).remove();
      $("#slot-three").css("background-image", "url('./img/puzzle-3.png')");
      checkCompletion(); 
       console.log(puzzleCount);
  }}
);
$( "#slot-four" ).droppable(
   { accept: "#puzzle-4", drop:function(event,ui){
      puzzleCount ++; 
      $( "#puzzle-4" ).remove();
      $("#slot-four").css("background-image", "url('./img/puzzle-4.png')");
  	  checkCompletion();
  	   console.log(puzzleCount);
	}}
);
$( "#slot-five" ).droppable(
   { accept: "#puzzle-5", drop:function(event,ui){
      puzzleCount ++;
       $( "#puzzle-5" ).remove();
      $("#slot-five").css("background-image", "url('./img/puzzle-5.png')");
      checkCompletion();
      console.log(puzzleCount);
    }}
);
$( "#slot-six" ).droppable(
   { accept: "#puzzle-6", drop:function(event,ui){
      puzzleCount ++; 
      $( "#puzzle-6" ).remove();
      $("#slot-six").css("background-image", "url('./img/puzzle-6.png')");
      checkCompletion();
      console.log(puzzleCount);
  	}}
);
$( "#slot-seven" ).droppable(
   { accept: "#puzzle-7", drop:function(event,ui){
      puzzleCount ++; 
      $( "#puzzle-7" ).remove();
      $("#slot-seven").css("background-image", "url('./img/puzzle-7.png')");
      checkCompletion();
      console.log(puzzleCount);
  	}}
);
$( "#slot-eight" ).droppable(
   { accept: "#puzzle-8", drop:function(event,ui){
      puzzleCount ++;
       $( "#puzzle-8" ).remove();
      $("#slot-eight").css("background-image", "url('./img/puzzle-8.png')");
      checkCompletion();
       console.log(puzzleCount);
    }}
);

function checkCompletion() {
	if (puzzleCount === 8) {
	$("#modal-text").text("You've repaired the shield! Click on \"return artifacts\" for the next task.");
	$("#modal-title").text("Good Job!");
	$("#basicExampleModal").modal("show");
	$("#step-2").css("color", "gray");
	$("#step-3").css("color", "black");
}}
//announce end of game when puzzle count === 8