//11.Names: Store the names of a few of your friends in a array called names. Print each person’s name by accessing each element in the list, one at a time.
//array
//Define an array of names
let names: string[]=["Touseef","Nouman","saim","Ali",];

//loop
//for each
// for loop

for (let i = 0; i < names.length; i++) {
    console.log(names [i]);
}

//for each
names.forEach(name =>{
console.log(name);
});

// for of loop
for (const friendName of names) {
console.log(friendName);
}