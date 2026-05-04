import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { products, categoryInfo } from "@/lib/products";
import { Star, Download, ShoppingCart } from "lucide-react";
import { useState } from "react";
import { Link } from "wouter";

/**
 * Design Philosophy: Modern Minimalist with Warm Accents
 * - Consistent with home page design
 * - Product grid with hover effects
 * - Category filtering
 */

export default function Products() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  const categories = [
    { id: "all", name: "All Products" },
    { id: "ebooks", name: "E-Books" },
    { id: "templates", name: "Templates" },
    { id: "kids-learning", name: "Kids Learning" },
    { id: "other", name: "Other Resources" },
  ];

  const filteredProducts =
    selectedCategory === "all"
      ? products
      : products.filter((p) => p.category === selectedCategory);

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
        </div>
      </nav>

      {/* Header */}
      <section className="py-12 md:py-16 border-b border-border">
        <div className="container">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Our Products
          </h2>
          <p className="text-lg text-foreground/60 max-w-2xl">
            Browse our complete collection of digital products and find exactly what you need.
          </p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 border-b border-border">
        <div className="container">
          <div className="flex flex-wrap gap-3">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 py-2 rounded-lg font-medium transition-all ${
                  selectedCategory === cat.id
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted text-foreground hover:bg-muted/80"
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product) => (
              <Link key={product.id} href={`/product/${product.id}`}>
                <a className="group">
                  <Card className="h-full overflow-hidden hover:shadow-xl transition-all duration-300 border-border/50 hover:border-primary/50 rounded-2xl flex flex-col">
                    {/* Product Image */}
                    <div className="relative h-48 overflow-hidden bg-muted">
                      <img
                        src={product.image}
                        alt={product.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute top-4 right-4 bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-semibold">
                        ${product.price}
                      </div>
                    </div>

                    {/* Product Info */}
                    <div className="p-6 flex-1 flex flex-col">
                      <div className="mb-4">
                        <p className="text-xs font-semibold text-primary uppercase tracking-wide mb-2">
                          {categoryInfo[product.category as keyof typeof categoryInfo]?.name}
                        </p>
                        <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors line-clamp-2">
                          {product.title}
                        </h3>
                      </div>

                      <p className="text-foreground/70 text-sm mb-4 line-clamp-2">
                        {product.description}
                      </p>

                      {/* Rating */}
                      <div className="flex items-center gap-2 mb-4">
                        <div className="flex items-center gap-1">
                          <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                          <span className="font-semibold text-foreground">{product.rating}</span>
                        </div>
                        <span className="text-sm text-foreground/60">
                          ({product.reviews} reviews)
                        </span>
                      </div>

                      {/* Product Meta */}
                      <div className="flex items-center gap-4 text-xs text-foreground/60 mb-6 pb-6 border-b border-border">
                        <span>{product.fileSize}</span>
                        <span>{product.format}</span>
                      </div>

                      {/* CTA Button */}
                      <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground rounded-lg group-hover:shadow-lg transition-all">
                        View Details →
                      </Button>
                    </div>
                  </Card>
                </a>
              </Link>
            ))}
          </div>

          {filteredProducts.length === 0 && (
            <div className="text-center py-12">
              <p className="text-lg text-foreground/60">No products found in this category.</p>
            </div>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-12">
        <div className="container text-center text-foreground/60 text-sm">
          <p>&copy; 2026 WB Connect. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
