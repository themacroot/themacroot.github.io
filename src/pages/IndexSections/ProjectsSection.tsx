
import React from 'react';
import Section from '@/components/Section';
import ProjectCard from '@/components/ProjectCard';

const ProjectsSection = () => {
  return (
    <Section 
      id="projects" 
      title="Projects" 
      subtitle="Key projects I've worked on throughout my career."
      className="bg-background"
    >
      <div className="grid grid-cols-1 gap-8">
        <ProjectCard
          title="UPIPOS Merchant Payment Solution"
          index={0}
          description={
            <ul className="list-disc pl-5 space-y-2">
              <li>Spearheaded the design and development of a cutting-edge UPI-based merchant payment solution.</li>
              <li>Proficient in architecting applications, encompassing UI-UX and infrastructure, while ensuring seamless server configurations and WAF integrations.</li>
              <li>Skilled in Angular for developing intuitive web portals with voice-based notification functionalities.</li>
              <li>Implemented a BPM module to streamline business operations and orchestrated complete middleware development for mobile applications utilizing Java, with a focus on UPI integration.</li>
              <li>Expertise extends to database design and implementation using Oracle, alongside the development of APIs for ERP integration with clients.</li>
              <li>Adept at automating merchant onboarding processes and proficient in integrating third-party solutions such as FCM messaging, Google Analytics, and Sentry for enhanced functionality.</li>
            </ul>
          }
        />

        <ProjectCard
          title="UPI Pay Lane"
          index={1}
          description={
            <ul className="list-disc pl-5 space-y-2">
              <li>Designed a payment gateway solution leveraging UPI for seamless integration by merchants onboarded to South Indian Bank.</li>
              <li>Employed a microservices architecture, developed with Spring resource and authentication frameworks, including a configuration server, Redis for caching, and Oracle as the primary database.</li>
              <li>Implemented APM utilizing Prometheus, Loki, and Grafana for enhanced monitoring and analytics.</li>
              <li>Additionally, incorporated a custom intelligence framework to detect and prevent fraud within the system.</li>
            </ul>
          }
        />

        <ProjectCard
          title="SIB Swift e"
          index={2}
          description={
            <ul className="list-disc pl-5 space-y-2">
              <li>Designed and built a BPM mobile app for SIB Staff to streamline customer onboarding and management.</li>
              <li>Responsibilities included architecture, UI/UX design, server configuration, WAF integration, middleware development using Spring Boot and Spring Security, and backend implementation in Oracle.</li>
              <li>Integrated third-party services such as UIDAI and NSDL and contributed to the VAPT of the application.</li>
            </ul>
          }
        />

        <ProjectCard
          title="REST API Middleware - Design and Development"
          index={3}
          description={
            <ul className="list-disc pl-5 space-y-2">
              <li>Led the development of 40+ REST API interfaces in JAVA JAX-RS, integrating services like Finacle, ATM Switches, NSDL, and UIDAI.</li>
              <li>Key APIs cover PAN AADHAR Validation, ATM Card Management, and Middleware for Finacle ISO 8583 Interfaces, including account statements, IMPS, and NEFT transactions.</li>
            </ul>
          }
        />

        <ProjectCard
          title="SIB Insta - Web app development and PG Integration"
          index={4}
          description={
            <p>
              Developed the frontend of an instant customer onboarding web app for South Indian Bank, integrating services like UIDAI, NSDL, Finacle, CRM, and BPM.
            </p>
          }
        />

        <ProjectCard
          title="SMS Solution"
          index={5}
          description={
            <ul className="list-disc pl-5 space-y-2">
              <li>Created and optimized database procedures, functions, and triggers to fulfill diverse outgoing and incoming SMS needs.</li>
              <li>Oversaw the maintenance and optimization of a middleware application operating on event streaming architecture.</li>
              <li>Managed vendors, ensuring adherence to SLAs and POs, as well as overseeing NOC operations across multiple countries and the management of DLT platforms (headers and content).</li>
              <li>Additionally, conducted infrastructure monitoring and maintenance tasks.</li>
            </ul>
          }
        />

        <ProjectCard
          title="Covid Care - A Vaccination Finder Web App"
          index={6}
          description={
            <p>
              Developed front end using Angular 9. Material Design components are used. Integrated Cowin API's exposed by API Setu. Firebase is integrated for analytics.
            </p>
          }
        />

        <ProjectCard
          title="Digital Banking Unit"
          index={7}
          description={
            <ul className="list-disc pl-5 space-y-2">
              <li>Crafted a WPF.NET application utilizing Visual C# for deployment on digital banking kiosks for South Indian Bank.</li>
              <li>Spearheaded the development of various lead capturing modules, feedback mechanisms, and complaint modules within the Angular 12 framework for a comprehensive digital banking initiative.</li>
            </ul>
          }
        />

        <ProjectCard
          title="SIB Mirror+: Official Mobile Banking App of SIB"
          index={8}
          description={
            <p>
              As part of the team, successfully migrated Mirror Plus to a new platform. Oversaw the entire development lifecycle, including architecture, customer migration, vendor management, compliance, testing, and system integrations. Managed analytics, messaging, and testing tools. Technology stack included Java, Objective C, and Oracle.
            </p>
          }
        />

        <ProjectCard
          title="Other Notable Projects"
          index={9}
          description={
            <ul className="list-disc pl-5 space-y-2">
              <li>Creating internal portals and APIs tailored to SIB's specifications.</li>
              <li>Integrating RASP solutions.</li>
              <li>Developing SIB aide, a chatbot leveraging OPENAI APIs to address regulatory inquiries.</li>
              <li>Collaborating with RBI on a DLT Proof of Concept for document management.</li>
              <li>Establishing backend API services and databases using Node.js and MongoDB to log interactions with customers on the bank's WhatsApp handle, facilitating WhatsApp Banking.</li>
              <li>Driving the integration of a new FRM solution into mobile banking.</li>
              <li>Setting up APM for Mirrorplus.</li>
              <li>Identifying bottlenecks in various other applications of the bank and providing solutions.</li>
            </ul>
          }
        />
      </div>
    </Section>
  );
};

export default ProjectsSection;
