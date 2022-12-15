let x = Math.trunc(Math.random() * (20 - 1 + 1) + 1); // losuje liczbe z przedzialu 1-20
sessionStorage.setItem("correct", x) // podpowiedz dla devow
// tworzę funkcje qS aby skrocic document.querySelector("element")
const qS = function (text) {
  return document.querySelector(`.${text}`);
};
// sprawdz
qS("check").addEventListener("click", function () {
  let input1 = Number(qS("guess").value);
  if (input1 <= 0 || input1 > 20) {
    qS("message").textContent = "Wprowadź liczbę między 1 a 20";
  } else {
    let guess = input1;
    if (guess === guess) {
      qS("message").textContent = "Wygrałeś";
    } else {
      return;
    }
    if (x !== guess) {

      if (guess > x) {
        // kiedy liczba jest wieksza
        if (guess > x && guess < (x + 5)) { // granica +/- 5 
          qS("message").textContent = "Trochę za dużo";
        } else {
          qS("message").textContent = "Za dużo";
        }
      } else {
        // kiedy liczba mniejsz
        if (guess < x && guess > (x - 5)) { // granica +/- 5 
          qS("message").textContent = "Trochę za mało";
        } else {
          qS("message").textContent = "Za mało";
        }
      }
    } else {
      // wygrywasz
      qS("h1-titile").textContent = "Twój wynik to:";
      qS("number").textContent = x;
    }
  }
});
