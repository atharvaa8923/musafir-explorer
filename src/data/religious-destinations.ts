
import { Destination } from './types';

export const religiousDestinations: Destination[] = [
  {
    id: "somnath-jyotirlinga",
    image: "https://images.unsplash.com/photo-1600431974764-d438bed36033",
    title: "Somnath Temple",
    location: "Gujarat",
    price: 2500,
    days: 3,
    category: "religious",
    categoryLabel: "Religious",
    categoryColor: "bg-musafir-spiritual",
    description: "Visit the first of the twelve Jyotirlinga shrines of Lord Shiva, located on the western coast of Gujarat.",
    longDescription: "Somnath Temple, located in Prabhas Patan, Gujarat, is the first among the twelve sacred Jyotirlinga shrines of Lord Shiva. The temple has been destroyed and rebuilt several times throughout history, symbolizing the resilience of Indian culture. The current structure was rebuilt in the Chalukya style in 1951 after India's independence. The temple stands majestically at the shore of the Arabian Sea, offering a breathtaking view at sunrise and sunset. According to Hindu mythology, the Somnath Jyotirlinga is considered eternally powerful as it was installed by Lord Soma (Moon God) himself. The temple complex features intricate carvings, a magnificent Nandi statue, and the Arrow Pillar (Baan Stambh) that indicates there is no land mass between Somnath and Antarctica in a straight line. The evening Aarti and sound-and-light show depicting the temple's history are highlights of any visit to this sacred site.",
    highlights: [
      "Darshan of the first and most revered Jyotirlinga in India",
      "Evening Aarti ceremony with the backdrop of the Arabian Sea",
      "Sound and Light show narrating the temple's history",
      "Sunrise and sunset views from the temple premises",
      "Visit to nearby Bhalka Tirth where Lord Krishna was mistakenly shot"
    ],
    bestTimeToVisit: "October to March offers pleasant weather for pilgrimage. Avoid summer months (April-June) when temperatures can soar. Special festivities occur during Mahashivratri (February/March) and Kartik Purnima (November).",
    itinerary: [
      {
        title: "Arrival in Veraval",
        description: "Arrive at Veraval, the nearest major town to Somnath (about 7 km away). Check into your accommodation and rest. In the evening, attend the spectacular Aarti ceremony at the Somnath Temple and witness the sound and light show that narrates the temple's rich history.",
        activities: [
          "Arrival and check-in at accommodation",
          "Evening visit to Somnath Temple for Aarti at 7:00 PM",
          "Sound and Light show after the evening Aarti",
          "Dinner at local Gujarati restaurant"
        ],
        meals: "Dinner",
        accommodation: "Budget hotel in Somnath"
      },
      {
        title: "Somnath Temple and Surroundings",
        description: "Early morning darshan at Somnath Temple to experience the spiritual atmosphere during dawn. After breakfast, explore the temple complex thoroughly, visiting all the significant spots including the Arrow Pillar and Triveni Sangam. In the afternoon, visit nearby sacred sites like Bhalka Tirth and Gita Temple.",
        activities: [
          "Early morning darshan at Somnath Temple (5:00 AM)",
          "Guided tour of the temple complex",
          "Visit to Triveni Sangam where three sacred rivers meet the sea",
          "Afternoon excursion to Bhalka Tirth (where Lord Krishna left his mortal body)",
          "Visit to Gita Temple and Lakshmi Narayan Temple",
          "Evening Aarti at Somnath Temple"
        ],
        meals: "Breakfast, Lunch, Dinner",
        accommodation: "Budget hotel in Somnath"
      },
      {
        title: "Departure and Additional Sites",
        description: "After a final morning darshan at Somnath Temple, visit the Somnath Museum to learn more about the temple's history. If time permits, make a short trip to Shashibhushan Temple before departing from Veraval.",
        activities: [
          "Morning darshan at Somnath Temple",
          "Visit to Somnath Museum",
          "Optional visit to nearby Shashibhushan Temple",
          "Departure from Veraval"
        ],
        meals: "Breakfast"
      }
    ],
    accommodation: [
      {
        name: "GTDC Toran Tourist Complex",
        description: "Government-run accommodation offering clean, basic rooms at affordable rates. Located close to the temple with easy access to the beach.",
        location: "Near Somnath Temple",
        amenities: ["Clean rooms", "Hot water", "Restaurant", "Temple view (in some rooms)", "Wi-Fi in common areas"]
      },
      {
        name: "Budget Hotels and Dharamshalas",
        description: "Several budget hotels and pilgrim rest houses (dharamshalas) are available around the temple area, offering simple accommodation for religious travelers.",
        location: "Temple vicinity",
        amenities: ["Basic rooms", "Vegetarian food", "Hot water (limited hours)", "Walking distance to temple"]
      }
    ],
    gallery: [
      "https://images.unsplash.com/photo-1633620238403-8d9bbda51dba",
      "https://images.unsplash.com/photo-1633620234580-adfb6047256f",
      "https://images.unsplash.com/photo-1589738216835-77b51abe88e7",
      "https://images.unsplash.com/photo-1600431974788-2a223acef0d7",
      "https://images.unsplash.com/photo-1600431974879-b17c8f2be92c"
    ],
    coordinates: [20.8880, 70.4010],
    locationDescription: "Somnath Temple is located in Prabhas Patan, near Veraval in the Gir Somnath district of Gujarat. It is approximately 400 km from Ahmedabad and 85 km from Junagadh. The temple stands majestically on the western coast of India, facing the Arabian Sea.",
    transportation: [
      {
        type: "train",
        from: "Ahmedabad",
        price: 450,
        duration: "8-9 hours",
        schedule: "Daily trains available to Veraval Junction, the nearest railway station (7 km from temple)",
        link: "https://www.irctc.co.in"
      },
      {
        type: "bus",
        from: "Ahmedabad",
        price: 350,
        duration: "7-8 hours",
        schedule: "Regular state transport and private buses available from major cities in Gujarat",
        link: "https://gsrtc.in"
      },
      {
        type: "flight",
        from: "Major cities to Diu/Rajkot",
        price: 2500,
        duration: "1.5 hours flight + 3-4 hours road journey",
        schedule: "Fly to Diu (85 km) or Rajkot (130 km), then take a taxi to Somnath",
        link: "Various airlines"
      }
    ],
    specialFeatures: {
      pilgrimageType: "temple",
      rituals: [
        "Early morning abhishekam (ritual bathing of the deity)",
        "Participation in the Maha Aarti ceremony",
        "Offering bilva leaves to the Shiva lingam",
        "Taking a holy dip at Triveni Sangam before temple visit",
        "Pradakshina (circumambulation) of the main sanctum"
      ],
      significance: "Somnath is the first of the twelve Jyotirlingas mentioned in the Shiva Purana. Legend states that Lord Soma (Moon God) built this temple in gold after losing his luster due to a curse. The Jyotirlinga here is believed to be swayambhu (self-manifested) and eternally powerful.",
      difficulty: "easy",
      seasonality: "Year-round with peak season from October to March",
      permits: [],
      restrictions: ["Photography prohibited inside main sanctum", "Leather items not allowed inside temple", "Modest dress code required"]
    }
  },
  {
    id: "mallikarjuna-jyotirlinga",
    image: "https://images.unsplash.com/photo-1583068764609-2951ee88993b",
    title: "Mallikarjuna Temple",
    location: "Srisailam, Andhra Pradesh",
    price: 2800,
    days: 2,
    category: "religious",
    categoryLabel: "Religious",
    categoryColor: "bg-musafir-spiritual",
    description: "Visit the second Jyotirlinga shrine dedicated to Lord Shiva and Goddess Parvati, nestled in the hills of Eastern Ghats.",
    longDescription: "Sri Mallikarjuna Temple at Srisailam is the second of the twelve Jyotirlinga shrines dedicated to Lord Shiva. Located on the banks of the Krishna River in the Eastern Ghats of Andhra Pradesh, this ancient temple is also one of the 18 Shakti Peethas where Goddess Sati's upper jaw fell. Thus, it is a rare temple that serves as both a Jyotirlinga and a Shakti Peetha. The temple sits atop the Nallamala Hills at an elevation of 457 meters, surrounded by dense forests and wildlife. The main deity is Mallikarjuna Swamy (Lord Shiva) represented by a naturally formed lingam, and his consort Bhramaramba Devi (a form of Goddess Parvati). The temple complex, built in the Dravidian architectural style, features intricate carvings and pillared halls dating back to the 7th century. The serene mountain setting, coupled with the spiritual significance of this dual-power shrine, makes it a profound pilgrimage destination for devotees seeking blessings of both Lord Shiva and the Divine Mother.",
    highlights: [
      "Darshan of the sacred Jyotirlinga and the Shakti Peetha in one location",
      "Spectacular views from the hilltop temple overlooking the Krishna River",
      "Ancient stone carvings depicting stories from Hindu mythology",
      "Nearby Pathala Ganga, a sacred bathing spot where the river flows underground",
      "Skanda Pushkarini, the sacred tank within the temple complex"
    ],
    bestTimeToVisit: "September to February offers pleasant weather for pilgrimage. Avoid summer months (March-June) when temperatures can be extreme. The temple sees major celebrations during Mahashivratri and Navaratri festivals.",
    itinerary: [
      {
        title: "Arrival and Temple Visit",
        description: "Arrive at Srisailam and check into your accommodation. After freshening up, visit the Sri Mallikarjuna Temple for evening darshan and attend the Aarti ceremony. Explore the main temple complex and understand its historical and spiritual significance.",
        activities: [
          "Arrival in Srisailam and check-in",
          "Evening darshan at Mallikarjuna Temple",
          "Participation in evening Aarti ceremony",
          "Pradakshina (circumambulation) of the main temple",
          "Visit to Bhramaramba Devi shrine within the complex"
        ],
        meals: "Dinner",
        accommodation: "Pilgrim accommodation or budget hotel in Srisailam"
      },
      {
        title: "Sacred Sites and Departure",
        description: "Early morning darshan at the temple followed by visits to sacred spots around Srisailam including Pathala Ganga, Sikhareswara Swamy Temple, and Sakshi Ganapati Temple. After lunch, begin your return journey.",
        activities: [
          "Early morning abhishekam ceremony (if pre-booked)",
          "Visit to Pathala Ganga and sacred bathing",
          "Darshan at Sikhareswara Swamy Temple",
          "Visit to Sakshi Ganapati Temple, the divine witness",
          "Optional visit to Srisailam Dam viewpoint",
          "Departure from Srisailam"
        ],
        meals: "Breakfast, Lunch"
      }
    ],
    accommodation: [
      {
        name: "APTDC Haritha Hotel",
        description: "Government-run accommodation offering clean, comfortable rooms with basic amenities at reasonable rates. Located close to the temple complex.",
        location: "Near Mallikarjuna Temple",
        amenities: ["Clean rooms", "Restaurant", "Hot water", "Temple proximity", "Parking"]
      },
      {
        name: "Temple Cottages and Dharamshalas",
        description: "Basic accommodation run by the temple trust, intended specifically for pilgrims at very affordable rates.",
        location: "Within temple complex",
        amenities: ["Simple rooms", "Vegetarian canteen", "Common bathrooms", "Locker facility"]
      }
    ],
    gallery: [
      "https://images.unsplash.com/photo-1590237584760-74d7dfc90538",
      "https://images.unsplash.com/photo-1566555382321-d165c94c3042",
      "https://images.unsplash.com/photo-1564419270949-c6dfa450834a",
      "https://images.unsplash.com/photo-1588497268133-7a596ca8aacb",
      "https://images.unsplash.com/photo-1600003014755-ba31ae8b289a"
    ],
    coordinates: [16.0733, 78.8687],
    locationDescription: "Srisailam is located in the Nallamala Hills of Andhra Pradesh, on the banks of the Krishna River. It is approximately 212 km from Hyderabad and 178 km from Kurnool. The temple sits atop a hill at an elevation of 457 meters, surrounded by the Nallamala forest, which is now part of the Nagarjunasagar-Srisailam Tiger Reserve.",
    transportation: [
      {
        type: "bus",
        from: "Hyderabad",
        price: 300,
        duration: "5-6 hours",
        schedule: "Regular APSRTC buses available from Hyderabad MGBS station",
        link: "https://www.apsrtconline.in"
      },
      {
        type: "taxi",
        from: "Hyderabad/Kurnool",
        price: 2500,
        duration: "4-5 hours from Hyderabad",
        schedule: "Available on demand",
        link: "Local taxi services"
      },
      {
        type: "shared taxi",
        from: "Nearest railhead at Markapur (90 km)",
        price: 150,
        duration: "2-3 hours",
        schedule: "Regular shared taxis available",
        link: "Available at Markapur station"
      }
    ],
    specialFeatures: {
      pilgrimageType: "temple",
      rituals: [
        "Rudrabhishekam (ritual bathing of the lingam)",
        "Bilva leaf offering to the Jyotirlinga",
        "Kumkumarchana at Bhramaramba Devi shrine",
        "Sacred bath at Pathala Ganga before temple visit",
        "Pradakshina of both Shiva and Shakti shrines"
      ],
      significance: "Mallikarjuna is the second of the twelve Jyotirlingas. This site is unique as it is both a Jyotirlinga and a Shakti Peetha, representing the union of divine masculine and feminine energies. According to legend, Lord Shiva took the form of Mallikarjuna ('Lord White as Jasmine') when he pursued his son Kartikeya who came here after losing a contest to his brother Ganesha.",
      difficulty: "moderate",
      seasonality: "Year-round with peak season from September to February",
      permits: ["Vehicle permits required for private vehicles during major festivals"],
      restrictions: ["Photography prohibited inside main sanctum", "Dress code enforced", "Electronic items restricted"]
    }
  },
  {
    id: "mahakaleshwar-jyotirlinga",
    image: "https://images.unsplash.com/photo-1608112071425-a7c27995f5c6",
    title: "Mahakaleshwar Temple",
    location: "Ujjain, Madhya Pradesh",
    price: 2600,
    days: 2,
    category: "religious",
    categoryLabel: "Religious",
    categoryColor: "bg-musafir-spiritual",
    description: "Experience the divine aura of the third Jyotirlinga, famous for its unique south-facing lingam and the powerful Bhasma Aarti.",
    longDescription: "The Mahakaleshwar Temple in Ujjain houses the third of the twelve sacred Jyotirlingas. What makes this temple particularly special is that its lingam is dakshinamukhi (facing south), which is a rare and unique feature in Shiva temples. The temple's history dates back over 2,000 years, though the current structure was built in 1736 by the Maratha commander Ranoji Shinde. The temple stands on the banks of the holy Shipra River and is one of the most magnificent structures in Ujjain, displaying a blend of Maratha, Bhumija, and Chalukya architectural styles. The main attraction here is the world-famous Bhasma Aarti, a divine ritual performed in the early hours of the morning where the lingam is bathed with sacred ash from cremation grounds, symbolizing the ultimate truth of life - that everything reduces to ash eventually. The temple complex also houses shrines dedicated to Ganesh, Parvati, and Kartikeya, making it a complete family abode of Lord Shiva. The spiritual energy of this place is believed to be so powerful that it can fulfill the deepest desires of sincere devotees.",
    highlights: [
      "Witnessing the mystical Bhasma Aarti, performed only at Mahakaleshwar",
      "Darshan of the unique south-facing Jyotirlinga",
      "Visit to Omkareshwar Temple on an island in the Narmada River (day trip)",
      "Spiritual experience at the Shipra River Ghats",
      "Exploration of ancient astronomical observatory, Jantar Mantar"
    ],
    bestTimeToVisit: "October to March offers pleasant weather. The most auspicious time to visit is during Maha Shivaratri in February/March when the temple is beautifully decorated and special rituals are performed. The Simhastha Kumbh Mela, held every 12 years, attracts millions of pilgrims.",
    itinerary: [
      {
        title: "Arrival and Mahakaleshwar Temple",
        description: "Arrive in Ujjain and check into your accommodation. Visit the Mahakaleshwar Temple for evening darshan and understand the procedures for attending the next morning's Bhasma Aarti. Explore other shrines within the temple complex and visit the nearby Harsiddhi Temple in the evening.",
        activities: [
          "Arrival in Ujjain and check-in",
          "Evening darshan at Mahakaleshwar Temple",
          "Registration for next morning's Bhasma Aarti (if required)",
          "Visit to Harsiddhi Temple known for its unique architecture",
          "Exploration of local markets for religious souvenirs"
        ],
        meals: "Dinner",
        accommodation: "Budget hotel or dharamshala in Ujjain"
      },
      {
        title: "Bhasma Aarti and Sacred Sites",
        description: "Early morning attendance at the famous Bhasma Aarti (starts at 4:00 AM), followed by darshan. After breakfast, visit other important religious and historical sites in Ujjain including Ram Ghat, Kal Bhairav Temple, and Mangalnath Temple. Depart from Ujjain in the evening.",
        activities: [
          "Early morning Bhasma Aarti at Mahakaleshwar Temple",
          "Morning darshan and abhishekam",
          "Visit to Ram Ghat on Shipra River",
          "Darshan at Kal Bhairav Temple, the guardian deity of Ujjain",
          "Visit to ancient Mangalnath Temple",
          "Optional visit to Jantar Mantar astronomical observatory",
          "Departure from Ujjain"
        ],
        meals: "Breakfast, Lunch"
      }
    ],
    accommodation: [
      {
        name: "MP Tourism Hotel Shipra",
        description: "Government-run hotel offering comfortable accommodation at reasonable rates. Located in the heart of the city with easy access to the temple.",
        location: "Madhav Nagar, Ujjain",
        amenities: ["Clean rooms", "Restaurant", "Hot water", "Wi-Fi", "Travel desk"]
      },
      {
        name: "Temple Trust Dharamshalas",
        description: "Basic but clean accommodation run by the temple trust, offering affordable stay options for pilgrims. Located very close to the temple complex.",
        location: "Near Mahakaleshwar Temple",
        amenities: ["Simple rooms", "Vegetarian meals", "Locker facility", "Temple proximity"]
      }
    ],
    gallery: [
      "https://images.unsplash.com/photo-1608112071457-cd4deb1f8ff4",
      "https://images.unsplash.com/photo-1608111173208-43de5de953f3",
      "https://images.unsplash.com/photo-1541428973131-39221f3a1ec1",
      "https://images.unsplash.com/photo-1617526771715-6e7911579acd",
      "https://images.unsplash.com/photo-1563262924-7969e1f60c2d"
    ],
    coordinates: [23.1829, 75.7682],
    locationDescription: "Mahakaleshwar Temple is located in the ancient city of Ujjain in Madhya Pradesh, central India. The city lies on the eastern bank of the Shipra River and is approximately 55 km from Indore, 207 km from Bhopal, and 135 km from Omkareshwar, another Jyotirlinga site.",
    transportation: [
      {
        type: "train",
        from: "Major cities to Ujjain Junction",
        price: 500,
        duration: "Varies by origin",
        schedule: "Well-connected by trains from Delhi, Mumbai, Bhopal, and other major cities",
        link: "https://www.irctc.co.in"
      },
      {
        type: "bus",
        from: "Indore",
        price: 100,
        duration: "1.5 hours",
        schedule: "Regular buses every 30 minutes",
        link: "https://mpeprocurement.gov.in/mptrasport"
      },
      {
        type: "flight",
        from: "Major cities to Indore Airport",
        price: 3500,
        duration: "Flight to Indore + 1 hour road journey",
        schedule: "Multiple daily flights to Devi Ahilyabai Holkar Airport, Indore, then road transfer",
        link: "Various airlines"
      }
    ],
    specialFeatures: {
      pilgrimageType: "temple",
      rituals: [
        "Bhasma Aarti in the early morning",
        "Panchamrit Abhishekam of the lingam",
        "Bilva leaf offering",
        "Rudrabhishekam ceremony",
        "Ritual bath in Shipra River before temple visit"
      ],
      significance: "Mahakaleshwar is the third of the twelve Jyotirlingas and is considered one of the most powerful. The lingam is believed to be swayambhu (self-manifested) and derives special powers from being dakshinamukhi (south-facing). According to Puranic traditions, this Jyotirlinga is connected to the story of a young boy named Shrikar who was deeply devoted to Lord Shiva and was saved from his creditors by the Lord's divine intervention.",
      difficulty: "easy",
      seasonality: "Year-round with peak season from October to March",
      permits: ["Special passes required for Bhasma Aarti during peak season and festivals"],
      restrictions: ["Photography prohibited inside main sanctum", "Mobile phones to be switched off", "Strict dress code enforced", "Leather items prohibited"]
    }
  },
  {
    id: "omkareshwar-jyotirlinga",
    image: "https://images.unsplash.com/photo-1605768356829-3c73f08b4bec",
    title: "Omkareshwar Temple",
    location: "Madhya Pradesh",
    price: 2000,
    days: 2,
    category: "religious",
    categoryLabel: "Religious",
    categoryColor: "bg-musafir-spiritual",
    description: "Visit the sacred fourth Jyotirlinga situated on an island shaped like 'Om' in the middle of the Narmada River.",
    longDescription: "Omkareshwar is home to one of the 12 revered Jyotirlinga shrines of Lord Shiva. The name Omkareshwar comes from 'Om' + 'Kareshwar' meaning 'Lord of the Om sound'. What makes this temple particularly unique is its location on an island called Mandhata or Shivapuri in the middle of the Narmada River. When viewed from above, the island is shaped like the sacred Hindu symbol 'Om'. The island houses two ancient temples - Omkareshwar and Amareshwar, both housing jyotirlingas. However, there is some debate about which one is the actual revered jyotirlinga mentioned in ancient texts. The main Omkareshwar Temple is built in Nagara architectural style with detailed stone carvings. Built in the 11th century, the temple shows influences of both North Indian and South Indian architectural styles. The serene setting on the Narmada River adds to the spiritual ambiance of the place. Pilgrims typically take a boat ride to reach the island, adding to the unique pilgrimage experience. According to legend, when Lord Shiva was pleased with the penances of the Vindhya mountain range, he took the form of Omkareshwar and chose to reside here. The temple has survived invasions and natural disasters, standing as a testament to the enduring faith of devotees.",
    highlights: [
      "Darshan of the sacred Jyotirlinga on the Om-shaped island",
      "Scenic boat ride across the Narmada River to reach the temple",
      "Visit to both Omkareshwar and Amareshwar Temples",
      "Evening Aarti ceremony by the Narmada River",
      "Parikrama (circumambulation) of the entire island"
    ],
    bestTimeToVisit: "October to March is ideal when the weather is pleasant. Avoid monsoon months (July-September) as the river can swell, sometimes restricting access. Major celebrations occur during Shivratri and the month of Shravan (July-August) according to the Hindu calendar.",
    itinerary: [
      {
        title: "Arrival and Temple Visit",
        description: "Arrive at Omkareshwar and check into your accommodation. Take a boat ride across the Narmada River to reach the island. Visit the main Omkareshwar Temple and other shrines on the island. In the evening, attend the beautiful Narmada Aarti at the banks of the river.",
        activities: [
          "Arrival in Omkareshwar and check-in",
          "Boat ride to Shivapuri Island",
          "Darshan at Omkareshwar Temple",
          "Visit to Amareshwar Temple",
          "Exploration of other smaller shrines on the island",
          "Evening Narmada Aarti at the ghat"
        ],
        meals: "Dinner",
        accommodation: "Budget hotel or dharamshala in Omkareshwar"
      },
      {
        title: "Parikrama and Departure",
        description: "Early morning darshan at the temple followed by Parikrama (circumambulation) of the island, which is considered highly auspicious. Visit the 24 Avatars (a series of shrines with Shiva lingams) and Gauri Somnath Temple. After lunch, depart from Omkareshwar.",
        activities: [
          "Early morning darshan at Omkareshwar Temple",
          "Parikrama of the island (approximately 5 km)",
          "Visit to the 24 Avatars",
          "Darshan at Gauri Somnath Temple",
          "Final boat ride back to the mainland",
          "Departure from Omkareshwar"
        ],
        meals: "Breakfast, Lunch"
      }
    ],
    accommodation: [
      {
        name: "MP Tourism Hotel Narmada Retreat",
        description: "Government-run accommodation offering comfortable rooms with river views. Located on the mainland with easy access to the boat ghat.",
        location: "Near boat ghat",
        amenities: ["Clean rooms", "River view", "Restaurant", "Hot water", "Parking"]
      },
      {
        name: "Pilgrim Dharamshalas",
        description: "Several ashrams and dharamshalas offer basic accommodation at very affordable rates, some located on the island itself.",
        location: "On island and mainland",
        amenities: ["Simple rooms", "Vegetarian meals", "Temple proximity"]
      }
    ],
    gallery: [
      "https://images.unsplash.com/photo-1605768398128-4ac05e653c25",
      "https://images.unsplash.com/photo-1559732226-4586482fde7a",
      "https://images.unsplash.com/photo-1576418241093-5af504e7724e",
      "https://images.unsplash.com/photo-1588105339036-a6e3bd8df576",
      "https://images.unsplash.com/photo-1611079829625-e4aceae4b6d7"
    ],
    coordinates: [22.2467, 76.1522],
    locationDescription: "Omkareshwar is located on an island called Mandhata or Shivapuri in the Narmada River in Madhya Pradesh. It is approximately 77 km from Indore, 133 km from Ujjain (location of Mahakaleshwar Jyotirlinga), and 258 km from Bhopal. The temple is situated at the confluence of the rivers Narmada and Kaveri.",
    transportation: [
      {
        type: "bus",
        from: "Indore",
        price: 120,
        duration: "2.5 hours",
        schedule: "Regular buses available from Indore Central Bus Stand",
        link: "https://mpeprocurement.gov.in/mptrasport"
      },
      {
        type: "taxi",
        from: "Indore",
        price: 1500,
        duration: "2 hours",
        schedule: "Available on demand",
        link: "Local taxi services"
      },
      {
        type: "train",
        from: "Major cities to Omkareshwar Road station",
        price: 300,
        duration: "Varies by origin + 12 km road journey to temple",
        schedule: "Train to Omkareshwar Road station, then local transport to the temple",
        link: "https://www.irctc.co.in"
      }
    ],
    specialFeatures: {
      pilgrimageType: "temple",
      rituals: [
        "Abhishekam of the Jyotirlinga",
        "Bilva leaf offering",
        "Parikrama of the entire island",
        "Sacred bath in Narmada River",
        "Offering prayers at the Sangam (confluence of rivers)"
      ],
      significance: "Omkareshwar is the fourth of the twelve Jyotirlingas. The island's unique Om shape is considered divinely significant. According to Hindu mythology, when Lord Vindhya (the deity of the Vindhya mountain range) performed penance to Lord Shiva, the deity appeared in the form of Omkareshwar and blessed him. The island houses both Omkareshwar and Amareshwar Jyotirlingas, sometimes referred to as Mamaleshwar.",
      difficulty: "moderate",
      seasonality: "Year-round with peak season from October to March",
      permits: [],
      restrictions: ["Photography prohibited inside main sanctum", "Leather items not allowed in temple", "Sacred thread required for certain rituals"]
    }
  },
  {
    id: "kedarnath-jyotirlinga",
    image: "https://images.unsplash.com/photo-1598086865486-0b9558587199",
    title: "Kedarnath Temple",
    location: "Uttarakhand",
    price: 4500,
    days: 4,
    category: "religious",
    categoryLabel: "Religious",
    categoryColor: "bg-musafir-spiritual",
    description: "Trek to the fifth Jyotirlinga shrine located in the majestic Himalayas, one of the holiest pilgrimages for devotees of Lord Shiva.",
    longDescription: "Kedarnath Temple, housing the fifth Jyotirlinga, is situated amidst the magnificent Himalayan range at an altitude of 3,583 meters (11,755 ft). This ancient temple is not just a religious site but also a marvel of architecture and human determination, being built in a remote and challenging terrain in the 8th century by Adi Shankaracharya. The temple is constructed of massive stone slabs over a large rectangular platform and has survived natural calamities for centuries, including the devastating 2013 flash floods where the temple remained almost unharmed despite everything around it being destroyed - a fact that many devotees attribute to divine protection. The temple remains open for only six months a year (April/May to October/November) due to extreme weather conditions that make the region inaccessible during winter when the deity is symbolically moved to Ukhimath for continued worship. The journey to Kedarnath is as spiritual as the destination itself, involving a challenging 16 km trek from Gaurikund (the last motorable point) through beautiful landscapes. For those unable to trek, services like ponies, palanquins, and now helicopters are available. The sublime atmosphere of the Himalayas, coupled with the spiritual vibrations of this ancient shrine, offers visitors a profound experience that goes beyond religious worship to a connection with the raw power of nature and divinity.",
    highlights: [
      "Darshan of the unique pyramidal Shiva lingam at the ancient temple",
      "Breathtaking Himalayan views and spiritual atmosphere",
      "Trek through stunning mountain landscapes to reach the temple",
      "Visit to Vasuki Tal, a pristine high-altitude lake near the temple",
      "Helicopter options available for those unable to trek"
    ],
    bestTimeToVisit: "May to June and September to October are ideal, avoiding the peak monsoon period of July-August when landslides are common. The temple closes for winter around November and reopens in April/May (exact dates vary based on the Hindu calendar).",
    itinerary: [
      {
        title: "Arrival in Rishikesh/Haridwar",
        description: "Arrive in Rishikesh or Haridwar, the starting points of the Kedarnath Yatra. Check into your accommodation and attend the evening Ganga Aarti at Har Ki Pauri (Haridwar) or Triveni Ghat (Rishikesh). Prepare for the journey ahead and purchase any necessary supplies.",
        activities: [
          "Arrival in Rishikesh/Haridwar",
          "Evening Ganga Aarti ceremony",
          "Purchase of trekking supplies if needed",
          "Early dinner and rest for the journey ahead"
        ],
        meals: "Dinner",
        accommodation: "Budget hotel in Rishikesh/Haridwar"
      },
      {
        title: "Journey to Sonprayag/Gaurikund",
        description: "Early morning departure for Sonprayag via Rudraprayag. This journey takes you through the beautiful Himalayan landscapes along the Mandakini River. Upon reaching Sonprayag, you'll need to take a local shuttle to Gaurikund, the base camp for the Kedarnath trek. Overnight stay at Gaurikund to acclimatize to the altitude.",
        activities: [
          "Early morning departure for Sonprayag (200 km from Rishikesh, 7-8 hours)",
          "Scenic drive through Himalayan landscapes",
          "Local shuttle from Sonprayag to Gaurikund",
          "Visit to Gaurikund Temple and hot springs",
          "Rest and acclimatization"
        ],
        meals: "Breakfast, Dinner",
        accommodation: "Basic guesthouse in Gaurikund"
      },
      {
        title: "Trek to Kedarnath",
        description: "Begin the 16 km trek from Gaurikund to Kedarnath early in the morning. The trek takes approximately 6-8 hours depending on your pace. Alternatively, ponies, palanquins, or helicopters are available for those who cannot trek. Upon reaching Kedarnath, check into your accommodation and rest. Visit the temple for evening Aarti if energy permits.",
        activities: [
          "Early morning start for the 16 km trek",
          "Multiple rest stops along the way",
          "Arrival at Kedarnath by afternoon/evening",
          "Check-in to basic accommodation",
          "Evening visit to temple if possible"
        ],
        meals: "Breakfast, Packed lunch, Dinner",
        accommodation: "Basic dharamshala or tent accommodation in Kedarnath"
      },
      {
        title: "Kedarnath Temple and Return Journey",
        description: "Wake up early for morning darshan at Kedarnath Temple when the spiritual energy is at its peak. Spend time in meditation and prayer at this powerful site. After breakfast, begin the descent back to Gaurikund, which is easier and faster than the ascent. From Gaurikund, take transport back to Rishikesh/Haridwar.",
        activities: [
          "Early morning darshan at Kedarnath Temple",
          "Participation in abhishekam if pre-arranged",
          "Descent to Gaurikund (4-6 hours)",
          "Return journey to Rishikesh/Haridwar"
        ],
        meals: "Breakfast, Packed lunch"
      }
    ],
    accommodation: [
      {
        name: "GMVN Tourist Rest Houses",
        description: "Government-run accommodations available at Rishikesh, Sonprayag, Gaurikund, and Kedarnath offering basic but clean facilities.",
        location: "Various points along the yatra route",
        amenities: ["Basic rooms", "Hot water (limited hours)", "Dining facilities", "Blankets provided"]
      },
      {
        name: "Dharamshalas and Tent Accommodation",
        description: "In Kedarnath, several dharamshalas run by religious trusts and temporary tent accommodations are available at affordable rates.",
        location: "Kedarnath",
        amenities: ["Basic bedding", "Shared bathrooms", "Simple vegetarian meals", "Warm blankets"]
      }
    ],
    gallery: [
      "https://images.unsplash.com/photo-1593006919395-95c77c1d8178",
      "https://images.unsplash.com/photo-1624956978982-8a22a21bb026",
      "https://images.unsplash.com/photo-1599240211563-c0934249db10",
      "https://images.unsplash.com/photo-1589439042257-51257dea178b",
      "https://images.unsplash.com/photo-1631416296536-1ea0711f5f63"
    ],
    coordinates: [30.7352, 79.0669],
    locationDescription: "Kedarnath Temple is located in the Rudraprayag district of Uttarakhand, in the Garhwal Himalayan range near the Mandakini River. It is approximately 223 km from Rishikesh and requires a 16 km trek from Gaurikund, the last motorable point. The temple sits at an altitude of 3,583 meters (11,755 ft) and is part of the Char Dham pilgrimage circuit.",
    transportation: [
      {
        type: "bus",
        from: "Rishikesh/Haridwar to Sonprayag",
        price: 350,
        duration: "7-8 hours",
        schedule: "Regular buses in pilgrim season, early morning departures recommended",
        link: "https://uttarakhandtransport.gov.in"
      },
      {
        type: "shared taxi",
        from: "Rishikesh/Haridwar to Sonprayag",
        price: 600,
        duration: "6-7 hours",
        schedule: "Regular shared taxis during season",
        link: "Available at main stands"
      },
      {
        type: "helicopter",
        from: "Phata/Guptkashi to Kedarnath",
        price: 4500,
        duration: "10-15 minutes",
        schedule: "Weather dependent, several operators during season",
        link: "https://heliservices.uk.gov.in"
      }
    ],
    specialFeatures: {
      pilgrimageType: "temple",
      rituals: [
        "Early morning Abhishekam of the lingam",
        "Recitation of Rudra Ashtadhyayi",
        "Offering of Bilva leaves and flowers",
        "Meditation in the sanctum sanctorum",
        "Parikrama of the temple"
      ],
      significance: "Kedarnath is the fifth of the twelve Jyotirlingas and is considered the most sacred among the Panch Kedar temples. According to Hindu mythology, after the Mahabharata war, the Pandavas sought Lord Shiva for redemption for killing their own relatives. Shiva eluded them repeatedly, and while escaping, took the form of a bull. When Bhima recognized him, Shiva dove into the ground, with parts of his body surfacing at five different locations, forming the Panch Kedar. The hump of the bull appeared at Kedarnath.",
      difficulty: "difficult",
      seasonality: "May to October only (closed during winter)",
      permits: ["Mandatory registration for all pilgrims through official portal"],
      restrictions: ["Health certificate required for pilgrims", "Limited time allowed in sanctum during peak season", "Photography prohibited inside temple", "Strict security checks"]
    }
  },
  {
    id: "bhimashankar-jyotirlinga",
    image: "https://images.unsplash.com/photo-1582030727083-85d9eef98773",
    title: "Bhimashankar Temple",
    location: "Maharashtra",
    price: 2200,
    days: 2,
    category: "religious",
    categoryLabel: "Religious",
    categoryColor: "bg-musafir-spiritual",
    description: "Trek through the Western Ghats to reach the sixth Jyotirlinga, nestled in a lush wildlife sanctuary.",
    longDescription: "Bhimashankar Temple, housing the sixth Jyotirlinga, is situated in the serene Sahyadri hills of the Western Ghats in Maharashtra. The temple sits at an elevation of 3,250 feet above sea level, surrounded by dense forests that are now part of the Bhimashankar Wildlife Sanctuary, home to the endangered Indian Giant Squirrel. The temple's architecture reflects the Nagara style with influences of Indo-Aryan design, featuring intricate carvings and a shikhara (spire). The main structure dates back to the 18th century, though the site's religious significance is much older. According to legend, the Jyotirlinga formed when Lord Shiva emerged from the earth to defeat the demon Tripurasura. The sweat that fell from Shiva's body after the battle is said to have formed the Bhima River which flows nearby. The temple's remote location adds to its mystical aura, requiring a trek through beautiful forested paths or a drive along winding mountain roads. Unlike some of the more commercialized pilgrimage sites, Bhimashankar retains a peaceful atmosphere where visitors can experience spiritual contemplation amidst natural beauty. The combination of religious significance and ecological diversity makes Bhimashankar a unique destination that appeals to both pilgrims and nature enthusiasts.",
    highlights: [
      "Darshan of the ancient Jyotirlinga amidst serene forest surroundings",
      "Trek through the beautiful Western Ghats (optional forest trails available)",
      "Chance to spot the rare Malabar Giant Squirrel in the surrounding sanctuary",
      "Visit to the source of the Bhima River behind the temple",
      "Exploration of Nagari style architecture with intricate carvings"
    ],
    bestTimeToVisit: "October to February offers pleasant weather and clear skies. Monsoon season (June-September) transforms the region into a lush green paradise with numerous waterfalls, but trekking paths can be slippery. Summer months (March-May) can be hot but less crowded. Mahashivratri festival is the most auspicious time to visit.",
    itinerary: [
      {
        title: "Arrival and Temple Visit",
        description: "Travel from Pune or Mumbai to Bhimashankar. The journey takes you through picturesque landscapes of the Western Ghats. Upon arrival, check into your accommodation and visit the temple for evening darshan. Explore the main temple complex and the surrounding smaller shrines.",
        activities: [
          "Journey to Bhimashankar from Pune/Mumbai",
          "Check-in at accommodation",
          "Evening darshan at Bhimashankar Temple",
          "Visit to nearby Gupt Bhimashankar shrine",
          "Exploration of the temple complex architecture"
        ],
        meals: "Dinner",
        accommodation: "Basic accommodation near temple or in nearby villages"
      },
      {
        title: "Nature Trails and Departure",
        description: "Early morning darshan at the temple followed by nature trails in the surrounding wildlife sanctuary. Visit the origin point of the Bhima River and other natural attractions before departing.",
        activities: [
          "Morning darshan and abhishekam viewing",
          "Nature walk in the Bhimashankar Wildlife Sanctuary",
          "Visit to the source of Bhima River",
          "Optional visit to nearby viewpoints like Bombay Point or Hanuman Lake",
          "Departure from Bhimashankar"
        ],
        meals: "Breakfast, Lunch"
      }
    ],
    accommodation: [
      {
        name: "Forest Department Rest House",
        description: "Basic government-run accommodation located near the sanctuary. Advance booking is essential as rooms are limited.",
        location: "Near temple complex",
        amenities: ["Basic rooms", "Hot water (limited hours)", "Meals available on request", "Peaceful location"]
      },
      {
        name: "Temple Trust Accommodations",
        description: "Simple rooms available at affordable rates, run by the temple trust and mainly catering to pilgrims.",
        location: "Within temple premises",
        amenities: ["Basic rooms", "Common bathrooms", "Vegetarian meals", "Temple proximity"]
      }
    ],
    gallery: [
      "https://images.unsplash.com/photo-1582030584564-d93499bb5bba",
      "https://images.unsplash.com/photo-1567589418226-dc304a97176a",
      "https://images.unsplash.com/photo-1600111152050-3ca5818eedf4",
      "https://images.unsplash.com/photo-1586714641877-2c302bb816f6",
      "https://images.unsplash.com/photo-1580467105275-868b4e95baca"
    ],
    coordinates: [19.0721, 73.5374],
    locationDescription: "Bhimashankar Temple is located in the Sahyadri range of the Western Ghats in Maharashtra, about 110 km from Pune and 210 km from Mumbai. It sits at an elevation of 3,250 feet in the Bhimashankar Wildlife Sanctuary, surrounded by dense forests. The temple is accessible by road from Pune, with the last stretch being through mountainous terrain.",
    transportation: [
      {
        type: "bus",
        from: "Pune",
        price: 200,
        duration: "3-4 hours",
        schedule: "Limited bus service from Pune bus depot, morning departures",
        link: "https://msrtc.gov.in"
      },
      {
        type: "shared taxi",
        from: "Pune (Shivajinagar)",
        price: 350,
        duration: "3 hours",
        schedule: "Regular shared taxis available",
        link: "Available at Shivajinagar stand"
      },
      {
        type: "taxi",
        from: "Pune/Mumbai",
        price: 2000,
        duration: "3 hours from Pune, 5 hours from Mumbai",
        schedule: "Available on demand",
        link: "Local taxi services"
      }
    ],
    specialFeatures: {
      pilgrimageType: "temple",
      rituals: [
        "Abhishekam of the Jyotirlinga",
        "Rudra Abhishek ceremony",
        "Bilva leaf offering",
        "Circling the sanctuary with chants",
        "Offering lamps at the temple"
      ],
      significance: "Bhimashankar is the sixth of the twelve Jyotirlingas. According to the Shiva Purana, Lord Shiva manifested in this region after defeating the demon Tripurasura. The sweat that fell from his body after the battle formed the Bhima River. Another legend connects the site to the story of Bhima, a demon who gained power through penance to Lord Brahma, but later misused it. Lord Shiva appeared as 'Bhimashankar' to defeat him.",
      difficulty: "moderate",
      seasonality: "Year-round with peak season from October to February",
      permits: ["Forest Department permission needed for certain trekking routes"],
      restrictions: ["Photography restricted inside main temple", "Plastic bags prohibited in sanctuary area", "Some forest areas require guided access only"]
    }
  },
  {
    id: "kashi-vishwanath-jyotirlinga",
    image: "https://images.unsplash.com/photo-1641116557503-5808acf1d21b",
    title: "Kashi Vishwanath Temple",
    location: "Varanasi, Uttar Pradesh",
    price: 2700,
    days: 3,
    category: "religious",
    categoryLabel: "Religious",
    categoryColor: "bg-musafir-spiritual",
    description: "Experience the divine aura of the seventh Jyotirlinga in the spiritual capital of India, where rituals have continued uninterrupted for centuries.",
    longDescription: "The Kashi Vishwanath Temple in Varanasi, housing the seventh Jyotirlinga, is one of the most revered and ancient Hindu temples dedicated to Lord Shiva. Located on the western bank of the holy river Ganges, it stands at the heart of the oldest living city in the world. The temple has been destroyed and rebuilt multiple times throughout history, with the current structure dating to 1780, built by Maharani Ahilyabai Holkar of Indore. Recently, the temple complex underwent a massive renovation with the Kashi Vishwanath Corridor project, making it more accessible while preserving its sanctity. The main deity is a Jyotirlinga representing Lord Shiva, and the temple also houses shrines to other deities including Vishnu, Ganesha, Parvati, and Avimukteshwara. According to Hindu belief, Kashi (Varanasi) is considered the ultimate pilgrimage site where Lord Shiva and his consort Parvati are believed to reside. It is said that those who die in Kashi attain liberation (moksha), breaking the cycle of rebirth. The temple sees thousands of devotees daily, with the numbers swelling during festivals like Mahashivaratri. The rituals at the temple follow ancient Vedic traditions, with the day beginning before dawn and continuing until late night with various ceremonial offerings and prayers. The spiritual environment of the temple, combined with the mystical aura of Varanasi and the sacred Ganges, creates an unparalleled pilgrimage experience that touches the soul of every visitor.",
    highlights: [
      "Darshan of the revered Jyotirlinga in India's spiritual capital",
      "Participation in the spectacular Ganga Aarti at nearby Dashashwamedh Ghat",
      "Early morning boat ride on the Ganges viewing ancient ghats",
      "Walking tour through the ancient lanes of Varanasi",
      "Visit to nearby Sarnath where Buddha gave his first sermon"
    ],
    bestTimeToVisit: "October to March offers pleasant weather. Major festivals when the temple is elaborately decorated include Mahashivaratri (February/March) and Shravan month (July/August). Dev Deepawali (November) is when all ghats are illuminated with thousands of lamps, creating a mesmerizing spectacle.",
    itinerary: [
      {
        title: "Arrival in Varanasi",
        description: "Arrive in Varanasi and check into your accommodation. In the evening, visit the famous Dashashwamedh Ghat to witness the spectacular Ganga Aarti, a spiritual ritual with fire, incense, and chanting that honors the River Ganges. After the Aarti, take a walking tour through the vibrant streets and ancient lanes of Varanasi.",
        activities: [
          "Arrival in Varanasi and check-in",
          "Evening Ganga Aarti at Dashashwamedh Ghat",
          "Guided walking tour through the ancient lanes",
          "Dinner at a traditional local restaurant",
          "Orientation about the next day's temple visit"
        ],
        meals: "Dinner",
        accommodation: "Budget hotel near ghats"
      },
      {
        title: "Kashi Vishwanath Temple and Varanasi Exploration",
        description: "Early morning boat ride on the Ganges to witness the sunrise and the city awakening with rituals and prayers at various ghats. After breakfast, visit the Kashi Vishwanath Temple for darshan. Spend time exploring other important temples in Varanasi including Sankat Mochan and Durga Temple. In the evening, attend another spiritual ceremony at Assi Ghat.",
        activities: [
          "Early morning boat ride on the Ganges",
          "Visit to Kashi Vishwanath Temple for darshan",
          "Exploration of other important temples and religious sites",
          "Afternoon visit to Banaras Hindu University and New Vishwanath Temple",
          "Evening ceremony at Assi Ghat"
        ],
        meals: "Breakfast, Lunch, Dinner",
        accommodation: "Same as previous night"
      },
      {
        title: "Sarnath Excursion and Departure",
        description: "Morning visit to Sarnath, located about 10 km from Varanasi, where Buddha gave his first sermon after attaining enlightenment. Explore the archaeological museum and the Dhamek Stupa. Return to Varanasi for lunch and any last-minute shopping before departure.",
        activities: [
          "Morning excursion to Sarnath",
          "Visit to Dhamek Stupa and Archaeological Museum",
          "Return to Varanasi for lunch",
          "Optional: Shopping for famous Banarasi silk and handicrafts",
          "Departure from Varanasi"
        ],
        meals: "Breakfast, Lunch"
      }
    ],
    accommodation: [
      {
        name: "Ghat-Side Budget Hotels",
        description: "Several budget-friendly hotels and guesthouses are available near the ghats, offering basic amenities with the convenience of being close to the main religious sites.",
        location: "Near the ghats",
        amenities: ["Clean rooms", "Hot water", "Some with river views", "Walking distance to ghats", "Restaurant facilities"]
      },
      {
        name: "Dharamshalas and Ashrams",
        description: "Traditional pilgrim accommodations run by religious trusts offering very basic facilities at low costs, primarily for those on religious journeys.",
        location: "Throughout the old city",
        amenities: ["Simple rooms", "Vegetarian meals", "Spiritual atmosphere", "Early morning wake-up calls for rituals"]
      }
    ],
    gallery: [
      "https://images.unsplash.com/photo-1644102125884-983d07e3ce49",
      "https://images.unsplash.com/photo-1561361058-c24f8c67b5c6",
      "https://images.unsplash.com/photo-1627894804820-3a317e122bc5",
      "https://images.unsplash.com/photo-1612869465496-25f0366104ab",
      "https://images.unsplash.com/photo-1642784353179-55759c4c732b"
    ],
    coordinates: [25.3109, 83.0107],
    locationDescription: "Kashi Vishwanath Temple is located in the heart of Varanasi (also known as Banaras or Kashi), one of the oldest continuously inhabited cities in the world. The temple stands on the western bank of the River Ganges, accessible through a network of narrow lanes in the old city. Varanasi is well-connected to major cities in India, located about 320 km from Lucknow and 797 km from Delhi.",
    transportation: [
      {
        type: "train",
        from: "Major cities to Varanasi Junction",
        price: 600,
        duration: "Varies by origin",
        schedule: "Multiple trains daily connect Varanasi to major cities",
        link: "https://www.irctc.co.in"
      },
      {
        type: "flight",
        from: "Major cities to Lal Bahadur Shastri Airport",
        price: 3500,
        duration: "Varies by origin",
        schedule: "Multiple daily flights connect Varanasi to major Indian cities",
        link: "Various airlines"
      },
      {
        type: "bus",
        from: "Neighboring cities",
        price: 300,
        duration: "Varies by origin",
        schedule: "Regular bus services from cities in Uttar Pradesh and Bihar",
        link: "https://upsrtc.up.gov.in"
      }
    ],
    specialFeatures: {
      pilgrimageType: "temple",
      rituals: [
        "Early morning 'Mangala Aarti'",
        "Panchamrit Abhishekam of the lingam",
        "Offering of Bilva leaves and flowers",
        "Ritual bath in the Ganges before temple visit",
        "Participation in 'Ganga Aarti' at the ghats"
      ],
      significance: "Kashi Vishwanath is the seventh of the twelve Jyotirlingas and holds supreme importance in Hindu cosmology. Varanasi is considered the abode of Lord Shiva and Goddess Parvati. According to Hindu belief, the Kashi Vishwanath Jyotirlinga is the manifestation of Lord Shiva as the 'Lord of the Universe.' It is believed that a pilgrimage to Kashi and worship at this temple leads to liberation (moksha).",
      difficulty: "easy",
      seasonality: "Year-round with peak season from October to March",
      permits: [],
      restrictions: ["Photography prohibited inside temple", "Strict security checks at entrance", "Mobile phones, leather items, and electronic gadgets prohibited inside sanctum", "Specific dress code recommended"]
    }
  },
  {
    id: "trimbakeshwar-jyotirlinga",
    image: "https://images.unsplash.com/photo-1599661046532-55c536ecb722",
    title: "Trimbakeshwar Temple",
    location: "Maharashtra",
    price: 2300,
    days: 2,
    category: "religious",
    categoryLabel: "Religious",
    categoryColor: "bg-musafir-spiritual",
    description: "Visit the eighth Jyotirlinga known for its unique three-faced lingam and the source of the sacred Godavari River.",
    longDescription: "The Trimbakeshwar Temple, housing the eighth Jyotirlinga, is located near Nashik in Maharashtra. This ancient temple is distinguished by its unique three-faced (Trimukhi) lingam representing the trinity of Brahma, Vishnu, and Mahesh (Shiva), making it one of the most distinctive Jyotirlinga sites. The temple is built in the Hemadpanthi style (named after Hemadri Pandit, a minister in the court of the Yadava king) with black stone, featuring intricate carvings and a spacious courtyard. The current structure dates back to the 18th century when it was rebuilt by Peshwa Balaji Bajirao after the original temple was destroyed during Muslim invasions. The temple holds special significance as it is located near Brahmagiri Hill, the source of the sacred Godavari River, which is referred to as the 'Ganga of the South.' According to Hindu mythology, Lord Shiva was pleased with the devotion of the sage Gautama and manifested as the Trimbakeshwar Jyotirlinga. The temple's proximity to Nashik, one of the four sites of the Kumbh Mela held every 12 years, adds to its religious importance. Unlike many other temples, at Trimbakeshwar, the lingam is usually covered with a silver mask, with three faces representing the trinity, which is removed during special worship ceremonies. This temple is not just a religious site but also a marvel of ancient Indian architecture and stone craftsmanship.",
    highlights: [
      "Darshan of the unique three-faced lingam representing the trinity",
      "Visit to Kushavarta Kund, the source of the sacred Godavari River",
      "Trek to Brahmagiri Hill offering panoramic views",
      "Exploration of exquisite Hemadpanthi architecture",
      "Nearby Nashik with its numerous temples and vineyards"
    ],
    bestTimeToVisit: "October to March offers pleasant weather for visiting. The temple sees major celebrations during Shivratri (February/March) and the holy month of Shravan (July/August). During Kumbh Mela (held every 12 years, with the next one in 2027), the area becomes extremely crowded.",
    itinerary: [
      {
        title: "Arrival and Temple Visit",
        description: "Arrive in Nashik and proceed to Trimbakeshwar, about 30 km away. Check into your accommodation and visit the Trimbakeshwar Temple for darshan. Explore the temple complex and visit Kushavarta Kund, the source of the Godavari River.",
        activities: [
          "Arrival in Nashik and travel to Trimbakeshwar",
          "Check-in at accommodation",
          "Afternoon darshan at Trimbakeshwar Temple",
          "Visit to Kushavarta Kund",
          "Evening Aarti at the temple"
        ],
        meals: "Dinner",
        accommodation: "Budget hotel or dharamshala in Trimbakeshwar"
      },
      {
        title: "Brahmagiri Trek and Departure",
        description: "Early morning visit to the temple for darshan followed by a trek to Brahmagiri Hill, the source of the Godavari River. After lunch, visit other nearby temples before departing from Trimbakeshwar.",
        activities: [
          "Morning darshan at Trimbakeshwar Temple",
          "Trek to Brahmagiri Hill (moderate difficulty, 2-3 hours)",
          "Visit to the actual source of Godavari on the hill",
          "Return to Trimbakeshwar for lunch",
          "Visit to nearby Anjani and Nilambika temples",
          "Departure from Trimbakeshwar"
        ],
        meals: "Breakfast, Lunch"
      }
    ],
    accommodation: [
      {
        name: "MTDC Resort Trimbakeshwar",
        description: "Government-run accommodation offering comfortable rooms at reasonable rates. Located about 1 km from the temple.",
        location: "Near Trimbakeshwar town",
        amenities: ["Clean rooms", "Restaurant", "Parking", "Hot water", "Garden area"]
      },
      {
        name: "Temple Trust Dharamshalas",
        description: "Basic accommodation run by the temple trust, offering affordable options for pilgrims. Located very close to the temple.",
        location: "Near temple complex",
        amenities: ["Simple rooms", "Common bathrooms", "Vegetarian meals available", "Temple proximity"]
      }
    ],
    gallery: [
      "https://images.unsplash.com/photo-1599661046532-55c536ecb722",
      "https://images.unsplash.com/photo-1617195028551-5a624bbebaa6",
      "https://images.unsplash.com/photo-1589739900931-218e464364f8",
      "https://images.unsplash.com/photo-1594461160912-d2db81f31a01",
      "https://images.unsplash.com/photo-1580115445080-d04b4c3381cb"
    ],
    coordinates: [19.9320, 73.5292],
    locationDescription: "Trimbakeshwar Temple is located in the small town of Trimbak, about 30 km from Nashik in Maharashtra. It is situated at the foot of Brahmagiri Hill, the source of the sacred Godavari River. Nashik is approximately 171 km from Mumbai and 210 km from Pune.",
    transportation: [
      {
        type: "bus",
        from: "Nashik",
        price: 60,
        duration: "1 hour",
        schedule: "Regular buses every 30 minutes from Nashik Central Bus Stand",
        link: "https://msrtc.gov.in"
      },
      {
        type: "shared taxi",
        from: "Nashik",
        price: 100,
        duration: "45 minutes",
        schedule: "Available throughout the day",
        link: "Available at Nashik CBS"
      },
      {
        type: "train",
        from: "Major cities to Nashik Road station",
        price: 400,
        duration: "Varies by origin + 1 hour road journey to Trimbakeshwar",
        schedule: "Multiple trains connect Mumbai, Pune, and other cities to Nashik",
        link: "https://www.irctc.co.in"
      }
    ],
    specialFeatures: {
      pilgrimageType: "temple",
      rituals: [
        "Abhishekam of the three-faced lingam",
        "Bilva leaf offering",
        "Sacred bath in Kushavarta Kund",
        "Panchamrit offering to the deity",
        "Pradakshina (circumambulation) of the temple"
      ],
      significance: "Trimbakeshwar is the eighth of the twelve Jyotirlingas. This Jyotirlinga is considered unique because the lingam has three faces embodying Lord Brahma, Lord Vishnu, and Lord Shiva. According to Hindu mythology, Lord Shiva granted a boon to sage Gautama by manifesting at this location. The temple is also significant as the origin point of the sacred Godavari River, referred to as the 'Ganga of the South'.",
      difficulty: "easy",
      seasonality: "Year-round with peak season from October to March",
      permits: [],
      restrictions: ["Photography prohibited inside temple", "Men must be bare-chested with a dhoti when entering innermost sanctum", "Only specific priests can perform abhishekam of the lingam", "Women are not allowed to touch the lingam"]
    }
  },
  {
    id: "baidyanath-jyotirlinga",
    image: "https://images.unsplash.com/photo-1567861911434-2fd6e9e4f9b5",
    title: "Baidyanath Temple",
    location: "Deoghar, Jharkhand",
    price: 2400,
    days: 3,
    category: "religious",
    categoryLabel: "Religious",
    categoryColor: "bg-musafir-spiritual",
    description: "Visit the ninth Jyotirlinga, especially sacred during the month of Shravan when thousands of devotees carry holy water for abhishekam.",
    longDescription: "The Baidyanath Temple in Deoghar, Jharkhand, is home to the ninth Jyotirlinga and is one of the most revered Shiva temples in India. Also known as Vaidyanath Dham, this temple is part of the famous 'Shiva circuit' along with Basukinath temple and the Prana Lingas. The temple has a unique legend associated with it: according to Hindu mythology, when Goddess Sati died, Lord Shiva carried her body in grief. To end his mourning, Lord Vishnu used his Sudarshan Chakra to cut the body into 52 pieces, which fell at different locations across the Indian subcontinent, creating the Shakti Peethas. It is believed that Sati's heart fell at Deoghar, making it both a Jyotirlinga and a Shakti Peetha. The temple complex consists of 22 temples dedicated to various deities, with the main temple housing the Jyotirlinga. The temple architecture reflects a simple yet elegant style, with a 72-foot high main tower. What makes Baidyanath particularly notable is the Kanwar Yatra during the month of Shravan (July-August), when thousands of devotees, known as Kanwariyas, walk hundreds of kilometers carrying water from the Ganges to perform abhishekam on the Jyotirlinga. These devotees, dressed in saffron, undertake this journey barefoot as an act of devotion and penance. The temple receives millions of visitors during this period, making it one of the largest religious gatherings in eastern India. Throughout the year, the temple follows specific and elaborate rituals for worship, preserving traditions that have been followed for centuries.",
    highlights: [
      "Darshan of the sacred Jyotirlinga in the ancient temple complex",
      "Witnessing the devotion of Kanwariyas during Shravan (if visiting in July-August)",
      "Visit to nearby Nandan Pahar hill for panoramic views",
      "Exploration of all 22 temples within the main complex",
      "Excursion to Basukinath Temple, part of the Shiva circuit"
    ],
    bestTimeToVisit: "October to March offers pleasant weather. The month of Shravan (July-August) sees the famous Kanwar Yatra when millions of devotees visit, creating an incredible atmosphere of devotion but also extreme crowds. Mahashivratri (February/March) is another important festival celebrated with great enthusiasm.",
    itinerary: [
      {
        title: "Arrival in Deoghar",
        description: "Arrive in Deoghar and check into your accommodation. Visit the Baidyanath Temple for evening darshan and to understand the temple layout. Explore the main temple complex with its 22 temples dedicated to various deities.",
        activities: [
          "Arrival in Deoghar and check-in",
          "Evening darshan at Baidyanath Temple",
          "Exploration of the 22 temples within the complex",
          "Orientation about temple history and rituals",
          "Evening Aarti attendance"
        ],
        meals: "Dinner",
        accommodation: "Budget hotel or dharamshala in Deoghar"
      },
      {
        title: "Baidyanath Temple and Local Exploration",
        description: "Early morning darshan at Baidyanath Temple, followed by visits to nearby attractions including Nandan Pahar, Trikut Parvat, and Satsang Ashram. In the evening, attend the special Shringar ceremony at the temple.",
        activities: [
          "Early morning darshan at Baidyanath Temple",
          "Visit to Nandan Pahar for panoramic views",
          "Exploration of Trikut Parvat (optional ropeway ride)",
          "Visit to Satsang Ashram for spiritual discourse",
          "Evening Shringar ceremony at Baidyanath Temple"
        ],
        meals: "Breakfast, Lunch, Dinner",
        accommodation: "Same as previous night"
      },
      {
        title: "Basukinath Excursion and Departure",
        description: "Morning visit to Basukinath Temple, about 40 km from Deoghar, which is an important part of the Shiva circuit in the region. Return to Deoghar for lunch and final darshan at Baidyanath Temple before departure.",
        activities: [
          "Morning excursion to Basukinath Temple",
          "Return to Deoghar for lunch",
          "Final darshan at Baidyanath Temple",
          "Purchase of local souvenirs",
          "Departure from Deoghar"
        ],
        meals: "Breakfast, Lunch"
      }
    ],
    accommodation: [
      {
        name: "JTDC Tourist Complex",
        description: "Government-run accommodation offering clean rooms at reasonable rates. Located relatively close to the temple.",
        location: "Near Bus Stand, Deoghar",
        amenities: ["Clean rooms", "Restaurant", "Hot water", "Travel desk", "Parking"]
      },
      {
        name: "Pilgrim Dharamshalas",
        description: "Several dharamshalas run by religious trusts offer basic accommodation at very low rates, primarily for pilgrims.",
        location: "Around temple complex",
        amenities: ["Basic rooms", "Common bathrooms", "Sometimes include simple meals", "Temple proximity"]
      }
    ],
    gallery: [
      "https://images.unsplash.com/photo-1565177784704-8a05a95b8ee7",
      "https://images.unsplash.com/photo-1601547976122-229ee8fe1aa5",
      "https://images.unsplash.com/photo-1524229423863-a4f68aff6c5c",
      "https://images.unsplash.com/photo-1590599454896-b879fe4ece5a",
      "https://images.unsplash.com/photo-1606293927185-20fad5f0081c"
    ],
    coordinates: [24.4857, 86.7008],
    locationDescription: "Baidyanath Temple is located in Deoghar town in Jharkhand state, eastern India. It is approximately 270 km from Patna, 320 km from Kolkata, and 229 km from Ranchi. Deoghar is well-connected by road and rail to major cities in eastern India.",
    transportation: [
      {
        type: "train",
        from: "Major cities to Jasidih Junction",
        price: 450,
        duration: "Varies by origin",
        schedule: "Multiple trains connect Jasidih (5 km from Deoghar) to cities like Kolkata, Patna, and Delhi",
        link: "https://www.irctc.co.in"
      },
      {
        type: "bus",
        from: "Nearby cities",
        price: 300,
        duration: "Varies by origin",
        schedule: "Regular bus services from Ranchi, Patna, and other cities in Jharkhand and Bihar",
        link: "https://jharkhand.gov.in/transport"
      },
      {
        type: "flight",
        from: "Major cities to Deoghar Airport",
        price: 3000,
        duration: "Varies by origin",
        schedule: "Limited flights to the newly built Deoghar Airport",
        link: "Various airlines"
      }
    ],
    specialFeatures: {
      pilgrimageType: "temple",
      rituals: [
        "Panchamrit Abhishekam of the lingam",
        "Bilva leaf and flower offerings",
        "Rudrabhishek ceremony",
        "Offering of Gangajal (water from the Ganges)",
        "Participation in the evening Shringar ceremony"
      ],
      significance: "Baidyanath is the ninth of the twelve Jyotirlingas. According to Hindu mythology, this is where Ravana, the demon king, offered his ten heads in sacrifice to please Lord Shiva. Impressed by his devotion, Shiva restored his heads and granted him a boon. The name 'Vaidyanatha' means 'Lord of Physicians,' as Shiva is believed to have cured Ravana. This site is also significant as one of the 52 Shakti Peethas, where the heart of Goddess Sati is believed to have fallen.",
      difficulty: "easy",
      seasonality: "Year-round with peak season during Shravan month (July-August)",
      permits: [],
      restrictions: ["Photography prohibited inside main temple", "Strict security checks during peak season", "Mobile phones not allowed in inner sanctum", "Specific dress code enforced"]
    }
  },
  {
    id: "nageshwar-jyotirlinga",
    image: "https://images.unsplash.com/photo-1594393964395-83969c2a9507",
    title: "Nageshwar Temple",
    location: "Gujarat",
    price: 2100,
    days: 2,
    category: "religious",
    categoryLabel: "Religious",
    categoryColor: "bg-musafir-spiritual",
    description: "Visit the tenth Jyotirlinga located near the coast of Gujarat, featuring one of the tallest Lord Shiva statues in the world.",
    longDescription: "The Nageshwar Temple, housing the tenth Jyotirlinga, is situated between Dwarka and Bet Dwarka in Gujarat's Jamnagar district. This temple is distinctive for its seaside location and houses one of the tallest statues of Lord Shiva in the world at 25 meters (82 feet) high. The temple's name derives from 'Naga' (serpent), as the lingam here is believed to be protected by a serpent deity. According to Hindu mythology, a demon named Daaruka imprisoned a devotee of Lord Shiva named Supriya, who prayed to the Lord for protection. Lord Shiva appeared as a Jyotirlinga to defeat the demon and protect his devotee. The current temple structure is relatively modern, with a simple yet elegant design featuring a tall spire. The temple complex is spacious with well-maintained gardens adding to its serene atmosphere. Unlike some of the other Jyotirlinga temples, Nageshwar is less crowded, offering a more peaceful darshan experience most of the year. The temple's proximity to other significant religious sites like Dwarka (one of the four Char Dham pilgrimage sites) and Bet Dwarka makes it part of a larger pilgrimage circuit in this region that attracts devotees from across India. The combination of religious significance and coastal beauty makes Nageshwar a unique pilgrimage destination that provides both spiritual fulfillment and natural beauty.",
    highlights: [
      "Darshan of the sacred Jyotirlinga in a serene coastal setting",
      "View of the impressive 25-meter tall Lord Shiva statue",
      "Proximity to other important pilgrimage sites like Dwarka and Bet Dwarka",
      "Beautiful sunrise views over the Arabian Sea",
      "Well-maintained temple gardens for peaceful meditation"
    ],
    bestTimeToVisit: "October to March offers pleasant weather. Summer months (April-June) can be extremely hot, while monsoon season (July-September) brings humidity. Major festivals celebrated here include Mahashivratri (February/March) and Shravan month (July/August) according to the Hindu calendar.",
    itinerary: [
      {
        title: "Arrival and Temple Visit",
        description: "Arrive in Dwarka and proceed to the Nageshwar Temple, about 15 km away. Check into your accommodation and visit the temple for evening darshan. Explore the temple complex and marvel at the massive Shiva statue.",
        activities: [
          "Arrival in Dwarka and transfer to Nageshwar",
          "Check-in at accommodation",
          "Evening darshan at Nageshwar Temple",
          "Circumambulation of the temple complex",
          "Viewing the 25-meter Shiva statue",
          "Sunset views from the temple gardens"
        ],
        meals: "Dinner",
        accommodation: "Budget hotel near Nageshwar or in Dwarka"
      },
      {
        title: "Morning Darshan and Dwarka Visit",
        description: "Early morning darshan at Nageshwar Temple followed by a visit to Dwarka and Bet Dwarka, completing the spiritual circuit of this region. Return for a final darshan at Nageshwar before departure.",
        activities: [
          "Early morning darshan at Nageshwar Temple",
          "Visit to Dwarkadhish Temple in Dwarka",
          "Optional boat ride to Bet Dwarka",
          "Return to Nageshwar for final darshan",
          "Departure from Nageshwar"
        ],
        meals: "Breakfast, Lunch"
      }
    ],
    accommodation: [
      {
        name: "GTDC Tourist Complex",
        description: "Government-run accommodation offering clean, basic rooms at affordable rates. Located within reasonable distance from the temple.",
        location: "Near Nageshwar Temple",
        amenities: ["Clean rooms", "Restaurant", "Parking", "Travel assistance"]
      },
      {
        name: "Budget Hotels in Dwarka",
        description: "Several budget hotels and guesthouses are available in nearby Dwarka, offering more options for accommodation.",
        location: "Dwarka (15 km from Nageshwar)",
        amenities: ["Various room categories", "Restaurants", "Hot water", "Transportation arrangement to Nageshwar"]
      }
    ],
    gallery: [
      "https://images.unsplash.com/photo-1595827432953-7d31b98cd2a7",
      "https://images.unsplash.com/photo-1584493378327-9a3d9e47e797",
      "https://images.unsplash.com/photo-1594393964395-83969c2a9507",
      "https://images.unsplash.com/photo-1536421816817-b064c685d0ec",
      "https://images.unsplash.com/photo-1596543815546-e29a31518a46"
    ],
    coordinates: [22.4381, 69.0781],
    locationDescription: "Nageshwar Temple is located in the Jamnagar district of Gujarat, between Dwarka and Bet Dwarka. It is approximately 15 km from Dwarka and about 145 km from Jamnagar. The temple sits close to the coast of the Arabian Sea in the westernmost part of India's Gujarat state.",
    transportation: [
      {
        type: "bus",
        from: "Jamnagar/Dwarka",
        price: 100,
        duration: "3.5 hours from Jamnagar, 30 minutes from Dwarka",
        schedule: "Regular bus service available from Jamnagar and Dwarka",
        link: "https://gsrtc.in"
      },
      {
        type: "train",
        from: "Major cities to Dwarka",
        price: 500,
        duration: "Varies by origin + 30 minutes road journey",
        schedule: "Trains connect major cities to Dwarka, followed by local transport to Nageshwar",
        link: "https://www.irctc.co.in"
      },
      {
        type: "taxi",
        from: "Dwarka/Jamnagar",
        price: 800,
        duration: "30 minutes from Dwarka, 2.5 hours from Jamnagar",
        schedule: "Available on demand",
        link: "Local taxi services"
      }
    ],
    specialFeatures: {
      pilgrimageType: "temple",
      rituals: [
        "Abhishekam of the Jyotirlinga",
        "Offering of bilva leaves and flowers",
        "Chanting of Mahamrityunjaya Mantra",
        "Pradakshina (circumambulation) of the lingam",
        "Offering coconuts and sweets to the deity"
      ],
      significance: "Nageshwar is the tenth of the twelve Jyotirlingas. According to the Shiva Purana, this Jyotirlinga appeared to rescue a devotee named Supriya who was imprisoned by the demon Daaruka. The name 'Nageshwar' means 'Lord of Serpents,' as snakes are associated with Lord Shiva's ornaments. This Jyotirlinga is believed to protect devotees from all poisons, especially snake bites.",
      difficulty: "easy",
      seasonality: "Year-round with peak season from October to March",
      permits: [],
      restrictions: ["Photography may be restricted in certain areas", "Modest dress code required", "Removal of footwear before entering temple"]
    }
  },
  {
    id: "rameshwaram-jyotirlinga",
    image: "https://images.unsplash.com/photo-1583202075542-31428a14c0c9",
    title: "Rameshwaram Temple",
    location: "Tamil Nadu",
    price: 3200,
    days: 3,
    category: "religious",
    categoryLabel: "Religious",
    categoryColor: "bg-musafir-spiritual",
    description: "Experience the divine aura of the eleventh Jyotirlinga, featuring the longest temple corridor in India and sacred bathing in 22 wells.",
    longDescription: "The Ramanathaswamy Temple in Rameshwaram houses the eleventh of the twelve sacred Jyotirlingas of Lord Shiva. Located on Rameshwaram Island in the Gulf of Mannar, this temple is a major pilgrimage site for both Shaivites (devotees of Lord Shiva) and Vaishnavites (devotees of Lord Vishnu) due to its association with the Ramayana epic. According to Hindu mythology, Lord Rama, an incarnation of Vishnu, installed and worshipped this lingam to seek the blessings of Lord Shiva before his war against the demon king Ravana. The temple's architecture is a magnificent example of Dravidian style, featuring a towering 38.4-meter gopuram (temple tower) and the longest temple corridor in India, with 1,212 intricately carved pillars extending over 197 meters. What makes Rameshwaram particularly unique is its 22 sacred wells (theerthams), each with water of a different taste and mineral composition. Pilgrims traditionally bathe in these wells before entering the main shrine, believing it cleanses them of sins. The temple's location at the southernmost tip of the Indian peninsula, considered a sacred confluence of the Bay of Bengal and the Indian Ocean, adds to its spiritual significance. As one of the Char Dham pilgrimage sites, Rameshwaram attracts millions of devotees annually who come to witness the divine lingam, walk through the majestic corridors, and experience the purifying ritual bath at this sacred island temple.",
    highlights: [
      "Darshan of the sacred Jyotirlinga with both Shiva and Vishnu significance",
      "Walking through India's longest temple corridor with 1,212 ornate pillars",
      "Ritual bathing in the 22 sacred wells (theerthams) within the temple",
      "Visit to Dhanushkodi, the easternmost tip of India, where two seas meet",
      "Excursion to the floating stones at Ramsethu, believed to be part of the bridge built by Lord Rama's army"
    ],
    bestTimeToVisit: "October to March offers pleasant weather. Avoid summer months (April-June) when temperatures soar. Major festivals include Thai Amavasya (January/February), Mahashivratri (February/March), and Aadi Amavasya (July/August).",
    itinerary: [
      {
        title: "Arrival in Rameshwaram",
        description: "Arrive in Rameshwaram and check into your accommodation. Visit the Ramanathaswamy Temple for evening darshan and witness the magnificent architecture including the famous corridors. Attend the evening Aarti ceremony at the temple.",
        activities: [
          "Arrival in Rameshwaram and check-in",
          "Evening visit to Ramanathaswamy Temple",
          "Walk through the longest temple corridor in India",
          "Witness the evening Aarti ceremony",
          "Explore the outer prakaram (circumambulatory path) of the temple"
        ],
        meals: "Dinner",
        accommodation: "Budget hotel in Rameshwaram"
      },
      {
        title: "Temple Rituals and Local Exploration",
        description: "Early morning visit to the temple for the ritual bath in the 22 sacred wells, followed by darshan of the Jyotirlinga. After breakfast, visit important sites around Rameshwaram including Gandhamadan Parvatham, Jada Tirtham, and Agni Tirtham.",
        activities: [
          "Early morning ritual bathing in the 22 theerthams",
          "Darshan of the Jyotirlinga",
          "Visit to Gandhamadan Parvatham for panoramic views",
          "Bath at Agni Tirtham beach",
          "Visit to Jada Tirtham where Lord Rama washed his hair",
          "Evening return to temple for darshan and Aarti"
        ],
        meals: "Breakfast, Lunch, Dinner",
        accommodation: "Same as previous night"
      },
      {
        title: "Dhanushkodi Excursion and Departure",
        description: "After breakfast, take an excursion to Dhanushkodi, the easternmost tip of India where the Bay of Bengal meets the Indian Ocean. Visit the remaining ruins of this ghost town that was destroyed in a 1964 cyclone. Return to Rameshwaram for final darshan before departure.",
        activities: [
          "Morning excursion to Dhanushkodi",
          "Visit to Ramsethu viewpoint to see the floating stones",
          "Exploration of Dhanushkodi ruins and beach",
          "Return to Rameshwaram for final temple darshan",
          "Departure from Rameshwaram"
        ],
        meals: "Breakfast, Lunch"
      }
    ],
    accommodation: [
      {
        name: "TTDC Hotel Tamil Nadu",
        description: "Government-run accommodation offering clean rooms at reasonable rates. Located within walking distance of the temple.",
        location: "Near Ramanathaswamy Temple",
        amenities: ["Clean rooms", "Restaurant", "Hot water", "Air conditioning in some rooms", "Temple proximity"]
      },
      {
        name: "Budget Hotels and Guesthouses",
        description: "Several private budget hotels and guesthouses are available around the temple area, catering primarily to pilgrims.",
        location: "Temple vicinity",
        amenities: ["Basic rooms", "Some with sea view", "Vegetarian restaurants", "Tour arrangements"]
      }
    ],
    gallery: [
      "https://images.unsplash.com/photo-1593068489619-8e9d0cb4d575",
      "https://images.unsplash.com/photo-1583410733441-111c7cccc346",
      "https://images.unsplash.com/photo-1583407388697-6710cf13f602",
      "https://images.unsplash.com/photo-1589393963767-5aac50ee37d8",
      "https://images.unsplash.com/photo-1588856486288-5c5bc3153149"
    ],
    coordinates: [9.2876, 79.3129],
    locationDescription: "Rameshwaram is located on Pamban Island (also known as Rameshwaram Island) in the Gulf of Mannar, between India and Sri Lanka. It is connected to the mainland by the Pamban Bridge. The temple town is approximately 173 km from Madurai and 482 km from Chennai in Tamil Nadu.",
    transportation: [
      {
        type: "train",
        from: "Major cities to Rameshwaram station",
        price: 600,
        duration: "Varies by origin",
        schedule: "Several trains connect Rameshwaram to major cities in South India",
        link: "https://www.irctc.co.in"
      },
      {
        type: "bus",
        from: "Madurai/Chennai",
        price: 300,
        duration: "4 hours from Madurai, 10 hours from Chennai",
        schedule: "Regular state transport and private buses available",
        link: "https://tnstc.gov.in"
      },
      {
        type: "flight",
        from: "Major cities to Madurai Airport",
        price: 3500,
        duration: "Flight to Madurai + 4 hour road journey",
        schedule: "Fly to nearest airport at Madurai, then take road transport",
        link: "Various airlines"
      }
    ],
    specialFeatures: {
      pilgrimageType: "temple",
      rituals: [
        "Bathing in the 22 sacred wells (theerthams)",
        "Abhishekam of the lingam",
        "Offering of flowers and bilva leaves",
        "Pradakshina of the inner and outer corridors",
        "Sea bath at Agni Tirtham before temple visit"
      ],
      significance: "Rameshwaram is the eleventh of the twelve Jyotirlingas and also part of the Char Dham pilgrimage. According to the Ramayana, Lord Rama worshipped Lord Shiva here to cleanse himself of the sin of killing Ravana, who was a Brahmin. The lingam here is believed to have been installed by Lord Rama himself, making it sacred to both Shaivites and Vaishnavites. The 22 wells inside the temple are believed to have been created by Lord Rama by shooting arrows into the ground.",
      difficulty: "easy",
      seasonality: "Year-round with peak season from October to March",
      permits: [],
      restrictions: ["Men required to wear traditional dhoti in inner sanctum", "Strict dress code for women", "Photography prohibited in main temple", "Electronic items restricted", "Specific rules for the sequence of well bathing"]
    }
  },
  {
    id: "grishneshwar-jyotirlinga",
    image: "https://images.unsplash.com/photo-1576109394079-40b6c647c41e",
    title: "Grishneshwar Temple",
    location: "Maharashtra",
    price: 2300,
    days: 2,
    category: "religious",
    categoryLabel: "Religious",
    categoryColor: "bg-musafir-spiritual",
    description: "Visit the twelfth and final Jyotirlinga, located near the famous Ellora Caves, known for its detailed carvings and sacred legends.",
    longDescription: "The Grishneshwar Temple, housing the twelfth and final Jyotirlinga, is located in the village of Verul near Aurangabad in Maharashtra. This temple holds immense significance as it completes the sacred circuit of the twelve Jyotirlingas mentioned in the Shiva Purana. The current temple structure was built in the 18th century by Ahilyabai Holkar, the queen of Indore, though the site's religious importance dates back much earlier. Built with red rocks, the temple is an excellent example of medieval Indian temple architecture featuring intricate carvings and sculptures. The temple complex is relatively compact compared to some other Jyotirlinga shrines, rising to a height of 76 feet and constructed in the Hemadpanthi style typical of Maharashtra. What adds to the temple's appeal is its proximity to the UNESCO World Heritage Site of Ellora Caves just 15 km away, making it part of a broader cultural and historical tour in the region. According to Hindu mythology, a devoted woman named Kusuma reinstated a lingam here after her son was restored to life by Lord Shiva, giving the deity the name 'Ghushmeshwar' (later Grishneshwar), which means 'Lord of Compassion.' The temple's sanctum houses a small lingam, and the face of the lingam is said to be facing eastward. As the final Jyotirlinga, visiting Grishneshwar is considered the culmination of a pilgrim's spiritual journey through all twelve sacred Shiva sites across India.",
    highlights: [
      "Darshan of the final of the twelve sacred Jyotirlingas",
      "Exploration of the intricately carved medieval temple architecture",
      "Combined visit with the nearby UNESCO World Heritage Ellora Caves",
      "Proximity to other historical sites like Daulatabad Fort and Aurangabad Caves",
      "Spiritual experience in one of the oldest Shiva temples in the region"
    ],
    bestTimeToVisit: "October to March offers pleasant weather for temple visits and exploring nearby attractions. Summer months (April-June) can be extremely hot. Major celebrations occur during Mahashivratri (February/March) and during the month of Shravan (July/August).",
    itinerary: [
      {
        title: "Arrival and Temple Visit",
        description: "Arrive in Aurangabad and proceed to Verul village near Ellora. Check into your accommodation and visit the Grishneshwar Temple for evening darshan. Explore the detailed architecture and intricate carvings of this ancient temple.",
        activities: [
          "Arrival in Aurangabad and transfer to Verul/Ellora",
          "Check-in at accommodation",
          "Evening darshan at Grishneshwar Temple",
          "Exploration of temple architecture and carvings",
          "Evening Aarti participation"
        ],
        meals: "Dinner",
        accommodation: "Budget hotel in Ellora/Aurangabad"
      },
      {
        title: "Ellora Caves and Departure",
        description: "Early morning darshan at Grishneshwar Temple followed by a visit to the magnificent Ellora Caves, featuring Buddhist, Hindu, and Jain monuments. After exploring these UNESCO World Heritage caves, return for a final darshan at Grishneshwar before departure.",
        activities: [
          "Morning darshan at Grishneshwar Temple",
          "Visit to Ellora Caves (allow 4-5 hours for proper exploration)",
          "Lunch at local restaurant",
          "Final darshan at Grishneshwar Temple",
          "Departure from Ellora/Aurangabad"
        ],
        meals: "Breakfast, Lunch"
      }
    ],
    accommodation: [
      {
        name: "MTDC Resort Ellora",
        description: "Government-run accommodation offering comfortable rooms at reasonable rates. Located very close to Ellora Caves and a short distance from the temple.",
        location: "Near Ellora Caves",
        amenities: ["Clean rooms", "Restaurant", "Garden", "Parking", "Hot water"]
      },
      {
        name: "Budget Hotels in Aurangabad",
        description: "Several budget hotels are available in Aurangabad (30 km from the temple) offering better facilities and more options.",
        location: "Aurangabad city",
        amenities: ["Various room categories", "Restaurants", "Wi-Fi", "Tour arrangements"]
      }
    ],
    gallery: [
      "https://images.unsplash.com/photo-1576109394079-40b6c647c41e",
      "https://images.unsplash.com/photo-1589308854531-3a28f918efe3",
      "https://images.unsplash.com/photo-1579873618301-7fdc27e83a0c",
      "https://images.unsplash.com/photo-1538839360628-cfd53b56570d",
      "https://images.unsplash.com/photo-1562266352-6a98c6828edc"
    ],
    coordinates: [20.0260, 75.1703],
    locationDescription: "Grishneshwar Temple is located in Verul village near Ellora, approximately 30 km from Aurangabad in Maharashtra. The temple is just 15 km from the famous Ellora Caves, a UNESCO World Heritage Site. Aurangabad is approximately 350 km from Mumbai and 225 km from Pune.",
    transportation: [
      {
        type: "bus",
        from: "Aurangabad",
        price: 75,
        duration: "45 minutes",
        schedule: "Regular buses available from Aurangabad Central Bus Stand",
        link: "https://msrtc.gov.in"
      },
      {
        type: "train",
        from: "Major cities to Aurangabad",
        price: 400,
        duration: "Varies by origin + 45 minutes road journey",
        schedule: "Trains connect major cities to Aurangabad, then local transport to the temple",
        link: "https://www.irctc.co.in"
      },
      {
        type: "flight",
        from: "Major cities to Aurangabad Airport",
        price: 3000,
        duration: "Flight duration + 45 minutes road journey",
        schedule: "Fly to Aurangabad, then take local transport to Ellora/Verul",
        link: "Various airlines"
      }
    ],
    specialFeatures: {
      pilgrimageType: "temple",
      rituals: [
        "Abhishekam of the lingam",
        "Bilva leaf offering",
        "Recitation of Rudra mantras",
        "Circumambulation of the sanctum",
        "Traditional puja with flowers and sacred ash"
      ],
      significance: "Grishneshwar is the twelfth and final of the twelve Jyotirlingas mentioned in the Shiva Purana. According to local legend, a devout woman named Kusuma (or Ghushma) lost her son who was thrown into a tank by her jealous co-wife. Through her devotion to Lord Shiva and daily worship of a lingam she had made, her son was restored to life. Pleased with her devotion, Lord Shiva manifested here as a Jyotirlinga, taking the name 'Ghushmeshwar' or 'Grishneshwar' (Lord of Compassion).",
      difficulty: "easy",
      seasonality: "Year-round with peak season from October to March",
      permits: [],
      restrictions: ["Photography prohibited inside main sanctum", "Men often required to remove shirts in inner sanctum", "Modest dress code for women", "Leather items not allowed near the lingam"]
    }
  }
];
