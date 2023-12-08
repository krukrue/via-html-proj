function updateCountdown() {
  const launchDate = new Date('2030-10-15T12:00:00Z').getTime();
  const now = new Date().getTime();
  const timeleft = launchDate - now;

  const days = Math.floor(timeleft / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((timeleft % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeleft % (1000 * 60)) / 1000);

  document.getElementById('days').innerText = days;
  document.getElementById('hours').innerText = hours;
  document.getElementById('minutes').innerText = minutes;
  document.getElementById('seconds').innerText = seconds;

  if (timeleft < 0) {
    clearInterval(intervalId);
    document.getElementById('countdownTimer').innerHTML = "Mise zahájena!";
  }
}

const intervalId = setInterval(updateCountdown, 1000);
