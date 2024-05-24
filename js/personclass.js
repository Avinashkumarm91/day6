class Person{
    constructor(firstname,lastname,Dob,location)
    {
        this.firstname = firstname;
        this.lastname = lastname;
        this.Dob = Dob;
        this.location = location;
    }
}
var person1 = new Person("Avinash", "kumar", "14-08-1991" , "chennai");
var person2 = new Person("Rahul", "nair", "25-4-1992" , "chennai");
var person3 = new Person("Ragesh", "priyan", "21-4-1989" , "chennai");

console.log(person1.firstname);
console.log(person1.lastname);
console.log(person1.Dob);
console.log(person1.location);

console.log(person2.firstname);
console.log(person2.lastname);
console.log(person2.Dob);
console.log(person2.location);

console.log(person3.firstname);
console.log(person3.lastname);
console.log(person3.Dob);
console.log(person3.location);

console.log(`All the Person Names are, 
"person1" : ${person1.firstname}
"person2":${person2.firstname}
"person3":${person3.firstname}`)