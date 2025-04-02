
import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Calendar, User, Tag, ArrowLeft, Share2 } from "lucide-react";
import useTranslation from "@/hooks/useTranslation";
import { BlogPost } from "@/services/types";

// Mock blog data (would normally come from database service)
const mockBlogs: BlogPost[] = [
  {
    id: "blog1",
    title: "Essential Packing List for Himalayan Treks",
    summary: "A comprehensive guide to packing efficiently for high-altitude treks in the Himalayas.",
    content: `
      <h2>Essential Packing List for Himalayan Treks</h2>
      
      <p>When preparing for a Himalayan trek, efficient packing is crucial. The varied terrain and changing weather conditions require careful planning to ensure you're well-prepared without being weighed down by unnecessary items.</p>
      
      <h3>Clothing Layers</h3>
      
      <p>The key to Himalayan trekking comfort is layering:</p>
      <ul>
        <li><strong>Base Layer:</strong> Moisture-wicking thermal wear</li>
        <li><strong>Mid Layer:</strong> Fleece jacket or wool sweater</li>
        <li><strong>Outer Layer:</strong> Waterproof and windproof jacket</li>
        <li><strong>Hiking Pants:</strong> Preferably quick-dry material</li>
        <li><strong>Warm Hat & Gloves:</strong> Essential for higher altitudes</li>
        <li><strong>Buff/Neck Gaiter:</strong> Protects from dust and cold</li>
      </ul>
      
      <h3>Footwear & Accessories</h3>
      
      <p>Your feet need extra care during mountain treks:</p>
      <ul>
        <li><strong>Hiking Boots:</strong> Waterproof with ankle support</li>
        <li><strong>Trekking Socks:</strong> 3-4 pairs of wool or synthetic blend</li>
        <li><strong>Camp Sandals:</strong> For resting your feet at campsites</li>
        <li><strong>Trekking Poles:</strong> Reduces strain on knees during descents</li>
      </ul>
      
      <h3>Equipment</h3>
      
      <ul>
        <li><strong>Backpack:</strong> 50-60L with rain cover</li>
        <li><strong>Sleeping Bag:</strong> Rated for 0°C or lower</li>
        <li><strong>Headlamp:</strong> With extra batteries</li>
        <li><strong>Water Bottles:</strong> 2 x 1L bottles</li>
        <li><strong>Water Purification:</strong> Tablets or filter</li>
      </ul>
      
      <h3>Personal Care & First Aid</h3>
      
      <ul>
        <li><strong>Sunscreen:</strong> SPF 50+ (UV radiation is stronger at altitude)</li>
        <li><strong>Lip Balm:</strong> With sun protection</li>
        <li><strong>Personal Medications:</strong> Including altitude sickness medication</li>
        <li><strong>First Aid Kit:</strong> Bandages, antiseptic, pain relievers</li>
        <li><strong>Wet Wipes & Hand Sanitizer:</strong> For hygiene on the trail</li>
      </ul>
      
      <h3>Budget-Friendly Tips</h3>
      
      <p>You don't need to break the bank for quality trekking gear:</p>
      <ul>
        <li>Rent equipment like sleeping bags and trekking poles from outfitters in Delhi or base towns</li>
        <li>Look for sales at Decathlon for affordable yet reliable gear</li>
        <li>Consider second-hand gear for items like fleece layers</li>
        <li>Borrow from friends who trek if this is your first mountain experience</li>
      </ul>
      
      <p>Remember, while it's important to be prepared, every extra item means additional weight on your back. Being minimal yet prepared is the key to an enjoyable Himalayan trekking experience.</p>
    `,
    author: "Arjun Sharma",
    date: "2023-05-12",
    image: "/placeholder.svg",
    category: "tips",
    tags: ["packing", "trekking", "himalaya", "preparation"]
  },
  {
    id: "blog2",
    title: "Budget Travel Guide to Rishikesh",
    summary: "How to experience the yoga capital of the world without spending more than ₹5000 for a 4-day trip.",
    content: `
      <h2>Budget Travel Guide to Rishikesh</h2>
      
      <p>Rishikesh, known as the Yoga Capital of the World, is a spiritual haven nestled in the foothills of the Himalayas. The good news? You can experience its magic without emptying your wallet. Here's how to enjoy a 4-day trip for under ₹5000.</p>
      
      <h3>Getting There</h3>
      
      <p>The most economical way to reach Rishikesh:</p>
      <ul>
        <li><strong>From Delhi:</strong> Take an overnight bus (₹400-600) or a train to Haridwar (₹300-400) followed by a shared taxi (₹50)</li>
        <li><strong>From Dehradun:</strong> Shared taxis or local buses available (₹100-150)</li>
      </ul>
      
      <h3>Budget Accommodation</h3>
      
      <p>Rishikesh offers plenty of affordable places to stay:</p>
      <ul>
        <li><strong>Ashrams:</strong> Basic rooms from ₹250-400 per night, often including yoga classes</li>
        <li><strong>Hostels:</strong> Dorm beds from ₹300-500 per night</li>
        <li><strong>Budget Guesthouses:</strong> Basic private rooms from ₹500-800 per night</li>
      </ul>
      
      <p>Recommended budget options:</p>
      <ul>
        <li>Yog Niketan Ashram (₹400/night with meals)</li>
        <li>Zostel Rishikesh (₹399/night for dorms)</li>
        <li>Shiv Shakti Hostel (₹350/night)</li>
      </ul>
      
      <h3>Eating Affordably</h3>
      
      <p>Food in Rishikesh can be incredibly affordable:</p>
      <ul>
        <li><strong>Ashram Meals:</strong> If staying at an ashram, meals are usually included or available for ₹50-100</li>
        <li><strong>Local Dhabas:</strong> Full thali meals for ₹80-120</li>
        <li><strong>German Bakery & Cafes:</strong> Budget ₹150-250 for Western options</li>
        <li><strong>Street Food:</strong> Samosas, chai, and other snacks for ₹10-40</li>
      </ul>
      
      <h3>Free & Low-Cost Activities</h3>
      
      <ul>
        <li><strong>Ganga Aarti:</strong> Free evening ceremony at Parmarth Niketan or Triveni Ghat</li>
        <li><strong>Temple Visits:</strong> Most temples are free to enter</li>
        <li><strong>Beach Relaxation:</strong> Spend time at the sandy beaches along the Ganges</li>
        <li><strong>Free Yoga Classes:</strong> Some ashrams offer free morning sessions</li>
        <li><strong>Laxman Jhula & Ram Jhula:</strong> Iconic suspension bridges with great views</li>
        <li><strong>Hiking:</strong> Several free trails into the surrounding hills</li>
      </ul>
      
      <h3>Budget Activities Worth Paying For</h3>
      
      <ul>
        <li><strong>Yoga Classes:</strong> Drop-in classes from ₹200-500</li>
        <li><strong>Rafting:</strong> Short stretches from ₹500-700</li>
        <li><strong>Beatles Ashram:</strong> Entry fee ₹150 for Indians, ₹600 for foreigners</li>
      </ul>
      
      <h3>4-Day Budget Breakdown</h3>
      
      <ul>
        <li><strong>Transport:</strong> ₹1000 (round trip from Delhi)</li>
        <li><strong>Accommodation:</strong> ₹1600 (4 nights at ₹400/night)</li>
        <li><strong>Food:</strong> ₹1500 (₹375/day)</li>
        <li><strong>Activities:</strong> ₹900 (1 rafting trip, 1 yoga class, Beatles Ashram)</li>
      </ul>
      
      <p><strong>Total: ₹5000</strong></p>
      
      <p>By staying in ashrams, eating at local places, and focusing on free activities, you can experience the spiritual essence of Rishikesh without financial strain. The city's true wealth lies in its spiritual atmosphere and natural beauty, which fortunately costs nothing to enjoy.</p>
    `,
    author: "Priya Patel",
    date: "2023-06-28",
    image: "/placeholder.svg",
    category: "guides",
    tags: ["rishikesh", "budget", "yoga", "solo travel"]
  },
  {
    id: "blog3",
    title: "How I Completed the Valley of Flowers Trek Solo",
    summary: "My personal journey through one of India's most beautiful treks and lessons learned along the way.",
    content: "The Valley of Flowers trek was my first solo adventure...",
    author: "Meera Nair",
    date: "2023-08-10",
    image: "/placeholder.svg",
    category: "stories",
    tags: ["valley of flowers", "uttarakhand", "personal", "solo trekking"]
  },
  {
    id: "blog4",
    title: "Monsoon Travel in India: Destinations Worth Getting Wet For",
    summary: "The best places to visit during India's rainy season that offer unique experiences.",
    content: "While many travelers avoid India during monsoon...",
    author: "Rohit Mishra",
    date: "2023-07-15",
    image: "/placeholder.svg",
    category: "guides",
    tags: ["monsoon", "rainy season", "western ghats", "kerala"]
  },
  {
    id: "blog5",
    title: "Safety Tips for Women Solo Travelers in India",
    summary: "Practical advice for women planning to travel alone across India's diverse regions.",
    content: "Solo travel as a woman in India can be rewarding...",
    author: "Ananya Singh",
    date: "2023-09-05",
    image: "/placeholder.svg",
    category: "tips",
    tags: ["women travelers", "safety", "solo travel", "practical advice"]
  },
  {
    id: "blog6",
    title: "Finding Peace at Dharamshala: A Meditation Retreat Experience",
    summary: "My ten days of silence and meditation in the foothills of the Himalayas.",
    content: "The meditation retreat in Dharamshala was challenging but transformative...",
    author: "Vikram Bose",
    date: "2023-04-22",
    image: "/placeholder.svg",
    category: "stories",
    tags: ["meditation", "dharamshala", "retreat", "mindfulness"]
  }
];

const BlogDetail = () => {
  const { t } = useTranslation();
  const { id } = useParams<{ id: string }>();
  const [blog, setBlog] = useState<BlogPost | null>(null);
  const [relatedPosts, setRelatedPosts] = useState<BlogPost[]>([]);

  useEffect(() => {
    // Find the blog post by ID
    const selectedBlog = mockBlogs.find(blog => blog.id === id) || null;
    setBlog(selectedBlog);
    
    // Find related posts based on category or tags
    if (selectedBlog) {
      const related = mockBlogs
        .filter(post => post.id !== id) // Exclude current post
        .filter(post => 
          post.category === selectedBlog.category || 
          post.tags.some(tag => selectedBlog.tags.includes(tag))
        )
        .slice(0, 3); // Get up to 3 related posts
      
      setRelatedPosts(related);
    }
  }, [id]);

  if (!blog) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1 py-10">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-2xl font-semibold mb-4">Blog post not found</h1>
            <Link to="/blog">
              <Button variant="default">Back to Blog</Button>
            </Link>
          </div>
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 py-8">
        <article className="container mx-auto px-4">
          <div className="mb-8">
            <Link to="/blog" className="inline-flex items-center text-muted-foreground hover:text-musafir-spiritual mb-6">
              <ArrowLeft size={16} className="mr-2" />
              Back to all articles
            </Link>
            
            <h1 className="text-3xl md:text-4xl font-bold mb-4">{blog.title}</h1>
            
            <div className="flex flex-wrap items-center text-sm text-muted-foreground gap-4 mb-6">
              <div className="flex items-center">
                <Avatar className="h-8 w-8 mr-2">
                  <AvatarImage src={`https://api.dicebear.com/7.x/initials/svg?seed=${blog.author}`} alt={blog.author} />
                  <AvatarFallback>{blog.author.charAt(0)}</AvatarFallback>
                </Avatar>
                <span>{blog.author}</span>
              </div>
              <div className="flex items-center">
                <Calendar size={16} className="mr-2" />
                <span>{new Date(blog.date).toLocaleDateString('en-US', { 
                  year: 'numeric', 
                  month: 'long', 
                  day: 'numeric' 
                })}</span>
              </div>
              <div className="flex items-center">
                <Tag size={16} className="mr-2" />
                <span className="capitalize">{blog.category}</span>
              </div>
            </div>
            
            <div className="rounded-lg overflow-hidden mb-6 h-64 md:h-96 bg-muted">
              <img 
                src={blog.image} 
                alt={blog.title} 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          
          <div className="max-w-3xl mx-auto">
            <div 
              className="prose prose-stone dark:prose-invert max-w-none"
              dangerouslySetInnerHTML={{ __html: blog.content }}
            />
            
            <div className="mt-8 flex flex-wrap gap-2">
              {blog.tags.map(tag => (
                <span key={tag} className="text-xs bg-muted px-2 py-1 rounded-full text-muted-foreground">
                  #{tag}
                </span>
              ))}
            </div>
            
            <div className="mt-8 pt-6 border-t">
              <Button variant="outline" size="sm" className="gap-2">
                <Share2 size={14} />
                Share Article
              </Button>
            </div>
          </div>
          
          {relatedPosts.length > 0 && (
            <div className="mt-16">
              <h2 className="text-2xl font-bold mb-6">Related Articles</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {relatedPosts.map(post => (
                  <Link to={`/blog/${post.id}`} key={post.id} className="block group">
                    <div className="border border-border rounded-lg overflow-hidden hover:border-musafir-spiritual/50 transition-colors">
                      <div className="relative h-48 overflow-hidden bg-muted">
                        <img 
                          src={post.image} 
                          alt={post.title} 
                          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                        />
                      </div>
                      <div className="p-4">
                        <h3 className="font-semibold text-lg mb-2 group-hover:text-musafir-spiritual transition-colors">{post.title}</h3>
                        <p className="text-muted-foreground text-sm">{post.summary}</p>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </article>
      </main>
      
      <footer className="bg-musafir-brown text-white py-8 mt-10">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <h2 className="text-2xl font-bold">Musafir</h2>
              <p className="text-white/70">Solo adventures under ₹5000</p>
            </div>
            <div className="flex flex-wrap gap-6">
              <Link to="/" className="hover:text-white/70 transition-colors">Home</Link>
              <Link to="/destinations" className="hover:text-white/70 transition-colors">Destinations</Link>
              <Link to="/itinerary" className="hover:text-white/70 transition-colors">Itineraries</Link>
              <Link to="/blog" className="hover:text-white/70 transition-colors">Blog</Link>
            </div>
          </div>
          <div className="mt-8 pt-4 border-t border-white/20 text-center text-white/70 text-sm">
            &copy; {new Date().getFullYear()} Musafir. All rights reserved. Solo travel made affordable.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default BlogDetail;
