"use client"; // This directive marks the component as a client component

import React, { useRef, useEffect, FC } from "react";

// Define the type for the Home component (Functional Component)
const ResumeComponent: FC = () => {
  // Refs for each section to enable smooth scrolling
  // Explicitly type useRef with HTMLDivElement
  const summaryRef = useRef<HTMLDivElement>(null);
  const experienceRef = useRef<HTMLDivElement>(null);
  const educationRef = useRef<HTMLDivElement>(null);
  const skillsRef = useRef<HTMLDivElement>(null);
  const languagesRef = useRef<HTMLDivElement>(null);
  const achievementsRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);

  // Function to handle smooth scrolling to a section
  // Explicitly type the ref parameter to allow for null
  const scrollToSection = (ref: React.RefObject<HTMLDivElement | null>) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Dynamically inject custom CSS and Tailwind CSS CDN into the document head
  useEffect(() => {
    // Inject Tailwind CSS CDN script
    const tailwindScript = document.createElement("script");
    tailwindScript.src = "https://cdn.tailwindcss.com";
    tailwindScript.async = true; // Load asynchronously
    document.head.appendChild(tailwindScript);

    // Inject Inter font link
    const interFontLink = document.createElement("link");
    interFontLink.href =
      "https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap";
    interFontLink.rel = "stylesheet";
    document.head.appendChild(interFontLink);

    // Inject Chart.js CDN (if needed, otherwise can be removed)
    const chartJsScript = document.createElement("script");
    chartJsScript.src = "https://cdn.jsdelivr.net/npm/chart.js";
    chartJsScript.async = true;
    document.head.appendChild(chartJsScript);

    // Inject custom styles
    const styleTag = document.createElement("style");
    styleTag.innerHTML = `
            body {
                font-family: 'Inter', sans-serif;
                background-color: #f8f8f8; /* Light neutral background */
                color: #333;
            }
            /* Custom scrollbar for better aesthetics */
            ::-webkit-scrollbar {
                width: 8px;
            }
            ::-webkit-scrollbar-track {
                background: #e0e0e0;
                border-radius: 10px;
            }
            ::-webkit-scrollbar-thumb {
                background: #a0a0a0;
                border-radius: 10px;
            }
            ::-webkit-scrollbar-thumb:hover {
                background: #888;
            }
            /* Adjust scroll-margin-top for fixed header/nav height */
            .scroll-mt-24 { /* Adjusted for mobile nav height (approx 96px) */
                scroll-margin-top: 96px;
            }
            @media (min-width: 768px) {
                .scroll-mt-24 { /* Reset for desktop as sidebar is on the left */
                    scroll-margin-top: 0px;
                }
            }
            .chart-container {
                position: relative;
                width: 100%;
                max-width: 600px; /* Max width for charts */
                margin-left: auto;
                margin-right: auto;
                height: 300px; /* Base height, adjust with media queries or use Tailwind for responsive heights */
                max-height: 400px;
            }
            @media (min-width: 768px) {
                .chart-container {
                    height: 350px;
                }
            }
        `;
    document.head.appendChild(styleTag);

    // Cleanup function to remove the style tags when the component unmounts
    return () => {
      document.head.removeChild(tailwindScript);
      document.head.removeChild(interFontLink);
      document.head.removeChild(chartJsScript);
      document.head.removeChild(styleTag);
    };
  }, []); // Empty dependency array ensures this runs once on mount and cleans up on unmount

  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      {/* Chosen Palette: Warm Neutrals with Subtle Accents */}
      {/* Application Structure Plan: The application is structured as a single-page interactive web application with a fixed sidebar navigation on desktop and a fixed top navigation on mobile. This design was chosen to mimic a multi-page document experience while remaining within a single HTML file, providing optimal usability across devices. Users can easily navigate between resume sections (Summary, Experience, Education, Skills, Achievements, Projects) using the fixed navigation, offering intuitive exploration and understanding of the content. Each section acts as a distinct "page" for better readability and organization. */}
      {/* Visualization & Content Choices: The resume content is primarily textual and structured. The goal is to inform and organize. Presentation methods include structured HTML lists and text blocks. Interactive elements are limited to smooth scrolling navigation between sections. No quantitative data suitable for Chart.js or Plotly.js was identified, so these libraries are included via CDN but not actively used for data visualization in this specific application. Textual content is presented directly. No SVG graphics used. */}
      {/* CONFIRMATION: NO SVG graphics used. NO Mermaid JS used. */}

      {/* Sidebar Navigation (Fixed) */}
      <nav
        className="fixed top-0 left-0 z-50
                        bg-gray-800 text-white shadow-lg
                        w-full h-24 flex flex-row justify-around items-center rounded-br-lg
                        md:w-64 md:h-screen md:flex-col md:justify-start md:items-start md:p-6 md:rounded-tr-lg md:rounded-bl-none"
      >
        <div className="mb-0 md:mb-8 text-center md:text-left p-4 md:p-0">
          <h1 className="text-2xl font-bold">Sathish E</h1>
          <p className="text-sm text-gray-400">Frontend Developer</p>
        </div>
        <ul className="flex flex-wrap md:flex-col gap-x-4 gap-y-2 md:gap-y-4">
          <li>
            <a
              href="#summary"
              onClick={() => scrollToSection(summaryRef)}
              className="nav-link hover:text-blue-300 transition-colors duration-200"
            >
              Summary
            </a>
          </li>
          <li>
            <a
              href="#experience"
              onClick={() => scrollToSection(experienceRef)}
              className="nav-link hover:text-blue-300 transition-colors duration-200"
            >
              Experience
            </a>
          </li>
          <li>
            <a
              href="#education"
              onClick={() => scrollToSection(educationRef)}
              className="nav-link hover:text-blue-300 transition-colors duration-200"
            >
              Education
            </a>
          </li>
          <li>
            <a
              href="#skills"
              onClick={() => scrollToSection(skillsRef)}
              className="nav-link hover:text-blue-300 transition-colors duration-200"
            >
              Skills
            </a>
          </li>
          <li>
            <a
              href="#languages"
              onClick={() => scrollToSection(languagesRef)}
              className="nav-link hover:text-blue-300 transition-colors duration-200"
            >
              Languages
            </a>
          </li>
          <li>
            <a
              href="#achievements"
              onClick={() => scrollToSection(achievementsRef)}
              className="nav-link hover:text-blue-300 transition-colors duration-200"
            >
              Achievements
            </a>
          </li>
          <li>
            <a
              href="#projects"
              onClick={() => scrollToSection(projectsRef)}
              className="nav-link hover:text-blue-300 transition-colors duration-200"
            >
              Projects
            </a>
          </li>
        </ul>
      </nav>

      {/* Main Content Area */}
      <main
        className="flex-grow p-4 md:p-8 lg:p-12 overflow-y-auto scroll-smooth
                         pt-28 md:pt-8 md:ml-64"
      >
        {" "}
        {/* Adjusted padding-top for fixed mobile nav, margin-left for fixed desktop nav */}
        <div className="max-w-4xl mx-auto bg-white shadow-xl rounded-lg p-6 md:p-8 lg:p-10">
          {/* Contact Info and Photo Placeholder */}
          <section className="flex flex-col md:flex-row items-center md:items-start justify-between mb-8 pb-4 border-b border-gray-200">
            <div className="text-center md:text-left mb-4 md:mb-0">
              <h1 className="text-4xl font-extrabold text-gray-800 mb-2">
                Sathish E
              </h1>
              <p className="text-xl text-blue-600 font-semibold mb-4">
                Frontend Developer
              </p>
              <div className="text-gray-600 text-sm space-y-1">
                <p>📞 +91-9790060943</p>
                <p>📧 mrsathishe@gmail.com</p>
                <p>
                  🔗{" "}
                  <a
                    href="https://github.com/mrsathishe"
                    target="_blank"
                    className="text-blue-500 hover:underline"
                  >
                    github.com/mrsathishe
                  </a>
                </p>
                <p>
                  🔗{" "}
                  <a
                    href="https://linkedin.com/in/mrsathishe/"
                    target="_blank"
                    className="text-blue-500 hover:underline"
                  >
                    linkedin.com/in/mrsathishe/
                  </a>
                </p>
                <p>📍 Chennai, Tamil Nadu, India</p>
              </div>
            </div>
            <div className="flex-shrink-0 w-32 h-32 bg-gray-200 rounded-full flex items-center justify-center overflow-hidden border-2 border-gray-300">
              <span className="text-gray-500 text-sm">Your Photo Here</span>
              {/* You can replace the above span with an <img> tag when you have your photo, e.g.: */}
              {/* <img src="https://placehold.co/128x128/e0e0e0/333333?text=Your+Photo" alt="Sathish E" className="w-full h-full object-cover" /> */}
            </div>
          </section>

          {/* Summary Section */}
          <section
            id="summary"
            ref={summaryRef}
            className="mb-10 pb-6 border-b border-gray-200 scroll-mt-24"
          >
            <h2 className="text-3xl font-bold text-gray-700 mb-4">SUMMARY</h2>
            <p className="text-gray-700 leading-relaxed">
              I am a passionate and skilled software developer with{" "}
              <strong className="text-blue-600">9 years of experience</strong>{" "}
              in designing, developing, testing, and deploying web applications.
              I have extensive experience with{" "}
              <strong className="text-blue-600">
                JavaScript, React JS, Redux, and API integrations
              </strong>
              . My strong problem-solving skills and ability to work
              collaboratively with team members allow me to deliver high-quality
              software within fast-paced environments. I continuously seek
              opportunities to learn and grow in the field.
            </p>
          </section>

          {/* Experience Section */}
          <section
            id="experience"
            ref={experienceRef}
            className="mb-10 pb-6 border-b border-gray-200 scroll-mt-24"
          >
            <h2 className="text-3xl font-bold text-gray-700 mb-6">
              EXPERIENCE
            </h2>

            <div className="mb-8">
              <h3 className="text-xl font-semibold text-gray-800">
                Senior Associate
              </h3>
              <p className="text-blue-600 font-medium">Cognizant</p>
              <p className="text-sm text-gray-500 mb-3">
                05/2022 - Present | Chennai, Tamil Nadu, India |{" "}
                <a
                  href="https://cognizant.com/in/en"
                  target="_blank"
                  className="hover:underline"
                >
                  cognizant.com/in/en
                </a>
              </p>
              <p className="text-gray-700 mb-3">
                A multinational technology company that provides IT services and
                consulting.
              </p>
              <ul className="list-disc pl-5 text-gray-700 space-y-2">
                <li>
                  Independently handled the entire project lifecycle for all
                  front-end modules, including development, integration,
                  testing, and deployment.
                </li>
                <li>
                  Completed modules with high-quality, reusable code within
                  deadlines.
                </li>
                <li>
                  Troubleshot, debugged, and resolved application issues to
                  ensure smooth functionality.
                </li>
                <li>
                  Conducted technical interviews to help the organization
                  identify and recruit skilled candidates.
                </li>
                <li>
                  Developed reusable UI components for highly scalable
                  applications.
                </li>
                <li>
                  Estimated time for projects, modules, and bug fixes to ensure
                  timely delivery.
                </li>
                <li>
                  Wrote unit tests for created components and modules using JEST
                  (Enzyme).
                </li>
                <li>
                  Collaborated with clients and product owners to understand
                  requirements and deliver business solutions within deadlines.
                </li>
                <li>
                  Participated in feature development discussions with the lead
                  and team members.
                </li>
                <li>
                  Applied agile methodologies throughout the software
                  development cycle.
                </li>
                <li>
                  Ensured adherence to code standards and mentored team members
                  to follow best practices.
                </li>
                <li>
                  Led code review activities on GitHub to maintain code quality.
                </li>
                <li>Managed build and deployment activities using Jenkins.</li>
                <li>
                  Responsible for API integration with developed features and
                  modules.
                </li>
                <li>Collaborated with the team for ADA integration.</li>
                <li>
                  Developed Progressive Web Apps (PWA) as part of the project.
                </li>
              </ul>
            </div>

            <div className="mb-8">
              <h3 className="text-xl font-semibold text-gray-800">
                Software Engineer IV
              </h3>
              <p className="text-blue-600 font-medium">
                Photon Interactive Pvt ltd
              </p>
              <p className="text-sm text-gray-500 mb-3">
                08/2018 - 04/2022 | Chennai, Tamil Nadu, India
              </p>
              <p className="text-gray-700 mb-3">
                A digital experience agency that provides creative and
                technology solutions.
              </p>
              <ul className="list-disc pl-5 text-gray-700 space-y-2">
                <li>
                  Developed reusable UI components for highly scalable
                  applications.
                </li>
                <li>
                  Estimated time for projects, modules, and bug fixes to ensure
                  timely delivery.
                </li>
                <li>
                  Wrote unit tests for created components and modules using JEST
                  (Enzyme).
                </li>
                <li>
                  Collaborated with clients and product owners to understand
                  requirements and deliver business solutions within deadlines.
                </li>
                <li>
                  Participated in feature development discussions with the lead
                  and team members.
                </li>
                <li>
                  Applied agile methodologies throughout the software
                  development cycle.
                </li>
                <li>
                  Ensured adherence to code standards and mentored team members
                  to follow best practices.
                </li>
                <li>
                  Led code review activities on GitHub to maintain code quality.
                </li>
                <li>Managed build and deployment activities using Jenkins.</li>
                <li>
                  Responsible for API integration with developed features and
                  modules.
                </li>
                <li>Collaborated with the team for ADA integration.</li>
                <li>
                  Developed Progressive Web Apps (PWA) as part of the project.
                </li>
              </ul>
            </div>

            <div className="mb-8">
              <h3 className="text-xl font-semibold text-gray-800">
                Software Engineer
              </h3>
              <p className="text-blue-600 font-medium">
                Kutung Design Labs Pvt Ltd
              </p>
              <p className="text-sm text-gray-500 mb-3">
                09/2016 - 06/2018 | Chennai, Tamil Nadu, India
              </p>
              <p className="text-gray-700 mb-3">
                A software design and development firm specializing in web and
                application development.
              </p>
              <ul className="list-disc pl-5 text-gray-700 space-y-2">
                <li>
                  Worked with the team to define specifications for new
                  applications.
                </li>
                <li>Delivered quality code within deadlines.</li>
                <li>
                  Performed unit and integration testing before application
                  launch.
                </li>
                <li>
                  Troubleshot and debugged applications to ensure functionality.
                </li>
                <li>
                  Evaluated and updated existing applications, adding new
                  features as needed.
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-800">
                Software Engineer
              </h3>
              <p className="text-blue-600 font-medium">
                Acumen Technologies Pvt Ltd
              </p>
              <p className="text-sm text-gray-500 mb-3">
                04/2015 - 09/2016 | Chennai, Tamil Nadu, India
              </p>
              <p className="text-gray-700 mb-3">
                A technology company focused on software solutions for various
                industries.
              </p>
              <ul className="list-disc pl-5 text-gray-700 space-y-2">
                <li>
                  Wrote Proof of Concepts (POCs) to validate requirements.
                </li>
                <li>
                  Conducted R&D for implementing new logics, including adding
                  markers in street view maps.
                </li>
                <li>
                  Developed modules according to project within timelines.
                </li>
                <li>Worked as a Trainee for development and support teams.</li>
                <li>
                  Involved in various coding tasks to support project needs.
                </li>
                <li>
                  Actively learning software development practices and
                  methodologies.
                </li>
              </ul>
            </div>
          </section>

          {/* Education Section */}
          <section
            id="education"
            ref={educationRef}
            className="mb-10 pb-6 border-b border-gray-200 scroll-mt-24"
          >
            <h2 className="text-3xl font-bold text-gray-700 mb-4">EDUCATION</h2>
            <div className="mb-4">
              <h3 className="text-xl font-semibold text-gray-800">B.Tech</h3>
              <p className="text-blue-600 font-medium">
                Anna University of Technology, Tiruchirappalli
              </p>
              <p className="text-sm text-gray-500">08/2010 - 04/2014</p>
            </div>
          </section>

          {/* Skills Section */}
          <section
            id="skills"
            ref={skillsRef}
            className="mb-10 pb-6 border-b border-gray-200 scroll-mt-24"
          >
            <h2 className="text-3xl font-bold text-gray-700 mb-4">SKILLS</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  Technologies
                </h3>
                <ul className="list-disc pl-5 text-gray-700 space-y-1">
                  <li>ReactJS</li>
                  <li>Redux</li>
                  <li>HTML</li>
                  <li>CSS</li>
                  <li>Javascript</li>
                  <li>Jquery</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  Unit Testing
                </h3>
                <ul className="list-disc pl-5 text-gray-700 space-y-1">
                  <li>Jest</li>
                  <li>React Testing Library</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  Tools
                </h3>
                <ul className="list-disc pl-5 text-gray-700 space-y-1">
                  <li>Webpack</li>
                  <li>NPM</li>
                  <li>Git</li>
                  <li>GitHub</li>
                  <li>BitBucket</li>
                  <li>JIRA</li>
                  <li>Jenkins</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">OS</h3>
                <ul className="list-disc pl-5 text-gray-700 space-y-1">
                  <li>MacOS</li>
                  <li>Windows</li>
                  <li>Linux</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Languages Section */}
          <section
            id="languages"
            ref={languagesRef}
            className="mb-10 pb-6 border-b border-gray-200 scroll-mt-24"
          >
            <h2 className="text-3xl font-bold text-gray-700 mb-4">LANGUAGES</h2>
            <div className="grid grid-cols-1 gap-4">
              <div className="flex items-center justify-between">
                <span className="text-gray-700 font-medium">
                  English: Proficient
                </span>
                <div className="flex space-x-1">
                  <div className="w-4 h-4 rounded-full bg-blue-500"></div>
                  <div className="w-4 h-4 rounded-full bg-blue-500"></div>
                  <div className="w-4 h-4 rounded-full bg-blue-500"></div>
                  <div className="w-4 h-4 rounded-full bg-blue-500"></div>
                  <div className="w-4 h-4 rounded-full bg-blue-500"></div>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-700 font-medium">Tamil: Native</span>
                <div className="flex space-x-1">
                  <div className="w-4 h-4 rounded-full bg-blue-500"></div>
                  <div className="w-4 h-4 rounded-full bg-blue-500"></div>
                  <div className="w-4 h-4 rounded-full bg-blue-500"></div>
                  <div className="w-4 h-4 rounded-full bg-blue-500"></div>
                  <div className="w-4 h-4 rounded-full bg-blue-500"></div>
                </div>
              </div>
            </div>
          </section>

          {/* Key Achievements Section */}
          <section
            id="achievements"
            ref={achievementsRef}
            className="mb-10 pb-6 border-b border-gray-200 scroll-mt-24"
          >
            <h2 className="text-3xl font-bold text-gray-700 mb-4">
              KEY ACHIEVEMENTS
            </h2>
            <ul className="list-disc pl-5 text-gray-700 space-y-3">
              <li>
                <strong className="text-blue-600">Career Advancement:</strong>{" "}
                Within just 3 months, I transitioned from the support team to
                product development, a move driven by my strong problem-solving
                skills and creative thinking. This shift not only showcased my
                ability to adapt and grow quickly but also led to a promotion
                from Software Engineer 2 to Software Engineer 4, recognizing my
                contributions and leadership potential within the team.
              </li>
              <li>
                <strong className="text-blue-600">Client Appreciation:</strong>{" "}
                Received appreciation for implementing the cut, copy, paste
                feature using optimized recursive functions.
              </li>
              <li>
                <strong className="text-blue-600">
                  Leadership Opportunity:
                </strong>{" "}
                Led a project demo to clients, showcasing the top-to-bottom
                functionality.
              </li>
              <li>
                <strong className="text-blue-600">
                  Management Recognition:
                </strong>{" "}
                Acknowledged for taking responsibility for the project and
                transitioning to production after team lead&apos;s exit.
              </li>
              <li>
                <strong className="text-blue-600">
                  Progressive Web App Implementation:
                </strong>{" "}
                Earned client appreciation for implementing a progressive web
                app.
              </li>
              <li>
                <strong className="text-blue-600">Training Session:</strong>{" "}
                Conducted a training session on the JEST (React Testing
                Library).
              </li>
            </ul>
          </section>

          {/* Projects Section */}
          <section
            id="projects"
            ref={projectsRef}
            className="mb-10 pb-6 scroll-mt-24"
          >
            <h2 className="text-3xl font-bold text-gray-700 mb-4">PROJECTS</h2>

            <div className="mb-8">
              <h3 className="text-xl font-semibold text-gray-800">Match-It</h3>
              <p className="text-sm text-gray-500 mb-3">
                02/2023 - Present | Cognizant
              </p>
              <p className="text-gray-700 mb-3">
                The Match It application is an internal tool used by the company
                to streamline the creation, updating, and approval of finance
                documents.
              </p>
              <ul className="list-disc pl-5 text-gray-700 space-y-2">
                <li>
                  Users can update document details and send them for approval;
                  if the document meets the required standards, it is approved,
                  otherwise, it is returned for corrections.
                </li>
                <li>
                  The application also supports the upload of financial
                  information data in Excel format, which can be seamlessly
                  verified and integrated into the application&apos;s valuation
                  process, ensuring accuracy and consistency in financial
                  reporting.
                </li>
              </ul>
            </div>

            <div className="mb-8">
              <h3 className="text-xl font-semibold text-gray-800">
                Location Data Management
              </h3>
              <p className="text-sm text-gray-500 mb-3">
                05/2022 - 01/1970 | Cognizant
              </p>
              <p className="text-gray-700 mb-3">
                LDM (Location Data Management) - A tool for updating and
                managing data.
              </p>
              <ul className="list-disc pl-5 text-gray-700 space-y-2">
                <li>
                  Admin tool for managing location data in real-time connected
                  to Locator and published on the Global Resource Locator.
                </li>
              </ul>
            </div>

            <div className="mb-8">
              <h3 className="text-xl font-semibold text-gray-800">
                Global Resource Locator
              </h3>
              <p className="text-sm text-gray-500 mb-3">
                05/2022 - 01/1970 | Cognizant
              </p>
              <p className="text-gray-700 mb-3">
                GRL (Global Resource Locator) - Access information on Apple
                stores worldwide.
              </p>
              <ul className="list-disc pl-5 text-gray-700 space-y-2">
                <li>
                  Store locator application providing location and product
                  availability information for Apple stores globally.
                </li>
              </ul>
            </div>

            <div className="mb-8">
              <h3 className="text-xl font-semibold text-gray-800">
                Merchandising Collaboration Platform
              </h3>
              <p className="text-sm text-gray-500 mb-3">
                11/2020 - 04/2022 | Photon Interactive Pvt Ltd
              </p>
              <p className="text-gray-700 mb-3">
                MCP (Merchandising Collaboration Platform) - Data management
                application.
              </p>
              <ul className="list-disc pl-5 text-gray-700 space-y-2">
                <li>
                  Supply chain application for managing data across various
                  e-commerce brands.
                </li>
                <li>Facilitated a single platform for the client.</li>
              </ul>
            </div>

            <div className="mb-8">
              <h3 className="text-xl font-semibold text-gray-800">
                Digital Learning Catalogue
              </h3>
              <p className="text-sm text-gray-500 mb-3">11/2020 - 04/2022</p>
              <p className="text-gray-700 mb-3">
                Digital Learning Catalogue and its Localization - Application to
                manage e-commerce data.
              </p>
              <ul className="list-disc pl-5 text-gray-700 space-y-2">
                <li>
                  E-commerce application localized for different regions and
                  languages, managing brands and products.
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-800">
                Document-Based Application
              </h3>
              <p className="text-sm text-gray-500 mb-3">
                09/2016 - 06/2018 | Kutung Design Labs Pvt Ltd
              </p>
              <p className="text-gray-700 mb-3">
                Authorcafe - A platform for creating and presenting research
                papers.
              </p>
              <ul className="list-disc pl-5 text-gray-700 space-y-2">
                <li>
                  Document-based application designed for students and
                  professors to create research papers.
                </li>
              </ul>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default ResumeComponent;
