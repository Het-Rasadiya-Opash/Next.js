"use client";
import Image from "next/image";
import img1 from "@/public/1.webp";
import img2 from "@/public/2.png";
import { motion } from "framer-motion"; // Note: Changed to 'framer-motion' for standard naming

const teamMembers = [
  {
    name: "Het Rasadiya",
    role: "Full Stack Developer",
    skill: "Next.js / Node.js",
    type: "image",
    content: img2,
  },
  {
    name: "Sarah Smith",
    role: "Backend Engineer",
    skill: "Python / PostgreSQL",
    type: "initials",
    initials: "SS",
    color: "bg-purple-500 text-white",
  },
  {
    name: "Alex Johnson",
    role: "Project Manager",
    skill: "Agile / Scrum",
    type: "image",
    content: img1,
  },
  {
    name: "Mike Ross",
    role: "Frontend Developer",
    skill: "Tailwind / TypeScript",
    type: "initials",
    initials: "MR",
    color: "bg-emerald-500 text-white",
  },
  {
    name: "Emily Davis",
    role: "QA Engineer",
    skill: "Cypress / Jest",
    type: "image",
    content: img1,
  },
];

// 1. Define Container Variants for Staggering
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 }, // Delay between each card
  },
};

// 2. Define Card Variants
const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1 },
};

const Service = () => {
  return (
    <section className="bg-black py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-white text-center text-3xl font-bold mb-12">
          Our Team
        </h2>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible" // Triggers when user scrolls to section
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -10, scale: 1.02 }} // Gentle lift effect
              whileTap={{ scale: 0.95 }}
              className="bg-white rounded-xl p-8 flex flex-col items-center text-center shadow-lg cursor-pointer"
            >
              <motion.div
                whileHover={{ rotate: 15 }} // Subtle tilt instead of 360 for cleaner UI
                className={`relative w-24 h-24 rounded-full flex items-center justify-center mb-6 overflow-hidden shadow-inner ${
                  member.type === "initials" ? member.color : "bg-gray-100"
                }`}
              >
                {member.type === "initials" ? (
                  <span className="text-2xl font-bold">{member.initials}</span>
                ) : (
                  <Image
                    src={member.content}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                )}
              </motion.div>

              <h3 className="text-gray-900 font-bold text-xl">{member.name}</h3>
              <p className="text-gray-600 font-medium mt-1">{member.role}</p>
              <p className="text-gray-400 text-sm mt-1">{member.skill}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Service;
