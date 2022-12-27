function logic(size, bomb) {
  let board = new Array(size).fill(0).map(() => new Array(size).fill(0));
  for (let index = 0; index < bomb;) {
    var Y = Math.floor(Math.random() * size);
    var X = Math.floor(Math.random() * size);
    if (board[Y][X] !== "B") {
      board[Y][X] = "B";
      index++;
      updateNeighbors();
    }
  }

  function updateNeighbors() {
    for (let h = -1; h < 2; h++) {
      for (let l = -1; l < 2; l++) {
        let check =
          Y + l >= 0 && Y + l < size &&
          X + h >= 0 && X + h < size &&
          board[Y + l][X + h] != "B";
        if (check) {
          board[Y + l][X + h]++;
        }
      }
    }
  }
  board.forEach((element) => {
    console.log(element.toString());
  });  
}
logic(parseInt(size.value),parseInt(bomb.value));
console.log(size.value, bomb.value);
function createDiv(className, id) {
  // create a new div element
  var div = document.createElement("div");
  
  // add the specified class to the div
  div.classList.add(className);

  div.id = id;
  
  // add some content to the div
  div.innerHTML = "Hello World!";
  
  // add the div to the document
  document.body.appendChild(div);
}
for (let index = 0; index < camp; index++) {
  const element = array[index];
  
}
createDiv(card, )
