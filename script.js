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




 
 ///Someting to grab info and display data in seperate divs (.pic) (.artistinfo)
 let div = document.createElement("div")
function displayArtist (arty) {
     console.log(arty);

      


     
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
     let a = document.createElement("a")
     a.innerText = arty.artist.name;
     a.href = arty.artist.url
     div.appendChild(a);
     artistsDiv.appendChild(div3);
     findImg(arty.artist.name , arty.name)
    //
    
     
 }
 
 


///User Presses "Go" Button generate another random Top 50 artist by refreshing page.


 
 ///what data do I access to bring up the info? "artists" works but past there no matter what part of the array I reference it doesn't work?
///api data is only useful when the data is inside of the original async functip


// let thumbnail = document.createElement("img")
// thumbnail.setAttribute("src", artists.track[0].image)
 
 
///Questions for help.
 // 1.Turning url to clickable link
 //2.find image then making sure the image 
 //matches the info given from the first api







async function findImg(name , track) {
    try {
    let url = `https://ws.audioscrobbler.com/2.0/?method=artist.gettopalbums&artist=${name}&api_key=aed2c1389af55ee448291a0b7eeaddfa&format=json`
   let url2 =  `http://ws.audioscrobbler.com/2.0/?method=track.getInfo&api_key=aed2c1389af55ee448291a0b7eeaddfa&artist=${name}&track=${track}&format=json`
    let res = await axios.get(url2)
    console.log(res.data)
    let imgDiv = document.createElement("img")
    imgDiv.src = res.data.track.album.image[3]["#text"]
    div.appendChild(imgDiv)
    } catch (error) {
       let placeholder = "https://images.squarespace-cdn.com/content/v1/5d2e2c5ef24531000113c2a4/1564770283494-NFSE37KNC9HTBH88B2MP/image-asset.png?format=500w"
       let imgDiv = document.createElement("img")
       imgDiv.src = placeholder
       div.appendChild(imgDiv)
    }
}


