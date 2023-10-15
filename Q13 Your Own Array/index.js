/*
    Question: Your Own Array

    Description:
            Think of your favorite mode of transportation,
            such as a motorcycle or a car,
            and make a  list that stores several examples.
            Use your list to print a series of statements about these
            items, such as “I would like to own a Honda motorcycle.”

    Dated:  29th Aug, 2023

    Author/Student:
        Kaleem
    
    Other Resource helpers : Chatgpt 3.5

    Possibe Solution:
        . counter loop to access each element of any array
        
*/
var expression = "Eagle";
var expression_else = "Kawasaki";
var vehicleBrands = ["Honda", "Kawasaki", "Toyota", "Eagle"];
vehicleBrands.forEach(function (element) {
    if (element == expression) {
        console.log("A would like to buy Cycle of " + element);
    }
    else if (element == expression_else) {
        console.log("A would like to buy Motorcycle of " + element);
    }
    else {
        console.log("A would like to buy a car of " + element);
    }
});
