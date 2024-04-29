// ==UserScript==
// @name         External CSS Injector
// @namespace    http://tampermonkey.net/
// @version      1
// @description  Fix CSS in sideline with a remote CSS file.
// @author       David Aspden
// @match        https://*sideline*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=tampermonkey.net
// @resource   IMPORTED_CSS https://gist.githubusercontent.com/davidaspden/d88d157e21f2373c624b6216eaa132ac/raw
// @grant      GM_getResourceText
// @grant      GM_addStyle
// ==/UserScript==

(function() {
    'use strict';
    const my_css = GM_getResourceText("IMPORTED_CSS");
    GM_addStyle(my_css);
})();
