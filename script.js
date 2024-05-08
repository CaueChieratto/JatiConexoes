document.getElementsByClassName("esconder")[0].onclick = function() { clicar(); };

function clicar() {
    const menuOptions=document.getElementsByClassName("menu-options");
    const icone=document.getElementsByClassName("fas")[0];
    var classesIcone=icone.classList;
    if (classesIcone.contains("fa-chevron-down")){
         icone.classList.remove("fa-chevron-down");
            icone.classList.add("fa-chevron-up");
    }
    else {
            icone.classList.remove("fa-chevron-up"); 
            icone.classList .add("fa-chevron-down");
    }
    var menulista=[...menuOptions];
    menulista.forEach(element => {
        const classes=element.classList;
        if(classes.contains("closed")){
            classes.remove("closed")
        }
        else{
            classes.add("closed")
            
        }
    });
}

