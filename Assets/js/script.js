//Show current date
var today = moment()
$('#currentDay').text(today.format("dddd, MMM Do YYYY"))

// Schedule code 
var dt = new Date()
var hh = dt.getHours()


console.log("Current hour: " + hh)


//Color change each hour
var timeList = ""
$('.time-block').each(function() {
    timeList = parseInt($('.time-block').attr('id').split("time")[1]); 
    //parseInt transforms the items into an integer value. parse is for objects, parseInt is for integers
    //this = the .time-block class
    //attr = gets the attribute "id" from every first div
    // split = Divides the string into 2 parts. Time and # and because of parseInt then we only get the number
    
})

