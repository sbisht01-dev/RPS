
//***********window on load is used because the script is executes before DOM is fully loaded 
//***********that's why it returns null 
window.onload = function(){
    document.querySelector(".logo").addEventListener("mouseover",function(){
        
       var el =  document.getElementsByClassName("logo")
       el.remove()
    })
}


function remove(){
    var element = document.getElementsByClassName("logo");
    element.remove();
}