// 다국어 번역 데이터 - SEO 및 마케팅 최적화 버전
const translations = {
    ko: {
        meta: { title: "나의 2026 오라 컬러는? | 무료 심리 테스트", description: "심리학 기반 성격 분석으로 당신의 2026년 에너지 컬러를 찾으세요. 아우라 컬러의 의미와 2026년 행운의 조언을 확인하세요." },
        shareMessage: "나의 2026년 에너지는 [COLOR]! ✨ 당신의 컬러도 확인해보세요!",
        linkCopied: "링크 복사 완료!", canvasTitle: "2026 나의 아우라 컬러", back: "이전",
        home: { title: "2026 나의 아우라 컬러", subtitle: "심리학 기반 성격 분석으로 당신의 에너지 컬러를 찾아보세요", startButton: "나의 에너지 확인하기", info: "⏱️ 2분 소요 | 📝 15개 질문 | 🎨 6가지 컬러" },
        questions: [
            { q: "2026년의 아침, 하루를 시작할 때 가장 먼저 드는 생각은?", a: ["오늘은 어떤 목표를 달성해볼까?", "오늘 하루도 평화롭고 평온하기를", "오늘은 어떤 신나는 일이 일어날까?", "나만을 위한 재충전의 시간이 필요해"] },
            { q: "스트레스를 받았을 때, 당신은 어떻게 대처하나요?", a: ["문제를 논리적으로 분석해 해결한다", "가까운 사람들과 대화하며 마음을 푼다", "창작 활동에 몰입하며 스트레스를 잊는다", "혼자만의 시간을 가지며 마음을 정리한다"] },
            { q: "2026년에 당신이 꿈꾸는 이상적인 주말은?", a: ["개인 프로젝트를 계획하고 실행하기", "사랑하는 이들과 함께 소중한 시간 보내기", "새로운 곳을 탐험하며 모험 즐기기", "조용히 독서와 사색을 하며 휴식하기"] },
            { q: "중요한 결정을 내릴 때, 당신이 우선시하는 가치는?", a: ["논리적인 근거와 실질적인 결과", "나의 결정이 타인의 감정에 미칠 영향", "나의 직관과 뜨거운 열정", "깊은 사색 끝에 얻은 지혜"] },
            { q: "평소 당신의 에너지 레벨은 어떤 편인가요?", a: ["일정하고 집중력이 높은 상태", "따뜻하고 주변을 보살피는 상태", "높고 활기찬 에너지가 넘치는 상태", "차분하고 내면을 응시하는 상태"] },
            { q: "사람들과 함께 있는 자리에서 당신은?", a: ["상황을 관찰하며 전략적으로 행동한다", "사람들과 정서적으로 교감하며 연결된다", "분위기를 주도하며 활기를 불어넣는다", "소수의 사람들과 깊이 있는 대화를 즐긴다"] },
            { q: "당신을 움직이게 하는 가장 큰 원동력은 무엇인가요?", a: ["명확한 목표를 성취했을 때의 쾌감", "누군가에게 도움을 주고 변화를 만드는 보람", "새로운 것을 창조하고 혁신하는 즐거움", "세상의 본질적인 진리를 이해하는 것"] },
            { q: "어려운 도전에 직면했을 때 당신의 스타일은?", a: ["치밀하고 전략적인 계획을 세운다", "주변 사람들에게 조언과 지지를 구한다", "자신감을 가지고 열정적으로 뛰어든다", "원인을 근본적으로 이해하기 위해 시간을 갖는다"] },
            { q: "타인이 말하는 당신의 이미지는 어떤가요?", a: ["믿음직하고 체계적인 사람", "따뜻하고 공감 능력이 뛰어난 사람", "에너지가 넘치고 영감을 주는 사람", "지혜롭고 생각이 깊은 사람"] },
            { q: "당신이 가장 효율적으로 일할 수 있는 환경은?", a: ["목표가 명확하고 구조화된 환경", "서로 돕고 협력하는 따뜻한 환경", "변화가 빠르고 역동적인 환경", "조용하고 혼자 집중할 수 있는 환경"] },
            { q: "갑작스러운 변화를 맞이했을 때, 당신은?", a: ["철저하게 계획을 세워 적응한다", "다른 사람들은 어떻게 느끼는지 먼저 살핀다", "새로운 기회라 생각하며 즐겁게 받아들인다", "그 변화가 삶에 주는 깊은 의미를 생각한다"] },
            { q: "당신은 어떤 방식으로 창의성을 표현하나요?", a: ["복잡한 문제를 해결하는 전략 세우기", "사람들과 깊이 교감하고 도움 주기", "예술, 음악, 공연 등 감각적인 활동", "글쓰기, 철학, 명상 등 사색적인 활동"] },
            { q: "2026년이 끝날 때, 어떤 기분을 느끼고 싶나요?", a: ["큰 성과를 이루어낸 성취감", "많은 사랑을 주고받은 충만함", "매 순간이 살아있음을 느낀 만족감", "평화롭고 지혜로워진 평온함"] },
            { q: "당신에게 자연은 어떤 의미를 갖나요?", a: ["자연 속의 질서와 조화를 감상하는 곳", "나 자신이 세상과 가장 연결됨을 느끼는 곳", "새로운 활력과 영감을 얻는 원천", "나 자신을 되돌아보는 성찰의 공간"] },
            { q: "도움이 필요한 사람을 보았을 때, 당신은?", a: ["실용적으로 도움이 되는 해결책을 찾아준다", "진심 어린 공감과 정서적인 위로를 건넨다", "긍정적인 에너지로 활력을 불어넣어 준다", "통찰력 있는 조언과 지혜를 공유한다"] }
        ],
        loading: { analyzing: "아우라 분석 중...", step1: "에너지 패턴 추출 중...", step2: "컬러 주파수 매핑 중...", step3: "2026 아우라 공개 중..." },
        result: { aboutTitle: "당신의 아우라", strengthsTitle: "당신의 강점", recommendationsTitle: "2026년의 추천", downloadButton: "📸 나의 결과 카드 저장하기", shareButton: "✨ 나의 에너지 공유하기", retryButton: "🔄 다시 테스트하기", exploreTitle: "모든 아우라 둘러보기" },
        colors: {
            coolBlue: { name: "쿨 블루", subtitle: "냉철한 전략가", keywords: ["전략적인", "차분한", "신뢰할 수 있는"], description: "당신의 아우라는 차분하고 정돈된 에너지를 발산합니다. 논리와 명확성을 가지고 삶에 접근하며, 타고난 문제 해결사 역할을 합니다. 2026년, 당신의 흔들리지 않는 평온함은 가장 큰 강점이 될 것입니다.", strengths: ["치밀한 전략 수립 및 분석 능력", " 압박감 속에서도 침착함 유지", "혼란 속에서 질서를 창조함"], recommendations: ["계획이 필요한 프로젝트를 주도하세요", "글을 통해 자신의 통찰력을 나누세요", "논리와 창의적인 탐색 사이의 균형을 맞추세요"] },
            vampPurple: { name: "뱀프 퍼플", subtitle: "신비로운 창조자", keywords: ["신비로운", "창의적인", "강렬한"], description: "당신의 아우라는 매혹적이고 신비로운 에너지를 담고 있습니다. 어둠 속에서 아름다움을 발견하고 복잡함 속에서 깊이를 찾아냅니다. 당신의 창의적인 강렬함은 다른 사람들을 당신만의 독특한 세계로 끌어들입니다.", strengths: ["깊은 창의적 비전과 예술적 재능", "복잡한 상황에서의 유연함", "타인의 호기심을 자극하는 매력적인 존재감"], recommendations: ["당신만의 독특한 창의적 스타일을 포용하세요", "자신의 예술을 세상에 당당히 알리세요", "극적인 미학을 탐구해 보세요"] },
            solarGold: { name: "솔라 골드", subtitle: "빛나는 리더", keywords: ["활기찬", "영감을 주는", "자신감"], description: "당신의 아우라는 태양처럼 빛나며 주변의 모든 것을 밝게 비춥니다. 당신의 전염성 있는 에너지와 낙천주의는 당신을 어디서나 온기를 전하는 타고난 리더로 만듭니다.", strengths: ["타고난 카리스마와 리더십", "타인에게 에너지를 주고 동기부여함", "역동적인 환경에서 능력을 발휘함"], recommendations: ["2026년에는 리더 역할을 맡아보세요", "강연이나 발표를 통해 열정을 나누세요", "에너지를 대담한 새로운 모험에 쏟으세요"] },
            forestGreen: { name: "포레스트 그린", subtitle: "균형 잡힌 조화론자", keywords: ["균형 잡힌", "안정적인", "평화로운"], description: "당신의 아우라는 자연스럽고 조화로운 에너지로 흐릅니다. 숲처럼 당신은 주변에 안식처와 균형을 제공합니다. 진정한 힘은 평온함과 자연과의 연결에서 온다는 것을 잘 알고 있습니다.", strengths: ["조화를 만들어내는 탁월한 능력", "차분하고 안정적인 존재감", "자연과의 깊은 유대감"], recommendations: ["2026년에는 균형 잡힌 루틴을 만드세요", "정기적으로 자연 속에서 시간을 보내세요", "타인이 내면의 중심을 찾도록 도와주세요"] },
            softPink: { name: "소프트 핑크", subtitle: "자애로운 치유자", keywords: ["공감하는", "보살피는", "사랑스러운"], description: "당신의 아우라는 부드럽고 치유하는 에너지로 빛납니다. 당신은 깊은 공감 능력을 갖추고 있어 타인이 진정으로 이해받고 보살핌을 받고 있다고 느끼게 합니다. 당신의 존재 자체가 하나의 치유입니다.", strengths: ["높은 정서적 지능(EQ)", "타인을 위로하고 치유하는 타고난 능력", "취약함을 드러내도 안전한 공간을 만듦"], recommendations: ["봉사 활동이나 나눔에 참여해 보세요", "타인을 돌보면서도 건강한 경계선을 세우세요", "자신을 위한 헌신적인 셀프케어를 실천하세요"] },
            midnightBlack: { name: "미드나잇 블랙", subtitle: "깊은 사색가", keywords: ["내성적인", "지혜로운", "심오한"], description: "당신의 아우라는 위대한 통찰이 솟아나는 한밤중의 깊이를 간직하고 있습니다. 표면 너머의 의미를 찾으며, 당신의 사색적인 태도는 남들이 놓치는 진실을 밝혀냅니다.", strengths: ["심오한 철학적 사고 능력", "타인이 간과하는 연결 고리를 찾아냄", " 깊은 성찰에서 나오는 지혜"], recommendations: ["글쓰기를 통해 자신의 통찰을 나누세요", "고독과 사색을 위한 시간을 확보하세요", "철학이나 심리학 분야를 탐구해 보세요"] }
        },
        footer: { privacy: "개인정보처리방침", contact: "문의하기", about: "테스트 소개", psychology: "색채 심리학 가이드" },
        seo: { 
            learnMore: "✨ 2026 오라 컬러 테스트 상세 가이드", 
            title: "2026 오라 컬러 테스트: 당신의 잠재된 에너지를 발견하는 여행", 
            description: "2026년은 그 어느 때보다 개인의 고유한 에너지와 내면의 평화가 중요해지는 시기입니다. 2026 오라 컬러 테스트는 최신 색채 심리학과 성격 분석 알고리즘을 결합하여, 사용자가 현재 발산하고 있는 고유의 주파수를 색상으로 시각화해 줍니다.<br><br>왜 아우라 컬러가 중요할까요? 아우라는 단순한 색이 아니라 당신의 현재 심리 상태, 신체적 활력, 그리고 주변 세계와 상호작용하는 방식을 나타냅니다. 이 테스트는 15개의 정교한 질문을 통해 당신의 핵심 가치관과 행동 패턴을 분석합니다.<br><br><b>[테스트를 통해 알 수 있는 것들]</b><br>1. <b>나의 핵심 에너지:</b> 6가지 고유한 아우라 컬러(쿨 블루, 뱀프 퍼플, 솔라 골드 등) 중 하나를 발견합니다.<br>2. <b>잠재적 강점:</b> 일상에서 미처 발견하지 못했던 당신만의 빛나는 능력을 정의합니다.<br>3. <b>2026년 맞춤형 조언:</b> 다가오는 한 해를 더 풍요롭고 의미 있게 보낼 수 있는 실질적인 가이드를 제공합니다.<br><br>이 테스트는 과학적인 성격 분류 체계를 바탕으로 하되, 누구나 쉽고 재미있게 즐길 수 있도록 설계되었습니다. 지금 바로 당신의 2026년 컬러를 확인하고, 그 색이 주는 긍정적인 메시지를 삶에 적용해 보세요." 
        }
    },
    en: {
        meta: { title: "2026 Aura Color Test | Discover Your Energy", description: "Find your 2026 energy color based on psychology. Get personalized insights and aura meanings for 2026." },
        shareMessage: "My 2026 energy is [COLOR]! ✨ Discover your color now!",
        linkCopied: "Link copied!", canvasTitle: "2026 Aura Color", back: "Back",
        home: { title: "2026 Aura Color Test", subtitle: "Discover your energy color through psychology-based personality analysis", startButton: "Discover My Energy", info: "⏱️ 2 min | 📝 15 questions | 🎨 6 colors" },
        questions: [
            { q: "When starting your day in 2026, what's your first thought?", a: ["What goals will I achieve today?", "I hope today brings peace and calm", "Let's see what exciting things happen!", "I need time to recharge alone"] },
            { q: "How do you handle stress?", a: ["I analyze the problem logically", "I talk it out with close friends", "I dive into creative activities", "I need solitude to process"] },
            { q: "What's your ideal weekend in 2026?", a: ["Planning and executing a personal project", "Spending quality time with loved ones", "Exploring new experiences", "Reading, reflecting, and resting"] },
            { q: "When making decisions, you prioritize:", a: ["Logic and practical outcomes", "How it affects others' feelings", "Following my intuition and passion", "Deep reflection and wisdom"] },
            { q: "Your energy level is usually:", a: ["Steady and focused", "Warm and nurturing", "High and enthusiastic", "Quiet and contemplative"] },
            { q: "In social situations, you tend to:", a: ["Observe and contribute strategically", "Connect emotionally with everyone", "Be the life of the party", "Prefer small, meaningful conversations"] },
            { q: "What motivates you most?", a: ["Achieving clear, measurable goals", "Helping others and making a difference", "Creative expression and innovation", "Understanding deeper truths"] },
            { q: "Your approach to challenges:", a: ["Create a strategic plan", "Seek support from my circle", "Jump in with enthusiasm", "Take time to understand the root cause"] },
            { q: "People often describe you as:", a: ["Reliable and organized", "Caring and empathetic", "Energetic and inspiring", "Wise and introspective"] },
            { q: "Your ideal work environment:", a: ["Structured with clear objectives", "Collaborative and supportive", "Dynamic and fast-paced", "Quiet and focused"] },
            { q: "When facing change, you:", a: ["Adapt with careful planning", "Check in with how others are coping", "Embrace it with excitement", "Reflect on its deeper meaning"] },
            { q: "Your creative outlet is:", a: ["Problem-solving and strategy", "Connecting and helping people", "Art, music, or performance", "Writing, philosophy, or meditation"] },
            { q: "At the end of 2026, you want to feel:", a: ["Accomplished and successful", "Loved and connected", "Alive and fulfilled", "Peaceful and wise"] },
            { q: "Your relationship with nature:", a: ["I appreciate its order and patterns", "It's where I feel most connected", "It energizes and inspires me", "It's essential for my reflection"] },
            { q: "When someone needs help, you:", a: ["Offer practical solutions", "Provide emotional support", "Bring optimism and energy", "Share wisdom and perspective"] }
        ],
        loading: { analyzing: "Analyzing your aura...", step1: "Extracting patterns...", step2: "Mapping frequencies...", step3: "Revealing aura..." },
        result: { aboutTitle: "About Your Aura", strengthsTitle: "Your Strengths", recommendationsTitle: "2026 Recommendations", downloadButton: "📸 Get My Result Card", shareButton: "✨ Share My Energy", retryButton: "🔄 Try Again", exploreTitle: "Explore All Auras" },
        colors: {
            coolBlue: { name: "Cool Blue", subtitle: "The Calm Strategist", keywords: ["Strategic", "Calm", "Reliable"], description: "Your aura radiates a cool, composed energy. You approach life with logic and clarity, making you a natural problem-solver.", strengths: ["Excellent strategic planning", "Maintains composure", "Creates order"], recommendations: ["Lead planning projects", "Share insights through writing", "Balance logic and creativity"] },
            vampPurple: { name: "Vamp Purple", subtitle: "The Mystical Creator", keywords: ["Mysterious", "Creative", "Intense"], description: "Your aura carries an enchanting, mysterious energy. You see beauty in darkness and depth in complexity.", strengths: ["Deep creative vision", "Comfortable with complexity", "Magnetic presence"], recommendations: ["Embrace your unique style", "Share art boldly", "Explore dramatic aesthetics"] },
            solarGold: { name: "Solar Gold", subtitle: "The Radiant Leader", keywords: ["Energetic", "Inspiring", "Confidence"], description: "Your aura shines like the sun, illuminating everything around you. Your infectious energy makes you a natural leader.", strengths: ["Natural charisma", "Energizes others", "Thrives in dynamic roles"], recommendations: ["Take leadership roles", "Share enthusiasm", "Start bold ventures"] },
            forestGreen: { name: "Forest Green", subtitle: "The Balanced Harmonizer", keywords: ["Balanced", "Grounded", "Peaceful"], description: "Your aura flows with natural, harmonious energy. Like a forest, you provide shelter and balance.", strengths: ["Exceptional at harmony", "Grounded presence", "Deep nature connection"], recommendations: ["Create balanced routines", "Spend time in nature", "Help others find center"] },
            softPink: { name: "Soft Pink", subtitle: "The Compassionate Healer", keywords: ["Empathetic", "Nurturing", "Loving"], description: "Your aura glows with gentle, healing energy. You make others feel truly seen and cared for.", strengths: ["High emotional intelligence", "Ability to comfort", "Creates safe spaces"], recommendations: ["Pursue volunteer work", "Set healthy boundaries", "Practice self-care"] },
            midnightBlack: { name: "Midnight Black", subtitle: "The Deep Philosopher", keywords: ["Introspective", "Wise", "Profound"], description: "Your aura holds the depth of midnight. Your contemplative nature reveals hidden truths.", strengths: ["Profound thinking", "Sees hidden connections", "Wisdom from reflection"], recommendations: ["Share insights", "Create time for solitude", "Explore philosophy"] }
        },
        footer: { privacy: "Privacy Policy", contact: "Contact", about: "About Test", psychology: "Color Guide" },
        seo: { 
            learnMore: "✨ Detailed Guide to 2026 Aura Color Test", 
            title: "2026 Aura Color Test: A Journey to Discover Your Latent Energy", 
            description: "2026 is a year where individual uniqueness and inner peace are more important than ever. The 2026 Aura Color Test combines the latest color psychology with personality analysis algorithms to visualize the unique frequency you emit as a color.<br><br>Why is aura color important? Your aura isn't just a color; it represents your current mental state, physical vitality, and how you interact with the world around you. This test analyzes your core values and behavior patterns through 15 sophisticated questions." 
        }
    }
};

// 전역 언어 설정 관리
if (typeof window.currentLanguage === 'undefined') { window.currentLanguage = 'ko'; }

function detectLanguage() {
    const l = navigator.language || navigator.userLanguage;
    if (l.startsWith('ko')) return 'ko'; if (l.startsWith('ja')) return 'ja';
    if (l.startsWith('es')) return 'es'; if (l.startsWith('pt')) return 'pt'; return 'en';
}

function changeLanguage(lang) {
    window.currentLanguage = lang;
    updatePageLanguage();
    if (typeof displayQuestion === 'function' && document.getElementById('question-screen').classList.contains('active')) {
        displayQuestion();
    }
    if (window.currentResultKey) {
        if (typeof drawResultToCanvas === 'function') drawResultToCanvas();
        if (typeof populateAuraTabs === 'function') populateAuraTabs();
        if (typeof showAuraDetail === 'function' && document.getElementById('aura-explorer-detail').style.display !== 'none') {
            showAuraDetail(window.lastExploredKey || window.currentResultKey);
        }
    }
}

function updatePageLanguage() {
    const lang = window.currentLanguage;
    const data = translations[lang] || translations['ko'];
    
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        const keys = key.split('.');
        let val = data;
        keys.forEach(k => { if (val) val = val[k]; });
        if (val && typeof val === 'string') {
            if (key.startsWith('seo.') || key === 'seo.learnMore') el.innerHTML = val;
            else el.textContent = val;
        }
    });

    let metaTitle = data.meta.title;
    let metaDesc = data.meta.description;

    if (window.currentResultKey) {
        const res = data.colors[window.currentResultKey] || translations['ko'].colors[window.currentResultKey];
        if (res) {
            const titleEl = document.getElementById('result-title');
            const subtitleEl = document.getElementById('result-subtitle');
            const descEl = document.getElementById('result-description');
            if (titleEl) titleEl.textContent = res.name;
            if (subtitleEl) subtitleEl.textContent = res.subtitle;
            if (descEl) descEl.textContent = res.description;
            
            const kw = document.getElementById('keywords');
            if (kw) {
                kw.innerHTML = '';
                res.keywords.forEach(k => {
                    const t = document.createElement('div');
                    t.className = 'keyword-tag';
                    t.textContent = k;
                    kw.appendChild(t);
                });
            }
            const stList = document.getElementById('strengths-list');
            if (stList) {
                stList.innerHTML = '';
                res.strengths.forEach(s => { const li = document.createElement('li'); li.textContent = s; stList.appendChild(li); });
            }
            const recList = document.getElementById('recommendations-list');
            if (recList) {
                recList.innerHTML = '';
                res.recommendations.forEach(r => { const li = document.createElement('li'); li.textContent = r; recList.appendChild(li); });
            }
            metaTitle = t('shareMessage').replace('[COLOR]', res.name);
        }
    }

    document.title = metaTitle;
    updateMetaTag('property', 'og:title', metaTitle);
    updateMetaTag('property', 'og:description', metaDesc);
    updateMetaTag('name', 'title', metaTitle);
    updateMetaTag('name', 'description', metaDesc);
}

function updateMetaTag(n, v, c) {
    let el = document.querySelector(`meta[${n}="${v}"]`);
    if (el) el.setAttribute('content', c);
}

function t(key) {
    const keys = key.split('.');
    let val = translations[window.currentLanguage] || translations['ko'];
    keys.forEach(k => { if (val) val = val[k]; });
    return val || key;
}
