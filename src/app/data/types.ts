/**
 * 통합 타입 정의 파일
 * --------------------------------------------------
 * 이 파일은 아카데미 기본형 템플릿에서 사용하는 데이터 구조를 정의합니다.
 *
 * 운영 목적
 * - data.ts를 작성할 때 형태를 명확하게 유지
 * - Cursor가 자동 생성한 데이터가 어떤 구조여야 하는지 기준 제공
 * - 고객별 데이터 교체 시 타입 오류를 빠르게 발견
 */

import type { LucideIcon } from 'lucide-react';

/** 공통 링크 정보 */
export interface NavItem {
  label: string;
  href: string;
}

/** 사이트 전반에서 공통으로 쓰는 기본 설정 */
export interface SiteConfig {
  siteName: string;
  image: {
    src: string;
    alt: string;
  };
  phone: string;
  email: string;
  address: {
    street: string;
    building: string;
    subway: string;
  };
  map: {
    lat?: number;
    lng?: number;
    fullAddress: string;
    googleMapEmbedUrl?: string;
    googleMapLink: string;
    naverMapLink: string;
  };
  hours: {
    weekday: string;
    saturday: string;
    sunday: string;
    consultationHours: string;
  };
  cta: {
    primary: string;
    secondary: string;
    short: string;
  };
  kakaoTalkUrl: string;
}

/** 히어로 섹션 */
export interface HeroContent {
  headline: string;
  headlineHighlight: string;
  headlineEnd: string;
  subheadline: string;
  image: {
    src: string;
    alt: string;
  };
  stats: Array<{
    value: string;
    label: string;
  }>;
}

/** 수업 카테고리 섹션 상단 소개 */
export interface ClassCategoriesSection {
  title: string;
  subtitle: string;
  cta: {
    description: string;
    buttonText: string;
  };
}

/** 대표 수업 과정 카드 */
export interface ClassCategory {
  title: string;
  description: string;
  duration: string;
  sessions: string;
  targets: string[];
}

/** 커리큘럼 단계 */
export interface CurriculumStage {
  title: string;
  weeks: string;
  topics: string[];
}

/** 강사진 정보 */
export interface Instructor {
  name: string;
  title: string;
  experience: string;
  education: string;
  specialties: string[];
  achievements: string;
  certifications: string[];
  image: string;
}

/** 일정 요약 카드 */
export interface ScheduleInfo {
  label: string;
  value: string;
  detail: string;
}

/** 가격 카드 */
export interface PricingItem {
  title: string;
  duration: string;
  frequency: string;
  price: string;
  features: string[];
}

/** 후기 카드 */
export interface ReviewItem {
  name: string;
  course: string;
  rating: number;
  date: string;
  content: string;
  result: string;
}

/** 후기 통계 */
export interface ReviewStatItem {
  value: string;
  label: string;
}

/** FAQ */
export interface FAQItem {
  question: string;
  answer: string;
}

/** 교통 안내 */
export interface TransportationInfo {
  icon: string;
  label: string;
  detail: string;
}

/** 문의 섹션 텍스트 */
export interface ContactContent {
  sectionTitle: string;
  sectionDescription: string;
  consultationTitle: string;
  labels: {
    phone: string;
    email: string;
    hours: string;
    address: string;
  };
  buttons: {
    naverMap: string;
    googleMap: string;
    phoneConsultation: string;
    kakaoConsultation: string;
    emailInquiry: string;
  };
  transportationTitle: string;
  ctaDescription: string;
}

/** 푸터 SNS 링크 */
export interface FooterSocialLink {
  platform: string;
  url: string;
  icon: LucideIcon;
}

/** 푸터 데이터 */
export interface FooterContent {
  description: string;
  socialLinks: FooterSocialLink[];
  copyright: string;
}
