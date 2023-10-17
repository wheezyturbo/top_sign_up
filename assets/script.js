const form = document.querySelector("form");

const invalid = document.querySelector(".invalid");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const pass = document.getElementById("password");
  const conf = document.getElementById("confirmpassword");
  if (pass === conf) {
    invalid.textContent = "";
    e.submit();
  } else {
      invalid.textContent = "*Passwords doesn't match";
    setTimeout(()=>{
        invalid.textContent ="";
    },3000)
  }
});
