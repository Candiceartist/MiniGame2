// player1 fires and deducts one point from alien hull 
// alien couters immediately after based on accuracy
// if hit deducts on from player one hull


function getRandomNum1(min, max) {
  return Math.floor(Math.random() * (max - min +1)) + min;
}
function getRandomNum2(min, max) {
  return Math.floor(Math.random() * (max - min +1) + min)/10;
}

const player1 = {
  hull: 20,
  firepower: 5,
  accuracy: getRandomNum2(6, 8),
}

const alien = [ 
{hull: getRandomNum1(3, 6),
  firepower:getRandomNum1(2, 4),
  accuracy: getRandomNum2(6, 8),
  },
  
  { hull: getRandomNum1(3, 6),
      firepower: getRandomNum1(2, 4),
      acurracy: getRandomNum2(6, 8),
 },

 {hull: getRandomNum1(3, 6),
  firepower: getRandomNum1(2, 4),
  acurracy:getRandomNum2(6, 8),
  },
  
  {hull: getRandomNum1(3, 6),
      firepower: getRandomNum1(2, 4),
      acurracy: getRandomNum2(6, 8),
  },

 {hull: getRandomNum1(3, 6),
  firepower: getRandomNum1(2, 4),
  acurracy: getRandomNum2(6, 8),
  },

 {hull: getRandomNum1(3, 6),
 firepower: getRandomNum1(2, 4),
 acurracy: getRandomNum2(6, 8),
 },
]


const alienFire = ()=> {
  player1.hull -= alien[0].firepower;
  console.log(player1.hull, "You've been Hit!")
  if(player1.hull <= 6){
    console.log("Your ship is in critical danger")
   }
  if(player1.hull <= 0){
   console.log("Game Over")
  }
}

const retreat = ()=> {
  if(player1.hull >= 7) {
   console.log("Don't Give UP! You still have ammo left!")
  } else {
    console.log("Game Over")
  }
}


const playerFires = () =>{
  alien[0].hull -= player1.firepower;
  console.log(alien[0].hull, "The cretaures are damaged")
  let playerText = document.querySelector('.story')
  playerText.innerHTML = "'The cretaures are damaged'"
  if(alien[0].hull <= 0){
   console.log("Alien Ship defeated")
  }
  if(alien[0].hull <= 0){
    alien.shift()
  }
  if(alien.length ===0 ) {
    console.log("You Win! The war is over!")
  }
  
}

