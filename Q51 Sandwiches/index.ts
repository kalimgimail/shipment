/*
    Question: 50 
    Description:
    	Sandwiches: Write a function that accepts a array of 
        items a person wants on a sandwich. The function should have 
        one parameter that collects as many items as the function call 
        provides, and it should print a summary of the sandwich that is
        being ordered. Call the function three times, using a different 
        number of arguments each time.
    
    Dated:  14th Oct, 2023
    Author/Student: Kaleem
    Other Resource helpers : Chatgpt 3.5

    Possibe Solution:
*/


// function make_Sandwiches (...parameter:string[]) 
// {
//     for ( let xval of parameter)
//     {
//         console.log(xval)
//     }

// }

// let sandWitch : string []=["Simple", "Classic", "Ummmsandwitch"]
// sandWitch.forEach((e,n)=>{
//     switch ( n )
//     {
//         case 0:         
//             make_Sandwiches(e, "No", "No", "Yes" ) 
//             break;
//         case 1:         
//             make_Sandwiches(e, "Yes", "No")
//             break;
//         case 2:         
//             make_Sandwiches(e, "No", "No", "Yes", "Serving:2" )
//             break;
//     }
// })

let sandWitch : string [][]=[
    ["BigSandwitch", "Salt:Y", "Egg:Y", "Chees:N"],
    ["Simple", "Salt:Y", "Egg:Y", "Chees:Y"],
    ["CrackerSandwtich", "Salt:Y", "Egg:Y", "Chees:Y","Spicy:Y","Serving:4","Package:1000"],
]

sandWitch.forEach (swich=>{
    make_sandwitch(...swich)
})

function make_sandwitch(...sw:string[]){
    console.log("Order Detail:=>Sandwitch Class:")
    // for ( let item of sw){
    //     console.log(item)
    // }
    console.log('\t'+ sw.join(', '))
}