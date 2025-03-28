
import React from 'react';
import ResumeLayout from '@/components/ResumeLayout';
import ResumeHeader from '@/components/ResumeHeader';
import { Separator } from '@/components/ui/separator';
import ExperienceSection from './IndexSections/ExperienceSection';
import ProjectsSection from './IndexSections/ProjectsSection';
import EducationSection from './IndexSections/EducationSection';
import AwardsSection from './IndexSections/AwardsSection';
import SkillsSection from './IndexSections/SkillsSection';
import useSmoothScrolling from './IndexSections/SmoothScrolling';
import TechOrbitSection from './IndexSections/TechOrbitSection';

const Index = () => {
  useSmoothScrolling();

  return (
    <ResumeLayout>
      <TechOrbitSection />
      
      <ResumeHeader />

      <ExperienceSection />

      <Separator className="my-8 sm:my-12 md:my-16 opacity-10" />

      <ProjectsSection />

      <Separator className="my-8 sm:my-12 md:my-16 opacity-10" />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-10 lg:gap-16">
        <EducationSection />
        <AwardsSection />
      </div>

      <Separator className="my-8 sm:my-12 md:my-16 opacity-10" />

      <SkillsSection />
    </ResumeLayout>
  );
};

export default Index;
