const express = require("express");
const cors = require("cors");
require("dotenv").config();

const db = require("./config/db");
const productRoutes = require("./routes/productRoutes");
const recommendRoutes = require("./routes/recommendRoutes");
const aiRoutes = require("./routes/aiRoutes");
const app = express();

app.use(cors());
app.use(express.json());
app.use("/api/products", productRoutes);
app.use("/api/recommend", recommendRoutes);
app.use("/api/chat", aiRoutes);
app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "TaxPilot AI Backend Running 🚀",
  });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});