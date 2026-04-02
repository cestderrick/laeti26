function checkPassword() {
  const pwd = document.getElementById("password").value.toLowerCase().trim();

  if (pwd === "soleil") {
    // sauvegarde progression
    localStorage.setItem("step", 1);

    // transition légère
    document.body.style.opacity = "0";
    setTimeout(() => {
      window.location.href = "enigme1.html";
    }, 500);
  } else {
    shake();
    alert("Mauvais mot de passe 😈");
  }
}

function showHint() {
  const hint = document.getElementById("hint");
  hint.innerText = "Indice : ce qui illumine nos journées ☀️";
}

/* Petit effet visuel si erreur */
function shake() {
  const card = document.querySelector(".card");
  card.style.animation = "shake 0.3s";

  setTimeout(() => {
    card.style.animation = "";
  }, 300);
}

/* Ajout animation shake dynamiquement */
const style = document.createElement("style");
style.innerHTML = `
@keyframes shake {
  0% { transform: translateX(0); }
  25% { transform: translateX(-5px); }
  50% { transform: translateX(5px); }
  75% { transform: translateX(-5px); }
  100% { transform: translateX(0); }
}`;
document.head.appendChild(style);