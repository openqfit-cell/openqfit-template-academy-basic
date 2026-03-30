import { siteConfig } from '../data/siteData';
import { footerData } from '../data/footerData';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* About */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">{siteConfig.siteName}</h3>
            <p className="text-sm leading-relaxed mb-4 whitespace-pre-line">
              {footerData.description}
            </p>
            <p className="text-sm text-gray-400">
              {siteConfig.address.street}<br />
              {siteConfig.address.building}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold mb-4">{footerData.sectionTitles.quickLinks}</h3>
            <ul className="space-y-2 text-sm">
              {footerData.quickLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="hover:text-white transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-bold mb-4">{footerData.sectionTitles.contact}</h3>
            <ul className="space-y-2 text-sm">
              <li>
                전화: <a 
                  href={`tel:${siteConfig.phone.replace(/[^0-9]/g, '')}`}
                  className="hover:text-white transition-colors"
                >
                  {siteConfig.phone}
                </a>
              </li>
              <li>
                이메일: <a 
                  href={`mailto:${siteConfig.email}`}
                  className="hover:text-white transition-colors"
                >
                  {siteConfig.email}
                </a>
              </li>
              <li className="pt-2 text-gray-400">
                {siteConfig.hours.weekday}<br />
                {siteConfig.hours.saturday}<br />
                {siteConfig.hours.sunday}
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
            <p>{footerData.copyright}</p>
            <div className="flex gap-6">
              {footerData.legal.map((link) => (
                <a key={link.href} href={link.href} className="hover:text-white transition-colors">
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}