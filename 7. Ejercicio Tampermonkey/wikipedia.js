// ==UserScript==
// @name         Dark Mode para Wikipedia
// @namespace    https://www.wikipedia.org/
// @version      2025-10-20
// @description  Aplica modo oscuro personalizado a Wikipedia
// @author       Sergio Díaz
// @match        https://es.wikipedia.org/wiki/Wikipedia:Portada
// @icon         https://www.google.com/s2/favicons?sz=64&domain=wikipedia.org
// @grant        GM_addStyle
// ==/UserScript==

(function() {
    'use strict';
    GM_addStyle(`
        html, body {
            background-color: #111 !important;
            color: #ddd !important;
        }

        a, a * {
            color: #80bfff !important;
        }

        #content, #mw-content-text, .mw-body, .mw-parser-output {
            background-color: #1a1a1a !important;
            color: #ddd !important;
        }

        .infobox, .navbox, table {
            background-color: #222 !important;
            color: #ccc !important;
            border-color: #333 !important;
        }

        th, td {
            border-color: #333 !important;
        }

        img {
            filter: brightness(0.85) contrast(1.05);
        }

        #mw-head, #footer {
            background-color: #000 !important;
        }
            
        pre, code, blockquote {
            background-color: #191919 !important;
            color: #f8f8f2 !important;
        }
    `);
})();
