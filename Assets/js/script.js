//Show today's date
var today = moment()
$('#currentDay').text(today.format("dddd, MMM Do YYYY"))

$(document).ready(function () {
    //Color change each hour
    var timeList = "" //Prints the time's list
    var buttonList = "" // Prints the buttons like the timeList
    var inputText = "" //Value of the textarea when saved
    var saveTimeText = "" // Value of the time for the textarea
    var lockDisable = 1 // 1=past buttons are locked
    // Get current Time 
    var dt = new Date()
    var hh = dt.getHours()

    function colorChange() {
        $('.time-block').each(function () {
            timeList = parseInt($(this).attr('id').split("time")[1]);
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
        $('.saveBtn').each(function () {
            buttonList = parseInt($(this).attr('id').split("button")[1])
            if (lockDisable = 1) {
                if (hh > buttonList) {
                    $(this).attr('disabled', 'true') //disables button
                    $(this).addClass('saveBtnDisabled')
                    $(this).removeClass('saveBtnEnabled')
                    $(this).children().attr('src', "./Assets/LockImg.png") //Lock image
                    lockDisable = lockDisable - buttonList.value
                } else {
                    $(this).removeAttr('disabled', 'true') //enables button
                    $(this).removeClass('saveBtnDisabled')
                    $(this).addClass('saveBtnEnabled')
                    $(this).attr('src', "./Assets/SaveImg.png") // Save image
                }
            }
        })
    }

    //Sets local storage for every hour
    $(".saveBtn").on("click", function () {
        saveTimeText = $(this).parent().attr("id") //Saves the parent ID
        inputText = $(this).siblings(".description").val() // Saves the value inside the textarea
        localStorage.setItem(saveTimeText, inputText)
        console.log(`The id: ${saveTimeText} has saved ${inputText} into the local storage.`)
    })

    //get Item for local storage
    for (i = 9; i < 18; i++) {
        $(`#time${[i]}`).children('.description').val(localStorage.getItem(`time${[i]}`))
    }

    colorChange()
    buttonChange()
})