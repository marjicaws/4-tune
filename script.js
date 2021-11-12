///Request to get data.
async function fetchArtist() {
    try{
let artists = await axios.get("https://ws.audioscrobbler.com/2.0/?method=chart.gettoptracks&artist=&api_key=aed2c1389af55ee448291a0b7eeaddfa&format=json")
   let art = artists.data.tracks;
   console.log(art);
   const arty = art.track[Math.floor(Math.random() * 50)]
   console.log(arty);
   displayArtist(arty);
    }catch(error) {
        console.log(error);

    }finally{
        console.log("Done");
    }
};

fetchArtist();

///User sees Artist Image, Name, and Link

const artistsDiv = document.querySelector(".artistinfo");
console.log(artistsDiv);



 
 ///Someting to grab info and display data in seperate divs (.pic) (.artistinfo)

 function displayArtist (arty) {
     console.log(arty);

     let div = document.createElement("div")
     let h2 = document.createElement("h2")
     h2.innerText = arty.artist.name;
     div.appendChild(h2)
     artistsDiv.appendChild(div);

     let div2 = document.createElement("div")
     let h3 = document.createElement("h3")
     h3.innerText = arty.name;
     div2.appendChild(h3);
     artistsDiv.appendChild(div2);


     let div3 = document.createElement("div")
     let h4 = document.createElement("h4")
     h4.innerText = arty.artist.url;
     div.appendChild(h4);
     artistsDiv.appendChild(div3);
    
     
 }
 
 displayArtist()


///User Presses "Go" Button generate another random Top 50 artist by refreshing page.
 
 ///what data do I access to bring up the info? "artists" works but past there no matter what part of the array I reference it doesn't work?
///api data is only useful when the data is inside of the original async functip


// let thumbnail = document.createElement("img")
// thumbnail.setAttribute("src", artists.track[0].image)
 
 
///Questions for help.
 














