/*What starting data does the application need to run?

    - The current day and time
        -the current hour of the day

What data will the application interact with?

    - localStorage
        -saved text for each hour of the day
        -localStorage.setItem("hour-9", "Hour 9 text value");
        -use textarea not input

*/
var hours = [9,10,11,12,13,14,15,16,17];
var container = $(".container")
var newDiv
var labelEl
var textareaEl
var btnDivEl
var btnEl
var formEl


var today = moment().format("dddd, MMMM Do");
$("#currentDay").text(today);

// var currentHour = 13;
var currentHour = moment().format("H");
console.log(currentHour);

for(var i = 9;i <= 17; i++) {
    
    // Create a new block of HTML for each hour of the day
    // Create a button for each hour of the day
    // newDiv = $("<div>");
    // container.append(newDiv);
    // newDiv.addClass("mb-3 row align-items-stretch text-right p-0")
    // .attr("form", "day-planner");
    
    // labelEl = $("<label>");
    // newDiv.append(labelEl);
    // labelEl.addClass("col-1 pt-2 border-top timeblock-custom").attr("for", "hour")
    
    var labelTime = ""
    // Change 13-17 to 1-5
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
    
    var textareaClass = ""
    if (i < currentHour) {
        textareaClass = "background-color: lightgray; color : gray;";
    } else if (i == currentHour) {
        textareaClass = "background-color: #667761; color : white";
    }else if (i > currentHour) {
        textareaClass = "background-color, #eae1df";
    }

    var timeblockEl = `<div class="mb-3 row align-items-stretch text-right p-0">
    <label class="col-1 pt-2 border-top timeblock-custom" for="hour">${labelTime}</label>
    <textarea class="form-control col-10 rounded-0 timeblock-custom textarea" id="hour-${i}" style=${textareaClass}></textarea>
    <button class="btn btn-outline-secondary timeblock-custom button-custom col-1 p-0 align-self-sm-stretch timeblock-custom fas fa-lock" type="submit" id="button-addon2"></button></div>`
    container.append(timeblockEl);

    // textareaEl = $("<textarea>");
    // newDiv.append(textareaEl);
    // textareaEl.addClass("form-control col-10 rounded-0 timeblock-custom textarea").attr("id", "hour-" + i);

    // btnDivEl = $("<div>");
    // newDiv.append(btnDivEl);
    // btnDivEl.addClass("input-group-append col-2 m-0 p-0 align-self-sm-stretch timeblock-custom");

    // btnEl = $("<button>");
    // newDiv.append(btnEl);
    // btnEl.addClass("btn btn-outline-secondary timeblock-custom button-custom col-1 p-0 align-self-sm-stretch timeblock-custom").attr("type", "submit");

    // var iconEl = $("<i>");
    // btnEl.append(iconEl);
    // iconEl.addClass("ui-icon-lock");

    // var icon = $("<i>");
    // btnEl.append(icon);
    // icon.addClass("bi bi-lock-fill");

    // var iconEl = $("<svg>");
    // icon.append(iconEl);
    // iconEl.attr("xmlns", "http://www.w3.org/2000/svg").attr("width", "16").attr("height", "16").attr("fill", "currentColor").attr("class", "bi bi-lock-fill").attr("viewBox", "0 0 16 16");

    // var iconPathEl = $("<path>");
    // iconEl.append(iconPathEl);
    // iconPathEl.attr("d", "M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2zm3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2z");


    // Save the current hour to a data attribute so it can be accessed from an event listener


    // local storage key = "day-9"

    var savedValueForHour = localStorage.getItem("hour-" + i);
    $("textarea").val(savedValueForHour);

}
var scheduleItem
container.on("click", "button", function(e) {
    var userInput = $(this).siblings(".textarea").attr("id")
    console.log(userInput);
    scheduleItem = $(this).siblings(".textarea").val();
    localStorage.setItem(userInput, scheduleItem);
    // console.log("button clicked");
});


// Save text written in the textarea to localStorage when button is clicked

// Get the item from localStorage and display it (so that it doesn't go away on page refresh)

// Put lock icon into button

// Blue box is hidden on bottom 