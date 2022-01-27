
var input = document.querySelector("input")
var btn = document.querySelector("button")
var todo = document.querySelector(".todos")
btn.addEventListener("click",addFunction)
var count=0
var k

function addFunction(){
    if (input.value==""){
        input.value=""

    }
    else{
         k=document.createElement("p")
        k.setAttribute("key",count++)
        todo.appendChild(k)
        k.innerHTML = input.value;
        input.value=""
    }
}
todo.addEventListener("click",removepara)
function removepara(e){
    todo.removeChild(e.target)
}


