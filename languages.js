// ===================================
// 다국어 동적 메타태그 설정 시스템
// ===================================

// 1. 사용자 언어 감지 함수
function detectUserLanguage() {
    // URL 파라미터에서 언어 확인 (우선순위 1)
    const urlParams = new URLSearchParams(window.location.search);
    const urlLang = urlParams.get('lang');
    if (urlLang && ['ko', 'en', 'ja', 'es'].includes(urlLang)) {
      return urlLang;
    }
    
    // 로컬 스토리지에서 저장된 언어 확인 (우선순위 2)
    const savedLang = localStorage.getItem('userLanguage');
    if (savedLang && ['ko', 'en', 'ja', 'es'].includes(savedLang)) {
      return savedLang;
    }
    
    // 브라우저 언어 감지 (우선순위 3)
    const browserLang = navigator.language || navigator.userLanguage;
    
    if (browserLang.startsWith('ko')) return 'ko';
    if (browserLang.startsWith('ja')) return 'ja';
    if (browserLang.startsWith('es')) return 'es';
    
    return 'en'; // 기본값
  }
  
  // 2. 언어별 메타데이터 정의
  const metaData = {
    ko: {
      // 기본 메타태그
      title: "2026 오라 컬러 테스트",
      description: "심리 기반 성격 분석으로 당신의 에너지 컬러를 발견하세요! 2분 만에 완료되는 15개 질문 테스트 ✨",
      
      // OG 메타태그
      ogTitle: "나의 2026 오라 컬러는?",
      ogDescription: "15개 질문으로 알아보는 나의 에너지 컬러! 당신도 테스트해보세요 🎨",
      ogLocale: "ko_KR",
      
      // 트위터 카드
      twitterTitle: "나의 2026 오라 컬러 테스트",
      twitterDescription: "심리 테스트로 알아보는 나의 에너지 ✨",
      
      // 카카오톡 전용
      kakaoTitle: "나는 신비로운 오라!",
      kakaoDescription: "당신의 오라 컬러는? 2분이면 알 수 있어요! 💜"
    },
    
    en: {
      title: "2026 Aura Color Test",
      description: "Discover your energy color through psychology-based personality analysis! Complete 15 questions in 2 minutes ✨",
      
      ogTitle: "What's Your 2026 Aura Color?",
      ogDescription: "Take the 15-question test to discover your energy color! 🎨",
      ogLocale: "en_US",
      
      twitterTitle: "2026 Aura Color Test",
      twitterDescription: "Discover your energy through psychology-based personality test ✨"
    },
    
    ja: {
      title: "2026オーラカラーテスト",
      description: "心理学ベースの性格分析であなたのエネルギーカラーを発見！2分で完了する15問のテスト ✨",
      
      ogTitle: "あなたの2026年オーラカラーは？",
      ogDescription: "15問の質問であなたのエネルギーカラーを発見！あなたもテストしてみませんか？🎨",
      ogLocale: "ja_JP",
      
      twitterTitle: "2026オーラカラーテスト",
      twitterDescription: "心理テストであなたのエネルギーを発見 ✨"
    },
    
    es: {
      title: "Test de Color de Aura 2026",
      description: "¡Descubre tu color de energía a través del análisis de personalidad basado en psicología! 15 preguntas en 2 minutos ✨",
      
      ogTitle: "¿Cuál es tu Color de Aura 2026?",
      ogDescription: "¡Responde 15 preguntas para descubrir tu color de energía! 🎨",
      ogLocale: "es_ES",
      
      twitterTitle: "Test de Color de Aura 2026",
      twitterDescription: "Descubre tu energía con un test de personalidad basado en psicología ✨"
    }
  };
  
  // 3. 메타태그 업데이트 함수
  function updateMetaTags(lang) {
    const data = metaData[lang];
    
    // 페이지 타이틀 변경
    document.title = data.title;
    
    // Description 메타태그
    updateOrCreateMeta('name', 'description', data.description);
    
    // Open Graph 메타태그
    updateOrCreateMeta('property', 'og:title', data.ogTitle);
    updateOrCreateMeta('property', 'og:description', data.ogDescription);
    updateOrCreateMeta('property', 'og:locale', data.ogLocale);
    updateOrCreateMeta('property', 'og:type', 'website');
    updateOrCreateMeta('property', 'og:url', window.location.href);
    
    // OG 이미지 (언어별로 다른 이미지 사용 가능)
    const ogImage = `https://2026aura.pages.dev/og-image-${lang}.png`;
    updateOrCreateMeta('property', 'og:image', ogImage);
    updateOrCreateMeta('property', 'og:image:width', '1200');
    updateOrCreateMeta('property', 'og:image:height', '630');
    updateOrCreateMeta('property', 'og:image:type', 'image/png');
    
    // Twitter Card 메타태그
    updateOrCreateMeta('name', 'twitter:card', 'summary_large_image');
    updateOrCreateMeta('name', 'twitter:title', data.twitterTitle || data.ogTitle);
    updateOrCreateMeta('name', 'twitter:description', data.twitterDescription || data.ogDescription);
    updateOrCreateMeta('name', 'twitter:image', ogImage);
    
    // 카카오톡 전용 메타태그 (한국어인 경우)
    if (lang === 'ko') {
      updateOrCreateMeta('property', 'kakao:title', data.kakaoTitle);
      updateOrCreateMeta('property', 'kakao:description', data.kakaoDescription);
    }
    
    // 언어를 로컬 스토리지에 저장
    localStorage.setItem('userLanguage', lang);
    
    // HTML lang 속성 변경
    document.documentElement.lang = lang;
  }
  
  // 4. 메타태그 생성/업데이트 헬퍼 함수
  function updateOrCreateMeta(attrName, attrValue, content) {
    let element = document.querySelector(`meta[${attrName}="${attrValue}"]`);
    
    if (element) {
      // 기존 태그 업데이트
      element.setAttribute('content', content);
    } else {
      // 새 태그 생성
      element = document.createElement('meta');
      element.setAttribute(attrName, attrValue);
      element.setAttribute('content', content);
      document.head.appendChild(element);
    }
  }
  
  // 5. 결과 페이지용 - 사용자 결과 포함 메타태그
  function updateResultMetaTags(lang, colorResult) {
    const data = metaData[lang];
    
    // 결과별 메시지 (예시)
    const resultMessages = {
      ko: {
        purple: "신비로운 보라",
        blue: "평온한 파랑",
        green: "생동감 넘치는 초록",
        yellow: "활기찬 노랑",
        red: "열정적인 빨강",
        pink: "따뜻한 분홍"
      },
      en: {
        purple: "Mystical Purple",
        blue: "Calm Blue",
        green: "Vibrant Green",
        yellow: "Energetic Yellow",
        red: "Passionate Red",
        pink: "Warm Pink"
      },
      ja: {
        purple: "神秘的な紫",
        blue: "穏やかな青",
        green: "活気的な緑",
        yellow: "元気な黄色",
        red: "情熱的な赤",
        pink: "温かいピンク"
      },
      es: {
        purple: "Púrpura Místico",
        blue: "Azul Tranquilo",
        green: "Verde Vibrante",
        yellow: "Amarillo Energético",
        red: "Rojo Apasionado",
        pink: "Rosa Cálido"
      }
    };
    
    const colorName = resultMessages[lang][colorResult] || colorResult;
    
    // 개인화된 타이틀
    const personalizedTitle = lang === 'ko' ? `나는 ${colorName} 오라!` :
                             lang === 'ja' ? `私は${colorName}オーラ！` :
                             lang === 'es' ? `¡Soy Aura ${colorName}!` :
                             `I'm ${colorName} Aura!`;
    
    updateOrCreateMeta('property', 'og:title', personalizedTitle);
    updateOrCreateMeta('name', 'twitter:title', personalizedTitle);
    
    // 결과별 이미지
    const resultImage = `https://2026aura.pages.dev/results/${colorResult}-${lang}.png`;
    updateOrCreateMeta('property', 'og:image', resultImage);
    updateOrCreateMeta('name', 'twitter:image', resultImage);
  }
  
  // 6. 언어 전환 함수 (언어 버튼 클릭 시 사용)
  function switchLanguage(newLang) {
    if (!['ko', 'en', 'ja', 'es'].includes(newLang)) {
      console.error('Unsupported language:', newLang);
      return;
    }
    
    updateMetaTags(newLang);
    
    // 페이지의 다른 텍스트도 변경 (선택사항)
    updatePageContent(newLang);
    
    // URL에 언어 파라미터 추가 (선택사항)
    const url = new URL(window.location);
    url.searchParams.set('lang', newLang);
    window.history.pushState({}, '', url);
  }
  
  // 7. 페이지 콘텐츠 업데이트 (선택사항)
  function updatePageContent(lang) {
    // UI 텍스트 변경
    const uiTexts = {
      ko: {
        startButton: "테스트 시작",
        shareButton: "결과 공유하기"
      },
      en: {
        startButton: "Start Test",
        shareButton: "Share Result"
      },
      ja: {
        startButton: "テスト開始",
        shareButton: "結果をシェア"
      },
      es: {
        startButton: "Comenzar Test",
        shareButton: "Compartir Resultado"
      }
    };
    
    // 예시: 버튼 텍스트 변경
    const startBtn = document.querySelector('#startButton');
    if (startBtn) {
      startBtn.textContent = uiTexts[lang].startButton;
    }
    
    const shareBtn = document.querySelector('#shareButton');
    if (shareBtn) {
      shareBtn.textContent = uiTexts[lang].shareButton;
    }
  }
  
  // ===================================
  // 실행: 페이지 로드 시 자동 감지 및 설정
  // ===================================
  document.addEventListener('DOMContentLoaded', function() {
    const userLang = detectUserLanguage();
    updateMetaTags(userLang);
    
    // 언어 선택 버튼에 이벤트 리스너 추가
    document.querySelectorAll('.lang-btn').forEach(btn => {
      btn.addEventListener('click', function(e) {
        e.preventDefault();
        const lang = this.getAttribute('data-lang');
        switchLanguage(lang);
      });
    });
  });
  
  // ===================================
  // 결과 페이지용: 결과와 함께 메타태그 업데이트
  // ===================================
  // 결과 페이지에서 호출 예시:
  // updateResultMetaTags('ko', 'purple');
  