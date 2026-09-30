/* ==========================================================================
   PORTFOLIO CONTENT MASTER CONFIGURATION
   Golam Mashrafi Labib | AUST IPE
   Edit this file directly to update all content displayed on your website.
   ========================================================================== */

const portfolioData = {
  // 1. Personal & Brand Details
  personal: {
    name: "Golam Mashrafi Labib",
    title: "Industrial & Production Engineering Student | Academic Content Developer",
    affiliation: "Ahsanullah University of Science and Technology (AUST)",
    location: "Dhaka, Bangladesh",
    email: "gmlabib2003@gmail.com", // [PLACEHOLDER]: Replace with your official/preferred email
    resumeUrl: "assets/resume.pdf",
    portraitUrl: "assets/images/profile.JPG",
    bioShort: "Undergraduate student in Industrial & Production Engineering at AUST, combining engineering principles, ergonomic focus, and academic content development to design efficient systems and clear learning experiences."
  },

  // 2. About Me Section
  about: {
    heading: "Bridging Engineering Optimization, Human Factors & Communication",
    paragraphs: [
      "I am an Industrial & Production Engineering (IPE) student at Ahsanullah University of Science and Technology (AUST). My academic trajectory centers on analyzing production dynamics, understanding operational bottlenecks, and engineering human-centered systems.",
      "Alongside technical engineering coursework, I have actively developed high-volume academic content—translating complex mathematical, engineering, and analytical concepts into structured lectures, slide decks, and assessments.",
      "My primary interests lie at the intersection of Occupational Health & Safety (OHS), Ergonomics, and Lean Manufacturing. I aim to contribute to industrial productivity by designing environments that optimize both physical ergonomics and process workflows."
    ]
  },

  // 3. Research & Core Focus Areas (No false publication claims)
  researchInterests: [
    {
      title: "Occupational Health & Safety (OHS)",
      description: "Evaluating workplace hazards, safety protocol design, risk reduction frameworks, and regulatory compliance standards within manufacturing sectors.",
      status: "Core Academic Focus"
    },
    {
      title: "Ergonomics & Human Factors",
      description: "Anthropometric tool dimensioning, workstation posture analysis, work-related musculoskeletal disorder (WMSD) mitigation, and user-centric industrial design.",
      status: "Active Project Work"
    },
    {
      title: "Lean Applications & Productivity Improvement",
      description: "5S implementation methodologies, value stream mapping (VSM), waste elimination, cycle time reduction, and line-balancing strategies.",
      status: "Technical Interest"
    },
    {
      title: "Operations Research & Queuing Systems",
      description: "Stochastic modeling, queuing theory application for facility bottleneck resolution, mathematical problem solving, and service rate optimization.",
      status: "Academic Coursework"
    },
    {
      title: "Quality Management & Control",
      description: "Statistical process control (SPC), total quality management (TQM), defect minimization, and continuous improvement frameworks.",
      status: "Technical Interest"
    },
    {
      title: "Industrial & Business Communication",
      description: "Technical reporting, clear instructional design for engineering concepts, and cross-functional team coordination.",
      status: "Applied Practice"
    }
  ],

  // 4. Featured Projects
  projects: [
    {
      id: "project-1",
      title: "Ergonomic Cutting Tool",
      context: "Industrial & Production Engineering Design Project",
      status: "Completed",
      problem: "Standard cutting tools often neglect anthropometric variation, causing localized wrist fatigue and elevated repetitive-strain risks during prolonged operations.",
      methodology: "Conducted functional tree decomposition, determined ergonomic handle dimensioning based on anthropometric data, performed material selection, and analyzed cost structures.",
      tools: ["Ergonomic Analysis", "Anthropometric Sizing", "Material Selection", "Cost Modeling"],
      contribution: "Functional breakdown, ergonomic handle parameterization, and presentation deck design.",
      reportUrl: "assets/resume.pdf", // [PLACEHOLDER]: Replace with link to your actual project PDF/Drive link
      presentationUrl: "#" // [PLACEHOLDER]: Link to slides or Canva presentation if desired
    },
    {
      id: "project-2",
      title: "Queuing Analysis of a Wudu/Ablution Facility",
      context: "Operations Research & Facility Analysis",
      status: "Completed",
      problem: "Peak-hour congestion and uneven arrival rates in a campus ablution/wudu facility created extended waiting times and service inefficiencies.",
      methodology: "Gathered empirical arrival and service duration data, structured queuing models (M/M/s calculations), calculated utilization rates, and formulated bottleneck mitigation recommendations.",
      tools: ["Queuing Theory", "Data Collection", "Statistical Analysis", "Operations Research"],
      contribution: "Data acquisition, service rate calculations, queuing model analysis, and recommendation reporting.",
      reportUrl: "#", // [PLACEHOLDER]: Add link when ready
      presentationUrl: "#"
    }
  ],

  // 5. Work Experience
  experience: [
    {
      role: "Research Associate & Coordinator — Math & ICT Team",
      organization: "Utkorsho / Onnorokom EdTech",
      period: "2023 – Present", // [PLACEHOLDER]: Confirm or adjust period
      location: "Dhaka, Bangladesh",
      description: "Leading content structuring, quality assurance, and multimedia asset production for educational curricula.",
      responsibilities: [
        "Authored structured lecture presentations and technical question banks for higher secondary mathematics and ICT curricula.",
        "Managed slide design standards and graphic clarity using PowerPoint and Canva for recorded video lessons.",
        "Coordinated academic workflows across team members to maintain lesson delivery schedules.",
        "Ensured accuracy and pedagogical effectiveness across all published problem sets and visual assets."
      ]
    }
  ],

  // 6. Education
  education: [
    {
      institution: "Ahsanullah University of Science and Technology (AUST)",
      degree: "Bachelor of Science in Industrial & Production Engineering (IPE)",
      period: "Enrolled 2023 – Present", // [PLACEHOLDER]: Adjust dates as appropriate
      location: "Dhaka, Bangladesh",
      cgpa: "N/A", // [PLACEHOLDER]: Add your CGPA later if desired
      details: "Focusing on operations research, manufacturing processes, ergonomic engineering, lean systems, and quality control."
    },
     {
      institution: "Government Science College",
      degree: "Higher Secondary Certificate (HSC) - Science",
      period: "2020 - 2022", // [PLACEHOLDER]: Adjust dates as appropriate
      location: "Dhaka, Bangladesh",
      cgpa: "GPA: 5.00 out of 5.00", // [PLACEHOLDER]: Add your CGPA later if desired
      details: "Higher secondary curriculum with emphasis on Physics, Chemistry, and Higher Mathematics."
    },
     {
      institution: "Ideal School and College",
      degree: "Secondary School Certificate (SSC) - Science",
      period: "Passing Year: 2020", // [PLACEHOLDER]: Adjust dates as appropriate
      location: "Dhaka, Bangladesh",
      cgpa: "GPA: 5.00 out of 5.00", // [PLACEHOLDER]: Add your CGPA later if desired
      details: "Completed secondary education focusing on foundational general sciences and mathematics."
    }
  ],

  // 7. Featured Coursework
  coursework: [
    {
      category: "Industrial Engineering",
      courses: [
        { name: "Ergonomics, Productivity & Safety Engineering", note: "Anthropometry, work environment design, OSHA guidelines" },
        { name: "Product Design and Development", note: "Market Analysis, House of Quality, Cost Analysis" },
        { name: "Operations Research", note: "Linear programming, queuing theory, network models" },
        { name: "Production Planning & Control", note: "Forecasting, inventory models, capacity scheduling" },
        { name: "Quality Management & Control", note: "SPC charts, acceptance sampling, ISO standards" }
      ]
    },
    {
      category: "Manufacturing & Processes",
      courses: [
        { name: "Manufacturing Processes", note: "Forming, machining, casting, joining techniques" },
        { name: "Textile Technology and Manufacturing", note: "Yarn, Fiber, Blowroom count" },
        { name: "Material Handling & Maintenance", note: "Facility layout optimization, preventive maintenance" }
      ]
    },
    {
      category: "Computational & Analytical Tools",
      courses: [
        { name: "Engineering Computations (MATLAB)", note: "Matrix operations, numerical methods, curve fitting" },
        { name: "Simulation Modeling", note: "Stochastic process modeling and discrete-event workflows" }
      ]
    }
  ],

  // 8. Skills Matrix
  skills: {
    engineering: [
      "Ergonomics & Workstation Design",
      "Occupational Health & Safety (OHS)",
      "Lean Manufacturing & 5S",
      "Operations Research & Queuing Theory",
      "Production Planning & Scheduling",
      "Statistical Quality Control",
      "Process Optimization"
    ],
    software: [
      "MATLAB",
      "Microsoft PowerPoint (Advanced Slide Architecture)",
      "Canva",
      "Microsoft Excel (Data & Modeling)",
      "Arena Simulation (Academic)",
      "SolidWorks (Introductory)"
    ],
    professional: [
      "Academic Content Development",
      "Lecture Slide Engineering",
      "Question & Assessment Formulation",
      "Academic Team Coordination",
      "Technical & Business Communication",
      "Social Media Management"
    ]
  },

  // 9. Academic Media & Content Showcase
  academicContent: [
    {
      title: "Higher Mathematics Visual Lecture Slide Architecture",
      platform: "Utkorsho",
      type: "Lecture Design & Slides",
      description: "Structured, highly readable presentation decks illustrating calculus and algebra concepts with clean geometric diagrams.",
      linkText: "View Sample Materials",
      url: "#" // [PLACEHOLDER]: Paste YouTube or Google Drive link
    },
    {
      title: "Comprehensive Assessment & Question Bank Preparation",
      platform: "Academic Repository",
      type: "Curriculum Material",
      description: "Multi-tiered evaluation questions developed with progressive difficulty levels to evaluate student conceptual depth.",
      linkText: "Inspect Overview",
      url: "#" // [PLACEHOLDER]: Paste link
    }
  ],

  // 10. Social Media & Professional Channels
  social: {
    linkedin: "https://linkedin.com/in/gmlabib", // [PLACEHOLDER]: Replace with your LinkedIn profile
    github: "https://github.com",     // [PLACEHOLDER]: Replace with your GitHub profile
    youtube: "https://youtube.com/@mgmlabib",   // [PLACEHOLDER]: Replace with your YouTube or channel link
    facebook: "https://facebook.com/mgmlabib"  // [PLACEHOLDER]: Replace with your Facebook profile
  }
};
