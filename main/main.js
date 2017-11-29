'use strict';

function main(num) {
    if (num > 1) {
        return num + " bottles of beer on the wall, " + num + " bottles of beer.\n" +
            "   Take one down and pass it around, " + (num -1)  + " bottles of beer on the wall.";
    }
    else if (num === 1) {
        return "1 bottle of beer on the wall, 1 bottle of beer.\n" +
            "Take one down and pass it around, no more bottles of beer on the wall.";
    }
    else if (num === 0) {
        return "No more bottles of beer on the wall, no more bottles of beer.\n" +
            "Go to the store and buy some more, 99 bottles of beer on the wall.";
    }
    else {
        return "";
    }

}

module.exports = main;