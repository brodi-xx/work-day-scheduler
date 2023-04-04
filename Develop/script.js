$(document).ready(function () {
const now = dayjs();

// Loops through each time-block
$(".time-block").each(function() {
  // Gets the hour of the time-block using its ID
  const blockHour = parseInt($(this).attr("id"));

  // Checks the block hour is before, equal to, or after the current hour
  if (blockHour < now.hour()) {
    $(this).addClass("past").removeClass("present future");
  } else if (blockHour === now.hour()) {
    $(this).addClass("present").removeClass("past future");
  } else {
    $(this).addClass("future").removeClass("past present");
  }
});

// Gets the current date and time using day.js
$("#currentDay").text(now.format("dddd, MMMM D, YYYY, h:mm A"));

// Update the time-block classes every minute
setInterval(function() {
  const now = dayjs();
  $(".time-block").each(function() {
    const blockHour = parseInt($(this).attr("id"));
    if (blockHour < now.hour()) {
      $(this).addClass("past").removeClass("present future");
    } else if (blockHour === now.hour()) {
      $(this).addClass("present").removeClass("past future");
    } else {
      $(this).addClass("future").removeClass("past present");
    }
  });
}, 60000);

  
    // Added a listener for click events on the save button and save user input to local storage and set the values of the corresponding text area elements
    $(".saveBtn").on("click", function() {
      var id = $(this).closest(".time-block").attr("id");
      var text = $(this).siblings(".description").val();
      localStorage.setItem(id, text);
    });
  
    $(".time-block").each(function() {
      var id = $(this).attr("id");
      var text = localStorage.getItem(id);
      $(this).children(".description").val(text);
    });
  });
  

