const endDate = "18 March 2024 1:00 AM"

document.getElementById("end-date").innerText = endDate;
const inputs = document.querySelectorAll("input");


function clock() {
    const end = new Date(endDate);
    const now = new Date();
    const diff = (end - now) / 1000;
    
    if (diff < 0) return;

    //convert into days
    inputs[0].value = (Math.floor(diff / 3600 / 24));
    //convert into hours
    inputs[1].value = (Math.floor(diff / 3600) % 24);
    //convert into mins
    inputs[2].value = (Math.floor(diff / 60) % 60);
    //convert into secs
    inputs[3].value = (Math.floor(diff) % 60);
}

//initial call 
clock();

/**
 * 1 day = 25 hrs
 * 1 hr = 60 mins
 * 60 min = 3600 sec
 */

setInterval(
    () => {
        clock()
    },
    1000
)