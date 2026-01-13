"use client";

import Link from "next/link";
import { useState } from "react";
import {
  ArrowLeft,
  CreditCard,
  Lock,
  Check,
  Mail,
  User,
  MapPin,
  Building,
  ChevronDown,
  ShieldCheck,
} from "lucide-react";

export default function PurchasePage() {
  const [paymentMethod, setPaymentMethod] = useState<"card" | "paypal">("card");
  const [seats, setSeats] = useState(5);
  const [cardNumber, setCardNumber] = useState("");

  const pricePerSeat = 100;
  const subtotal = seats * pricePerSeat;
  const tax = subtotal * 0.1;
  const total = subtotal + tax;

  // Format card number with spaces
  const formatCardNumber = (value: string) => {
    const v = value.replace(/\s+/g, "").replace(/[^0-9]/gi, "");
    const matches = v.match(/\d{4,16}/g);
    const match = (matches && matches[0]) || "";
    const parts = [];
    for (let i = 0, len = match.length; i < len; i += 4) {
      parts.push(match.substring(i, i + 4));
    }
    return parts.length ? parts.join(" ") : v;
  };

  // Detect card type from number
  const getCardType = (number: string) => {
    const cleaned = number.replace(/\s/g, "");
    if (/^4/.test(cleaned)) return "visa";
    if (/^5[1-5]/.test(cleaned)) return "mastercard";
    if (/^3[47]/.test(cleaned)) return "amex";
    if (/^6(?:011|5)/.test(cleaned)) return "discover";
    return null;
  };

  const cardType = getCardType(cardNumber);

  return (
    <div className="min-h-screen bg-[var(--background-alternate)]">
      {/* Header */}
      <header className="border-b border-gray-200 bg-white">
        <div className="mx-auto max-w-5xl px-6 py-4">
          <Link
            href="/sponsor"
            className="inline-flex items-center gap-2 text-sm text-gray-600 hover:text-gray-900 transition-colors"
          >
            <ArrowLeft size={16} />
            Back to plans
          </Link>
        </div>
      </header>

      <main className="mx-auto max-w-5xl px-6 py-12">
        <div className="grid lg:grid-cols-[1fr,400px] gap-12">
          {/* Left Column - Payment Form */}
          <div className="order-2 lg:order-1">
            <h1 className="font-lilita text-3xl mb-8 text-[var(--text)]">
              Complete your purchase
            </h1>

            {/* Payment Method Selection */}
            <div className="mb-8">
              <h2 className="text-sm font-semibold text-gray-700 mb-3 uppercase tracking-wide">
                Payment Method
              </h2>
              <div className="grid grid-cols-2 gap-3">
                <button
                  onClick={() => setPaymentMethod("card")}
                  className={`h-14 flex items-center justify-center gap-2.5 px-4 rounded-xl border-2 transition-all ${
                    paymentMethod === "card"
                      ? "border-[var(--accent-btn)] bg-[var(--accent-light)]"
                      : "border-gray-200 bg-white hover:border-gray-300"
                  }`}
                >
                  <CreditCard size={20} className="flex-shrink-0" />
                  <span className="font-medium leading-none">Credit Card</span>
                </button>
                <button
                  onClick={() => setPaymentMethod("paypal")}
                  className={`h-14 flex items-center justify-center gap-0.5 px-4 rounded-xl border-2 transition-all ${
                    paymentMethod === "paypal"
                      ? "border-[var(--accent-btn)] bg-[var(--accent-light)]"
                      : "border-gray-200 bg-white hover:border-gray-300"
                  }`}
                >
                  <span className="font-bold text-[#003087] text-base leading-none">
                    Pay
                  </span>
                  <span className="font-bold text-[#009cde] text-base leading-none">
                    Pal
                  </span>
                </button>
              </div>
            </div>

            {/* Card Details Form */}
            {paymentMethod === "card" && (
              <div className="space-y-6 mb-8">
                <h2 className="text-sm font-semibold text-gray-700 uppercase tracking-wide">
                  Card Details
                </h2>

                {/* Email Field */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email
                  </label>
                  <div className="relative">
                    <Mail
                      size={18}
                      className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                    />
                    <input
                      type="email"
                      placeholder="you@company.com"
                      className="w-full pl-11 pr-4 py-3 rounded-xl border border-gray-200 bg-white focus:outline-none focus:border-[var(--accent-btn)] focus:ring-2 focus:ring-[var(--accent-gold-glow)] transition-all"
                    />
                  </div>
                </div>

                {/* Cardholder Name */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Cardholder Name
                  </label>
                  <div className="relative">
                    <User
                      size={18}
                      className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                    />
                    <input
                      type="text"
                      placeholder="John Smith"
                      className="w-full pl-11 pr-4 py-3 rounded-xl border border-gray-200 bg-white focus:outline-none focus:border-[var(--accent-btn)] focus:ring-2 focus:ring-[var(--accent-gold-glow)] transition-all"
                    />
                  </div>
                </div>

                {/* Card Number */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Card Number
                  </label>
                  <div className="relative">
                    <CreditCard
                      size={18}
                      className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                    />
                    <input
                      type="text"
                      placeholder="1234 5678 9012 3456"
                      value={cardNumber}
                      onChange={(e) =>
                        setCardNumber(formatCardNumber(e.target.value))
                      }
                      maxLength={19}
                      className="w-full pl-11 pr-16 py-3 rounded-xl border border-gray-200 bg-white focus:outline-none focus:border-[var(--accent-btn)] focus:ring-2 focus:ring-[var(--accent-gold-glow)] transition-all font-mono tracking-wider"
                    />
                    {/* Card Type Badge */}
                    {cardType && (
                      <span className="absolute right-4 top-1/2 -translate-y-1/2 text-xs font-semibold uppercase text-gray-500 bg-gray-100 px-2 py-1 rounded">
                        {cardType}
                      </span>
                    )}
                  </div>
                </div>

                {/* Expiry & CVC Row */}
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Expiry Date
                    </label>
                    <input
                      type="text"
                      placeholder="MM / YY"
                      maxLength={7}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white focus:outline-none focus:border-[var(--accent-btn)] focus:ring-2 focus:ring-[var(--accent-gold-glow)] transition-all text-center font-mono tracking-wider"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      CVC
                    </label>
                    <input
                      type="text"
                      placeholder="123"
                      maxLength={4}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white focus:outline-none focus:border-[var(--accent-btn)] focus:ring-2 focus:ring-[var(--accent-gold-glow)] transition-all text-center font-mono tracking-wider"
                    />
                  </div>
                </div>

                {/* Billing Address Section */}
                <div className="pt-2">
                  <h2 className="text-sm font-semibold text-gray-700 uppercase tracking-wide mb-4">
                    Billing Address
                  </h2>

                  {/* Country Dropdown */}
                  <div className="mb-3">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Country
                    </label>
                    <div className="relative">
                      <select className="w-full px-4 py-3 pr-10 rounded-xl border border-gray-200 bg-white focus:outline-none focus:border-[var(--accent-btn)] focus:ring-2 focus:ring-[var(--accent-gold-glow)] transition-all appearance-none cursor-pointer">
                        <option value="US">United States</option>
                        <option value="CA">Canada</option>
                        <option value="GB">United Kingdom</option>
                        <option value="AU">Australia</option>
                        <option value="DE">Germany</option>
                        <option value="FR">France</option>
                        <option value="JP">Japan</option>
                        <option value="other">Other</option>
                      </select>
                      <ChevronDown
                        size={18}
                        className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none"
                      />
                    </div>
                  </div>

                  {/* Street Address */}
                  <div className="mb-3">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Street Address
                    </label>
                    <div className="relative">
                      <MapPin
                        size={18}
                        className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                      />
                      <input
                        type="text"
                        placeholder="123 Main Street"
                        className="w-full pl-11 pr-4 py-3 rounded-xl border border-gray-200 bg-white focus:outline-none focus:border-[var(--accent-btn)] focus:ring-2 focus:ring-[var(--accent-gold-glow)] transition-all"
                      />
                    </div>
                  </div>

                  {/* City, State, ZIP Row */}
                  <div className="grid grid-cols-6 gap-3">
                    <div className="col-span-3">
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        City
                      </label>
                      <div className="relative">
                        <Building
                          size={18}
                          className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                        />
                        <input
                          type="text"
                          placeholder="San Francisco"
                          className="w-full pl-11 pr-4 py-3 rounded-xl border border-gray-200 bg-white focus:outline-none focus:border-[var(--accent-btn)] focus:ring-2 focus:ring-[var(--accent-gold-glow)] transition-all"
                        />
                      </div>
                    </div>
                    <div className="col-span-1">
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        State
                      </label>
                      <input
                        type="text"
                        placeholder="CA"
                        maxLength={2}
                        className="w-full px-3 py-3 rounded-xl border border-gray-200 bg-white focus:outline-none focus:border-[var(--accent-btn)] focus:ring-2 focus:ring-[var(--accent-gold-glow)] transition-all text-center uppercase"
                      />
                    </div>
                    <div className="col-span-2">
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        ZIP Code
                      </label>
                      <input
                        type="text"
                        placeholder="94102"
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white focus:outline-none focus:border-[var(--accent-btn)] focus:ring-2 focus:ring-[var(--accent-gold-glow)] transition-all"
                      />
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* PayPal Message */}
            {paymentMethod === "paypal" && (
              <div className="mb-8 p-8 bg-white rounded-xl border border-gray-200">
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 bg-[#003087]/10 rounded-full flex items-center justify-center mb-4">
                    <ShieldCheck size={32} className="text-[#003087]" />
                  </div>
                  <h3 className="font-lilita text-lg text-gray-900 mb-2">
                    Secure PayPal Checkout
                  </h3>
                  <p className="text-gray-600 text-sm max-w-xs">
                    You will be redirected to PayPal to complete your purchase
                    securely. No card details required.
                  </p>
                </div>
              </div>
            )}

            {/* Submit Button */}
            <button className="w-full h-14 px-6 bg-[var(--accent-btn)] hover:bg-[#ffe066] active:bg-[#f5c800] text-[var(--text)] font-bold rounded-xl transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0 flex items-center justify-center gap-2.5 text-base leading-none">
              <Lock size={18} className="flex-shrink-0" />
              <span>
                {paymentMethod === "paypal"
                  ? `Continue to PayPal · $${total.toFixed(2)}`
                  : `Pay $${total.toFixed(2)}`}
              </span>
            </button>

            {/* Security Note */}
            <div className="mt-4 flex items-center justify-center gap-4 text-xs text-gray-400 leading-none">
              <span className="flex items-center gap-1.5">
                <Lock size={12} className="flex-shrink-0" />
                <span>SSL Encrypted</span>
              </span>
              <span className="w-1 h-1 bg-gray-300 rounded-full flex-shrink-0" />
              <span className="flex items-center gap-1.5">
                <ShieldCheck size={12} className="flex-shrink-0" />
                <span>Secure Payment</span>
              </span>
            </div>
          </div>

          {/* Right Column - Order Summary */}
          <div className="order-1 lg:order-2">
            <div className="bg-white rounded-2xl border border-gray-200 p-6 lg:sticky lg:top-8">
              {/* Product Info */}
              <div className="flex items-start gap-4 pb-6 border-b border-gray-100">
                <div className="w-14 h-14 bg-[var(--accent-btn)] rounded-xl flex items-center justify-center flex-shrink-0">
                  <span className="font-lilita text-2xl text-[var(--text)] leading-none">
                    O
                  </span>
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-lilita text-lg text-[var(--text)] leading-tight">
                    OPENBREW TEAM
                  </h3>
                  <p className="text-sm text-gray-500 mt-1 leading-none">
                    Monthly subscription
                  </p>
                  <span className="inline-flex items-center mt-2.5 px-2.5 py-1 bg-[var(--accent-light)] text-xs font-semibold rounded-full text-[var(--text)] leading-none">
                    Popular
                  </span>
                </div>
              </div>

              {/* Seat Selection */}
              <div className="py-6 border-b border-gray-100">
                <label className="block text-sm font-medium text-gray-700 mb-3 leading-none">
                  Number of seats
                </label>
                <div className="inline-flex items-center gap-2">
                  <button
                    onClick={() => setSeats(Math.max(5, seats - 1))}
                    disabled={seats <= 5}
                    className="w-10 h-10 rounded-lg border border-gray-200 flex items-center justify-center text-xl leading-none font-medium hover:bg-gray-50 hover:border-gray-300 disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:bg-white disabled:hover:border-gray-200 transition-all active:scale-95"
                  >
                    <span className="relative -top-px">−</span>
                  </button>
                  <div className="w-14 h-10 flex items-center justify-center bg-gray-50 rounded-lg border border-gray-200">
                    <span className="text-lg font-semibold tabular-nums leading-none">
                      {seats}
                    </span>
                  </div>
                  <button
                    onClick={() => setSeats(seats + 1)}
                    className="w-10 h-10 rounded-lg border border-gray-200 flex items-center justify-center text-xl leading-none font-medium hover:bg-gray-50 hover:border-gray-300 transition-all active:scale-95"
                  >
                    <span className="relative -top-px">+</span>
                  </button>
                </div>
                <p className="mt-2.5 text-xs text-gray-500 leading-none">
                  Minimum 5 seats
                </p>
              </div>

              {/* Price Breakdown */}
              <div className="py-6 space-y-3">
                <div className="flex justify-between items-center text-sm">
                  <span className="text-gray-600 leading-none">
                    {seats} seats × ${pricePerSeat}/mo
                  </span>
                  <span className="text-gray-900 font-medium tabular-nums leading-none">
                    ${subtotal.toFixed(2)}
                  </span>
                </div>
                <div className="flex justify-between items-center text-sm">
                  <span className="text-gray-600 leading-none">Estimated tax</span>
                  <span className="text-gray-900 font-medium tabular-nums leading-none">
                    ${tax.toFixed(2)}
                  </span>
                </div>
              </div>

              {/* Total */}
              <div className="pt-4 border-t border-gray-200">
                <div className="flex justify-between items-center">
                  <span className="font-semibold text-gray-900 leading-none">
                    Total due today
                  </span>
                  <span className="font-lilita text-2xl text-[var(--accent-dark)] leading-none tabular-nums">
                    ${total.toFixed(2)}
                  </span>
                </div>
                <p className="mt-2 text-xs text-gray-500 leading-none">
                  Billed monthly
                </p>
              </div>

              {/* Features */}
              <div className="mt-6 pt-6 border-t border-gray-100">
                <h4 className="text-sm font-semibold text-gray-700 mb-4 leading-none">
                  Included with Team plan
                </h4>
                <ul className="space-y-3">
                  {[
                    "5 seat minimum",
                    "Email support",
                    "Advanced features",
                    "Team collaboration",
                    "All future updates",
                  ].map((feature) => (
                    <li
                      key={feature}
                      className="flex items-center gap-2.5 text-sm text-gray-600 leading-none"
                    >
                      <span className="w-5 h-5 rounded-full bg-[var(--accent-light)] flex items-center justify-center flex-shrink-0">
                        <Check
                          size={12}
                          className="text-[var(--accent-dark)]"
                          strokeWidth={3}
                        />
                      </span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Mobile Sticky Footer */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 px-4 py-3 shadow-[0_-4px_20px_rgba(0,0,0,0.1)]">
        <div className="flex items-center justify-between gap-4 max-w-5xl mx-auto">
          <div className="flex flex-col gap-0.5">
            <p className="text-xs text-gray-500 leading-none">Total due today</p>
            <p className="font-lilita text-xl text-[var(--accent-dark)] leading-none">
              ${total.toFixed(2)}
            </p>
          </div>
          <button className="h-12 px-6 bg-[var(--accent-btn)] hover:bg-[#ffe066] active:bg-[#f5c800] text-[var(--text)] font-bold rounded-xl transition-all shadow-md flex items-center justify-center gap-2 text-sm leading-none">
            <Lock size={16} className="flex-shrink-0" />
            <span>{paymentMethod === "paypal" ? "PayPal" : "Pay Now"}</span>
          </button>
        </div>
      </div>

      {/* Bottom padding for mobile sticky footer */}
      <div className="lg:hidden h-24" />
    </div>
  );
}
