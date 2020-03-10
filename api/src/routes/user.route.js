const express = require('express');
const router = express.Router();
const user = require('../controllers/user.controller');
const task = require('../controllers/task.controller');
const verifyToken = require('../helpers/verifyToken');

//*******************user Routers ***************/

//create  a new user
router.post('/users', user.create);
router.get('/users', user.findAll);
router.get('/users/:id', user.findOne);
router.post('/users/:id', user.updateOne);
router.put('/users/:id', user.updateOne);
router.delete('/users/:id', user.deleteOne);

//*******************task Routers ***************/
router.post('/tasks', task.create);
router.get('/tasks', task.findAll);
router.get('/tasks/:id', task.findOne);
router.post('/tasks/:id', task.updateOne);
router.put('/tasks/:id', task.updateOne);
router.delete('/tasks/:id', task.deleteOne);

module.exports = router;