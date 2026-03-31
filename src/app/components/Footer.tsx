import { siteConfig } from '../data/siteData';
import { footerData } from '../data/footerData';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6 items-start mb-8 md:mb-8">
          {/* About */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">{siteConfig.siteName}</h3>
            <p className="text-sm leading-relaxed whitespace-pre-line">
              {footerData.description}
            </p>
          </div>

          {/* Social Links */}
          <div className="flex md:justify-end gap-3">
            {footerData.socialLinks.map((social, index) => {
              const Icon = social.icon;
              return (
                <a
                  key={index}
                  href={social.url}
                  className="w-12 h-12 bg-gray-800 hover:bg-gray-700 rounded-lg flex items-center justify-center transition-all duration-300"
                  aria-label={social.platform}
                >
                  <Icon className="w-6 h-6" />
                </a>
              );
            })}
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
            <p>{footerData.copyright}</p>
          </div>
        </div>
      </div>
    </footer>
  );
}