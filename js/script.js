let btn = document.querySelector(".sbt");
let inputt = document.querySelector("input");
let errorMsg = document.querySelector(".error-msg");
let error = document.querySelector(".error");

function verifyCamp(e) {
  let verifyRegx =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (inputt.value.match(verifyRegx)) {
        errorMsg.style.cssText = "display:none";
        error.style.cssText = "display:none";
        inputt.style.cssText= 'outline : none';
    }
  if (!inputt.value.match(verifyRegx)) {
    errorMsg.style.cssText = "display:block";
    error.style.cssText = "display:block";
    inputt.style.cssText= 'border:none;outline : thin solid hsl(0, 93%, 68%)';
    e.preventDefault();
    
  }
}

btn.addEventListener("click", verifyCamp);
