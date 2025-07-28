import { Clock, Users, Star, CheckCircle2, Play } from 'lucide-react';
import { SiReact, SiNodedotjs, SiMongodb } from 'react-icons/si';
import { Database } from 'lucide-react';
import GlassCard from '@/components/ui/glass-card';
import NeonButton from '@/components/ui/neon-button';
import { useState } from 'react';

export default function CoursesSection() {
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
      image: "https://images.unsplash.com/photo-1627398242454-45a1465c2479?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250",
      icon: SiReact,
      category: "Development",
      duration: "12 Weeks",
      students: 120,
      rating: 4.5,
      classes: "12 Classes",
      color: "from-orange-400/20 to-yellow-400/20",
      features: ["React Hooks & Context", "Node.js & Express", "MongoDB Integration", "Authentication & Security"]
    },
    {
      id: 2,
      title: "Backend with Node.js and Express.js",
      subtitle: "Server-side Development Mastery",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250",
      icon: SiNodedotjs,
      category: "Backend",
      duration: "10 Weeks",
      students: 120,
      rating: 4.5,
      classes: "12 Classes",
      color: "from-blue-400/20 to-cyan-400/20",
      features: ["RESTful API Design", "Express Middleware", "Authentication Systems", "Database Integration"]
    },
    {
      id: 3,
      title: "Learn MongoDB with Mongoose",
      subtitle: "Database Management & Operations",
      image: "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250",
      icon: SiMongodb,
      category: "Database",
      duration: "8 Weeks",
      students: 120,
      rating: 4.5,
      classes: "12 Classes",
      color: "from-green-400/20 to-emerald-400/20",
      features: ["MongoDB Fundamentals", "Mongoose ODM", "Data Modeling", "Aggregation Pipelines"]
    },
    {
      id: 4,
      title: "Learn React with Redux toolkit",
      subtitle: "Modern Frontend Development",
      image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250",
      icon: SiReact,
      category: "Frontend",
      duration: "10 Weeks",
      students: 120,
      rating: 4.5,
      classes: "12 Classes",
      color: "from-pink-400/20 to-rose-400/20",
      features: ["Component Architecture", "Redux State Management", "Performance Optimization", "Testing Strategies"]
    }
  ];

  return (
    <section id="courses" className="py-20 bg-gradient-to-b from-tech-secondary to-tech-dark relative">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header Section */}
        <div className="text-center mb-16 scroll-reveal">
          <div className="inline-block px-4 py-2 glass-morphism rounded-full border border-tech-glow/30 mb-6">
            <span className="text-tech-glow font-semibold text-sm tracking-wider">SKILL ENHANCEMENT</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-black mb-6">
            <span className="holographic-text">Advance your engineering</span><br/>
            <span className="text-gradient">skills with our courses</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
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
                  <span className="text-2xl font-bold text-white">4.6</span>
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                </div>
                <p className="text-sm text-gray-400">Rated by 25k on google.</p>
              </div>
            </div>
          </div>

          {/* Learning Options */}
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-16">
            {/* What do you want to learn */}
            <div className="text-left">
              <label className="block text-lg font-semibold text-white mb-4">What do you want to learn?</label>
              <select 
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full px-4 py-3 glass-morphism border border-white/20 rounded-xl text-white bg-transparent focus:outline-none focus:ring-2 focus:ring-tech-primary"
              >
                {categories.map(category => (
                  <option key={category} value={category} className="bg-tech-dark text-white">
                    {category}
                  </option>
                ))}
              </select>
            </div>

            {/* Hours you going to invest */}
            <div className="text-left">
              <label className="block text-lg font-semibold text-white mb-4">Hours you going to invest?</label>
              <select 
                value={selectedHours}
                onChange={(e) => setSelectedHours(e.target.value)}
                className="w-full px-4 py-3 glass-morphism border border-white/20 rounded-xl text-white bg-transparent focus:outline-none focus:ring-2 focus:ring-tech-primary"
              >
                {hoursOptions.map(hours => (
                  <option key={hours} value={hours} className="bg-tech-dark text-white">
                    {hours}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="flex justify-center mb-16">
            <NeonButton className="animate-glow group px-12 py-4">
              <span className="relative z-10 flex items-center gap-2 text-lg font-semibold">
                <Play className="w-5 h-5" />
                Start
              </span>
            </NeonButton>
          </div>
        </div>

        {/* Popular Courses Section */}
        <div className="mb-12">
          <div className="flex justify-between items-center mb-8">
            <h3 className="text-4xl font-bold text-white">Popular Courses</h3>
            <button className="text-tech-primary hover:text-tech-accent transition-colors border border-tech-primary/30 px-6 py-2 rounded-full hover:bg-tech-primary/10">
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
                    ? 'bg-tech-primary text-white' 
                    : 'text-gray-400 hover:text-white border border-gray-600 hover:border-tech-primary'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Courses Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {courses.map((course) => {
            const IconComponent = course.icon;
            return (
              <GlassCard key={course.id} className="overflow-hidden neon-border hover:scale-[1.02] transition-transform duration-500 scroll-reveal">
                <div className="relative">
                  <img 
                    src={course.image} 
                    alt={course.title} 
                    className="w-full h-40 object-cover" 
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${course.color}`}></div>
                  <div className="absolute top-4 left-4">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                </div>
                
                <div className="p-4 space-y-3">
                  <div>
                    <h3 className="text-lg font-bold text-white mb-1">{course.title}</h3>
                    <p className="text-sm text-gray-400">{course.subtitle}</p>
                  </div>

                  {/* Course Stats */}
                  <div className="flex items-center gap-4 text-sm text-gray-400">
                    <div className="flex items-center gap-1">
                      <Users className="w-4 h-4" />
                      <span>{course.students}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      <span>{course.rating}</span>
                    </div>
                  </div>

                  <div className="text-sm text-gray-300">
                    {course.classes}
                  </div>

                  {/* Features */}
                  <div className="space-y-2">
                    {course.features.slice(0, 2).map((feature, index) => (
                      <div key={index} className="flex items-center gap-2 text-sm text-gray-300">
                        <CheckCircle2 className="w-3 h-3 text-tech-accent" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </GlassCard>
            );
          })}
        </div>
      </div>
    </section>
  );
}