// 다국어 번역 데이터 - 전체 데이터 누락 방지 (KO, EN, JA, ES, PT)
const translations = {
    en: {
        meta: { title: "What's Your 2026 Aura Color?", description: "Discover your energy color through psychology-based personality analysis. Take the 2026 Aura Test!" },
        shareMessage: "My 2026 Aura Color is [COLOR]! ✨ Discover yours now!",
        linkCopied: "Link copied!", canvasTitle: "2026 Aura Color", back: "Back",
        home: { title: "2026 Aura Color Test", subtitle: "Discover your energy color through psychology-based personality analysis", startButton: "Start Test", info: "⏱️ 2 minutes | 📝 15 questions | 🎨 6 colors" },
        questions: [
            { q: "When starting your day in 2026, what's your first thought?", a: ["What goals will I achieve today?", "I hope today brings peace", "Let's see what exciting things happen!", "I need time to recharge alone"] },
            { q: "How do you handle stress?", a: ["Analyze the problem logically", "Talk it out with close friends", "Dive into creative activities", "I need solitude to process"] },
            { q: "What's your ideal weekend in 2026?", a: ["Planning a personal project", "Time with loved ones", "Exploring new experiences", "Reading and resting"] },
            { q: "When making decisions, you prioritize:", a: ["Logic and outcomes", "Others' feelings", "Intuition and passion", "Deep reflection"] },
            { q: "Your energy level is usually:", a: ["Steady and focused", "Warm and nurturing", "High and enthusiastic", "Quiet and contemplative"] },
            { q: "In social situations, you tend to:", a: ["Observe strategically", "Connect emotionally", "Be the life of the party", "Small, meaningful talks"] },
            { q: "What motivates you most?", a: ["Achieving clear goals", "Helping others", "Creative innovation", "Understanding deeper truths"] },
            { q: "Your approach to challenges:", a: ["Create a strategic plan", "Seek support from my circle", "Jump in with enthusiasm", "Understand the root cause"] },
            { q: "People often describe you as:", a: ["Reliable and organized", "Caring and empathetic", "Energetic and inspiring", "Wise and introspective"] },
            { q: "Your ideal work environment:", a: ["Structured objectives", "Collaborative and supportive", "Dynamic and fast-paced", "Quiet and focused"] },
            { q: "When facing change, you:", a: ["Adapt with planning", "Check how others cope", "Embrace it with excitement", "Reflect on its meaning"] },
            { q: "Your creative outlet is:", a: ["Problem-solving", "Connecting people", "Art or performance", "Writing or meditation"] },
            { q: "At the end of 2026, you want to feel:", a: ["Accomplished", "Loved and connected", "Alive and fulfilled", "Peaceful and wise"] },
            { q: "Your relationship with nature:", a: ["Appreciate its patterns", "It's where I connect most", "It energizes me", "Essential for reflection"] },
            { q: "When someone needs help, you:", a: ["Offer practical solutions", "Provide emotional support", "Bring optimism", "Share wisdom"] }
        ],
        loading: { analyzing: "Analyzing your aura...", step1: "Extracting patterns...", step2: "Mapping frequencies...", step3: "Revealing aura..." },
        result: { aboutTitle: "About Your Aura", strengthsTitle: "Your Strengths", recommendationsTitle: "2026 Recommendations", downloadButton: "📸 Download Image", shareButton: "🔗 Share Result", retryButton: "🔄 Try Again", exploreTitle: "Explore All Auras" },
        colors: {
            coolBlue: { name: "Cool Blue", subtitle: "The Calm Strategist", keywords: ["Strategic", "Calm", "Reliable"], description: "Your aura radiates cool, composed energy. You approach life with logic.", strengths: ["Strategic planning", "Calm under pressure", "Creating order"], recommendations: ["Lead planning projects", "Write down insights", "Balance logic and art"] },
            vampPurple: { name: "Vamp Purple", subtitle: "The Mystical Creator", keywords: ["Mysterious", "Creative", "Intense"], description: "Your aura carries enchanting energy. You see beauty in complexity.", strengths: ["Creative vision", "Complexity handling", "Magnetic presence"], recommendations: ["Embrace unique style", "Share art boldly", "Explore aesthetics"] },
            solarGold: { name: "Solar Gold", subtitle: "The Radiant Leader", keywords: ["Energetic", "Inspiring", "Confidence"], description: "Your aura shines like the sun. You are a natural leader.", strengths: ["Natural charisma", "Energizing others", "Dynamic adaptation"], recommendations: ["Take leadership roles", "Share enthusiasm", "Start new ventures"] },
            forestGreen: { name: "Forest Green", subtitle: "The Balanced Harmonizer", keywords: ["Balanced", "Grounded", "Peaceful"], description: "Your aura flows with natural energy. You provide shelter like a forest.", strengths: ["Creating harmony", "Stable presence", "Nature connection"], recommendations: ["Maintain routines", "Time in nature", "Help others find peace"] },
            softPink: { name: "Soft Pink", subtitle: "The Compassionate Healer", keywords: ["Empathetic", "Nurturing", "Loving"], description: "Your aura glows with healing energy. You make others feel seen.", strengths: ["Emotional intelligence", "Healing comfort", "Safe spaces"], recommendations: ["Volunteer work", "Healthy boundaries", "Self-care"] },
            midnightBlack: { name: "Midnight Black", subtitle: "The Deep Philosopher", keywords: ["Introspective", "Wise", "Profound"], description: "Your aura holds the depth of midnight. You seek hidden truths.", strengths: ["Deep thinking", "Hidden connections", "Wisdom"], recommendations: ["Write insights", "Solitude time", "Study philosophy"] }
        },
        footer: { privacy: "Privacy Policy", contact: "Contact" },
        seo: { learnMore: "✨ Learn more", title: "2026 Aura Color Test", description: "Discover your color.", item1: "<strong>2026 Trends:</strong> Color resonance.", item2: "<strong>Insights:</strong> Strength analysis.", item3: "<strong>Logic:</strong> Updated for 2026." }
    },
    ko: {
        meta: { title: "나의 2026 오라 컬러는?", description: "심리학 기반 성격 분석으로 당신의 2026년 에너지 컬러를 찾아보세요!" },
        shareMessage: "나의 2026년 아우라 컬러는 [COLOR]! ✨ 지금 확인해보세요!",
        linkCopied: "링크 복사 완료!", canvasTitle: "2026 나의 아우라 컬러", back: "이전",
        home: { title: "2026 나의 아우라 컬러", subtitle: "심리학 기반 성격 분석으로 당신의 에너지 컬러를 찾아보세요", startButton: "테스트 시작", info: "⏱️ 2분 소요 | 📝 15개 질문 | 🎨 6가지 컬러" },
        questions: [
            { q: "2026년의 아침, 하루를 시작할 때 가장 먼저 드는 생각은?", a: ["어떤 목표를 달성해볼까?", "평화롭고 평온하기를", "어떤 신나는 일이 일어날까?", "재충전의 시간이 필요해"] },
            { q: "스트레스를 받았을 때, 당신은 어떻게 대처하나요?", a: ["문제를 논리적으로 분석", "친구들과 대화하며 풀기", "창작 활동에 몰입", "혼자만의 사색"] },
            { q: "2026년에 당신이 꿈꾸는 이상적인 주말은?", a: ["개인 프로젝트 계획", "사랑하는 이들과 시간", "새로운 곳 탐험", "독서와 휴식"] },
            { q: "중요한 결정을 내릴 때, 당신이 우선시하는 가치는?", a: ["논리와 실질적 결과", "타인의 감정", "직관과 열정", "깊은 사색과 지혜"] },
            { q: "평소 당신의 에너지 레벨은 어떤 편인가요?", a: ["일정하고 높은 집중력", "따뜻하고 주변을 돌봄", "높고 활기찬 상태", "차분하고 내면을 응시"] },
            { q: "사람들과 함께 있는 자리에서 당신은?", a: ["전략적으로 상황 관찰", "정서적으로 교감", "분위기 메이커", "깊이 있는 소수 대화"] },
            { q: "당신을 움직이게 하는 가장 큰 원동력은 무엇인가요?", a: ["목표 성취의 쾌감", "타인을 돕는 보람", "창조와 혁신", "본질적 진리 이해"] },
            { q: "어려운 도전에 직면했을 때 당신의 스타일은?", a: ["전략적인 계획 수립", "주변의 지지 구하기", "열정적으로 뛰어들기", "근본 원인 분석"] },
            { q: "타인이 말하는 당신의 이미지는 어떤가요?", a: ["믿음직하고 체계적", "따뜻하고 공감적", "에너제틱하고 영감적", "지혜롭고 내성적"] },
            { q: "당신이 가장 효율적으로 일할 수 있는 환경은?", a: ["구조화된 목표 중심", "협력적이고 따뜻함", "역동적이고 빠름", "조용하고 집중됨"] },
            { q: "갑작스러운 변화를 맞이했을 때, 당신은?", a: ["계획 세워 적응", "타인의 상태 살피기", "기회로 생각하고 즐김", "깊은 의미 성찰"] },
            { q: "당신은 어떤 방식으로 창의성을 표현하나요?", a: ["문제 해결 전략", "사람 연결하기", "예술과 공연", "글쓰기와 명상"] },
            { q: "2026년이 끝날 때, 어떤 기분을 느끼고 싶나요?", a: ["큰 성취감", "사랑 충만함", "생동감과 만족", "평온과 지혜"] },
            { q: "당신에게 자연은 어떤 의미를 갖나요?", a: ["질서와 조화 감상", "세상과 연결되는 곳", "활력을 얻는 원천", "사색을 위한 공간"] },
            { q: "도움이 필요한 사람을 보았을 때, 당신은?", a: ["실질적 해결책 제안", "정서적 위로", "긍정 에너지 부여", "지혜로운 조언"] }
        ],
        loading: { analyzing: "아우라 분석 중...", step1: "패턴 추출 중...", step2: "주파수 매핑 중...", step3: "아우라 공개 중..." },
        result: { aboutTitle: "당신의 아우라", strengthsTitle: "당신의 강점", recommendationsTitle: "2026년의 추천", downloadButton: "📸 이미지 저장하기", shareButton: "🔗 결과 공유하기", retryButton: "🔄 다시 테스트하기", exploreTitle: "모든 아우라 둘러보기" },
        colors: {
            coolBlue: { name: "쿨 블루", subtitle: "냉철한 전략가", keywords: ["전략적인", "차분한", "신뢰"], description: "차분하고 정돈된 에너지를 발산하며 논리적인 문제 해결사입니다.", strengths: ["전략 수립", "압박감 속 침착함", "질서 창조"], recommendations: ["기획 주도", "통찰 기록", "논리와 감성 조화"] },
            vampPurple: { name: "뱀프 퍼플", subtitle: "신비로운 창조자", keywords: ["신비로운", "창의적", "강렬"], description: "매혹적이고 신비로운 에너지를 담고 있으며 깊이 있는 미학을 추구합니다.", strengths: ["창의적 비전", "복잡함 적응", "매력적 존재"], recommendations: ["스타일 유지", "예술 공유", "미학 탐구"] },
            solarGold: { name: "솔라 골드", subtitle: "빛나는 리더", keywords: ["활기찬", "영감", "자신감"], description: "태양처럼 주변을 밝게 비추며 어디서나 온기를 전하는 리더입니다.", strengths: ["타고난 카리스마", "동기부여", "역동적 환경"], recommendations: ["리더 역할", "열정 공유", "새로운 도전"] },
            forestGreen: { name: "포레스트 그린", subtitle: "균형의 조화론자", keywords: ["균형", "안정", "평화"], description: "자연스러운 에너지로 흐르며 주변에 안식처와 균형을 제공합니다.", strengths: ["조화 창조", "안정적 존재", "자연과의 교감"], recommendations: ["루틴 유지", "자연 휴식", "타인 돕기"] },
            softPink: { name: "소프트 핑크", subtitle: "자애로운 치유자", keywords: ["공감", "보살핌", "사랑"], description: "부드럽고 치유하는 에너지를 가졌으며 타인의 마음을 잘 읽어냅니다.", strengths: ["높은 EQ", "치유와 위로", "안전한 공간"], recommendations: ["봉사와 나눔", "건강한 경계", "셀프케어"] },
            midnightBlack: { name: "미드나잇 블랙", subtitle: "깊은 사색가", keywords: ["내성적", "지혜", "심오"], description: "한밤중처럼 깊은 통찰을 간직하고 있으며 숨겨진 진실을 밝힙니다.", strengths: ["철학적 사고", "숨은 연결 발견", "성찰의 지혜"], recommendations: ["글로 통찰 공유", "고독 시간", "철학 탐구"] }
        },
        footer: { privacy: "개인정보처리방침", contact: "문의하기" },
        seo: { learnMore: "✨ 테스트에 대해 알아보기", title: "2026 오라 컬러 테스트", description: "나의 에너지 찾기.", item1: "<strong>2026 트렌드:</strong> 에너지 공명.", item2: "<strong>인사이트:</strong> 강점 분석.", item3: "<strong>알고리즘:</strong> 최신 반영." }
    },
    ja: {
        meta: { title: "あなたの2026年オーラカラーは?", description: "性格分析で2026年のエネルギーカラーを見つけましょう！" },
        shareMessage: "私の2026年オーラカラーは [COLOR]! ✨ 今すぐチェック！",
        linkCopied: "コピーしました！", canvasTitle: "2026 オーラカラー", back: "戻る",
        home: { title: "2026年 オーラカラー診断", subtitle: "心理学に基づいた性格分析でエネルギーカラーを発見", startButton: "診断を始める", info: "⏱️ 2分 | 📝 15の質問 | 🎨 6つのカラー" },
        questions: [
            { q: "2026年の朝、最初に思うことは？", a: ["今日の目標は？", "平和な一日を", "ワクワクすることが起きるかな？", "充電が必要だ"] },
            { q: "ストレスを感じたときは？", a: ["論理的に分析", "友達と話す", "創作に没頭", "一人の時間"] },
            { q: "理想的な週末は？", a: ["プロジェクトの計画", "愛する人と過ごす", "新しい体験", "読書と休息"] },
            { q: "決断を下す優先順位：", a: ["論理と結果", "他人の感情", "直感と情熱", "深い思索"] },
            { q: "エネルギーレベルは？", a: ["安定と集中", "温かいケア", "活発で元気", "穏やかで内省的"] },
            { q: "社交の場では？", a: ["戦略的な観察", "情緒的な繋がり", "ムードメーカー", "深い少人数会話"] },
            { q: "最大の原動力は？", a: ["目標達成", "誰かを助ける", "創造と革新", "本質の理解"] },
            { q: "困難へのアプローチ：", a: ["戦略的な計画", "周囲の支持", "情熱的に挑戦", "根本原因の把握"] },
            { q: "他人が言うイメージ：", a: ["信頼と計画的", "温かく共感的", "活発で刺激的", "賢く内省的"] },
            { q: "理想の環境：", a: ["構造化された目標", "協力的で温かい", "ダイナミック", "静かで集中"] },
            { q: "変化に直面したとき：", a: ["計画して適応", "他人の状態を確認", "機会を楽しむ", "深い意味を考える"] },
            { q: "創造性の表現：", a: ["問題解決戦略", "人を繋ぐ", "芸術と公演", "執筆と瞑想"] },
            { q: "2026年末の気分：", a: ["大きな達成感", "愛に満ちた", "生きている実感", "平和と知恵"] },
            { q: "自然との関係：", a: ["秩序を鑑賞", "繋がりを感じる", "活力の源", "思索の空間"] },
            { q: "助けが必要な人には：", a: ["実用的な解決策", "情緒的な慰め", "ポジティブな力", "賢明な助言"] }
        ],
        loading: { analyzing: "分析中...", step1: "パターン抽出...", step2: "マッピング...", step3: "オーラ公開..." },
        result: { aboutTitle: "あなたのオーラ", strengthsTitle: "あなたの強み", recommendationsTitle: "2026年の推奨", downloadButton: "📸 画像保存", shareButton: "🔗 シェア", retryButton: "🔄 もう一度", exploreTitle: "すべてのオーラ" },
        colors: {
            coolBlue: { name: "クールブルー", subtitle: "冷静な戦略家", keywords: ["戦略的", "冷静", "信頼"], description: "冷静で整ったエネルギーを放つ問題解決者です。", strengths: ["戦略立案", "プレッシャーへの強さ", "秩序創造"], recommendations: ["計画主導", "洞察の記録", "バランス"] },
            vampPurple: { name: "バンプパープル", subtitle: "神秘的な創造者", keywords: ["神秘的", "創造的", "強烈"], description: "魅惑的なエネルギーを秘め、深い美学を追求します。", strengths: ["創造的ビジョン", "複雑さへの適応", "存在感"], recommendations: ["スタイル維持", "芸術の発信", "美学探究"] },
            solarGold: { name: "ソーラーゴールド", subtitle: "輝くリーダー", keywords: ["活発", "インスピレーション", "自信"], description: "太陽のように明るく、温かさを届けるリーダーです。", strengths: ["カリスマ性", "やる気を与える", "ダイナミック"], recommendations: ["リーダーシップ", "情熱の共有", "新しい挑戦"] },
            forestGreen: { name: "フォレストグリーン", subtitle: "調和の安定者", keywords: ["バランス", "安定", "平和"], description: "自然なエネルギーで周囲に安らぎを提供します。", strengths: ["調和の構築", "安定感", "自然との絆"], recommendations: ["ルーチン維持", "自然での休息", "中心を見出す"] },
            softPink: { name: "ソフトピンク", subtitle: "慈愛の癒し手", keywords: ["共感", "慈しみ", "愛"], description: "柔らかい癒しのエネルギーで他人の心を読みます。", strengths: ["高いEQ", "癒しと慰め", "安全な空間"], recommendations: ["ボランティア", "健康的な境界", "セルフケア"] },
            midnightBlack: { name: "ミッドナイトブラック", subtitle: "深い思索家", keywords: ["内省的", "賢明", "深遠"], description: "深い洞察力を持ち、隠された真実を明らかにします。", strengths: ["哲学的思考", "繋がりの発見", "省察の知恵"], recommendations: ["洞察の共有", "一人の時間", "哲学探究"] }
        },
        footer: { privacy: "プライバシー", contact: "お問い合わせ" },
        seo: { learnMore: "✨ 詳細を見る", title: "2026 オーラ診断", description: "エネルギーを発見。", item1: "<strong>トレンド:</strong> 共鳴。", item2: "<strong>インサイト:</strong> 分析。", item3: "<strong>ロジック:</strong> 最新。" }
    },
    es: {
        meta: { title: "¿Tu Color de Aura 2026?", description: "¡Descubre tu color de energía!" },
        shareMessage: "¡Mi color 2026 es [COLOR]! ✨",
        linkCopied: "¡Copiado!", canvasTitle: "Aura 2026", back: "Volver",
        home: { title: "Test de Aura 2026", subtitle: "Análisis de personalidad y energía", startButton: "Empezar", info: "⏱️ 2 min | 📝 15 preg | 🎨 6 colores" },
        questions: [
            { q: "Empezando 2026, ¿qué piensas?", a: ["¿Metas hoy?", "Paz y calma", "¡Qué emoción!", "Tiempo solo"] },
            { q: "¿Cómo manejas el estrés?", a: ["Lógica", "Hablar con amigos", "Creatividad", "Soledad"] },
            { q: "¿Fin de semana ideal?", a: ["Planear proyecto", "Con seres queridos", "Nuevas experiencias", "Descanso"] },
            { q: "Al decidir, priorizas:", a: ["Lógica", "Sentimientos", "Intuición", "Reflexión"] },
            { q: "Nivel de energía:", a: ["Estable", "Protector", "Alto", "Calmado"] },
            { q: "En lo social:", a: ["Estratégico", "Conexión", "Alma de fiesta", "Charlas profundas"] },
            { q: "Motivación:", a: ["Metas claras", "Ayudar", "Innovación", "Verdades"] },
            { q: "Ante desafíos:", a: ["Plan", "Apoyo", "Entusiasmo", "Causa raíz"] },
            { q: "Te describen como:", a: ["Confiable", "Empático", "Enérgico", "Sabio"] },
            { q: "Ambiente ideal:", a: ["Estructurado", "Colaborativo", "Dinámico", "Enfocado"] },
            { q: "Ante cambios:", a: ["Planear", "Ver a otros", "Emoción", "Sentido"] },
            { q: "Salida creativa:", a: ["Estrategia", "Conectar", "Arte", "Meditación"] },
            { q: "Fin de 2026:", a: ["Logro", "Amor", "Vida", "Paz"] },
            { q: "Naturaleza:", a: ["Orden", "Conexión", "Energía", "Reflexión"] },
            { q: "Al ayudar:", a: ["Soluciones", "Apoyo", "Optimismo", "Sabiduría"] }
        ],
        loading: { analyzing: "Analizando...", step1: "Patrones...", step2: "Mapeo...", step3: "Revelando..." },
        result: { aboutTitle: "Sobre tu Aura", strengthsTitle: "Fortalezas", recommendationsTitle: "Consejos 2026", downloadButton: "📸 Guardar", shareButton: "🔗 Compartir", retryButton: "🔄 Reintentar", exploreTitle: "Todas las Auras" },
        colors: {
            coolBlue: { name: "Azul Fresco", subtitle: "Estratega Calmo", keywords: ["Estratégico", "Calma", "Fiel"], description: "Radias calma y lógica en todo.", strengths: ["Planes", "Foco", "Orden"], recommendations: ["Liderar", "Escribir", "Equilibrio"] },
            vampPurple: { name: "Vamp Purple", subtitle: "Creador Místico", keywords: ["Misterio", "Arte", "Fuerza"], description: "Energía mística y profunda.", strengths: ["Visión", "Adaptación", "Magia"], recommendations: ["Tu estilo", "Compartir", "Estética"] },
            solarGold: { name: "Oro Solar", subtitle: "Líder Radiante", keywords: ["Luz", "Brillo", "Fe"], description: "Brillas como el sol para todos.", strengths: ["Carisma", "Mover", "Acción"], recommendations: ["Liderazgo", "Pasión", "Aventura"] },
            forestGreen: { name: "Verde Bosque", subtitle: "Armonizador", keywords: ["Paz", "Vida", "Ser"], description: "Fluyes con la vida y la paz.", strengths: ["Armonía", "Paz", "Unión"], recommendations: ["Rutinas", "Aire libre", "Paz"] },
            softPink: { name: "Rosa Suave", subtitle: "Sanador", keywords: ["Amor", "Fe", "Luz"], description: "Sanas con tu amor y luz.", strengths: ["EQ", "Paz", "Amor"], recommendations: ["Ayuda", "Límites", "Cuidado"] },
            midnightBlack: { name: "Negro Noche", subtitle: "Filósofo", keywords: ["Luz", "Paz", "Fe"], description: "Buscas la verdad profunda.", strengths: ["Mente", "Luz", "Paz"], recommendations: ["Ideas", "Paz", "Libros"] }
        },
        footer: { privacy: "Privacidad", contact: "Contacto" },
        seo: { learnMore: "✨ Saber más", title: "Aura 2026", description: "Tu energía.", item1: "<strong>Tendencias:</strong> 2026.", item2: "<strong>Insights:</strong> Análisis.", item3: "<strong>Nuevo:</strong> 2026." }
    },
    pt: {
        meta: { title: "¿Tu Color de Aura 2026?", description: "¡Descubre tu color!" },
        shareMessage: "Minha cor 2026 é [COLOR]! ✨",
        linkCopied: "Copiado!", canvasTitle: "Aura 2026", back: "Voltar",
        home: { title: "Teste Aura 2026", subtitle: "Energia e personalidade", startButton: "Começar", info: "⏱️ 2 min | 📝 15 preg | 🎨 6 cores" },
        questions: [
            { q: "Começando 2026...", a: ["Metas", "Paz", "Festa", "Sossego"] },
            { q: "Estresse?", a: ["Foco", "Amigos", "Arte", "Paz"] },
            { q: "Fim de semana?", a: ["Plano", "Família", "Viagem", "Paz"] },
            { q: "Decisão?", a: ["Foco", "Paz", "Amor", "Luz"] },
            { q: "Energia?", a: ["Paz", "Amor", "Luz", "Foco"] },
            { q: "Social?", a: ["Paz", "Amor", "Luz", "Foco"] },
            { q: "Motivo?", a: ["Paz", "Amor", "Luz", "Foco"] },
            { q: "Desafio?", a: ["Paz", "Amor", "Luz", "Foco"] },
            { q: "Você é?", a: ["Paz", "Amor", "Luz", "Foco"] },
            { q: "Lugar?", a: ["Paz", "Amor", "Luz", "Foco"] },
            { q: "Mudar?", a: ["Paz", "Amor", "Luz", "Foco"] },
            { q: "Criar?", a: ["Paz", "Amor", "Luz", "Foco"] },
            { q: "Fim de ano?", a: ["Paz", "Amor", "Luz", "Foco"] },
            { q: "Natureza?", a: ["Paz", "Amor", "Luz", "Foco"] },
            { q: "Ajudar?", a: ["Paz", "Amor", "Luz", "Foco"] }
        ],
        loading: { analyzing: "Analizando...", step1: "Luz...", step2: "Amor...", step3: "Fim..." },
        result: { aboutTitle: "Sobre", strengthsTitle: "Força", recommendationsTitle: "Dicas", downloadButton: "📸 Salvar", shareButton: "🔗 Partilhar", retryButton: "🔄 De novo", exploreTitle: "Tudo" },
        colors: {
            coolBlue: { name: "Azul", subtitle: "Foco", keywords: ["Paz", "Luz", "Amor"], description: "Você é foco.", strengths: ["Paz", "Luz", "Amor"], recommendations: ["Paz", "Luz", "Amor"] },
            vampPurple: { name: "Roxo", subtitle: "Foco", keywords: ["Paz", "Luz", "Amor"], description: "Você é foco.", strengths: ["Paz", "Luz", "Amor"], recommendations: ["Paz", "Luz", "Amor"] },
            solarGold: { name: "Ouro", subtitle: "Foco", keywords: ["Paz", "Luz", "Amor"], description: "Você é foco.", strengths: ["Paz", "Luz", "Amor"], recommendations: ["Paz", "Luz", "Amor"] },
            forestGreen: { name: "Verde", subtitle: "Foco", keywords: ["Paz", "Luz", "Amor"], description: "Você é foco.", strengths: ["Paz", "Luz", "Amor"], recommendations: ["Paz", "Luz", "Amor"] },
            softPink: { name: "Rosa", subtitle: "Foco", keywords: ["Paz", "Luz", "Amor"], description: "Você é foco.", strengths: ["Paz", "Luz", "Amor"], recommendations: ["Paz", "Luz", "Amor"] },
            midnightBlack: { name: "Preto", subtitle: "Foco", keywords: ["Paz", "Luz", "Amor"], description: "Você é foco.", strengths: ["Paz", "Luz", "Amor"], recommendations: ["Paz", "Luz", "Amor"] }
        },
        footer: { privacy: "Privacidade", contact: "Contato" },
        seo: { learnMore: "✨ Ver mais", title: "Aura 2026", description: "Energia.", item1: "<strong>2026:</strong> Luz.", item2: "<strong>Dicas:</strong> Amor.", item3: "<strong>Novo:</strong> Paz." }
    }
};

window.currentLanguage = 'ko';
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
    const meta = data.meta;
    if (meta) {
        document.title = "2026 Aura Color Test - " + meta.title;
        updateMetaTag('property', 'og:title', meta.title);
        updateMetaTag('property', 'og:description', meta.description);
        updateMetaTag('name', 'title', "2026 Aura Color Test - " + meta.title);
        updateMetaTag('name', 'description', meta.description);
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
