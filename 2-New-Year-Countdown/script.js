const dayEl = document.getElementById('day');
const hourEl = document.getElementById('hour');
const minuteEl = document.getElementById('minute');
const secondEl = document.getElementById('second');

const newYearTime = new Date("Jan 1, 2024 00:00:00").getTime();

const updateCountdown = () => {

    const now = new Date().getTime();
    const gap = newYearTime - now;

    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    let d = Math.floor(gap/day);
    let h = Math.floor((gap % day) / hour);
    let m = Math.floor((gap % hour) / minute);
    let s = Math.floor((gap % minute) / second);

    if (h<10)
    {
        h = "0" + h;
    }
    if (m<10)
    {
        m = "0" + m;
    }
    if (s<10)
    {
        s = "0" + s;
    }

    dayEl.innerText = d;
    hourEl.innerText = h;
    minuteEl.innerText = m;
    secondEl.innerText = s;

    setTimeout(updateCountdown,1000);
}

updateCountdown();