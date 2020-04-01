const express = require('express');
const router = express.Router();
const user = require('../controllers/user.controller');
const task = require('../controllers/task.controller');
const sprint = require('../controllers/sprint.controller');
const client = require('../controllers/client.controller');
const projet = require('../controllers/project.controller');
const verifyToken = require('../helpers/verifyToken');

//TEST
const auth = require('../middleware/auth');

//END OF TEST


//*******************user Routers******************/

//create  a new user
router.post('/users', user.create);
router.get('/users', user.findAll);
router.get('/users/:id', user.findOne);
router.post('/users/:id', user.updateOne);
router.put('/users/:id', user.updateOne);
router.delete('/users/:id', user.deleteOne);
//** TEST */
router.post('/login',auth, user.login);
//END


//*******************task Routers ***************/
router.post('/tasks', task.create);
router.get('/tasks', task.findAll);
router.get('/tasks/:id', task.findOne);
router.post('/tasks/:id', task.updateOne);
router.put('/tasks/:id', task.updateOne);
router.delete('/tasks/:id', task.deleteOne);

//*******************client Routers**************/
router.post('/client', client.create);
router.get('/client', client.findAll);
router.get('/client/:id', client.findOne);
router.post('/client/:id', client.updateOne);
router.put('/client/:id', client.updateOne);
router.delete('/client/:id', client.deleteOne);

//*******************sprint Routers**************/
router.post('/sprint', sprint.create);
router.get('/sprint', sprint.findAll);
router.get('/sprint/:id', sprint.findOne);
router.post('/sprint/:id', sprint.updateOne);
router.put('/sprint/:id', sprint.updateOne);
router.delete('/sprint/:id', sprint.deleteOne);

//*******************projet Routers**************/
router.post('/projet', projet.create);
router.get('/projet', projet.findAll);
router.get('/projet/:id', projet.findOne);
router.post('/projet/:id', projet.updateOne);
router.put('/projet/:id', projet.updateOne);
router.delete('/projet/:id', projet.deleteOne);

module.exports = router;