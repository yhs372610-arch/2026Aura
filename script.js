// ========== 전역 변수 ==========
let currentQuestion = 0;
let answers = [];
let scores = { coolBlue: 0, vampPurple: 0, solarGold: 0, forestGreen: 0, softRose: 0, midnightBlack: 0 };

const answerScores = [
    // Q1: A(CB/SG), B(SR/FG), C(SG/VP), D(MB/CB)
    [ {coolBlue: 3, solarGold: 2}, {softRose: 3, forestGreen: 2}, {solarGold: 3, vampPurple: 2}, {midnightBlack: 3, coolBlue: 2} ],
    // Q2: A(SG/CB), B(FG/SR), C(VP/SG), D(CB/MB)
    [ {solarGold: 3, coolBlue: 2}, {forestGreen: 3, softRose: 2}, {vampPurple: 3, solarGold: 2}, {coolBlue: 3, midnightBlack: 2} ],
    // Q3: A(MB/VP), B(FG/SR), C(VP/MB), D(SR/FG)
    [ {midnightBlack: 3, vampPurple: 2}, {forestGreen: 3, softRose: 2}, {vampPurple: 3, midnightBlack: 2}, {softRose: 3, forestGreen: 2} ],
    // Q4: A(CB/SG), B(SR/FG), C(SG/VP), D(MB/CB)
    [ {coolBlue: 3, solarGold: 2}, {softRose: 3, forestGreen: 2}, {solarGold: 3, vampPurple: 2}, {midnightBlack: 3, coolBlue: 2} ],
    // Q5: A(SG/CB), B(FG/SR), C(VP/SG), D(CB/MB)
    [ {solarGold: 3, coolBlue: 2}, {forestGreen: 3, softRose: 2}, {vampPurple: 3, solarGold: 2}, {coolBlue: 3, midnightBlack: 2} ],
    // Q6: A(MB/VP), B(FG/SR), C(VP/MB), D(SR/FG)
    [ {midnightBlack: 3, vampPurple: 2}, {forestGreen: 3, softRose: 2}, {vampPurple: 3, midnightBlack: 2}, {softRose: 3, forestGreen: 2} ],
    // Q7: A(CB/SG), B(SR/FG), C(SG/VP), D(MB/CB)
    [ {coolBlue: 3, solarGold: 2}, {softRose: 3, forestGreen: 2}, {solarGold: 3, vampPurple: 2}, {midnightBlack: 3, coolBlue: 2} ],
    // Q8: A(SG/CB), B(FG/SR), C(VP/SG), D(CB/MB)
    [ {solarGold: 3, coolBlue: 2}, {forestGreen: 3, softRose: 2}, {vampPurple: 3, solarGold: 2}, {coolBlue: 3, midnightBlack: 2} ],
    // Q9: A(MB/VP), B(FG/SR), C(VP/MB), D(SR/FG)
    [ {midnightBlack: 3, vampPurple: 2}, {forestGreen: 3, softRose: 2}, {vampPurple: 3, midnightBlack: 2}, {softRose: 3, forestGreen: 2} ],
    // Q10: A(CB/SG), B(SR/FG), C(SG/VP), D(MB/CB)
    [ {coolBlue: 3, solarGold: 2}, {softRose: 3, forestGreen: 2}, {solarGold: 3, vampPurple: 2}, {midnightBlack: 3, coolBlue: 2} ],
    // Q11: A(SG/CB), B(FG/SR), C(VP/SG), D(CB/MB)
    [ {solarGold: 3, coolBlue: 2}, {forestGreen: 3, softRose: 2}, {vampPurple: 3, solarGold: 2}, {coolBlue: 3, midnightBlack: 2} ],
    // Q12: A(MB/VP), B(FG/SR), C(VP/MB), D(SR/FG)
    [ {midnightBlack: 3, vampPurple: 2}, {forestGreen: 3, softRose: 2}, {vampPurple: 3, midnightBlack: 2}, {softRose: 3, forestGreen: 2} ],
    // Q13: A(CB/SG), B(SR/FG), C(SG/VP), D(MB/CB)
    [ {coolBlue: 3, solarGold: 2}, {softRose: 3, forestGreen: 2}, {solarGold: 3, vampPurple: 2}, {midnightBlack: 3, coolBlue: 2} ],
    // Q14: A(SG/CB), B(FG/SR), C(VP/SG), D(CB/MB)
    [ {solarGold: 3, coolBlue: 2}, {forestGreen: 3, softRose: 2}, {vampPurple: 3, solarGold: 2}, {coolBlue: 3, midnightBlack: 2} ],
    // Q15: A(MB/VP), B(FG/SR), C(VP/MB), D(SR/FG)
    [ {midnightBlack: 3, vampPurple: 2}, {forestGreen: 3, softRose: 2}, {vampPurple: 3, midnightBlack: 2}, {softRose: 3, forestGreen: 2} ]
];

const colorData = {
    coolBlue: { image: 'cool-blue.png?v=3', hex: '#3b82f6' },
    vampPurple: { image: 'vamp-purple.png?v=2', hex: '#8b5cf6' },
    solarGold: { image: 'solar-gold.png?v=2', hex: '#fbbf24' },
    forestGreen: { image: 'forest-green.png?v=2', hex: '#10b981' },
    softRose: { image: 'soft-rose.png?v=2', hex: '#f472b6' },
    midnightBlack: { image: 'midnight-black.png?v=3', hex: '#334155' }
};

document.addEventListener('DOMContentLoaded', function() {
    const bodyStartLang = document.body.getAttribute('data-start-lang');
    if (bodyStartLang) currentLanguage = bodyStartLang;
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
    if (textEl) textEl.textContent = langMap[currentLanguage] || currentLanguage.toUpperCase();
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
    scores = { coolBlue: 0, vampPurple: 0, solarGold: 0, forestGreen: 0, softRose: 0, midnightBlack: 0 };
    const newUrl = window.location.protocol + "//" + window.location.host + window.location.pathname;
    window.history.pushState({path:newUrl}, '', newUrl);
    showScreen('question-screen');
    displayQuestion();
}

function displayQuestion() {
    const questionData = translations[currentLanguage].questions[currentQuestion];
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
    const steps = [t('loading.step1'), t('loading.step2'), t('loading.step3')];
    let stepIndex = 0;
    const stepElement = document.getElementById('loading-step');
    const stepInterval = setInterval(() => {
        stepIndex++;
        if (stepIndex < steps.length) stepElement.textContent = steps[stepIndex];
    }, 1000);
    setTimeout(() => { clearInterval(stepInterval); showResult(); }, 3000);
}

function showResult() {
    let maxScore = 0;
    let resultColor = 'coolBlue';
    for (let color in scores) { if (scores[color] > maxScore) { maxScore = scores[color]; resultColor = color; } }
    let fileName = currentLanguage === 'ko' ? '' : currentLanguage + '.html';
    const newUrl = window.location.protocol + "//" + window.location.host + window.location.pathname.replace(/\/[^\/]*$/, '/') + fileName + '?r=' + resultColor;
    window.history.pushState({path:newUrl}, '', newUrl);
    showResultWithKey(resultColor);
}

function showResultWithKey(resultColor) {
    const result = translations[currentLanguage].colors[resultColor];
    const colorInfo = colorData[resultColor];
    const displayEl = document.getElementById('result-color-display');
    if (displayEl) displayEl.style.background = `url('${colorInfo.image}') center/cover no-repeat`;
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
    window.currentResult = { color: resultColor, name: result.name, subtitle: result.subtitle, keywords: result.keywords, description: result.description, colorInfo: colorInfo };
    
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
    
    const colors = ['coolBlue', 'vampPurple', 'solarGold', 'forestGreen', 'softRose', 'midnightBlack'];
    
    colors.forEach(color => {
        const btn = document.createElement('button');
        btn.className = 'aura-tab-btn';
        btn.style.backgroundImage = `url('${colorData[color].image}')`;
        btn.onclick = () => showAuraDetail(color);
        tabsContainer.appendChild(btn);
    });
    
    // 초기에는 상세 정보 숨김
    document.getElementById('aura-explorer-detail').style.display = 'none';
}

function showAuraDetail(color) {
    const detailEl = document.getElementById('aura-explorer-detail');
    const result = translations[currentLanguage].colors[color];
    
    document.getElementById('explorer-name').textContent = result.name;
    document.getElementById('explorer-subtitle').textContent = result.subtitle;
    document.getElementById('explorer-description').textContent = result.description;
    
    detailEl.style.display = 'block';
    
    // 버튼 활성화 표시
    document.querySelectorAll('.aura-tab-btn').forEach(btn => btn.classList.remove('active'));
    event.currentTarget.classList.add('active');
    
    // 상세 정보로 스크롤
    detailEl.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

function wrapText(ctx, text, x, y, maxWidth, lineHeight) {
    const words = text.split(' ');
    let line = '';
    let testLine = '';
    for (let n = 0; words.length > n; n++) {
        testLine = line + words[n] + ' ';
        if (ctx.measureText(testLine).width > maxWidth && n > 0) {
            ctx.fillText(line, x, y);
            line = words[n] + ' ';
            y += lineHeight;
        } else { line = testLine; }
    }
    ctx.fillText(line, x, y);
}

function drawResultToCanvas() {
    return new Promise((resolve) => {
        const canvas = document.getElementById('result-canvas');
        if (!canvas) return resolve();
        const ctx = canvas.getContext('2d');
        const result = window.currentResult;
        if (!result) return resolve();

        canvas.width = 1080;
        canvas.height = 1920;
        
        const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
        const colorThemes = {
            coolBlue: ['#1e3a8a', '#3b82f6'], vampPurple: ['#4c1d95', '#8b5cf6'],
            solarGold: ['#b45309', '#fbbf24'], forestGreen: ['#064e3b', '#10b981'],
            softRose: ['#9d174d', '#f472b6'], midnightBlack: ['#0f172a', '#334155']
        };
        const theme = colorThemes[result.color];
        gradient.addColorStop(0, theme[0]);
        gradient.addColorStop(1, theme[1]);
        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        
        ctx.fillStyle = 'rgba(255, 255, 255, 0.9)';
        ctx.font = 'bold 50px Arial';
        ctx.textAlign = 'center';
        ctx.fillText(translations[currentLanguage].canvasTitle || translations['en'].canvasTitle, canvas.width / 2, 180);
        
        const img = new Image();
        img.onload = function() {
            const centerX = canvas.width / 2;
            const centerY = 550;
            const radius = 320;

            ctx.save();
            ctx.beginPath();
            ctx.arc(centerX, centerY, radius, 0, Math.PI * 2);
            ctx.closePath();
            ctx.clip();
            
            const imgRatio = img.width / img.height;
            const targetWidth = radius * 2;
            const targetHeight = radius * 2;
            let drawWidth, drawHeight, offsetX, offsetY;

            if (imgRatio > 1) {
                drawHeight = targetHeight;
                drawWidth = img.width * (targetHeight / img.height);
                offsetX = centerX - drawWidth / 2;
                offsetY = centerY - radius;
            } else {
                drawWidth = targetWidth;
                drawHeight = img.height * (targetWidth / img.width);
                offsetX = centerX - radius;
                offsetY = centerY - drawHeight / 2;
            }

            if (isFinite(drawWidth) && isFinite(drawHeight)) {
                ctx.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);
            }
            ctx.restore();
            
            ctx.strokeStyle = 'white';
            ctx.lineWidth = 12;
            ctx.beginPath();
            ctx.arc(centerX, centerY, radius, 0, Math.PI * 2);
            ctx.stroke();
            
            ctx.fillStyle = 'white';
            ctx.font = 'bold 110px Arial';
            ctx.fillText(result.name, centerX, 980);
            ctx.font = '50px Arial';
            ctx.fillStyle = 'rgba(255, 255, 255, 0.9)';
            ctx.fillText(result.subtitle, centerX, 1070);
            ctx.font = 'bold 45px Arial';
            ctx.fillText(result.keywords.map(k => `#${k}`).join('  '), centerX, 1180);

            ctx.strokeStyle = 'rgba(255, 255, 255, 0.3)';
            ctx.lineWidth = 2;
            ctx.beginPath(); ctx.moveTo(200, 1250); ctx.lineTo(880, 1250); ctx.stroke();

            ctx.font = '40px Arial';
            ctx.fillStyle = 'white';
            wrapText(ctx, result.description, centerX, 1340, 750, 65);
            
            ctx.font = '35px Arial';
            ctx.fillStyle = 'rgba(255, 255, 255, 0.7)';
            ctx.fillText('Check your aura at: 2026-aura.pages.dev', centerX, canvas.height - 120);
            resolve();
        };
        img.onerror = () => resolve();
        img.src = result.colorInfo.image;
    });
}

async function downloadResult() {
    await drawResultToCanvas();
    const canvas = document.getElementById('result-canvas');
    const link = document.createElement('a');
    link.download = `my-2026-aura-${window.currentResult.color}.png`;
    link.href = canvas.toDataURL('image/png');
    link.click();
}

function shareResult() {
    const result = window.currentResult;
    const shareUrl = window.location.href;
    const canvas = document.getElementById('result-canvas');
    
    // 현재 선택된 언어에 맞춰 색상 이름 재추출
    const currentColorData = translations[currentLanguage].colors[result.color];
    const colorName = currentColorData ? currentColorData.name : result.name;
    
    let shareText = (translations[currentLanguage].shareMessage || translations['en'].shareMessage).replace('[COLOR]', colorName);

    const isMobile = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);

    // 모바일 네이티브 공유
    if (isMobile && navigator.share) {
        canvas.toBlob(async (blob) => {
            if (!blob) return fallbackShare(shareText, shareUrl, canvas);
            const file = new File([blob], 'my-aura.png', { type: 'image/png' });
            
            // 제목도 현재 언어에 맞춰 동적 설정
            const shareTitle = translations[currentLanguage].meta.title || '2026 Aura Color Test';
            const shareData = { title: shareTitle, text: shareText, url: shareUrl, files: [file] };
            
            if (navigator.canShare && navigator.canShare(shareData)) {
                try { await navigator.share(shareData); return; } catch (e) { if (e.name === 'AbortError') return; }
            }
            fallbackShare(shareText, shareUrl, canvas);
        }, 'image/png');
    } else {
        // 데스크탑: 즉시 클립보드 복사
        fallbackShare(shareText, shareUrl, canvas);
    }
}

function fallbackShare(text, url, canvas) {
    const fullText = `${text}\n${url}`;
    const copiedMsg = translations[currentLanguage].linkCopied || "Copied!";
    
    // 크롬 데스크탑 최적화: ClipboardItem + Promise 방식
    if (window.ClipboardItem && navigator.clipboard && navigator.clipboard.write) {
        const item = new ClipboardItem({
            "text/plain": new Blob([fullText], { type: "text/plain" }),
            "image/png": new Promise((resolve) => {
                canvas.toBlob((blob) => resolve(blob), 'image/png');
            })
        });

        navigator.clipboard.write([item]).then(() => {
            alert(copiedMsg);
        }).catch(() => copyTextOnly(fullText, copiedMsg));
    } else {
        copyTextOnly(fullText, copiedMsg);
    }
}

function copyTextOnly(text, msg) {
    if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(text).then(() => alert(msg)).catch(() => {
            const textArea = document.createElement("textarea");
            textArea.value = text;
            document.body.appendChild(textArea);
            textArea.select();
            document.execCommand('copy');
            document.body.removeChild(textArea);
            alert(msg);
        });
    } else {
        alert(text);
    }
}

function retryTest() {
    const newUrl = window.location.protocol + "//" + window.location.host + window.location.pathname;
    window.history.pushState({path:newUrl}, '', newUrl);
    showScreen('home-screen');
}
