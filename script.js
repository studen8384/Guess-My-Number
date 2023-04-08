let secretNum = Math.trunc(Math.random()*20)+1
let high = 0

document.querySelector(".check").addEventListener("click", function(){
    const guess = Number(document.querySelector(".guess").value)
    let curSco = Number(document.querySelector(".score").textContent)
    high = Number(document.querySelector(".highscore").textContent)
    if (!guess){
        document.querySelector(".message").textContent = "No Number!!!"
    } else if(secretNum == guess){
        document.querySelector(".message").textContent = "Correct!!!"
        document.querySelector("body").style.backgroundColor = "#62E63F"
        document.getElementById("check").style.visibility = "hidden"
        if (curSco > high){
            document.querySelector(".highscore").textContent = curSco
        }
    } else if(guess > secretNum){
        document.querySelector(".message").textContent = "Too High!!!"
        curSco -= 1
        document.querySelector(".score").textContent = curSco
    } else{
        document.querySelector(".message").textContent = "Too Low!!!"
        curSco -= 1
        document.querySelector(".score").textContent = curSco
    }

    if (curSco == 0){
        document.querySelector("body").style.backgroundColor = "#d60202"
        document.querySelector(".message").textContent = "Sorry,Try again next time."
        document.getElementById("check").style.visibility = "hidden"
    } 
})

document.querySelector(".again").addEventListener("click",function(){
    document.querySelector(".message").textContent = "Start guessing..."
    document.querySelector(".guess").value = ""
    document.querySelector("body").style.backgroundColor = "#222"
    document.querySelector(".score").textContent = "20"
    document.getElementById("check").style.visibility = "visible"
})
