/*
    Question: 47   
    Description:
    Album: Write a function called make_album() that builds a Object 
    describing a music album. The function should take in an artist name 
    and an album title, and it should return a Object containing these 
    two pieces of information. 
    Use the function to make three dictionaries representing different 
    albums. Print each return value to show that Objects are storing the 
    album information correctly. 
    Add an optional parameter to make_album() that allows you to store 
    the number of tracks on an album. If the calling line includes a value 
    for the number of tracks, add that value to the album’s Object. 
    Make at least one new function call that includes the number of 
    tracks on an album.
    
    Dated:  14th Oct, 2023
    Author/Student: Kaleem
    Other Resource helpers : Chatgpt 3.5

    Possibe Solution:
*/

type Album ={ ArtistName:string, AlbumName:string, Track?:number }

function make_album(artistName: string, AlbumName: string, Track?:number ){
    const xData : Album ={
        ArtistName: artistName,
        AlbumName : AlbumName,
    }

    if ( Track )
    {
        xData.Track=Track
    }

    return xData
}

const myAlbum1 = make_album("Kaleem", "How to Program Life",477)
const myAlbum2 = make_album("Kaleem", "How to Destroy", 144)
const myAlbum3 = make_album("Unkown", "Life as Prission")

console.log(

    myAlbum1, myAlbum2, myAlbum3, 
) 

