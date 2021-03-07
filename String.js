function pageLoad(){
    "use strict";
    let ok = document.getElementById("ok");
    ok.onclick = stringtoarray;
}

function stringtoarray(){
    let str = document.getElementById("text");
    let c = str.innerHTML;
    let array = c.split(' ');
    
    alert(array);
       
}

window.onload = pageLoad;


