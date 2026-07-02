import "./RecommendationPage.css";
import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
export default function RecommendationPage() {

  const navigate = useNavigate();

  const [step, setStep] = useState(1);

  const [formData, setFormData] = useState({

    filingType: "personal",

    income: [],

    deductions: [],

    helpPreference: "none",

  });
const toggleIncome = (value) => {

  if (formData.income.includes(value)) {

    setFormData({
      ...formData,
      income: formData.income.filter(
        (item) => item !== value
      ),
    });

  } else {

    setFormData({
      ...formData,
      income: [...formData.income, value],
    });

  }

};
const toggleDeduction = (value) => {

  if (formData.deductions.includes(value)) {

    setFormData({
      ...formData,
      deductions: formData.deductions.filter(
        (item) => item !== value
      ),
    });

  } else {

    setFormData({
      ...formData,
      deductions: [...formData.deductions, value],
    });

  }

};
const [recommendation, setRecommendation] = useState(null);

const [loadingRecommendation, setLoadingRecommendation] = useState(false);

const confidenceValue = 95;

const fetchRecommendation = async () => {

  setLoadingRecommendation(true);

  try {

    const response = await axios.post(
      "https://taxpilot-ai-production.up.railway.app",
      formData
    );

    setRecommendation(response.data);

  } catch (error) {

    console.error(error);

  } finally {

    setLoadingRecommendation(false);

  }

};
  return (
    <>
      <Navbar />

      <section className="recommendation-page">

        <div className="container">

          <div className="wizard-card">

            <span className="page-badge">

              AI Recommendation Wizard

            </span>

            <h1>

              Find the Right Tax Product

            </h1>

            <p>

              Answer a few questions to discover the best TaxPilot plan for your needs.

            </p>

            {/* Progress */}

            <div className="progress">

              <div
                className="progress-fill"
                style={{
                  width: `${(step / 5) * 100}%`,
                }}
              ></div>

            </div>

            <div className="step-text">

              Step {step} of 5

            </div>

            {/* STEP 1 */}

            {/* STEP 1 */}

{step === 1 && (

  <div className="step-content">

    <h2>What type of tax return do you need?</h2>

    <div className="option-grid">

      <label className={formData.filingType === "personal" ? "option-card active" : "option-card"}>

        <input
          type="radio"
          name="filing"
          value="personal"
          checked={formData.filingType === "personal"}
          onChange={() =>
            setFormData({
              ...formData,
              filingType: "personal",
            })
          }
        />

        <h3>Personal</h3>

        <p>For individuals with salary or basic income.</p>

      </label>

      <label className={formData.filingType === "self-employed" ? "option-card active" : "option-card"}>

        <input
          type="radio"
          name="filing"
          value="self-employed"
          checked={formData.filingType === "self-employed"}
          onChange={() =>
            setFormData({
              ...formData,
              filingType: "self-employed",
            })
          }
        />

        <h3>Self-Employed</h3>

        <p>Freelancers, contractors and business owners.</p>

      </label>

      <label className={formData.filingType === "corporate" ? "option-card active" : "option-card"}>

        <input
          type="radio"
          name="filing"
          value="corporate"
          checked={formData.filingType === "corporate"}
          onChange={() =>
            setFormData({
              ...formData,
              filingType: "corporate",
            })
          }
        />

        <h3>Corporate</h3>

        <p>Corporations and incorporated businesses.</p>

      </label>

    </div>

  </div>

)}
{/* STEP 2 */}

{/* STEP 2 */}

{step === 2 && (

<div className="step-content">

<h2>Select your Income Sources</h2>

<div className="checkbox-grid">

{[
"salary",
"investment",
"rental",
"freelance",
"foreign",
"capital-gains"
].map((income)=>(

<label
key={income}
className={
formData.income.includes(income)
? "checkbox-card active"
: "checkbox-card"
}
>

<input
type="checkbox"
checked={formData.income.includes(income)}
onChange={()=>toggleIncome(income)}
/>

<span>

{income
.replace("-", " ")
.replace(/\b\w/g,c=>c.toUpperCase())}

</span>

</label>

))}

</div>

</div>

)}
{/* STEP 3 */}

{step === 3 && (

<div className="step-content">

<h2>Select Your Deductions</h2>

<div className="checkbox-grid">

{[
"medical",
"donations",
"employment",
"home-office",
"vehicle",
"business"
].map((item)=>(

<label
key={item}
className={
formData.deductions.includes(item)
? "checkbox-card active"
: "checkbox-card"
}
>

<input
type="checkbox"
checked={formData.deductions.includes(item)}
onChange={()=>toggleDeduction(item)}
/>

<span>

{item
.replace("-", " ")
.replace(/\b\w/g,c=>c.toUpperCase())}

</span>

</label>

))}

</div>

</div>

)}
{/* STEP 4 */}

{step===4 && (

<div className="step-content">

<h2>

Do you need Expert Help?

</h2>

<div className="option-grid">

<label
className={
formData.helpPreference==="none"
?"option-card active"
:"option-card"
}
>

<input
type="radio"
name="help"
checked={
formData.helpPreference==="none"
}
onChange={()=>
setFormData({
...formData,
helpPreference:"none"
})
}
/>

<h3>No</h3>

<p>

I'll file myself.

</p>

</label>

<label
className={
formData.helpPreference==="expert"
?"option-card active"
:"option-card"
}
>

<input
type="radio"
name="help"
checked={
formData.helpPreference==="expert"
}
onChange={()=>
setFormData({
...formData,
helpPreference:"expert"
})
}
/>

<h3>Expert Review</h3>

<p>

Review before submission.

</p>

</label>

<label
className={
formData.helpPreference==="full"
?"option-card active"
:"option-card"
}
>

<input
type="radio"
name="help"
checked={
formData.helpPreference==="full"
}
onChange={()=>
setFormData({
...formData,
helpPreference:"full"
})
}
/>

<h3>Full Service</h3>

<p>

Expert completes everything.

</p>

</label>

</div>

</div>

)}
{/* STEP 5 */}

{step === 5 && (

<div className="step-content result-step">

<h2>

🎉 Recommendation Complete

</h2>

<div className="result-card">

<h3>

Recommended Product

</h3>

<h1>

{loadingRecommendation
  ? "Generating Recommendation..."
  : recommendation?.name}

</h1>
{recommendation && (

  <h3
    style={{
      color: "#2563EB",
      marginTop: "15px",
    }}
  >

    CAD ${recommendation.price}

  </h3>

)}
<span className="confidence">

Confidence

{confidenceValue}%

</span>

<p>

{loadingRecommendation
  ? "Analyzing your information..."
  : recommendation?.description}

</p>

<div className="result-buttons">

<button
  className="next-btn"
  onClick={() => {

  if (recommendation?.id) {

    navigate(`/products/${recommendation.id}`);

  } else {

    navigate("/products");

  }

}}
>
  View Recommended Product
</button>

<button
className="back-btn"
onClick={()=>{

setStep(1);

setRecommendation(null);

setFormData({

filingType:"personal",

income:[],

deductions:[],

helpPreference:"none"

});

}}
>

Start Again

</button>

</div>

</div>

</div>

)}
            {/* Buttons */}

            {step < 5 && (

<div className="wizard-buttons">

  <button
    className="back-btn"
    disabled={step===1}
    onClick={()=>{
      if(step>1){
        setStep(step-1);
      }
    }}
  >
    Back
  </button>

  <button
    className="next-btn"
    onClick={async () => {

  if (step === 4) {

    await fetchRecommendation();

  }

  if (step < 5) {

    setStep(step + 1);

  }

}}
  >
    Next
  </button>

</div>

)}

          </div>

        </div>

      </section>

      <Footer />

    </>
  );
}