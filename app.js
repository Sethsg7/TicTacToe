const Gameboard = {

    gameboard: ["x", "o","oo", "xx", "oxo", "xox", "oxox", "xoxo", "xo"]

}

console.log(Gameboard.gameboard)

//.textContent also works.
let ticTable = document.getElementById("tic table").textContent = Gameboard.gameboard;