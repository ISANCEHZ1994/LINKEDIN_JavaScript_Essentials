const testWrapper = document.querySelector(".test-wrapper");
const testArea = document.querySelector("#test-area");
const originText = document.querySelector("#origin-text p").innerHTML;
const resetButton = document.querySelector("#reset");
const theTimer = document.querySelector(".timer");

var timer = [0,0,0,0]; // made into an array to capture the - mins, seconds, 100th of a second, and 1,000th of a second

// Add leading zero to numbers 9 or below (purely for aesthetics):
function leadingZero(time){
    if(time <= 9){
        time = "0" + time
    }
    return time
};

// Run a standard minute/second/hundredths timer:
function runTimer(){
    let currentTime = leadingZero(timer[0]) + ":" + leadingZero(timer[1]) + ":" + leadingZero(timer[2]);
    theTimer.innerHTML = currentTime;
    timer[3]++; // we want to update the last vaule of the array ^^

    timer[0] = Math.floor( (timer[3]/100) /60 ); // Math.floor so that we dont get decimals - DIVDED by 100 to get seconds - THEN by 60 to get minutes
    timer[1] = Math.floor( (timer[3]/100) - (timer[0] * 60) ); // everytime we hit 60 seconds - return 0 start again
    timer[2] = Math.floor( timer[3] - (timer[1] * 100) - (timer[0] * 6000) );
};

// Match the text entered with the provided text on the page:
function spellCheck(){
    let textEntered = testArea.value;
    let originTextMatch = originText.substring(0,textEntered.length) // takes two arguments - where we want to start and how many characters we want to return

    if(textEntered == originText){
        testWrapper.style.borderColor = "#429890"; // green color
    }else{
            if(textEntered == originTextMatch){
        testWrapper.style.borderColor = "#65CCF3"; // blue color
        }   else{
            testWrapper.style.borderColor = "#E95D0F"; // orange color
        }
    }

    // console.log(textEntered);
};

// Start the timer:
function start(){
    let textEnteredLength = testArea.value.length;
    if( textEnteredLength === 0 ){
        setInterval(runTimer, 10) // when the interval STARTS i want to run runTimmer FUNCTION 1,000th of a second
    };
    // console.log(textEnteredLength); // when this runs - when you type, it starts at integer 0 - this is why KEYUP/spellCheck Function
};

// Reset everything:
function reset(){
    // console.log("reset was clicked!");
};

// Event listeners for keyboard input and the reset button:
testArea.addEventListener("keypress", start, false);
testArea.addEventListener("keyup", spellCheck, false);
resetButton.addEventListener("click",reset,false)
