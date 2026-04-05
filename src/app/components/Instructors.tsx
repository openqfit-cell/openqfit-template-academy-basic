/**
 * 강사진 소개 컴포넌트
 * --------------------------------------------------
 * 대표 강사의 이력과 전문 분야를 보여줍니다.
 */
import { Award, BookOpen, CheckCircle2, GraduationCap } from 'lucide-react';
import { instructorsData, teachingPhilosophy } from '../data/data';

export function Instructors() {
  return (
    <section id="instructors" className="py-16 md:py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">강사진 소개</h2>
          <p className="text-gray-600">오랜 현장 경험과 체계적인 지도 노하우를 갖춘 강사진입니다</p>
        </div>

        <div className="grid gap-6 mb-10">
          {instructorsData.map((instructor) => (
            <div key={instructor.name} className="bg-white border-2 border-gray-200 rounded-lg p-6 md:p-7">
              <div className="flex flex-col sm:flex-row gap-6">
                <div className="flex-shrink-0">
                  <div className="aspect-[1/1] sm:w-32 sm:h-32 bg-gray-200 rounded-lg overflow-hidden">
                    <img src={instructor.image} alt={instructor.name} className="w-full h-full object-cover" />
                  </div>
                </div>

                <div className="flex-1 min-w-0">
                  <div className="mb-4">
                    <div className="flex flex-wrap items-center gap-2 mb-2">
                      <h3 className="text-xl md:text-2xl font-bold text-gray-900">{instructor.name}</h3>
                      <span className="px-3 py-1 bg-blue-100 text-blue-700 text-sm rounded-full font-medium">{instructor.title}</span>
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
                      <p className="text-sm text-gray-700 leading-relaxed">{instructor.specialties.join(' | ')}</p>
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
                        <span key={cert} className="inline-flex items-center gap-1 text-xs text-gray-700 bg-gray-100 px-2.5 py-1 rounded">
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

        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <h3 className="font-bold text-gray-900 mb-4">지도 철학</h3>
          <div className="grid sm:grid-cols-2 gap-4 text-gray-700">
            {teachingPhilosophy.map((item) => (
              <div key={item} className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
