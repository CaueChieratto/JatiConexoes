document.getElementsByClassName("lista")[0].onclick = function() { clicar(0); };
document.getElementsByClassName("lista")[1].onclick = function() { clicar(1); };
document.getElementsByClassName("lista")[2].onclick = function() { clicar(2); };
document.getElementsByClassName("lista")[3].onclick = function() { clicar(3); };
document.getElementsByClassName("lista")[4].onclick = function() { clicar(4); };
document.getElementsByClassName("lista")[5].onclick = function() { clicar(5); };
document.getElementsByClassName("lista")[6].onclick = function() { clicar(6); };

function clicar(numero) {
    const icone=document.getElementsByClassName("fas")[numero];
    const lista=document.getElementsByClassName("lista-produtos")[numero];
    if (lista){
        const classes=lista.classList;
        if(classes.contains("closed")){
            classes.remove("closed")
            icone.classList.remove("fa-chevron-down")
            icone.classList.add("fa-chevron-up")
        }
        else{
            classes.add("closed")
            icone.classList.remove("fa-chevron-up")     
            icone.classList.add("fa-chevron-down")     
        }
    }
}

