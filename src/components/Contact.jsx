import React, { useState } from "react";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message sent! (simulation)");
  };

  return (
    <section id="contact">
      <h2 className="text-3xl font-bold mb-4">Contact Me</h2>
      <form onSubmit={handleSubmit} className="space-y-4 max-w-xl">
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={form.name}
          onChange={handleChange}
          className="w-full p-2 rounded bg-gray-800 border border-gray-700"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          className="w-full p-2 rounded bg-gray-800 border border-gray-700"
          required
        />
        <textarea
          name="message"
          placeholder="Your message..."
          value={form.message}
          onChange={handleChange}
          className="w-full p-2 rounded bg-gray-800 border border-gray-700"
          rows="5"
          required
        />
        <button
          type="submit"
          className="px-4 py-2 bg-blue-600 rounded text-white hover:bg-blue-700"
        >
          Send Message
        </button>
      </form>
    </section>
  );
};

export default Contact;