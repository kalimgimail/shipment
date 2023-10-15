/*
    Question: Stripping Names

    Description:
            Store a person's name, and include some whitespace characters at the beginning and 
                    end of the name. Make sure you use each character combination, "\t" and "\n", at least once. 
                    Print the name once, so the whitespace around the name is displayed. 
                    Then print the name after striping the white spaces

    Dated:  25th Aug, 2023

    Author/Student:
        Kaleem
    
    Possibe Solution: (Assumption)
                using of whitespace characters in string 
                and display personName stripping white spaces 
                using regularExprssion & clean the personName string


*/

const personName                        =   "Person Name\tKal\neem\n" 
let personNameWithoutWhteSpaces         =   personName.replace(/\t+/g, '')
personNameWithoutWhteSpaces             =   personNameWithoutWhteSpaces.replace(/\n+/g, '')
console.log(personName + '\n' + personNameWithoutWhteSpaces )

/**
 * Extended version: with chatgpt3.5
 * using callback functionality & regular expression using filter
 * and rejoin the characters to build a string 
 * 
 * 
const stringWithWhitespace = "  Hello,\n\tthis is a string\n\twith various white space characters.\n  ";
const StringAfterFilterSplitJoin    = stringWithWhitespace
                                            .split('')
                                            .filter((char)=>(
                                                !/\s/.test(char)
                                            ))
                                            .join('')
console.log( stringWithWhitespace + ' \n ' + StringAfterFilterSplitJoin )
 *  
 * 
 */


