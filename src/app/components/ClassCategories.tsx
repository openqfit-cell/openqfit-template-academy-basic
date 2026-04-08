/**
 * 수업 과정 소개 컴포넌트
 * --------------------------------------------------
 * 대표 과정과 각 과정의 추천 대상을 보여줍니다.
 *
 * 수정 내용
 * - title 문자열에 따라 아이콘을 매핑하던 iconMap 제거
 * - 데이터 내용이 바뀌어도 에러 없이 렌더링되도록 고정 아이콘 순환 방식으로 변경
 */
import { Award, BookOpen, CheckCircle2, GraduationCap, Users } from 'lucide-react';
import { classCategoriesData, classCategoriesSectionData } from '../data/data';

const categoryIcons = [BookOpen, GraduationCap, Users, Award];

export function ClassCategories() {
  return (
    <section id="classes" className="py-16 md:py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3 text-center">{classCategoriesSectionData.title}</h2>
          <p className="text-gray-600 text-center">{classCategoriesSectionData.subtitle}</p>
        </div>

        <div className="space-y-5">
          {classCategoriesData.map((category, index) => {
            const Icon = categoryIcons[index % categoryIcons.length];
            return (
              <div
                key={`${category.title}-${index}`}
                className="border-2 border-gray-200 rounded-lg p-5 md:p-6 hover:border-blue-600 transition-colors"
              >
                <div className="flex flex-col md:flex-row md:items-start gap-4">
                  <div className="flex items-start gap-3 md:w-64 flex-shrink-0">
                    <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                      <Icon className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-1">{category.title}</h3>
                      <div className="flex items-center gap-3 text-sm text-gray-600">
                        <span>{category.duration}</span>
                        <span>•</span>
                        <span>{category.sessions}</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex-1 space-y-3">
                    <p className="text-gray-700 leading-relaxed">{category.description}</p>

                    <div>
                      <p className="text-sm font-bold text-gray-900 mb-2">수강 대상</p>
                      <ul className="space-y-1.5">
                        {category.targets.map((target, targetIndex) => (
                          <li key={`${category.title}-target-${targetIndex}`} className="text-sm text-gray-700 flex items-start gap-2">
                            <CheckCircle2 className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                            <span>{target}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-10 bg-gray-50 border border-gray-200 rounded-lg p-6 md:p-8 text-center">
          <p className="text-gray-700 mb-4">{classCategoriesSectionData.cta.description}</p>
          <a
            href="#contact"
            className="bg-blue-600 text-white px-8 py-3 rounded-md hover:bg-blue-700 transition-colors font-medium"
          >
            {classCategoriesSectionData.cta.buttonText}
          </a>
        </div>
      </div>
    </section>
  );
}
