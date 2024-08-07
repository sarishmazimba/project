// const endDate = "5th August 2024 2:33PM";
const endDate = "August 7, 2024 14:33";
document.getElementById("end-date").innerText = "7th August 2024 2:33PM";
// document.getElementById("end-date").innerText = endDate;

function updateCountdown() {
    const end = new Date(endDate);
    // console.log("this is end", end)
    const now = new Date();
    const diff = (end - now) / 1000;
    console.log(diff)

    if (diff <= 0) {
        document.getElementById("days").value = 0;
        document.getElementById("hours").value = 0;
        document.getElementById("minutes").value = 0;
        document.getElementById("seconds").value = 0;
        return;
    }

    const days = Math.floor(diff / (3600 * 24));
    const hours = Math.floor((diff % (3600 * 24)) / 3600);
    const minutes = Math.floor((diff % 3600) / 60);
    const seconds = Math.floor(diff % 60);

    document.getElementById("days").value = days;
    document.getElementById("hours").value = hours;
    document.getElementById("minutes").value = minutes;
    document.getElementById("seconds").value = seconds;
}

setInterval(updateCountdown, 1000);
updateCountdown(); // initial call to display the countdown immediately
