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
function make_album(artistName, AlbumName, Track) {
    var xData;
    if (Track) {
        var tmpAlbum = { ArtistName: artistName, AlbumName: AlbumName, Track: Track };
        xData = tmpAlbum;
    }
    else {
        var tmpAlbum = { ArtistName: artistName, AlbumName: AlbumName };
        xData = tmpAlbum;
    }
    return xData;
}
var myAlbum1 = make_album("Kaleem", "How to Program Life", 477);
var myAlbum2 = make_album("Kaleem", "How to Destroy", 144);
var myAlbum3 = make_album("Unkown", "Life as Prission");
console.log(myAlbum1, myAlbum2, myAlbum3);
