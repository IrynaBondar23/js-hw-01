const credits = 23580;
const pricePerDroid = 3000;
let goodsCount = prompt("Скільки телевізорів бажаєте придбати?");
console.log(Number(goodsCount));
let totalPrice = pricePerDroid * goodsCount;
let balance = credits - totalPrice;
let message;

if (goodsCount === null) {
  message = "Операцію скасовано!";
} else if (totalPrice > credits) {
  message = "Недостатньо коштів на рахунку";
} else {
  message = `Ви купили ${goodsCount} телевізорів, на рахунку залишилось ${balance} кредитів`;
}

console.log(message);
