
import React from 'react';
import Section from '@/components/Section';
import ExperienceCard from '@/components/ExperienceCard';

const ExperienceSection = () => {
  return (
    <Section 
      id="experience" 
      title="Experience" 
      subtitle="My professional journey in software development and architecture."
      className="bg-background"
    >
      <div className="grid grid-cols-1 gap-8">
        <ExperienceCard
          title="Solution Architect | Product Manager | Full Stack SDE"
          company="The South Indian Bank LTD"
          period="2019 - Present"
          location="Kochi"
          index={0}
          description={
            <>
              <p className="mb-4">As a product manager, I am responsible for:</p>
              <ul className="list-disc pl-5 mb-4 space-y-1">
                <li>Uptime of customer facing applications</li>
                <li>Quick issue resolution</li>
                <li>Debugging and optimizing applications for better UX</li>
                <li>Application store management (App and Play store)</li>
                <li>House keeping of servers and patching</li>
                <li>First, second and third party audits on security, compliance and regulatory aspects</li>
              </ul>

              <p className="mb-4">As an architect and developer, I am responsible for:</p>
              <ul className="list-disc pl-5 space-y-1">
                <li>Collaborating with business and various stakeholders to develop cutting-edge applications for the bank without jeopardizing privacy or security adhering to regulatory guidelines (RBI, NPCI, etc)</li>
                <li>Managing complete life cycle of software development including requirement gathering, solutioning, designing, developing, and testing applications</li>
                <li>Project planning and 3rd party vendor management</li>
              </ul>
            </>
          }
        />

        <ExperienceCard
          title="Internship"
          company="The South Indian Bank Ltd"
          period="2019"
          location="Kochi"
          index={1}
          description={
            <p>Carried out static and dynamic security audit of South Indian Bank owned mobile applications.</p>
          }
        />

        <ExperienceCard
          title="Skill Development Executive"
          company="ASAP Kerala - UTL Technologies"
          period="2017-2018"
          location="Bengaluru, Trivandrum"
          index={2}
          description={
            <p>Trained students enrolled for networking courses offered by Additional Skill Acquisition Programme, a Government of Kerala initiative to enhance their employability levels.</p>
          }
        />
      </div>
    </Section>
  );
};

export default ExperienceSection;
