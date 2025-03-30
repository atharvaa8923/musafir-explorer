
export interface Destination {
  id: string;
  image: string;
  title: string;
  location: string;
  price: number;
  days: number;
  category: 'trekking' | 'meditation' | 'rafting' | 'religious' | 'hiking';
  categoryLabel: string;
  categoryColor: string;
  description: string;
  longDescription: string;
  highlights: string[];
  bestTimeToVisit: string;
  itinerary: {
    title: string;
    description: string;
    activities?: string[];
    meals?: string;
    accommodation?: string;
  }[];
  accommodation: {
    name: string;
    description: string;
    location: string;
    amenities?: string[];
  }[];
  gallery: string[];
  coordinates: [number, number];
  locationDescription: string;
  transportation: {
    type: 'bus' | 'train';
    from: string;
    price: number;
    duration: string;
    schedule: string;
    link: string;
  }[];
}

export const destinations: Destination[] = [
  {
    id: "valley-of-flowers",
    image: "https://images.unsplash.com/photo-1472396961693-142e6e269027",
    title: "Valley of Flowers Trek",
    location: "Uttarakhand",
    price: 4800,
    days: 5,
    category: "trekking",
    categoryLabel: "Trekking",
    categoryColor: "bg-musafir-trekking",
    description: "Explore the UNESCO World Heritage site known for its meadows of endemic alpine flowers and variety of flora.",
    longDescription: "The Valley of Flowers National Park is a breathtaking UNESCO World Heritage Site nestled in the Western Himalayas. Known for its meadows of endemic alpine flowers and variety of flora, this vibrant valley comes alive during the monsoon season. The trek takes you through picturesque landscapes, gushing streams, and waterfalls, offering a paradise for nature lovers and photographers alike. During this 5-day adventure, you'll experience the raw beauty of Uttarakhand and witness over 300 species of wildflowers that carpet the valley floor.",
    highlights: [
      "Trek through UNESCO World Heritage Site",
      "Witness over 300 species of endemic alpine flowers",
      "Visit Hemkund Sahib, a sacred Sikh shrine",
      "Experience the charming village of Ghangaria",
      "Capture breathtaking views of surrounding Himalayan peaks"
    ],
    bestTimeToVisit: "July to September when the alpine flowers are in full bloom. The park remains closed from October to June due to heavy snowfall.",
    itinerary: [
      {
        title: "Arrival in Joshimath",
        description: "Your journey begins with arrival in Joshimath, a picturesque town in Uttarakhand. Meet your fellow trekkers and guide for a briefing about the upcoming adventure. Rest and prepare for the journey ahead.",
        meals: "Dinner",
        accommodation: "Guesthouse in Joshimath"
      },
      {
        title: "Joshimath to Ghangaria",
        description: "After breakfast, drive to Govindghat and begin your trek to Ghangaria (10 km). The trail follows the Pushpawati River through beautiful forests and small streams.",
        activities: [
          "Drive to Govindghat",
          "Trek to Ghangaria",
          "Cross scenic river bridges"
        ],
        meals: "Breakfast, Lunch, Dinner",
        accommodation: "Basic accommodation in Ghangaria"
      },
      {
        title: "Ghangaria to Valley of Flowers and back",
        description: "Early morning trek to the Valley of Flowers (4 km one way). Spend the day exploring the valley, taking photographs, and identifying various flower species. Return to Ghangaria by evening.",
        activities: [
          "Full-day exploration of Valley of Flowers",
          "Flora photography",
          "Picnic lunch in the valley"
        ],
        meals: "Breakfast, Packed Lunch, Dinner",
        accommodation: "Basic accommodation in Ghangaria"
      },
      {
        title: "Hemkund Sahib Visit",
        description: "Trek to Hemkund Sahib, a sacred Sikh shrine located at 4,329 meters (6 km one way). Visit the Gurudwara and the glacial lake before returning to Ghangaria.",
        activities: [
          "Trek to Hemkund Sahib",
          "Visit the sacred lake and Gurudwara",
          "Experience local Sikh culture"
        ],
        meals: "Breakfast, Lunch, Dinner",
        accommodation: "Basic accommodation in Ghangaria"
      },
      {
        title: "Return to Joshimath and Departure",
        description: "Trek down from Ghangaria to Govindghat (10 km) and drive back to Joshimath. Your Valley of Flowers adventure concludes here.",
        activities: [
          "Descend to Govindghat",
          "Drive to Joshimath",
          "Certificate distribution and farewell"
        ],
        meals: "Breakfast, Lunch"
      }
    ],
    accommodation: [
      {
        name: "Joshimath Guesthouse",
        description: "A comfortable guesthouse offering basic amenities with stunning mountain views. The rooms are clean with attached bathrooms and hot water facilities.",
        location: "Joshimath town center",
        amenities: ["Hot water", "Restaurant", "Wi-Fi in common areas", "Power backup"]
      },
      {
        name: "Ghangaria Mountain Lodge",
        description: "Basic accommodation in the remote village of Ghangaria. Simple rooms with shared bathrooms, providing a comfortable base for exploring the valley.",
        location: "Ghangaria village",
        amenities: ["Meals included", "Hot water (limited hours)", "Blankets provided"]
      }
    ],
    gallery: [
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4",
      "https://images.unsplash.com/photo-1486870591958-9b9d0d1dda99",
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b",
      "https://images.unsplash.com/photo-1606117544355-5f6d21f5d0b7",
      "https://images.unsplash.com/photo-1500382017468-9049fed747ef",
      "https://images.unsplash.com/photo-1510797215324-95aa89f43c33"
    ],
    coordinates: [30.6709, 79.6098],
    locationDescription: "The Valley of Flowers National Park is located in the Chamoli district of Uttarakhand, nestled in the upper expanses of Bhyundar Ganga near Joshimath. It's approximately 300 km from Rishikesh, the nearest major city.",
    transportation: [
      {
        type: "bus",
        from: "Rishikesh",
        price: 650,
        duration: "10-12 hours",
        schedule: "Daily departure at 6:00 AM",
        link: "https://uttarakhandtransport.gov.in"
      },
      {
        type: "train",
        from: "Delhi to Haridwar, then bus to Joshimath",
        price: 1200,
        duration: "6 hours train + 8 hours bus",
        schedule: "Nanda Devi Express departs at 11:50 PM",
        link: "https://www.irctc.co.in"
      }
    ]
  },
  {
    id: "rishikesh-rafting",
    image: "https://images.unsplash.com/photo-1482938289607-e9573fc25ebb",
    title: "Rishikesh Rafting Experience",
    location: "Rishikesh",
    price: 2500,
    days: 3,
    category: "rafting",
    categoryLabel: "Rafting",
    categoryColor: "bg-musafir-water",
    description: "Experience the thrill of white water rafting in the adventure capital of India, navigating rapids on the sacred Ganges River.",
    longDescription: "Rishikesh, known as the 'Yoga Capital of the World', is also India's premier destination for white water rafting adventures. This 3-day adventure package offers the perfect mix of adrenaline and relaxation as you navigate through the thrilling rapids of the Ganges River. From Grade II to Grade IV rapids with names like 'Roller Coaster' and 'Golf Course', you'll experience the ultimate rafting adventure. The package also includes camping by the riverside, evening bonfires, and time to explore Rishikesh's spiritual side with its temples and yoga ashrams.",
    highlights: [
      "Tackle various grades of rapids on the Ganges River",
      "Camp on pristine beaches along the riverside",
      "Evening bonfire with music and fellow adventurers",
      "Visit iconic temples and the famous Laxman Jhula",
      "Optional cliff jumping and body surfing activities"
    ],
    bestTimeToVisit: "September to June is ideal for rafting. The best rapids are found from September to November and March to May. December to February offers milder rapids but cooler water.",
    itinerary: [
      {
        title: "Arrival in Rishikesh",
        description: "Arrive in Rishikesh and check into your riverside camp. After lunch, enjoy a safety briefing and introductory rafting session on calmer waters to learn basic techniques.",
        activities: [
          "Check-in at riverside camp",
          "Introductory rafting session",
          "Evening bonfire with fellow rafters"
        ],
        meals: "Lunch, Dinner",
        accommodation: "Riverside camp in comfortable tents"
      },
      {
        title: "Full-Day Rafting Adventure",
        description: "After breakfast, embark on a full-day rafting expedition from Shivpuri to Rishikesh, covering 16 km with multiple rapids of different grades. Stop for lunch on a beach and try cliff jumping if conditions permit.",
        activities: [
          "Full-day rafting through major rapids",
          "Beach lunch stop",
          "Optional cliff jumping",
          "Body surfing in safer zones"
        ],
        meals: "Breakfast, Lunch, Dinner",
        accommodation: "Riverside camp in comfortable tents"
      },
      {
        title: "Morning Rafting and Departure",
        description: "Enjoy a shorter morning rafting session before breakfast. After returning to camp and freshening up, visit the famous Laxman Jhula and nearby temples before departure.",
        activities: [
          "Morning rafting session",
          "Visit to Laxman Jhula and temples",
          "Souvenir shopping in Rishikesh markets"
        ],
        meals: "Breakfast, Lunch"
      }
    ],
    accommodation: [
      {
        name: "Ganges Riverside Camp",
        description: "Comfortable tented accommodation on the banks of the Ganges with breathtaking views of the river and surrounding hills. Each tent has proper beds and basic furnishings.",
        location: "Shivpuri, 16 km from Rishikesh",
        amenities: ["Attached bathrooms", "Hot water", "Dining area", "Bonfire area", "Volleyball court"]
      }
    ],
    gallery: [
      "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4",
      "https://images.unsplash.com/photo-1594570039689-42681554d594",
      "https://images.unsplash.com/photo-1503220317375-aaad61436b1b",
      "https://images.unsplash.com/photo-1527856263669-12c3a0af2aa6",
      "https://images.unsplash.com/photo-1506466010722-395aa2bef877",
      "https://images.unsplash.com/photo-1470770841072-f978cf4d019e"
    ],
    coordinates: [30.0869, 78.2676],
    locationDescription: "Rishikesh is located in the foothills of the Himalayas in northern India, where the Ganges River flows from the mountains to the plains. It's approximately 240 km from Delhi and is easily accessible by road and rail.",
    transportation: [
      {
        type: "bus",
        from: "Delhi",
        price: 450,
        duration: "6-7 hours",
        schedule: "Multiple departures daily from ISBT Kashmere Gate",
        link: "https://utconline.uk.gov.in"
      },
      {
        type: "train",
        from: "Delhi to Haridwar, then local transport to Rishikesh",
        price: 750,
        duration: "5 hours train + 1 hour local transport",
        schedule: "Shatabdi Express departs New Delhi at 6:45 AM",
        link: "https://www.irctc.co.in"
      }
    ]
  },
  {
    id: "triund-trek",
    image: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05",
    title: "Triund Trek",
    location: "Dharamshala",
    price: 3200,
    days: 2,
    category: "hiking",
    categoryLabel: "Hiking",
    categoryColor: "bg-musafir-forest",
    description: "A scenic 2-day trek offering panoramic views of the Dhauladhar range and the Kangra Valley, perfect for beginners.",
    longDescription: "The Triund Trek is one of the most popular weekend treks in the Himalayas, offering breathtaking panoramic views without requiring extensive trekking experience. Starting from McLeod Ganj in Dharamshala, this moderately difficult trek takes you through oak and rhododendron forests before opening up to the magnificent Triund meadow at 2,850 meters. The highlight is the spectacular 180-degree view of the Dhauladhar range on one side and the Kangra Valley on the other. This 2-day trek is perfect for beginners and offers an authentic mountain experience with overnight camping under the stars.",
    highlights: [
      "Panoramic views of the Dhauladhar range and Kangra Valley",
      "Perfect introduction to Himalayan trekking for beginners",
      "Overnight camping under star-filled skies",
      "Scenic trails through oak and rhododendron forests",
      "Experience the vibrant culture of McLeod Ganj"
    ],
    bestTimeToVisit: "March to June and September to November offer the best trekking conditions. Avoid July and August due to monsoon rains, though winter treks (December-February) are possible for those seeking snow experiences.",
    itinerary: [
      {
        title: "McLeod Ganj to Triund Top",
        description: "The trek begins from McLeod Ganj, ascending through forests and scenic viewpoints. The initial stretch is gradual, followed by a steeper climb known as the '22 curves'. Reach Triund top by afternoon and enjoy the spectacular sunset over the mountains.",
        activities: [
          "Trek from McLeod Ganj to Triund (9 km, 5-6 hours)",
          "Refreshment stops at Magic View Café",
          "Sunset viewing from Triund top",
          "Evening bonfire and stargazing"
        ],
        meals: "Packed Lunch, Dinner",
        accommodation: "Tents at Triund campsite"
      },
      {
        title: "Triund to McLeod Ganj and Departure",
        description: "Wake up to a magnificent sunrise over the Dhauladhar range. After breakfast, begin the descent back to McLeod Ganj. You'll have time to explore the town, visit monasteries, or shop for souvenirs before departure.",
        activities: [
          "Sunrise viewing from Triund top",
          "Descent to McLeod Ganj (3-4 hours)",
          "Optional visit to Bhagsu Waterfall",
          "Exploration of McLeod Ganj town and monasteries"
        ],
        meals: "Breakfast, Lunch"
      }
    ],
    accommodation: [
      {
        name: "Triund Campsite",
        description: "Experience camping in the wilderness of Triund top with basic tents provided. The campsite offers stunning views of the mountains and valleys below.",
        location: "Triund top at 2,850 meters",
        amenities: ["Sleeping bags and mats", "Common toilet facilities", "Hot meals provided", "Bonfire arrangement"]
      }
    ],
    gallery: [
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4",
      "https://images.unsplash.com/photo-1455156218388-5e61b526818b",
      "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0",
      "https://images.unsplash.com/photo-1540202404-a2f29016b523",
      "https://images.unsplash.com/photo-1533240332313-0db49b459ad6",
      "https://images.unsplash.com/photo-1624821558130-b325d7943f7e"
    ],
    coordinates: [32.2432, 76.3232],
    locationDescription: "Triund is located in the Kangra district of Himachal Pradesh, about 9 km from McLeod Ganj and Dharamshala. The trek starts from McLeod Ganj, which is approximately 500 km from Delhi.",
    transportation: [
      {
        type: "bus",
        from: "Delhi",
        price: 850,
        duration: "12-13 hours",
        schedule: "Overnight buses depart daily from ISBT Kashmere Gate at 7:00 PM",
        link: "https://hrtchp.com"
      },
      {
        type: "train",
        from: "Delhi to Pathankot, then local transport to Dharamshala",
        price: 1200,
        duration: "8 hours train + 3 hours local transport",
        schedule: "Jammu Mail departs New Delhi at 9:40 PM",
        link: "https://www.irctc.co.in"
      }
    ]
  },
  {
    id: "jyotirlinga-pilgrimage",
    image: "https://images.unsplash.com/photo-1466442929976-97f336a657be",
    title: "12 Jyotirlinga Pilgrimage",
    location: "Various States",
    price: 4900,
    days: 12,
    category: "religious",
    categoryLabel: "Religious",
    categoryColor: "bg-musafir-spiritual",
    description: "A spiritual journey to the most sacred Shiva temples across India, each housing a Jyotirlinga.",
    longDescription: "The 12 Jyotirlinga Pilgrimage is one of the most significant spiritual journeys for devotees of Lord Shiva. This comprehensive 12-day tour takes you across various states of India to visit the most sacred Shiva temples, each housing a Jyotirlinga (radiant sign of Lord Shiva). According to Hindu mythology, Lord Shiva appeared as a fiery column of light at these 12 locations. This pilgrimage offers not just spiritual fulfillment but also a unique opportunity to experience India's diverse cultural landscape, architectural marvels, and rich traditions surrounding these ancient temples. The journey is designed to be completed under ₹5000 by using efficient transportation options and simple accommodation.",
    highlights: [
      "Visit major Jyotirlinga temples across India",
      "Experience diverse regional cultures and traditions",
      "Participate in special pujas and rituals",
      "Explore ancient temple architecture",
      "Connect with like-minded spiritual seekers"
    ],
    bestTimeToVisit: "October to March provides the most comfortable weather conditions for this multi-state pilgrimage. Avoid summer months (April-June) when temperatures can be extremely high in many of these locations.",
    itinerary: [
      {
        title: "Somnath Temple, Gujarat",
        description: "Begin your pilgrimage at the renowned Somnath Temple in Gujarat, one of the most sacred Jyotirlinga sites. Participate in the evening aarti and experience the spiritual ambiance of this ancient temple.",
        activities: [
          "Morning darshan at Somnath Temple",
          "Participate in the special puja",
          "Evening aarti attendance",
          "Visit the Sound and Light show"
        ],
        meals: "Breakfast at accommodation, other meals at temple prasad",
        accommodation: "Dharamshala near Somnath Temple"
      },
      {
        title: "Mallikarjuna Temple, Andhra Pradesh",
        description: "Travel to Srisailam to visit the Mallikarjuna Temple, situated on the banks of the Krishna River. This temple is dedicated to both Lord Shiva and Goddess Parvati.",
        activities: [
          "Morning darshan at Mallikarjuna Temple",
          "Visit to Bhramaramba Devi shrine",
          "Boat ride on Krishna River (optional)",
          "Evening dharmic discussions"
        ],
        meals: "Breakfast, Temple prasad",
        accommodation: "Basic pilgrims' rest house"
      },
      {
        title: "Mahakaleshwar Temple, Madhya Pradesh",
        description: "Visit the famous Mahakaleshwar Temple in Ujjain, known for its unique south-facing Shiva lingam. Participate in the Bhasma Aarti, a special ritual performed only here.",
        activities: [
          "Early morning Bhasma Aarti (4:00 AM)",
          "Temple complex exploration",
          "Visit to Kalbhairav Temple",
          "Evening prayers at the banks of Shipra River"
        ],
        meals: "Breakfast, Temple prasad",
        accommodation: "Dharamshala accommodation"
      },
      {
        title: "Omkareshwar Temple, Madhya Pradesh",
        description: "Travel to the island of Mandhata in the Narmada River to visit the Omkareshwar Temple. The island is shaped like the sacred 'Om' symbol and houses one of the 12 Jyotirlingas.",
        activities: [
          "Boat ride to Omkareshwar island",
          "Temple darshan",
          "Parikrama of the island",
          "Meditation session by the Narmada River"
        ],
        meals: "Breakfast, Temple prasad, Dinner",
        accommodation: "Basic accommodation near the temple"
      },
      {
        title: "Kedarnath Temple, Uttarakhand",
        description: "Journey to the majestic Himalayan shrine of Kedarnath, located at an altitude of 3,583 meters. This trek requires good physical fitness but offers an unforgettable spiritual experience.",
        activities: [
          "Trek to Kedarnath Temple (16 km)",
          "Darshan at the ancient temple",
          "View of surrounding Himalayan peaks",
          "Evening aarti participation"
        ],
        meals: "Breakfast, Packed lunch, Dinner",
        accommodation: "Basic accommodation near Kedarnath"
      },
      {
        title: "Bhimashankar Temple, Maharashtra",
        description: "Visit the Bhimashankar Temple located in the Sahyadri Hills of Maharashtra. The temple is surrounded by dense forests and is also a wildlife sanctuary.",
        activities: [
          "Morning darshan at Bhimashankar",
          "Nature walk in the surrounding forest",
          "Visit to nearby waterfall (seasonal)",
          "Evening prayers"
        ],
        meals: "Breakfast, Local meals",
        accommodation: "Simple guesthouse accommodation"
      },
      {
        title: "Rest and Travel Day",
        description: "Take a rest day to recuperate from the journey so far. Use this day for transit between locations and prepare for the remaining pilgrimage sites.",
        activities: [
          "Transit between locations",
          "Reading of sacred texts (provided)",
          "Meditation and reflection",
          "Group discussion on experiences so far"
        ],
        meals: "Breakfast, Dinner",
        accommodation: "Transit accommodation"
      },
      {
        title: "Remaining Jyotirlinga Temples",
        description: "The remaining days will cover the other Jyotirlinga temples including Vaidyanath, Nageshwar, Rameshwaram, Grishneshwar, and Trimbakeshwar. Each day will include temple visits, local cultural experiences, and spiritual practices.",
        activities: [
          "Daily temple visits and darshan",
          "Local cultural interactions",
          "Participation in temple rituals",
          "Evening spiritual discourses"
        ],
        meals: "Breakfast, Temple prasad, Dinner on select days",
        accommodation: "Simple pilgrim accommodations near temples"
      }
    ],
    accommodation: [
      {
        name: "Temple Dharamshalas",
        description: "Most accommodations during this pilgrimage are in temple-run dharamshalas or pilgrim rest houses. These offer basic but clean facilities focused on the needs of spiritual travelers.",
        location: "Near respective temples",
        amenities: ["Clean bedding", "Common bathrooms", "Simple vegetarian meals available", "Temple proximity"]
      },
      {
        name: "Pilgrim Guesthouses",
        description: "In some locations, you'll stay in simple pilgrim guesthouses that offer slightly more private accommodations while maintaining the spiritual atmosphere of the journey.",
        location: "Within walking distance of temples",
        amenities: ["Private or shared rooms", "Hot water (at select locations)", "Vegetarian meals", "Meditation areas"]
      }
    ],
    gallery: [
      "https://images.unsplash.com/photo-1609858938890-9b0e4ca0ee6c",
      "https://images.unsplash.com/photo-1590077425118-5a6c96822fda",
      "https://images.unsplash.com/photo-1544123058-3a54050b1d89",
      "https://images.unsplash.com/photo-1534672014023-8b5b618cbd36",
      "https://images.unsplash.com/photo-1470020619799-25511d3f1f22",
      "https://images.unsplash.com/photo-1526295248860-8fc683a331dd"
    ],
    coordinates: [21.8800, 78.6400], // Central India coordinates as the pilgrimage spans multiple locations
    locationDescription: "This pilgrimage covers 12 sacred Jyotirlinga temples spread across India, including locations in Gujarat, Maharashtra, Madhya Pradesh, Uttarakhand, Tamil Nadu, Andhra Pradesh, and other states.",
    transportation: [
      {
        type: "train",
        from: "Various cities",
        price: 2200,
        duration: "Varies by location",
        schedule: "Predetermined according to pilgrimage schedule",
        link: "https://www.irctc.co.in"
      },
      {
        type: "bus",
        from: "Between nearby temples",
        price: 1800,
        duration: "Varies by distance",
        schedule: "Local state transport buses",
        link: "https://www.redbus.in"
      }
    ]
  },
  {
    id: "meditation-retreat",
    image: "https://images.unsplash.com/photo-1492321936769-b49830bc1d1e",
    title: "Meditation Retreat",
    location: "Rishikesh",
    price: 3500,
    days: 7,
    category: "meditation",
    categoryLabel: "Meditation",
    categoryColor: "bg-musafir-meditation",
    description: "A 7-day spiritual retreat offering yoga, meditation, and wellness practices on the banks of the Ganges.",
    longDescription: "This 7-day Meditation Retreat in Rishikesh, the yoga capital of the world, offers a transformative experience for those seeking inner peace and spiritual growth. Nestled on the banks of the sacred Ganges River with the Himalayas as a backdrop, this retreat combines ancient yogic practices with modern wellness approaches. Each day includes yoga sessions, meditation practices, pranayama (breathing exercises), and spiritual discourses. The retreat maintains silence during specific periods to deepen your practice and offers vegetarian sattvic meals to purify the body and mind. Whether you're a beginner or have an established practice, this affordable retreat provides the perfect setting for self-discovery and renewal.",
    highlights: [
      "Daily yoga and meditation sessions with experienced instructors",
      "Pranayama and breathwork techniques",
      "Spiritual lectures and philosophy discussions",
      "Participation in Ganga Aarti ceremony",
      "Silent meditation periods for deeper practice",
      "Nature walks in the Himalayan foothills"
    ],
    bestTimeToVisit: "October to March offers pleasant weather for a retreat experience. April and May can be hot but less crowded, while June to September sees monsoon rains which create a lush green environment but may limit outdoor activities.",
    itinerary: [
      {
        title: "Arrival and Orientation",
        description: "Arrive at the ashram and settle into your new environment. The day includes an orientation session to familiarize you with the retreat schedule, facilities, and practices. Participate in a welcome ceremony by the Ganges.",
        activities: [
          "Ashram check-in and orientation",
          "Introduction to retreat practices",
          "Welcome ceremony by the Ganges",
          "Light evening yoga session"
        ],
        meals: "Dinner",
        accommodation: "Shared room in ashram"
      },
      {
        title: "Establishing the Practice",
        description: "Begin your retreat journey with early morning meditation followed by yoga asana practice. The day includes an introduction to pranayama techniques and a lecture on yogic philosophy. Evening Ganga Aarti attendance.",
        activities: [
          "5:30 AM meditation session",
          "Morning yoga practice",
          "Introduction to pranayama",
          "Philosophy lecture",
          "Evening Ganga Aarti"
        ],
        meals: "Breakfast, Lunch, Dinner",
        accommodation: "Shared room in ashram"
      },
      {
        title: "Deepening the Practice",
        description: "The retreat continues with a focus on deepening your meditation and yoga practice. Learn advanced pranayama techniques and participate in a special cleansing ritual. Begin partial silence practice.",
        activities: [
          "Advanced meditation techniques",
          "Asana refinement session",
          "Advanced pranayama practice",
          "Cleansing ritual (Jal Neti)",
          "Forest meditation walk"
        ],
        meals: "Breakfast, Lunch, Dinner",
        accommodation: "Shared room in ashram"
      },
      {
        title: "Silent Day",
        description: "Experience a full day of silence to internalize your practice and deepen your awareness. All activities continue but without verbal communication. This powerful practice helps develop mindfulness and inner awareness.",
        activities: [
          "Silent meditation sessions",
          "Mindful yoga practice",
          "Self-reflection time",
          "Walking meditation by the Ganges",
          "Journal writing session"
        ],
        meals: "Breakfast, Lunch, Dinner",
        accommodation: "Shared room in ashram"
      },
      {
        title: "Yogic Lifestyle",
        description: "Focus on incorporating yogic principles into daily life. The day includes a cooking demonstration of sattvic food, karma yoga (selfless service) practice, and a lecture on maintaining yogic lifestyle beyond the retreat.",
        activities: [
          "Regular meditation and yoga practice",
          "Sattvic cooking demonstration",
          "Karma yoga session",
          "Lecture on yogic lifestyle",
          "Group chanting and mantra practice"
        ],
        meals: "Breakfast, Lunch, Dinner",
        accommodation: "Shared room in ashram"
      },
      {
        title: "Nature Connection",
        description: "Connect with nature through a guided hike in the nearby hills. Practice meditation in natural settings and learn about the yogic perspective on environmental harmony. Return for evening yoga nidra practice.",
        activities: [
          "Morning meditation and yoga",
          "Guided nature hike",
          "Outdoor meditation session",
          "Environmental awareness talk",
          "Evening yoga nidra (yogic sleep)"
        ],
        meals: "Breakfast, Packed Lunch, Dinner",
        accommodation: "Shared room in ashram"
      },
      {
        title: "Integration and Departure",
        description: "The final day focuses on integrating your retreat experience and preparing to return to daily life. Receive personalized practice recommendations and participate in a closing ceremony before departure.",
        activities: [
          "Concluding meditation session",
          "Personal practice planning",
          "Group sharing circle",
          "Closing ceremony",
          "Departure preparations"
        ],
        meals: "Breakfast, Lunch"
      }
    ],
    accommodation: [
      {
        name: "Ganges View Ashram",
        description: "Simple, clean ashram accommodation focused on supporting your spiritual practice. Rooms are basic but comfortable with shared or private options available.",
        location: "Peaceful area near the Ganges River, 3 km from Rishikesh center",
        amenities: ["Meditation hall", "Yoga shala", "Vegetarian dining hall", "Garden spaces", "Hot water (limited hours)"]
      }
    ],
    gallery: [
      "https://images.unsplash.com/photo-1545389336-cf090694435e",
      "https://images.unsplash.com/photo-1506126613408-eca07ce68773",
      "https://images.unsplash.com/photo-1588286840104-8457f3061972",
      "https://images.unsplash.com/photo-1549576490-b0b4831ef60a",
      "https://images.unsplash.com/photo-1507152832244-10d45c7eda57",
      "https://images.unsplash.com/photo-1541848756149-e3843fcfde0f"
    ],
    coordinates: [30.0869, 78.2676],
    locationDescription: "The retreat is located in a peaceful ashram setting on the outskirts of Rishikesh, away from the tourist areas but still accessible. It offers stunning views of the Ganges River and surrounding Himalayan foothills.",
    transportation: [
      {
        type: "bus",
        from: "Delhi",
        price: 450,
        duration: "6-7 hours",
        schedule: "Multiple departures daily from ISBT Kashmere Gate",
        link: "https://utconline.uk.gov.in"
      },
      {
        type: "train",
        from: "Delhi to Haridwar, then local transport to Rishikesh",
        price: 750,
        duration: "5 hours train + 1 hour local transport",
        schedule: "Shatabdi Express departs New Delhi at 6:45 AM",
        link: "https://www.irctc.co.in"
      }
    ]
  },
  {
    id: "himachal-backpacking",
    image: "https://images.unsplash.com/photo-1501854140801-50d01698950b",
    title: "Himachal Backpacking",
    location: "Himachal Pradesh",
    price: 4500,
    days: 6,
    category: "trekking",
    categoryLabel: "Trekking",
    categoryColor: "bg-musafir-trekking",
    description: "A budget backpacking adventure through the stunning landscapes of Himachal Pradesh, covering multiple destinations.",
    longDescription: "This 6-day Himachal Backpacking adventure takes you through some of the most picturesque regions of Himachal Pradesh while keeping costs under ₹5000. Designed for the true budget traveler, this itinerary combines public transportation, budget accommodations, and locally recommended eateries to provide an authentic experience without breaking the bank. From the cultural hub of Manali to the hippie vibes of Kasol and the breathtaking beauty of Tosh, this journey offers a perfect mix of nature, adventure, and culture. You'll trek through pine forests, relax by pristine rivers, experience local Himachali culture, and enjoy the company of fellow backpackers from around the world.",
    highlights: [
      "Experience multiple destinations in Himachal Pradesh",
      "Enjoy authentic local cuisine and budget accommodations",
      "Trek through beautiful forests and mountain trails",
      "Meet fellow backpackers and locals",
      "Visit off-the-beaten-path villages and viewpoints",
      "Experience the diverse landscapes of the Himalayas"
    ],
    bestTimeToVisit: "April to June and September to November offer the best weather for backpacking in Himachal Pradesh. July-August is monsoon season with occasional landslides, while December-March brings snow and cold temperatures, which require additional preparation.",
    itinerary: [
      {
        title: "Delhi to Manali",
        description: "Begin your journey with an overnight bus from Delhi to Manali. The bus journey takes you through winding mountain roads with beautiful scenery as you approach Manali.",
        activities: [
          "Overnight journey to Manali",
          "Watch the changing landscapes from plains to mountains"
        ],
        meals: "Not included (budget for roadside dhaba stops)",
        accommodation: "Overnight sleeper bus"
      },
      {
        title: "Exploring Manali",
        description: "Arrive in Manali by morning and check into your hostel. Spend the day exploring Old Manali's charming cafes, the Hadimba Temple, and the banks of the Beas River. Meet fellow travelers and plan the rest of your journey.",
        activities: [
          "Visit Hadimba Temple",
          "Explore Old Manali's cafes and shops",
          "Relax by the Beas River",
          "Evening walk on Mall Road"
        ],
        meals: "Breakfast at hostel, other meals at budget cafes",
        accommodation: "Backpacker hostel in Old Manali"
      },
      {
        title: "Manali to Kasol",
        description: "Take a morning bus to Kasol, the backpacker's paradise in Parvati Valley. Check into your guesthouse and spend the afternoon exploring Kasol's markets and riverside. Option to hike to Chalal village nearby.",
        activities: [
          "Bus journey to Kasol (3-4 hours)",
          "Explore Kasol's famous market",
          "Riverside relaxation",
          "Optional hike to Chalal village"
        ],
        meals: "Breakfast at hostel, other meals at local restaurants",
        accommodation: "Budget guesthouse in Kasol"
      },
      {
        title: "Kasol to Tosh",
        description: "Travel to Tosh village, one of the most scenic spots in Parvati Valley. The day includes a trek to the village, which offers stunning panoramic views of the Parvati Valley and surrounding mountains.",
        activities: [
          "Local bus to Barshaini",
          "Trek to Tosh village (2-3 km)",
          "Explore traditional Himachali architecture",
          "Sunset views from Tosh"
        ],
        meals: "All meals in local cafes",
        accommodation: "Basic guesthouse in Tosh"
      },
      {
        title: "Tosh and Kheerganga Trek",
        description: "Embark on a day trek to Kheerganga, famous for its hot springs and spectacular views. The 12 km trek passes through beautiful forests and landscapes. Return to Tosh by evening.",
        activities: [
          "Full-day trek to Kheerganga (12 km)",
          "Dip in the natural hot springs",
          "Picnic lunch at the top",
          "Return trek to Tosh"
        ],
        meals: "Breakfast and dinner at guesthouse, packed lunch",
        accommodation: "Basic guesthouse in Tosh"
      },
      {
        title: "Return Journey",
        description: "Begin your return journey from Tosh to Kasol and then to Delhi. The journey gives you time to reflect on your Himalayan adventure and exchange contacts with new friends before returning to city life.",
        activities: [
          "Morning in Tosh",
          "Trek down to Barshaini",
          "Bus to Kasol and then to Delhi",
          "Final views of the Himalayan landscape"
        ],
        meals: "Breakfast at guesthouse"
      }
    ],
    accommodation: [
      {
        name: "Old Manali Backpackers Hostel",
        description: "A vibrant backpacker hostel offering dormitory-style accommodation with basic amenities. A great place to meet fellow travelers and share experiences.",
        location: "Old Manali, walking distance from main attractions",
        amenities: ["Dormitory beds", "Common area", "Shared bathrooms", "Wi-Fi in common areas", "Breakfast included"]
      },
      {
        name: "Kasol Riverside Guesthouse",
        description: "A simple but clean guesthouse located near the Parvati River. Offers private rooms with basic facilities at budget-friendly rates.",
        location: "Kasol main market area",
        amenities: ["Private rooms", "Hot water (limited hours)", "River views from some rooms"]
      },
      {
        name: "Tosh Mountain View Guesthouse",
        description: "Traditional himachali-style guesthouse offering spectacular views of the Parvati Valley. Simple rooms with basic amenities.",
        location: "Tosh village",
        amenities: ["Mountain views", "Home-cooked meals available", "Cozy common area with heater"]
      }
    ],
    gallery: [
      "https://images.unsplash.com/photo-1559103377-003da2e3c021",
      "https://images.unsplash.com/photo-1526936087945-242361f0264f",
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b",
      "https://images.unsplash.com/photo-1551419762-4a3d998f6292",
      "https://images.unsplash.com/photo-1534619039567-7df8af2d3b26",
      "https://images.unsplash.com/photo-1507608869274-d3177c8bb4c7"
    ],
    coordinates: [32.2396, 77.1887],
    locationDescription: "This backpacking route covers multiple locations in Himachal Pradesh's Kullu district, primarily focusing on Manali, Kasol, and Tosh in the beautiful Parvati Valley.",
    transportation: [
      {
        type: "bus",
        from: "Delhi to Manali",
        price: 1200,
        duration: "12-14 hours",
        schedule: "Multiple departures daily from ISBT Kashmere Gate, evening departures recommended",
        link: "https://hrtchp.com"
      },
      {
        type: "bus",
        from: "Local buses within Himachal",
        price: 350,
        duration: "Varies by route",
        schedule: "Regular services on main routes, less frequent to remote areas",
        link: "https://hrtchp.com"
      }
    ]
  }
];
