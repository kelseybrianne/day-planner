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
// var currentDay = $("#currentDay")
// currentHour

for(var i = 9;i <= 17; i++) {
    var hour = hours[i];
    
    // Create a new block of HTML for each hour of the day
    // Create a button for each hour of the day
    newDiv = $("<div>");
    container.append(newDiv);
    newDiv.addClass("mb-3 row align-items-stretch text-right p-0");

    labelEl = $("<label>");
    newDiv.append(labelEl);
    labelEl.addClass("col-2 pt-2 border-top timeblock-custom").attr("for", "hour")
    // Change 13-17 to 1-5
    if (i == 9 || i == 10 || i == 11) {
        labelEl.text(i + "AM")
    } else {
        labelEl.text(i + "PM");
    }

    textareaEl = $("<textarea>");
    newDiv.append(textareaEl);
    textareaEl.addClass("form-control col-8 rounded-0 timeblock-custom").attr("id", "hour");

    btnDivEl = $("<div>");
    newDiv.append(btnDivEl);
    btnDivEl.addClass("input-group-append col-2 m-0 p-0 align-self-sm-stretch timeblock-custom");

    btnEl = $("<button>");
    btnDivEl.append(btnEl);
    btnEl.addClass("btn btn-outline-secondary timeblock-custom button-custom").attr("button", "button-addon2").attr("type", "button").text("Button");

    //Save the current hour to a data attribute so it can be accessed from an event listener



    // local storage key = "day-9"

    var savedValueForHour = localStorage.getItem("hour-" + i);
}

container.on("click", "button", function(e) {
    // event.target. --.dataset??
});