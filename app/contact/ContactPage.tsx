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
import { motion, AnimatePresence } from "framer-motion";
import SectionHeading from "@/components/SectionHeading";

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

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
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

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut" as const,
      },
    },
  };

  const contactCardVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut" as const,
      },
    },
    hover: {
      scale: 1.02,
      transition: {
        duration: 0.2,
        ease: "easeInOut" as const,
      },
    },
  };

  const formVariants = {
    hidden: { opacity: 0, x: 30, rotateY: -10 },
    visible: {
      opacity: 1,
      x: 0,
      rotateY: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut" as const,
      },
    },
  };

  const inputVariants = {
    focus: {
      scale: 1.02,
      transition: {
        duration: 0.2,
        ease: "easeInOut" as const,
      },
    },
  };

  const buttonVariants = {
    idle: { scale: 1 },
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.2,
        ease: "easeInOut" as const,
      },
    },
    tap: { scale: 0.95 },
    loading: {
      scale: [1, 1.02, 1],
      transition: {
        duration: 1.5,
        repeat: Infinity,
        ease: "easeInOut" as const,
      },
    },
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="-mb-16">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <SectionHeading
            title="Contact Us"
            subtitle="We would love to hear from you! Please fill out the form below and we
            will get back to you as soon as possible."
          />
        </motion.div>

        {/* Contact Form Section */}
        <section className="py-10 px-6">
          <div className="max-w-4xl mx-auto">
            <motion.div
              className="grid lg:grid-cols-2 gap-12 items-start"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {/* Contact Information */}
              <motion.div
                className="space-y-8"
                variants={itemVariants}
              >
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                >
                  <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                    Let&apos;s Start a Conversation
                  </h2>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    Whether you&apos;re interested in our autonomous systems,
                    want to set up an AI lab, or have questions about our
                    services, we&apos;re here to help.
                  </p>
                </motion.div>

                <motion.div
                  className="space-y-6"
                  variants={containerVariants}
                >
                  {[
                    {
                      icon: Phone,
                      title: "Phone",
                      info: "+91 8848653573",
                      gradient: "from-purple-50 to-pink-50",
                      iconGradient: "from-purple-500 to-pink-500",
                      delay: 0.4,
                    },
                    {
                      icon: Mail,
                      title: "Email",
                      info: "voltaerotech@gmail.com",
                      gradient: "from-teal-50 to-cyan-50",
                      iconGradient: "from-teal-500 to-cyan-500",
                      delay: 0.5,
                    },
                    {
                      icon: MapPin,
                      title: "Location",
                      info: "Chittoor, Andhra Pradesh",
                      gradient: "from-yellow-50 to-orange-50",
                      iconGradient: "from-yellow-500 to-orange-500",
                      delay: 0.6,
                    },
                  ].map((contact) => (
                    <motion.div
                      key={contact.title}
                      className={`flex items-center space-x-4 p-4 bg-gradient-to-r ${contact.gradient} rounded-xl cursor-pointer`}
                      variants={contactCardVariants}
                      initial="hidden"
                      animate="visible"
                      whileHover="hover"
                      transition={{ delay: contact.delay }}
                    >
                      <motion.div
                        className={`w-12 h-12 bg-gradient-to-r ${contact.iconGradient} rounded-full flex items-center justify-center`}
                        whileHover={{
                          rotate: 360,
                          transition: { duration: 0.6 },
                        }}
                      >
                        <contact.icon className="w-6 h-6 text-white" />
                      </motion.div>
                      <div>
                        <h3 className="font-semibold text-gray-800">
                          {contact.title}
                        </h3>
                        <p className="text-gray-600">{contact.info}</p>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              </motion.div>

              {/* Contact Form */}
              <motion.div
                className="relative"
                variants={formVariants}
                initial="hidden"
                animate="visible"
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-purple-400 to-pink-400 rounded-3xl"
                  initial={{ rotate: 1, scale: 0.95 }}
                  animate={{ rotate: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                />
                <motion.form
                  onSubmit={handleSubmit}
                  className="relative bg-white p-8 rounded-3xl shadow-xl space-y-6"
                  initial={{ scale: 0.95 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                >
                  {[
                    {
                      name: "name",
                      label: "Full Name",
                      type: "text",
                      placeholder: "Your full name",
                    },
                    {
                      name: "email",
                      label: "Email Address",
                      type: "email",
                      placeholder: "you@example.com",
                    },
                  ].map((field, index) => (
                    <motion.div
                      key={field.name}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                    >
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        {field.label}
                      </label>
                      <motion.input
                        name={field.name}
                        type={field.type}
                        value={formData[field.name as keyof typeof formData]}
                        onChange={handleChange}
                        required
                        className="w-full border-2 border-gray-200 rounded-xl px-4 py-3 focus:border-purple-500 focus:outline-none transition-all duration-300"
                        placeholder={field.placeholder}
                        variants={inputVariants}
                        whileFocus="focus"
                      />
                    </motion.div>
                  ))}

                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.8 }}
                  >
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Reason for Contact
                    </label>
                    <motion.select
                      name="reason"
                      value={formData.reason}
                      onChange={handleChange}
                      required
                      className="w-full border-2 border-gray-200 rounded-xl px-4 py-3 focus:border-purple-500 focus:outline-none transition-all duration-300"
                      variants={inputVariants}
                      whileFocus="focus"
                    >
                      <option value="" disabled>
                        -- Select a reason --
                      </option>
                      <option>AI Lab Setup</option>
                      <option>Technical Support</option>
                      <option>Investment Opportunity</option>
                      <option>Request a Site visit</option>
                      <option>Schedule a meeting</option>
                      <option>General Inquiry</option>
                      <option>Feedback</option>
                      <option>Other</option>
                    </motion.select>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.9 }}
                  >
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Message
                    </label>
                    <motion.textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      className="w-full border-2 border-gray-200 rounded-xl px-4 py-3 focus:border-purple-500 focus:outline-none transition-all duration-300 resize-none"
                      rows={5}
                      placeholder="Tell us about your project or inquiry..."
                      variants={inputVariants}
                      whileFocus="focus"
                    />
                  </motion.div>

                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-yellow-400 to-pink-500 hover:from-yellow-500 hover:to-pink-600 disabled:from-gray-400 disabled:to-gray-500 text-black font-semibold px-6 py-4 rounded-xl transition-all duration-300 shadow-lg flex items-center justify-center space-x-2"
                    variants={buttonVariants}
                    initial="idle"
                    whileHover={!isSubmitting ? "hover" : undefined}
                    whileTap={!isSubmitting ? "tap" : undefined}
                    animate={isSubmitting ? "loading" : "idle"}
                    transition={{ duration: 0.5, delay: 1 }}
                  >
                    {isSubmitting ? (
                      <motion.div
                        className="w-5 h-5 border-2 border-black border-t-transparent rounded-full"
                        animate={{ rotate: 360 }}
                        transition={{
                          duration: 1,
                          repeat: Infinity,
                          ease: "linear",
                        }}
                      />
                    ) : (
                      <>
                        <motion.div
                          whileHover={{ x: 3 }}
                          transition={{ duration: 0.2 }}
                        >
                          <Send className="w-5 h-5" />
                        </motion.div>
                        <span>Send Message</span>
                      </>
                    )}
                  </motion.button>

                  <AnimatePresence mode="wait">
                    {status === "success" && (
                      <motion.div
                        className="flex items-center space-x-2 p-4 bg-green-50 border border-green-200 rounded-xl"
                        initial={{ opacity: 0, scale: 0.9, y: -10 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: -10 }}
                        transition={{ duration: 0.3 }}
                      >
                        <motion.div
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ delay: 0.2, duration: 0.3 }}
                        >
                          <CheckCircle className="w-5 h-5 text-green-600" />
                        </motion.div>
                        <p className="text-green-700 font-medium">
                          Message sent successfully! We&apos;ll get back to you
                          soon.
                        </p>
                      </motion.div>
                    )}

                    {status === "error" && (
                      <motion.div
                        className="flex items-center space-x-2 p-4 bg-red-50 border border-red-200 rounded-xl"
                        initial={{ opacity: 0, scale: 0.9, y: -10 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: -10 }}
                        transition={{ duration: 0.3 }}
                      >
                        <motion.div
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ delay: 0.2, duration: 0.3 }}
                        >
                          <AlertCircle className="w-5 h-5 text-red-600" />
                        </motion.div>
                        <p className="text-red-700 font-medium">
                          Something went wrong. Please try again or contact us
                          directly.
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.form>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Bottom CTA Section */}
        <motion.section
          className="py-16 px-6 bg-gradient-to-br from-gray-900 to-purple-900"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          <div className="max-w-4xl mx-auto text-center text-white">
            <motion.h2
              className="text-3xl font-bold mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.4 }}
            >
              Ready to Shape the Future Together?
            </motion.h2>
            <motion.p
              className="text-lg text-gray-300 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.5 }}
            >
              Join us in advancing autonomous technologies and AI education
            </motion.p>
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.6 }}
            >
              <Link href="/projects" className="w-full sm:w-auto">
                <motion.button
                  className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold px-8 py-3 rounded-xl shadow-lg transition-all w-full sm:w-auto"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                >
                  View Our Projects
                </motion.button>
              </Link>
              <Link href="/#about" className="w-full sm:w-auto">
                <motion.button
                  className="border-2 border-white text-white hover:bg-white hover:text-gray-900 font-semibold px-8 py-3 rounded-xl transition-all w-full sm:w-auto"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                >
                  Learn About AI Labs
                </motion.button>
              </Link>
            </motion.div>
          </div>
        </motion.section>
      </div>
    </motion.div>
  );
};

export default Contact;