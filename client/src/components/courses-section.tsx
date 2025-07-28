import { Clock, Users, Star, CheckCircle2, Play } from 'lucide-react';
import { SiReact, SiNodedotjs, SiMongodb, SiJavascript } from 'react-icons/si';
import { Database } from 'lucide-react';
import { useState } from 'react';

export default function CoursesSection() {
  const [selectedCategory, setSelectedCategory] = useState("Mobile Development");
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
      category: "Development",
      duration: "12 Weeks",
      students: 120,
      rating: 4.5,
      classes: "12 Classes",
      color: "#FED7AA",
      bgColor: "bg-orange-100"
    },
    {
      id: 2,
      title: "Backend with Node.js and Express.js",
      subtitle: "Server-side Development",
      image: "/api/placeholder/400/250",
      icon: "📐",
      category: "Backend",  
      duration: "10 Weeks",
      students: 120,
      rating: 4.5,
      classes: "12 Classes", 
      color: "#A7F3D0",
      bgColor: "bg-emerald-100"
    },
    {
      id: 3,
      title: "Learn MongoDB with Mongoose",
      subtitle: "Database Management",
      image: "/api/placeholder/400/250", 
      icon: "🗃️",
      category: "Database",
      duration: "8 Weeks",
      students: 120,
      rating: 4.5,
      classes: "12 Classes",
      color: "#BBF7D0", 
      bgColor: "bg-green-100"
    },
    {
      id: 4,
      title: "Learn React with Redux toolkit",
      subtitle: "Modern React Development", 
      image: "/api/placeholder/400/250",
      icon: "🔵",
      category: "Frontend",
      duration: "10 Weeks", 
      students: 120,
      rating: 4.5,
      classes: "12 Classes",
      color: "#FECACA",
      bgColor: "bg-red-100"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-gray-900 mb-6">
            Advance your engineering<br/>
            skills with our courses
          </h2>
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
              Start
            </button>
          </div>
        </div>

        {/* Popular Courses Section */}
        <div className="mb-12">
          <div className="flex justify-between items-center mb-8">
            <h3 className="text-4xl font-bold text-gray-900">Popular Courses</h3>
            <button className="text-purple-600 hover:text-purple-700 transition-colors border border-purple-200 px-6 py-2 rounded-full hover:bg-purple-50">
              Explore Classes
            </button>
          </div>

          {/* Course Categories */}
          <div className="flex flex-wrap gap-4 mb-8">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full transition-all ${
                  selectedCategory === category 
                    ? 'bg-gray-900 text-white' 
                    : 'text-gray-600 hover:text-gray-900 border border-gray-300 hover:border-gray-400'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Courses Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {courses.map((course) => (
            <div key={course.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className={`relative h-40 ${course.bgColor} flex items-center justify-center`}>
                <div className="text-6xl">{course.icon}</div>
              </div>
              
              <div className="p-4 space-y-3">
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-1">{course.title}</h3>
                  <p className="text-sm text-gray-600">{course.subtitle}</p>
                </div>

                {/* Course Stats */}
                <div className="flex items-center gap-4 text-sm text-gray-600">
                  <div className="flex items-center gap-1">
                    <Users className="w-4 h-4" />
                    <span>{course.students}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    <span>{course.rating}</span>
                  </div>
                </div>

                <div className="text-sm text-gray-700">
                  {course.classes}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}