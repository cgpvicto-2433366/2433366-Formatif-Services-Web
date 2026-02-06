import morgan from 'morgan';
import fs from 'fs';

// Créer un flux de fichier pour access.log
var accessLogStream = fs.createWriteStream('./access.log', { flags: 'a' })

// Exporter l'intergiciel Morgan
export const morganMiddleware = morgan(':date[clf] :method :url :status :response-time ms', { stream: accessLogStream })