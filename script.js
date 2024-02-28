const inputBox = document.getElementById("input-box");
const listContaier = document.getElementById("list-container");

function clickEnter(event){
    if(event.key === 'Enter'){
        addTask();
    }
}

function addTask(){
    if(inputBox.value === ''){
        alert("You must write something");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContaier.appendChild(li);

        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputBox.value = "";
    saveData();
}

listContaier.addEventListener("click", function(e){
    if(e.target.tagName ==="LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
}, false);



function saveData(){
    localStorage.setItem("data", listContaier.innerHTML);
}

function showTask(){
    listContaier.innerHTML = localStorage.getItem("data");
}
showTask();