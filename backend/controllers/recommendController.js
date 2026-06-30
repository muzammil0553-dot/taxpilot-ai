const db = require("../config/db");

exports.getRecommendation = (req, res) => {

    const {

        filingType,
        income,
        deductions,
        helpPreference

    } = req.body;

    let productId = "free";

    if (filingType === "corporate") {

        productId = "business";

    }

    else if (
        filingType === "self-employed" ||
        income.includes("freelance")
    ) {

        productId = "self-employed";

    }

    else if (
        income.includes("investment") ||
        income.includes("rental")
    ) {

        productId = "premier";

    }

    const sql = "SELECT * FROM products WHERE id=?";

    db.query(sql, [productId], (err, result) => {

        if (err) {

            return res.status(500).json(err);

        }

        res.json(result[0]);

    });

};