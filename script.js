function inicio (){
    document.getElementById("btn").addEventListener("click",  clic, false);
}
function clic (){
    alert("hola Alicia");
}

window.addEventListener("load", inicio, false);
