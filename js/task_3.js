const ADMIN_PASSWORD = "jqueryismyjam";
let message;
const password = prompt("Введіть пароль");

if (password === null) {
  message = "Операцію скасовано";
} else if (password === ADMIN_PASSWORD) {
  message = "Ласкаво просимо!";
} else {
  message = "Доступ заборонено, невірний пароль";
}
alert(message);
