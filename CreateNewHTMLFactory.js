
window.addEventListener('load', () => {
  // data
  let factoryHTMLTag = 'div'
  let factoryId = 'factory'
  let elements1;
  let elements2;

  // parent div
  const createNewElement = () => {
    const factoryWrapper = document.createElement(`${factoryHTMLTag}`);
    factoryWrapper.setAttribute("id", `${factoryId}`);
    document.body.appendChild(factoryWrapper);
  }

  // if function createNewElement is defined 
  if (createNewElement !== undefined || createNewElement !== null) {
    createNewElement();
  }

  // function create new elements
  const domNewElements = () => {

    // get fragment
    let newFragment = new DocumentFragment()

    // if fragment is defined
    if (newFragment !== undefined) {

    // Create Obj
    function newProtoObj(count, tag, id, className) {
        this.count = count,
        this.tag = tag,
        this.id = id,
        this.className = className
    }
    
    // Create HTML
    newProtoObj.prototype.createNewHTML = function() {
        let newElement = [];
        for (let i = 1; i <= this.count; i++) {
          newElement = document.createElement(`${this.tag}`);
          newElement.setAttribute('id', `${this.id}-${[i]}`);
          newElement.setAttribute('class', `${this.className}`);
          newFragment.append(newElement);
        };
    }

    // New HTML
    elements1 = new newProtoObj(1, 'div', 'group1', 'group1 dynamicElement').createNewHTML();
    elements2 = new newProtoObj(1, 'div', 'group2', 'group2 dynamicElement').createNewHTML();

      // return fragment with groups
    return newFragment;

    } else {

      // return false and log
      console.log('Something went wrong!');
      return false;

    }

  }

  // if function domNewElements is defined return function domGetElements
  const domFactory = document.querySelector(`#${factoryId}`)
  if (domNewElements !== undefined || domNewElements !== null) {
    domFactory.append(domNewElements());
  }

  // manipulate elements
  const domGetElements = () => {

    // elements
    let groupOne = document.querySelectorAll(`[id*="${elements1.id}-"][class*="${elements1.className}"]`)
    let groupTwo = document.querySelectorAll(`[id*="${elements2.id}-"][class*="${elements2.className}"]`)

    // if function domNewElements is define
      if (domNewElements !== undefined) {
        // manipulate group one
        for (let i = groupOne.length - 1; i >= 0; i--) {
          groupOne[i].style.background = 'yellow'
          if (i <= 10) {
            groupOne[i].style.background = 'green'
          }
          if (i >= 10 && i <= 20) {
            groupOne[i].style.background = 'orange'
          }
          groupOne[20].style.background = 'maroon'
          groupOne[30].style.background = 'maroon'
          groupOne[40].style.background = 'maroon'
        }
        // manipulate group two
        for (let i = groupTwo.length - 1; i >= 0; i--) {
          groupTwo[i].style.background = 'red'
          if (i <= 10) {
            groupTwo[i].style.background = 'blue'
          }
          groupTwo[20].style.background = 'maroon'
          groupTwo[30].style.background = 'maroon'
          groupTwo[40].style.background = 'maroon'
        }
      } else {
        // return false and log
        console.log('Something went wrong!')
        return false;
      }
      const elementStylesheet = document.createElement('style')
      elementStylesheet.innerHTML = `
              .dynamicElement {
                  height: 100px;
                  width: 100%;
              };
              #unit-red-1 {
                  background: ;
              };
          `;
      let currentScriptTag = document.querySelector('script');
      currentScriptTag.parentNode.insertBefore(elementStylesheet, currentScriptTag);

    } // const domGetElements = () => {


    // if function domNewElements is defined return function domGetElements
    if (domNewElements !== undefined || domNewElements !== null) {
      domGetElements();
    };

});
