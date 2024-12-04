const contactMessageModel = require('../models/contactMessageModel');

const contactMessageKeysFormat = ['firstName', 'lastName', 'email', 'queryType', 'message', 'contactedByTeam'];


const contactMessageController = {

    // GET /
    index: (req, res) => {

        res.render('index');

    },


    // POST /
    create: (req, res) => {

        const objContact = req.body;

        //Verificar formatação do objeto do corpo da requisição
        for (const key in objContact) {
            if (!contactMessageKeysFormat.includes(key)) {
                res.sendStatus(400);
                return;
            }
        }

        res.sendStatus(200);
    }
}

//Exemplo de output incorreto
/* 
    {
        "firstName": "",
        "lastName": "",
        "email": "",
        "queryType": "",
        "message": "",
        "contactedByTeam": false
    }

*/

module.exports = contactMessageController;