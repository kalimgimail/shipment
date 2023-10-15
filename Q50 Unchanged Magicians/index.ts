/*
    Question: 50 
    Description:
    	Unchanged Magicians: Start with your work from Exercise 40.
        Call the function make_great() with a copy of the array of 
        magicians’ names. Because the original array will be unchanged, 
        return the new array and store it in a separate array. 
        Call show_magicians() with each array to show that you have 
        one array of the original names and one array with the Great 
        added to each magician’s name.
    
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

let xNewMagicianArray =  make_great (Magicians)


show_magicians(Magicians)
show_magicians(xNewMagicianArray)
