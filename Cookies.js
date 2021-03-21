window.addEventListener('load', (e) => {

    let COOKIE_TRIGGER = '/pages/xplus.html' // target 
    let COOKIE_KEY = "cookiefound" // key 
    let COOKIE_VALUE = false // value 
    let COOKIE_EXPIRES = 1000 * 36000 + 100000// expires


    if (window.location.pathname !== undefined && window.location.pathname === COOKIE_TRIGGER) {

        COOKIE_VALUE = true

        const setCookie = function (COOKIE_VALUE) {
            if (COOKIE_VALUE = true) {
                return document.cookie.indexOf(COOKIE_KEY + '=' + COOKIE_VALUE) !== -1;
            };
            return false;
        };

        const createCookie = function (COOKIE_VALUE) {
            if (COOKIE_VALUE = true) {
                let COOKIE_DATE = new Date();
                let now = COOKIE_DATE.getTime();
                let expires = now + COOKIE_EXPIRES;
                COOKIE_DATE.setTime(expires);
                document.cookie = COOKIE_KEY + '=' + COOKIE_VALUE + '; expires=' + COOKIE_DATE.toUTCString() +';path=/';
            };
        };

        let match = window.location.pathname.match(COOKIE_TRIGGER)
        COOKIE_TRIGGER = match ? match[1] : undefined;

        if (!createCookie(COOKIE_TRIGGER)) {
            setCookie(COOKIE_TRIGGER);
        };

        let cookieArray = document.cookie
            .split(';')
            .map(cookie => cookie.split('='))
            .reduce((accumulator, [key, value]) =>
                ({...accumulator,
                    [key.trim()]: decodeURIComponent(value)
                }), 
            {
        });

        console.log(cookieArray)

    } else {

        document.cookie = `${COOKIE_KEY}=${!COOKIE_VALUE}` +  "; expires=Thu, 12 Dec 2012 00:00:01 GMT";
        console.log(`Not found!`);
    }

});