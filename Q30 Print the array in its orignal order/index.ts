/*
    Question: 
    30. Print your array in its original order.


    Description:
    

    Dated:  03rd Sep, 2023
    Author/Student: Kaleem
    Other Resource helpers : Chatgpt 3.5

    Possibe Solution: 
        store the name of the five countries in variables
        and display them
*/

function UnsortedorShuffle(array: string []): string[] {
  //identical copy the array for a new array that will 
  //return at the end.
  const shuffledArray = [...array];
    // Query for currentposition of the index with maximum length of the array ,
    let currentIndex = shuffledArray.length;

    //variable to catch the random value  
    // temporary variable that will store the current value of the index
    let randomIndex, tempValue;
    //While loop to apply algorithm of shuffle array values, and copy them in another
    // array
    while (currentIndex !== 0) {
      
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // Swap elements at randomIndex and currentIndex
      tempValue = shuffledArray[currentIndex];
      shuffledArray[currentIndex] = shuffledArray[randomIndex];
      shuffledArray[randomIndex] = tempValue;
    }
  
    return shuffledArray;
  }

 const cityBraker ='\n'
 const wish_list_of_country_1 = "Saudi Arabia"   
 const wish_list_of_country_2 = "Libya"   
 const wish_list_of_country_3 = "Iraq"   
 const wish_list_of_country_4 = "Dubai"   
 const wish_list_of_country_5 = "Qatar"   


const WishList : string[]=[]

 WishList.unshift(
    wish_list_
    of_country_1, wish_list_of_country_2,
    wish_list_of_country_3, wish_list_of_country_4,
    wish_list_of_country_5
    )

console.log(WishList)

const NewArray =   UnsortedorShuffle(WishList)
console.log (NewArray)
 