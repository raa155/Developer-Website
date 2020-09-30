

//create side bar functionality by toggling active class when the button is clicked.

const btn = document.getElementById('mobile-btn');
const nav = document.getElementById('side-nav');


btn.addEventListener('click', ()=>{
    nav.classList.toggle('active');
    btn.classList.toggle('active');
  
})

//arrow down functionality
const arrow = document.getElementById('arrow');
const intro = document.getElementById('intro-section');
arrow.addEventListener('click', ()=>{
  intro.scrollIntoView(
    {
      behavior: 'smooth'
    }
  );
})




// Auto-write text for header functionality

const header = 'HI IM ROMAN!';
let index1 = 0;
function writeHeader()
{
  document.getElementById('header-text').innerText = header.slice(0, index1);
  index1++;
}
setInterval(writeHeader, 75);

const description = 'Developer .      Designer .       Creator                ';
let index = 0;
function writeDescription()
{
    document.getElementById('description').innerText = description.slice(0, index);
    index++;
    
}

setTimeout(()=>{
  setInterval(writeDescription, 50);
}, 1300)

// Added smooth scroll to top functionality 

const scrollToTop = () => {
  const c = document.documentElement.scrollTop || document.body.scrollTop;
  if (c > 0) {
    window.requestAnimationFrame(scrollToTop);
    window.scrollTo(0, c - c / 30);
  }
};

const scrollUp = document.getElementById('scroll-up');


scrollUp.addEventListener('click', ()=>{
  scrollToTop();
})
