 function partThree(){
	$("#solve-room").hide();
	$("#celt-room-reassemble").show();
	//add modal with instructions
	
};
var returnCount = 0;

$( ".placeable" ).draggable({
  revert: "invalid"
});


$(".droppable").droppable();

$( "#bog-spot" ).droppable(
   { accept: "#bog-body-f", drop:function(event,ui){
      returnCount ++; 
      $( "#bog-body-f" ).remove();
      $("#placed-bog").show();
      $("#bog").hide();
      checkComplete();
      console.log(returnCount);
  	}}
);
$( "#torc-spot" ).droppable(
   { accept: "#torc-f", drop:function(event,ui){
      returnCount ++; 
      $( "#torc-f" ).remove();
      $("#placed-torc").show();
      $("#a-torc").hide();
      checkComplete();
       console.log(returnCount);
  }}
);
$( "#helmet-spot" ).droppable(
   { accept: "#helmet-f", drop:function(event,ui){
      returnCount ++;
     $( "#helmet-f" ).remove();
     $("#placed-helmet").show();
     $("#helmet").hide();
      checkComplete(); 
       console.log(returnCount);
  }}
);
$( "#brit-coin-spot" ).droppable(
   { accept: "#british-coin-f", drop:function(event,ui){
      returnCount ++; 
     $("#british-coin-f").remove();
     $("#placed-british-coin").show();
     $("#coin").hide();
  	  checkComplete();
  	   console.log(returnCount);
	}}
);
$( "#rome-coin-spot" ).droppable(
   { accept: "#roman-coin-f", drop:function(event,ui){
      returnCount ++;
    	$( "#roman-coin-f").remove();
    	$("#placed-roman-coin").show();
     	checkComplete();
      console.log(returnCount);
    }}
);
$( "#shield-spot" ).droppable(
   { accept: "#shield-f", drop:function(event,ui){
      returnCount ++; 
     	$( "#shield-f" ).remove();
      	$("#placed-shield").show();
        $("#shield").hide();
      	checkComplete();
      console.log(returnCount);
  	}}
);
$( "#bog-label-spot" ).droppable(
   { accept: "#bog-body-label", drop:function(event,ui){
      returnCount ++; 
      	$( "#bog-body-label" ).remove();
      	$("#placed-bog-label").show();
      	checkComplete();
      console.log(returnCount);
  	}}
);
$( "#torc-label-spot" ).droppable(
   { accept: "#torc-label", drop:function(event,ui){
      returnCount ++;
       	$( "#torc-label" ).remove();
     	$("#placed-torc-label").show();
      	checkComplete();
       console.log(returnCount);
    }}
);
$( "#helmet-label-spot" ).droppable(
   { accept: "#helmet-label", drop:function(event,ui){
      returnCount ++;
       	$( "#helmet-label" ).remove();
      	$("#placed-helmet-label").show();
      	checkComplete();
       console.log(returnCount);
    }}
);
$( "#brit-coin-label-spot" ).droppable(
   { accept: "#british-coin-label", drop:function(event,ui){
      returnCount ++;
        $( "#british-coin-label" ).remove();
     	$("#placed-british-coin-label").show();
     	checkComplete();
       console.log(returnCount);
    }}
);
$( "#rome-coin-label-spot" ).droppable(
   { accept: "#roman-coin-label", drop:function(event,ui){
      returnCount ++;
        $( "#roman-coin-label" ).remove();
  		$("#placed-roman-coin-label").show();
        checkComplete();
       console.log(returnCount);
    }}
);
$( "#shield-label-spot" ).droppable(
   { accept: "#shield-label", drop:function(event,ui){
      returnCount ++;
       	$( "#shield-label" ).remove();
     	$("#placed-shield-label").show();
      	checkComplete();
       console.log(returnCount);
    }}
);

var $artifactGroup = $('#artifactGroup');
$artifactGroup.on('show.bs.collapse','.collapse', function() {
$artifactGroup.find('.collapse.show').collapse('hide');
});

function checkComplete() {
	if (returnCount === 12) {
  $("#label").hide();  
	$("#modal-text").text("You've put everything back in the right place! But something is still missing. Click on \"find the hidden hoard\" to start the hunt for the last missing item.");
	$("#modal-title").text("Good Job!");
	$("#basicExampleModal").modal("show");
	$("#step-3").css("color", "gray");
	$("#step-4").css("color", "black");
  $("#step-4").on("click", function(){
      partFour();
    });


	}}