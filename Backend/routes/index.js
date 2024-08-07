const express = require('express');
const router = express.Router();
const { registerController, loginController, userController, taskController } = require('../controllers')

router.post('/register', registerController.register);
router.post('/login', loginController.login);
router.post('/verify', loginController.verify);
router.get('/userInfo/:userId', userController.userInfo);
router.post('/addTask/:userId', taskController.addTask);
router.post('/showTask/:userId', taskController.showTask);
router.post('/editTask/:taskId', taskController.editTask);
router.get('/showSpecificTask/:taskId', taskController.showSpecificTask);
router.get('/showTaskByPriority/:userId', taskController.showTaskByPriority);
router.get('/showCompletedTask/:userId', taskController.showCompletedTask);
module.exports = router;