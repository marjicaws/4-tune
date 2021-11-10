//let genreSearch = document.querySelector(".genrelist");

const artistDiv = document.querySelector(".artist");
console.log(artistDiv);

function displayArtist(artist) {
 console.log(artist);

 let div = document.createElement("div")
 let h3 = document.createElement("h3")
 h3.innerText = artist[0];
 div.appendChild(h3);
 artistDiv.appendChild(div);

 //append to artist div
 //append to
}

///Request to get the data
axios.get("https://ws.audioscrobbler.com/2.0/?method=chart.gettoptracks&artist=&api_key=aed2c1389af55ee448291a0b7eeaddfa&format=json")
   .then((res) => {
    const artist = res.data.tracks;
        displayArtist(artist);
  })
  .catch((error)=> {
      console.log(error);
  })
  .finally(() => {
      console.log("DONE");
  });


///User selects genre from drop down 






///Then clicks "Go" button, every time go is pressed 
//it brings. another random artist in the genre







/// User is returned image, link, and name for chosen genre


