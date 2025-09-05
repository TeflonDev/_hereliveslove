import React from 'react';
import { GraduationCap, Code, Home, TreePine, Heart, Star, Target, Sparkles, DollarSign, MapPin, Users, Baby } from 'lucide-react';

const Dreams = () => {
  const personalDreams = [
    {
      person: 'Tony',
      title: 'IT Career Excellence',
      description: 'Building a successful career in technology and becoming a respected developer in Kenya\'s growing tech scene',
      longDescription: 'I dream of mastering full-stack development, contributing to meaningful projects, and eventually starting my own tech company. The Kenyan tech scene is booming, and I want to be part of that growth while providing for my family.',
      icon: <Code className="w-8 h-8" />,
      color: 'from-blue-400 to-indigo-500',
      bgColor: 'from-blue-50 to-indigo-50',
      goals: [
        'Complete advanced programming certifications',
        'Land a senior developer role at a top Kenyan tech company',
        'Build a portfolio of impactful projects',
        'Mentor other young developers',
        'Start a tech consultancy business'
      ],
      timeline: '2025-2027'
    },
    {
      person: 'Maggie',
      title: 'Educational Impact',
      description: 'Inspiring young minds and making a lasting difference in Kenya\'s education system',
      longDescription: 'Teaching is my passion and calling. I want to be the teacher who changes lives, who helps students believe in themselves, and who contributes to building a better Kenya through education.',
      icon: <GraduationCap className="w-8 h-8" />,
      color: 'from-emerald-400 to-teal-500',
      bgColor: 'from-emerald-50 to-teal-50',
      goals: [
        'Pursue a Master\'s degree in Education',
        'Become a head teacher at a progressive school',
        'Develop innovative teaching methods',
        'Write educational materials for Kenyan students',
        'Start an educational foundation'
      ],
      timeline: '2025-2030'
    }
  ];

  const familyDreams = [
    {
      title: 'Our Dream Home',
      description: 'A place to call our own where Miles can grow up surrounded by love and stability',
      icon: <Home className="w-12 h-12" />,
      color: 'from-purple-400 to-pink-500',
      details: [
        'A 3-bedroom house in a safe neighborhood',
        'A garden where Miles can play',
        'Space for Tony\'s home office',
        'A study corner for Maggie\'s teaching materials',
        'Room for future family growth'
      ],
      image: 'https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      title: 'Financial Freedom',
      description: 'Breaking free from the paycheck-to-paycheck cycle that affects 80% of young Kenyan families',
      icon: <DollarSign className="w-12 h-12" />,
      color: 'from-green-400 to-emerald-500',
      details: [
        'Build an emergency fund covering 6 months of expenses',
        'Start investing in the Nairobi Securities Exchange',
        'Create multiple income streams',
        'Save for Miles\' education fund',
        'Plan for early retirement'
      ],
      image: 'https://images.pexels.com/photos/3483098/pexels-photo-3483098.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      title: 'Travel & Adventures',
      description: 'Exploring Kenya and beyond, creating memories that will last a lifetime',
      icon: <MapPin className="w-12 h-12" />,
      color: 'from-orange-400 to-red-500',
      details: [
        'Visit all 47 counties in Kenya',
        'Take Miles on safari to see the Big Five',
        'Beach holidays in Malindi and Watamu',
        'International trip to Dubai or South Africa',
        'Camping adventures in the Maasai Mara'
      ],
      image: 'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      title: 'Growing Old Together',
      description: 'Building a legacy of love that will inspire generations',
      icon: <TreePine className="w-12 h-12" />,
      color: 'from-indigo-400 to-purple-500',
      details: [
        'Celebrate 50+ years of marriage',
        'Watch Miles graduate and start his own family',
        'Become the coolest grandparents ever',
        'Share our story to inspire other young couples',
        'Leave a positive impact on our community'
      ],
      image: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=800'
    }
  ];

  const milesDreams = [
    {
      title: 'Education Excellence',
      description: 'Giving Miles the best education possible in Kenya',
      goals: ['Top primary and secondary schools', 'University education', 'International exposure', 'Skills development']
    },
    {
      title: 'Character Building',
      description: 'Raising a confident, kind, and responsible young man',
      goals: ['Strong moral values', 'Leadership skills', 'Cultural pride', 'Global perspective']
    },
    {
      title: 'Future Opportunities',
      description: 'Preparing Miles for success in whatever path he chooses',
      goals: ['Career guidance', 'Entrepreneurship skills', 'Technology literacy', 'Life skills']
    }
  ];

  const challenges = [
    {
      challenge: 'High Cost of Living',
      solution: 'Multiple income streams and smart budgeting',
      progress: '60%'
    },
    {
      challenge: 'Limited Housing Options',
      solution: 'Saving for down payment and exploring affordable areas',
      progress: '30%'
    },
    {
      challenge: 'Career Growth Barriers',
      solution: 'Continuous learning and networking',
      progress: '70%'
    }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 text-white">
        <div className="container mx-auto px-6 text-center">
          <Star className="w-16 h-16 mx-auto mb-6 text-yellow-300" />
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Our Dreams & Future</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed">
            Building tomorrow, one dream at a time - the aspirations of Tony, Maggie, and Miles
          </p>
        </div>
      </section>

      {/* Personal Dreams */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-800">Individual Aspirations</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {personalDreams.map((dream, index) => (
              <div key={index} className={`p-8 bg-gradient-to-br ${dream.bgColor} rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300`}>
                <div className="flex items-center mb-6">
                  <div className={`w-16 h-16 bg-gradient-to-r ${dream.color} rounded-2xl flex items-center justify-center mr-4`}>
                    {dream.icon}
                  </div>
                  <div>
                    <span className="text-sm font-medium text-gray-500">{dream.person}</span>
                    <h3 className="text-2xl font-bold text-gray-800">{dream.title}</h3>
                  </div>
                </div>
                <p className="text-gray-600 leading-relaxed mb-6">{dream.longDescription}</p>
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-800 mb-3">Goals & Milestones:</h4>
                  <ul className="space-y-2">
                    {dream.goals.map((goal, goalIndex) => (
                      <li key={goalIndex} className="flex items-start text-sm text-gray-600">
                        <Target className="w-4 h-4 text-orange-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span>{goal}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-500">Timeline: {dream.timeline}</span>
                  <span className="px-3 py-1 bg-white/50 rounded-full font-medium">In Progress</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Family Dreams */}
      <section className="py-20 bg-gradient-to-r from-orange-100 to-rose-100">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-800">Family Dreams & Aspirations</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {familyDreams.map((dream, index) => (
              <div key={index} className="bg-white rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
                <div className="h-48 overflow-hidden">
                  <img 
                    src={dream.image} 
                    alt={dream.title}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-8">
                  <div className={`w-16 h-16 bg-gradient-to-r ${dream.color} rounded-2xl flex items-center justify-center mb-6 text-white`}>
                    {dream.icon}
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-gray-800">{dream.title}</h3>
                  <p className="text-gray-600 leading-relaxed mb-6">{dream.description}</p>
                  <ul className="space-y-2">
                    {dream.details.map((detail, detailIndex) => (
                      <li key={detailIndex} className="flex items-start text-sm text-gray-600">
                        <Sparkles className="w-4 h-4 text-pink-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Miles' Future */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <Baby className="w-16 h-16 mx-auto mb-6 text-purple-500" />
            <h2 className="text-4xl font-bold mb-4 text-gray-800">Dreams for Miles</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our hopes and aspirations for our son's bright future
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {milesDreams.map((dream, index) => (
              <div key={index} className="p-8 bg-gradient-to-br from-purple-50 to-pink-50 rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300">
                <h3 className="text-xl font-bold mb-4 text-gray-800">{dream.title}</h3>
                <p className="text-gray-600 mb-6">{dream.description}</p>
                <ul className="space-y-2">
                  {dream.goals.map((goal, goalIndex) => (
                    <li key={goalIndex} className="flex items-center text-sm text-gray-600">
                      <Heart className="w-4 h-4 text-rose-400 mr-2 flex-shrink-0" />
                      <span>{goal}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Challenges & Solutions */}
      <section className="py-20 bg-gradient-to-r from-gray-100 to-gray-200">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-800">Overcoming Challenges</h2>
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-center text-gray-600 mb-12">
              Like many young Kenyan families, we face real challenges. But we're determined to turn obstacles into opportunities.
            </p>
            <div className="space-y-6">
              {challenges.map((item, index) => (
                <div key={index} className="bg-white p-6 rounded-2xl shadow-lg">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-bold text-gray-800">{item.challenge}</h3>
                    <span className="text-sm font-medium text-orange-600">{item.progress} Complete</span>
                  </div>
                  <p className="text-gray-600 mb-4">{item.solution}</p>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-gradient-to-r from-orange-400 to-pink-500 h-2 rounded-full transition-all duration-500"
                      style={{ width: item.progress }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Vision Statement */}
      <section className="py-20 bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 text-white">
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-4xl mx-auto">
            <Star className="w-16 h-16 mx-auto mb-8 text-yellow-300" />
            <h2 className="text-4xl font-bold mb-8">Our Family Vision</h2>
            <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8">
              <p className="text-2xl leading-relaxed mb-6">
                "By 2030, we envision ourselves as a stable, loving family living in our own home, 
                with successful careers, strong financial foundation, and Miles thriving in his education. 
                We'll be an inspiration to other young Kenyan families, proving that with love, 
                determination, and hard work, dreams do come true."
              </p>
              <div className="flex items-center justify-center space-x-4 text-lg">
                <Users className="w-6 h-6" />
                <span>Together We Rise • Together We Dream • Together We Achieve</span>
                <Users className="w-6 h-6" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Dreams;