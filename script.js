  


var currentDate = moment().format("dddd, MMMM Do YYYY");
console.log(currentDate);
$("#currentDay").text(currentDate);
var currentHour = moment().format("H");
console.log(currentHour);
var hours = [7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
for (var i = 0; i < hours.length; i++) {
  var div1 = $("<div>");
  //<div> </div>
  div1.attr("class", "row");
  //<div class="row"></div>
  var div2 = $("<div>");
  //<div>  </div>
  div2.attr("class", "col");
  div2.attr("id", "time-block");
  if (hours[i] <= 12) {
    if (hours[i] == 12) {
      div2.text(hours[i] + " PM");
    } else {
      div2.text(hours[i] + " AM");
    }
  } else {
    div2.text(hours[i] - 12 + " PM");
  }
  var textarea = $("<textarea>");
 if (hours[i] == currentHour) {
    textarea.attr("class", "form-control col-8 present");
  }
  if (hours[i] < currentHour) {
    textarea.attr("class", "form-control col-8 past");
  }
  if (hours[i] > currentHour) {
    textarea.attr("class", "form-control col-8 future");
  }
  textarea.attr("id", hours[i]);
  var div3 = $("<div>");
  div3.attr("class", "col saveBtn text-center fas fa-lock");
  div1.append(div2);
  div1.append(textarea);
  div1.append(div3);
  $(".container").append(div1);
}
$(".saveBtn").click(function (event) {
  // stop page from refreshing
  event.preventDefault();
  var hour = $(this).siblings(".form-control").attr("id");
  var userinput = $(this).siblings(".form-control").val();
  localStorage.setItem(hour, userinput);


});
$("#7").val(localStorage.getItem("7"));
$("#8").val(localStorage.getItem("8"));
$("#9").val(localStorage.getItem("9"));
$("#10").val(localStorage.getItem("10"));
$("#11").val(localStorage.getItem("11"));
$("#12").val(localStorage.getItem("12"));
$("#13").val(localStorage.getItem("13"));
$("#14").val(localStorage.getItem("14"));
$("#15").val(localStorage.getItem("15"));
$("#16").val(localStorage.getItem("16"));
$("#17").val(localStorage.getItem("17"));
$("#18").val(localStorage.getItem("18"));
$("#19").val(localStorage.getItem("19"));
$("#20").val(localStorage.getItem("20"));