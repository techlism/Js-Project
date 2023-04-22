'use strict'

const allLines = document.querySelectorAll('.li1');
const moreInfoButton = document.querySelector('.link');
const arrow = document.querySelector('.first-arrow');
const content1= `<a href="https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Introduction" target="_blank">Learn more about DOM</a>`;
const content2= `<a href="projects/projects.html" target="_blank">Check out the projects and GitHub repo.</a>`;
const codeDiv = document.querySelector('.codes');

// for (const line of allLines) {
//     if(line.textContent==="//Template literal"){
//         console.log("found");
//     }
// }

// const changeHref = function(entries,observer){
//     console.log(typeof(entries));
//     const entry = entries[0];
//     if(!entry.isIntersecting) return;
//     const textContent = entry.target.textContent;
//     console.log(textContent);
// }

console.log(arrow.getBoundingClientRect());

const changeHref = function(entries, observer) {
    for(const entry of entries){
        if (entry.isIntersecting) {
          console.log(entry.target.textContent);
          if(entry.target.textContent==="// If we really want to insert same element twice then we have a method for that.") moreInfoButton.innerHTML=content1;
          else if(entry.target.textContent==="// Data Attributes") moreInfoButton.innerHTML=content2;
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