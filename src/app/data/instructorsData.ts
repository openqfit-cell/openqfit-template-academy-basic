/**
 * Instructors Data
 * 
 * Configure the instructor profiles and teaching philosophy.
 * Update instructor information, photos, and credentials here.
 */

import type { Instructor } from './types';

export const instructorsData: Instructor[] = [
  {
    name: '김민수',
    title: '대표강사',
    experience: '15년 경력',
    education: '서울대학교 교육학 석사',
    specialties: ['기초 과정', '심화 과정', '입시 컨설팅'],
    achievements: '전 대치동 유명학원 대표강사',
    certifications: ['교원자격증 보유', '학습코칭 전문가', '교육부 인증 강사'],
    // Replace with your own instructor image
    image: '/images/instructor01_img.jpg',
  },
  {
    name: '박지영',
    title: '수석강사',
    experience: '12년 경력',
    education: '연세대학교 교육학 박사',
    specialties: ['1:1 맞춤', '그룹 수업', '학습 컨설팅'],
    achievements: '교육부 우수강사 선정 (2024)',
    certifications: ['교원자격증 보유', '심리상담사 2급', '학습전략 지도사'],
    // Replace with your own instructor image
    image: '/images/instructor02_img.jpg',
  },
];

export const teachingPhilosophy: string[] = [
  '학생 개개인의 수준과 특성을 고려한 맞춤 지도',
  '체계적인 학습 관리 및 정기적인 피드백 제공',
  '학부모 상담을 통한 학습 진도 공유',
  '장기적인 학습 계획 수립 및 목표 달성 지원',
];
