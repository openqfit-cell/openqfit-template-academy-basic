import { Star, Quote } from 'lucide-react';
import { reviewsData, reviewStatsData } from '../data/reviewsData';

export function Reviews() {
  return (
    <section id="reviews" className="py-16 md:py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">수강 후기</h2>
          <p className="text-gray-600">실제 수강생들의 생생한 후기를 확인하세요</p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {reviewsData.map((review) => (
            <div 
              key={`${review.name}-${review.course}-${review.date}`}
              className="bg-white border border-gray-200 rounded-lg p-6"
            >
              <div className="flex items-start justify-between mb-4">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="font-bold text-gray-900">{review.name}</h3>
                    <span className="text-sm text-gray-500">|</span>
                    <span className="text-sm text-gray-600">{review.course}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                </div>
                <span className="text-sm text-gray-500">{review.date}</span>
              </div>

              <div className="relative">
                <Quote className="absolute -top-1 -left-1 w-6 h-6 text-blue-100" />
                <p className="text-gray-700 leading-relaxed mb-4 pl-6">{review.content}</p>
              </div>

              <div className="pt-4 border-t border-gray-200">
                <span className="inline-block px-3 py-1 bg-blue-50 text-blue-700 text-sm rounded-full">
                  {review.result}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Statistics */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6">
          {reviewStatsData.map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-3xl font-bold text-blue-600 mb-2">{stat.value}</p>
              <p className="text-gray-600">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}