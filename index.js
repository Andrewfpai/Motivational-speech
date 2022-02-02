function myDate(){
    date = new Date();
    hour = date.getHours();
    minute = date.getMinutes();
    second = date.getSeconds();

    h = (hour<10) ? "0" + hour : hour
    m = (minute<10) ? "0" + minute : minute
    s = (second<10) ? "0" + second : second

    

    display = h + ":" + m + ":" + s
    document.getElementById("clock").textContent = display

    setTimeout(myDate, 1000);

    if (h < 7){
        document.getElementById("bg").textContent = "morning";
        
    } else if (h>6 && h<12){
        document.getElementById("bg").textContent = "afternoon"
    } else if (h>11 && h<18){
        document.getElementById("bg").textContent = "evening"
    } else if (h>17 && h<25){
        document.getElementById("bg").textContent = "night"
        document.body.style.backgroundImage = "url('images/Afternoon.png')";
    }
}

