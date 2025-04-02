
import { Destination } from './types';

export const meditationDestinations: Destination[] = [
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
  }
];
