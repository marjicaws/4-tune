///Request to get data.
async function fetchArtist() {
    try{
let artists = await axios.get("https://ws.audioscrobbler.com/2.0/?method=chart.gettoptracks&artist=&api_key=aed2c1389af55ee448291a0b7eeaddfa&format=json")
   let art = artists.data.tracks;
   console.log(art);
   const arty = art.track[Math.floor(Math.random() * 50)]
   console.log(arty);
    }catch(error) {
        console.log(error);

    }finally{
        console.log("Done");
    }
};

fetchArtist();
///User sees Artist Image, Name, and Link
const artistImg = document.querySelector(".pic")
const artistsDiv = document.querySelector(".artists");
 console.log(artistsDiv);



 let div = document.createElement("artistname")
   let h3 = document.createElement(h3)
 div.appendChild("h3")

 function displayArtist () {}
 
 


///User Presses "Go" Button generate another random Top 50 artist.
 
 ///what data do I access to bring up the info? "artists" works but past there no matter what part of the array I reference it doesn't work?
///api data is only useful when the data is inside of the original async functip


// let thumbnail = document.createElement("img")
// thumbnail.setAttribute("src", artists.track[0].image)
 
 
///Questions for help.
//1. How to use Math.random to pull up random artists while keeping the playcount in mind.
 














