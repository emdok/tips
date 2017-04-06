// business logic
var hoursArray = [];
var tipsArray = [];
var employeeArray = [];
var newEmployee;
var inputtedTips = 800;
var hourSum;

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

Employee.prototype.employeeList = function() {
  employeeArray.push(newEmployee);
}

var tipMath = function() {
  var tipPerHour = inputtedTips / hourSum;
  hoursArray.forEach(function(hour) {
    var individualTips = tipPerHour * hour;
    hour += individualTips;
    // console.log(individualTips);
    tipsArray.push(individualTips);
  });
  return tipsArray;
};


// front end logic
$(function() {

  $("#additional-employee").click(function() {
    var inputtedName = $("#employee-name").val();
    var inputtedHours = parseInt($("#employee-hours").val());

    newEmployee = new Employee(inputtedName, inputtedHours);

    newEmployee.employeeList();

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

    hourSum = hoursArray.reduce(add, 0);
    // console.log(hourSum);

    var result = tipMath(employeeArray);

    result.forEach(function(tip) {
      return $("ul#employee-tipout").append("<li>" + tip + "</li>");
    })

    // console.log(newEmployee);
    // console.log(hoursArray);
    // console.log(employeeArray);
    console.log(result);
    // console.log(newEmployee.tips);
  });
});
