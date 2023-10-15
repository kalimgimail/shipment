/*
    Question: Shrinking of Guest List

    Description:
    Remove the last two names from your list, so you have an empty list.
    Print your list to make sure you actually have an empty list at the end of your program.

    Dated:  30th Aug, 2023
    Author/Student: Kaleem
    Other Resource helpers : Chatgpt 3.5

    Possibe Solution:
        remove the elements of the array through
            Loop - conditional loop while etc..
            builtin functionality

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
/* module level variables */
var count = 0;
var NewLine = "\n";
var Tab = "\t";
var Line = '-'.repeat(25);
var retainMembersLimit = 2;
var dinnerMembers = ["Bill Gates", "Paul Allen", "William Henry Gates III"];
var MarkPersonToExclude = "William Henry Gates III";
var NewFriendsList = ["Steve jobs", "Steve Wozniak", "PepsiCo's John Sculley"];
var txt_Appologies = "Unfortunatly!! We have been informed!".concat(NewLine, " ").concat(NewLine, " ").concat(Tab, "that the dinner table still not arrived, Only Two reservations will be available,").concat(NewLine).concat(NewLine, "My appologies").concat(NewLine).concat(NewLine).concat(Line).concat(Line, " ");
var txtGreetingMessage = "Dear Friend, <<>>We will meet on dinner";
/** generic functions to execute the code */
function applyFilterToExcludeList(sourceArray, filterCondition) {
    return sourceArray.filter(filterCondition);
}
/* Filter Expression */
var filterConditionMatchExact = function (item) { return item === MarkPersonToExclude; }; // 
var filterConditionOtherthanMatch = function (item) { return item !== MarkPersonToExclude; }; // 
/*Implementation code */
/* this will add a new member at the start of the array */
function MakeCopyAndUnshiftFromStart(sourceArray, filterCondition, NewMememberArray) {
    var Updatedlist = __spreadArray([], sourceArray, true);
    Updatedlist.unshift(NewMememberArray);
    return Updatedlist;
}
/*
    this lib function will add a new value in the middle of the array
    but the memory consumption may be compromise when it takes hudge data

*/
function SplitArrayintoTwo(source, src) {
    var middle = Math.floor(source.length / 2);
    var first = source.filter(function (_, index) { return index < middle; });
    var second = source.filter(function (_, index) { return index >= middle; });
    first.push(src);
    return first.concat(second);
}
function SplitArrayAndAddNewItemIntoMiddle(src, newAddition) {
    var middlevalue = Math.floor(src.length / 2);
    var firstPart = src.slice(0, middlevalue);
    var secondPart = src.slice(middlevalue);
    var result = append(firstPart, newAddition);
    result = result.concat(secondPart);
    return firstPart.concat(secondPart);
}
function append(arrayData, OjectData) {
    arrayData.push(OjectData);
    return arrayData;
}
// this will add a new Member in the middle of the array 
var nSplitArray = SplitArrayAndAddNewItemIntoMiddle(dinnerMembers, "Habib Jalib");
// this will append a new member at the end of the array 
nSplitArray = append(nSplitArray, "Naeem Bukhari");
// let count : number = 0
//// pop method of the array  
//removes all elements from array except 1st 2
nSplitArray.splice(retainMembersLimit, nSplitArray.length);
// console.log ( nSplitArray)
// // //// Loop to Displays the array data 
nSplitArray = nSplitArray.splice(0, nSplitArray.length);
if (nSplitArray.length > 0) {
    console.log("All dinner members/Friends are removed from the list");
}
else {
    console.log("still have someone in the list");
}
