/*function playSound0() {
  var audio0 = new Audio('./resources/sounds/chime.mp3');
  audio0.play();
};
     //just some code to make the sound work
      var clicksound = new Audio('./resources/sounds/click.mp3');
      clicksound.src =
        "https://d2t4fc8ff77neh.cloudfront.net/cardSrcMedia/1h96m6idd_gravebutton1.ogg";
      function PlaySound210() {
        clicksound.play();
      }
      var clicked = false;

      function doSomething() {
        if (clicked) {
          var optionclicksound = new Audio('./resources/sounds/confirm.mp3');
           optionclicksound.src =
            "https://d2t4fc8ff77neh.cloudfront.net/cardSrcMedia/1h96mb06e_buttonclick1.ogg";
          optionclicksound.load();
           optionclicksound.play();
        } else {
           clicksound.load();
           clicksound.play();
        }
        clicked = !clicked;
      }*/
var sounds {

    /*constructor() {
        this.gameActive = true;
    }*/function playSound0() {
  var audio0 = new Audio('./resources/sounds/chime.mp3');
  audio0.play();
};
     //just some code to make the sound work
      var clicksound = new Audio('./resources/sounds/click.mp3');
      function PlaySound210() {
        clicksound.play();
      }
      var clicked = false;

      function doSomething() {
        if (clicked) {
          var optionclicksound = new Audio('./resources/sounds/confirm.mp3');
          optionclicksound.load();
           optionclicksound.play();
        } else {
           clicksound.load();
           clicksound.play();
        }
        clicked = !clicked;
      }
}
export { sounds }