let list = [];


function addName() {

let newName = document.querySelector("#name");
let val = newName.value;
console.log(val);
list.push(val);
newName.value = "";

}




function sign(listItem) {
listItem.style.textDecoration = "line-through";

}



function dispListBook() {

let dispElem = document.querySelectorAll(".dispB");

dispElem[0].innerHTML = "<ul>";


for(let product of list) {
dispElem[0].innerHTML += '<li id="' + product + '" onclick = "sign('+product+')">' + product + '</li>';
}

dispElem[0].innerHTML += "</ul>";

}