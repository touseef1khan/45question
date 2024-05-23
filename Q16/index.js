//16.More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
//• Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.
//• Add one new guest to the beginning of your array.
//• Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. • Print a new set of invitation messages, one for each person in your list.
var guestlist = ["touseef", "saim", "ali",];
console.log("Great News! we found a bigger table");
//unshift
guestlist.unshift("hammad");
//splice()
guestlist.splice(Math.floor(guestlist.length / 2), 0, "Nouman");
//push():
guestlist.push("cheetah");
console.log(guestlist);
//for each
guestlist.forEach(function (guest) {
    console.log("Dear ".concat(guest, ", you  all are cordially invited to dinner"));
});
