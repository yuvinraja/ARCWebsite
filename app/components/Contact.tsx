"use client";

import { useState, ChangeEvent } from "react";
import { motion } from "framer-motion";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    reason: "",
    message: "",
  });

  const [status, setStatus] = useState<"success" | "error" | "">("");

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", reason: "", message: "" });
      } else {
        setStatus("error");
        console.error(result.error || "Failed to send email.");
      }
    } catch (err) {
      console.error("Network error:", err);
      setStatus("error");
    }
  };

  return (
    <motion.div
      className="max-w-3xl mx-auto px-4 py-10"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <h1 className="text-4xl font-bold mb-8 text-center">Contact Us</h1>

      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded-lg p-6 space-y-6"
      >
        <div>
          <label className="block font-semibold mb-1">Name</label>
          <input
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full border rounded px-4 py-2"
            placeholder="Your name"
          />
        </div>

        <div>
          <label className="block font-semibold mb-1">Email Address</label>
          <input
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full border rounded px-4 py-2"
            placeholder="you@example.com"
          />
        </div>

        <div>
          <label className="block font-semibold mb-1">Reason</label>
          <select
            name="reason"
            value={formData.reason}
            onChange={handleChange}
            required
            className="w-full border rounded px-4 py-2"
          >
            <option value="" disabled>
              -- Select a reason --
            </option>
            <option>Feedback</option>
            <option>Technical Help</option>
            <option>Project Collaboration</option>
            <option>Component Request</option>
            <option>Other</option>
          </select>
        </div>

        <div>
          <label className="block font-semibold mb-1">Message</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            className="w-full border rounded px-4 py-2"
            rows={5}
            placeholder="Type your message here..."
          />
        </div>

        <button
          type="submit"
          className="bg-gray-900 text-white px-6 py-2 rounded hover:bg-gray-800 transition"
        >
          Submit
        </button>

        {status === "success" && (
          <p className="text-green-600 font-medium mt-2">
            Message sent successfully!
          </p>
        )}
        {status === "error" && (
          <p className="text-red-600 font-medium mt-2">
            Something went wrong. Please try again.
          </p>
        )}
      </form>
    </motion.div>
  );
};

export default Contact;
