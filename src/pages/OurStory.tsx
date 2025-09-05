import { Heart, Users, Baby, Calendar, Home, Briefcase, DollarSign, Smile, TrendingUp } from 'lucide-react';

const OurStory = () => {
  const storyMilestones = [
    {
      year: '2020',
      title: 'Surviving Together Against All Odds',
      description: 'The year that tested our love and resilience. COVID-19 hit Kenya hard, and like millions of young Kenyans, we found ourselves jobless and uncertain about the future.',
      details: [
        'Lost our jobs during the pandemic lockdowns',
        'Started a small hustle selling items online',
        'Learned to support each other through financial stress',
        'Discovered that love truly conquers all challenges',
        'Began planning for our future family'
      ],
      image: 'https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=600',
      type: 'challenge',
      icon: <Briefcase className="w-6 h-6" />,
      color: 'from-orange-400 to-red-400',
      bgColor: 'from-orange-50 to-red-50'
    },
    {
      year: '2021',
      title: 'Miles Arrives - Our Greatest Joy!',
      description: 'November 2021 changed everything. Our son Miles came into the world, bringing with him immeasurable joy and a new sense of purpose.',
      details: [
        'Miles was born healthy and beautiful in November',
        'Became first-time parents at 23 and 22 years old',
        'Learned the true meaning of unconditional love',
        'Faced the reality of raising a child on a tight budget',
        'Found strength we never knew we had'
      ],
      image: 'https://images.pexels.com/photos/1257110/pexels-photo-1257110.jpeg?auto=compress&cs=tinysrgb&w=600',
      type: 'celebration',
      icon: <Baby className="w-6 h-6" />,
      color: 'from-blue-400 to-purple-400',
      bgColor: 'from-blue-50 to-purple-50'
    },
    {
      year: '2022-2023',
      title: 'Growing Pains & Endless Love',
      description: 'The reality of being young parents hit us. We had our fights, our struggles, but also our most beautiful moments of growth and understanding.',
      details: [
        'Navigated the challenges of new parenthood',
        'Had our fair share of arguments and misunderstandings',
        'Learned to communicate better and support each other',
        'Watched Miles take his first steps and say his first words',
        'Grew stronger as a couple through every challenge',
        'Celebrated small victories and learned from mistakes'
      ],
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=600',
      type: 'growth',
      icon: <Users className="w-6 h-6" />,
      color: 'from-green-400 to-teal-400',
      bgColor: 'from-green-50 to-teal-50'
    },
    {
      year: '2024',
      title: 'Family Bonding & Building Foundations',
      description: 'This year was about intentional family time. Random dates, spontaneous outings, and creating memories that would last a lifetime.',
      details: [
        'Started having regular date nights despite tight budgets',
        'Explored different parts of Kenya with Miles',
        'Created family traditions and inside jokes',
        'Strengthened our bond through shared experiences',
        'Began saving seriously for our future home',
        'Learned to find joy in simple moments together'
      ],
      image: 'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=600',
      type: 'joy',
      icon: <Smile className="w-6 h-6" />,
      color: 'from-pink-400 to-rose-400',
      bgColor: 'from-pink-50 to-rose-50'
    },
    {
      year: '2025',
      title: 'Building Our Future Together',
      description: 'Looking ahead with hope and determination. This is our year of stability, growth, and finally living under one roof as a complete family.',
      details: [
        'Working towards financial stability and independence',
        'Planning to move into our own family home',
        'Focusing on career growth and better opportunities',
        'Creating a stable environment for Miles to thrive',
        'Building the foundation for our long-term dreams',
        'Committed to growing old together as a family'
      ],
      image: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=600',
      type: 'future',
      icon: <Home className="w-6 h-6" />,
      color: 'from-indigo-400 to-purple-400',
      bgColor: 'from-indigo-50 to-purple-50'
    }
  ];

  const challenges = [
    {
      title: 'Economic Pressures',
      description: 'Like 70% of young Kenyans, we face daily financial challenges',
      icon: <DollarSign className="w-8 h-8" />
    },
    {
      title: 'Housing Costs',
      description: 'Rent takes up 60% of our income, making saving difficult',
      icon: <Home className="w-8 h-8" />
    },
    {
      title: 'Career Growth',
      description: 'Limited opportunities in our fields require constant hustle',
      icon: <TrendingUp className="w-8 h-8" />
    }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 text-white">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Our Story</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed">
            From 2020 struggles to 2025 dreams - the journey of Tony, Maggie, and Miles
          </p>
        </div>
      </section>

      {/* Young Kenyan Context */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold mb-6 text-gray-800">The Reality of Young Kenyan Families</h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              We're part of a generation of young Kenyan couples (average age 25-27) who are redefining what it means to build a family 
              in modern Kenya. With 67% of Kenya's population under 30, we represent the hopes, struggles, and dreams of millions.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {challenges.map((challenge, index) => (
                <div key={index} className="p-6 bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl">
                  <div className="text-orange-500 mb-4 flex justify-center">
                    {challenge.icon}
                  </div>
                  <h3 className="font-bold text-gray-800 mb-2">{challenge.title}</h3>
                  <p className="text-sm text-gray-600">{challenge.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-gradient-to-r from-orange-100 to-rose-100">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-800">
            Our Journey Through the Years
          </h2>
          <div className="max-w-6xl mx-auto">
            {storyMilestones.map((milestone, index) => (
              <div key={index} className="relative mb-16 last:mb-0">
                <div className={`flex items-start ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                  {/* Content */}
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8' : 'pl-8'}`}>
                    <div className={`p-8 rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 bg-gradient-to-br ${milestone.bgColor}`}>
                      <div className="flex items-center mb-4">
                        <div className={`p-2 rounded-lg bg-gradient-to-r ${milestone.color} text-white mr-3`}>
                          {milestone.icon}
                        </div>
                        <span className="font-bold text-2xl text-gray-700">{milestone.year}</span>
                      </div>
                      <h3 className="text-2xl font-bold mb-4 text-gray-800">{milestone.title}</h3>
                      <p className="text-gray-600 leading-relaxed mb-6">{milestone.description}</p>
                      <ul className="space-y-2">
                        {milestone.details.map((detail, detailIndex) => (
                          <li key={detailIndex} className="flex items-start text-sm text-gray-600">
                            <Heart className="w-4 h-4 text-rose-400 mr-2 mt-0.5 flex-shrink-0" />
                            <span>{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Timeline dot */}
                  <div className={`flex items-center justify-center w-20 h-20 bg-gradient-to-r ${milestone.color} rounded-full shadow-lg z-10 relative`}>
                    <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                      <Calendar className="w-4 h-4 text-gray-600" />
                    </div>
                  </div>

                  {/* Image */}
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pl-8' : 'pr-8'}`}>
                    <div className="rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                      <img 
                        src={milestone.image} 
                        alt={milestone.title}
                        className="w-full h-64 object-cover"
                      />
                    </div>
                  </div>
                </div>

                {/* Connecting line */}
                {index < storyMilestones.length - 1 && (
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-16 bg-gradient-to-b from-orange-300 to-rose-300 mt-4"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Our Journey in Numbers</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-orange-500 mb-2">5</div>
                <div className="text-gray-600">Years Together</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-500 mb-2">3</div>
                <div className="text-gray-600">Years as Parents</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-green-500 mb-2">100+</div>
                <div className="text-gray-600">Family Adventures</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-purple-500 mb-2">∞</div>
                <div className="text-gray-600">Love & Laughter</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="py-20 bg-gradient-to-r from-green-100 to-blue-100">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold mb-6 text-gray-800">Meet Tony & Maggie</h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              We are a young couple navigating the beautiful and challenging journey of parenthood and life together.
            </p>
            <div className="bg-gradient-to-br from-orange-50 to-rose-50 p-6 rounded-2xl">
              <p className="text-gray-700 mb-2">Tony is 30 years old and Maggie is 26 years old.</p>
              <p className="text-gray-700">We met in March 2020 through our amazing friend Carol, who saw something special and decided to introduce us.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OurStory;