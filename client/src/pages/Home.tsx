import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Github, BookOpen, FileText, Lightbulb, Users } from "lucide-react";
import { useEffect, useState } from "react";

interface GitHubRepo {
  name: string;
  description: string | null;
  url: string;
  language: string | null;
  stars: number;
}

/**
 * Design Philosophy: Modern Minimalist with Warm Accents
 * - Color Palette: Cream (#FAF8F3), Terracotta (#D97757), Soft Gold (#D4A574), Deep Charcoal (#2C2C2C)
 * - Typography: Playfair Display (headlines), Lato (body)
 * - Layout: Asymmetric, generous whitespace, soft rounded corners
 * - Accents: Subtle gradients, soft shadows, decorative lines
 */

export default function Home() {
  const [repos, setRepos] = useState<GitHubRepo[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch GitHub repositories
    const fetchRepos = async () => {
      try {
        const response = await fetch("https://api.github.com/users/jeeesssa/repos");
        const data = await response.json();
        const ownRepos = data
          .filter((repo: any) => !repo.fork)
          .map((repo: any) => ({
            name: repo.name,
            description: repo.description,
            url: repo.html_url,
            language: repo.language,
            stars: repo.stargazers_count,
          }));
        setRepos(ownRepos);
      } catch (error) {
        console.error("Error fetching repos:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchRepos();
  }, []);

  const products = [
    {
      id: 1,
      title: "E-Books",
      description: "Digital books on various topics, ready to download and read on any device.",
      icon: BookOpen,
      color: "from-amber-100 to-orange-100",
      accentColor: "text-amber-700",
    },
    {
      id: 2,
      title: "Templates",
      description: "Ready-to-use templates for documents, presentations, and more.",
      icon: FileText,
      color: "from-orange-100 to-red-100",
      accentColor: "text-orange-700",
    },
    {
      id: 3,
      title: "Kids Learning Materials",
      description: "Engaging educational content designed specifically for children.",
      icon: Lightbulb,
      color: "from-yellow-100 to-amber-100",
      accentColor: "text-yellow-700",
    },
    {
      id: 4,
      title: "Other Resources",
      description: "Curated collection of additional digital products and resources.",
      icon: Users,
      color: "from-orange-50 to-yellow-50",
      accentColor: "text-orange-600",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
        <div className="container flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-amber-500 to-orange-600 flex items-center justify-center">
              <BookOpen className="w-6 h-6 text-white" />
            </div>
            <h1 className="text-xl font-bold text-foreground">Digital Products Hub</h1>
          </div>
          <a
            href="https://github.com/jeeesssa"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 hover:bg-muted rounded-lg transition-colors"
          >
            <Github className="w-5 h-5 text-foreground" />
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="container py-20 md:py-32">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-6">
              <div className="space-y-4">
                <h2 className="text-5xl md:text-6xl font-bold text-foreground leading-tight">
                  Discover Quality Digital Products
                </h2>
                <p className="text-lg text-foreground/70 leading-relaxed">
                  Explore our curated collection of e-books, templates, and learning materials designed to inspire and educate.
                </p>
              </div>
              <div className="flex gap-4 pt-4">
                <Button
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-lg"
                >
                  Browse Products
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="rounded-lg border-primary text-primary hover:bg-primary/5"
                >
                  Learn More
                </Button>
              </div>
            </div>

            {/* Right Image */}
            <div className="relative h-96 md:h-full">
              <img
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663625524357/BxVk3XguSyUFwsNTtq5qot/hero-books-learning-PfwoDE3N8AjdR8axiuT4Y4.webp"
                alt="Digital products showcase"
                className="w-full h-full object-cover rounded-2xl shadow-lg"
              />
              {/* Decorative accent line */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full blur-3xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Product Categories */}
      <section className="py-20 md:py-32 bg-gradient-to-b from-transparent to-muted/30">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Our Product Categories
            </h2>
            <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
              Everything you need to learn, create, and grow
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {products.map((product) => {
              const Icon = product.icon;
              return (
                <Card
                  key={product.id}
                  className="group p-8 hover:shadow-xl transition-all duration-300 border-border/50 hover:border-primary/30 rounded-2xl overflow-hidden"
                >
                  {/* Background gradient */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${product.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10`}
                  />

                  <div className="relative z-10">
                    <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${product.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                      <Icon className={`w-7 h-7 ${product.accentColor}`} />
                    </div>
                    <h3 className="text-2xl font-bold text-foreground mb-3">
                      {product.title}
                    </h3>
                    <p className="text-foreground/70 mb-6 leading-relaxed">
                      {product.description}
                    </p>
                    <Button
                      variant="ghost"
                      className="text-primary hover:text-primary hover:bg-primary/10 p-0 h-auto font-semibold"
                    >
                      Explore →
                    </Button>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* GitHub Projects Section */}
      <section className="py-20 md:py-32">
        <div className="container">
          <div className="mb-16">
            <div className="flex items-center gap-3 mb-4">
              <Github className="w-8 h-8 text-primary" />
              <h2 className="text-4xl md:text-5xl font-bold text-foreground">
                GitHub Projects
              </h2>
            </div>
            <p className="text-lg text-foreground/60 max-w-2xl">
              Check out my open-source projects and contributions on GitHub
            </p>
          </div>

          {loading ? (
            <div className="flex items-center justify-center py-12">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary" />
            </div>
          ) : repos.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {repos.map((repo) => (
                <a
                  key={repo.name}
                  href={repo.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group"
                >
                  <Card className="h-full p-8 hover:shadow-xl transition-all duration-300 border-border/50 hover:border-primary/50 rounded-2xl hover:bg-muted/30 cursor-pointer">
                    <div className="flex items-start justify-between mb-4">
                      <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                        {repo.name}
                      </h3>
                      <Github className="w-5 h-5 text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>

                    {repo.description && (
                      <p className="text-foreground/70 mb-4 line-clamp-2">
                        {repo.description}
                      </p>
                    )}

                    <div className="flex items-center gap-4 text-sm text-foreground/60">
                      {repo.language && (
                        <div className="flex items-center gap-2">
                          <div className="w-3 h-3 rounded-full bg-primary" />
                          {repo.language}
                        </div>
                      )}
                      {repo.stars > 0 && (
                        <div className="flex items-center gap-1">
                          <span>⭐</span>
                          {repo.stars}
                        </div>
                      )}
                    </div>
                  </Card>
                </a>
              ))}
            </div>
          ) : (
            <Card className="p-12 text-center border-border/50 rounded-2xl">
              <p className="text-foreground/60">No public repositories found</p>
            </Card>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-32 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-3xl mx-4 md:mx-0">
        <div className="container">
          <div className="text-center space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">
              Ready to Explore?
            </h2>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
              Browse our complete collection of digital products and find exactly what you need.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-lg"
              >
                Start Browsing
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="rounded-lg border-primary text-primary hover:bg-primary/5"
              >
                Contact Us
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border mt-20 py-12">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <h4 className="font-bold text-foreground mb-4">Digital Products Hub</h4>
              <p className="text-foreground/60 text-sm">
                Your destination for quality digital products and learning materials.
              </p>
            </div>
            <div>
              <h4 className="font-bold text-foreground mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm text-foreground/60">
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Products
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    About
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-foreground mb-4">Connect</h4>
              <ul className="space-y-2 text-sm text-foreground/60">
                <li>
                  <a
                    href="https://github.com/jeeesssa"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-primary transition-colors flex items-center gap-2"
                  >
                    <Github className="w-4 h-4" />
                    GitHub
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-border pt-8 text-center text-foreground/60 text-sm">
            <p>&copy; 2026 Digital Products Hub. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
