console.log("Client-side JavaScript");

void function(...args) {

    const readMonth = function(monthIndex) {
       if (monthIndex == 0)    return "January";
       if (monthIndex == 1)    return "February";
       if (monthIndex == 2)    return "March";
       if (monthIndex == 3)    return "April";
       if (monthIndex == 4)    return "May";
       if (monthIndex == 5)    return "June";
       if (monthIndex == 6)    return "July";
       if (monthIndex == 7)    return "August";
       if (monthIndex == 8)    return "September";
       if (monthIndex == 9)    return "October";
       if (monthIndex == 10)   return "November";
       if (monthIndex == 11)   return "December";
       if ("any-other-case")   return Error("Invalid value");
    };
 
    const shortenHours = function(hours) {
       if (hours == 0)   return 12;
       if (hours <= 12)  return hours;
       if ("else-case")  return hours % 12;
    };
 
    const lengthenMinutes = function(minutes) {
       return String(minutes).padStart(2, "0");
    };
 
    const readPhase = function(hours) {
       if (hours < 12)   return "A.M";
       if ("else-case")  return "P.M";
    };
 
    const updateTime = function(...args) {
       var date = new Date();
 
       var hours = shortenHours( date.getHours() );
       var minutes = lengthenMinutes( date.getMinutes() );
       var phase = readPhase( date.getHours() );
 
       var month = readMonth( date.getMonth() );
       var day = date.getDate();
       var year = date.getFullYear();
       
       var timeElement = document.getElementById("time");
       timeElement.textContent = `${hours}:${minutes} ${phase} - ${month} ${day}, ${year}`;
 
       window.setTimeout(updateTime, 1 * 1000);
    };
 
    updateTime(null);
 
 } (null); // void