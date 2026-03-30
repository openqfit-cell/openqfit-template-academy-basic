/**
 * Footer Data
 * 
 * Configure footer content including description and legal links.
 * This is used in the site footer section.
 */

import type { FooterContent } from './types';
import { navItems, siteConfig } from './siteData';

export const footerData: FooterContent = {
  description: '15년 경력의 전문 강사진과 함께하는\n체계적인 교육 프로그램',
  quickLinks: navItems,
  legal: [
    { label: '개인정보처리방침', href: '/privacy' },
    { label: '이용약관', href: '/terms' },
  ],
  sectionTitles: {
    quickLinks: '바로가기',
    contact: '상담문의',
  },
  copyright: `© 2026 ${siteConfig.siteName}. All rights reserved.`,
};