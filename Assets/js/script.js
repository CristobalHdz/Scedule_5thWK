//Show current date
var today = moment()
$('#currentDay').text(today.format("dddd, MMM Do YYYY"))

// Get current Time 
var dt = new Date()
var hh = dt.getHours()



$(document).ready(function () {
    //Color change each hour
    var timeList = "" //Prints the time's list
    var buttonList = "" // Prints the buttons like the timeList
    var inputText = "" //Value of the textarea when saved
    var saveTimeText = "" // Value of the time for the textarea

    function colorChange() {
        $('.time-block').each(function () {
            timeList = parseInt($(this).attr('id').split("time")[1]);
            
            //parseInt transforms the items into an integer value. parse is for objects, parseInt is for integers
            //this = the .time-block class
            //attr = gets the attribute "id" from every first div
            // split = Divides the string into 2 parts. Time and # and because of parseInt then we only get the number

            // Change color if current is greater,same or lower than time-block
            //We have to put every possible add or remove classes because it refreshes at every moment and changes from day to day
            //if hour is greater than
            //Changed the use of '.time-block' to 'this' when inside of the function
            if (hh > timeList) {
                $(this).addClass('past');
                $(this).removeClass('present');
                $(this).removeClass('future');
                console.log(`Hour ${timeList} has already passed`)
            } else if (hh == timeList) {
                $(this).removeClass('past');
                $(this).addClass('present');
                $(this).removeClass('future');
                console.log(`Hour ${timeList} is Present!`)
            } else {
                $(this).removeClass('past');
                $(this).removeClass('present');
                $(this).addClass('future');
                console.log(`Hour ${timeList} has yet to pass`)
            }
        })
    }
    

    //Change the button's image when locked
    function buttonChange() {
        $('.saveBtn').each(function (){
            buttonList = parseInt($(this).attr('id').split("button")[1])
            if (hh > buttonList) {
                $(this).attr('disabled','true') //disables button
                $(this).addClass('saveBtnDisabled')
                $(this).removeClass('saveBtnEnabled')
                $(this).children().attr('src',"../Assets/LockImg.png") //Lock image
            } else {
                $(this).removeAttr('disabled','true') //enables button
                $(this).removeClass('saveBtnDisabled')
                $(this).addClass('saveBtnEnabled')
                $(this).attr('src',"../Assets/SaveImg.png") // Save image
            }
        })
    }

    //Sets local storage for every hour
    $(".saveBtn").on("click", function () {
        saveTimeText = $(this).parent().attr("id") //Saves the parent ID
        inputText = $(this).siblings(".description").val() // Saves the value inside the textarea
    
        localStorage.setItem(saveTimeText, inputText)

    })

    //get Item for local storage
    for (i=9; i < 18; i++) {
        $(`#time${[i]}`).children('.description').val(localStorage.getItem(`time${[i]}`))
        console.log(i)
    }

    colorChange()
    buttonChange()
})