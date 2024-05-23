//19.Dinner Guests: Working with one of the programs from Exercises 14 through 18, print a message indicating the number of people you are inviting to dinner.
var guestlist = ["touseef", "saim", "ali",];
//print message
console.log("unfortuately! the new dinner table table wont arrive so we can invite 2 guest");
guestlist.unshift("alice", "bob");
//print message updated list
console.log("updated list of gust:", guestlist);
//remove guest from the list 
while (guestlist.length > 2) {
    var removedGuest = guestlist.pop();
    if (removedGuest !== undefined) {
        console.log("sorry, ".concat(removedGuest, ", we cant invite you"));
    }
}
//• Print a message to each of the two people still on your list, letting them know they’re still invited.
guestlist.forEach(function (guest) {
    console.log("Dear ".concat(guest, ",you both are invited for the dinner"));
});
//remove 2 names from the list
guestlist.splice(0, guestlist.length);
//print updatedempty list
console.log("updated list of guest:", guestlist);
