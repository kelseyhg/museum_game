$("#step-3").on("click", function(){
	$("#solve-room").hide();
	$("#celt-room-reassemble").show();
	//add modal with instructions
	
});
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
      //checkCompletion();
      console.log(returnCount);
  	}}
);
$( "#torc-spot" ).droppable(
   { accept: "#torc-f", drop:function(event,ui){
      returnCount ++; 
      $( "#torc-f" ).remove();
      $("#placed-torc").show();
      //checkCompletion();
       console.log(returnCount);
  }}
);
$( "#helmet-spot" ).droppable(
   { accept: "#helmet-f", drop:function(event,ui){
      returnCount ++;
     $( "#helmet-f" ).remove();
     $("#placed-helmet").show();
      //checkCompletion(); 
       console.log(returnCount);
  }}
);
$( "#brit-coin-spot" ).droppable(
   { accept: "#british-coin-f", drop:function(event,ui){
      returnCount ++; 
     $("#british-coin-f").remove();
     $("#placed-british-coin").show();
  	  //checkCompletion();
  	   console.log(returnCount);
	}}
);
$( "#rome-coin-spot" ).droppable(
   { accept: "#roman-coin-f", drop:function(event,ui){
      returnCount ++;
    $( "#roman-coin-f").remove();
    $("#placed-roman-coin").show();
     // checkCompletion();
      console.log(returnCount);
    }}
);
$( "#shield-spot" ).droppable(
   { accept: "#shield-f", drop:function(event,ui){
      returnCount ++; 
     $( "#shield-f" ).remove();
      $("#placed-shield").show();
      //checkCompletion();
      console.log(returnCount);
  	}}
);
$( "#bog-label-spot" ).droppable(
   { accept: "#bog-body-label", drop:function(event,ui){
      returnCount ++; 
      $( "#bog-body-label" ).remove();
      $("#placed-bog-label").show();
      //checkCompletion();
      console.log(returnCount);
  	}}
);
$( "#torc-label-spot" ).droppable(
   { accept: "#torc-label", drop:function(event,ui){
      returnCount ++;
       $( "#torc-label" ).remove();
     $("#placed-torc-label").show();
      checkCompletion();
       console.log(returnCount);
    }}
);
$( "#helmet-label-spot" ).droppable(
   { accept: "#helmet-label", drop:function(event,ui){
      returnCount ++;
       $( "#helmet-label" ).remove();
      $("#placed-helmet-label").show();
      //checkCompletion();
       console.log(returnCount);
    }}
);
$( "#brit-coin-label-spot" ).droppable(
   { accept: "#british-coin-label", drop:function(event,ui){
      returnCount ++;
       $( "#british-coin-label" ).remove();
     $("#placed-british-coin-label").show();
     // checkCompletion();
       console.log(returnCount);
    }}
);
$( "#rome-coin-label-spot" ).droppable(
   { accept: "#roman-coin-label", drop:function(event,ui){
      returnCount ++;
       $( "#roman-coin-label" ).remove();
  		 $("#placed-roman-coin-label").show();
      //checkCompletion();
       console.log(returnCount);
    }}
);
$( "#shield-label-spot" ).droppable(
   { accept: "#shield-label", drop:function(event,ui){
      returnCount ++;
       $( "#shield-label" ).remove();
     $("#placed-shield-label").show();
      //checkCompletion();
       console.log(returnCount);
    }}
);

