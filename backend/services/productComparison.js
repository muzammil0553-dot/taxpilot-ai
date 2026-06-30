const db = require("../config/db");

async function compareProducts(message) {

    return new Promise((resolve, reject) => {

        const text = message.toLowerCase();

        const productNames = [
            "free",
            "deluxe",
            "premier",
            "self-employed",
            "business"
        ];

        const selected = productNames.filter(name =>
            text.includes(name)
        );

        if (selected.length < 2) {

            return resolve({
                success: false,
                answer:
                    "Please mention two products to compare."
            });

        }

        const sql =
            "SELECT * FROM products WHERE id IN (?, ?)";

        db.query(
            sql,
            [selected[0], selected[1]],
            (err, results) => {

                if (err) return reject(err);

                if (results.length < 2) {

                    return resolve({
                        success: false,
                        answer:
                            "Products not found."
                    });

                }

                const first = results.find(
                    p => p.id === selected[0]
                );

                const second = results.find(
                    p => p.id === selected[1]
                );

                let answer = "";

                answer += `📊 ${first.name} vs ${second.name}\n\n`;

                answer += `💲 Price\n`;
                answer += `${first.name}: CAD $${first.price}\n`;
                answer += `${second.name}: CAD $${second.price}\n\n`;

                const features = [

                    ["Salary Income","salaryIncome"],

                    ["Investment Income","investmentIncome"],

                    ["Rental Income","rentalIncome"],

                    ["Medical Expenses","medicalExpenses"],

                    ["Business Expenses","businessExpenses"],

                    ["Expert Help","expertHelp"],

                    ["Corporate Filing","corporateFiling"]

                ];

                features.forEach(feature=>{

                    answer +=
`${feature[0]}

${first.name}: ${first[feature[1]] ? "✅":"❌"}

${second.name}: ${second[feature[1]] ? "✅":"❌"}

`;

                });

                resolve({

    success: true,

    answer,

    productOne: first,

    productTwo: second

});

            }

        );

    });

}

module.exports = {
    compareProducts,
};