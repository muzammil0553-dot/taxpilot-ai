const { findBestProduct } = require("./productMatcher");

async function checkEligibility(message) {

    const recommended = await findBestProduct(message);

    if (!recommended) {

        return {
            success: false,
            answer: "Sorry, I couldn't determine the best product."
        };

    }

    const text = message.toLowerCase();

    let requestedProduct = null;

    if (text.includes("free")) requestedProduct = "free";
    else if (text.includes("deluxe")) requestedProduct = "deluxe";
    else if (text.includes("premier")) requestedProduct = "premier";
    else if (text.includes("self-employed")) requestedProduct = "self-employed";
    else if (text.includes("business")) requestedProduct = "business";

    if (!requestedProduct) {

        return {
            success: true,
           answer: `Based on your situation, I recommend ${recommended.name} because it best matches your income, deductions and filing requirements.`
        };

    }

    if (requestedProduct === recommended.id) {

        return {
            success: true,
           answer: `✅ Yes. ${recommended.name} is suitable for your tax situation and supports the features you need.`
        };

    }

    return {

        success: true,

        answer:
`❌ ${requestedProduct} is not the best choice.

✅ I recommend ${recommended.name} instead because it better matches your tax situation.`

    };

}

module.exports = {
    checkEligibility,
};