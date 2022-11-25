const countdown = () => {
    const countDate = new Date("14 november, 2022 23:20:00").getTime()
    const now = new Date().getTime();
    const gap = countDate - now;



    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;


    const textDay = Math.floor (gap / day);
    const textHour = Math.floor((gap % day) / hour);
    const textMinute =  Math.floor((gap % hour) / minute);

    document.querySelector(".day").innerText = textDay;
    document.querySelector(".hour").innerText = textHour;
    document.querySelector(".minute").innerText = textMinute;
};

setInterval(countdown, 1000);