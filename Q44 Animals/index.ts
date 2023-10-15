/*
    Question: 43    
    Description:
    Animals: Think of at least three different animals that have a common
    characteristic. Store the names of these animals in a list, and then
    use a for loop to print out the name of each animal. 
    • Modify your program to print a statement about each animal, such 
    as A dog would make a great pet. • Add a line at the end of your 
    program stating what these animals have in common. You could print a sentence such as Any of these animals would make a great pet!
    Dated:  14th Oct, 2023
    Author/Student: Kaleem
    Other Resource helpers : Chatgpt 3.5

    Possibe Solution:
        arrays and index position
*/


const arrAnimals : string []=['Cow','Goat', 'Sheep']
var displayFooter='Its a most reliable pet  '
var favourateName : string =''
arrAnimals.forEach((data,indexval)=>
   {

        console.log(`${indexval}${data}`)
        if ( data == 'Cow')
        {
            console.log("Its a greate multiple purpose pet animal")
            // favourateName=data
        } else if (data =='Goat')
        {
            console.log("Cost effective and multi purpose reliable pet")
        } else if ( data == 'Dog'){
            console.log("Dog, is the most reliable security guard, animal ")
        }
    } 
)
console.log(`=`.repeat(displayFooter.length+10))
console.log(favourateName)
