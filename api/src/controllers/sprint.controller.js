const Sprint = require('../models/sprint.model');
const bcrypt = require('bcrypt');

exports.create = (req, res) => {
        //let hashedPassword = bcrypt.hashSync(req.body.password, 8);
        //console.log(hashedPassword);
        const sprint = new Sprint({
                sprintTitle: req.body.sprintTitle,
                sprintStartDate: req.body.sprintStartDate,
                sprintEndDate: req.body.sprintEndDate,
                sprintStatus: req.body.sprintStatus,
                userTelephone: req.body.userTelephone
            })
            // if (err.error) {
            //     res.send(err);
            // } else {
        sprint.save()
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
    Sprint.find()
        .then(sprint => {
            res.send(sprint);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occured when finding sprint."
            })
        })
}

exports.findOne = (req, res) => {
    console.log(req.params);
    Sprint.findById(req.params.id)
        .then(sprint => {
            if (!sprint) {
                return res.status(404).send({
                    message: "Sprint not found with id" + req.params.id
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
    Sprint.findByIdAndUpdate(
        req.params.id,
        req.body
    ).then(sprint => {
        if (!sprint) {
            return res.status(404).send({
                message: "Sprint not found"
            })
        }
        // res.send(user);
        Sprint.findById(req.params.id)
            .then(newSprint => {
                res.send({
                    new_sprint: newSprint,
                    old_sprint: sprint
                });
            })
    }).catch(err => {
        return res.status(500).send({
            message: err.message
        })
    })
}

exports.deleteOne = (req, res) => {
    Sprint.findByIdAndRemove(req.params.id)
        .then(sprint => {
            if (!sprint) {
                return res.status(404).send({
                    message: "Sprint not found"
                })
            }
            res.send({
                // message: "User with id" + req.params.id + "deleted successfully"
                message: `Sprint with id ${req.params.id} deleted successfully`
            })
        })
}

exports.removeAll = (req, res) => {
    Sprint.deleteMany((err) => {
        if (err) {
            res.send(err)
        }
        res.send('Sprint removed');
    });
}