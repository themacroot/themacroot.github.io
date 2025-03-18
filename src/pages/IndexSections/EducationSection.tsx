
import React from 'react';
import Section from '@/components/Section';
import EducationCard from '@/components/EducationCard';

const EducationSection = () => {
  return (
    <Section 
      id="education" 
      title="Education" 
      subtitle="My academic background."
      className="py-12 md:py-16"
    >
      <div className="grid grid-cols-1 gap-6">
        <EducationCard
          institution="IDRBT Est By RBI"
          degree="PG Diploma in Banking Technology"
          period="2018 - 2019"
          achievement="Gold Medalist"
          index={0}
        />
        
        <EducationCard
          institution="Amrita Vishwa Vidyapeetham"
          degree="MTech in Wireless Networks"
          period="2011 - 2017"
          index={1}
        />
        
        <EducationCard
          institution="Amrita Vishwa Vidyapeetham"
          degree="BTech in Electronics and Communication"
          period="2011 - 2017"
          index={2}
        />
      </div>
    </Section>
  );
};

export default EducationSection;
