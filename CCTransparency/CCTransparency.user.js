// ==UserScript==
// @name         cc直播弹幕透明
// @namespace    https://github.com/Lycreal/UserScripts
// @version      0.1
// @description  将网易cc直播间的弹幕透明度设置为50%
// @author       Lycreal
// @match        *://cc.163.com/*
// @supportURL   https://github.com/Lycreal/UserScripts/issues
// @license      MIT License
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    let codeBlockStyle = document.createElement('style');
    codeBlockStyle.innerText = `
      .cc-h5player-container .comment-canvas{
        opacity: 0.5;
      }`;
    document.body.appendChild(codeBlockStyle);
})();
