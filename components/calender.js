const date = new Date();
console.log(date);

const renderCalendet = ()=> { 
    const months = [ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
date.setDate(7)

const monthdays = document.querySelector('.days')
const lastDay = new Date(date.getFullYear(),date.getMonth()+1,0).getDate()
console.log(lastDay);

const firstdayindex = date.getDay();
console.log(firstdayindex);

const prevlastday =  new Date(date.getFullYear(),date.getMonth(),0).getDate()
console.log(prevlastday);
const lastdayindex =  new Date(date.getFullYear(),date.getMonth()+1,0).getDay();
console.log(lastdayindex);


const nextdays = 7 - lastdayindex 

document.getElementById("1").textContent = months[date.getMonth()];

let days = '';

for (let x =firstdayindex;x>0;x--){
    days+= `<div class="prev-date">${prevlastday - x+1}</div>`
}
for(let i=1;i<=lastDay;i++){
    if(i=== new Date().getDate()&& date.getMonth() === new Date().getMonth()){days+=`<div class = 'bob'>${i}</div>`} else{days+=`<div>${i}</div>`}
    // days+=`<div>${i}</div>`
    // monthdays.innerHTML=days;

}

for(let j = 1; j<=nextdays;j++){
    days+=`<div class="next-date">${j}</div>`;
    // monthdays.innerHTML=days;
}
monthdays.innerHTML=days;

}

// const months = [ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
// date.setDate(1)

// const monthdays = document.querySelector('.days')
// const lastDay = new Date(date.getFullYear(),date.getMonth()+1,0).getDate()

// const firstdayindex = date.getDay()
// console.log(lastDay);
// const prevlastday =  new Date(date.getFullYear(),date.getMonth(),0).getDate()
// const lastdayindex =  new Date(date.getFullYear(),date.getMonth()+1,0).getDay();


// const nextdays = 7 - lastdayindex -1

// document.getElementById("1").textContent = months[date.getMonth()];

// let days = '';

// for (let x =firstdayindex;x>0;x--){
//     days+= `<div class="prev-date">${prevlastday - x+1}</div>`
// }
// for(let i=1;i<=lastDay;i++){
//     if(i=== new Date().getDate()&& date.getMonth()=== new Date().getMonth()){days+=`<div class = 'bob'>${i}</div>`} else{days+=`<div>${i}</div>`}
//     // days+=`<div>${i}</div>`
//     // monthdays.innerHTML=days;

// }

// for(let j = 1; j<=nextdays;j++){
//     days+=`<div class="next-date">${j}</div>`;
//     monthdays.innerHTML=days;
// }
document.querySelector('.prev').addEventListener('click', ()=>{
    date.setMonth(date.getMonth()-1);
    renderCalendet();
})

document.querySelector('.next').addEventListener('click', ()=>{
    date.setMonth(date.getMonth()+1);
    renderCalendet();
})
renderCalendet();