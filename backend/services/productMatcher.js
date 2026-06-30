const db = require("../config/db");

function findBestProduct(message) {

  return new Promise((resolve, reject) => {

    const text = message.toLowerCase();

    let sql = "";
    let params = [];

    // Corporate
    if (
      text.includes("corporate") ||
      text.includes("incorporated")
    ) {

      sql = "SELECT * FROM products WHERE corporateFiling = 1 LIMIT 1";

    }

    // Self Employed
    else if (
      text.includes("freelancer") ||
      text.includes("self-employed") ||
      text.includes("business expenses") ||
      text.includes("home office")
    ) {

      sql = "SELECT * FROM products WHERE businessExpenses = 1 LIMIT 1";

    }

    // Investment / Rental
    else if (
      text.includes("investment") ||
      text.includes("rental")
    ) {

      sql = `
        SELECT *
        FROM products
        WHERE investmentIncome = 1
           OR rentalIncome = 1
        LIMIT 1
      `;

    }

    // Expert Help
    else if (
      text.includes("expert") ||
      text.includes("someone else") ||
      text.includes("file for me")
    ) {

      sql = "SELECT * FROM products WHERE expertHelp = 1 LIMIT 1";

    }

    // Default
    else {

      sql = "SELECT * FROM products WHERE salaryIncome = 1 LIMIT 1";

    }

    db.query(sql, params, (err, results) => {

      if (err) {

        return reject(err);

      }

      resolve(results[0] || null);

    });

  });

}

module.exports = {
  findBestProduct,
};