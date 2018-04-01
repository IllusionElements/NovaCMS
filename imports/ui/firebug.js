export default function() {
  var fb = document.createElement("script");
  fb.type = "text/javascript";
  fb.src = "https://getfirebug.com/firebug-lite.js#startOpened";
  document.getElementsByTagName("body")[0].appendChild(fb);
};
