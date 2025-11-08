import CourseCard from '../CourseCard';
import { GraduationCap, Monitor, Laptop } from 'lucide-react';

export default function CourseCardExample() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-8 max-w-7xl mx-auto">
      <CourseCard
        title="KYP"
        description="Learn essential communication and computer skills to boost confidence and employability."
        icon={GraduationCap}
        accentColor="#FF9500"
        onKnowMore={() => console.log('KYP clicked')}
        delay={0}
      />
      <CourseCard
        title="DEEP"
        description="Access 90+ skill enhancement modules designed to bridge education and career opportunities."
        icon={Monitor}
        accentColor="#0A84FF"
        onKnowMore={() => console.log('DEEP clicked')}
        delay={0.1}
      />
      <CourseCard
        title="ADCA"
        description="Gain advanced computer application skills for IT, data, and office operations."
        icon={Laptop}
        accentColor="#34C759"
        onKnowMore={() => console.log('ADCA clicked')}
        delay={0.2}
      />
    </div>
  );
}
