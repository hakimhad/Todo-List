const form = document.querySelector("form");

var input = document.querySelector("input");
const list = document.getElementById("list");
const li = document.querySelectorAll('li')
const p = document.createElement("p");
const item = document.getElementsByClassName("item");
const main = document.getElementById("main");



let div = document.querySelector("div");
listItem = document.getElementsByClassName('list-item')
const checkBtn = document.getElementsByClassName('check-btn')
// debugger
let inputLength = input.value.length
input.focus();
// noItemMsg()

//affichage du message "pas de tache"
function noItemMsg() {
    if (list.childElementCount  === 0){
       p.appendChild(document.createTextNode("You are up to date ;-)"));
       div.appendChild(p);
       p.classList.add("paragraphe");
       }
}

form.addEventListener("submit",(e =>{
    e.preventDefault();
    list.innerHTML += `<div><span>${input.value} </span><span class="trash-btn material-icons ">delete</span></li></div>`;
    input.value = "";
    p.textContent ="";
    p.remove();

    storage();
    })
)

        // Injection/suppression class "done"
list.addEventListener('click', (e) =>{
    const listParent = e.target.parentElement;
        
    if (e.target.classList[0] === "trash-btn"){
        listParent.remove();
        storage();
        if (main.children !=p ){
            noItemMsg()};

    }if (listParent === list){
        e.target.classList.toggle('done-div');
        e.target.firstChild.classList.toggle('done-text');
        // 
        return;

    }else{
        e.target.parentElement.classList.toggle('done-div');
        e.target.classList.toggle('done-text');
        input.value = "";
        storage();
    }
})

    // mise en memoire
function storage() {
  window.localStorage.toDoList = list.innerHTML;
}
 //affichage du message "pas de tache"
 function noItemMsg() {
     if (list.childElementCount  === 0){
        p.appendChild(document.createTextNode("You are up to date! ;-)"));
        div.appendChild(p);
        p.classList.add("paragraphe");
        }
}

//recupere les données en memoire
(function getValues() { 
    if (!window.localStorage.toDoList) {
      noItemMsg();
    } else {
      list.innerHTML = window.localStorage.toDoList;
    }
  })()
