import { Clock, Users, Star, CheckCircle2, Play } from 'lucide-react';
import { useState } from 'react';

export default function CoursesPage() {
  const [selectedCategory, setSelectedCategory] = useState("Web Development");
  const [selectedHours, setSelectedHours] = useState("20hrs in a Month");

  const categories = [
    "Web Development",
    "Mobile Development", 
    "Data Science",
    "Cloud Computing",
    "Cyber Security"
  ];

  const hoursOptions = [
    "20hrs in a Month",
    "40hrs in a Month", 
    "60hrs in a Month",
    "80hrs in a Month"
  ];

  const courses = [
    {
      id: 1,
      title: "Full-Stack Web Development",
      subtitle: "MERN/MEAN/Java+React",
      image: "/api/placeholder/400/250",
      icon: "⚛️",
      category: "Web Development",
      duration: "12 Weeks",
      students: 120,
      rating: 4.5,
      classes: "12 Classes",
      color: "#FED7AA",
      bgColor: "bg-orange-100",
      description: "Master full-stack development with modern technologies and frameworks.",
      curriculum: ["React & Redux", "Node.js & Express", "MongoDB", "Authentication", "Deployment"]
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
    }
  ];

  const filteredCourses = courses.filter(course => course.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Advance your engineering<br/>
            skills with our courses
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Build skills with our courses and mentor from world-class companies.
          </p>

          {/* Rating Display */}
          <div className="flex items-center justify-center gap-4 mb-12">
            <div className="flex items-center gap-2">
              <div className="flex -space-x-2">
                <div className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-400 to-purple-500 border-2 border-white"></div>
                <div className="w-10 h-10 rounded-full bg-gradient-to-r from-green-400 to-blue-500 border-2 border-white"></div>
                <div className="w-10 h-10 rounded-full bg-gradient-to-r from-purple-400 to-pink-500 border-2 border-white"></div>
                <div className="w-10 h-10 rounded-full bg-gradient-to-r from-orange-400 to-red-500 border-2 border-white"></div>
                <div className="w-10 h-10 rounded-full bg-gradient-to-r from-yellow-400 to-orange-500 border-2 border-white"></div>
              </div>
              <div className="ml-4">
                <div className="flex items-center gap-1">
                  <span className="text-2xl font-bold text-gray-900">4.6</span>
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                </div>
                <p className="text-sm text-gray-600">Rated by 25k on google.</p>
              </div>
            </div>
          </div>

          {/* Learning Options */}
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-16">
            {/* What do you want to learn */}
            <div className="text-left">
              <label className="block text-lg font-semibold text-gray-900 mb-4">What do you want to learn?</label>
              <select 
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg text-gray-900 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                {categories.map(category => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </select>
            </div>

            {/* Hours you going to invest */}
            <div className="text-left">
              <label className="block text-lg font-semibold text-gray-900 mb-4">Hours you going to invest?</label>
              <select 
                value={selectedHours}
                onChange={(e) => setSelectedHours(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg text-gray-900 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                {hoursOptions.map(hours => (
                  <option key={hours} value={hours}>
                    {hours}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="flex justify-center mb-16">
            <button className="bg-purple-600 hover:bg-purple-700 text-white font-semibold px-12 py-4 rounded-lg text-lg transition-colors">
              Start Learning
            </button>
          </div>
        </div>

        {/* Course Categories */}
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

                {/* Course Stats */}
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

                {/* Curriculum */}
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

                <div className="pt-4 border-t border-gray-100">
                  <button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-3 px-4 rounded-lg transition-all duration-300">
                    Enroll Now
                  </button>
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