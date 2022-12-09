var size = 10;
var bomb = 40;
var camp = new Array(size).fill(0).map(() => new Array(size).fill(0));

function updateNeighbors() {
  for (var h = -1; h < 2; h++) {
    for (var l = -1; l < 2; l++) {
      check =
        Y + l >= 0 &&
        Y + l < size &&
        X + h >= 0 &&
        X + h < size &&
        camp[Y + l][X + h] != "B";
      if (check) {
        camp[Y + l][X + h]++;
      }
    }
  }
}

for (let index = 0; index < bomb; ) {
  var Y = Math.floor(Math.random() * size);
  var X = Math.floor(Math.random() * size);
  if (camp[Y][X] !== "B") {
    camp[Y][X] = "B";
    index++;
    updateNeighbors();
  }
}

camp.forEach((element) => {
  console.log(element.toString());
});
