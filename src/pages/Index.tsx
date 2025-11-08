import Navigation from '@/components/Navigation';
import HeroSection from '@/components/Hero';
import AboutSection from '@/components/About';
import ExperienceSection from '@/components/Experience';
import EducationSection from '@/components/Education';
import SkillsSection from '@/components/Skills';
import ProjectsSection from '@/components/Projects';
import WhyHireMe from '@/components/WhyHireMe';
import BlogSection from '@/components/Blogsection';
import AchievementSection from '@/components/Achievements';
import ContactSection from '@/components/Contact';
import Footer from '@/components/Footer';
import Chatbot from '@/components/Chatbot';   // ✅ Add this import

const Index = () => {
  return (
    <div className="min-h-screen bg-background relative">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <ExperienceSection />
      <EducationSection />
      <SkillsSection />
      <ProjectsSection />
      <WhyHireMe />
      <BlogSection />
      <AchievementSection />
      <ContactSection />
      <Footer />

      <Chatbot />   {/* ✅ Chatbot added at bottom-right always visible */}
    </div>
  );
};

export default Index;
