import React, { useState } from 'react';
import { Search, Menu, Play, ArrowRight, ArrowUpRight, Facebook, Youtube, Instagram, Phone, Send, MessageCircle } from 'lucide-react';

export default function PixaveWebsite() {
  const [menuOpen, setMenuOpen] = useState(false);

  const partners = [
    'SAMTIV', 'IEA.', 'SLAVICA', 'UNICA', 'BOXING', 'Niscala.io'
  ];

  const services = [
    {
      icon: '🟧',
      title: 'Visual Identity Design',
      description: 'We create a cohesive visual identity that represents your brand.',
      color: 'orange'
    },
    {
      icon: '🟦',
      title: 'Event Branding & Design',
      description: 'Make events unforgettable with cohesive branding and creative visuals.',
      color: 'blue',
      featured: true
    },
    {
      icon: '🟪',
      title: 'Creative Consultation',
      description: 'Our experts provide insights to elevate your projects and strategy.',
      color: 'purple'
    }
  ];

  const experts = [
    { name: 'Ethan Mitchell', role: 'Brand Strategist', color: 'purple' },
    { name: 'Lily Turner', role: 'Influencer Relations Manager', color: 'purple' },
    { name: 'Owen Campbell', role: 'Growth Hacker', color: 'orange' }
  ];

  const projects = [
    { title: '3D Motion Event Design', year: '2025' },
    { title: 'Mascot Visual Identity', year: '2025', color: 'purple' },
    { title: 'Visual Identity Design', year: '2025' },
    { title: 'Event Branding', year: '2025' }
  ];

  const testimonials = [
    { name: 'Emily R.', role: 'Designer', quote: 'Their creativity and attention to detail gave us a fresh, modern look that truly represents who we are. The results exceeded our expectations!' },
    { name: 'Mark L.', role: 'Freelancer', quote: 'Their creativity and attention to detail gave us a fresh, modern look that truly represents who we are. The results exceeded our expectations!' },
    { name: 'Emily R.', role: 'Designer', quote: 'Their creativity and attention to detail gave us a fresh, modern look that truly represents who we are. The results exceeded our expectations!' }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 bg-white z-50 px-6 py-4 shadow-sm">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-8">
            <button onClick={() => setMenuOpen(!menuOpen)} className="flex items-center gap-2 text-sm">
              <Menu size={20} />
              <span>Menu</span>
            </button>
            <div className="flex items-center gap-2 text-sm">
              <span>Reserve Now</span>
              <Search size={18} />
              <span className="ml-2">🌐</span>
            </div>
          </div>
          
          <div className="text-2xl font-bold">
            Pix<span className="text-orange-500">A</span>ve
          </div>
          
          <div className="flex items-center gap-4">
            <button className="text-sm">Sign Up</button>
            <button className="bg-gray-900 text-white px-6 py-2 rounded-full text-sm">Login</button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left side - Graphic */}
            <div className="relative">
              <div className="absolute top-0 left-12">
                <div className="text-purple-600 text-sm font-semibold mb-1">125K+</div>
                <div className="text-xs text-gray-600">Recently joined</div>
              </div>
              <div className="flex justify-center items-center mt-20">
                <div className="relative">
                  <div className="w-64 h-80 bg-gray-300 rounded-3xl transform rotate-6"></div>
                  <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-pink-500 to-transparent rounded-t-3xl"></div>
                  <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-cyan-400 to-transparent rounded-b-3xl"></div>
                </div>
              </div>
              <div className="flex gap-2 mt-8 justify-center">
                <div className="w-3 h-3 rounded-full bg-gray-300"></div>
                <div className="w-3 h-3 rounded-full bg-gray-300"></div>
                <div className="w-3 h-3 rounded-full bg-gray-400"></div>
                <ArrowRight className="ml-2 text-gray-400" size={16} />
              </div>
            </div>

            {/* Right side - Content */}
            <div>
              <div className="mb-6">
                <div className="text-sm font-semibold mb-2">Imagination</div>
                <div className="text-sm font-semibold">Meets Execution.</div>
              </div>
              
              <h1 className="text-6xl lg:text-7xl font-bold mb-8">
                Innovation<br />
                Starts <span className="relative">
                  <span className="text-purple-600">Here.</span>
                  <div className="absolute inset-0 border-2 border-purple-600 rounded"></div>
                </span>
              </h1>

              <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-full flex items-center gap-2 mb-8 transition-colors">
                Let's Collaborate!
                <div className="bg-white rounded-full p-2">
                  <Play size={16} className="text-orange-500" fill="currentColor" />
                </div>
              </button>

              <p className="text-gray-600 max-w-md">
                Your brand's journey to creativity begins with us, where ideas become masterpieces.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Partners Marquee */}
      <section className="py-8 border-y border-gray-200 overflow-hidden bg-gray-50">
        <div className="flex gap-16 animate-marquee whitespace-nowrap">
          {[...partners, ...partners].map((partner, idx) => (
            <span key={idx} className="text-2xl font-light text-gray-400">{partner}</span>
          ))}
        </div>
      </section>

      {/* Creativity Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <span className="text-sm">✏️ Events</span>
              </div>
              <p className="text-gray-600">
                A bold statement about making brands stand out in a crowded market.
              </p>
            </div>
            <div>
              <h2 className="text-5xl font-bold mb-6">
                Creativity and strategy help your brand stand out.
                <span className="inline-block ml-4 w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                  <ArrowUpRight className="text-purple-600" size={24} />
                </span>
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            <div className="w-full h-80 bg-gray-300 rounded-3xl"></div>
            <div>
              <h3 className="text-2xl font-bold mb-4">Redefining the Ordinary</h3>
              <p className="text-gray-600 mb-6">
                We transform everyday ideas into extraordinary creative solutions that captivate audiences and elevate brands.
              </p>
              <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-full flex items-center gap-2 transition-colors">
                Contact Us
                <ArrowRight size={18} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* What We Make Possible */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl font-bold text-center mb-16">What We Make<br />Possible</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 relative">
            {services.map((service, idx) => (
              <div 
                key={idx} 
                className={`${service.featured ? 'bg-gray-900 text-white transform -rotate-3 scale-105 z-10' : 'bg-white border border-gray-200'} p-8 rounded-3xl ${idx === 0 ? 'border-orange-500 border-2' : ''} ${idx === 2 ? 'border-purple-500 border-2' : ''}`}
              >
                <div className={`text-4xl mb-4 ${service.featured ? 'text-blue-400' : service.color === 'orange' ? 'text-orange-500' : 'text-purple-600'}`}>
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold mb-4">{service.title}</h3>
                <p className={`${service.featured ? 'text-gray-300' : 'text-gray-600'}`}>
                  {service.description}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-full inline-flex items-center gap-2 transition-colors">
              View More
              <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </section>

      {/* Meet Our Expert */}
      <section className="py-20 px-6 border-4 border-blue-500 mx-6 rounded-3xl my-20">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-start mb-12">
            <h2 className="text-5xl font-bold">Meet Our<br />Expert</h2>
            <div>
              <p className="text-gray-600 mb-4 max-w-md">
                Combining artistic flair with strategic insight to create impactful branding that resonates with your audience.
              </p>
              <button className="text-sm underline flex items-center gap-2">
                Explore more
                <ArrowUpRight size={16} />
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {experts.map((expert, idx) => (
              <div key={idx} className="relative">
                <div className="w-full h-80 bg-gray-300 rounded-3xl mb-4"></div>
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-bold text-lg">{expert.name}</h3>
                    <p className="text-purple-600 text-sm">{expert.role}</p>
                  </div>
                  <button className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-50 transition-colors">
                    <ArrowUpRight size={18} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Latest Chapters */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-5xl font-bold">The Latest Chapters in<br />Our Creative Journey</h2>
            <div className="flex gap-4">
              <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-full flex items-center gap-2 transition-colors">
                Contact me
                <ArrowRight size={18} />
              </button>
              <button className="bg-purple-100 hover:bg-purple-200 text-purple-600 px-8 py-3 rounded-full transition-colors">
                View All
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {projects.map((project, idx) => (
              <div key={idx}>
                <div className="w-full h-64 bg-gray-300 rounded-3xl mb-4"></div>
                <h3 className={`font-bold mb-1 ${project.color === 'purple' ? 'text-purple-600' : ''}`}>
                  {project.title}
                </h3>
                <p className={`text-sm ${project.color === 'purple' ? 'text-purple-600' : 'text-gray-600'}`}>
                  Year, {project.year}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl font-bold text-center mb-16">
            Your Story, Our Creativity,<br />Unstoppable Impact.
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="w-full h-96 bg-gray-300 rounded-3xl"></div>
            <div className="space-y-12">
              <div>
                <div className="text-6xl font-bold">
                  998<span className="text-purple-600">M+</span>
                </div>
                <p className="text-gray-600 mt-2">Project Finished</p>
              </div>
              <div className="w-full h-96 bg-gray-300 rounded-3xl"></div>
            </div>
          </div>

          <div className="text-center mt-16">
            <div className="text-6xl font-bold">
              590<span className="text-purple-600">K+</span>
            </div>
            <p className="text-gray-600 mt-2">Happy Client</p>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-sm text-gray-600 mb-2">Testimonial</p>
            <h2 className="text-5xl font-bold">What They Say About</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, idx) => (
              <div key={idx} className="bg-white rounded-3xl p-8 border border-gray-200">
                {idx === 1 && (
                  <div className="text-6xl text-gray-200 mb-4">"</div>
                )}
                <div className="w-full h-48 bg-gray-300 rounded-2xl mb-6"></div>
                <p className="text-gray-600 mb-6">{testimonial.quote}</p>
                <div>
                  <h4 className="font-bold">{testimonial.name}</h4>
                  <p className="text-gray-600 text-sm">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white py-12 px-6 border-t border-gray-200">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            <div>
              <div className="text-2xl font-bold mb-6">
                Pix<span className="text-orange-500">A</span>ve
              </div>
            </div>

            <div>
              <h4 className="font-bold mb-4">Support</h4>
              <ul className="space-y-2 text-gray-600">
                <li>Documentation</li>
                <li>Contact</li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-600">
                <li>About Us</li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4">Legal</h4>
              <ul className="space-y-2 text-gray-600">
                <li>Privacy</li>
                <li>Terms</li>
                <li>Partners</li>
              </ul>
            </div>
          </div>

          <div className="flex justify-between items-center pt-8 border-t border-gray-200">
            <div className="flex gap-4">
              <p className="text-sm text-gray-600">Follow us</p>
              <div className="flex gap-3">
                <button className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-50 transition-colors">
                  <Facebook size={18} />
                </button>
                <button className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-50 transition-colors">
                  <span>G+</span>
                </button>
                <button className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-50 transition-colors">
                  <Instagram size={18} />
                </button>
                <button className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-50 transition-colors">
                  <Youtube size={18} />
                </button>
              </div>
            </div>

            <div className="flex gap-4">
              <p className="text-sm text-gray-600">Let's chat</p>
              <div className="flex gap-3">
                <button className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-50 transition-colors">
                  <Phone size={18} />
                </button>
                <button className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-50 transition-colors">
                  <Send size={18} />
                </button>
                <button className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-50 transition-colors">
                  <MessageCircle size={18} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </footer>

      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-marquee {
          animation: marquee 20s linear infinite;
        }
      `}</style>
    </div>
  );
}
