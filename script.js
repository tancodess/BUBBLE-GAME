function playGame(){
    function makeBubbles() {
        let bubbles = "";
        for (let i = 1; i <= 120; i++) {
            let rn = Math.floor(Math.random() * 10);
            bubbles += `<div class="bubble">${rn}</div>`;
        }
        document.querySelector("#pnlbtm").innerHTML += bubbles;
    }
    let timer;
    function setTimer() {
        let time = 30;
        timer = setInterval(function runTimer() {
            time--;
            document.querySelector("#timerval").textContent = time;
            if (time == 0) {
                clearInterval(timer);
                dispScore();
            }
        }, 1000);
    
    }
    var score = 0;
    function incScore() {
        score += 10;
        document.querySelector("#scoreval").textContent = score;
    }
    function dispScore(){
        clearInterval(timer);
        
        document.querySelector("#pnlbtm").style.flexDirection="column";
    
        document.querySelector("#pnlbtm").innerHTML = `<div>High score: ${score>highScore?setHighscore(score):score}</div><div class="colorBrown">Game Over! Your score is: ${score}</div><div class="button">Play Again</div>`;
        document.querySelector(".button").addEventListener("click",function(){
            location.reload();
        })
    }
    let newHit;
    function setNewHit() {
        newHit = Math.floor(Math.random() * 10);
        document.querySelector("#hitval").textContent = newHit;
    }

        document.querySelector("#pnlbtm").addEventListener("click", function (dets) {
            if (dets.target.textContent == newHit) {
                makeBubbles();
                incScore();
                setNewHit();
            }
            else{
                dispScore();
            }
        })
    
            
    makeBubbles();
    setTimer();
    setNewHit();
}
playGame();
