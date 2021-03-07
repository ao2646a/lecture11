(function() {
    "use strict";
    //code here
    window.onload = function () {
        let button = document.getElementById('ok');
        let element = document.getElementById('text');
        button.addEventListener("click",function(){ 
        element.innerHTML = "Booyah";
        })
    };
 })();

