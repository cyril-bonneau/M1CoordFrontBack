const bcrypt = require('bcrypt');
const Client = require('../models/client.model')

// obtenir tous les clients
exports.findAll = (req, res) => {
    Client.find()
    .then(clients => {
        res.send(clients);
    })
    .catch(err => {
        res.status(500).send({
            message: err.message || "Erreur sur la recherche"
        })
    })
}

// créer un nouveau client
exports.create = (req, res) => {
    const client = new Client({
        clientDenomination: req.body.clientDenomination,
        clientAdresse: req.body.clientAdresse,
        clientFirstName: req.body.clientFirstName,
        clientSecondName: req.body.clientSecondName,
        clientTelephone: req.body.clientTelephone,
        clientMail: req.body.clientMail
    })

    client.save()
    .then(data => {
        res.send(data)
    }).catch(err => {
        res.status(500).send({
            message: err.message
        })
    })
}

exports.findOne = (req, res) => {
    //console.log(req.params);

    Client.findById(req.params.id)
    .then(client => {
        if(!client) {
            return res.status(404).send({
                message: "Client inconnu !"
            });
        }
        res.send(client)
    })
    .catch(err => {
        return res.status(500).send({
            message: err.message
        })
    })
}

// modifier un client
exports.updateOne = (req, res) => {
    Client.findByIdAndUpdate(
        req.params.id,
        req.body
    ).then(client => {
        if(!client) {
            return res.status(404).send({
                message: "Client inconnu !"
            })
        }
        //res.send(user)
        Client.findById(req.params.id)
        .then(newClient => {
            res.send({
                new_client: newClient,
                old_client: client
            });
        })
    }).catch(err => {
        return res.status(500).send({
            message: err.message
        })
    })
}

// supprimer un client
exports.deleteOne = (req, res) => {
    Client.findByIdAndRemove(req.params.id)
    .then(client => {
        if(!client) {
            return res.status(404).send({
                message: "Client inconnu !"
            })
        }
        res.send({
            message: `Client avec identifiant ${req.params.id} supprimé avec succès`
        })
    })
}

// supprimer tous les clients
exports.removeAll = (req, res) => {
    Client.deleteMany(err => {
        if(err) {
            res.send(err)
        }
        res.send("Tous les clients supprimés avec succès")
    })
}