// 다국어 번역 데이터 - 최종 무결성 버전 (모든 언어 15질문 & 6컬러 포함)
const translations = {
    ko: {
        meta: { title: "나의 2026 오라 컬러는?", description: "간단한 질문으로 나의 2026년 에너지 컬러를 알아보세요! 재미있는 성격 테스트" },
        shareMessage: "나의 2026년 아우라 컬러는 [COLOR]! ✨ 지금 확인해보세요!",
        linkCopied: "링크 복사 완료!", canvasTitle: "2026 나의 아우라 컬러", back: "이전",
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
            coolBlue: { name: "쿨 블루", subtitle: "냉철한 전략가", keywords: ["전략적인", "차분한", "신뢰할 수 있는"], description: "당신의 아우라는 차분하고 정돈된 에너지를 발산합니다. 논리와 명확성을 가지고 삶에 접근하며, 타고난 문제 해결사 역할을 합니다. 2026년, 당신의 흔들리지 않는 평온함은 가장 큰 강점이 될 것입니다.", strengths: ["치밀한 전략 수립 및 분석 능력", " 압박감 속에서도 침착함 유지", "혼란 속에서 질서를 창조함"], recommendations: ["계획이 필요한 프로젝트를 주도하세요", "글을 통해 자신의 통찰력을 나누세요", "논리와 창의적인 탐색 사이의 균형을 맞추세요"] },
            vampPurple: { name: "뱀프 퍼플", subtitle: "신비로운 창조자", keywords: ["신비로운", "창의적인", "강렬한"], description: "당신의 아우라는 매혹적이고 신비로운 에너지를 담고 있습니다. 어둠 속에서 아름다움을 발견하고 복잡함 속에서 깊이를 찾아냅니다. 당신의 창의적인 강렬함은 다른 사람들을 당신만의 독특한 세계로 끌어들입니다.", strengths: ["깊은 창의적 비전과 예술적 재능", "복잡한 상황에서의 유연함", "타인의 호기심을 자극하는 매력적인 존재감"], recommendations: ["당신만의 독특한 창의적 스타일을 포용하세요", "자신의 예술을 세상에 당당히 알리세요", "극적인 미학을 탐구해 보세요"] },
            solarGold: { name: "솔라 골드", subtitle: "빛나는 리더", keywords: ["활기찬", "영감을 주는", "자신감"], description: "당신의 아우라는 태양처럼 빛나며 주변의 모든 것을 밝게 비춥니다. 당신의 전염성 있는 에너지와 낙천주의는 당신을 어디서나 온기를 전하는 타고난 리더로 만듭니다.", strengths: ["타고난 카리스마와 리더십", "타인에게 에너지를 주고 동기부여함", "역동적인 환경에서 능력을 발휘함"], recommendations: ["2026년에는 리더 역할을 맡아보세요", "강연이나 발표를 통해 열정을 나누세요", "에너지를 대담한 새로운 모험에 쏟으세요"] },
            forestGreen: { name: "포레스트 그린", subtitle: "균형 잡힌 조화론자", keywords: ["균형 잡힌", "안정적인", "평화로운"], description: "당신의 아우라는 자연스럽고 조화로운 에너지로 흐릅니다. 숲처럼 당신은 주변에 안식처와 균형을 제공합니다. 진정한 힘은 평온함과 자연과의 연결에서 온다는 것을 잘 알고 있습니다.", strengths: ["조화를 만들어내는 탁월한 능력", "차분하고 안정적인 존재감", "자연과의 깊은 유대감"], recommendations: ["2026년에는 균형 잡힌 루틴을 만드세요", "정기적으로 자연 속에서 시간을 보내세요", "타인이 내면의 중심을 찾도록 도와주세요"] },
            softPink: { name: "소프트 핑크", subtitle: "자애로운 치유자", keywords: ["공감하는", "보살피는", "사랑스러운"], description: "당신의 아우라는 부드럽고 치유하는 에너지로 빛납니다. 당신은 깊은 공감 능력을 갖추고 있어 타인이 진정으로 이해받고 보살핌을 받고 있다고 느끼게 합니다. 당신의 존재 자체가 하나의 치유입니다.", strengths: ["높은 정서적 지능(EQ)", "타인을 위로하고 치유하는 타고난 능력", "취약함을 드러내도 안전한 공간을 만듦"], recommendations: ["봉사 활동이나 나눔에 참여해 보세요", "타인을 돌보면서도 건강한 경계선을 세우세요", "자신을 위한 헌신적인 셀프케어를 실천하세요"] },
            midnightBlack: { name: "미드나잇 블랙", subtitle: "깊은 사색가", keywords: ["내성적인", "지혜로운", "심오한"], description: "당신의 아우라는 위대한 통찰이 솟아나는 한밤중의 깊이를 간직하고 있습니다. 표면 너머의 의미를 찾으며, 당신의 사색적인 태도는 남들이 놓치는 진실을 밝혀냅니다.", strengths: ["심오한 철학적 사고 능력", "타인이 간과하는 연결 고리를 찾아냄", " 깊은 성찰에서 나오는 지혜"], recommendations: ["글쓰기를 통해 자신의 통찰을 나누세요", "고독과 사색을 위한 시간을 확보하세요", "철학이나 심리학 분야를 탐구해 보세요"] }
        },
        footer: { privacy: "개인정보처리방침", contact: "문의하기" },
        seo: { learnMore: "✨ 테스트에 대해 더 알아보기", title: "2026 오라 컬러 테스트: 왜 이 테스트를 해야 할까요?", description: "2026 오라 컬러 테스트는 2026년의 최신 심리 트렌드를 반영한 알고리즘을 사용합니다.", item1: "<strong>2026 트렌딩:</strong> 2026년 당신의 에너지와 공명하는 컬러를 발견하세요.", item2: "<strong>개인별 인사이트:</strong> 아우라 분석을 통해 실질적인 조언을 제공합니다.", item3: "<strong>최신 알고리즘:</strong> 2026년의 사회적, 심리학적 트렌드를 반영했습니다." }
    },
    en: {
        meta: { title: "What's Your 2026 Aura Color?", description: "Discover your energy color through psychology-based personality analysis. Take the 2026 Aura Test!" },
        shareMessage: "My 2026 Aura Color is [COLOR]! ✨ Discover yours now!",
        linkCopied: "Result link copied!", canvasTitle: "2026 Aura Color", back: "Back",
        home: { title: "2026 Aura Color Test", subtitle: "Discover your energy color through psychology-based personality analysis", startButton: "Start Test", info: "⏱️ 2 minutes | 📝 15 questions | 🎨 6 colors" },
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
        result: { aboutTitle: "About Your Aura", strengthsTitle: "Your Strengths", recommendationsTitle: "2026 Recommendations", downloadButton: "📸 Download Image", shareButton: "🔗 Share Result", retryButton: "🔄 Try Again", exploreTitle: "Explore All Auras" },
        colors: {
            coolBlue: { name: "Cool Blue", subtitle: "The Calm Strategist", keywords: ["Strategic", "Calm", "Reliable"], description: "Your aura radiates a cool, composed energy. You approach life with logic and clarity, making you a natural problem-solver.", strengths: ["Excellent strategic planning", "Maintains composure", "Creates order"], recommendations: ["Lead planning projects", "Share insights through writing", "Balance logic and creativity"] },
            vampPurple: { name: "Vamp Purple", subtitle: "The Mystical Creator", keywords: ["Mysterious", "Creative", "Intense"], description: "Your aura carries an enchanting, mysterious energy. You see beauty in darkness and depth in complexity.", strengths: ["Deep creative vision", "Comfortable with complexity", "Magnetic presence"], recommendations: ["Embrace your unique style", "Share art boldly", "Explore dramatic aesthetics"] },
            solarGold: { name: "Solar Gold", subtitle: "The Radiant Leader", keywords: ["Energetic", "Inspiring", "Confidence"], description: "Your aura shines like the sun, illuminating everything around you. Your infectious energy makes you a natural leader.", strengths: ["Natural charisma", "Energizes others", "Thrives in dynamic roles"], recommendations: ["Take leadership roles", "Share enthusiasm", "Start bold ventures"] },
            forestGreen: { name: "Forest Green", subtitle: "The Balanced Harmonizer", keywords: ["Balanced", "Grounded", "Peaceful"], description: "Your aura flows with natural, harmonious energy. Like a forest, you provide shelter and balance.", strengths: ["Exceptional at harmony", "Grounded presence", "Deep nature connection"], recommendations: ["Create balanced routines", "Spend time in nature", "Help others find center"] },
            softPink: { name: "Soft Pink", subtitle: "The Compassionate Healer", keywords: ["Empathetic", "Nurturing", "Loving"], description: "Your aura glows with gentle, healing energy. You make others feel truly seen and cared for.", strengths: ["High emotional intelligence", "Ability to comfort", "Creates safe spaces"], recommendations: ["Pursue volunteer work", "Set healthy boundaries", "Practice self-care"] },
            midnightBlack: { name: "Midnight Black", subtitle: "The Deep Philosopher", keywords: ["Introspective", "Wise", "Profound"], description: "Your aura holds the depth of midnight. Your contemplative nature reveals hidden truths.", strengths: ["Profound thinking", "Sees hidden connections", "Wisdom from reflection"], recommendations: ["Share insights", "Create time for solitude", "Explore philosophy"] }
        },
        footer: { privacy: "Privacy Policy", contact: "Contact" },
        seo: { learnMore: "✨ Learn more", title: "2026 Aura Color Test", description: "Discover your energy color.", item1: "<strong>2026 Trending:</strong> Color resonance.", item2: "<strong>Personal Insights:</strong> Strength analysis.", item3: "<strong>Algorithms:</strong> Updated for 2026." }
    },
    ja: {
        meta: { title: "あなたの2026年オーラカラーは?", description: "心理学に基づいた性格分析で2026年のエネルギーカラーを見つけましょう！" },
        shareMessage: "私の2026年オーラカラーは [COLOR]! ✨ 今すぐチェック！",
        linkCopied: "リンクをコピーしました！", canvasTitle: "2026 オーラカラー", back: "戻る",
        home: { title: "2026年 オーラカラー診断", subtitle: "性格分析であなたのエネルギーカラーを発見", startButton: "診断を始める", info: "⏱️ 2分 | 📝 15の質問 | 🎨 6つのカラー" },
        questions: [
            { q: "2026年の朝、一日を始める時に最初に思うことは？", a: ["今日はどんな目標を達成しようか？", "今日も一日、平和で穏やかでありますように", "今日はどんなワクワクすることが起きるかな？", "自分一人のための充電時間が必要だ"] },
            { q: "ストレスを感じた時、どのように対処しますか？", a: ["問題を論理的に分析して解決する", "親しい人と話をして気持ちを落ち着かせる", "創作活動に没頭してストレスを忘れる", "一人の時間を持って気持ちを整理する"] },
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
        result: { aboutTitle: "あなたのオーラ", strengthsTitle: "あなたの強み", recommendationsTitle: "2026年の推奨", downloadButton: "📸 画像を保存する", shareButton: "🔗 結果を共有する", retryButton: "🔄 もう一度診断する", exploreTitle: "すべてのオーラを見る" },
        colors: {
            coolBlue: { name: "クールブルー", subtitle: "冷静な戦略家", keywords: ["戦略的", "冷静", "信頼"], description: "あなたのオーラは冷静で整ったエネルギーを放っています。論理と明確さを持って人生にアプローチし、生まれながらの問題解決者の役割を果たします。2026年、あなたの揺るぎない平穏は最大の強みとなるでしょう。", strengths: ["綿密な戦略立案と分析能力", "プレッシャーの中でも沈着冷静", "混乱の中で秩序を創造する"], recommendations: ["計画が必要なプロジェクトを主導してください", "文章を通じて自分の洞察を共有してください", "論理と創造的な探求のバランスをとってください"] },
            vampPurple: { name: "ヴァンプパープル", subtitle: "神秘的な創造者", keywords: ["神秘的", "創造的", "強烈"], description: "あなたのオーラは魅惑的で神秘的なエネルギーを秘めています。暗闇の中に美しさを見出し、複雑さの中に深みを見つけます。あなたの創造的な強烈さは、人々をあなた独自の独特な世界へと引き込みます。", strengths: ["深い創造的ビジョンと芸術的才能", "複雑な状況での柔軟性", "他人の好奇心を刺激する魅力的な存在感"], recommendations: ["あなた独自の創造的なスタイルを受け入れてください", "自分の芸術を世の中に堂々と発信してください", "劇的な美学を探求してみてください"] },
            solarGold: { name: "ソーラーゴールド", subtitle: "輝くリーダー", keywords: ["活気ある", "インスピレーション", "自信"], description: "あなたのオーラは太陽のように輝き、周囲のすべてを明るく照らします。あなたの伝染性のあるエネルギーと楽観主義は、あなたをどこでも温かさを伝える生まれながらのリーダーにします。", strengths: ["天性のカリスマ性とリーダーシップ", "他人にエネルギーを与え動機付ける", "ダイナミックな環境で能力を発揮する"], recommendations: ["2026年はリーダーの役割を引き受けてみてください", "講演や発表を通じて情熱を共有してください", "エネルギーを大胆な新しい冒険に注いでください"] },
            forestGreen: { name: "フォレストグリーン", subtitle: "調和のとれた平和主義者", keywords: ["バランス", "安定的", "平和"], description: "あなたのオーラは自然的で調和のとれたエネルギーで流れています。森のように、あなたは周囲に安らぎとバランスを提供します。真の力は平穏と自然とのつながりから来ることをよく知っています。", strengths: ["調和を作り出す卓越した能力", "冷静で安定した存在感", "自然との深い絆"], recommendations: ["2026年はバランスのとれたルーチンを作ってください", "定期的に自然の中で時間を過ごしてください", "他人が内面の中心を見つけるのを助けてあげてください"] },
            softPink: { name: "ソフトピンク", subtitle: "慈愛に満ちた癒し手", keywords: ["共感", "世話好き", "愛らしい"], description: "あなたのオーラは柔らかく癒しのエネルギーで輝いています。あなたは深い共感能力を備えており、他人が真に理解され、大切にされていると感じさせます。あなたの存在自体が一つの癒しです。", strengths: ["高い心の知能指数(EQ)", "他人を慰め癒す天性の能力", "脆弱さを見せても安全な空間を作る"], recommendations: ["奉仕活動や分かち合いに参加してみてください", "他人を世話しつつも、健康的な境界線を引いてください", "自分のための献身的なセルフケアを実践してください"] },
            midnightBlack: { name: "ミッドナイトブラック", subtitle: "深い思索家", keywords: ["内省的", "賢明", "深遠"], description: "あなたのオーラは、偉大な洞察が湧き出る真夜中の深さを保持しています。表面の向こうの意味を探し、あなたの思索的な態度は他人が見逃す真実を明らかにします。", strengths: ["深遠な哲学的思考能力", "他人が見落とすつながりを見つけ出す", "深い省察から生まれる知恵"], recommendations: ["執筆を通じて自分の洞察を共有してください", "孤独と思索のための時間を確保してください", "哲学や心理学の分野を探求してみてください"] }
        },
        footer: { privacy: "プライバシーポリシー", contact: "お問い合わせ" },
        seo: { learnMore: "✨ 診断について詳しく知る", title: "2026年オーラカラー診断：なぜこの診断を受けるべきか？", description: "2026年の最新心理トレンドを反映したアルゴリズムを使用しています。", item1: "<strong>2026トレンド：</strong> 2026年のあなたのエネルギーと共鳴するカラーを発見。", item2: "<strong>個人別インサイト：</strong> 実質的なアドバイスを提供します。", item3: "<strong>最新ロジック：</strong> 2026年の社会・心理トレンドを反映。" }
    },
    es: {
        meta: { title: "¿Cuál es tu Color de Aura 2026?", description: "¡Descubre tu color de energía para el 2026 a través del análisis de personalidad basado en psicología!" },
        shareMessage: "¡Mi color de aura 2026 es [COLOR]! ✨ ¡Descubre el tuyo ahora!",
        linkCopied: "¡Enlace copiado!", canvasTitle: "Mi Aura 2026", back: "Volver",
        home: { title: "Test de Aura 2026", subtitle: "Descubre tu color de energía a través del análisis de personalidad basado en psicología", startButton: "Empezar Test", info: "⏱️ 2 min | 📝 15 preguntas | 🎨 6 colores" },
        questions: [
            { q: "En la mañana de 2026, ¿cuál es tu primer pensamiento al empezar el día?", a: ["¿Qué metas voy a alcanzar hoy?", "Espero que hoy sea un día tranquilo y en paz", "¿Qué cosas emocionantes pasarán hoy?", "Necesito tiempo de recarga solo para mí"] },
            { q: "¿Cómo manejas el estrés?", a: ["Analizo el problema lógicamente para resolverlo", "Hablo con personas cercanas para desahogarme", "Me sumerjo en actividades creativas y olvido el estrés", "Paso tiempo a solas para organizar mis pensamientos"] },
            { q: "¿Cuál es tu fin de semana ideal en 2026?", a: ["Planear y ejecutar proyectos personales", "Pasar tiempo de calidad con mis seres queridos", "Explorar lugares nuevos y disfrutar de la aventura", "Descansar tranquilamente leyendo o reflexionando"] },
            { q: "Al tomar decisiones importantes, ¿qué valor priorizas?", a: ["Bases lógicas y resultados prácticos", "El impacto de mi decisión en los sentimientos de otros", "Mi intuición y mi gran pasión", "La sabiduría obtenida tras una profunda reflexión"] },
            { q: "¿Cómo suele ser tu nivel de energía?", a: ["Constante y con alta concentración", "Cálido y preocupado por los demás", "Alto, vibrante y lleno de vitalidad", "Calmado y observando mi interior"] },
            { q: "Cuando estás en grupo, ¿tú...?", a: ["Observas la situación y actúas estratégicamente", "Conectas emocionalmente con las personas", "Lideras el ambiente y aportas vitalidad", "Disfrutas de conversaciones profundas con pocos"] },
            { q: "¿Cuál es tu mayor motor para actuar?", a: ["El placer de lograr metas claras", "La satisfacción de ayudar y crear cambios", "El gusto de crear e innovar cosas nuevas", "Comprender las verdades esenciales del mundo"] },
            { q: "Ante un desafío difícil, ¿cuál es tu estilo?", a: ["Hago un plan minucioso y estratégico", "Busco consejo y apoyo en los que me rodean", "Me lanzo con confianza y entusiasmo", "Me tomo tiempo para entender la causa raíz"] },
            { q: "¿Cómo describen otros tu imagen?", a: ["Persona confiable y organizada", "Persona cálida y con gran empatía", "Persona llena de energía e inspiradora", "Persona sabia y de pensamiento profundo"] },
            { q: "¿En qué entorno trabajas con más eficiencia?", a: ["Entorno con metas claras y estructurado", "Entorno cálido de ayuda mutua y colaboración", "Entorno dinámico y de cambios rápidos", "Entorno silencioso donde pueda concentrarme solo"] },
            { q: "Ante un cambio repentino, ¿tú...?", a: ["Hago un plan estricto para adaptarme", "Observo primero cómo se sienten los demás", "Lo tomo como una nueva oportunidad con alegría", "Pienso en el significado profundo que el cambio trae"] },
            { q: "¿De qué forma expresas tu creatividad?", a: ["Creando estrategias para resolver problemas complejos", "Conectando profundamente y ayudando a otros", "Actividades sensoriales como arte, música o teatro", "Actividades reflexivas como escribir o meditar"] },
            { q: "Al final de 2026, ¿cómo quieres sentirte?", a: ["Satisfacción por haber logrado grandes éxitos", "Plenitud por haber dado y recibido mucho amor", "Satisfacción de sentir que viví cada momento", "Tranquilidad por haberme vuelto más sabio"] },
            { q: "¿Qué significa la naturaleza para ti?", a: ["Lugar para apreciar el orden y la armonía", "Donde me siento más conectado con el mundo", "Fuente de nueva vitalidad e inspiración", "Espacio de reflexión para mirarme a mí mismo"] },
            { q: "Cuando ves a alguien que necesita ayuda, ¿tú...?", a: ["Buscas una solución práctica que le sirva", "Ofreces empatía sincera y consuelo emocional", "Aportas vitalidad con energía positiva", "Compartes consejos sabios y tu visión"] }
        ],
        loading: { analyzing: "Analizando tu aura...", step1: "Extrayendo patrones de energía...", step2: "Mapeando frecuencias de color...", step3: "Revelando tu aura 2026..." },
        result: { aboutTitle: "Tu Aura", strengthsTitle: "Tus Fortalezas", recommendationsTitle: "Recomendaciones 2026", downloadButton: "📸 Guardar Imagen", shareButton: "🔗 Compartir Resultado", retryButton: "🔄 Repetir Test", exploreTitle: "Explorar Todas las Auras" },
        colors: {
            coolBlue: { name: "Azul Frío", subtitle: "Estratega Imperturbable", keywords: ["Estratégico", "Calmado", "Confiable"], description: "Tu aura emana una energía serena y organizada. Abordas la vida con lógica y claridad, actuando como un solucionador de problemas natural. En 2026, tu calma inquebrantable será tu mayor fortaleza.", strengths: ["Capacidad de análisis y estrategia minuciosa", "Mantiene la calma bajo presión", "Crea orden en medio del caos"], recommendations: ["Lidera proyectos que requieran planificación", "Comparte tus visiones a través de la escritura", "Equilibra la lógica con la exploración creativa"] },
            vampPurple: { name: "Púrpura Vamp", subtitle: "Creador Misterioso", keywords: ["Misterioso", "Creativo", "Intenso"], description: "Tu aura contiene una energía fascinante y misteriosa. Encuentras belleza en la oscuridad y profundidad en la complejidad. Tu intensidad creativa atrae a los demás hacia tu mundo único.", strengths: ["Visión creativa profunda y talento artístico", "Flexibilidad en situaciones complejas", "Presencia magnética que despierta curiosidad"], recommendations: ["Abraza tu estilo creativo único", "Muestra tu arte al mundo con confianza", "Explora estéticas dramáticas"] },
            solarGold: { name: "Oro Solar", subtitle: "Líder Radiante", keywords: ["Vibrante", "Inspirador", "Seguro"], description: "Tu aura brilla como el sol, iluminando todo a tu alrededor. Tu energía contagiosa y optimismo te convierten en un líder natural que brinda calidez a donde quiera que vaya.", strengths: ["Carisma y liderazgo naturales", "Energiza y motiva a los demás", "Destaca en entornos dinámicos"], recommendations: ["Asume roles de liderazgo en 2026", "Comparte tu pasión en charlas o presentaciones", "Enfoca tu energía en nuevas y audaces aventuras"] },
            forestGreen: { name: "Verde Bosque", subtitle: "Armonizador Equilibrado", keywords: ["Equilibrado", "Estable", "Pacífico"], description: "Tu aura fluye con una energía natural y armoniosa. Como un bosque, brindas refugio y equilibrio a quienes te rodean. Sabes bien que el verdadero poder viene de la paz y la conexión con la naturaleza.", strengths: ["Capacidad excepcional para crear armonía", "Presencia calmada y estable", "Vínculo profundo con la naturaleza"], recommendations: ["Crea rutinas equilibradas en 2026", "Pasa tiempo en la naturaleza regularmente", "Ayuda a otros a encontrar su centro interior"] },
            softPink: { name: "Rosa Suave", subtitle: "Sanador Compasivo", keywords: ["Empático", "Protector", "Adorable"], description: "Tu aura brilla con una energía suave y sanadora. Posees una gran empatía que hace que los demás se sientan comprendidos y cuidados. Tu sola presencia es una forma de sanación.", strengths: ["Alta inteligencia emocional (EQ)", "Capacidad natural para consolar y sanar", "Crea espacios seguros para mostrar vulnerabilidad"], recommendations: ["Participa en actividades de voluntariado", "Cuida a los demás pero pon límites saludables", "Practica un autocuidado dedicado para ti mismo"] },
            midnightBlack: { name: "Negro Medianoche", subtitle: "Pensador Profundo", keywords: ["Introspectivo", "Sabio", "Profundo"], description: "Tu aura guarda la profundidad de la medianoche, donde brotan las grandes visiones. Buscas el significado más allá de la superficie, y tu actitud reflexiva revela verdades que otros pasan por alto.", strengths: ["Capacidad de pensamiento filosófico profundo", "Encuentra conexiones que otros ignoran", "Sabiduría que nace de la reflexión profunda"], recommendations: ["Comparte tus visiones escribiendo", "Asegura tiempo para la soledad y la reflexión", "Explora campos como la filosofía o la psicología"] }
        },
        footer: { privacy: "Política de Privacidad", contact: "Contacto" },
        seo: { learnMore: "✨ Saber más sobre el test", title: "¿Por qué hacer este test?", description: "Usa un algoritmo que refleja las tendencias psicológicas de 2026.", item1: "<strong>Tendencias 2026:</strong> Descubre tu resonancia.", item2: "<strong>Insights:</strong> Consejos prácticos.", item3: "<strong>Algoritmo:</strong> Actualizado para 2026." }
    },
    pt: {
        meta: { title: "Qual é a sua Cor de Aura 2026?", description: "Descubra a sua cor de energia para 2026 através de uma análise de personalidade baseada em psicologia!" },
        shareMessage: "Minha cor de aura 2026 é [COLOR]! ✨ Descubra a sua agora!",
        linkCopied: "Link copiado!", canvasTitle: "Minha Aura 2026", back: "Voltar",
        home: { title: "Teste de Aura 2026", subtitle: "Descubra sua cor de energia através de uma análise de personalidade baseada em psicologia", startButton: "Começar Teste", info: "⏱️ 2 min | 📝 15 perguntas | 🎨 6 cores" },
        questions: [
            { q: "Na manhã de 2026, qual o seu primeiro pensamento ao começar o dia?", a: ["Quais metas vou alcançar hoje?", "Espero que hoje seja um dia calmo e tranquilo", "Que coisas emocionantes vão acontecer hoje?", "Preciso de tempo para recarregar sozinho"] },
            { q: "Como você lida com o estresse?", a: ["Analiso o problema logicamente para resolver", "Converso com pessoas próximas para desabafar", "Mergulho em atividades criativas e esqueço o estresse", "Passo um tempo sozinho para organizar os pensamentos"] },
            { q: "Qual o seu fim de semana ideal em 2026?", a: ["Planejar e executar projetos pessoais", "Passar tempo de qualidade com quem amo", "Explorar lugares novos e curtir a aventura", "Descansar calmamente lendo ou refletindo"] },
            { q: "Ao tomar decisões importantes, qual valor você prioriza?", a: ["Bases lógicas e resultados práticos", "O impacto da decisão nos sentimentos alheios", "Minha intuição e grande paixão", "Sabedoria após profunda reflexão"] },
            { q: "Como costuma ser o seu nível de energia?", a: ["Constante e com alta concentração", "Caloroso e preocupado com os outros", "Alto, vibrante e cheio de vitalidade", "Calmo e observando meu interior"] },
            { q: "Quando está em grupo, você...?", a: ["Observa a situação e age estrategicamente", "Conecta-se emocionalmente com as pessoas", "Lidera o ambiente e traz vitalidade", "Curte conversas profundas com poucos"] },
            { q: "Qual o seu maior motor para agir?", a: ["O prazer de atingir metas claras", "A satisfação de ajudar e criar mudanças", "O gosto de criar e inovar coisas novas", "Compreender as verdades essenciais do mundo"] },
            { q: "Diante de um desafio difícil, qual o seu estilo?", a: ["Faço um plano minucioso e estratégico", "Busco conselho e apoio ao meu redor", "Lanço-me com confiança e entusiasmo", "Tomo tempo para entender a causa raiz"] },
            { q: "Como os outros descrevem a sua imagem?", a: ["Pessoa confiável e organizada", "Pessoa calorosa e com grande empatia", "Pessoa cheia de energia e inspiradora", "Pessoa sábia e de pensamento profundo"] },
            { q: "Em qual ambiente você trabalha com mais eficiência?", a: ["Ambiente com metas claras e estruturado", "Ambiente caloroso de ajuda mútua", "Ambiente dinâmico e de mudanças rápidas", "Ambiente silencioso onde posso focar sozinho"] },
            { q: "Perante uma mudança repentina, você...?", a: ["Faço um plano rigoroso para me adaptar", "Observo primeiro como os outros se sentem", "Vejo como uma nova oportunidade com alegria", "Penso no significado profundo da mudança"] },
            { q: "De que forma você expressa sua criatividade?", a: ["Criando estratégias para problemas complexos", "Conectando-se profundamente e ajudando outros", "Artes, música ou teatro", "Escrevendo, filosofia ou meditação"] },
            { q: "No final de 2026, como você quer se sentir?", a: ["Realização por grandes sucessos", "Plenitude por ter dado e recebido muito amor", "Satisfação de ter vivido cada momento", "Tranquilidade por ter ficado mais sábio"] },
            { q: "O que a natureza significa para você?", a: ["Lugar para apreciar a ordem e harmonia", "Onde me sinto mais conectado com o mundo", "Fonte de nova vitalidade e inspiração", "Espaço de reflexão para olhar para mim mesmo"] },
            { q: "Quando vê alguém que precisa de ajuda, você...?", a: ["Busca uma solução prática que sirva", "Oferece empatia e consolo emocional", "Traz vitalidade com energia positiva", "Compartilha conselhos sábios e visão"] }
        ],
        loading: { analyzing: "Analisando sua aura...", step1: "Extraindo padrões...", step2: "Mapeando frequências...", step3: "Revelando sua aura 2026..." },
        result: { aboutTitle: "Sua Aura", strengthsTitle: "Seus Pontos Fortes", recommendationsTitle: "Dicas para 2026", downloadButton: "📸 Salvar Imagem", shareButton: "🔗 Partilhar", retryButton: "🔄 De novo", exploreTitle: "Explorar todas" },
        colors: {
            coolBlue: { name: "Azul Frio", subtitle: "Estrategista Calmo", keywords: ["Estratégico", "Calmo", "Confiável"], description: "Sua aura emana uma energia serena e organizada. Você aborda a vida com lógica e clareza. Em 2026, sua calma será sua força.", strengths: ["Análise minuciosa", "Calma sob pressão", "Cria ordem"], recommendations: ["Lidere planejamentos", "Compartilhe insights", "Equilibre lógica e criação"] },
            vampPurple: { name: "Púrpura Vamp", subtitle: "Criador Misterioso", keywords: ["Misterioso", "Criativo", "Intenso"], description: "Sua aura tem energia fascinante. Você vê beleza no escuro e profundidade no complexo.", strengths: ["Visão criativa", "Flexibilidade", "Presença magnética"], recommendations: ["Assuma seu estilo", "Mostre sua arte", "Explore o dramático"] },
            solarGold: { name: "Ouro Solar", subtitle: "Líder Radiante", keywords: ["Vibrante", "Inspirador", "Seguro"], description: "Sua aura brilha como o sol. Seu otimismo faz de você um líder natural.", strengths: ["Carisma", "Motiva os outros", "Foca no dinâmico"], recommendations: ["Lidere em 2026", "Compartilhe paixão", "Tente novas aventuras"] },
            forestGreen: { name: "Verde Floresta", subtitle: "Harmonizador Equilibrado", keywords: ["Equilibrado", "Estável", "Pacífico"], description: "Sua aura flui com harmonia. Como uma floresta, você traz equilíbrio.", strengths: ["Cria harmonia", "Presença estável", "Ligação com a natureza"], recommendations: ["Crie rotinas", "Vá à natureza", "Ajude outros no centro"] },
            softPink: { name: "Rosa Suave", subtitle: "Curador Compassivo", keywords: ["Empático", "Cuidador", "Amável"], description: "Sua aura brilha com cura. Sua empatia faz os outros se sentirem cuidados.", strengths: ["Inteligência emocional", "Consolo natural", "Cria segurança"], recommendations: ["Faça voluntariado", "Ponha limites", "Pratique autocuidado"] },
            midnightBlack: { name: "Preto Meia-noite", subtitle: "Pensador Profundo", keywords: ["Introspectivo", "Sábio", "Profundo"], description: "Sua aura tem a profundidade da noite. Você busca significados além do óbvio.", strengths: ["Pensamento filosófico", "Vê conexões", "Sabedoria reflexiva"], recommendations: ["Escreva insights", "Tenha tempo só", "Estude filosofia"] }
        },
        footer: { privacy: "Privacidade", contact: "Contato" },
        seo: { learnMore: "✨ Saiba mais", title: "Por que fazer?", description: "Reflete tendências de 2026.", item1: "<strong>2026:</strong> Descubra sua cor.", item2: "<strong>Dicas:</strong> Conselhos práticos.", item3: "<strong>Novo:</strong> Tendências sociais." }
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
    // 질문 화면이면 현재 질문 갱신
    if (typeof displayQuestion === 'function' && document.getElementById('question-screen').classList.contains('active')) {
        displayQuestion();
    }
    // 결과 화면이면 캔버스 및 탭 갱신
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
            if (key.startsWith('seo.item') || key === 'seo.learnMore') el.innerHTML = val;
            else el.textContent = val;
        }
    });

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
        }
    }

    // 메타 데이터 및 OG 실시간 동기화
    const meta = data.meta;
    if (meta) {
        document.title = "2026 Aura Color Test - " + meta.title;
        updateMetaTag('property', 'og:title', meta.title);
        updateMetaTag('property', 'og:description', meta.description);
        updateMetaTag('name', 'title', "2026 Aura Color Test - " + meta.title);
        updateMetaTag('name', 'description', meta.description);
        updateMetaTag('property', 'og:url', window.location.href);
    }
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
