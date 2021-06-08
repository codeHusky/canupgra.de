var genstatus = {
  "yes": "Yes, manufacturers cannot legally void your warranty if you modify your laptop's components or stickers.",
  "yesLimited": "Yes, but manufacturers can void your warranty if you remove any stickers.",
  "noStrict": "No, manufacturers can void your warranty for any modification, including any parts and stickers.",
  "noRelaxed": "No, manufacturers can void your warranty if you modify the internal components of your laptop. You can, however, remove non-identifying stickers.",
  "unknown": "We're not sure - please review your local laws and create an issue on the GitHub repo."
}
var warranty = {
  "USA": genstatus.yes,
  "DEU": genstatus.yes,
  "CAN": genstatus.yes,
  "GBR": genstatus.yes
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
  document.getElementById("result").textContent = result;
  $("#loading").fadeOut(500, function(d){
    $("#main").fadeIn(1000);
  });
}
$.get("https://ip2c.org/s", function( data ) {
    window.ipdata = data.split(";");
    fillPrompt(window.ipdata);
});
