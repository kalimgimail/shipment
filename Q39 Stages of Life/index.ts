/*
    Question:
    Question: 39 
    Stages of Life: Write an if-else chain that determines a person’s stage of life. Set a value for the variable age, and then:
        • If the person is less than 2 years old, print a message that the person is a baby.
        • If the person is at least 2 years old but less than 4, print a message that the person is a toddler.
        • If the person is at least 4 years old but less than 13, print a message that the person is a kid.
        • If the person is at least 13 years old but less than 20, print a message that the person is a teenager.
        • If the person is at least 20 years old but less than 65, print a message that the person is an adult.
        • If the person is age 65 or older, print a message that the person is an elder.


    Description:

    Dated:  14th Oct, 2023
    Author/Student: Kaleem
    Other Resource helpers : Chatgpt 3.5

    Possibe Solution:
        practices over if then else
*/

function StagesOfLife ( Keyid : number):string {
    let returnText : string ='';

    if ( Keyid < 2 ) { returnText="Person is a baby";} 
    else if( Keyid >=2 && Keyid <4)
    { returnText="Person is a todler";} 
    else if( Keyid >=4 && Keyid <13)
    { returnText="Person is a Kid";} 
    else if( Keyid >=13 && Keyid <20)
    { returnText="Person is a teenager";} 
    else if( Keyid >=20 && Keyid <65)
    { returnText="Person is a Adult";} 
    else if( Keyid >=65 )
    { returnText="Person is a Elder";} 


    return returnText 
}

const personAge : number = 53
console.log(StagesOfLife ( personAge ))



