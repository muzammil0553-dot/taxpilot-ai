// ======================================================
// Recommendation Engine
// ======================================================

import products from "../data/products";

export function getRecommendation(user) {

    const reasons = [];

    // ==================================================
    // Rule 1 - Incorporated Company
    // ==================================================

    if (user.filingType === "corporate") {

        if (user.companyRevenue === false) {

            reasons.push(
                "You selected an incorporated company with no revenue."
            );

            return buildResult(
                "nil-corporate-return",
                reasons,
                user
            );

        }

        reasons.push(
            "You selected an incorporated company."
        );

        return buildResult(
            "business-corporate",
            reasons,
            user
        );

    }

    // ==================================================
    // Rule 2 - Expert Full Service
    // ==================================================

    if (user.helpPreference === "full-service") {

        reasons.push(
            "You want an expert to prepare and file your return."
        );

        return buildResult(
            "expert-full-service",
            reasons,
            user
        );

    }

    // ==================================================
    // Rule 3 - Expert Assist
    // ==================================================

    if (user.helpPreference === "expert-help") {

        reasons.push(
            "You requested expert assistance while filing."
        );

        return buildResult(
            "expert-assist",
            reasons,
            user
        );

    }

    // ==================================================
    // Rule 4 - Self Employed
    // ==================================================

    if (

        user.filingType === "self-employed" ||

        user.income.includes("freelance") ||

        user.income.includes("gig") ||

        user.deductions.includes("business") ||

        user.deductions.includes("home-office") ||

        user.deductions.includes("vehicle")

    ) {

        reasons.push(
            "Freelance or business-related information detected."
        );

        return buildResult(
            "self-employed",
            reasons,
            user
        );

    }

    // ==================================================
    // Rule 5 - Premier
    // ==================================================

    if (

        user.income.includes("investment") ||

        user.income.includes("capital-gains") ||

        user.income.includes("rental") ||

        user.income.includes("foreign")

    ) {

        reasons.push(
            "Investment or rental related income detected."
        );

        return buildResult(
            "premier",
            reasons,
            user
        );

    }

    // ==================================================
    // Rule 6 - Deluxe
    // ==================================================

    if (

        user.deductions.includes("medical") ||

        user.deductions.includes("donations") ||

        user.deductions.includes("employment")

    ) {

        reasons.push(
            "You selected common deductions."
        );

        return buildResult(
            "deluxe",
            reasons,
            user
        );

    }

    // ==================================================
    // Rule 7 - Free
    // ==================================================

    reasons.push(
        "Simple personal tax situation."
    );

    return buildResult(
        "free",
        reasons,
        user
    );

}

// ======================================================

function buildResult(productId, reasons, user) {

    const product =
        products.find(
            p => p.id === productId
        );

    return {

        recommendedProductId: product.id,

        recommendedProductName: product.name,

        price: product.price,

        confidence: "high",

        reasons,

        matchedInputs: user,

        disclaimer:
            "This recommendation provides general product guidance only. It is not tax, legal or financial advice."

    };

}