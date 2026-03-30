/**
 * Site Configuration
 * 
 * This file contains global site settings and shared data.
 * Edit this file to customize basic site information.
 * 
 * Section-specific content is organized in separate data files:
 * - heroData.ts
 * - classCategoriesData.ts
 * - curriculumData.ts
 * - instructorsData.ts
 * - scheduleData.ts
 * - reviewsData.ts
 * - faqData.ts
 * - contactData.ts
 * - footerData.ts
 */

import type { SiteConfig, NavItem } from './types';

// =============================================================================
// SITE CONFIGURATION
// =============================================================================

export const siteConfig: SiteConfig = {
  // Basic site information
  siteName: '청담아카데미',
  
  // Contact information
  phone: '02-1234-5678',
  email: 'info@cheongdam-academy.com',
  
  // Address
  address: {
    street: '서울특별시 강남구 청담동 123-45',
    building: '청담타워 5층',
    subway: '지하철 7호선 청담역 3번 출구 도보 5분',
  },
  
  // Map settings
  // Replace these coordinates with your actual location
  map: {
    // Coordinates (latitude, longitude) - example: Gangnam Station area
    lat: 37.5172,
    lng: 127.0473,
    // Full address for map URLs
    fullAddress: '서울특별시 강남구 청담동 123-45 청담타워',
    // Google Maps iframe embed URL
    // Get this from Google Maps > Share > Embed a map > copy src URL only
    googleMapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3165.2954074838185!2d127.03288301531362!3d37.49983467981156!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357ca15a4c1d92e1%3A0x4a580c87a87e664d!2sGangnam-gu%2C%20Seoul!5e0!3m2!1sen!2skr!4v1234567890',
    // External map links
    googleMapLink: 'https://www.google.com/maps/search/%EC%84%9C%EC%9A%B8%EC%8B%9C+%EA%B0%95%EB%82%A8%EA%B5%AC+%ED%85%8C%ED%97%A4%EB%9E%80%EB%A1%9C+123',
    naverMapLink: 'https://map.naver.com/p/search/%EC%84%9C%EC%9A%B8%EC%8B%9C%20%EA%B0%95%EB%82%A8%EA%B5%AC%20%ED%85%8C%ED%97%A4%EB%9E%80%EB%A1%9C%20123',
  },
  
  // Business hours
  hours: {
    weekday: '평일 09:00 - 21:00',
    saturday: '토요일 09:00 - 18:00',
    sunday: '일요일 및 공휴일 휴무',
    consultationHours: '평일 09:00 - 20:00',
  },
  
  // CTA button text
  cta: {
    primary: '수강 상담 신청',
    short: '상담',
  },
  
  // KakaoTalk consultation link
  // Replace with your actual KakaoTalk open chat or channel URL
  // Example: https://pf.kakao.com/_xYOURID or https://open.kakao.com/o/YOUR_CHAT_ID
  kakaoTalkUrl: 'https://pf.kakao.com/_xexaGxj/chat',
};

// =============================================================================
// NAVIGATION MENU
// =============================================================================

export const navItems: NavItem[] = [
  { label: '수업과정', href: '#classes' },
  { label: '강사진', href: '#instructors' },
  { label: '수강료', href: '#pricing' },
  { label: 'FAQ', href: '#faq' },
  { label: '오시는길', href: '#contact' },
];