// <h1 id="title" class="heading"> DOM Learning on Chai aur code </h1>
document.getElementById('title') // we shall get everything on the first line
document.getElementById('title').id // 'title'

document.getElementById('title').class // undefined
document.getElementById('title').className // 'heading',  behind the scenes, document class ko className samajhta hai

document.getElementById('title').getAttribute('id') // title
document.getElementById('title').getAttribute('class') // heading

document.getElementById('title').setAttribute('class', 'newHeading') // <h1 id="title" class="newHeading"> DOM Learning on Chai aur code </h1>
document.getElementById('title').setAttribute('class', 'heading newHeading') // class = "heading newHeading"

const title = document.getElementById('title');
// u can do anything with it now wrt styling
title.style.backgroundColor = 'green'
title.style.padding = '15px'
title.style.borderRadius = '12px'

// to access innerContent, i.e.-> DOM Learning on Chai aur code
// <h1 id="title" class="heading"> DOM Learning on Chai aur code <span style='display: none;'>test text</span> </h1>
title.textContent //DOM Learning on Chai aur code test text
title.innerText   //DOM Learning on Chai aur code
title.innerHTML   //DOM Learning on Chai aur code <span style='display: none;'>test text</span>

// types of querySelector
document.getElementById('title')
document.getElementsByClassName('heading')
document.querySelector('h1'); /* first h1 */   document.querySelector('#title');   document.querySelector('.heading')
document.querySelector('input[type="password"]');     document.querySelector('p:first-child')
document.querySelectorAll('h1') // all h1

/*
<ul>
   <li>one</li>
   <li>two</li>
   <li>three</li>
</ul>
*/
const myul = document.querySelector('ul')
const one = myul.querySelector('li')
one.style.backgroundColor = "green" // one background will be green

// querySelectorAll will give you a nodeList of all the elements
const tempLi = document.querySelectorAll('li')
// tempLi.style.color = 'green', error
tempLi[0].style.color = 'green' // one background will be green
tempLi.forEach((l)=>{l.style.green = 'green'}) // all (one,two,three will be green)

// nodelist only has 'forEach', not 'map' unlike array

const tempClassList = document.getElementsByClassName('list-item') //getElementsByClassName will return HTMLCollection
Array.from(tempClassList)  // converting HTMLCollection to array