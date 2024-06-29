// 1. Konversi suhu dari Fahrenheit ke Celcius
document.getElementById("convertBtn").addEventListener("click", function () {
  let fahrenheit = document.getElementById("fahrenheitInput").value;
  let celcius = ((fahrenheit - 32) * 5) / 9;
  document.getElementById(
    "result"
  ).innerHTML = `${fahrenheit} Fahrenheit sama dengan ${celcius.toFixed(
    2
  )} Celcius.`;
});

// 2. Tampilkan jam saat ini
function displayCurrentDateTime() {
  let now = new Date();
  let dateTime = now.toLocaleString("en-ID", { timeZone: "Asia/Jakarta" });
  document.getElementById("dateTime").textContent = dateTime;
}

// Panggil fungsi setiap detik untuk update waktu
setInterval(displayCurrentDateTime, 1000);

// 3. Validasi email dan telepon saat submit form
document
  .getElementById("contactForm")
  .addEventListener("submit", function (event) {
    let emailInput = document.getElementById("email");
    let teleponInput = document.getElementById("telepon");
    let isValid = true;

    // Validasi email
    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(emailInput.value)) {
      isValid = false;
      emailInput.classList.add("is-invalid");
      emailInput.nextElementSibling.textContent = "Format email tidak valid.";
    } else {
      emailInput.classList.remove("is-invalid");
      emailInput.classList.add("is-valid");
      emailInput.nextElementSibling.textContent = "";
    }

    // Validasi telepon
    let teleponPattern = /^\d{12,}$/;
    if (!teleponPattern.test(teleponInput.value)) {
      isValid = false;
      teleponInput.classList.add("is-invalid");
      teleponInput.nextElementSibling.textContent =
        "Format no telepon minimal 12 angka.";
    } else {
      teleponInput.classList.remove("is-invalid");
      teleponInput.classList.add("is-valid");
      teleponInput.nextElementSibling.textContent = "";
    }

    if (!isValid) {
      event.preventDefault(); // Mencegah form untuk disubmit jika tidak valid
    }
  });

// Menampilkan pesan berhasil dikirim saat submit form
document.getElementById("contactForm").addEventListener("submit", function () {
  alert("Pesan berhasil dikirim!");
});
