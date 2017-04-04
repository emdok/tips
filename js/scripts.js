// business logic
var hoursArray = [];
var tipsArray = [];
var newEmployee;
var inputtedTips;

function add(a, b) {
  return a + b;
}

function Employee(name, hours) {
  this.employeeName = name;
  this.hours = hours;
  this.tips = 0;
};

Employee.prototype.totalHours = function() {
  hoursArray.push(this.hours);
  return hoursArray;
};

Employee.prototype.fullInfo = function() {
  return this.employeeName + ", " + this.hours;
};

Employee.prototype.tipMath = function() {
  var hourSum = hoursArray.reduce(add, 0);
  var tipPerHour = hourSum/inputtedTips;
  hoursArray.forEach(function(hour) {
    var individualTips = tipPerHour * hour;
    tipsArray.push(individualTips);
    return tipsArray;
  });
};

// front end logic
$(function() {

  $("#additional-employee").click(function() {
    var inputtedName = $("#employee-name").val();
    var inputtedHours = parseInt($("#employee-hours").val());
    inputtedTips = parseInt($("#total-tips").val());

    newEmployee = new Employee(inputtedName, inputtedHours);
    console.log(newEmployee);

    $("ul#employee-list").append("<li>" + newEmployee.fullInfo() + "</li>");

    $("#employee-name").val("");
    $("#employee-hours").val("");

    newEmployee.totalHours();
  });

  $("#all-employees").click(function() {
    $("#additional-employee").hide();
    $("#all-employees").hide();
    $("#name").hide();
    $("#hours").hide();
    $("#tips").show();
    $("#submit").show();
  });

  $("form").submit(function(event) {
    event.preventDefault();


    newEmployee.tipMath();


    console.log(tipsArray);
    // console.log(newEmployee.tips);
  });
});
