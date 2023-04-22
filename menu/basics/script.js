'use strict'

const allLines = document.querySelectorAll('.li1');
const moreInfoButton = document.querySelector('.link');
const arrow = document.querySelector('.first-arrow');
const content1= `<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals" target="_blank">Learn more about Template Literals</a>`;
const content2= `<a href="https://www.w3schools.com/js/js_type_conversion.asp" target="_blank">Learn more about Type Conversion</a>`;
const content3= `<a href="https://medium.com/theleanprogrammer/type-conversion-and-coercion-8974afe03b85" target="_blank">Learn more about Type Coercion</a>`;
const content4= `<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/Expression_statement" target="_blank">Learn more Expression and Statements</a>`;
const content5= `<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array" target="_blank">Learn more about Arrays</a>`;
const content6= `<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions" target="_blank">Learn more about Functions</a>`;
const content7= `<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration" target="_blank">Learn more about Loops</a>`;
const content8= `<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Working_with_objects" target="_blank">Learn more about Objects</a>`;
const content9= `<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode" target="_blank">Learn more about 'use strict'</a>`;
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
            case "//Template literal":
              moreInfoButton.innerHTML = content1;
              break;
            case "/* Type Conversion */":
              moreInfoButton.innerHTML = content2;
              break;
            case "//Implicit Conversion (coercion)":
              moreInfoButton.innerHTML = content3;
              break;
            case "/* Statements and Expressions */":
              moreInfoButton.innerHTML = content4;
              break;
            case "// Arrays":
              moreInfoButton.innerHTML = content5;
              break;
            case "// Functions (types and features)":
              moreInfoButton.innerHTML = content6;
              break;
            case "// Loops":
              moreInfoButton.innerHTML = content7;
              break;
            case "//1.Objects are more descriptive.":
              moreInfoButton.innerHTML = content8;
              break;
            case "// Why we use 'use strict'":
              moreInfoButton.innerHTML = content9;
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