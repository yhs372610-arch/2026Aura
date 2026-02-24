// ========== 전역 변수 ==========
let currentQuestion = 0;
let answers = [];
let scores = {
    coolBlue: 0,
    vampPurple: 0,
    solarGold: 0,
    forestGreen: 0,
    softRose: 0,
    midnightBlack: 0
};

// 각 답변에 대한 컬러 점수 매핑 (15개 질문 × 4개 답변)
const answerScores = [
    // 질문 1: 아침 첫 생각
    [
        {coolBlue: 3, solarGold: 2},
        {forestGreen: 3, softRose: 2},
        {solarGold: 3, vampPurple: 2},
        {midnightBlack: 3, vampPurple: 2}
    ],
    // 질문 2: 스트레스 대처
    [
        {coolBlue: 3, midnightBlack: 1},
        {softRose: 3, forestGreen: 2},
        {vampPurple: 3, solarGold: 1},
        {midnightBlack: 3, forestGreen: 1}
    ],
    // 질문 3: 이상적인 주말
    [
        {coolBlue: 3, solarGold: 1},
        {softRose: 3, forestGreen: 2},
        {solarGold: 3, vampPurple: 2},
        {midnightBlack: 3, forestGreen: 1}
    ],
    // 질문 4: 의사결정 우선순위
    [
        {coolBlue: 3, midnightBlack: 1},
        {softRose: 3, forestGreen: 2},
        {solarGold: 3, vampPurple: 2},
        {midnightBlack: 3, coolBlue: 1}
    ],
    // 질문 5: 에너지 레벨
    [
        {coolBlue: 3, forestGreen: 1},
        {softRose: 3, forestGreen: 2},
        {solarGold: 3, vampPurple: 1},
        {midnightBlack: 3, vampPurple: 1}
    ],
    // 질문 6: 사회적 상황
    [
        {coolBlue: 3, midnightBlack: 1},
        {softRose: 3, solarGold: 2},
        {solarGold: 3, vampPurple: 1},
        {midnightBlack: 3, vampPurple: 2}
    ],
    // 질문 7: 동기부여
    [
        {coolBlue: 3, solarGold: 2},
        {softRose: 3, forestGreen: 2},
        {vampPurple: 3, solarGold: 2},
        {midnightBlack: 3, coolBlue: 1}
    ],
    // 질문 8: 도전 접근법
    [
        {coolBlue: 3, midnightBlack: 1},
        {softRose: 3, forestGreen: 2},
        {solarGold: 3, vampPurple: 1},
        {midnightBlack: 3, forestGreen: 1}
    ],
    // 질문 9: 사람들의 평가
    [
        {coolBlue: 3, forestGreen: 2},
        {softRose: 3, forestGreen: 1},
        {solarGold: 3, vampPurple: 2},
        {midnightBlack: 3, vampPurple: 1}
    ],
    // 질문 10: 이상적 업무 환경
    [
        {coolBlue: 3, midnightBlack: 1},
        {softRose: 3, forestGreen: 2},
        {solarGold: 3, vampPurple: 1},
        {midnightBlack: 3, forestGreen: 1}
    ],
    // 질문 11: 변화에 대한 태도
    [
        {coolBlue: 3, forestGreen: 2},
        {softRose: 3, forestGreen: 1},
        {solarGold: 3, vampPurple: 2},
        {midnightBlack: 3, vampPurple: 1}
    ],
    // 질문 12: 창의적 표현
    [
        {coolBlue: 3, midnightBlack: 2},
        {softRose: 3, forestGreen: 2},
        {vampPurple: 3, solarGold: 2},
        {midnightBlack: 3, vampPurple: 1}
    ],
    // 질문 13: 2026년 말 느끼고 싶은 감정
    [
        {coolBlue: 3, solarGold: 2},
        {softRose: 3, forestGreen: 2},
        {solarGold: 3, vampPurple: 2},
        {midnightBlack: 3, forestGreen: 1}
    ],
    // 질문 14: 자연과의 관계
    [
        {coolBlue: 3, midnightBlack: 1},
        {forestGreen: 3, softRose: 2},
        {solarGold: 3, vampPurple: 1},
        {midnightBlack: 3, forestGreen: 2}
    ],
    // 질문 15: 도움 제공 방식
    [
        {coolBlue: 3, midnightBlack: 1},
        {softRose: 3, forestGreen: 2},
        {solarGold: 3, vampPurple: 1},
        {midnightBlack: 3, coolBlue: 1}
    ]
];

// 컬러별 상세 정보 (캐시 방지 버전 유지)
const colorData = {
    coolBlue: { image: 'cool-blue.png?v=2', hex: '#3b82f6' },
    vampPurple: { image: 'vamp-purple.png?v=2', hex: '#8b5cf6' },
    solarGold: { image: 'solar-gold.png?v=2', hex: '#fbbf24' },
    forestGreen: { image: 'forest-green.png?v=2', hex: '#10b981' },
    softRose: { image: 'soft-rose.png?v=2', hex: '#f472b6' },
    midnightBlack: { image: 'midnight-black.png?v=2', hex: '#334155' }
};

// ========== 페이지 로드 시 초기화 ==========
document.addEventListener('DOMContentLoaded', function() {
    // 드롭다운 토글 제어
    const dropdown = document.getElementById('language-dropdown');
    const dropdownBtn = document.getElementById('dropdown-main-btn');
    
    dropdownBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        dropdown.classList.toggle('active');
    });

    // 언어 옵션 클릭 이벤트
    document.querySelectorAll('.lang-option').forEach(option => {
        option.addEventListener('click', () => {
            const lang = option.getAttribute('data-lang');
            changeLanguage(lang);
            
            // 드롭다운 텍스트 업데이트
            document.querySelector('.current-lang-text').textContent = lang.toUpperCase();
            dropdown.classList.remove('active');
            
            if (window.currentResult) drawResultToCanvas();
        });
    });

    // 외부 클릭 시 드롭다운 닫기
    document.addEventListener('click', () => {
        dropdown.classList.remove('active');
    });

    // 언어 초기화 및 버튼 텍스트 설정
    updatePageLanguage();
    document.querySelector('.current-lang-text').textContent = currentLanguage.toUpperCase();

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
    document.getElementById('mid-ad').style.display = (currentQuestion === 7) ? 'block' : 'none';
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
    document.getElementById('progress-bar').style.width = progress + '%';
    document.getElementById('current-question').textContent = currentQuestion + 1;
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
    const newUrl = window.location.protocol + "//" + window.location.host + window.location.pathname + '?r=' + resultColor;
    window.history.pushState({path:newUrl}, '', newUrl);
    showResultWithKey(resultColor);
}

function showResultWithKey(resultColor) {
    const result = translations[currentLanguage].colors[resultColor];
    const colorInfo = colorData[resultColor];
    document.getElementById('result-color-display').style.background = `url('${colorInfo.image}') center/cover no-repeat`;
    document.getElementById('result-title').textContent = result.name;
    document.getElementById('result-subtitle').textContent = result.subtitle;
    const keywordsContainer = document.getElementById('keywords');
    keywordsContainer.innerHTML = '';
    result.keywords.forEach(keyword => {
        const tag = document.createElement('div');
        tag.className = 'keyword-tag';
        tag.textContent = keyword;
        keywordsContainer.appendChild(tag);
    });
    document.getElementById('result-description').textContent = result.description;
    const strengthsList = document.getElementById('strengths-list');
    strengthsList.innerHTML = '';
    result.strengths.forEach(s => {
        const li = document.createElement('li');
        li.textContent = s;
        strengthsList.appendChild(li);
    });
    const recommendationsList = document.getElementById('recommendations-list');
    recommendationsList.innerHTML = '';
    result.recommendations.forEach(r => {
        const li = document.createElement('li');
        li.textContent = r;
        recommendationsList.appendChild(li);
    });
    window.currentResult = { color: resultColor, name: result.name, subtitle: result.subtitle, keywords: result.keywords, colorInfo: colorInfo };
    showScreen('result-screen');
    setTimeout(drawResultToCanvas, 500);
}

function drawResultToCanvas() {
    const canvas = document.getElementById('result-canvas');
    const ctx = canvas.getContext('2d');
    const result = window.currentResult;
    if (!result) return;
    canvas.width = 1080;
    canvas.height = 1920;
    const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
    const colorThemes = {
        coolBlue: ['#1e3a8a', '#3b82f6'],
        vampPurple: ['#4c1d95', '#8b5cf6'],
        solarGold: ['#b45309', '#fbbf24'],
        forestGreen: ['#064e3b', '#10b981'],
        softRose: ['#9d174d', '#f472b6'],
        midnightBlack: ['#0f172a', '#334155']
    };
    const theme = colorThemes[result.color];
    gradient.addColorStop(0, theme[0]);
    gradient.addColorStop(1, theme[1]);
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = 'white';
    ctx.font = 'bold 60px Arial';
    ctx.textAlign = 'center';
    ctx.fillText('2026 Aura Color', canvas.width / 2, 150);
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
    };
    img.src = result.colorInfo.image;
}

function downloadResult() {
    const canvas = document.getElementById('result-canvas');
    const link = document.createElement('a');
    link.download = `my-2026-aura-${window.currentResult.color}.png`;
    link.href = canvas.toDataURL('image/png');
    link.click();
}

// ========== 결과 공유 (PC 대응 및 텍스트 최적화) ==========
async function shareResult() {
    const result = window.currentResult;
    const shareUrl = window.location.href;
    
    // 텍스트 최적화 (공백 제거 및 자연스러운 문장)
    const shareText = currentLanguage === 'ko' 
        ? `나의 2026년 아우라 컬러는 [${result.name}]! ✨ 당신의 에너지 컬러도 지금 확인해보세요!`
        : `My 2026 Aura Color is [${result.name}]! ✨ Discover your energy color now!`;

    // 모바일/태블릿 등 Web Share API 지원 기기
    if (navigator.share && /Android|iPhone|iPad|iPod/i.test(navigator.userAgent)) {
        try {
            const canvas = document.getElementById('result-canvas');
            canvas.toBlob(async (blob) => {
                const file = new File([blob], 'my-aura.png', { type: 'image/png' });
                const shareData = { title: '2026 Aura Color Test', text: shareText, url: shareUrl };
                if (navigator.canShare && navigator.canShare({ files: [file] })) {
                    shareData.files = [file];
                }
                await navigator.share(shareData);
            });
        } catch (err) {
            fallbackShare(shareText, shareUrl);
        }
    } else {
        // PC 브라우저 또는 모바일에서 공유 실패 시 클립보드 복사
        fallbackShare(shareText, shareUrl);
    }
}

function fallbackShare(text, url) {
    const fullText = `${text}\n${url}`;
    if (navigator.clipboard) {
        navigator.clipboard.writeText(fullText).then(() => {
            alert(currentLanguage === 'ko' ? '결과 링크가 복사되었습니다! 친구들에게 공유해보세요.' : 'Result link copied! Share it with your friends.');
        }).catch(() => {
            // 복사 실패 시 구형 방식 시도
            const textArea = document.createElement("textarea");
            textArea.value = fullText;
            document.body.appendChild(textArea);
            textArea.select();
            document.execCommand('copy');
            document.body.removeChild(textArea);
            alert(currentLanguage === 'ko' ? '결과 링크가 복사되었습니다!' : 'Link copied!');
        });
    } else {
        alert(fullText);
    }
}

function retryTest() {
    startTest();
}
