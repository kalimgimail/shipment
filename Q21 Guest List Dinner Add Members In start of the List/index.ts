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

/* module level variables */
let dinnerMembers :string [] = ["Bill Gates", "Paul Allen", "William Henry Gates III"]
const MarkPersonToExclude = "William Henry Gates III"

const NewFriendsList :string []= ["Steve jobs","Steve Wozniak","PepsiCo's John Sculley"]

/** generic functions to execute the code */
function applyFilterToExcludeList<T>(sourceArray: T[], filterCondition: (item: T) => boolean): T[] {
    return sourceArray.filter(filterCondition);
}

/* Filter Expression */
const filterConditionMatchExact     = (item: string)    =>     item===MarkPersonToExclude; // 
const filterConditionOtherthanMatch = (item: string)    =>     item!==MarkPersonToExclude; // 


/*Implementation code */ 

// let ExcludedListOfMembers = applyFilterToExcludeList( dinnerMembers, filterConditionOtherthanMatch)
// console.log("Excluded List Of Dinner Members/Friend is:=> ", ExcludedListOfMembers); 

function MakeCopyAndUnshiftFromStart<T>(sourceArray: T[], filterCondition: (item: T) => boolean, NewMememberArray: T): T[]{

   // let mergArrays = sourceArray.concat(filteredArray)
    const Updatedlist = [...sourceArray]
    Updatedlist.unshift(NewMememberArray)   
    return Updatedlist
}

let dinnerMembersUpdatedList = MakeCopyAndUnshiftFromStart( dinnerMembers, filterConditionOtherthanMatch, "Putin")

dinnerMembersUpdatedList.forEach( (friend)=>{
    console.log ( `Dear ${friend}, Lets join the dinner "at 8:00 PM" `)
}) 