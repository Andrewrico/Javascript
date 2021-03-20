(function () {

    'use strict';
    
        document.onload = () => {
    
            const launcher = document.getElementById("launcher");
            const contentdocument = launcher.contentDocument;
            const iframeElement = contentdocument.querySelector(".wrapper-AtBcr");
            const style = document.createElement('style');
            const image_small = 'https://cdn.shopify.com/s/files/1/0323/6590/4011/files/Chat-M.svg?v=1611240723)';
            const image_large = 'https://cdn.shopify.com/s/files/1/0323/6590/4011/files/Chat-D.svg?v=1611240723)';
    
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
    
            function _whenWidthChange(_addMediaQuery) {
                if (_addMediaQuery.matches) {
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
    
            let _addMediaQuery = window.matchMedia("(min-width: 1024px)");
            if (matchMedia) {
                _addMediaQuery.addListener(_whenWidthChange);
                _whenWidthChange(_addMediaQuery);
            };
    
        }
    
    }());
    
    
    
    
    
    window.addEventListener('load', (event) => {
    
        let COOKIE_TRIGGER  = '/pages/xplus.html'
        let COOKIE_KEY  = 'cookieStorage='
        let COOKIE_VALUE = false
    
        if( window.location.pathname == COOKIE_TRIGGER ) {
    
            COOKIE_VALUE = true
    
            const setCookie = function (COOKIE_VALUE) {
                if (COOKIE_VALUE) {
                    return document.cookie.indexOf(COOKIE_KEY + COOKIE_VALUE) !== -1;
                };
                return false;
            };
    
            const createCookie = function (COOKIE_VALUE) {
    
                if (COOKIE_VALUE == true) {
                    let COOKIE_DATE = new Date(Date.now())
                    COOKIE_DATE.setMonth(COOKIE_DATE.getMonth() + 2);
                    document.cookie = COOKIE_KEY + COOKIE_VALUE + '; expires=' + COOKIE_DATE;
                };
            };
    
            let COOKIEMATCH = window.location.pathname.match(COOKIE_TRIGGER)
    
            COOKIE_TRIGGER = COOKIEMATCH ? COOKIEMATCH[1] : undefined;
    
            if (!createCookie(COOKIE_TRIGGER)) {
                setCookie(COOKIE_TRIGGER);
            };
    
            console.log(`
                # Trigger: ${COOKIE_TRIGGER}
                # Key: ${COOKIE_KEY}
                # Value: ${COOKIE_VALUE}
                # Cookie Stored: ${document.cookie}
            `);
    
        } else {
    
            console.log(`# Cookie Trigger wasn't found! `);
        }
    
    });
    