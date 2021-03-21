window.addEventListener('load', (e) => {

  // set data
  let factoryHTMLTag= 'div'
  let factoryId = 'factory'
  let elementName = 'unit'

  let elementHTMLTagOne = 'div'
  let elementIdOne = 'orange'
  let elementCountOne = Number('25')

  let elementHTMLTagTwo = 'div'
  let elementIdTwo = 'red'
  let elementCountTwo = Number('25')

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

          // create group one
          for (let i = 1; i <= elementCountOne; i++) {
              newElement = document.createElement(`${elementHTMLTagOne}`);
              newElement.setAttribute('id', `${elementName}-${elementIdOne}-${[i]}`);
              newElement.setAttribute('class', `${elementName}`);
              newFragment.append(newElement);
          };

          // create group two
          for (let i = 1; i <= elementCountTwo; i++) {
              newElement = document.createElement(`${elementHTMLTagTwo}`)
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
  const domFactory = document.querySelector(`#${factoryId}`)
  if (domNewElements !== undefined || domNewElements !== null) {
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
              groupOne[i].style.background = 'orange'              
          }
      
          // manipulate group two
          for (let i = groupTwo.length - 1; i >= 0; i--) {
              groupTwo[i].style.background = 'red'
          }
          
      } else {

          // return false and log
          console.log('Something went wrong!')
          return false;

      }

      const elementStylesheet = document.createElement('style')
      elementStylesheet.innerHTML = 
      '.unit {' +
          'height: 100px;' +
          'width: 100%;' +
          'background: orange;' +
      '};' +
      '#unit-red-1{' +
          'background: red;' +
      '};'

      let currentScriptTag = document.querySelector('script');
      currentScriptTag.parentNode.insertBefore(elementStylesheet, currentScriptTag);

  }

  // if function domNewElements is defined return function domGetElements
  if (domNewElements !== undefined || domNewElements !== null) {
      domGetElements();
      console.log(document.querySelectorAll(`[class*="${elementName}"]`));
  };

});