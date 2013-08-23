
    var gData;
    var ward;
  function gettheward(){
    $.getJSON('http://opencouncil.ca/getward.php?a='+$('#address').val()+'&callback=gotward', function(data) {
      ward = data.ward;
      $("#container").html(ich.results(data));
    });
  }
  function gotward(data){
    console.log(data);
  }
  document.addEventListener('DOMContentLoaded', function() {
    $("#container").html(ich.getward);
    var URL = "0Ai6FEf_e95YqdFVSd1JwMWREZUdvRmxSc05mXzV5Y0E";
    Tabletop.init( { key: URL, callback: showInfo, simpleSheet: true } ) 
  }) 
    
  function showInfo(data) {
    // window.tabletopData = tabletop 
    gData = data
    console.log("here is gData", gData)

  }
