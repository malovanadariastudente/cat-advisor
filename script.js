const triageForm = document.getElementById('triage-form');
const triageResult = document.getElementById('triage-result');

triageForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const selected = Array.from(
    triageForm.querySelectorAll('input[name="symptom"]:checked')
  ).map((input) => input.value);

  if (selected.includes('emergency')) {
    triageResult.textContent =
      'Possibile emergenza: contatta subito una clinica veterinaria aperta 24/7 in Italia.';
    return;
  }

  if (selected.includes('urgent')) {
    triageResult.textContent =
      'Situazione da monitorare con urgenza: contatta il veterinario entro poche ore.';
    return;
  }

  if (selected.includes('mild')) {
    triageResult.textContent =
      'Sintomi lievi: monitora il gatto a casa, idratalo e consulta un veterinario se peggiora.';
    return;
  }

  triageResult.textContent = 'Seleziona almeno un sintomo per iniziare il triage preliminare.';
});
