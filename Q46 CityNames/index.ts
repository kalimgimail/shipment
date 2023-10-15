/*
    Question: 46   
    Description:
	City Names: Write a function called city_country() that takes in the name of a city and its country. The function should return a string formatted like this:
    "Lahore, Pakistan"
    Call your function with at least three city-country pairs, 
    and print the value that’s returned.

    Dated:  14th Oct, 2023
    Author/Student: Kaleem
    Other Resource helpers : Chatgpt 3.5

    Possibe Solution:
*/


function city_country(cityName: string, countryName: string ){
    return `"${cityName}, ${countryName}"\n`
}


console.log(
    city_country("Lahore", "Pakistan"),
    city_country("Karachi", "Pakistan"),
    city_country("Islamabad", "Pakistan")
) 

