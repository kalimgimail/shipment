/*
    Question: Guest List Dinner Invitation

    Description:
        If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list
        that includes at least three people you’d like to invite to dinner. Then use your list to print a
        message to each person, inviting them to dinner.


    Dated:  30th Aug, 2023

    Author/Student:
        Kaleem
    
    Other Resource helpers : Chatgpt 3.5

    Possibe Solution:
        navigation through dinnerMembers and apply condition over the values
        easy and understandable
        The ... spread operator is a feature in JavaScript and TypeScript that allows you to
        spread the elements of an iterable (like an array) into another array or object.
        It provides a concise way to copy, merge, or create new arrays or objects based
        on existing ones.
        (...) The spread operator is a powerful tool for working with arrays and objects
        in a more convenient and readable way. It's widely used in modern JavaScript
        and TypeScript for tasks like array manipulation, function arguments, and object cloning.


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
var dinnerMembers = ["Bill Gates", "Paul Allen", "William Henry Gates III"];
var MarkPersonToExclude = "William Henry Gates III";
var NewFriendsList = ["Steve jobs", "Steve Wozniak", "PepsiCo's John Sculley"];
/** generic functions to execute the code */
function applyFilterToExcludeList(sourceArray, filterCondition) {
    return sourceArray.filter(filterCondition);
}
/* Filter Expression */
var filterConditionMatchExact = function (item) { return item === MarkPersonToExclude; }; // 
var filterConditionOtherthanMatch = function (item) { return item !== MarkPersonToExclude; }; // 
/*Implementation code */
// let ExcludedListOfMembers = applyFilterToExcludeList( dinnerMembers, filterConditionOtherthanMatch)
// console.log("Excluded List Of Dinner Members/Friend is:=> ", ExcludedListOfMembers); 
function MakeCopyAndUnshiftFromStart(sourceArray, filterCondition, NewMememberArray) {
    var Updatedlist = __spreadArray([], sourceArray, true);
    Updatedlist.unshift(NewMememberArray);
    return Updatedlist;
}
function SplitArrayintoTwo(source, src) {
    var middle = Math.floor(source.length / 2);
    var first = source.filter(function (_, index) { return index < middle; });
    var second = source.filter(function (_, index) { return index >= middle; });
    first.push(src);
    return first.concat(second);
}
function SplitArrayAndAddIntoMiddle(src, newAddition) {
    var middlevalue = Math.floor(src.length / 2);
    //const firstPart     = src.splice(0, middlevalue) 
    //const secondPart    = src.splice(middlevalue, src.length)
    var firstPart = src.slice(0, middlevalue);
    var secondPart = src.slice(middlevalue);
    firstPart.push(newAddition);
    return firstPart.concat(secondPart);
}
// dinnerMembers = applyFilterToExcludeList(dinnerMembers ,filterConditionOtherthanMatch)
var dinnerMembersUpdatedList = MakeCopyAndUnshiftFromStart(dinnerMembers, filterConditionOtherthanMatch, "Putin");
// dinnerMembersUpdatedList.forEach( (friend)=>{
//     console.log ( `Dear ${friend}, Lets join the dinner "at 8:00 PM" `)
// }) 
// const nArray=SplitArrayintoTwo(dinnerMembersUpdatedList, "Hitler")
var nSplitArray = SplitArrayAndAddIntoMiddle(dinnerMembers, "Mark --");
console.log(
//nArray,
//    dinnerMembers, 
nSplitArray
//dinnerMembersUpdatedList.slice(0, 2) ,
//dinnerMembersUpdatedList.splice(0,1),
//dinnerMembersUpdatedList
);
