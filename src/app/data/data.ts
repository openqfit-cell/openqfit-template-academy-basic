/**
 * 통합 데이터 파일
 * --------------------------------------------------
 * 이 파일은 아카데미 기본형 템플릿의 텍스트 / 링크 / 가격 / 연락처 / FAQ / 후기 / 커리큘럼 등을 한곳에 모아 관리합니다.
 *
 * 추천 운영 흐름
 * 1) 고객이 Tally 폼으로 정보를 입력
 * 2) Zapier가 JSON으로 저장
 * 3) Notion 컬럼에 JSON 누적
 * 4) Cursor에서 JSON을 이 data.ts 구조로 변환
 * 5) 템플릿에 바로 반영
 *
 * 즉, 실무에서는 고객별로 이 파일만 새로 생성하거나 교체해도 대부분의 화면 텍스트를 빠르게 바꿀 수 있습니다.
 */

import { Facebook, Instagram, Youtube } from 'lucide-react';
import { imageData } from './images';
import type {
  ClassCategoriesSection,
  ClassCategory,
  ContactContent,
  CurriculumStage,
  FAQItem,
  FooterContent,
  HeroContent,
  Instructor,
  NavItem,
  PricingItem,
  ReviewItem,
  ReviewStatItem,
  ScheduleInfo,
  SiteConfig,
  TransportationInfo,
} from './types';

/**
 * 사이트 공통 기본 설정
 * --------------------------------------------------
 * 헤더 / 히어로 / 문의 / 푸터 등 여러 곳에서 함께 사용하는 기본값입니다.
 */
export const siteConfig: SiteConfig = {
  siteName: '청담아카데미',
  image: imageData.header.logo,
  phone: '02-1234-5678',
  email: 'info@cheongdam-academy.com',
  address: {
    street: '서울특별시 강남구 청담동 123-45',
    building: '청담타워 5층',
    subway: '지하철 7호선 청담역 3번 출구 도보 5분',
  },
  map: {
    lat: 37.5172,
    lng: 127.0473,
    fullAddress: '서울특별시 강남구 청담동 123-45 청담타워 5층',
    googleMapEmbedUrl:
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3165.2954074838185!2d127.03288301531362!3d37.49983467981156!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357ca15a4c1d92e1%3A0x4a580c87a87e664d!2sGangnam-gu%2C%20Seoul!5e0!3m2!1sen!2skr!4v1234567890',
    googleMapLink:
      'https://www.google.com/maps/search/%EC%84%9C%EC%9A%B8%ED%8A%B9%EB%B3%84%EC%8B%9C+%EA%B0%95%EB%82%A8%EA%B5%AC+%EC%B2%AD%EB%8B%B4%EB%8F%99+123-45',
    naverMapLink:
      'https://map.naver.com/p/search/%EC%84%9C%EC%9A%B8%ED%8A%B9%EB%B3%84%EC%8B%9C%20%EA%B0%95%EB%82%A8%EA%B5%AC%20%EC%B2%AD%EB%8B%B4%EB%8F%99%20123-45',
  },
  hours: {
    weekday: '평일 09:00 - 21:00',
    saturday: '토요일 09:00 - 18:00',
    sunday: '일요일 및 공휴일 휴무',
    consultationHours: '평일 09:00 - 20:00',
  },
  cta: {
    primary: '수강 상담 신청',
    secondary: '수업 과정 보기',
    short: '상담',
  },
  kakaoTalkUrl: 'https://open.kakao.com/o/example',
};

/**
 * 상단 내비게이션 메뉴
 * --------------------------------------------------
 * 기본형은 섹션 수가 적기 때문에 메뉴도 간결하게 유지하는 것이 좋습니다.
 */
export const navItems: NavItem[] = [
  { label: '소개', href: '#classes' },
  { label: '강사진', href: '#instructors' },
  { label: '수강료', href: '#pricing' },
  { label: 'FAQ', href: '#faq' },
  { label: '문의', href: '#contact' },
];

/**
 * 히어로 섹션 데이터
 * --------------------------------------------------
 * 첫 화면에서 아카데미의 핵심 강점을 가장 빠르게 전달합니다.
 */
export const heroData: HeroContent = {
  headline: '체계적인 커리큘럼으로',
  headlineHighlight: '확실한 실력 향상',
  headlineEnd: '을 약속합니다',
  subheadline:
    '15년 경력의 전문 강사진과 함께하는 맞춤형 교육. 기초부터 심화까지 단계별 학습으로 목표를 달성하세요.',
  image: imageData.hero.main,
  stats: [
    { value: '15년', label: '교육 경력' },
    { value: '1,500+', label: '누적 수강생' },
    { value: '98%', label: '수강 만족도' },
  ],
};

/**
 * 수업 카테고리 섹션 상단 문구
 */
export const classCategoriesSectionData: ClassCategoriesSection = {
  title: '수업 과정',
  subtitle: '수준과 목적에 맞는 다양한 과정을 제공합니다',
  cta: {
    description:
      '어떤 과정이 적합한지 궁금하신가요? 무료 레벨 테스트를 통해 맞춤 과정을 추천해드립니다.',
    buttonText: '상담 후 테스트 안내',
  },
};

/**
 * 대표 수업 과정 카드 데이터
 * --------------------------------------------------
 * 기본형에서는 고객이 자주 선택하는 대표 과정 위주로 단순하게 보여주는 것이 좋습니다.
 */
export const classCategoriesData: ClassCategory[] = [
  {
    title: '기초 과정',
    description: '처음 시작하는 분들을 위한 기본기 집중 과정',
    duration: '3개월',
    sessions: '주 2회',
    targets: ['기초부터 배우고 싶은 학생', '체계적인 학습을 원하는 입문자', '기본기를 다지고 싶은 분'],
  },
  {
    title: '심화 과정',
    description: '기초를 다진 분들을 위한 실전 응용 과정',
    duration: '4개월',
    sessions: '주 3회',
    targets: ['기초 과정 수료자', '실력 향상이 필요한 중급자', '실전 능력을 키우고 싶은 분'],
  },
  {
    title: '그룹 수업',
    description: '4-6명 소그룹으로 진행되는 협력 학습 과정',
    duration: '3개월',
    sessions: '주 2회',
    targets: ['또래 친구들과 함께 배우고 싶은 학생', '합리적인 가격으로 수강하고 싶은 분', '그룹 활동을 선호하는 분'],
  },
  {
    title: '1:1 맞춤',
    description: '개인별 수준에 맞춘 완전 맞춤형 과정',
    duration: '협의',
    sessions: '협의',
    targets: ['개인 맞춤 커리큘럼이 필요한 분', '집중 관리를 원하는 학생', '유연한 일정이 필요한 분'],
  },
];


/**
 * 강사진 데이터
 */
export const instructorsData: Instructor[] = [
  {
    name: '김민수',
    title: '대표강사',
    experience: '15년 경력',
    education: '서울대학교 교육학 석사',
    specialties: ['기초 과정', '심화 과정', '입시 컨설팅'],
    achievements: '전 대치동 유명학원 대표강사',
    certifications: ['교원자격증 보유', '학습코칭 전문가', '교육부 인증 강사'],
    image: imageData.instructors.primary,
  },
  {
    name: '박지영',
    title: '수석강사',
    experience: '12년 경력',
    education: '연세대학교 교육학 박사',
    specialties: ['1:1 맞춤', '그룹 수업', '학습 컨설팅'],
    achievements: '교육부 우수강사 선정 (2024)',
    certifications: ['교원자격증 보유', '심리상담사 2급', '학습전략 지도사'],
    image: imageData.instructors.secondary,
  },
];

/** 교육 철학 문구 */
export const teachingPhilosophy: string[] = [
  '학생 개개인의 수준과 특성을 고려한 맞춤 지도',
  '체계적인 학습 관리 및 정기적인 피드백 제공',
  '학부모 상담을 통한 학습 진도 공유',
  '장기적인 학습 계획 수립 및 목표 달성 지원',
];

/**
 * 일정 요약 카드
 */
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

/**
 * 대표 과정 가격 데이터
 */
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


/**
 * FAQ 데이터
 */
export const faqData: FAQItem[] = [
  {
    question: '수업은 어떻게 진행되나요?',
    answer:
      '1:1 맞춤 수업의 경우 학생의 수준을 먼저 파악한 후 개인별 맞춤 커리큘럼으로 진행됩니다. 그룹 수업은 4-6명의 소그룹으로 진행되며, 매 수업마다 이론 설명과 실습, 피드백이 함께 이루어집니다.',
  },
  {
    question: '등록 전 상담이 가능한가요?',
    answer:
      '네, 가능합니다. 전화 상담 또는 방문 상담 모두 가능하며, 방문 상담 시 수업 환경과 교재를 직접 확인하실 수 있습니다. 상담은 사전 예약제로 운영되며, 평일 오전 10시부터 저녁 8시까지 가능합니다.',
  },
  {
    question: '결제 방법은 어떻게 되나요?',
    answer:
      '현금, 카드, 계좌이체 모두 가능합니다. 수강료는 등록 시 일시불 결제가 원칙이며, 3개월 이상 과정의 경우 분할 결제도 가능합니다. 카드 무이자 할부도 제공됩니다.',
  },
  {
    question: '중도 환불이 가능한가요?',
    answer:
      '학원법에 따라 수강 시작 전에는 전액 환불이 가능하며, 수강 시작 후에는 진행된 수업 일수를 제외한 나머지 금액이 환불됩니다. 자세한 환불 규정은 등록 시 안내해드립니다.',
  },
  {
    question: '수업을 빠지면 보강이 가능한가요?',
    answer:
      '네, 가능합니다. 사전에 연락주시면 다른 시간대로 보강 수업을 안내해드립니다. 1:1 수업의 경우 강사와 협의하여 일정을 조정할 수 있으며, 그룹 수업의 경우 주말 보강반을 운영하고 있습니다.',
  },
  {
    question: '주차는 가능한가요?',
    answer:
      '학원 건물 지하에 주차장이 있으며, 2시간 무료 주차가 가능합니다. 주차 공간이 제한적이므로 가급적 대중교통 이용을 권장드립니다. 청담역 3번 출구에서 도보 5분 거리입니다.',
  },
];

/**
 * 문의 섹션 문구
 */
export const contactContent: ContactContent = {
  sectionTitle: '오시는 길',
  sectionDescription: '청담아카데미를 방문해주세요',
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
  ctaDescription:
    '전화 또는 방문 상담을 원하시면 아래 버튼을 클릭하세요\n카카오톡 상담도 가능합니다.',
};

/**
 * 오시는 길 하단 교통 수단 안내
 */
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

/**
 * 푸터 데이터
 */
export const footerData: FooterContent = {
  description: '15년 경력의 전문 강사진과 함께하는 체계적인 교육 프로그램',
  socialLinks: [
    {
      platform: 'Instagram',
      url: 'https://instagram.com/',
      icon: Instagram,
    },
    {
      platform: 'Facebook',
      url: 'https://facebook.com/',
      icon: Facebook,
    },
    {
      platform: 'Youtube',
      url: 'https://youtube.com/',
      icon: Youtube,
    },
  ],
  copyright: `© 2026 청담아카데미. All rights reserved.`,
};
