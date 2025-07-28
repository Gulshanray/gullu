import { Clock, Users, Star, CheckCircle2 } from 'lucide-react';
import { SiReact } from 'react-icons/si';
import { Brain, Cloud } from 'lucide-react';
import GlassCard from '@/components/ui/glass-card';
import NeonButton from '@/components/ui/neon-button';

export default function CoursesSection() {
  const courses = [
    {
      id: 1,
      title: "Advanced React Development",
      description: "Master modern React development with hooks, context, and advanced patterns. Build scalable applications that users love.",
      image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250",
      icon: SiReact,
      category: "Development",
      duration: "12 Weeks",
      students: "250+",
      rating: 4.9,
      color: "from-tech-primary to-tech-accent",
      features: ["React Hooks & Context", "Modern State Management", "Performance Optimization", "Real-world Projects"]
    },
    {
      id: 2,
      title: "AI & Machine Learning",
      description: "Dive deep into artificial intelligence and machine learning. Learn to build intelligent systems that solve real-world problems.",
      image: "https://images.unsplash.com/photo-1555255707-c07966088b7b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250",
      icon: Brain,
      category: "AI/ML",
      duration: "16 Weeks",
      students: "180+",
      rating: 4.8,
      color: "from-tech-glow to-tech-primary",
      features: ["Neural Networks", "Deep Learning", "Computer Vision", "Natural Language Processing"]
    },
    {
      id: 3,
      title: "Cloud Computing Mastery",
      description: "Master cloud platforms and DevOps practices. Learn to build, deploy, and scale applications in the cloud.",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250",
      icon: Cloud,
      category: "Cloud",
      duration: "14 Weeks",
      students: "320+",
      rating: 4.9,
      color: "from-tech-accent to-tech-glow",
      features: ["AWS & Azure Platforms", "Docker & Kubernetes", "CI/CD Pipelines", "Infrastructure as Code"]
    }
  ];

  return (
    <section id="courses" className="py-20 bg-gradient-to-b from-tech-secondary to-tech-dark relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 scroll-reveal">
          <div className="inline-block px-4 py-2 glass-morphism rounded-full border border-tech-glow/30 mb-6">
            <span className="text-tech-glow font-semibold text-sm tracking-wider">SKILL ENHANCEMENT</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-black mb-6">
            <span className="holographic-text">Learn & Grow</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Master cutting-edge technologies with our comprehensive courses designed for the future of work
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {courses.map((course) => {
            const IconComponent = course.icon;
            return (
              <GlassCard key={course.id} className="overflow-hidden neon-border hover:scale-[1.02] transition-transform duration-500 scroll-reveal">
                <img 
                  src={course.image} 
                  alt={course.title} 
                  className="w-full h-48 object-cover" 
                />
                <div className="p-6 space-y-4">
                  <div className="flex items-center gap-2">
                    <div className={`w-8 h-8 bg-gradient-to-r ${course.color} rounded-lg flex items-center justify-center`}>
                      <IconComponent className="text-white text-sm" />
                    </div>
                    <span className="text-tech-accent text-sm font-semibold">{course.category}</span>
                  </div>
                  <h3 className="text-2xl font-bold text-white">{course.title}</h3>
                  <p className="text-gray-300 leading-relaxed">
                    {course.description}
                  </p>
                  
                  {/* Course Features */}
                  <div className="space-y-2">
                    {course.features.map((feature, index) => (
                      <div key={index} className="flex items-center text-sm text-gray-300">
                        <CheckCircle2 className="w-4 h-4 mr-2 text-tech-accent" />
                        {feature}
                      </div>
                    ))}
                  </div>
                  
                  <div className="grid grid-cols-3 gap-4 pt-4 border-t border-white/10">
                    <div className="text-center">
                      <div className="flex items-center justify-center text-xs text-gray-400 mb-1">
                        <Clock className="w-3 h-3 mr-1" />
                        Duration
                      </div>
                      <div className="text-white font-semibold text-sm">{course.duration}</div>
                    </div>
                    <div className="text-center">
                      <div className="flex items-center justify-center text-xs text-gray-400 mb-1">
                        <Users className="w-3 h-3 mr-1" />
                        Students
                      </div>
                      <div className="text-white font-semibold text-sm">{course.students}</div>
                    </div>
                    <div className="text-center">
                      <div className="flex items-center justify-center text-xs text-gray-400 mb-1">
                        <Star className="w-3 h-3 mr-1 text-yellow-400 fill-current" />
                        Rating
                      </div>
                      <div className="text-white font-semibold text-sm">{course.rating}/5</div>
                    </div>
                  </div>
                  
                  <NeonButton className="w-full mt-4">
                    Start Learning
                  </NeonButton>
                </div>
              </GlassCard>
            );
          })}
        </div>
      </div>
    </section>
  );
}
