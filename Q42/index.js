//42.Great Magicians: Start with a copy of your program from Exercise 39. Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name. Call show_magicians() to see that the list has actually been modified.
function show_magicians(magicians) {
    //print the list of magicians
    magicians.forEach(function (magicians) {
        return console.log(magicians);
    });
}
function make_great(magicians) {
    //Add 'the great' to each magicians name
    for (var i = 0; i < magicians.length; i++) {
        magicians[i] += " the great";
    }
}
//Original list of magicians
var magicians = ["Touseef", "Ali", "Alizy"];
console.log("Original list of magicians");
show_magicians(magicians);
//Add 'the great' to each magicians's name
make_great(magicians);
console.log("\nModified list of magicians");
show_magicians(magicians);
