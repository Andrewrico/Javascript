
window.addEventListener('load', () => {
  // data
  let factoryHTMLTag = 'div'
  let factoryId = 'factory'

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
    elements1 = new newProtoObj(
    count = 50,
    tag = 'div',
    id = 'ele1',
    className = 'elementClass').createNewHTML();

    elements2 = new newProtoObj(
    count = 50,
    tag = 'div',
    id = 'ele2',
    className = 'elementClass').createNewHTML();

    // return fragment with groups
    return newFragment;

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
    let groupOne = document.querySelectorAll(`[id*="ele1-"][class*="elementClass"]`)
    let groupTwo = document.querySelectorAll(`[id*="ele2-"][class*="elementClass"]`)

    // if function domNewElements is define
      if (domNewElements !== undefined) {
        // manipulate group one
        for (let i = groupOne.length - 1; i >= 0; i--) {

          groupOne[i].style.width = '100%'
          groupOne[i].style.height = '100%'

          if (i >= 10 && i <= 20) {
            groupOne[i].style.background = 'orange'
          }

        }

        // manipulate group two
        for (let i = groupTwo.length - 1; i >= 0; i--) {

          groupTwo[i].style.background = 'red'

          if (i <= 10) {
            groupTwo[i].style.background = 'blue'
          }
        }
      }

      const elementStylesheet = document.createElement('style')
      elementStylesheet.innerHTML = `
            .elementClass {
                height: 100px;
                width: 100%;
            };
      `;

      let currentScriptTag = document.querySelector('script')
      currentScriptTag.parentNode.insertBefore(elementStylesheet, currentScriptTag)

    } // const domGetElements = () => {


    // if function domNewElements is defined return function domGetElements
    if (domNewElements !== undefined || domNewElements !== null) {
      domGetElements();
    };

});
