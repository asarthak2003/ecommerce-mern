import express from 'express';
const router = express.Router();

// Dummy login
router.post('/login', (req, res) => {
  res.json({ message: 'Login successful', token: 'dummy-token' });
});

// Dummy register
router.post('/register', (req, res) => {
  res.json({ message: 'User registered successfully' });
});

export default router;
