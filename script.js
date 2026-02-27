// ========== 전역 변수 ==========
let currentQuestion = 0;
let answers = [];
let scores = { coolBlue: 0, vampPurple: 0, solarGold: 0, forestGreen: 0, softPink: 0, midnightBlack: 0 };

const answerScores = [
    // Q1: A(CB/SG), B(SR/FG), C(SG/VP), D(MB/CB)
    [ {coolBlue: 3, solarGold: 2}, {softPink: 3, forestGreen: 2}, {solarGold: 3, vampPurple: 2}, {midnightBlack: 3, coolBlue: 2} ],
    // Q2: A(SG/CB), B(FG/SR), C(VP/SG), D(CB/MB)
    [ {solarGold: 3, coolBlue: 2}, {forestGreen: 3, softPink: 2}, {vampPurple: 3, solarGold: 2}, {coolBlue: 3, midnightBlack: 2} ],
    // Q3: A(MB/VP), B(FG/SR), C(VP/MB), D(SR/FG)
    [ {midnightBlack: 3, vampPurple: 2}, {forestGreen: 3, softPink: 2}, {vampPurple: 3, midnightBlack: 2}, {softPink: 3, forestGreen: 2} ],
    // Q4: A(CB/SG), B(SR/FG), C(SG/VP), D(MB/CB)
    [ {coolBlue: 3, solarGold: 2}, {softPink: 3, forestGreen: 2}, {solarGold: 3, vampPurple: 2}, {midnightBlack: 3, coolBlue: 2} ],
    // Q5: A(SG/CB), B(FG/SR), C(VP/SG), D(CB/MB)
    [ {solarGold: 3, coolBlue: 2}, {forestGreen: 3, softPink: 2}, {vampPurple: 3, solarGold: 2}, {coolBlue: 3, midnightBlack: 2} ],
    // Q6: A(MB/VP), B(FG/SR), C(VP/MB), D(SR/FG)
    [ {midnightBlack: 3, vampPurple: 2}, {forestGreen: 3, softPink: 2}, {vampPurple: 3, midnightBlack: 2}, {softPink: 3, forestGreen: 2} ],
    // Q7: A(CB/SG), B(SR/FG), C(SG/VP), D(MB/CB)
    [ {coolBlue: 3, solarGold: 2}, {softPink: 3, forestGreen: 2}, {solarGold: 3, vampPurple: 2}, {midnightBlack: 3, coolBlue: 2} ],
    // Q8: A(SG/CB), B(FG/SR), C(VP/SG), D(CB/MB)
    [ {solarGold: 3, coolBlue: 2}, {forestGreen: 3, softPink: 2}, {vampPurple: 3, solarGold: 2}, {coolBlue: 3, midnightBlack: 2} ],
    // Q9: A(MB/VP), B(FG/SR), C(VP/MB), D(SR/FG)
    [ {midnightBlack: 3, vampPurple: 2}, {forestGreen: 3, softPink: 2}, {vampPurple: 3, midnightBlack: 2}, {softPink: 3, forestGreen: 2} ],
    // Q10: A(CB/SG), B(SR/FG), C(SG/VP), D(MB/CB)
    [ {coolBlue: 3, solarGold: 2}, {softPink: 3, forestGreen: 2}, {solarGold: 3, vampPurple: 2}, {midnightBlack: 3, coolBlue: 2} ],
    // Q11: A(SG/CB), B(FG/SR), C(VP/SG), D(CB/MB)
    [ {solarGold: 3, coolBlue: 2}, {forestGreen: 3, softPink: 2}, {vampPurple: 3, solarGold: 2}, {coolBlue: 3, midnightBlack: 2} ],
    // Q12: A(MB/VP), B(FG/SR), C(VP/MB), D(SR/FG)
    [ {midnightBlack: 3, vampPurple: 2}, {forestGreen: 3, softPink: 2}, {vampPurple: 3, midnightBlack: 2}, {softPink: 3, forestGreen: 2} ],
    // Q13: A(CB/SG), B(SR/FG), C(SG/VP), D(MB/CB)
    [ {coolBlue: 3, solarGold: 2}, {softPink: 3, forestGreen: 2}, {solarGold: 3, vampPurple: 2}, {midnightBlack: 3, coolBlue: 2} ],
    // Q14: A(SG/CB), B(FG/SR), C(VP/SG), D(CB/MB)
    [ {solarGold: 3, coolBlue: 2}, {forestGreen: 3, softPink: 2}, {vampPurple: 3, solarGold: 2}, {coolBlue: 3, midnightBlack: 2} ],
    // Q15: A(MB/VP), B(FG/SR), C(VP/MB), D(SR/FG)
    [ {midnightBlack: 3, vampPurple: 2}, {forestGreen: 3, softPink: 2}, {vampPurple: 3, midnightBlack: 2}, {softPink: 3, forestGreen: 2} ]
];

const colorData = {
    coolBlue: { image: 'cool-blue.png?v=3', hex: '#3b82f6' },
    vampPurple: { image: 'vamp-purple.png?v=2', hex: '#8b5cf6' },
    solarGold: { image: 'solar-gold.png?v=2', hex: '#fbbf24' },
    forestGreen: { image: 'forest-green.png?v=2', hex: '#10b981' },
    softPink: { image: 'soft-pink.png?v=2', hex: '#f472b6' },
    midnightBlack: { image: 'midnight-black.png?v=3', hex: '#334155' }
};

document.addEventListener('DOMContentLoaded', function() {
    // index.html에서 로드된 경우 기본 언어를 한국어(ko)로 설정
    if (window.location.pathname.endsWith('index.html') || window.location.pathname === '/' || window.location.pathname.includes('aura2026')) {
        window.currentLanguage = 'ko';
    } else {
        const bodyStartLang = document.body.getAttribute('data-start-lang');
        if (bodyStartLang) window.currentLanguage = bodyStartLang;
        else window.currentLanguage = detectLanguage();
    }
    
    const dropdown = document.getElementById('language-dropdown');
    const dropdownBtn = document.getElementById('dropdown-main-btn');
    if (dropdownBtn) {
        dropdownBtn.addEventListener('click', (e) => { e.stopPropagation(); dropdown.classList.toggle('active'); });
    }
    document.querySelectorAll('.lang-option').forEach(option => {
        option.addEventListener('click', () => {
            const lang = option.getAttribute('data-lang');
            changeLanguage(lang);
            const langMap = { ko: '🇰🇷 KO', en: '🇺🇸 EN', ja: '🇯🇵 JA', es: '🇪🇸 ES', pt: '🇵🇹 PT' };
            const textEl = document.querySelector('.current-lang-text');
            if (textEl) textEl.textContent = langMap[lang] || lang.toUpperCase();
            dropdown.classList.remove('active');
            if (window.currentResult) drawResultToCanvas();
        });
    });
    document.addEventListener('click', () => { if (dropdown) dropdown.classList.remove('active'); });
    
    updatePageLanguage();
    
    const langMap = { ko: '🇰🇷 KO', en: '🇺🇸 EN', ja: '🇯🇵 JA', es: '🇪🇸 ES', pt: '🇵🇹 PT' };
    const textEl = document.querySelector('.current-lang-text');
    if (textEl) textEl.textContent = langMap[window.currentLanguage] || window.currentLanguage.toUpperCase();
    
    const urlParams = new URLSearchParams(window.location.search);
    const sharedResult = urlParams.get('r');
    if (sharedResult && colorData[sharedResult]) setTimeout(() => showResultWithKey(sharedResult), 100);
});

function showScreen(screenId) {
    document.querySelectorAll('.screen').forEach(screen => screen.classList.remove('active'));
    document.getElementById(screenId).classList.add('active');
    window.scrollTo(0, 0);
}

function startTest() {
    currentQuestion = 0;
    answers = [];
    scores = { coolBlue: 0, vampPurple: 0, solarGold: 0, forestGreen: 0, softPink: 0, midnightBlack: 0 };
    const newUrl = window.location.protocol + "//" + window.location.host + window.location.pathname;
    window.history.pushState({path:newUrl}, '', newUrl);
    
    // 시작 시 언어 상태를 다시 한번 업데이트 (안정성 확보)
    updatePageLanguage();
    
    showScreen('question-screen');
    displayQuestion();
}

function displayQuestion() {
    const questionData = translations[window.currentLanguage].questions[currentQuestion];
    document.getElementById('question-title').textContent = questionData.q;
    const answersContainer = document.getElementById('answers-container');
    answersContainer.innerHTML = '';
    questionData.a.forEach((answer, index) => {
        const button = document.createElement('button');
        button.className = 'answer-btn';
        button.textContent = answer;
        button.onclick = () => selectAnswer(index);
        answersContainer.appendChild(button);
    });
    
    // 첫 번째 질문이 아니면 '이전' 버튼 표시
    const backBtn = document.getElementById('back-btn');
    if (backBtn) {
        backBtn.style.display = currentQuestion > 0 ? 'block' : 'none';
    }
    
    updateProgress();
}

function selectAnswer(answerIndex) {
    answers.push(answerIndex);
    const scoreMap = answerScores[currentQuestion][answerIndex];
    for (let color in scoreMap) scores[color] += scoreMap[color];
    currentQuestion++;
    if (currentQuestion < 15) displayQuestion();
    else showLoadingScreen();
}

function goBack() {
    if (currentQuestion > 0) {
        currentQuestion--;
        const lastAnswerIndex = answers.pop();
        const scoreMap = answerScores[currentQuestion][lastAnswerIndex];
        // 이전 질문에서 더해졌던 점수 차감
        for (let color in scoreMap) scores[color] -= scoreMap[color];
        displayQuestion();
    }
}

function updateProgress() {
    const progress = ((currentQuestion + 1) / 15) * 100;
    const bar = document.getElementById('progress-bar');
    if (bar) bar.style.width = progress + '%';
    const text = document.getElementById('current-question');
    if (text) text.textContent = currentQuestion + 1;
}

function showLoadingScreen() {
    showScreen('loading-screen');
    let step = 0;
    const steps = ['step1', 'step2', 'step3'];
    const interval = setInterval(() => {
        document.getElementById('loading-step').textContent = t('loading.' + steps[step]);
        step++;
        if (step >= 3) {
            clearInterval(interval);
            setTimeout(calculateResult, 500);
        }
    }, 800);
}

function calculateResult() {
    let maxScore = -1;
    let resultColor = '';
    for (let color in scores) {
        if (scores[color] > maxScore) {
            maxScore = scores[color];
            resultColor = color;
        }
    }
    showResultWithKey(resultColor);
}

function showResultWithKey(resultColor) {
    const result = translations[window.currentLanguage].colors[resultColor];
    const colorInfo = colorData[resultColor];
    const displayEl = document.getElementById('result-color-display');
    if (displayEl) {
        displayEl.style.background = `url('${colorInfo.image}') center/cover no-repeat`;
        // AI Optimization: Contextual ARIA label for image background
        displayEl.setAttribute('role', 'img');
        displayEl.setAttribute('aria-label', `2026 Aura Color Result: ${result.name} - ${result.subtitle}. ${result.description}`);
    }
    document.getElementById('result-title').textContent = result.name;
    document.getElementById('result-subtitle').textContent = result.subtitle;
    const keywordsContainer = document.getElementById('keywords');
    if (keywordsContainer) {
        keywordsContainer.innerHTML = '';
        result.keywords.forEach(keyword => {
            const tag = document.createElement('div');
            tag.className = 'keyword-tag';
            tag.textContent = keyword;
            keywordsContainer.appendChild(tag);
        });
    }
    document.getElementById('result-description').textContent = result.description;
    const strengthsList = document.getElementById('strengths-list');
    if (strengthsList) {
        strengthsList.innerHTML = '';
        result.strengths.forEach(s => { const li = document.createElement('li'); li.textContent = s; strengthsList.appendChild(li); });
    }
    const recommendationsList = document.getElementById('recommendations-list');
    if (recommendationsList) {
        recommendationsList.innerHTML = '';
        result.recommendations.forEach(r => { const li = document.createElement('li'); li.textContent = r; recommendationsList.appendChild(li); });
    }
    
    // 현재 결과 키 저장 (언어 변경 시 업데이트를 위함)
    window.currentResult = resultColor;
    
    // 다른 아우라 둘러보기 탭 초기화
    populateAuraTabs();
    
    showScreen('result-screen');
    // 결과 화면이 뜨자마자 미리 캔버스를 그려둡니다.
    setTimeout(drawResultToCanvas, 300);
}

function populateAuraTabs() {
    const tabsContainer = document.getElementById('aura-tabs');
    if (!tabsContainer) return;
    tabsContainer.innerHTML = '';
    
    for (let key in colorData) {
        const btn = document.createElement('button');
        btn.className = 'aura-tab-btn';
        if (window.currentResult === key) btn.classList.add('active');
        btn.style.backgroundImage = `url('${colorData[key].image}')`;
        btn.onclick = () => {
            document.querySelectorAll('.aura-tab-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            showAuraDetail(key);
        };
        tabsContainer.appendChild(btn);
    }
}

function showAuraDetail(key) {
    const detail = translations[window.currentLanguage].colors[key];
    const container = document.getElementById('aura-explorer-detail');
    if (!container) return;
    container.style.display = 'block';
    document.getElementById('explorer-name').textContent = detail.name;
    document.getElementById('explorer-subtitle').textContent = detail.subtitle;
    document.getElementById('explorer-description').textContent = detail.description;
}

function retryTest() {
    startTest();
}

function downloadResult() {
    const canvas = document.getElementById('result-canvas');
    const link = document.createElement('a');
    link.download = `2026-Aura-Color-${window.currentResult}.png`;
    link.href = canvas.toDataURL('image/png');
    link.click();
}

function shareResult() {
    const resultKey = window.currentResult;
    const url = `${window.location.origin}${window.location.pathname}?r=${resultKey}`;
    
    if (navigator.share) {
        navigator.share({
            title: '2026 Aura Color Test',
            text: t('shareMessage').replace('[COLOR]', translations[window.currentLanguage].colors[resultKey].name),
            url: url
        }).catch(err => {
            copyToClipboard(url);
        });
    } else {
        copyToClipboard(url);
    }
}

function copyToClipboard(text) {
    const dummy = document.createElement('input');
    document.body.appendChild(dummy);
    dummy.value = text;
    dummy.select();
    document.execCommand('copy');
    document.body.removeChild(dummy);
    alert(t('linkCopied'));
}

function drawResultToCanvas() {
    const canvas = document.getElementById('result-canvas');
    if (!canvas || !window.currentResult) return;
    
    const ctx = canvas.getContext('2d');
    const resKey = window.currentResult;
    const data = translations[window.currentLanguage].colors[resKey];
    
    // 캔버스 크기 설정 (공유용 고해상도)
    canvas.width = 800;
    canvas.height = 1000;
    
    // 배경 그라데이션
    const grad = ctx.createLinearGradient(0, 0, 0, 1000);
    grad.addColorStop(0, '#667eea');
    grad.addColorStop(1, '#764ba2');
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, 800, 1000);
    
    // 흰색 라운드 박스
    ctx.fillStyle = 'white';
    ctx.beginPath();
    ctx.roundRect(50, 50, 700, 900, 40);
    ctx.fill();
    
    // 이미지 그리기
    const img = new Image();
    img.src = colorData[resKey].image;
    img.onload = () => {
        ctx.save();
        ctx.beginPath();
        ctx.arc(400, 300, 180, 0, Math.PI * 2);
        ctx.clip();
        ctx.drawImage(img, 220, 120, 360, 360);
        ctx.restore();
        
        // 텍스트 그리기
        ctx.textAlign = 'center';
        
        // 제목
        ctx.fillStyle = '#333';
        ctx.font = 'bold 60px sans-serif';
        ctx.fillText(data.name, 400, 560);
        
        // 부제목
        ctx.fillStyle = '#666';
        ctx.font = '32px sans-serif';
        ctx.fillText(data.subtitle, 400, 610);
        
        // 키워드
        ctx.font = 'bold 24px sans-serif';
        const kwText = data.keywords.join(' · ');
        ctx.fillStyle = '#667eea';
        ctx.fillText(kwText, 400, 670);
        
        // 설명 (줄바꿈 처리)
        ctx.fillStyle = '#555';
        ctx.font = '24px sans-serif';
        wrapText(ctx, data.description, 400, 740, 600, 35);
        
        // 하단 도메인
        ctx.fillStyle = '#999';
        ctx.font = '20px sans-serif';
        ctx.fillText('2026aura.pages.dev', 400, 910);
    };
}

function wrapText(context, text, x, y, maxWidth, lineHeight) {
    const words = text.split(' ');
    let line = '';
    for (let n = 0; n < words.length; n++) {
        const testLine = line + words[n] + ' ';
        const metrics = context.measureText(testLine);
        const testWidth = metrics.width;
        if (testWidth > maxWidth && n > 0) {
            context.fillText(line, x, y);
            line = words[n] + ' ';
            y += lineHeight;
        } else {
            line = testLine;
        }
    }
    context.fillText(line, x, y);
}
