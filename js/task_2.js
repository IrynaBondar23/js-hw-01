const total = 100;
let ordered = prompt("Введіть кількість товару");
ordered = Number(ordered);

const messageConfirmation = "Замовлення оформлено";
const messageCancellation = "На складі недостатня кількість товару";

if (ordered <= total) {
  alert(messageConfirmation);
} else {
  alert(messageCancellation);
}
