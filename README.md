# Bootstrap BBS

> Vue.js와 Bootstrap을 사용한 게시판 프로젝트

## 📝 프로젝트 개요

이 프로젝트는 Vue.js 프레임워크와 Bootstrap-Vue를 사용하여 제작된 반응형 게시판 시스템입니다. 사용자는 글을 작성, 조회, 수정, 삭제할 수 있으며, 깔끔하고 직관적인 UI/UX를 제공합니다.

## 🚀 주요 기능

- 📋 게시글 목록 조회 (페이지네이션 포함)
- ✍️ 게시글 작성 및 수정
- 👀 게시글 상세 보기
- 🔍 반응형 디자인 (모바일, 태블릿, 데스크톱 지원)
- 🎨 Bootstrap 4 기반의 현대적인 UI

## 🛠️ 사용 기술

- **Frontend**: Vue.js 2.6, Vue Router
- **UI Framework**: Bootstrap 4, Bootstrap-Vue
- **HTTP Client**: Axios
- **모달**: Vue-js-modal
- **알림**: Vue-toasted
- **빌드 도구**: Webpack
- **테스트**: Jest

## 📦 설치 및 실행

### 의존성 설치

```bash
npm install
```

### 개발 서버 실행 (핫 리로드 포함, localhost:8080)

```bash
npm run dev
```

### 프로덕션 빌드

```bash
npm run build
```

### 프로덕션 빌드 및 번들 분석기 실행

```bash
npm run build --report
```

### 단위 테스트 실행

```bash
npm run unit
```

### 모든 테스트 실행

```bash
npm test
```

## 📁 프로젝트 구조

```
src/
├── App.vue                 # 메인 앱 컴포넌트
├── main.js                 # 앱 진입점
├── components/             # Vue 컴포넌트들
│   ├── Header.vue         # 헤더 컴포넌트
│   ├── Board.vue          # 게시판 목록
│   ├── Create.vue         # 게시글 작성
│   ├── ContentDetail.vue  # 게시글 상세보기
│   └── ...
├── router/                # 라우팅 설정
└── data/                  # 데이터 관리
```

## 🎯 사용 방법

1. **개발 환경 설정**: `npm install`로 필요한 패키지를 설치합니다.
2. **개발 서버 시작**: `npm run dev`로 개발 서버를 실행합니다.
3. **브라우저에서 확인**: http://localhost:8080 으로 접속하여 게시판을 확인합니다.

## 📖 추가 정보

자세한 설정 및 사용법은 다음 문서를 참고하세요:

- [Vue.js 공식 가이드](https://vuejs.org/guide/)
- [Bootstrap-Vue 문서](https://bootstrap-vue.org/)
- [Webpack 설정 가이드](http://vuejs-templates.github.io/webpack/)
- [Vue-loader 문서](http://vuejs.github.io/vue-loader/)

## 🤝 기여하기

1. 이 저장소를 포크합니다
2. 새로운 기능 브랜치를 생성합니다 (`git checkout -b feature/새기능`)
3. 변경사항을 커밋합니다 (`git commit -am '새기능 추가'`)
4. 브랜치에 푸시합니다 (`git push origin feature/새기능`)
5. Pull Request를 생성합니다

## 📄 라이선스

이 프로젝트는 MIT 라이선스하에 배포됩니다.
