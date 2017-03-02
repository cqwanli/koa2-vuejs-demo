/**
 * Created by wanli on 16/10/14.
 */
var deviceWidth = document.documentElement.clientWidth;
document.documentElement.style.fontSize = deviceWidth / 6.4 + 'px';

window.addEventListener("resize", function(event) {
  var deviceWidth = document.documentElement.clientWidth;
  document.documentElement.style.fontSize = deviceWidth / 6.4 + 'px';
}, false);