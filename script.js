// Tombol Disable
let inputEmail = document.querySelector(".email");
let inputPassword = document.querySelector(".password");
let tombol = document.querySelector(".tombol");

tombol.disabled = true;

inputEmail.addEventListener("input", success);
inputPassword.addEventListener("input", success);

function success(){
    if(inputEmail.value.length > 0 && inputPassword.value.length > 0){
        tombol.disabled = false;
    }
    else{
        tombol.disabled = true;
    }
}

// toggle password 
const password = document.querySelector(".password");
const togglePassword = document.querySelector("#toggle-password");

togglePassword.addEventListener("click", lihat);

function lihat(){
    const type = password.getAttribute("type") ==="password"? "text" : "password";
    password.setAttribute("type",type);
    // toggle
    togglePassword.classList.toggle("eye-slash")
}

// cara memanggil element di dalam Js
// getElementById
// getElementByClassName
// querySelector
// querySelectorAll