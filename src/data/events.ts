import { EventCategory, Venue, Vendor } from '@/types';

export const eventCategories: EventCategory[] = [
  {
    id: 'marriage',
    name: 'Marriage',
    description: 'Complete wedding planning with traditional ceremonies and modern celebrations',
    image: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=800&h=600&fit=crop',
    subEvents: [
      {
        id: 'haldi',
        name: 'Haldi Ceremony',
        description: 'Traditional pre-wedding turmeric ceremony with cultural significance',
        image: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=800&h=600&fit=crop',
        packages: [
          {
            id: 'haldi-basic',
            name: 'Haldi Essentials',
            description: 'Basic haldi ceremony package with traditional elements',
            price: 15000,
            image: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=800&h=600&fit=crop',
            category: 'haldi',
            items: [
              { id: 'haldi-paste', name: 'Haldi Paste', description: 'Traditional turmeric paste with natural ingredients', price: 2000, quantity: 1, maxQuantity: 5, image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop' },
              { id: 'decorations', name: 'Decorations', description: 'Flowers, rangoli, and traditional decor elements', price: 8000, quantity: 1, maxQuantity: 3, image: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=400&h=300&fit=crop' },
              { id: 'photography', name: 'Photography', description: 'Professional photography service for 4 hours', price: 5000, quantity: 1, maxQuantity: 2, image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop' }
            ]
          },
          {
            id: 'haldi-premium',
            name: 'Haldi Premium',
            description: 'Premium haldi ceremony with all amenities and luxury touches',
            price: 25000,
            image: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=800&h=600&fit=crop',
            category: 'haldi',
            items: [
              { id: 'haldi-paste', name: 'Haldi Paste', description: 'Premium turmeric paste with natural ingredients', price: 2000, quantity: 1, maxQuantity: 5, image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop' },
              { id: 'decorations', name: 'Decorations', description: 'Premium flowers, rangoli, and luxury decor', price: 8000, quantity: 1, maxQuantity: 3, image: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=400&h=300&fit=crop' },
              { id: 'photography', name: 'Photography', description: 'Professional photography service for 6 hours', price: 5000, quantity: 1, maxQuantity: 2, image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop' },
              { id: 'catering', name: 'Catering', description: 'Traditional snacks and refreshments for 50 guests', price: 10000, quantity: 1, maxQuantity: 2, image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop' }
            ]
          },
          {
            id: 'haldi-luxury',
            name: 'Haldi Luxury',
            description: 'Ultra-luxury haldi ceremony with celebrity treatment',
            price: 40000,
            image: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=800&h=600&fit=crop',
            category: 'haldi',
            items: [
              { id: 'haldi-paste', name: 'Haldi Paste', description: 'Luxury turmeric paste with gold leaf', price: 5000, quantity: 1, maxQuantity: 5, image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop' },
              { id: 'decorations', name: 'Decorations', description: 'Luxury flowers, premium rangoli, and exclusive decor', price: 15000, quantity: 1, maxQuantity: 3, image: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=400&h=300&fit=crop' },
              { id: 'photography', name: 'Photography', description: 'Premium photography and videography for 8 hours', price: 8000, quantity: 1, maxQuantity: 2, image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop' },
              { id: 'catering', name: 'Catering', description: 'Premium catering service for 100 guests', price: 12000, quantity: 1, maxQuantity: 2, image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop' }
            ]
          }
        ]
      },
      {
        id: 'sagun',
        name: 'Sagun Ceremony',
        description: 'Traditional engagement and ring ceremony with cultural rituals',
        image: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=800&h=600&fit=crop',
        packages: [
          {
            id: 'sagun-basic',
            name: 'Sagun Basic',
            description: 'Basic engagement ceremony package with essential services',
            price: 20000,
            image: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=800&h=600&fit=crop',
            category: 'sagun',
            items: [
              { id: 'decorations', name: 'Decorations', description: 'Traditional engagement decor with flowers', price: 10000, quantity: 1, maxQuantity: 3, image: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=400&h=300&fit=crop' },
              { id: 'photography', name: 'Photography', description: 'Professional photography service for 4 hours', price: 5000, quantity: 1, maxQuantity: 2, image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop' },
              { id: 'catering', name: 'Catering', description: 'Traditional snacks and refreshments for 30 guests', price: 5000, quantity: 1, maxQuantity: 2, image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop' }
            ]
          },
          {
            id: 'sagun-premium',
            name: 'Sagun Premium',
            description: 'Premium engagement ceremony with luxury elements',
            price: 35000,
            image: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=800&h=600&fit=crop',
            category: 'sagun',
            items: [
              { id: 'decorations', name: 'Decorations', description: 'Premium engagement decor with luxury flowers', price: 15000, quantity: 1, maxQuantity: 3, image: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=400&h=300&fit=crop' },
              { id: 'photography', name: 'Photography', description: 'Premium photography and videography for 6 hours', price: 8000, quantity: 1, maxQuantity: 2, image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop' },
              { id: 'catering', name: 'Catering', description: 'Premium catering service for 50 guests', price: 8000, quantity: 1, maxQuantity: 2, image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop' },
              { id: 'entertainment', name: 'Entertainment', description: 'Live music and cultural performances', price: 4000, quantity: 1, maxQuantity: 1, image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop' }
            ]
          }
        ]
      },
      {
        id: 'reception',
        name: 'Reception',
        description: 'Grand wedding reception celebration with modern elegance',
        image: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=800&h=600&fit=crop',
        packages: [
          {
            id: 'reception-basic',
            name: 'Reception Basic',
            description: 'Basic reception package with essential services',
            price: 50000,
            image: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=800&h=600&fit=crop',
            category: 'reception',
            items: [
              { id: 'venue', name: 'Venue', description: 'Basic reception hall for 100 guests', price: 20000, quantity: 1, maxQuantity: 1, image: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=400&h=300&fit=crop' },
              { id: 'decorations', name: 'Decorations', description: 'Basic reception decor with flowers', price: 15000, quantity: 1, maxQuantity: 3, image: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=400&h=300&fit=crop' },
              { id: 'catering', name: 'Catering', description: 'Basic catering service for 100 guests', price: 15000, quantity: 1, maxQuantity: 2, image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop' }
            ]
          },
          {
            id: 'reception-premium',
            name: 'Reception Premium',
            description: 'Premium reception with luxury amenities and services',
            price: 80000,
            image: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=800&h=600&fit=crop',
            category: 'reception',
            items: [
              { id: 'venue', name: 'Venue', description: 'Premium reception hall for 150 guests', price: 30000, quantity: 1, maxQuantity: 1, image: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=400&h=300&fit=crop' },
              { id: 'decorations', name: 'Decorations', description: 'Premium reception decor with luxury flowers', price: 25000, quantity: 1, maxQuantity: 3, image: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=400&h=300&fit=crop' },
              { id: 'catering', name: 'Catering', description: 'Premium catering service for 150 guests', price: 25000, quantity: 1, maxQuantity: 2, image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop' }
            ]
          }
        ]
      },
      {
        id: 'mehendi',
        name: 'Mehendi Ceremony',
        description: 'Traditional mehendi application ceremony with cultural performances',
        image: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=800&h=600&fit=crop',
        packages: [
          {
            id: 'mehendi-basic',
            name: 'Mehendi Basic',
            description: 'Basic mehendi ceremony package with traditional elements',
            price: 12000,
            image: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=800&h=600&fit=crop',
            category: 'mehendi',
            items: [
              { id: 'mehendi-artist', name: 'Mehendi Artist', description: 'Professional mehendi artist for 4 hours', price: 5000, quantity: 1, maxQuantity: 2, image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop' },
              { id: 'decorations', name: 'Decorations', description: 'Basic mehendi ceremony decor', price: 4000, quantity: 1, maxQuantity: 3, image: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=400&h=300&fit=crop' },
              { id: 'photography', name: 'Photography', description: 'Basic photography service for 3 hours', price: 3000, quantity: 1, maxQuantity: 2, image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop' }
            ]
          }
        ]
      }
    ]
  },
  {
    id: 'diwali',
    name: 'Diwali',
    description: 'Festival of lights celebration with traditional rituals and modern entertainment',
    image: 'https://images.unsplash.com/photo-1606220838315-056192d5e927?w=800&h=600&fit=crop',
    subEvents: [
      {
        id: 'diwali-celebration',
        name: 'Diwali Celebration',
        description: 'Complete Diwali celebration with traditional puja and modern entertainment',
        image: 'https://images.unsplash.com/photo-1606220838315-056192d5e927?w=800&h=600&fit=crop',
        packages: [
          {
            id: 'diwali-basic',
            name: 'Diwali Basic',
            description: 'Basic Diwali celebration package with essential services',
            price: 10000,
            image: 'https://images.unsplash.com/photo-1606220838315-056192d5e927?w=800&h=600&fit=crop',
            category: 'diwali',
            items: [
              { id: 'decorations', name: 'Decorations', description: 'Diwali decorations with diyas and flowers', price: 5000, quantity: 1, maxQuantity: 3, image: 'https://images.unsplash.com/photo-1606220838315-056192d5e927?w=400&h=300&fit=crop' },
              { id: 'puja', name: 'Puja Service', description: 'Traditional Diwali puja ceremony', price: 3000, quantity: 1, maxQuantity: 1, image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop' },
              { id: 'catering', name: 'Catering', description: 'Traditional Diwali sweets and snacks', price: 2000, quantity: 1, maxQuantity: 2, image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop' }
            ]
          },
          {
            id: 'diwali-premium',
            name: 'Diwali Premium',
            description: 'Premium Diwali celebration with luxury amenities',
            price: 20000,
            image: 'https://images.unsplash.com/photo-1606220838315-056192d5e927?w=800&h=600&fit=crop',
            category: 'diwali',
            items: [
              { id: 'decorations', name: 'Decorations', description: 'Premium Diwali decorations with luxury elements', price: 10000, quantity: 1, maxQuantity: 3, image: 'https://images.unsplash.com/photo-1606220838315-056192d5e927?w=400&h=300&fit=crop' },
              { id: 'puja', name: 'Puja Service', description: 'Premium Diwali puja with special rituals', price: 5000, quantity: 1, maxQuantity: 1, image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop' },
              { id: 'catering', name: 'Catering', description: 'Premium Diwali feast for 50 guests', price: 5000, quantity: 1, maxQuantity: 2, image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop' }
            ]
          }
        ]
      }
    ]
  },
  {
    id: 'ganesh-puja',
    name: 'Ganesh Puja',
    description: 'Traditional Ganesh Chaturthi celebration with cultural significance',
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=600&fit=crop',
    subEvents: [
      {
        id: 'ganesh-celebration',
        name: 'Ganesh Celebration',
        description: 'Complete Ganesh Chaturthi celebration with traditional rituals',
        image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=600&fit=crop',
        packages: [
          {
            id: 'ganesh-basic',
            name: 'Ganesh Basic',
            description: 'Basic Ganesh celebration package with essential services',
            price: 8000,
            image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=600&fit=crop',
            category: 'ganesh',
            items: [
              { id: 'decorations', name: 'Decorations', description: 'Ganesh puja decorations with flowers', price: 4000, quantity: 1, maxQuantity: 3, image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=400&h=300&fit=crop' },
              { id: 'puja', name: 'Puja Service', description: 'Traditional Ganesh puja ceremony', price: 3000, quantity: 1, maxQuantity: 1, image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop' },
              { id: 'catering', name: 'Catering', description: 'Traditional prasad and snacks', price: 1000, quantity: 1, maxQuantity: 2, image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop' }
            ]
          }
        ]
      }
    ]
  },
  {
    id: 'birthday',
    name: 'Birthday',
    description: 'Birthday celebrations for all ages with personalized themes and entertainment',
    image: 'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=800&h=600&fit=crop',
    subEvents: [
      {
        id: 'kids-birthday',
        name: 'Kids Birthday',
        description: 'Fun-filled birthday celebrations for children with games and entertainment',
        image: 'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=800&h=600&fit=crop',
        packages: [
          {
            id: 'kids-birthday-basic',
            name: 'Kids Birthday Basic',
            description: 'Basic kids birthday package with essential services',
            price: 5000,
            image: 'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=800&h=600&fit=crop',
            category: 'birthday',
            items: [
              { id: 'decorations', name: 'Decorations', description: 'Birthday decorations with balloons and banners', price: 2000, quantity: 1, maxQuantity: 3, image: 'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=400&h=300&fit=crop' },
              { id: 'cake', name: 'Birthday Cake', description: 'Custom birthday cake for 20 guests', price: 1500, quantity: 1, maxQuantity: 2, image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop' },
              { id: 'entertainment', name: 'Entertainment', description: 'Basic entertainment with games and activities', price: 1500, quantity: 1, maxQuantity: 1, image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop' }
            ]
          }
        ]
      }
    ]
  },
  {
    id: 'housewarming',
    name: 'Housewarming',
    description: 'Housewarming ceremonies with traditional rituals and modern celebrations',
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=600&fit=crop',
    subEvents: [
      {
        id: 'housewarming-ceremony',
        name: 'Housewarming Ceremony',
        description: 'Traditional housewarming ceremony with puja and celebrations',
        image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=600&fit=crop',
        packages: [
          {
            id: 'housewarming-basic',
            name: 'Housewarming Basic',
            description: 'Basic housewarming package with essential services',
            price: 6000,
            image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=600&fit=crop',
            category: 'housewarming',
            items: [
              { id: 'decorations', name: 'Decorations', description: 'Housewarming decorations with flowers', price: 3000, quantity: 1, maxQuantity: 3, image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=400&h=300&fit=crop' },
              { id: 'puja', name: 'Puja Service', description: 'Traditional housewarming puja ceremony', price: 2000, quantity: 1, maxQuantity: 1, image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop' },
              { id: 'catering', name: 'Catering', description: 'Traditional snacks and refreshments', price: 1000, quantity: 1, maxQuantity: 2, image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop' }
            ]
          }
        ]
      }
    ]
  }
];

export const venues: Venue[] = [
  {
    id: 'grand-palace',
    name: 'Grand Palace Banquet Hall',
    description: 'Luxurious banquet hall perfect for grand celebrations with modern amenities and elegant decor',
    city: 'Mumbai',
    address: '123 Marine Drive, Nariman Point, Mumbai, Maharashtra 400021',
    price: 50000,
    capacity: 300,
    images: [
      'https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1606220838315-056192d5e927?w=800&h=600&fit=crop'
    ],
    amenities: ['Parking', 'Catering Kitchen', 'Dance Floor', 'Stage', 'Sound System', 'Lighting', 'AC', 'WiFi'],
    rating: 4.8,
    reviews: [
      {
        id: '1',
        userName: 'Priya & Rajesh',
        rating: 5,
        comment: 'Perfect venue for our wedding reception. The staff was very professional and helpful.',
        date: '2024-01-15'
      },
      {
        id: '2',
        userName: 'Anjali & Vikram',
        rating: 4.5,
        comment: 'Beautiful venue with excellent amenities. Highly recommended for special occasions.',
        date: '2024-01-10'
      }
    ],
    contact: {
      phone: '+91 22 1234 5678',
      email: 'info@grandpalace.com',
      website: 'www.grandpalace.com'
    }
  },
  {
    id: 'crystal-ballroom',
    name: 'Crystal Ballroom',
    description: 'Modern ballroom with crystal chandeliers and contemporary design, perfect for elegant celebrations',
    city: 'Delhi',
    address: '456 Connaught Place, New Delhi, Delhi 110001',
    price: 75000,
    capacity: 500,
    images: [
      'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1606220838315-056192d5e927?w=800&h=600&fit=crop'
    ],
    amenities: ['Valet Parking', 'Premium Catering', 'Dance Floor', 'Stage', 'Professional Sound System', 'LED Lighting', 'AC', 'WiFi', 'VIP Lounge'],
    rating: 4.9,
    reviews: [
      {
        id: '1',
        userName: 'Meera & Arjun',
        rating: 5,
        comment: 'Absolutely stunning venue! The crystal chandeliers create a magical atmosphere.',
        date: '2024-01-20'
      },
      {
        id: '2',
        userName: 'Sneha & Rahul',
        rating: 4.8,
        comment: 'Excellent service and beautiful venue. Perfect for our corporate event.',
        date: '2024-01-18'
      }
    ],
    contact: {
      phone: '+91 11 1234 5678',
      email: 'info@crystalballroom.com',
      website: 'www.crystalballroom.com'
    }
  },
  {
    id: 'heritage-palace',
    name: 'Heritage Palace',
    description: 'Historic palace venue with traditional architecture and modern facilities for royal celebrations',
    city: 'Jaipur',
    address: '789 Amber Road, Jaipur, Rajasthan 302001',
    price: 100000,
    capacity: 200,
    images: [
      'https://images.unsplash.com/photo-1606220838315-056192d5e927?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=800&h=600&fit=crop'
    ],
    amenities: ['Royal Parking', 'Traditional Catering', 'Garden Area', 'Palace Grounds', 'Traditional Music', 'Cultural Performances', 'AC', 'WiFi', 'Royal Suite'],
    rating: 4.7,
    reviews: [
      {
        id: '1',
        userName: 'Kavya & Dev',
        rating: 5,
        comment: 'A truly royal experience! The heritage architecture is breathtaking.',
        date: '2024-01-25'
      },
      {
        id: '2',
        userName: 'Riya & Aman',
        rating: 4.5,
        comment: 'Beautiful palace venue with rich cultural heritage. Perfect for traditional celebrations.',
        date: '2024-01-22'
      }
    ],
    contact: {
      phone: '+91 141 1234 5678',
      email: 'info@heritagepalace.com',
      website: 'www.heritagepalace.com'
    }
  },
  {
    id: 'garden-venue',
    name: 'Garden Venue',
    description: 'Beautiful outdoor garden venue perfect for intimate celebrations and outdoor events',
    city: 'Bangalore',
    address: '321 Brigade Road, MG Road, Bangalore, Karnataka 560001',
    price: 30000,
    capacity: 150,
    images: [
      'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=800&h=600&fit=crop'
    ],
    amenities: ['Garden Area', 'Outdoor Seating', 'Natural Scenery', 'Parking', 'Basic Catering', 'Sound System', 'Lighting', 'Restrooms'],
    rating: 4.6,
    reviews: [
      {
        id: '1',
        userName: 'Neha & Karan',
        rating: 4.5,
        comment: 'Beautiful garden venue with natural beauty. Perfect for outdoor celebrations.',
        date: '2024-01-30'
      },
      {
        id: '2',
        userName: 'Pooja & Sameer',
        rating: 4.7,
        comment: 'Lovely outdoor venue with great atmosphere. Staff was very helpful.',
        date: '2024-01-28'
      }
    ],
    contact: {
      phone: '+91 80 1234 5678',
      email: 'info@gardenvenue.com',
      website: 'www.gardenvenue.com'
    }
  }
];

export const vendors: Vendor[] = [
  {
    id: 'mehendi-artist-1',
    name: 'Traditional Mehendi Art',
    category: 'Mehendi Artist',
    description: 'Expert mehendi artist specializing in traditional Indian designs with modern twists',
    location: 'Mumbai, Maharashtra',
    services: ['Bridal Mehendi', 'Party Mehendi', 'Traditional Designs', 'Modern Patterns', 'Henna Cones', 'Aftercare Products'],
    priceRange: '₹2000 - ₹8000',
    rating: 4.8,
    reviews: [
      {
        id: '1',
        userName: 'Priya',
        rating: 5,
        comment: 'Beautiful mehendi designs! Very professional and hygienic.',
        date: '2024-01-15'
      }
    ],
    contact: {
      phone: '+91 98765 43210',
      email: 'mehendi@traditionalart.com',
      website: 'www.traditionalmehendi.com'
    },
    image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop'
  },
  {
    id: 'catering-1',
    name: 'Royal Catering Services',
    category: 'Catering',
    description: 'Premium catering service offering traditional Indian cuisine with modern presentation',
    location: 'Delhi, Delhi',
    services: ['Wedding Catering', 'Corporate Events', 'Traditional Cuisine', 'Modern Dishes', 'Veg & Non-veg', 'Custom Menus'],
    priceRange: '₹500 per plate',
    rating: 4.7,
    reviews: [
      {
        id: '1',
        userName: 'Rajesh',
        rating: 4.5,
        comment: 'Excellent food quality and service. Highly recommended for events.',
        date: '2024-01-20'
      }
    ],
    contact: {
      phone: '+91 98765 43211',
      email: 'info@royalcatering.com',
      website: 'www.royalcatering.com'
    },
    image: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=400&h=300&fit=crop'
  },
  {
    id: 'photography-1',
    name: 'Capture Moments',
    category: 'Photography',
    description: 'Professional photography and videography services for all types of events',
    location: 'Bangalore, Karnataka',
    services: ['Wedding Photography', 'Event Photography', 'Portrait Sessions', 'Video Production', 'Photo Albums', 'Digital Delivery'],
    priceRange: '₹10000 - ₹50000',
    rating: 4.9,
    reviews: [
      {
        id: '1',
        userName: 'Anjali',
        rating: 5,
        comment: 'Amazing photography! Captured every special moment perfectly.',
        date: '2024-01-25'
      }
    ],
    contact: {
      phone: '+91 98765 43212',
      email: 'info@capturemoments.com',
      website: 'www.capturemoments.com'
    },
    image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop'
  },
  {
    id: 'decoration-1',
    name: 'Dream Decorators',
    category: 'Decoration',
    description: 'Creative decoration services for all types of events with unique themes and designs',
    location: 'Mumbai, Maharashtra',
    services: ['Wedding Decor', 'Event Themes', 'Flower Arrangements', 'Lighting Design', 'Stage Setup', 'Custom Designs'],
    priceRange: '₹15000 - ₹100000',
    rating: 4.6,
    reviews: [
      {
        id: '1',
        userName: 'Vikram',
        rating: 4.5,
        comment: 'Beautiful decorations! Created the perfect atmosphere for our event.',
        date: '2024-01-30'
      }
    ],
    contact: {
      phone: '+91 98765 43213',
      email: 'info@dreamdecorators.com',
      website: 'www.dreamdecorators.com'
    },
    image: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=400&h=300&fit=crop'
  },
  {
    id: 'entertainment-1',
    name: 'Melody Makers',
    category: 'Entertainment',
    description: 'Professional entertainment services including live music, DJ, and cultural performances',
    location: 'Delhi, Delhi',
    services: ['Live Music', 'DJ Services', 'Cultural Performances', 'Dance Shows', 'Sound System', 'Lighting Effects'],
    priceRange: '₹8000 - ₹25000',
    rating: 4.8,
    reviews: [
      {
        id: '1',
        userName: 'Meera',
        rating: 5,
        comment: 'Fantastic entertainment! Made our event truly memorable.',
        date: '2024-02-05'
      }
    ],
    contact: {
      phone: '+91 98765 43214',
      email: 'info@melodymakers.com',
      website: 'www.melodymakers.com'
    },
    image: 'https://images.unsplash.com/photo-1606220838315-056192d5e927?w=400&h=300&fit=crop'
  }
];
