import { Play, Rocket, TrendingUp, BarChart3 } from 'lucide-react';
import NeonButton from '@/components/ui/neon-button';
import GlassCard from '@/components/ui/glass-card';

export default function HeroSection() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Modern abstract background with gradients */}
      <div className="absolute inset-0 bg-gradient-to-br from-tech-dark via-tech-secondary to-tech-dark">
        <div className="absolute top-20 left-10 w-72 h-72 bg-tech-primary/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-tech-accent/20 rounded-full blur-3xl animate-float" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-tech-glow/10 rounded-full blur-3xl animate-float" style={{animationDelay: '2s'}}></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center relative z-10">
        <div className="space-y-8 animate-fade-in-up">
          <div className="space-y-4">
            <div className="inline-block px-6 py-2 glass-morphism rounded-full border border-tech-accent/30">
              <span className="text-tech-accent font-semibold text-sm tracking-wider">NEXT-GEN TECHNOLOGY</span>
            </div>
            <h1 className="text-6xl md:text-8xl font-black leading-tight">
              <span className="holographic-text">Revolutionary</span><br/>
              <span className="text-white">Digital</span><br/>
              <span className="text-gradient animate-gradient-shift">Solutions</span>
            </h1>
          </div>
          <p className="text-xl text-gray-300 leading-relaxed max-w-lg">
            Transform your business with cutting-edge technology and innovative design solutions that drive exponential growth and success.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <NeonButton className="animate-glow group">
              <span className="relative z-10 flex items-center gap-2">
                Get Started Today
                <Rocket className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
            </NeonButton>
            <button className="glass-morphism text-white px-8 py-4 rounded-2xl font-semibold hover:scale-105 transition-all duration-300 flex items-center gap-2 neon-border">
              <Play className="w-5 h-5" />
              Watch Demo
            </button>
          </div>
          
          {/* Stats Row */}
          <div className="grid grid-cols-3 gap-6 pt-8 border-t border-white/10">
            <div className="text-center">
              <div className="text-3xl font-bold text-tech-accent mb-1">500+</div>
              <div className="text-sm text-gray-400">Projects Delivered</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-tech-glow mb-1">98%</div>
              <div className="text-sm text-gray-400">Client Satisfaction</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-tech-primary mb-1">24/7</div>
              <div className="text-sm text-gray-400">Support Available</div>
            </div>
          </div>
        </div>
        
        <div className="relative animate-slide-in-left">
          {/* Futuristic 3D representation with floating cards */}
          <div className="relative w-full h-[500px] flex items-center justify-center">
            {/* Main floating card */}
            <GlassCard className="absolute w-80 h-60 p-6 animate-float neon-border">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 bg-gradient-to-r from-tech-primary to-tech-accent rounded-xl"></div>
                  <span className="text-tech-accent font-bold">Live Dashboard</span>
                </div>
                <div className="space-y-2">
                  <div className="h-2 bg-gradient-to-r from-tech-primary/50 to-tech-accent/50 rounded-full"></div>
                  <div className="h-2 bg-gradient-to-r from-tech-accent/50 to-tech-glow/50 rounded-full w-3/4"></div>
                  <div className="h-2 bg-gradient-to-r from-tech-glow/50 to-tech-primary/50 rounded-full w-1/2"></div>
                </div>
              </div>
            </GlassCard>
            
            {/* Smaller floating elements */}
            <GlassCard className="absolute top-0 right-0 w-24 h-24 animate-float flex items-center justify-center" style={{animationDelay: '0.5s'}}>
              <Rocket className="text-tech-accent text-2xl" />
            </GlassCard>
            <GlassCard className="absolute bottom-0 left-0 w-32 h-16 animate-float flex items-center justify-center" style={{animationDelay: '1s'}}>
              <span className="text-tech-glow font-bold">+247%</span>
            </GlassCard>
            <GlassCard className="absolute top-1/2 right-16 w-20 h-20 rounded-full animate-float flex items-center justify-center" style={{animationDelay: '1.5s'}}>
              <BarChart3 className="text-tech-primary text-xl" />
            </GlassCard>
          </div>
        </div>
      </div>
    </section>
  );
}
