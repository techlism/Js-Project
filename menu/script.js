const allDivs = document.querySelectorAll('.div');

const [div1,div2,div3,div4,div5,div6]=[...allDivs];
console.log(div1);

const originalDiv1 = `<span class="topic-name">JavaScript Basics</span>`;
const originalDiv2 =`<span class="topic-name">DOM</span>`;
const originalDiv3 = `<span class="topic-name">How JavaScript Works from inside ?</span></div>`;
const originalDiv4 = `<span class="topic-name">Object Oriented Programming</span>`;
const originalDiv5 = `<span class="topic-name">Data Structures</span>`;
const originalDiv6 = `<span class="topic-name">Asynchronous JavaScript</span>`;

const contentDiv1 = `<span class="topic-name"><a href="basics/index.html">Arrays, functions, fundamentals, loops, objects and more..</a></span>`;
const contentDiv2 = `<span class="topic-name"><a href="dom/index.html">Selecting, creating elements, manipulating and more..</a></span>`;
const contentDiv3 = `<span class="topic-name"><a href="js-works/index.html">Hoisting, scoping, this keyword and more..</a></span>`;
const contentDiv4 = `<span class="topic-name"><a href="oops/index.html">JavaScript classes, inheritance, prototype and OOPs pillars</a></span>`;
const contentDiv5 = `<span class="topic-name"><a href="datastruct/index.html">Modern Operators, maps, sets, optional chaining etc.</a></span>`;
const contentDiv6 = `<span class="topic-name"><a href="ajax/index.html">Async await, AJAX etc. </a></span>`;

div1.addEventListener('mouseenter',function(){
    div1.innerHTML=contentDiv1;
    div1.classList.add('topic-black');
    div1.style.scale='104%';
});

div1.addEventListener('mouseleave',function(){
    div1.innerHTML=originalDiv1;
    div1.classList.remove('topic-black');
    div1.style.scale='100%';
});

div2.addEventListener('mouseenter',function(){
    div2.innerHTML=contentDiv2;
    div2.classList.add('topic-black');
    div2.style.scale='104%';
});

div2.addEventListener('mouseleave',function(){
    div2.innerHTML=originalDiv2;
    div2.classList.remove('topic-black');
    div2.style.scale='100%';
});

div3.addEventListener('mouseenter',function(){
    div3.innerHTML=contentDiv3;
    div3.classList.add('topic-black');
    div3.style.scale='104%';
});

div3.addEventListener('mouseleave',function(){
    div3.innerHTML=originalDiv3;
    div3.classList.remove('topic-black');
    div3.style.scale='100%';
});

div4.addEventListener('mouseenter',function(){
    div4.innerHTML=contentDiv4;
    div4.classList.add('topic-black');
    div4.style.scale='104%';
});

div4.addEventListener('mouseleave',function(){
    div4.innerHTML=originalDiv4;
    div4.classList.remove('topic-black');
    div4.style.scale='100%';
});

div5.addEventListener('mouseenter',function(){
    div5.innerHTML=contentDiv5;
    div5.classList.add('topic-black');
    div5.style.scale='104%';
});

div5.addEventListener('mouseleave',function(){
    div5.innerHTML=originalDiv5;
    div5.classList.remove('topic-black');
    div5.style.scale='100%';
});

div6.addEventListener('mouseenter',function(){
    div6.innerHTML=contentDiv6;
    div6.classList.add('topic-black');
    div6.style.scale='104%';
});

div6.addEventListener('mouseleave',function(){
    div6.innerHTML=originalDiv6;
    div6.classList.remove('topic-black');
    div6.style.scale='100%';
});