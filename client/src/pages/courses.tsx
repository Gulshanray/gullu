import { Clock, Users, Star, CheckCircle2, Play } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'wouter';

export default function CoursesPage() {
  const [selectedCategory, setSelectedCategory] = useState("Web Development");

const categories = [
  "Web Development",
  "Mobile Development",
  "Data Science",
  "Cloud Computing",
  "Cyber Security",
  "Design",
  "Marketing"
];

const courses = [
  {
    id: 1,
    title: "Full Stack Web Development",
    subtitle: "MERN/MEAN Stack",
    image: "/api/placeholder/400/250",
    icon: "💻",
    category: "Web Development",
    duration: "3-5 Months",
    students: 150,
    rating: 4.8,
    classes: "40 Classes",
    color: "#FED7AA",
    bgColor: "bg-orange-100",
    description: "Master both front-end and back-end technologies to build complete and robust web applications.",
    curriculum: ["HTML, CSS, JavaScript", "React & Redux", "Node.js & Express", "MongoDB/SQL", "Deployment"]
  },
  {
    id: 2,
    title: "Backend with Node.js and Express.js",
    subtitle: "Server-side Development",
    image: "/api/placeholder/400/250",
    icon: "📐",
    category: "Web Development",
    duration: "10 Weeks",
    students: 120,
    rating: 4.5,
    classes: "12 Classes",
    color: "#A7F3D0",
    bgColor: "bg-emerald-100",
    description: "Build robust backend systems and APIs with Node.js and Express.",
    curriculum: ["Node.js Fundamentals", "Express.js", "Database Integration", "API Development", "Security"]
  },
  {
    id: 3,
    title: "Learn MongoDB with Mongoose",
    subtitle: "Database Management",
    image: "/api/placeholder/400/250",
    icon: "🗃️",
    category: "Data Science",
    duration: "8 Weeks",
    students: 120,
    rating: 4.5,
    classes: "12 Classes",
    color: "#BBF7D0",
    bgColor: "bg-green-100",
    description: "Master NoSQL database design and management with MongoDB.",
    curriculum: ["MongoDB Basics", "Mongoose ODM", "Data Modeling", "Aggregation", "Performance"]
  },
  {
    id: 4,
    title: "Learn React with Redux toolkit",
    subtitle: "Modern React Development",
    image: "/api/placeholder/400/250",
    icon: "🔵",
    category: "Web Development",
    duration: "10 Weeks",
    students: 120,
    rating: 4.5,
    classes: "12 Classes",
    color: "#FECACA",
    bgColor: "bg-red-100",
    description: "Build modern, scalable React applications with Redux Toolkit.",
    curriculum: ["React Hooks", "Redux Toolkit", "State Management", "Component Design", "Testing"]
  },
  {
    id: 5,
    title: "Mobile App Development with React Native",
    subtitle: "Cross-platform Mobile Apps",
    image: "/api/placeholder/400/250",
    icon: "📱",
    category: "Mobile Development",
    duration: "12 Weeks",
    students: 95,
    rating: 4.6,
    classes: "15 Classes",
    color: "#DDD6FE",
    bgColor: "bg-purple-100",
    description: "Create native mobile apps for iOS and Android using React Native.",
    curriculum: ["React Native Basics", "Navigation", "Native Modules", "App Store Deployment", "Performance"]
  },
  {
    id: 6,
    title: "Python for Data Science",
    subtitle: "Data Analysis & Machine Learning",
    image: "/api/placeholder/400/250",
    icon: "🐍",
    category: "Data Science",
    duration: "14 Weeks",
    students: 150,
    rating: 4.7,
    classes: "18 Classes",
    color: "#FEF3C7",
    bgColor: "bg-yellow-100",
    description: "Learn data science fundamentals with Python and machine learning.",
    curriculum: ["Python Basics", "Pandas & NumPy", "Data Visualization", "Machine Learning", "Projects"]
  },
  {
    id: 7,
    title: "Graphic Designing",
    subtitle: "Visual Communication & Design Tools",
    image: "/api/placeholder/400/250",
    icon: "🎨",
    category: "Design",
    duration: "3-5 Months",
    students: 85,
    rating: 4.5,
    classes: "25 Classes",
    color: "#FFD8B1",
    bgColor: "bg-orange-100",
    description: "Unleash your creativity and learn the art of visual communication with industry-standard design tools.",
    curriculum: ["Adobe Photoshop", "Adobe Illustrator", "Design Principles", "Typography", "UI/UX Concepts"]
  },
  {
    id: 8,
    title: "AutoCAD-2D/3D/Sketchup",
    subtitle: "Computer-Aided Design & Modeling",
    image: "/api/placeholder/400/250",
    icon: "🏗️",
    category: "Design",
    duration: "3-5 Months",
    students: 70,
    rating: 4.6,
    classes: "30 Classes",
    color: "#A7F3D0",
    bgColor: "bg-emerald-100",
    description: "Master 2D drafting and 3D modeling with AutoCAD and Sketchup for architectural and engineering designs.",
    curriculum: ["2D Drafting", "3D Modeling", "Sketchup Essentials", "Rendering Techniques", "Project Work"]
  },
  {
    id: 9,
    title: "Digital Marketing",
    subtitle: "SEO, SMM, and Content Strategy",
    image: "/api/placeholder/400/250",
    icon: "📈",
    category: "Marketing",
    duration: "3-5 Months",
    students: 110,
    rating: 4.7,
    classes: "22 Classes",
    color: "#BFDBFE",
    bgColor: "bg-blue-100",
    description: "Learn to grow businesses online through effective marketing strategies across various digital channels.",
    curriculum: ["Search Engine Optimization (SEO)", "Social Media Marketing (SMM)", "Content Marketing", "Email Campaigns", "Google Analytics"]
  },
  {
    id: 10,
    title: "Cyber Security",
    subtitle: "Ethical Hacking & Network Defense",
    image: "/api/placeholder/400/250",
    icon: "🛡️",
    category: "Cyber Security",
    duration: "3-5 Months",
    students: 95,
    rating: 4.8,
    classes: "28 Classes",
    color: "#FECACA",
    bgColor: "bg-red-100",
    description: "Become a security professional by learning to protect systems, networks, and data from cyber threats.",
    curriculum: ["Network Security", "Ethical Hacking", "Cryptography", "Web Application Security", "Incident Response"]
  },
  {
    id: 11,
    title: "Data Analyst",
    subtitle: "Excel, SQL, and Visualization",
    image: "/api/placeholder/400/250",
    icon: "📊",
    category: "Data Science",
    duration: "3-5 Months",
    students: 125,
    rating: 4.8,
    classes: "25 Classes",
    color: "#BBF7D0",
    bgColor: "bg-green-100",
    description: "Learn to interpret data, analyze results using statistical techniques, and provide ongoing reports.",
    curriculum: ["Basic to Advanced Excel", "SQL for Data Analysis", "Tableau/Power BI", "Data Cleaning", "Statistical Methods"]
  },
  {
    id: 12,
    title: "AWS Cloud Solutions Architect",
    subtitle: "Infrastructure Design on AWS",
    image: "/api/placeholder/400/250",
    icon: "☁️",
    category: "Cloud Computing",
    duration: "3-5 Months",
    students: 105,
    rating: 4.7,
    classes: "20 Classes",
    color: "#DDD6FE",
    bgColor: "bg-purple-100",
    description: "Become proficient in AWS cloud services and infrastructure to design and deploy scalable applications.",
    curriculum: ["EC2 & S3", "VPC Networking", "IAM & Security", "Databases on AWS", "Serverless with Lambda"]
  },
  {
    id: 13,
    title: "Full-Stack Python Development",
    subtitle: "Django + React",
    image: "/api/placeholder/400/250",
    icon: "🐍",
    category: "Web Development",
    duration: "16 Weeks",
    students: 115,
    rating: 4.8,
    classes: "35 Classes",
    color: "#A7F3D0",
    bgColor: "bg-emerald-100",
    description: "Master full-stack development using Python's powerful Django framework with a modern React frontend.",
    curriculum: ["Python Fundamentals", "Django ORM", "React & Redux", "REST APIs", "Deployment on Heroku"]
  },
  {
    id: 14,
    title: "Deep Learning Specialization",
    subtitle: "TensorFlow & Keras",
    image: "/api/placeholder/400/250",
    icon: "🧠",
    category: "Data Science",
    duration: "14 Weeks",
    students: 80,
    rating: 4.9,
    classes: "25 Classes",
    color: "#FEF3C7",
    bgColor: "bg-yellow-100",
    description: "Dive deep into neural networks and build advanced AI models for image recognition and NLP.",
    curriculum: ["Neural Networks", "TensorFlow API", "Keras Framework", "Computer Vision (CNNs)", "Natural Language Processing (RNNs)"]
  },
  {
    id: 15,
    title: "Cloud Security Engineering",
    subtitle: "Securing AWS & Azure",
    image: "/api/placeholder/400/250",
    icon: "🔒",
    category: "Cyber Security",
    duration: "12 Weeks",
    students: 90,
    rating: 4.7,
    classes: "20 Classes",
    color: "#FECACA",
    bgColor: "bg-red-100",
    description: "Learn to design and implement security solutions for cloud infrastructure on major platforms.",
    curriculum: ["Cloud Security Principles", "Identity & Access Management (IAM)", "Network Security in Cloud", "Data Encryption", "Compliance & Auditing"]
  },
  {
    id: 16,
    title: "UI/UX Design with Figma",
    subtitle: "Prototyping & User Experience",
    image: "/api/placeholder/400/250",
    icon: "🎨",
    category: "Design",
    duration: "10 Weeks",
    students: 130,
    rating: 4.8,
    classes: "18 Classes",
    color: "#DDD6FE",
    bgColor: "bg-purple-100",
    description: "Master the complete design process from user research to high-fidelity, interactive prototypes using Figma.",
    curriculum: ["User Research", "Wireframing", "High-Fidelity Prototyping", "Figma Components", "Usability Testing"]
  },
  {
    id: 17,
    title: "E-commerce Marketing Strategy",
    subtitle: "Shopify, SEO & Social Ads",
    image: "/api/placeholder/400/250",
    icon: "🛒",
    category: "Marketing",
    duration: "8 Weeks",
    students: 100,
    rating: 4.6,
    classes: "15 Classes",
    color: "#BFDBFE",
    bgColor: "bg-blue-100",
    description: "Learn strategies to grow an online store, focusing on platform optimization, targeted ads, and SEO.",
    curriculum: ["Shopify Management", "E-commerce SEO", "Facebook & Instagram Ads", "Conversion Rate Optimization", "Email Marketing Funnels"]
  },
  {
    id: 18,
    title: "DevOps on AWS",
    subtitle: "CI/CD & Infrastructure as Code",
    image: "/api/placeholder/400/250",
    icon: "⚙️",
    category: "Cloud Computing",
    duration: "15 Weeks",
    students: 95,
    rating: 4.9,
    classes: "22 Classes",
    color: "#FED7AA",
    bgColor: "bg-orange-100",
    description: "Automate software delivery pipelines and manage cloud infrastructure using modern DevOps tools on AWS.",
    curriculum: ["CI/CD Pipelines with Jenkins", "Docker & Containers", "Kubernetes (EKS)", "Infrastructure as Code (Terraform)", "Monitoring & Logging"]
  }
];

// You can now use the 'categories' and 'courses' arrays in your application.
console.log(`Total categories: ${categories.length}`);
console.log(`Total courses available: ${courses.length}`);

  const filteredCourses = courses.filter(course => course.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gray-50 pt-40 pb-16">
      <div className="max-w-7xl mx-auto px-6">

        {/* Learn With Us CTA */}
        <div className="bg-gradient-to-br from-[#0d0d25] via-[#1a1a3d] to-[#0d0d25] py-20 px-6 rounded-3xl text-white shadow-xl max-w-5xl mx-auto mb-16">
          <div className="text-center space-y-8">
            <h2 className="text-4xl font-bold">What Do You Want to Master?</h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Whether you dream of becoming a <span className="text-yellow-400 font-medium">Full Stack Developer</span>,
              a <span className="text-green-400 font-medium">Data Analyst</span>, a <span className="text-pink-400 font-medium">Graphic Designer</span>,
              or even a <span className="text-blue-400 font-medium">Digital Marketer</span> — <span className="text-blue-500 font-semibold">TechSol</span> is the place to begin.
            </p>
            <p className="text-md text-gray-400">
              Our expert mentors and real-world projects will make your journey practical and placement-focused.
            </p>
            <a
              href="tel:+917302670626"
              className="inline-block mt-6 bg-purple-600 hover:bg-purple-700 transition-colors text-white font-semibold px-10 py-4 rounded-xl text-lg shadow-lg"
            >
              🚀 Start Learning Today
            </a>
          </div>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-3 rounded-full transition-all ${
                selectedCategory === category
                  ? 'bg-gray-900 text-white shadow-lg'
                  : 'text-gray-600 hover:text-gray-900 border border-gray-300 hover:border-gray-400 bg-white'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Courses Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {filteredCourses.map((course) => (
            <div key={course.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 border border-gray-100">
              <div className={`relative h-48 ${course.bgColor} flex items-center justify-center`}>
                <div className="text-8xl">{course.icon}</div>
              </div>

              <div className="p-6 space-y-4">
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{course.title}</h3>
                  <p className="text-sm text-gray-600 mb-3">{course.subtitle}</p>
                  <p className="text-gray-700 text-sm leading-relaxed">{course.description}</p>
                </div>

                {/* Stats */}
                <div className="flex items-center gap-4 text-sm text-gray-600">
                  <div className="flex items-center gap-1">
                    <Users className="w-4 h-4" />
                    <span>{course.students} students</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    <span>{course.rating}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    <span>{course.duration}</span>
                  </div>
                </div>

                {/* Curriculum Preview */}
                <div>
                  <h4 className="font-semibold text-gray-900 text-sm mb-2">What you'll learn:</h4>
                  <div className="space-y-1">
                    {course.curriculum.slice(0, 3).map((item, index) => (
                      <div key={index} className="flex items-center gap-2">
                        <CheckCircle2 className="w-3 h-3 text-green-500" />
                        <span className="text-xs text-gray-600">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Enroll Button */}
                <div className="pt-4 border-t border-gray-100">
                  <Link href="/contact">
                    <button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-3 px-4 rounded-lg transition-all duration-300">
                      Enroll Now
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Features Section */}
        <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-200">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Our Courses Stand Out</h2>
            <p className="text-lg text-gray-600">Comprehensive learning experience designed for success</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Play className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Interactive Learning</h3>
              <p className="text-gray-600">Hands-on projects and real-world applications</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Expert Mentors</h3>
              <p className="text-gray-600">Learn from industry professionals</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle2 className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Certification</h3>
              <p className="text-gray-600">Industry-recognized certificates</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
