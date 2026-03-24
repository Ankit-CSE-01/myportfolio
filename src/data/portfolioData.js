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
      duration: 'Since August 2023',
      score: 'CGPA: 5.76*'
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
      title: 'Complete Interview Preparation',
      company: 'GeeksForGeeks',
      duration: 'June - July, 2024',
      type: 'SUMMER TRAINING',
      points: [
        'Learned essential DSA, system design, and core CS concepts tailored for coding interviews',
        'Practiced a wide range of coding problems with step-by-step explanations and solutions',
        'Gained insights into technical and behavioral interview strategies, including resume building and mock interviews',
        'Developed a Sudoko Solver as a Project using the DSA skills learned in the course'
      ]
    },
    {
      id: 2,
      title: 'Smart India Hackathon',
      company: 'LPU',
      duration: 'August, 2024',
      type: 'HACKATHON',
      tech: 'HTML, CSS, JavaScript, ReactJs, NodeJs, MongoDB',
      points: [
        'Built an intuitive platform for farmers to list and showcase their products with images',
        'Differentiated accounts of farmers and consumers providing them different functionality',
        'Facilitated direct transactions between farmers and consumers for a seamless purchasing experience'
      ]
    },
    {
      id: 3,
      title: 'IOT Devices',
      company: 'LPU',
      duration: 'March, 2023',
      type: 'WORKSHOP',
      tech: 'C, Ardiuno',
      points: [
        'Designed an automated highway lighting system for efficient energy usage',
        'Implemented Arduino to control and manage the lighting mechanism',
        'Integrated motion sensors and counters to activate lights based on vehicle movement'
      ]
    }
  ],
  projects: [
    {
      id: 1,
      title: 'Farmers Market Platform',
      description: 'Built during Smart India Hackathon. An intuitive platform for farmers to list and showcase their products directly to consumers.',
      image: 'https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&q=80',
      tech: ['React', 'Node.js', 'MongoDB', 'Express'],
      github: '#',
      live: '#'
    },
    {
      id: 2,
      title: 'Sudoku Solver',
      description: 'An algorithmic project developed during training to solve any given Sudoku puzzle efficiently using backtracking.',
      image: 'https://images.unsplash.com/photo-1580210452377-5264eb78d7e0?auto=format&fit=crop&q=80',
      tech: ['Java', 'Algorithms'],
      github: '#',
      live: '#'
    }
  ]
};
