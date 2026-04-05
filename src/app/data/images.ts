/**
 * 이미지 통합 관리 파일
 * --------------------------------------------------
 * 이 파일은 아카데미 기본형 템플릿에서 사용하는 모든 이미지 경로를 한곳에 모아 관리합니다.
 *
 * 이렇게 분리하는 이유
 * 1) 고객이 사진만 교체할 때 컴포넌트를 수정하지 않고 여기만 바꾸면 됩니다.
 * 2) Tally / Zapier / Notion / Cursor 자동화 흐름에서 텍스트 데이터와 이미지 데이터를 분리해 관리하기 쉽습니다.
 * 3) 나중에 파일명 변경, CDN 경로 변경, 이미지 최적화 작업이 생겨도 영향 범위를 최소화할 수 있습니다.
 */
export const imageData = {
  /** 상단 헤더 로고 */
  header: {
    logo: {
      src: '/images/logo.png',
      alt: '청담아카데미 로고',
    },
  },

  /** 첫 화면 히어로 대표 이미지 */
  hero: {
    main: {
      src: '/images/hero_img.jpg',
      alt: '청담아카데미 수업 환경',
    },
  },

  /** 강사진 프로필 이미지 */
  instructors: {
    primary: '/images/instructor01_img.jpg',
    secondary: '/images/instructor02_img.jpg',
  },
} as const;
