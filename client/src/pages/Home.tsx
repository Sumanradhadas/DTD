import { motion } from 'framer-motion';
import HeroSlider from '@/components/HeroSlider';
import CourseCard from '@/components/CourseCard';
import WhyChooseUs from '@/components/WhyChooseUs';
import { Target, Lightbulb, Heart } from 'lucide-react';
import { useLocation } from 'wouter';
import type { Course } from '@shared/courses';
import heroImage1 from '@assets/generated_images/students_learning_computers_classroom_3a821384.png';
import heroImage2 from '@assets/generated_images/DEEP_program_training_lab_87a864f9.png';
import heroImage3 from '@assets/generated_images/certificate_award_ceremony_259bf2f1.png';

export default function Home() {
  const [, setLocation] = useLocation();
  
  const slides = [
    {
      image: heroImage1,
      title: "Empowering Lakhisarai's Youth for a Digital Future",
      subtitle: "Digital Tech Drive is a Skill Development Center offering KYP, DEEP, and ADCA courses"
    },
    {
      image: heroImage2,
      title: "Learn, Grow, and Get Job-Ready",
      subtitle: "Access 90+ skill enhancement modules designed for career success"
    },
    {
      image: heroImage3,
      title: "Government Recognized Certification",
      subtitle: "MKCL affiliated programs with practical, lab-based training"
    }
  ];

  const openAIAssistant = () => {
    const aiButton = document.querySelector('[data-testid="button-ai-assistant"]') as HTMLButtonElement;
    if (aiButton) {
      aiButton.click();
    }
  };

  return (
    <div className="min-h-screen">
      <div className="pt-20">
        <HeroSlider
          slides={slides}
          onExploreCourses={() => setLocation('/courses')}
          onAIGuide={openAIAssistant}
        />
      </div>

      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-12 items-center mb-16"
          >
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <img 
                src={heroImage1} 
                alt="Digital Tech Drive" 
                className="rounded-lg shadow-lg"
              />
            </motion.div>
            <motion.div
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <h2 className="text-4xl font-bold mb-6">Welcome to Digital Tech Drive</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Digital Tech Drive is a Skill Development Center in Lakhisarai, Bihar, empowering youth through advanced computer and employability courses. We offer KYP, DEEP (MKCL), and ADCA programs to prepare students for today's digital workforce.
              </p>
              <div className="grid grid-cols-1 gap-4">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-full bg-dtd-orange/20 flex items-center justify-center flex-shrink-0">
                    <Target className="w-5 h-5 text-dtd-orange" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Mission</h3>
                    <p className="text-sm text-muted-foreground">Empower local youth digitally</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-full bg-dtd-blue/20 flex items-center justify-center flex-shrink-0">
                    <Lightbulb className="w-5 h-5 text-dtd-blue" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Vision</h3>
                    <p className="text-sm text-muted-foreground">Bridge the skill gap for better employability</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-full bg-dtd-green/20 flex items-center justify-center flex-shrink-0">
                    <Heart className="w-5 h-5 text-dtd-green" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Values</h3>
                    <p className="text-sm text-muted-foreground">Quality, Affordability, Growth</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold mb-4">Our Courses</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Choose from our range of industry-recognized programs designed to enhance your skills
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <CourseCard
              course={{
                id: 'kyp-promo',
                name: 'KYP (Kushal Yuva Programme)',
                program: 'KYP',
                duration: 60,
                description: 'Learn essential communication and computer skills to boost confidence and employability through government-certified programs.',
                icon: '🎓',
                color: 'orange'
              }}
            />
            <CourseCard
              course={{
                id: 'deep-promo',
                name: 'DEEP (MKCL Programme)',
                program: 'DEEP',
                duration: 120,
                description: 'Access 80+ skill enhancement modules designed to bridge education and career opportunities in digital, creative, and management domains.',
                icon: '💻',
                color: 'blue',
                popular: true
              }}
            />
            <CourseCard
              course={{
                id: 'adca-promo',
                name: 'ADCA Course',
                program: 'ADCA',
                duration: 120,
                description: 'Gain advanced computer application skills for IT, data management, programming, and office operations.',
                icon: '🖥️',
                color: 'green'
              }}
            />
          </div>
        </div>
      </section>

      <WhyChooseUs />

      <section className="py-16 bg-gradient-rainbow gradient-animate">
        <div className="max-w-4xl mx-auto px-6 text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Not sure which course fits you best?
            </h2>
            <p className="text-lg mb-8 opacity-90">
              Let our AI Career Advisor guide you to the perfect program!
            </p>
            <button
              onClick={openAIAssistant}
              className="px-8 py-4 bg-white text-dtd-blue font-semibold rounded-lg hover:bg-gray-100 transition-colors shadow-lg"
              data-testid="button-ai-cta"
            >
              Get Personalized Guidance
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
