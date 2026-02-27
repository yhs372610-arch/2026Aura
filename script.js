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
    // 초기 언어 설정 로직 개선
    const path = window.location.pathname;
    if (path.endsWith('en.html')) window.currentLanguage = 'en';
    else if (path.endsWith('es.html')) window.currentLanguage = 'es';
    else if (path.endsWith('ja.html')) window.currentLanguage = 'ja';
    else if (path.endsWith('pt.html')) window.currentLanguage = 'pt';
    else window.currentLanguage = 'ko'; // 기본값 한국어
    
    const dropdown = document.getElementById('language-dropdown');
    const dropdownBtn = document.getElementById('dropdown-main-btn');
    if (dropdownBtn) {
        dropdownBtn.addEventListener('click', (e) => { e.stopPropagation(); dropdown.classList.toggle('active'); });
    }
    document.querySelectorAll('.lang-option').forEach(option => {
        option.addEventListener('click', () => {
            const lang = option.getAttribute('data-lang');
            changeLanguage(lang);
            updateLangButtonText(lang);
            dropdown.classList.remove('active');
            if (window.currentResult) drawResultToCanvas();
        });
    });
    document.addEventListener('click', () => { if (dropdown) dropdown.classList.remove('active'); });
    
    updatePageLanguage();
    updateLangButtonText(window.currentLanguage);
    
    const urlParams = new URLSearchParams(window.location.search);
    const sharedResult = urlParams.get('r');
    if (sharedResult && colorData[sharedResult]) setTimeout(() => showResultWithKey(sharedResult), 100);
});

function updateLangButtonText(lang) {
    const langMap = { ko: '🇰🇷 KO', en: '🇺🇸 EN', ja: '🇯🇵 JA', es: '🇪🇸 ES', pt: '🇵🇹 PT' };
    const textEl = document.querySelector('.current-lang-text');
    if (textEl) textEl.textContent = langMap[lang] || lang.toUpperCase();
}

function showScreen(screenId) {
    document.querySelectorAll('.screen').forEach(screen => screen.classList.remove('active'));
    document.getElementById(screenId).classList.add('active');
    window.scrollTo(0, 0);
}

function startTest() {
    currentQuestion = 0;
    answers = [];
    scores = { coolBlue: 0, vampPurple: 0, solarGold: 0, forestGreen: 0, softPink: 0, midnightBlack: 0 };
    
    // URL 정리
    const newUrl = window.location.protocol + "//" + window.location.host + window.location.pathname;
    window.history.pushState({path:newUrl}, '', newUrl);
    
    // 언어 상태 강제 업데이트
    updatePageLanguage();
    
    showScreen('question-screen');
    displayQuestion();
}

function displayQuestion() {
    const questionData = translations[window.currentLanguage].questions[currentQuestion];
    if (!questionData) return;
    
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
    
    const backBtn = document.getElementById('back-btn');
    if (backBtn) backBtn.style.display = currentQuestion > 0 ? 'block' : 'none';
    
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
    const langData = translations[window.currentLanguage];
    const result = langData.colors[resultColor];
    const colorInfo = colorData[resultColor];
    
    const displayEl = document.getElementById('result-color-display');
    if (displayEl) {
        displayEl.style.background = `url('${colorInfo.image}') center/cover no-repeat`;
        displayEl.setAttribute('role', 'img');
        displayEl.setAttribute('aria-label', `${result.name} - ${result.subtitle}. ${result.description}`);
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
    
    window.currentResult = resultColor;
    populateAuraTabs();
    showScreen('result-screen');
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
    showScreen('home-screen');
}

function downloadResult() {
    const canvas = document.getElementById('result-canvas');
    const link = document.createElement('a');
    link.download = `2026-Aura-Color-${window.currentResult}.png`;
    link.href = canvas.toDataURL('image/png');
    link.click();
}

async function shareResult() {
    const resultKey = typeof window.currentResult === 'string' ? window.currentResult : window.currentResult.color;
    const canvas = document.getElementById('result-canvas');
    const currentLang = window.currentLanguage;
    
    // 현재 언어에 맞는 파일 경로 설정 (상대방이 해당 언어로 접속하게 함)
    let langFile = 'index.html';
    if (currentLang === 'en') langFile = 'en.html';
    else if (currentLang === 'es') langFile = 'es.html';
    else if (currentLang === 'ja') langFile = 'ja.html';
    
    const url = `${window.location.origin}/${langFile}?r=${resultKey}`;
    const colorName = translations[currentLang].colors[resultKey].name;
    const shareText = t('shareMessage').replace('[COLOR]', colorName);

    try {
        const blob = await new Promise(resolve => canvas.toBlob(resolve, 'image/png'));
        const file = new File([blob], `2026-Aura-${resultKey}-${currentLang}.png`, { type: 'image/png' });

        if (navigator.canShare && navigator.canShare({ files: [file] })) {
            await navigator.share({
                files: [file],
                title: '2026 Aura Color Test',
                text: shareText,
                url: url
            });
        } else if (navigator.share) {
            await navigator.share({
                title: '2026 Aura Color Test',
                text: shareText,
                url: url
            });
        } else {
            throw new Error('Share not supported');
        }
    } catch (err) {
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
    const resKey = typeof window.currentResult === 'string' ? window.currentResult : window.currentResult.color;
    const data = translations[window.currentLanguage].colors[resKey];
    
    // 고해상도 설정 (카드 뉴스 규격 1080x1350)
    canvas.width = 1080;
    canvas.height = 1350;
    
    // 1. 배경 그라데이션
    const grad = ctx.createLinearGradient(0, 0, 1080, 1350);
    grad.addColorStop(0, '#667eea');
    grad.addColorStop(1, '#764ba2');
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, 1080, 1350);
    
    // 2. 메인 카드 박스
    ctx.fillStyle = 'white';
    ctx.beginPath();
    ctx.roundRect(80, 80, 920, 1190, 60);
    ctx.fill();
    
    // 3. 상단 헤더
    ctx.textAlign = 'center';
    ctx.fillStyle = '#667eea';
    ctx.font = 'bold 40px sans-serif';
    ctx.fillText('2026 AURA COLOR TEST', 540, 160);
    
    // 4. 아우라 이미지 그리기 (비율 유지 로직)
    const img = new Image();
    img.src = colorData[resKey].image;
    img.onload = () => {
        ctx.save();
        ctx.beginPath();
        ctx.arc(540, 420, 220, 0, Math.PI * 2);
        ctx.strokeStyle = '#f0f4ff';
        ctx.lineWidth = 15;
        ctx.stroke();
        ctx.clip();
        
        // Image Aspect Ratio Correction (Cover)
        const imgAspect = img.width / img.height;
        const radius = 220;
        const drawSize = radius * 2;
        let drawW, drawH, drawX, drawY;
        
        if (imgAspect > 1) {
            drawH = drawSize;
            drawW = drawSize * imgAspect;
        } else {
            drawW = drawSize;
            drawH = drawSize / imgAspect;
        }
        drawX = 540 - (drawW / 2);
        drawY = 420 - (drawH / 2);
        
        ctx.drawImage(img, drawX, drawY, drawW, drawH);
        ctx.restore();
        
        // 5. 결과 텍스트 섹션
        ctx.fillStyle = '#1a1a1a';
        ctx.font = '900 85px sans-serif';
        ctx.fillText(data.name, 540, 750);
        
        ctx.font = 'bold 38px sans-serif';
        const subTitle = data.subtitle;
        const subWidth = ctx.measureText(subTitle).width + 60;
        ctx.fillStyle = '#f8f9ff';
        ctx.beginPath();
        ctx.roundRect(540 - (subWidth / 2), 790, subWidth, 65, 30);
        ctx.fill();
        ctx.fillStyle = '#667eea';
        ctx.fillText(subTitle, 540, 835);
        
        ctx.fillStyle = '#999';
        ctx.font = 'bold 32px sans-serif';
        ctx.fillText(data.keywords.join('  •  '), 540, 910);
        
        ctx.strokeStyle = '#eee';
        ctx.lineWidth = 2;
        ctx.beginPath(); ctx.moveTo(200, 960); ctx.lineTo(880, 960); ctx.stroke();
        
        ctx.fillStyle = '#444';
        ctx.font = '34px sans-serif';
        wrapText(ctx, data.description, 540, 1030, 750, 50);
        
        ctx.fillStyle = '#ccc';
        ctx.font = 'bold 28px sans-serif';
        ctx.fillText('2026aura.pages.dev', 540, 1220);
    };
}

function wrapText(context, text, x, y, maxWidth, lineHeight) {
    const isCjk = /[ㄱ-ㅎ|ㅏ-ㅣ|가-힣|ぁ-ん|ァ-ヶ|ー|々|〆|〤]/.test(text);
    const words = isCjk ? text.split('') : text.split(' ');
    let line = '';

    for (let n = 0; n < words.length; n++) {
        const testLine = line + words[n] + (isCjk ? '' : ' ');
        const metrics = context.measureText(testLine);
        if (metrics.width > maxWidth && n > 0) {
            context.fillText(line, x, y);
            line = words[n] + (isCjk ? '' : ' ');
            y += lineHeight;
        } else {
            line = testLine;
        }
    }
    context.fillText(line, x, y);
}
