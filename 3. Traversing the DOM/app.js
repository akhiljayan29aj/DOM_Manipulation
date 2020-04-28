let val;

const list = document.querySelector('ul.collection');
const listItem = document.querySelector('li.collection-item:first-child');

val = listItem;
val = list;

// Get child nodes
val = list.childNodes; // this will give us a node list
val = list.childNodes[0];
val = list.childNodes[0].nodeName;
val = list.childNodes[0].nodeType;

// nodeType
// 1 - Element
// 2 - Attribute (deprecated)
// 3 - Text node
// 8 - Comment
// 9 - Document itself
// 10 - Doctype


//Get children element nodes
val = list.children; //this will give us a html collection
val = list.children[0]; 
val.textContent = 'hello';
// Children of children
val = list.children[3].children[0];
val.id = 'test-link';

// First Child
val = list.firstChild; //this will give you the first node
val = list.firstElementChild; //this will give you the first element.

// Last Child
val = list.lastChild; //this will give you the last node
val = list.lastElementChild; //this will give you the last element.

// Count child element
val = list.childElementCount;

// Get parent node
val = listItem.parentNode;
val = listItem.parentElement;
val = listItem.parentElement.parentElement;

// Get next Sibling
val = listItem.nextSibling; //node
val = listItem.nextElementSibling; //element
val = listItem.nextElementSibling.nextElementSibling;

// Get previous Sibling
val = listItem.previousSibling; //node
val = listItem.previousElementSibling; //element
val = listItem.nextElementSibling.nextElementSibling.previousElementSibling;

console.log(val);