/*
    Question: 46   
    Description:
	Cities: Write a function called describe_city() that accepts the 
    name of a city and its country. The function should print a simple
    sentence, such as Karachi is in Pakistan. Give the parameter for the 
    country a default value. Call your function for three different cities, 
    at least one of which is not in the default country.

    Dated:  14th Oct, 2023
    Author/Student: Kaleem
    Other Resource helpers : Chatgpt 3.5

    Possibe Solution:
*/


function describe_city(cityName: string, countryName="Pakistan" ){
    if (countryName){
        console.log(cityName + 'is the city of '+ countryName)
    }else{
        console.log(cityName + "City is not Part of this Country")
    }
}


console.log(
    describe_city("Lahore", "Pakistan"),
    describe_city("Karachi", "Pakistan"),
    describe_city("Lahore_ka_Qilla")
) 

