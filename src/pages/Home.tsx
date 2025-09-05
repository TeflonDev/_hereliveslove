import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, Laptop, BookOpen, Baby, MapPin, ArrowRight, Sparkles } from 'lucide-react';
import { Camera, Star } from 'react-feather';

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-orange-500 via-rose-500 to-pink-500 text-white">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative container mx-auto px-6 py-24">
          <div className="text-center max-w-4xl mx-auto">
            <div className="mb-8">
              <Heart className="w-16 h-16 mx-auto mb-4 text-orange-200 animate-pulse" />
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-orange-200 to-pink-200 bg-clip-text text-transparent">
              The Tony, Maggie & Miles Family
            </h1>
            <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-8 mb-8">
              <p className="text-2xl md:text-3xl mb-4 text-orange-100 italic">
                "Through love, chaos, and laughter — we grow together."
              </p>
              <p className="text-lg text-orange-200">
                A young Kenyan family navigating life's beautiful journey together
              </p>
            </div>
            <div className="flex items-center justify-center space-x-4 text-lg mb-8">
              <MapPin className="w-5 h-5" />
              <span>Kenya • Young Family • Building Dreams Together</span>
            </div>
            <Link
              to="/story"
              className="inline-flex items-center space-x-2 bg-white text-orange-600 px-8 py-4 rounded-full font-semibold hover:bg-orange-50 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              <span>Discover Our Journey</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Family Introduction */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-4 text-gray-800">
            Meet Our Beautiful Family
          </h2>
          <p className="text-xl text-center text-gray-600 mb-16 max-w-3xl mx-auto">
            We're a young Kenyan couple in our mid-twenties, navigating the challenges of modern life while building something beautiful together. 
            Like many young families in Kenya today, we're working hard to make ends meet in a tough economy, but our love keeps us strong.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Tony */}
            <div className="text-center p-8 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              <div className="w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden shadow-lg">
                <img 
                  src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400" 
                  alt="Tony - Young Kenyan man" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="w-20 h-20 bg-gradient-to-r from-blue-400 to-indigo-500 rounded-full flex items-center justify-center mx-auto mb-6 -mt-16 relative z-10">
                <Laptop className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-800">Tony</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                At 30, I'm passionate about technology and always learning new skills in IT. 
                Like many young Kenyan men, I'm hustling to build a better future for my family. 
                I bring innovation, determination, and yes... endless dad jokes to our home.
              </p>
              <div className="text-sm text-blue-600 font-medium">
                The Tech Enthusiast & Problem Solver
              </div>
            </div>
            
            {/* Maggie */}
            <div className="text-center p-8 bg-gradient-to-br from-emerald-50 to-teal-50 rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              <div className="w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden shadow-lg">
                <img 
                  src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=400" 
                  alt="Maggie - Young Kenyan teacher" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="w-20 h-20 bg-gradient-to-r from-emerald-400 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-6 -mt-16 relative z-10">
                <BookOpen className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-800">Maggie</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                At 26, I'm a dedicated teacher who believes in shaping young minds. 
                Teaching in Kenya comes with its challenges, but I'm passionate about making a difference. 
                I'm the heart of our family, bringing wisdom, warmth, and endless love to everything we do.
              </p>
              <div className="text-sm text-emerald-600 font-medium">
                The Educator & Heart of Our Home
              </div>
            </div>
            
            {/* Miles */}
            <div className="text-center p-8 bg-gradient-to-br from-purple-50 to-pink-50 rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              <div className="w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden shadow-lg">
                <img 
                  src="https://images.pexels.com/photos/1257110/pexels-photo-1257110.jpeg?auto=compress&cs=tinysrgb&w=400" 
                  alt="Happy toddler playing" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="w-20 h-20 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-6 -mt-16 relative z-10">
                <Baby className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-800">Miles</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Our little bundle of joy and chaos! Born in November 2021, 
                he's now 3 years old and the sunshine that lights up our world. 
                Every day with Miles is an adventure filled with laughter, learning, and lots of energy. 
                He's already showing signs of being a little genius who wants to follow in daddy's footsteps!
              </p>
              <div className="text-sm text-purple-600 font-medium">
                Our Joy & Beautiful Chaos
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Young Kenyan Couples Reality */}
      <section className="py-20 bg-gradient-to-r from-orange-100 to-rose-100">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-8 text-gray-800">
              Our Reality as Young Kenyans
            </h2>
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-lg">
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                We represent thousands of young Kenyan couples in our mid-twenties, navigating the complexities of modern life. 
                With the current economic challenges, rising costs of living, and limited opportunities, we're part of a generation 
                that's redefining what it means to build a family in Kenya today. Tony is 30 and Maggie is 26, and we met in March 2020.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-2xl">
                  <h3 className="font-bold text-gray-800 mb-3">The Hustle is Real</h3>
                  <p className="text-gray-600 text-sm">
                    Like many young Kenyans, we're juggling multiple income streams, side hustles, and dreams 
                    while trying to provide for our growing family.
                  </p>
                </div>
                <div className="bg-gradient-to-br from-emerald-50 to-teal-50 p-6 rounded-2xl">
                  <h3 className="font-bold text-gray-800 mb-3">Love Conquers All</h3>
                  <p className="text-gray-600 text-sm">
                    Despite the financial pressures and daily challenges, our love for each other 
                    and for Miles keeps us motivated and hopeful for the future.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-800">
            Explore Our Journey
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            <Link
              to="/story"
              className="group p-6 bg-gradient-to-br from-orange-50 to-red-50 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              <BookOpen className="w-12 h-12 text-orange-500 mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-bold mb-2 text-gray-800">Our Story</h3>
              <p className="text-gray-600 text-sm">From 2020 struggles to 2025 dreams</p>
            </Link>
            
            <Link
              to="/gallery"
              className="group p-6 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              <Camera className="w-12 h-12 text-blue-500 mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-bold mb-2 text-gray-800">Gallery</h3>
              <p className="text-gray-600 text-sm">Precious memories and moments</p>
            </Link>
            
            <Link
              to="/dreams"
              className="group p-6 bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              <Star className="w-12 h-12 text-purple-500 mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-bold mb-2 text-gray-800">Dreams</h3>
              <p className="text-gray-600 text-sm">Our hopes and future plans</p>
            </Link>
            
            <Link
              to="/about"
              className="group p-6 bg-gradient-to-br from-emerald-50 to-teal-50 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              <Sparkles className="w-12 h-12 text-emerald-500 mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-bold mb-2 text-gray-800">About Us</h3>
              <p className="text-gray-600 text-sm">Get to know us better</p>
            </Link>
            
            <Link
              to="/friends"
              className="group p-6 bg-gradient-to-br from-pink-50 to-rose-50 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              <Heart className="w-12 h-12 text-pink-500 mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-bold mb-2 text-gray-800">Friends</h3>
              <p className="text-gray-600 text-sm">Carol and our special places</p>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;