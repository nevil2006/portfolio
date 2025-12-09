import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, ArrowRight } from "lucide-react";

const BlogSection = () => {
  const blogPosts = [
    {
      id: 1,
      title: "Why Engineers Feel Difficult for the Life?",
      excerpt:
        "Engineering students and professionals often describe their journey as demanding and stressful, but also rewarding in the long run...",
      date: "2025-03-28",
      readTime: "6 min read",
      category: "Engineering Life",
      tags: ["Engineering", "Student Life", "Career Growth"],
      views: 580,
      link: "https://medium.com/@nevilj22/why-engineers-feel-difficult-for-the-life-1bfeb7b4dd55",
    },
    {
      id: 2,
      title:
        "Why Recruiters Value AI, ML, and Computer Vision Experience – and How Freshers Can Compete?",
      excerpt:
        "Exploring why recruiters prefer AI/ML/CV experience and how freshers can gain industry-level skills...",
      date: "2024-12-15",
      readTime: "10 min read",
      category: "AI Models",
      tags: ["AI", "Machine Learning", "Computer Vision"],
      views: 420,
      link: "https://medium.com/@nevilj22/why-recruiters-value-ai-ml-and-computer-vision-experience-and-how-freshers-can-compete-8d1a0e7bab68",
    },
    {
      id: 3,
      title: "Random Forest – The Algorithm That Made Me Look Deeper into ML",
      excerpt:
        "A personal dive into how the Random Forest algorithm works and why it’s a powerful tool for machine learning enthusiasts...",
      date: "2023-01-07",
      readTime: "8 min read",
      category: "Machine Learning",
      tags: ["Random Forest", "ML", "Algorithms"],
      views: 350,
      link: "https://medium.com/@nevilj22/random-forest-the-algorithm-that-made-me-look-deeper-into-ml-5b0d0abc918d",
    },
    {
      id: 4,
      title: "How We Took an AI Traffic Project From Zero to Pilot Testing With Real Police Data",
      excerpt:
        "Our journey of building an AI-based traffic management system using real-time police data, YOLO object detection, and IoT devices...",
      date: "2025-08-25",
      readTime: "9 min read",
      category: "AI Models",
      tags: ["AI", "Machine Learning", "Projects"],
      views: 510,
      link: "https://medium.com/p/a2814a14bc6b/edit",
    },
  ]; //  ✅ THIS ] WAS MISSING EARLIER

  // state for selected category
  const [selectedCategory, setSelectedCategory] = useState("All");

  // extract unique categories
  const categories = ["All", ...new Set(blogPosts.map((post) => post.category))];

  // filter blogs
  const filteredPosts =
    selectedCategory === "All"
      ? blogPosts
      : blogPosts.filter((post) => post.category === selectedCategory);

  return (
    <section id="blog" className="py-20">
      <div className="container mx-auto px-4">

        <div className="text-center mb-10">
          <h2 className="text-4xl font-bold text-gradient">Blog & Insights</h2>
          <p className="text-muted-foreground">Latest blogs and thoughts</p>
        </div>

        <div className="flex justify-center gap-3 mb-8 flex-wrap">
          {categories.map((cat) => (
            <Button
              key={cat}
              variant={selectedCategory === cat ? "default" : "outline"}
              onClick={() => setSelectedCategory(cat)}
            >
              {cat}
            </Button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {filteredPosts.map((post) => (
            <Card
              key={post.id}
              className="p-6 hover:glow-primary transition-all flex flex-col justify-between"
            >
              <h3 className="text-xl font-bold mb-3">{post.title}</h3>

              <p className="text-muted-foreground mb-4 line-clamp-3">
                {post.excerpt}
              </p>

              <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                <div className="flex items-center">
                  <Calendar className="w-4 h-4 mr-1" /> {post.date}
                </div>
                <div className="flex items-center">
                  <Clock className="w-4 h-4 mr-1" /> {post.readTime}
                </div>
                <span>{post.views} views</span>
              </div>

              <div className="flex flex-wrap gap-2 mb-4">
                {post.tags.map((tag, i) => (
                  <Badge key={i} variant="outline">
                    {tag}
                  </Badge>
                ))}
              </div>

              <a
                href={post.link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-auto"
              >
                <Button className="bg-gradient-primary w-full">
                  Read Full Article <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </a>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
