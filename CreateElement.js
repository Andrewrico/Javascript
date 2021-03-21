  function createNewElement() {
      const DIV = document.querySelector('.div');
      const newElement = document.createElement("h1");
      const nodeElement  = document.createTextNode("The New Element");
      DIV.setAttribute("id", "target");
      newElement.appendChild(nodeElement);
      DIV.appendChild(newElement);
      console.log(DIV);
  }
  document.body.onload = createNewElement;
