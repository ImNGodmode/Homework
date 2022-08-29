let lvl = 1

const player = {
    hull: 20,
    firePower: 5,
    accuracy: .7,
}

class alien {
    constructor() {
       this.hull= Math.floor(Math.random()*6)
       this.firePower= Math.floor(Math.random()*4)
       this.accuracy= Math.floor(Math.random()*100) 
    }

}

const enemy = new alien
console.log(enemy)
console.log(player)