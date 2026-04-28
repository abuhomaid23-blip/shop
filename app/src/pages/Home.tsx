import { CartProvider } from '@/context/CartContext'
import Header from '@/sections/Header'
import HeroSection from '@/sections/HeroSection'
import TrustBar from '@/sections/TrustBar'
import CategoryGrid from '@/sections/CategoryGrid'
import ProductsSection from '@/sections/ProductsSection'
import WhyChooseUs from '@/sections/WhyChooseUs'
import Footer from '@/sections/Footer'

export default function Home() {
  return (
    <CartProvider>
      <div className="min-h-screen bg-white">
        <Header />
        <main>
          <HeroSection />
          <TrustBar />
          <CategoryGrid />
          <ProductsSection />
          <WhyChooseUs />
        </main>
        <Footer />
      </div>
    </CartProvider>
  )
}
