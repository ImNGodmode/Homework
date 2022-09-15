
const song1 = {
    title: "Becoming the Bull",
    artist: "Atreyu",
}
const song2 = {
    title: "Bulls on parade",
    artist: "Rage Against the Machine",
}
const song3 = {
    title: "8 second Ride",
    artist: "Jake Owen",
}
const song4 = {
    title: "Neon Moon",
    artist: "Brooks & Dunn",
}
const song5 = {
    title: "Friends in Low Places",
    artist: "Garth Brooks",
}
const song6 = {
    title: "Fancy",
    artist: "Reba McEntire",
}
const song7 = {
    title: "8 mile",
    artist: "Eminem",
}
const song8 = {
    title: "Act a Fool",
    artist: "Ludacris",
}
const song9 = {
    title: "Forgot About Dre",
    artist: "Dr.Dre",
}
const station1 = {
    name: "The Bull",
    songs: [song1, song2, song3],

}
const station2 = {
    name: "WIVK",
    songs: [song4, song5, song6],

}
const station3 = {
    name: "Def Jams",
    songs: [song7, song8, song9],

}
const radio = {
    stations: [station1, station2, station3],

    changeChannel: function() {
        let channel = Math.floor(Math.random()*3)
        let track = Math.floor(Math.random()*3)
        //console.log(channel)
        console.log(`Now Playing: ${radio.stations[channel].songs[track].title} by ${radio.stations[channel].songs[track].artist} on ${radio.stations[channel].name}`)
    }
}
radio.changeChannel()



// class song  {
//     constructor(title, artist){
//     this.title = title;
//     this.artist = artist;
//     }
// }
// const track = new song
// track.this.title = "loose yourslef"
// track.this.artist = "eminem"

// // for (i=0; i<3; i++){
// //     const track = new song
// //     radio.stations[0].songs.push(track)

// // }