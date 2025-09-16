var game = {
  "money": 0,
  "time": 0,
  "souls": 0,
  "soulFluid": 0,
  "soulFluidNeeded": 10000,
  "maxTime": 60,
  "names":{
    "area1":["Goblin","Shrikling","Orc"]
  },
  "player": {
    "lvl":1,
    "atk": 0,
    "def":1,
    "hp": 5,
    "hpMax": 10,
    "inv":[]
  }
};
function val(id, thing) {
  document.getElementById(id).innerHTML = thing;
}
function show(id) {
  document.getElementById(id).style.display = "block";
}
function hide(id) {
  document.getElementById(id).style.display = "none";
}
function randomInt(min, max){
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}
function goTo(element) {
  var tabContents = document.getElementsByClassName("tabContent");
  for (var i = 0; i < tabContents.length; i++) {
    tabContents[i].style.display = "none";
  }
  document.getElementById(element).style.display = "block";
}
class Item {
  constructor(name,type,rarity,atk,def,hpMax){
    this.name = name;
    this.type = type;
    this.rarity = rarity;
    this.atk = atk;
    this.def =def;
    this.hpMax = hpMax;
  };
  
   //game.player.inv.push(Item);
  equip(){
    console.log(`Equiped ${this.rarity} ${this.name}`);
  }
  
  create(){
    let newItem = document.createElement("div");
    newItem.setAttribute('class', `item ${this.rarity.toLowerCase()}`);
    document.getElementById("inventory").appendChild(newItem);
    game.player.inv.push(this);
  }
}
function countdown() {
  if (game.time > 0) {
    game.time--;
  } else {
    clearInterval(repeat);
    endGame();
  }
}
var repeat = setInterval(countdown, 1000);
function update() {
  val(
    "soulFluidCounter",
    game.soulFluid + "/" + game.soulFluidNeeded + " Soul Fluid"
  );
  document.getElementById("soulFluid").style.height =
    (game.soulFluid / game.soulFluidNeeded) * 200 + "px";
  val("souls", game.souls);
  val("playerAtk", game.player.atk);
  val("playerHp", game.player.hp);
  val("playerHpMax", game.player.hpMax);
  document.getElementById("playerHpBar").max = game.player.hpMax;
  document.getElementById("playerHpBar").value = game.player.hp;
}
setInterval(update, 50);
function startGame() {
  game.time = game.maxTime;
goTo("game")
  repeat = setInterval(countdown, 1000);

}

function endGame() {


  
}


function pickUp(from,to){
let num = randomInt(from, to);
let newItem = new Item("Test","sword", "Divine", 3, 1, 4);
console.log("created new item");
newItem.create();
}