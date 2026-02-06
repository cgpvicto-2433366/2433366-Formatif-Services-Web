import pool from '../config/db.js';

const getSalutationsForLang = async (code) => {

    const requete = `SELECT code_langue, langue, message FROM salutations WHERE code_langue= ?`;
    const params = [code]

    try {
        const [resultats] = await pool.query(requete, params);
        return resultats;
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
    getSalutationsForLang, getSalutations, addSalutation
}