import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Calendar, Clock, ArrowRight, BookOpen, TrendingUp } from 'lucide-react';

const BlogSection = () => {
  const blogPosts = [
    {
      id: 1,
      title: "GPT-4 vs GPT-5: A Technical Comparison",
      excerpt:
        "Breaking down the differences between GPT-4 and GPT-5 in terms of architecture, reasoning ability, efficiency, and real-world applications.",
      content:
        "In this article, I explore the major differences between GPT-4 and GPT-5 — from improvements in context length and reasoning to better efficiency and real-world use cases. GPT-5 builds on GPT-4’s strengths with more advanced training, better reliability, and multimodal capabilities, making it a leap forward in practical AI applications...",
      date: "2025-08-28",
      readTime: "7 min read",
      category: "AI Models",
      tags: ["GPT-4", "GPT-5", "AI Research", "Comparison"],
      featured: true,
      views: 1024,
    },
  ];

  const categories = ["All", "AI Models"];
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredPosts =
    selectedCategory === "All"
      ? blogPosts
      : blogPosts.filter((post) => post.category === selectedCategory);

  const featuredPost = blogPosts.find((post) => post.featured);

  return (
    <section id="blog" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">
            Blog & Insights
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Exploring the latest advancements in AI, machine learning, and
            intelligent systems.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              onClick={() => setSelectedCategory(category)}
              className={`transition-all duration-300 ${
                selectedCategory === category
                  ? "bg-gradient-primary hover:opacity-90 glow-primary"
                  : "border-glass-border hover:border-primary hover:text-primary"
              }`}
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Featured Post */}
        {featuredPost && (
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-gradient mb-8 flex items-center">
              <TrendingUp className="w-6 h-6 mr-2" />
              Featured Article
            </h3>
            <Card className="glass border-glass-border hover:glow-primary transition-all duration-500 overflow-hidden">
              <div className="md:flex">
                <div className="md:w-1/3 bg-gradient-primary opacity-20 min-h-[250px] flex items-center justify-center">
                  <BookOpen className="w-16 h-16 text-primary" />
                </div>
                <div className="md:w-2/3 p-8">
                  <div className="flex flex-wrap items-center gap-2 mb-4">
                    <Badge
                      variant="secondary"
                      className="bg-primary text-primary-foreground"
                    >
                      Featured
                    </Badge>
                    <Badge
                      variant="outline"
                      className="border-glass-border text-muted-foreground"
                    >
                      {featuredPost.category}
                    </Badge>
                  </div>

                  <h3 className="text-2xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors">
                    {featuredPost.title}
                  </h3>

                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {featuredPost.excerpt}
                  </p>

                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center">
                        <Calendar className="w-4 h-4 mr-1" />
                        {new Date(featuredPost.date).toLocaleDateString("en-US", {
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                        })}
                      </div>
                      <div className="flex items-center">
                        <Clock className="w-4 h-4 mr-1" />
                        {featuredPost.readTime}
                      </div>
                      <span>{featuredPost.views.toLocaleString()} views</span>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {featuredPost.tags.map((tag, idx) => (
                      <Badge
                        key={idx}
                        variant="outline"
                        className="text-xs border-glass-border text-muted-foreground"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  <Button className="bg-gradient-primary hover:opacity-90 glow-primary">
                    Read Full Article
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        )}
      </div>
    </section>
  );
};

export default BlogSection;
