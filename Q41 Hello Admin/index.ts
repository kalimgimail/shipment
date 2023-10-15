/*
    Question: 41 
    	Hello Admin: Make a array of five or more usernames, 
        including the name 'admin'. Imagine you are writing code that will 
        print a greeting to each user after they log in to a website. 
        Loop through the array, and print a greeting to each user:
        • If the username is 'admin', print a special greeting, such as 
            Hello admin, would you like to see a status report?
        • Otherwise, print a generic greeting, 
        such as Hello Eric, thank you for logging in again.


    Description:

    Dated:  14th Oct, 2023
    Author/Student: Kaleem
    Other Resource helpers : Chatgpt 3.5

    Possibe Solution:
        practices over if then else
*/

function UserAuth ( KeyName : string, Data:string[]):string {
    let returnText : string ='';
    // ["Admin", "Store", "Housekeeper", "Receptionist", "Guest"]
    if(KeyName.length > 3){
        Data.forEach( (xName)=>
        {
                if (xName === KeyName && (KeyName==='Admin' || KeyName.toLowerCase==='Admin'.toLocaleLowerCase) ){
                    returnText='I Love to eat ' + xName
                }else if (xName === KeyName && (KeyName==='Store' || KeyName.toLowerCase==='Store'.toLocaleLowerCase)){
                    returnText= xName + ' FROM GRN to Consumption, you haveto Log everything in system'
                }else if (xName === KeyName && (KeyName==='Housekeeper' || KeyName.toLowerCase==='Housekeeper'.toLocaleLowerCase)){
                    returnText= xName + ' your access is exists in all parts of organization'
                }
        })
    }
    if ( returnText == "")
    {
        returnText ="This Fruite is Not in My Favorite Collection"
    }

    return returnText 
}

const Users =["Admin", "Store", "Housekeeper", "Receptionist", "Guest"]
const activeUser : string = 'Guest' // mangoes, empty
console.log(UserAuth ( activeUser, Users ))
