// ========== 전역 변수 ==========
let currentQuestion = 0;
let answers = [];
let scores = { coolBlue: 0, vampPurple: 0, solarGold: 0, forestGreen: 0, softRose: 0, midnightBlack: 0 };

const answerScores = [
    [ {coolBlue: 3, solarGold: 2}, {forestGreen: 3, softRose: 2}, {solarGold: 3, vampPurple: 2}, {midnightBlack: 3, vampPurple: 2} ],
    [ {coolBlue: 3, midnightBlack: 1}, {softRose: 3, forestGreen: 2}, {vampPurple: 3, solarGold: 1}, {midnightBlack: 3, forestGreen: 1} ],
    [ {coolBlue: 3, solarGold: 1}, {softRose: 3, forestGreen: 2}, {solarGold: 3, vampPurple: 2}, {midnightBlack: 3, forestGreen: 1} ],
    [ {coolBlue: 3, midnightBlack: 1}, {softRose: 3, forestGreen: 2}, {solarGold: 3, vampPurple: 2}, {midnightBlack: 3, coolBlue: 1} ],
    [ {coolBlue: 3, forestGreen: 1}, {softRose: 3, forestGreen: 2}, {solarGold: 3, vampPurple: 1}, {midnightBlack: 3, vampPurple: 1} ],
    [ {coolBlue: 3, midnightBlack: 1}, {softRose: 3, solarGold: 2}, {solarGold: 3, vampPurple: 1}, {midnightBlack: 3, vampPurple: 2} ],
    [ {coolBlue: 3, solarGold: 2}, {softRose: 3, forestGreen: 2}, {vampPurple: 3, solarGold: 2}, {midnightBlack: 3, coolBlue: 1} ],
    [ {coolBlue: 3, midnightBlack: 1}, {softRose: 3, forestGreen: 2}, {solarGold: 3, vampPurple: 1}, {midnightBlack: 3, forestGreen: 1} ],
    [ {coolBlue: 3, forestGreen: 2}, {softRose: 3, forestGreen: 1}, {solarGold: 3, vampPurple: 2}, {midnightBlack: 3, vampPurple: 1} ],
    [ {coolBlue: 3, midnightBlack: 1}, {softRose: 3, forestGreen: 2}, {solarGold: 3, vampPurple: 1}, {midnightBlack: 3, forestGreen: 1} ],
    [ {coolBlue: 3, forestGreen: 2}, {softRose: 3, forestGreen: 1}, {solarGold: 3, vampPurple: 2}, {midnightBlack: 3, vampPurple: 1} ],
    [ {coolBlue: 3, midnightBlack: 2}, {softRose: 3, forestGreen: 2}, {vampPurple: 3, solarGold: 2}, {midnightBlack: 3, vampPurple: 1} ],
    [ {coolBlue: 3, solarGold: 2}, {softRose: 3, forestGreen: 2}, {solarGold: 3, vampPurple: 2}, {midnightBlack: 3, forestGreen: 1} ],
    [ {coolBlue: 3, midnightBlack: 1}, {forestGreen: 3, softRose: 2}, {solarGold: 3, vampPurple: 1}, {midnightBlack: 3, forestGreen: 2} ],
    [ {coolBlue: 3, midnightBlack: 1}, {softRose: 3, forestGreen: 2}, {solarGold: 3, vampPurple: 1}, {midnightBlack: 3, coolBlue: 1} ]
];

const colorData = {
    coolBlue: { image: 'cool-blue.png?v=2', hex: '#3b82f6' },
    vampPurple: { image: 'vamp-purple.png?v=2', hex: '#8b5cf6' },
    solarGold: { image: 'solar-gold.png?v=2', hex: '#fbbf24' },
    forestGreen: { image: 'forest-green.png?v=2', hex: '#10b981' },
    softRose: { image: 'soft-rose.png?v=2', hex: '#f472b6' },
    midnightBlack: { image: 'midnight-black.png?v=2', hex: '#334155' }
};

document.addEventListener('DOMContentLoaded', function() {
    // 1. 시작 언어 결정 (HTML의 data-start-lang 우선)
    const bodyStartLang = document.body.getAttribute('data-start-lang');
    if (bodyStartLang) {
        currentLanguage = bodyStartLang;
    }

    const dropdown = document.getElementById('language-dropdown');
    const dropdownBtn = document.getElementById('dropdown-main-btn');
    
    if (dropdownBtn) {
        dropdownBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            dropdown.classList.toggle('active');
        });
    }

    document.querySelectorAll('.lang-option').forEach(option => {
        option.addEventListener('click', () => {
            const lang = option.getAttribute('data-lang');
            changeLanguage(lang);
            const textEl = document.querySelector('.current-lang-text');
            if (textEl) textEl.textContent = lang.toUpperCase();
            dropdown.classList.remove('active');
            if (window.currentResult) drawResultToCanvas();
        });
    });

    document.addEventListener('click', () => {
        if (dropdown) dropdown.classList.remove('active');
    });

    updatePageLanguage();
    const textEl = document.querySelector('.current-lang-text');
    if (textEl) textEl.textContent = currentLanguage.toUpperCase();

    // URL 파라미터 확인
    const urlParams = new URLSearchParams(window.location.search);
    const sharedResult = urlParams.get('r');
    if (sharedResult && colorData[sharedResult]) {
        setTimeout(() => showResultWithKey(sharedResult), 100);
    }
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
    setTimeout(() => {
        clearInterval(stepInterval);
        showResult();
    }, 3000);
}

function showResult() {
    let maxScore = 0;
    let resultColor = 'coolBlue';
    for (let color in scores) {
        if (scores[color] > maxScore) {
            maxScore = scores[color];
            resultColor = color;
        }
    }
    
    // 현재 언어에 맞는 파일명을 포함하여 URL 업데이트
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
        result.strengths.forEach(s => {
            const li = document.createElement('li');
            li.textContent = s;
            strengthsList.appendChild(li);
        });
    }
    
    const recommendationsList = document.getElementById('recommendations-list');
    if (recommendationsList) {
        recommendationsList.innerHTML = '';
        result.recommendations.forEach(r => {
            const li = document.createElement('li');
            li.textContent = r;
            recommendationsList.appendChild(li);
        });
    }
    
    window.currentResult = { color: resultColor, name: result.name, subtitle: result.subtitle, keywords: result.keywords, colorInfo: colorInfo };
    showScreen('result-screen');
    setTimeout(drawResultToCanvas, 500);
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
        
        ctx.fillStyle = 'white';
        ctx.font = 'bold 60px Arial';
        ctx.textAlign = 'center';
        const canvasTitle = translations[currentLanguage].canvasTitle || translations['en'].canvasTitle;
        ctx.fillText(canvasTitle, canvas.width / 2, 150);
        
        const img = new Image();
        img.crossOrigin = "anonymous";
        img.onload = function() {
            ctx.save();
            ctx.beginPath();
            ctx.arc(canvas.width / 2, 450, 250, 0, Math.PI * 2);
            ctx.closePath();
            ctx.clip();
            ctx.drawImage(img, canvas.width / 2 - 250, 450 - 250, 500, 500);
            ctx.restore();
            ctx.strokeStyle = 'white';
            ctx.lineWidth = 15;
            ctx.beginPath();
            ctx.arc(canvas.width / 2, 450, 250, 0, Math.PI * 2);
            ctx.stroke();
            ctx.fillStyle = 'white';
            ctx.font = 'bold 90px Arial';
            ctx.fillText(result.name, canvas.width / 2, 820);
            ctx.font = '45px Arial';
            ctx.fillText(result.subtitle, canvas.width / 2, 900);
            let yPos = 1050;
            ctx.font = 'bold 55px Arial';
            result.keywords.forEach((keyword, index) => {
                ctx.fillText(`#${keyword}`, canvas.width / 2, yPos + (index * 90));
            });
            ctx.font = '35px Arial';
            ctx.fillStyle = 'rgba(255, 255, 255, 0.8)';
            ctx.fillText('2026-aura.pages.dev', canvas.width / 2, canvas.height - 100);
            resolve();
        };
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

async function shareResult() {
    const result = window.currentResult;
    // 현재 주소(언어별 HTML 파일 경로가 포함됨)를 공유
    const shareUrl = window.location.href;
    
    await drawResultToCanvas();
    
    let shareText = translations[currentLanguage].shareMessage || translations['en'].shareMessage;
    shareText = shareText.replace('[COLOR]', result.name);

    if (navigator.share && /Android|iPhone|iPad|iPod/i.test(navigator.userAgent)) {
        try {
            const canvas = document.getElementById('result-canvas');
            canvas.toBlob(async (blob) => {
                const file = new File([blob], 'my-aura.png', { type: 'image/png' });
                const shareData = { title: '2026 Aura Color Test', text: shareText, url: shareUrl };
                if (navigator.canShare && navigator.canShare({ files: [file] })) shareData.files = [file];
                await navigator.share(shareData);
            });
        } catch (err) { fallbackShare(shareText, shareUrl); }
    } else {
        fallbackShare(shareText, shareUrl);
    }
}

function fallbackShare(text, url) {
    const fullText = `${text}\n${url}`;
    const copiedMsg = translations[currentLanguage].linkCopied || translations['en'].linkCopied;
    if (navigator.clipboard) {
        navigator.clipboard.writeText(fullText).then(() => alert(copiedMsg)).catch(() => {
            const textArea = document.createElement("textarea");
            textArea.value = fullText;
            document.body.appendChild(textArea);
            textArea.select();
            document.execCommand('copy');
            document.body.removeChild(textArea);
            alert(copiedMsg);
        });
    } else alert(fullText);
}

function retryTest() { startTest(); }
