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

    if (h < 6){
        document.getElementById("bg").textContent = "Good Morning!";
        document.body.style.backgroundImage = "url('/images/Night_three.png')";
        document.getElementById("wrapper").style.color = "white"

    } else if (h>5 && h<12){
        document.getElementById("bg").textContent = "Good Morning!"
        document.body.style.backgroundImage = "url('/images/Morning.png')";    
        
    
    } else if (h>11 && h<15){
        document.getElementById("bg").textContent = "Good Afternoon!"
        document.body.style.backgroundImage = "url('/images/Afternoon.png')";
        
    
    } else if (h>14 && h<18){
        document.getElementById("bg").textContent = "Good Evening!"
        document.body.style.backgroundImage = "url('/images/Evening.png')";
    
    } else if (h>17 && h<25){
        document.getElementById("bg").textContent = "Good Night!"
        document.body.style.backgroundImage = "url('/images/Night_one.png')";
        document.getElementById("wrapper").style.color = "white"
    }
}

