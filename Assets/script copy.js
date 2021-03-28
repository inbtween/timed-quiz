const secondsEl = document.getElementById('seconds')

const secondsLeft = 10000;


function countdown() {

  const newSeconds = new Seconds(secondsLeft);
  const currentSeconds = new Seconds();

  const totalSeconds = (newSeconds - currentSeconds) / 1000;


  const seconds = Math.floor(totalSeconds) % 60;
  
  // const timeInterval = setInterval(function () {
  //   timerEl.textContent = seconds + " seconds remaining";
  //   seconds--;

  //   if (seconds === 0) {
  //     timerEl.textContent = "";
  //     time();
  //     clearInterval(timeInterval);
  //   }
  // }, 1000);

  secondsEl.innerhtml = seconds;

  function formatTime(time) {
    return time < 10? ( `0${time}`) : time;
  }
}
// initial call
countdown();

setInterval(countdown, 1000)


  