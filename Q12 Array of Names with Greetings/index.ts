/*
    Question: Greetings: Array of Names

    Description:
            Start with the array you used in Exercise 11, but instead of just printing each person’s name, 
            print a message to them. The text of each message should be the same, but each message should 
            be personalized with the person’s name.


    Dated:  29th Aug, 2023

    Author/Student:
        Kaleem
    
    Other Resource helpers : Chatgpt 3.5

    Possibe Solution: 
        . counter loop to access each element of any array
          using the variable x, with 0 element start position, and array.length-1, 
          is the limit is set to loop, with increment by 1

        . message_header, phase, footer are used to draw a message
        . drawMessage a scoped local variable in loop is used to convert 
          every element in array into string literal and display them over the screen.        
*/


let FriendsList : string [] = ["C/C++", "COBOL","VB", "Python", "C#", "Typescript"]
 
let message_header = "Hello Greetings My Friend "
let message_phase = " Learning through Experience was a Challengable Experience in life"
let message_footer = "and we are always stands with me and make the challenges fun for me "

// method 1
for ( let x =0 ; x<=FriendsList.length-1; x++)
{
    
    let  drawMessage = `${message_header} ${FriendsList[x]} ${message_phase} ${message_footer} `  

    console.log( drawMessage  )
}