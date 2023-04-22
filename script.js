const startButton = document.querySelector('button');
const body = document.querySelector('body');

// const changeGradient = function(){
//     const original = 43;
//     let degree = Math.floor(Math.random() * 180);
//     const color = `linear-gradient(${degree}deg, #4158D0 0%, #C850C0 46%, #FFCC70 100%)`;
//     startButton.style.backgroundImage=color;
// }
// startButton.addEventListener('click',changeGradient);

startButton.addEventListener('mouseenter',function(){
    startButton.style.scale='102%';
});

startButton.addEventListener('mouseleave',function(){
    startButton.style.scale='100%';    
});

