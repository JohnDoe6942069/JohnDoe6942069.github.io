function displaytime(){
    var d = new Date();
    var hour = d.getHours();
    var min = d.getMinutes();
    var sec = d.getSeconds();
    if(hour>12){
        var meridian = "PM";

    }
    else{
        var meridian = "AM";
    }
    if(min>10){
        min="0"+min

    }

    if (hour>12){
        hour=hour-12;
    }
    if (hour==0){
        hour=hour+12;
    }
    document.getElementById("clock").innerHTML = hour+ ":" +min +" "+meridian;
}
setInterval(displaytime, 1000)





function dinnerTime(){
    var time = new Date();
    var hour2 = time.getHours();
    var min2 = time.getMinutes();
    if (hour2>12){
        hour2=hour2-12;
    }

    if(hour2==8 && min2== 0){
        var variable = "YES";
    }
 else{
        var variable = "No!";
    }
    document.getElementById("alarm").innerHTML = variable;}
setInterval(dinnerTime,1000)

