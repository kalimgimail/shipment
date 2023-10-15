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
var NewMember = "Magic Johson";
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
function CleanlistOfMemberWithUpgradedList(sourceArray, filterCondition, filteredArray) {
    var mergArrays = sourceArray.concat(filteredArray);
    return applyFilterToExcludeList(mergArrays, filterCondition);
}
// let dinnerMembersUpdatedList = CleanlistOfMemberWithUpgradedList( dinnerMembers, filterConditionOtherthanMatch, [MarkPersonToExclude, "{New Invitation at dinner} Friends for all -> Panaverse team", MarkPersonToExclude])
var dinnerMembersUpdatedList = CleanlistOfMemberWithUpgradedList(dinnerMembers, filterConditionOtherthanMatch, [NewMember]);
dinnerMembersUpdatedList.forEach(function (friend) {
    console.log("Dear ".concat(friend, ", Lets join the dinner \"at 8:00 PM\" "));
});
