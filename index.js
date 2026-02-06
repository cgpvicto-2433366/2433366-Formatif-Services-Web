// Module necessaire
import express from 'express';
import dotenv from 'dotenv';
import { morganMiddleware } from './intergiciel.js';
import router from './src/routes/salutation.route.js';

dotenv.config();

// Création de l'application express 
const app = express();
const PORT = process.env.PORT || 3000;  
const HOST = process.env.HOST || 'localhost';

// Utiliser l'intergiciel Morgan
app.use(morganMiddleware);
app.use(express.json())

// Utiliser les routes
app.use(router);


app.listen(PORT, HOST, () => {
    console.log(`Serveur démarré sur http://${HOST}:${PORT}`);
});