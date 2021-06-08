var genstatus = {
  "yes": "Yes, manufacturers cannot legally revoke your warranty if you modify your laptop's components or stickers.",
  "noStrict": "No, manufacturers can revoke your warranty if you modify anything about your laptop, including non-identifying stickers.",
  "noRelaxed": "No, manufacturers can revoke your warranty if you modify the internal components of your laptops. You can, however, remove non-identifying stickers.",
  "unknown": "We're not sure - please review your local laws and create an issue on the GitHub repo."
}
var warranty = {
  "USA": genstatus.yes,
  "DEU": genstatus.yes
}

function getCountryAlias(data){
  switch(data[2]){
    case "USA":
      return "the" + data[3];
    default:
      return data[3];
  }
}
function fillPrompt(data){
  var result = warranty[data[2]];
  if(!result) result = genstatus.unknown;
  document.getElementById("country").textContent = getCountryAlias(data);
  document.getElementById("result").textContent = result;
}
$.get("https://ip2c.org/s", function( data ) {
    window.ipdata = data.split(";");
    fillPrompt(window.ipdata);
});
