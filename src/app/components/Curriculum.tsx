/**
 * 커리큘럼 컴포넌트
 * --------------------------------------------------
 * 현재 App.tsx에는 연결되어 있지 않지만, 추후 보강형으로 확장할 때 바로 사용할 수 있는 예비 섹션입니다.
 */
import { Check } from 'lucide-react';
import { curriculumFeatures, curriculumStages } from '../data/data';

export function Curriculum() {
  return (
    <section id="curriculum" className="py-16 md:py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">커리큘럼</h2>
          <p className="text-gray-600">단계별로 체계적으로 학습합니다</p>
        </div>

        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4 mb-12 w-full">
          {curriculumStages.map((stage, index) => (
            <div
              key={stage.title}
              className="bg-white border-2 border-gray-200 rounded-lg overflow-hidden w-full hover:border-blue-600 transition-colors"
            >
              <div className="bg-blue-50 border-b border-gray-200 px-6 py-4">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                  <div className="flex items-center gap-3">
                    <span className="inline-flex items-center justify-center w-8 h-8 bg-blue-600 text-white rounded-full text-sm font-bold">
                      {index + 1}
                    </span>
                    <h3 className="text-xl font-bold text-gray-900">{stage.title}</h3>
                  </div>
                  <span className="text-sm text-gray-600 ml-11 sm:ml-0">{stage.weeks}</span>
                </div>
              </div>
              <div className="px-6 py-5">
                <ul className="space-y-3">
                  {stage.topics.map((topic) => (
                    <li key={topic} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{topic}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 bg-white border border-gray-200 rounded-lg p-6">
          <h3 className="font-bold text-gray-900 mb-4">커리큘럼 특징</h3>
          <div className="grid sm:grid-cols-2 gap-4 text-gray-700">
            {curriculumFeatures.map((feature) => (
              <div key={feature} className="flex items-start gap-2">
                <Check className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                <span>{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
