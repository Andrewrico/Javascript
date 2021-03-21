window.addEventListener('load', (e) => {

    // set data
    const domFactory = document.querySelector("#element-factory")
    let elementName = 'newElement'
    let elementTagOne = 'div'
    let elementIdOne = 'first-group'
    let elementCountOne = Number('100')
    let elementTagTwo = 'span'
    let elementIdTwo = 'second-group'
    let elementCountTwo = Number('100')

    // function create new elements
    const domNewElements = () => {

        // get fragment
        let newFragment = new DocumentFragment()

        // if fragment is defined
        if (newFragment !== undefined) {

            // create group one
            for (let i = 1; i <= elementCountOne; i++) {
                newElement = document.createElement(`${elementTagOne}`);
                newElement.setAttribute('id', `${elementName}-${elementIdOne}-${[i]}`);
                newElement.setAttribute('class', `${elementName}`);
                newFragment.append(newElement);
            };

            // create group two
            for (let i = 1; i <= elementCountTwo; i++) {
                newElement = document.createElement(`${elementTagTwo}`)
                newElement.setAttribute('id', `${elementName}-${elementIdTwo}-${[i]}`);
                newElement.setAttribute('class', `${elementName}`);
                newFragment.append(newElement);
            };

            // return fragment with groups
            return newFragment;
            
        } else {

            // return false and log
            console.log('Something went wrong!');
            return false;

        }
    }

    // if function domNewElements is defined return function domGetElements
    if (domNewElements !== undefined || domGetElements !== null) {
        domFactory.append(domNewElements());
    } 

    // manipulate elements
    const domGetElements = () => {

        // groups
        let groupOne = document.querySelectorAll(`[id*="${elementName}-${elementIdOne}-"][class*="${elementName}"]`)
        let groupTwo = document.querySelectorAll(`[id*="${elementName}-${elementIdTwo}-"][class*="${elementName}"]`)

        // if function domNewElements is define
        if (domNewElements !== undefined) {

            // manipulate group one
            for (let i = groupOne.length - 1; i >= 0; i--) {
                groupOne[i].style.left = '30%'
            };
        
            // manipulate group two
            for (let i = groupTwo.length - 1; i >= 0; i--) {
                groupTwo[i].style.right = '30%'
            };

        } else {

            // return false and log
            console.log('Something went wrong!')
            return false;

        }
    }

    // if function domNewElements is defined return function domGetElements
    if (domNewElements !== undefined || domNewElements !== null) {
        domGetElements();
        console.log(document.querySelectorAll(`[class*="${elementName}"]`));
    };


});