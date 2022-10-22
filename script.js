const screen = document.querySelector(".screen");
const btnContainer = document.querySelector(".btn-container");

btnContainer.addEventListener("click", (e) => {
  const clickedEl = e.target;
  const currentResult = screen.innerText;
  const lastIndex = currentResult.length-1;
  if (clickedEl.dataset.num) {
    const btnVal = clickedEl.dataset.num;
    const operators = "+-*/"
    if (operators.includes(btnVal) && currentResult == "") return
    if (operators.includes(btnVal) && operators.includes(currentResult.charAt(lastIndex)))
      screen.innerText = currentResult.substr(0, lastIndex) + btnVal
    else screen.innerText += btnVal
  } 
  else if (clickedEl.classList.contains("btn-equal")) {
    if (currentResult == "") return;
    screen.innerText = eval(currentResult);
  }
  else if (clickedEl.classList.contains('btn-remove')) screen.innerText = currentResult.substr(0, lastIndex)
  else screen.innerText = "";
});
