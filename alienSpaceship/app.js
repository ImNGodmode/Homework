let lvl = 1
let enemys = []


// create the player
const player = {
    hull: 20,
    firePower: 5,
    accuracy: 70,
}
// create a constructor for enemys
class alien {
    constructor() {
       this.hull= Math.floor(Math.random()*6)
       this.firePower= Math.floor(Math.random()*4)
       this.accuracy= Math.floor(Math.random()*100) 
    }

}

const play = () =>{
    // create a loop that creats a number of enemys depending on the level
    for (i = 1; i <= lvl; i++){
        const enemy = new alien
        enemys.push(enemy)
        let enemyship = document.createElement("img")
        enemyship.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTSzgGJlXRv6NZACaiVu5TnPCTHZ13s203_w&usqp=CAU"
        document.getElementById("aliens").append(enemyship)
    } 
}
//play()
// const enemy = new alien
// console.log(enemys)
// console.log(player)