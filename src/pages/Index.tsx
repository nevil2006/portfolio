import Navigation from '@/components/Navigation';
import HeroSection from '@/components/Hero';
import AboutSection from '@/components/About';
import ExperienceSection from '@/components/Experience';
import EducationSection from '@/components/Education';
import SkillsSection from '@/components/Skills';
import ProjectsSection from '@/components/Projects';
import BlogSection from '@/components/Blogsection';
import AchievementSection from '@/components/Achievements';
import ContactSection from '@/components/Contact';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <ExperienceSection />
      <EducationSection />
      <SkillsSection />
      <ProjectsSection />
      <BlogSection />
      <AchievementSection />   
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
