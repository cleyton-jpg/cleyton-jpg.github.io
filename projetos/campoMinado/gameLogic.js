let size = 10;
let bomb = 15;
let camp = new Array(size);

for (let i = 0; i < camp.length; i++) {
    camp[i] = new Array(size);
    for (let j = 0; j < camp.length; j++) {
        camp[i][j] = 0;
    }
}

function cordenates(param) {
    return Math.floor(Math.random() * (param));
}

for (let index = 0; index < bomb;) {
    var Y = cordenates(camp.length);
    var X = cordenates(camp.length);
    if (camp[Y][X] != 'B') {
        camp[Y][X] = 'B';
        var area = [Y +1, X -1, Y +1, X, Y +1, X +1,
                    Y, X -1, Y, X +1,
                    Y -1, X -1, Y -1, X, Y -1, X +1]
        
        for (let index = 0; index < area.length;) {
            if ((area[index] && area[index + 1] < size) &&
                (area[index] && area[index + 1] >= 0)) {
                if(camp[area[index]][area[index + 1]] != 'B')
                {camp[area[index]][area[index + 1]]++}
            }
            index +=2
        }
        index++
    }
}
for (let index = 0; index < camp.length; index++) {
    console.log(camp[index].toString());
}
