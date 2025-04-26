import { useRef } from 'react';
import emailjs from '@emailjs/browser';

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_ajx64v9', 'template_y5anpnu', form.current, 'eyfZPNw-aHFqOy7F6')
    .then(
      (result) => {
        console.log(result.text);
        alert('Message sent successfully!');
        form.current.reset();
      },
      (error) => {
        console.log(error.text);
        alert('Something went wrong. Please try again.');
      }
    );
};

return (
  <section className="py-12 px-6 max-w-2xl mx-auto">
    <h2 className="text-3xl font-bold text-center mb-10 text-white">Contact Me</h2>
    <form ref={form} onSubmit={sendEmail} className="bg-gray-800 p-8 rounded-2xl shadow-md border border-gray-700">
      <div className="mb-6">
        <label className="block text-white mb-2">Name</label>
        <input type="text" name="from_name" required className="w-full px-4 py-2 rounded bg-gray-900 text-white border border-gray-600" />
      </div>
      <div className="mb-6">
        <label className="block text-white mb-2">Email</label>
        <input type="email" name="email" required className="w-full px-4 py-2 rounded bg-gray-900 text-white border border-gray-600" />
      </div>
      <div className="mb-6">
        <label className="block text-white mb-2">Message</label>
        <textarea name="message" rows="5" required className="w-full px-4 py-2 rounded bg-gray-900 text-white border border-gray-600"></textarea>
      </div>
      <button type="submit" className="bg-teal-500 hover:bg-teal-600 text-white font-bold py-2 px-6 rounded">
        Send Message
      </button>
    </form>
  </section>
);
}

export default Contact;