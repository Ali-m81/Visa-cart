let cart = document.querySelector('#cart');
let cart2 = document.querySelector('#cart2');
let cvv2 = document.querySelector('#cvv2');
let holders = document.querySelector('#holders')
let num = document.querySelector('#num-c')
let span_num = document.querySelector('#span-c')
let fullname = document.querySelector('#full-name')
let cvv = document.querySelector('#cvv-show')
let date = document.querySelector('#date-time')
let date2 = document.querySelector('#date')





date.addEventListener('input' , ()=>{
date2.innerHTML = date.value
})


num.addEventListener('input' , ()=>{


    let s = [];
    s.push(parseInt(num.value))
    span_num.innerHTML = s;
 } )


holders.addEventListener('input' , ()=>{
   
    
    fullname.innerHTML = holders.value
})

console.log(holders)


cvv2.addEventListener('focus' , ()=>{
cart.classList.add('cart1')
cart2.classList.add('cart2') 
cart.classList.remove('cart3')
cart2.classList.remove('cart4') 

})

cvv2.addEventListener('blur' , ()=>{
    cart.classList.add('cart3')
    cart2.classList.add('cart4') 
    cart.classList.remove('cart1')
cart2.classList.remove('cart2') 
    })


cvv2.addEventListener('input' , ()=>{
    cvv.innerHTML = cvv2.value
})

