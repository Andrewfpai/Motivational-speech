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
    
}


function nothing(){
    h = new Date().getHours()
   

    let caption = document.getElementById("bg")
    let bg = document.body.style
    let time

    if (h < 6){
        caption.textContent = "Good Morning";
        bg.backgroundImage = "url('images/Night_three.png')";
        document.getElementById("wrapper").style.color = "white"
        time = 0

        
    } else if (h>5 && h<11){
        caption.textContent = "Good Morning"
        bg.backgroundImage = "url('images/Morning.png')";
        time = 0
        
    } else if (h>10 && h<15){
        caption.textContent = "Good Afternoon"
        bg.backgroundImage = "url('images/Afternoon.png')";
        time = 1
    
    } else if (h>14 && h<18){
        caption.textContent = "Good Evening"
        bg.backgroundImage = "url('images/Evening.png')";
        time = 2
    
    } else if (h>17 && h<25){
        caption.textContent = "Good Night"
        bg.backgroundImage = "url('images/Night_one.png')";
        document.getElementById("wrapper").style.color = "white"
        time = 3
    }

    let text = caption.textContent
    return time
}

let x;
x=2


function bgTranslate(){
    const indonesia = ["Selamat Pagi", "Selamat Siang", "Selamat Sore", "Selamat Malam"]
    const english = ["Good Morning", "Good Afternoon", "Good Evening", "Good Night"]
    const chinese = ["早上好", "中午好", "下午好", "晚上好"  ]


    let timeLocal  = nothing();
    let caption = document.getElementById("bg")
    


    if (x===1){ // indonesia to english
        caption.textContent = english[timeLocal]
        x+= 1
    } else if (x===2){ // english to chinese
        caption.textContent = chinese[timeLocal]
        x+= 1
    } else if (x===3){ // chinese to indonesia
        caption.textContent = indonesia[timeLocal]
        x+= 1
    } else if (x>3) {
        x = 2
    }




}
let quote1 = "You may not control all the events that happen to you, but you can decide not to be reduced by them"
let quote2 = "Care about what other people think and you will always be their prisoner"
let quote3 = "The only real mistake is the one from which we learn nothing"
let quote4 = "Resentment is like drinking poison and then hoping it will kill your enemies"
let quote5 = "We must all suffer one of two things: the pain of discipline or the pain of regret"
let quote6 = "You learn nothing from winning, you only learn from failures"
let quote7 = "Respect people's time if you want your time to be respected"


function randomQuotes(){
    let lists = [quote1, quote2, quote3, quote4, quote5, quote6, quote7]
    var item = lists[Math.floor(Math.random()*lists.length)];

    document.getElementById("speech").textContent = item

}


