//let genreSearch = document.querySelector(".genrelist");

const artistsDiv = document.querySelector(".artists");
 console.log(artistsDiv);

function displayArtist(artists) {
 console.log(artists);

 


// let thumbnail = document.createElement("img")
// thumbnail.setAttribute("src", artists.track[0].image)
 
 }

displayArtist()


///Request to get the data
async function fetchArtist() {
    try{
let artists = await axios.get("https://ws.audioscrobbler.com/2.0/?method=chart.gettoptracks&artist=&api_key=aed2c1389af55ee448291a0b7eeaddfa&format=json")
   displayArtist(artists.data.tracks);
    }catch(error) {
        console.log(error);

    }finally{
        console.log("Done");
    }
};

///User selects genre from drop down 
fetchArtist();


///Then clicks "Go" button, every time go is pressed 
//it brings. another random artist in the genre







/// User is returned image, link, and name for chosen genre


