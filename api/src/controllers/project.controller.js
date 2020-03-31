const Projet = require('../models/project.model');
const Project = require('../models/client.model');
const bcrypt = require('bcrypt');

exports.create = (req, res) => {
        //let hashedPassword = bcrypt.hashSync(req.body.password, 8);
        //console.log(hashedPassword);
        const projet = new Projet({
                clientID: req.body.clientID,
                projectTitle: req.body.projectTitle,
                projectDevise: req.body.projectDevise,
                projectStartDate: req.body.projectStartDate,
                projectEndDate: req.body.projectEndDate,
                projectStatus: req.body.projectStatus,
                projectStack: req.body.projectStack,
                projectCout: req.body.projectCout
            })
            // if (err.error) {
            //     res.send(err);
            // } else {
        projet.save()
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
    Projet.find()
        .then(projet => {
            res.send(projet);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occured when finding the projects."
            })
        })
}

exports.findOne = (req, res) => {
    console.log(req.params);
    Projet.findById(req.params.id)
        .then(projet => {
            if (!projet) {
                return res.status(404).send({
                    message: "Project not found with id" + req.params.id
                });
            }
            res.send(projet);
        })
        .catch(err => {
            return res.status(500).send({
                message: err.message
            })
        })
}

exports.updateOne = (req, res) => {
    Projet.findByIdAndUpdate(
        req.params.id,
        req.body
    ).then(projet => {
        if (!projet) {
            return res.status(404).send({
                message: "Project not found"
            })
        }
        // res.send(user);
        Projet.findById(req.params.id)
            .then(newProjet => {
                res.send({
                    new_projet: newProjet,
                    old_projet: projet
                });
            })
    }).catch(err => {
        return res.status(500).send({
            message: err.message
        })
    })
}

exports.deleteOne = (req, res) => {
    Projet.findByIdAndRemove(req.params.id)
        .then(projet => {
            if (!projet) {
                return res.status(404).send({
                    message: "Project not found"
                })
            }
            res.send({
                message: `Project with id ${req.params.id} deleted successfully`
            })
        })
}

exports.removeAll = (req, res) => {
    Projet.deleteMany((err) => {
        if (err) {
            res.send(err)
        }
        res.send('Project removed');
    });
}