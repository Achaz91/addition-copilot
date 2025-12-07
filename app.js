// Addition
const aInput = document.getElementById('a');
const bInput = document.getElementById('b');
const resultEl = document.getElementById('result');
const sumBtn = document.getElementById('sumBtn');

sumBtn.addEventListener('click', () => {
  const a = parseFloat(aInput.value);
  const b = parseFloat(bInput.value);
  if (Number.isNaN(a) || Number.isNaN(b)) {
    resultEl.textContent = 'Résultat: veuillez saisir deux nombres.';
    return;
    }
  const sum = a + b;
  resultEl.textContent = `Résultat: ${sum}`;
});

// Install prompt (PWA)
let deferredPrompt;
const installSection = document.getElementById('installSection');
const installBtn = document.getElementById('installBtn');

window.addEventListener('beforeinstallprompt', (e) => {
  e.preventDefault();
  deferredPrompt = e;
  installSection.hidden = false;
});

installBtn.addEventListener('click', async () => {
  if (!deferredPrompt) return;
  deferredPrompt.prompt();
  const { outcome } = await deferredPrompt.userChoice;
  deferredPrompt = null;
  installSection.hidden = true;
});
