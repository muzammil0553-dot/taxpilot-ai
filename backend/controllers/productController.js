const db = require("../config/db");

// Get All Products
exports.getProducts = (req, res) => {

  const sql = "SELECT * FROM products";

  db.query(sql, (err, results) => {

    if (err) {
      return res.status(500).json(err);
    }

    res.json(results);

  });

};

// Get Product By ID
exports.getProductById = (req, res) => {

  const { id } = req.params;

  const sql = "SELECT * FROM products WHERE id = ?";

  db.query(sql, [id], (err, results) => {

    if (err) {
      return res.status(500).json(err);
    }

    if (results.length === 0) {
      return res.status(404).json({
        message: "Product not found",
      });
    }

    res.json(results[0]);

  });

};