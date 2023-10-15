/*
    Question: 42
        Ordinal Numbers: Ordinal numbers indicate their position in an array, such as 1st or 2nd. Most ordinal numbers end in the, except 1, 2, and 3.
        • Store the numbers 1 through 9 in a array.
        • Loop through the array.
        • Use an if-else chain inside the loop to print the proper ordinal ending for each number. Your output should read "1st 2nd 3rd 4th 5th 6th 7th 8th 9th", and each result should be on a separate line.


    Description:

    Dated:  14th Oct, 2023
    Author/Student: Kaleem
    Other Resource helpers : Chatgpt 3.5

    Possibe Solution:
        arrays and index position
*/
var arrData = [1, 2, 3, 4, 5, 6, 7, 8, 9];
var display = '';
arrData.forEach(function (data, indexval) {
    // console.log (`${indexval}=1? ${data}st: ${data}th`)
    if (data == 1) {
        display = "st";
    }
    else if (data == 2) {
        display = 'nd';
    }
    else if (data == 3) {
        display = 'rd';
    }
    else {
        display = 'th';
    }
    console.log("".concat(data).concat(display));
});
