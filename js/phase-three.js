
  var myObjects = [
    {name: "bog", spot: "#bog-spot", thing: "#bog-body-f", placed: "#placed-bog", icon: "#bog"},
    {name: "helmet", spot: "#helmet-spot", thing: "#helmet-f", placed: "#placed-helmet", icon: "#helmet"},
    {name: "torc", spot: "#torc-spot", thing: "#torc-f", placed: "#placed-torc", icon: "#a-torc"},
    {name: "shield", spot: "#shield-spot", thing: "#shield-f", placed: "#placed-shield", icon: "#shield"},
    {name: "britCoin", spot: "#brit-coin-spot", thing: "#british-coin-f", placed: "#placed-british-coin", icon: "#coin"},
    {name: "romeCoin", spot: "#rome-coin-spot", thing: "#roman-coin-f", placed: "#placed-roman-coin", icon: "#coin"},
    {name: "bogLabel", spot: "#bog-label-spot", thing: "#bog-body-label", placed: "#placed-bog-label", icon: "#label"},
    {name: "helmetLabel", spot: "#helmet-label-spot", thing: "#helmet-label", placed: "#placed-helmet-label", icon: "#label"},
    {name: "torcLabel", spot: "#torc-label-spot", thing: "#torc-label", placed: "#placed-torc-label", icon: "#label"},
    {name: "shieldLabel", spot: "#shield-label-spot", thing: "#shield-label", placed: "#placed-shield-label", icon: "#label"},
    {name: "britCoinLabel", spot: "#brit-coin-label-spot", thing: "#british-coin-label", placed: "#placed-british-coin-label", icon: "#label"},
    {name: "romeCoinLabel", spot: "#rome-coin-label-spot", thing: "#roman-coin-label", placed: "#placed-roman-coin-label", icon: "#label"}
  ]  

var returnCount = 0;

 function partThree(){
  $("#solve-room").hide();
  $("#celt-room-reassemble").show();
  $("#modal-text").text("Click the boxes in the top left to reveal the artifacts and their labels, then drag them to the correct places in the display. Use the guidebook for hints.");
  $("#modal-title").text("Let's reassemble");
  $("#basicExampleModal").modal("show");
  $("#dialog").text("Use the guidebook if you need help placing the artifacts and their labels!");
};

$( ".placeable" ).draggable({
  revert: "invalid"
});


for (var i = 0; i < myObjects.length; i++) {
  $(myObjects[i].spot).droppable(
   { accept: myObjects[i].thing, drop:function(event,ui){
      returnCount ++;
        if (returnCount === 3) {
          $("#dialog").text("I don't think all the items we collected belong in this display.");
        }
        else if (returnCount === 5) {
          $("#dialog").text("Pretty sure we haven't found that missing hoard yet!");
        }
         else if (returnCount === 6) {
          $("#dialog").text("Don't worry about the shield and vase. Someone will take them back later!");
        }
       else if (returnCount === 7) {
        $("#dialog").text("It's okay to guess where the labels go, but the guidebook might have some helpful hints.");
       }
      for (var j = 0; j < myObjects.length; j++) {
        if (("#" + this.id) ===  myObjects[j].spot) {
          console.log("#" + this.id)
          $(myObjects[j].thing).remove();
          $(myObjects[j].placed).show();
          $(myObjects[j].icon).hide();
          
        };
      };
        checkComplete();
    }});

}

var artifactGroup = $('#artifactGroup');
artifactGroup.on('show.bs.collapse','.collapse', function() {
artifactGroup.find('.collapse.show').collapse('hide');
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




