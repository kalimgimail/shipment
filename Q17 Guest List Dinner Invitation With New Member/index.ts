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

const filterCondition = (item: string) => item!==MarkPersonToExclude; // 


function applyFilterToExcludeList<T>(sourceArray: T[], filterCondition: (item: T) => boolean): T[] {
    return sourceArray.filter(filterCondition);
}


let UpdatedListOfMembers = applyFilterToExcludeList( dinnerMembers, filterCondition)
console.log("Updated Dinner Members/Friend is:=> ", UpdatedListOfMembers); 


function CleanlistOfMemberWithUpgradedList<T>(sourceArray: T[], filterCondition: (item: T) => boolean, filteredArray: T[]): T[] {
    let mergArrays = sourceArray.concat(filteredArray)
    return applyFilterToExcludeList(mergArrays, filterCondition);
}

let dinnerMembersUpdatedList = CleanlistOfMemberWithUpgradedList( dinnerMembers, filterCondition, [MarkPersonToExclude, "{New Invitation at dinner} Friends for all -> Panaverse team", MarkPersonToExclude])
console.log("Here is Updated List of Dinner Friends Tonight:=>",dinnerMembersUpdatedList);
// dinnerMembersUpdatedList.forEach( (friend)=>{
//     console.log ( `"We will meet at dinner at 8:00 PM" \n Dear ${friend}, Lets get-together to Earn best of time `)
// }) 

