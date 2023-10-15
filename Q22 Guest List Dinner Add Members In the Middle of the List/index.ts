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
/* this will add a new member at the start of the array */ 
function MakeCopyAndUnshiftFromStart<T>(sourceArray: T[], filterCondition: (item: T) => boolean, NewMememberArray: T): T[]{

    const Updatedlist = [...sourceArray]
    Updatedlist.unshift ( NewMememberArray)
    return Updatedlist
}

/* 
    this lib function will add a new value in the middle of the array 
    but the memory consumption may be compromise when it takes hudge data

*/
function SplitArrayintoTwo <T>( source: T[], src:T ) : T[]{
    const middle    =   Math.floor(source.length/2)
    const first     =   source.filter ( (_, index)  =>  index<middle)
    const second    =   source.filter ( (_, index) =>   index>=middle)
    first.push ( src )

    return first.concat (second)
}

function SplitArrayAndAddNewItemIntoMiddle <T> ( src:T[], newAddition:T):T[]
{
    let middlevalue : number = Math.floor(src.length/2)
    
    const firstPart     =   src.slice(0, middlevalue )
    const secondPart    =   src.slice(middlevalue)

    let result          =   append (firstPart, newAddition)
    result              =   result.concat(secondPart)

    return firstPart.concat(secondPart)
    
}

function append<T>(arrayData:T[], OjectData:T) : T[]
{
    arrayData.push (OjectData)
    return arrayData
}

// this will add a new Member in the middle of the array 
let nSplitArray =       SplitArrayAndAddNewItemIntoMiddle(dinnerMembers, "Habib Jalib")

// this will append a new member at the end of the array 
nSplitArray     =       append (nSplitArray, "Naeem Bukhari")

// loop to navigate through array & Display message for each member of the array 
nSplitArray.forEach( (friend)=>{
    console.log ( `Dear ${friend}, Lets join the dinner "at 8:00 PM" `)
}) 