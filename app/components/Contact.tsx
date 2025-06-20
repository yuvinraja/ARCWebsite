"use client";

import { ChangeEvent, useState } from "react";
import {
  Phone,
  Mail,
  MapPin,
  Send,
  CheckCircle,
  AlertCircle,
} from "lucide-react";
import Link from "next/link";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    reason: "",
    message: "",
  });

  const [status, setStatus] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();
    setIsSubmitting(true);

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
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-16">
        {/* Hero Section */}
        <div className="text-center mb-12 ">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            Contact Us
          </h2>
          <p className="text-lg text-gray-700 mb-8">
            We would love to hear from you! Please fill out the form below and
            we will get back to you as soon as possible.
          </p>
        </div>

        {/* Contact Form Section */}
        <section className="py-20 px-6">
          <div className="max-w-4xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              {/* Contact Information */}
              <div className="space-y-8">
                <div>
                  <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                    Let&apos;s Start a Conversation
                  </h2>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    Whether you&apos;re interested in our autonomous systems,
                    want to set up an AI lab, or have questions about our
                    services, we&apos;re here to help.
                  </p>
                </div>

                <div className="space-y-6">
                  <div className="flex items-center space-x-4 p-4 bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                      <Phone className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800">Phone</h3>
                      <p className="text-gray-600">+91 8848653573</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4 p-4 bg-gradient-to-r from-teal-50 to-cyan-50 rounded-xl">
                    <div className="w-12 h-12 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-full flex items-center justify-center">
                      <Mail className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800">Email</h3>
                      <p className="text-gray-600">voltaerotech@gmail.com</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4 p-4 bg-gradient-to-r from-yellow-50 to-orange-50 rounded-xl">
                    <div className="w-12 h-12 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full flex items-center justify-center">
                      <MapPin className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800">Location</h3>
                      <p className="text-gray-600">Chittoor, Andhra Pradesh</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-pink-400 rounded-3xl transform rotate-1"></div>
                <form
                  onSubmit={handleSubmit}
                  className="relative bg-white p-8 rounded-3xl shadow-xl space-y-6"
                >
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Full Name
                    </label>
                    <input
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full border-2 border-gray-200 rounded-xl px-4 py-3 focus:border-purple-500 focus:outline-none transition-colors"
                      placeholder="Your full name"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Email Address
                    </label>
                    <input
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full border-2 border-gray-200 rounded-xl px-4 py-3 focus:border-purple-500 focus:outline-none transition-colors"
                      placeholder="you@example.com"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Reason for Contact
                    </label>
                    <select
                      name="reason"
                      value={formData.reason}
                      onChange={handleChange}
                      required
                      className="w-full border-2 border-gray-200 rounded-xl px-4 py-3 focus:border-purple-500 focus:outline-none transition-colors"
                    >
                      <option value="" disabled>
                        -- Select a reason --
                      </option>
                      <option>Project Collaboration</option>
                      <option>AI Lab Setup</option>
                      <option>Drone Systems Inquiry</option>
                      <option>Technical Support</option>
                      <option>Partnership Opportunity</option>
                      <option>General Inquiry</option>
                      <option>Other</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Message
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      className="w-full border-2 border-gray-200 rounded-xl px-4 py-3 focus:border-purple-500 focus:outline-none transition-colors resize-none"
                      rows={5}
                      placeholder="Tell us about your project or inquiry..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-yellow-400 to-pink-500 hover:from-yellow-500 hover:to-pink-600 disabled:from-gray-400 disabled:to-gray-500 text-black font-semibold px-6 py-4 rounded-xl transition-all duration-300 transform hover:scale-105 disabled:scale-100 shadow-lg flex items-center justify-center space-x-2"
                  >
                    {isSubmitting ? (
                      <div className="w-5 h-5 border-2 border-black border-t-transparent rounded-full animate-spin"></div>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        <span>Send Message</span>
                      </>
                    )}
                  </button>

                  {status === "success" && (
                    <div className="flex items-center space-x-2 p-4 bg-green-50 border border-green-200 rounded-xl">
                      <CheckCircle className="w-5 h-5 text-green-600" />
                      <p className="text-green-700 font-medium">
                        Message sent successfully! We&apos;ll get back to you
                        soon.
                      </p>
                    </div>
                  )}

                  {status === "error" && (
                    <div className="flex items-center space-x-2 p-4 bg-red-50 border border-red-200 rounded-xl">
                      <AlertCircle className="w-5 h-5 text-red-600" />
                      <p className="text-red-700 font-medium">
                        Something went wrong. Please try again or contact us
                        directly.
                      </p>
                    </div>
                  )}
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* Bottom CTA Section */}
        <section className="py-16 px-6 bg-gradient-to-br from-gray-900 to-purple-900">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h2 className="text-3xl font-bold mb-4">
              Ready to Shape the Future Together?
            </h2>
            <p className="text-lg text-gray-300 mb-8">
              Join us in advancing autonomous technologies and AI education
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/projects" className="w-full sm:w-auto">
              <button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold px-8 py-3 rounded-xl shadow-lg transition-all">
                View Our Projects
              </button>
              </Link>
              <Link href="/#about" className="w-full sm:w-auto">
              <button className="border-2 border-white text-white hover:bg-white hover:text-gray-900 font-semibold px-8 py-3 rounded-xl transition-all">
                Learn About AI Labs
              </button>
              </Link>
            </div>
          </div>
        </section>
      </div>
  );
};

export default Contact;
