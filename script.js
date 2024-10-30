
let turn = "X";
let gameover = false;
let reset=document.querySelector('.reset')
// to change the turn
const changeturn = () => { {
        if (turn == "X") {
            return "0";
        }
        else {
            return "X";
        }
    }
}

// to check the win
const checkWin = () => {
    let boxtext = document.getElementsByClassName('boxtext');
    let win = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ]

    win.forEach(e => {
        if (boxtext[e[0]].innerText === boxtext[e[1]].innerText && boxtext[e[1]].innerText === boxtext[e[2]].innerText && boxtext[e[0]].innerText !== '')
            if(gameover = true)
            document.querySelector('.turn').innerText = boxtext[e[0]].innerText + "won";

    })
}


let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element => {
    let boxtext = element.querySelector('.boxtext');
    element.addEventListener('click', () => {
        if (boxtext.innerText === '') {
            boxtext.innerText = turn;
            turn = changeturn();
            checkWin();
        }
        if(gameover === false)
        document.getElementsByClassName("turn")[0].innerText = "Turn for " + turn;

    })
})





//reset button 

reset.addEventListener('click', () => {
    let boxtexts = document.querySelectorAll('.boxtext');
    Array.from(boxtexts).forEach(element => {
        element.innerText = " ";
        
    });
    turn ="X"
    gameover=false ;
    document.getElementsByClassName("turn")[0].innerText = "Turn for " + turn;
    changeturn();
})