
import { Destination } from './types';

export const hikingDestinations: Destination[] = [
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
  }
];
