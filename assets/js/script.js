// const langEl = document.querySelector('.langwrap');
// const option = document.querySelectorAll('option');
// const navbarEl = document.querySelector('.navbar');
// const getstartedEl = document.querySelector('.getstarted');
// const heroEl = document.querySelector('.hero');
// const aboutEl = document.querySelector('.about');
// const featuresEl = document.querySelector('.features');
// const contactEl = document.querySelector('.contact');
// const footerEl = document.querySelector('.footer');
// // const descrEl = document.querySelector('.description');

// console.log(option)

// langEl.addEventListener("change",(e) =>{
//     // console.log("change")
//     console.log(e.target.value)
// } )

// option.forEach(el => {
//     console.log(el)
//     el.addEventListener('change', () => {
//         console.log("click")                               
//         langEl.querySelector('.active').classList.remove('active');
//         el.classList.add('active');

//         const attr = el.getAttribute('language');

//         navbarEl.textContent = data[attr].navbar;
//         getstartedEl.textContent = data[attr].getstarted;
//         heroEl.textContent = data[attr].hero;
//         aboutEl.textContent = data[attr].about;
//         featuresEl.textContent = data[attr].features;
//         contactEl.textContent = data[attr].contact;
//         footerEl.textContent = data[attr].footer;
//         // descrEl.textContent = data[attr].description;
//     });
// });


const langEl = document.querySelector('.langWrap');
const link = document.querySelectorAll('a');

// const appTitle = document.querySelector('.appTitle');
// const appDesc = document.querySelector('.appDesc');

const navbar1El = document.querySelector('.navbar1');
const navbar2El = document.querySelector('.navbar2');
const navbar3El = document.querySelector('.navbar3');
const navbar4El = document.querySelector('.navbar4');
const getstarted1El = document.querySelector('.getstarted1');
const hero1El = document.querySelector('.hero1');
const hero2El = document.querySelector('.hero2');
const getstarted2El = document.querySelector('.getstarted2');
const about1El = document.querySelector('.about1');
const about2El = document.querySelector('.about2');
const about3El = document.querySelector('.about3');
const about4El = document.querySelector('.about4');
const about5El = document.querySelector('.about5');
const about6El = document.querySelector('.about6');
const about7El = document.querySelector('.about7');
const about8El = document.querySelector('.about8');
const about9El = document.querySelector('.about9');
const about10El = document.querySelector('.about10');
const featEl = document.querySelector('.feat');
const features1El = document.querySelector('.features1');
const features2El = document.querySelector('.features2');
const features3El = document.querySelector('.features3');
const features4El = document.querySelector('.features4');
const features5El = document.querySelector('.features5');
const features6El = document.querySelector('.features6');
const features7El = document.querySelector('.features7');
const features8El = document.querySelector('.features8');
const features9El = document.querySelector('.features9');
const features10El = document.querySelector('.features10');
const features11El = document.querySelector('.features11');
const features12El = document.querySelector('.features12');
const features13El = document.querySelector('.features13');
const features14El = document.querySelector('.features14');
const contEl = document.querySelector('.cont');
const contact1El = document.querySelector('.contact1');
const contact2El = document.querySelector('.contact2');
const contact3El = document.querySelector('.contact3');
const contact4El = document.querySelector('.contact4');
const contact5El = document.querySelector('.contact5');
// const contact6El = document.querySelector('.contact6');
// const contact7El = document.querySelector('.contact7');
// const contact8El = document.querySelector('.contact8');
// const contact9El = document.querySelector('.contact9');
// const contact10El = document.querySelector('.contact10');
const footer1El = document.querySelector('.footer1');
const footer2El = document.querySelector('.footer2');
// const footer3El = document.querySelector('.footer3');
// const footer4El = document.querySelector('.footer4');

link.forEach(el => {
    el.addEventListener('click', () => {
        // langEl.querySelector('.active').classList.remove('active');
        // el.classList.add('active');
        console.log(el);

        const attr = el.getAttribute('language');
        console.log(attr);

        if(attr!=null)
        {
            langEl.querySelector('.active').classList.remove('active');
            el.classList.add('active');  
        }

        // appTitle.textContent = data[attr].appTitle;
        // appDesc.textContent = data[attr].appDesc;

    if(attr!=null)
    {    
        navbar1El.textContent = data[attr].navbar1;
        navbar2El.textContent = data[attr].navbar2;
        navbar3El.textContent = data[attr].navbar3;
        navbar4El.textContent = data[attr].navbar4;
        getstarted1El.textContent = data[attr].getstarted1;
        hero1El.textContent = data[attr].hero1;
        hero2El.textContent = data[attr].hero2;
        getstarted2El.textContent = data[attr].getstarted2;
        about1El.textContent = data[attr].about1;
        about2El.textContent = data[attr].about2;
        about3El.textContent = data[attr].about3;
        about4El.textContent = data[attr].about4;
        about5El.textContent = data[attr].about5;
        about6El.textContent = data[attr].about6;
        about7El.textContent = data[attr].about7;
        about8El.textContent = data[attr].about8;
        about9El.textContent = data[attr].about9;
        about10El.textContent = data[attr].about10;
        featEl.textContent = data[attr].feat;
        features1El.textContent = data[attr].features1;
        features2El.textContent = data[attr].features2;
        features3El.textContent = data[attr].features3;
        features4El.textContent = data[attr].features4;
        features5El.textContent = data[attr].features5;
        features6El.textContent = data[attr].features6;
        features7El.textContent = data[attr].features7;
        features8El.textContent = data[attr].features8;
        features9El.textContent = data[attr].features9;
        features10El.textContent = data[attr].features10;
        features11El.textContent = data[attr].features11;
        features12El.textContent = data[attr].features12;
        features13El.textContent = data[attr].features13;
        features14El.textContent = data[attr].features14;
        contEl.textContent = data[attr].cont;
        contact1El.textContent = data[attr].contact1;
        contact2El.textContent = data[attr].contact2;
        contact3El.textContent = data[attr].contact3;
        contact4El.textContent = data[attr].contact4;
        contact5El.textContent = data[attr].contact5;
        // contact6El.textContent = data[attr].contact6;
        // contact7El.textContent = data[attr].contact7;
        // contact8El.textContent = data[attr].contact8;
        // contact9El.textContent = data[attr].contact9;
        // contact10El.textContent = data[attr].contact10;
        footer1El.textContent = data[attr].footer1;
        footer2El.textContent = data[attr].footer2;
        // footer3El.textContent = data[attr].footer3;
        // footer4El.textContent = data[attr].footer4;
    }
    });
});