(function () {

    'use strict';
    
        document.onload = () => {
    
          const launcher = document.getElementById("launcher"),
                contentdocument = launcher.contentDocument,
                iframeElement = contentdocument.querySelector(".wrapper-AtBcr"),
                style = document.createElement('style'),
                image_small = 'https://cdn.shopify.com/s/files/1/0323/6590/4011/files/Chat-M.svg?v=1611240723)',
                image_large = 'https://cdn.shopify.com/s/files/1/0323/6590/4011/files/Chat-D.svg?v=1611240723)'
            
            style.innerHTML =
                '.wrapper-AtBcr {' +
                    'background-position: cover;' +
                    'background-size: center center;' +
                    'background-repeat: no-reapeat;' +
                    'height: 45px;' +
                    'width: 135px!important;' +
                '}';
    
            iframeElement.innerHTML = '';
    
            let currentScriptTag = document.querySelector('script');
            currentScriptTag.parentNode.insertBefore(style, currentScriptTag);
    
            function windowMatchMedia(mediaMatch) {
                if (mediaMatch.matches) {
                    style.innerHTML =
                    '#launcher {' +
                        'width: 135px!important;' +
                    '}';
                    style.innerHTML =
                    '.wrapper-AtBcr {' +
                        'width: 135px!important;' +
                        'height: 45px!important;' +
                        `background: url(${image_large});` +
                    '}';
                } else {
                    style.innerHTML =
                    '#launcher {' +
                        'width: 45px;' +
                    '}';
                    style.innerHTML =
                    '.wrapper-AtBcr {' +
                        'width: 45px!important;' +
                        'height: 45px!important;' +
                        `background: url(${image_small});` +
                    '}';
                }
            };
    
            let mediaMatch = window.matchMedia("(min-width: 1024px)");
            if (matchMedia) {
                mediaMatch.addListener(windowMatchMedia);
                windowMatchMedia(mediaMatch);
            };
    
        }
    
    }());
    
    
    
    
    
