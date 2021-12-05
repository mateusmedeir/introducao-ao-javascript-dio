var currentNumberWrapper = document.getElementById("currentNumber");
var currentNumber = 0;

function increment(){
    if(currentNumberWrapper.innerHTML >= 10){
    }else{
        currentNumber ++;
        currentNumberWrapper.innerHTML = currentNumber;
        if(currentNumberWrapper.innerHTML > -1){
            currentNumberWrapper.style.color = "rgb(25, 163, 255)"
        }
    }
}

function decrement(){
    if(currentNumberWrapper.innerHTML <= -10){
    }else{
        currentNumber --;
        currentNumberWrapper.innerHTML = currentNumber;
        if(currentNumberWrapper.innerHTML < 0){
            currentNumberWrapper.style.color = "rgb(255, 23, 23)"
        }
    }
}