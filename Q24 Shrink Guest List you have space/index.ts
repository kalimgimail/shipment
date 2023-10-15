/*
    Question: Shrinking of Guest List 

    Description:
        Start with your program from Exercise 16. Add a new line that 
        prints a message saying that you can invite only two people for dinner.
    
    Dated:  30th Aug, 2023
    Author/Student: Kaleem
    Other Resource helpers : Chatgpt 3.5

    Possibe Solution: 
            Loop - conditional loop while etc..
            builtin functionality

*/
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
    const middle        =   Math.floor(source.length/2)
    const first         =   source.filter ( (_, index)  =>  index<middle)
    const second        =   source.filter ( (_, index) =>   index>=middle)
    first.push ( src )

    return first.concat (second)
}

function SplitArrayAndAddNewItemIntoMiddle <T> ( src:T[], newAddition:T):T[]
{
    let middlevalue     : number = Math.floor(src.length/2)
    
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
// --------------------------------------------
/* module level variables */
let count =1

const NewLine = "\n"
const Tab     = "\t"
const Line    = '-'.repeat(25)
const retainMembersLimit = 2
const messageAppology =`Due to the unavalablity of the reserved Table of 3 members,\ni can invite only 2 members for the dinner table \n`

const dinnerMembers :string [] = ["Bill Gates", "Paul Allen", "William Henry Gates III"]
const MarkPersonToExclude = "William Henry Gates III"
// const NewFriendsList :string []= ["Steve jobs","Steve Wozniak","PepsiCo's John Sculley"]
// let txt_Appologies =`Unfortunatly!! We have been informed!${NewLine} ${NewLine} ${Tab}that the dinner table still not arrived, Only Two reservations are Confirmed,${NewLine}${NewLine}My appologies${NewLine}${NewLine}${Line}${Line} `

/** generic functions to execute the code */
function applyFilterToExcludeList<T>(sourceArray: T[], filterCondition: (item: T) => boolean): T[] {
    return    sourceArray.filter(filterCondition);
}

/* Filter Expression */
const filterConditionMatchExact     = (item: string)    =>     item===MarkPersonToExclude; // 
const filterConditionOtherthanMatch = (item: string)    =>     item!==MarkPersonToExclude; // 


/*Implementation code */ 

// this will add a new Member in the middle of the array 
const Updatedlist =applyFilterToExcludeList (dinnerMembers, filterConditionOtherthanMatch)

console.log(messageAppology)
Updatedlist.forEach( (element)=>{ 
    console.log(count++,  element) 
}
)