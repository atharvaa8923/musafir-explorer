
import { Destination } from './types';

export const trekkingDestinations: Destination[] = [
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
