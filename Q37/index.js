//37.Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love TypeScript. Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message.
function make_shirt(size, message) {
    if (size === void 0) { size = "L"; }
    if (message === void 0) { message = "I Love pakistan!"; }
    console.log("Im making a  ".concat(size, " T.shirt with the message \"").concat(message, "\"."));
}
make_shirt("Large", "I am typescript,");
make_shirt("Medium");
make_shirt("Small");
