const days =document.querySelector("#days");
const hours = document.querySelector("#hours");
const minutes = document.querySelector("#minutes");
const seconds = document.querySelector("#seconds");

document.querySelector("#calculate").onclick = updation;

function updation() {
    const currentyear = new Date().getFullYear();

    const date = document.querySelector("#date").value;
    const time = document.querySelector("#time").value;

    // Handle invalid date/time inputs
    if (!date || !time) {
        console.error("Invalid date or time input");
        return;
    }

    const endtime = new Date(`${date}T${time}`);
    console.log(endtime);

    const currentdate = new Date();

    const diff = endtime - currentdate;
    console.log(diff);

    if (diff < 0) {
        console.error("The specified date/time is in the past");
        return;
    }

    const d = Math.floor(diff / 1000 / 60 / 60 / 24);
    const hrs = Math.floor((diff / 1000 / 60 / 60) % 24);
    const min = Math.floor((diff / 1000 / 60) % 60);
    const sec = Math.floor((diff / 1000) % 60);

    days.innerHTML = d < 10 ? "0" + d : d;
    hours.innerHTML = hrs < 10 ? "0" + hrs : hrs;
    minutes.innerHTML = min < 10 ? "0" + min : min;
    seconds.innerHTML = sec < 10 ? "0" + sec : sec;
}

setInterval(updation, 1000);
