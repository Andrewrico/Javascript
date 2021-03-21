const canvasNewElements = document.querySelector("#GenerateElements");

let elementClassName =  'genElement';
let elementId =  'element';
let iElementTag = 'div'
let iElementId =  'div';
let iElementCount = Number('1000');
let iiElementTag = 'span'
let iiElementId =  'span';
let iiElementCount = Number('10000');

const generateNewElements = () => {

    let newElement = this;
    let newFragment = new DocumentFragment();



    for (let i = 1; i <= iElementCount; i++) {
        newElement = document.createElement(`${iElementTag}`);
        newElement.append(i.innerContent = '')
        newElement.setAttribute('id', `${elementId}-${iElementId}-${[i]}`);
        newElement.setAttribute('class', `${elementClassName}`);
        newFragment.append(newElement);
    };

    for (let i = 1; i <= iiElementCount; i++) {
        newElement = document.createElement(`${iiElementTag}`)
        newElement.append(i.innerContent = '')
        newElement.setAttribute('id', `${elementId}-${iiElementId}-${[i]}`);
        newElement.setAttribute('class', `${elementClassName}`);
        newFragment.append(newElement);
    };

    return newFragment;
};

canvasNewElements.append(generateNewElements());

let set1 =  document.querySelectorAll(`[id*="${elementId}-${iElementId}-"][class*="${elementClassName}"]`);
for (let i = set1.length - 1; i >= 0; i--) {
    set1[i].style.left = '30%'
};

let set2 =  document.querySelectorAll(`[id*="${elementId}-${iiElementId}-"][class*="${elementClassName}"]`);
for (let i = set2.length - 1; i >= 0; i--) {
    set2[i].style.right = '30%'
};





// let set1 =  document.querySelectorAll(`[id*="${_IDName}-${_1ElementId}-"][class*="${_className}"]`);
// for (let i = set1.length - 1; i >= 0; i--) {
//     set1[i].style.left = '30%'
//     icon[0].style.left = '30%'
//     icon[1].style.left = '30%'
//     icon[2].style.left = '30%'
//     icon[3].style.left = '30%'
//     icon[4].style.left = '30%'
//     icon[5].style.left = '30%'
//     icon[6].style.left = '30%'
//     icon[7].style.left = '30%'
//     icon[8].style.left = '30%'
//     icon[9].style.left = '30%'
// };
// let set2 =  document.querySelectorAll(`[id*="${_IDName}-${_2ElementId}-"][class*="${_className}"]`);

// for (let i = c.length - 1; i >= 0; i--) {
//     set2[i].style.right = '30%'
//     pin[0].style.left = '30%'
//     pin[1].style.left = '30%'
//     pin[2].style.left = '30%'
//     pin[3].style.left = '30%'
//     pin[4].style.left = '30%'
//     pin[5].style.left = '30%'
//     pin[6].style.left = '30%'
//     pin[7].style.left = '30%'
//     pin[8].style.left = '30%'
//     pin[9].style.left = '30%'
// };