(function bgImage() {
  var style = document.createElement("style");

  style.innerHTML =
    'html {' +
      'background: url(../kansikuva/normal.jpg) no-repeat center center fixed;' +
    '}' +
    '.blur {' +
      'background: url(../kansikuva/blur.jpg) no-repeat center center fixed;' +
    '}';
  
  document.head.appendChild(style);
})();
