/*
    Question: 49 
    Description:
    	Great Magicians: Start with a copy of your program from 
        Exercise 39. Write a function called make_great() that modifies 
        the array of magicians by adding the phrase the Great to 
        each magician’s name. Call show_magicians() to see that the list 
        has actually been modified.
    
    Dated:  14th Oct, 2023
    Author/Student: Kaleem
    Other Resource helpers : Chatgpt 3.5

    Possibe Solution:
*/


function make_great (magicianArray: string[]): string[] 
{
    const tmpArray : string []=[]  

    for ( let x of magicianArray)
    {
        x= x + ' => Greate Magician'
        tmpArray.push ( x )
    }

    return tmpArray
}

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

show_magicians (make_great(Magicians))
