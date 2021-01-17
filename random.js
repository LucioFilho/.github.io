console.log("Enjoy the Euromillones Simulator. \n This simulator uses 3 random numbers with same value to get each number.");

function lotteryCalculate() {
  let i = 0;
  let range = [];
  let temp = [];
  let lottery = [];

  for (let j = 1; j < 51; j++) {
    range.push(j);
  }

  let ran = setInterval(function() { //Interval

    let a = Math.floor(Math.random() * range.length);
    let b = Math.floor(Math.random() * range.length);
    let c = Math.floor(Math.random() * range.length);

    i++;

    if (a === b && a === c) {

      lottery.push(range[a]);
      console.log("number: " + range[a] + "\ntries: " + i);

      for (let j = 0; j < range.length; j++) {
        if (range[j] !== range[a]) {
          temp.push(range[j]);
        }
      }
      range = [];
      range = Array.from(temp);
      temp = [];
      i = 0;
    }

    if (lottery.length === 5) {
      lottery.sort(function(a, b) {
        return a - b;
      });
      console.log("Lottery: " + lottery);
      starsCalculate();
      clearInterval(ran);
    }

  }, 1);
}
lotteryCalculate();

function starsCalculate() {
  let i = 0;
  let range = [];
  let temp = [];
  let lottery = [];

  for (let j = 1; j < 12; j++) {
    range.push(j);
  }

  let ran = setInterval(function() { //Interval

    let a = Math.floor(Math.random() * range.length);
    let b = Math.floor(Math.random() * range.length);
    let c = Math.floor(Math.random() * range.length);

    i++;

    if (a === b && a === c) {

      lottery.push(range[a]);
      console.log("⭑" + range[a] + "\ntries: " + i);

      for (let j = 0; j < range.length; j++) {
        if (range[j] !== range[a]) {
          temp.push(range[j]);
        }
      }
      range = [];
      range = Array.from(temp);
      temp = [];
      i = 0;
    }

    if (lottery.length === 2) {
      lottery.sort(function(a, b) {
        return a - b;
      });
      console.log("⭑" + lottery[0] + " ⭑" + lottery[1]);
      clearInterval(ran);
    }

  }, 1);
}
