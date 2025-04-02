
import { Destination } from './destinations';

export const additionalDestinations: Destination[] = [
  {
    id: "kumaon-meditation",
    image: "https://images.unsplash.com/photo-1518002171953-a080ee817e1f",
    title: "Kumaon Meditation Retreat",
    location: "Uttarakhand",
    price: 4200,
    days: 6,
    category: "meditation",
    categoryLabel: "Meditation",
    categoryColor: "bg-musafir-meditation",
    description: "Peaceful meditation retreat in the serene Kumaon region of the Himalayas with stunning mountain views.",
    longDescription: "Tucked away in the picturesque Kumaon region of Uttarakhand, this meditation retreat offers a tranquil escape from the noise of everyday life. Surrounded by towering deodars and pine forests with breathtaking Himalayan views, the retreat provides the perfect setting for deepening your meditation practice. The 6-day program combines traditional meditation techniques with mindfulness practices, guided by experienced teachers who personalize the approach to your needs. Daily yoga sessions complement the meditation practices, while simple, nourishing vegetarian meals support your inner journey. This affordable retreat is ideal for both beginners seeking an introduction to meditation and experienced practitioners looking to deepen their practice.",
    highlights: [
      "Guided meditation sessions in pristine Himalayan environment",
      "Personalized instruction from experienced meditation teachers",
      "Daily yoga practices to complement meditation",
      "Nature walks through deodar and pine forests",
      "Optional silent meditation day"
    ],
    bestTimeToVisit: "March to June and September to November offer pleasant weather for meditation practice. The retreat is closed during monsoon season (July-August) when heavy rains make the region less accessible.",
    itinerary: [
      {
        title: "Arrival and Introduction",
        description: "Arrive at the retreat center in the afternoon. After settling in, join an orientation session to familiarize yourself with the schedule and practices. Evening introduction to basic meditation techniques.",
        activities: ["Introduction to meditation", "Welcome ceremony", "Group dinner"],
        meals: "Dinner",
        accommodation: "Shared room at retreat center"
      },
      {
        title: "Establishing Meditation Foundations",
        description: "Morning yoga followed by instruction in foundational meditation techniques. Afternoon practice sessions with guided meditation. Evening discourse on meditation philosophy.",
        activities: ["Morning yoga", "Meditation instruction", "Guided practice", "Philosophy talk"],
        meals: "Breakfast, Lunch, Dinner",
        accommodation: "Shared room at retreat center"
      },
      {
        title: "Deepening the Practice",
        description: "Sunrise meditation followed by silent breakfast. Extended meditation sessions with focus on breath awareness. Afternoon nature walk practicing walking meditation. Evening chanting and mantra meditation.",
        activities: ["Sunrise meditation", "Extended sitting practice", "Walking meditation", "Mantra practice"],
        meals: "Breakfast, Lunch, Dinner",
        accommodation: "Shared room at retreat center"
      },
      {
        title: "Silent Day",
        description: "Full day of silence to deepen your meditation experience. Multiple sitting sessions interspersed with mindful walking, eating, and rest periods. Optional one-on-one guidance available.",
        activities: ["Multiple meditation sessions", "Mindful walking", "Silent meals", "Self-reflection"],
        meals: "Breakfast, Lunch, Dinner",
        accommodation: "Shared room at retreat center"
      },
      {
        title: "Mountain Meditation",
        description: "Morning hike to a scenic viewpoint for outdoor meditation session with Himalayan panorama. Afternoon workshops on incorporating meditation into daily life. Evening bonfire meditation.",
        activities: ["Mountain hike", "Outdoor meditation", "Daily life integration workshop", "Bonfire meditation"],
        meals: "Breakfast, Lunch, Dinner",
        accommodation: "Shared room at retreat center"
      },
      {
        title: "Integration and Departure",
        description: "Final morning meditation session followed by closing circle. Personal guidance for continuing your practice at home. Departure after lunch.",
        activities: ["Final meditation session", "Closing ceremony", "Personal guidance"],
        meals: "Breakfast, Lunch"
      }
    ],
    accommodation: [
      {
        name: "Kumaon Mountain Retreat",
        description: "Simple, clean accommodation set amidst pine forests with mountain views. The rooms are basic but comfortable with necessary amenities to support a focused meditation practice.",
        location: "Kasar Devi, near Almora",
        amenities: ["Hot water", "Yoga hall", "Meditation spaces", "Organic gardens", "Mountain views"]
      }
    ],
    gallery: [
      "https://images.unsplash.com/photo-1531497865144-0464ef8fb9a9",
      "https://images.unsplash.com/photo-1518509562904-e7ef99cdcc86",
      "https://images.unsplash.com/photo-1468276311594-df7cb65d8df6",
      "https://images.unsplash.com/photo-1519681393784-d120267933ba",
      "https://images.unsplash.com/photo-1452421822248-d4c2b47f0c81"
    ],
    coordinates: [29.6472, 79.6542],
    locationDescription: "The retreat is located near Kasar Devi ridge, about 10 km from Almora town in the Kumaon region of Uttarakhand. It's approximately 380 km from Delhi.",
    transportation: [
      {
        type: "bus",
        from: "Delhi",
        price: 650,
        duration: "10-12 hours",
        schedule: "Overnight buses leave ISBT Anand Vihar at 9 PM",
        link: "https://uttarakhandtransport.gov.in"
      },
      {
        type: "train",
        from: "Delhi to Kathgodam, then taxi to retreat",
        price: 950,
        duration: "6 hours train + 3 hours taxi",
        schedule: "Ranikhet Express departs Delhi at 10:40 PM",
        link: "https://www.irctc.co.in"
      }
    ]
  },
  {
    id: "dharamshala-meditation",
    image: "https://images.unsplash.com/photo-1500964757637-c85e8a162699",
    title: "Dharamshala Buddhist Retreat",
    location: "Himachal Pradesh",
    price: 3800,
    days: 5,
    category: "meditation",
    categoryLabel: "Meditation",
    categoryColor: "bg-musafir-meditation",
    description: "Immerse yourself in authentic Buddhist meditation practices in the spiritual haven of Dharamshala, home to the Dalai Lama.",
    longDescription: "Set in the spiritual town of Dharamshala, home to His Holiness the Dalai Lama and the Tibetan Government in Exile, this 5-day Buddhist meditation retreat offers a unique opportunity to learn traditional Tibetan Buddhist meditation practices from experienced practitioners. The retreat is nestled amidst the serene Dhauladhar mountain range, providing the perfect backdrop for inner exploration and spiritual growth. Participants will learn a variety of meditation techniques including analytical meditation, calm abiding (shamatha), and loving-kindness meditation. Daily teachings on Buddhist philosophy complement the practice sessions, offering insights into the theoretical foundations of meditation. The retreat balances intensive practice with time to explore local monasteries and immerse yourself in the vibrant Tibetan culture that thrives in Dharamshala.",
    highlights: [
      "Learn authentic Tibetan Buddhist meditation techniques",
      "Daily teachings on Buddhist philosophy",
      "Visit to main temple and audience with monks",
      "Tibetan cooking workshop",
      "Cultural immersion in Tibetan community"
    ],
    bestTimeToVisit: "April to June and September to November provide ideal weather conditions. July-August is monsoon season with frequent rainfall, while December-February is cold but offers a unique winter meditation experience with fewer tourists.",
    itinerary: [
      {
        title: "Arrival and Introduction",
        description: "Arrive in McLeod Ganj and check into the retreat center. Afternoon orientation session introducing the schedule and basic meditation postures. Evening talk on fundamental Buddhist concepts.",
        activities: ["Welcome ceremony", "Meditation posture instruction", "Introductory Buddhism talk"],
        meals: "Dinner",
        accommodation: "Simple guest room at retreat center"
      },
      {
        title: "Foundations of Meditation",
        description: "Morning session on breathing meditation techniques. Afternoon teaching on the Four Noble Truths. Evening guided meditation focusing on mindfulness of breath.",
        activities: ["Breathing meditation", "Buddhist philosophy class", "Guided meditation practice"],
        meals: "Breakfast, Lunch, Dinner",
        accommodation: "Simple guest room at retreat center"
      },
      {
        title: "Deepening Practices",
        description: "Introduction to analytical meditation in the morning. Visit to Tsuglagkhang Complex (main temple) in the afternoon. Evening session on loving-kindness meditation.",
        activities: ["Analytical meditation", "Temple visit", "Loving-kindness practice"],
        meals: "Breakfast, Lunch, Dinner",
        accommodation: "Simple guest room at retreat center"
      },
      {
        title: "Buddhist Philosophy and Culture",
        description: "Morning meditation session followed by teaching on emptiness and dependent origination. Afternoon Tibetan cooking workshop. Evening documentary on Tibetan Buddhism.",
        activities: ["Morning meditation", "Philosophy lecture", "Cooking workshop", "Documentary screening"],
        meals: "Breakfast, Lunch, Dinner",
        accommodation: "Simple guest room at retreat center"
      },
      {
        title: "Integration and Departure",
        description: "Final meditation session focusing on integrating practice into daily life. Closing ceremony with blessing cords. Departure after lunch.",
        activities: ["Final meditation session", "Integration discussion", "Blessing ceremony"],
        meals: "Breakfast, Lunch"
      }
    ],
    accommodation: [
      {
        name: "Tushita Meditation Center",
        description: "Simple accommodation in a peaceful setting surrounded by pine forests. Rooms are basic with clean bedding and necessary amenities, designed to support a focused meditation practice.",
        location: "McLeod Ganj, Upper Dharamshala",
        amenities: ["Meditation hall", "Library", "Garden", "Hot water (limited hours)", "Vegetarian meals"]
      }
    ],
    gallery: [
      "https://images.unsplash.com/photo-1547058881-337161eb1142",
      "https://images.unsplash.com/photo-1485394735640-59aeec3068a5",
      "https://images.unsplash.com/photo-1524429656589-6633a470097c",
      "https://images.unsplash.com/photo-1526311869935-32d8ff2f0b54",
      "https://images.unsplash.com/photo-1543361767-68ba53289a65"
    ],
    coordinates: [32.2396, 76.3219],
    locationDescription: "The retreat is located in McLeod Ganj, Upper Dharamshala, in the Kangra district of Himachal Pradesh. It's situated in the Dhauladhar range of the Himalayas, about 500 km from Delhi.",
    transportation: [
      {
        type: "bus",
        from: "Delhi",
        price: 800,
        duration: "12 hours",
        schedule: "Overnight Volvo buses depart from ISBT Kashmere Gate at 8 PM",
        link: "https://hptdc.in"
      },
      {
        type: "train",
        from: "Delhi to Pathankot, then taxi to Dharamshala",
        price: 1200,
        duration: "8 hours train + 3 hours taxi",
        schedule: "Jammutawi Express departs at 9:25 PM",
        link: "https://www.irctc.co.in"
      }
    ]
  },
  {
    id: "chardham-yatra",
    image: "https://images.unsplash.com/photo-1544461772-722f2a1a29a5",
    title: "Char Dham Yatra",
    location: "Uttarakhand",
    price: 4900,
    days: 11,
    category: "religious",
    categoryLabel: "Religious",
    categoryColor: "bg-musafir-spiritual",
    description: "A sacred pilgrimage to the four holy sites of Yamunotri, Gangotri, Kedarnath, and Badrinath in the Indian Himalayas.",
    longDescription: "The Char Dham Yatra is one of the most sacred pilgrimages in Hinduism, taking devotees to four holy temples nestled in the Garhwal Himalayas of Uttarakhand: Yamunotri (source of the Yamuna River), Gangotri (source of the Ganges River), Kedarnath (dedicated to Lord Shiva), and Badrinath (dedicated to Lord Vishnu). This 11-day budget-conscious pilgrimage follows a centuries-old tradition believed to cleanse all sins and offer salvation (moksha). Starting from Haridwar, the journey takes you through breathtaking Himalayan landscapes, sacred rivers, ancient temples, and spiritual towns. Despite being designed for budget travelers, the itinerary doesn't compromise on the complete spiritual experience, including all important rituals and prayers at each shrine.",
    highlights: [
      "Visit all four sacred temples of the traditional Char Dham circuit",
      "Experience the spiritual ambiance of ancient Himalayan shrines",
      "Participate in traditional pujas and rituals at each temple",
      "Trek through scenic Himalayan landscapes",
      "Bathe in sacred hot springs with spiritual significance"
    ],
    bestTimeToVisit: "May to June and September to October, when the temples are open and weather conditions are favorable. The shrines remain closed from November to April due to heavy snowfall and challenging weather conditions.",
    itinerary: [
      {
        title: "Arrival in Haridwar",
        description: "The pilgrimage begins with your arrival in Haridwar, one of the seven holiest places in Hinduism. Evening participation in the mesmerizing Ganga Aarti ceremony at Har Ki Pauri ghat.",
        activities: [
          "Check-in at dharamshala or budget hotel",
          "Visit Har Ki Pauri ghat",
          "Attend evening Ganga Aarti ceremony"
        ],
        meals: "Dinner",
        accommodation: "Budget hotel in Haridwar"
      },
      {
        title: "Haridwar to Barkot",
        description: "Early morning departure for Barkot, the base for Yamunotri temple. En route, visit Kempty Falls near Mussoorie. Evening free for rest and preparation for the next day's trek.",
        activities: [
          "Scenic drive through the lower Himalayas",
          "Visit Kempty Falls",
          "Prepare for Yamunotri trek"
        ],
        meals: "Breakfast, Dinner",
        accommodation: "Basic guesthouse in Barkot"
      },
      {
        title: "Yamunotri Temple Visit",
        description: "Drive to Janki Chatti and trek 6 km to Yamunotri temple. Perform puja at the temple, bathe in Surya Kund (hot spring), and prepare rice in the spring water as a sacred offering. Return to Barkot by evening.",
        activities: [
          "Trek to Yamunotri temple",
          "Temple rituals and prayers",
          "Hot spring bath at Surya Kund",
          "Return trek to Janki Chatti"
        ],
        meals: "Breakfast, Packed lunch, Dinner",
        accommodation: "Basic guesthouse in Barkot"
      },
      {
        title: "Barkot to Uttarkashi",
        description: "Drive to Uttarkashi, an important religious center on the banks of the Bhagirathi River. Visit Vishwanath Temple and Shakti Temple in the evening.",
        activities: [
          "Scenic drive to Uttarkashi",
          "Visit local temples",
          "Evening aarti at Vishwanath Temple"
        ],
        meals: "Breakfast, Dinner",
        accommodation: "Budget hotel in Uttarkashi"
      },
      {
        title: "Uttarkashi to Gangotri",
        description: "Morning drive to Gangotri, the origin of the sacred Ganges River. Perform puja at Gangotri Temple and take a holy dip in the Ganges. Explore the surrounding area with stunning views of Himalayan peaks.",
        activities: [
          "Drive to Gangotri",
          "Temple rituals and prayers",
          "Sacred bath in the Ganges",
          "Exploration of nearby areas"
        ],
        meals: "Breakfast, Dinner",
        accommodation: "Basic guesthouse in Gangotri"
      },
      {
        title: "Gangotri to Guptkashi",
        description: "Long but scenic drive from Gangotri to Guptkashi, the base for Kedarnath. Evening visit to Ardh Narishwar Temple and preparation for the Kedarnath trek.",
        activities: [
          "Long mountain drive",
          "Visit Ardh Narishwar Temple",
          "Rest and preparation for Kedarnath trek"
        ],
        meals: "Breakfast, Dinner",
        accommodation: "Budget accommodation in Guptkashi"
      },
      {
        title: "Guptkashi to Kedarnath",
        description: "Drive to Sonprayag, then trek 16 km to Kedarnath (or take shared helicopter for additional cost). Evening aarti at the ancient Kedarnath Temple, one of the 12 Jyotirlingas dedicated to Lord Shiva.",
        activities: [
          "Trek to Kedarnath",
          "Temple darshan and prayers",
          "Evening aarti participation"
        ],
        meals: "Breakfast, Packed lunch, Dinner",
        accommodation: "Basic lodging in Kedarnath"
      },
      {
        title: "Kedarnath to Badrinath",
        description: "Early morning puja at Kedarnath Temple, then trek down to Sonprayag. Drive to Badrinath via Joshimath, enjoying the beautiful Himalayan scenery en route.",
        activities: [
          "Morning puja at Kedarnath",
          "Descent trek to Sonprayag",
          "Drive to Badrinath",
          "Evening rest"
        ],
        meals: "Breakfast, Dinner",
        accommodation: "Budget accommodation in Badrinath"
      },
      {
        title: "Badrinath Temple Visit",
        description: "Early morning bath in Tapt Kund hot spring, followed by darshan and puja at Badrinath Temple. Visit Mana village (last Indian village near Tibet border), Vyas Cave, and Bhim Pul in the afternoon.",
        activities: [
          "Bath in Tapt Kund hot spring",
          "Badrinath Temple rituals",
          "Visit to Mana village",
          "Exploration of nearby sacred sites"
        ],
        meals: "Breakfast, Dinner",
        accommodation: "Budget accommodation in Badrinath"
      },
      {
        title: "Badrinath to Rudraprayag",
        description: "Depart from Badrinath and drive to Rudraprayag, the sacred confluence of Alaknanda and Mandakini rivers. Visit Rudranath Temple and enjoy the peaceful riverside setting.",
        activities: [
          "Drive from Badrinath to Rudraprayag",
          "Visit Rudranath Temple",
          "Evening relaxation by the river confluence"
        ],
        meals: "Breakfast, Dinner",
        accommodation: "Budget hotel in Rudraprayag"
      },
      {
        title: "Rudraprayag to Haridwar and Departure",
        description: "Final day drive back to Haridwar, completing the sacred Char Dham circuit. Final dip in the Ganges at Har Ki Pauri before departure with blessed and purified souls.",
        activities: [
          "Drive to Haridwar",
          "Final holy bath in the Ganges",
          "Departure formalities"
        ],
        meals: "Breakfast"
      }
    ],
    accommodation: [
      {
        name: "Pilgrim Dharamshalas and Guesthouses",
        description: "Throughout the journey, accommodation is in simple pilgrim dharamshalas, guesthouses, and budget hotels. Facilities are basic but clean, focusing on the spiritual nature of the journey rather than luxury.",
        location: "Various locations along the Char Dham route",
        amenities: ["Clean bedding", "Hot water (limited hours at some places)", "Vegetarian meals", "Temple proximity"]
      }
    ],
    gallery: [
      "https://images.unsplash.com/photo-1517777298294-bc95e0f0f89c",
      "https://images.unsplash.com/photo-1567226068024-59204de142c6",
      "https://images.unsplash.com/photo-1607247544226-7a63f5bae787",
      "https://images.unsplash.com/photo-1626016918187-73d75429d764",
      "https://images.unsplash.com/photo-1627894006066-db301b53dd5a"
    ],
    coordinates: [30.7346, 79.0669], // Approximate central coordinates for the circuit
    locationDescription: "The Char Dham circuit is located in the Garhwal Himalayas of Uttarakhand state, with the four temples spread across different locations: Yamunotri, Gangotri, Kedarnath, and Badrinath. The journey typically starts from Haridwar or Rishikesh.",
    transportation: [
      {
        type: "bus",
        from: "Delhi to Haridwar",
        price: 450,
        duration: "5-6 hours",
        schedule: "Multiple daily departures from ISBT Kashmere Gate",
        link: "https://uttarakhandtransport.gov.in"
      },
      {
        type: "train",
        from: "Delhi to Haridwar",
        price: 350,
        duration: "4-5 hours",
        schedule: "Several trains daily including Shatabdi and Jan Shatabdi",
        link: "https://www.irctc.co.in"
      }
    ]
  }
];
