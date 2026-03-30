/**
 * Schedule & Pricing Data
 * 
 * Configure class schedules, timings, and pricing information.
 * Update tuition fees and schedule details here.
 */

import type { ScheduleInfo, PricingItem } from './types';

export const scheduleInfoData: ScheduleInfo[] = [
  {
    label: '수업 기간',
    value: '월~금 상시 개강',
    detail: '매월 첫째주 월요일 신규반 개강',
  },
  {
    label: '수업 시간',
    value: '오전반 / 오후반 / 저녁반',
    detail: '오전 10:00 / 오후 14:00 / 저녁 19:00',
  },
  {
    label: '수업 장소',
    value: '강남구 청담동 본원',
    detail: '지하철 7호선 청담역 3번 출구 도보 5분',
  },
];

export const pricingData: PricingItem[] = [
  {
    title: '기초 과정',
    duration: '3개월',
    frequency: '주 2회',
    price: '450,000원',
    features: ['소그룹 수업 (4-6명)', '교재 제공', '월 1회 레벨 테스트'],
  },
  {
    title: '심화 과정',
    duration: '4개월',
    frequency: '주 3회',
    price: '720,000원',
    features: ['소그룹 수업 (4-6명)', '교재 + 부교재 제공', '월 2회 레벨 테스트'],
  },
  {
    title: '그룹 수업',
    duration: '3개월',
    frequency: '주 2회',
    price: '380,000원',
    features: ['정원 8-10명', '교재 제공', '분기별 평가'],
  },
  {
    title: '1:1 맞춤',
    duration: '협의',
    frequency: '협의',
    price: '상담 문의',
    features: ['완전 맞춤 커리큘럼', '강사 선택 가능', '유연한 일정 조율'],
  },
];
