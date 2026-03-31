import { Award, BookOpen, GraduationCap, CheckCircle2 } from 'lucide-react';
import { instructorsData } from '../data/instructorsData';

export function Instructors() {
  return (
    <section id="instructors" className="py-16 md:py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3 text-center">강사진</h2>
          <p className="text-gray-600 text-center">풍부한 경험과 전문성을 갖춘 강사진이 함께합니다</p>
        </div>

        <div className="space-y-6">
          {instructorsData.map((instructor) => (
            <div 
              key={instructor.name}
              className="bg-white border-2 border-gray-200 rounded-lg p-6 md:p-7"
            >
              <div className="flex flex-col sm:flex-row gap-6">
                {/* Profile Image */}
                <div className="flex-shrink-0">
                  <div className="aspect-[1/1] sm:w-32 sm:h-32 bg-gray-200 rounded-lg overflow-hidden">
                    <img 
                      src={instructor.image}
                      alt={instructor.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                {/* Info */}
                <div className="flex-1 min-w-0">
                  <div className="mb-4">
                    <div className="flex flex-wrap items-center gap-2 mb-2">
                      <h3 className="text-xl md:text-2xl font-bold text-gray-900">{instructor.name}</h3>
                      <span className="px-3 py-1 bg-blue-100 text-blue-700 text-sm rounded-full font-medium">
                        {instructor.title}
                      </span>
                      <span className="text-sm text-gray-600">• {instructor.experience}</span>
                    </div>
                    <p className="text-gray-700 flex items-center gap-2">
                      <GraduationCap className="w-4 h-4 text-gray-500" />
                      {instructor.education}
                    </p>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4 mb-4">
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <BookOpen className="w-4 h-4 text-blue-600" />
                        <p className="text-sm font-bold text-gray-900">전문 분야</p>
                      </div>
                      <p className="text-sm text-gray-700 leading-relaxed">
                        {instructor.specialties.join(' | ')}
                      </p>
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <Award className="w-4 h-4 text-blue-600" />
                        <p className="text-sm font-bold text-gray-900">주요 경력</p>
                      </div>
                      <p className="text-sm text-gray-700">{instructor.achievements}</p>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-gray-200">
                    <p className="text-xs text-gray-600 mb-2">보유 자격</p>
                    <div className="flex flex-wrap gap-2">
                      {instructor.certifications.map((cert) => (
                        <span 
                          key={cert}
                          className="inline-flex items-center gap-1 text-xs text-gray-700 bg-gray-100 px-2.5 py-1 rounded"
                        >
                          <CheckCircle2 className="w-3 h-3 text-blue-600" />
                          {cert}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}