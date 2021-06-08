var genstatus = {
  "yes": "Yes, manufacturers cannot legally void your warranty if you modify your laptop's components or remove non-identifying stickers.",
  "unknown": "We're not sure - please review your local laws and create an issue on the GitHub repo."
}
var warranty = {
  "USA": genstatus.yes,
  "DEU": genstatus.yes,
  "CAN": genstatus.yes,
  "GBR": genstatus.yes,
  "AUS": genstatus.yes,
  "MEX": "Yes, assuming the repair or modification was done in good faith, the manufacturer cannot void your warranty.",
  "IND": "No. In India, manufacturers can void your warranty if any non-manufacturer-certified repairs or upgrades are conducted, or if a warranty seal is broken."
}

function getCountryAlias(data){
  switch(data[2]){
    case "USA":
      return "the " + data[3];
    default:
      return data[3];
  }
}
function fillPrompt(data){
  console.log("[IP2C]", data);
  var result = warranty[data[2]];
  if(!result) result = genstatus.unknown;
  document.getElementById("country").textContent = getCountryAlias(data);
  document.getElementById("result").innerHTML = result;
  $("#loading").fadeOut(500, function(d){
    $("#main").fadeIn(1000);
  });
}
$.get("https://ip2c.org/s", function( data ) {
    window.ipdata = data.split(";");
    fillPrompt(window.ipdata);
});
