const btn = document.querySelector("button");
const btnInfo = document.querySelector(".info");
const btnImg = document.querySelector("i");

btn.addEventListener("click", () => {
  const currState = btn.innerText;
  if (currState === "Turn ON") {
    btn.innerText = "Turn OFF";
    btnInfo.innerText = "TURNED ON";
    btnImg.className = "fa-solid fa-lightbulb";
  } else {
    // Bulb is turned off.
    btn.innerText = "Turn ON";
    btnInfo.innerText = "TURNED OFF";
    btnImg.className = "fa-regular fa-lightbulb";
  }
});
