import { Button } from "@/components/ui/button";
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

      {/* NAV */}
      <nav className="sticky top-0 z-50 border-b" style={{ backgroundColor: "#093C5D", borderColor: "rgba(255,255,255,0.1)" }}>
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg flex items-center justify-center text-sm font-bold" style={{ backgroundColor: "#FFC81E", color: "#093C5D" }}>
              WB
            </div>
            <h1 className="text-lg font-semibold" style={{ fontFamily: "'Playfair Display', serif", color: "#ffffff" }}>
              WB<span style={{ color: "#FFC81E" }}>.</span>Connect
            </h1>
          </div>

          <div className="flex items-center gap-8">
            <div className="hidden md:flex gap-6">
              {["Home", "Products", "About", "Contact"].map((item) => (
                <a key={item} href="#" className="text-sm transition-colors" style={{ color: "rgba(255,255,255,0.7)" }}>
                  {item}
                </a>
              ))}
            </div>

            <a href="https://github.com/jeeesssa" target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg">
              <Github className="w-5 h-5 text-white/70" />
            </a>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section style={{ backgroundColor: "#093C5D" }}>
        <div className="max-w-7xl mx-auto px-6 py-24 md:py-32">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">

            {/* LEFT */}
            <div className="space-y-6 pr-4 md:pr-8 max-w-xl">
              <div className="inline-block text-xs px-4 py-1.5 rounded-full"
                style={{ backgroundColor: "rgba(255,200,30,0.15)", color: "#FFC81E" }}>
                Your digital products hub
              </div>

              <h2 className="text-5xl md:text-6xl leading-tight"
                style={{ fontFamily: "'Playfair Display', serif", color: "#ffffff", fontWeight: 700 }}>
                Discover Quality <span style={{ color: "#FFC81E" }}>Digital Products</span>
              </h2>

              <p className="text-lg leading-relaxed text-white/70">
                Explore our curated collection of e-books, templates, and learning materials designed to inspire and educate.
              </p>

              <div className="flex gap-4 pt-4 flex-wrap">
                <Link href="/products">
                  <button className="px-7 py-3 rounded-lg text-sm font-semibold"
                    style={{ backgroundColor: "#FFC81E", color: "#093C5D" }}>
                    Browse Products
                  </button>
                </Link>

                <button className="px-7 py-3 rounded-lg text-sm font-semibold border border-white/40 text-white">
                  Learn More
                </button>
              </div>
            </div>

            {/* RIGHT IMAGE */}
            <div className="relative h-80 md:h-96 overflow-hidden rounded-2xl">
              <img
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663625524357/BxVk3XguSyUFwsNTtq5qot/hero-books-learning-PfwoDE3N8AjdR8axiuT4Y4.webp"
                alt="Digital products"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* STATS */}
        <div className="grid grid-cols-2 md:grid-cols-4" style={{ backgroundColor: "#FFC81E" }}>
          {[
            { num: "10K+", label: "Active users" },
            { num: "500+", label: "Products listed" },
            { num: "98%", label: "Satisfaction" },
            { num: "24/7", label: "Support" },
          ].map((stat, i) => (
            <div key={i} className="py-6 text-center">
              <div className="text-2xl font-bold text-[#093C5D]">{stat.num}</div>
              <div className="text-xs text-[#093C5D]/70">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* PRODUCTS */}
      <section className="pt-24 md:pt-32 pb-20 md:pb-28 bg-[#f9f9f9]">
        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#093C5D]">
              Our Product Categories
            </h2>
            <p className="text-[#093C5D]/60 mt-2">
              Everything you need to learn, create, and grow
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {products.map((product) => {
              const Icon = product.icon;
              return (
                <div key={product.id} className="p-8 rounded-2xl bg-white border hover:shadow-lg transition">

                  <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 bg-[#093C5D]">
                    <Icon className="w-6 h-6 text-[#FFC81E]" />
                  </div>

                  <h3 className="text-xl font-semibold text-[#093C5D] mb-2">
                    {product.title}
                  </h3>

                  <p className="text-sm text-[#093C5D]/70 mb-4">
                    {product.description}
                  </p>

                  <Link href="/products">
                    <span className="text-sm font-semibold text-[#093C5D] hover:text-[#FFC81E]">
                      Explore →
                    </span>
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#062b42]">
        <div className="max-w-7xl mx-auto px-6 py-12 text-center text-white/50 text-sm">
          © 2026 WB Connect. All rights reserved.
        </div>
      </footer>

    </div>
  );
}