import { Play } from 'lucide-react';

export default function HeroSection() {
  return (
    <section id="home" className="min-h-screen pt-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center">
          <h1 className="text-6xl md:text-7xl font-bold text-gray-900 mb-8 leading-tight">
            Advance your engineering<br/>
            skills with our courses
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12">
            Build skills with our courses and mentor from world-class companies.
          </p>

          {/* Rating Display */}
          <div className="flex items-center justify-center gap-4 mb-16">
            <div className="flex items-center gap-2">
              <div className="flex -space-x-2">
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-400 to-purple-500 border-2 border-white"></div>
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-green-400 to-blue-500 border-2 border-white"></div>
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-purple-400 to-pink-500 border-2 border-white"></div>
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-orange-400 to-red-500 border-2 border-white"></div>
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-yellow-400 to-orange-500 border-2 border-white"></div>
              </div>
              <div className="ml-6">
                <div className="flex items-center gap-2">
                  <span className="text-3xl font-bold text-gray-900">4.6</span>
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                        <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
                      </svg>
                    ))}
                  </div>
                </div>
                <p className="text-sm text-gray-600">Rated by 25k on google.</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Trusted Companies Section */}
        <div className="text-center mb-12">
          <p className="text-gray-500 mb-8 text-lg">Trusted by companies of all sizes</p>
          <div className="flex flex-wrap justify-center items-center gap-16 opacity-60">
            <div className="text-3xl font-bold text-blue-600">Walmart</div>
            <div className="text-3xl font-bold text-purple-600">FedEx</div>
            <div className="text-3xl font-bold text-red-500">Airbnb</div>
            <div className="text-3xl font-bold text-orange-500">HubSpot</div>
          </div>
        </div>
      </div>
    </section>
  );
}