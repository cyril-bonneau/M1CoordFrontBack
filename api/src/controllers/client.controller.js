const Client = require('../models/client.model');
const bcrypt = require('bcrypt');

exports.create = (req, res) => {
        //let hashedPassword = bcrypt.hashSync(req.body.password, 8);
        //console.log(hashedPassword);
        const client = new Client({
                clientDenomination: req.body.clientDenomination,
                clientAdresse: req.body.clientAdresse,
                clientFirstName: req.body.clientFirstName,
                clientSecondName: req.body.clientSecondName,
                clientTelephone: req.body.clientTelephone,
                clientMail: req.body.clientMail
            })
            // if (err.error) {
            //     res.send(err);
            // } else {
        client.save()
            .then(data => {
                res.send(data);
            }).catch(err => {
                res.status(500).send({
                    message: err.message
                })
            })
        }
    // get all users
exports.findAll = (req, res) => {
    Client.find()
        .then(sprint => {
            res.send(sprint);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occured when finding the client."
            })
        })
}

exports.findOne = (req, res) => {
    console.log(req.params);
    Client.findById(req.params.id)
        .then(client => {
            if (!client) {
                return res.status(404).send({
                    message: "Client not found with id" + req.params.id
                });
            }
            res.send(sprint);
        })
        .catch(err => {
            return res.status(500).send({
                message: err.message
            })
        })
}

exports.updateOne = (req, res) => {
    Client.findByIdAndUpdate(
        req.params.id,
        req.body
    ).then(client => {
        if (!client) {
            return res.status(404).send({
                message: "Client not found"
            })
        }
        // res.send(user);
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

exports.deleteOne = (req, res) => {
    Client.findByIdAndRemove(req.params.id)
        .then(client => {
            if (!client) {
                return res.status(404).send({
                    message: "Client not found"
                })
            }
            res.send({
                // message: "User with id" + req.params.id + "deleted successfully"
                message: `CLient with id ${req.params.id} deleted successfully`
            })
        })
}

exports.removeAll = (req, res) => {
    Client.deleteMany((err) => {
        if (err) {
            res.send(err)
        }
        res.send('Client removed');
    });
}