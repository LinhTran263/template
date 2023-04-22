const input = document.querySelector("input");
const label = document.querySelector("label");

input.addEventListener("input", (event) => {
  const value = Number(input.value) / 100 - 1;
  console.log(input.value);
  input.style.setProperty("--thumb-rotate", `${value * 720}deg`);
  label.innerHTML = Math.round(value * 2) + 1;
  if (Math.round(value * 2) + 1 > 0) {
    input.value = 100;
  } else if (Math.round(value * 2) + 1 < 0) {
    input.value = 0;
  }
});
