let total = 0;
let input;

while (true) {
  input = prompt("Введіть число:");

  if (input === null) {
    break;
  }

  if (!isNaN(input)) {
    total += Number(input);
  } else {
    alert("Було введено не число, спробуйте ще раз");
  }
}

alert(`Загальна сума чисел дорівнює ${total}`);
