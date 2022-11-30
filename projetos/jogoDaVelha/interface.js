let squares = document.querySelectorAll(".squares");

squares.forEach((square)=>{
    square.addEventListener('click',handleClick);
})

function handleClick(event){
    square = event.target;
    let position = square.id;
    handleMove(position);
    updateSquares();
}

function updateSquares(){
    let squares = document.querySelectorAll(".squares");
    squares.forEach((square) => {
        if(boxes[square.id] == "X"){
            square.innerHTML = "❌"
        }
        if(boxes[square.id] == "O"){
            square.innerHTML = "⭕"
        }
    })
    if ((win == true)&& (player == false)) {
        message.innerHTML="Player 1 ganhou!";
    }
    if ((win == true)&& (player == true)) {
        message.innerHTML="Player 2 ganhou!";
    }
    if (rounds == 10) {
        message.innerHTML="empatou!";
    }
}