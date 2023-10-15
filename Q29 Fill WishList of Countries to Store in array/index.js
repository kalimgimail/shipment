/*
    Question:
    Seeing the World:
    Think of at least five places in the world you’d like to visit.
    in a array. Make sure the array is not in alphabetical order.
 

    Description:
    Seeing the World: Think of at least five places in the world you’d like to visit.


    Dated:  03rd Sep, 2023
    Author/Student: Kaleem
    Other Resource helpers : Chatgpt 3.5

    Possibe Solution:
        store the name of the five countries in variables
        and display them
*/
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
function UnsortedorShuffle(array) {
    var shuffledArray = __spreadArray([], array, true);
    var currentIndex = shuffledArray.length;
    var randomIndex, tempValue;
    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
        // Swap elements at randomIndex and currentIndex
        tempValue = shuffledArray[currentIndex];
        shuffledArray[currentIndex] = shuffledArray[randomIndex];
        shuffledArray[randomIndex] = tempValue;
    }
    return shuffledArray;
}
var cityBraker = '\n';
var wish_list_of_country_1 = "Saudi Arabia";
var wish_list_of_country_2 = "Libya";
var wish_list_of_country_3 = "Iraq";
var wish_list_of_country_4 = "Dubai";
var wish_list_of_country_5 = "Qatar";
var WishList = [];
WishList.unshift(wish_list_of_country_1, wish_list_of_country_2, wish_list_of_country_3, wish_list_of_country_4, wish_list_of_country_5);
console.log(WishList);
var NewArray = UnsortedorShuffle(WishList);
console.log(NewArray);
