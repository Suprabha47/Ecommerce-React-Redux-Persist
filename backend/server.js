const express = require("express");
const app = express();
require("dotenv").config();

const port = process.env.PORT || 3004;

app.use(express.json());
app.use("/payment", require("./payment/payment-route"));

app.listen(port, () => console.log(`server initialized at port ${port} ...`));
