let hamMenu = document.querySelector(".menuContainer");
let hamCont = document.querySelector(".hideMenu");
hamMenu.addEventListener('click', ()=>{
    hamMenu.classList.toggle('close');
    hamCont.classList.toggle('hideMenu');
});
let inputs = document.querySelectorAll(".style");
for(let i = 0; i<inputs.length;i++){
    inputs[i].addEventListener('focus', ()=>{
    console.log(inputs[i])
    inputs[i].style.borderLeft = '.2vmax solid rgb(252, 191, 24)';
    });
    inputs[i].addEventListener('blur', ()=>{
        console.log(inputs[i])
        inputs[i].style.borderLeft = '0';
    });
}


let rightbtn = document.querySelector(".rightBtn");
let phone = document.querySelector(".phone");
let aboutApp = document.querySelector(".aboutApp");
let ptwo = document.querySelector(".pageTwo");
let pthree = document.querySelector(".pageThree");

let count = 1;
rightbtn.addEventListener('click', ()=>{
    phone.style.marginLeft = '-70%';
    aboutApp.style.opacity = '0';
    aboutApp.style.opacity = '0';
    count++;
    
    if(count === 4){
        phone.style.marginLeft = '0';
        pthree.style.opacity = '0';        
        aboutApp.style.opacity = '1';
        count = 1;
    }
    if(count === 2){
        ptwo.style.opacity = '1';        
    }
    if(count === 3){
        ptwo.style.opacity = '0';        
        pthree.style.opacity = '1';        
    }
    console.log('page: '+count);
});


let body = document.querySelector('body');


//code for checking scroll.....src: https://stackoverflow.com/questions/487073/how-to-check-if-element-is-visible-after-scrolling

// function isScrolledIntoView(el) {
//     var rect = el.getBoundingClientRect();
//     var elemTop = rect.top;
//     var elemBottom = rect.bottom;

//     // Only completely visible elements return true:
//     var isVisible = (elemTop >= 0) && (elemBottom <= window.innerHeight);
//     //for element to be visible, element's rect.top must not be less than or equal to 0, and element's rect.bottom must not be less than the windows height...

//     // Partially visible elements return true:
//     //isVisible = elemTop < window.innerHeight && elemBottom >= 0;
//     return isVisible;
// }

//remember to add event Listener o!!!







