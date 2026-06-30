const {
    compareProducts
} = require("../services/productComparison");
const { detectIntent } = require("../services/ruleEngine");
const { findBestProduct } = require("../services/productMatcher");
const {
    checkEligibility
} = require("../services/eligibilityEngine");
const {
  askGemini,
} = require("../services/geminiService");
// Gemini ko baad me add karenge
// const { askGemini } = require("../services/geminiService");

exports.chat = async (req, res) => {

  try {

    const { message } = req.body;

    if (!message) {
      return res.status(400).json({
        success: false,
        message: "Message is required",
      });
    }

    // Detect user intent
    const intent = detectIntent(message);

    // ==========================
    // PRODUCT RECOMMENDATION
    // ==========================

    if (intent === "RECOMMEND") {

    const product = await findBestProduct(message);

    if (!product) {

        return res.json({
            success: true,
            type: "recommendation",
            answer: "Sorry, I couldn't find a suitable product.",
            product: null
        });

    }

    return res.json({

        success: true,

        type: "recommendation",

        answer:
            `I recommend ${product.name} because it best matches your requirements.`,

        product

    });

}

    // ==========================
    // PRODUCT ELIGIBILITY
    // ==========================

    if (intent === "ELIGIBILITY") {

    const result =
        await checkEligibility(message);

    return res.json({

        success: true,

        type: "eligibility",

        answer: result.answer

    });

}

    // ==========================
    // PRODUCT COMPARISON
    // ==========================

   if (intent === "COMPARE") {

    const result =
        await compareProducts(message);

   return res.json({

    success: true,

    type: "comparison",

    answer: result.answer,

    comparison: {

        productOne: result.productOne,

        productTwo: result.productTwo

    }

});

}

    // ==========================
    // TAX QUESTIONS
    // ==========================

    if (intent === "TAX") {

  const answer = await askGemini(message);

  return res.json({

    success: true,

    type: "tax",

    answer,

  });

}

    // ==========================
    // GENERAL
    // ==========================

    const answer = await askGemini(message);

return res.json({

    success:true,

    type:"general",

    answer

});

  }   catch (error) {

  console.error("===== AI ERROR =====");
  console.error(error);

  return res.status(500).json({
    success: false,
    message: error.message,
  });

}

};