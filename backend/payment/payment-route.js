const express = require("express");
const router = express.Router();
const razorpay = require("./razorpay");

router.post("/create-order", async (req, res) => {
  const { amount } = req.body;

  const options = {
    amount: amount * 100,
    currency: "USD",
    receipt: "receipt_order_" + Date.now(),
  };
  try {
    const order = await razorpay.orders.create(options);
    res.status(200).json(order);
  } catch (err) {
    res.status(500).json({ error: "Failed to create order", err });
  }
});

module.exports = router;
