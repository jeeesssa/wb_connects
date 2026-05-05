import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Github, BookOpen, FileText, Lightbulb, Users } from "lucide-react";
import { useEffect, useState } from "react";
import { Link } from "wouter";
import logo from "@/assets/logo.png";
import home from "@/assets/home.png";


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

    {/* LOGO */}
    <div className="flex items-center gap-2">
      <img
        src={logo} // or "/logo.png" if using public folder
        alt="WB Connect Logo"
        className="w-10 h-10 object-contain rounded-md"
      />
      <h1 className="text-xl font-bold text-foreground">
        WB Connect
      </h1>
    </div>

    {/* GitHub */}
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
                  Build, Learn, and Grow with WB Connect
                </h2>
                <p className="text-lg text-foreground/70 leading-relaxed">
                 Discover quality digital products including e-books, templates, and learning materials designed to support your journey in business, creativity, and education.
                </p>
              </div>
              <div className="flex gap-4 pt-4">
                <Link href="/products">
                  <Button
                    size="lg"
                    className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-lg"
                  >
                    Browse Products
                  </Button>
                </Link>
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
                src={home} // or "/logo.png" if using public folder
                 alt="WB Connect Hero"
                className="w-full h-full object-cover rounded-2xl shadow-lg"
              />
              {/* Decorative accent line */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full blur-3xl" />
            </div>
          </div>
        </div>
      </section>

     {/* Product Categories */}
<section className="py-16 md:py-20">
  <div className="container">

    {/* Header */}
    <div className="text-center mb-10">
      <h2 className="text-3xl md:text-4xl font-semibold text-foreground mb-2">
        Product Categories
      </h2>
      <p className="text-sm text-foreground/60">
        Simple tools to help you learn and grow
      </p>
    </div>

    {/* Grid */}
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {products.map((product) => {
        const Icon = product.icon;

        return (
          <Link key={product.id} href="/products">
            <div className="p-4 border border-border rounded-xl hover:border-primary hover:shadow-sm transition-all cursor-pointer">

              {/* Icon */}
              <div className="w-10 h-10 flex items-center justify-center rounded-md bg-muted mb-3">
                <Icon className="w-5 h-5 text-primary" />
              </div>

              {/* Title */}
              <h3 className="text-sm font-semibold text-foreground">
                {product.title}
              </h3>

            </div>
          </Link>
        );
      })}
    </div>

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
              <Link href="/products">
                <Button
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-lg"
                >
                  Start Browsing
                </Button>
              </Link>
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
              <h4 className="font-bold text-foreground mb-4">WB Connect</h4>
              <p className="text-foreground/60 text-sm">
                Your destination for quality digital products and learning materials.
              </p>
            </div>
            <div>
              <h4 className="font-bold text-foreground mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm text-foreground/60">
                <li>
                  <Link href="/products">
                    <span className="hover:text-primary transition-colors cursor-pointer">
                      Products
                    </span>
                  </Link>
                </li>
                <li>
                  <a className="hover:text-primary transition-colors cursor-pointer">
                    About
                  </a>
                </li>
                <li>
                  <a className="hover:text-primary transition-colors cursor-pointer">
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
            <p>&copy; 2026 WB Connect. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
