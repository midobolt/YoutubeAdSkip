setInterval(function(){

    var skipButton = document.getElementsByClassName("ytp-ad-skip-button-container");
    if (skipButton != undefined && skipButton.length > 0){
        console.log("Ad detected");
        skipButton[0].click();
    }
}, 3000)

setInterval(() => {
  var closeButton = document.getElementByClassName(
    "ytp-ad-overlay-close-button"
  );
  if (closeButton != undefined && closeButton.length > 0) {
    closeButton[0].click();
    console.log("Ads closed");
  }
}, 300);

setInterval(() => {
  var closeBtn = document.getElementByClassName("avnts-close-btn-con");
  if (closeBtn != undefined && closeBtn.length > 0) {
    closeBtn[0].click();
    console.log("Ads closed");
  }
}, 300);