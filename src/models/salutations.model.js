import pool from '../config/db.js';

const getSalutation = async (id) => {

    // On spécifie LIMIT 1 pour s'assurer de ne récupérer qu'un seul enregistrement
    const requete = `SELECT code_langue, langue, message FROM salutations WHERE id = ? LIMIT 1`;
    const params = [id]

    try {
        // Attention: mysql2 retourne un tableau avec deux éléments : les résultats et 
        //      les informations sur les champs
        // Nous n'avons besoin que des résultats ici (décomposition du tableau en ignorant 
        //      le second élément)
        const [resultats] = await pool.query(requete, params);
        // Retourne le premier élément du tableau ou null si vide
        return resultats[0] ?? null;
    } catch (erreur) {
        console.log(`Erreur, code: ${erreur.code} sqlState ${erreur.sqlState} : 
                    ${erreur.sqlMessage}`);
        throw erreur;
    }
};

// recuperer toutes les salutations
const getSalutations =async() =>{
    const requete= `SELECT code_langue, langue, message FROM salutations`

    try{
        const [resultats] = await pool.query(requete);
        return resultats;
    } catch (erreur) {
        console.log(`Erreur, code: ${erreur.code} sqlState ${erreur.sqlState} : 
                    ${erreur.sqlMessage}`);
        throw erreur;
    }
}

// AJouter une salutations
const addSalutation =async(code, langue, message) =>{
    const requete = `INSERT INTO salutations (code_langue, langue, message) VALUE (?,?,?) `;
    const params = [code, langue, message];

    try{
        const [resultats] = await pool.query(requete, params);
        return resultats[0] ?? null;
    } catch (erreur) {
        console.log(`Erreur, code: ${erreur.code} sqlState ${erreur.sqlState} : 
                    ${erreur.sqlMessage}`);
        throw erreur;
    }
}

export default {
    getSalutation, getSalutations, addSalutation
}