var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
/*
    Question: Shrinking of Guest List

    Description:
        Start with your program from Exercise 16. Add a new line that
        prints a message saying that you can invite only two people for dinner.
    
    Dated:  30th Aug, 2023
    Author/Student: Kaleem
    Other Resource helpers : Chatgpt 3.5

    Possibe Solution:
            Loop - conditional loop while etc..
            builtin functionality

*/
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
// --------------------------------------------
/* module level variables */
var count = 1;
var NewLine = "\n";
var Tab = "\t";
var Line = '-'.repeat(25);
var retainMembersLimit = 2;
var messageAppology = "Due to the unavalablity of the reserved Table of 3 members,\ni can invite only 2 members for the dinner table \n";
var dinnerMembers = ["Bill Gates", "Paul Allen", "William Henry Gates III"];
var MarkPersonToExclude = "William Henry Gates III";
// const NewFriendsList :string []= ["Steve jobs","Steve Wozniak","PepsiCo's John Sculley"]
// let txt_Appologies =`Unfortunatly!! We have been informed!${NewLine} ${NewLine} ${Tab}that the dinner table still not arrived, Only Two reservations are Confirmed,${NewLine}${NewLine}My appologies${NewLine}${NewLine}${Line}${Line} `
/** generic functions to execute the code */
function applyFilterToExcludeList(sourceArray, filterCondition) {
    return sourceArray.filter(filterCondition);
}
/* Filter Expression */
var filterConditionMatchExact = function (item) { return item === MarkPersonToExclude; }; // 
var filterConditionOtherthanMatch = function (item) { return item !== MarkPersonToExclude; }; // 
/*Implementation code */
// this will add a new Member in the middle of the array 
var Updatedlist = applyFilterToExcludeList(dinnerMembers, filterConditionOtherthanMatch);
console.log(messageAppology);
Updatedlist.forEach(function (element) {
    console.log(count++, element);
});
