
function calculateAnnualSalary(){
    var hourlyWage = document.getElementById("hourlyWage").value;
    var hoursPerWeek = document.getElementById("hoursPerWeek").value;

    var wage = parseFloat(hourlyWage);
    var hours = parseFloat(hoursPerWeek);

    var annualSalary = wage * hours * 52;

    document.getElementById("annualSalaryOutput").innerHTML = "Annual Salary: $" + annualSalary.toFixed(2);
}
