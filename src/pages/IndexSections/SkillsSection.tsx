
import React from 'react';
import Section from '@/components/Section';
import SkillBadge from '@/components/SkillBadge';

const SkillsSection = () => {
  const techSkills = [
    "Java", "Kotlin", "C", "Python", "Go", "Node.js",
    "Spring", "JAX-RS", "Flutter", "Firebase", "UPI SDK",
    "Angular", "HTML5", "JSP", "ECMA Script",
    "MSSQL", "Oracle", "IBMDB2", "MongoDB",
    "Kali Linux", "Parrot OS", "Metasploit", "Nessus"
  ];

  const personalSkills = [
    "Curious", "Multitasking", "Adaptable", "Ownership", "Architecting", "Constant Learner"
  ];

  return (
    <Section 
      id="skills" 
      title="Skills & Technologies" 
      subtitle="My technical and personal competencies."
      className="pb-24"
    >
      <div className="space-y-8">
        <div>
          <h3 className="section-title">Technical Skills</h3>
          <div className="flex flex-wrap gap-3">
            {techSkills.map((skill, index) => (
              <SkillBadge key={skill} index={index}>{skill}</SkillBadge>
            ))}
          </div>
        </div>
        
        <div>
          <h3 className="section-title">Personal Skills</h3>
          <div className="flex flex-wrap gap-3">
            {personalSkills.map((skill, index) => (
              <SkillBadge key={skill} index={index}>{skill}</SkillBadge>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
};

export default SkillsSection;
