//Link to save button
let button = $(".saveBtn")

//Link to date holder at top of page
.ready(function() {
    let setDate = moment().format("dddd MMMM Do YYYY");
    $("#currentDay").text(setDate);
    colorCode();
})


//Style time blocks based on relationship to present time
function colorCode() {
    let now = moment().hours();
    let block = $(".time-block");

    block.each(function () {
        let hour = parseInt($(this).attr("id"));

        if(hour === now) {
            $(this).children(".col-sm-10").addClass("present");
        } else if (now > hour){
            $(this).children(".col-sm-10").addClass("past");
        } else {
            $(this).children(".col-sm-10").addClass("future");
        }
    })
}

//Add persistence to events
button.click = function (event) {
    //stop automatic reload from wiping page
    event.preventDefault();


    //Get info from task- ie user input and which hour it is in (parent)
    let task = $(this).siblings(".col-sm-10").val().replace(/['"]+/g, '');
    let parent = $(this).parent().attr('id');

    //Store tasks in local storage
    localStorage.setItem(parent, JSON.stringify(task));

}


//Get tasks from local storage and replace text area val with items from local storage
$('#9 textarea').val(localStorage.getItem('9').replace(/['"]+/g, ''));
$('#10 textarea').val(localStorage.getItem('10').replace(/['"]+/g, ''));
$('#11 textarea').val(localStorage.getItem('11').replace(/['"]+/g, ''));
$('#12 textarea').val(localStorage.getItem('12').replace(/['"]+/g, ''));
$('#13 textarea').val(localStorage.getItem('13').replace(/['"]+/g, ''));
$('#14 textarea').val(localStorage.getItem('14').replace(/['"]+/g, ''));
$('#15 textarea').val(localStorage.getItem('15').replace(/['"]+/g, ''));
$('#16 textarea').val(localStorage.getItem('16').replace(/['"]+/g, ''));
$('#17 textarea').val(localStorage.getItem('17')).replace(/['"]+/g, '');