/*
    Question:
    35 Print your array in reverse order.

    Description:

    Dated:  03rd Sep, 2023
    Author/Student: Kaleem
    Other Resource helpers : Chatgpt 3.5

    Possibe Solution:
        store the name of the five countries in variables
        and display them
*/
var cityBraker = '\n';
var wish_list_of_country_1 = "Saudi Arabia";
var wish_list_of_country_2 = "Libya";
var wish_list_of_country_3 = "Iraq";
var wish_list_of_country_4 = "Dubai";
var wish_list_of_country_5 = "Qatar";
var WishList = [];
WishList.unshift(wish_list_of_country_1, wish_list_of_country_2, wish_list_of_country_3, wish_list_of_country_4, wish_list_of_country_5);
console.log("Orignal:", WishList);
WishList.sort(function (a, b) { return a.localeCompare(b); });
console.log("Sorted view: ", WishList);
