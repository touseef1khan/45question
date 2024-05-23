//43.Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a copy of the array of magicians’ names. Because the original array will be unchanged, return the new array and store it in a separate array. Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name.
function show_magicians(Magicians) {
    for (var _i = 0, Magicians_1 = Magicians; _i < Magicians_1.length; _i++) {
        var magician = Magicians_1[_i];
        console.log(magician.charAt(0).
            toUpperCase() + magician.slice(1));
    }
}
function make_great2(Magicians) {
    var greatMagicians = [];
    for (var i = 0; i < Magicians.length; i++) {
        greatMagicians.push(Magicians[i] + ' the Great');
    }
    return greatMagicians;
}
var Magicians3 = ['Touseef', 'Hanif', 'Ali', 'Usman'];
var greatMagicians2 = make_great2(Magicians3);
show_magicians(Magicians3);
show_magicians(Magicians3);
show_magicians(greatMagicians2);
