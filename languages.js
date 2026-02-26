// 다국어 번역 데이터
const translations = {
    en: {
        meta: {
            title: "What's Your 2026 Aura Color?",
            description: "Discover your energy color through psychology-based personality analysis. Take the 2026 Aura Test!"
        },
        shareMessage: "My 2026 Aura Color is [COLOR]! ✨ Discover your energy color now!",
        linkCopied: "Result link copied! Share it with your friends.",
        canvasTitle: "2026 Aura Color",
        back: "Back",
        home: {
            title: "2026 Aura Color Test",
            subtitle: "Discover your energy color through psychology-based personality analysis",
            startButton: "Start Test",
            info: "⏱️ 2 minutes | 📝 15 questions | 🎨 6 color results"
        },
        questions: [
            { q: "When starting your day in 2026, what's your first thought?", a: ["What goals will I achieve today?", "I hope today brings peace and calm", "Let's see what exciting things happen!", "I need time to recharge alone"] },
            { q: "How do you handle stress?", a: ["I analyze the problem logically", "I talk it out with close friends", "I dive into creative activities", "I need solitude to process"] },
            { q: "What's your ideal weekend in 2026?", a: ["Planning and executing a personal project", "Spending quality time with loved ones", "Exploring new experiences and adventures", "Reading, reflecting, and resting"] },
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
        loading: {
            analyzing: "Analyzing your aura...",
            step1: "Extracting energy patterns...",
            step2: "Mapping color frequencies...",
            step3: "Revealing your 2026 aura..."
        },
        result: {
            aboutTitle: "About Your Aura",
            strengthsTitle: "Your Strengths",
            recommendationsTitle: "2026 Recommendations",
            downloadButton: "📸 Download Image",
            shareButton: "🔗 Share Result",
            retryButton: "🔄 Try Again",
            exploreTitle: "Explore All Auras"
        },
        colors: {
            coolBlue: { name: "Cool Blue", subtitle: "The Calm Strategist", keywords: ["Strategic", "Calm", "Reliable"], description: "Your aura radiates a cool, composed energy. You approach life with logic and clarity, making you a natural problem-solver. In 2026, your steady presence will be your greatest strength.", strengths: ["Excellent at strategic planning and analysis", "Maintains composure under pressure", "Creates order from chaos"], recommendations: ["Lead projects that require planning", "Share your insights through writing", "Balance logic with creative exploration"] },
            vampPurple: { name: "Vamp Purple", subtitle: "The Mystical Creator", keywords: ["Mysterious", "Creative", "Intense"], description: "Your aura carries an enchanting, mysterious energy. You see beauty in darkness and depth in complexity. Your creative intensity draws others into your unique world.", strengths: ["Deep creative vision and artistic talent", "Comfortable with complexity", "Magnetic presence that intrigues others"], recommendations: ["Embrace your unique creative style", "Share your art with the world boldly", "Explore dramatic aesthetics"] },
            solarGold: { name: "Solar Gold", subtitle: "The Radiant Leader", keywords: ["Energetic", "Inspiring", "Confidence"], description: "Your aura shines like the sun, illuminating everything around you. Your infectious energy and optimism make you a natural leader who brings warmth wherever you go.", strengths: ["Natural charisma and leadership", "Energizes and motivates others", "Thrives in dynamic environments"], recommendations: ["Take on leadership roles in 2026", "Share your enthusiasm through speaking", "Channel energy into bold ventures"] },
            forestGreen: { name: "Forest Green", subtitle: "The Balanced Harmonizer", keywords: ["Balanced", "Grounded", "Peaceful"], description: "Your aura flows with natural, harmonious energy. Like a forest, you provide shelter and balance. You understand that true strength comes from equilibrium and connection to nature.", strengths: ["Exceptional at creating harmony", "Grounded and stable presence", "Deeply connected to nature"], recommendations: ["Create balanced routines in 2026", "Spend regular time in nature", "Help others find their center"] },
            softPink: { name: "Soft Pink", subtitle: "The Compassionate Healer", keywords: ["Empathetic", "Nurturing", "Loving"], description: "Your aura glows with gentle, healing energy. You possess a rare gift of deep empathy, making others feel truly seen and cared for. Your presence itself is a form of healing.", strengths: ["Deep emotional intelligence", "Natural ability to comfort and heal", "Creates safe spaces for vulnerability"], recommendations: ["Pursue volunteer work", "Set healthy boundaries while caring", "Practice dedicated self-care"] },
            midnightBlack: { name: "Midnight Black", subtitle: "The Deep Philosopher", keywords: ["Introspective", "Wise", "Profound"], description: "Your aura holds the depth of midnight, where the greatest insights emerge. You seek meaning beyond the surface, and your contemplative nature reveals truths others miss.", strengths: ["Profound philosophical thinking", "Sees connections others overlook", "Wisdom from deep reflection"], recommendations: ["Share insights through writing", "Create time for solitude and thinking", "Explore philosophy or psychology"] }
        },
        footer: { privacy: "Privacy Policy", contact: "Contact" }
    },
    ko: {
        meta: {
            title: "나의 2026 오라 컬러는?",
            description: "심리학 기반 성격 분석으로 당신의 2026년 에너지 컬러를 찾아보세요!"
        },
        shareMessage: "나의 2026년 아우라 컬러는 [COLOR]! ✨ 당신의 에너지 컬러도 지금 확인해보세요!",
        linkCopied: "결과 링크가 복사되었습니다! 친구들에게 공유해보세요.",
        canvasTitle: "2026 나의 아우라 컬러",
        back: "이전",
        home: {
            title: "2026 나의 아우라 컬러",
            subtitle: "심리학 기반 성격 분석으로 당신의 에너지 컬러를 찾아보세요",
            startButton: "테스트 시작",
            info: "⏱️ 2분 소요 | 📝 15개 질문 | 🎨 6가지 컬러"
        },
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
        loading: {
            analyzing: "아우라 분석 중...",
            step1: "에너지 패턴 추출 중...",
            step2: "컬러 주파수 매핑 중...",
            step3: "2026 아우라 공개 중..."
        },
        result: {
            aboutTitle: "당신의 아우라",
            strengthsTitle: "강점",
            recommendationsTitle: "2026년 추천 사항",
            downloadButton: "📸 이미지 저장",
            shareButton: "🔗 결과 공유",
            retryButton: "🔄 테스트하기",
            exploreTitle: "모든 아우라 둘러보기"
        },
        colors: {
            coolBlue: { name: "쿨 블루", subtitle: "차분한 전략가", keywords: ["전략적", "차분함", "신뢰감"], description: "당신의 아우라는 차분하고 침착한 에너지를 발산합니다. 논리와 명확함으로 삶에 접근하여 자연스러운 문제 해결사입니다. 2026년, 당신의 안정적인 존재감이 가장 큰 강점이 될 것입니다.", strengths: ["치밀한 전략을 세우고 분석하는 능력이 뛰어납니다", "어떤 압박 속에서도 평정심을 유지합니다", "혼란스러운 상황 속에서 질서를 창조해냅니다"], recommendations: ["신중한 계획이 필요한 프로젝트를 주도해 보세요", "글쓰기나 교육을 통해 통찰력을 공유해 보세요", "논리적인 판단과 창의적인 탐구 사이의 균형을 유지하세요"] },
            vampPurple: { name: "뱀프 퍼플", subtitle: "신비로운 창작자", keywords: ["신비로운", "창의적", "강렬한"], description: "당신의 아우라는 매혹적이고 신비로운 에러지를 담고 있습니다. 어둠 속에서 아름다움을, 복잡함 속에서 깊이를 봅니다. 당신의 창의적 강렬함은 다른 이들을 독특한 세계로 끌어들입니다.", strengths: ["깊이 있는 창의적 시각과 예술적 재능을 가졌습니다", "복잡하고 미묘한 상황을 편안하게 받아들입니다", "어두운 면조차 아름다움으로 승화시키는 힘이 있습니다"], recommendations: ["당신만의 독특한 창의적 스타일을 포용하세요", "당신의 예술 세계를 세상에 과감하게 보여주세요", "드라마틱하고 깊이 있는 미학을 탐구해 보세요"] },
            solarGold: { name: "솔라 골드", subtitle: "빛나는 리더", keywords: ["활력적", "영감주는", "자신감"], description: "당신의 아우라는 태양처럼 빛나며 주변 모든 것을 밝힙니다. 전염성 있는 에너지와 낙관주의로 어디를 가든 따뜻함을 가져오는 타고난 리더입니다.", strengths: ["사람들을 매료시키는 타고난 카리스마를 가졌습니다", "타인에게 활력과 긍정적인 동기를 부여합니다", "역동적이고 변화무쌍한 환경에서 더 크게 번성합니다"], recommendations: ["2026년에는 리더십을 발휘하는 역할을 맡아보세요", "대중 연설이나 대화를 통해 당신의 열정을 나누세요", "새롭고 대담한 도전에 당신의 에너지를 집중하세요"] },
            forestGreen: { name: "포레스트 그린", subtitle: "균형잡힌 조화자", keywords: ["균형잡힌", "안정적", "평화로운"], description: "당신의 아우라는 자연스럽고 조화로운 에너지로 흐릅니다. 숲처럼, 당신은 피난처와 균형을 제공합니다. 진정한 힘은 평형과 자연과의 연결에서 온다는 것을 이해합니다.", strengths: ["주변의 조화와 균형을 만들어내는 데 탁월합니다", "안정적이고 든든한 존재감으로 신뢰를 줍니다", "자연의 리듬과 자신의 흐름을 잘 연결합니다"], recommendations: ["2026년에는 나만의 균형 잡힌 루틴을 만들어보세요", "정기적으로 자연 속에서 시간을 보내며 재충전하세요", "다른 사람들이 마음의 중심을 찾을 수 있도록 도와주세요"] },
            softPink: { name: "소프트 핑크", subtitle: "자비로운 치유자", keywords: ["공감력", "돌봄", "사랑"], description: "당신의 아우라는 부드럽고 치유하는 에너지로 빛납니다. 깊은 공감의 희귀한 재능을 가지고 있어, 다른 이들이 진정으로 보이고 돌봄 받는다고 느끼게 합니다. 당신의 존재 자체가 치유의 형태입니다.", strengths: ["상대방의 감정을 읽고 이해하는 능력이 매우 높습니다", "타인을 따뜻하게 위로하고 치유하는 천부적인 능력이 있습니다", "사람들이 안심하고 속마음을 털어놓을 공간을 만듭니다"], recommendations: ["봉사 활동이나 사람을 돕는 일에 참여해 보세요", "타인을 돌보면서도 자신만의 건강한 경계를 세우세요", "나 자신을 위한 자기관리를 소홀히 하지 마세요"] },
            midnightBlack: { name: "미드나잇 블랙", subtitle: "깊은 철학자", keywords: ["내성적", "지혜로운", "심오한"], description: "당신의 아우라는 자정의 깊이를 담고 있으며, 그곳에서 가장 위대한 통찰이 나옵니다. 표면 너머의 의미를 추구하고, 관조적 본성은 다른 이들이 놓치는 진실을 드러냅니다.", strengths: ["심오한 철학적 사고와 분석 능력을 갖추고 있습니다", "다른 사람들이 놓치기 쉬운 숨은 연결고리를 찾아냅니다", "깊은 성찰을 통해 본질적인 지혜를 길어 올립니다"], recommendations: ["글쓰기나 기록을 통해 당신의 통찰을 세상에 알리세요", "혼자만의 깊은 사고를 위한 시간을 충분히 확보하세요", "철학, 심리학 또는 정신적인 세계를 깊이 탐구해 보세요"] }
        },
        footer: { privacy: "개인정보 처리방침", contact: "문의하기" }
    },
    ja: {
        meta: {
            title: "あなたの2026年オーラカラーは？",
            description: "心理学に基づいた性格分析で、あなたの2026年のエネルギーカラーを見つけましょう！"
        },
        shareMessage: "私の2026年のオー라カラーは [COLOR]! ✨ あなたのエネルギーカラーも今すぐチェック！",
        linkCopied: "結果リンクがコピーされました！友達に共有してみてください。",
        canvasTitle: "2026 私のオーラカラー",
        back: "戻る",
        home: {
            title: "2026 オーラカラーテスト",
            subtitle: "心理学に基づいた性格分析であなたのエネルギーカラーを発見",
            startButton: "テスト開始",
            info: "⏱️ 2分 | 📝 15問 | 🎨 6色の結果"
        },
        questions: [
            { q: "2026年の朝、一日を始めるとき最初に思うことは？", a: ["今日はどんな目標を達成しようか？", "平和で穏やかな一日でありますように", "今日は何かワクワクすることがありそう！", "一人の時間が必要"] },
            { q: "ストレスを感じたとき、あなたは？", a: ["問題を論理的に分析する", "親しい人と話し合う", "創作活動に没頭する", "一人の時間が必要"] },
            { q: "2026年の理想的な週末は？", a: ["個人プロジェクトを計画し実行", "愛する人たちと過ごす", "新しい体験と冒険を探索", "読書、瞑想、そして休息"] },
            { q: "決断を下すとき、最も重要なのは？", a: ["論理と実質的な結果", "他人の感情への影響", "直感と情熱に従う", "深い内省と知恵"] },
            { q: "あなたのエネルギーレベルは通常？", a: ["安定して集中的", "温かく思いやりがある", "高く情熱的", "静かで瞑想的"] },
            { q: "社交的な状況で、あなたは？", a: ["観察し戦略的に貢献", "みんなと感情的につながる", "場を盛り上げる", "少数と深い会話を好む"] },
            { q: "あなたを最も動機づけるものは？", a: ["明確で測定可能な目標の達成", "他人を助け変化をもたらす", "創造的表現と革新", "より深い真理を理解する"] },
            { q: "困難への取り組み方は？", a: ["戦略的計画を立てる", "周囲の人々のサポートを求める", "情熱的に飛び込む", "根本原因を理解する時間を取る"] },
            { q: "人々があなたを表現するとき、よく言われるのは？", a: ["信頼できて組織的", "思いやりがあり共感力が高い", "エネルギッシュでインスピレーションを与える", "賢明で内省的"] },
            { q: "理想的な労働環境は？", a: ["明確な目標がある構造化された環境", "協力的で支え合う環境", "ダイナミックでペースが速い", "静かで集中できる環境"] },
            { q: "変化に直面したとき、あなたは？", a: ["慎重な計画で適応", "他の人がどう対処しているか確認", "興奮して受け入れる", "より深い意味を内省"] },
            { q: "あなたの創造적表現方法は？", a: ["問題解決と戦略", "人々とつながり助ける", "芸術、音楽、またはパフォーマンス", "執筆, 哲学、または瞑想"] },
            { q: "2026年末に感じたい感情は？", a: ["達成感と成功", "愛されつながっている", "生きていて充実", "平和で賢明"] },
            { q: "自然との関係は？", a: ["秩序とパターンを鑑賞", "最もつながりを感じる場所", "活力とインスピレーションを与える", "内省に不可欠"] },
            { q: "誰かが助けを必要とするとき、あなたは？", a: ["実用的な解決策を提示", "感情的サポートを提供", "楽観とエネルギーをもたらす", "知恵と視点を共有"] }
        ],
        loading: {
            analyzing: "オーラ分析中...",
            step1: "エネルギーパターン抽出中...",
            step2: "カラー周波数マッピング中...",
            step3: "2026オーラ公開中..."
        },
        result: {
            aboutTitle: "あなたのオーラについて",
            strengthsTitle: "あなたの強み",
            recommendationsTitle: "2026年の推奨事項",
            downloadButton: "📸 画像保存",
            shareButton: "🔗 結果共有",
            retryButton: "🔄 もう一度",
            exploreTitle: "すべてのオーラを探索"
        },
        colors: {
            coolBlue: { name: "クールブルー", subtitle: "冷静なストラテジスト", keywords: ["戦略的", "冷静", "信頼"], description: "あなたのオーラは冷静で落ち着いたエネルギーを放っています。論理と明晰さで人生に取り組み、自然な問題解決者です。2026年、あなたの安定した存在感が最大の強みになります。", strengths: ["戦略的計画と分析に優れる", "プレッシャー下でも冷静さを保つ", "混沌から秩序を創造"], recommendations: ["慎重な計画が必要なプロジェクトをリード", "執筆や教育を通じて洞察を共有", "論理と創造的探求のバランス"] },
            vampPurple: { name: "ヴァンプパープル", subtitle: "神秘的なクリエイター", keywords: ["神秘的", "創造적", "強烈"], description: "あなたのオーラは魅惑的で神秘的なエネルギーを持っています。暗闇の中に美を、複雑さの中に深さを見出します。あなたの創造的な強烈さは、他者をあなたの独特な世界に引き込みます。", strengths: ["深い創造적ビジョンと芸術的才能", "複雑さとニュアンスに快適", "暗闇を美に変換"], recommendations: ["独自の創造적スタイルを受け入れる", "大胆に芸術を世界と共有", "ドラマチックな美学を探求"] },
            solarGold: { name: "ソーラーゴールド", subtitle: "輝くリーダー", keywords: ["エネルギッシュ", "インスパイア", "自信"], description: "あなたのオーラは太陽のように輝き、周囲のすべてを照らします。感染性のあるエネルギーと楽観主義で、どこへ行っても温かさをもたらす生まれつきのリーダーです。", strengths: ["生まれつきのカリスマとリーダーシップ能力", "他者に活力と動機を与える", "ダイナミックな環境で繁栄"], recommendations: ["2026年にリーダーシップの役割を担う", "公開スピーチを通じて情熱を共有", "エネルギーを大胆な新しいベンチャーに注ぐ"] },
            forestGreen: { name: "フォレストグリーン", subtitle: "バランスのとれた調和者", keywords: ["バランス", "安定", "平和"], description: "あなたのオーラは自然で調和のとれたエネルギーで流れています。森のように、避難所とバランスを提供します。真の強さは平衡と自然とのつながりから来ることを理解しています。", strengths: ["調和とバランスの創造に卓越", "安定した確かな存在感", "自然とリズムに深くつながる"], recommendations: ["2026年にバランスのとれたルーチンを作る", "定期的に自然で時間を過ごす", "他者が中心を見つけるのを助ける"] },
            softPink: { name: "ソフトピンク", subtitle: "慈悲深いヒーラー", keywords: ["共感的", "育む", "愛"], description: "あなたのオーラは優しく癒すエネルギーで輝いています。深い共感の稀な才能を持ち、他者が本当に見られ、ケアされていると感じさせます. あなたの存在自体が癒しの形です。", strengths: ["深い感情的知性と共感能力", "慰め癒す生まれつきの能力", "脆弱性のための安全な空間を創造"], recommendations: ["援助職業やボランティア活動を追求", "他者をケアしながら健康的な境界を設定", "真剣にセルフケアを実践"] },
            midnightBlack: { name: "ミッドナイトブラック", subtitle: "深い哲学者", keywords: ["内省的", "賢明", "深遠"], description: "あなたのオーラは真夜中の深さを持ち、そこから最も偉大な洞察が生まれます。表面を超えた意味を求め、瞑想的な性質は他者が見逃す真実を明らかにします。", strengths: ["深遠な哲学的で分析적思考", "他者が見逃すつながりを見る", "深い内省から来る知恵"], recommendations: ["執筆や教育を通じて洞察を共有", "孤独と深い思考のための時間を作る", "哲学, 心理学, またはスピリチュアリティを探求"] }
        },
        footer: { privacy: "プライバシーポリシー", contact: "お問い合わせ" }
    },
    es: {
        meta: {
            title: "¿Cuál es tu Color de Aura 2026?",
            description: "¡Descubre tu color de energía para el 2026 a través del análisis de personalidad basado en psicología!"
        },
        shareMessage: "¡Mi color de aura para 2026 es [COLOR]! ✨ ¡Descubre tu color de energía ahora!",
        linkCopied: "¡Enlace del resultado copiado! Compártelo con tus amigos.",
        canvasTitle: "Tu Aura 2026",
        back: "Atrás",
        home: {
            title: "Test de Color de Aura 2026",
            subtitle: "Descubre tu color de energía a través del análisis de personalidad basado en psicología",
            startButton: "Iniciar Test",
            info: "⏱️ 2 minutos | 📝 15 preguntas | 🎨 6 colores"
        },
        questions: [
            { q: "Al comenzar tu día en 2026, ¿cuál es tu primer pensamiento?", a: ["¿Qué metas lograré hoy?", "Espero que hoy traiga paz y calma", "¡Veamos qué cosas emocionantes suceden!", "Necesito tiempo para recargarme solo"] },
            { q: "¿Cómo manejas el estrés?", a: ["Analizo el problema lógicamente", "Lo hablo con amigos cercanos", "Me sumerjo en actividades creativas", "Necesito soledad para procesarlo"] },
            { q: "¿Cuál es tu fin de semana ideal en 2026?", a: ["Planificar y ejecutar un proyecto personal", "Pasar tiempo de calidad con seres queridos", "Explorar nuevas experiencias y aventuras", "Leer, reflexionar y descansar"] },
            { q: "Al tomar decisiones, priorizas:", a: ["Lógica y resultados prácticos", "Cómo afecta los sentimientos de otros", "Seguir mi intuición y pasión", "Reflexión profunda y sabiduría"] },
            { q: "Tu nivel de energía suele ser:", a: ["Estable y enfocado", "Cálido y nutritivo", "Alto y entusiasta", "Tranquilo y contemplativo"] },
            { q: "En situaciones sociales, tiendes a:", a: ["Observar y contribuir estratégicamente", "Conectar emocionalmente con todos", "Ser el alma de la fiesta", "Preferir conversaciones pequeñas y significativas"] },
            { q: "¿Qué te motiva más?", a: ["Lograr metas claras y medibles", "Ayudar a otros y hacer una diferencia", "Expresión creativa e innovación", "Comprender verdades más profundas"] },
            { q: "Tu enfoque ante desafíos:", a: ["Crear un plan estratégico", "Buscar apoyo de mi círculo", "Saltar con entusiasmo", "Tomar tiempo para entender la causa raíz"] },
            { q: "La gente a menudo te describe como:", a: ["Confiable y organizado", "Cariñoso y empático", "Energético e inspirador", "Sabio e introspectivo"] },
            { q: "Tu entorno de trabajo ideal:", a: ["Estructurado con objetivos claros", "Colaborativo y de apoyo", "Dinámico y de ritmo rápido", "Tranquilo y enfocando"] },
            { q: "Al enfrentar cambios, tú:", a: ["Te adaptas con planificación cuidadosa", "Verificas cómo otros están lidiando", "Lo abrazas con emoción", "Reflexionas sobre su significado más profundo"] },
            { q: "Tu salida creativa es:", a: ["Resolución de problemas y estrategia", "Conectar y ayudar a la gente", "Arte, música o actuación", "Escritura, filosofía o meditación"] },
            { q: "Al final de 2026, quieres sentirte:", a: ["Realizado y exitoso", "Amado y conectado", "Vivo y pleno", "Pacífico y sabio"] },
            { q: "Tu relación con la naturaleza:", a: ["Aprecio su orden y patrones", "Es donde me siento más conectado", "Me energiza e inspira", "Es esencial para mi reflexión"] },
            { q: "Cuando alguien necesita ayuda, tú:", a: ["Ofreces soluciones prácticas", "Brindas apoyo emocional", "Traes optimismo y energía", "Compartes sabiduría y perspectiva"] }
        ],
        loading: {
            analyzing: "Analizando tu aura...",
            step1: "Extrayendo patrones de energía...",
            step2: "Mapeando frecuencias de color...",
            step3: "Revelando tu aura 2026..."
        },
        result: {
            aboutTitle: "Sobre Tu Aura",
            strengthsTitle: "Tus Fortalezas",
            recommendationsTitle: "Recomendaciones 2026",
            downloadButton: "📸 Descargar Imagen",
            shareButton: "🔗 Compartir Resultado",
            retryButton: "🔄 Intentar Nuevo",
            exploreTitle: "Explorar todas las auras"
        },
        colors: {
            coolBlue: { name: "Azul Fresco", subtitle: "El Estratega Tranquilo", keywords: ["Estratégico", "Tranquilo", "Confiable"], description: "Tu aura irradia una energía fresca y compuesta. Abordas la vida con lógica y claridad, convirtiéndote en un solucionador de problemas natural. En 2026, tu presencia estable será tu mayor fortaleza.", strengths: ["Excelente en planificación estratégica", "Mantiene la compostura", "Crea orden del caos"], recommendations: ["Lidera proyectos de planificación", "Comparte tus ideas por escrito", "Equilibra lógica y creatividad"] },
            vampPurple: { name: "Púrpura Vamp", subtitle: "El Creador Místico", keywords: ["Misterioso", "Creativo", "Intenso"], description: "Tu aura lleva una energía encantadora y misteriosa. Ves belleza en la oscuridad y profundidad en la complejidad. Tu intensidad creativa atrae a otros a tu mundo único.", strengths: ["Visión creativa profunda", "Cómodo con la complejidad", "Transforma oscuridad en belleza"], recommendations: ["Abraza tu estilo creativo único", "Comparte tu arte con el mundo", "Explora estéticas dramáticas"] },
            solarGold: { name: "Oro Solar", subtitle: "El Líder Radiante", keywords: ["Energético", "Inspirador", "Confiado"], description: "Tu aura brilla como el sol, iluminando todo a tu alrededor. Tu energía contagiosa y optimismo te convierten en un líder natural que trae calidez donde quiera que vayas.", strengths: ["Carisma natural y liderazgo", "Energiza y motiva a otros", "Prospera en entornos dinámicos"], recommendations: ["Asume roles de liderazgo en 2026", "Comparte tu entusiasmo", "Canaliza energía en nuevas empresas"] },
            forestGreen: { name: "Verde Bosque", subtitle: "El Armonizador Equilibrado", keywords: ["Equilibrado", "Centrado", "Pacífico"], description: "Tu aura fluye con energía natural y armoniosa. Como un bosque, proporcionas refugio y equilibrio. Entiendes que la verdadera fuerza viene del equilibrio y la conexión con la naturaleza.", strengths: ["Excepcional en crear armonía", "Presencia centrada y estable", "Conectado con la naturaleza"], recommendations: ["Crea rutinas equilibradas en 2026", "Pasa tiempo en la naturaleza", "Ayuda a otros a encontrar su centro"] },
            softPink: { name: "Rosa Suave", subtitle: "La Sanadora Compasiva", keywords: ["Empático", "Nutritivo", "Amoroso"], description: "Tu aura brilla con energía sanadora suave. Posees un raro don de empatía profunda, haciendo que otros se sientan verdaderamente vistos y cuidados. Tu presencia misma es una forma de sanación.", strengths: ["Profunda inteligencia emocional", "Habilidad natural para sanar", "Crea espacios seguros"], recommendations: ["Persigue profesiones de ayuda", "Establece límites saludables", "Practica el autocuidado"] },
            midnightBlack: { name: "Negro Medianoche", subtitle: "El Filósofo Profundo", keywords: ["Introspectivo", "Sabio", "Profundo"], description: "Tu aura sostiene la profundidad de medianoche, donde emergen las mayores ideas. Buscas significado más allá de la superficie, y tu naturaleza contemplativa revela verdades que otros pierden.", strengths: ["Pensamiento filosófico profundo", "Ve conexiones ocultas", "Sabiduría de la reflexión"], recommendations: ["Comparte ideas por escrito", "Crea tiempo para la soledad", "Explora la psicología o espiritualidad"] }
        },
        footer: { privacy: "Política de Privacidad", contact: "Contacto" }
    },
    pt: {
        meta: {
            title: "Qual é a sua Cor de Aura 2026?",
            description: "Descubra a sua cor de energia para 2026 através de uma análise de personalidade baseada em psicologia!"
        },
        shareMessage: "A minha cor de aura para 2026 é [COLOR]! ✨ Descubra a sua cor de energia agora!",
        linkCopied: "Link do resultado copiado! Partilhe com os seus amigos.",
        canvasTitle: "Sua Aura 2026",
        back: "Voltar",
        home: {
            title: "Teste de Cor de Aura 2026",
            subtitle: "Descubra a sua cor de energia através de uma análise de personalidade baseada em psicologia",
            startButton: "Iniciar Teste",
            info: "⏱️ 2 minutos | 📝 15 perguntas | 🎨 6 cores"
        },
        questions: [
            { q: "Ao começar o seu dia em 2026, qual é o seu primeiro pensamento?", a: ["Que metas vou alcançar hoje?", "Espero que hoje traga paz e calma", "Vejamos que coisas emocionantes acontecem!", "Preciso de tempo para recarregar sozinho"] },
            { q: "Como lida com o stress?", a: ["Analiso o problema logicamente", "Converso com amigos próximos", "Mergulho em atividades criativas", "Preciso de solidão para processar"] },
            { q: "Qual é o seu fim de semana ideal em 2026?", a: ["Planear e executar um projeto pessoal", "Passar tempo de qualidade com entes queridos", "Explorar novas experiências e aventuras", "Ler, refletir e descansar"] },
            { q: "Ao tomar decisões, você prioriza:", a: ["Lógica e resultados práticos", "Como isso afeta os sentimentos dos outros", "Seguir a minha intuição e paixão", "Reflexão profunda e sabedoria"] },
            { q: "O seu nível de energia costuma ser:", a: ["Estável e focado", "Quente e acolhedor", "Alto e entusiasta", "Tranquilo e contemplativo"] },
            { q: "Em situações sociais, você tende a:", a: ["Observar e contribuir estrategicamente", "Conectar-se emocionalmente com todos", "Ser a alma da festa", "Preferir conversas pequenas e significativas"] },
            { q: "O que mais o motiva?", a: ["Alcançar metas claras e mensuráveis", "Ajudar os outros e fazer a diferença", "Expressão criativa e inovação", "Comprender verdades mais profundas"] },
            { q: "A sua abordagem aos desafios:", a: ["Criar um plano estratégico", "Procurar apoio no meu círculo", "Saltar com entusiasmo", "Tirar um tempo para entender a causa raiz"] },
            { q: "As pessoas costumam descrevê-lo como:", a: ["Confiável e organizado", "Carinhoso e empático", "Enérgico e inspirador", "Sábio e introspectivo"] },
            { q: "O seu ambiente de trabalho ideal:", a: ["Estruturado com objetivos claros", "Colaborativo e de apoio", "Dinâmico e de ritmo acelerado", "Tranquilo e focado"] },
            { q: "Ao enfrentar mudanças, você:", a: ["Adapto-me com planeamento cuidadoso", "Verifico como os outros estão a lidar", "Abraço-a com entusiasmo", "Reflito sobre o seu significado mais profundo"] },
            { q: "A sua saída criativa é:", a: ["Resolução de problemas e estratégia", "Conectar e ajudar pessoas", "Arte, música ou atuação", "Escrita, filosofia ou meditação"] },
            { q: "No final de 2026, como quer se sentir?", a: ["Realizado e bem-sucedido", "Amado e conectado", "Vivo e pleno", "Pacífico e sábio"] },
            { q: "A sua relação com a natureza:", a: ["Aprecio a sua ordem e padrões", "É onde me sinto mais conectado", "Energiza-me e inspira-me", "É essencial para a minha reflexão"] },
            { q: "Quando alguém precisa de ajuda, você:", a: ["Ofereço soluções práticas", "Dou apoio emocional", "Trago otimismo e energia", "Partilho sabedoria e perspetiva"] }
        ],
        loading: {
            analyzing: "Analisando a sua aura...",
            step1: "Extraindo padrões de energia...",
            step2: "Mapeando frequências de color...",
            step3: "Revelando a sua aura 2026..."
        },
        result: {
            aboutTitle: "Sobre a Sua Aura",
            strengthsTitle: "Seus Pontos Fortes",
            recommendationsTitle: "Recomendações 2026",
            downloadButton: "📸 Guardar Imagem",
            shareButton: "🔗 Partilhar Resultado",
            retryButton: "🔄 Tentar Novamente",
            exploreTitle: "Explorar todas as auras"
        },
        colors: {
            coolBlue: { name: "Azul Fresco", subtitle: "O Estratega Calmo", keywords: ["Estratégico", "Calmo", "Confiável"], description: "A sua aura irradia uma energia fresca e composta. Aborda a vida com lógica e clareza, tornando-se um solucionador de problemas natural. Em 2026, a sua presença estável será a sua maior força.", strengths: ["Excelente em planeamento estratégico e análise", "Mantém a compostura sob pressão", "Cria ordem no caos"], recommendations: ["Lidere projetos que exijam planeamento", "Partilhe as suas ideias através da escrita", "Equilibre a lógica com a exploração criativa"] },
            vampPurple: { name: "Roxo Vamp", subtitle: "O Criador Místico", keywords: ["Misterioso", "Criativo", "Intenso"], description: "A sua aura carrega uma energia encantadora e misteriosa. Vê beleza na escuridão e profundidade na complexidade. A sua intensidade criativa atrai os outros para o seu mundo único.", strengths: ["Visão criativa profunda e talento artístico", "Confortável com a complexidade", "Presença magnética que intriga os outros"], recommendations: ["Abrace o seu estilo criativo único", "Partilhe a sua arte com o mundo audaciosamente", "Explore estéticas dramáticas"] },
            solarGold: { name: "Ouro Solar", subtitle: "O Líder Radiante", keywords: ["Enérgico", "Inspirador", "Confiante"], description: "A sua aura brilha como o sol, iluminando tudo ao seu redor. A sua energia contagiante e otimismo tornam-no um líder natural que traz calor por onde passa.", strengths: ["Carisma natural e liderança", "Energiza e motiva os outros", "Prospera em ambientes dinâmicos"], recommendations: ["Assuma papéis de liderança em 2026", "Partilhe o seu entusiasmo", "Canalize energia em novos empreendimentos"] },
            forestGreen: { name: "Verde Floresta", subtitle: "O Harmonizador Equilibrado", keywords: ["Equilibrado", "Centrado", "Pacífico"], description: "A sua aura flui com energia natural e harmoniosa. Como uma floresta, você oferece refúgio e equilíbrio. Entende que a verdadeira força vem do equilíbrio e da conexão com a natureza.", strengths: ["Excecional a criar harmonia", "Presença centrada e estável", "Profundamente conectado com a natureza"], recommendations: ["Crie rotinas equilibradas em 2026", "Passe tempo regular na natureza", "Ajude os outros a encontrar o seu centro"] },
            softPink: { name: "Rosa Suave", subtitle: "O Curador Compassivo", keywords: ["Empático", "Nutritivo", "Amoroso"], description: "A sua aura brilha com energia suave e curativa. Possui um raro dom de empatia profunda, fazendo com que os outros se sintam verdadeiramente vistos e cuidados. A sua presença em si é uma forma de cura.", strengths: ["Profunda inteligência emocional", "Habilidade natural para confortar e curar", "Cria espaços seguros para a vulnerabilidade"], recommendations: ["Persiga trabalho voluntário ou de ajuda", "Estabeleça limites saudáveis enquanto cuida", "Pratique o autocuidado dedicado"] },
            midnightBlack: { name: "Preto Meia-Noite", subtitle: "O Filósofo Profundo", keywords: ["Introspetivo", "Sábio", "Profundo"], description: "A sua aura detém a profundidade da meia-noite, onde emergem as maiores ideias. Procura significado além da superfície, e a sua natureza contemplativa revela verdades que outros perdem.", strengths: ["Pensamento filosófico profundo", "Vê conexões que outros ignoram", "Sabedoria da reflexão profunda"], recommendations: ["Partilhe ideias através da escrita", "Crie tempo para la solidão e reflexão", "Explore a filosofia ou psicologia"] }
        },
        footer: { privacy: "Política de Privacidade", contact: "Contacto" }
    }
};

// 현재 언어 (기본값: 브라우저 언어 자동 감지)
let currentLanguage = 'en';

// 언어 감지 함수
function detectLanguage() {
    const browserLang = navigator.language || navigator.userLanguage;
    if (browserLang.startsWith('ko')) return 'ko';
    if (browserLang.startsWith('ja')) return 'ja';
    if (browserLang.startsWith('es')) return 'es';
    if (browserLang.startsWith('pt')) return 'pt';
    return 'en';
}

// 페이지 로드 시 자동 언어 감지
currentLanguage = detectLanguage();

// 언어 변경 함수
function changeLanguage(lang) {
    currentLanguage = lang;
    updatePageLanguage();
}

// 페이지 텍스트 업데이트
function updatePageLanguage() {
    // data-i18n 속성이 있는 모든 요소 업데이트
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        const keys = key.split('.');
        let value = translations[currentLanguage];
        
        keys.forEach(k => {
            if (value) value = value[k];
        });
        
        if (value && typeof value === 'string') {
            element.textContent = value;
        }
    });

    // 메타 태그 업데이트 (SNS 공유용)
    const metaData = translations[currentLanguage].meta;
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

// 메타 태그 도우미 함수
function updateMetaTag(attrName, attrValue, content) {
    let element = document.querySelector(`meta[${attrName}="${attrValue}"]`);
    if (element) {
        element.setAttribute('content', content);
    } else {
        element = document.createElement('meta');
        element.setAttribute(attrName, attrValue);
        element.setAttribute('content', content);
        document.head.appendChild(element);
    }
}

// 현재 언어의 번역 가져오기
function t(key) {
    const keys = key.split('.');
    let value = translations[currentLanguage];
    keys.forEach(k => {
        if (value) value = value[k];
    });
    return value || key;
}
