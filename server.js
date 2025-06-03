const express = require('express');
const fs = require('fs');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());
app.use(express.static(__dirname)); // Servește fișierele statice

const MESAJE_FILE = 'mesaje.json';

app.post('/api/contact', (req, res) => {
    const mesaj = req.body;

    // Încarcă mesajele existente
    let mesaje = [];
    if (fs.existsSync(MESAJE_FILE)) {
        const data = fs.readFileSync(MESAJE_FILE);
        mesaje = JSON.parse(data);
    }

    // Adaugă mesajul nou
    mesaje.push({
        nume: mesaj.nume,
        email: mesaj.email,
        subiect: mesaj.subiect,
        mesaj: mesaj.mesaj,
        data: new Date().toISOString()
    });

    // Salvează mesajele înapoi în fișier
    fs.writeFileSync(MESAJE_FILE, JSON.stringify(mesaje, null, 2));
    res.json({ success: true, message: "Mesaj salvat cu succes!" });
});

app.get('/api/mesaje', (req, res) => {
  if (fs.existsSync(MESAJE_FILE)) {
    const data = fs.readFileSync(MESAJE_FILE, 'utf-8');
    const mesaje = JSON.parse(data);
    res.json(mesaje);
  } else {
    res.json([]);
  }
});

app.listen(3000, () => {
    console.log("Serverul rulează pe http://localhost:3000");
});
