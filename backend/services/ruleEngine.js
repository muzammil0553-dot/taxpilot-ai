function detectIntent(message) {

    const text = message.toLowerCase();

    // Product Comparison
    if (
        text.includes("difference") ||
        text.includes("compare") ||
        text.includes("vs")
    ) {
        return "COMPARE";
    }

    // Product Recommendation
    if (
        text.includes("which product") ||
        text.includes("recommend") ||
        text.includes("should i use") ||
        text.includes("what should i choose") ||
        text.includes("best product") ||
        text.includes("file for me") ||
        text.includes("someone else to file")
    ) {
        return "RECOMMEND";
    }

    // Product Eligibility
    if (
        text.includes("can i use") ||
        text.includes("eligible")
    ) {
        return "ELIGIBILITY";
    }

    // Tax Knowledge
    if (
        text.includes("rrsp") ||
        text.includes("tfsa") ||
        text.includes("capital gain") ||
        text.includes("medical") ||
        text.includes("donation") ||
        text.includes("tax") ||
        text.includes("rrif") ||
        text.includes("gst") ||
        text.includes("hst")
    ) {
        return "TAX";
    }

    return "GENERAL";
}

module.exports = {
    detectIntent,
};