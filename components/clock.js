function currentTime() {
    let date = new Date();
    let h = date.getHours();
    let m = date.getMinutes();
    let s = date.getSeconds();


h = (h<10) ? "0"+ h : h;
m = (m<10) ? "0" + m : m;
s = (s<10) ? "0" + s : s;

document.querySelector(".clock").innerText = h + ":" + m ;
}
setTimeout(currentTime,1000)
let timeInterval = setInterval(currentTime, 1000);


const date = new Date();
const options = {weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'}
const month = date.toLocaleString("eu-Lt", {month: 'long'})
const day = date.toLocaleString("eu-Lt", {day: 'numeric'})
const year = date.toLocaleString("eu-Lt", {year: 'numeric'})
const weekday = date.toLocaleString("eu-Lt", {weekday: 'long'})
console.log(month);
console.log(day);
console.log(year);
console.log(weekday);
document.querySelector('.current-date').innerHTML = `${weekday}, ${month}, ${day}d., ${year}m.`;
console.log(today);
