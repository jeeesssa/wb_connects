import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Github, BookOpen, FileText, Lightbulb, Users } from "lucide-react";
import { useEffect, useState } from "react";
import { Link } from "wouter";

interface GitHubRepo {
  name: string;
  description: string | null;
  url: string;
  language: string | null;
  stars: number;
}

export default function Home() {
  const [repos, setRepos] = useState<GitHubRepo[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
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
    },
    {
      id: 2,
      title: "Templates",
      description: "Ready-to-use templates for documents, presentations, and more.",
      icon: FileText,
    },
    {
      id: 3,
      title: "Kids Learning Materials",
      description: "Engaging educational content designed specifically for children.",
      icon: Lightbulb,
    },
    {
      id: 4,
      title: "Other Resources",
      description: "Curated collection of additional digital products and resources.",
      icon: Users,
    },
  ];

  return (
    <div className="min-h-screen" style={{ fontFamily: "'Lato', sans-serif", backgroundColor: "#ffffff" }}>

      {/* Navigation */}
      <nav
        className="sticky top-0 z-50 border-b"
        style={{ backgroundColor: "#093C5D", borderColor: "rgba(255,255,255,0.1)" }}
      >
        <div className="container flex items-center justify-between h-16 px-6">
          <div className="flex items-center gap-3">
            <div
              className="w-9 h-9 rounded-lg flex items-center justify-center text-sm font-bold"
              style={{ backgroundColor: "#FFC81E", color: "#093C5D" }}
            >
              WB
            </div>
            <h1
              className="text-lg font-semibold"
              style={{ fontFamily: "'Playfair Display', serif", color: "#ffffff" }}
            >
              WB<span style={{ color: "#FFC81E" }}>.</span>Connect
            </h1>
          </div>
          <div className="flex items-center gap-8">
            <div className="hidden md:flex gap-6">
              {["Home", "Products", "About", "Contact"].map((item) => (
                <a
                  key={item}
                  href="#"
                  className="text-sm transition-colors"
                  style={{ color: "rgba(255,255,255,0.7)" }}
                  onMouseOver={(e) => (e.currentTarget.style.color = "#FFC81E")}
                  onMouseOut={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.7)")}
                >
                  {item}
                </a>
              ))}
            </div>
            <a
              href="https://github.com/jeeesssa"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg transition-colors"
              style={{ color: "rgba(255,255,255,0.7)" }}
            >
              <Github className="w-5 h-5" />
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section style={{ backgroundColor: "#093C5D" }}>
        <div className="container px-6 py-24 md:py-32">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div
                className="inline-block text-xs px-4 py-1.5 rounded-full"
                style={{
                  backgroundColor: "rgba(255,200,30,0.15)",
                  color: "#FFC81E",
                  border: "0.5px solid rgba(255,200,30,0.3)",
                }}
              >
                Your digital products hub
              </div>
              <h2
                className="text-5xl md:text-6xl leading-tight"
                style={{
                  fontFamily: "'Playfair Display', serif",
                  color: "#ffffff",
                  fontWeight: 700,
                }}
              >
                Discover Quality{" "}
                <span style={{ color: "#FFC81E" }}>Digital Products</span>
              </h2>
              <p className="text-lg leading-relaxed" style={{ color: "rgba(255,255,255,0.65)" }}>
                Explore our curated collection of e-books, templates, and learning materials designed to inspire and educate.
              </p>
              <div className="flex gap-4 pt-2 flex-wrap">
                <Link href="/products">
                  <button
                    className="px-7 py-3 rounded-lg text-sm font-semibold transition-opacity"
                    style={{ backgroundColor: "#FFC81E", color: "#093C5D" }}
                    onMouseOver={(e) => (e.currentTarget.style.opacity = "0.9")}
                    onMouseOut={(e) => (e.currentTarget.style.opacity = "1")}
                  >
                    Browse Products
                  </button>
                </Link>
                <button
                  className="px-7 py-3 rounded-lg text-sm font-semibold transition-colors"
                  style={{
                    backgroundColor: "transparent",
                    color: "#ffffff",
                    border: "0.5px solid rgba(255,255,255,0.4)",
                  }}
                >
                  Learn More
                </button>
              </div>
            </div>
            <div className="relative h-80 md:h-96">
              <img
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663625524357/BxVk3XguSyUFwsNTtq5qot/hero-books-learning-PfwoDE3N8AjdR8axiuT4Y4.webp"
                alt="Digital products showcase"
                className="w-full h-full object-cover rounded-2xl"
                style={{ border: "2px solid rgba(255,200,30,0.2)" }}
              />
            </div>
          </div>
        </div>

        {/* Stats Bar */}
        <div
          className="grid grid-cols-2 md:grid-cols-4"
          style={{ backgroundColor: "#FFC81E" }}
        >
          {[
            { num: "10K+", label: "Active users" },
            { num: "500+", label: "Products listed" },
            { num: "98%", label: "Satisfaction" },
            { num: "24/7", label: "Support" },
          ].map((stat, i) => (
            <div
              key={i}
              className="py-5 text-center"
              style={{ borderRight: i < 3 ? "0.5px solid rgba(9,60,93,0.15)" : "none" }}
            >
              <div className="text-2xl font-bold" style={{ color: "#093C5D" }}>{stat.num}</div>
              <div className="text-xs mt-1" style={{ color: "rgba(9,60,93,0.65)" }}>{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Product Categories */}
      <section className="py-20 md:py-28" style={{ backgroundColor: "#f9f9f9" }}>
        <div className="container px-6">
          <div className="text-center mb-14">
            <h2
              className="text-4xl md:text-5xl mb-3"
              style={{ fontFamily: "'Playfair Display', serif", color: "#093C5D", fontWeight: 700 }}
            >
              Our Product Categories
            </h2>
            <p className="text-base" style={{ color: "rgba(9,60,93,0.6)" }}>
              Everything you need to learn, create, and grow
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {products.map((product) => {
              const Icon = product.icon;
              return (
                <div
                  key={product.id}
                  className="p-8 rounded-2xl transition-all duration-300 group cursor-pointer"
                  style={{
                    backgroundColor: "#ffffff",
                    border: "0.5px solid rgba(9,60,93,0.12)",
                  }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.borderColor = "#FFC81E";
                    e.currentTarget.style.boxShadow = "0 4px 24px rgba(9,60,93,0.08)";
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.borderColor = "rgba(9,60,93,0.12)";
                    e.currentTarget.style.boxShadow = "none";
                  }}
                >
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center mb-5"
                    style={{ backgroundColor: "#093C5D" }}
                  >
                    <Icon className="w-6 h-6" style={{ color: "#FFC81E" }} />
                  </div>
                  <h3
                    className="text-xl mb-2 font-semibold"
                    style={{ fontFamily: "'Playfair Display', serif", color: "#093C5D" }}
                  >
                    {product.title}
                  </h3>
                  <p className="text-sm leading-relaxed mb-5" style={{ color: "rgba(9,60,93,0.65)" }}>
                    {product.description}
                  </p>
                  <Link href="/products">
                    <span
                      className="text-sm font-semibold transition-colors"
                      style={{ color: "#093C5D" }}
                      onMouseOver={(e) => (e.currentTarget.style.color = "#FFC81E")}
                      onMouseOut={(e) => (e.currentTarget.style.color = "#093C5D")}
                    >
                      Explore →
                    </span>
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* GitHub Projects */}
      <section className="py-20 md:py-28" style={{ backgroundColor: "#ffffff" }}>
        <div className="container px-6">
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-3">
              <Github className="w-7 h-7" style={{ color: "#093C5D" }} />
              <h2
                className="text-4xl md:text-5xl"
                style={{ fontFamily: "'Playfair Display', serif", color: "#093C5D", fontWeight: 700 }}
              >
                GitHub Projects
              </h2>
            </div>
            <p className="text-base" style={{ color: "rgba(9,60,93,0.6)" }}>
              Check out my open-source projects and contributions on GitHub
            </p>
          </div>

          {loading ? (
            <div className="flex items-center justify-center py-12">
              <div
                className="animate-spin rounded-full h-10 w-10 border-b-2"
                style={{ borderColor: "#093C5D" }}
              />
            </div>
          ) : repos.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {repos.map((repo) => (
                <a
                  key={repo.name}
                  href={repo.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block group"
                >
                  <div
                    className="h-full p-7 rounded-2xl transition-all duration-300"
                    style={{ border: "0.5px solid rgba(9,60,93,0.12)", backgroundColor: "#ffffff" }}
                    onMouseOver={(e) => {
                      e.currentTarget.style.borderColor = "#FFC81E";
                      e.currentTarget.style.backgroundColor = "#f9f7f2";
                    }}
                    onMouseOut={(e) => {
                      e.currentTarget.style.borderColor = "rgba(9,60,93,0.12)";
                      e.currentTarget.style.backgroundColor = "#ffffff";
                    }}
                  >
                    <div className="flex items-start justify-between mb-3">
                      <h3
                        className="text-lg font-semibold"
                        style={{ color: "#093C5D" }}
                      >
                        {repo.name}
                      </h3>
                      <Github className="w-4 h-4" style={{ color: "#FFC81E" }} />
                    </div>
                    {repo.description && (
                      <p className="text-sm mb-4 line-clamp-2" style={{ color: "rgba(9,60,93,0.65)" }}>
                        {repo.description}
                      </p>
                    )}
                    <div className="flex items-center gap-4 text-xs" style={{ color: "rgba(9,60,93,0.5)" }}>
                      {repo.language && (
                        <div className="flex items-center gap-1.5">
                          <div className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: "#FFC81E" }} />
                          {repo.language}
                        </div>
                      )}
                      {repo.stars > 0 && <span>⭐ {repo.stars}</span>}
                    </div>
                  </div>
                </a>
              ))}
            </div>
          ) : (
            <div
              className="p-12 text-center rounded-2xl"
              style={{ border: "0.5px solid rgba(9,60,93,0.12)" }}
            >
              <p style={{ color: "rgba(9,60,93,0.5)" }}>No public repositories found</p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-28 mx-4 md:mx-6 rounded-3xl" style={{ backgroundColor: "#093C5D" }}>
        <div className="container px-6 text-center">
          <h2
            className="text-4xl md:text-5xl mb-4"
            style={{ fontFamily: "'Playfair Display', serif", color: "#ffffff", fontWeight: 700 }}
          >
            Ready to <span style={{ color: "#FFC81E" }}>Explore?</span>
          </h2>
          <p className="text-base mb-8 max-w-xl mx-auto" style={{ color: "rgba(255,255,255,0.65)" }}>
            Browse our complete collection of digital products and find exactly what you need.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/products">
              <button
                className="px-8 py-3 rounded-lg text-sm font-semibold"
                style={{ backgroundColor: "#FFC81E", color: "#093C5D" }}
              >
                Start Browsing
              </button>
            </Link>
            <button
              className="px-8 py-3 rounded-lg text-sm font-semibold"
              style={{ color: "#ffffff", border: "0.5px solid rgba(255,255,255,0.4)", backgroundColor: "transparent" }}
            >
              Contact Us
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ backgroundColor: "#062b42", marginTop: "0" }}>
        <div className="container px-6 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <h4
                className="text-base font-semibold mb-3"
                style={{ fontFamily: "'Playfair Display', serif", color: "#ffffff" }}
              >
                WB<span style={{ color: "#FFC81E" }}>.</span>Connect
              </h4>
              <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.5)" }}>
                Your destination for quality digital products and learning materials.
              </p>
            </div>
            <div>
              <h4 className="text-sm font-semibold mb-3" style={{ color: "#ffffff" }}>Quick Links</h4>
              <ul className="space-y-2 text-sm" style={{ color: "rgba(255,255,255,0.5)" }}>
                {["Products", "About", "Contact"].map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="transition-colors"
                      onMouseOver={(e) => (e.currentTarget.style.color = "#FFC81E")}
                      onMouseOut={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.5)")}
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-semibold mb-3" style={{ color: "#ffffff" }}>Connect</h4>
              <a
                href="https://github.com/jeeesssa"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm transition-colors"
                style={{ color: "rgba(255,255,255,0.5)" }}
                onMouseOver={(e) => (e.currentTarget.style.color = "#FFC81E")}
                onMouseOut={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.5)")}
              >
                <Github className="w-4 h-4" />
                GitHub
              </a>
            </div>
          </div>
          <div
            className="pt-8 text-center text-xs"
            style={{ borderTop: "0.5px solid rgba(255,255,255,0.1)", color: "rgba(255,255,255,0.3)" }}
          >
            © 2026 WB Connect. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}