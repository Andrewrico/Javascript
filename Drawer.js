    const drawer = document.querySelector("#drawer");
    const backdrop = document.querySelector("#backdrop");
    const open = document.querySelector("#open-drawer");
    const close = document.querySelector("#close-drawer");
    const style = document.createElement('style');

    open.addEventListener('click', () => {
        drawer.setAttribute('tabindex', 1);
        style.innerHTML =
            '#drawer {' +
            'height: 100vh;' +
            'width: 85%;' +
            'max-width: 400px;' +
            'opacity: 1;' +
            '};'
        '#backdrop {' +
        'display: block;'
        '};'
        'html {' +
        'overflow: hidden;'
        '};';
    });
    close.addEventListener('click', () => {
        drawer.setAttribute('tabindex', 0);
        style.innerHTML =
            '#drawer {' +
            'width: 0;' +
            'max-width: 0;' +
            'opacity: 0;' +
            '};'
        '#backdrop {' +
        'display: none;'
        '};'
        'html {' +
        'overflow: auto;'
        '};';
    });
    backdrop.addEventListener('click', () => {
        drawer.setAttribute('tabindex', 1);
        style.innerHTML =
            '#drawer {' +
            'width: 0;' +
            'max-width: 0;' +
            'opacity: 0;' +
            '};'
        '#backdrop {' +
        'display: none;'
        '};'
        'html {' +
        'overflow: auto;'
        '};';
    });

    function windowMatchMedia(mediaMatch) {
        if (mediaMatch.matches) {
            style.innerHTML =
                '#drawer {' +
                'width: 0;' +
                'max-width: 0;' +
                'opacity: 0;' +
                '};'
            '#backdrop {' +
            'display: none;'
            '};'
            'html {' +
            'overflow: auto;'
            '};';
        }
    };

    let mediaMatch = window.matchMedia("(min-width: 1024px)");
    if (matchMedia) {
        mediaMatch.addListener(windowMatchMedia);
        windowMatchMedia(mediaMatch);
    };

    let currentScriptTag = document.querySelector('script');
    currentScriptTag.parentNode.insertBefore(style, currentScriptTag);
