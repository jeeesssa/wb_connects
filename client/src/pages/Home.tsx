import { Github, BookOpen, FileText, Lightbulb, Users } from "lucide-react";
import { Link } from "wouter";

export default function Home() {

  const products = [
    {
      title: "E-Books",
      description: "Digital books ready to download and read anywhere.",
      icon: BookOpen,
    },
    {
      title: "Templates",
      description: "Ready-to-use documents, dashboards, and tools.",
      icon: FileText,
    },
    {
      title: "Kids Learning",
      description: "Fun, engaging educational materials for children.",
      icon: Lightbulb,
    },
    {
      title: "Resources",
      description: "Curated digital assets to boost productivity.",
      icon: Users,
    },
  ];

  return (
    <div className="bg-white text-[#093C5D]">

      {/* NAV */}
      <nav className="sticky top-0 z-50 bg-[#093C5D]/95 backdrop-blur border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <h1 className="text-white font-semibold text-lg">
            WB<span className="text-[#FFC81E]">.</span>Connect
          </h1>

          <div className="flex items-center gap-6 text-sm text-white/70">
            <a href="#">Products</a>
            <a href="#">About</a>
            <a href="#">Contact</a>

            <a href="https://github.com/jeeesssa" target="_blank">
              <Github className="w-5 h-5" />
            </a>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section className="relative overflow-hidden bg-[#093C5D] text-white">
        <div className="max-w-7xl mx-auto px-6 py-28 md:py-36">

          <div className="grid md:grid-cols-2 gap-16 items-center">

            {/* TEXT */}
            <div className="max-w-xl space-y-6">
              <span className="inline-block text-xs px-4 py-1.5 rounded-full bg-[#FFC81E]/20 text-[#FFC81E]">
                Your digital products hub
              </span>

              <h1 className="text-5xl md:text-6xl font-bold leading-tight">
                Discover Premium{" "}
                <span className="text-[#FFC81E]">Digital Products</span>
              </h1>

              <p className="text-white/70 text-lg">
                Explore curated e-books, templates, and learning materials designed to help you grow faster.
              </p>

              <div className="flex gap-4 pt-4">
                <Link href="/products">
                  <button className="px-8 py-3 rounded-lg bg-[#FFC81E] text-[#093C5D] font-semibold">
                    Browse Products
                  </button>
                </Link>

                <button className="px-8 py-3 rounded-lg border border-white/40">
                  Learn More
                </button>
              </div>
            </div>

            {/* IMAGE */}
            <div className="relative">
              <div className="overflow-hidden rounded-2xl shadow-2xl">
                <img
                  src="https://d2xsxph8kpxj0f.cloudfront.net/310519663625524357/BxVk3XguSyUFwsNTtq5qot/hero-books-learning-PfwoDE3N8AjdR8axiuT4Y4.webp"
                  className="w-full h-[420px] object-cover"
                />
              </div>
            </div>

          </div>
        </div>

        {/* GRADIENT DECOR (Stripe-style touch) */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#FFC81E]/10 blur-3xl rounded-full" />
      </section>

      {/* STATS */}
      <section className="bg-[#FFC81E]">
        <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-2 md:grid-cols-4 text-center">
          {[
            ["10K+", "Users"],
            ["500+", "Products"],
            ["98%", "Satisfaction"],
            ["24/7", "Support"],
          ].map(([num, label], i) => (
            <div key={i} className="space-y-1">
              <div className="text-2xl font-bold">{num}</div>
              <div className="text-sm opacity-70">{label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* PRODUCTS */}
      <section className="py-28 bg-[#f9fafb]">
        <div className="max-w-7xl mx-auto px-6">

          <div className="max-w-2xl mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Product Categories
            </h2>
            <p className="text-[#093C5D]/60">
              Everything you need to learn, create, and scale your ideas.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {products.map((p, i) => {
              const Icon = p.icon;
              return (
                <div
                  key={i}
                  className="p-8 bg-white rounded-2xl border hover:shadow-xl transition"
                >
                  <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-[#093C5D] mb-5">
                    <Icon className="text-[#FFC81E]" />
                  </div>

                  <h3 className="text-xl font-semibold mb-2">
                    {p.title}
                  </h3>

                  <p className="text-[#093C5D]/70 mb-4">
                    {p.description}
                  </p>

                  <Link href="/products">
                    <span className="font-semibold hover:text-[#FFC81E]">
                      Explore →
                    </span>
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-28">
        <div className="max-w-5xl mx-auto px-6 text-center bg-[#093C5D] text-white rounded-3xl py-16">

          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Ready to explore?
          </h2>

          <p className="text-white/70 mb-8">
            Start browsing and find exactly what you need.
          </p>

          <Link href="/products">
            <button className="px-8 py-3 bg-[#FFC81E] text-[#093C5D] rounded-lg font-semibold">
              Start Browsing
            </button>
          </Link>

        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t">
        <div className="max-w-7xl mx-auto px-6 py-10 text-sm text-[#093C5D]/60 text-center">
          © 2026 WB Connect. All rights reserved.
        </div>
      </footer>

    </div>
  );
}