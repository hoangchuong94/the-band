const modal = document.querySelector('.modal');
const buyTicketBtns = document.querySelectorAll('.infor-tour .btn');
const btnModalClose = document.querySelector('.modal-close');
const modalContainer = document.querySelector('.modal-container');
const bars = document.querySelector('.mobile-menu');
const header = document.getElementById('header');
const navLi = document.querySelectorAll('#nav > li');
const objHeader  = getComputedStyle(header);


buyTicketBtns.forEach(element => {
    element.addEventListener('click', function() {
        modal.classList.add('show-modal');
    });
})

btnModalClose.addEventListener('click', function() {
    modal.classList.remove('show-modal');
})

modal.addEventListener('click', function(event) {
    modal.classList.remove('show-modal');
})

modalContainer.addEventListener('click', function(event) {
    event.stopPropagation();
})

bars.addEventListener('click', function() {
    
    if(objHeader.height === '46.5px') {
        header.style.height = 'auto';
    }else {
        header.style.height = '46.5px';
    }    
}) 

navLi.forEach(element => {
    element.addEventListener('click', function() {
        header.style.height = '46.5px';
    })
});