import {
  CheckCircle,
  Truck,
  Headphones,
  type LucideIcon,
} from 'lucide-react';
import { TRUST_FEATURES } from '@/data/store';

const iconMap: Record<string, LucideIcon> = {
  CheckCircle,
  Truck,
  Headphones,
};

export default function TrustBar() {
  return (
    <section className="w-full bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {TRUST_FEATURES.map((feature) => {
            const Icon = iconMap[feature.icon] || CheckCircle;
            return (
              <div
                key={feature.title}
                className="flex items-center gap-4 p-4 rounded-xl hover:bg-gray-50 transition-colors"
              >
                <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center shrink-0">
                  <Icon className="w-6 h-6 text-amber-600" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-gray-800">
                    {feature.title}
                  </h3>
                  <p className="text-xs text-gray-500 mt-0.5">
                    {feature.subtitle}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
