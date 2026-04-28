import { useCart } from '@/context/CartContext';
import { PRODUCTS } from '@/data/store';

export default function ProductsSection() {
  const { addItem } = useCart();

  return (
    <section id="products" className="w-full bg-gray-50 py-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-10">
          <span className="text-sm font-semibold text-amber-600 uppercase tracking-wider">
            Your Daily Necessities
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mt-2">
            All Our Products
          </h2>
          <p className="text-sm sm:text-base text-gray-500 mt-2 max-w-md mx-auto">
            Find the product which will make your life easier
          </p>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5">
          {PRODUCTS.map((product) => (
            <div
              key={product.id}
              className="group bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 overflow-hidden flex flex-col"
            >
              {/* Image */}
              <div className="relative aspect-square overflow-hidden bg-gray-100">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                {/* Discount Badge */}
                <div className="absolute top-3 left-3 w-12 h-12 bg-amber-500 rounded-full flex items-center justify-center shadow-md">
                  <span className="text-white text-xs font-bold leading-tight text-center">
                    -{product.discount}%
                  </span>
                </div>
                {/* Sold Out Overlay */}
                {product.soldOut && (
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                    <span className="bg-white text-gray-800 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                      Sold Out
                    </span>
                  </div>
                )}
              </div>

              {/* Details */}
              <div className="p-4 flex-1 flex flex-col">
                <h3 className="text-sm font-semibold text-gray-800 line-clamp-2 group-hover:text-teal-700 transition-colors">
                  {product.name}
                </h3>
                <p className="text-xs text-gray-400 mt-1">
                  {product.categories.join(', ')}
                </p>

                {/* Price */}
                <div className="mt-2 flex items-center gap-2">
                  <span className="text-base font-bold text-amber-600">
                    ৳ {product.price.toLocaleString()}
                  </span>
                  <span className="text-xs text-gray-400 line-through">
                    ৳ {product.originalPrice.toLocaleString()}
                  </span>
                </div>

                {/* Actions */}
                <div className="mt-auto pt-3 space-y-2">
                  <button className="w-full py-2.5 bg-amber-500 text-white text-sm font-semibold rounded-lg hover:bg-amber-600 hover:scale-[1.02] transition-all duration-200">
                    Order Now
                  </button>
                  <button
                    onClick={() => addItem(product)}
                    disabled={product.soldOut}
                    className="w-full py-2.5 bg-teal-700 text-white text-sm font-semibold rounded-lg hover:bg-teal-800 hover:scale-[1.02] transition-all duration-200 disabled:bg-gray-300 disabled:cursor-not-allowed"
                  >
                    {product.soldOut ? 'Out of Stock' : 'Add to Cart'}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
