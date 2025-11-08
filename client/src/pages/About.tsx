import { motion } from 'framer-motion';
import { Calendar, Users, Award, TrendingUp } from 'lucide-react';

const milestones = [
  { year: '2017', title: 'Established', description: 'Digital Tech Drive founded', icon: Calendar, color: '#FF9500' },
  { year: '2018', title: 'KYP Launch', description: 'Started Kushal Yuva Programme', icon: Users, color: '#0A84FF' },
  { year: '2019', title: 'MKCL Partnership', description: 'Became MKCL affiliated center', icon: Award, color: '#34C759' },
  { year: '2024', title: '500+ Certified', description: 'Successfully trained students', icon: TrendingUp, color: '#AF52DE' }
];

export default function About() {
  return (
    <div className="min-h-screen pt-20">
      <div className="h-[300px] bg-gradient-warm relative flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center text-white"
        >
          <h1 className="text-5xl font-bold mb-4">About Digital Tech Drive</h1>
          <p className="text-xl opacity-90">Empowering Bihar's Youth for a Digital Future</p>
        </motion.div>
      </div>

      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
            >
              <img 
                src="/api/placeholder/600/400" 
                alt="Institute" 
                className="rounded-lg shadow-lg"
              />
            </motion.div>
            <motion.div
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold mb-4">Our Story</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                Digital Tech Drive is a leading Skill Development Center in Lakhisarai, Bihar. We provide KYP, DEEP (MKCL), and ADCA courses to bridge the gap from college to careers.
              </p>
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-lg mb-2">Mission</h3>
                  <p className="text-muted-foreground">
                    To empower local youth with digital and employability skills for sustainable careers.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Vision</h3>
                  <p className="text-muted-foreground">
                    To create a digitally skilled and employable generation in Bihar.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="text-3xl font-bold text-center mb-12">Our Journey</h2>
            <div className="relative">
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-rainbow" />
              <div className="space-y-12">
                {milestones.map((milestone, index) => (
                  <motion.div
                    key={milestone.year}
                    initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className={`flex items-center gap-8 ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
                  >
                    <div className={`flex-1 ${index % 2 === 0 ? 'text-right' : 'text-left'}`}>
                      <div className="inline-block bg-white rounded-lg shadow-md p-6">
                        <div className="flex items-center gap-3 mb-2" style={{ justifyContent: index % 2 === 0 ? 'flex-end' : 'flex-start' }}>
                          <milestone.icon className="w-6 h-6" style={{ color: milestone.color }} />
                          <span className="text-2xl font-bold" style={{ color: milestone.color }}>{milestone.year}</span>
                        </div>
                        <h3 className="font-semibold text-lg mb-1">{milestone.title}</h3>
                        <p className="text-muted-foreground">{milestone.description}</p>
                      </div>
                    </div>
                    <div 
                      className="w-12 h-12 rounded-full flex items-center justify-center z-10 border-4 border-white shadow-lg"
                      style={{ backgroundColor: milestone.color }}
                    >
                      <milestone.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1" />
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
