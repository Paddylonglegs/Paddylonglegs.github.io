$(document).ready(function(){ //Display my github repos
  $('div.repos').repos({
    username:'Paddylonglegs',
    count: 4
  });
});

$(document).ready( function(){ //awesome jquery plugin <!--Flipping Gallery Plugin http://peachananr.github.io/flipping_gallery/demo/flipping_gallery_demo.html-->
  $(".gallery").flipping_gallery({
    direction: "forward", // This is will set the flipping direction when the gallery is clicked. Options available are "forward", or "backward". The default value is forward.
    selector: "> a", // This will let you change the default selector which by default, will look for <a> tag and generate the gallery from it. This option accepts normal CSS selectors.
    spacing: 10, // You can set the spacing between each photo in the gallery here. The number represents the pixels between each photos. The default value is 10.
    showMaximum: 15, // This will let you limit the number of photos that will be in the viewport. In case you have a gazillion photos, this is perfect to hide all those photos and limit only a few in the viewport.
    enableScroll: true, // Set this to false if you don't want the plugin to override your scrolling behavior. The default value is true.
    flipDirection: "top", // You can now set which direction the picture will flip to. Available options are "left", "right", "top", and "bottom". The default value is bottom.
    autoplay: 1500 // You can set the gallery to autoplay by defining the interval here. This option accepts value in milliseconds. The default value is false.
  });});

//COOKIE CONSENT PLUGIN - To be fixed soon//
$(document).ready(function(){
    $("section").ihavecookies({
        title: "Cookies & Privacy",
        message: "This website uses cookies 🍪 to ensure you get the best experience on our website.",
        link: "index.php",
        delay:200,
        expires: 1
      })});