
import { Destination } from './types';

export const newDestinations: Destination[] = [
  {
    id: "mussoorie-retreat",
    image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e",
    title: "Mussoorie Hill Retreat",
    location: "Uttarakhand",
    price: 3800,
    days: 4,
    category: "hiking",
    categoryLabel: "Hiking",
    categoryColor: "bg-musafir-forest",
    description: "Explore the beautiful Queen of Hills with its colonial charm, panoramic views, and serene hiking trails.",
    longDescription: "Nestled in the foothills of the Garhwal Himalayan range, Mussoorie offers a perfect budget retreat with colonial-era architecture, panoramic mountain views, and refreshing hiking trails. Known as the 'Queen of Hills,' this hill station provides a cool escape from the plains with its pleasant climate and lush landscapes. This 4-day itinerary combines scenic nature walks, visits to historical landmarks, and mountain viewpoints, all while keeping costs under ₹4000. You'll stay in affordable guesthouses, travel using local transportation, and enjoy the simple pleasure of wandering through this charming hill station with its Mall Road, waterfalls, and spectacular vistas of the Doon Valley and distant Himalayan peaks.",
    highlights: [
      "Panoramic views from Gun Hill Point",
      "Heritage walk through colonial architecture",
      "Hike to Kempty Falls",
      "Explore the bustling Mall Road",
      "Visit the historic Christ Church"
    ],
    bestTimeToVisit: "March to June and September to November offer the most pleasant weather. Avoid July-August (monsoon) when landslides are common, and December-February is very cold but offers snow views.",
    itinerary: [
      {
        title: "Arrival and Mall Road",
        description: "Arrive in Mussoorie by bus or shared taxi. Check into your guesthouse and spend the afternoon exploring the famous Mall Road with its colonial buildings, shops, and cafes. Enjoy the sunset from the Library Point viewpoint.",
        activities: [
          "Check-in to guesthouse",
          "Stroll along Mall Road",
          "Visit Mussoorie Heritage Centre",
          "Sunset at Library Point"
        ],
        meals: "Dinner",
        accommodation: "Budget guesthouse near Mall Road"
      },
      {
        title: "Gun Hill and Camel's Back Road",
        description: "Take the cable car to Gun Hill Point for panoramic views of the Himalayan ranges. Afterward, walk along the famous Camel's Back Road, named for a rock resembling a camel's hump. Visit the beautiful Christ Church and Company Garden.",
        activities: [
          "Cable car to Gun Hill",
          "Walking tour of Camel's Back Road",
          "Visit Christ Church",
          "Explore Company Garden"
        ],
        meals: "Breakfast, Dinner",
        accommodation: "Budget guesthouse near Mall Road"
      },
      {
        title: "Kempty Falls and Lal Tibba",
        description: "Take a shared taxi to the famous Kempty Falls. Spend time enjoying the waterfall and surroundings. In the afternoon, visit Lal Tibba, the highest point in Mussoorie offering spectacular mountain views.",
        activities: [
          "Visit Kempty Falls",
          "Optional swimming at the falls",
          "Visit Lal Tibba viewpoint",
          "Evening at Picture Palace area"
        ],
        meals: "Breakfast, Dinner",
        accommodation: "Budget guesthouse near Mall Road"
      },
      {
        title: "Cloud's End and Departure",
        description: "On your final day, visit Cloud's End, where Mussoorie meets the sky at the edge of the valley. Explore the surrounding forest trails before departing from Mussoorie in the afternoon.",
        activities: [
          "Visit Cloud's End",
          "Short forest hike",
          "Souvenir shopping on Mall Road",
          "Departure from Mussoorie"
        ],
        meals: "Breakfast"
      }
    ],
    accommodation: [
      {
        name: "Himalayan View Guesthouse",
        description: "A simple, family-run guesthouse offering clean rooms with basic amenities. Located just a short walk from Mall Road, it provides good value with mountain views from some rooms.",
        location: "Near Picture Palace, Mussoorie",
        amenities: ["Hot water (morning/evening)", "Wi-Fi in common areas", "Room service", "Mountain views"]
      }
    ],
    gallery: [
      "https://images.unsplash.com/photo-1563038063-1ff5761e31f8",
      "https://images.unsplash.com/photo-1486870591958-9b9d0d1dda99",
      "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05",
      "https://images.unsplash.com/photo-1570432818109-c4e7a07f13f0",
      "https://images.unsplash.com/photo-1544954412-78da2cef3c47"
    ],
    coordinates: [30.4598, 78.0644],
    locationDescription: "Mussoorie is located in the Dehradun district of Uttarakhand state, about 35 km from Dehradun and 290 km from Delhi. It sits at an average altitude of 1,880 meters (6,170 ft) above sea level.",
    transportation: [
      {
        type: "bus",
        from: "Delhi",
        price: 450,
        duration: "7-8 hours",
        schedule: "Daily departures from ISBT Kashmere Gate at 6 AM and 10 PM",
        link: "https://uttarakhandtransport.gov.in"
      },
      {
        type: "train",
        from: "Delhi to Dehradun, then local taxi to Mussoorie",
        price: 700,
        duration: "6 hours train + 1 hour taxi",
        schedule: "Shatabdi Express departs New Delhi at 6:45 AM",
        link: "https://www.irctc.co.in"
      }
    ]
  },
  {
    id: "varanasi-pilgrimage",
    image: "https://images.unsplash.com/photo-1561361058-c24cecda2775",
    title: "Varanasi Sacred Pilgrimage",
    location: "Uttar Pradesh",
    price: 3200,
    days: 4,
    category: "religious",
    categoryLabel: "Religious",
    categoryColor: "bg-musafir-spiritual",
    description: "Experience the spiritual heart of India along the sacred Ganges River with ancient temples and mystical ceremonies.",
    longDescription: "Varanasi, one of the world's oldest continuously inhabited cities, offers a profound spiritual experience on the banks of the sacred Ganges River. This 4-day budget pilgrimage immerses you in the heart of Hindu traditions, with dawn boat rides along the ghats, evening Ganga Aarti ceremonies, and visits to ancient temples that date back thousands of years. Stay in simple ashrams or budget guesthouses, navigate the mystical narrow lanes of the old city, and witness the cycle of life and death that plays out openly on the burning ghats. This journey provides a window into India's spiritual soul and timeless traditions while keeping costs affordable for budget-conscious travelers seeking a meaningful pilgrimage experience.",
    highlights: [
      "Dawn boat ride along the sacred ghats",
      "Evening Ganga Aarti ceremony at Dashashwamedh Ghat",
      "Visit to the sacred Kashi Vishwanath Temple",
      "Exploration of ancient temples and narrow lanes",
      "Experience the spiritual atmosphere of this holy city"
    ],
    bestTimeToVisit: "October to March offers pleasant weather. Avoid summer months (April-June) when temperatures regularly exceed 40°C. The Dev Deepawali festival in November is particularly spectacular.",
    itinerary: [
      {
        title: "Arrival and Evening Aarti",
        description: "Arrive in Varanasi and check into your accommodation. In the evening, witness the spectacular Ganga Aarti ceremony at Dashashwamedh Ghat with its synchronized rituals, chants, and fire offerings.",
        activities: [
          "Check-in to guesthouse/ashram",
          "Evening walk along the ghats",
          "Witness Ganga Aarti ceremony",
          "Dinner at a local eatery"
        ],
        meals: "Dinner",
        accommodation: "Budget guesthouse near the ghats"
      },
      {
        title: "Dawn Boat Ride and Temple Tour",
        description: "Wake before dawn for a sunrise boat ride along the Ganges, witnessing the city come to life as pilgrims perform their morning rituals. After breakfast, tour the famous Kashi Vishwanath Temple and other significant temples.",
        activities: [
          "Sunrise boat ride on the Ganges",
          "Visit Kashi Vishwanath Temple",
          "Explore Sankat Mochan Hanuman Temple",
          "Walk through the ancient lanes of the old city"
        ],
        meals: "Breakfast, Dinner",
        accommodation: "Budget guesthouse near the ghats"
      },
      {
        title: "Sarnath and Evening Rituals",
        description: "Take a day trip to nearby Sarnath, where Buddha gave his first sermon. Visit the archaeological museum and Buddhist structures. Return to Varanasi for evening ceremonies at Assi Ghat.",
        activities: [
          "Visit to Sarnath (12 km from Varanasi)",
          "Explore Dhamek Stupa and museum",
          "Evening ceremony at Assi Ghat",
          "Night walk along the ghats"
        ],
        meals: "Breakfast, Dinner",
        accommodation: "Budget guesthouse near the ghats"
      },
      {
        title: "Morning Meditation and Departure",
        description: "Begin your final day with an optional meditation session by the Ganges. Visit Tulsi Manas Temple and Bharat Mata Temple before departing from Varanasi with spiritual memories.",
        activities: [
          "Morning meditation by the Ganges",
          "Visit Tulsi Manas Temple",
          "Explore Bharat Mata Temple",
          "Final walk through the ghats before departure"
        ],
        meals: "Breakfast"
      }
    ],
    accommodation: [
      {
        name: "Ganges View Guesthouse",
        description: "A simple, clean guesthouse offering basic rooms with river views. Located near Assi Ghat, it provides affordable accommodation within walking distance of main attractions.",
        location: "Near Assi Ghat, Varanasi",
        amenities: ["Hot water", "Rooftop area", "Laundry service", "Simple vegetarian meals"]
      }
    ],
    gallery: [
      "https://images.unsplash.com/photo-1571536802807-30451e3955d8",
      "https://images.unsplash.com/photo-1576437734022-66ef6273bed5",
      "https://images.unsplash.com/photo-1590077319071-cf3dd2567b6d",
      "https://images.unsplash.com/photo-1627894006066-db301b53dd5a",
      "https://images.unsplash.com/photo-1591703039520-534a0b9baef2"
    ],
    coordinates: [25.3176, 83.0064],
    locationDescription: "Varanasi is located in the northern Indian state of Uttar Pradesh, on the banks of the Ganges River. It's approximately 320 km from Lucknow and 800 km from Delhi.",
    transportation: [
      {
        type: "train",
        from: "Delhi",
        price: 650,
        duration: "12-14 hours",
        schedule: "Multiple daily trains including Shiv Ganga Express (evening departure)",
        link: "https://www.irctc.co.in"
      },
      {
        type: "bus",
        from: "Lucknow to Varanasi",
        price: 450,
        duration: "6-7 hours",
        schedule: "Regular state and private buses from Alambagh Bus Terminal",
        link: "https://upsrtconline.co.in"
      }
    ]
  },
  {
    id: "ladakh-adventure",
    image: "https://images.unsplash.com/photo-1472396961693-142e6e269027",
    title: "Ladakh Himalayan Expedition",
    location: "Ladakh",
    price: 4950,
    days: 7,
    category: "trekking",
    categoryLabel: "Trekking",
    categoryColor: "bg-musafir-trekking",
    description: "Experience the breathtaking landscapes of Ladakh with its high-altitude lakes, ancient monasteries, and stunning mountain passes.",
    longDescription: "Ladakh, known as the 'Land of High Passes,' offers an extraordinary landscape of stark mountains, deep blue lakes, and ancient Buddhist monasteries. This 7-day budget expedition takes you through the best of this Himalayan desert region while keeping costs under ₹5000. The journey includes visits to the famous Pangong Lake with its changing colors, ancient monasteries perched on hillsides, the magnetic hill phenomenon, and the confluence of the Indus and Zanskar rivers. You'll experience the unique Ladakhi culture, enjoy local cuisine, and marvel at landscapes that range from barren moonscapes to lush valleys. Accommodation is in simple guesthouses and homestays, providing an authentic experience of Ladakhi hospitality while keeping costs low.",
    highlights: [
      "Visit the stunning blue Pangong Lake",
      "Explore ancient Buddhist monasteries including Thiksey and Hemis",
      "Experience the magnetic hill phenomenon",
      "View the confluence of Indus and Zanskar rivers",
      "Experience authentic Ladakhi culture through homestays"
    ],
    bestTimeToVisit: "June to September when mountain passes are open and weather is relatively mild. The region is inaccessible during winter (November to May) as heavy snowfall blocks major roads.",
    itinerary: [
      {
        title: "Arrival in Leh and Acclimatization",
        description: "Arrive in Leh and spend the day acclimatizing to the high altitude (3,500m). Take short walks around Leh market and visit Shanti Stupa for sunset views over the city.",
        activities: [
          "Check-in to guesthouse",
          "Short walk around Leh market",
          "Visit Shanti Stupa",
          "Early dinner and rest"
        ],
        meals: "Dinner",
        accommodation: "Budget guesthouse in Leh"
      },
      {
        title: "Leh Palace and Monasteries",
        description: "Visit the historic Leh Palace and nearby Namgyal Tsemo Gompa. In the afternoon, explore Thiksey Monastery (resembling Potala Palace) and Shey Palace with its giant Buddha statue.",
        activities: [
          "Visit Leh Palace",
          "Explore Namgyal Tsemo Gompa",
          "Thiksey Monastery tour",
          "Visit Shey Palace and Buddha statue"
        ],
        meals: "Breakfast, Dinner",
        accommodation: "Budget guesthouse in Leh"
      },
      {
        title: "Alchi and Likir Monasteries",
        description: "Day trip to Alchi Monastery, known for its ancient 11th-century murals, and Likir Monastery with its 75-foot Buddha statue. Visit Magnetic Hill and the confluence of Indus and Zanskar rivers.",
        activities: [
          "Visit Alchi Monastery",
          "Explore Likir Monastery",
          "Experience Magnetic Hill",
          "View the river confluence at Sangam"
        ],
        meals: "Breakfast, Packed lunch, Dinner",
        accommodation: "Budget guesthouse in Leh"
      },
      {
        title: "Pangong Lake Excursion",
        description: "Full day excursion to the famous Pangong Lake, crossing Chang La pass (17,688 ft). Spend time by the stunning blue lake that changes colors throughout the day, made famous in several Bollywood films.",
        activities: [
          "Drive to Pangong Lake via Chang La",
          "Photography at Pangong Lake",
          "Walk along the lakeshore",
          "Overnight stay near the lake"
        ],
        meals: "Breakfast, Packed lunch, Dinner",
        accommodation: "Basic homestay near Pangong Lake"
      },
      {
        title: "Return to Leh via Hemis",
        description: "Return to Leh, visiting Hemis Monastery en route, the largest and wealthiest monastery in Ladakh. Also visit Stakna Monastery, perched dramatically on a hill.",
        activities: [
          "Morning by Pangong Lake",
          "Visit Hemis Monastery",
          "Explore Stakna Monastery",
          "Return to Leh by evening"
        ],
        meals: "Breakfast, Packed lunch, Dinner",
        accommodation: "Budget guesthouse in Leh"
      },
      {
        title: "Nubra Valley Excursion",
        description: "Day trip to Nubra Valley via Khardung La, one of the world's highest motorable passes. Visit Diskit Monastery and see the sand dunes at Hunder, where you can take a Bactrian camel ride (optional extra cost).",
        activities: [
          "Cross Khardung La pass",
          "Visit Diskit Monastery",
          "See Bactrian camels at Hunder",
          "Return to Leh by evening"
        ],
        meals: "Breakfast, Packed lunch, Dinner",
        accommodation: "Budget guesthouse in Leh"
      },
      {
        title: "Departure from Leh",
        description: "Final morning in Leh for souvenir shopping at the Tibetan Refugee Market before departure.",
        activities: [
          "Shopping at Tibetan Refugee Market",
          "Last-minute photography",
          "Departure from Leh"
        ],
        meals: "Breakfast"
      }
    ],
    accommodation: [
      {
        name: "Leh Budget Guesthouse",
        description: "A simple family-run guesthouse offering clean rooms with basic amenities. Located in a quiet area but within walking distance of Leh market.",
        location: "Near Main Bazaar, Leh",
        amenities: ["Hot water (solar heated)", "Common dining area", "Garden", "Mountain views"]
      },
      {
        name: "Pangong Homestay",
        description: "Basic but authentic homestay run by a local Ladakhi family near Pangong Lake. Simple facilities but an invaluable cultural experience.",
        location: "Spangmik village, Pangong Lake",
        amenities: ["Traditional meals included", "Shared bathroom", "Traditional Ladakhi kitchen"]
      }
    ],
    gallery: [
      "https://images.unsplash.com/photo-1524061195848-edeaa01449d9",
      "https://images.unsplash.com/photo-1516066311146-d7e2db4f1dbf",
      "https://images.unsplash.com/photo-1516891781000-94c4329302c5",
      "https://images.unsplash.com/photo-1522038756280-6429d38dafc2",
      "https://images.unsplash.com/photo-1523245332310-e83c04db4137"
    ],
    coordinates: [34.1526, 77.5771],
    locationDescription: "Ladakh is a high-altitude desert region in the northern Indian state of Jammu and Kashmir. Leh, its capital, is situated at approximately 3,500 meters (11,500 feet) above sea level, surrounded by the Himalayan and Karakoram mountain ranges.",
    transportation: [
      {
        type: "bus",
        from: "Delhi to Manali to Leh (2-day journey)",
        price: 1800,
        duration: "40-48 hours with overnight stop",
        schedule: "Buses depart Delhi to Manali daily, and Manali to Leh on alternate days during summer",
        link: "https://hptdc.in"
      },
      {
        type: "train",
        from: "Delhi to Jammu, then shared taxi to Leh",
        price: 2200,
        duration: "12 hours train + 2 days road journey",
        schedule: "Multiple trains to Jammu, shared taxis leave morning from Jammu",
        link: "https://www.irctc.co.in"
      }
    ]
  },
  {
    id: "sikkim-monastery-trek",
    image: "https://images.unsplash.com/photo-1511497556779-4fcdaa34e2db",
    title: "Sikkim Monastery Trek",
    location: "Sikkim",
    price: 4700,
    days: 6,
    category: "meditation",
    categoryLabel: "Meditation",
    categoryColor: "bg-musafir-meditation",
    description: "Trek through the beautiful landscapes of Sikkim, visiting ancient Buddhist monasteries and experiencing the spiritual culture of the region.",
    longDescription: "This 6-day trek through the mystical state of Sikkim combines spiritual experiences at ancient Buddhist monasteries with breathtaking Himalayan landscapes. Starting from Gangtok, the journey takes you through rhododendron forests, mountain villages, and high-altitude lakes, with opportunities to visit some of the most significant monasteries in Tibetan Buddhism. You'll experience authentic monastic life, participate in meditation sessions with monks, and learn about Sikkim's unique blend of Tibetan, Nepali, and indigenous cultures. The itinerary includes Rumtek Monastery, once the seat of the Karmapa (head of the Karma Kagyu lineage), the ancient Pemayangtse Monastery with its intricate woodcarvings, and the serene Tashiding Monastery perched on a hilltop. Throughout the journey, you'll stay in a mix of simple guesthouses and monastery accommodations, offering an authentic experience while keeping costs under ₹5000.",
    highlights: [
      "Guided meditation sessions with Buddhist monks",
      "Visit to Rumtek Monastery, a replica of the Tibetan Tsurphu Monastery",
      "Trek through Himalayan forests and villages",
      "Experience authentic monastery stays",
      "View of Kanchenjunga, the world's third-highest peak (weather permitting)"
    ],
    bestTimeToVisit: "March to May and October to December offer the best trekking conditions and clear mountain views. Avoid the monsoon season (June-September) when trails become slippery and views are obscured by clouds.",
    itinerary: [
      {
        title: "Arrival in Gangtok",
        description: "Arrive in Gangtok, the capital of Sikkim. Visit Enchey Monastery in the afternoon for your first experience of Sikkim's Buddhist heritage. Evening orientation about the trek ahead.",
        activities: [
          "Check-in to guesthouse",
          "Visit Enchey Monastery",
          "Evening walking tour of MG Road",
          "Trek briefing and preparation"
        ],
        meals: "Dinner",
        accommodation: "Budget guesthouse in Gangtok"
      },
      {
        title: "Rumtek Monastery and Meditation",
        description: "Drive to Rumtek Monastery, one of the most important seats of Tibetan Buddhism outside Tibet. Participate in a guided meditation session with resident monks. Overnight in monastery guesthouse.",
        activities: [
          "Visit Rumtek Monastery complex",
          "Attend prayer ceremonies",
          "Guided meditation session",
          "Learning about Tibetan Buddhist philosophy"
        ],
        meals: "Breakfast, Lunch, Dinner",
        accommodation: "Simple accommodation at monastery guesthouse"
      },
      {
        title: "Trek to Tashiding",
        description: "Begin your trek through villages and forests to Tashiding Monastery, built on top of a heart-shaped hill. The monastery is considered one of the most sacred in Sikkim.",
        activities: [
          "Morning prayers (optional)",
          "Trek to Tashiding (8 km)",
          "Visit sacred chortens and prayer wheels",
          "Evening meditation at Tashiding Monastery"
        ],
        meals: "Breakfast, Packed lunch, Dinner",
        accommodation: "Basic guesthouse near Tashiding Monastery"
      },
      {
        title: "Pemayangtse and Khecheopalri Lake",
        description: "Trek to Pemayangtse, one of Sikkim's oldest monasteries. After exploring the monastery with its famous wooden sculpture of Zangdok Palri (Guru Rinpoche's celestial abode), visit the sacred Khecheopalri Lake.",
        activities: [
          "Trek to Pemayangtse (6 km)",
          "Guided tour of the monastery",
          "Visit Khecheopalri Lake",
          "Evening chanting session"
        ],
        meals: "Breakfast, Packed lunch, Dinner",
        accommodation: "Simple homestay near Pemayangtse"
      },
      {
        title: "Yuksom and Dubdi Monastery",
        description: "Trek to Yuksom, the first capital of Sikkim. Visit Dubdi Monastery, the oldest in Sikkim, established in 1701. Spend the afternoon with local Lepcha community members to learn about indigenous traditions.",
        activities: [
          "Trek to Yuksom (7 km)",
          "Visit Dubdi Monastery",
          "Interaction with Lepcha community",
          "Traditional cooking demonstration"
        ],
        meals: "Breakfast, Lunch, Dinner",
        accommodation: "Homestay in Yuksom"
      },
      {
        title: "Return to Gangtok and Departure",
        description: "Return to Gangtok by shared jeep. Visit Namgyal Institute of Tibetology to learn about Tibetan Buddhist studies before departure.",
        activities: [
          "Drive to Gangtok",
          "Visit Namgyal Institute of Tibetology",
          "Final souvenir shopping",
          "Departure from Gangtok"
        ],
        meals: "Breakfast"
      }
    ],
    accommodation: [
      {
        name: "Gangtok Budget Guesthouse",
        description: "A simple guesthouse offering clean rooms with mountain views, located in a quiet area not far from MG Road in Gangtok.",
        location: "Development Area, Gangtok",
        amenities: ["Hot water", "Wi-Fi in common areas", "Mountain views", "Breakfast included"]
      },
      {
        name: "Monastery Guesthouses and Homestays",
        description: "Simple accommodation provided by monasteries or nearby homestays. Basic facilities but an authentic experience of local life and monastic rhythm.",
        location: "Various locations along the trek route",
        amenities: ["Simple vegetarian meals", "Cultural immersion", "Authentic local experience"]
      }
    ],
    gallery: [
      "https://images.unsplash.com/photo-1518002171953-a080ee817e1f",
      "https://images.unsplash.com/photo-1624461636385-35cd6c3d9a0e",
      "https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4",
      "https://images.unsplash.com/photo-1604348932575-e9e71bd59d0d",
      "https://images.unsplash.com/photo-1591100049688-9705de247966"
    ],
    coordinates: [27.3389, 88.6065],
    locationDescription: "Sikkim is a small Himalayan state in northeast India, bordered by Nepal, Tibet, Bhutan, and West Bengal. The trek covers the western region of Sikkim, including Gangtok, Rumtek, Tashiding, Pemayangtse, and Yuksom.",
    transportation: [
      {
        type: "train",
        from: "Delhi/Kolkata to New Jalpaiguri (NJP), then shared jeep to Gangtok",
        price: 1500,
        duration: "20-26 hours train + 5 hours road journey",
        schedule: "Multiple trains daily to NJP, shared jeeps depart regularly for Gangtok",
        link: "https://www.irctc.co.in"
      },
      {
        type: "bus",
        from: "Siliguri to Gangtok",
        price: 400,
        duration: "5-6 hours",
        schedule: "Regular SNT buses from Siliguri bus stand starting early morning",
        link: "https://www.sikkimtransport.gov.in"
      }
    ]
  },
  {
    id: "hampi-heritage-trail",
    image: "https://images.unsplash.com/photo-1606457641090-1c79ab51db19",
    title: "Hampi Heritage Exploration",
    location: "Karnataka",
    price: 3600,
    days: 4,
    category: "hiking",
    categoryLabel: "Hiking",
    categoryColor: "bg-musafir-forest",
    description: "Explore the ancient ruins of Hampi, a UNESCO World Heritage Site, with its boulder-strewn landscape and magnificent temple complexes.",
    longDescription: "Hampi, the captivating capital of the Vijayanagara Empire, offers a unique landscape where history and nature create a surreal setting. This 4-day budget exploration takes you through the extensive ruins of this UNESCO World Heritage Site, scattered among a striking terrain of giant boulders, banana plantations, and the Tungabhadra River. For less than ₹4000, you'll discover magnificent temple complexes, intricate stone carvings, ancient market streets, and royal enclosures that tell the story of one of India's most powerful medieval kingdoms. The itinerary includes guided walks through the main ruins, cycling through the surrounding countryside, and sunset views from Matanga Hill. Throughout the journey, you'll stay in budget guesthouses, enjoy simple meals at local eateries, and experience the laid-back atmosphere that makes Hampi a favorite among budget travelers seeking both historical wonders and natural beauty.",
    highlights: [
      "Explore the spectacular Virupaksha Temple complex",
      "Hike up Matanga Hill for panoramic sunset views",
      "Cycle through ancient ruins scattered across the boulder-strewn landscape",
      "Visit the magnificent Vittala Temple with its famous stone chariot",
      "Cross the Tungabhadra River to experience the contrasting atmospheres of Hampi Bazaar and Hippie Island"
    ],
    bestTimeToVisit: "October to February offers pleasant weather for exploring the ruins. Avoid March to May when temperatures regularly exceed 40°C, making daytime exploration difficult. Monsoon season (June-September) brings greenery but can make some areas slippery.",
    itinerary: [
      {
        title: "Arrival and Hampi Bazaar",
        description: "Arrive in Hampi and check into your guesthouse. Spend the afternoon exploring Hampi Bazaar and the magnificent Virupaksha Temple, the only temple still in active worship. Walk along the riverside ruins.",
        activities: [
          "Check-in to guesthouse",
          "Visit Virupaksha Temple",
          "Explore Hampi Bazaar area",
          "Sunset by the riverside ruins"
        ],
        meals: "Dinner",
        accommodation: "Budget guesthouse near Hampi Bazaar"
      },
      {
        title: "Sacred Center Tour",
        description: "Full day exploring the Sacred Center, including Krishna Temple, Lakshmi Narasimha Temple, Underground Shiva Temple, and the spectacular Hazara Rama Temple with its intricate carvings depicting the Ramayana epic.",
        activities: [
          "Visit multiple temple complexes",
          "Explore the Krishna Temple area",
          "Photography at Lakshmi Narasimha statue",
          "Discover hidden underground temples"
        ],
        meals: "Breakfast, Dinner",
        accommodation: "Budget guesthouse near Hampi Bazaar"
      },
      {
        title: "Vittala Temple and Cycle Tour",
        description: "Cycle to the magnificent Vittala Temple complex with its famous stone chariot and musical pillars. Continue cycling through the Royal Enclosure, Queen's Bath, and Zanana Enclosure. Late afternoon hike up Matanga Hill for sunset.",
        activities: [
          "Cycle tour of the outer ruins (bicycle rental included)",
          "Exploration of Vittala Temple complex",
          "Visit Royal Enclosure and Queen's Bath",
          "Sunset hike up Matanga Hill"
        ],
        meals: "Breakfast, Packed lunch, Dinner",
        accommodation: "Budget guesthouse near Hampi Bazaar"
      },
      {
        title: "Hippie Island and Departure",
        description: "Cross the river to explore Hippie Island (Virupapur Gaddi) with its contrasting laid-back atmosphere. Visit the Hanuman Temple before returning for departure from Hampi.",
        activities: [
          "Coracle boat ride across the river",
          "Explore Hippie Island",
          "Visit Hanuman Temple",
          "Final shopping and departure"
        ],
        meals: "Breakfast"
      }
    ],
    accommodation: [
      {
        name: "Hampi Bazaar Guesthouse",
        description: "A simple guesthouse located in the heart of Hampi Bazaar, offering basic but clean rooms with all necessary amenities. Perfect location for exploring the ruins on foot.",
        location: "Near Virupaksha Temple, Hampi Bazaar",
        amenities: ["Hot water (solar heated)", "Restaurant", "Rooftop seating area", "Free Wi-Fi in common areas"]
      }
    ],
    gallery: [
      "https://images.unsplash.com/photo-1605810230608-bffaec6df7c9",
      "https://images.unsplash.com/photo-1590766284099-5c1bfc2f5ae3",
      "https://images.unsplash.com/photo-1617218326259-2a166a68a412",
      "https://images.unsplash.com/photo-1524061614234-8749fe959d19",
      "https://images.unsplash.com/photo-1586436406239-d6bc94d93d1b"
    ],
    coordinates: [15.3350, 76.4600],
    locationDescription: "Hampi is located in the Karnataka state of India, about 350 km from Bangalore. The ruins are spread over a 26 sq km area, situated on the banks of the Tungabhadra River and surrounded by granite boulders.",
    transportation: [
      {
        type: "bus",
        from: "Bangalore to Hospet, then local bus to Hampi",
        price: 750,
        duration: "8 hours bus + 30 minutes local bus",
        schedule: "Overnight buses depart Bangalore at 10 PM, local buses run hourly from Hospet to Hampi",
        link: "https://www.ksrtc.in"
      },
      {
        type: "train",
        from: "Bangalore/Hyderabad to Hospet, then auto-rickshaw to Hampi",
        price: 650,
        duration: "7-8 hours train + 30 minutes auto-rickshaw",
        schedule: "Hampi Express departs Bangalore at 10:45 PM daily",
        link: "https://www.irctc.co.in"
      }
    ]
  }
];
