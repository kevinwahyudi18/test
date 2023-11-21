// src/controller/adminController.js
const { PrismaClient } = require('@prisma/client');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const prisma = new PrismaClient();

const login = async (req, res) => {
  const { username, password } = req.body;

  try {
    // Temukan admin berdasarkan username
    const admin = await prisma.admin.findFirst({
      where: { username: username },
    });

    // Jika admin tidak ditemukan
    if (!admin) {
      return res.status(404).json({ message: 'Admin not found' });
    }

    // Verifikasi password
    const passwordMatch = await bcrypt.compare(password, admin.password);

    if (!passwordMatch) {
      return res.status(401).json({ message: 'Invalid password' });
    }

    // Buat token JWT dengan menggunakan secret key dari .env
    const token = jwt.sign({ username: admin.username }, process.env.JWT_SECRET, {
      expiresIn: '1h',
    });

    // Kirim token sebagai respons
    res.status(200).json({ token });
  } catch (error) {
    console.error('Login error:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

module.exports = { login };
