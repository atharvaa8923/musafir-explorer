
import { Destination } from './types';

export const raftingDestinations: Destination[] = [
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
  }
];
