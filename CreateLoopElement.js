window.addEventListener('load', (e) => {

    const canvasNewElements = document.querySelector("#GenerateElements");
    let elementName = 'luci';
    let ElementTagOne = 'div'
    let elementIdOne = 'carollina';
    let elementCountOne = Number('10');

    let elementTagTwo = 'span'
    let elementIdTwo = 'sofia';
    let elementCountTwo = Number('10');

    const domNewElements = () => {

        let newElement = this;
        let newFragment = new DocumentFragment();

        for (let i = 1; i <= elementCountOne; i++) {
            newElement = document.createElement(`${ElementTagOne}`);
            newElement.setAttribute('id', `${elementName}-${elementIdOne}-${[i]}`);
            newElement.setAttribute('class', `${elementName}`);
            newFragment.append(newElement);
        };

        for (let i = 1; i <= elementCountTwo; i++) {
            newElement = document.createElement(`${elementTagTwo}`)
            newElement.setAttribute('id', `${elementName}-${elementIdTwo}-${[i]}`);
            newElement.setAttribute('class', `${elementName}`);
            newFragment.append(newElement);
        };

        return newFragment;
    };

    canvasNewElements.append(domNewElements());

    const domGetElements = () => {

        let a = document.querySelectorAll(`[id*="${elementName}-${elementIdOne}-"][class*="${elementName}"]`);
        let b = document.querySelectorAll(`[id*="${elementName}-${elementIdTwo}-"][class*="${elementName}"]`);

        if (generateNewElements !== undefined) {

            for (let i = a.length - 1; i >= 0; i--) {
                a[i].style.left = '30%'
            };
        
            for (let i = b.length - 1; i >= 0; i--) {
                b[i].style.right = '30%'
            };

        } else {

            return false;
        }
    }

    domGetElements();
  
});