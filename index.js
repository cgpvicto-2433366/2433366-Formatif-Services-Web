// Module necessaire
import express from 'express';
import dotenv from 'dotenv';


dotenv.config();

// Création de l'application express 
const app = express();
const PORT = process.env.PORT || 3000;  
const HOST = process.env.HOST || 'localhost';

// Utiliser l'intergiciel Morgan
app.use(express.json())

app.listen(PORT, HOST, () => {
    console.log(`Serveur démarré sur http://${HOST}:${PORT}`);
});