import { Code, Smartphone, Brain, Cloud, Megaphone, CheckCircle } from 'lucide-react';
import GlassCard from '@/components/ui/glass-card';

export default function ServicesSection() {
  return (
    <section id="services" className="py-20 bg-gradient-to-b from-tech-dark to-tech-secondary relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 scroll-reveal">
          <div className="inline-block px-4 py-2 glass-morphism rounded-full border border-tech-primary/30 mb-6">
            <span className="text-tech-primary font-semibold text-sm tracking-wider">WHAT WE OFFER</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-black mb-6">
            <span className="holographic-text">Our Services</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Comprehensive digital solutions designed to elevate your business with cutting-edge technology and innovation
          </p>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 h-auto md:h-[800px]">
          {/* Large card - Web Development */}
          <GlassCard className="md:col-span-2 md:row-span-2 p-8 neon-border hover:scale-[1.02] transition-transform duration-500 scroll-reveal">
            <img 
              src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
              alt="Modern website development" 
              className="rounded-2xl w-full h-48 object-cover mb-6" 
            />
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gradient-to-r from-tech-primary to-tech-accent rounded-xl flex items-center justify-center">
                  <Code className="text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white">Web Development</h3>
              </div>
              <p className="text-gray-300 leading-relaxed">
                Build stunning, responsive websites with cutting-edge technologies. From concept to deployment, we create digital experiences that captivate and convert.
              </p>
              <ul className="space-y-2 text-sm text-gray-400">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-tech-accent" />
                  React & Next.js Development
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-tech-accent" />
                  Responsive Design
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-tech-accent" />
                  Performance Optimization
                </li>
              </ul>
            </div>
          </GlassCard>

          {/* Mobile App Development */}
          <GlassCard className="md:col-span-1 p-6 neon-border hover:scale-[1.02] transition-transform duration-500 scroll-reveal">
            <div className="w-12 h-12 bg-gradient-to-r from-tech-accent to-tech-glow rounded-xl flex items-center justify-center mb-4">
              <Smartphone className="text-white" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Mobile Apps</h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              Native and cross-platform mobile applications that deliver exceptional user experiences.
            </p>
          </GlassCard>

          {/* AI Solutions */}
          <GlassCard className="md:col-span-1 p-6 neon-border hover:scale-[1.02] transition-transform duration-500 scroll-reveal">
            <div className="w-12 h-12 bg-gradient-to-r from-tech-glow to-tech-primary rounded-xl flex items-center justify-center mb-4">
              <Brain className="text-white" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">AI Integration</h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              Harness the power of artificial intelligence to automate and optimize your business processes.
            </p>
          </GlassCard>

          {/* Cloud Solutions */}
          <GlassCard className="md:col-span-1 p-6 neon-border hover:scale-[1.02] transition-transform duration-500 scroll-reveal">
            <div className="w-12 h-12 bg-gradient-to-r from-tech-primary to-tech-glow rounded-xl flex items-center justify-center mb-4">
              <Cloud className="text-white" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Cloud Solutions</h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              Scalable cloud infrastructure and deployment solutions for modern applications.
            </p>
          </GlassCard>

          {/* Digital Marketing */}
          <GlassCard className="md:col-span-1 md:row-span-1 p-6 neon-border hover:scale-[1.02] transition-transform duration-500 scroll-reveal">
            <img 
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=200" 
              alt="Professional digital marketing team" 
              className="rounded-xl w-full h-32 object-cover mb-4" 
            />
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-gradient-to-r from-tech-accent to-tech-primary rounded-lg flex items-center justify-center">
                  <Megaphone className="text-white text-sm" />
                </div>
                <h3 className="text-lg font-bold text-white">Digital Marketing</h3>
              </div>
              <p className="text-gray-300 text-sm">
                Data-driven marketing strategies that drive growth and engagement.
              </p>
            </div>
          </GlassCard>
        </div>
      </div>
    </section>
  );
}
