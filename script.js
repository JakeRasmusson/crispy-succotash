
// //Node.CreateElement
// let parentEle = document.getElementById('main');
// let oldPara = document.getElementById('text');

// let newPara = document.createElement('p');
// let newContent = document.createTextNode('I am taking over this paragraph.  All your base are belong to us!');
// newPara.appendChild(newContent);
// parentEle.replaceChild(newPara,oldPara);



// Node.appendChild()
let myList = document.querySelector('ol');
let newList = document.createElement('li');
newList.textContent = 'Wombo Combo!';
myList.appendChild(newList);

//node.insertbefore
// let beforeParentList = document.querySelector('#parentInsert > li');
// let newBeforeListItem = document.createElement('li');
// newBeforeListItem.textContent = 'Test 4';
// let list = document.querySelector('parentInsert');
// list.insertBefore(newBeforeListItem, beforeParentList);


//Replace Child
let parentList = document.querySelector('#parentInsert');
let childList = document.querySelector('#parentInsert > li');
let newListItem = document.createElement('li');
newListItem.textContent = 'new list';
parentList.replaceChild(newListItem, childList);



//Remove Child
let removePara = document.querySelector('#removeChild > ul');
let removedChild = document.querySelector('#removeChild > ul > li');
removePara.removeChild(removedChild);


//Set Attribute
let activeList = document.querySelector('.set-attribute > ol > li');
activeList.setAttribute('void', '');


//Get Attribute
let a = document.querySelector('.get-attribute > a');
a.getAttribute('href');
document.write(a);