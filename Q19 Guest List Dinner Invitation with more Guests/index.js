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
*/
/* module level variables */
var dinnerMembers = ["Bill Gates", "Paul Allen", "William Henry Gates III"];
var MarkPersonToExclude = "William Henry Gates III";
// const newMember : string = "Steve jobs"
var newMember = ["Steve jobs", "Steve Wozniak", "PepsiCo's John Sculley"];
/** generic functions to execute the code */
function applyFilterToExcludeList(sourceArray, filterCondition) {
    return sourceArray.filter(filterCondition);
}
/* Filter Expression */
var filterConditionMatchExact = function (item) { return item === MarkPersonToExclude; }; // 
var filterConditionOtherthanMatch = function (item) { return item !== MarkPersonToExclude; }; // 
/*Implementation code */
// console.log("Excluded List Of Dinner Members/Friend is:=> ", ExcludedListOfMembers); 
function CleanlistOfMemberWithUpgradedList(sourceArray, filterCondition, filteredArray) {
    var mergArrays = sourceArray.concat(filteredArray);
    return applyFilterToExcludeList(mergArrays, filterCondition);
}
var ExcludedListOfMembers = applyFilterToExcludeList(dinnerMembers, filterConditionOtherthanMatch);
console.log("Let review the Guest list :=>", "".concat(ExcludedListOfMembers));
// let dinnerMembersUpdatedList = CleanlistOfMemberWithUpgradedList( dinnerMembers, filterConditionOtherthanMatch, newMember)
console.log("We have more spaces available, we should Invite atleast 3 more guests list\n", "".concat(newMember));
//console.log (`We should invite : ${newMember}`)
// dinnerMembersUpdatedList.forEach( (friend)=>{
//     console.log ( `\tDear ${friend}, Please join us the dinner "at 8:00 PM" `)
// }) 
console.log("\nI think we should reserve a bigger table \n\n");
