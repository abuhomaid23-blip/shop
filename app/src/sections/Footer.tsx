import { Facebook, MapPin, Phone, Mail } from 'lucide-react';
import { FOOTER_LINKS, SITE_INFO } from '@/data/store';

export default function Footer() {
  return (
    <footer id="footer" className="w-full bg-teal-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <h3 className="text-xl font-bold text-white">{SITE_INFO.name}</h3>
            <p className="text-xs text-teal-200 mt-1">{SITE_INFO.tagline}</p>
            <p className="text-sm text-teal-100 mt-4 leading-relaxed">
              {SITE_INFO.description}
            </p>
            <div className="mt-4 space-y-2">
              <div className="flex items-center gap-2 text-sm text-teal-100">
                <Phone className="w-4 h-4 shrink-0" />
                <span>{SITE_INFO.phone}</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-teal-100">
                <Mail className="w-4 h-4 shrink-0" />
                <span>support@doortodoorneed.com</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-teal-100">
                <MapPin className="w-4 h-4 shrink-0" />
                <span>Dhaka, Bangladesh</span>
              </div>
            </div>
          </div>

          {/* For Customer */}
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              For Customer
            </h4>
            <ul className="space-y-2">
              {FOOTER_LINKS.forCustomer.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-teal-100 hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Company
            </h4>
            <ul className="space-y-2">
              {FOOTER_LINKS.company.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-teal-100 hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Follow Us On Facebook
            </h4>
            <a
              href="#"
              className="inline-flex items-center gap-2 px-4 py-2.5 bg-white/10 hover:bg-white/20 rounded-lg transition-colors"
            >
              <Facebook className="w-5 h-5" />
              <span className="text-sm font-medium">Facebook Page</span>
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-teal-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <p className="text-center text-xs text-teal-200">
            &copy; {new Date().getFullYear()} {SITE_INFO.copyright}
          </p>
        </div>
      </div>
    </footer>
  );
}
