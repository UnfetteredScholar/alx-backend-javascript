import AppController from '../controllers/AppController';
import StudentsController from '../controllers/StudentsController';

const express = require('express');

const router = express.Router();

router.get('/', (req, res) => AppController.getHomepage(req, res));
router.get('/students', async (req, res) => { await StudentsController.getAllStudents(req, res); });
router.get('/students/:major', async (req, res) => { await StudentsController.getAllStudentsByMajor(req, res); });

export default router;
module.exports = router;
