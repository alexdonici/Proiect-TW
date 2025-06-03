/* ===== FUNCȚII GLOBALE ===== */
document.addEventListener('DOMContentLoaded', () => {

  // Scroll smooth pentru link-uri ancoră (#id)
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener("click", function(e) {
      e.preventDefault();
      const targetId = this.getAttribute("href");
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    });
  });

});

/* ===== PAGINA DESPRE NOI ===== */
function setupMemberFilter() {
  const selectMember = document.getElementById("select-member");
  if (!selectMember) return; // Dacă nu e pagina „despre noi”, ieșim

  selectMember.addEventListener("change", function () {
    const selected = this.value;
    const persons = document.querySelectorAll(".person");

    persons.forEach(person => {
      const member = person.getAttribute("data-member");
      person.style.display = (selected === "all" || selected === member) ? "block" : "none";
    });
  });
}

/* ===== PAGINA CONTACT ===== */
function setupContactForm() {
  const form = document.querySelector('form#contact-form');
  if (!form) return; // Dacă nu e pagina „contact”, ieșim

  form.addEventListener('submit', function(e) {
    e.preventDefault();

    const email = form.querySelector('#email').value.trim();
    const mesaj = form.querySelector('#mesaj').value.trim();

    if(email && mesaj) {
      alert('Mesajul a fost trimis!');
      form.reset();
    } else {
      alert('Completează toate câmpurile!');
    }
  });
}

/* ===== PAGINI CU SELECT DE LEGUME (exemplu) ===== */
function setupVegetableSelect() {
  const vegetableSelect = document.getElementById('vegetable');
  if (!vegetableSelect) return;

  vegetableSelect.addEventListener('change', function() {
    const selectedText = this.options[this.selectedIndex].text;
    alert('Ai selectat: ' + selectedText);
  });
}

/* ===== INITIALIZĂRI ===== */
document.addEventListener('DOMContentLoaded', () => {
  setupMemberFilter();
  setupContactForm();
  setupVegetableSelect();
});
