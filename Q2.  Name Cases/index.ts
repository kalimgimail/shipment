/*
    Question: Names cases

    Description:
            Store a person’s name in a variable, and then print that person’s name in 
            lowercase, uppercase, and titlecase

    Dated:  25th Aug, 2023

    Author/Student:
        Kaleem
    
    Possibe Solution: (Assumption)
                Its a string, so its to work with the builtin methods of string

*/

let _personName = "SYED KALEEM AHMAD"

const const_lower_case_name     =       `Lower case Name => ${_personName.toLowerCase()} `;
const const_uper_case_name      =       `Upper case Name => ${_personName.toUpperCase()} `;
const const_title_case_name     =       `Title case Name => ${_personName.substring(0,1).toUpperCase()}${_personName.substring(1, _personName.length).toLocaleLowerCase()}`;
// const const_display_join_text   =       const_split_title_name[0].substring(0,1) + const_split_title_name[0].substring(1,const_split_title_name[0].length) + ' ' +
//                                         const_split_title_name[1].substring(0,1) + const_split_title_name[1].substring(1,const_split_title_name[1].length) + ' ' +
//                                         const_split_title_name[2].substring(0,1).toUpperCase + const_split_title_name[2].substring(1,const_split_title_name[2].length).toLowerCase 

const const_split_title_name    =       _personName.split(' ')
let strTitlecase : string=''
for(let text of const_split_title_name){

        strTitlecase=strTitlecase + (text.charAt(0).toUpperCase() + text.substring(1, text.length).toLowerCase()) +' ' 

}

const const_display_title_case          =       `Title case Name => ${strTitlecase}`

const display_text                      =        const_lower_case_name + '\n' + const_uper_case_name + '\n' + const_display_title_case                                        
console.log (display_text);                                        


/* Improved version: Chatgpt 3.5 */
/* using join/split & join & split a statement of words, into words seprator
        using a default function the function will convert the words, into
        Title case
        A already have [const_split_title_name] string with splited text of data

        New Keywords:
        slice, map & callback function with join the array into string 
*/

function toTitleCase (strWord: string):string {
        return strWord.charAt(0).toUpperCase() + strWord.slice(1).toLowerCase(); 
}

const const_split_title_name_extended          =        _personName.split(' ')
console.log(`\nExtended version 1: ${_personName} \t into Title case => \t`, const_split_title_name_extended.map(toTitleCase).join(' '))
