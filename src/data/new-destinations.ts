
import { Destination } from './types';

export const newDestinations: Destination[] = [
  {
    id: "spiti-valley-expedition",
    image: "https://images.unsplash.com/photo-1624818114754-4a0533e842d5",
    title: "Spiti Valley Expedition",
    location: "Himachal Pradesh",
    price: 4800,
    days: 7,
    category: "trekking",
    categoryLabel: "Trekking",
    categoryColor: "bg-musafir-trekking",
    description: "Explore the remote, high-altitude desert valley of Spiti, with ancient monasteries and breathtaking landscapes.",
    longDescription: "The Spiti Valley Expedition takes you to one of India's most remote and captivating regions. Located in the northeastern part of Himachal Pradesh, Spiti Valley is a cold desert mountain valley situated at an average altitude of 4,270 meters. This 7-day journey traverses through dramatic landscapes featuring stark mountains, pristine lakes, ancient Buddhist monasteries perched on hillsides, and traditional villages frozen in time. Experience the unique Tibetan-influenced culture while staying in homestays and interacting with the warm, hospitable locals. This expedition is designed for adventurous travelers seeking an authentic experience in one of India's last unexplored frontiers, with a budget of under ₹5000 that ensures accessibility without compromising on the full experience.",
    highlights: [
      "Visit 1000-year-old Ki Monastery dramatically perched on a hillside",
      "Explore Chandratal Lake, known as the 'Moon Lake' with its crystal-clear blue waters",
      "Experience authentic homestays in traditional Spitian villages",
      "Cross the treacherous Kunzum Pass (4,590m) with panoramic Himalayan views",
      "Witness the unique ecosystem of this high-altitude cold desert"
    ],
    bestTimeToVisit: "June to September offers the best weather conditions. The region is largely inaccessible during winter (November to May) due to heavy snowfall blocking the passes.",
    itinerary: [
      {
        title: "Arrival in Manali",
        description: "Begin your journey in the popular hill station of Manali. Spend the day acclimatizing to the higher altitude and purchasing last-minute supplies for the remote journey ahead.",
        activities: [
          "Check-in at budget hotel or hostel in Old Manali",
          "Orientation meeting with fellow travelers",
          "Visit local market for supplies and warm clothing if needed",
          "Early dinner and briefing about the expedition ahead"
        ],
        meals: "Dinner",
        accommodation: "Budget hostel in Old Manali (₹400-600 per night)"
      },
      {
        title: "Manali to Kaza via Rohtang Pass and Kunzum Pass",
        description: "Early morning departure for a long, spectacular drive through Rohtang Pass (3,978m) and Kunzum Pass (4,590m) to reach Kaza, the administrative center of Spiti Valley. The dramatic change in landscape from green Kullu Valley to the barren, moon-like terrain of Spiti is breathtaking.",
        activities: [
          "Full-day scenic drive through two high mountain passes",
          "Multiple photography stops at panoramic viewpoints",
          "First glimpse of the stark Spiti Valley landscapes",
          "Evening arrival in Kaza with time to rest and acclimatize"
        ],
        meals: "Breakfast, packed lunch, dinner",
        accommodation: "Simple guesthouse in Kaza (₹500-700 per night)"
      },
      {
        title: "Kaza and Key Monastery",
        description: "Explore Kaza in the morning to get familiar with the largest settlement in Spiti. After lunch, visit the iconic Ki (Key) Monastery, perched dramatically on a hill at 4,166 meters and dating back to the 11th century. This is the largest monastery in Spiti Valley and offers spectacular views.",
        activities: [
          "Morning visit to Kaza market and local ecological center",
          "Afternoon excursion to the ancient Key Monastery",
          "Interaction with Buddhist monks and learning about their daily life",
          "Meditation session at the monastery (if permitted)",
          "Evening return to Kaza for dinner and rest"
        ],
        meals: "Breakfast, dinner",
        accommodation: "Simple guesthouse in Kaza"
      },
      {
        title: "Kaza to Langza, Hikkim, and Komic Villages",
        description: "Today you'll visit three of the highest inhabited villages in Asia. Langza (4,400m) is known for its Buddha statue and fossil hunting. Hikkim (4,440m) houses the world's highest post office. Komic (4,587m) is the highest motorable village with an ancient monastery.",
        activities: [
          "Morning drive to Langza village and fossil hunting",
          "Visit to Hikkim to send a postcard from the world's highest post office",
          "Exploration of Komic village and its ancient monastery",
          "Interaction with locals and learning about high-altitude farming",
          "Homestay experience with a local family"
        ],
        meals: "Breakfast, lunch, dinner",
        accommodation: "Homestay in one of the villages (₹700 including meals)"
      },
      {
        title: "Dhankar Monastery and Lake Trek",
        description: "Visit the 1,200-year-old Dhankar Monastery precariously perched on a cliff. After exploring the monastery, undertake a moderate 2-hour trek to the high-altitude Dhankar Lake, a pristine water body offering surreal reflections of the surrounding peaks.",
        activities: [
          "Morning exploration of ancient Dhankar Monastery",
          "Trek to Dhankar Lake (4,140m)",
          "Picnic lunch with panoramic mountain views",
          "Transfer to Pin Valley for overnight stay"
        ],
        meals: "Breakfast, packed lunch, dinner",
        accommodation: "Homestay in Pin Valley (₹700 including meals)"
      },
      {
        title: "Pin Valley and Mudh Village",
        description: "Explore the unique Pin Valley, home to the endangered snow leopard and ibex. Visit Mudh, the last village of Pin Valley, and experience the untouched culture and traditions of this remote region. The stunning contrast of green Pin Valley against the barren mountains makes for incredible photographs.",
        activities: [
          "Early morning wildlife spotting (seasonal chance to see blue sheep and ibex)",
          "Exploration of traditional Mudh village",
          "Short hike to nearby viewpoint",
          "Interaction with locals and learning about traditional Spitian life",
          "Cultural evening with local folk music and dances"
        ],
        meals: "Breakfast, lunch, dinner",
        accommodation: "Homestay in Mudh village (₹700 including meals)"
      },
      {
        title: "Chandratal Lake and Return Journey",
        description: "Early departure for Chandratal Lake (4,250m), known as the 'Moon Lake' due to its crescent shape. Spend time by this pristine blue lake surrounded by bare mountains. After lunch, begin the return journey towards Manali, staying overnight at a camp near Batal or Chhatru depending on time and weather conditions.",
        activities: [
          "Morning drive to Chandratal Lake",
          "Circumambulation of the sacred lake",
          "Picnic lunch with lake views",
          "Evening drive towards Manali",
          "Overnight at basic camps or simple accommodation"
        ],
        meals: "Breakfast, packed lunch, dinner",
        accommodation: "Basic camp or dhaba stay near Batal (₹500-800)"
      }
    ],
    accommodation: [
      {
        name: "Budget Guesthouses",
        description: "Simple, clean accommodations in the larger settlements like Kaza, offering basic amenities with warm bedding essential for the cold climate.",
        location: "Kaza and other larger settlements",
        amenities: ["Hot water (limited hours)", "Basic furniture", "Some with attached bathrooms", "Common dining area"]
      },
      {
        name: "Village Homestays",
        description: "Authentic homestays with local families in remote villages, providing a unique opportunity to experience the traditional lifestyle, cuisine, and customs of Spiti Valley.",
        location: "Various villages including Langza, Komic, Mudh",
        amenities: ["Home-cooked meals", "Traditional Spitian hospitality", "Cultural immersion", "Shared common spaces with family"]
      },
      {
        name: "Roadside Camps",
        description: "Basic tented accommodation or simple rooms at dhabas (roadside eateries) in extremely remote areas where no other options exist.",
        location: "Near Chandratal, Batal, or en route",
        amenities: ["Basic bedding", "Simple vegetarian meals", "Shared bathroom facilities", "Incredible stargazing"]
      }
    ],
    gallery: [
      "https://images.unsplash.com/photo-1625243793415-43bde4a6a6a1",
      "https://images.unsplash.com/photo-1572508589584-92e59d720df8",
      "https://images.unsplash.com/photo-1591978698624-ce0764550558",
      "https://images.unsplash.com/photo-1624818114754-4a0533e842d5",
      "https://images.unsplash.com/photo-1619526881542-c81baff67530"
    ],
    coordinates: [32.2462, 78.0689], // Coordinates for Kaza, the main town in Spiti
    locationDescription: "Spiti Valley is located in the northeastern part of Himachal Pradesh, bordering Tibet. It's one of India's least populated districts and is accessible via two routes: from Manali through Rohtang and Kunzum passes, or from Shimla through Kinnaur (a longer but less challenging route).",
    transportation: [
      {
        type: "bus",
        from: "Delhi to Manali",
        price: 900,
        duration: "12-14 hours",
        schedule: "Multiple departures daily (evening departures recommended for overnight journey)",
        link: "https://hrtchp.com"
      },
      {
        type: "bus",
        from: "Manali to Kaza",
        price: 450,
        duration: "10-12 hours",
        schedule: "Limited government buses (2-3 per week), daily shared taxis more reliable",
        link: "https://hrtchp.com"
      },
      {
        type: "jeep",
        from: "Shared jeep from Manali to Kaza",
        price: 1000,
        duration: "8-10 hours",
        schedule: "Daily departures in morning (weather dependent)",
        link: "Book through local travel agencies in Manali"
      }
    ]
  },
  {
    id: "tawang-monastery-trail",
    image: "https://images.unsplash.com/photo-1630332458387-65c5dd60e071",
    title: "Tawang Monastery Trail",
    location: "Arunachal Pradesh",
    price: 4900,
    days: 6,
    category: "trekking",
    categoryLabel: "Trekking",
    categoryColor: "bg-musafir-trekking",
    description: "Journey to India's remote northeast to visit the second largest monastery in the world, set amid breathtaking Himalayan landscapes.",
    longDescription: "The Tawang Monastery Trail takes you to one of India's most remote and politically sensitive regions - the spectacular Arunachal Pradesh. This 6-day journey focuses on reaching Tawang, home to the second-largest Buddhist monastery in the world (after Potala Palace in Lhasa, Tibet). Located at an altitude of about 3,000 meters, this 400-year-old monastery is known locally as Galden Namgey Lhatse, meaning 'celestial paradise on clear nights.' The trail passes through dramatic mountain landscapes, pristine lakes, scenic waterfalls, and traditional Monpa tribal villages. This expedition requires special permits as Arunachal Pradesh is a restricted area, but the extra paperwork is worth it for experiencing one of India's last truly untouched regions. The itinerary is designed for budget travelers seeking unique cultural experiences without excessive expenses.",
    highlights: [
      "Visit the 400-year-old Tawang Monastery, the second largest in the world",
      "Cross the scenic Sela Pass at 13,700 feet with panoramic Himalayan views",
      "Experience the unique culture of the Monpa tribe, one of India's least known ethnic groups",
      "See the mesmerizing Nuranang Waterfall (Jang Falls), featured in Bollywood films",
      "Visit Madhuri Lake (Sangetsar Lake), renamed after a famous movie was shot there"
    ],
    bestTimeToVisit: "April to October offers the best weather conditions. Avoid the monsoon period (June-August) when landslides are common. Winter (November-March) brings heavy snowfall but offers a magical snow-covered landscape for those prepared for extreme cold.",
    itinerary: [
      {
        title: "Arrival in Guwahati and Transfer to Bhalukpong",
        description: "Your journey begins in Guwahati, Assam's largest city. After arrival, transfer by shared taxi or bus to Bhalukpong, the entry point to Arunachal Pradesh where your permits will be checked.",
        activities: [
          "Arrival at Guwahati (by flight or train)",
          "Complete permit formalities if not done in advance",
          "Afternoon drive to Bhalukpong (250 km, 5-6 hours)",
          "Evening walk along the Kameng River",
          "Dinner and overnight stay in basic accommodation"
        ],
        meals: "Dinner",
        accommodation: "Simple guesthouse in Bhalukpong (₹600-800 per night)"
      },
      {
        title: "Bhalukpong to Dirang via Bomdila",
        description: "Early morning departure for a scenic drive through the eastern Himalayan ranges. Stop at Bomdila (8,000 ft) to visit the Bomdila Monastery and enjoy panoramic views of Himalayan peaks. Continue to Dirang for overnight stay.",
        activities: [
          "Morning drive from Bhalukpong to Bomdila (4-5 hours)",
          "Visit to Bomdila Monastery with cultural introduction to Buddhism",
          "Lunch at local restaurant in Bomdila",
          "Continue drive to Dirang (2 hours)",
          "Evening visit to Dirang Dzong (ancient fort) and hot springs"
        ],
        meals: "Breakfast, dinner",
        accommodation: "Budget hotel or homestay in Dirang (₹700-900)"
      },
      {
        title: "Dirang to Tawang via Sela Pass",
        description: "The most challenging day of driving takes you through the famous Sela Pass (13,700 ft), often covered in snow. Visit the Sela Lake before continuing to Tawang. En route, stop at the beautiful Nuranang Waterfall (Jang Falls).",
        activities: [
          "Early departure for the long drive to Tawang (8-9 hours total)",
          "Crossing the high-altitude Sela Pass with photo stops",
          "Visit to the serene Sela Lake",
          "Lunch at basic army-run cafe near Sela",
          "Afternoon visit to the spectacular Nuranang Waterfall",
          "Evening arrival in Tawang with time to rest and acclimatize"
        ],
        meals: "Breakfast, dinner",
        accommodation: "Budget hotel in Tawang (₹800-1000)"
      },
      {
        title: "Tawang Monastery and Local Exploration",
        description: "Dedicate the day to exploring the magnificent Tawang Monastery, home to over 500 monks. The monastery houses valuable scriptures, thangkas (scroll paintings), and a 27-foot golden Buddha statue. Later, explore Tawang War Memorial and the local market.",
        activities: [
          "Morning visit to Tawang Monastery with local guide",
          "Participation in morning prayer ceremony (if timing permits)",
          "Exploration of monastery museum and library",
          "Lunch at monastery kitchen (simple vegetarian meal)",
          "Afternoon visit to Tawang War Memorial",
          "Evening exploration of Tawang market for local crafts"
        ],
        meals: "Breakfast, dinner",
        accommodation: "Same budget hotel in Tawang"
      },
      {
        title: "Excursion to Madhuri Lake and Bum La Pass",
        description: "Take a day trip to the beautiful Madhuri Lake (Sangetsar Lake), named after actress Madhuri Dixit who shot a famous movie scene here. If permits allow and weather conditions are favorable, continue to Bum La Pass on the Indo-China border (special additional permits required).",
        activities: [
          "Early morning permit check for Bum La (if applicable)",
          "Drive to Madhuri Lake (25 km from Tawang)",
          "Exploration and photography at the picturesque lake",
          "Visit to Y-Junction, the point where roads to different border areas diverge",
          "Optional: Continue to Bum La Pass if permitted",
          "Return to Tawang by evening"
        ],
        meals: "Breakfast, packed lunch, dinner",
        accommodation: "Same budget hotel in Tawang"
      },
      {
        title: "Return Journey: Tawang to Bomdila",
        description: "Begin your return journey, retracing your route back towards Assam. Break the long journey with an overnight stay in Bomdila, allowing time to explore different aspects of this town on the return leg.",
        activities: [
          "Morning departure from Tawang",
          "Return drive through Sela Pass with different perspective",
          "Lunch stop at Dirang",
          "Evening arrival in Bomdila",
          "Visit to lower Bomdila market for local handicrafts",
          "Optional visit to Bomdila viewpoint for sunset"
        ],
        meals: "Breakfast, dinner",
        accommodation: "Guesthouse in Bomdila (₹700-900)"
      }
    ],
    accommodation: [
      {
        name: "Budget Hotels and Guesthouses",
        description: "Simple accommodations in the main towns with basic amenities. While not luxurious, these places offer clean rooms, warm bedding (essential in the cold climate), and usually include breakfast.",
        location: "Bhalukpong, Bomdila, Dirang, Tawang",
        amenities: ["Clean bedding", "Hot water (limited hours)", "Basic furniture", "Some with mountain views"]
      },
      {
        name: "Homestays",
        description: "In some locations, homestays with local Monpa families can be arranged, offering authentic cultural experiences and home-cooked meals featuring local specialties like thukpa, momos, and butter tea.",
        location: "Dirang and smaller villages",
        amenities: ["Home-cooked local cuisine", "Cultural interaction", "Traditional house architecture", "Authentic local experience"]
      }
    ],
    gallery: [
      "https://images.unsplash.com/photo-1630332458387-65c5dd60e071",
      "https://images.unsplash.com/photo-1609527605242-42ab6943abbf",
      "https://images.unsplash.com/photo-1599661046827-25d9f1f19f5c",
      "https://images.unsplash.com/photo-1599661046872-cae760800243",
      "https://images.unsplash.com/photo-1605181063429-5a287134f35c"
    ],
    coordinates: [27.5859, 91.8594], // Coordinates for Tawang
    locationDescription: "Tawang is located in the northwestern part of Arunachal Pradesh, sharing borders with both Bhutan and China (Tibet). It sits at an altitude of about 3,000 meters above sea level and is primarily accessible by road from Guwahati or Tezpur in Assam.",
    transportation: [
      {
        type: "flight",
        from: "Major cities to Guwahati",
        price: 2500,
        duration: "2-3 hours depending on origin",
        schedule: "Multiple daily flights from Delhi, Kolkata, Mumbai",
        link: "Various airlines"
      },
      {
        type: "shared taxi",
        from: "Guwahati to Bhalukpong",
        price: 800,
        duration: "5-6 hours",
        schedule: "Morning departures from Guwahati",
        link: "Available at Guwahati ISBT"
      },
      {
        type: "shared sumo",
        from: "Transportation within Arunachal",
        price: 1200,
        duration: "Varies by destination",
        schedule: "Daily shared Sumo vehicles (Toyota SUVs) connect major towns",
        link: "Book through local travel agencies"
      }
    ]
  },
  {
    id: "andaman-islands-expedition",
    image: "https://images.unsplash.com/photo-1597394731847-63e1f2e6ffc5",
    title: "Andaman Remote Island Hopping",
    location: "Andaman Islands",
    price: 4950,
    days: 8,
    category: "trekking",
    categoryLabel: "Trekking",
    categoryColor: "bg-musafir-trekking",
    description: "Explore the remote, less-visited islands of the Andaman archipelago, with pristine beaches, indigenous cultures, and world-class snorkeling.",
    longDescription: "The Andaman Remote Island Hopping expedition takes you beyond the tourist hotspots to explore the less frequented islands of this stunning archipelago in the Bay of Bengal. While Havelock and Neil Islands have become popular destinations, this specialized budget-friendly 8-day journey focuses on the more remote areas including Long Island, Rangat, and Little Andaman, where traditional ways of life continue and pristine beaches remain relatively untouched. You'll get opportunities to interact with settlers from mainland India who have adapted to island life over generations, snorkel in crystal-clear waters with vibrant coral reefs, trek through dense tropical forests, and witness unique limestone formations. This expedition balances adventure with cultural immersion while staying within a budget of ₹5000, making this remote paradise accessible to budget-conscious travelers seeking authentic experiences away from the crowds.",
    highlights: [
      "Visit the remote Long Island with its undeveloped beaches and simple village life",
      "Snorkel in the pristine waters of Guitar Island with excellent coral formations",
      "Trek through dense mangrove forests in Rangat and witness saltwater crocodiles safely",
      "Experience the tribal reserve boundaries and learn about protected indigenous communities",
      "Enjoy pristine beaches at Little Andaman with almost no other tourists"
    ],
    bestTimeToVisit: "October to May offers the best weather conditions with clear waters ideal for snorkeling and diving. Avoid the monsoon period (June-September) when heavy rainfall can disrupt ferry schedules and underwater visibility is poor.",
    itinerary: [
      {
        title: "Arrival in Port Blair",
        description: "Arrive in Port Blair, the capital of the Andaman Islands. After checking into your budget accommodation, visit the historic Cellular Jail and attend the Light and Sound show that narrates the story of India's freedom fighters who were imprisoned here during British colonial rule.",
        activities: [
          "Arrival at Port Blair airport",
          "Check-in at budget guesthouse near Aberdeen Bazaar",
          "Afternoon visit to Cellular Jail National Memorial",
          "Evening Light and Sound show at Cellular Jail",
          "Dinner at local restaurant serving fresh seafood"
        ],
        meals: "Dinner",
        accommodation: "Budget guesthouse in Port Blair (₹600-800 per night)"
      },
      {
        title: "Port Blair to Rangat",
        description: "Take an early morning ferry to Rangat, located in Middle Andaman. This lesser-visited area is known for its mangrove forests and secluded beaches. After arrival, visit the Dhani Nallah Mangrove Walkway, a wooden pathway through dense mangroves where you might spot saltwater crocodiles from a safe distance.",
        activities: [
          "Early morning ferry to Rangat (3-4 hours)",
          "Check-in at government-run guesthouse or budget accommodation",
          "Afternoon visit to Dhani Nallah Mangrove Walkway",
          "Crocodile spotting from safe viewing platforms",
          "Evening walk in Rangat town to experience local island life"
        ],
        meals: "Breakfast, dinner",
        accommodation: "Government rest house or budget accommodation (₹500-700)"
      },
      {
        title: "Rangat: Amkunj Beach and Turtle Nesting",
        description: "Visit the secluded Amkunj Beach in the morning, known for its clear waters and peaceful atmosphere. In the afternoon, visit the Cuthbert Bay Beach Turtle Sanctuary, an important nesting site for sea turtles (seasonal: December to February is nesting season).",
        activities: [
          "Morning relaxation at Amkunj Beach",
          "Fresh coconut water and local snacks at beach shacks",
          "Afternoon visit to Cuthbert Bay Turtle Sanctuary",
          "Evening session with forest department staff about conservation efforts",
          "Optional: Night visit to beaches during turtle nesting season"
        ],
        meals: "Breakfast, dinner",
        accommodation: "Same as previous night"
      },
      {
        title: "Rangat to Long Island",
        description: "Take a morning ferry to the remote Long Island, home to only about 2,000 people. This island offers a glimpse into the simple island life, far from the tourist crowds. After settling in, explore Lalaji Bay Beach, accessible via a 5 km forest trek or boat ride.",
        activities: [
          "Morning ferry to Long Island (1-2 hours)",
          "Check-in at the only guesthouse on the island",
          "Lunch at the guesthouse dining room",
          "Afternoon trek through forest to Lalaji Bay Beach",
          "Free time for swimming and relaxation",
          "Evening bonfire on the beach (if permitted)"
        ],
        meals: "Breakfast, lunch, dinner",
        accommodation: "Blue Planet Guesthouse or Forest Department Guesthouse (₹600-800)"
      },
      {
        title: "Long Island Exploration",
        description: "Spend the day exploring Long Island's natural beauty. Take a boat trip to nearby Guitar Island, known for excellent snorkeling opportunities with diverse coral formations and marine life. The afternoon is free for village walks to observe the simple lifestyle of island inhabitants.",
        activities: [
          "Boat trip to Guitar Island for snorkeling",
          "Fish identification with local guide",
          "Packed lunch on Guitar Island",
          "Afternoon village walk to meet locals",
          "Visit to small island agriculture farms",
          "Evening seafood dinner prepared by local family"
        ],
        meals: "Breakfast, packed lunch, dinner",
        accommodation: "Same as previous night"
      },
      {
        title: "Long Island to Little Andaman",
        description: "Early morning departure for Little Andaman Island, the fourth largest island in the archipelago but far less visited than the main tourist centers. The journey involves returning to Port Blair first, then taking an overnight ferry to Little Andaman.",
        activities: [
          "Morning ferry from Long Island to Port Blair",
          "Free time in Port Blair for lunch and supplies",
          "Evening ferry to Little Andaman (10-12 hours)",
          "Overnight journey in basic ferry accommodation"
        ],
        meals: "Breakfast",
        accommodation: "Overnight on ferry (deck class or basic cabin)"
      },
      {
        title: "Little Andaman Island",
        description: "Arrive in Little Andaman in the morning and transfer to basic accommodation. Visit the stunning Butler Bay Beach with its white sand and blue waters. In the afternoon, visit the White Surf Waterfall, one of the few freshwater waterfalls in the Andaman Islands.",
        activities: [
          "Morning arrival at Hut Bay, Little Andaman",
          "Check-in at government guesthouse or local homestay",
          "Visit to Butler Bay Beach for swimming and relaxation",
          "Afternoon trip to White Surf Waterfall",
          "Evening walk to observe local life in Hut Bay settlement"
        ],
        meals: "Lunch, dinner",
        accommodation: "Government guesthouse or local homestay (₹500-700)"
      },
      {
        title: "Little Andaman to Port Blair and Departure",
        description: "Take the morning ferry back to Port Blair. Depending on your departure flight timing, visit the Anthropological Museum to learn about the indigenous tribes of the Andaman Islands before heading to the airport for your departure flight.",
        activities: [
          "Morning ferry to Port Blair (7-8 hours)",
          "Visit to Anthropological Museum if time permits",
          "Last-minute souvenir shopping at Aberdeen Bazaar",
          "Transfer to airport for departure"
        ],
        meals: "Breakfast"
      }
    ],
    accommodation: [
      {
        name: "Government Guesthouses",
        description: "Basic but clean accommodations run by the Andaman administration, offering affordable stays in remote locations where private options are limited or non-existent.",
        location: "Various islands",
        amenities: ["Clean rooms", "Basic furniture", "Running water (timing may vary)", "Some with fans or basic air conditioning"]
      },
      {
        name: "Island Homestays",
        description: "Simple rooms in family homes on islands like Long Island and Little Andaman, providing authentic local experiences and home-cooked meals featuring fresh seafood and tropical fruits.",
        location: "Long Island, Little Andaman",
        amenities: ["Home-cooked meals", "Local knowledge sharing", "Cultural immersion", "Basic facilities"]
      },
      {
        name: "Budget Guesthouses",
        description: "Private budget accommodations in Port Blair and some developed areas, offering slightly more facilities than government options but still maintaining budget-friendly rates.",
        location: "Port Blair, Rangat",
        amenities: ["Private bathrooms", "More reliable electricity", "Some with Wi-Fi (limited)", "Restaurant or meal service"]
      }
    ],
    gallery: [
      "https://images.unsplash.com/photo-1587978186049-e08d5636e03e",
      "https://images.unsplash.com/photo-1597394731791-5d7725e3bc0b",
      "https://images.unsplash.com/photo-1576811371936-c992eb5c9e22",
      "https://images.unsplash.com/photo-1597394731847-63e1f2e6ffc5",
      "https://images.unsplash.com/photo-1580454095329-a11a263b189d"
    ],
    coordinates: [11.6834, 92.7675], // General coordinates for the Andaman Islands
    locationDescription: "The Andaman Islands are an Indian archipelago in the Bay of Bengal, closer to Myanmar and Thailand than to mainland India. This expedition focuses on the less-visited islands including Long Island, Rangat in Middle Andaman, and Little Andaman, which offer more authentic experiences away from the tourist centers of Port Blair, Havelock, and Neil Island.",
    transportation: [
      {
        type: "flight",
        from: "Delhi/Chennai/Kolkata to Port Blair",
        price: 3500,
        duration: "2-3 hours depending on origin",
        schedule: "Daily flights, book at least 2 months in advance for best rates",
        link: "Various airlines"
      },
      {
        type: "ferry",
        from: "Between islands",
        price: 350,
        duration: "Varies by route (1-12 hours)",
        schedule: "Government-operated ferries with varying frequency",
        link: "https://www.andaman.gov.in/ferry"
      },
      {
        type: "local bus",
        from: "Within larger islands",
        price: 40,
        duration: "Varies by route",
        schedule: "Regular service on main islands",
        link: "Tickets available at bus stations"
      }
    ]
  }
];
