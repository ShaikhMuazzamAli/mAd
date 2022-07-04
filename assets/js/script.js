const langEl = document.querySelector('.langwrap');
const option = document.querySelectorAll('option');
const navbarEl = document.querySelector('.navbar');
const getstartedEl = document.querySelector('.getstarted');
const heroEl = document.querySelector('.hero');
const aboutEl = document.querySelector('.about');
const featuresEl = document.querySelector('.features');
const contactEl = document.querySelector('.contact');
const footerEl = document.querySelector('.footer');
// const descrEl = document.querySelector('.description');

console.log(option)

langEl.addEventListener("change",(e) =>{
    // console.log("change")
    console.log(e.target.value)
} )

option.forEach(el => {
    console.log(el)
    el.addEventListener('change', () => {
        console.log("click")                               
        langEl.querySelector('.active').classList.remove('active');
        el.classList.add('active');

        const attr = el.getAttribute('language');

        navbarEl.textContent = data[attr].navbar;
        getstartedEl.textContent = data[attr].getstarted;
        heroEl.textContent = data[attr].hero;
        aboutEl.textContent = data[attr].about;
        featuresEl.textContent = data[attr].features;
        contactEl.textContent = data[attr].contact;
        footerEl.textContent = data[attr].footer;
        // descrEl.textContent = data[attr].description;
    });
});