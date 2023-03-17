const contatos = require('./contatos.js');

const idCliente = (id) => {
    let status = false;
    let contactsArray = [];
    

    contatos.contatos.whats-users.forEach(perfil => {
        if(perfil.id == id){
            perfil.contacts.forEach(contato => {
                let pessoa = {};
                pessoa.name = contato.name;
                pessoa.description = contato.description;
                
                
            })
        }
        
    });
};