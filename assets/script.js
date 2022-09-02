var date = moment();
//Calls object with current date and time
$(document).ready(function(){
    $("#currentDay").text(moment().format("dddd, MMMM Do")); 
    //Formats date to match module example
    $(".saveBtn").on("click", function(){
        var scheduleEvent = $(this).siblings(".text").val();
        var hour = $(this).parent().attr("id");
        localStorage.setItem(hour, scheduleEvent);
    }); 
    $("#9 .text").val(localStorage.getItem("9"));
    $("#10 .text").val(localStorage.getItem("10"));
    $("#11 .text").val(localStorage.getItem("11"));
    $("#12 .text").val(localStorage.getItem("12"));
    $("#13 .text").val(localStorage.getItem("13"));
    $("#14 .text").val(localStorage.getItem("14"));
    $("#15 .text").val(localStorage.getItem("15"));
    $("#16 .text").val(localStorage.getItem("16"));
    $("#17 .text").val(localStorage.getItem("17"));
    //Gets the events written in the schedule from local storage
    function relativeTime(){
        var currentHour = moment().hour();
        //Returns the hour of the current time as a number
        $('.time-block').each(function(){
            var blockTime = parseInt($(this).attr("id"));
            if (blockTime < currentHour){
                $(this).addClass("past");
            }
            else if (blockTime === currentHour){
                $(this).addClass("present");
                $(this).removeClass("past");
            }
            else {$(this).addClass("future");
            $(this).removeClass("past");
            $(this).removeClass("present");
            }
        })
    //Sets the class to pass, present or future based on comparison of current time with time block
    }
    relativeTime();
    var interval = setInterval(relativeTime, 1000);
    //Calls the function to reassess current time vs. time blocks at specified interval
});