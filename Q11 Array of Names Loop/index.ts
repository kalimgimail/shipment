/*
    Question: Array of Names

    Description:
        Store the names of a few of your friends in a array called names.
        Print each person’s name by 
        accessing each element in the list, one at a time.



    Dated:  29th Aug, 2023

    Author/Student:
        Kaleem

    Other Resource helpers : Chatgpt 3.5
    
    Possibe Solution: 
        1. Slice the array with 0 to length
        2. forEach 
        3. counter loop to access each element of any array
        4. callback mechanism : map just like forEach
    
*/


let FriendsList : string [] = ["C++", "COBOL","VB", "Python", "C#", "Typescript"]

// method 1   
// console.log(FriendsList.slice(0 , FriendsList.length).join(','))

// method 2
// FriendsList.forEach((element) => {console.log(element)})

// method 3
for ( let x =0 ; x<=FriendsList.length-1; x++)
{
    console.log(FriendsList[x])
}

//method 4:
//Chatgpt 3.5
// console.log(FriendsList.map((x)=>{return x}))
// FriendsList.map( (x)=>{ console.log(x); return x;})