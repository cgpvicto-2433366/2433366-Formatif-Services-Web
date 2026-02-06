import express from 'express';
import { listeSalutations, ajouterSalutation, bienvenue, listeSalutationsPourUnelangue } from '../controllers/salutation.controller.js';

const router = express.Router();

/**
 * Message de bienvenue
 */
router.get('/api',bienvenue)

/**
 * Afficher la liste des salutations
 */
router.get('/api/salutations/liste', listeSalutations)

/**
 * Afficher une salutation aléatoire
 */
router.get('/api/salutations/liste_pour_langue/:code', listeSalutationsPourUnelangue)

/**
 * Route pour ajouter une salutation
 */
router.post('/api/salutations', ajouterSalutation)

export default router;