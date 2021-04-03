
window.addEventListener('load', () => {
  // data
  let factoryHTMLTag = 'div'
  let factoryId = 'factory'

    // Create Obj
  function newProtoObj(count, tag, id, className) {
      this.count = count,
      this.tag = tag,
      this.id = id,
      this.className = className
  }

  function newGroupObj(count, tag, id, className) {
    this.count = count,
    this.tag = tag,
    this.id = id,
    this.className = className
  }

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

  // function domNewElements
  const domNewElements = () => {

    // get fragment
    let newFragment = new DocumentFragment()
    // if (newFragment !== undefined) {
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
    newGroupObj.prototype.createNewGroup = function() {
        createGroup = new newProtoObj(  
          count = `${this.count}`,   
          tag = `${this.tag}`,   
          id = `${this.id}`,   
          className = `${this.className}`
        ).createNewHTML();
    }

    createGroup1 = new newGroupObj(100,  'div', 'element-1', 'group-1 column-2').createNewGroup();
    createGroup2 = new newGroupObj(100,  'div', 'element-2', 'group-2 column-2').createNewGroup();
    // return fragment with groups
    return newFragment;
    // } 
  }
  // if function domNewElements is defined return function domGetElements
  if (domNewElements !== undefined || domNewElements !== null) 
  document.querySelector(`#${factoryId}`).append(domNewElements());
  // get elements
  const domGetElements = () => {
    // elements
    // if function domNewElements is define
    if (domNewElements !== undefined) {
      let group1 = document.querySelectorAll(`[id*=element-1][class*="group-1 column-2"]`);
      let group2 = document.querySelectorAll(`[id*=element-2][class*="group-2 column-2"]`);
        // style group one
        for (let i = group1.length - 1; i >= 0; i--) {
          [i].style.width = '100%'
          [i].style.height = '100%'
          if (i >= 10 && i <= 20) {
            [i].style.background = 'orange'
          }
        }
        // style group two
        for (let i = group2.length - 1; i >= 0; i--) {
          [i].style.background = 'red'
          if (i <= 10) {
            [i].style.background = 'blue'
          }
        }
      }
      const elementStylesheet = document.createElement('style')
      elementStylesheet.innerHTML = `
            [class*="group-"] {
                height: 100px;
                width: 100%;
            };
      `;
      let currentScriptTag = document.querySelector('script')
      currentScriptTag.parentNode.insertBefore(elementStylesheet, currentScriptTag)
} // const domGetElements = () => {
    // if function domNewElements is defined return function domGetElements
    if (domNewElements !== undefined || domNewElements !== null) domGetElements();
});
