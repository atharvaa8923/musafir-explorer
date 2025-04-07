
import React from "react";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, BookOpen, Calendar } from "lucide-react";
import { Link } from "react-router-dom";

// Mock blog data
const featuredBlogs = [
  {
    id: "1",
    title: "10 Essential Tips for Solo Travelers in India",
    summary: "Navigate India like a pro with these proven solo travel tips that will make your journey safer and more enjoyable.",
    date: "2023-04-15",
    author: "Aditya Sharma",
    image: "https://images.unsplash.com/photo-1517959105821-eaf2591984ca?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80",
    category: "tips",
    readTime: "5 min"
  },
  {
    id: "2",
    title: "Exploring The Hidden Gems of Northeast India",
    summary: "Discover the untouched beauty of Northeast India's landscapes, cultures, and cuisines that most tourists never see.",
    date: "2023-03-22",
    author: "Priya Patel",
    image: "https://images.unsplash.com/photo-1544461772-722f499fa5a8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80",
    category: "guides",
    readTime: "7 min"
  },
  {
    id: "3",
    title: "Budget Travel: How I Explored Rajasthan Under ₹3000",
    summary: "A personal account of how I managed to experience the royal heritage of Rajasthan while keeping costs under ₹3000.",
    date: "2023-02-10",
    author: "Vikram Singh",
    image: "https://images.unsplash.com/photo-1599661046289-e31897846e41?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80",
    category: "stories",
    readTime: "8 min"
  }
];

const getCategoryColor = (category: string) => {
  switch (category) {
    case "tips":
      return "bg-musafir-meditation/10 text-musafir-meditation border-musafir-meditation/20";
    case "guides":
      return "bg-musafir-trekking/10 text-musafir-trekking border-musafir-trekking/20";
    case "stories":
      return "bg-musafir-spiritual/10 text-musafir-spiritual border-musafir-spiritual/20";
    default:
      return "bg-primary/10 text-primary border-primary/20";
  }
};

const BlogSection = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-10">
          <div>
            <h2 className="text-3xl font-bold mb-2">Travel Blog</h2>
            <p className="text-muted-foreground max-w-2xl">
              Explore our travel stories, tips, and guides for your next adventure
            </p>
          </div>
          <Link to="/blog">
            <Button variant="outline" className="hidden md:flex items-center">
              View All Posts
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {featuredBlogs.map((blog) => (
            <Link to={`/blog/${blog.id}`} key={blog.id} className="group">
              <Card className="overflow-hidden h-full transition-all hover:shadow-md">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={blog.image}
                    alt={blog.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <CardHeader className="pt-5 pb-2">
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="outline" className={`${getCategoryColor(blog.category)}`}>
                      {blog.category === "tips" ? "Travel Tips" : blog.category === "guides" ? "Travel Guide" : "Travel Story"}
                    </Badge>
                    <span className="text-xs text-muted-foreground flex items-center">
                      <BookOpen className="mr-1 h-3 w-3" />
                      {blog.readTime}
                    </span>
                  </div>
                  <CardTitle className="group-hover:text-musafir-spiritual transition-colors">
                    {blog.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm line-clamp-3">
                    {blog.summary}
                  </p>
                </CardContent>
                <CardFooter className="flex justify-between items-center text-sm text-muted-foreground pt-2 border-t">
                  <span>{blog.author}</span>
                  <span className="flex items-center">
                    <Calendar className="mr-1 h-3 w-3" />
                    {new Date(blog.date).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'short',
                      day: 'numeric',
                    })}
                  </span>
                </CardFooter>
              </Card>
            </Link>
          ))}
        </div>
        
        <div className="mt-8 text-center md:hidden">
          <Link to="/blog">
            <Button variant="outline" className="w-full flex items-center justify-center">
              View All Posts
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
