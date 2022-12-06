let size = 10;
let bomb = 10;
let camp = new Array(size);

camp.forEach(element => {
    new Array(size)
});



console.log(camp);

function updateArea(){

    let area = [camp[corY +1][corX -1],camp[corY +1][corX],camp[corY +1][corX +1],
                camp[corY][corX -1],camp[corY][corX +1],
                camp[corY -1][corX -1],camp[corY -1][corX],camp[corY -1][corX +1]]

    for (let index = 0; index < area.length; index++) {
        if (area[index] != 'B') {
            area[index]++
        }
    }
}

function cordenates(param) {
    return Math.random() * (param - 1);
}

for (let index = 0; index < bomb;) {
    let corY = cordenates(bomb)
    let corX = cordenates(bomb)
    if (camp[corY][corX] != 'B') {
        updateArea();
    }
}