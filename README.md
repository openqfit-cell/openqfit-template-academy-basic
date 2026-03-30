# 교육 아카데미 웹사이트 템플릿

체계적이고 전문적인 교육 비즈니스를 위한 반응형 웹사이트 템플릿입니다.

## 주요 특징

- **데이터 중심 설계**: 모든 컨텐츠가 `/src/app/data/`에 모듈화되어 있어 쉽게 수정 가능
- **모듈형 데이터 구조**: 섹션별로 분리된 데이터 파일로 유지보수성 극대화
- **깔끔한 컴포넌트 구조**: 각 섹션이 독립적인 컴포넌트로 분리되어 있어 유지보수가 용이
- **반응형 디자인**: 모바일, 태블릿, 데스크탑 모든 기기에 최적화
- **교육 중심 UI/UX**: 명료성과 가독성에 초점을 맞춘 실용적인 디자인
- **실사용 최적화**: 클릭 가능한 전화/이메일, 실시간 지도, 네이버/구글 지도 연동 등 실제 비즈니스에 필요한 모든 기능 포함
- **TypeScript 지원**: 타입 안정성으로 개발 생산성 향상

## 프로젝트 구조

```
/src/app/
├── data/
│   ├── siteData.ts          # 전역 설정 (사이트명, 연락처, 지도, 네비게이션)
│   ├── heroData.ts          # 히어로 섹션 데이터
│   ├── classCategoriesData.ts # 수업 과정 섹션 데이터
│   ├── curriculumData.ts    # 커리큘럼 섹션 데이터
│   ├── instructorsData.ts   # 강사진 섹션 데이터
│   ├── scheduleData.ts      # 수업 정보/수강료 섹션 데이터
│   ├── reviewsData.ts       # 수강 후기 섹션 데이터
│   ├── faqData.ts           # 자주 묻는 질문 섹션 데이터
│   ├── contactData.ts       # 오시는 길 섹션 데이터
│   ├── footerData.ts        # 푸터 섹션 데이터
│   └── types.ts             # TypeScript 타입 정의
├── components/
│   ├── Header.tsx           # 상단 네비게이션
│   ├── Hero.tsx             # 히어로 섹션
│   ├── ClassCategories.tsx  # 수업 과정 섹션
│   ├── Curriculum.tsx       # 커리큘럼 섹션
│   ├── Instructors.tsx      # 강사진 섹션
│   ├── Schedule.tsx         # 수업 정보/수강료 섹션
│   ├── Reviews.tsx          # 수강 후기 섹션
│   ├── FAQ.tsx              # 자주 묻는 질문 섹션
│   ├── Contact.tsx          # 오시는 길 섹션
│   └── Footer.tsx           # 푸터
└── App.tsx                  # 메인 앱 컴포넌트
```

## 빠른 시작

### 1. 설치

```bash
# 의존성 설치
npm install

# 또는
pnpm install
```

### 2. 개발 서버 실행

```bash
npm run dev
```

브라우저에서 `http://localhost:5173`을 열어 확인하세요.

### 3. 빌드

```bash
npm run build
```

빌드된 파일은 `dist` 폴더에 생성됩니다.

## 커스터마이징 가이드

### 1. 기본 정보 수정

`/src/app/data/siteData.ts` 파일을 열어 다음 정보를 수정하세요:

```typescript
export const siteConfig = {
  siteName: '청담아카데미',        // 학원 이름
  phone: '02-1234-5678',          // 전화번호
  email: 'info@cheongdam-academy.com',  // 이메일
  address: {
    street: '서울특별시 강남구 청담동 123-45',  // 주소
    building: '청담타워 5층',
    subway: '지하철 7호선 청담역 3번 출구 도보 5분',
  },
  // 지도 설정
  map: {
    lat: 37.5172,        // 위도
    lng: 127.0473,       // 경도
    fullAddress: '서울특별시 강남구 청담동 123-45 청담타워',
    googleMapsApiKey: '',  // Google Maps Embed API Key (선택사항)
  },
  // 운영 시간
  hours: {
    weekday: '평일 09:00 - 21:00',
    saturday: '토요일 09:00 - 18:00',
    sunday: '일요일 및 공휴일 휴무',
    consultationHours: '평일 09:00 - 20:00',
  },
  // CTA 버튼 텍스트
  cta: {
    primary: '수강 상담 신청',
    short: '상담',
  },
  // 카카오톡 상담 링크
  kakaoTalkUrl: 'https://pf.kakao.com/_xYOURID/chat',
};
```

**지도 설정 방법**:
- 네이버 지도나 구글 지도에서 위치를 검색하여 좌표(위도/경도)를 확인하세요
- `googleMapsApiKey`는 선택사항입니다 (비워두면 지도 링크 버튼만 표시됨)
- API 키가 필요한 경우: https://developers.google.com/maps/documentation/embed/get-api-key

### 2. 각 섹션 수정

각 섹션의 데이터는 해당 데이터 파일을 수정하면 됩니다:

- **히어로 섹션**: `/src/app/data/heroData.ts`
- **수업 과정**: `/src/app/data/classCategoriesData.ts`
- **커리큘럼**: `/src/app/data/curriculumData.ts`
- **강사진**: `/src/app/data/instructorsData.ts`
- **수업 정보**: `/src/app/data/scheduleData.ts`
- **수강 후기**: `/src/app/data/reviewsData.ts`
- **FAQ**: `/src/app/data/faqData.ts`
- **오시는 길**: `/src/app/data/contactData.ts`
- **푸터**: `/src/app/data/footerData.ts`

### 3. 이미지 교체

**방법 1: 외부 URL 사용**
```typescript
image: {
  src: 'https://your-image-url.com/image.jpg',
  alt: '이미지 설명',
}
```

**방법 2: 로컬 이미지 사용**
1. 이미지를 `/public` 폴더에 저장
2. 데이터 파일에서 경로를 `/image-name.jpg`로 설정

### 4. 색상 변경

기본 강조 색상(파란색)을 변경하려면:
- 컴포넌트 파일에서 `blue-600`, `blue-700` 등의 Tailwind 클래스를 다른 색상으로 변경하세요
- 예: `bg-blue-600` → `bg-green-600`

### 5. 섹션 순서 변경

`/src/app/App.tsx` 파일에서 컴포넌트 순서를 변경하세요:

```tsx
<main>
  <Hero />
  <ClassCategories />
  <Curriculum />
  <Instructors />
  <Schedule />
  <Reviews />
  <FAQ />
  <Contact />
</main>
```

## 기술 스택

- **React 18**: UI 라이브러리
- **TypeScript**: 타입 안정성
- **Vite**: 빌드 도구
- **Tailwind CSS v4**: 스타일링
- **Lucide React**: 아이콘
- **Radix UI**: Accordion 컴포넌트 (FAQ)

## 배포

### Vercel
```bash
# Vercel CLI 설치
npm i -g vercel

# 배포
vercel
```

### Netlify
```bash
# 빌드
npm run build

# dist 폴더를 Netlify에 드래그 앤 드롭
```

### GitHub Pages
```bash
# vite.config.ts에 base 설정 추가
# base: '/repository-name/'

npm run build
```

## 주요 기능

### ✅ 완전히 기능하는 CTA
- 클릭 가능한 전화번호 (`tel:` 링크)
- 클릭 가능한 이메일 (`mailto:` 링크, 미리 작성된 제목/본문 포함)
- 카카오톡 상담 링크
- 네이버/구글 지도 연동

### ✅ 반응형 디자인
- 모바일, 태블릿, 데스크탑 최적화
- 터치 친화적 UI

### ✅ SEO 최적화
- 시맨틱 HTML
- Meta 태그 설정
- Open Graph 지원

### ✅ 접근성
- ARIA 레이블
- 키보드 네비게이션
- 스크린 리더 지원

## 브라우저 지원

- Chrome (최신 2개 버전)
- Firefox (최신 2개 버전)
- Safari (최신 2개 버전)
- Edge (최신 2개 버전)

## 라이선스

이 템플릿은 MIT 라이선스 하에 배포되며 상업적 용도로도 자유롭게 사용 가능합니다.

## 지원

질문이나 문제가 있으시면 이슈를 등록해주세요.

---

Made with ❤️ for education businesses
