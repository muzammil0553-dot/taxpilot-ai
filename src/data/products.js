// ======================================================
// Product Data
// AI Tax Advisor
// ======================================================

const products = [
{
    id: "free",

    name: "Free",

    price: 0,

    currency: "CAD",

    description:
        "Ideal for users with a simple personal tax situation.",

    bestFor: [
        "Simple personal return",
        "Salary income",
        "Student income"
    ],

    supports: {

        salaryIncome: true,

        studentIncome: true,

        medicalExpenses: false,

        donations: false,

        employmentExpenses: false,

        investmentIncome: false,

        capitalGains: false,

        foreignIncome: false,

        rentalIncome: false,

        freelanceIncome: false,

        gigWorkIncome: false,

        businessExpenses: false,

        homeOfficeExpenses: false,

        vehicleExpenses: false,

        expertHelp: false,

        fullService: false,

        corporateFiling: false,

        nilCorporateReturn: false

    }

},
{
    id: "deluxe",

    name: "Deluxe",

    price: 30,

    currency: "CAD",

    description:
        "Perfect for users with common deductions and employment-related expenses.",

    bestFor: [
        "Medical expenses",
        "Donations",
        "Employment expenses",
        "Family-related deductions"
    ],

    supports: {

        salaryIncome: true,

        studentIncome: true,

        medicalExpenses: true,

        donations: true,

        employmentExpenses: true,

        investmentIncome: false,

        capitalGains: false,

        foreignIncome: false,

        rentalIncome: false,

        freelanceIncome: false,

        gigWorkIncome: false,

        businessExpenses: false,

        homeOfficeExpenses: false,

        vehicleExpenses: false,

        expertHelp: false,

        fullService: false,

        corporateFiling: false,

        nilCorporateReturn: false

    }

},
{
    id: "premier",

    name: "Premier",

    price: 50,

    currency: "CAD",

    description:
        "Best for users with investments, rental income, capital gains and foreign income.",

    bestFor: [
        "Investment income",
        "Rental income",
        "Capital gains",
        "Foreign income"
    ],

    supports: {

        salaryIncome: true,
        studentIncome: true,
        medicalExpenses: true,
        donations: true,
        employmentExpenses: true,

        investmentIncome: true,
        capitalGains: true,
        foreignIncome: true,
        rentalIncome: true,

        freelanceIncome: false,
        gigWorkIncome: false,

        businessExpenses: false,
        homeOfficeExpenses: false,
        vehicleExpenses: false,

        expertHelp: false,
        fullService: false,

        corporateFiling: false,
        nilCorporateReturn: false

    }

},
{
    id: "self-employed",

    name: "Self-Employed",

    price: 70,

    currency: "CAD",

    description:
        "Designed for freelancers, contractors and self-employed individuals.",

    bestFor: [
        "Freelancers",
        "Gig workers",
        "Business expenses"
    ],

    supports: {

        salaryIncome:true,
        studentIncome:true,

        medicalExpenses:true,
        donations:true,

        employmentExpenses:true,

        investmentIncome:true,
        capitalGains:true,
        foreignIncome:true,
        rentalIncome:true,

        freelanceIncome:true,
        gigWorkIncome:true,

        businessExpenses:true,
        homeOfficeExpenses:true,
        vehicleExpenses:true,

        expertHelp:false,
        fullService:false,

        corporateFiling:false,
        nilCorporateReturn:false

    }

},
{
    id: "expert-assist",

    name: "Expert Assist",

    price: 120,

    currency: "CAD",

    description:
        "File your own taxes with help from a tax expert.",

    bestFor:[
        "Expert chat",
        "Expert review",
        "Video call"
    ],

    supports:{

        salaryIncome:true,
        studentIncome:true,
        medicalExpenses:true,
        donations:true,
        employmentExpenses:true,

        investmentIncome:true,
        capitalGains:true,
        foreignIncome:true,
        rentalIncome:true,

        freelanceIncome:true,
        gigWorkIncome:true,

        businessExpenses:true,
        homeOfficeExpenses:true,
        vehicleExpenses:true,

        expertHelp:true,
        fullService:false,

        corporateFiling:false,
        nilCorporateReturn:false

    }

},
{
    id:"expert-full-service",

    name:"Expert Full Service",

    price:250,

    currency:"CAD",

    description:
        "A tax expert prepares and files your return for you.",

    bestFor:[
        "Expert prepares return",
        "Document upload",
        "Progress tracking"
    ],

    supports:{

        salaryIncome:true,
        studentIncome:true,
        medicalExpenses:true,
        donations:true,
        employmentExpenses:true,

        investmentIncome:true,
        capitalGains:true,
        foreignIncome:true,
        rentalIncome:true,

        freelanceIncome:true,
        gigWorkIncome:true,

        businessExpenses:true,
        homeOfficeExpenses:true,
        vehicleExpenses:true,

        expertHelp:true,
        fullService:true,

        corporateFiling:false,
        nilCorporateReturn:false

    }

},
{
    id:"business-corporate",

    name:"Business Corporate",

    price:400,

    currency:"CAD",

    description:
        "Tax filing solution for incorporated businesses.",

    bestFor:[
        "Corporate tax",
        "Business revenue"
    ],

    supports:{

        salaryIncome:false,
        studentIncome:false,

        medicalExpenses:false,
        donations:false,
        employmentExpenses:false,

        investmentIncome:false,
        capitalGains:false,
        foreignIncome:false,
        rentalIncome:false,

        freelanceIncome:false,
        gigWorkIncome:false,

        businessExpenses:true,
        homeOfficeExpenses:false,
        vehicleExpenses:false,

        expertHelp:false,
        fullService:false,

        corporateFiling:true,
        nilCorporateReturn:false

    }

},
{
    id:"nil-corporate-return",

    name:"Nil Corporate Return",

    price:175,

    currency:"CAD",

    description:
        "For incorporated companies with no revenue.",

    bestFor:[
        "No revenue company",
        "Nil return"
    ],

    supports:{

        salaryIncome:false,
        studentIncome:false,

        medicalExpenses:false,
        donations:false,
        employmentExpenses:false,

        investmentIncome:false,
        capitalGains:false,
        foreignIncome:false,
        rentalIncome:false,

        freelanceIncome:false,
        gigWorkIncome:false,

        businessExpenses:false,
        homeOfficeExpenses:false,
        vehicleExpenses:false,

        expertHelp:false,
        fullService:false,

        corporateFiling:true,
        nilCorporateReturn:true

    }

},
];

export default products;