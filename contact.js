document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();

    const nume = document.getElementById('nume').value.trim();
    const email = document.getElementById('email').value.trim();
    const subiect = document.getElementById('subiect').value.trim();
    const mesaj = document.getElementById('mesaj').value.trim();

    if (!email || !mesaj) {
        alert('Completează toate câmpurile obligatorii!');
        return;
    }

    fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ nume, email, subiect, mesaj })
    })
    .then(res => res.json())
    .then(data => {
        if (data.success) {
            document.getElementById('form-message').textContent = data.message;
            document.getElementById('form-message').style.display = "block";
            document.getElementById('contact-form').reset();
        }
    });
});
