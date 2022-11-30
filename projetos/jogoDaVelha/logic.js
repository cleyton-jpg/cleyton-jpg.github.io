var boxes =[ "","",""
            ,"","",""
            ,"","",""];
var rounds = 1;
var player = true;
var win = false;
function test(digits){
    for (let index = 0; index <= 2; index++) {
        if((boxes[index]+boxes[index+3]+boxes[index+6])==digits){
            return(win = true);
        }
    }
    for (let index = 0; index <= 6; index+=3) {
        if((boxes[index]+boxes[index+1]+boxes[index+2])==digits){
            return(win = true);
        }
    }
    if ((boxes[0]+boxes[4]+boxes[8])==digits){
        return(win = true);
    }
    if ((boxes[2]+boxes[4]+boxes[6])==digits){
        return(win = true);
    }
}
function handleMove(position){
    if (boxes[position] == "" && rounds <= 9 && win == false) { 
        rounds ++;
        if (player == true) {
            boxes[position] = "X";
            player = false;
            test("XXX");
        }else{
            boxes[position] = "O";
            player = true;
            test("OOO");
        }
    }
}