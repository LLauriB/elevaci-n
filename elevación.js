//1
console.log(hello);                                   
var hello = 'world';                                 
//var hello;
//console.log(hola);// undefined
//hello= "World";

//2
var needle = 'haystack';
test();
function test(){
    var needle = 'magnet';
    console.log(needle);
}

//var needle = 'haystack';
//funcion test
//function test
//var needle= magnet;
//console.log(magnet)

//3
var brendan = 'super cool';
function print(){
    brendan = 'only okay';
    console.log(brendan);
}
console.log(brendan);

// var brendan = 'super cool';
//function print;
//var brendan;
//brendan = 'only okay';
//console.log('super cool')

//4
var food = 'chicken';
console.log(food);
eat();
function eat(){
    food = 'half-chicken';
    console.log(food);
    var food = 'gone';
}

//var food = 'chicken';
//console.log('chicken'); 
// function eat();
//function eat(){
//var food;
// food = 'half-chicken';
//food = 'gone';

//5
mean();
console.log(food);
var mean = function() {
    food = "chicken";
    console.log(food);
    var food = "fish";
    console.log(food);
}
console.log(food);

//var food;
//function mean();
//mean = function()
//var mean= function{
//var food;
//var food;
//food = "chicken"; 
//food = "fish";
//console.log("chicken");

//6
console.log(genre);
var genre = "disco";
rewind();
function rewind() {
    genre = "rock";
    console.log(genre);
    var genre = "r&b";
    console.log(genre);
}
console.log(genre);

//var genre = "disco";
//function rewind;
//console.log()

//7
dojo = "san jose";
console.log(dojo);
learn();
function learn() {
    dojo = "seattle";
    console.log(dojo);
    var dojo = "burbank";
    console.log(dojo);
}
console.log(dojo);

//dojo = "san jose";
//console.log();
//function learn();
//console.log()

//8
console.log(makeDojo("Chicago", 65));
console.log(makeDojo("Berkeley", 0));
function makeDojo(name, students){
    const dojo = {};
    dojo.name = name;
    dojo.students = students;
    if(dojo.students > 50){
        dojo.hiring = true;
    }
    else if(dojo.students <= 0){
        dojo = "closed for now";
    }
    return dojo;
}


//console.log();
//console.log(makeDojo();
//function makeDojo("Chicago"; "Berkeley", 65; 0)
//const dojo = {
//      name: "Chicago";
//      students: 65};
//      name: "Berkeley"";
//      students: 0}
//if(dojo.students > 50){
//dojo.hiring = true;
//}
//else if(dojo.students <= 0){
//dojo = "closed for now";
//}
//return dojo;






