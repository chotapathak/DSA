let users = [
    { firstName: "Nrupul", lastName: "Dev", place: "Banglore" },
    { firstName: "Prateek", lastName: "Shukla", place: "Banglore" },
    { firstName: "Yogesh", lastName: "Bhat", place: "Kolkata" },
  ];

// users.map(fullname)


users.filter(
function findCity(obj){
    return obj.place == 'Banglore'
}).map(fullname)
function fullname(obj) {
    let fullname = [obj.firstName, obj.lastName].join(' ');
    console.log(fullname);
}
