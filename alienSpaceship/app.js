let lvl = 1
let enemys = []
let message = ''
let gold = 0 
let rechargeNum = 0
let hullUpgrades = 0
let gunUpgrades = 0
let canFight = true
let bosslvl = 0
// create the player
const player = {
    maxHull: 20,
    hull: 20,
    firePower: 5,
    accuracy: 70,
}
// display player info to hud
const info = document.getElementById("infoBox")
let health = document.getElementById("health")
health.innerHTML = `health ${player.hull}`
let cannons = document.getElementById("cannons")
cannons.innerHTML = `cannons ${player.firePower}`
let coins = document.getElementById("coins")
coins.innerHTML = `Gold ${gold}`
let level = document.getElementById("level")
level.innerHTML = `level ${lvl}`
const enemyImg = document.getElementById("aliens")
// create a constructor for enemys
class alien {
    constructor() {
       this.hull= Math.floor(Math.random()*4)+3
       this.firePower= Math.floor(Math.random()*2)+2
       this.accuracy= Math.floor(Math.random()*100) 
    }

}
class Boss {
    constructor() {
        this.hull= Math.floor(Math.random()*20)+5
        this.firePower= Math.floor(Math.random()*5)+2
        this.accuracy= Math.floor(Math.random()*100) 
     }
}
const play = () =>{
    // create a loop that creats a number of enemys depending on the level
       
        lvl = 1
    for (i = 1; i <= lvl; i++){
        const enemy = new alien
        enemys.push(enemy)
        const enemyship = document.createElement("img")
        enemyship.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTSzgGJlXRv6NZACaiVu5TnPCTHZ13s203_w&usqp=CAU"
        document.getElementById("aliens").append(enemyship)
        player.hull = 20
        gold = 0
        canFight = true
    } 
}
// create a function that does all of the actions of the fight
const fight = () => {
    
    if (canFight === true) {
        if (Math.random()*100 <= player.accuracy){
            enemys[0].hull -= player.firePower
            info.innerText = `You hit an aliean for ${player.firePower}`
        }else {
            info.innerText = "You missed COME ON MAAANNN!!!"
        }
        if (enemys[0].hull > 0){
            if (Math.random()*100 <= enemys[0].accuracy){
                player.hull -= enemys[0].firePower
                health.innerHTML = `health ${player.hull}`
                info.innerText += ` You were hit for ${enemys[0].firePower} damage`
                if (player.hull <= 0){
                    info.innerText += ` You lost at level ${lvl}`
                    canFight = false
                    enemys = []
                    while (enemyImg.hasChildNodes()){
                        enemyImg.removeChild(enemyImg.firstChild)
                    }
                }
            }  
        }else if (enemys[0].hull <=0){ 
                gold += (5 * lvl) 
                coins.innerHTML = `Gold ${gold}`   
                enemys.shift()
                
                if (enemyImg.hasChildNodes()){
                    enemyImg.removeChild(enemyImg.children[0])
                }
        }
            
    }
        // console.log(enemys)
    // console.log(player)
    // console.log("i am level " + lvl)
}

const keepFighting = () => {
    if (canFight === true){
        lvl = lvl + 1
        level.innerHTML = `level ${lvl}`
        if (lvl % 5 === 0){
            bosslvl += 1
            for (i = 1; i <= bosslvl; i++){
                const bossEnemy = new Boss
                enemys.push(bossEnemy)
                const enemyship = document.createElement("img")
                enemyship.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAdXJnu9q5e09jvYnOBwPWnOp9sJKe9_IGRw&usqp=CAU"
                document.getElementById("aliens").append(enemyship)
                info.innerText = `There are ${bosslvl} more boss aliens!`
            }
        }else {
            for (i = 1; i <= lvl; i++){
                const enemy = new alien
                enemys.push(enemy)
                const enemyship = document.createElement("img")
                enemyship.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTSzgGJlXRv6NZACaiVu5TnPCTHZ13s203_w&usqp=CAU"
                document.getElementById("aliens").append(enemyship)
                info.innerText = `There are ${lvl} more aliens!`
            } 
        }
    }
}
const retreat = () => {
    if (canFight === true){
    info.innerText = `You escaped at level ${lvl}`
    canFight = false
    enemys = []
    while (enemyImg.hasChildNodes()){
        enemyImg.removeChild(enemyImg.firstChild)
    }
    }
}
const rechargeShields = () => {
    if (canFight === true) {
        if (gold >= (100 + (100 * rechargeNum))){
            player.hull = player.maxHull
            gold -= (100 + (100 * rechargeNum))
            rechargeNum++
            health.innerHTML = `health ${player.hull}`
            coins.innerHTML = `Gold ${gold}`
        }
    }
}
const upgradeHull = () => {
    if (canFight === true) {
        if (gold >= (250 + (250 * hullUpgrades))){
        player.maxHull += 5
        player.hull += 5
        gold -= (250 + (250 * hullUpgrades)) 
        hullUpgrades++
        health.innerHTML = `health ${player.hull}`
        coins.innerHTML = `Gold ${gold}`
        }
    }
}
const upgradeCannons = () => {
    if (canFight === true) {
        if (gold >= (250 + (250 * gunUpgrades))){
            player.firePower += 1
            gold -= (250 + (250 * gunUpgrades)) 
            gunUpgrades++
            cannons.innerHTML = `cannons ${player.firePower}`
            coins.innerHTML = `Gold ${gold}`
        }
    }
}
// console.log(enemys[0].hull)
//console.log(player)

//fight()
//play()
// const enemy = new alien
// console.log(enemys)
 console.log(player)