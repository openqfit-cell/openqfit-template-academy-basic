/**
 * Curriculum Data
 * 
 * Configure the curriculum stages and features.
 * Customize the learning journey timeline and key features.
 */

import type { CurriculumStage } from './types';

export const curriculumStages: CurriculumStage[] = [
  {
    title: '기초 이론',
    weeks: '1-4주차',
    topics: [
      '기본 개념 이해 및 용어 정리',
      '기초 원리 학습',
      '실습 환경 구축',
      '기본 문제 풀이',
    ],
  },
  {
    title: '실습 과정',
    weeks: '5-8주차',
    topics: [
      '실전 예제 중심 학습',
      '다양한 유형 문제 해결',
      '프로젝트 기반 학습',
      '개인별 피드백',
    ],
  },
  {
    title: '심화 학습',
    weeks: '9-12주차',
    topics: [
      '고난도 문제 풀이',
      '응용력 향상 훈련',
      '실전 모의고사',
      '최종 프로젝트',
    ],
  },
];

export const curriculumFeatures: string[] = [
  '수강생 수준에 따른 맞춤 진도 조절',
  '매주 진도 확인 및 피드백 제공',
  '복습 자료 및 과제 제공',
  '수료 후 6개월 무료 질의응답',
];
