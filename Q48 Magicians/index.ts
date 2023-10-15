/*
    Question: 48 
    Description:
    	Magicians: Make a array of magician’s names. Pass the array 
        to a function called show_magicians(), which prints the name 
        of each magician in the array.
    
    Dated:  14th Oct, 2023
    Author/Student: Kaleem
    Other Resource helpers : Chatgpt 3.5

    Possibe Solution:
*/

function show_magicians(magicians: string[] ){
    if (magicians.length>0)
    {
        magicians.forEach(element=>{
            console.log(element)
        })

    }
}

const Magicians : string []=["Pakistani magicians", "Indian Magicians", 
"Chines Magicians" , "American Magicians"]

show_magicians ( Magicians)
