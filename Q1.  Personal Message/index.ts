/*
    Question: Personal Message

    Description:
        Store a person’s name in a variable, and print a message to that person. 
        Your message should be simple, such as, “Hello Eric, 
        would you like to learn some Python today?”

    Dated:  25th Aug, 2023

    Author/Student:
        Kaleem
    

*/

//variable to display Person Name as Assignment Requirement
let _personName = "Kaleem"

// generate a message to display to the variable person Name
const const_message_footer = `", would you like to learn some python today?"`

// generate the message for the end user to display on screen.
const display_message = `Hello ${_personName} ${const_message_footer}`

//Displays the output
console.log ( display_message)
