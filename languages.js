// 다국어 번역 데이터
const translations = {
    en: {
        meta: { title: "What's Your 2026 Aura Color?", description: "Discover your energy color through psychology-based personality analysis. Take the 2026 Aura Test!" },
        shareMessage: "My 2026 Aura Color is [COLOR]! ✨ Discover your energy color now!",
        linkCopied: "Result link copied! Share it with your friends.",
        canvasTitle: "2026 Aura Color",
        back: "Back",
        home: { title: "2026 Aura Color Test", subtitle: "Discover your energy color through psychology-based personality analysis", startButton: "Start Test", info: "⏱️ 2 minutes | 📝 15 questions | 🎨 6 color results" },
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
        loading: { analyzing: "Analyzing your aura...", step1: "Extracting energy patterns...", step2: "Mapping color frequencies...", step3: "Revealing your 2026 aura..." },
        result: { aboutTitle: "About Your Aura", strengthsTitle: "Your Strengths", recommendationsTitle: "2026 Recommendations", downloadButton: "📸 Download Image", shareButton: "🔗 Share Result", retryButton: "🔄 Try Again", exploreTitle: "Explore All Auras" },
        colors: {
            coolBlue: { name: "Cool Blue", subtitle: "The Calm Strategist", keywords: ["Strategic", "Calm", "Reliable"], description: "Your aura radiates a cool, composed energy. You approach life with logic and clarity.", strengths: ["Excellent strategic planning", "Maintains composure", "Creates order"], recommendations: ["Lead planning projects", "Share insights through writing", "Balance logic and creativity"] },
            vampPurple: { name: "Vamp Purple", subtitle: "The Mystical Creator", keywords: ["Mysterious", "Creative", "Intense"], description: "Your aura carries an enchanting, mysterious energy. You see beauty in complexity.", strengths: ["Deep creative vision", "Comfortable with complexity", "Magnetic presence"], recommendations: ["Embrace your unique style", "Share art boldly", "Explore dramatic aesthetics"] },
            solarGold: { name: "Solar Gold", subtitle: "The Radiant Leader", keywords: ["Energetic", "Inspiring", "Confidence"], description: "Your aura shines like the sun. Your energy and optimism make you a natural leader.", strengths: ["Natural charisma", "Energizes others", "Thrives in dynamic roles"], recommendations: ["Take leadership roles", "Share enthusiasm", "Start bold ventures"] },
            forestGreen: { name: "Forest Green", subtitle: "The Balanced Harmonizer", keywords: ["Balanced", "Grounded", "Peaceful"], description: "Your aura flows with natural energy. You provide shelter and balance like a forest.", strengths: ["Exceptional at harmony", "Grounded presence", "Deep nature connection"], recommendations: ["Create balanced routines", "Spend time in nature", "Help others find center"] },
            softPink: { name: "Soft Pink", subtitle: "The Compassionate Healer", keywords: ["Empathetic", "Nurturing", "Loving"], description: "Your aura glows with gentle energy. You make others feel truly seen and cared for.", strengths: ["High emotional intelligence", "Ability to comfort", "Creates safe spaces"], recommendations: ["Pursue volunteer work", "Set healthy boundaries", "Practice self-care"] },
            midnightBlack: { name: "Midnight Black", subtitle: "The Deep Philosopher", keywords: ["Introspective", "Wise", "Profound"], description: "Your aura holds the depth of midnight. Your contemplative nature reveals hidden truths.", strengths: ["Profound thinking", "Sees hidden connections", "Wisdom from reflection"], recommendations: ["Share insights", "Create time for solitude", "Explore philosophy"] }
        },
        footer: { privacy: "Privacy Policy", contact: "Contact" },
        seo: { learnMore: "✨ Learn more about the test", title: "2026 Aura Color Test: Why take this test?", description: "The 2026 Aura Color Test uses a psychology-based algorithm updated for the year 2026.", item1: "<strong>2026 Trending:</strong> Discover why certain colors resonate with your energy in 2026.", item2: "<strong>Personal Insights:</strong> Get actionable advice and strengths analysis based on your aura.", item3: "<strong>Updated Algorithms:</strong> Reflecting the latest social and psychological trends of 2026." }
    },
    ko: {
        meta: { title: "나의 2026 오라 컬러는?", description: "심리학 기반 성격 분석으로 당신의 2026년 에너지 컬러를 찾아보세요!" },
        shareMessage: "나의 2026년 아우라 컬러는 [COLOR]! ✨ 당신의 에너지 컬러도 지금 확인해보세요!",
        linkCopied: "결과 링크가 복사되었습니다! 친구들에게 공유해보세요.",
        canvasTitle: "2026 나의 아우라 컬러",
        back: "이전",
        home: { title: "2026 나의 아우라 컬러", subtitle: "심리학 기반 성격 분석으로 당신의 에너지 컬러를 찾아보세요", startButton: "테스트 시작", info: "⏱️ 2분 소요 | 📝 15개 질문 | 🎨 6가지 컬러" },
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
        result: { aboutTitle: "당신의 아우라", strengthsTitle: "당신의 강점", recommendationsTitle: "2026년의 추천", downloadButton: "📸 이미지 저장하기", shareButton: "🔗 결과 공유하기", retryButton: "🔄 다시 테스트하기", exploreTitle: "모든 아우라 둘러보기" },
        colors: {
            coolBlue: { name: "쿨 블루", subtitle: "냉철한 전략가", keywords: ["전략적인", "차분한", "신뢰할 수 있는"], description: "당신의 아우라는 차분하고 정돈된 에너지를 발산합니다. 논리와 명확성을 가지고 삶에 접근하며 타고난 문제 해결사 역할을 합니다.", strengths: ["치밀한 전략 수립 능력", "압박감 속의 침착함", "질서 창조 능력"], recommendations: ["전략 프로젝트 주도", "글로 통찰력 공유", "논리와 창의의 균형"] },
            vampPurple: { name: "뱀프 퍼플", subtitle: "신비로운 창조자", keywords: ["신비로운", "창의적인", "강렬한"], description: "당신의 아우라는 매혹적이고 신비로운 에너지를 담고 있습니다. 어둠 속에서 아름다움을 발견하고 복잡함 속에서 깊이를 찾아냅니다.", strengths: ["깊은 창의적 비전", "복잡한 상황에서의 유연함", "매력적인 존재감"], recommendations: ["독특한 스타일 포용", "예술을 세상에 공유", "극적인 미학 탐구"] },
            solarGold: { name: "솔라 골드", subtitle: "빛나는 리더", keywords: ["활기찬", "영감을 주는", "자신감"], description: "당신의 아우라는 태양처럼 주변을 밝게 비춥니다. 전염성 있는 에너지와 낙천주의로 어디서나 온기를 전하는 리더입니다.", strengths: ["타고난 카리스마", "타인에게 동기부여", "역동적인 환경 적응력"], recommendations: ["리더 역할 맡기", "강연으로 열정 나누기", "새로운 모험에 도전"] },
            forestGreen: { name: "포레스트 그린", subtitle: "균형 잡힌 조화론자", keywords: ["균형 잡힌", "안정적인", "평화로운"], description: "당신의 아우라는 자연스러운 에너지로 흐릅니다. 숲처럼 주변에 안식처와 균형을 제공하며 자연과 깊이 연결되어 있습니다.", strengths: ["조화 창조 능력", "안정적인 존재감", "자연과의 깊은 유대"], recommendations: ["균형 잡힌 루틴 유지", "정기적인 자연 휴식", "타인의 중심 찾기 도움"] },
            softPink: { name: "소프트 핑크", subtitle: "자애로운 치유자", keywords: ["공감하는", "보살피는", "사랑스러운"], description: "당신의 아우라는 부드럽고 치유하는 에너지로 빛납니다. 깊은 공감 능력으로 타인이 진정으로 이해받고 있다고 느끼게 합니다.", strengths: ["높은 정서적 지능", "치유와 위로의 능력", "안전한 심리 공간 형성"], recommendations: ["봉사와 나눔 참여", "건강한 심리 경계 유지", "헌신적인 셀프케어"] },
            midnightBlack: { name: "미드나잇 블랙", subtitle: "깊은 사색가", keywords: ["내성적인", "지혜로운", "심오한"], description: "당신의 아우라는 위대한 통찰이 솟아나는 한밤중의 깊이를 간직하고 있습니다. 사색적인 태도로 남들이 놓치는 진실을 밝힙니다.", strengths: ["심오한 철학적 사고", "숨은 연결 고리 발견", "성찰에서 나오는 지혜"], recommendations: ["글쓰기로 통찰 공유", "고독과 사색 시간 확보", "철학과 심리학 탐구"] }
        },
        footer: { privacy: "개인정보처리방침", contact: "문의하기" },
        seo: { learnMore: "✨ 테스트에 대해 더 알아보기", title: "2026 오라 컬러 테스트: 왜 이 테스트를 해야 할까요?", description: "2026 오라 컬러 테스트는 2026년의 최신 심리 트렌드를 반영한 알고리즘을 사용합니다.", item1: "<strong>2026 트렌딩:</strong> 2026년 당신의 에너지와 공명하는 컬러를 발견하세요.", item2: "<strong>개인별 인사이트:</strong> 아우라 분석을 통해 실질적인 조언을 제공합니다.", item3: "<strong>최신 알고리즘:</strong> 2026년의 사회적, 심리학적 트렌드를 반영했습니다." }
    },
    ja: {
        meta: { title: "あなたの2026年オーラカラーは?", description: "心理学に基づいた性格分析で、あなたの2026年のエネルギーカラーを見つけましょう！" },
        shareMessage: "私の2026年オーラカラーは [COLOR]! ✨ 今すぐチェック！",
        linkCopied: "リンクをコピーしました！友達にシェアしましょう。",
        canvasTitle: "2026年 オーラカラー",
        back: "戻る",
        home: { title: "2026年 オーラカラー診断", subtitle: "心理学に基づいた性格分析で、あなたのエネルギーカラーを見つけましょう", startButton: "診断を始める", info: "⏱️ 2分 | 📝 15の質問 | 🎨 6つのカラー" },
        questions: [{ q: "2026年の朝、一日を始めるときに最初に思うことは？", a: ["今日はどんな目標を達成しようか？", "今日が平和で穏やかでありますように", "今日はどんなワクワクすることが起きるかな？", "自分だけの充電時間が必要だ"] }],
        loading: { analyzing: "オーラを分析中...", step1: "エネルギーパターン抽出...", step2: "カラー周波数マッピング...", step3: "2026年のオーラ公開..." },
        result: { aboutTitle: "あなたのオーラについて", strengthsTitle: "あなたの強み", recommendationsTitle: "2026年の推奨事項", downloadButton: "📸 画像を保存", shareButton: "🔗 結果をシェア", retryButton: "🔄 もう一度", exploreTitle: "すべてのオーラ" },
        colors: { coolBlue: { name: "クールブルー", subtitle: "冷静な戦略家", keywords: ["戦略的", "冷静", "信頼"], description: "あなたのオーラは冷静で整ったエネルギーを放っています。", strengths: ["戦略立안", "冷静さ", "秩序創造"], recommendations: ["計画主導", "洞察共有", "バランス"] } },
        footer: { privacy: "プライバシーポリシー", contact: "お問い合わせ" },
        seo: { learnMore: "✨ 診断について詳しく知る", title: "2026年オーラカラー診断：なぜこの診断を受けるべきなのですか？", description: "2026年オーラカラー診断は最新トレンドを反映しています。", item1: "<strong>2026トレンド:</strong> エネルギーと共鳴する色を発見。", item2: "<strong>インサイト:</strong> 強み分析とアドバイス。", item3: "<strong>最新ロジック:</strong> 2026年のトレンドを反映。" }
    },
    es: {
        meta: { title: "¿Cuál es tu Color de Aura 2026?", description: "¡Descubre tu color de energía para el 2026!" },
        shareMessage: "¡Mi color de aura 2026 es [COLOR]! ✨",
        linkCopied: "¡Enlace copiado!",
        canvasTitle: "Aura 2026",
        back: "Volver",
        home: { title: "Test de Aura 2026", subtitle: "Descubre tu color de energía", startButton: "Empezar", info: "⏱️ 2 min | 📝 15 preg | 🎨 6 colores" },
        questions: [{ q: "Al empezar tu día en 2026, ¿cuál es tu primer pensamiento?", a: ["¿Metas hoy?", "Paz", "¡Emoción!", "Soledad"] }],
        loading: { analyzing: "Analizando...", step1: "Patrones...", step2: "Frecuencias...", step3: "Revelando..." },
        result: { aboutTitle: "Sobre tu Aura", strengthsTitle: "Fortalezas", recommendationsTitle: "Consejos 2026", downloadButton: "📸 Guardar", shareButton: "🔗 Compartir", retryButton: "🔄 Reintentar", exploreTitle: "Explorar" },
        colors: { coolBlue: { name: "Azul Fresco", subtitle: "Estratega", keywords: ["Estratégico", "Calma", "Confiable"], description: "Tu aura irradia calma y lógica.", strengths: ["Planificación", "Compostura", "Orden"], recommendations: ["Liderar", "Escribir", "Equilibrio"] } },
        footer: { privacy: "Privacidad", contact: "Contacto" },
        seo: { learnMore: "✨ Saber más", title: "Test Aura 2026: ¿Por qué?", description: "Algoritmo basado en psicología 2026.", item1: "<strong>Tendencias:</strong> Tu energía 2026.", item2: "<strong>Insights:</strong> Consejos reales.", item3: "<strong>Actualizado:</strong> Social y psicológico." }
    },
    pt: {
        meta: { title: "Qual é a sua Cor?", description: "Descubra a sua cor 2026!" },
        shareMessage: "Minha cor 2026 é [COLOR]!",
        linkCopied: "Link copiado!",
        canvasTitle: "Aura 2026",
        back: "Voltar",
        home: { title: "Teste Aura 2026", subtitle: "Descubra sua cor", startButton: "Começar", info: "⏱️ 2 min | 📝 15 preg | 🎨 6 cores" },
        questions: [{ q: "Começando 2026...", a: ["Metas", "Paz", "Festa", "Sossego"] }],
        loading: { analyzing: "Analisando...", step1: "Padrões...", step2: "Cores...", step3: "Revelando..." },
        result: { aboutTitle: "Sua Aura", strengthsTitle: "Pontos Fortes", recommendationsTitle: "Dicas 2026", downloadButton: "📸 Salvar", shareButton: "🔗 Compartilhar", retryButton: "🔄 De novo", exploreTitle: "Explorar" },
        colors: { coolBlue: { name: "Azul", subtitle: "Estrategista", keywords: ["Estratégia", "Calma", "Foco"], description: "Sua aura é calma.", strengths: ["Planos", "Foco", "Ordem"], recommendations: ["Liderança", "Escrita", "Equilíbrio"] } },
        footer: { privacy: "Privacidade", contact: "Contato" },
        seo: { learnMore: "✨ Saiba mais", title: "Teste Aura 2026", description: "Psicologia 2026.", item1: "<strong>Tendências:</strong> Sua cor.", item2: "<strong>Insights:</strong> Fortalezas.", item3: "<strong>Novo:</strong> Tendências 2026." }
    }
};

// 전역 언어 설정
window.currentLanguage = 'ko';

function detectLanguage() {
    const browserLang = navigator.language || navigator.userLanguage;
    if (browserLang.startsWith('ko')) return 'ko';
    if (browserLang.startsWith('ja')) return 'ja';
    if (browserLang.startsWith('es')) return 'es';
    if (browserLang.startsWith('pt')) return 'pt';
    return 'en';
}

function changeLanguage(lang) {
    window.currentLanguage = lang;
    updatePageLanguage();
}

function updatePageLanguage() {
    const lang = window.currentLanguage;
    const data = translations[lang];
    if (!data) return;
    
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        const keys = key.split('.');
        let value = data;
        keys.forEach(k => { if (value) value = value[k]; });
        if (value && typeof value === 'string') {
            if (key.startsWith('seo.item') || key === 'seo.learnMore') element.innerHTML = value;
            else element.textContent = value;
        }
    });

    if (window.currentResultKey) {
        const resData = data.colors[window.currentResultKey];
        if (resData) {
            document.getElementById('result-title').textContent = resData.name;
            document.getElementById('result-subtitle').textContent = resData.subtitle;
            document.getElementById('result-description').textContent = resData.description;
            const kwContainer = document.getElementById('keywords');
            if (kwContainer) {
                kwContainer.innerHTML = '';
                resData.keywords.forEach(kw => {
                    const tag = document.createElement('div');
                    tag.className = 'keyword-tag';
                    tag.textContent = kw;
                    kwContainer.appendChild(tag);
                });
            }
            const stList = document.getElementById('strengths-list');
            if (stList) {
                stList.innerHTML = '';
                resData.strengths.forEach(s => { const li = document.createElement('li'); li.textContent = s; stList.appendChild(li); });
            }
            const recList = document.getElementById('recommendations-list');
            if (recList) {
                recList.innerHTML = '';
                resData.recommendations.forEach(r => { const li = document.createElement('li'); li.textContent = r; recList.appendChild(li); });
            }
        }
    }

    const metaData = data.meta;
    if (metaData) {
        document.title = "2026 Aura Color Test - " + metaData.title;
        updateMetaTag('property', 'og:title', metaData.title);
        updateMetaTag('property', 'og:description', metaData.description);
        updateMetaTag('name', 'twitter:title', metaData.title);
        updateMetaTag('name', 'twitter:description', metaData.description);
        updateMetaTag('name', 'title', "2026 Aura Color Test - " + metaData.title);
        updateMetaTag('name', 'description', metaData.description);
    }
}

function updateMetaTag(attrName, attrValue, content) {
    let element = document.querySelector(`meta[${attrName}="${attrValue}"]`);
    if (element) element.setAttribute('content', content);
    else {
        element = document.createElement('meta');
        element.setAttribute(attrName, attrValue);
        element.setAttribute('content', content);
        document.head.appendChild(element);
    }
}

function t(key) {
    const keys = key.split('.');
    let value = translations[window.currentLanguage];
    keys.forEach(k => { if (value) value = value[k]; });
    return value || key;
}
