var CurrentTime = document.querySelector("h1");
var content = document.querySelector(".content");
var selectMenu = document.querySelectorAll("select");
var btn = document.getElementById("btn");


let alarmTime, Alarm;
ring = new Audio("./Rintone/beep.mp3");  
console.log(selectMenu[0]);

for (let i = 12; i > 0; i--) {
    i = i < 10 ? `0${i}` : i;
    let opt = `<option value="${i}">${i}</option>`;
    selectMenu[0].firstElementChild.insertAdjacentHTML("afterend", opt);
}
for (let i = 59; i > 0; i--) {
    i = i < 10 ? `0${i}` : i;
    let opt = `<option value="${i}">${i}</option>`;
    selectMenu[1].firstElementChild.insertAdjacentHTML("afterend", opt);
}
for (let i = 2; i > 0; i--) {
    let am= i == 1 ? "AM" : "PM";
    let opt = `<option value="${am}">${am}</option>`;
    selectMenu[2].firstElementChild.insertAdjacentHTML("afterend", opt);
}

console.log(selectMenu[0]);

setInterval(() => {   
    var time = new Date();
    h = time.getHours();
    m = time.getMinutes();
    s = time.getSeconds();
    ampm = "AM";
    if (h >= 12) {
        h = h-12;
        ampm = "PM";
    }
    h = h == 0 ? h = 12 : h;
    h = h < 10 ? "0" + h : h;
    s = s < 10 ? "0" + s : s; 
    m = m < 10 ? "0" + m : m;
    CurrentTime.innerText = `${h}:${m}:${s} ${ampm}`;
    console.log(CurrentTime, alarmTime);
    if (alarmTime == `${h}:${m} ${ampm}`) {
        ring.play();
        ring.loop = 1;
    }
}, 1000);

btn.addEventListener('click', function () {
    if (Alarm) {
        alarmTime = ""
        Alarm = 0;
        ring.pause();
        content.classList.remove('disable');
        btn.innerText = "Set Alarm";
        return 0;
    }
    let time = `${selectMenu[0].value}:${selectMenu[1].value} ${selectMenu[2].value}`
    console.log(time);
    if (time.includes("Hour") || time.includes("Minute") || time.includes("AM/PM")) {
       return alert("Select a valid Time");
    }
    Alarm = 1;
    alarmTime = time;
    content.classList.add("disable");
    btn.innerText = "Clear Alarm";
    console.log(content)
});