import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { products, categoryInfo } from "@/lib/products";
import { Star, Download, ShoppingCart, Search, X } from "lucide-react";
import { useState, useMemo } from "react";
import { Link } from "wouter";

/**
 * Design Philosophy: Modern Minimalist with Warm Accents
 * - Consistent with home page design
 * - Product grid with hover effects
 * - Advanced category filtering and search
 * - Price range filtering
 */

export default function Products() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 100]);
  const [sortBy, setSortBy] = useState<"price-low" | "price-high" | "rating" | "newest">(
    "newest"
  );

  const categories = [
    { id: "all", name: "All Products" },
    { id: "ebooks", name: "E-Books" },
    { id: "templates", name: "Templates" },
    { id: "kids-learning", name: "Kids Learning" },
    { id: "other", name: "Other Resources" },
  ];

  // Filter and sort products
  const filteredProducts = useMemo(() => {
    let filtered = products;

    // Category filter
    if (selectedCategory !== "all") {
      filtered = filtered.filter((p) => p.category === selectedCategory);
    }

    // Search filter
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(
        (p) =>
          p.title.toLowerCase().includes(query) ||
          p.description.toLowerCase().includes(query)
      );
    }

    // Price range filter
    filtered = filtered.filter(
      (p) => p.price >= priceRange[0] && p.price <= priceRange[1]
    );

    // Sorting
    const sorted = [...filtered];
    switch (sortBy) {
      case "price-low":
        sorted.sort((a, b) => a.price - b.price);
        break;
      case "price-high":
        sorted.sort((a, b) => b.price - a.price);
        break;
      case "rating":
        sorted.sort((a, b) => b.rating - a.rating);
        break;
      case "newest":
        sorted.sort((a, b) => new Date(b.releaseDate).getTime() - new Date(a.releaseDate).getTime());
        break;
    }

    return sorted;
  }, [selectedCategory, searchQuery, priceRange, sortBy]);

  const maxPrice = Math.max(...products.map((p) => p.price));

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
        <div className="container flex items-center justify-between h-16">
          <Link href="/">
            <a className="flex items-center gap-2 hover:opacity-80 transition-opacity">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-amber-500 to-orange-600 flex items-center justify-center">
                <span className="text-white font-bold">📚</span>
              </div>
              <h1 className="text-xl font-bold text-foreground">WB Connect</h1>
            </a>
          </Link>
          <div className="flex items-center gap-4">
            <Link href="/products">
              <span className="text-foreground/70 hover:text-foreground transition-colors cursor-pointer">
                Products
              </span>
            </Link>
            <Link href="/contact">
              <span className="text-foreground/70 hover:text-foreground transition-colors cursor-pointer">
                Contact
              </span>
            </Link>
          </div>
        </div>
      </nav>

      {/* Header */}
      <section className="py-12 md:py-16 border-b border-border">
        <div className="container">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Our Products
          </h2>
          <p className="text-lg text-foreground/60">
            Browse our complete collection of digital products and find exactly what you need.
          </p>
        </div>
      </section>

      {/* Search Bar */}
      <section className="py-8 border-b border-border bg-muted/30">
        <div className="container">
          <div className="relative max-w-2xl">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-foreground/40" />
            <input
              type="text"
              placeholder="Search products by name or description..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder:text-foreground/40 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-foreground/40 hover:text-foreground transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            )}
          </div>
        </div>
      </section>

      {/* Filters and Products */}
      <section className="py-12 md:py-16">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Sidebar Filters */}
            <div className="lg:col-span-1">
              <div className="space-y-8 sticky top-24">
                {/* Category Filter */}
                <div>
                  <h3 className="font-bold text-foreground mb-4">Categories</h3>
                  <div className="space-y-2">
                    {categories.map((cat) => (
                      <button
                        key={cat.id}
                        onClick={() => setSelectedCategory(cat.id)}
                        className={`w-full text-left px-4 py-2 rounded-lg transition-all ${
                          selectedCategory === cat.id
                            ? "bg-primary text-primary-foreground font-semibold"
                            : "text-foreground/70 hover:bg-muted"
                        }`}
                      >
                        {cat.name}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Price Range Filter */}
                <div>
                  <h3 className="font-bold text-foreground mb-4">Price Range</h3>
                  <div className="space-y-4">
                    <div>
                      <input
                        type="range"
                        min="0"
                        max={maxPrice}
                        value={priceRange[1]}
                        onChange={(e) =>
                          setPriceRange([priceRange[0], parseInt(e.target.value)])
                        }
                        className="w-full"
                      />
                    </div>
                    <div className="text-sm text-foreground/60">
                      ₱{priceRange[0]} - ₱{priceRange[1]}
                    </div>
                  </div>
                </div>

                {/* Sort Filter */}
                <div>
                  <h3 className="font-bold text-foreground mb-4">Sort By</h3>
                  <select
                    value={sortBy}
                    onChange={(e) =>
                      setSortBy(
                        e.target.value as "price-low" | "price-high" | "rating" | "newest"
                      )
                    }
                    className="w-full px-3 py-2 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
                  >
                    <option value="newest">Newest</option>
                    <option value="price-low">Price: Low to High</option>
                    <option value="price-high">Price: High to Low</option>
                    <option value="rating">Highest Rated</option>
                  </select>
                </div>

                {/* Clear Filters */}
                {(selectedCategory !== "all" || searchQuery || priceRange[1] < maxPrice) && (
                  <button
                    onClick={() => {
                      setSelectedCategory("all");
                      setSearchQuery("");
                      setPriceRange([0, maxPrice]);
                    }}
                    className="w-full px-4 py-2 rounded-lg border border-primary text-primary hover:bg-primary/10 transition-all font-semibold"
                  >
                    Clear Filters
                  </button>
                )}
              </div>
            </div>

            {/* Products Grid */}
            <div className="lg:col-span-3">
              {filteredProducts.length > 0 ? (
                <div>
                  <p className="text-sm text-foreground/60 mb-6">
                    Showing {filteredProducts.length} of {products.length} products
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {filteredProducts.map((product) => (
                      <Link key={product.id} href={`/product/₱{product.id}`}>
                        <a>
                          <Card className="h-full overflow-hidden hover:shadow-xl transition-all duration-300 border-border/50 hover:border-primary/30 rounded-2xl group cursor-pointer">
                            {/* Product Image */}
                            <div className="relative h-48 bg-gradient-to-br from-amber-100 to-orange-100 overflow-hidden">
                              <img
                                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663625524357/BxVk3XguSyUFwsNTtq5qot/hero-books-learning-PfwoDE3N8AjdR8axiuT4Y4.webp"
                                alt={product.title}
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                              />
                              <div className="absolute top-3 right-3 bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-semibold">
                                ₱{product.price}
                              </div>
                            </div>

                            {/* Product Info */}
                            <div className="p-6">
                              <div className="text-xs font-semibold text-primary uppercase mb-2">
                                {product.category === "ebooks"
                                  ? "E-Books"
                                  : product.category === "templates"
                                  ? "Templates"
                                  : product.category === "kids-learning"
                                  ? "Kids Learning"
                                  : "Other"}
                              </div>
                              <h3 className="text-lg font-bold text-foreground mb-2 line-clamp-2 group-hover:text-primary transition-colors">
                                {product.title}
                              </h3>
                              <p className="text-sm text-foreground/60 mb-4 line-clamp-2">
                                {product.description}
                              </p>

                              {/* Rating */}
                              <div className="flex items-center gap-2 mb-4">
                                <div className="flex items-center gap-1">
                                  {[...Array(5)].map((_, i) => (
                                    <Star
                                      key={i}
                                      className={`w-4 h-4 ₱{
                                        i < Math.floor(product.rating)
                                          ? "fill-amber-400 text-amber-400"
                                          : "text-foreground/20"

                                      }`}
                                    />
                                  ))}
                                </div>
                                <span className="text-sm font-semibold text-foreground">
                                  {product.rating}
                                </span>
                                <span className="text-xs text-foreground/60">
                                  ({product.reviews} reviews)
                                </span>
                              </div>

                              {/* File Info */}
                              <div className="text-xs text-foreground/60 mb-4 space-y-1">
                                <div>📦 {product.fileSize}</div>
                                <div>📄 {product.format}</div>
                              </div>

                              {/* Action Buttons */}
                              <div className="flex gap-2">
                                <Button
                                  size="sm"
                                  className="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground rounded-lg"
                                >
                                  <Download className="w-4 h-4 mr-2" />
                                  View Details
                                </Button>
                              </div>
                            </div>
                          </Card>
                        </a>
                      </Link>
                    ))}
                  </div>
                </div>
              ) : (
                <Card className="p-12 text-center border-border/50 rounded-2xl">
                  <p className="text-foreground/60 mb-4">No products found matching your criteria.</p>
                  <Button
                    onClick={() => {
                      setSelectedCategory("all");
                      setSearchQuery("");
                      setPriceRange([0, maxPrice]);
                    }}
                    variant="outline"
                    className="border-primary text-primary hover:bg-primary/10"
                  >
                    Clear Filters
                  </Button>
                </Card>
              )}
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
                  <Link href="/contact">
                    <span className="hover:text-primary transition-colors cursor-pointer">
                      Contact
                    </span>
                  </Link>
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
                    className="hover:text-primary transition-colors"
                  >
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
