import { useState } from 'react';
import {
  Search,
  ShoppingCart,
  Menu,
  X,
  User,
  Minus,
  Plus,
  Trash2,
} from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { Sheet, SheetContent, SheetHeader, SheetTitle } from '@/components/ui/sheet';
import { CATEGORIES, SITE_INFO } from '@/data/store';

export default function Header() {
  const { totalCount, isCartOpen, openCart, closeCart, items, totalPrice, removeItem, updateQuantity } = useCart();
  const [isNavOpen, setIsNavOpen] = useState(false);

  const navLinks = [
    { label: 'Home', href: '#' },
    { label: 'Shop', href: '#products' },
    { label: 'Special Offers', href: '#products' },
    { label: 'More', href: '#footer' },
  ];

  return (
    <>
      <header className="sticky top-0 z-50 w-full bg-white border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <a href="#" className="flex flex-col shrink-0">
              <span className="text-xl md:text-2xl font-bold text-teal-700 leading-tight">
                {SITE_INFO.name}
              </span>
              <span className="text-[10px] md:text-xs text-gray-500 -mt-1">
                {SITE_INFO.tagline}
              </span>
            </a>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-sm font-medium text-gray-600 hover:text-teal-700 transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* Right Actions */}
            <div className="flex items-center gap-2">
              <button className="hidden md:flex p-2 rounded-full hover:bg-gray-100 transition-colors">
                <Search className="w-5 h-5 text-gray-600" />
              </button>
              <a
                href="#"
                className="hidden md:flex items-center gap-1 p-2 rounded-full hover:bg-gray-100 transition-colors text-sm text-gray-600"
              >
                <User className="w-5 h-5" />
                <span>Login / Register</span>
              </a>
              <button
                onClick={openCart}
                className="relative p-2 rounded-full hover:bg-gray-100 transition-colors"
              >
                <ShoppingCart className="w-5 h-5 text-gray-600" />
                {totalCount > 0 && (
                  <span className="absolute -top-1 -right-1 w-5 h-5 bg-amber-500 text-white text-[10px] font-bold rounded-full flex items-center justify-center animate-in zoom-in">
                    {totalCount}
                  </span>
                )}
              </button>
              <button
                onClick={() => setIsNavOpen(true)}
                className="md:hidden p-2 rounded-full hover:bg-gray-100 transition-colors"
              >
                <Menu className="w-5 h-5 text-gray-600" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Navigation Drawer */}
      <Sheet open={isNavOpen} onOpenChange={setIsNavOpen}>
        <SheetContent side="left" className="w-[300px] sm:w-[350px] p-0">
          <div className="flex flex-col h-full">
            <div className="p-4 border-b border-gray-200 flex items-center justify-between">
              <span className="text-lg font-bold text-teal-700">{SITE_INFO.name}</span>
              <button
                onClick={() => setIsNavOpen(false)}
                className="p-2 rounded-full hover:bg-gray-100"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <nav className="flex-1 overflow-auto p-4">
              <div className="space-y-1">
                {navLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    onClick={() => setIsNavOpen(false)}
                    className="block px-3 py-2 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-100 hover:text-teal-700 transition-colors"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
              <div className="mt-6 pt-6 border-t border-gray-200">
                <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3 px-3">
                  Categories
                </p>
                <div className="space-y-1">
                  {CATEGORIES.map((cat) => (
                    <a
                      key={cat.id}
                      href="#products"
                      onClick={() => setIsNavOpen(false)}
                      className="flex items-center justify-between px-3 py-2 rounded-lg text-sm text-gray-700 hover:bg-gray-100 hover:text-teal-700 transition-colors"
                    >
                      <span>{cat.name}</span>
                      <span className="text-xs text-gray-400">{cat.productCount}</span>
                    </a>
                  ))}
                </div>
              </div>
            </nav>
          </div>
        </SheetContent>
      </Sheet>

      {/* Cart Drawer */}
      <Sheet open={isCartOpen} onOpenChange={closeCart}>
        <SheetContent side="right" className="w-[340px] sm:w-[400px] p-0">
          <div className="flex flex-col h-full">
            <SheetHeader className="p-4 border-b border-gray-200">
              <SheetTitle className="flex items-center gap-2 text-lg">
                <ShoppingCart className="w-5 h-5" />
                Shopping Cart
              </SheetTitle>
            </SheetHeader>

            <div className="flex-1 overflow-auto p-4">
              {items.length === 0 ? (
                <div className="flex flex-col items-center justify-center h-full text-gray-400">
                  <ShoppingCart className="w-12 h-12 mb-3 opacity-50" />
                  <p className="text-sm">Your cart is empty</p>
                  <p className="text-xs mt-1">Add products to get started</p>
                </div>
              ) : (
                <div className="space-y-4">
                  {items.map((item) => (
                    <div
                      key={item.id}
                      className="flex gap-3 p-3 bg-gray-50 rounded-lg"
                    >
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-16 h-16 object-cover rounded-md shrink-0"
                      />
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-gray-800 truncate">
                          {item.name}
                        </p>
                        <p className="text-sm text-teal-700 font-semibold mt-1">
                          ৳ {item.price.toLocaleString()}
                        </p>
                        <div className="flex items-center gap-2 mt-2">
                          <button
                            onClick={() =>
                              updateQuantity(item.id, item.quantity - 1)
                            }
                            className="w-6 h-6 flex items-center justify-center rounded bg-white border border-gray-200 hover:bg-gray-100"
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="text-sm font-medium w-6 text-center">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() =>
                              updateQuantity(item.id, item.quantity + 1)
                            }
                            className="w-6 h-6 flex items-center justify-center rounded bg-white border border-gray-200 hover:bg-gray-100"
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                          <button
                            onClick={() => removeItem(item.id)}
                            className="ml-auto p-1 text-red-500 hover:bg-red-50 rounded"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {items.length > 0 && (
              <div className="p-4 border-t border-gray-200 bg-gray-50">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm font-medium text-gray-600">Subtotal</span>
                  <span className="text-lg font-bold text-teal-700">
                    ৳ {totalPrice.toLocaleString()}
                  </span>
                </div>
                <button className="w-full py-3 bg-teal-700 text-white rounded-lg font-medium hover:bg-teal-800 transition-colors">
                  Checkout
                </button>
              </div>
            )}
          </div>
        </SheetContent>
      </Sheet>
    </>
  );
}
