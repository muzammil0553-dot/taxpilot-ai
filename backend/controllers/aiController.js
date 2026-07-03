const {
  compareProducts,
} = require("../services/productComparison");

const {
  detectIntent,
} = require("../services/ruleEngine");

const {
  findBestProduct,
} = require("../services/productMatcher");

const {
  checkEligibility,
} = require("../services/eligibilityEngine");

const {
  askGemini,
} = require("../services/geminiService");

// Format AI Response
function formatAIResponse(text) {
  if (!text) return "";

  return text
    .replace(/Recommendation:/gi, "\nRecommendation:")
    .replace(/Reason:/gi, "\n\nReason:")
    .replace(/Price:/gi, "\n\nPrice:")
    .replace(/Key Features:/gi, "\n\nKey Features:")
    .replace(/Comparison:/gi, "\n\nComparison:")
    .replace(/Benefits:/gi, "\n\nBenefits:")
    .replace(/•/g, "\n•")
    .trim();
}

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
          product: null,
        });
      }

      return res.json({
        success: true,
        type: "recommendation",
        answer: `Recommendation: ${product.name}

Reason:
• This product best matches your requirements.
• It is suitable for your tax situation.
• It provides the features you need.

Price:
CAD $${product.price}

Key Features:
• Employment income support
• Basic deductions
• Medical expenses`,
        product,
      });
    }

    // ==========================
    // PRODUCT ELIGIBILITY
    // ==========================

    if (intent === "ELIGIBILITY") {
      const result = await checkEligibility(message);

      return res.json({
        success: true,
        type: "eligibility",
        answer: formatAIResponse(result.answer),
      });
    }

    // ==========================
    // PRODUCT COMPARISON
    // ==========================

    if (intent === "COMPARE") {
      const result = await compareProducts(message);

      return res.json({
        success: true,
        type: "comparison",
        answer: formatAIResponse(result.answer),
        comparison: {
          productOne: result.productOne,
          productTwo: result.productTwo,
        },
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
        answer: formatAIResponse(answer),
      });
    }

    // ==========================
    // GENERAL QUESTIONS
    // ==========================

    const answer = await askGemini(message);

    return res.json({
      success: true,
      type: "general",
      answer: formatAIResponse(answer),
    });
  } catch (error) {
    console.error("===== AI ERROR =====");
    console.error(error);

    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};