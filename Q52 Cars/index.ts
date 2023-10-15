/*
    Question: 52
    Description:
        Cars: Write a function that stores information about a car in a Object. 
        The function should always receive a manufacturer and a model name. 
        It should then accept an arbitrary number of keyword arguments. 
        Call the function with the required information 
        and two other name-value pairs,such as a color or an optional feature. 
        Print the Object that’s returned to make sure all the information 
        was stored correctly.
    
    Dated:  14th Oct, 2023
    Author/Student: Kaleem
    Other Resource helpers : Chatgpt 3.5

    Possibe Solution:
*/


type carblueprintType ={ manufacture:string, model:string, color?:string, feature?:string }

function createCar(manufacturer: string, model: string, color?: string, feature?: string): carblueprintType 
{
    const car: carblueprintType = { manufacture: manufacturer, model: model };

    if (color) {
        car.color = color;
    }

    if (feature) {
        car.feature = feature;
    }

    return car;
}

const car1 = createCar("Honda", "2020", "Blue", "Sunroof");
const car2 = createCar("Toyota", "2022", "Red");
const car3 = createCar("Ford", "2019");

console.log(car1, car2, car3)