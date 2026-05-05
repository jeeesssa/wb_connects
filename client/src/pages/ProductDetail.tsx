import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { products, categoryInfo } from "@/lib/products";
import {
  Star,
  Download,
  ShoppingCart,
  Check,
  ArrowLeft,
  Clock,
  FileText,
  Users,
} from "lucide-react";
import { useParams, Link } from "wouter";
import { useState } from "react";

/**
 * Design Philosophy: Modern Minimalist with Warm Accents
 * - Detailed product showcase
 * - Features and benefits highlighted
 * - Clear pricing and download options
 */

export default function ProductDetail() {
  const { id } = useParams<{ id: string }>();
  const [quantity, setQuantity] = useState(1);
  const [showDownloadModal, setShowDownloadModal] = useState(false);

  const product = products.find((p) => p.id === id);

  if (!product) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-foreground mb-4">Product Not Found</h1>
          <p className="text-foreground/60 mb-8">
            The product you're looking for doesn't exist.
          </p>
          <Link href="/products">
            <a>
              <Button className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-lg">
                Back to Products
              </Button>
            </a>
          </Link>
        </div>
      </div>
    );
  }

  const relatedProducts = products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 3);

  const handleDownload = () => {
    // Simulate download
    const element = document.createElement("a");
    element.setAttribute("href", "#");
    element.setAttribute("download", `${product.title}.zip`);
    element.style.display = "none";
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
    setShowDownloadModal(false);
  };

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

      {/* Breadcrumb */}
      <div className="border-b border-border">
        <div className="container py-4">
          <Link href="/products">
            <a className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors">
              <ArrowLeft className="w-4 h-4" />
              Back to Products
            </a>
          </Link>
        </div>
      </div>

      {/* Product Detail */}
      <section className="py-12 md:py-20">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
            {/* Product Image */}
            <div className="flex items-center justify-center">
              <div className="w-full h-96 md:h-full rounded-2xl overflow-hidden bg-muted shadow-lg">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Product Info */}
            <div className="flex flex-col justify-center">
              <div className="mb-6">
                <p className="text-sm font-semibold text-primary uppercase tracking-wide mb-3">
                  {categoryInfo[product.category as keyof typeof categoryInfo]?.name}
                </p>
                <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                  {product.title}
                </h1>
                <p className="text-xl text-foreground/70 leading-relaxed">
                  {product.longDescription}
                </p>
              </div>

              {/* Rating */}
              <div className="flex items-center gap-4 mb-8 pb-8 border-b border-border">
                <div className="flex items-center gap-2">
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-5 h-5 ${
                          i < Math.floor(product.rating)
                            ? "fill-amber-400 text-amber-400"
                            : "text-border"
                        }`}
                      />
                    ))}
                  </div>
                  <span className="font-semibold text-foreground">{product.rating}</span>
                </div>
                <span className="text-foreground/60">
                  ({product.reviews} customer reviews)
                </span>
              </div>

              {/* Price and CTA */}
              <div className="mb-8">
                <div className="mb-6">
                  <p className="text-sm text-foreground/60 mb-2">Price</p>
                  <div className="flex items-baseline gap-4">
                    <span className="text-5xl font-bold text-primary">
                      ${product.price}
                    </span>
                    <span className="text-lg text-foreground/60">One-time purchase</span>
                  </div>
                </div>

                <div className="flex gap-4">
                  <Link href="/checkout">
                    <Button
                      size="lg"
                      className="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground rounded-lg flex items-center justify-center gap-2"
                    >
                      <ShoppingCart className="w-5 h-5" />
                      Buy Now
                    </Button>
                  </Link>
                  <Button
                    size="lg"
                    variant="outline"
                    className="flex-1 rounded-lg border-primary text-primary hover:bg-primary/5 flex items-center justify-center gap-2"
                    onClick={() => setShowDownloadModal(true)}
                  >
                    <Download className="w-5 h-5" />
                    Learn More
                  </Button>
                </div>
              </div>

              {/* Product Meta */}
              <div className="space-y-3 text-sm text-foreground/70">
                <div className="flex items-center gap-3">
                  <FileText className="w-5 h-5 text-primary" />
                  <span>
                    <strong>Format:</strong> {product.format}
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <Clock className="w-5 h-5 text-primary" />
                  <span>
                    <strong>File Size:</strong> {product.fileSize}
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <Calendar className="w-5 h-5 text-primary" />
                  <span>
                    <strong>Released:</strong>{" "}
                    {new Date(product.releaseDate).toLocaleDateString()}
                  </span>
                </div>
                {product.author && (
                  <div className="flex items-center gap-3">
                    <Users className="w-5 h-5 text-primary" />
                    <span>
                      <strong>Author:</strong> {product.author}
                    </span>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Features Section */}
          <section className="mb-16 py-12 border-t border-b border-border">
            <h2 className="text-3xl font-bold text-foreground mb-8">What's Included</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {product.features.map((feature, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-1">
                    <Check className="w-4 h-4 text-primary" />
                  </div>
                  <p className="text-foreground/80 leading-relaxed">{feature}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Related Products */}
          {relatedProducts.length > 0 && (
            <section>
              <h2 className="text-3xl font-bold text-foreground mb-8">Related Products</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {relatedProducts.map((related) => (
                  <Link key={related.id} href={`/product/${related.id}`}>
                    <a className="group">
                      <Card className="h-full overflow-hidden hover:shadow-xl transition-all duration-300 border-border/50 hover:border-primary/50 rounded-2xl">
                        <div className="relative h-40 overflow-hidden bg-muted">
                          <img
                            src={related.image}
                            alt={related.title}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                          />
                          <div className="absolute top-3 right-3 bg-primary text-primary-foreground px-2 py-1 rounded-lg text-xs font-semibold">
                            ${related.price}
                          </div>
                        </div>
                        <div className="p-4">
                          <h3 className="font-bold text-foreground group-hover:text-primary transition-colors line-clamp-2 mb-2">
                            {related.title}
                          </h3>
                          <div className="flex items-center gap-1">
                            <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                            <span className="text-sm font-semibold text-foreground">
                              {related.rating}
                            </span>
                          </div>
                        </div>
                      </Card>
                    </a>
                  </Link>
                ))}
              </div>
            </section>
          )}
        </div>
      </section>

      {/* Download Modal */}
      {showDownloadModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <Card className="max-w-md w-full p-8 rounded-2xl">
            <h3 className="text-2xl font-bold text-foreground mb-4">Download Product</h3>
            <p className="text-foreground/70 mb-6">
              You're about to download <strong>{product.title}</strong>. This file is{" "}
              {product.fileSize} and contains all the resources you need.
            </p>
            <div className="bg-muted p-4 rounded-lg mb-6">
              <p className="text-sm text-foreground/60 mb-2">
                <strong>File Name:</strong>
              </p>
              <p className="text-foreground font-mono text-sm break-all">
                {product.title.replace(/\s+/g, "-").toLowerCase()}.zip
              </p>
            </div>
            <div className="flex gap-4">
              <Button
                variant="outline"
                className="flex-1 rounded-lg border-primary text-primary hover:bg-primary/5"
                onClick={() => setShowDownloadModal(false)}
              >
                Cancel
              </Button>
              <Button
                className="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground rounded-lg"
                onClick={handleDownload}
              >
                Download
              </Button>
            </div>
          </Card>
        </div>
      )}

      {/* Footer */}
      <footer className="border-t border-border mt-20 py-12">
        <div className="container text-center text-foreground/60 text-sm">
          <p>&copy; 2026 WB Connect. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

// Calendar icon component
function Calendar(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M8 2v4" />
      <path d="M16 2v4" />
      <rect width="20" height="18" x="2" y="4" rx="2" />
      <path d="M2 10h20" />
    </svg>
  );
}
