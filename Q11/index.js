//11.Names: Store the names of a few of your friends in a array called names. Print each person’s name by accessing each element in the list, one at a time.
//array
//Define an array of names
var names = ["Touseef", "Nouman", "saim", "Ali",];
//loop
//for each
// for loop
for (var i = 0; i < names.length; i++) {
    console.log(names[i]);
}
//for each
names.forEach(function (name) {
    console.log(name);
});
// for of loop
for (var _i = 0, names_1 = names; _i < names_1.length; _i++) {
    var friendName = names_1[_i];
    console.log(friendName);
}
