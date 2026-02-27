// 다국어 번역 데이터 - 원본 데이터 100% 복구 및 다국어 완성
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
        footer: { privacy: "Privacy Policy", contact: "Contact" },
        seo: {
            learnMore: "✨ Learn more about the test",
            title: "2026 Aura Color Test: Why take this test?",
            description: "The 2026 Aura Color Test uses a psychology-based algorithm updated for the year 2026. Discover your energy color through psychology-based personality analysis.",
            item1: "<strong>2026 Trending:</strong> Discover why certain colors resonate with your energy in 2026.",
            item2: "<strong>Personal Insights:</strong> Get actionable advice and strengths analysis based on your aura.",
            item3: "<strong>Updated Algorithms:</strong> Reflecting the latest social and psychological trends of 2026."
        }
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
            strengthsTitle: "당신의 강점",
            recommendationsTitle: "2026년의 추천",
            downloadButton: "📸 이미지 저장하기",
            shareButton: "🔗 결과 공유하기",
            retryButton: "🔄 다시 테스트하기",
            exploreTitle: "모든 아우라 둘러보기"
        },
        colors: {
            coolBlue: { name: "쿨 블루", subtitle: "냉철한 전략가", keywords: ["전략적인", "차분한", "신뢰할 수 있는"], description: "당신의 아우라는 차분하고 정돈된 에너지를 발산합니다. 논리와 명확성을 가지고 삶에 접근하며, 타고난 문제 해결사 역할을 합니다. 2026년, 당신의 흔들리지 않는 평온함은 가장 큰 강점이 될 것입니다.", strengths: ["치밀한 전략 수립 및 분석 능력", "압박감 속에서도 침착함 유지", "혼란 속에서 질서를 창조함"], recommendations: ["계획이 필요한 프로젝트를 주도하세요", "글을 통해 자신의 통찰력을 나누세요", "논리와 창의적인 탐색 사이의 균형을 맞추세요"] },
            vampPurple: { name: "뱀프 퍼플", subtitle: "신비로운 창조자", keywords: ["신비로운", "창의적인", "강렬한"], description: "당신의 아우라는 매혹적이고 신비로운 에너지를 담고 있습니다. 어둠 속에서 아름다움을 발견하고 복잡함 속에서 깊이를 찾아냅니다. 당신의 창의적인 강렬함은 다른 사람들을 당신만의 독특한 세계로 끌어들입니다.", strengths: ["깊은 창의적 비전과 예술적 재능", "복잡한 상황에서의 유연함", "타인의 호기심을 자극하는 매력적인 존재감"], recommendations: ["당신만의 독특한 창의적 스타일을 포용하세요", "자신의 예술을 세상에 당당히 알리세요", "극적인 미학을 탐구해 보세요"] },
            solarGold: { name: "솔라 골드", subtitle: "빛나는 리더", keywords: ["활기찬", "영감을 주는", "자신감"], description: "당신의 아우라는 태양처럼 빛나며 주변의 모든 것을 밝게 비춥니다. 당신의 전염성 있는 에너지와 낙천주의는 당신을 어디서나 온기를 전하는 타고난 리더로 만듭니다.", strengths: ["타고난 카리스마와 리더십", "타인에게 에너지를 주고 동기부여함", "역동적인 환경에서 능력을 발휘함"], recommendations: ["2026년에는 리더 역할을 맡아보세요", "강연이나 발표를 통해 열정을 나누세요", "에너지를 대담한 새로운 모험에 쏟으세요"] },
            forestGreen: { name: "포레스트 그린", subtitle: "균형 잡힌 조화론자", keywords: ["균형 잡힌", "안정적인", "평화로운"], description: "당신의 아우라는 자연스럽고 조화로운 에너지로 흐릅니다. 숲처럼 당신은 주변에 안식처와 균형을 제공합니다. 진정한 힘은 평온함과 자연과의 연결에서 온다는 것을 잘 알고 있습니다.", strengths: ["조화를 만들어내는 탁월한 능력", "차분하고 안정적인 존재감", "자연과의 깊은 유대감"], recommendations: ["2026년에는 균형 잡힌 루틴을 만드세요", "정기적으로 자연 속에서 시간을 보내세요", "타인이 내면의 중심을 찾도록 도와주세요"] },
            softPink: { name: "소프트 핑크", subtitle: "자애로운 치유자", keywords: ["공감하는", "보살피는", "사랑스러운"], description: "당신의 아우라는 부드럽고 치유하는 에너지로 빛납니다. 당신은 깊은 공감 능력을 갖추고 있어 타인이 진정으로 이해받고 보살핌을 받고 있다고 느끼게 합니다. 당신의 존재 자체가 하나의 치유입니다.", strengths: ["높은 정서적 지능(EQ)", "타인을 위로하고 치유하는 타고난 능력", "취약함을 드러내도 안전한 공간을 만듦"], recommendations: ["봉사 활동이나 나눔에 참여해 보세요", "타인을 돌보면서도 건강한 경계선을 세우세요", "자신을 위한 헌신적인 셀프케어를 실천하세요"] },
            midnightBlack: { name: "미드나잇 블랙", subtitle: "깊은 사색가", keywords: ["내성적인", "지혜로운", "심오한"], description: "당신의 아우라는 위대한 통찰이 솟아나는 한밤중의 깊이를 간직하고 있습니다. 표면 너머의 의미를 찾으며, 당신의 사색적인 태도는 남들이 놓치는 진실을 밝혀냅니다.", strengths: ["심오한 철학적 사고 능력", "타인이 간과하는 연결 고리를 찾아냄", "깊은 성찰에서 나오는 지혜"], recommendations: ["글쓰기를 통해 자신의 통찰을 나누세요", "고독과 사색을 위한 시간을 확보하세요", "철학이나 심리학 분야를 탐구해 보세요"] }
        },
        footer: { privacy: "개인정보처리방침", contact: "문의하기" },
        seo: {
            learnMore: "✨ 테스트에 대해 더 알아보기",
            title: "2026 오라 컬러 테스트: 왜 이 테스트를 해야 할까요?",
            description: "2026 오라 컬러 테스트는 2026년의 최신 심리 트렌드를 반영한 알고리즘을 사용합니다. 심리학 기반 성격 분석을 통해 당신의 에너지 컬러를 찾아보세요.",
            item1: "<strong>2026 트렌딩:</strong> 2026년 당신의 에너지와 공명하는 컬러를 발견하세요.",
            item2: "<strong>개인별 인사이트:</strong> 아우라 분석을 통해 실질적인 조언과 강점 분석을 제공합니다.",
            item3: "<strong>최신 알고리즘:</strong> 2026년의 사회적, 심리학적 트렌드를 완벽하게 반영했습니다."
        }
    },
    ja: {
        meta: {
            title: "あなたの2026年オーラカラーは?",
            description: "心理学に基づいた性格分析で、あなたの2026年のエネルギーカラーを見つけましょう！"
        },
        shareMessage: "私の2026年オーラカラーは [COLOR]! ✨ 今すぐチェック！",
        linkCopied: "リンクをコピーしました！友達にシェアしましょう。",
        canvasTitle: "2026年 オーラカラー",
        back: "戻る",
        home: {
            title: "2026年 オーラカラー診断",
            subtitle: "心理学に基づいた性格分析で、あなたのエネルギーカラーを見つけましょう",
            startButton: "診断を始める",
            info: "⏱️ 2分 | 📝 15の質問 | 🎨 6つのカラー"
        },
        questions: [
            { q: "2026年の朝、一日を始めるときに最初に思うことは？", a: ["今日はどんな目標を達成しようか？", "今日が平和で穏やかでありますように", "今日はどんなワクワクすることが起きるかな？", "自分だけの充電時間が必要だ"] },
            { q: "ストレスを感じたとき、どのように対処しますか？", a: ["問題を論理的に分析して解決する", "親しい人と話して心を落ち着かせる", "創作活動に没頭してストレスを忘れる", "一人で静かに過ごして心を整理する"] },
            { q: "2026年に夢見る理想的な週末は？", a: ["個人プロジェクトを計画して実行する", "愛する人たちと大切な時間を過ごす", "新しい場所を探索して冒険を楽しむ", "静かに読書や思索をして休息する"] },
            { q: "重要な決断を下すとき、何を優先しますか？", a: ["論理的な根拠と実質的な結果", "自分の決断が他人の感情に与える影響", "自分の直感と熱い情熱", "深い思索の末に得た知恵"] },
            { q: "普段のあなたのエネルギーレベルは？", a: ["一定で集中力が高い状態", "温かく周囲をケアする状態", "高く活発なエネルギーが溢れる状態", "穏やかで内面を見つめる状態"] },
            { q: "人々が集まる場所で、あなたは？", a: ["状況を観察して戦略的に行動する", "人々と情緒的に交流してつながる", "雰囲気を主導して活気を与える", "少数の人々と深い会話を楽しむ"] },
            { q: "あなたを動かす最大の原動力は何ですか？", a: ["目標達成したときの達成感", "誰かの役に立ち変化を作るやりがい", "新しいものを創造し革新する楽しさ", "世界の真理を理解すること"] },
            { q: "困難な課題に直面したときのスタイルは？", a: ["緻密な戦略立案能力", "周囲の人々に助言と支持を求める", "自信を持って情熱的に飛び込む", "原因を根本的に理解するために時間をかける"] },
            { q: "他人が言うあなたのイメージは？", a: ["頼りがいがあり計画的な人", "温かく共感能力が高い人", "エネルギーに溢れインスピレーションを与える人", "知恵があり思慮深い人"] },
            { q: "あなたが最も効率的に働ける環境は？", a: ["目標が明確で構造化された環境", "互いに助け合い協力する温かい環境", "変化が速くダイナミックな環境", "静かで一人で集中できる環境"] },
            { q: "突然の変化に直面したとき、あなたは？", a: ["徹底的に計画を立てて適応する", "他の人々がどう感じているかまず確認する", "新しい機会だと考えて楽しんで受け入れる", "その変化が人生に与える深い意味を考える"] },
            { q: "どのような方法で創造性を表現しますか？", a: ["複雑な問題を解決する戦略を立てる", "人々と深く交流し助けを与える", "芸術、音楽、パフォーマンスなどの感覚的な活動", "執筆、哲学、瞑想などの思索的な活動"] },
            { q: "2026年が終わるとき、どんな気分でいたいですか？", a: ["大きな成果を成し遂げた達成感", "多くの愛を分かち合った充足感", "毎瞬間が生きていると感じた満足感", "平和で知恵に満ちた平穏"] },
            { q: "あなたにとって自然はどのような意味を持ちますか？", a: ["自然の中の秩序と調和を鑑賞する場所", "自分自身が世界と最もつながっていると感じる場所", "新しい活力とインスピレーションを得る源", "自分自身を振り返る省察の空間"] },
            { q: "助けが必要な人を見たとき、あなたは？", a: ["実用的に役立つ解決策を探してあげる", "心からの共感と情緒的な慰めを与える", "ポジティブなエネルギーで活力を与える", "洞察力のある助言と知恵を共有する"] }
        ],
        loading: {
            analyzing: "オーラ分析中...",
            step1: "エネルギーパターンを抽出中...",
            step2: "カラー周波数をマッピング中...",
            step3: "2026年のオーラを公開中..."
        },
        result: {
            aboutTitle: "あなたのオーラについて",
            strengthsTitle: "あなたの強み",
            recommendationsTitle: "2026年の推奨事項",
            downloadButton: "📸 画像を保存",
            shareButton: "🔗 結果をシェア",
            retryButton: "🔄 もう一度診断する",
            exploreTitle: "すべてのオーラを見る"
        },
        colors: {
            coolBlue: { name: "クールブルー", subtitle: "冷静な戦略家", keywords: ["戦略的", "冷静", "信頼できる"], description: "あなたのオーラは冷静で整ったエネルギーを放っています。論理と明確さを持って人生にアプローチし、生まれながらの問題解決者として活躍します。2026年、あなたの揺るぎない平穏さは最大の強みとなるでしょう。", strengths: ["緻密な戦略立案と分析能力", "プレッシャー下でも冷静さを維持", "混乱から秩序を創造する"], recommendations: ["計画が必要なプロジェクトを主導", "執筆を通じて自分の洞察を共有", "論理と創造的な探索のバランス"] },
            vampPurple: { name: "バンプパープル", subtitle: "神秘的な創造者", keywords: ["神秘的", "創造的", "強烈"], description: "あなたのオーラは、魅惑的で神秘的なエネルギーを秘めています。暗闇の中に美しさを見出し、複雑さの中に深みを見つけます。あなたの創造的な強烈さは、他者をあなた独自のユニークな世界へと引き込みます。", strengths: ["深い創造的なビジョンと芸術的才能", "複雑な状況における柔軟性", "他者の好奇心を刺激する魅力的な存在感"], recommendations: ["あなた独自のユニークな創造的スタイル", "自分の芸術を堂々と世界に発信", "劇的な美学を探索"] },
            solarGold: { name: "ソーラーゴールド", subtitle: "輝くリーダー", keywords: ["活発", "インスピレーション", "自信"], description: "あなたのオーラは太陽のように輝き、周囲のすべてを明るく照らします。あなたの伝染性のあるエネルギーと楽観主義は、あなたをどこでも温かさを届ける生まれながらのリーダーにします。", strengths: ["生まれ持ったカリスマ性とリーダーシップ", "他者にエネルギーを与え動機付ける", "ダイナミックな環境で能力を発揮"], recommendations: ["2026年にはリーダー的な役割", "講演や発表を通じて情熱を共有", "エネルギーを大胆な新しい冒険に"] },
            forestGreen: { name: "フォレストグリーン", subtitle: "調和のとれた安定者", keywords: ["バランス", "安定的", "平和"], description: "あなたのオーラは、自然的で調和のとれたエネルギーで流れています。森のように、あなたは周囲に安らぎとバランスを提供します。真の強さは平穏さと自然とのつながりから来ることを理解しています。", strengths: ["調和を作り出す卓越した能力", "落ち着いて安定した存在感", "自然との深い絆"], recommendations: ["2026年にはバランスの取れたルーチン", "定期的に自然の中で時間を過ごす", "他人が内面の中心を見つける手助け"] },
            softPink: { name: "ソフトピンク", subtitle: "慈愛に満ちた癒し手", keywords: ["共感", "慈しみ", "愛らしい"], description: "あなたのオーラは、柔らかく癒しのエネルギーで輝いています。あなたは深い共感能力を備えており、他人が真に理解され大切にされていると感じさせます。あなたの存在自体が一つの癒しです。", strengths: ["高い情緒的知能(EQ)", "他人を慰め癒す生まれ持った能力", "弱さをさらけ出しても安全な空間"], recommendations: ["ボランティア活動や分かち合い", "他人をケアしながら健康的な境界線", "自分のための献身的なセルフケア"] },
            midnightBlack: { name: "ミッドナイトブラック", subtitle: "深い思索家", keywords: ["内省的", "賢明", "深遠"], description: "あなたのオーラは、偉大な洞察が湧き出る真夜中の深みを秘めています。表面を超えた意味を求め、あなたの思索的な態度は他人が見落とす真実を明らかにします。", strengths: ["深遠な哲学的思考能力", "他人が見過ごすつながりを見つけ出す", "深い省察から生まれる知恵"], recommendations: ["執筆を通じて自分の洞察を分かち合う", "孤独と思索のための時間を確保", "哲学や心理学の分野を探索"] }
        },
        footer: { privacy: "プライバシーポリシー", contact: "お問い合わせ" },
        seo: {
            learnMore: "✨ 診断について詳しく知る",
            title: "2026年オーラカラー診断：なぜこの診断を受けるべきなのですか？",
            description: "2026年オーラカラー診断は、2026年の最新トレンドを反映したアルゴリズムを使用しています。心理学に基づいた性格分析でエネルギーカラーを見つけましょう。",
            item1: "<strong>2026年のトレンド:</strong> なぜ特定の色があなたのエネルギーと共鳴するのか発見しましょう。",
            item2: "<strong>パーソナルインサイト:</strong> 強み分析と実質的なアドバイスを提供します。",
            item3: "<strong>最新アルゴリズム:</strong> 2026年の社会・心理トレンドを完璧に反映。"
        }
    },
    es: {
        meta: {
            title: "¿Cuál es tu Color de Aura 2026?",
            description: "¡Descubre tu color de energía para el 2026 a través del análisis de personalidad basado en psicología!"
        },
        shareMessage: "¡Mi color de aura 2026 es [COLOR]! ✨ ¡Descubre el tuyo ahora!",
        linkCopied: "¡Enlace copiado! Compártelo con tus amigos.",
        canvasTitle: "Aura 2026",
        back: "Volver",
        home: {
            title: "Test de Aura 2026",
            subtitle: "Descubre tu color de energía a través del análisis de personalidad",
            startButton: "Empezar Test",
            info: "⏱️ 2 minutos | 📝 15 preguntas | 🎨 6 colores"
        },
        questions: [
            { q: "Al empezar tu día en 2026, ¿cuál es tu primer pensamiento?", a: ["¿Qué metas lograré hoy?", "Espero que hoy traiga paz y calma", "¡A ver qué cosas emocionantes pasan!", "Necesito tiempo para recargar solo"] },
            { q: "¿Cómo manejas el estrés?", a: ["Analizo el problema lógicamente", "Hablo con amigos cercanos", "Me sumerjo en actividades creativas", "Necesito soledad para procesar"] },
            { q: "¿Cuál es tu fin de semana ideal en 2026?", a: ["Planear y ejecutar un proyecto personal", "Pasar tiempo de calidad con seres queridos", "Explorar nuevas experiencias", "Leer, reflexionar y descansar"] },
            { q: "Al decidir, priorizas:", a: ["Lógica y resultados prácticos", "Cómo afecta a los sentimientos de los demás", "Seguir mi intuición y pasión", "Reflexión profunda y sabiduría"] },
            { q: "Tu nivel de energía suele ser:", a: ["Estable y concentrado", "Cálido y protector", "Alto y entusiasta", "Tranquilo y contemplativo"] },
            { q: "En situaciones sociales, tiendes a:", a: ["Observar y contribuir estratégicamente", "Conectar emocionalmente con todos", "Ser el alma de la fiesta", "Preferir conversaciones pequeñas"] },
            { q: "¿Qué te motiva más?", a: ["Lograr metas claras y medibles", "Ayudar a los demás y marcar la diferencia", "Expresión creativa e innovación", "Comprender verdades más profundas"] },
            { q: "Tu enfoque ante los desafíos:", a: ["Crear un plan estratégico", "Buscar apoyo en mi círculo", "Saltar con entusiasmo", "Entender la causa raíz"] },
            { q: "La gente suele describirte como:", a: ["Confiable y organizado", "Cariñoso y empático", "Enérgico e inspirador", "Sabio e introspectivo"] },
            { q: "Tu ambiente de trabajo ideal:", a: ["Estructurado con objetivos claros", "Colaborativo y de apoyo", "Dinámico y rápido", "Tranquilo y concentrado"] },
            { q: "Al enfrentar cambios, tú:", a: ["Te adaptas con planificación", "Ves cómo lo llevan los demás", "Lo abrazas con entusiasmo", "Reflexionas sobre su significado"] },
            { q: "Tu salida creativa es:", a: ["Resolución de problemas", "Conectar y ayudar personas", "Arte, música o actuación", "Escritura, filosofía o meditación"] },
            { q: "Al final de 2026, quieres sentirte:", a: ["Realizado y exitoso", "Amado y conectado", "Vivo y pleno", "Pacífico y sabio"] },
            { q: "Tu relación con la naturaleza:", a: ["Aprecio su orden y patrones", "Es donde me siento más conectado", "Me da energía e inspira", "Es esencial para mi reflexión"] },
            { q: "Cuando alguien necesita ayuda, tú:", a: ["Ofreces soluciones prácticas", "Brindas apoyo emocional", "Traes optimismo y energía", "Compartes sabiduría y perspectiva"] }
        ],
        loading: {
            analyzing: "Analizando tu aura...",
            step1: "Extrayendo patrones...",
            step2: "Mapeando frecuencias...",
            step3: "Revelando tu aura 2026..."
        },
        result: {
            aboutTitle: "Sobre tu Aura",
            strengthsTitle: "Tus Fortalezas",
            recommendationsTitle: "Recomendaciones 2026",
            downloadButton: "📸 Guardar Imagen",
            shareButton: "🔗 Compartir",
            retryButton: "🔄 Reintentar",
            exploreTitle: "Explorar todas"
        },
        colors: {
            coolBlue: { name: "Azul Fresco", subtitle: "Estratega Calmo", keywords: ["Estratégico", "Calma", "Fiel"], description: "Tu aura irradia calma y lógica en todo. En 2026, tu presencia estable será tu mayor fortaleza.", strengths: ["Excelente planificación estratégica", "Mantiene la calma bajo presión", "Crea orden en el caos"], recommendations: ["Lidera proyectos de planificación", "Comparte tus ideas por escrito", "Equilibra lógica y creatividad"] },
            vampPurple: { name: "Púrpura Vamp", subtitle: "Creador Místico", keywords: ["Misterio", "Creativo", "Intenso"], description: "Energía mística y encantadora que ve la belleza en la complejidad.", strengths: ["Visión creativa profunda", "Cómodo con la complejidad", "Presencia magnética"], recommendations: ["Abraza tu estilo único", "Comparte tu arte con el mundo", "Explora estéticas dramáticas"] },
            solarGold: { name: "Oro Solar", subtitle: "Líder Radiante", keywords: ["Energía", "Inspiración", "Confianza"], description: "Brillas como el sol, iluminando todo a tu alrededor con optimismo.", strengths: ["Carisma natural", "Energiza y motiva a otros", "Prospera en ambientes dinámicos"], recommendations: ["Asume roles de liderazgo", "Comparte tu entusiasmo", "Inicia nuevas aventuras"] },
            forestGreen: { name: "Verde Bosque", subtitle: "Armonizador", keywords: ["Equilibrio", "Estabilidad", "Paz"], description: "Fluyes con energía natural y armoniosa, ofreciendo refugio y paz.", strengths: ["Excepcional creando armonía", "Presencia estable", "Conexión con la naturaleza"], recommendations: ["Crea rutinas equilibradas", "Pasa tiempo en la naturaleza", "Ayuda a otros a encontrar su centro"] },
            softPink: { name: "Rosa Suave", subtitle: "Sanador Compasivo", keywords: ["Empatía", "Cariño", "Amor"], description: "Brillas con energía suave y curativa, haciendo que otros se sientan vistos.", strengths: ["Inteligencia emocional profunda", "Habilidad para consolar", "Crea espacios seguros"], recommendations: ["Participa en voluntariado", "Establece límites saludables", "Practica el autocuidado"] },
            midnightBlack: { name: "Negro Noche", subtitle: "Filósofo Profundo", keywords: ["Introspectivo", "Sabio", "Profundo"], description: "Tu aura sostiene la profundidad donde emergen las mayores ideas.", strengths: ["Pensamiento filosófico profundo", "Ve conexiones ocultas", "Sabiduría de la reflexión"], recommendations: ["Comparte ideas por escrito", "Crea tiempo para la soledad", "Explora la psicología"] }
        },
        footer: { privacy: "Privacidad", contact: "Contacto" },
        seo: {
            learnMore: "✨ Más sobre el test",
            title: "Test de Aura 2026: ¿Por qué?",
            description: "Algoritmo basado en psicología 2026 para descubrir tu color.",
            item1: "<strong>Tendencias 2026:</strong> Descubre la resonancia de tu energía.",
            item2: "<strong>Insights:</strong> Análisis de fortalezas personales.",
            item3: "<strong>Lógica:</strong> Actualizado para las tendencias sociales de 2026."
        }
    },
    pt: {
        meta: {
            title: "¿Tu Color de Aura 2026?",
            description: "¡Descubre tu color de energía para el 2026!"
        },
        shareMessage: "Minha cor de aura 2026 é [COLOR]! ✨ Descubra a sua agora!",
        linkCopied: "Copiado!", canvasTitle: "Aura 2026", back: "Voltar",
        home: {
            title: "Teste de Aura 2026",
            subtitle: "Descubra sua cor de energia através da análise de personalidade",
            startButton: "Começar Teste",
            info: "⏱️ 2 minutos | 📝 15 perguntas | 🎨 6 cores"
        },
        questions: [
            { q: "Ao começar o seu dia em 2026, qual é o seu primeiro pensamento?", a: ["Que metas vou alcançar hoje?", "Espero que hoje traga paz e calma", "Vejamos que coisas emocionantes!", "Preciso de tempo para recarregar"] },
            { q: "¿Como lida com o estresse?", a: ["Analiso o problema logicamente", "Converso com amigos", "Mergulho em atividades criativas", "Preciso de solidão para processar"] },
            { q: "¿Qual é o seu fim de semana ideal?", a: ["Planejar um projeto pessoal", "Tempo com entes queridos", "Explorar novas experiências", "Ler, refletir e descansar"] },
            { q: "Ao tomar decisões, prioriza:", a: ["Lógica e resultados", "Sentimentos dos outros", "Intuição e paixão", "Reflexão profunda"] },
            { q: "Seu nível de energia costuma ser:", a: ["Estável e focado", "Quente e acolhedor", "Alto e entusiasta", "Tranquilo e contemplativo"] },
            { q: "Em situações sociais:", a: ["Observo estrategicamente", "Conecto-me emocionalmente", "Sou a alma da festa", "Conversas profundas"] },
            { q: "O que mais o motiva?", a: ["Metas claras e mensuráveis", "Ajudar os outros", "Expressão criativa", "Verdades profundas"] },
            { q: "Abordagem aos desafios:", a: ["Crio um plano estratégico", "Busco apoio no meu círculo", "Salto com entusiasmo", "Entendo a causa raiz"] },
            { q: "As pessoas descrevem você como:", a: ["Confiável e organizado", "Carinhoso e empático", "Enérgico e inspirador", "Sábio e introspectivo"] },
            { q: "Seu ambiente de trabalho ideal:", a: ["Estruturado com objetivos", "Colaborativo e de apoio", "Dinâmico e rápido", "Tranquilo e focado"] },
            { q: "Ao enfrentar mudanças:", a: ["Adapto-me com planejamento", "Verifico os outros", "Abraço com entusiasmo", "Reflito sobre o sentido"] },
            { q: "Sua saída criativa é:", a: ["Resolução de problemas", "Conectar e ajudar pessoas", "Arte, música ou atuação", "Escrita ou meditação"] },
            { q: "Ao final de 2026, quer sentir-se:", a: ["Realizado e bem-sucedido", "Amado e conectado", "Vivo e pleno", "Pacífico e sábio"] },
            { q: "Sua relação com a natureza:", a: ["Aprecio a ordem e padrões", "Sinto-me mais conectado", "Dá-me energia e inspira", "Essencial para reflexão"] },
            { q: "Quando alguém precisa de ajuda:", a: ["Ofereço soluções práticas", "Dou apoio emocional", "Trago otimismo", "Compartilho sabedoria"] }
        ],
        loading: {
            analyzing: "Analisando sua aura...",
            step1: "Extraindo padrões...",
            step2: "Mapeando cores...",
            step3: "Revelando sua aura 2026..."
        },
        result: {
            aboutTitle: "Sobre sua Aura",
            strengthsTitle: "Seus Pontos Fortes",
            recommendationsTitle: "Dicas para 2026",
            downloadButton: "📸 Salvar Imagem",
            shareButton: "🔗 Partilhar",
            retryButton: "🔄 De novo",
            exploreTitle: "Explorar todas"
        },
        colors: {
            coolBlue: { name: "Azul Fresco", subtitle: "Estrategista Calmo", keywords: ["Estratégico", "Calma", "Foco"], description: "Sua aura irradia uma energia fresca e composta. Em 2026, sua presença estável será sua força.", strengths: ["Excelente em planejamento", "Mantém a calma sob pressão", "Cria ordem no caos"], recommendations: ["Lidere projetos", "Partilhe ideias", "Equilibre lógica e criatividade"] },
            vampPurple: { name: "Roxo Vamp", subtitle: "Criador Místico", keywords: ["Mistério", "Criativo", "Forte"], description: "Sua aura carrega uma energia encantadora e mística. Vê beleza na escuridão.", strengths: ["Visão criativa profunda", "Confortável com complexidade", "Presença magnética"], recommendations: ["Abrace seu estilo", "Partilhe sua arte", "Explore estéticas"] },
            solarGold: { name: "Ouro Solar", subtitle: "Líder Radiante", keywords: ["Luz", "Brilho", "Ação"], description: "Sua aura brilha como o sol, iluminando tudo com otimismo. É um líder natural.", strengths: ["Carisma natural", "Motiva outros", "Prospera em ambientes dinâmicos"], recommendations: ["Assuma liderança", "Partilhe entusiasmo", "Novas aventuras"] },
            forestGreen: { name: "Verde Floresta", subtitle: "Harmonizador", keywords: ["Paz", "Vida", "Ser"], description: "Sua aura flui com energia natural. Entende que a força vem do equilíbrio.", strengths: ["Cria harmonia", "Estável e centrado", "Conexão com a natureza"], recommendations: ["Rotinas equilibradas", "Tempo na natureza", "Ajude outros"] },
            softPink: { name: "Rosa Suave", subtitle: "Curador", keywords: ["Amor", "Fé", "Luz"], description: "Sua aura brilha com energia suave e curativa. Possui um dom de empatia.", strengths: ["Inteligência emocional", "Confortar e curar", "Espaços seguros"], recommendations: ["Voluntariado", "Limites saudáveis", "Autocuidado"] },
            midnightBlack: { name: "Preto Noite", subtitle: "Filósofo", keywords: ["Luz", "Paz", "Fé"], description: "Sua aura detém a profundidade da meia-noite. Procura a verdade profunda.", strengths: ["Pensamento filosófico", "Vê conexões", "Sabedoria"], recommendations: ["Partilhe ideias", "Solitude", "Filosofia"] }
        },
        footer: { privacy: "Privacidade", contact: "Contato" },
        seo: {
            learnMore: "✨ Saiba mais",
            title: "Teste de Aura 2026",
            description: "Descubra sua cor através da psicologia 2026.",
            item1: "<strong>Tendências 2026:</strong> Descubra a ressonância da sua energia.",
            item2: "<strong>Dicas:</strong> Receba conselhos e análise de força.",
            item3: "<strong>Novo:</strong> Tendências sociais refletidas em 2026."
        }
    }
};

// 언어 설정 관리
if (typeof window.currentLanguage === 'undefined') { window.currentLanguage = 'ko'; }
function detectLanguage() {
    const l = navigator.language || navigator.userLanguage;
    if (l.startsWith('ko')) return 'ko'; if (l.startsWith('ja')) return 'ja';
    if (l.startsWith('es')) return 'es'; if (l.startsWith('pt')) return 'pt'; return 'en';
}
function changeLanguage(lang) { window.currentLanguage = lang; updatePageLanguage(); }
function updatePageLanguage() {
    const lang = window.currentLanguage; const data = translations[lang]; if (!data) return;
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n'); const keys = key.split('.'); let val = data;
        keys.forEach(k => { if (val) val = val[k]; });
        if (val && typeof val === 'string') {
            if (key.startsWith('seo.item') || key === 'seo.learnMore') el.innerHTML = val;
            else el.textContent = val;
        }
    });
    if (window.currentResultKey) {
        const res = data.colors[window.currentResultKey];
        if (res) {
            document.getElementById('result-title').textContent = res.name;
            document.getElementById('result-subtitle').textContent = res.subtitle;
            document.getElementById('result-description').textContent = res.description;
            const kw = document.getElementById('keywords'); if (kw) {
                kw.innerHTML = ''; res.keywords.forEach(k => {
                    const t = document.createElement('div'); t.className = 'keyword-tag'; t.textContent = k; kw.appendChild(t);
                });
            }
            const st = document.getElementById('strengths-list'); if (st) {
                st.innerHTML = ''; res.strengths.forEach(s => { const li = document.createElement('li'); li.textContent = s; st.appendChild(li); });
            }
            const re = document.getElementById('recommendations-list'); if (re) {
                re.innerHTML = ''; res.recommendations.forEach(r => { const li = document.createElement('li'); li.textContent = r; re.appendChild(li); });
            }
        }
    }
}
function updateMetaTag(n, v, c) {
    let el = document.querySelector(`meta[${n}="${v}"]`);
    if (el) el.setAttribute('content', c);
    else { el = document.createElement('meta'); el.setAttribute(n, v); el.setAttribute('content', c); document.head.appendChild(el); }
}
function t(key) {
    const keys = key.split('.'); let val = translations[window.currentLanguage];
    keys.forEach(k => { if (val) val = val[k]; }); return val || key;
}
