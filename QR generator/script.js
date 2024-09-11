const qrText = document.querySelector("#qrText");
const qrImg = document.querySelector("#qrImg");
const qr = document.querySelector(".qr");



function generator() {
  if (qrText.value.length > 0) {
    qrImg.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + qrText.value;
    qr.classList.add("show-img");
  }
  else {
    qrText.classList.add("error");
    setTimeout(() => {
      qrText.classList.remove("error");
    }, 1000);
  }
}
