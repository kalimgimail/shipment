/*
    Question: 43
    Pizzas: Think of at least three kinds of your favorite pizza. 
    Store these pizza names in a array, and then use a for loop to print 
    the name of each pizza.
•   Modify your for loop to print a sentence using the name of the pizza 
    instead of printing just the name of the pizza. 
    For each pizza you should have one line of output containing 
    a simple statement like I like pepperoni pizza.

•   Add a line at the end of your program, outside the for loop, 
    that states how much you like pizza. The output should consist 
    of three or more lines about the kinds of pizza you like and then 
    an additional sentence, such as I really love pizza!


    Description:

    Dated:  14th Oct, 2023
    Author/Student: Kaleem
    Other Resource helpers : Chatgpt 3.5

    Possibe Solution:
        arrays and index position
*/

const arrPizzas : string []=['Fajista','Chees', 'Chicken']
var display='Love to eat '
var favourateName : string =''
arrPizzas.forEach((data,indexval)=>
   {

        console.log(`${display}${data}`)
        if ( data == 'Fajista')
        {
            favourateName=data
        }
    
    } 
)
console.log(`=`.repeat(display.length+10))
console.log(`The Fajista is my most favourite foodpanda collection\nIts more than just to eat\nand with a fresh make its just an amazing taste \n\n ${display}${favourateName} `)

