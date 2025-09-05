import React from 'react';
import { Heart, MapPin, Calendar, Users, Briefcase, GraduationCap, Baby, Smile, Coffee, Music, Book, Gamepad2 } from 'lucide-react';

const About = () => {
  const familyStats = [
    { label: 'Years Together', value: '5+', icon: <Heart className="w-6 h-6" /> },
    { label: 'Years as Parents', value: '3', icon: <Baby className="w-6 h-6" /> },
    { label: 'Home County', value: 'Nairobi', icon: <MapPin className="w-6 h-6" /> },
    { label: 'Family Adventures', value: '100+', icon: <Users className="w-6 h-6" /> },
  ];

  const tonyFacts = [
    { icon: <Briefcase className="w-5 h-5" />, label: 'Profession', value: 'IT Enthusiast & Developer' },
    { icon: <Calendar className="w-5 h-5" />, label: 'Age', value: '26 years old' },
    { icon: <Gamepad2 className="w-5 h-5" />, label: 'Hobbies', value: 'Gaming, Coding, Tech Reviews' },
    { icon: <Coffee className="w-5 h-5" />, label: 'Fuel', value: 'Coffee and Dad Jokes' },
  ];

  const maggieFacts = [
    { icon: <GraduationCap className="w-5 h-5" />, label: 'Profession', value: 'Primary School Teacher' },
    { icon: <Calendar className="w-5 h-5" />, label: 'Age', value: '25 years old' },
    { icon: <Book className="w-5 h-5" />, label: 'Hobbies', value: 'Reading, Teaching, Crafts' },
    { icon: <Heart className="w-5 h-5" />, label: 'Passion', value: 'Shaping Young Minds' },
  ];

  const milesFacts = [
    { icon: <Baby className="w-5 h-5" />, label: 'Age', value: '3 years old (Born Nov 2021)' },
    { icon: <Smile className="w-5 h-5" />, label: 'Personality', value: 'Energetic & Curious' },
    { icon: <Music className="w-5 h-5" />, label: 'Loves', value: 'Dancing, Cartoons, Playing' },
    { icon: <Users className="w-5 h-5" />, label: 'Superpower', value: 'Making Everyone Smile' },
  ];

  const relationshipMilestones = [
    { year: '2019', event: 'Tony and Maggie met and fell in love' },
    { year: '2020', event: 'Survived COVID together, started planning future' },
    { year: '2021', event: 'Got married and welcomed Miles in November' },
    { year: '2022', event: 'First year of parenthood - challenging but beautiful' },
    { year: '2023', event: 'Found our rhythm as a family of three' },
    { year: '2024', event: 'Strengthening bonds through intentional family time' },
    { year: '2025', event: 'Working towards our dream home and stability' },
  ];

  const funFacts = [
    'Tony proposed to Maggie during a sunset at Uhuru Park',
    'Miles said "Dada" (sister in Swahili) before "Mama" or "Papa"',
    'Our first date was at a local nyama choma joint',
    'Maggie is the better cook, but Tony makes the best tea',
    'Miles has visited 5 Kenyan counties already',
    'We have a tradition of Sunday family walks',
    'Tony still gets nervous when Maggie drives',
    'Our favorite family meal is ugali, sukuma wiki, and chicken'
  ];

  const challenges = [
    {
      title: 'Financial Pressures',
      description: 'Like 75% of young Kenyan families, we face daily financial challenges with rising costs of living.',
      solution: 'We\'ve learned to budget carefully, find creative income sources, and prioritize what truly matters.'
    },
    {
      title: 'Work-Life Balance',
      description: 'Balancing careers, parenting, and relationship while both working demanding jobs.',
      solution: 'We schedule quality time together and support each other\'s career goals while prioritizing family.'
    },
    {
      title: 'Housing Situation',
      description: 'Currently renting and dreaming of our own home - a common struggle for young Kenyan couples.',
      solution: 'Saving diligently and exploring affordable housing options while building our credit history.'
    }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-emerald-600 via-teal-600 to-blue-500 text-white">
        <div className="container mx-auto px-6 text-center">
          <Users className="w-16 h-16 mx-auto mb-6 text-emerald-200" />
          <h1 className="text-5xl md:text-6xl font-bold mb-6">About Our Family</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed">
            Get to know the real Tony, Maggie, and Miles - beyond the photos and stories
          </p>
        </div>
      </section>

      {/* Family Stats */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {familyStats.map((stat, index) => (
              <div key={index} className="text-center p-6 bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl">
                <div className="text-orange-500 mb-3 flex justify-center">
                  {stat.icon}
                </div>
                <div className="text-3xl font-bold text-gray-800 mb-1">{stat.value}</div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Individual Profiles */}
      <section className="py-20 bg-gradient-to-r from-orange-100 to-rose-100">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-800">Meet Each of Us</h2>
          
          {/* Tony */}
          <div className="max-w-6xl mx-auto mb-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1">
                <div className="bg-white p-8 rounded-3xl shadow-lg">
                  <h3 className="text-3xl font-bold mb-6 text-gray-800 flex items-center">
                    <Briefcase className="w-8 h-8 text-blue-500 mr-3" />
                    Tony Teflon
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    I'm a 26-year-old tech enthusiast who believes in the power of technology to transform lives. 
                    Growing up in Kenya, I've seen how innovation can create opportunities, and I'm passionate about 
                    being part of that change. When I'm not coding or learning new technologies, I'm probably 
                    making dad jokes that make Maggie roll her eyes and Miles giggle.
                  </p>
                  <div className="space-y-3">
                    {tonyFacts.map((fact, index) => (
                      <div key={index} className="flex items-center text-gray-600">
                        <div className="text-blue-500 mr-3">{fact.icon}</div>
                        <span className="font-medium mr-2">{fact.label}:</span>
                        <span>{fact.value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="order-1 lg:order-2">
                <div className="rounded-3xl overflow-hidden shadow-lg">
                  <img 
                    src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=600" 
                    alt="Tony - Young Kenyan tech enthusiast"
                    className="w-full h-96 object-cover"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Maggie */}
          <div className="max-w-6xl mx-auto mb-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="rounded-3xl overflow-hidden shadow-lg">
                  <img 
                    src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=600" 
                    alt="Maggie - Young Kenyan teacher"
                    className="w-full h-96 object-cover"
                  />
                </div>
              </div>
              <div>
                <div className="bg-white p-8 rounded-3xl shadow-lg">
                  <h3 className="text-3xl font-bold mb-6 text-gray-800 flex items-center">
                    <GraduationCap className="w-8 h-8 text-emerald-500 mr-3" />
                    Maggie
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    I'm a 25-year-old primary school teacher who believes that education is the key to transforming 
                    Kenya's future. Every day, I have the privilege of shaping young minds and inspiring the next 
                    generation. Teaching isn't just my job - it's my calling. I love seeing that spark of understanding 
                    in a child's eyes when they grasp a new concept.
                  </p>
                  <div className="space-y-3">
                    {maggieFacts.map((fact, index) => (
                      <div key={index} className="flex items-center text-gray-600">
                        <div className="text-emerald-500 mr-3">{fact.icon}</div>
                        <span className="font-medium mr-2">{fact.label}:</span>
                        <span>{fact.value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Miles */}
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1">
                <div className="bg-white p-8 rounded-3xl shadow-lg">
                  <h3 className="text-3xl font-bold mb-6 text-gray-800 flex items-center">
                    <Baby className="w-8 h-8 text-purple-500 mr-3" />
                    Miles
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    Our little bundle of energy and joy! At 3 years old, Miles is curious about everything, 
                    loves to dance to any music he hears, and has an infectious laugh that brightens our 
                    darkest days. He's learning Swahili and English simultaneously, and his favorite word 
                    is "why?" - which he asks about everything!
                  </p>
                  <div className="space-y-3">
                    {milesFacts.map((fact, index) => (
                      <div key={index} className="flex items-center text-gray-600">
                        <div className="text-purple-500 mr-3">{fact.icon}</div>
                        <span className="font-medium mr-2">{fact.label}:</span>
                        <span>{fact.value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="order-1 lg:order-2">
                <div className="rounded-3xl overflow-hidden shadow-lg">
                  <img 
                    src="https://images.pexels.com/photos/1257110/pexels-photo-1257110.jpeg?auto=compress&cs=tinysrgb&w=600" 
                    alt="Happy toddler Miles playing"
                    className="w-full h-96 object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Relationship Timeline */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-800">Our Love Story Timeline</h2>
          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {relationshipMilestones.map((milestone, index) => (
                <div key={index} className="flex items-center">
                  <div className="w-20 h-20 bg-gradient-to-r from-orange-400 to-pink-500 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg">
                    {milestone.year}
                  </div>
                  <div className="ml-8 p-6 bg-gradient-to-r from-orange-50 to-pink-50 rounded-2xl flex-1 shadow-lg">
                    <p className="text-gray-700 text-lg">{milestone.event}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Fun Facts */}
      <section className="py-20 bg-gradient-to-r from-blue-100 to-purple-100">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-800">Fun Family Facts</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {funFacts.map((fact, index) => (
              <div key={index} className="p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                <div className="flex items-start">
                  <Smile className="w-6 h-6 text-yellow-500 mr-3 mt-1 flex-shrink-0" />
                  <p className="text-gray-700">{fact}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Challenges & Growth */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-800">Real Talk: Our Challenges</h2>
          <p className="text-xl text-center text-gray-600 mb-12 max-w-3xl mx-auto">
            We believe in being authentic about our journey. Like many young Kenyan families, we face real challenges, 
            but we're committed to growing through them together.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {challenges.map((challenge, index) => (
              <div key={index} className="p-8 bg-gradient-to-br from-gray-50 to-gray-100 rounded-3xl shadow-lg">
                <h3 className="text-xl font-bold mb-4 text-gray-800">{challenge.title}</h3>
                <p className="text-gray-600 mb-4 text-sm">{challenge.description}</p>
                <div className="border-t pt-4">
                  <p className="text-sm text-green-600 font-medium">Our Approach:</p>
                  <p className="text-sm text-gray-600 mt-1">{challenge.solution}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact/Connect */}
      <section className="py-20 bg-gradient-to-r from-orange-500 via-pink-500 to-purple-500 text-white">
        <div className="container mx-auto px-6 text-center">
          <Heart className="w-16 h-16 mx-auto mb-8 text-orange-200" />
          <h2 className="text-4xl font-bold mb-6">Thank You for Being Part of Our Journey</h2>
          <p className="text-xl max-w-3xl mx-auto leading-relaxed mb-8">
            This website is our way of documenting and celebrating our beautiful, chaotic, love-filled life. 
            We hope our story inspires other young Kenyan families to keep dreaming, keep loving, and keep growing together.
          </p>
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 max-w-2xl mx-auto">
            <p className="text-lg italic">
              "Through love, chaos, and laughter — we grow together."
            </p>
            <p className="text-sm mt-2 text-orange-200">- The Tony, Maggie & Miles Family</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;