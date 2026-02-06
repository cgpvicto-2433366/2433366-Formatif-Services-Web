import salutationModel from "../models/salutations.model.js";

/**
 * Afficher la liste des salutations
 */
export const listeSalutations = async (req, res) =>{
    try{
        const liste = await salutationModel.getSalutations()
        res.status(200).json(liste)
    } catch (erreur) {
        // S'il y a eu une erreur au niveau de la requête, on retourne un erreur 500 car 
        //  c'est du serveur que provient l'erreur.
        console.log('Erreur : ', erreur);
        res.status(500)
        res.send({
            message: "Erreur lors de la recuperation de la liste des salutations"
        });
    };

}


/**
 * Ajouter une salutation
 * @param {} req 
 * @param {*} res 
 * @returns
 */
export const ajouterSalutation = async (req, res) => {

    try{

        // recuperation des donnees
        const code_langue = req.body.code;
        const langue = req.body.langue;
        const message = req.body.message;
        
        if(!code_langue || !langue || !message){
            return res.status(400).json({"message" : "Erreur, les paramètres code_langue, langue et message sont obligatoires"})
        }

        //ajout de la salutation
        const reponse = await salutationModel.addSalutation(code_langue, langue, message);

        return res.status(201).json({
            "message" : "Salutation ajoutée",
            "salutation" : message
        })

    } catch(Error){
        console.log('Erreur : ', Error);
        return res.status(500).json({
            "message" : "Erreur serveur",
        })
    }
}
