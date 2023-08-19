let cartToggle=document.getElementById('cart');
let side_value=document.getElementById('sidebar')

cartToggle.addEventListener('click',()=>{
 console.log("yes")
    if(side_value.classList.contains('isOpen')){
        side_value.classList.remove('isOpen');
    }else{
        side_value.classList.add('isOpen');
    }
})