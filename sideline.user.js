// ==UserScript==
// @name         External CSS Injector
// @namespace    http://tampermonkey.net/
// @version      1
// @description  Fix CSS in sideline with a remote CSS file.
// @author       David Aspden
// @match        https://aft-poirot-website-dub.dub.proxy.amazon.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=tampermonkey.net
// @resource   IMPORTED_CSS https://gist.githubusercontent.com/davidaspden/d88d157e21f2373c624b6216eaa132ac/raw
// @grant      GM_getResourceText
// @grant      GM_addStyle
// ==/UserScript==

(function() {
    'use strict';
    //Lets fix the lack of favicon!
    const head = document.getElementsByTagName('head')[0];
    const elem = document.createElement('link');
    elem.setAttribute('rel', "shortcut icon");
    elem.setAttribute('href', "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAAAoNJREFUWEftl8trE1EYxc+dNM0kk1eriZSi1aQbIxQ3NqlYVz4iSrqwjWLdKCLGKqLi2vZPkPoCqUvFCmqqLgxGKPjAYG0WBkrQanWljXmYtnlNc+VObQI1lixmWpDc3TBwz2/Od7575yMAcPrUVD8hXBdAt7Jn5RcJU1r0X7/Z0k/O+KZ6KMiw8qJ/KxBQL+nzff0AYMtqAACIMAC6SuKSbA2g5kDVDmx28HDvM6K5WQ2NhgMhQD5P8eN7AaOjM3jzeraU5bPnLGi1axAIpPH0SWrZjFcFsKNTD4/HBK2OQyZTRDI5L21qNqug1XIQRYoXwTQejyyIyQ5w/oIVNrsG78fmcPdOHNlsuXOP9DbC6dIhlZrH7aGf+PI5Ly+AvVWDY8fXgOc5DN9LIPS2bDX7Wqu1Dr4+CwwGFR4+SOLVyxl5AXie4OKldbBa6hAMpjHiX76mipTAe6gBLAdsxWIiPn3MIRLJIDyeqRgw2TPAVA52m+F0CdDpuJJoocC6QEQoNIvg87RyXbC4MyvHtnYBDgeP9RvqYTSqwHEApcDERBZDt2JSQBVxoJLXrA337DWi3SlArYbUiv5HKXkBunvM6NypRzSaw7XB6Yo17z3aCFeHgGg0i8Er0/IC7NptwP4DJqTT5T5fSsFCyiBZGRikrCVgfX7i5Fo0NakxOZmTep0dNourrU0L7+EGGPRc6eiVFYAJdWwX4OkySYdNsQjE4yJyOQpB4KQgsntB8RBu3FQPt9sIm00j3QlMlMEkEiLG3s0h8OxX6YiW3QElf9mqug1rADUH/ncHvo2v3FC61EsSJguTMbmspM3/2ptSOkDYyz8TMoNYqSE1QkAHrt5ouf8bCCtw4D7qDBIAAAAASUVORK5CYII=");
    head.appendChild(elem)
    const my_css = GM_getResourceText("IMPORTED_CSS");
    GM_addStyle(my_css);
})();
