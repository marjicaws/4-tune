//let genreSearch = document.querySelector(".genrelist");

// const artistsDiv = document.querySelector(".artists");
// console.log(artistsDiv);

// function displayArtist(artists) {
//  console.log(artists);

//  let div = document.createElement("div")
//  let h2 = document.createElement("h2")
//  h2.innerText = artists.track[0].artist.name;
//  div.appendChild(h2);
//  artistsDiv.appendChild(div);


// let thumbnail = document.createElement("img")
// thumbnail.setAttribute("src", artists.track[0].image)
 
// }


///Request to get the data
async function fetchArtist() {
let artists = await axios.get("https://ws.audioscrobbler.com/2.0/?method=chart.gettoptracks&artist=&api_key=aed2c1389af55ee448291a0b7eeaddfa&format=json")
   console.log(artists);

///User selects genre from drop down 




}

fetchArtist()


///Then clicks "Go" button, every time go is pressed 
//it brings. another random artist in the genre







/// User is returned image, link, and name for chosen genre


