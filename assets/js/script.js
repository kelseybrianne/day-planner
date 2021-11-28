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
    newDiv = $("<div>");
    container.append(newDiv);
    newDiv.addClass("mb-3 row align-items-stretch text-right p-0")

    labelEl = $("<label>");
    newDiv.append(labelEl);
    labelEl.addClass("col-1 pt-2 border-top timeblock-custom").attr("for", "hour")
    
    // Change 13-17 to 1-5
    if (i == 9 || i == 10 || i == 11) {
        labelEl.text(i + "AM");
    } else {
        labelEl.text(i + "PM");
    };

    if (i == 13) {
        labelEl.text("1PM");
    } else if (i == 14) {
        labelEl.text("2PM");
    } else if (i == 15) {
        labelEl.text("3PM");
    } else if (i == 16) {
        labelEl.text("4PM");
    } else if (i == 17) {
        labelEl.text("5PM");
    };

    textareaEl = $("<textarea>");
    newDiv.append(textareaEl);
    textareaEl.addClass("form-control col-10 rounded-0 timeblock-custom textarea").attr("id", "hour-" + i);

    btnEl = $("<button>");
    newDiv.append(btnEl);
    btnEl.addClass("btn btn-outline-secondary timeblock-custom button-custom col-1 p-0 align-self-sm-stretch timeblock-custom").attr("type", "submit");

    var iconEl = `<i class="fas fa-lock"></i>`;
    btnEl.append(iconEl);

    if (i < currentHour) {
        textareaEl.css({"background-color": "lightgray", "color" : "gray"});
    } else if (i == currentHour) {
        textareaEl.css({"background-color": "#667761", "color" : "white"});
    }else if (i > currentHour) {
        textareaEl.css("background-color", "#eae1df");
    }

    var savedValueForHour = localStorage.getItem("hour-" + i);
    textareaEl.val(savedValueForHour);
}
var scheduleItem

container.on("click", "button", function(e) {
    var userInput = $(this).siblings(".textarea").attr("id")
    scheduleItem = $(this).siblings(".textarea").val();
    localStorage.setItem(userInput, scheduleItem);
});

container.on("click", "")
