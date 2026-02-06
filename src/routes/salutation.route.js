import express from 'express';
import { listeSalutations, ajouterSalutation } from '../controllers/salutation.controller.js';

const router = express.Router();

/**
 * Message de bienvenue
 */
router.get('/api', (req, res)=>{
    res.status(200)
    res.end("Bienvenu sur mon premier API!")
})

/**
 * Afficher la liste des salutations
 */
router.get('/api/salutations/liste', listeSalutations)

/**
 * Afficher une salutation aléatoire
 */
//router.get('/api/salutations/hasard/:langue', salutationAleatoire)

/**
 * Route pour ajouter une salutation
 */
router.post('/api/salutations', ajouterSalutation)

export default router;