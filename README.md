
# Project Overview
# [4-Tune](https://marjicaws.github.io/4-tune/)
## Project Name

"4-Tune"

## Project Description

It will bring up 3 random artists with smaller followings as a random music recommendation for new music to listen to for the respective genre.  It's something for music lovers who are looking for new music to listen to.

## API and Data Sample

[API LINK Last Radio FM](https://www.last.fm/api)
```
{
    "topalbums": {
        "album": [
            {
                "name": "Believe",
                "playcount": 3637592,
                "mbid": "63b3a8ca-26f2-4e2b-b867-647a6ec2bebd",
                "url": "https://www.last.fm/music/Cher/Believe",
                "artist": {
                    "name": "Cher",
                    "mbid": "bfcc6d75-a6a5-4bc6-8282-47aec8531818",
                    "url": "https://www.last.fm/music/Cher"
                },
                "image": 
                    {
                        "#text": "https://lastfm.freetls.fastly.net/i/u/300x300/3b54885952161aaea4ce2965b2db1638.png",
                        "size": "extralarge"
                    }
                
            },
            {
                "name": "The Very Best of Cher",
                "playcount": 1720144,
                "mbid": "a7e2dad7-e733-4bee-9db1-b31e3183eaf5",
                "url": "https://www.last.fm/music/Cher/The+Very+Best+of+Cher",
                "artist": {
                    "name": "Cher",
                    "mbid": "bfcc6d75-a6a5-4bc6-8282-47aec8531818",
                    "url": "https://www.last.fm/music/Cher"
                },
                "image": 
                    {
                        "#text": "https://lastfm.freetls.fastly.net/i/u/34s/0fd942f7e629a01ec2d067e41464ff5d.png",
                        "size": "small"
                    },
           
            },
```

## Wireframes

![alt text](https://res.cloudinary.com/marssantos/image/upload/v1636409831/Screen_Shot_2021-11-08_at_3.44.19_PM_bx2nv6.png)
![alt text](https://res.cloudinary.com/marssantos/image/upload/v1636415984/Screen_Shot_2021-11-08_at_6.59.11_PM_laibvs.png)

### MVP/PostMVP

The functionality will then be divided into two separate lists: MPV and PostMVP.  Carefully decided what is placed into your MVP as the client will expect this functionality to be implemented upon project completion.  

#### MVP

- Find and use External Data
- Show Images on Page
- Show link and Name on  Page
- Be organized by Genre
- Reefresh with new artist with click on Go button.

#### PostMVP  

- Play top track through the page.

## Project Schedule

|  Day | Deliverable | Status
|---|---| ---|
|Nov 5-8| Prompt / Wireframes / Priority Matrix / Timeframes | Incomplete
|Nov 8| Project Approval | Incomplete
|Nov 9| Core Application Structure (HTML, CSS, etc.) | Incomplete
|Nov 10| Pseudocode / actual code | Incomplete
|Nov 11| Initial Clickable Model  | Incomplete
|Nov 11| MVP | Incomplete
|Nov 12| Presentations | Incomplete

## Priority Matrix

![alt text](https://res.cloudinary.com/marssantos/image/upload/v1636409832/Screen_Shot_2021-11-08_at_4.55.42_PM_ihfir1.png)

## Timeframes

Tell us how long you anticipate spending on each area of development. Be sure to consider how many hours a day you plan to be coding and how many days you have available until presentation day.

Time frames are also key in the development cycle.  You have limited time to code all phases of the game.  Your estimates can then be used to evalute game possibilities based on time needed and the actual time you have before game must be submitted. It's always best to pad the time by a few hours so that you account for the unknown so add and additional hour or two to each component to play it safe. Throughout your project, keep track of your Time Invested and Actual Time and update your README regularly.

| Component      | Priority | Estimated Time | Time Invested | Actual Time |
| ---            |  :---:   |     :---:      |    :---:      |    :---:    |
| Git Request    |    H     |      3hrs      |     3hrs      |     XXXX    |
| JS for Operaion|    H     |      4hrs      |     6hrs      |     XXXX    |
| Retrieving Data|    H     |      3hrs      |     4hrs      |     XXXX    |
| Rendering Data |    H     |      3hrs      |     3hrs      |     XXXX    |
| CSS Resp. Dsgn |    H     |      4hrs      |     2hrs      |     XXXX    |
| CSS Flex Box   |    H     |      4hrs      |     2hrs      |     XXXX    |
| CSS Styling    |    L     |      3hrs      |     3hrs      |     XXXX    | 
| Post MVP       |    L     |      1 hr      |     XXXX      |     XXXX    |
| HTML           |    H     |      1 hr      |     2hrs      |     XXXX    | 
| Deployment.    |    H     |      1 hr      |     20mins    |     XXXX    | 
| Adding Form    |    H     |      3hrs      |     XXXX      |     XXXX    |
| Working w/ API |    H     |      3hrs      |     3hrs      |     XXXX    |
| Total          |    H     |      33hrs     |     28hrs     |     XXXX    |

## Code Snippet

Use this section to include a brief code snippet of functionality that you are proud of and a brief description.  

I was very proud of my ability to call an axios function that worked and accurately called the artists at random using Math.random.

```
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
}
```

## Change Log
 Use this section to document what changes were made and the reasoning behind those changes.  

Change 1. The original  project idea was meant to be a randomizer that brought up artists that didn't have a lot of followers and plays. Last.fm's Api only shows artists that are Top 50 so I had to work with the information provided.

Change 2. Last.fm's Api also does not allow access to use of their images. So Corey helped me to locate another api website with images and create a function that would ensure they would match up with the artists pulled from Last.fm's list.

Change 3. Last.fm also does not include genre in the array. So it's completely random now.


