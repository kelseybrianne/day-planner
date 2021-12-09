var hours = [9,10,11,12,13,14,15,16,17];
var container = $(".container")


var today = moment().format("dddd, MMMM Do");
$("#currentDay").text(today);

// var currentHour = 13;
var currentHour = moment().format("H");

for(var i = 9;i <= 17; i++) {
    
    var labelTime = ""
    // Change 13-17 to 1-5 and add AM/PM
    if (i == 9 || i == 10 || i == 11) {
        labelTime = i + "AM";
    } else {
        labelTime = i + "PM";
    };
    
    if (i == 13) {
        labelTime = "1PM";
    } else if (i == 14) {
        labelTime = "2PM";
    } else if (i == 15) {
        labelTime = "3PM";
    } else if (i == 16) {
        labelTime = "4PM";
    } else if (i == 17) {
        labelTime = "5PM";
    };

    // Change color of timeblock depending on whether it's past, future, or present
    if (i < currentHour) {
        changeColors = "past"
    } else if (i == currentHour) {
        changeColors = "present"
    }else if (i > currentHour) {
        changeColors = "future"
    }

    // Get user input from localStorage and save to timeblock
    var savedValueForHour = localStorage.getItem("hour-" + i);
    if(!savedValueForHour) {
        savedValueForHour="";
    }
    
    // Create a new block of HTML for each hour of the day
    var timeblockEl = `<div class="mb-3 row align-items-stretch text-right p-0">
    <label class="col-1 pt-2 border-top timeblock-custom" for="hour">${labelTime}</label>
    <textarea class="form-control col-10 rounded-0 timeblock-custom textarea ${changeColors}" id="hour-${i}">${savedValueForHour}</textarea>
    <button class="btn btn-outline-secondary timeblock-custom button-custom col-1 p-0 align-self-sm-stretch timeblock-custom fas fa-lock" type="submit" id="button-addon2"></button></div>`
    container.append(timeblockEl);
}

// Save user input to localStorage when button is clicked
var scheduleItem
container.on("click", "button", function(e) {
    var userInput = $(this).siblings(".textarea").attr("id")
    console.log(userInput);
    scheduleItem = $(this).siblings(".textarea").val();
    localStorage.setItem(userInput, scheduleItem);
});