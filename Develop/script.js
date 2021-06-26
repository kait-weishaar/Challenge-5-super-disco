//Link to save button
let button = $(".saveBtn")

//Link to date holder at top of page
.ready(function() {
    let setDate = moment().format("dddd MMMM Do YYYY");
    $("#currentDay").text(setDate);
    colorCode();
    //Add persistence to events
button.on('click', function (event) {
    event.preventDefault();
    var text = $(this).siblings('.col-sm-10').val().replace(/['"]+/g, '');
    var parent = $(this).parent().attr('id');
    localStorage.setItem(parent, JSON.stringify(text));

  })
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



  $('#9 textarea').val(localStorage.getItem('9').replace(/['"]+/g, ''));
  if (text) {$('#10 textarea').val(localStorage.getItem('10').replace(/['"]+/g, ''))};
  $('#11 textarea').val(localStorage.getItem('11').replace(/['"]+/g, ''));
  $('#12 textarea').val(localStorage.getItem('12').replace(/['"]+/g, ''));
  $('#13 textarea').val(localStorage.getItem('13').replace(/['"]+/g, ''));
  $('#14 textarea').val(localStorage.getItem('14').replace(/['"]+/g, ''));
  $('#15 textarea').val(localStorage.getItem('15').replace(/['"]+/g, ''));
  $('#16 textarea').val(localStorage.getItem('16').replace(/['"]+/g, ''));
  $('#17 textarea').val(localStorage.getItem('17')).replace(/['"]+/g, '');