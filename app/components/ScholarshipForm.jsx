"use client";
import { useState } from "react";

export default function ScholarshipForm() {
  const [formData, setFormData] = useState({});

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Application submitted successfully 🙏");
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">

      {/* <h2 className="text-2xl font-bold text-purple-800 text-center">
        Apply Now
      </h2> */}

      <input name="name" placeholder="Full Name" required onChange={handleChange} className="input" />
      <input name="phone" placeholder="Phone Number" required onChange={handleChange} className="input" />
      <input name="email" placeholder="Email Address" required onChange={handleChange} className="input" />

      <select name="category" required onChange={handleChange} className="input">
        <option value="">Select Category</option>
        <option>Class 8–10</option>
        <option>Class 11–12</option>
        <option>Graduation</option>
      </select>

      <input name="school" placeholder="School / College" required onChange={handleChange} className="input" />

      <button className="submitBtn">
        Submit Application
      </button>

      <style jsx>{`
        .input {
          width: 100%;
          border: 1px solid #0c0c0c;
          padding: 10px 12px;
          border-radius: 10px;
          outline: none;
        }
        .input:focus {
          border-color: #7a3bbc;
          box-shadow: 0 0 0 2px rgba(122,59,188,0.15);
        }
        .submitBtn {
          width: 100%;
          background: linear-gradient(to right, #7a3bbc, #9d4edd);
          color: white;
          padding: 12px;
          border-radius: 14px;
          font-weight: 600;
          margin-top: 6px;
        }
      `}</style>
    </form>
  );
}
