import { Star } from 'lucide-react';

// Data for the trusted companies marquee
const trustedCompanies = [
  { name: 'Walmart', color: 'text-blue-600' },
  { name: 'FedEx', color: 'text-purple-600' },
  { name: 'Airbnb', color: 'text-red-500' },
  { name: 'HubSpot', color: 'text-orange-500' },
  { name: 'Google', color: 'text-green-500' },
  { name: 'Amazon', color: 'text-yellow-500' },
  { name: 'Netflix', color: 'text-red-600' },
  { name: 'Tesla', color: 'text-rose-500' },
  { name: 'Adobe', color: 'text-rose-700' },
  { name: 'Spotify', color: 'text-emerald-500' },
];

export default function HeroSection() {
  return (
    <section id="home" className="min-h-screen pt-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center">
          <h1 className="text-6xl md:text-7xl font-bold text-gray-900 mb-8 leading-tight">
            Advance your engineering
            <br />
            skills with our courses
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12">
            Build skills with our courses and guidance from mentors at
            world-class companies.
          </p>

          {/* Rating Display */}
          <div className="flex items-center justify-center gap-4 mb-16">
            <div className="flex -space-x-4">
              <img
                className="w-12 h-12 rounded-full border-2 border-white"
                src="https://randomuser.me/api/portraits/women/12.jpg"
                alt="User 1"
              />
              <img
                className="w-12 h-12 rounded-full border-2 border-white"
                src="https://randomuser.me/api/portraits/men/32.jpg"
                alt="User 2"
              />
              <img
                className="w-12 h-12 rounded-full border-2 border-white"
                src="https://randomuser.me/api/portraits/women/45.jpg"
                alt="User 3"
              />
            </div>
            <div className="text-left">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>
              <p className="text-sm text-gray-600">From 10k+ happy students</p>
            </div>
          </div>
        </div>

        {/* Trusted Companies Section */}
        <div className="text-center">
          <p className="text-gray-500 mb-8 text-lg">
            ✨ Trusted by companies of all sizes
          </p>
          <div className="relative overflow-hidden group">
            <div className="flex gap-16 animate-marquee group-hover:pause whitespace-nowrap">
              {/* Render the list twice for a seamless scroll effect */}
              {[...trustedCompanies, ...trustedCompanies].map(
                (company, index) => (
                  <div
                    key={index}
                    className={`text-3xl font-bold ${company.color} min-w-[160px]`}
                  >
                    {company.name}
                  </div>
                )
              )}
            </div>
          </div>
        </div>
      </div>

      {/* CSS for the marquee animation */}
      <style>
        {`
          @keyframes marquee {
            0% { transform: translateX(0%); }
            100% { transform: translateX(-50%); }
          }
          .animate-marquee {
            animation: marquee 30s linear infinite;
          }
          .group:hover .animate-marquee {
            animation-play-state: paused;
          }
        `}
      </style>
    </section>
  );
}