/**
 * Contact & Transportation Data
 * 
 * Configure location information and transportation details.
 * Update directions and public transportation options.
 */

import type { TransportationInfo, ContactContent } from './types';

export const contactContent: ContactContent = {
  sectionTitle: '오시는 길',
  sectionDescription: '청담아카데미를 방문해주세요', // Will be combined with siteName
  consultationTitle: '상담 및 문의',
  labels: {
    phone: '전화번호',
    email: '이메일',
    hours: '운영시간',
    address: '주소',
  },
  buttons: {
    naverMap: '네이버 지도 보기',
    googleMap: '구글 지도 보기',
    phoneConsultation: '전화 상담 신청',
    kakaoConsultation: '카카오톡 상담',
    emailInquiry: '이메일 문의',
  },
  transportationTitle: '교통편 안내',
  ctaDescription: '전화 또는 방문 상담을 원하시면 아래 버튼을 클릭하세요.\n카카오톡 상담도 가능합니다.',
};

export const transportationInfoData: TransportationInfo[] = [
  {
    icon: '🚇',
    label: '지하철 이용',
    detail: '7호선 청담역 3번 출구 → 직진 300m → 청담타워 (도보 5분)',
  },
  {
    icon: '🚌',
    label: '버스 이용',
    detail: '간선버스: 140, 240, 341, 360\n지선버스: 4412, 6411',
  },
  {
    icon: '🚗',
    label: '자가용 이용',
    detail: '건물 지하 주차장 이용 가능 (2시간 무료)',
  },
  {
    icon: '📍',
    label: '주요 건물',
    detail: '청담역 3번 출구 → GS25 편의점 옆 골목 → 청담타워',
  },
];