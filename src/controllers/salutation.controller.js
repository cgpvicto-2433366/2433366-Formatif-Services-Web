import { salutations, ajouter } from "../models/salutations.model.js";

/**
 * Afficher la liste des salutations
 */
export const listeSalutations = (req, res) =>{
    res.status(200).json(salutations)
}

/**
 * Afficher une salutation aléatoire
 */
export const salutationAleatoire =(req, res) =>{
   const langue = req.params.langue;

    //Verifier la presence du parametre langue
    if(!langue){
        return res.status(400).json({
            "message": "Le parametre langue est absent!"
        })
    }

   // filtrer le tableau selon le code rentrer
   const salutationSelonCode = salutations.filter(salutation=> salutation.code_langue === langue)

   if (salutationSelonCode.length === 0){
        return res.status(404).json(  {
            "message": "Erreur, le code " + langue + " n\'existe pas"
        })
   }
  
   // dans le cas contraire on retourne une salutation aleatoire
   //Generation d'un index aleatoire compatible avec l'ensemble des valeurs pouvant 
   //être retourné
   let indice = Math.floor(Math.random()* salutationSelonCode.length)
   res.status(200).json(salutationSelonCode[indice])
}

/**
 * Ajouter une salutation
 * @param {} req 
 * @param {*} res 
 * @returns
 */
export const ajouterSalutation = (req, res) => {

    try{

        // recuperation des donnees
        const code_langue = req.body.code;
        const langue = req.body.langue;
        const message = req.body.message;
        
        if(!code_langue || !langue || !message){
            return res.status(400).json({"message" : "Erreur, les paramètres code_langue, langue et message sont obligatoires"})
        }

        //ajout de la salutation
        ajouter(code_langue, langue, message);

        return res.status(201).json({
            "message" : "Salutation ajoutée",
            "salutation" : message
        })

    } catch(Error){
        return res.status(500).json({
            "message" : "Erreur serveur",
        })
    }
}

