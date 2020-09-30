// Create timer function
//  set timeInMs to 0 when page loads

let timeInMs = 0
// Start timer, save returned id in stopId
const stopId = setInterval(incrementTime, 10);  

// Grab the divs to update from index.html
let secondTensDiv = document.getElementById('secondTens');
let secondOnesDiv = document.getElementById('secondOnes');
let msHundredsDiv = document.getElementById('msHundreds');
let msTensDiv = document.getElementById('msTens');

// set initial div values to 0
setInitialDisplay();
function setInitialDisplay(){
    secondTensDiv.textContent = 0;
    secondOnesDiv.textContent = 0;
    msHundredsDiv.textContent = 0;
    msTensDiv.textContent = 0;
}

//This function is called every 10 ms until the timeInMs reaches 10000
function incrementTime(){
    if (timeInMs > 10000){
        // stops the setInterval call when time value is 10sec
        clearInterval(stopId);
    }else{
        //increments time
        timeInMs += 10;
        console.log(timeInMs);
        // calls function to display html
        updateHtml(timeInMs);
    }  
}

// This function updates the html content evert time incrementTime is called
function updateHtml(timeInMs){
    if (timeInMs >= 10000){
        // This changes values to red
        setDisplayRed();
        secondTensDiv.textContent = 1;
        secondOnesDiv.textContent = 0;
        msHundredsDiv.textContent = 0;
        msTensDiv.textContent = 0;
    }else{
        let secondOnesVal = Math.floor(timeInMs / 1000);
        secondOnesDiv.textContent = `${secondOnesVal}`;
        let msHundredsVal = Math.floor((timeInMs % 1000)/100);
        msHundredsDiv.textContent = `${msHundredsVal}`;
        let msTensVal = Math.floor((timeInMs % 100)/10);
        msTensDiv.textContent = `${msTensVal}`;
    };
}

// This function adds the redDigit class to the display div with the class digits
function setDisplayRed(){
    let timerDisplayDiv = document.querySelector('.digits');
    timerDisplayDiv.classList.add('redDigit');
}