// ==UserScript==
// @name        Hacker News - Links in New Tab
// @namespace   Violentmonkey Scripts
// @match       https://news.ycombinator.com/news 
// @grant       none
// @version     1.0
// @author      Chris Nicholas
// @description When viewing Hacker News, story links will open in a new tab rather than in the same tab.
// ==/UserScript==


const storyLinks = document.getElementsByClassName("storylink");
const upvotes = document.getElementsByClassName("nosee");

for (var i = 0; i < storyLinks.length; i++) {
   storyLinks[i].setAttribute("target", "_blank");
}

for (var i = 0; i < upvotes.length; i++) {
  console.log(upvotes[i].parentElement.parentElement);
}
