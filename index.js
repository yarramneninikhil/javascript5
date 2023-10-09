//parentNode
// const itemList = document.querySelector("#items");
// itemList.parentNode.style.backgroundColor = "red";

//parentElement
const itemList = document.querySelector("#items");
// itemList.parentElement.style.backgroundColor = "red";

//childNOdes
// console.log(itemList.childNodes);

//children
// console.log(itemList.children);
// itemList.children[1].style.backgroundColor = "yellow";

//fist
// itemList.firstChild;

//firstElementChild

// itemList.firstElementChild.textContent = "hello 1";

//lastChild
// console.log(itemList.lastChild);

//last
// itemList.lastElementChild.textContent = "Hello 4";

//nextSibling
// console.log(itemList.nextSibling);

//nextElementSibling
// itemList.nextElementSibling.textContent = "welcome";

// previousSibling
// console.log(itemList.nextSibling);

//previousElementSibling
// itemList.previousElementSibling.style.backgroundColor = "red";

//create
// const ele = document.createElement("div");
// ele.classList.add("demo");
// ele.id = "demo1";
// ele.innerText = "Hi this Nikhil";
// document.body.append(ele);
// console.log(ele);

const heading = document.querySelector("header .container");
heading.before("HEllo");
const item = document.querySelector(".list-group-item");
item.before("HELLo");
