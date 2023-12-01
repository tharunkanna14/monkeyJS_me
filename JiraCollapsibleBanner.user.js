// ==UserScript==
// @name         Jira Banner Size Reducer
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Reduces the size of the Jira banner
// @author       Tharun Kanna
// @match        https://your-jira-domain.com/*
// @grant        GM_addStyle
// ==/UserScript==

(function() {
    'use strict';

    // Add custom CSS to reduce the banner size
    GM_addStyle(`
        .jira-banner {
            height: 30px !important;
        }
    `);
})();
