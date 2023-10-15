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
var dinnerMembers = ["Bill Gates", "Paul Allen", "William Henry Gates III"];
var MarkPerson = "William Henry Gates III";
var filterCondition = function (item) { return item !== MarkPerson; }; // 
function applyStringFilter(sourceArray, filterCondition) {
    return sourceArray.filter(filterCondition);
}
function applyFilterCleanData(sourceArray, filterCondition, filteredArray) {
    var result = sourceArray.concat(filteredArray);
    return applyStringFilter(result, filterCondition);
}
var result = applyFilterCleanData(dinnerMembers, filterCondition, [MarkPerson, "Friends for all -> Panaverse team", MarkPerson]);
console.log(result);
