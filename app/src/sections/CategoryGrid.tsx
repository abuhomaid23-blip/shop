import {
  Percent,
  Sparkles,
  Glasses,
  Coffee,
  Smartphone,
  Scissors,
  Home,
  Baby,
  UtensilsCrossed,
  type LucideIcon,
} from 'lucide-react';
import { CATEGORIES } from '@/data/store';

const iconMap: Record<string, LucideIcon> = {
  Percent,
  Sparkles,
  Glasses,
  Coffee,
  Smartphone,
  Scissors,
  Home,
  Baby,
  UtensilsCrossed,
};

export default function CategoryGrid() {
  return (
    <section className="w-full bg-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-9 gap-4">
          {CATEGORIES.map((category) => {
            const Icon = iconMap[category.icon] || Percent;
            return (
              <a
                key={category.id}
                href="#products"
                className="flex flex-col items-center gap-2 group"
              >
                <div className="w-20 h-20 sm:w-24 sm:h-24 bg-gray-50 rounded-full flex items-center justify-center group-hover:bg-teal-50 group-hover:scale-105 transition-all duration-300 border border-gray-100 group-hover:border-teal-200">
                  <Icon className="w-8 h-8 sm:w-10 sm:h-10 text-gray-400 group-hover:text-teal-600 transition-colors" />
                </div>
                <div className="text-center">
                  <p className="text-xs sm:text-sm font-medium text-gray-700 group-hover:text-teal-700 transition-colors">
                    {category.name}
                  </p>
                  <p className="text-[10px] sm:text-xs text-gray-400 mt-0.5">
                    {category.productCount} products
                  </p>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
