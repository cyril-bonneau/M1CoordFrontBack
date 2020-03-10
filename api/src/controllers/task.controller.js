const Task = require('../models/task.model');
const bcrypt = require('bcrypt');

exports.create = (req, res) => {
        //let hashedPassword = bcrypt.hashSync(req.body.password, 8);
        //console.log(hashedPassword);
        const task = new Task({
                taskName: req.body.taskName,
                taskDescription: req.body.taskDescription,
                taskStatus: req.body.taskStatus,
                taskTime: req.body.taskTime
                //using Populate for a foreign key
            })
            // if (err.error) {
            //     res.send(err);
            // } else {
        task.save()
            .then(data => {
                res.send(data);
            }).catch(err => {
                res.status(500).send({
                    message: err.message
                })
            })
    }
    // get all tasks
exports.findAll = (req, res) => {
    Task.find()
        .then(tasks => {
            res.send(tasks);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occured when finding tasks."
            })
        })
}

exports.findOne = (req, res) => {
    console.log(req.params);
    Task.findById(req.params.id)
        .then(task => {
            if (!task) {
                return res.status(404).send({
                    message: "Task not found with id" + req.params.id
                });
            }
            res.send(task);
        })
        .catch(err => {
            return res.status(500).send({
                message: err.message
            })
        })
}

exports.updateOne = (req, res) => {
    Task.findByIdAndUpdate(
        req.params.id,
        req.body
    ).then(task => {
        if (!task) {
            return res.status(404).send({
                message: "Task not found"
            })
        }
        // res.send(task);
        old_task.findById(req.params.id)
            .then(newTask => {
                res.send({
                    new_task: newTask,
                    old_task: task
                });
            })
    }).catch(err => {
        return res.status(500).send({
            message: err.message
        })
    })
}

exports.deleteOne = (req, res) => {
    Task.findByIdAndRemove(req.params.id)
        .then(task => {
            if (!task) {
                return res.status(404).send({
                    message: "Task not found"
                })
            }
            res.send({
                // message: "Task with id" + req.params.id + "deleted successfully"
                message: `Task with id ${req.params.id} deleted successfully`
            })
        })
}

exports.removeAll = (req, res) => {
    Task.deleteMany((err) => {
        if (err) {
            res.send(err)
        }
        res.send('Tasks removed');
    });
}