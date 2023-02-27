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
  firepower: 3,
  accuracy: getRandomNum2(6, 8),
  ship: "https://cdnb.artstation.com/p/assets/images/images/014/309/197/original/thabata-marinzek-main-ani1.gif?1543429380"
}

const alien = [ 
{hull: getRandomNum1(3, 6),
  firepower:getRandomNum1(2, 4),
  accuracy: getRandomNum2(6, 8),
  ship:"https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/55e9f737-071f-43e4-95a1-e364df4055f1/ddmy4z0-5e2a4aa4-869a-4e10-9e4d-b58db1ed1059.gif?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzU1ZTlmNzM3LTA3MWYtNDNlNC05NWExLWUzNjRkZjQwNTVmMVwvZGRteTR6MC01ZTJhNGFhNC04NjlhLTRlMTAtOWU0ZC1iNThkYjFlZDEwNTkuZ2lmIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.u3KTmYztlj3XQqejP4JD2N_1k0ZPC4xvrmztHZUmdVE"
  },
  
  { hull: getRandomNum1(3, 6),
      firepower: getRandomNum1(2, 4),
      acurracy: getRandomNum2(6, 8),
      ship:"https://giffiles.alphacoders.com/164/16462.gif"
 },

 {hull: getRandomNum1(3, 6),
  firepower: getRandomNum1(2, 4),
  acurracy:getRandomNum2(6, 8),
  ship:"https://media0.giphy.com/media/4Q1O6g68pRX1Pw7hHC/source.gif"
  },
  
  {hull: getRandomNum1(3, 6),
      firepower: getRandomNum1(2, 4),
      acurracy: getRandomNum2(6, 8),
      ship:"https://64.media.tumblr.com/0d766c040c5b69344e7d4632dcbce296/tumblr_pon3vrZDls1xl8uk6o2_400.gif"
  },

 {hull: getRandomNum1(3, 6),
  firepower: getRandomNum1(2, 4),
  acurracy: getRandomNum2(6, 8),
  ship:"https://cdn.dribbble.com/users/281280/screenshots/4905317/ship_big.gif"
  },

 {hull: getRandomNum1(3, 6),
 firepower: getRandomNum1(2, 4),
 acurracy: getRandomNum2(6, 8),
 ship:"https://66.media.tumblr.com/5c56bf25fafc43d473d73cb4da4a35fe/tumblr_mfi0zq4lkO1rfjowdo1_500.gif"
 },
]


const alienFires = ()=> {
  player1.hull -= alien[0].firepower;
  console.log(player1.hull, "You've been Hit!")

  let yourShip = document.querySelector('.playerImg')
  yourShip.setAttribute('src', player1.ship)

  let alienText = document.querySelector('.story')
  alienText.innerHTML = "'You've been Hit!'"

  let playerHealth = document.querySelector('.playerH')
  playerHealth.innerHTML = player1.hull

  if(player1.hull <= 6){
    console.log("Your ship is in critical danger")
    
    let alienText = document.querySelector('.story')
    alienText.innerHTML = "'Your ship is in critical danger'"

    let playerHealth = document.querySelector('.playerH')
    playerHealth.innerHTML = player1.hull
 }
 
 if(player1.hull === 0){
   console.log("Game Over")

   let alienText = document.querySelector('.story')
    alienText.innerHTML = "'Game Over'"

    let playerHealth = document.querySelector('.playerH')
    playerHealth.innerHTML = player1.hull
  }
}

const retreat = ()=> {
  if(player1.hull >= 7) {
   console.log("Don't Give UP! You still have ammo left!")
   let retreatText = document.querySelector('.story')
    retreatText.innerHTML = "'Don't Give UP! You still have ammo left!'"
  } else {
    console.log("Game Over")
    let retreatText = document.querySelector('.story')
    retreatText.innerHTML = "'Game Over'"
  }
}


const playerFires = () =>{
  alien[0].hull -= player1.firepower;
  console.log(alien[0].hull, "The cretaures are damaged")

  let alienShip = document.querySelector('.alienImg')
  alienShip.setAttribute('src', alien[0].ship)
  
  let playerText = document.querySelector('.story')
  playerText.innerHTML = "'The cretaures are damaged'"
  
  let alienHealth = document.querySelector('.alienH')
  alienHealth.innerHTML = alien[0].hull
   
  if(alien.length === 0) {
    console.log("You Win! The war is over!")

    let playerText = document.querySelector('.story')
    playerText.innerHTML = "'You Win! The war is over!'"
  
  }
  
  if(alien[0].hull <= 1){
   console.log("Alien Ship defeated")

   let alienHealth = document.querySelector('.alienH')
   alienHealth.innerHTML = alien[0].hull

   let playerText = document.querySelector('.story')
   playerText.innerHTML = "'Alien Ship defeated'"

  }
  if(alien[0].hull <= 0){
    alien.shift()
    
    let alienHealth = document.querySelector('.alienH')
    alienHealth.innerHTML = alien[0].hull
  
    let playerText = document.querySelector('.story')
    playerText.innerHTML = "'A new alien ship is on the attack!'"

  }

}

