const contactMessages = [];
let id = -1;

const contactMessageModel = {

    createContactMessage: (objContact) => {
        id++
        contactMessages.push({ id,  ...objContact})
    }, 

    showAll: () => {
        console.log(contactMessages);
    }

}

module.exports = contactMessageModel;