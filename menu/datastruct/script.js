'use strict'

const allLines = document.querySelectorAll('.li1');
const moreInfoButton = document.querySelector('.link');
const arrow = document.querySelector('.first-arrow');
const content1= `<a href="projects/projects.html" target="_blank">Click to see all the links.</a>`;
const content2 =`<a href="#">Link to Repos below 👇</a>`;

const codeDiv = document.querySelector('.codes');



const scroll=function(){
  if(moreInfoButton.textContent==="Link to Repos below 👇"){
    window.scrollTo({
      top:codeDiv.offsetHeight,
      behavior:"smooth"
      
    });
  }
}

moreInfoButton.addEventListener('click',scroll);

console.log(arrow.getBoundingClientRect());

const changeHref = function(entries, observer) {
    for(const entry of entries){
        if (entry.isIntersecting) {
          switch(entry.target.textContent) {
            case "//Nullish Coalescing":
              moreInfoButton.innerHTML = content1;
              break;
              case "// Bind method (More Important)":
                moreInfoButton.innerHTML = content2;
              break;
          }
        }
    };
}
  
const hrefObserver = new IntersectionObserver(changeHref,{
    root:null,
    rootMargin:`${arrow.getBoundingClientRect().top}px`,
    threshold:1
});
  
allLines.forEach(function(line){
    hrefObserver.observe(line);
});