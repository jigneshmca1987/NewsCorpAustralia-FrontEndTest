"use strict";

document.getElementById("news_Corp_Australia").innerHTML = "<ul class=\"firstBox\"></ul><ul class=\"secondBox\"></ul>";
var datum = [];
var UsersData = [{
  title: "Live: Greg Inglis to announce nrl retirement",
  titleLinke: "#",
  Imageurl: "images/user_profile01.jpg",
  IntroTitle: "Rabbitohs Star",
  Intro: "Greg Inglis has arrived at South Sydeny headquaters and will front a media conference later this morning to announce his retirement from rugby league.",
  TimerImageurl: "images/timer.png",
  timer: "2m",
  chatMSGurl: "images/chat_msg.png",
  countmsg: ""
}, {
  title: "Opal Tower units still closed as work only approved now",
  titleLinke: "#",
  Imageurl: "images/user_profile02.jpg",
  IntroTitle: "EXCLUSIVE",
  Intro: "  People are still unable to move back into almost half the apartments in Opal Tower more than three months after cracks appeared in the trouble-plagued building and final rectification works have only just been given the green light.",
  TimerImageurl: "images/timer.png",
  timer: "1h",
  chatMSGurl: "images/chat_msg.png",
  countmsg: "1"
}];

function renderUsers() {
  var html, firstBox;
  return regeneratorRuntime.async(function renderUsers$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          html = "";
          UsersData.forEach(function (user) {
            var htmlSegment = "<li><a href=\"#\"><span class=\"responsive-img\"><img class=\"responsive-img_img\" src=\"".concat(user.Imageurl, "\"/></span></a>\n        <h2 class=\"title\"><a href=\"").concat(user.titleLinke, "\">").concat(user.title, "</a></h2>                \n        <p class=\"intro\"><span>").concat(user.IntroTitle, "</span> ").concat(user.Intro, "</p>\n        <div class=\"linkBox\">\n            <a href=\"#\"><img src=\"").concat(user.TimerImageurl, "\" alt=\"\"><span>").concat(user.timer, "</span></a>\n            <a href=\"#\"><img src=\"").concat(user.chatMSGurl, "\" alt=\"\"><span>").concat(user.countmsg, "</span></a>\n        </div>\n    </li>");
            html += htmlSegment;
          });
          firstBox = document.querySelector(".firstBox");
          firstBox.innerHTML = html;

        case 4:
        case "end":
          return _context.stop();
      }
    }
  });
}

renderUsers();
var NewsData = [{
  title: "One Nation Support has crashed: Newspoll",
  titleLinke: "#",
  Imageurl: "images/user_profile03.jpg",
  TimerImageurl: "images/timer.png",
  timer: "1h"
}, {
  title: "Two fake cops robbed Sydney currency exch..",
  titleLinke: "#",
  Imageurl: "images/user_profile04.jpg",
  TimerImageurl: "images/timer.png",
  timer: "3h"
}];

function renderNews() {
  var html, secondBox;
  return regeneratorRuntime.async(function renderNews$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          html = "";
          NewsData.forEach(function (user) {
            var htmlSegment = "<li>\n        <a href=\"#\" class=\"imgBox\"><span class=\"responsive-img\"><img class=\"responsive-img_img\" src=\"".concat(user.Imageurl, "\"/></span></a>\n        <h2 class=\"title\"><a href=\"").concat(user.titleLinke, "\">").concat(user.title, "</a></h2>                \n        <div class=\"linkBox\">\n            <a href=\"#\"><img src=\"").concat(user.TimerImageurl, "\" alt=\"\"><span>").concat(user.timer, "</span></a>\n        </div>\n    </li>");
            html += htmlSegment;
          });
          secondBox = document.querySelector(".secondBox");
          secondBox.innerHTML = html;

        case 4:
        case "end":
          return _context2.stop();
      }
    }
  });
}

renderNews();
//# sourceMappingURL=script.dev.js.map
