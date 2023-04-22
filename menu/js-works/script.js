'use strict'

const allLines = document.querySelectorAll('.li1');
const moreInfoButton = document.querySelector('.link');
const arrow = document.querySelector('.first-arrow');
const content1= `<a href="https://developer.mozilla.org/en-US/docs/Glossary/Hoisting" target="_blank">Learn more about Hoisting</a>`;
const content2= `<a href="https://ui.dev/primitive-vs-reference-values-in-javascript" target="_blank">Learn more about Primitive vs Reference Values</a>`;
const content3= `<a href="https://blog.bitsrc.io/arrow-functions-vs-regular-functions-in-javascript-458ccd863bc1" target="_blank">Learn more about Arrow Functions</a>`;
const content4= `<a href="https://developer.mozilla.org/en-US/docs/Glossary/Scope" target="_blank">Learn more about Scoping</a>`;
const content5= `<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this" target="_blank">Learn more about 'this'</a>`;
const codeDiv = document.querySelector('.codes');
console.log(arrow);

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
          switch(entry.target.textContent) {
            case "var a = 1;":
              moreInfoButton.innerHTML = content1;
              break;
            case "// Example":
              moreInfoButton.innerHTML = content2;
              break;
            case "obj1.findAge();":
              moreInfoButton.innerHTML = content3;
              break;
            case "Methods like call(), apply(), and bind() can refer this to any object.":
              moreInfoButton.innerHTML = content4;
              break;
            case "//undefined - In Strict Mode":
              moreInfoButton.innerHTML = content5;
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