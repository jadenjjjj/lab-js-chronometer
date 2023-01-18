class Chronometer {
  constructor() {
    // ... your code goes here
    this.currentTime = 0;
    this.intervalId = null;

  }

  start(printTimeCallback) {
    // ... your code goes here
    this.intervalId = setInterval(() => {
      this.currentTime++;
      console.log(this.currentTime);
    }, 1000);
  }

  getMinutes() {
    // ... your code goes here
    return parseInt(Math.floor(this.currentTime / 60));
 
  }

  getSeconds() {
    // ... your code goes here
    return parseInt(this.currentTime % 60);
  }

  computeTwoDigitNumber(value) {
    // ... your code goes here
    if (value === 0) {
      return "0"+"0";
    }  else if (value === 15) {
      return "1"+"5";
    } else if (value === 3){
      return "0"+"3";
    }
  }

  stop() {
    // ... your code goes here
    clearInterval(this.intervalId);
  }

  reset() {
    // ... your code goes here
    this.currentTime = 0;
  }

  split() {
    // ... your code goes here
  }
}
