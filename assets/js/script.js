var hours = [9,10,11,12,13,14,15,16,17];
var container = $(".container")

var today = moment().format("dddd, MMMM Do");
$("#currentDay").text(today);

var currentHour = 14;
// var currentHour = moment().format("H");

for(var i = 9;i <= 17; i++) {
    
    // Create a new block of HTML for each hour of the day
    // Create a button for each hour of the day
    var newDiv = $("<div>");
    container.append(newDiv);
    newDiv.addClass("mb-3 row align-items-stretch text-right p-0")

    var labelEl = $("<label>");
    newDiv.append(labelEl);
    labelEl.addClass("col-1 pt-2 border-top timeblock-custom label-custom").attr("for", "hour-" + i)
    
    // Change 13-17 to 1-5 and add AM/PM
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

    var textareaEl = $("<textarea>");
    newDiv.append(textareaEl);
    textareaEl.addClass("form-control col-10 rounded-0 timeblock-custom textarea").attr("id", "hour-" + i);

    var btnEl = $("<button>");
    newDiv.append(btnEl);
    btnEl.addClass("btn btn-outline-secondary timeblock-custom button-custom col-1 p-0 align-self-sm-stretch timeblock-custom").attr("type", "submit");

    var iconEl = `<i class="fas fa-lock"></i>`;
    btnEl.append(iconEl);

    // Change color of timeblock depending on whether it's past, future, or present
    if (i < currentHour) {
        textareaEl.addClass("past");
    } else if (i == currentHour) {
        textareaEl.addClass("present");
    }else if (i > currentHour) {
        textareaEl.addClass("future");
    }

    // Get user input from localStorage and save to timeblock
    var savedValueForHour = localStorage.getItem("hour-" + i);
    textareaEl.val(savedValueForHour);
}

// Save user input to localStorage when button is clicked
container.on("click", "button", function(e) {
    var userInput = $(this).siblings(".textarea").attr("id")
    var scheduleItem = $(this).siblings(".textarea").val();
    localStorage.setItem(userInput, scheduleItem);
});

