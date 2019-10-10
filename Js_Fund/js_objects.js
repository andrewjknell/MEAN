function names(arr){
    for(var i=0;i < arr.length; i++){
        console.log("Name: " + arr[i].name+", "+"Cohort: "+arr[i].cohort);
    }
}
var arr = [
    {name: 'Remy', cohort: 'Jan'},
    {name: 'Genevieve', cohort: 'March'},
    {name: 'Chuck', cohort: 'Jan'},
    {name: 'Osmund', cohort: 'June'},
    {name: 'Nikki', cohort: 'June'},
    {name: 'Boris', cohort: 'June'}
];
// names(arr);

function users(arr){
    console.log("EMPLOYEES");
    for(var i = 0; i < arr.employees.length; i ++){
        console.log((i+1)+" - "+ arr.employees[i].last_name + ", " +arr.employees[i].first_name+ " - " + (arr.employees[i].first_name.length+arr.employees[i].last_name.length));
    }
    console.log("MANAGERS");
    for(var i = 0; i < arr.managers.length; i ++){
        console.log((i+1)+" - "+ arr.managers[i].last_name + ", " +arr.managers[i].first_name+ " - " + (arr.managers[i].first_name.length+arr.managers[i].last_name.length));
    }
}

var arr = {
    employees: [
        {'first_name':  'Miguel', 'last_name' : 'Jones'},
        {'first_name' : 'Ernie', 'last_name' : 'Bertson'},
        {'first_name' : 'Nora', 'last_name' : 'Lu'},
        {'first_name' : 'Sally', 'last_name' : 'Barkyoumb'}
    ],
    managers: [
       {'first_name' : 'Lillian', 'last_name' : 'Chambers'},
       {'first_name' : 'Gordon', 'last_name' : 'Poe'}
    ]
 };

 users(arr);