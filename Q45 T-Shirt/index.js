/*
    Question: 44
    Description:
    T-Shirt: Write a function called make_shirt()
    that accepts a size and the text of a message
    that should be printed on the shirt.
    The function should print a sentence summarizing the size of the
    shirt and the message printed on it. Call the function.


    Dated:  14th Oct, 2023
    Author/Student: Kaleem
    Other Resource helpers : Chatgpt 3.5

    Possibe Solution:
        arrays and index position
*/
//type ShirtDesign = {Size:number, quote: string }
//={size:10, quote:"Love to become smart"}
//var sd = ShirtDesign={Size:29, qoute: "Be with you "}
function make_shirt(no, text) {
    return "TShift No: ".concat(no, "\n").concat(text, "  ");
}
var TShiftNo = 10;
var TShiftsentence = "Learning Knowledge";
console.log(make_shirt(TShiftNo, TShiftsentence));
