# DonVeggies - Proiect la materia Tehnologii Web

## Descriere Proiect
**DonVeggies** este un site web creat ca proiect pentru facultate, care simulează o platformă online de prezentare și comercializare a legumelor naturale. Proiectul demonstrează competențe în dezvoltarea web full-stack.

---

## Tehnologii Utilizate

### Frontend:
- **HTML5**
- **CSS3** (Flexbox, Grid, Media Queries)
- **JavaScript (ES6)**
- **jQuery** (minimal)

### Backend:
- **Node.js**
- **Express.js**
- **REST API**

---

## Funcționalități Implementate
- Pagină principală cu prezentarea produselor
- Secțiune "Despre noi" cu:
  - Filtrare interactivă a membrilor echipei
  - Carduri animate
- Formular de contact cu:
  - Validare client-side
  - Trimitere date via API
  - Afișare mesaje de confirmare
- Panou de administrare pentru vizualizarea mesajelor
- Design responsive pentru toate dispozitivele

---

## Cum să Rulezi Proiectul

### Asigură-te că ai instalat:
- Node.js (v14+)
- npm (v6+)

### Clonează repository-ul:
```bash
git clone https://github.com/alexdonici/Proiect-TW
```

### Instalează dependințele:
```bash
npm install
```

### Pornește serverul:
```bash
node server.js
```

### Accesează în browser:
```
http://localhost:3000
```

---

## Structura Codului

```
project/
|
│   ├── css/
│   │   └── style.css
│   ├── js/
│   │   ├── script.js
│   │   └── contact.js
│   └── images/
|
│── index.html
│── contact.html
│── despre_noi.html
│── admin.html
├── server.js
├── contact.js
└── mesaje.json

```

---


## Observații Tehnice
- Proiectul folosește un sistem simplu de stocare a datelor în fișier JSON
- Nu este necesară o bază de date externă
- Toate rutarele sunt gestionate prin Express.js
- Designul este complet responsive

---

## Dezvoltare Viitoare
Posibile îmbunătățiri:
- Autentificare admin
- Pagină de produse cu coș de cumpărături
- Sistem de recenzii

---

**Proiect realizat de Donici Alexandru pentru cursul Tehnologii Web, anul universitar 2024-2025.**
