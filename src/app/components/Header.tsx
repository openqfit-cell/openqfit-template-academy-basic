import { Menu, Phone, X } from 'lucide-react';
import { useState, useEffect } from 'react';
import { siteConfig, navItems } from '../data/siteData';

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // 모바일 메뉴 열림 시 스크롤 방지
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    // 클린업: 컴포넌트 언마운트 시 스크롤 복원
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  return (
    <>
      {/* 모바일 메뉴 배경 Dim */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={() => setMobileMenuOpen(false)}
        />
      )}

      <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex-shrink-0">
              <h1 className="font-bold text-xl text-gray-900">{siteConfig.siteName}</h1>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-8">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-gray-700 hover:text-blue-600 transition-colors"
                >
                  {item.label}
                </a>
              ))}
            </nav>

            {/* CTA Button - Desktop */}
            <div className="hidden lg:block">
              <a
                href={`tel:${siteConfig.phone.replace(/[^0-9]/g, '')}`}
                className="bg-blue-600 text-white px-6 py-2.5 rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2"
              >
                <Phone className="w-4 h-4" />
                {siteConfig.cta.primary}
              </a>
            </div>

            {/* Mobile: CTA + Menu */}
            <div className="flex lg:hidden items-center gap-3">
              <a
                href={`tel:${siteConfig.phone.replace(/[^0-9]/g, '')}`}
                className="bg-blue-600 text-white px-5 py-2.5 rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2"
              >
                <Phone className="w-4 h-4" />
                {siteConfig.cta.short}
              </a>
              
             {/* Mobile menu button */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden p-2 rounded-lg text-neutral-600 hover:bg-neutral-50 transition-colors"
                aria-label={mobileMenuOpen ? '메뉴 닫기' : '메뉴 열기'}
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
              </div>
            </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="lg:hidden border-t border-gray-200 py-4">
              <nav className="flex flex-col gap-1">
                {navItems.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    className="text-gray-700 hover:bg-gray-50 py-3 px-2 rounded transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.label}
                  </a>
                ))}
              </nav>
            </div>
          )}
        </div>
      </header>
    </>
  );
}