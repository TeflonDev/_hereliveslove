import React, { useState } from 'react';
import { Camera, Heart, Calendar, MapPin, Users, Baby, Smile, Star } from 'lucide-react';

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  // Define the type for a gallery item
  type GalleryItem = {
    id: number;
    title: string;
    description: string;
    category: string;
    location: string;
    date: string;
    image: string;
    story: string;
  };

  // Update the state initialization
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);

  const categories = [
    { id: 'all', label: 'All Photos', icon: <Camera className="w-4 h-4" /> },
    { id: 'family', label: 'Family Outings', icon: <Users className="w-4 h-4" /> },
    { id: 'dates', label: 'Date Nights', icon: <Heart className="w-4 h-4" /> },
    { id: 'candid', label: 'Candid Moments', icon: <Smile className="w-4 h-4" /> },
    { id: 'milestones', label: 'Milestones', icon: <Star className="w-4 h-4" /> },
  ];

  const galleryImages = [
    {
      id: 1,
      title: 'Family Day at Uhuru Park',
      description: 'Miles first time feeding the ducks - pure joy on his face!',
      category: 'family',
      location: 'Uhuru Park, Nairobi',
      date: 'March 2024',
      image: 'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=800',
      story: 'This was one of those perfect Sunday afternoons. We packed sandwiches and headed to Uhuru Park with Miles. Watching him discover the ducks for the first time was magical.'
    },
    {
      id: 2,
      title: 'Date Night at Java House',
      description: 'Rare evening out just the two of us',
      category: 'dates',
      location: 'Java House, Westlands',
      date: 'February 2024',
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800',
      story: 'Our first proper date in months! Maggie\'s mom watched Miles while we enjoyed coffee and actually had an adult conversation. These moments are precious.'
    },
    {
      id: 3,
      title: 'Miles Learning to Walk',
      description: 'Those wobbly first steps that melted our hearts',
      category: 'milestones',
      location: 'Our Living Room',
      date: 'August 2022',
      image: 'https://images.pexels.com/photos/1257110/pexels-photo-1257110.jpeg?auto=compress&cs=tinysrgb&w=800',
      story: 'The day Miles took his first steps! Tony was at work, so Maggie called him immediately. We must have watched this video a hundred times.'
    },
    {
      id: 4,
      title: 'Beach Day in Mombasa',
      description: 'Miles first time seeing the ocean',
      category: 'family',
      location: 'Diani Beach, Mombasa',
      date: 'December 2023',
      image: 'https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=800',
      story: 'We saved for months for this trip. Seeing Miles experience the ocean for the first time made every sacrifice worth it. He was scared at first, then couldn\'t get enough!'
    },
    {
      id: 5,
      title: 'Cooking Together',
      description: 'Sunday meal prep with our little helper',
      category: 'candid',
      location: 'Our Kitchen',
      date: 'January 2024',
      image: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=800',
      story: 'Miles insists on "helping" with everything. Here he\'s making more mess than helping, but these are the moments we treasure most.'
    },
    {
      id: 6,
      title: 'Graduation Day',
      description: 'Maggie completing her teaching certification',
      category: 'milestones',
      location: 'University of Nairobi',
      date: 'November 2023',
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800',
      story: 'So proud of Maggie! She studied while pregnant and continued after Miles was born. This achievement belongs to our whole family.'
    },
    {
      id: 7,
      title: 'Picnic at Central Park',
      description: 'Simple pleasures on a budget',
      category: 'family',
      location: 'Central Park, Nairobi',
      date: 'May 2024',
      image: 'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=800',
      story: 'Sometimes the best dates cost nothing. We brought homemade snacks and spent the afternoon playing with Miles on the grass.'
    },
    {
      id: 8,
      title: 'Tony\'s Birthday Surprise',
      description: 'Maggie organized a small celebration',
      category: 'dates',
      location: 'Our Home',
      date: 'September 2024',
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=800',
      story: 'Maggie surprised Tony with his favorite cake and a small gathering. Miles helped blow out the candles - or tried to eat them!'
    },
    {
      id: 9,
      title: 'First Day of Playgroup',
      description: 'Miles starting to socialize with other kids',
      category: 'milestones',
      location: 'Little Angels Playgroup',
      date: 'January 2024',
      image: 'https://images.pexels.com/photos/1257110/pexels-photo-1257110.jpeg?auto=compress&cs=tinysrgb&w=800',
      story: 'We were more nervous than Miles! He adapted so quickly and made friends immediately. Watching him grow independent is bittersweet.'
    },
    {
      id: 10,
      title: 'Morning Cuddles',
      description: 'Weekend mornings are the best',
      category: 'candid',
      location: 'Our Bedroom',
      date: 'Every Weekend',
      image: 'https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=800',
      story: 'Miles always finds his way to our bed on weekend mornings. These lazy cuddle sessions are what family is all about.'
    },
    {
      id: 11,
      title: 'Date at Karura Forest',
      description: 'Nature walk and quality time',
      category: 'dates',
      location: 'Karura Forest',
      date: 'April 2024',
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800',
      story: 'Free entry to Karura made this the perfect budget date. We walked, talked, and remembered why we fell in love.'
    },
    {
      id: 12,
      title: 'Christmas Morning 2023',
      description: 'Miles first real Christmas experience',
      category: 'milestones',
      location: 'Our Home',
      date: 'December 2023',
      image: 'https://images.pexels.com/photos/1257110/pexels-photo-1257110.jpeg?auto=compress&cs=tinysrgb&w=800',
      story: 'We couldn\'t afford much, but Miles didn\'t care. A few simple toys and he was the happiest kid in the world.'
    }
  ];

  const filteredImages = selectedCategory === 'all' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === selectedCategory);

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-500 text-white">
        <div className="container mx-auto px-6 text-center">
          <Camera className="w-16 h-16 mx-auto mb-6 text-blue-200" />
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Our Gallery</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed">
            Precious memories captured through the lens of love, laughter, and family life
          </p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-white border-b">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-full transition-all duration-300 ${
                  selectedCategory === category.id
                    ? 'bg-gradient-to-r from-orange-500 to-pink-500 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {category.icon}
                <span className="font-medium">{category.label}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16 bg-gradient-to-br from-orange-50 to-rose-50">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredImages.map((image) => (
              <div
                key={image.id}
                className="group relative overflow-hidden rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 bg-white cursor-pointer"
                onClick={() => setSelectedImage(image)}
              >
                <div className="aspect-square overflow-hidden">
                  <img
                    src={image.image}
                    alt={image.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-xl font-bold mb-2">{image.title}</h3>
                  <p className="text-sm text-gray-200 mb-3">{image.description}</p>
                  <div className="flex items-center justify-between text-xs">
                    <div className="flex items-center space-x-1">
                      <MapPin className="w-3 h-3" />
                      <span>{image.location}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Calendar className="w-3 h-3" />
                      <span>{image.date}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal for selected image */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4" onClick={() => setSelectedImage(null)}>
          <div className="max-w-4xl w-full bg-white rounded-3xl overflow-hidden" onClick={(e) => e.stopPropagation()}>
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="aspect-square lg:aspect-auto">
                <img
                  src={selectedImage.image}
                  alt={selectedImage.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-8">
                <h2 className="text-3xl font-bold mb-4 text-gray-800">{selectedImage.title}</h2>
                <p className="text-gray-600 mb-6 leading-relaxed">{selectedImage.story}</p>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center text-gray-500">
                    <MapPin className="w-5 h-5 mr-3 text-orange-500" />
                    <span>{selectedImage.location}</span>
                  </div>
                  <div className="flex items-center text-gray-500">
                    <Calendar className="w-5 h-5 mr-3 text-blue-500" />
                    <span>{selectedImage.date}</span>
                  </div>
                </div>
                <button
                  onClick={() => setSelectedImage(null)}
                  className="w-full bg-gradient-to-r from-orange-500 to-pink-500 text-white py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Memory Stats */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Our Memories in Numbers</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-4xl font-bold text-orange-500 mb-2">{galleryImages.length}</div>
              <div className="text-gray-600">Photos Captured</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-500 mb-2">50+</div>
              <div className="text-gray-600">Family Outings</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-500 mb-2">25+</div>
              <div className="text-gray-600">Date Nights</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-500 mb-2">∞</div>
              <div className="text-gray-600">Precious Moments</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Gallery;