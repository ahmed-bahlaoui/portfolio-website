import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";

const skillGroups = [
  { label: "Programming", skills: ["Python", "C++", "SQL", "JavaScript", "Java"] },
  { label: "Machine Learning", skills: ["scikit-learn", "TensorFlow", "PyTorch"] },
  { label: "Data Analysis", skills: ["Pandas", "NumPy", "Matplotlib"] },
  { label: "Concepts", skills: ["Feature Engineering", "Model Evaluation", "Supervised & Unsupervised Learning", "Statistical Analysis"] },
  { label: "Tools", skills: ["Git", "Docker"] },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

const SkillsSection = () => (
  <section className="py-24 px-6">
    <div className="max-w-4xl mx-auto">
      <SectionHeading title="Skills" />
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="space-y-6"
      >
        {skillGroups.map((group) => (
          <motion.div key={group.label} variants={item}>
            <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-3 font-display">
              {group.label}
            </h3>
            <div className="flex flex-wrap gap-2">
              {group.skills.map((skill) => (
                <span
                  key={skill}
                  className="px-4 py-2 text-sm rounded-lg bg-secondary text-secondary-foreground font-medium hover:bg-accent/10 hover:text-accent transition-colors cursor-default"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  </section>
);

export default SkillsSection;
