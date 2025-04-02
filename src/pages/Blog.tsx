
import React, { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import { Link } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Search, Calendar, User, BookOpen, FileText, Newspaper } from "lucide-react";
import useTranslation from "@/hooks/useTranslation";
import { BlogPost } from "@/services/types";

// Mock blog data (would normally come from database service)
const mockBlogs: BlogPost[] = [
  {
    id: "blog1",
    title: "Essential Packing List for Himalayan Treks",
    summary: "A comprehensive guide to packing efficiently for high-altitude treks in the Himalayas.",
    content: "When preparing for a Himalayan trek, efficient packing is crucial. You'll need proper layers for varying temperatures, a good quality backpack, trekking poles, and adequate sun protection. Don't forget essential medications and a basic first aid kit...",
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
    content: "Rishikesh offers plenty of budget options for travelers. Stay in ashrams or budget hostels, eat at local dhabas, and take advantage of free activities like visiting temples and attending Ganga Aarti...",
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
    content: "The Valley of Flowers trek was my first solo adventure, and it changed my perspective on solo travel. I started by carefully planning my trip, researching the route, and connecting with other travelers online...",
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
    content: "While many travelers avoid India during monsoon, this season transforms certain destinations into magical landscapes. Kerala's backwaters, Western Ghats, and Meghalaya are particularly beautiful during this time...",
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
    content: "Solo travel as a woman in India can be rewarding with proper preparation. Research your destinations thoroughly, dress respectfully, use reliable transportation, and always keep emergency contacts handy...",
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
    content: "The meditation retreat in Dharamshala was challenging but transformative. Each day began at 4:30 AM with meditation sessions, interspersed with simple vegetarian meals and walking meditation in the beautiful surroundings...",
    author: "Vikram Bose",
    date: "2023-04-22",
    image: "/placeholder.svg",
    category: "stories",
    tags: ["meditation", "dharamshala", "retreat", "mindfulness"]
  }
];

const Blog = () => {
  const { t } = useTranslation();
  const [searchQuery, setSearchQuery] = useState("");
  const [activeTab, setActiveTab] = useState("all");
  const [filteredBlogs, setFilteredBlogs] = useState<BlogPost[]>(mockBlogs);
  
  useEffect(() => {
    // Filter blogs based on search query and active tab
    let filtered = mockBlogs;
    
    if (searchQuery) {
      filtered = filtered.filter(blog => 
        blog.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        blog.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
        blog.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
      );
    }
    
    if (activeTab !== "all") {
      filtered = filtered.filter(blog => blog.category === activeTab);
    }
    
    setFilteredBlogs(filtered);
  }, [searchQuery, activeTab]);
  
  const getBlogIcon = (category: string) => {
    switch (category) {
      case 'tips':
        return <FileText className="h-5 w-5 text-musafir-trekking" />;
      case 'guides':
        return <BookOpen className="h-5 w-5 text-musafir-spiritual" />;
      case 'stories':
        return <Newspaper className="h-5 w-5 text-musafir-water" />;
      default:
        return <FileText className="h-5 w-5" />;
    }
  };
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 py-10">
        <div className="container mx-auto px-4">
          <div className="mb-12">
            <h1 className="text-3xl font-bold mb-2">{t('blog')}</h1>
            <p className="text-muted-foreground">
              Travel tips, destination guides and personal stories from budget travelers
            </p>
          </div>
          
          <div className="mb-8 flex flex-col md:flex-row gap-4 items-center">
            <div className="relative w-full md:w-auto md:flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" size={18} />
              <Input
                className="pl-10 pr-4 py-2"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            
            <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full md:w-auto">
              <TabsList>
                <TabsTrigger value="all">All</TabsTrigger>
                <TabsTrigger value="tips">Tips</TabsTrigger>
                <TabsTrigger value="guides">Guides</TabsTrigger>
                <TabsTrigger value="stories">Stories</TabsTrigger>
              </TabsList>
            </Tabs>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
            {filteredBlogs.length > 0 ? (
              filteredBlogs.map(blog => (
                <Link to={`/blog/${blog.id}`} key={blog.id} className="block group">
                  <div className="border border-border rounded-lg overflow-hidden h-full flex flex-col hover:border-musafir-spiritual/50 transition-colors">
                    <div className="relative h-48 overflow-hidden bg-muted">
                      <img 
                        src={blog.image} 
                        alt={blog.title} 
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                      <div className="absolute top-3 left-3 bg-background/90 backdrop-blur-sm text-xs px-2 py-1 rounded flex items-center gap-1">
                        {getBlogIcon(blog.category)}
                        <span className="capitalize">{blog.category}</span>
                      </div>
                    </div>
                    
                    <div className="p-5 flex-1 flex flex-col">
                      <h3 className="font-semibold text-lg mb-2 group-hover:text-musafir-spiritual transition-colors">{blog.title}</h3>
                      <p className="text-muted-foreground text-sm mb-4 flex-1">{blog.summary}</p>
                      
                      <div className="flex items-center justify-between text-xs text-muted-foreground mt-auto">
                        <div className="flex items-center gap-1">
                          <User size={14} />
                          <span>{blog.author}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Calendar size={14} />
                          <span>{new Date(blog.date).toLocaleDateString('en-US', { 
                            year: 'numeric', 
                            month: 'short', 
                            day: 'numeric' 
                          })}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              ))
            ) : (
              <div className="col-span-full text-center py-12 border border-border rounded-lg bg-card">
                <h3 className="text-xl font-medium mb-2">No articles found</h3>
                <p className="text-muted-foreground mb-4">
                  Try adjusting your search query to find relevant articles.
                </p>
                <Button 
                  variant="outline"
                  onClick={() => {
                    setSearchQuery('');
                    setActiveTab('all');
                  }}
                >
                  Reset filters
                </Button>
              </div>
            )}
          </div>
        </div>
      </main>
      
      <footer className="bg-musafir-brown text-white py-8">
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

export default Blog;
