function inicio (){
    document.getElementById("btn").addEventListener("click",  clic, false);
}
function clic (){    
        alert("La idea seria lanzar las capturas de cada ejercicio con su texto en una nueva ventana");     
}
window.addEventListener("load", inicio, false);
