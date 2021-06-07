function fillPrompt(data){
  
}
$.get("https://ip2c.org/s", function( data ) {
    window.ipdata = data.split(";");
    fillPrompt(window.ipdata);
});
