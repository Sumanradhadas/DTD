import HeroSlider from '../HeroSlider';
import heroImage1 from '@assets/generated_images/students_learning_computers_classroom_3a821384.png';
import heroImage2 from '@assets/generated_images/DEEP_program_training_lab_87a864f9.png';
import heroImage3 from '@assets/generated_images/certificate_award_ceremony_259bf2f1.png';

export default function HeroSliderExample() {
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

  return (
    <HeroSlider
      slides={slides}
      onExploreCourses={() => console.log('Explore courses clicked')}
      onAIGuide={() => console.log('AI guide clicked')}
    />
  );
}
