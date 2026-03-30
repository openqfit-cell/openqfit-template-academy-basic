/**
 * Class Categories Data
 * 
 * Configure the different class types offered by your academy.
 * You can add, remove, or modify class categories here.
 */

import type { ClassCategory, ClassCategoriesSection } from './types';

export const classCategoriesSectionData: ClassCategoriesSection = {
  title: '수업 과정',
  subtitle: '수준과 목적에 맞는 다양한 과정을 제공합니다',
  cta: {
    description: '어떤 과정이 적합한지 궁금하신가요? 무료 레벨 테스트를 통해 맞춤 과정을 추천해드립니다.',
    buttonText: '상담 후 테스트 안내',
  },
};

export const classCategoriesData: ClassCategory[] = [
  {
    title: '기초 과정',
    description: '처음 시작하는 분들을 위한 기본기 집중 과정',
    duration: '3개월',
    sessions: '주 2회',
    targets: [
      '기초부터 배우고 싶은 학생',
      '체계적인 학습을 원하는 입문자',
      '기본기를 다지고 싶은 분',
    ],
  },
  {
    title: '심화 과정',
    description: '기초를 다진 분들을 위한 실전 응용 과정',
    duration: '4개월',
    sessions: '주 3회',
    targets: [
      '기초 과정 수료자',
      '실력 향상이 필요한 중급자',
      '실전 능력을 키우고 싶은 분',
    ],
  },
  {
    title: '그룹 수업',
    description: '4-6명 소그룹으로 진행되는 협력 학습 과정',
    duration: '3개월',
    sessions: '주 2회',
    targets: [
      '또래 친구들과 함께 배우고 싶은 학생',
      '합리적인 가격으로 수강하고 싶은 분',
      '그룹 활동을 선호하는 분',
    ],
  },
  {
    title: '1:1 맞춤',
    description: '개인별 수준에 맞춘 완전 맞춤형 과정',
    duration: '협의',
    sessions: '협의',
    targets: [
      '개인 맞춤 커리큘럼이 필요한 분',
      '집중 관리를 원하는 학생',
      '유연한 일정이 필요한 분',
    ],
  },
];