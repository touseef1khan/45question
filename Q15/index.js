//15.Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.
//• Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest who can’t make it.
//• Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.
//• Print a second set of invitation messages, one for each person who is still in your list.
var guestlist = ["touseef", "saim", "ali",];
//print the name who cant dinner
var unableAttends = guestlist.splice(1, 1)[0];
console.log("".concat(unableAttends, " cant make dinner"));
//push
guestlist.push("Hina naseer");
//print message
guestlist.forEach(function (guest) {
    console.log("Dear ".concat(guest, ", you are cordially invited"));
});
//pop
