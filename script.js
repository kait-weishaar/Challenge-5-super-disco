$(document).ready(function() {
//Link to save button
let button = $(".saveBtn");


function getLocalStorage() {
    return JSON.parse(localStorage.getItem('eventArray')) || ["", "", "", "", "", "", "", "", ""] // 9, 10, 11, 12  0+9=>index and know the hour
  }
  
//   setLocalStorage("words", 17)
  function setLocalStorage(eventToAdd, hourToAddTo) {
      // its important what time we put it in as
    var currentLS = getLocalStorage(); // ["", *9] || ["" *9] 
    currentLS[hourToAddTo-9] = eventToAdd; // =>currentLS[8] => ["", "", "", "", "", "", "", "words", ""]
    localStorage.setItem('eventArray', JSON.stringify(currentLS));
    return;
  }
//Link to date holder at top of page
    let setDate = moment().format("dddd MMMM Do YYYY");
    $("#currentDay").text(setDate);
    colorCode();
    //Add persistence to events
button.on('click', function (event) {
    event.preventDefault();
    var text = $(this).siblings('.col-sm-10').val().replace(/['"]+/g, '');
    var parent = $(this).parent().attr('id');
    
    setLocalStorage(text, parent);
  })
  
  let text = null;
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
    
    
    function fillEvents() {
        let currentLS = getLocalStorage();
        
        //Testing $('#9 textarea').val(currentLS[0]);
        currentLS.forEach((singularTime, i) => {
            $(`#${i+9} textarea`).val(singularTime)
        })
        
    }
    fillEvents();
})