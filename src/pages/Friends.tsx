import React from 'react';
import { FolderHeart, Heart, MapPin, Calendar, Smile, Coffee, Gift, Users, Star } from 'lucide-react';

const Friends = () => {
  const placesVisited = [
    {
      name: 'Bluepost Hotel',
      description: 'One of our favorite spots for family outings and special occasions',
      image: 'https://images.pexels.com/photos/338504/pexels-photo-338504.jpeg?auto=compress&cs=tinysrgb&w=800',
      memories: 'Great food, beautiful gardens, and perfect for family photos'
    },
    {
      name: 'Spoonzoom Restaurant',
      description: 'Delicious meals and cozy atmosphere for date nights',
      image: 'https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg?auto=compress&cs=tinysrgb&w=800',
      memories: 'Amazing local cuisine and friendly service'
    },
    {
      name: 'Society Stores Thika',
      description: 'Where our love story truly began over blackforest cake',
      image: 'https://images.pexels.com/photos/1126728/pexels-photo-1126728.jpeg?auto=compress&cs=tinysrgb&w=800',
      memories: 'Our first "not-really-a-date" that changed everything'
    },
    {
      name: 'Juja Farm',
      description: 'Funky bumpy New Year\'s ride to visit our aunt',
      image: 'https://images.pexels.com/photos/1595104/pexels-photo-1595104.jpeg?auto=compress&cs=tinysrgb&w=800',
      memories: 'Adventurous journey that brought us closer together'
    },
    {
      name: 'Taji Gardens',
      description: 'Beautiful gardens perfect for family walks and relaxation',
      image: 'https://images.pexels.com/photos/1061640/pexels-photo-1061640.jpeg?auto=compress&cs=tinysrgb&w=800',
      memories: 'Peaceful moments surrounded by nature'
    },
    {
      name: 'Delmote Shop',
      description: 'Our go-to spot for fresh juices and small treats',
      image: 'https://images.pexels.com/photos/1092730/pexels-photo-1092730.jpeg?auto=compress&cs=tinysrgb&w=800',
      memories: 'Simple pleasures and refreshing drinks'
    }
  ];

  const strengths = {
    tony: [
      'Problem-solving and technical skills',
      'Great sense of humor and dad jokes',
      'Determined and hardworking',
      'Tech-savvy and innovative thinking',
      'Protective and caring father'
    ],
    maggie: [
      'Excellent communication and teaching skills',
      'Patient and nurturing personality',
      'Strong organizational abilities',
      'Empathetic and understanding',
      'Great at managing household finances'
    ]
  };

  const weaknesses = {
    tony: [
      'Sometimes gets too focused on work',
      'Can be stubborn about tech solutions',
      'Procrastinates on household chores',
      'Overthinks simple decisions',
      'Not great at remembering dates'
    ],
    maggie: [
      'Can be overly critical of herself',
      'Sometimes worries too much about Miles',
      'Tends to take on too many responsibilities',
      'Gets stressed about financial planning',
      'Has trouble saying no to helping others'
    ]
  };

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-pink-500 via-rose-500 to-orange-500 text-white">
        <div className="container mx-auto px-6 text-center">
          <FolderHeart className="w-16 h-16 mx-auto mb-6 text-pink-200" />
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Friends & Places</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed">
            The people who brought us together and the places that shaped our love story
          </p>
        </div>
      </section>

      {/* Carol - Our Matchmaker */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <Heart className="w-12 h-12 mx-auto mb-6 text-rose-500" />
            <h2 className="text-4xl font-bold mb-6 text-gray-800">Meet Carol - Our Cupid</h2>
            <p className="text-xl text-gray-600 leading-relaxed mb-8">
              Every love story has a hero behind the scenes. For us, that hero is Carol - our favorite friend 
              and the amazing person who brought Tony and Maggie together.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div className="order-2 lg:order-1">
              <div className="bg-gradient-to-br from-rose-50 to-pink-50 p-8 rounded-3xl shadow-lg">
                <h3 className="text-3xl font-bold mb-6 text-gray-800 flex items-center">
                  <FolderHeart className="w-8 h-8 text-rose-500 mr-3" />
                  Carol - The Matchmaker
                </h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  Carol is that special friend who sees connections before anyone else does. In March 2020, 
                  she had this brilliant idea to introduce Tony and Maggie. Little did she know she was 
                  about to create a beautiful love story that would lead to marriage and the birth of Miles.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <Star className="w-5 h-5 text-yellow-500 mr-3 mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-800">The Introduction</h4>
                      <p className="text-gray-600 text-sm">Carol saw something special in both Tony and Maggie and knew they'd be perfect together</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Heart className="w-5 h-5 text-rose-500 mr-3 mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-800">Our Favorite Friend</h4>
                      <p className="text-gray-600 text-sm">Carol remains our closest friend and Miles' honorary aunt</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Smile className="w-5 h-5 text-blue-500 mr-3 mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-800">Always There</h4>
                      <p className="text-gray-600 text-sm">Through all our ups and downs, Carol has been our biggest supporter</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <div className="rounded-3xl overflow-hidden shadow-lg">
                <img 
                  src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=600" 
                  alt="Carol - Our amazing friend and matchmaker"
                  className="w-full h-96 object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our First Date Story */}
      <section className="py-20 bg-gradient-to-r from-orange-100 to-rose-100">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">Our First "Not-Really-A-Date" Date</h2>
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-lg">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div>
                  <img 
                    src="https://images.pexels.com/photos/1126728/pexels-photo-1126728.jpeg?auto=compress&cs=tinysrgb&w=600" 
                    alt="Blackforest cake at Society Stores Thika"
                    className="w-full h-64 object-cover rounded-2xl shadow-lg"
                  />
                </div>
                <div>
                  <Coffee className="w-12 h-12 text-orange-500 mb-4" />
                  <h3 className="text-2xl font-bold mb-4 text-gray-800">Society Stores Thika</h3>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    It wasn't supposed to be a date at all! We just happened to be in the same area and Tony suggested, 
                    "By the way, want to grab some blackforest cake at Society Stores?" 
                  </p>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    What started as a casual "by the way" moment turned into hours of conversation, laughter, 
                    and the beginning of something beautiful. That slice of blackforest cake became the sweetest 
                    start to our love story.
                  </p>
                  <div className="bg-gradient-to-r from-orange-50 to-rose-50 p-4 rounded-lg">
                    <p className="text-sm text-gray-600 italic">
                      "Sometimes the best love stories start with the most casual invitations. 
                      Our 'by the way' became our 'forever and always.'"
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Places We've Visited */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-800">Places That Hold Our Hearts</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {placesVisited.map((place, index) => (
              <div key={index} className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
                <div className="h-48 overflow-hidden">
                  <img 
                    src={place.image} 
                    alt={place.name}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center mb-3">
                    <MapPin className="w-5 h-5 text-orange-500 mr-2" />
                    <h3 className="text-xl font-bold text-gray-800">{place.name}</h3>
                  </div>
                  <p className="text-gray-600 mb-4 text-sm">{place.description}</p>
                  <div className="bg-white/50 p-3 rounded-lg">
                    <p className="text-xs text-gray-500 italic">{place.memories}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Strengths and Weaknesses */}
      <section className="py-20 bg-gradient-to-r from-blue-100 to-purple-100">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-800">Our Strengths & Areas for Growth</h2>
          <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
            We believe in being honest about who we are - both our strengths and the areas where we're still growing. 
            This transparency helps us support each other better.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Tony */}
            <div className="space-y-8">
              <div className="text-center">
                <h3 className="text-3xl font-bold text-gray-800 mb-2">Tony</h3>
                <p className="text-gray-600">30 years old • Tech Enthusiast • Dad</p>
              </div>

              <div className="bg-white p-6 rounded-3xl shadow-lg">
                <h4 className="text-xl font-bold text-green-600 mb-4 flex items-center">
                  <Star className="w-5 h-5 mr-2" />
                  Strengths
                </h4>
                <ul className="space-y-2">
                  {strengths.tony.map((strength, index) => (
                    <li key={index} className="flex items-start text-gray-600">
                      <div className="w-2 h-2 bg-green-400 rounded-full mr-3 mt-2"></div>
                      <span className="text-sm">{strength}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-white p-6 rounded-3xl shadow-lg">
                <h4 className="text-xl font-bold text-orange-600 mb-4 flex items-center">
                  <Users className="w-5 h-5 mr-2" />
                  Areas for Growth
                </h4>
                <ul className="space-y-2">
                  {weaknesses.tony.map((weakness, index) => (
                    <li key={index} className="flex items-start text-gray-600">
                      <div className="w-2 h-2 bg-orange-400 rounded-full mr-3 mt-2"></div>
                      <span className="text-sm">{weakness}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Maggie */}
            <div className="space-y-8">
              <div className="text-center">
                <h3 className="text-3xl font-bold text-gray-800 mb-2">Maggie</h3>
                <p className="text-gray-600">26 years old • Teacher • Mom</p>
              </div>

              <div className="bg-white p-6 rounded-3xl shadow-lg">
                <h4 className="text-xl font-bold text-green-600 mb-4 flex items-center">
                  <Star className="w-5 h-5 mr-2" />
                  Strengths
                </h4>
                <ul className="space-y-2">
                  {strengths.maggie.map((strength, index) => (
                    <li key={index} className="flex items-start text-gray-600">
                      <div className="w-2 h-2 bg-green-400 rounded-full mr-3 mt-2"></div>
                      <span className="text-sm">{strength}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-white p-6 rounded-3xl shadow-lg">
                <h4 className="text-xl font-bold text-orange-600 mb-4 flex items-center">
                  <Users className="w-5 h-5 mr-2" />
                  Areas for Growth
                </h4>
                <ul className="space-y-2">
                  {weaknesses.maggie.map((weakness, index) => (
                    <li key={index} className="flex items-start text-gray-600">
                      <div className="w-2 h-2 bg-orange-400 rounded-full mr-3 mt-2"></div>
                      <span className="text-sm">{weakness}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Miles - The Genius Kid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-8 text-gray-800">Miles - Our Little Genius</h2>
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-8 rounded-3xl shadow-lg">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div>
                  <img 
                    src="https://images.pexels.com/photos/1257110/pexels-photo-1257110.jpeg?auto=compress&cs=tinysrgb&w=600" 
                    alt="Miles - our genius little boy"
                    className="w-full h-64 object-cover rounded-2xl shadow-lg"
                  />
                </div>
                <div className="text-left">
                  <h3 className="text-2xl font-bold mb-4 text-gray-800">Following in Daddy's Footsteps</h3>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    At just 3 years old, Miles is already showing signs of being a little genius! 
                    He's fascinated by technology and seems to want to follow in his father's footsteps.
                  </p>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li className="flex items-start">
                      <Star className="w-4 h-4 text-yellow-500 mr-2 mt-0.5" />
                      <span>Loves playing with Tony's keyboard and "coding"</span>
                    </li>
                    <li className="flex items-start">
                      <Star className="w-4 h-4 text-yellow-500 mr-2 mt-0.5" />
                      <span>Asks "How does this work?" about everything</span>
                    </li>
                    <li className="flex items-start">
                      <Star className="w-4 h-4 text-yellow-500 mr-2 mt-0.5" />
                      <span>Can already navigate simple apps on the phone</span>
                    </li>
                    <li className="flex items-start">
                      <Star className="w-4 h-4 text-yellow-500 mr-2 mt-0.5" />
                      <span>Shows incredible problem-solving skills for his age</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Small Gifts Section */}
      <section className="py-20 bg-gradient-to-r from-rose-100 to-orange-100">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <Gift className="w-12 h-12 mx-auto mb-6 text-rose-500" />
            <h2 className="text-3xl font-bold mb-8 text-gray-800">Small Small Funny Gifts</h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              It's not about the size or cost of the gift - it's about the thought and love behind it. 
              We believe in celebrating each other with small, meaningful gestures that bring smiles to our faces.
            </p>
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6">
              <p className="text-gray-600 italic">
                "From surprise treats to handwritten notes, from small toys for Miles to favorite snacks - 
                our love language includes these little tokens of affection that make ordinary days special."
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Friends;