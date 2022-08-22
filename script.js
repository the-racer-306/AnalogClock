const secHand = document.getElementById("seconds");
const minHand = document.getElementById("minutes");
const hourHand = document.getElementById("hours");

function getTime() {
  const now = new Date();
  const seconds = now.getSeconds();
  const minutes = now.getMinutes();
  const hours = now.getHours();
  const timeInterval = 6;
  secHand.style.transform = "rotate(" + seconds * timeInterval + "deg)";
  minHand.style.transform =
    "rotate(" + minutes * timeInterval + seconds / 10 + "deg)";
  hourHand.style.transform = "rotate(" + hours * 180 + minutes / 2 + "deg)";
}
getTime();

setInterval(getTime, 1000);
