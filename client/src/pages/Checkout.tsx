import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowLeft, Lock, Check } from "lucide-react";
import { useState } from "react";
import { Link, useLocation } from "wouter";
import { toast } from "sonner";

/**
 * Design Philosophy: Modern Minimalist with Warm Accents
 * - Color Palette: Cream (#FAF8F3), Terracotta (#D97757), Soft Gold (#D4A574), Deep Charcoal (#2C2C2C)
 * - Typography: Playfair Display (headlines), Lato (body)
 * - Layout: Asymmetric, generous whitespace, soft rounded corners
 * - Accents: Subtle gradients, soft shadows, decorative lines
 */

interface CartItem {
  id: string;
  title: string;
  price: number;
  quantity: number;
}

export default function Checkout() {
  const [, setLocation] = useLocation();
  const [isProcessing, setIsProcessing] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState<"card" | "maya" | "gcash">(
    "maya"
  );

  // Sample cart items - in a real app, this would come from state management
  const cartItems: CartItem[] = [
    {
      id: "ebook-1",
      title: "The Complete Guide to Digital Marketing",
      price: 29.99,
      quantity: 1,
    },
    {
      id: "template-1",
      title: "Professional Business Proposal Template",
      price: 19.99,
      quantity: 1,
    },
  ];

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const tax = subtotal * 0.12; // 12% VAT
  const total = subtotal + tax;

  const handlePayment = async (e: React.FormEvent) => {
    e.preventDefault();

    if (paymentMethod === "maya") {
      setIsProcessing(true);

      // Simulate Maya payment processing
      // In a real app, you would integrate with Maya's actual API
      setTimeout(() => {
        toast.success(
          "Payment successful! Your products are being prepared for download."
        );
        setIsProcessing(false);
        // Redirect to success page
        setTimeout(() => {
          setLocation("/");
        }, 2000);
      }, 2000);
    } else {
      toast.info(`${paymentMethod.toUpperCase()} payment method selected`);
    }
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

      {/* Checkout Content */}
      <section className="py-12 md:py-16">
        <div className="container">
          <Link href="/products">
            <a className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors mb-8">
              <ArrowLeft className="w-4 h-4" />
              Back to Products
            </a>
          </Link>

          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-12">
            Checkout
          </h1>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Order Summary */}
            <div className="lg:col-span-2">
              <Card className="p-8 border-border/50 rounded-2xl mb-8">
                <h2 className="text-2xl font-bold text-foreground mb-6">
                  Order Summary
                </h2>
                <div className="space-y-4 mb-6">
                  {cartItems.map((item) => (
                    <div
                      key={item.id}
                      className="flex items-center justify-between pb-4 border-b border-border/30"
                    >
                      <div>
                        <p className="font-semibold text-foreground">{item.title}</p>
                        <p className="text-sm text-foreground/60">
                          Qty: {item.quantity}
                        </p>
                      </div>
                      <p className="font-semibold text-foreground">
                         ₱{(item.price * item.quantity).toFixed(2)}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="space-y-3 pt-6 border-t border-border/30">
                  <div className="flex justify-between text-foreground/70">
                    <span>Subtotal</span>
                    <span>${subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-foreground/70">
                    <span>Tax (12% VAT)</span>
                    <span>${tax.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-lg font-bold text-foreground pt-3 border-t border-border/30">
                    <span>Total</span>
                    <span className="text-primary">${total.toFixed(2)}</span>
                  </div>
                </div>
              </Card>

              {/* Payment Method Selection */}
              <Card className="p-8 border-border/50 rounded-2xl">
                <h2 className="text-2xl font-bold text-foreground mb-6">
                  Payment Method
                </h2>

                <div className="space-y-4 mb-8">
                  {/* Maya Option */}
                  <label className="flex items-center p-4 border-2 border-border rounded-lg cursor-pointer hover:bg-muted/50 transition-all"
                    style={{
                      borderColor: paymentMethod === "maya" ? "#D97757" : undefined,
                      backgroundColor: paymentMethod === "maya" ? "#FAF8F3" : undefined,
                    }}
                  >
                    <input
                      type="radio"
                      name="payment"
                      value="maya"
                      checked={paymentMethod === "maya"}
                      onChange={(e) => setPaymentMethod(e.target.value as "maya")}
                      className="w-4 h-4 cursor-pointer"
                    />
                    <div className="ml-4 flex-1">
                      <p className="font-semibold text-foreground">Maya</p>
                      <p className="text-sm text-foreground/60">
                        Fast and secure payment via Maya wallet
                      </p>
                    </div>
                    <div className="w-12 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded flex items-center justify-center text-white text-xs font-bold">
                      MAYA
                    </div>
                  </label>

                  {/* Credit Card Option */}
                  <label className="flex items-center p-4 border-2 border-border rounded-lg cursor-pointer hover:bg-muted/50 transition-all"
                    style={{
                      borderColor: paymentMethod === "card" ? "#D97757" : undefined,
                      backgroundColor: paymentMethod === "card" ? "#FAF8F3" : undefined,
                    }}
                  >
                    <input
                      type="radio"
                      name="payment"
                      value="card"
                      checked={paymentMethod === "card"}
                      onChange={(e) => setPaymentMethod(e.target.value as "card")}
                      className="w-4 h-4 cursor-pointer"
                    />
                    <div className="ml-4 flex-1">
                      <p className="font-semibold text-foreground">Credit/Debit Card</p>
                      <p className="text-sm text-foreground/60">
                        Visa, Mastercard, or other major cards
                      </p>
                    </div>
                    <div className="text-2xl">💳</div>
                  </label>

                  {/* GCash Option */}
                  <label className="flex items-center p-4 border-2 border-border rounded-lg cursor-pointer hover:bg-muted/50 transition-all"
                    style={{
                      borderColor: paymentMethod === "gcash" ? "#D97757" : undefined,
                      backgroundColor: paymentMethod === "gcash" ? "#FAF8F3" : undefined,
                    }}
                  >
                    <input
                      type="radio"
                      name="payment"
                      value="gcash"
                      checked={paymentMethod === "gcash"}
                      onChange={(e) => setPaymentMethod(e.target.value as "gcash")}
                      className="w-4 h-4 cursor-pointer"
                    />
                    <div className="ml-4 flex-1">
                      <p className="font-semibold text-foreground">GCash</p>
                      <p className="text-sm text-foreground/60">
                        Mobile wallet payment via GCash
                      </p>
                    </div>
                    <div className="w-12 h-8 bg-gradient-to-r from-blue-600 to-blue-400 rounded flex items-center justify-center text-white text-xs font-bold">
                      GCASH
                    </div>
                  </label>
                </div>

                {/* Payment Form */}
                <form onSubmit={handlePayment} className="space-y-6">
                  {paymentMethod === "card" && (
                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm font-semibold text-foreground mb-2">
                          Cardholder Name
                        </label>
                        <input
                          type="text"
                          placeholder="John Doe"
                          className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder:text-foreground/40 focus:outline-none focus:ring-2 focus:ring-primary/50"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-foreground mb-2">
                          Card Number
                        </label>
                        <input
                          type="text"
                          placeholder="1234 5678 9012 3456"
                          className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder:text-foreground/40 focus:outline-none focus:ring-2 focus:ring-primary/50"
                        />
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-semibold text-foreground mb-2">
                            Expiry Date
                          </label>
                          <input
                            type="text"
                            placeholder="MM/YY"
                            className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder:text-foreground/40 focus:outline-none focus:ring-2 focus:ring-primary/50"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-semibold text-foreground mb-2">
                            CVV
                          </label>
                          <input
                            type="text"
                            placeholder="123"
                            className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder:text-foreground/40 focus:outline-none focus:ring-2 focus:ring-primary/50"
                          />
                        </div>
                      </div>
                    </div>
                  )}

                  {paymentMethod === "maya" && (
                    <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
                      <p className="text-sm text-blue-900">
                        You'll be redirected to Maya to complete your payment securely.
                      </p>
                    </div>
                  )}

                  {paymentMethod === "gcash" && (
                    <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
                      <p className="text-sm text-blue-900">
                        You'll receive a GCash payment link to complete your transaction.
                      </p>
                    </div>
                  )}

                  <div className="flex items-center gap-2 text-sm text-foreground/70">
                    <Lock className="w-4 h-4" />
                    <span>Your payment information is secure and encrypted</span>
                  </div>

                  <Button
                    type="submit"
                    disabled={isProcessing}
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground rounded-lg font-semibold py-3 flex items-center justify-center gap-2 transition-all"
                  >
                    {isProcessing ? (
                      <>
                        <span className="animate-spin">⏳</span>
                        Processing Payment...
                      </>
                    ) : (
                      <>
                        <Check className="w-4 h-4" />
                        Complete Purchase - ${total.toFixed(2)}
                      </>
                    )}
                  </Button>
                </form>
              </Card>
            </div>

            {/* Order Details Sidebar */}
            <div className="lg:col-span-1">
              <Card className="p-6 border-border/50 rounded-2xl sticky top-24">
                <h3 className="text-lg font-bold text-foreground mb-4">
                  Order Details
                </h3>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-foreground/70">Items</span>
                    <span className="font-semibold text-foreground">
                      {cartItems.length}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-foreground/70">Subtotal</span>
                    <span className="font-semibold text-foreground">
                      ${subtotal.toFixed(2)}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-foreground/70">Tax</span>
                    <span className="font-semibold text-foreground">
                      ${tax.toFixed(2)}
                    </span>
                  </div>
                  <div className="border-t border-border/30 pt-3 flex justify-between">
                    <span className="font-bold text-foreground">Total</span>
                    <span className="font-bold text-primary text-lg">
                      ${total.toFixed(2)}
                    </span>
                  </div>
                </div>

                <div className="mt-6 p-4 bg-green-50 border border-green-200 rounded-lg">
                  <div className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <div className="text-sm">
                      <p className="font-semibold text-green-900">
                        30-Day Money Back Guarantee
                      </p>
                      <p className="text-green-800 text-xs mt-1">
                        Not satisfied? Get a full refund within 30 days.
                      </p>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border mt-20 py-12">
        <div className="container">
          <div className="text-center text-foreground/60 text-sm">
            <p>&copy; 2026 WB Connect. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
