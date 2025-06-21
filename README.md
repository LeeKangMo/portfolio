# 이강모 - 백엔드 개발자 포트폴리오

바이브코딩에서 학습한 Next.js, TypeScript, Tailwind CSS를 활용하여 구축된 모던하고 반응형인 백엔드 개발자 포트폴리오 웹사이트입니다.

> 🎓 **바이브코딩 학습 결과물**: 이 포트폴리오는 바이브코딩의 Next.js 강의를 통해 학습한 기술들을 실무 경험과 결합하여 제작된 프로젝트입니다.

## 🌟 주요 기능

- **반응형 디자인**: 모든 디바이스에서 완벽하게 작동
- **다크 모드 지원**: 사용자 선호도에 따른 테마 전환
- **모던 UI/UX**: Tailwind CSS를 활용한 깔끔하고 현대적인 디자인
- **성능 최적화**: Next.js 15와 Turbopack을 통한 빠른 로딩
- **SEO 최적화**: 검색 엔진 최적화를 위한 메타 태그 및 구조화된 데이터

## 🛠 기술 스택

- **프레임워크**: Next.js 15 (App Router)
- **언어**: TypeScript
- **스타일링**: Tailwind CSS
- **개발 도구**: Turbopack, ESLint
- **배포**: Vercel (권장)

## 📁 프로젝트 구조

```
src/
├── app/
│   ├── layout.tsx          # 루트 레이아웃
│   ├── page.tsx            # 메인 페이지
│   └── globals.css         # 글로벌 스타일
├── components/
│   ├── Navigation.tsx      # 네비게이션 바
│   ├── Hero.tsx           # 히어로 섹션
│   ├── About.tsx          # 소개 섹션
│   ├── Skills.tsx         # 스킬 섹션
│   ├── Projects.tsx       # 프로젝트 섹션
│   └── Contact.tsx        # 연락처 섹션
└── ...
```

## 🚀 시작하기

### 필수 요구사항

- Node.js 18.17 이상
- npm, yarn, pnpm 또는 bun

### 설치 및 실행

1. 의존성 설치:
```bash
npm install
```

2. 개발 서버 실행:
```bash
npm run dev
```

3. 브라우저에서 [http://localhost:3000](http://localhost:3000) 열기

### 빌드 및 배포

```bash
# 프로덕션 빌드
npm run build

# 프로덕션 서버 시작
npm start

# 코드 린팅
npm run lint
```

## 🎨 커스터마이징

### 개인 정보 수정

1. `src/components/Hero.tsx` - 메인 타이틀 및 소개 문구
2. `src/components/About.tsx` - 자기소개 및 경험
3. `src/components/Skills.tsx` - 기술 스택 및 숙련도
4. `src/components/Projects.tsx` - 프로젝트 정보
5. `src/components/Contact.tsx` - 연락처 정보

### 스타일 수정

- `tailwind.config.ts` - Tailwind CSS 설정
- `src/app/globals.css` - 글로벌 CSS 스타일

## 📱 포함된 섹션

1. **Hero Section**: 메인 소개 및 CTA 버튼
2. **About Section**: 개발자 소개 및 철학
3. **Skills Section**: 기술 스택 및 숙련도
4. **Projects Section**: 주요 프로젝트 갤러리
5. **Contact Section**: 연락처 정보 및 폼

## 🔧 추가 기능 개발 가이드

### 새로운 섹션 추가

1. `src/components/` 디렉토리에 새 컴포넌트 생성
2. `src/app/page.tsx`에 컴포넌트 import 및 추가
3. `src/components/Navigation.tsx`에 네비게이션 링크 추가

### 애니메이션 추가

Framer Motion 또는 다른 애니메이션 라이브러리를 추가할 수 있습니다:

```bash
npm install framer-motion
```

## 📄 라이선스

이 프로젝트는 MIT 라이선스 하에 배포됩니다.

## 🤝 기여하기

1. 이 저장소를 Fork
2. 새 기능 브랜치 생성 (`git checkout -b feature/AmazingFeature`)
3. 변경사항 커밋 (`git commit -m 'Add some AmazingFeature'`)
4. 브랜치에 Push (`git push origin feature/AmazingFeature`)
5. Pull Request 생성

## 📧 문의

8년 7개월 경력의 백엔드 개발자 이강모의 포트폴리오에 대한 질문이나 제안사항이 있으시면 언제든 연락주세요!

## 🎓 학습 출처

이 프로젝트는 **바이브코딩**의 Next.js 강의를 통해 학습한 내용을 바탕으로 제작되었습니다.
- 바이브코딩에서 배운 최신 웹 개발 기술들을 실무 포트폴리오에 적용
- Next.js 15, TypeScript, Tailwind CSS 등 모던 프론트엔드 기술 활용
- 8년 7개월의 백엔드 개발 경험과 새로운 프론트엔드 기술의 융합

---

⭐ 이 프로젝트가 도움이 되었다면 별표를 눌러주세요!

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
