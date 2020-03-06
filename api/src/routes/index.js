const express = require('express');
const router = express.Router();
const userRouter = require('./user.route');
//const taskRouter = require ('./task.route')

router.use(userRouter);


//router.use(taskRouter);

module.exports = router;