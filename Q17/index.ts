//17.Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
//• Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.

//• Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.

//• Print a message to each of the two people still on your list, letting them know they’re still invited.

//• Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program.

let guestlist:string[] = ["touseef", "saim", "ali", ];
//print message
console.log("unfortuately! the new dinner table table wont arrive so we can invite 2 guest");

guestlist.unshift("alice", "bob");

//print message updated list

console.log("updated list of gust:", guestlist);

//remove guest from the list 
while (guestlist.length > 2) {
    let removedGuest :string | undefined = guestlist.pop()
    if (removedGuest !== undefined) {
console.log(`sorry, ${removedGuest}, we cant invite you`);
    }
}

//• Print a message to each of the two people still on your list, letting them know they’re still invited.

guestlist.forEach(guest =>{
    console.log(`Dear ${guest},you both are invited for the dinner`);
    
})

//remove 2 names from the list
guestlist.splice(0, guestlist.length)

//print updatedempty list

console.log("updated list of guest:", guestlist);
