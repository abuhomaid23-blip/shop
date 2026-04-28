import {
  CheckCircle,
  Truck,
  Headphones,
  type LucideIcon,
} from 'lucide-react';
import { WHY_CHOOSE_US } from '@/data/store';

const iconMap: Record<string, LucideIcon> = {
  CheckCircle,
  Truck,
  Headphones,
};

export default function WhyChooseUs() {
  return (
    <section className="w-full bg-white py-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="text-sm font-semibold text-amber-600 uppercase tracking-wider">
            There are some redeeming factors
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mt-2">
            We Provide High Quality Goods
          </h2>
          <p className="text-sm sm:text-base text-gray-500 mt-3 max-w-lg mx-auto">
            A client that's unhappy for a reason is a problem, a client that's
            unhappy though he or her can't
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          {WHY_CHOOSE_US.map((item) => {
            const Icon = iconMap[item.icon] || CheckCircle;
            return (
              <div
                key={item.title}
                className="flex flex-col items-center text-center p-6 rounded-xl hover:bg-gray-50 transition-colors"
              >
                <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-4">
                  <Icon className="w-8 h-8 text-gray-400" />
                </div>
                <h3 className="text-lg font-bold text-gray-800">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-500 mt-1">{item.subtitle}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
