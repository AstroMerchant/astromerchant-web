import Link from "next/link";
import { Rocket, Shield, Zap, Globe, ArrowRight, CheckCircle } from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "Instant Settlement",
    description:
      "Payments settle in seconds on the Stellar network. No more waiting days for funds to arrive.",
  },
  {
    icon: Shield,
    title: "Secure & Compliant",
    description:
      "Enterprise-grade security with end-to-end encryption, fraud detection, and regulatory compliance.",
  },
  {
    icon: Globe,
    title: "Global Reach",
    description:
      "Accept payments from anywhere in the world. Support for multiple Stellar assets and fiat on-ramps.",
  },
  {
    icon: Rocket,
    title: "Low Fees",
    description:
      "Fraction of a cent per transaction. No hidden fees, no monthly minimums. Pay only what you use.",
  },
];

const benefits = [
  "No chargebacks on Stellar payments",
  "Real-time transaction monitoring",
  "Automated invoice generation",
  "Comprehensive analytics dashboard",
  "Developer-friendly REST API",
];

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white">
      <header className="border-b border-surface-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-2">
              <Rocket className="h-6 w-6 text-primary-600" />
              <span className="text-lg font-bold text-surface-900">
                AstroMerchant
              </span>
            </div>
            <nav className="hidden md:flex items-center gap-8">
              <Link
                href="#features"
                className="text-sm text-surface-600 hover:text-surface-900"
              >
                Features
              </Link>
              <Link
                href="#benefits"
                className="text-sm text-surface-600 hover:text-surface-900"
              >
                Benefits
              </Link>
            </nav>
            <div className="flex items-center gap-3">
              <Link
                href="/login"
                className="text-sm font-medium text-surface-600 hover:text-surface-900 px-4 py-2"
              >
                Sign In
              </Link>
              <Link
                href="/register"
                className="inline-flex items-center gap-2 bg-primary-600 text-white text-sm font-medium px-4 py-2 rounded-lg hover:bg-primary-700 transition-colors"
              >
                Get Started
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </header>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold text-surface-900 tracking-tight">
            Accept Stellar Payments with{" "}
            <span className="text-primary-600">Ease</span>
          </h1>
          <p className="mt-6 text-lg md:text-xl text-surface-500 leading-relaxed">
            The modern payment gateway built on the Stellar network. Start
            accepting XLM and other Stellar assets in minutes with simple
            integration.
          </p>
          <div className="mt-10 flex items-center justify-center gap-4">
            <Link
              href="/register"
              className="inline-flex items-center gap-2 bg-primary-600 text-white font-medium px-6 py-3 rounded-lg hover:bg-primary-700 transition-colors shadow-lg shadow-primary-200"
            >
              Start Accepting Payments
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="#features"
              className="inline-flex items-center gap-2 border border-surface-300 text-surface-700 font-medium px-6 py-3 rounded-lg hover:bg-surface-50 transition-colors"
            >
              Learn More
            </Link>
          </div>
          <p className="mt-4 text-sm text-surface-400">
            No credit card required. Free to get started.
          </p>
        </div>
      </section>

      <section id="features" className="bg-surface-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-surface-900">
              Everything You Need to Accept Payments
            </h2>
            <p className="mt-4 text-lg text-surface-500 max-w-2xl mx-auto">
              A complete payment infrastructure for your business, powered by
              the Stellar network.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="bg-white rounded-xl p-6 border border-surface-200 hover:shadow-lg transition-shadow"
              >
                <div className="w-12 h-12 rounded-lg bg-primary-50 flex items-center justify-center mb-4">
                  <feature.icon className="h-6 w-6 text-primary-600" />
                </div>
                <h3 className="text-lg font-semibold text-surface-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm text-surface-500 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="benefits" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-surface-900">
                Built for Modern Businesses
              </h2>
              <p className="mt-4 text-lg text-surface-500">
                Join thousands of merchants who trust AstroMerchant for their
                payment processing needs.
              </p>
              <ul className="mt-8 space-y-4">
                {benefits.map((benefit) => (
                  <li key={benefit} className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                    <span className="text-surface-700">{benefit}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-10">
                <Link
                  href="/register"
                  className="inline-flex items-center gap-2 bg-primary-600 text-white font-medium px-6 py-3 rounded-lg hover:bg-primary-700 transition-colors"
                >
                  Get Started Free
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
            <div className="bg-surface-50 rounded-2xl p-8 border border-surface-200">
              <div className="text-center">
                <div className="text-5xl font-bold text-primary-600">99.9%</div>
                <p className="mt-2 text-surface-500">Uptime Guarantee</p>
              </div>
              <div className="grid grid-cols-2 gap-8 mt-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-surface-900">50M+</div>
                  <p className="mt-1 text-sm text-surface-500">
                    Transactions Processed
                  </p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-surface-900">10K+</div>
                  <p className="mt-1 text-sm text-surface-500">
                    Active Merchants
                  </p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-surface-900">150+</div>
                  <p className="mt-1 text-sm text-surface-500">Countries</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-surface-900">0.01</div>
                  <p className="mt-1 text-sm text-surface-500">
                    Avg. Fee per TX
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-primary-600 py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Ready to Start Accepting Stellar Payments?
          </h2>
          <p className="mt-4 text-lg text-primary-100">
            Get started in minutes. No lengthy approval process, no hidden fees.
          </p>
          <div className="mt-10 flex items-center justify-center gap-4">
            <Link
              href="/register"
              className="inline-flex items-center gap-2 bg-white text-primary-600 font-medium px-6 py-3 rounded-lg hover:bg-primary-50 transition-colors"
            >
              Create Free Account
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/login"
              className="inline-flex items-center gap-2 text-white font-medium px-6 py-3 rounded-lg border border-primary-400 hover:bg-primary-700 transition-colors"
            >
              Sign In
            </Link>
          </div>
        </div>
      </section>

      <footer className="bg-surface-900 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 mb-6">
            <Rocket className="h-5 w-5 text-primary-400" />
            <span className="text-lg font-bold text-white">AstroMerchant</span>
          </div>
          <p className="text-sm text-surface-400">
            &copy; {new Date().getFullYear()} AstroMerchant. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
