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
    
    // 결과 데이터 가져오기
    const result = translations[currentLanguage].colors[resultColor];
    const colorInfo = colorData[resultColor];
    
    // 컬러 이미지 표시
    const colorDisplay = document.getElementById('result-color-display');
    colorDisplay.style.background = `url('${colorInfo.image}') center/cover no-repeat`;
    colorDisplay.style.borderRadius = '50%'; // 원형 유지
    
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
    
    // Canvas 크기 설정 (Instagram Story 최적화: 1080x1920)
    canvas.width = 1080;
    canvas.height = 1920;
    
    const result = window.currentResult;
    
    // 배경 그라데이션
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
    
    // 상단 텍스트
    ctx.fillStyle = 'white';
    ctx.font = 'bold 60px Arial';
    ctx.textAlign = 'center';
    ctx.fillText('2026 Aura Color', canvas.width / 2, 150);
    
    // 아우라 이미지 그리기
    const img = new Image();
    img.onload = function() {
        // 원형 클리핑 효과
        ctx.save();
        ctx.beginPath();
        ctx.arc(canvas.width / 2, 450, 250, 0, Math.PI * 2);
        ctx.closePath();
        ctx.clip();
        
        ctx.drawImage(img, canvas.width / 2 - 250, 450 - 250, 500, 500);
        ctx.restore();
        
        // 흰색 테두리
        ctx.strokeStyle = 'white';
        ctx.lineWidth = 15;
        ctx.beginPath();
        ctx.arc(canvas.width / 2, 450, 250, 0, Math.PI * 2);
        ctx.stroke();
        
        // 결과 이름
        ctx.fillStyle = 'white';
        ctx.font = 'bold 90px Arial';
        ctx.fillText(result.name, canvas.width / 2, 820);
        
        // 부제목
        ctx.font = '45px Arial';
        ctx.fillText(result.subtitle, canvas.width / 2, 900);
        
        // 키워드
        let yPos = 1050;
        ctx.font = 'bold 55px Arial';
        result.keywords.forEach((keyword, index) => {
            ctx.fillText(`#${keyword}`, canvas.width / 2, yPos + (index * 90));
        });
        
        // 하단 워터마크
        ctx.font = '35px Arial';
        ctx.fillStyle = 'rgba(255, 255, 255, 0.8)';
        ctx.fillText('aura-color-test.com', canvas.width / 2, canvas.height - 100);
        
        // 다운로드
        const link = document.createElement('a');
        link.download = `my-2026-aura-${result.color}.png`;
        link.href = canvas.toDataURL('image/png');
        link.click();
    };
    img.src = result.colorInfo.image;
}

// ========== 결과 공유 ==========
function shareResult() {
    const result = window.currentResult;
    const shareText = `My 2026 Aura Color is ${result.name}! 🌟 Find yours at aura-color-test.com`;
    const shareUrl = window.location.href;
    
    if (navigator.share) {
        navigator.share({
            title: '2026 Aura Color Test',
            text: shareText,
            url: shareUrl
        }).then(() => {
            console.log('공유 성공');
        }).catch(err => {
            console.log('공유 취소 또는 오류', err);
            fallbackShare(shareText, shareUrl);
        });
    } else {
        fallbackShare(shareText, shareUrl);
    }
}

// ========== 대체 공유 방법 ==========
function fallbackShare(text, url) {
    const fullText = `${text}\n${url}`;
    if (navigator.clipboard) {
        navigator.clipboard.writeText(fullText).then(() => {
            alert(t('result.shareButton') + ' - Link copied to clipboard!');
        });
    } else {
        const textArea = document.createElement('textarea');
        textArea.value = fullText;
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand('copy');
        document.body.removeChild(textArea);
        alert('Link copied to clipboard!');
    }
}

// ========== 테스트 재시도 ==========
function retryTest() {
    startTest();
}
