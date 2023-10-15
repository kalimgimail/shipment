/*
    Question: Shrinking of Guest List 

    Description:
        You just found out that your new dinner 
        table won’t arrive in time for the dinner, and you have space 
        for only two guests.

    Dated:  30th Aug, 2023
    Author/Student: Kaleem
    Other Resource helpers : Chatgpt 3.5

    Possibe Solution: 
        remove the elements of the array through 
            Loop - conditional loop while etc..
            builtin functionality

*/

/* module level variables */
const NewLine = "\n"
const Tab     = "\t"
const Line    = '-'.repeat(25)
const retainMembersLimit = 2

const dinnerMembers :string [] = ["Bill Gates", "Paul Allen", "William Henry Gates III"]
const MarkPersonToExclude = "William Henry Gates III"
const NewFriendsList :string []= ["Steve jobs","Steve Wozniak","PepsiCo's John Sculley"]

let txt_Appologies =`Unfortunatly!! We have been informed!${NewLine} ${NewLine} ${Tab}that the dinner table still not arrived, Only Two reservations will be available,${NewLine}${NewLine}My appologies${NewLine}${NewLine}${Line}${Line} `

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

// this will add a new Member in the middle of the array 
let nSplitArray         =       SplitArrayAndAddNewItemIntoMiddle(dinnerMembers, "Habib Jalib")

// this will append a new member at the end of the array 
nSplitArray             =       append (nSplitArray, "Naeem Bukhari")

// let count : number = 0
// // //// Loop to Displays the array data 
// nSplitArray.forEach( (friend)=>{
//     txt_Appologies += `${NewLine} ${++count} Dear Friend, ${friend} our reservation is confirmed `
// })

//// pop method of the array  

//removes all elements from array except 1st 2
// nSplitArray.splice(retainMembersLimit,nSplitArray.length)

//remove elements throug loop
// while (nSplitArray.length > retainMembersLimit)
// {
//     const removeMember      =    nSplitArray.pop()
//     console.log(`It was very Unfortunate ${removeMember} to Drop you from our twomorrow Dinner reservation `)
// }

console.log(`${Line} ${NewLine} ${txt_Appologies}`)
