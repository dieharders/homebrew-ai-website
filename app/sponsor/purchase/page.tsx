"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import {
  ArrowLeft,
  Lock,
  Check,
  ChevronDown,
  CreditCard,
  Minus,
  Plus,
} from "lucide-react";

// Card brand SVG components
const VisaIcon = () => (
  <svg
    viewBox="0 0 38 24"
    width="32"
    height="20"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect fill="#fff" width="38" height="24" rx="3" />
    <path
      d="M15.3 15.6h-2.4l1.5-9.2h2.4l-1.5 9.2zm-4.7 0l-2.3-6.3-.3 1.4-.8-4.3h-2.6l-.1.3c1.3.3 2.2.7 2.9 1.2l2.1 7.7h2.5l3.8-9.2h-2.5l-2.7 9.2zm16.9-9.2h-2l-.3 1.4-2.1-1.1c-.3-.2-.7-.3-1.1-.3-1.2 0-2.6 1.2-2.6 3.5 0 2.2 1.3 3.4 2.6 3.4.4 0 .8-.1 1.1-.3l2.1-1.1.3 1.4h2l1.5-6.9h-1.5zm-3.9 5.1c-.6 0-1.2-.5-1.2-1.6s.6-1.6 1.2-1.6c.6 0 1.2.5 1.2 1.6s-.6 1.6-1.2 1.6zm10.2-5.4c-.5-.2-1.3-.3-2.2-.3-2.5 0-4.2 1.3-4.2 3.2 0 1.4 1.3 2.2 2.3 2.6 1 .5 1.4.8 1.4 1.2 0 .6-.8 1-1.6 1-.8 0-1.7-.1-2.4-.5l-.3-.2-.4 2.2c.6.3 1.7.5 2.9.5 2.6 0 4.3-1.3 4.3-3.3 0-1.1-.7-2-2.2-2.7-.9-.4-1.5-.7-1.5-1.2 0-.4.5-.8 1.5-.8.7 0 1.4.1 1.9.4l.2.1.3-2.2z"
      fill="#1a1f71"
    />
  </svg>
);

const MastercardIcon = () => (
  <svg
    viewBox="0 0 38 24"
    width="32"
    height="20"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect fill="#fff" width="38" height="24" rx="3" />
    <circle fill="#eb001b" cx="15" cy="12" r="7" />
    <circle fill="#f79e1b" cx="23" cy="12" r="7" />
    <path
      fill="#ff5f00"
      d="M19 5.8c1.7 1.3 2.8 3.4 2.8 5.7s-1.1 4.4-2.8 5.7c-1.7-1.3-2.8-3.4-2.8-5.7s1.1-4.4 2.8-5.7z"
    />
  </svg>
);

const AmexIcon = () => (
  <svg
    viewBox="0 0 38 24"
    width="32"
    height="20"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect fill="#006fcf" width="38" height="24" rx="3" />
    <path
      d="M8.5 11.3l-.7-1.8h-1l1.3 3.2h.8l1.3-3.2h-1l-.7 1.8zm3.1 1.4h2.4v-.7h-1.6v-.6h1.6v-.7h-1.6v-.5h1.6v-.7h-2.4v3.2zm3.4 0h.8v-1.2h.8l.7 1.2h1l-.8-1.3c.4-.2.7-.5.7-1 0-.7-.5-1.1-1.3-1.1h-1.9v3.4zm.8-2.7h.9c.3 0 .5.2.5.4 0 .3-.2.5-.5.5h-.9v-.9zm3.1 2.7h.8v-3.2h-.8v3.2zm1.8 0h.8v-1.3l1.3 1.3h1.1l-1.5-1.4 1.4-1.8h-1.1l-1.2 1.6v-1.6h-.8v3.2zm5.1 0h.8l.3-.8h1.4l.3.8h.9l-1.4-3.2h-.9l-1.4 3.2zm1.4-1.5l.4-1.1.4 1.1h-.8zm3.2 1.5h.8v-2.4l1.5 2.4h.8v-3.2h-.8v2.2l-1.4-2.2h-.9v3.2z"
      fill="#fff"
    />
  </svg>
);

const DiscoverIcon = () => (
  <svg
    viewBox="0 0 38 24"
    width="32"
    height="20"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect fill="#fff" width="38" height="24" rx="3" />
    <path
      d="M27 12c0 3.3-2.7 6-6 6s-6-2.7-6-6 2.7-6 6-6 6 2.7 6 6z"
      fill="#f47216"
    />
    <path
      d="M3 9.5h1.6c1.3 0 2.2.9 2.2 2.2s-.9 2.2-2.2 2.2H3v-4.4zm.8 3.7h.7c.9 0 1.4-.6 1.4-1.5s-.5-1.5-1.4-1.5h-.7v3zm4.2.7h.8v-4.4h-.8v4.4zm2.3-1.6c0 .5.4.8 1.1.9l.6.1c.4.1.6.2.6.4 0 .3-.3.4-.7.4-.5 0-.8-.2-.9-.5h-.8c.1.7.7 1.2 1.7 1.2.9 0 1.6-.4 1.6-1.1 0-.6-.4-.9-1.2-1l-.5-.1c-.4-.1-.6-.2-.6-.4 0-.2.2-.4.6-.4.4 0 .7.2.8.5h.8c-.1-.7-.7-1.1-1.6-1.1-.9 0-1.5.5-1.5 1.1zm5.4 1.4c-.5 0-.9-.3-1-1h2.6c0-.1 0-.3 0-.4 0-1.2-.7-1.9-1.6-1.9s-1.8.8-1.8 2 .7 2 1.7 2c.9 0 1.5-.5 1.7-1.2h-.8c-.1.3-.4.5-.8.5zm-.1-2.6c.4 0 .7.3.8.9h-1.7c.2-.6.5-.9.9-.9zm6.9 2.8l-1.2-4.4h-.9l1.7 4.4h.8l1.7-4.4h-.9l-1.2 4.4zm3.3 0h2.4v-.7h-1.6v-.9h1.5v-.7h-1.5v-.9h1.6v-.7h-2.4v4.4zm3.4 0h.8v-1.6h.6l1 1.6h1l-1.1-1.7c.5-.2.9-.6.9-1.2 0-.8-.6-1.3-1.4-1.3h-1.8v4.2zm.8-3.5h.8c.4 0 .6.2.6.6s-.2.6-.6.6h-.8v-1.2z"
      fill="#231f20"
    />
  </svg>
);

export default function PurchasePage() {
  const [seats, setSeats] = useState(5);
  const [cardNumber, setCardNumber] = useState("");
  const [expiry, setExpiry] = useState("");
  const [cvc, setCvc] = useState("");
  const [email, setEmail] = useState("");
  const [nameOnCard, setNameOnCard] = useState("");
  const [country, setCountry] = useState("US");
  const [saveInfo, setSaveInfo] = useState(false);

  const pricePerSeat = 20;
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

  // Format expiry as MM / YY
  const formatExpiry = (value: string) => {
    const v = value.replace(/\s+/g, "").replace(/[^0-9]/gi, "");
    if (v.length >= 2) {
      return v.slice(0, 2) + " / " + v.slice(2, 4);
    }
    return v;
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
    <div className="flex min-h-screen flex-col bg-[var(--background-alternate)]">
      {/* Main Content */}
      <main className="flex flex-1 items-start py-8 lg:items-center lg:py-12">
        <div className="mx-auto grid min-h-[600px] w-full max-w-6xl lg:grid-cols-2">
          {/* Left Column - Order Summary */}
          <div className="order-1 bg-white px-6 py-8 lg:order-1 lg:bg-[var(--background-alternate)] lg:px-12 lg:py-10 lg:pr-16">
            {/* Back Link */}
            <div className="mb-10">
              <Link
                href="/sponsor"
                className="flex size-10 items-center justify-center rounded-full bg-gray-100 transition-colors hover:bg-gray-200"
              >
                <ArrowLeft size={20} className="text-gray-600" />
              </Link>
            </div>

            {/* Pay Header */}
            <div className="mb-8">
              <div className="mb-4 flex items-center justify-between">
                <span className="text-xl text-gray-600">
                  Pay to Openbrew.ai
                </span>
                <div className="flex size-12 items-center justify-center rounded-lg bg-[var(--accent-btn)]">
                  <Image
                    src="/cup-icon.svg"
                    alt="Openbrew"
                    width={36}
                    height={36}
                  />
                </div>
              </div>
              <h1 className="font-lilita text-4xl text-[var(--text)] lg:text-5xl">
                ${total.toFixed(2)}
              </h1>
            </div>

            {/* Line Items */}
            <div className="space-y-5 border-t border-gray-200 pt-6">
              {/* Team Plan Item */}
              <div className="flex items-start justify-between">
                <div className="flex flex-col gap-1">
                  <p className="font-lilita text-lg font-medium text-gray-900">
                    TEAM LICENSE
                  </p>
                  <p className="text-sm text-gray-500">
                    Qty {seats} &middot; ${pricePerSeat}/seat
                  </p>
                </div>
                <p className="font-medium tabular-nums text-gray-900">
                  ${subtotal.toFixed(2)}
                </p>
              </div>

              {/* Seat Selector */}
              <div className="flex items-center gap-4 py-1">
                <span className="text-sm text-gray-600">Seats:</span>
                <div className="inline-flex items-center overflow-hidden rounded-lg border border-gray-200 bg-white">
                  <button
                    onClick={() => setSeats(Math.max(5, seats - 1))}
                    disabled={seats <= 5}
                    className="flex size-10 cursor-pointer items-center justify-center text-lg font-bold text-gray-600 transition-colors hover:bg-gray-50 hover:text-gray-900 disabled:cursor-not-allowed disabled:opacity-40"
                  >
                    <Minus size={16} />
                  </button>
                  <span className="flex h-10 w-12 items-center justify-center border-x border-gray-200 bg-gray-50 text-sm font-semibold tabular-nums">
                    {seats}
                  </span>
                  <button
                    onClick={() => setSeats(seats + 1)}
                    className="flex size-10 cursor-pointer items-center justify-center text-lg font-bold text-gray-600 transition-colors hover:bg-gray-50 hover:text-gray-900"
                  >
                    <Plus size={16} />
                  </button>
                </div>
                <span className="text-xs text-gray-400">min 5</span>
              </div>
            </div>

            {/* Subtotal & Tax */}
            <div className="mt-6 space-y-3 border-t border-gray-200 pt-5">
              <div className="flex justify-between text-sm">
                <span className="text-gray-500">Subtotal</span>
                <span className="tabular-nums text-gray-900">
                  ${subtotal.toFixed(2)}
                </span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-500">Estimated tax</span>
                <span className="tabular-nums text-gray-900">
                  ${tax.toFixed(2)}
                </span>
              </div>
            </div>

            {/* Total Due */}
            <div className="mt-5 border-t border-gray-200 pt-5">
              <div className="flex items-center justify-between">
                <span className="text-base font-semibold text-gray-900">
                  Total due
                </span>
                <span className="font-lilita text-2xl tabular-nums text-[var(--text)]">
                  ${total.toFixed(2)}
                </span>
              </div>
            </div>

            {/* Features List */}
            <div className="mt-10 border-t border-gray-200 pt-6">
              <p className="mb-4 text-xs font-semibold uppercase tracking-wider text-gray-500">
                Included
              </p>
              <ul className="mt-2 space-y-3">
                {[
                  "Discord access",
                  "Email support",
                  "GitHub repository access",
                  "No data collection",
                  "All future updates",
                ].map((feature) => (
                  <li
                    key={feature}
                    className="flex items-center gap-3 text-sm text-gray-600"
                  >
                    <span className="flex size-5 shrink-0 items-center justify-center rounded bg-[var(--accent-light)]">
                      <Check
                        size={14}
                        className="text-[var(--accent-dark)]"
                        strokeWidth={3}
                      />
                    </span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Powered By Footer */}
            <div className="mt-10 flex items-center gap-4 border-t border-gray-100 pt-6 text-xs text-gray-400">
              <span>
                Powered by{" "}
                <span className="font-semibold text-gray-500">stripe</span>
              </span>
              <span className="text-gray-300">|</span>
              <Link href="#" className="transition-colors hover:text-gray-600">
                Terms
              </Link>
              <Link href="#" className="transition-colors hover:text-gray-600">
                Privacy
              </Link>
            </div>
          </div>

          {/* Right Column - Payment Form */}
          <div className="order-2 border-gray-200 bg-white px-6 py-8 lg:order-2 lg:border-l lg:px-12 lg:py-10 lg:pl-16">
            <h2 className="mb-8 text-xl font-semibold text-gray-900">
              Pay with card
            </h2>

            <div className="space-y-6">
              {/* Email Field */}
              <div>
                <label className="mb-2 block text-sm font-medium text-gray-600">
                  Email
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-gray-900 transition-all placeholder:text-gray-400 focus:border-[var(--accent-btn)] focus:outline-none focus:ring-2 focus:ring-[var(--accent-gold-glow)]"
                />
              </div>

              {/* Card Information */}
              <div>
                <label className="mb-2 block text-sm font-medium text-gray-600">
                  Card information
                </label>
                <div className="overflow-hidden rounded-lg border border-gray-300 transition-all focus-within:border-[var(--accent-btn)] focus-within:ring-2 focus-within:ring-[var(--accent-gold-glow)]">
                  {/* Card Number Row */}
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="1234 1234 1234 1234"
                      value={cardNumber}
                      onChange={(e) =>
                        setCardNumber(formatCardNumber(e.target.value))
                      }
                      maxLength={19}
                      className="w-full border-0 bg-white px-4 py-3 pr-36 font-mono text-sm tracking-wider text-gray-900 placeholder:text-gray-400 focus:outline-none"
                    />
                    {/* Card Brand Icons */}
                    <div className="absolute right-3 top-1/2 flex -translate-y-1/2 items-center gap-1.5">
                      <div
                        className={`transition-opacity ${cardType === "visa" ? "opacity-100" : "opacity-25"}`}
                      >
                        <VisaIcon />
                      </div>
                      <div
                        className={`transition-opacity ${cardType === "mastercard" ? "opacity-100" : "opacity-25"}`}
                      >
                        <MastercardIcon />
                      </div>
                      <div
                        className={`transition-opacity ${cardType === "amex" ? "opacity-100" : "opacity-25"}`}
                      >
                        <AmexIcon />
                      </div>
                      <div
                        className={`transition-opacity ${cardType === "discover" ? "opacity-100" : "opacity-25"}`}
                      >
                        <DiscoverIcon />
                      </div>
                    </div>
                  </div>
                  {/* Expiry & CVC Row */}
                  <div className="flex border-t border-gray-300">
                    <input
                      type="text"
                      placeholder="MM / YY"
                      value={expiry}
                      onChange={(e) => setExpiry(formatExpiry(e.target.value))}
                      maxLength={7}
                      className="flex-1 border-0 border-r border-gray-300 bg-white px-4 py-3 font-mono text-sm tracking-wider text-gray-900 placeholder:text-gray-400 focus:outline-none"
                    />
                    <div className="relative flex-1">
                      <input
                        type="text"
                        placeholder="CVC"
                        value={cvc}
                        onChange={(e) =>
                          setCvc(e.target.value.replace(/\D/g, "").slice(0, 4))
                        }
                        maxLength={4}
                        className="w-full border-0 bg-white px-4 py-3 pr-12 font-mono text-sm tracking-wider text-gray-900 placeholder:text-gray-400 focus:outline-none"
                      />
                      <CreditCard
                        size={18}
                        className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Name on Card */}
              <div>
                <label className="mb-2 block text-sm font-medium text-gray-600">
                  Name on card
                </label>
                <input
                  type="text"
                  value={nameOnCard}
                  onChange={(e) => setNameOnCard(e.target.value)}
                  className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-gray-900 transition-all placeholder:text-gray-400 focus:border-[var(--accent-btn)] focus:outline-none focus:ring-2 focus:ring-[var(--accent-gold-glow)]"
                />
              </div>

              {/* Country/Region */}
              <div>
                <label className="mb-2 block text-sm font-medium text-gray-600">
                  Country or region
                </label>
                <div className="relative">
                  <select
                    value={country}
                    onChange={(e) => setCountry(e.target.value)}
                    className="w-full cursor-pointer appearance-none rounded-lg border border-gray-300 bg-white px-4 py-3 pr-12 text-gray-900 transition-all focus:border-[var(--accent-btn)] focus:outline-none focus:ring-2 focus:ring-[var(--accent-gold-glow)]"
                  >
                    <option value="US">United States</option>
                    <option value="CA">Canada</option>
                    <option value="GB">United Kingdom</option>
                    <option value="AU">Australia</option>
                    <option value="DE">Germany</option>
                    <option value="FR">France</option>
                    <option value="JP">Japan</option>
                    <option value="RU">Russia</option>
                    <option value="other">Other</option>
                  </select>
                  <ChevronDown
                    size={18}
                    className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-gray-400"
                  />
                </div>
              </div>

              {/* Save Info Checkbox */}
              <div className="flex items-start gap-3 rounded-lg border border-gray-200 bg-gray-50 px-4 py-3">
                <input
                  type="checkbox"
                  id="saveInfo"
                  checked={saveInfo}
                  onChange={(e) => setSaveInfo(e.target.checked)}
                  className="mt-0.5 size-5 cursor-pointer rounded border-gray-300 text-[var(--accent-btn)] focus:ring-[var(--accent-btn)]"
                />
                <label htmlFor="saveInfo" className="flex-1 cursor-pointer">
                  <span className="block text-sm font-medium text-gray-700">
                    Save my info for secure 1-click checkout
                  </span>
                  <span className="mt-1 block text-xs text-gray-500">
                    Pay faster on Openbrew and thousands of sites.
                  </span>
                </label>
              </div>

              {/* Pay Button */}
              <button className="mt-2 flex h-14 w-full cursor-pointer items-center justify-center gap-2.5 rounded-lg bg-[var(--accent-btn)] px-6 text-base font-bold text-[var(--text)] shadow-md transition-all hover:-translate-y-0.5 hover:bg-[#ffe066] hover:shadow-lg active:translate-y-0 active:bg-[#f5c800]">
                <Lock size={18} />
                <span>Pay</span>
              </button>
            </div>
          </div>
        </div>
      </main>

      {/* Mobile Sticky Footer */}
      <div className="fixed inset-x-0 bottom-0 border-t border-gray-200 bg-white px-5 py-4 shadow-[0_-4px_24px_rgba(0,0,0,0.1)] lg:hidden">
        <div className="mx-auto flex max-w-5xl items-center justify-between gap-4">
          <div className="flex flex-col gap-1">
            <p className="text-xs font-medium text-gray-500">Total due</p>
            <p className="font-lilita text-2xl text-[var(--text)]">
              ${total.toFixed(2)}
            </p>
          </div>
          <button className="flex h-12 cursor-pointer items-center justify-center gap-2 rounded-lg bg-[var(--accent-btn)] px-8 text-base font-bold text-[var(--text)] shadow-md transition-all hover:bg-[#ffe066] active:bg-[#f5c800]">
            <Lock size={16} />
            <span>Pay</span>
          </button>
        </div>
      </div>

      {/* Bottom padding for mobile sticky footer */}
      <div className="h-24 lg:hidden" />
    </div>
  );
}
