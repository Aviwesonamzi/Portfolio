import { motion } from "framer-motion";

function Home() {
  return (
    <section className="flex items-center justify-center h-[80vh] text-center">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-2xl"
      >
        <h1 className="text-4xl font-bold text-teal-400 mb-4">Welcome to My Portfolio</h1>
        <p className="text-gray-300 text-lg">
          I'm Aviwe Sonamzi, a passionate Front-End Developer, Cybersecurity enthusiast, and Virtual Assistant. Let’s build something amazing together.
        </p>
      </motion.div>
    </section>
  );
}

export default Home;