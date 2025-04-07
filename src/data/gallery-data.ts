
export interface PhotoItem {
  id: string;
  title: string;
  url: string;
  description: string;
  location: string;
  categories: string[];
  photographer?: string;
  date?: string;
}

export const photoGalleryData: PhotoItem[] = [
  {
    id: "1",
    title: "Taj Mahal at Sunrise",
    url: "https://images.unsplash.com/photo-1564507592333-c60657eea523",
    description: "The iconic Taj Mahal captured during the golden hour of sunrise, reflecting beautifully in the calm waters.",
    location: "Agra, Uttar Pradesh",
    categories: ["Spiritual", "Historical", "Architecture"],
    photographer: "Musafir Explorer"
  },
  {
    id: "2",
    title: "Varanasi Ghats",
    url: "https://images.unsplash.com/photo-1561361058-c12e04bd9c0f",
    description: "The ancient ghats of Varanasi along the sacred Ganges river during the evening aarti ceremony.",
    location: "Varanasi, Uttar Pradesh",
    categories: ["Spiritual", "Cultural", "Rivers"]
  },
  {
    id: "3",
    title: "Jaisalmer Fort",
    url: "https://images.unsplash.com/photo-1477587458883-47145ed94245",
    description: "The magnificent golden fort of Jaisalmer rising from the Thar desert, also known as Sonar Quila.",
    location: "Jaisalmer, Rajasthan",
    categories: ["Historical", "Desert", "Architecture"]
  },
  {
    id: "4",
    title: "Backwaters of Kerala",
    url: "https://images.unsplash.com/photo-1602424230719-0827fcc6676c",
    description: "Traditional houseboat cruising through the serene backwaters of Kerala surrounded by lush greenery.",
    location: "Alleppey, Kerala",
    categories: ["Nature", "Rivers", "Peaceful"]
  },
  {
    id: "5",
    title: "Valley of Flowers",
    url: "https://images.unsplash.com/photo-1532577749053-00c4a177dd8f",
    description: "The breathtaking Valley of Flowers National Park with its diverse alpine flowers in full bloom.",
    location: "Uttarakhand",
    categories: ["Nature", "Mountains", "Trekking"]
  },
  {
    id: "6",
    title: "Spiti Valley",
    url: "https://images.unsplash.com/photo-1516616370751-86d6bd8b0651",
    description: "The rugged, barren landscapes of Spiti Valley with ancient Buddhist monasteries perched on hilltops.",
    location: "Spiti Valley, Himachal Pradesh",
    categories: ["Mountains", "Adventure", "Cultural"]
  },
  {
    id: "7",
    title: "Goa Beaches",
    url: "https://images.unsplash.com/photo-1518509562904-e7ef99cdcc86",
    description: "The pristine beaches of Goa with golden sands and clear blue waters of the Arabian Sea.",
    location: "Goa",
    categories: ["Beaches", "Coastal", "Relaxation"]
  },
  {
    id: "8",
    title: "Ancient Ruins of Hampi",
    url: "https://images.unsplash.com/photo-1605649487212-47bdab064df7",
    description: "The stunning stone chariot and ancient temple ruins at Hampi, a UNESCO World Heritage site.",
    location: "Hampi, Karnataka",
    categories: ["Historical", "Cultural", "Architecture"]
  },
  {
    id: "9",
    title: "Tea Gardens of Darjeeling",
    url: "https://images.unsplash.com/photo-1574781689744-c951a5705683",
    description: "Lush green tea plantations stretching across the hills of Darjeeling with misty mountains in the background.",
    location: "Darjeeling, West Bengal",
    categories: ["Nature", "Mountains", "Peaceful"]
  },
  {
    id: "10",
    title: "Pangong Lake",
    url: "https://images.unsplash.com/photo-1573570095983-98073a5cc39a",
    description: "The stunning blue waters of Pangong Lake contrasting against the barren mountains of Ladakh.",
    location: "Ladakh",
    categories: ["Lakes", "Mountains", "Adventure"]
  },
  {
    id: "11",
    title: "Lotus Temple",
    url: "https://images.unsplash.com/photo-1565538810643-b5bdb714032a",
    description: "The magnificent Lotus Temple in Delhi, known for its flower-like shape and Bahá'í House of Worship.",
    location: "New Delhi",
    categories: ["Spiritual", "Architecture", "Cultural"]
  },
  {
    id: "12",
    title: "Rann of Kutch",
    url: "https://images.unsplash.com/photo-1589308078059-be1415eab4c3",
    description: "The vast white salt desert of Rann of Kutch stretching as far as the eye can see.",
    location: "Gujarat",
    categories: ["Desert", "Cultural", "Unique"]
  },
  {
    id: "13",
    title: "Hawa Mahal",
    url: "https://images.unsplash.com/photo-1599661046289-e31897846e41",
    description: "The intricate honeycomb facade of Hawa Mahal, the Palace of Winds, in the pink city.",
    location: "Jaipur, Rajasthan",
    categories: ["Historical", "Architecture", "Cultural"]
  },
  {
    id: "14",
    title: "Dudhsagar Falls",
    url: "https://images.unsplash.com/photo-1544126592-92053c1f3a71",
    description: "The majestic four-tiered Dudhsagar Falls cascading through the lush forests of the Western Ghats.",
    location: "Goa",
    categories: ["Nature", "Waterfalls", "Adventure"]
  },
  {
    id: "15",
    title: "Tawang Monastery",
    url: "https://images.unsplash.com/photo-1619837374214-f5b9eb80876d",
    description: "The largest monastery in India perched on a mountain overlooking the Tawang valley.",
    location: "Tawang, Arunachal Pradesh",
    categories: ["Spiritual", "Mountains", "Cultural"]
  },
  {
    id: "16",
    title: "Jim Corbett National Park",
    url: "https://images.unsplash.com/photo-1549366021-9f761d450615",
    description: "Dense forest and wildlife in Jim Corbett National Park, India's oldest national park.",
    location: "Uttarakhand",
    categories: ["Nature", "Wildlife", "Adventure"]
  },
  {
    id: "17",
    title: "Meenakshi Temple",
    url: "https://images.unsplash.com/photo-1621425799462-f0a9122709b7",
    description: "The colorful gopurams (towers) of Meenakshi Amman Temple adorned with thousands of sculptures.",
    location: "Madurai, Tamil Nadu",
    categories: ["Spiritual", "Architecture", "Cultural"]
  },
  {
    id: "18",
    title: "Andaman Islands",
    url: "https://images.unsplash.com/photo-1544550285-f813f1621bc9",
    description: "Crystal clear turquoise waters and pristine beaches of the Andaman Islands in the Bay of Bengal.",
    location: "Andaman and Nicobar Islands",
    categories: ["Beaches", "Islands", "Adventure"]
  },
  {
    id: "19",
    title: "Living Root Bridges",
    url: "https://images.unsplash.com/photo-1626263020621-ac42688db484",
    description: "Ancient living root bridges in Meghalaya, handmade from the aerial roots of rubber trees.",
    location: "Meghalaya",
    categories: ["Nature", "Unique", "Cultural"]
  },
  {
    id: "20",
    title: "Golden Temple",
    url: "https://images.unsplash.com/photo-1514222134-b57cbb8ce073",
    description: "The sacred Golden Temple (Harmandir Sahib) glowing at night and reflecting in the Amrit Sarovar.",
    location: "Amritsar, Punjab",
    categories: ["Spiritual", "Architecture", "Cultural"]
  }
];
