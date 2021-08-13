


var image=document.getElementById("image");

window.addEventListener("scroll",function(){

    if(this.scrollY>=500){
        image.style.display="block"
    }else{
        image.style.display="none"
    }
})

image.addEventListener("click",function(){
    window.scrollTo(0,0);
})









/*
window.onscroll=function(){
    "use strict";

    if(window.scrollTo(0, 500)){
        image.classList.remove("none");
    }else{
        image.classList.add("none");
    }
}
*/
/*
window.onscroll=function(){

    if(window.scrollTo(0, 500) >= 100){
        image.classList.remove("none");
    }else{
        image.classList.add("none");
    }
}*/
/*
image.addEventListener("click",function(){
    document.body.scrollTop = 0;

    console.log(document.body.scrollTop)
})*/