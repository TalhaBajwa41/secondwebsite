'use client';

import React, { useState, useEffect, useRef } from 'react';
import { 
  ArrowRight, 
  Play, 
  CheckCircle, 
  Star,
  Zap,
  Shield,
  Users,
  TrendingUp,
  Globe,
  Sparkles,
  Target,
  Award,
  ChevronDown,
  X,
  Menu,
  ArrowUpRight,
  Rocket,
  Brain,
  Heart,
  Code,
  Database,
  Smartphone
} from 'lucide-react';

// Enhanced Header with mobile menu
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/90 backdrop-blur-lg shadow-lg' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-lg flex items-center justify-center">
              <Sparkles className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              InnovaTech
            </span>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            <a href="/" className="text-gray-700 hover:text-indigo-600 transition-colors">Home</a>
            <a href="/services" className="text-gray-700 hover:text-indigo-600 transition-colors">Services</a>
            <a href="/about" className="text-gray-700 hover:text-indigo-600 transition-colors">About</a>
            <a href="/contact" className="text-gray-700 hover:text-indigo-600 transition-colors">Contact</a>
            <button className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-6 py-2 rounded-lg hover:shadow-lg transition-all duration-300 transform hover:scale-105">
              Get Started
            </button>
          </nav>

          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-16 left-0 right-0 bg-white/95 backdrop-blur-lg shadow-lg border-t">
            <div className="px-4 py-6 space-y-4">
              <a href="/" className="block text-gray-700 hover:text-indigo-600 transition-colors">Home</a>
              <a href="/services" className="block text-gray-700 hover:text-indigo-600 transition-colors">Services</a>
              <a href="/about" className="block text-gray-700 hover:text-indigo-600 transition-colors">About</a>
              <a href="/contact" className="block text-gray-700 hover:text-indigo-600 transition-colors">Contact</a>
              <button className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-6 py-3 rounded-lg hover:shadow-lg transition-all duration-300">
                Get Started
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

// Enhanced Footer
const Footer = () => (
  <footer className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white py-16">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-lg flex items-center justify-center">
              <Sparkles className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold">InnovaTech</span>
          </div>
          <p className="text-gray-400">Empowering businesses with cutting-edge digital solutions.</p>
        </div>
        
        <div className="space-y-4">
          <h4 className="font-semibold">Services</h4>
          <div className="space-y-2 text-gray-400">
            <div>Web Development</div>
            <div>Mobile Apps</div>
            <div>Cloud Solutions</div>
            <div>AI Integration</div>
          </div>
        </div>
        
        <div className="space-y-4">
          <h4 className="font-semibold">Company</h4>
          <div className="space-y-2 text-gray-400">
            <div>About Us</div>
            <div>Careers</div>
            <div>Blog</div>
            <div>Contact</div>
          </div>
        </div>
        
        <div className="space-y-4">
          <h4 className="font-semibold">Connect</h4>
          <div className="space-y-2 text-gray-400">
            <div>Twitter</div>
            <div>LinkedIn</div>
            <div>GitHub</div>
            <div>Discord</div>
          </div>
        </div>
      </div>
      
      <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
        <p>&copy; 2024 InnovaTech. All rights reserved.</p>
      </div>
    </div>
  </footer>
);

// Enhanced features with icons
const features = [
  { icon: <Zap className="w-6 h-6" />, text: "Lightning Fast Performance", color: "from-yellow-400 to-orange-500" },
  { icon: <Shield className="w-6 h-6" />, text: "Enterprise Security", color: "from-green-400 to-blue-500" },
  { icon: <Users className="w-6 h-6" />, text: "24/7 Expert Support", color: "from-purple-400 to-pink-500" },
  { icon: <TrendingUp className="w-6 h-6" />, text: "Proven Growth Results", color: "from-blue-400 to-cyan-500" },
  { icon: <Globe className="w-6 h-6" />, text: "Global Reach", color: "from-indigo-400 to-purple-500" },
  { icon: <Rocket className="w-6 h-6" />, text: "Rapid Deployment", color: "from-red-400 to-pink-500" }
];

// Enhanced stats with animations
const stats = [
  { number: 1500, label: "Projects Delivered", icon: <Target className="w-6 h-6" /> },
  { number: 98, label: "Client Satisfaction", icon: <Heart className="w-6 h-6" /> },
  { number: 24, label: "Hours Support", icon: <Users className="w-6 h-6" /> },
  { number: 150, label: "Team Members", icon: <Award className="w-6 h-6" /> }
];

// Enhanced testimonials
const testimonials = [
  {
    text: "InnovaTech transformed our entire digital infrastructure. The results exceeded every expectation we had!",
    author: "Sarah Johnson",
    role: "CEO, TechCorp",
    rating: 5,
    image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=100"
  },
  {
    text: "Working with this team was a game-changer. Their technical expertise and attention to detail is unmatched.",
    author: "Michael Chen",
    role: "CTO, InnovateCo",
    rating: 5,
    image: "https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=100"
  },
  {
    text: "Best investment we've made for our digital transformation. ROI was visible within the first month.",
    author: "Emily Rodriguez",
    role: "Founder, StartupXYZ",
    rating: 5,
    image: "https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=100"
  }
];

// Service cards data
const services = [
  {
    icon: <Code className="w-8 h-8" />,
    title: "Web Development",
    description: "Custom web applications built with modern technologies",
    color: "from-blue-500 to-cyan-500"
  },
  {
    icon: <Smartphone className="w-8 h-8" />,
    title: "Mobile Apps",
    description: "Native and cross-platform mobile applications",
    color: "from-purple-500 to-pink-500"
  },
  {
    icon: <Database className="w-8 h-8" />,
    title: "Cloud Solutions",
    description: "Scalable cloud infrastructure and deployment",
    color: "from-green-500 to-teal-500"
  },
  {
    icon: <Brain className="w-8 h-8" />,
    title: "AI Integration",
    description: "Intelligent automation and machine learning",
    color: "from-orange-500 to-red-500"
  }
];

export default function Main() {
  const [isVisible, setIsVisible] = useState(false);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const heroRef = useRef(null);

  useEffect(() => {
    setIsVisible(true);
    
    // Testimonial rotation
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100
      });
    };

    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const AnimatedCounter = ({ end, duration = 2000, suffix = "" }) => {
    const [count, setCount] = useState(0);
    const [hasStarted, setHasStarted] = useState(false);

    useEffect(() => {
      const observer = new IntersectionObserver(
        (entries) => {
          if (entries[0].isIntersecting && !hasStarted) {
            setHasStarted(true);
            const increment = end / (duration / 16);
            const timer = setInterval(() => {
              setCount(prev => {
                if (prev + increment >= end) {
                  clearInterval(timer);
                  return end;
                }
                return prev + increment;
              });
            }, 16);
          }
        },
        { threshold: 0.5 }
      );

      const element = document.getElementById(`counter-${end}`);
      if (element) observer.observe(element);

      return () => observer.disconnect();
    }, [end, duration, hasStarted]);

    return (
      <span id={`counter-${end}`}>
        {Math.floor(count)}{suffix}
      </span>
    );
  };

  const ParallaxElement = ({ children, speed = 0.5 }) => (
    <div
      style={{
        transform: `translateY(${scrollY * speed}px)`
      }}
    >
      {children}
    </div>
  );

  return (
    <div className="relative">
      <Header />
      
      <section 
        ref={heroRef}
        className="relative min-h-screen bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 text-white overflow-hidden"
        id="home"
      >
        {/* Enhanced Animated Background */}
        <div className="absolute inset-0 opacity-30">
          <div 
            className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 transform transition-transform duration-1000"
            style={{
              transform: `translate(${mousePosition.x / 30}px, ${mousePosition.y / 30}px) scale(1.1)`
            }}
          />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent_70%)]" />
          
          {/* Animated mesh gradient */}
          <div className="absolute inset-0 opacity-50">
            <div className="absolute top-0 left-0 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
            <div className="absolute top-0 right-0 w-72 h-72 bg-yellow-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-2000"></div>
            <div className="absolute bottom-0 left-0 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-4000"></div>
          </div>
        </div>

        {/* Enhanced Floating Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(30)].map((_, i) => (
            <div
              key={i}
              className="absolute animate-float"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${3 + Math.random() * 4}s`
              }}
            >
              <div className="w-2 h-2 bg-white/20 rounded-full"></div>
            </div>
          ))}
          
          {/* Geometric shapes */}
          <div className="absolute top-20 left-20 w-20 h-20 border border-white/20 rotate-45 animate-spin-slow"></div>
          <div className="absolute bottom-20 right-20 w-16 h-16 bg-gradient-to-r from-yellow-400/20 to-pink-400/20 rounded-full animate-pulse"></div>
          <div className="absolute top-1/2 left-10 w-12 h-12 bg-gradient-to-r from-green-400/20 to-blue-400/20 transform rotate-45 animate-bounce"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
            {/* Enhanced Text Content */}
            <div className={`space-y-8 transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              {/* Enhanced Badge */}
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white px-6 py-3 rounded-full text-sm border border-white/20 hover:bg-white/20 transition-all duration-300">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <Star className="w-4 h-4 text-yellow-400" />
                Trusted by 1500+ Companies Worldwide
              </div>

              {/* Enhanced Main Heading */}
              <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold leading-tight">
                <span className="block animate-fade-in-up">Transform Your</span>
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-pink-400 to-purple-400 animate-fade-in-up animation-delay-200">
                  Digital Future
                </span>
                <span className="block text-indigo-200 animate-fade-in-up animation-delay-400">
                  Today
                </span>
              </h1>

              {/* Enhanced Description */}
              <p className={`text-lg sm:text-xl text-indigo-100 max-w-xl leading-relaxed transition-all duration-1000 delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                We craft exceptional digital experiences that drive growth, engagement, and success. From concept to deployment, we're your trusted technology partner.
              </p>

              {/* Enhanced Features Grid */}
              <div className={`grid grid-cols-1 sm:grid-cols-2 gap-4 transition-all duration-1000 delay-500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                {features.map((feature, index) => (
                  <div key={index} className="group flex items-center gap-3 p-3 rounded-lg bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-all duration-300">
                    <div className={`p-2 rounded-lg bg-gradient-to-r ${feature.color} text-white transform group-hover:scale-110 transition-transform duration-300`}>
                      {feature.icon}
                    </div>
                    <span className="text-sm font-medium">{feature.text}</span>
                  </div>
                ))}
              </div>

              {/* Enhanced CTA Buttons */}
              <div className={`flex flex-col sm:flex-row gap-4 transition-all duration-1000 delay-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                <button className="group bg-white text-indigo-600 font-semibold px-8 py-4 rounded-xl hover:bg-gray-50 transition-all duration-300 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transform hover:scale-105">
                  Start Your Project
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
                <button
                  onClick={() => setIsVideoPlaying(true)}
                  className="group border-2 border-white/30 font-semibold px-8 py-4 rounded-xl hover:bg-white/10 transition-all duration-300 flex items-center justify-center gap-2 backdrop-blur-sm transform hover:scale-105"
                >
                  <Play className="w-5 h-5 group-hover:scale-110 transition-transform" />
                  Watch Our Story
                </button>
              </div>

              {/* Enhanced Social Proof */}
              <div className={`transition-all duration-1000 delay-900 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                <div className="flex items-center gap-4 mb-4">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <span className="text-sm text-indigo-200">5.0 rating from 500+ reviews</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="flex -space-x-3">
                    {testimonials.map((testimonial, i) => (
                      <img
                        key={i}
                        src={testimonial.image}
                        alt={testimonial.author}
                        className="w-10 h-10 rounded-full border-2 border-white object-cover"
                      />
                    ))}
                  </div>
                  <span className="text-sm text-indigo-200">Join 1500+ satisfied clients</span>
                </div>
              </div>
            </div>

            {/* Enhanced Visual Content */}
            <div className={`relative transition-all duration-1000 delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              <ParallaxElement speed={-0.1}>
                <div className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-500/30 to-pink-500/30 rounded-3xl blur-2xl transform group-hover:scale-110 transition-transform duration-500"></div>
                  <div className="relative bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20 shadow-2xl">
                    <img
                      src="https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=800"
                      alt="Innovation Dashboard"
                      className="rounded-2xl w-full h-auto transform group-hover:scale-105 transition-transform duration-500"
                    />
                    
                    {/* Enhanced Play Button */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <button
                        onClick={() => setIsVideoPlaying(true)}
                        className="bg-white/20 backdrop-blur-sm p-8 rounded-full hover:bg-white/30 transition-all duration-300 transform hover:scale-110 group-hover:shadow-2xl"
                      >
                        <Play className="w-12 h-12 text-white ml-1" />
                      </button>
                    </div>
                  </div>
                </div>
              </ParallaxElement>

              {/* Enhanced Floating Stats Cards */}
              <div className="absolute -top-6 -left-6 bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20 animate-float shadow-lg">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-green-500/20 rounded-lg">
                    <TrendingUp className="w-6 h-6 text-green-400" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-white">
                      <AnimatedCounter end={98} suffix="%" />
                    </div>
                    <div className="text-sm text-indigo-200">Success Rate</div>
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-6 -right-6 bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20 animate-float animation-delay-1000 shadow-lg">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-purple-500/20 rounded-lg">
                    <Rocket className="w-6 h-6 text-purple-400" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-white">
                      <AnimatedCounter end={1500} suffix="+" />
                    </div>
                    <div className="text-sm text-indigo-200">Projects</div>
                  </div>
                </div>
              </div>

              {/* Enhanced Decorative Elements */}
              <div className="absolute -top-8 -right-8 w-24 h-24 bg-gradient-to-r from-yellow-400/20 to-pink-400/20 rounded-full animate-pulse"></div>
              <div className="absolute -bottom-8 -left-8 w-20 h-20 bg-gradient-to-r from-green-400/20 to-blue-400/20 rounded-full animate-pulse animation-delay-500"></div>
              <div className="absolute top-1/2 -right-4 w-16 h-16 border-2 border-white/20 rounded-full animate-spin-slow"></div>
            </div>
          </div>

          {/* Enhanced Stats Section */}
          <div className={`mt-32 transition-all duration-1000 delay-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="group text-center">
                  <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/20 transition-all duration-300 transform hover:scale-105">
                    <div className="flex justify-center mb-3">
                      <div className="p-3 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-xl">
                        {stat.icon}
                      </div>
                    </div>
                    <div className="text-3xl sm:text-4xl font-bold text-white mb-2">
                      <AnimatedCounter end={stat.number} suffix={stat.label.includes('Satisfaction') ? '%' : '+'} />
                    </div>
                    <div className="text-indigo-200 text-sm font-medium">{stat.label}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Enhanced Testimonial Section */}
          <div className={`mt-32 text-center transition-all duration-1000 delay-1200 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">What Our Clients Say</h2>
            <p className="text-indigo-200 mb-12 max-w-2xl mx-auto">
              Don't just take our word for it. Here's what industry leaders are saying about our work.
            </p>
            
            <div className="max-w-4xl mx-auto">
              <div className="bg-white/10 backdrop-blur-sm p-8 sm:p-12 rounded-3xl border border-white/20 shadow-2xl">
                <div className="flex justify-center mb-6">
                  {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                    <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-xl sm:text-2xl text-indigo-100 mb-8 italic leading-relaxed">
                  "{testimonials[currentTestimonial].text}"
                </p>
                <div className="flex items-center justify-center gap-4">
                  <img
                    src={testimonials[currentTestimonial].image}
                    alt={testimonials[currentTestimonial].author}
                    className="w-16 h-16 rounded-full object-cover border-2 border-white/20"
                  />
                  <div>
                    <div className="font-semibold text-white text-lg">{testimonials[currentTestimonial].author}</div>
                    <div className="text-indigo-200">{testimonials[currentTestimonial].role}</div>
                  </div>
                </div>
              </div>
              
              {/* Enhanced Testimonial Indicators */}
              <div className="flex justify-center mt-8 space-x-3">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentTestimonial(index)}
                    className={`w-4 h-4 rounded-full transition-all duration-300 ${
                      index === currentTestimonial ? 'bg-white scale-110' : 'bg-white/30 hover:bg-white/50'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-6 h-6 text-white/70" />
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We offer comprehensive digital solutions tailored to your business needs
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div key={index} className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <button className="text-indigo-600 font-medium flex items-center gap-2 group-hover:gap-3 transition-all duration-300">
                  Learn More
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Video Modal */}
      {isVideoPlaying && (
        <div className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 backdrop-blur-sm" onClick={() => setIsVideoPlaying(false)}>
          <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl max-w-5xl w-full mx-4 border border-white/20">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-white text-xl font-semibold">Company Overview</h3>
              <button 
                onClick={() => setIsVideoPlaying(false)}
                className="text-white/70 hover:text-white transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            <div className="aspect-video bg-gray-800 rounded-xl flex items-center justify-center">
              <div className="text-center text-white">
                <Play className="w-16 h-16 mx-auto mb-4 opacity-50" />
                <p className="text-gray-400">Video Player Placeholder</p>
                <p className="text-sm text-gray-500 mt-2">Your promotional video would appear here</p>
              </div>
            </div>
          </div>
        </div>
      )}

      <Footer />

      <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(5deg); }
        }

        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
        }

        .animate-float {
          animation: float 4s ease-in-out infinite;
        }

        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }

        .animation-delay-200 {
          animation-delay: 200ms;
        }

        .animation-delay-400 {
          animation-delay: 400ms;
        }

        .animation-delay-500 {
          animation-delay: 500ms;
        }

        .animation-delay-1000 {
          animation-delay: 1000ms;
        }

        .animation-delay-2000 {
          animation-delay: 2000ms;
        }

        .animation-delay-4000 {
          animation-delay: 4000ms;
        }
      `}</style>
    </div>
  );
}