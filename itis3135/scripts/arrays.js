var person = [], salary = [];

function addSalary(){
    var personInput = document.getElementById("personText").value;
    var salaryInput = document.getElementById("salaryText").value;
    salaryInput = parseFloat(salaryInput);
    person.push(personInput);
    salary.push(salaryInput);
}

function displayResults(){
    var body = document.getElementsByTagName("body")[0];
    //Creates the table
    var table = document.createElement("table");
    var tableBody = document.createElement("tbody");
    var row = document.createElement("tr");
    //Creates first two rows | Employee | Salary |
    var cell = document.createElement("td");
    var cellText = document.createTextNode("Employee");
    cell.appendChild(cellText);
    row.appendChild(cell);
    cell = document.createElement("td");
    cellText = document.createTextNode("Salary");
    cell.appendChild(cellText);
    row.appendChild(cell);
    tableBody.appendChild(row);
    //inputs the Employee and salary into the table | Employee Name | Employee's Salary |
    for(var i = 0; i < person.length; i++){
        // | Employee Name |
        row = document.createElement("tr");
        cell = document.createElement("td");
        cellText = document.createTextNode(person[i]);
        cell.appendChild(cellText);
        row.appendChild(cell);
        //                 | Employee's Salary |
        row = document.createElement("tr");
        cell = document.createElement("td");
        cellText = document.createTextNode(salary[i]);
        cell.appendChild(cellText);
        row.appendChild(cell);
        //Finish row
        tableBody.appendChild(row);
    }
    table.appendChild(tableBody);
    body.appendChild(table);
    table.setAttribute("border", "2");
}

function displaySalary(){
    var average = findAverage();
    var highest = findHighest();
    document.getElementById("displaySalary").innerHTML = "The average salary: " + average + "\nThe highest salary: " + highest;
}

function findAverage(){
    var average = 0;
    for(var i = 0; i < salary.length; i++){
        average += salary[i];
    }
    average = average / salary.length;
    return average;
}

function findHighest(){
    var highest = 0;
    for(var i = 0; i < salary.length; i++){
        if(salary[i] > highest)
            highest = salary[i];
    }
    return highest;
}