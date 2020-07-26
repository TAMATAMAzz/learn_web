let score = document.getElementById("score")
let high = document.getElementById("high")
var count = 0
var max = 0
function checkAns(n){
    if(Math.ceil((Math.random()*10))%2 == n){
        count+=1
        score.innerHTML = "Score : " + count
        if (count > max){
            max = count
            high.innerHTML = "High Score : " + max
        }
    }
    else {
        console.log("lose")
        count = 0
        score.innerHTML = "Score : " + count
    }
}
