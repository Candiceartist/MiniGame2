// player1 fires and deducts one point from alien hull 
// alien couters immediately after based on accuracy
// if hit deducts on from player one hull
function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}


let yourShip = {
    name: "USS Assmebly",
    hull: 20,
    firepower:5,
    accuracy:.7,
}

let alienShip = [ 
    { hull: randomNumber(3, 6),
    firepower: randomNumber(2, 4),
    accuracy: randomNumber(.6, .8),
    },
    { hull: randomNumber(3, 6),
      firepower: randomNumber(2, 4),
      accuracy: randomNumber(.6, .8),
    },
]

const fire = () => {
    if (yourShip.accuracy < alienShip[0].accuracy) {
        console.log("You'vebeen hit")
    }
}
