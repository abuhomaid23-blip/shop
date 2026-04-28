import { SITE_INFO } from '@/data/store';

export default function HeroSection() {
  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-br from-teal-50 via-white to-amber-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* Text Content */}
          <div className="order-2 lg:order-1 text-center lg:text-left">
            <span className="inline-block px-4 py-1.5 bg-amber-100 text-amber-700 text-sm font-semibold rounded-full mb-4">
              {SITE_INFO.tagline}
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 leading-tight">
              Shop from the Comfort of{' '}
              <span className="text-teal-700">Your Home</span>
            </h1>
            <p className="mt-4 text-base sm:text-lg text-gray-600 max-w-lg mx-auto lg:mx-0">
              Get everything you need delivered straight to your door. Quality
              products, fast delivery, and the best prices in Bangladesh.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
              <a
                href="#products"
                className="px-8 py-3.5 bg-amber-500 text-white font-semibold rounded-lg hover:bg-amber-600 hover:scale-[1.02] transition-all duration-200 shadow-md text-center"
              >
                Shop Now
              </a>
              <a
                href="#products"
                className="px-8 py-3.5 bg-teal-700 text-white font-semibold rounded-lg hover:bg-teal-800 hover:scale-[1.02] transition-all duration-200 shadow-md text-center"
              >
                View All Products
              </a>
            </div>
            <div className="mt-8 flex items-center justify-center lg:justify-start gap-6 text-sm text-gray-500">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                <span>Fast Delivery</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                <span>Cash on Delivery</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                <span>Best Prices</span>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="order-1 lg:order-2 flex justify-center">
            <div className="relative w-full max-w-lg animate-float">
              <img
                src="/images/hero-banner.jpg"
                alt="Door To Door Delivery"
                className="w-full h-auto rounded-2xl shadow-2xl"
              />
              {/* Floating badge */}
              <div className="absolute -bottom-4 -left-4 bg-white rounded-xl shadow-lg px-4 py-3 flex items-center gap-3">
                <div className="w-10 h-10 bg-teal-100 rounded-full flex items-center justify-center">
                  <svg className="w-5 h-5 text-teal-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs text-gray-500">Trusted by</p>
                  <p className="text-sm font-bold text-gray-800">10,000+ Customers</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
