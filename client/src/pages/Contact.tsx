import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { useState } from "react";
import { Link } from "wouter";
import { toast } from "sonner";

/**
 * Design Philosophy: Modern Minimalist with Warm Accents
 * - Color Palette: Cream (#FAF8F3), Terracotta (#D97757), Soft Gold (#D4A574), Deep Charcoal (#2C2C2C)
 * - Typography: Playfair Display (headlines), Lato (body)
 * - Layout: Asymmetric, generous whitespace, soft rounded corners
 * - Accents: Subtle gradients, soft shadows, decorative lines
 */

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      toast.error("Please fill in all fields");
      return;
    }

    setIsSubmitting(true);
    // Simulate form submission
    setTimeout(() => {
      toast.success("Thank you for your message! We'll get back to you soon.");
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
      setIsSubmitting(false);
    }, 1000);
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
            <Link href="/contact">
              <span className="text-foreground/70 hover:text-foreground transition-colors cursor-pointer">
                Contact
              </span>
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Get in Touch
            </h1>
            <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
              Have questions about our products? Want to collaborate? We'd love to hear from you!
            </p>
          </div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-12 md:py-20">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Contact Info Cards */}
            <div className="lg:col-span-1 space-y-6">
              <Card className="p-6 border-border/50 rounded-2xl hover:shadow-lg transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-amber-100 to-orange-100 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-amber-700" />
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground mb-2">Email</h3>
                    <p className="text-foreground/60 text-sm">
                      <a href="mailto:wbconnect.official@gmail.com" className="hover:text-primary transition-colors">
                        wbconnect.official@gmail.com
                      </a>
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-6 border-border/50 rounded-2xl hover:shadow-lg transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-orange-100 to-red-100 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-orange-700" />
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground mb-2">Phone</h3>
                    <p className="text-foreground/60 text-sm">
                      <a href="tel:+63 909 448 4370" className="hover:text-primary transition-colors">
                        +63 909 448 4370
                      </a>
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-6 border-border/50 rounded-2xl hover:shadow-lg transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-yellow-100 to-amber-100 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-yellow-700" />
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground mb-2">Location</h3>
                    <p className="text-foreground/60 text-sm">
                      The Bloomfield Enclave<br />
                      Magalang, Pampanga, Philippines
                    </p>
                  </div>
                </div>
              </Card>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card className="p-8 md:p-10 border-border/50 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-foreground mb-2">
                        Full Name
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="John Doe"
                        className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder:text-foreground/40 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-foreground mb-2">
                        Email Address
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="john@example.com"
                        className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder:text-foreground/40 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-foreground mb-2">
                      Subject
                    </label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="How can we help?"
                      className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder:text-foreground/40 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-foreground mb-2">
                      Message
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us more about your inquiry..."
                      rows={6}
                      className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder:text-foreground/40 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all resize-none"
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground rounded-lg font-semibold py-3 flex items-center justify-center gap-2 transition-all"
                  >
                    <Send className="w-4 h-4" />
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-3xl mx-4 md:mx-0 my-12">
        <div className="container">
          <div className="text-center space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Explore Our Products
            </h2>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
              Browse our complete collection of digital products and find exactly what you need.
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
