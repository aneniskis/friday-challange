let  progressBar = document.querySelector('.circle-progress');
let valueContainet = document.querySelector('.circle-value');

let progressValue = 0;
let progressValueEnd = 100;
let speed = 50;


let progress = setInterval(()=>{
    progressValue+=2;
    valueContainet.textContent = `${progressValue}%`
    if(valueContainet.textContent === "100%"){
        valueContainet.textContent = 'Updated!'
        valueContainet.classList.add('animation')
        progressBar.classList.add('animationBar')
    }
    // console.log(progress);
    progressBar.style.background = `conic-gradient(#02577A ${progressValue *3.6}deg, #c9c9c9 ${progressValue *3.6}deg)`
    if (progressValue ===progressValueEnd){
        clearInterval(progress)
    }
}, speed )