import express from 'express';
const router = express.Router();

router.post('/', (req, res) => {
  res.json({ message: 'Order placed successfully with Cash on Delivery' });
});

export default router;
