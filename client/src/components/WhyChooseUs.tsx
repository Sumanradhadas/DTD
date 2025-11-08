import { motion } from 'framer-motion';
import { Award, Users, Target, Sparkles, BookOpen } from 'lucide-react';

const features = [
  {
    icon: Award,
    title: 'MKCL Affiliated',
    description: 'Government recognized training partner',
    color: '#FF9500'
  },
  {
    icon: BookOpen,
    title: 'Lab-Based Learning',
    description: 'Hands-on practical training',
    color: '#0A84FF'
  },
  {
    icon: Target,
    title: 'Career-Oriented',
    description: 'Job-ready skill modules',
    color: '#34C759'
  },
  {
    icon: Users,
    title: 'Expert Trainers',
    description: 'Experienced professionals',
    color: '#AF52DE'
  },
  {
    icon: Sparkles,
    title: 'AI Guidance',
    description: 'Personalized course advisor',
    color: '#FF2D55'
  }
];

export default function WhyChooseUs() {
  return (
    <section className="py-16 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4">Why Choose Digital Tech Drive?</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            We provide quality education with industry-recognized certifications and practical skills
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="text-center p-6 rounded-lg bg-white shadow-sm hover:shadow-md transition-all"
              data-testid={`card-feature-${feature.title.toLowerCase().replace(/\s+/g, '-')}`}
            >
              <div
                className="w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4"
                style={{ backgroundColor: `${feature.color}20` }}
              >
                <feature.icon className="w-8 h-8" style={{ color: feature.color }} />
              </div>
              <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
              <p className="text-sm text-muted-foreground">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
