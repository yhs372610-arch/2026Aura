// ========== 전역 변수 ==========
let currentQuestion = 0;
let answers = [];
let scores = { coolBlue: 0, vampPurple: 0, solarGold: 0, forestGreen: 0, softPink: 0, midnightBlack: 0 };

const answerScores = [
    [ {coolBlue: 3, solarGold: 2}, {softPink: 3, forestGreen: 2}, {solarGold: 3, vampPurple: 2}, {midnightBlack: 3, coolBlue: 2} ],
    [ {solarGold: 3, coolBlue: 2}, {forestGreen: 3, softPink: 2}, {vampPurple: 3, solarGold: 2}, {coolBlue: 3, midnightBlack: 2} ],
    [ {midnightBlack: 3, vampPurple: 2}, {forestGreen: 3, softPink: 2}, {vampPurple: 3, midnightBlack: 2}, {softPink: 3, forestGreen: 2} ],
    [ {coolBlue: 3, solarGold: 2}, {softPink: 3, forestGreen: 2}, {solarGold: 3, vampPurple: 2}, {midnightBlack: 3, coolBlue: 2} ],
    [ {solarGold: 3, coolBlue: 2}, {forestGreen: 3, softPink: 2}, {vampPurple: 3, solarGold: 2}, {coolBlue: 3, midnightBlack: 2} ],
    [ {midnightBlack: 3, vampPurple: 2}, {forestGreen: 3, softPink: 2}, {vampPurple: 3, midnightBlack: 2}, {softPink: 3, forestGreen: 2} ],
    [ {coolBlue: 3, solarGold: 2}, {softPink: 3, forestGreen: 2}, {solarGold: 3, vampPurple: 2}, {midnightBlack: 3, coolBlue: 2} ],
    [ {solarGold: 3, coolBlue: 2}, {forestGreen: 3, softPink: 2}, {vampPurple: 3, solarGold: 2}, {coolBlue: 3, midnightBlack: 2} ],
    [ {midnightBlack: 3, vampPurple: 2}, {forestGreen: 3, softPink: 2}, {vampPurple: 3, midnightBlack: 2}, {softPink: 3, forestGreen: 2} ],
    [ {coolBlue: 3, solarGold: 2}, {softPink: 3, forestGreen: 2}, {solarGold: 3, vampPurple: 2}, {midnightBlack: 3, coolBlue: 2} ],
    [ {solarGold: 3, coolBlue: 2}, {forestGreen: 3, softPink: 2}, {vampPurple: 3, solarGold: 2}, {coolBlue: 3, midnightBlack: 2} ],
    [ {midnightBlack: 3, vampPurple: 2}, {forestGreen: 3, softPink: 2}, {vampPurple: 3, midnightBlack: 2}, {softPink: 3, forestGreen: 2} ],
    [ {coolBlue: 3, solarGold: 2}, {softPink: 3, forestGreen: 2}, {solarGold: 3, vampPurple: 2}, {midnightBlack: 3, coolBlue: 2} ],
    [ {solarGold: 3, coolBlue: 2}, {forestGreen: 3, softPink: 2}, {vampPurple: 3, solarGold: 2}, {coolBlue: 3, midnightBlack: 2} ],
    [ {midnightBlack: 3, vampPurple: 2}, {forestGreen: 3, softPink: 2}, {vampPurple: 3, midnightBlack: 2}, {softPink: 3, forestGreen: 2} ]
];

const colorData = {
    coolBlue: { image: 'cool-blue.png?v=3' },
    vampPurple: { image: 'vamp-purple.png?v=2' },
    solarGold: { image: 'solar-gold.png?v=2' },
    forestGreen: { image: 'forest-green.png?v=2' },
    softPink: { image: 'soft-pink.png?v=2' },
    midnightBlack: { image: 'midnight-black.png?v=3' }
};

document.addEventListener('DOMContentLoaded', function() {
    // 초기 언어 설정
    if (window.location.pathname.endsWith('en.html')) window.currentLanguage = 'en';
    else if (window.location.pathname.endsWith('es.html')) window.currentLanguage = 'es';
    else if (window.location.pathname.endsWith('ja.html')) window.currentLanguage = 'ja';
    else if (window.location.pathname.endsWith('pt.html')) window.currentLanguage = 'pt';
    else window.currentLanguage = 'ko';
    
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
            if (window.currentResultKey) drawResultToCanvas();
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
    window.history.pushState({}, '', window.location.pathname);
    updatePageLanguage();
    showScreen('question-screen');
    displayQuestion();
}

function displayQuestion() {
    let langData = translations[window.currentLanguage] || translations['ko'];
    const data = langData.questions[currentQuestion];
    
    if (!data) { // 만약 해당 언어 데이터가 없으면 영어로 대체
        const fallback = translations['en'].questions[currentQuestion];
        document.getElementById('question-title').textContent = fallback.q;
        renderAnswers(fallback.a);
    } else {
        document.getElementById('question-title').textContent = data.q;
        renderAnswers(data.a);
    }
    
    const backBtn = document.getElementById('back-btn');
    if (backBtn) backBtn.style.display = currentQuestion > 0 ? 'block' : 'none';
    const progress = ((currentQuestion + 1) / 15) * 100;
    document.getElementById('progress-bar').style.width = progress + '%';
    document.getElementById('current-question').textContent = currentQuestion + 1;
}

function renderAnswers(aArray) {
    const container = document.getElementById('answers-container');
    container.innerHTML = '';
    aArray.forEach((answer, index) => {
        const btn = document.createElement('button');
        btn.className = 'answer-btn';
        btn.textContent = answer;
        btn.onclick = () => selectAnswer(index);
        container.appendChild(btn);
    });
}

function selectAnswer(index) {
    answers.push(index);
    const scoreMap = answerScores[currentQuestion][index];
    for (let color in scoreMap) scores[color] += scoreMap[color];
    currentQuestion++;
    if (currentQuestion < 15) displayQuestion();
    else showLoadingScreen();
}

function goBack() {
    if (currentQuestion > 0) {
        currentQuestion--;
        const lastAns = answers.pop();
        const scoreMap = answerScores[currentQuestion][lastAns];
        for (let color in scoreMap) scores[color] -= scoreMap[color];
        displayQuestion();
    }
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
    let max = -1; let res = 'coolBlue';
    for (let c in scores) { if (scores[c] > max) { max = scores[c]; res = c; } }
    showResultWithKey(res);
}

function showResultWithKey(resultKey) {
    window.currentResultKey = resultKey;
    const langData = translations[window.currentLanguage] || translations['ko'];
    const data = langData.colors[resultKey] || translations['en'].colors[resultKey];
    const info = colorData[resultKey];
    
    const displayEl = document.getElementById('result-color-display');
    if (displayEl) {
        displayEl.style.background = `url('${info.image}') center/cover no-repeat`;
        displayEl.setAttribute('role', 'img');
        displayEl.setAttribute('aria-label', `${data.name} - ${data.subtitle}`);
    }
    
    updatePageLanguage();
    populateAuraTabs();
    showScreen('result-screen');
    setTimeout(drawResultToCanvas, 300);
}

function populateAuraTabs() {
    const container = document.getElementById('aura-tabs');
    if (!container) return;
    container.innerHTML = '';
    for (let key in colorData) {
        const btn = document.createElement('button');
        btn.className = 'aura-tab-btn';
        if (window.currentResultKey === key) btn.classList.add('active');
        btn.style.backgroundImage = `url('${colorData[key].image}')`;
        btn.onclick = () => {
            document.querySelectorAll('.aura-tab-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            showAuraDetail(key);
        };
        container.appendChild(btn);
    }
}

function showAuraDetail(key) {
    const langData = translations[window.currentLanguage] || translations['ko'];
    const detail = langData.colors[key] || translations['en'].colors[key];
    const container = document.getElementById('aura-explorer-detail');
    if (!container) return;
    container.style.display = 'block';
    document.getElementById('explorer-name').textContent = detail.name;
    document.getElementById('explorer-subtitle').textContent = detail.subtitle;
    document.getElementById('explorer-description').textContent = detail.description;
}

function retryTest() { showScreen('home-screen'); }

function downloadResult() {
    const canvas = document.getElementById('result-canvas');
    const link = document.createElement('a');
    link.download = `2026-Aura-${window.currentResultKey}.png`;
    link.href = canvas.toDataURL('image/png');
    link.click();
}

async function shareResult() {
    const resKey = window.currentResultKey;
    const canvas = document.getElementById('result-canvas');
    const lang = window.currentLanguage;
    const baseUrl = window.location.origin + window.location.pathname.replace(/\/[^\/]*$/, '');
    
    // 다국어 파일 경로 매핑 (pt 추가 및 구조화)
    let file = 'index.html';
    if (lang === 'en') file = 'en.html';
    else if (lang === 'es') file = 'es.html';
    else if (lang === 'ja') file = 'ja.html';
    else if (lang === 'pt') file = 'pt.html';
    
    const url = `${baseUrl}/${file}?r=${resKey}`;
    const langData = translations[lang] || translations['ko'];
    const resData = langData.colors[resKey] || translations['en'].colors[resKey];
    const text = t('shareMessage').replace('[COLOR]', resData.name);

    if (navigator.share) {
        try {
            const blob = await new Promise(resolve => canvas.toBlob(resolve, 'image/png'));
            const f = new File([blob], `Aura2026-${lang}.png`, { type: 'image/png' });
            await navigator.share({ files: [f], title: '2026 Aura Color', text: text, url: url });
        } catch (e) { copyToClipboard(url); }
    } else copyToClipboard(url);
}

function copyToClipboard(text) {
    if (navigator.clipboard) {
        navigator.clipboard.writeText(text).then(() => alert(t('linkCopied'))).catch(() => fallbackCopy(text));
    } else fallbackCopy(text);
}

function fallbackCopy(text) {
    const input = document.createElement('input');
    document.body.appendChild(input); input.value = text; input.select();
    document.execCommand('copy'); document.body.removeChild(input);
    alert(t('linkCopied'));
}

function drawResultToCanvas() {
    const canvas = document.getElementById('result-canvas');
    if (!canvas || !window.currentResultKey) return;
    const ctx = canvas.getContext('2d');
    const langData = translations[window.currentLanguage] || translations['ko'];
    const data = langData.colors[window.currentResultKey] || translations['en'].colors[window.currentResultKey];
    
    canvas.width = 1080; canvas.height = 1350;
    const grad = ctx.createLinearGradient(0, 0, 1080, 1350);
    grad.addColorStop(0, '#667eea'); grad.addColorStop(1, '#764ba2');
    ctx.fillStyle = grad; ctx.fillRect(0, 0, 1080, 1350);
    ctx.fillStyle = 'white'; ctx.beginPath(); ctx.roundRect(80, 80, 920, 1190, 60); ctx.fill();
    
    const img = new Image(); img.src = colorData[window.currentResultKey].image;
    img.onload = () => {
        ctx.save(); ctx.beginPath(); ctx.arc(540, 420, 220, 0, Math.PI * 2);
        ctx.strokeStyle = '#f0f4ff'; ctx.lineWidth = 15; ctx.stroke(); ctx.clip();
        const aspect = img.width / img.height;
        const size = 440;
        let w = size, h = size / aspect;
        if (aspect > 1) { h = size; w = size * aspect; }
        ctx.drawImage(img, 540 - (w / 2), 420 - (h / 2), w, h);
        ctx.restore();
        
        ctx.textAlign = 'center'; ctx.fillStyle = '#1a1a1a'; ctx.font = '900 85px sans-serif';
        ctx.fillText(data.name, 540, 750);
        const subW = ctx.measureText(data.subtitle).width + 60;
        ctx.fillStyle = '#f8f9ff'; ctx.beginPath(); ctx.roundRect(540 - (subW / 2), 790, subW, 65, 30); ctx.fill();
        ctx.fillStyle = '#667eea'; ctx.font = 'bold 38px sans-serif'; ctx.fillText(data.subtitle, 540, 835);
        ctx.fillStyle = '#999'; ctx.font = 'bold 32px sans-serif'; ctx.fillText(data.keywords.join('  •  '), 540, 910);
        ctx.strokeStyle = '#eee'; ctx.lineWidth = 2; ctx.beginPath(); ctx.moveTo(200, 960); ctx.lineTo(880, 960); ctx.stroke();
        ctx.fillStyle = '#444'; ctx.font = '34px sans-serif';
        wrapText(ctx, data.description, 540, 1030, 750, 50);
        ctx.fillStyle = '#ccc'; ctx.font = 'bold 28px sans-serif'; ctx.fillText('2026aura.pages.dev', 540, 1220);
    };
}

function wrapText(ctx, text, x, y, maxWidth, lineHeight) {
    const isCjk = /[ㄱ-ㅎ|ㅏ-ㅣ|가-힣|ぁ-ん|ァ-ヶ]/.test(text);
    const words = isCjk ? text.split('') : text.split(' ');
    let line = '';
    for (let n = 0; n < words.length; n++) {
        const testLine = line + words[n] + (isCjk ? '' : ' ');
        if (ctx.measureText(testLine).width > maxWidth && n > 0) {
            ctx.fillText(line, x, y); line = words[n] + (isCjk ? '' : ' '); y += lineHeight;
        } else line = testLine;
    }
    ctx.fillText(line, x, y);
}
