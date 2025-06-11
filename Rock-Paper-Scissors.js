let score= JSON.parse(localStorage.getItem('Score'))||{
    win:0,loss:0,draw:0
};

localStorage.setItem('Score', JSON.stringify(score));

function computerMove(){
    let rNum = Math.random() * 10;
    var com;
    if (rNum <= 3.33) {
        com = 'Rock';
    } else if (rNum > 3.33 && rNum <= 6.66) {
        com = 'Paper';
    } else {
        com = 'Scissors';
    }
    return com;
};


const reset=()=>{
    score = JSON.parse(localStorage.getItem('Score'));
    score.win=0;
    score.loss=0;
    score.draw=0;
    var y = document.getElementById("comp");
    y.textContent = '';
    var x = document.getElementById("score-display");
    x.textContent = `Win : ${score.win} Loss : ${score.loss} Draw : ${score.draw}`;
    localStorage.setItem('Score', JSON.stringify(score));
};


const result=(play)=>{
   score = JSON.parse(localStorage.getItem('Score'));

   let com=computerMove();

   let res=findResult(com,play);

   if(res=='Won'){
    score.win++;
   }else if(res=='Loss')
   {
    score.loss++;
   }else{
    score.draw++;
   }

   var y = document.getElementById("comp");
    y.innerHTML = `You choose <img src="images\\${play}.png" alt="${play}"> <img src="images\\${com}.png" alt="${com}"> is the Computer's move`;

    localStorage.setItem('Score', JSON.stringify(score));

    var z = document.getElementById("choices");
    z.textContent = ` You ${ (res == 'Draw') ? "Neither Won nor Lost" : res }`;

    var x = document.getElementById("score-display");
    x.textContent = `Win : ${score.win} Loss : ${score.loss} Draw : ${score.draw}`;

};

const findResult = (com, play) => {

        if (com == 'Rock') {
            if (play == 'Rock') return 'Draw';
            else if (play == 'Paper') return 'Won';
            else return 'Loss';
        } else if (com == 'Paper') {
            if (play == 'Rock') return 'Loss';
            else if (play == 'Paper') return 'Draw';
            else return 'Won';
        } else {
            if (play == 'Rock') return 'Won';
            else if (play == 'Paper') return 'Loss';
            else return 'Draw';
        }
};