/*
    Question: Shrinking of Guest List and do let them know

    Description:
        Remove guests from your list one at a time until only two names remain
        in your list. Each time you pop a name from your list, print a message
        to that person letting them know you’re sorry you can’t invite them to
        dinner.

    Dated:  30th Aug, 2023
    Author/Student: Kaleem
=

    Possibe Solution:
        remove the elements of the array through
        Loop - conditional loop while etc..
        draw mesage for the remove member
        

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
var NewLine = "\n";
var Tab = "\t";
var Line = '-'.repeat(25);
var retainMembersLimit = 2;
var dinnerMembers = ["Bill Gates", "Paul Allen", "William Henry Gates III"];
var MarkPersonToExclude = "William Henry Gates III";
var NewFriendsList = ["Steve jobs", "Steve Wozniak", "PepsiCo's John Sculley"];
var txt_Appologies = "Unfortunatly!! We have been informed!".concat(NewLine, " ").concat(NewLine, " ").concat(Tab, "that the dinner table still not arrived, Only Two reservations will be available,").concat(NewLine).concat(NewLine, "My appologies").concat(NewLine).concat(NewLine).concat(Line).concat(Line, " ");
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
// remove elements throug loop
while (nSplitArray.length > retainMembersLimit) {
    var removeMember = nSplitArray.pop();
    console.log("It was very Unfortunate ".concat(removeMember, " to Drop you from our towmorrow's Dinner reservation "));
}
