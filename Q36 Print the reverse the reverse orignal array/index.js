"use strict";
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
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
var cityBraker = '\n';
var wish_list_of_country_1 = "Saudi Arabia";
var wish_list_of_country_2 = "Libya";
var wish_list_of_country_3 = "Iraq";
var wish_list_of_country_4 = "Dubai";
var wish_list_of_country_5 = "Qatar";
var WishList = [];
WishList.unshift(wish_list_of_country_1, wish_list_of_country_2, wish_list_of_country_3, wish_list_of_country_4, wish_list_of_country_5);
var WishListcn = __spreadArray([], WishList, true);
console.log(WishList);
