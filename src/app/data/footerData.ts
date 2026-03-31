import { Instagram, Facebook, Youtube } from 'lucide-react';
import type { FooterContent } from './types';
import { navItems, siteConfig } from './siteData';

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
  copyright: `© 2026 ${siteConfig.siteName}. All rights reserved.`,
};