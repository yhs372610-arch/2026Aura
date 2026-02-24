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

// 컬러별 상세 정보 (업로드된 이미지 경로 적용, 캐시 방지 버전 추가)
const colorData = {
    coolBlue: {
        image: 'cool-blue.png?v=2',
        hex: '#3b82f6'
    },
    vampPurple: {
        image: 'vamp-purple.png?v=2',
        hex: '#8b5cf6'
    },
    solarGold: {
        image: 'solar-gold.png?v=2',
        hex: '#fbbf24'
    },
    forestGreen: {
        image: 'forest-green.png?v=2',
        hex: '#10b981'
    },
    softRose: {
        image: 'soft-rose.png?v=2',
        hex: '#f472b6'
    },
    midnightBlack: {
        image: 'midnight-black.png?v=2',
        hex: '#334155'
    }
};

// ========== 페이지 로드 시 초기화 ==========
document.addEventListener('DOMContentLoaded', function() {
    // 언어 버튼 이벤트 리스너 연결
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const lang = btn.getAttribute('data-lang');
            changeLanguage(lang);
        });
    });

    // 언어 자동 감지 및 적용
    updatePageLanguage();

    // URL 파라미터 확인 (공유된 결과가 있는지 확인)
    const urlParams = new URLSearchParams(window.location.search);
    const sharedResult = urlParams.get('r');
    if (sharedResult && colorData[sharedResult]) {
        // 결과 화면 바로 표시
        showResultWithKey(sharedResult);
    }
});

// ========== 화면 전환 함수 ==========
function showScreen(screenId) {
    document.querySelectorAll('.screen').forEach(screen => {
        screen.classList.remove('active');
    });
    document.getElementById(screenId).classList.add('active');
    window.scrollTo(0, 0);
}

// ========== 테스트 시작 ==========
function startTest() {
    currentQuestion = 0;
    answers = [];
    scores = {
        coolBlue: 0,
        vampPurple: 0,
        solarGold: 0,
        forestGreen: 0,
        softRose: 0,
        midnightBlack: 0
    };
    
    // URL에서 결과 파라미터 제거 (테스트 시작 시)
    const newUrl = window.location.protocol + "//" + window.location.host + window.location.pathname;
    window.history.pushState({path:newUrl}, '', newUrl);
    
    showScreen('question-screen');
    displayQuestion();
}

// ========== 질문 표시 ==========
function displayQuestion() {
    const questionData = translations[currentLanguage].questions[currentQuestion];
    
    // 질문 제목
    document.getElementById('question-title').textContent = questionData.q;
    
    // 답변 버튼들
    const answersContainer = document.getElementById('answers-container');
    answersContainer.innerHTML = '';
    
    questionData.a.forEach((answer, index) => {
        const button = document.createElement('button');
        button.className = 'answer-btn';
        button.textContent = answer;
        button.onclick = () => selectAnswer(index);
        answersContainer.appendChild(button);
    });
    
    // 진행률 업데이트
    updateProgress();
    
    // 8번째 질문 후 중간 광고 표시
    if (currentQuestion === 7) {
        document.getElementById('mid-ad').style.display = 'block';
    } else {
        document.getElementById('mid-ad').style.display = 'none';
    }
}

// ========== 답변 선택 ==========
function selectAnswer(answerIndex) {
    answers.push(answerIndex);
    
    // 점수 계산
    const scoreMap = answerScores[currentQuestion][answerIndex];
    for (let color in scoreMap) {
        scores[color] += scoreMap[color];
    }
    
    // 다음 질문으로
    currentQuestion++;
    
    if (currentQuestion < 15) {
        displayQuestion();
    } else {
        // 모든 질문 완료 -> 로딩 화면
        showLoadingScreen();
    }
}

// ========== 진행률 바 업데이트 ==========
function updateProgress() {
    const progress = ((currentQuestion + 1) / 15) * 100;
    document.getElementById('progress-bar').style.width = progress + '%';
    document.getElementById('current-question').textContent = currentQuestion + 1;
}

// ========== 로딩 화면 ==========
function showLoadingScreen() {
    showScreen('loading-screen');
    
    const steps = [
        t('loading.step1'),
        t('loading.step2'),
        t('loading.step3')
    ];
    
    let stepIndex = 0;
    const stepElement = document.getElementById('loading-step');
    
    // 단계별 메시지 변경
    const stepInterval = setInterval(() => {
        stepIndex++;
        if (stepIndex < steps.length) {
            stepElement.textContent = steps[stepIndex];
        }
    }, 1000);
    
    // 3초 후 결과 화면
    setTimeout(() => {
        clearInterval(stepInterval);
        showResult();
    }, 3000);
}

// ========== 결과 계산 및 표시 ==========
function showResult() {
    // 최고 점수 컬러 찾기
    let maxScore = 0;
    let resultColor = 'coolBlue';
    
    for (let color in scores) {
        if (scores[color] > maxScore) {
            maxScore = scores[color];
            resultColor = color;
        }
    }
    
    // URL 업데이트 (공유 가능하도록)
    const newUrl = window.location.protocol + "//" + window.location.host + window.location.pathname + '?r=' + resultColor;
    window.history.pushState({path:newUrl}, '', newUrl);
    
    showResultWithKey(resultColor);
}

// 특정 키로 결과 표시 (공유 링크 접속 시 사용)
function showResultWithKey(resultColor) {
    const result = translations[currentLanguage].colors[resultColor];
    const colorInfo = colorData[resultColor];
    
    // 컬러 이미지 표시
    const colorDisplay = document.getElementById('result-color-display');
    colorDisplay.style.background = `url('${colorInfo.image}') center/cover no-repeat`;
    
    // 제목
    document.getElementById('result-title').textContent = result.name;
    document.getElementById('result-subtitle').textContent = result.subtitle;
    
    // 키워드
    const keywordsContainer = document.getElementById('keywords');
    keywordsContainer.innerHTML = '';
    result.keywords.forEach(keyword => {
        const tag = document.createElement('div');
        tag.className = 'keyword-tag';
        tag.textContent = keyword;
        keywordsContainer.appendChild(tag);
    });
    
    // 설명
    document.getElementById('result-description').textContent = result.description;
    
    // 강점
    const strengthsList = document.getElementById('strengths-list');
    strengthsList.innerHTML = '';
    result.strengths.forEach(strength => {
        const li = document.createElement('li');
        li.textContent = strength;
        strengthsList.appendChild(li);
    });
    
    // 추천사항
    const recommendationsList = document.getElementById('recommendations-list');
    recommendationsList.innerHTML = '';
    result.recommendations.forEach(rec => {
        const li = document.createElement('li');
        li.textContent = rec;
        recommendationsList.appendChild(li);
    });
    
    // 결과 화면 표시
    showScreen('result-screen');
    
    // Canvas 이미지 생성 준비
    window.currentResult = {
        color: resultColor,
        name: result.name,
        subtitle: result.subtitle,
        keywords: result.keywords,
        colorInfo: colorInfo
    };
}

// ========== 결과 이미지 다운로드 ==========
function downloadResult() {
    const canvas = document.getElementById('result-canvas');
    const ctx = canvas.getContext('2d');
    
    canvas.width = 1080;
    canvas.height = 1920;
    
    const result = window.currentResult;
    
    const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
    if (result.color === 'coolBlue') {
        gradient.addColorStop(0, '#1e3a8a');
        gradient.addColorStop(1, '#3b82f6');
    } else if (result.color === 'vampPurple') {
        gradient.addColorStop(0, '#4c1d95');
        gradient.addColorStop(1, '#8b5cf6');
    } else if (result.color === 'solarGold') {
        gradient.addColorStop(0, '#b45309');
        gradient.addColorStop(1, '#fbbf24');
    } else if (result.color === 'forestGreen') {
        gradient.addColorStop(0, '#064e3b');
        gradient.addColorStop(1, '#10b981');
    } else if (result.color === 'softRose') {
        gradient.addColorStop(0, '#9d174d');
        gradient.addColorStop(1, '#f472b6');
    } else if (result.color === 'midnightBlack') {
        gradient.addColorStop(0, '#0f172a');
        gradient.addColorStop(1, '#334155');
    }
    
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    ctx.fillStyle = 'white';
    ctx.font = 'bold 60px Arial';
    ctx.textAlign = 'center';
    ctx.fillText('2026 Aura Color', canvas.width / 2, 150);
    
    const img = new Image();
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
        ctx.fillText('aura-color-test.com', canvas.width / 2, canvas.height - 100);
        
        const link = document.createElement('a');
        link.download = `my-2026-aura-${result.color}.png`;
        link.href = canvas.toDataURL('image/png');
        link.click();
    };
    img.src = result.colorInfo.image;
}

// ========== 결과 공유 (개인화 메시지 적용) ==========
async function shareResult() {
    const result = window.currentResult;
    const shareUrl = window.location.href; // r=color 파라미터가 포함된 현재 주소
    
    // 언어별 맞춤 공유 메시지
    let shareText = '';
    if (currentLanguage === 'ko') {
        shareText = `나의 2026년 아우라 컬러는 [${result.name}]! ✨\n당신의 에너지 컬러도 확인해보세요.`;
    } else {
        shareText = `My 2026 Aura Color is [${result.name}]! ✨\nDiscover your energy color here.`;
    }

    // 모바일 기기에서 이미지 파일과 함께 공유 시도
    if (navigator.share) {
        try {
            const canvas = document.getElementById('result-canvas');
            const dataUrl = canvas.toDataURL('image/png');
            const blob = await (await fetch(dataUrl)).blob();
            const file = new File([blob], 'my-aura.png', { type: 'image/png' });

            // 파일 공유를 지원하는지 확인
            if (navigator.canShare && navigator.canShare({ files: [file] })) {
                await navigator.share({
                    files: [file],
                    title: '2026 Aura Color Test',
                    text: shareText,
                    url: shareUrl
                });
            } else {
                // 파일 공유 미지원 시 텍스트만 공유
                await navigator.share({
                    title: '2026 Aura Color Test',
                    text: shareText,
                    url: shareUrl
                });
            }
        } catch (err) {
            console.log('공유 실패:', err);
            fallbackShare(shareText, shareUrl);
        }
    } else {
        fallbackShare(shareText, shareUrl);
    }
}

// ========== 대체 공유 방법 ==========
function fallbackShare(text, url) {
    const fullText = `${text}\n${url}`;
    if (navigator.clipboard) {
        navigator.clipboard.writeText(fullText).then(() => {
            alert(currentLanguage === 'ko' ? '결과가 클립보드에 복사되었습니다!' : 'Result copied to clipboard!');
        });
    } else {
        const textArea = document.createElement('textarea');
        textArea.value = fullText;
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand('copy');
        document.body.removeChild(textArea);
        alert(currentLanguage === 'ko' ? '복사되었습니다!' : 'Copied!');
    }
}

// ========== 테스트 재시도 ==========
function retryTest() {
    startTest();
}
