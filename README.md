# Sora 2 System Card - 실무 가이드

OpenAI Sora 2 비디오 생성 AI에 대한 종합 실무 가이드 웹사이트입니다.

## 📁 파일 구조

```
sora2-guide/
├── index.html          # 메인 HTML 파일
├── css/
│   └── style.css       # 스타일시트
├── js/
│   └── script.js       # JavaScript 인터랙션
└── README.md           # 이 파일
```

## 🚀 사용 방법

### 1. 로컬에서 바로 실행
- `index.html` 파일을 더블클릭하여 브라우저에서 열기
- 별도의 서버 설정 없이 바로 동작합니다

### 2. 웹 호스팅 배포

#### GitHub Pages (무료)
1. GitHub 계정 생성 및 로그인
2. 새 Repository 생성 (예: `sora2-guide`)
3. 모든 파일 업로드
4. Settings → Pages에서 배포 활성화
5. 퍼블릭 URL: `https://<사용자명>.github.io/sora2-guide/`

#### Netlify (무료)
1. [netlify.com](https://netlify.com) 가입
2. "New site from Git" 또는 드래그 앤 드롭으로 폴더 업로드
3. 자동으로 퍼블릭 URL 생성
4. 커스텀 도메인 연결 가능

#### Vercel (무료)
1. [vercel.com](https://vercel.com) 가입
2. "New Project" 생성
3. 폴더 업로드 또는 GitHub 연동
4. 자동 배포 및 퍼블릭 URL 생성

#### Cloudflare Pages (무료)
1. [pages.cloudflare.com](https://pages.cloudflare.com) 가입
2. "Create a project" 선택
3. 파일 업로드 또는 Git 연동
4. 퍼블릭 URL 자동 생성

## ✨ 주요 기능

- **반응형 디자인**: 모바일, 태블릿, 데스크톱 완벽 지원
- **인터랙티브 네비게이션**: 부드러운 스크롤과 활성 섹션 하이라이트
- **모바일 메뉴**: 작은 화면에서 햄버거 메뉴 자동 전환
- **애니메이션**: 스크롤 시 요소별 페이드인 효과
- **맨 위로 버튼**: 긴 페이지 빠른 이동
- **섹션 링크 복사**: 섹션 제목 클릭으로 링크 공유

## 🎨 커스터마이징

### 색상 변경
`css/style.css` 파일의 `:root` 섹션에서 CSS 변수 수정:

```css
:root {
    --primary-color: #10a37f;    /* 메인 컬러 */
    --secondary-color: #6e59a5;  /* 보조 컬러 */
    --accent-color: #ff6b6b;     /* 강조 컬러 */
}
```

### 콘텐츠 수정
`index.html` 파일에서 직접 텍스트 편집

### 폰트 변경
`index.html`의 `<head>` 섹션에서 Google Fonts 링크 수정

## 📱 브라우저 지원

- Chrome/Edge (최신 버전)
- Firefox (최신 버전)
- Safari (최신 버전)
- 모바일 브라우저 (iOS Safari, Chrome Mobile)

## 🔧 기술 스택

- **HTML5**: 시맨틱 마크업
- **CSS3**: Flexbox, Grid, CSS Variables, Animations
- **Vanilla JavaScript**: 외부 라이브러리 없이 순수 JS
- **Font Awesome**: 아이콘
- **Google Fonts**: Noto Sans KR, Inter

## 📝 라이선스

본 웹사이트는 OpenAI Sora 2 System Card를 기반으로 제작된 교육용 가이드입니다.

## 👤 제작자

Jason Bae
- 직책: IP사업팀 팀장
- 회사: Com2uS
- 전문 분야: IP 사업 개발, 글로벌 커머스, AI 워크플로우

---

**배포 후 퍼블릭 링크 생성 완료!** 🎉

위의 호스팅 서비스 중 하나를 선택하여 몇 분 안에 전 세계 어디서나 접근 가능한 웹사이트를 만들 수 있습니다.
