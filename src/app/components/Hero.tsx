import { Phone, Award, Users, TrendingUp, ArrowRight } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { heroData } from '../data/heroData';
import { siteConfig } from '../data/siteData';

export function Hero() {
  return (
    <section className="bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16 md:py-20 lg:py-28">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Content */}
          <div className="order-2 lg:order-1">
            {/* Headline */}
            <h1 className="font-bold text-gray-900 mb-6 leading-tight text-left text-[48px]">
              {heroData.headline} <span className="text-blue-600">{heroData.headlineHighlight}</span>{heroData.headlineEnd}
            </h1>

            {/* Supporting Text */}
            <p className="text-lg sm:text-xl text-gray-700 mb-10 leading-relaxed whitespace-pre-line">
              {heroData.subheadline}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <a 
                href="#contact"
                className="bg-blue-600 text-white px-8 py-4 rounded-xl hover:bg-blue-700 transition-all flex items-center justify-center gap-2 font-semibold text-lg shadow-lg shadow-blue-600/25 hover:shadow-xl hover:shadow-blue-600/30"
              >
                <Phone className="w-5 h-5" />
                {siteConfig.cta.primary}
              </a>
              <a 
                href="#classes"
                className="bg-white text-gray-900 px-8 py-4 rounded-xl border-2 border-gray-300 hover:border-blue-600 hover:text-blue-600 transition-all flex items-center justify-center gap-2 font-semibold text-lg"
              >
                수업 과정 보기
                <ArrowRight className="w-5 h-5" />
              </a>
            </div>

            {/* Trust Points */}
            <div className="flex flex-wrap gap-8">
              {heroData.stats.map((stat) => {
                const icons = [Award, Users, TrendingUp];
                const index = heroData.stats.indexOf(stat);
                const Icon = icons[index];
                return (
                  <div key={stat.label} className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <Icon className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                      <p className="text-sm text-gray-600">{stat.label}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Column: Image */}
          <div className="order-1 lg:order-2">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <ImageWithFallback
                src={heroData.image.src}
                alt={heroData.image.alt}
                className="w-full h-full object-cover aspect-[4/3]"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}