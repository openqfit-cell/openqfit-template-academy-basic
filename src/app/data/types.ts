/**
 * Site Data Type Definitions
 * 
 * This file documents the structure of all data used in the academy website.
 * Refer to this when customizing siteData.ts
 */

// =============================================================================
// SITE CONFIGURATION
// =============================================================================

export interface SiteConfig {
  siteName: string;
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
    address: string;
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
    short: string;
  };
  kakaoTalkUrl: string;
}

// =============================================================================
// HERO SECTION
// =============================================================================

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

// =============================================================================
// NAVIGATION
// =============================================================================

export interface NavItem {
  label: string;
  href: string;
}

// =============================================================================
// CLASS CATEGORIES
// =============================================================================

export interface ClassCategory {
  title: string;
  description: string;
  duration: string;
  sessions: string;
  targets: string[];
}

export interface ClassCategoriesSection {
  title: string;
  subtitle: string;
  cta: {
    description: string;
    buttonText: string;
  };
}

// =============================================================================
// CURRICULUM
// =============================================================================

export interface CurriculumStage {
  title: string;
  weeks: string;
  topics: string[];
}

// =============================================================================
// INSTRUCTORS
// =============================================================================

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

// =============================================================================
// SCHEDULE & PRICING
// =============================================================================

export interface ScheduleInfo {
  label: string;
  value: string;
  detail: string;
}

export interface PricingItem {
  title: string;
  duration: string;
  frequency: string;
  price: string;
  features: string[];
}

// =============================================================================
// REVIEWS
// =============================================================================

export interface Review {
  name: string;
  course: string;
  rating: number;
  date: string;
  content: string;
  result: string;
}

export interface ReviewStat {
  value: string;
  label: string;
}

// =============================================================================
// FAQ
// =============================================================================

export interface FAQ {
  question: string;
  answer: string;
}

// =============================================================================
// TRANSPORTATION
// =============================================================================

export interface TransportationInfo {
  icon: string;
  label: string;
  detail: string;
}

// =============================================================================
// CONTACT SECTION
// =============================================================================

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

// =============================================================================
// FOOTER
// =============================================================================

export interface FooterContent {
  description: string;
  quickLinks: NavItem[];
  legal: Array<{
    label: string;
    href: string;
  }>;
  sectionTitles: {
    quickLinks: string;
    contact: string;
  };
  copyright: string;
}

// =============================================================================
// USAGE EXAMPLES
// =============================================================================

/**
 * Example: Adding a new class category
 * 
 * const newCategory: ClassCategory = {
 *   title: '특별반',
 *   description: '단기 집중 과정',
 *   duration: '2개월',
 *   sessions: '주 5회',
 *   targets: [
 *     '빠른 성과가 필요한 학생',
 *     '집중 학습을 원하는 분'
 *   ]
 * };
 * 
 * Add to classCategories array in siteData.ts
 */

/**
 * Example: Modifying hero stats
 * 
 * const customStats = [
 *   { value: '20년', label: '교육 경력' },
 *   { value: '2,000+', label: '수료생' },
 *   { value: '95%', label: '합격률' },
 * ];
 * 
 * Replace heroContent.stats in siteData.ts
 */

/**
 * Example: Adding a new instructor
 * 
 * const newInstructor: Instructor = {
 *   name: '이영희',
 *   title: '전임강사',
 *   experience: '8년 경력',
 *   education: '고려대학교 교육학 석사',
 *   specialties: ['그룹 수업', '입문 과정'],
 *   achievements: '교육청 우수강사 선정',
 *   certifications: ['교원자격증', '학습코칭 1급'],
 *   image: '/images/instructor-lee.jpg'
 * };
 * 
 * Add to instructors array in siteData.ts
 */