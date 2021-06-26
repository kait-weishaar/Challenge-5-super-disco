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