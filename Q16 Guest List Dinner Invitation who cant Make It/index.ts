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

let dinnerMembers :string [] = ["Bill Gates", "Paul Allen", "William Henry Gates III"]
const MarkPersonToExclude = "William Henry Gates III"

const filterCondition = (item: string) => item===MarkPersonToExclude; // 

function applyFilterToExcludeList<T>(sourceArray: T[], filterCondition: (item: T) => boolean): T[] {
    return sourceArray.filter(filterCondition);
}
function CleanlistOfMemberWithUpgradedList<T>(sourceArray: T[], filterCondition: (item: T) => boolean, filteredArray: T[]): T[] {
    let mergArrays = sourceArray.concat(filteredArray)
    return applyFilterToExcludeList(mergArrays, filterCondition);
}

let ExcludedListOfMembers = applyFilterToExcludeList( dinnerMembers, filterCondition)
console.log("Excluded List Of Dinner Members/Friend is:=> ", ExcludedListOfMembers); 

