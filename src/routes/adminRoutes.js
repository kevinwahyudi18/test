const express = require('express');
const router = express.Router();
const { login } = require('../controller/adminController');
const { authenticateAdmin } = require('../middleware/authMiddleware');

// Rute login admin
router.post('/login', login);

// Rute yang memerlukan otentikasi
router.get('/protected', authenticateAdmin, (req, res) => {
  res.status(200).json({ message: 'Protected route accessed' });
});

module.exports = router;
