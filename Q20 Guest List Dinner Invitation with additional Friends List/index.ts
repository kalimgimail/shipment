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
let dinnerMembers :string [] = ["Bill Gates", "Paul Allen", "William Henry Gates III"]
const MarkPersonToExclude = "William Henry Gates III"

// const newMember : string = "Steve jobs"
const newMember :string []= ["Steve jobs","Steve Wozniak","PepsiCo's John Sculley"]


/** generic functions to execute the code */
function applyFilterToExcludeList<T>(sourceArray: T[], filterCondition: (item: T) => boolean): T[] {
    return sourceArray.filter(filterCondition);
}

/* Filter Expression */
const filterConditionMatchExact     = (item: string)    =>     item===MarkPersonToExclude; // 
const filterConditionOtherthanMatch = (item: string)    =>     item!==MarkPersonToExclude; // 


/*Implementation code */ 

// console.log("Excluded List Of Dinner Members/Friend is:=> ", ExcludedListOfMembers); 

function CleanlistOfMemberWithUpgradedList<T>(sourceArray: T[], filterCondition: (item: T) => boolean, filteredArray: T[]): T[] {
    let mergArrays = sourceArray.concat(filteredArray)
    return applyFilterToExcludeList(mergArrays, filterCondition);
}

let ExcludedListOfMembers = applyFilterToExcludeList( dinnerMembers, filterConditionOtherthanMatch)
console.log("Excluding the Missing Friends :=>",  `${ExcludedListOfMembers}`)

// Inform people about the bigger dinner table
console.log("Great news! We've found a bigger dinner table.");

/* Add new 3 members in the Guest List */
let dinnerMembersUpdatedList = CleanlistOfMemberWithUpgradedList( dinnerMembers, filterConditionOtherthanMatch, newMember)

//Display the Updated list of Friends
dinnerMembersUpdatedList.forEach( (friend)=>{
    console.log ( `\tDear ${friend}, Please join us the dinner "at 8:00 PM" `)
    
}) 
