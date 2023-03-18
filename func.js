const contatos = require('./contatos.js');

const idCliente = (id, listaContatos) => {
    let status = false;
    let contactsJson = {};
    
    

    listaContatos.whats.forEach((perfil) => {
        if(perfil.id == id){
            contactsJson.contatos = perfil.contacts;
            
        }
    });

    return contactsJson;
};

console.log(idCliente(1, contatos.contatos));
