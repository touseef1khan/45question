//32.Checking Usernames: Do the following to create a program that simulates how websites ensure that everyone has a unique username.
//• Make a list of five or more usernames called current_users.
//• Make another list of five usernames called new_users. Make sure one or two of the new usernames are also in the current_users list.
//• Loop through the new_users list to see if each new username has already been used. If it has, print a message that the person will need to enter a new username. If a username has not been used, print a message saying that the username is available.
//• Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be accepted.
// List of current users
var current_users = ["Admin", "Touseef", "Ali", "Akbar"];
var new_users = ["Admin", "Hamza", "Hadeed", "Aliza", "Raza"];
new_users.forEach((function (new_one_users) {
    var our_condition = current_users.some(function (current_new_one) { return current_new_one.toLocaleLowerCase() === new_one_users.toLocaleLowerCase(); });
    if (our_condition) {
        console.log("sorry ".concat(new_one_users, " is already been used"));
    }
    else {
        console.log("This ".concat(new_one_users, " is available."));
    }
}));
