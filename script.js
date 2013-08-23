
    var gData;
    var ward;
  function gettheward(){
    if($("#address").val().length === 0){
      $("#address").val("150 Dufferin Ave");
    }
    $.getJSON('http://opencouncil.ca/getward.php?a='+$('#address').val()+'&callback=?', null, function(data) {
      ward = data.ward;

      for(var i in gData){
        if(gData[i].ward === ward.toString()){

          data.info = gData[i];
          data.notes = gData[i].notes;
          if(data.info.vote === "destruct"){
            data.verb = "tell them that you value our woodlands and wetlands";
          } else {
            data.verb = "thank them";
          }
          $("#container").html(ich.results(data));

          break;
        }
      }

    });

  }
  document.addEventListener('DOMContentLoaded', function() {
    $("#container").html(ich.getward);
    var URL = "0Ai6FEf_e95YqdFVSd1JwMWREZUdvRmxSc05mXzV5Y0E";
    Tabletop.init( { key: URL, callback: showInfo, simpleSheet: true } );
    
  });
    
  function showInfo(data) {
    // window.tabletopData = tabletop 
    gData = data;
    console.log("here is gData", gData);

  }
