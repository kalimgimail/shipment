/*
    Question: 40 
        Favorite Fruit: Make a array of your favorite fruits, 
        and then write a series of independent if statements 
        that check for certain fruits in your array.
        
        • Make a array of your three favorite fruits 
            and call it favorite_fruits.
        • Write five if statements. Each should check whether 
        a certain kind of fruit is in your array. If the fruit is in 
        your array, the if block should print a statement, such as 
        You really like bananas!


    Description:

    Dated:  14th Oct, 2023
    Author/Student: Kaleem
    Other Resource helpers : Chatgpt 3.5

    Possibe Solution:
        practices over if then else
*/

function FruiteCollector ( KeyName : string, Fruites:string[]):string {
    let returnText : string ='';
 
    if(KeyName.length > 3){
        Fruites.forEach( (xName)=>
        {
                if (xName === KeyName && (KeyName==='Banana' || KeyName.toLowerCase==='Banana'.toLocaleLowerCase) ){
                    returnText='I Love to eat ' + xName
                }else if (xName === KeyName && (KeyName==='Mango' || KeyName.toLowerCase==='Mango'.toLocaleLowerCase)){
                    returnText= xName + ' is the best Seasonal fruite'
                }else if (xName === KeyName && (KeyName==='Guawa' || KeyName.toLowerCase==='Guawa'.toLocaleLowerCase)){
                    returnText= xName + ' is in my good book'
                }
        })
    }
    if ( returnText == "")
    {
        returnText ="This Fruite is Not in My Favorite Collection"
    }

    return returnText 
}

const favorite_fruits =["Banan", "Mango", "Guawa"]
const myFruiteName : string = 'Mango' // mangoes, empty
console.log(FruiteCollector ( myFruiteName, favorite_fruits ))
