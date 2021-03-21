window.addEventListener('load', (e) => {

    // set data
    let COOKIE_TRIGGER = '/path/page.html' // target 
    let COOKIE_KEY = "cookieKey" // key 
    let COOKIE_VALUE = false // value 
    let COOKIE_EXPIRES = 1000 * 36000 + 100000// expires


    // only save cookie in this location
    if (window.location.pathname !== undefined && window.location.pathname === COOKIE_TRIGGER) {

        // if location set value to true
        COOKIE_VALUE = true

        // set Cookie
        const setCookie = function (COOKIE_VALUE) {
            if (COOKIE_VALUE = true) {
                return document.cookie.indexOf(COOKIE_KEY + '=' + COOKIE_VALUE) !== -1;
            };
            return false;
        };

        // create cookie
        const createCookie = function (COOKIE_VALUE) {
            if (COOKIE_VALUE = true) {
                let COOKIE_DATE = new Date();
                let now = COOKIE_DATE.getTime();
                let expires = now + COOKIE_EXPIRES;
                COOKIE_DATE.setTime(expires);
                document.cookie = COOKIE_KEY + '=' + COOKIE_VALUE + '; expires=' + COOKIE_DATE.toUTCString() +';path=/';
            };
        };

        // match trigger and window location
        let matchLocationTrigger = window.location.pathname.match(COOKIE_TRIGGER)
        COOKIE_TRIGGER = matchLocationTrigger ? matchLocationTrigger[1] : undefined;

        // save cookie to browser
        if (!createCookie(COOKIE_TRIGGER)) {
            setCookie(COOKIE_TRIGGER);
        };

        // get cookie array
        let cookieArray = document.cookie
            .split(';')
            .map(cookie => cookie.split('='))
            .reduce((accumulator, [key, value]) =>
                ({...accumulator,
                    [key.trim()]: decodeURIComponent(value)
                }), 
            {
        });

        // log success
        console.log(cookieArray)

    } else {

        // delete cookie if go to other location
        document.cookie = `${COOKIE_KEY}=${!COOKIE_VALUE}` +  "; expires=Thu, 12 Dec 2012 00:00:01 GMT";

        //log
        console.log(`Not found!`);
    }

});