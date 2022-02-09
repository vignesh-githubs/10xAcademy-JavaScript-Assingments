var sucess = document.getElementById("Success")
var reject = document.getElementById("reject")
var ul = document.getElementById("ul")
// count=1
// 
// function getDetails(){

//  var p=document.createElement("li")
//  p.setAttribute("key",count++)
//  ul.appendChild(p)

const fetchPromise = fetch("https://jsonplaceholder.typicode.com/todos")
fetchPromise.then((response) => { return response.json() })
    .then((data) => {

        sucessfulFun(data);

    }).catch((error) => console.log("no data found"))



function sucessfulFun(data) {
    addEventListener("click", getDetails)


    function getDetails(e) {
        if (e.target == sucess) {
            var pl = data.filter((sucessful) => sucessful.completed == true)
            pl.map((arr) => { render(arr) })

        }
        else if (e.target == reject) {
            var pl = data.filter((sucessful) => sucessful.completed == false)
            pl.map((arr) => { render(arr) })

        }


    }
    let count = 0
    function render(data) {
        var p = document.createElement("li")
        var pempty = document.createElement("p")
        p.setAttribute("key", ++count)
        pempty.setAttribute("id", ++count)
        p.innerHTML = ` userid is : ${data.userId} id: ${data.id} title: ${data.title}  status: ${data.completed} `
        pempty.innerHTML = "  "
        ul.appendChild(p)
        ul.appendChild(pempty)


    }



    //
    // var ul=document.getElementById("ul")
    // sucess.addEventListener("click",fetching)
    // function fetching() {
    //     console.log("testing")
    //     segrigatingSuccess.map((displaying)=>console.log(displaying.userId,displaying.title))
    //     function mapping(a,b){
    //         ul.innerHTML=`<li> ${a} ${b} </li>`

    //     }
    //     // https://forms.gle/hP6EqJWh9cdzQrRT7
    //     // https://jsonplaceholder.typicode.com/todos
    //       console.log("")
    // }



























    // var input = document.querySelector("input")
    // var btn = document.querySelector("button")
    // var todo = document.querySelector(".todos")
    // btn.addEventListener("click",addFunction)
    // var count=0
    // var k

    // function addFunction(){
    //     if (input.value==""){
    //         input.value=""

    //     }
    //     else{
    //          k=document.createElement("p")
    //         k.setAttribute("key",count++)
    //         todo.appendChild(k)
    //         k.innerHTML = input.value;
    //         input.value=""
    //     }
    // }
    // todo.addEventListener("click",removepara)
    // function removepara(e){
    //     todo.removeChild(e.target)
    // }

}
