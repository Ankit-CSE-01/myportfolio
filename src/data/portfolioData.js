export const portfolioData = {
  personalInfo: {
    name: 'Ankit Raj',
    role: 'Full Stack Developer',
    tagline: 'Building scalable and intelligent solutions',
    bio: "Welcome to my digital playground! I craft elegant solutions through code, turning ideas into immersive digital experiences that solve real-world problems. My journey in tech began with curious exploration and has evolved into a focused expertise in full-stack development. I specialize in crafting responsive, user-centered applications using React, Node.js, and modern cloud infrastructure. What drives me is the intersection of technology and creativity—finding that perfect balance between functional code and intuitive design. I'm constantly expanding my skills through hands-on projects and keeping up with emerging technologies.",
    approach: "I believe in creating technology that's not just functional but meaningful. Every line of code I write aims to solve real problems and enhance user experiences. I value clean architecture, collaborative development, and continuous learning as the foundations of great software.",
    email: '73ankitkrsingh@gmail.com',
    phone: '+91-8383031054',
    location: 'Bihar, India',
    education: 'Pursuing B.Tech in Computer Science',
    experienceYears: 'Years',
    github: 'https://github.com/Ankit-CSE-01',
    linkedin: 'https://www.linkedin.com/in/ankit-raj-006667218',
    hobbies: ['Surfing Web', 'Reading', 'Music']
  },
  education: [
    {
      id: 1,
      institution: 'Lovely Professional University',
      location: 'Punjab, India',
      degree: 'Bachelor of Technology - Computer Science and Engineering',
      duration: 'Since August 2023'
    },
    {
      id: 2,
      institution: "Gj College, Bihta",
      location: 'Patna, Bihar',
      degree: 'Intermediate',
      duration: 'April 2022 - March 2023',
      score: 'Percentage: 65.6%'
    },
    {
      id: 3,
      institution: 'South Point Publlic School',
      location: 'Patna, Bihar',
      degree: 'Matriculation',
      duration: 'April 2020 - March 2021',
      score: 'Percentage: 77.2%'
    }
  ],
  skills: [
    { category: 'Programming Languages', name: 'C', level: 70 },
    { category: 'Programming Languages', name: 'C++', level: 75 },
    { category: 'Programming Languages', name: 'Java', level: 85 },
    { category: 'Programming Languages', name: 'Python', level: 75 },
    { category: 'Frontend', name: 'React', level: 90 },
    { category: 'Frontend', name: 'HTML', level: 95 },
    { category: 'Frontend', name: 'CSS', level: 85 },
    { category: 'Frontend', name: 'JavaScript', level: 90 },
    { category: 'Frontend', name: 'Tailwind CSS', level: 80 },
    { category: 'Frontend', name: 'Bootstrap', level: 75 },
    { category: 'Backend', name: 'Node.js', level: 85 },
    { category: 'Backend', name: 'Express.js', level: 80 },
    { category: 'Databases', name: 'MongoDB', level: 80 },
    { category: 'Databases', name: 'MySQL', level: 75 },
    { category: 'Tools', name: 'Git & GitHub', level: 85 },
    { category: 'Tools', name: 'Postman', level: 80 }
  ],
  experience: [
    {
      id: 1,
      title: 'Data Structures Algorithms',
      company: 'CipherSchools',
      duration: 'June 4 - July 15, 2025',
      type: 'SUMMER TRAINING',
      tech: 'DSA, Problem Solving, Algorithms',
      points: [
        'Successfully completed 70 hours of intensive Data Structures & Algorithms training from CipherSchools',
        'Studied at Lovely Professional University during the training period with Satisfactory performance assessment',
        'Gained deep understanding of algorithmic problem-solving techniques and data structure implementations',
        'Certificate ID: CSW2025-13099, issued by Anurag Mishra, Founder CipherSchools'
      ]
    },
    {
      id: 2,
      title: 'BinaryBlitz Web Hackathon',
      company: 'Coding Ninjas LPU',
      duration: 'March 30, 2024',
      type: 'HACKATHON',
      tech: 'HTML, CSS, JavaScript, Web Design',
      points: [
        'Actively participated in the BinaryBlitz Web Hackathon organized by Coding Ninjas LPU',
        'Demonstrated exceptional skills and dedication in web development and web design',
        'Exhibited outstanding problem-solving abilities and innovative thinking throughout the event',
        'Contributed significantly to the team\'s efforts with creative and functional solutions'
      ]
    }
  ],
  projects: [
    {
      id: 1,
      title: 'TravelEase',
      description: 'A comprehensive travel companion app offering services like hotel booking, SOS emergency assistance, and local vehicle repairing services.',
      image: '/projects/travelease.png',
      tech: ['React', 'Node.js', 'Vercel'],
      github: 'https://github.com/Ankit-CSE-01/TravelEase.git',
      live: 'https://travel-ease-rust.vercel.app/'
    },
    {
      id: 2,
      title: 'MediQure',
      description: 'An intelligent, all-in-one healthcare companion featuring an AI-powered diagnostic chatbot (LLaMA 3.3 70B), a real-time hospital locator with route navigation, and a comprehensive first aid reference guide — all wrapped in a beautiful, responsive interface.',
      image: '/projects/mediqure.png',
      tech: ['HTML5', 'Tailwind CSS', 'PHP', 'Leaflet.js', 'Docker'],
      github: 'https://github.com/Ankit-CSE-01/MediQure.git',
      live: 'https://mediqure.onrender.com/hos/index.html'
    }
  ]
};
