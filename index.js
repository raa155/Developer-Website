

//create side bar functionality by toggling active class when the button is clicked.

const btn = document.getElementById('mobile-btn');
const nav = document.getElementById('side-nav');


btn.addEventListener('click', ()=>{
    nav.classList.toggle('active');
    btn.classList.toggle('active');
  
})





// Auto-write text for header functionality

const description = 'Developer .      Designer .       Creator                ';
let index = 0;
function writeDescription()
{
    document.getElementById('description').innerText = description.slice(0, index);
    index++;
    
}


setInterval(writeDescription, 50);



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
