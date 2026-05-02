"use client";
import { useState } from "react";

export default function ScholarshipApplyPage() {
  const [step, setStep] = useState(1);
  const totalSteps = 6;

  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    dob: "",
    gender: "",
    address: "",

    course: "",
    college: "",
    year: "",
    marks: "",

    income: "",
    fatherOccupation: "",
    motherOccupation: "",
    dependents: "",
    feeAmount: "",

    bankName: "",
    accountNumber: "",
    ifsc: "",
    reason: "",

    agree: false,
  });

  /* =========================
     INPUT CHANGE
  ========================= */
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setForm({
      ...form,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  /* =========================
     NEXT STEP
  ========================= */
  const nextStep = () => {
    if (step < totalSteps) setStep(step + 1);
  };

  /* =========================
     PREV STEP
  ========================= */
  const prevStep = () => {
    if (step > 1) setStep(step - 1);
  };

  /* =========================
     SUBMIT
  ========================= */
  const handleSubmit = async () => {
    try {
      setLoading(true);

      const res = await fetch("/api/scholarship/apply", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (data.success) {
        alert("Application Submitted Successfully 🎓");
        window.location.reload();
      } else {
        alert(data.message || "Failed");
      }

    } catch (err) {
      console.error(err);
      alert("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  /* =========================
     PROGRESS %
  ========================= */
  const progress = (step / totalSteps) * 100;

  return (
  <div className="min-h-screen bg-purple-50 px-4 py-4">

      <div className="max-w-4xl h-full mx-auto flex flex-col gap-4">

        {/* HEADER */}
        <div className="bg-gradient-to-r from-purple-700 to-fuchsia-600 text-white rounded-3xl p-8 shadow-lg">
          <h1 className="text-4xl font-bold">
            🎓 Scholarship Application
          </h1>

          <p className="mt-2 text-purple-100">
            Support for deserving students
          </p>
        </div>

        {/* PROGRESS */}
        <div className="bg-white rounded-2xl shadow p-6">
          <div className="flex justify-between text-sm font-medium text-gray-600 mb-3">
            <span>
              Step {step} of {totalSteps}
            </span>

            <span>
              {Math.round(progress)}%
            </span>
          </div>

          <div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-purple-600 to-fuchsia-600 transition-all duration-500"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        {/* FORM CARD */}
     <div className="bg-white rounded-3xl shadow-lg p-6 max-h-[78vh] overflow-y-auto">

         

{step === 1 && (
  <div className="space-y-5">

    <h2 className="text-2xl font-semibold text-purple-700">
      👤 Basic Details
    </h2>

    <Grid>

      <Input
        name="name"
        placeholder="Full Name"
        value={form.name}
        onChange={handleChange}
      />

      <Input
        name="email"
        placeholder="Email Address"
        value={form.email}
        onChange={handleChange}
      />

      <Input
        name="phone"
        placeholder="Phone Number"
        value={form.phone}
        onChange={handleChange}
      />

      <Input
        type="date"
        name="dob"
        value={form.dob}
        onChange={handleChange}
      />

      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-2">
          Gender
        </label>

        <select
          name="gender"
          value={form.gender}
          onChange={handleChange}
          className="input"
        >
          <option value="">Select Gender</option>
          <option>Male</option>
          <option>Female</option>
          <option>Other</option>
        </select>
      </div>

    </Grid>

  </div>
)}




{step === 2 && (
  <div className="space-y-5">

    <h2 className="text-2xl font-semibold text-purple-700">
      📍 Address Details
    </h2>

    <Grid>

      <Input
        name="city"
        placeholder="City"
        value={form.city}
        onChange={handleChange}
      />

      <Input
        name="state"
        placeholder="State"
        value={form.state}
        onChange={handleChange}
      />

      <Input
        name="pincode"
        placeholder="Pincode"
        value={form.pincode}
        onChange={handleChange}
      />

    </Grid>

    <div>
      <label className="block text-sm font-semibold text-gray-700 mb-2">
        Full Address
      </label>

      <textarea
        name="address"
        rows={2}
        value={form.address}
        onChange={handleChange}
        placeholder="Enter Full Address"
        className="input resize-none"
      />
    </div>

  </div>
)}



          {/* STEP 2 */}
          {step === 3 && (
            <div className="space-y-5">
              <h2 className="text-2xl font-semibold text-purple-700">
                🎓 Education Details
              </h2>

              <Grid>
                <Input
                  name="course"
                  placeholder="Course Name"
                  value={form.course}
                  onChange={handleChange}
                />

                <Input
                  name="college"
                  placeholder="College / School Name"
                  value={form.college}
                  onChange={handleChange}
                />

                <Input
                  name="year"
                  placeholder="Current Year / Class"
                  value={form.year}
                  onChange={handleChange}
                />

                <Input
                  name="marks"
                  placeholder="Previous Marks %"
                  value={form.marks}
                  onChange={handleChange}
                />
              </Grid>
            </div>
          )}

          {/* STEP 3 */}
          {step === 4 && (
            <div className="space-y-5">
              <h2 className="text-2xl font-semibold text-purple-700">
                💰 Financial Details
              </h2>

              <Grid>
                <Input
                  name="income"
                  placeholder="Family Income"
                  value={form.income}
                  onChange={handleChange}
                />

                <Input
                  name="fatherOccupation"
                  placeholder="Father Occupation"
                  value={form.fatherOccupation}
                  onChange={handleChange}
                />

                <Input
                  name="motherOccupation"
                  placeholder="Mother Occupation"
                  value={form.motherOccupation}
                  onChange={handleChange}
                />

                <Input
                  name="dependents"
                  placeholder="Dependents"
                  value={form.dependents}
                  onChange={handleChange}
                />

                <Input
                  name="feeAmount"
                  placeholder="Annual Fee Amount"
                  value={form.feeAmount}
                  onChange={handleChange}
                />
              </Grid>
            </div>
          )}

          {/* STEP 4 */}
       {step === 5 && (
  <div className="space-y-4">

    <h2 className="text-xl font-semibold text-purple-700">
      🏦 Bank Details
    </h2>

    <Grid>
      <Input
        name="bankName"
        placeholder="Bank Name"
        value={form.bankName}
        onChange={handleChange}
      />

      <Input
        name="accountNumber"
        placeholder="Account Number"
        value={form.accountNumber}
        onChange={handleChange}
      />

      <Input
        name="ifsc"
        placeholder="IFSC Code"
        value={form.ifsc}
        onChange={handleChange}
      />
    </Grid>

    <div>
      <label className="block text-sm font-semibold text-gray-700 mb-2">
        Reason for Scholarship
      </label>

      <textarea
        name="reason"
        rows={2}
        value={form.reason}
        onChange={handleChange}
        placeholder="Explain your need..."
        className="input resize-none"
      />
    </div>

  </div>
)}

        {step === 6 && (
  <div className="space-y-4">

    <h2 className="text-xl font-semibold text-purple-700">
      ✅ Review & Submit
    </h2>

    {/* Compact Summary */}
    <div className="bg-purple-50 rounded-xl p-4 text-sm text-gray-700 grid md:grid-cols-2 gap-3">

      <p><b>Name:</b> {form.name}</p>
      <p><b>Email:</b> {form.email}</p>

      <p><b>Phone:</b> {form.phone}</p>
      <p><b>Gender:</b> {form.gender}</p>

      <p><b>Course:</b> {form.course}</p>
      <p><b>College:</b> {form.college}</p>

      <p><b>Marks:</b> {form.marks}%</p>
      <p><b>Income:</b> ₹{form.income}</p>

      <p><b>Bank:</b> {form.bankName}</p>
      <p><b>IFSC:</b> {form.ifsc}</p>

    </div>

    {/* Checkbox */}
    <div className="bg-purple-50 p-4 rounded-xl">
      <label className="flex items-start gap-3 cursor-pointer">

        <input
          type="checkbox"
          name="agree"
          checked={form.agree}
          onChange={handleChange}
          className="mt-1 w-5 h-5 accent-purple-600"
        />

        <span className="text-sm text-gray-700 leading-5">
          I confirm all details are true and valid.
        </span>

      </label>
    </div>

  </div>
)}

        <div className="flex justify-between mt-10">

  {step > 1 ? (
    <button
      onClick={prevStep}
      className="px-6 py-3 rounded-xl border border-gray-300 text-gray-700 hover:bg-gray-50"
    >
      ← Back
    </button>
  ) : (
    <div />
  )}

  {step < totalSteps ? (
    <button
      onClick={nextStep}
      className="px-8 py-3 rounded-xl bg-gradient-to-r from-purple-700 to-fuchsia-600 text-white font-semibold"
    >
      Next →
    </button>
  ) : (
    <button
      onClick={handleSubmit}
      disabled={!form.agree || loading}
      className="px-8 py-3 rounded-xl bg-gradient-to-r from-purple-700 to-fuchsia-600 text-white font-semibold disabled:opacity-50"
    >
      {loading ? "Submitting..." : "Submit Application"}
    </button>
  )}

</div>

        </div>
      </div>
    </div>
  );
}

/* =========================
   REUSABLE INPUT
========================= */
function Input({
  name,
  value,
  onChange,
  placeholder,
  type = "text",
}) {
  return (
    <input
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className="input"
    />
  );
}

/* =========================
   GRID
========================= */
function Grid({ children }) {
  return (
    <div className="grid md:grid-cols-2 gap-4">
      {children}
    </div>
  );
}