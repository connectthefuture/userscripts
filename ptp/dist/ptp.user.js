// ==UserScript==
// @name          guten-ptp
// @description   x 
// @version       0.1
// @author        Guten
// @namespace     http://GutenYe.com
// @updateURL     
// @icon          
//
// @require       https://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js
// @require       https://raw.github.com/GutenYe/pdjs/master/dist/pd.js
//
// @include       *://*passthepopcorn.me*
// ==/UserScript==
;
$("#menu ul").append($('<li id="nav_collection"><a href="/bookmarks.php?type=collections">Collections</a></li>'));
