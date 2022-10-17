console.log(document.querySelectorAll("li"));

document.querySelector('.txt1').addEventListener(
    "click", 
    add
)

document.querySelector(".txt1").innerText ="un superbe chat !"


function add(){
    document.querySelector("ul>li").classList.add("logoDeux");
}