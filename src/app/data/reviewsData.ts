/**
 * Reviews Data
 * 
 * Configure student testimonials and review statistics.
 * Add or modify student reviews and satisfaction metrics.
 */

import type { Review, ReviewStat } from './types';

export const reviewsData: Review[] = [
  {
    name: '김학생',
    course: '심화 과정',
    rating: 5,
    date: '2026.02',
    content: '체계적인 커리큘럼과 세심한 피드백 덕분에 실력이 크게 향상되었습니다. 강사님의 열정적인 지도가 인상 깊었고, 목표했던 성과를 달성할 수 있었습니다.',
    result: '목표 달성률 150%',
  },
  {
    name: '박학부모',
    course: '기초 과정',
    rating: 5,
    date: '2026.01',
    content: '아이가 처음에는 어려워했는데, 선생님께서 아이 눈높이에 맞춰 설명해주시니 점점 흥미를 갖게 되었습니다. 3개월 만에 확실한 변화가 보여 만족합니다.',
    result: '학습 이해도 85%↑',
  },
  {
    name: '이수강생',
    course: '1:1 맞춤',
    rating: 5,
    date: '2025.12',
    content: '직장인이라 시간이 불규칙한데, 유연하게 스케줄 조정이 가능해서 좋았습니다. 개인 맞춤 수업이라 더 집중해서 배울 수 있었고 단기간에 실력이 늘었어요.',
    result: '4개월 완성',
  },
  {
    name: '최학생',
    course: '그룹 수업',
    rating: 5,
    date: '2025.11',
    content: '같은 수준의 학생들과 함께 배우니 서로 자극도 되고 동기부여도 됩니다. 소그룹이라 질문하기도 편하고 강사님의 피드백도 충분히 받을 수 있어요.',
    result: '그룹 1등 달성',
  },
];

export const reviewStatsData: ReviewStat[] = [
  { value: '98%', label: '수강 만족도' },
  { value: '1,500+', label: '누적 수강생' },
  { value: '92%', label: '목표 달성률' },
  { value: '85%', label: '재등록률' },
];
