/**
 * Hero Section Data
 * 
 * Configure the main hero section at the top of the page.
 * This includes the headline, subheadline, image, and statistics.
 */

import type { HeroContent } from './types';

export const heroData: HeroContent = {
  headline: '체계적인 커리큘럼으로',
  headlineHighlight: '확실한 실력 향상',
  headlineEnd: '을 약속합니다',
  subheadline: '15년 경력의 전문 강사진과 함께하는 맞춤형 교육. 기초부터 심화까지 단계별 학습으로 목표를 달성하세요.',
  
  // Hero image - replace this path with your own image
  image: {
    src: 'https://images.unsplash.com/photo-1736066331063-3dcc2b02713f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjbGFzc3Jvb20lMjBsZWFybmluZyUyMGJyaWdodCUyMG5hdHVyYWwlMjBsaWdodHxlbnwxfHx8fDE3NzQ1OTgwNDB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    alt: '청담아카데미 수업 환경',
  },
  
  // Trust statistics
  stats: [
    { value: '15년', label: '교육 경력' },
    { value: '1,500+', label: '수강생' },
    { value: '98%', label: '수강 만족도' },
  ],
};
