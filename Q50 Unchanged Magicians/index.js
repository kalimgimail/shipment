/*
    Question: 49
    Description:
        Great Magicians: Start with a copy of your program from
        Exercise 39. Write a function called make_great() that modifies
        the array of magicians by adding the phrase the Great to
        each magician’s name. Call show_magicians() to see that the list
        has actually been modified.
    
    Dated:  14th Oct, 2023
    Author/Student: Kaleem
    Other Resource helpers : Chatgpt 3.5

    Possibe Solution:
*/
function make_great(magicianArray) {
    var tmpArray = [];
    for (var _i = 0, magicianArray_1 = magicianArray; _i < magicianArray_1.length; _i++) {
        var x = magicianArray_1[_i];
        x = x + ' => Greate Magician';
        tmpArray.push(x);
    }
    return tmpArray;
}
function show_magicians(magicians) {
    if (magicians.length > 0) {
        magicians.forEach(function (element) {
            console.log(element);
        });
    }
}
var Magicians = ["Pakistani magicians", "Indian Magicians",
    "Chines Magicians", "American Magicians"];
var xNewMagicianArray = make_great(Magicians);
show_magicians(Magicians);
show_magicians(xNewMagicianArray);
