function generate_password() {
  let alphabets = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let numbers = "0123456789";
  let symbols = "!@#$%(;^&*)?";

  let num_of_alphabets = 10;
  let num_of_numers = 5;
  let num_of_symbols = 5;

  const password = [];

  while (num_of_alphabets > 0) {
    let letter = alphabets[Math.floor(Math.random() * alphabets.length)];
    password.push(letter);

    num_of_alphabets--;
  }

  while (num_of_numers > 0) {
    let number = numbers[Math.floor(Math.random() * numbers.length)];
    password.push(number);

    num_of_numers--;
  }

  while (num_of_symbols > 0) {
    let symbol = symbols[Math.floor(Math.random() * symbols.length)];
    password.push(symbol);

    num_of_symbols--;
  }

  password.sort(() => 0.5 - Math.random());

  return password.join("");
}

const btn = document.getElementById("btn");
const pwd = document.getElementById("password");

btn.addEventListener("click", () => {
  let password_genrated = generate_password();
  pwd.value = password_genrated;
  pwd.type = "text";
});
