
import React from 'react';
import Section from '@/components/Section';
import AwardCard from '@/components/AwardCard';

const AwardsSection = () => {
  return (
    <Section 
      id="awards" 
      title="Awards & Publications" 
      subtitle="Recognition for excellence."
      className="py-12 md:py-16"
    >
      <div className="grid grid-cols-1 gap-6">
        <AwardCard
          title="Dr A S Ramasastri Gold Medal"
          description="From IDRBT, Established by Reserve Bank of India on September 1, 2019 for standing first in Post Graduate Programme in Banking Technology 2018-2019."
          index={0}
        />
        
        <AwardCard
          title="Core Value Ambassador Award - 2023"
          description="Awarded by South Indian Bank for the exemplary contributions made to the organization: Digital, Speed & Boundaryless."
          index={1}
        />
        
        <AwardCard
          title="An internet of things based sustainable water management"
          description="IEEE Publication"
          index={2}
        />
      </div>
    </Section>
  );
};

export default AwardsSection;
