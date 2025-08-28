import { useState } from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Calendar,
  Clock,
  ArrowRight,
  BookOpen,
  TrendingUp,
  Cpu,
  Code,
  Lightbulb,
  Clipboard,
} from "lucide-react";

const BlogSection = () => {
  // Sample blog posts
  const blogPosts = [
    {
      id: 1,
      title: "Why Engineers Feel Difficult for the Life?",
      excerpt:
        "Engineering students and professionals often describe their journey as demanding and stressful, but also rewarding in the long run. Let’s explore why life feels difficult for engineers, and how these challenges shape their future.",
      content:
        "From heavy workloads, constant deadlines, and competitive pressure to the challenges of balancing personal and academic life, engineers face a unique set of struggles. However, these very difficulties prepare them for resilience, problem-solving, and long-term career success...",
      date: "2025-08-28",
      readTime: "6 min read",
      category: "Engineering Life",
      tags: ["Engineering", "Student Life", "Career Growth"],
      featured: true,
      views: 580,
      link: "https://medium.com/@nevilj22/why-engineers-feel-difficult-for-the-life-1bfeb7b4dd55",
    },
    {
      id: 2,
      title: "Why Recruiters Value AI, ML, and Computer Vision Experience - and How Freshers Can Compete",
      excerpt:
        "Exploring why recruiters prefer AI/ML/CV experience and how freshers can gain industry-level skills through real-world projects.",
      content: "Learn why AI, ML, and Computer Vision experience is highly valued by recruiters, why freshers face challenges, and how real-world projects can bridge the gap to build industry-ready skills",
      date: "2025-08-20",
      readTime: "10 min read",
      category: "AI Models",
      tags: ["AI", "Machine Learning", "Computer Vision", "Projects", "Freshers", "Portfolio"],
      featured: false,
      views: 420,
      link: "https://medium.com/@nevilj22/why-recruiters-value-ai-ml-and-computer-vision-experience-and-how-freshers-can-compete-8d1a0e7bab68",
    },
    {
      id: 3,
      title: "Top College Projects for Engineering Students",
      excerpt:
        "Explore exciting projects that engineering students can implement to showcase their skills and creativity.",
      content: "...",
      date: "coming soon",
      readTime: "7 min read",
      category: "Projects",
      tags: ["Projects", "Innovation", "Engineering"],
      featured: false,
      views: 350,
      link: "#",
    },
    {
      id: 4,
      title: "Lab Work & Innovation in Engineering College",
      excerpt:
        "Labs and experiments form the core of practical engineering learning. Learn how innovation happens in labs.",
      content: "...",
      date: "coming soon",
      readTime: "4 min read",
      category: "Labs",
      tags: ["Labs", "Experiments", "Innovation"],
      featured: false,
      views: 290,
      link: "#",
    },
  ];

  // Categories
  const categories = ["All", "Engineering Life", "AI Models", "Projects", "Labs"];
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Filter posts by category
  const filteredPosts =
    selectedCategory === "All"
      ? blogPosts
      : blogPosts.filter((post) => post.category === selectedCategory);

  // Featured post
  const featuredPost = blogPosts.find((post) => post.featured);

  // Dynamic category icon function with tech/college themed icons
  const getCategoryIcon = (category) => {
    switch (category) {
      case "Engineering Life":
        return <Clipboard className="w-20 h-20 text-primary" />; // student/college tasks
      case "AI Models":
        return <Cpu className="w-20 h-20 text-primary" />; // AI/tech symbol
      case "Projects":
        return <Code className="w-20 h-20 text-primary" />; // coding/projects
      case "Innovation":
        return <Lightbulb className="w-20 h-20 text-primary" />; // idea/innovation
      default:
        return <BookOpen className="w-20 h-20 text-primary" />;
    }
  };

  return (
    <section id="blog" className="py-20">
      <div className="container mx-auto px-4">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">
            Blog & Insights
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Exploring real stories and insights from engineering life.
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
                {/* Icon with overlay */}
                <div className="md:w-1/3 min-h-[250px] flex items-center justify-center relative">
                  <div className="absolute inset-0 bg-gradient-primary opacity-20"></div>
                  <div className="relative z-10">
                    {getCategoryIcon(featuredPost.category)}
                  </div>
                </div>

                {/* Post Content */}
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
                        {new Date(featuredPost.date).toLocaleDateString(
                          "en-US",
                          { year: "numeric", month: "long", day: "numeric" }
                        )}
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

                  <a
                    href={featuredPost.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button className="bg-gradient-primary hover:opacity-90 glow-primary">
                      Read Full Article
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </a>
                </div>
              </div>
            </Card>
          </div>
        )}

        {/* Filtered Posts */}
        <div className="grid md:grid-cols-2 gap-8">
          {filteredPosts
            .filter((post) => !post.featured)
            .map((post) => (
              <Card
                key={post.id}
                className="glass border-glass-border hover:glow-primary transition-all duration-500 overflow-hidden"
              >
                <div className="md:flex">
                  <div className="md:w-1/3 min-h-[150px] flex items-center justify-center relative">
                    <div className="absolute inset-0 bg-gradient-primary opacity-20"></div>
                    <div className="relative z-10">
                      {getCategoryIcon(post.category)}
                    </div>
                  </div>
                  <div className="md:w-2/3 p-6">
                    <div className="flex flex-wrap items-center gap-2 mb-2">
                      <Badge
                        variant="outline"
                        className="border-glass-border text-muted-foreground"
                      >
                        {post.category}
                      </Badge>
                    </div>

                    <h4 className="text-xl font-bold text-foreground mb-2">
                      {post.title}
                    </h4>
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      {post.excerpt}
                    </p>

                    <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                      <div className="flex items-center gap-4">
                        <div className="flex items-center">
                          <Calendar className="w-4 h-4 mr-1" />
                          {new Date(post.date).toLocaleDateString("en-US", {
                            year: "numeric",
                            month: "long",
                            day: "numeric",
                          })}
                        </div>
                        <div className="flex items-center">
                          <Clock className="w-4 h-4 mr-1" />
                          {post.readTime}
                        </div>
                        <span>{post.views.toLocaleString()} views</span>
                      </div>
                    </div>

                    <a
                      href={post.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button className="bg-gradient-primary hover:opacity-90 glow-primary">
                        Read More
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                    </a>
                  </div>
                </div>
              </Card>
            ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
