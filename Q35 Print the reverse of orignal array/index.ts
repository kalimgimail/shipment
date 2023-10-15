/*
    Question: 
    35 Print your array in reverse order.

    Description:

    Dated:  03rd Sep, 2023
    Author/Student: Kaleem
    Other Resource helpers : Chatgpt 3.5

    Possibe Solution: 
        store the name of the five countries in variables
        and display them
*/

 const cityBraker ='\n'
 const wish_list_of_country_1 = "Saudi Arabia"   
 const wish_list_of_country_2 = "Libya"   
 const wish_list_of_country_3 = "Iraq"   
 const wish_list_of_country_4 = "Dubai"   
 const wish_list_of_country_5 = "Qatar"   


const WishList : string[]=[]

 WishList.unshift(
    wish_list_of_country_1, wish_list_of_country_2,
    wish_list_of_country_3, wish_list_of_country_4,
    wish_list_of_country_5
    )

// console.log(WishList.sort())

WishList.sort((a,b)=>a.localeCompare(b))
console.log(WishList)

