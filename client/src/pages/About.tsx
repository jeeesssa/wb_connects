import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ChevronDown } from "lucide-react";
import { useState } from "react";
import { Link } from "wouter";

/**
 * Design Philosophy: Modern Minimalist with Warm Accents
 * - Color Palette: Cream (#FAF8F3), Terracotta (#D97757), Soft Gold (#D4A574), Deep Charcoal (#2C2C2C)
 * - Typography: Playfair Display (headlines), Lato (body)
 * - Layout: Asymmetric, generous whitespace, soft rounded corners
 * - Accents: Subtle gradients, soft shadows, decorative lines
 */

interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

interface Testimonial {
  id: string;
  name: string;
  role: string;
  content: string;
  rating: number;
}

const faqs: FAQItem[] = [
  {
    id: "faq-1",
    question: "What file formats are your digital products available in?",
    answer:
      "Our digital products are available in multiple formats including PDF, EPUB, DOCX, XLSX, and more depending on the product type. Each product listing specifies the available formats. You can download your purchased products immediately after payment.",
  },
  {
    id: "faq-2",
    question: "Can I get a refund if I'm not satisfied with the product?",
    answer:
      "We offer a 30-day money-back guarantee on all our digital products. If you're not satisfied for any reason, simply contact our support team within 30 days of purchase and we'll process a full refund.",
  },
  {
    id: "faq-3",
    question: "How do I access my purchased products?",
    answer:
      "After completing your purchase, you'll receive a confirmation email with download links to all your products. You can also access your downloads anytime by logging into your account and visiting your library.",
  },
  {
    id: "faq-4",
    question: "Are there any licensing restrictions on the products?",
    answer:
      "Most of our products are for personal use. Commercial licenses are available for select products at a premium price. Please check the product details or contact us for specific licensing information.",
  },
  {
    id: "faq-5",
    question: "Do you offer bulk discounts?",
    answer:
      "Yes! We offer special pricing for bulk purchases and team licenses. If you're interested in purchasing multiple licenses, please contact our sales team at contact@wbconnect.com for a custom quote.",
  },
  {
    id: "faq-6",
    question: "What payment methods do you accept?",
    answer:
      "We accept all major payment methods including credit cards, debit cards, and digital wallets through our secure Maya payment gateway. All transactions are encrypted and secure.",
  },
];

const testimonials: Testimonial[] = [
  {
    id: "testimonial-1",
    name: "Sarah Martinez",
    role: "Digital Marketing Manager",
    content:
      "The Digital Marketing guide was exactly what I needed to upskill my team. The strategies are practical and immediately applicable. Highly recommend!",
    rating: 5,
  },
  {
    id: "testimonial-2",
    name: "James Chen",
    role: "Freelance Developer",
    content:
      "The web development essentials course is comprehensive and well-structured. Perfect for both beginners and intermediate developers.",
    rating: 5,
  },
  {
    id: "testimonial-3",
    name: "Emma Thompson",
    role: "Teacher",
    content:
      "The kids learning materials are engaging and educational. My students absolutely love them! Great quality and fantastic value.",
    rating: 5,
  },
  {
    id: "testimonial-4",
    name: "Michael Rodriguez",
    role: "Business Owner",
    content:
      "The business templates saved me hours of work. Professional quality and easy to customize. Best investment for my business.",
    rating: 5,
  },
];

export default function About() {
  const [expandedFAQ, setExpandedFAQ] = useState<string | null>(null);

  const toggleFAQ = (id: string) => {
    setExpandedFAQ(expandedFAQ === id ? null : id);
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
          <div className="flex items-center gap-4">
            <Link href="/products">
              <span className="text-foreground/70 hover:text-foreground transition-colors cursor-pointer">
                Products
              </span>
            </Link>
            <Link href="/about">
              <span className="text-foreground/70 hover:text-foreground transition-colors cursor-pointer">
                About
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

      {/* About Hero Section */}
      <section className="py-16 md:py-24 border-b border-border">
        <div className="container">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              About WB Connect
            </h1>
            <p className="text-lg text-foreground/70 mb-8">
              We're passionate about creating high-quality digital products that inspire, educate, and empower. Our mission is to make premium learning materials and resources accessible to everyone.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="p-6 border-border/50 rounded-2xl">
                <div className="text-3xl font-bold text-primary mb-2">12+</div>
                <p className="text-foreground/70">Premium Products</p>
              </Card>
              <Card className="p-6 border-border/50 rounded-2xl">
                <div className="text-3xl font-bold text-primary mb-2">2000+</div>
                <p className="text-foreground/70">Happy Customers</p>
              </Card>
              <Card className="p-6 border-border/50 rounded-2xl">
                <div className="text-3xl font-bold text-primary mb-2">4.8★</div>
                <p className="text-foreground/70">Average Rating</p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8">
              Our Story
            </h2>
            <div className="space-y-6 text-foreground/70 leading-relaxed">
              <p>
                WB Connect was founded with a simple belief: quality educational and professional resources should be accessible to everyone. We started as a small team of content creators, educators, and designers who saw a gap in the market for affordable, high-quality digital products.
              </p>
              <p>
                Over the years, we've grown into a trusted platform serving thousands of customers worldwide. Our products span e-books, templates, learning materials, and more—all designed with care and expertise.
              </p>
              <p>
                Today, we continue our mission to empower individuals and businesses through quality digital products. Whether you're a student, professional, or entrepreneur, we have something to help you succeed.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">
            What Our Customers Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial) => (
              <Card
                key={testimonial.id}
                className="p-8 border-border/50 rounded-2xl hover:shadow-lg transition-shadow"
              >
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-amber-400">
                      ★
                    </span>
                  ))}
                </div>
                <p className="text-foreground/80 mb-6 leading-relaxed">
                  "{testimonial.content}"
                </p>
                <div>
                  <p className="font-bold text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-foreground/60">{testimonial.role}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-24">
        <div className="container max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            {faqs.map((faq) => (
              <Card
                key={faq.id}
                className="border-border/50 rounded-2xl overflow-hidden hover:shadow-md transition-shadow"
              >
                <button
                  onClick={() => toggleFAQ(faq.id)}
                  className="w-full p-6 flex items-center justify-between hover:bg-muted/50 transition-colors"
                >
                  <h3 className="text-lg font-semibold text-foreground text-left">
                    {faq.question}
                  </h3>
                  <ChevronDown
                    className={`w-5 h-5 text-foreground/60 flex-shrink-0 transition-transform ${
                      expandedFAQ === faq.id ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {expandedFAQ === faq.id && (
                  <div className="px-6 pb-6 border-t border-border/30">
                    <p className="text-foreground/70 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-3xl mx-4 md:mx-0 my-12">
        <div className="container">
          <div className="text-center space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Ready to Get Started?
            </h2>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
              Explore our collection of premium digital products and find exactly what you need.
            </p>
            <Link href="/products">
              <Button className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-lg">
                Browse Products
              </Button>
            </Link>
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
                  <Link href="/about">
                    <span className="hover:text-primary transition-colors cursor-pointer">
                      About
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
