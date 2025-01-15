import GeneratePassword from "./password_generator.js";

const btn = document.getElementById("btn");
const pwd = document.getElementById("password");

btn.addEventListener("click", ()=> {
    let password = new GeneratePassword()
    pwd.value = password.generate()
})
