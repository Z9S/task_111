'use strict';

var main = require ("../main/main.js");

describe('The_beer_song', function() {

    it('returns when given the number greater than 1', function() {
        var num = 99;
        var result = main(num);
        expect(result).toEqual("99 bottles of beer on the wall, 99 bottles of beer.\n" +
            "   Take one down and pass it around, 98 bottles of beer on the wall.");
    });

    it('returns when given the number equals 1', function() {
        var num = 1;
        var result = main(1);
        expect(result).toEqual("1 bottle of beer on the wall, 1 bottle of beer.\n" +
            "Take one down and pass it around, no more bottles of beer on the wall.");
    });

    it('returns when given the number equals 0', function() {
        var num = 0;
        var result = main(num);
        expect(result).toEqual("No more bottles of beer on the wall, no more bottles of beer.\n" +
            "Go to the store and buy some more, 99 bottles of beer on the wall.");
    });

    it('returns when given the number less than 1', function() {
        var num = -1;
        var result = main(num);
        expect(result).toEqual("");
    });

});



