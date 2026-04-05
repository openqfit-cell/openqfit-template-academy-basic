/**
 * 히어로 컴포넌트
 * --------------------------------------------------
 * 사이트 첫 화면에서 핵심 문구와 CTA를 보여줍니다.
 */
import { ArrowRight, Award, Phone, TrendingUp, Users } from 'lucide-react';
import { heroData, siteConfig } from '../data/data';

export function Hero() {
  return (
    <section className="bg-gradient-to-b from-gray-50 to-white pb-14 sm:pb-12 lg:pb-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4 sm:py-6 lg:py-12">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="order-1 text-center lg:text-left">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl text-neutral-900 mb-6 leading-tight tracking-tighter">
              {heroData.headline} <span className="text-blue-600">{heroData.headlineHighlight}</span>
              {heroData.headlineEnd}
            </h1>

            <p className="text-lg sm:text-xl text-gray-700 mb-10 leading-relaxed whitespace-pre-line">
              {heroData.subheadline}
            </p>

            <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4 mb-12">
              <a
                href={`tel:${siteConfig.phone.replace(/[^0-9]/g, '')}`}
                className="bg-blue-600 text-white px-8 py-4 rounded-xl hover:bg-blue-700 transition-all flex items-center justify-center gap-2 font-semibold text-lg shadow-lg shadow-blue-600/25 hover:shadow-xl hover:shadow-blue-600/30"
              >
                <Phone className="w-5 h-5" />
                {siteConfig.cta.primary}
              </a>
              <a
                href="#classes"
                className="bg-white text-gray-900 px-8 py-4 rounded-xl border-2 border-gray-300 hover:border-blue-600 hover:text-blue-600 transition-all flex items-center justify-center gap-2 font-semibold text-lg"
              >
                {siteConfig.cta.secondary}
                <ArrowRight className="w-5 h-5" />
              </a>
            </div>

            <div className="flex flex-wrap gap-8 justify-center lg:justify-start">
              {heroData.stats.map((stat, index) => {
                const icons = [Award, Users, TrendingUp];
                const Icon = icons[index] ?? Award;
                return (
                  <div key={stat.label} className="flex flex-col sm:flex-row items-center gap-3 text-center sm:text-left hover:scale-105 duration-300">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <Icon className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                      <p className="text-sm text-gray-400 lg:text-gray-600">{stat.label}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div>
            <div className="aspect-[4/3] lg:aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={heroData.image.src}
                alt={heroData.image.alt}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
