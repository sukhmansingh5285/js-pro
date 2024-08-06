///////////////////////////////////////////////////////////**************Mouse&Keyboard Events */////////////////////////////////////////////////

onclick="handleClick()"
// used when something is clicked

onmouseover="handleMouseOver()"
// when cursor enters the area of the element

onmouseout="handleMouseOut()"
// when cursor comes out the area of the element

onfocus="handleFocus()"
// when an area gains the focus, like input field getting clicked on 

onblur="handleBlur()"
// when an area loses the focus, like input field getting clicked out

onkeydown="handleKeyDown()"
// when key is pressed on an area

onkeyup="handleKeyUp()"
// when key is released on an area after pressing

///////////////////////////////////////////////////////////**************Page *************/////////////////////////////////////////////////

onload="handleLoad()"
// when the page is loaded

onunload="handleUnLoad()"
// when the page is unloaded

onresize="handleResize()"
// when the page size is changed

onscroll="handleScroll()"
// when the page is scrolled up/down

oninput="handleInput()"
// when the input value of input field changes

onchange="handleChange()"
// when the value of selected element changes

onsubmit="handleSubmit()"
// when the form is submitted



////////////////////////Element Properties///////////////////////////
    // <div id='content'><p>Some content</p></div>
    var element = document.getElementById('content');

    //tagName -> retrieve the name of tage of the element
    console.log(element.tagName);  //Output:"DIV"

    //id -> access or modify the id attribute
    console.log(element.id); //Output: "content"
    element.id = 'newId';
    console.log(element.id); //Output: "newId"

    //className -> same like id but with the class

    //innerHTML -> get or set the HTML content of an element
    console.log(element.innerHTML); // Output: "<p>Some content</p>"
    element.innerHTML = '<p>New Content</p>';

    //outerHTML -> get the HTML of the element including itself
    console.log(element.outerHTML); // Output: "<div id='content'><p>Some content</p></div>"

    //innerText -> get or set the text content of element, excluding hidden elements
    console.log(element.innerText)  // Output: "Some content"
    element.innerText = 'New content';

    //textContent -> get or set the text content of an element, including hidden elements
    console.log(element.textContent) // Output: "Some content"
    element.textContent = 'New Content';

    // attributes
    // children
    // childNodes
    // firstChild
    // lastChild
    // parentNode
    // nextSibling
    // previousSibling
    // style
    // dataset


    //////////////////////////Form Properties///////////////////////////

    // elements
    // length
    // action
    // method


    //////////////////////////Window Properties///////////////////////////

    // innerWidth
    // innerHeight
    // outerWidth
    // outerHeight
    // scrollX
    // scrollY
    // location
    // history
    // navigator

    //////////////////////////Common DOM Methods///////////////////////////
    //document methods

    getElementById('') //-> returns the element with specified id
    getElementsByClassName('className') // returns live HTMLCollection of elements with given class name
    getElementsByTagName(tagName) // Returns live HTMLCollection of elements with the given tag name
    querySelector(selector)  // returns the first element that matches CSS selector
    querySelectorAll(selector)  // returns static nodelist of elements that match the CSS selector
    createElement(tagName) // creates an element with the specified tag name
    createTextNode(text) // creates a new text node with the given text

    //element methods

    //appendChild(node) -> add a new child node to the end of the list of children of a specified parent node
    var parent = document.getElementById('parent');
    var newChild = document.createElement('div');
    newChild.textContent = 'New Child';
    parent.appendChild(newChild);

    // replaceChild -> replace an existing child node with a new node
    var parent = document.getElementById('parent')
    var newChild = document.createElement('div')
    newChild.textContent = 'New Child';
    var oldChild = document.getElementById('oldChild')
    parent.replaceChild(newChild, oldChild);

    // removeChild -> remove a child from the dom
    var parent = document.getElementById('parent')
    var child  = document.getElementById('child')
    parent.removeChild(child);

    // insertBefore(newNode, referenceNode)
    var parent = document.getElementById('parent');
    var newChild = document.createElement('div');
    newChild.textContent = 'New Child';
    var referenceNode = document.getElementById('referenceNode');
    parent.insertBefore(newChild, referenceNode);

    // cloneNode(deep)
    // setAttribute(name, value)
    // getAttribute(name)
    // removeAttribute(name)
    // hasAttribute(name)
    // classList.add(className)
    // classList.remove(className)
    // classList.toggle(className)