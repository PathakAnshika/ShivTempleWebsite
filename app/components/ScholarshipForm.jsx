"use client";
import { useState, useEffect } from "react";

export default function ScholarshipForm() {
  const [formData, setFormData] = useState({});
  const [user, setUser] = useState(null);

  useEffect(() => {
    const stored = localStorage.getItem("user");
    if (stored) {
      const parsed = JSON.parse(stored);
      setUser(parsed);

      setFormData({
        name: parsed.name || "",
        email: parsed.email || "",
      });
    }
  }, []);

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("/api/scholarship/apply", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          user_id: user?.id,
        }),
      });

      const data = await res.json();

      if (data.success) {
        alert("Application submitted ✅");
      }

    } catch (err) {
      console.error(err);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">

      {/* NAME (AUTO) */}
      <input
        name="name"
         placeholder="Name"
        // value={formData.name || ""}
        className="input"
      />

      {/* EMAIL (AUTO) */}
      <input
        name="email"
        placeholder="Email"
        // value={formData.email || ""}
        className="input"
      />

      {/* PHONE */}
      <input
        name="phone"
        placeholder="Phone Number"
        required
        onChange={handleChange}
        className="input"
      />

      {/* COURSE */}
      <input
        name="course"
        placeholder="Course / Class"
        required
        onChange={handleChange}
        className="input"
      />

      {/* COLLEGE */}
      <input
        name="college"
        placeholder="School / College Name"
        required
        onChange={handleChange}
        className="input"
      />

      {/* INCOME */}
     <input
  name="income"
  type="text"   // 👈 change
  inputMode="numeric" // 👈 mobile numeric keyboard
  placeholder="Annual Family Income (₹)"
  required
  onChange={handleChange}
  className="input"
/>

      {/* REASON */}
      <textarea
        name="reason"
        placeholder="Why do you need this scholarship?"
        required
        rows={3}
        onChange={handleChange}
        className="input"
      />

      {/* DOCUMENT (OPTIONAL) */}
   <label className="fileBox">
  📄 Upload Document (optional)
  <input
    type="file"
    name="document"
    onChange={(e) =>
      setFormData({ ...formData, document: e.target.files[0] })
    }
    hidden
  />
</label>
      {/* SUBMIT */}
      <button className="submitBtn">
        Submit Application
      </button>

      <style jsx>{`
        .input {
          width: 100%;
          border: 1px solid #e5e7eb;
          padding: 12px 14px;
          border-radius: 12px;
          outline: none;
          background: #fafafa;
        }

        .input::placeholder {
          color: #6b7280;
        }

        .input:focus {
          border-color: #7a3bbc;
          background: #fff;
          box-shadow: 0 0 0 3px rgba(122,59,188,0.15);
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