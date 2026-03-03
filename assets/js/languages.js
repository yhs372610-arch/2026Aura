// 다국어 번역 데이터 - 모든 언어 및 서브페이지 통합 최종 버전
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
        about: { pageTitle: "아우라 컬러란 무엇인가? | 2026 오라 컬러 테스트", back: "← 테스트로 돌아가기", title: "아우라 컬러란 무엇인가?", p1: "많은 사람들이 자신의 '아우라'에 대해 궁금해합니다. 아우라는 라틴어로 '공기', '미풍'을 뜻하며, 심리학과 동양 철학에서는 생명체가 발산하는 고유의 에너지를 의미합니다.", h2_1: "아우라 컬러의 역사와 의미", p2: "고대 문명에서는 성인이나 리더 주변에 빛나는 후광을 묘사하곤 했는데, 이것이 현대에 와서는 개인의 성격적 특성과 심리적 상태를 나타내는 지표로 발전했습니다.", h2_2: "6가지 대표 아우라 컬러", cta: "지금 바로 테스트 시작하기" },
        psychology: { pageTitle: "색채 심리학과 2026년 트렌드 | 2026 오라 컬러 테스트", back: "← 테스트로 돌아가기", title: "색채 심리학으로 본 2026년의 에너지", p1: "우리는 매일 수많은 색상에 둘러싸여 살아갑니다. 단순히 시각적인 즐거움을 넘어, 색상은 우리의 뇌파를 변화시키고 호르몬 분비에 영향을 준다는 사실을 알고 계셨나요?", h2_1: "색채 심리학이란?", p2: "색채 심리학은 색상이 인간의 행동과 감정에 미치는 영향을 연구하는 학문입니다. 2026 오라 컬러 테스트는 이러한 심리학적 원리를 설문에 녹여내어, 당신이 현재 필요로 하거나 발산하고 있는 에너지를 정확히 짚어냅니다.", h2_2: "2026년 트렌드 컬러: 왜 지금 아우라 테스트인가?", p3: "2026년은 인공지능과 기술의 급격한 발전 속에서 인간 본연의 '감성'과 '정체성'을 찾는 움직임이 그 어느 때보다 강해질 것으로 예측됩니다.", h2_3: "심리 테스트가 뇌에 미치는 긍정적 영향", p4: "단순한 재미를 넘어, 자신을 객관화하여 바라보는 과정(메타인지)은 스트레스 해소와 자존감 향상에 큰 도움을 줍니다.", cta: "나의 2026년 에너지 진단하기" },
        seo: { learnMore: "✨ 2026 오라 컬러 테스트 상세 가이드", title: "2026 오라 컬러 테스트: 당신의 잠재된 에너지를 발견하는 여행", description: "2026년은 그 어느 때보다 개인의 고유한 에너지와 내면의 평화가 중요해지는 시기입니다. 2026 오라 컬러 테스트는 최신 색채 심리학과 성격 분석 알고리즘을 결합하여, 사용자가 현재 발산하고 있는 고유의 주파수를 색상으로 시각화해 줍니다." }
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
        about: { pageTitle: "What is Aura Color? | 2026 Aura Color Test", back: "← Back to Test", title: "What is Aura Color?", p1: "Many people wonder about their 'aura'. Aura means 'air' or 'breeze' in Latin, and in psychology and Eastern philosophy, it refers to the unique energy emitted by living beings.", h2_1: "History and Meaning of Aura Color", p2: "In ancient civilizations, a shining halo was often depicted around saints or leaders, which in modern times has evolved into an indicator of individual personality traits and psychological states.", h2_2: "6 Representative Aura Colors", cta: "Start the Test Now" },
        psychology: { pageTitle: "Color Psychology and 2026 Trends | 2026 Aura Color Test", back: "← Back to Test", title: "Energy of 2026 through Color Psychology", p1: "We live surrounded by countless colors every day. Beyond mere visual pleasure, did you know that colors can change our brain waves and affect hormone secretion?", h2_1: "What is Color Psychology?", p2: "Color psychology is the study of how colors affect human behavior and emotions. The 2026 Aura Color Test melts these psychological principles into the survey to accurately pinpoint the energy you currently need or are emitting.", h2_2: "2026 Trend Color: Why the Aura Test Now?", p3: "2026 is predicted to be a year where the movement to find human 'sensitivity' and 'identity' will become stronger than ever amidst the rapid development of AI and technology.", h2_3: "Positive Effects of Psychological Tests on the Brain", p4: "Beyond simple fun, the process of looking at yourself objectively (metacognition) greatly helps in relieving stress and improving self-esteem.", cta: "Diagnose My 2026 Energy" },
        seo: { learnMore: "✨ Detailed Guide to 2026 Aura Color Test", title: "2026 Aura Color Test: A Journey to Discover Your Latent Energy", description: "2026 is a year where individual uniqueness and inner peace are more important than ever. The 2026 Aura Color Test combines the latest color psychology with personality analysis algorithms to visualize the unique frequency you emit as a color." }
    },
    ja: {
        meta: { title: "あなたの2026年オー라カラーは? | 無料診断", description: "心理学に基づいた性格分析で2026年のエネルギーカラーを見つけましょう！" },
        shareMessage: "私の2026年エネルギーは [COLOR]! ✨ 今すぐチェック！",
        linkCopied: "リンクをコピーしました！", canvasTitle: "2026 オー라カラー", back: "戻る",
        home: { title: "2026年 オーラカラー診断", subtitle: "性格分析であなたのエネルギーカラーを発見", startButton: "エネルギーを確認する", info: "⏱️ 2分 | 📝 15の質問 | 🎨 6つのカラー" },
        questions: [
            { q: "2026年の朝、一日を始める時に最初に思うことは？", a: ["今日はどんな目標を達成しようか？", "今日も一日、平和で穏やかでありますように", "今日はどんなワクワクすることが起きるかな？", "自分一人のための充電時間が必要だ"] },
            { q: "ストレスを感じた時、どのように対処しますか？", a: ["問題を論理적으로分析して解決する", "親しい人と話をして気持ち을落ち着かせる", "創作活動に没頭してストレスを忘れる", "一人の時間を持って気持ちを整理する"] },
            { q: "2026年に夢見る理想的な週末は？", a: ["個人プロジェクトを計画して実行する", "愛する人たちと大切な時間を過ごす", "新しい場所を探検して冒険を楽しむ", "静かに読書や思索をして休息する"] },
            { q: "重要な決定を下す際、優先する価値観は？", a: ["論理的な根拠と実質的な結果", "自分の決定が他人の感情に与える影響", "自分の直感と熱い情熱", "深い思索の末に得た知恵"] },
            { q: "普段のエネルギーレベルは？", a: ["一定で集中力が高い状態", "温かく周囲を気遣う状態", "高く活気に満ち溢れた状態", "落ち着いて内面を見つめる状態"] },
            { q: "人々と一緒にいる時、あなたは？", a: ["状況を観察しながら戦略的に行動する", "人々と感情的に交流し、つながりを持つ", "雰囲気を主導し、活気を与える", "少数の人々と深い会話を楽しむ"] },
            { q: "あなたを動かす最大の原動力は？", a: ["明確な目標を達成した時の快感", "誰かの助けになり、変化を作るやりがい", "新しいものを創造し、革新する楽しさ", "世界の象徴的な真理を理解すること"] },
            { q: "困難な課題に直面した時のスタイルは？", a: ["綿密で戦略的な計画を立てる", "周囲に助言や支持を求める", "自信を持って情熱的に飛び込む", "原因を根本的に理解するために時間をかける"] },
            { q: "他人が言うあなたのイメージは？", a: ["信頼できる計画的な人", "温かく共感能力に優れた人", "エネルギーに溢れ、インスピレーションを与える人", "賢明で考えが深い人"] },
            { q: "最も効率的に働ける環境は？", a: ["目標が明確で構造化された環境", "互いに助け合い協力する温かい環境", "変化が速くダイナミックな環境", "静かで一人で集中できる環境"] },
            { q: "突然の変化に直面した時、あなたは？", a: ["徹底的に計画を立てて適応する", "他の人がどう感じているかまず確認する", "新しい機会だと考えて楽しく受け入れる", "その変化が人生に与える深い意味を考える"] },
            { q: "どのような方法で創造性を表現しますか？", a: ["複雑な問題を解決する戦略を立てる", "人々と深く交流し助けを与える", "芸術、音楽、公演などの感覚的な活動", "執筆、哲学、瞑想などの思索的な活動"] },
            { q: "2026年が終わる時、どんな気分でいたいですか？", a: ["大きな成果を成し遂げた達成感", "多くの愛を分かち合った充実感", "毎瞬間が生きていると感じた満足感", "平和で賢明になった平穏さ"] },
            { q: "あなたにとって自然とは？", a: ["自然の中の秩序と調和を鑑賞する場所", "自分が世界と最もつながっていると感じる場所", "新しい活力とインスピレーションを得る源", "自分自身を振り返る省察の空間"] },
            { q: "助けが必要な人を見た時、あなたは？", a: ["実用的で役立つ解決策を提案する", "心からの共感と情緒的な慰めを与える", "肯定的なエネルギーで活力を吹き込む", "洞察力のある助言と知恵を共有する"] }
        ],
        loading: { analyzing: "オーラ分析中...", step1: "エネルギーパターン抽出中...", step2: "カラー周波数マッピング中...", step3: "2026年のオーラ公開中..." },
        result: { aboutTitle: "あなたのオーラ", strengthsTitle: "あなたの強み", recommendationsTitle: "2026年の推奨", downloadButton: "📸 結果カードを保存する", shareButton: "✨ エネルギーを共有する", retryButton: "🔄 もう一度診断する", exploreTitle: "すべてのオーラを見る" },
        colors: {
            coolBlue: { name: "クールブルー", subtitle: "冷静な戦略家", keywords: ["戦略的", "冷静", "信頼"], description: "あなたのオーラは冷静で整ったエネルギーを放っています。論理と明確さを持って人生にアプローチし、生まれながらの問題解決者の役割を果たします。", strengths: ["綿密な戦略立案と分析能力", "プレッシャーの中でも沈着冷静", "混乱の中で秩序を創造する"], recommendations: ["計画が必要なプロジェクトを主導してください", "文章を通じて自分の洞察を共有してください", "論理と創造的な探求のバランスをとってください"] },
            vampPurple: { name: "ヴァンプパープル", subtitle: "神秘的な創造者", keywords: ["神秘的", "創造的", "強烈"], description: "あなたのオーラは魅惑的で神秘的なエネルギーを秘めています。暗闇の中に美しさを見出し、複雑さの中に深みを見つけます。", strengths: ["深い創造的ビジョンと芸術的才能", "複雑な状況での柔軟性", "他人の好奇心を刺激する魅力的な存在感"], recommendations: ["あなた独自の創造的なスタイルを受け入れてください", "自分の芸術を世の中に堂々と発信してください", "劇的な美学を探求してみてください"] },
            solarGold: { name: "ソーラーゴールド", subtitle: "輝くリーダー", keywords: ["活気ある", "インスピレーション", "自信"], description: "あなたのオーラは太陽のように輝き、周囲のすべてを明るく照らします。あなたの伝染性のあるエネルギーと楽観主義は、あなたを生まれながらのリーダーにします。", strengths: ["天性のカリスマ性とリーダーシップ", "他人にエネルギーを与え動機付ける", "ダイナミックな環境で能力を発揮する"], recommendations: ["2026年はリーダーの役割を引き受けてみてください", "講演や発表を通じて情熱を共有してください", "エネルギーを大胆な新しい冒険に注いでください"] },
            forestGreen: { name: "フォレストグリーン", subtitle: "調和のとれた平和主義者", keywords: ["バランス", "安定的", "平和"], description: "あなたのオーラは自然的で調和のとれたエネルギーで流れています。森のように、あなたは周囲に安らぎとバランスを提供します。", strengths: ["調和を作り出す卓越した能力", "冷静で安定した存在感", "自然との深い絆"], recommendations: ["2026年はバランスのとれたルーチンを作ってください", "定期的に自然の中で時間を過ごしてください", "他人が内面の中心を見つけるのを助けてあげてください"] },
            softPink: { name: "ソフトピンク", subtitle: "慈愛に満ちた癒し手", keywords: ["共感", "世話好き", "愛らしい"], description: "あなたのオーラは柔らかく癒しのエネルギーで輝いています。あなたは深い共感能力を備えており、他人が真に理解されていると感じさせます。", strengths: ["高い心の知能指数(EQ)", "他人を慰め癒す天性の能力", "脆弱さを見せても安全な空間を作る"], recommendations: ["奉仕活動や分かち合いに参加してみてください", "他人を世話しつつも、健康的な境界線を引いてください", "自分のための献身的なセルフケアを実践してください"] },
            midnightBlack: { name: "ミッドナイトブラック", subtitle: "深い思索家", keywords: ["内省的", "賢明", "深遠"], description: "あなたのオーラは、偉大な洞察が湧き出る真夜中の深さを保持しています。表面の向こうの意味を探し、真実を明らかにします。", strengths: ["深遠な哲学的思考能力", "他人が見落とすつながりを見つけ出す", "深い省察から生まれる知恵"], recommendations: ["執筆を通じて自分の洞察を共有してください", "孤独と思索のための時間を確保してください", "哲学や心理学の分野を探求してみてください"] }
        },
        footer: { privacy: "プライバシーポリシー", contact: "お問い合わせ", about: "診断について", psychology: "色彩心理学ガイド" },
        about: { pageTitle: "オーラカラーとは？ | 2026年オーラカラー診断", back: "← 診断に戻る", title: "オーラカラーとは？", p1: "多くの人が自分の「オーラ」について興味を持っています。オーラはラテン語で「空気」や「微風」を意味し、心理学や東洋哲学では生命体が発する独自のエネルギーを指します。", h2_1: "オーラカラーの歴史と意味", p2: "古代文明では、聖人や指導者の周りに光り輝く後光が描かれることがありましたが、これが現代では個人の性格的特徴や心理状態を示す指標へと発展しました。", h2_2: "6つの代表的なオーラカラー", cta: "今すぐ診断を始める" },
        psychology: { pageTitle: "色彩心理学と2026年のトレンド | 2026年オーラカラー診断", back: "← 診断に戻る", title: "色彩心理学から見た2026年のエネルギー", p1: "私たちは毎日、無数の色に囲まれて生きています。単なる視覚的な楽しみを超えて、色が脳波を変化させ、ホルモン分泌に影響を与えることをご存知でしたか？", h2_1: "色彩心理学とは？", p2: "色彩心理学は、色が人間の行動や感情に与える影響を研究する学問です。2026年オーラカラー診断は、これらの心理学的原理を設問に盛り込み、あなたが現在必要としている、あるいは発しているエネルギーを正確に特定します。", h2_2: "2026年のトレンドカラー：なぜ今オーラ診断なのか？", p3: "2026年は、AIや技術の急激な発展の中で、人間の「感性」や「アイデンティティ」を求める動きがかつてないほど強まると予測されています。", h2_3: "心理テストが脳に与える好影響", p4: "単純な楽しみを超えて、自分を客観的に見つめるプロセス（メタ認知）は、ストレス解消や自尊心の向上に大きく役立ちます。", cta: "自分の2026年のエネルギーを診断する" },
        seo: { learnMore: "✨ 診断の詳細ガイド", title: "2026年オーラカラー診断：あなたのエネルギーを発見する旅", description: "心理学に基づいた最新のアルゴリズムで、あなたの2026年のエネルギーを診断します。" }
    },
    es: {
        meta: { title: "¿Cuál es tu Color de Aura 2026? | Test Gratis", description: "¡Descubre tu color de energía para el 2026 a través del análisis de personalidad basado en psicología!" },
        shareMessage: "¡Mi energía 2026 es [COLOR]! ✨ ¡Descubre la tuya!",
        linkCopied: "¡Enlace copiado!", canvasTitle: "Mi Aura 2026", back: "Volver",
        home: { title: "Test de Aura 2026", subtitle: "Descubre tu color de energía a través del análisis de personalidad basado en psicología", startButton: "Descubrir mi energía", info: "⏱️ 2 min | 📝 15 preguntas | 🎨 6 colores" },
        questions: [
            { q: "¿Qué es lo primero que piensas al empezar tu día en 2026?", a: ["¿Qué metas alcanzaré hoy?", "Espero que hoy sea un día tranquilo", "¿Qué cosas emocionantes pasarán hoy?", "Necesito tiempo para recargarme a solas"] },
            { q: "¿Cómo manejas el estrés?", a: ["Analizo el problema lógicamente", "Hablo con personas cercanas", "Me sumerjo en actividades creativas", "Paso tiempo a solas"] },
            { q: "¿Cuál es tu fin de semana ideal en 2026?", a: ["Planear y ejecutar proyectos personales", "Pasar tiempo con seres queridos", "Explorar lugares nuevos", "Descansar, leer y reflexionar"] },
            { q: "Al tomar decisiones importantes, priorizas:", a: ["Lógica y resultados prácticos", "Impacto en los sentimientos de otros", "Mi intuición y pasión", "Sabiduría tras una profunda reflexión"] },
            { q: "¿Cómo suele ser tu nivel de energía?", a: ["Constante y concentrado", "Cálido y protector", "Alto y entusiasta", "Calmado e introspectivo"] },
            { q: "En situaciones sociales, tú:", a: ["Observas y actúas estratégicamente", "Conectas emocionalmente con todos", "Eres el alma de la fiesta", "Prefieres conversaciones profundas"] },
            { q: "¿Cuál es tu mayor motor?", a: ["Lograr metas claras", "Ayudar a otros", "Crear e innovar", "Comprender verdades profundas"] },
            { q: "Ante un desafío difícil:", a: ["Hago un plan minucioso", "Busco apoyo en mi círculo", "Me lanzo con entusiasmo", "Tomo tiempo para entender la causa"] },
            { q: "¿Cómo te describen los demás?", a: ["Confiable y organizado", "Cálido y empático", "Energético e inspirador", "Sabio e introspectivo"] },
            { q: "Tu entorno de trabajo ideal:", a: ["Estructurado y con metas claras", "Colaborativo y cálido", "Dinámico y cambiante", "Silencioso y privado"] },
            { q: "Ante un cambio repentino:", a: ["Hago un plan para adaptarme", "Observo cómo se sienten los demás", "Lo tomo como una oportunidad", "Pienso en su significado profundo"] },
            { q: "¿Cómo expresas tu creatividad?", a: ["Estrategias para problemas complejos", "Ayudando a otros", "Arte, música o teatro", "Escribiendo o meditando"] },
            { q: "Al final de 2026, quieres sentirte:", a: ["Exitoso y realizado", "Amado y conectado", "Vivo y satisfecho", "Tranquilo y sabio"] },
            { q: "La naturaleza para ti es:", a: ["Donde aprecio el orden y armonía", "Donde me siento más conectado", "Fuente de vitalidad e inspiración", "Espacio para la reflexión personal"] },
            { q: "Cuando alguien necesita ayuda:", a: ["Ofreces soluciones prácticas", "Das consuelo emocional", "Aportas energía positiva", "Compartes consejos sabios"] }
        ],
        loading: { analyzing: "Analizando tu aura...", step1: "Extrayendo patrones...", step2: "Mapeando frecuencias...", step3: "Revelando tu aura 2026..." },
        result: { aboutTitle: "Tu Aura", strengthsTitle: "Tus Fortalezas", recommendationsTitle: "Recomendaciones 2026", downloadButton: "📸 Guardar mi tarjeta", shareButton: "✨ Compartir mi energía", retryButton: "🔄 Repetir Test", exploreTitle: "Explorar todas las Auras" },
        colors: {
            coolBlue: { name: "Azul Frío", subtitle: "Estratega Imperturbable", keywords: ["Estratégico", "Calmado", "Confiable"], description: "Tu aura emana una energía serena y organizada. Abordas la vida con lógica y claridad.", strengths: ["Análisis y estrategia minuciosa", "Mantiene la calma bajo presión", "Crea orden en el caos"], recommendations: ["Lidera proyectos de planificación", "Comparte visiones escribiendo", "Equilibra lógica y creación"] },
            vampPurple: { name: "Púrpura Vamp", subtitle: "Creador Misterioso", keywords: ["Misterioso", "Creativo", "Intenso"], description: "Tu aura contiene una energía fascinante y misteriosa. Encuentras belleza en la oscuridad.", strengths: ["Visión creativa profunda", "Flexibilidad en lo complejo", "Presencia magnética"], recommendations: ["Abraza tu estilo único", "Muestra tu arte al mundo", "Explora estéticas dramáticas"] },
            solarGold: { name: "Oro Solar", subtitle: "Líder Radiante", keywords: ["Vibrante", "Inspirador", "Seguro"], description: "Tu aura brilla como el sol, iluminando todo. Tu energía te convierte en un líder natural.", strengths: ["Carisma y liderazgo naturales", "Energiza y motiva a otros", "Destaca en entornos dinámicos"], recommendations: ["Asume roles de liderazgo", "Comparte tu pasión", "Busca nuevas aventuras"] },
            forestGreen: { name: "Verde Bosque", subtitle: "Armonizador Equilibrado", keywords: ["Equilibrado", "Estable", "Pacífico"], description: "Tu aura fluye con una energía natural y armoniosa. Brindas refugio y equilibrio.", strengths: ["Capacidad para crear armonía", "Presencia calmada y estable", "Vínculo con la naturaleza"], recommendations: ["Crea rutinas equilibradas", "Pasa tiempo en la naturaleza", "Ayuda a otros a centrarse"] },
            softPink: { name: "Rosa Suave", subtitle: "Sanador Compasivo", keywords: ["Empático", "Protector", "Adorable"], description: "Tu aura brilla con una energía suave y sanadora. Posees una gran empatía.", strengths: ["Alta inteligencia emocional", "Capacidad para consolar", "Crea espacios seguros"], recommendations: ["Participa en voluntariado", "Pon límites saludables", "Practica el autocuidado"] },
            midnightBlack: { name: "Negro Medianoche", subtitle: "Pensador Profundo", keywords: ["Introspectivo", "Sabio", "Profundo"], description: "Tu aura guarda la profundidad de la medianoche. Buscas el significado más allá.", strengths: ["Pensamiento filosófico profundo", "Encuentra conexiones ocultas", "Sabiduría de la reflexión"], recommendations: ["Comparte tus visiones", "Asegura tiempo para soledad", "Explora la psicología"] }
        },
        footer: { privacy: "Privacidad", contact: "Contacto", about: "Sobre el test", psychology: "Guía de colores" },
        about: { pageTitle: "¿Qué es el Color de Aura? | Test de Aura 2026", back: "← Volver al Test", title: "¿Qué es el Color de Aura?", p1: "Mucha gente se pregunta por su 'aura'. Aura significa 'aire' o 'brisa' en latín, y en psicología y filosofía oriental, se refiere a la energía única emitida por los seres vivos.", h2_1: "Historia y Significado del Color de Aura", p2: "En las civilizaciones antiguas, a menudo se representaba un halo brillante alrededor de santos o líderes, lo que en tiempos modernos ha evolucionado hasta convertirse en un indicador de los rasgos de personalidad individuales y los estados psicológicos.", h2_2: "6 Colores de Aura Representativos", cta: "Empezar el Test Ahora" },
        psychology: { pageTitle: "Psicología del Color y Tendencias 2026 | Test de Aura 2026", back: "← Volver al Test", title: "Energía de 2026 a través de la Psicología del Color", p1: "Vivimos rodeados de innumerables colores todos los días. Más allá del mero placer visual, ¿sabías que los colores pueden cambiar nuestras ondas cerebrales y afectar la secreción de hormonas?", h2_1: "¿Qué es la Psicología del Color?", p2: "La psicología del color es el estudio de cómo los colores afectan el comportamiento y las emociones humanas. El Test de Aura 2026 funde estos principios psicológicos en la encuesta para identificar con precisión la energía que necesitas o estás emitiendo actualmente.", h2_2: "Color de Tendencia 2026: ¿Por qué el Test de Aura ahora?", p3: "Se predice que 2026 será un año en el que el movimiento para encontrar la 'sensibilidad' e 'identidad' humana se volverá más fuerte que nunca en medio del rápido desarrollo de la IA y la tecnología.", h2_3: "Efectos Positivos de los Tests Psicológicos en el Cerebro", p4: "Más allá de la simple diversión, el proceso de mirarse a uno mismo objetivamente (metacognición) ayuda enormemente a aliviar el estrés y mejorar la autoestima.", cta: "Diagnosticar mi energía 2026" },
        seo: { learnMore: "✨ Guía detallada", title: "Test de Aura 2026: Tu energía interior", description: "Descubre tu color de energía basado en psicología para el 2026." }
    },
    pt: {
        meta: { title: "¿Qual é a sua Cor de Aura 2026? | Teste Grátis", description: "Descubra a sua cor de energia para 2026 através de uma análise de personalidade baseada em psicologia!" },
        shareMessage: "Minha energia 2026 é [COLOR]! ✨ Descubra a sua!",
        linkCopied: "Link copiado!", canvasTitle: "Minha Aura 2026", back: "Voltar",
        home: { title: "Teste de Aura 2026", subtitle: "Descubra sua cor de energia através de uma análise de personalidade baseada em psicologia", startButton: "Descobrir minha energia", info: "⏱️ 2 min | 📝 15 perguntas | 🎨 6 cores" },
        questions: [
            { q: "Na manhã de 2026, qual o seu primeiro pensamento ao começar o dia?", a: ["Quais metas vou alcançar hoje?", "Espero que hoje seja um dia calmo", "Que coisas emocionantes vão acontecer?", "Preciso de tempo para recarregar sozinho"] },
            { q: "Como você lida com o estresse?", a: ["Analiso o problema logicamente", "Converso com pessoas próximas", "Mergulho em atividades criativas", "Passo um tempo sozinho"] },
            { q: "Qual o seu fim de semana ideal em 2026?", a: ["Projetos pessoais", "Tempo com quem amo", "Explorar e aventurar", "Ler e refletir"] },
            { q: "Ao tomar decisões, você prioriza:", a: ["Lógica e resultados", "Sentimentos alheios", "Intuição e paixão", "Sabedoria e reflexão"] },
            { q: "Seu nível de energia costuma ser:", a: ["Constante e focado", "Caloroso e cuidador", "Alto e vibrante", "Calmo e introspectivo"] },
            { q: "Em grupo, você:", a: ["Age estrategicamente", "Conecta-se emocionalmente", "Traz vitalidade", "Conversas profundas"] },
            { q: "Seu maior motor é:", a: ["Atingir metas", "Ajudar outros", "Criar e inovar", "Verdades profundas"] },
            { q: "Ante um desafio difícil:", a: ["Faço um plano", "Busco apoio", "Lanço-me com entusiasmo", "Tomo tempo para entender"] },
            { q: "Como te descrevem:", a: ["Confiável e organizado", "Cálido e empático", "Inspirador", "Sábio e profundo"] },
            { q: "Ambiente de trabalho ideal:", a: ["Estructurado", "Colaborativo", "Dinâmico", "Silencioso"] },
            { q: "Perante uma mudança:", a: ["Faço um plano", "Vejo como os outros se sentem", "Vejo como oportunidade", "Penso no significado"] },
            { q: "Como expressa sua criatividade:", a: ["Estratégias", "Ajudando outros", "Arte e música", "Filosofia e meditação"] },
            { q: "No final de 2026, quer se sentir:", a: ["Realizado", "Amado", "Vivo", "Sábio"] },
            { q: "A natureza para você é:", a: ["Ordem e harmonia", "Conexão", "Vitalidade", "Reflexão"] },
            { q: "Quando alguém precisa de ajuda:", a: ["Soluções práticas", "Consolo emocional", "Energia positiva", "Conselhos sábios"] }
        ],
        loading: { analyzing: "Analisando sua aura...", step1: "Extraindo padrões...", step2: "Mapping frequências...", step3: "Revelando sua aura 2026..." },
        result: { aboutTitle: "Sua Aura", strengthsTitle: "Seus Pontos Fortes", recommendationsTitle: "Dicas para 2026", downloadButton: "📸 Salvar meu cartão", shareButton: "✨ Partilhar minha energia", retryButton: "🔄 De novo", exploreTitle: "Explorar todas" },
        colors: {
            coolBlue: { name: "Azul Frio", subtitle: "Estrategista Calmo", keywords: ["Estratégico", "Calmo", "Confiável"], description: "Sua aura emana uma energia serena e organizada. Você aborda a vida com lógica.", strengths: ["Análise minuciosa", "Calma sob pressão", "Cria ordem"], recommendations: ["Lidere planejamentos", "Compartilhe insights", "Equilibre lógica e criação"] },
            vampPurple: { name: "Púrpura Vamp", subtitle: "Criador Misterioso", keywords: ["Misterioso", "Criativo", "Intenso"], description: "Sua aura tem energia fascinante e misteriosa. Você vê beleza no escuro.", strengths: ["Visão criativa profunda", "Flexibilidade no complexo", "Presença magnética"], recommendations: ["Assuma seu estilo único", "Mostre sua arte ao mundo", "Explore o dramático"] },
            solarGold: { name: "Ouro Solar", subtitle: "Líder Radiante", keywords: ["Vibrante", "Inspirador", "Seguro"], description: "Sua aura brilha como o sol. Seu otimismo faz de você um líder natural.", strengths: ["Carisma e liderança", "Motiva os outros", "Foca no dinâmico"], recommendations: ["Lidere em 2026", "Compartilhe paixão", "Tente novas aventuras"] },
            forestGreen: { name: "Verde Floresta", subtitle: "Harmonizador Equilibrado", keywords: ["Equilibrado", "Estável", "Pacífico"], description: "Sua aura flui com harmonia. Como uma floresta, você traz equilíbrio.", strengths: ["Cria harmonia", "Presença estável", "Ligação com a natureza"], recommendations: ["Crie rotinas", "Vá à natureza", "Ajude outros no centro"] },
            softPink: { name: "Rosa Suave", subtitle: "Curador Compassivo", keywords: ["Empático", "Cuidador", "Amável"], description: "Sua aura brilha com cura. Sua empatia faz os outros se sentirem cuidados.", strengths: ["Inteligência emocional", "Consolo natural", "Cria segurança"], recommendations: ["Faça voluntariado", "Ponha limites", "Pratique autocuidado"] },
            midnightBlack: { name: "Preto Meia-noite", subtitle: "Pensador Profundo", keywords: ["Introspectivo", "Sábio", "Profundo"], description: "Sua aura tem a profundidade da noite. Você busca significados além do óbvio.", strengths: ["Pensamento filosófico", "Vê conexões ocultas", "Sabedoria reflexiva"], recommendations: ["Escreva insights", "Tenha tempo só", "Estude filosofia"] }
        },
        footer: { privacy: "Privacidade", contact: "Contato", about: "Sobre", psychology: "Guia" },
        about: { pageTitle: "O que é Cor de Aura? | Teste de Aura 2026", back: "← Voltar ao Teste", title: "O que é Cor de Aura?", p1: "Muitas pessoas se perguntam sobre sua 'aura'. Aura significa 'ar' ou 'brisa' em latim e, na psicologia e na filosofia oriental, refere-se à energia única emitida pelos seres vivos.", h2_1: "História e Significado da Cor de Aura", p2: "Nas civilizações antigas, um halo brilhante era frequentemente retratado em torno de santos ou líderes, o que nos tempos modernos evoluiu para um indicador de traços de personalidade individuais e estados psicológicos.", h2_2: "6 Cores de Aura Representativas", cta: "Começar o Teste Agora" },
        psychology: { pageTitle: "Psicologia das Cores e Tendências 2026 | Teste de Aura 2026", back: "← Voltar ao Teste", title: "Energia de 2026 através da Psicologia das Cores", p1: "Vivemos cercados por inúmeras cores todos os dias. Além do mero prazer visual, você sabia que as cores podem mudar nossas ondas cerebrais e afetar a secreção de hormônios?", h2_1: "O que é Psicologia das Cores?", p2: "A psicologia das cores é o estudo de como as cores afetam o comportamento e as emoções humanas. O Teste de Aura 2026 derrete esses princípios psicológicos na pesquisa para identificar com precisão a energia que você precisa ou está emitindo no momento.", h2_2: "Cor de Tendência 2026: Por que o Teste de Aura agora?", p3: "Prevê-se que 2026 seja um ano em que o movimento para encontrar a 'sensibilidade' e 'identidade' humana se tornará mais forte do que nunca em meio ao rápido desenvolvimento da IA e da tecnologia.", h2_3: "Efeitos Positivos de Testes Psicológicos no Cérebro", p4: "Além da simples diversão, o processo de olhar para si mesmo objetivamente (metacognição) ajuda muito a aliviar o estresse e aumentar a autoestima.", cta: "Diagnosticar minha energia 2026" },
        seo: { learnMore: "✨ Guia de Aura", title: "Teste de Aura 2026", description: "Descubra sua cor de energia para 2026." }
    }
};

// 전역 언어 설정 관리
if (typeof window.currentLanguage === 'undefined') { window.currentLanguage = 'ko'; }

function detectLanguage() {
    const l = navigator.language || navigator.userLanguage;
    if (l.startsWith('ko')) return 'ko'; 
    if (l.startsWith('ja')) return 'ja';
    if (l.startsWith('es')) return 'es'; 
    if (l.startsWith('pt')) return 'pt'; 
    return 'en';
}

function changeLanguage(lang) {
    window.currentLanguage = lang;
    updatePageLanguage();
    if (typeof displayQuestion === 'function' && document.getElementById('question-screen') && document.getElementById('question-screen').classList.contains('active')) {
        displayQuestion();
    }
    if (window.currentResultKey) {
        if (typeof drawResultToCanvas === 'function') drawResultToCanvas();
        if (typeof populateAuraTabs === 'function') populateAuraTabs();
        if (typeof showAuraDetail === 'function' && document.getElementById('aura-explorer-detail') && document.getElementById('aura-explorer-detail').style.display !== 'none') {
            showAuraDetail(window.lastExploredKey || window.currentResultKey);
        }
    }
}

function updatePageLanguage() {
    const lang = window.currentLanguage || 'ko';
    const data = translations[lang] || translations['ko'];
    
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        const keys = key.split('.');
        let val = data;
        keys.forEach(k => { if (val) val = val[k]; });
        if (val && typeof val === 'string') {
            if (key.includes('description') || key.includes('p1') || key.includes('p2') || key.includes('p3') || key.includes('p4') || key.startsWith('seo.')) {
                el.innerHTML = val;
            } else {
                el.textContent = val;
            }
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
    else {
        el = document.createElement('meta');
        el.setAttribute(n, v);
        el.setAttribute('content', c);
        document.head.appendChild(el);
    }
}

function t(key) {
    const keys = key.split('.');
    let val = translations[window.currentLanguage] || translations['ko'];
    keys.forEach(k => { if (val) val = val[k]; });
    return val || key;
}
