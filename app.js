
    
const element = document.getElementById("prof");
element.addEventListener("click", myfunction);

function myfunction() {
document.getElementById("demo").innerHTML = "Already on Page";
return fun();
}

function fun() {
setTimeout(() => {
    document.getElementById("demo").style.display = "none";
}, 2000);
}


   
