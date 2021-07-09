document.querySelector(".set-btn").addEventListener("click", setListItem);

var count = 0;
function setListItem() {

    var item = document.querySelector(".textField").value;

    var i = document.createElement("li");
    i.innerText = item;

    document.querySelector(".list").appendChild(i);

    i.addEventListener("dblclick", deleteElement);

    count++;

}

document.querySelector(".empty-btn").addEventListener("click", emptyList);

function emptyList(){

    var e = document.querySelectorAll("li");
    for(let i=0; i<count; i++){

        e[i].remove();
    }
    
}

var arr = [];
function deleteElement(){

    this.style.textDecorationLine = "line-through";
    this.style.textDecorationColor = "red";
    arr.push(this.innerText);

}

document.querySelector(".clear-btn").addEventListener("click", clearCompleted);

function clearCompleted(){

    var e = document.querySelectorAll("li");
   
    for(let i=0; i<arr.length; i++){

        for(let j=0; j<e.length; j++){

            if(e[j].innerText === arr[i]){

                var ind = j;
                break;
            }
        }

        e[ind].remove();
    }
    
    arr = [];

}


document.querySelector(".save-btn").addEventListener("click", saveList);

var saveListItem = [];
function saveList(){

    var saveListItem = document.querySelectorAll("li");
    loadingEvent();

}

window.addEventListener("load", loadingEvent);

function loadingEvent(){

    
   for(let i=0; i<saveListItem.length; i++){

        document.querySelector(".list").appendChild(saveListItem[i]);
        
        
    }
    
}