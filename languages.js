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
        home: {
            title: "2026 Aura Color Test",
            subtitle: "Discover your energy color through psychology-based personality analysis",
            startButton: "Start Test",
            info: "⏱️ 2 minutes | 📝 15 questions | 🎨 6 color results"
        },
        questions: [
            {
                q: "When starting your day in 2026, what's your first thought?",
                a: [
                    "What goals will I achieve today?",
                    "I hope today brings peace and calm",
                    "Let's see what exciting things happen!",
                    "I need time to recharge alone"
                ]
            },
            {
                q: "How do you handle stress?",
                a: [
                    "I analyze the problem logically",
                    "I talk it out with close friends",
                    "I dive into creative activities",
                    "I need solitude to process"
                ]
            },
            {
                q: "What's your ideal weekend in 2026?",
                a: [
                    "Planning and executing a personal project",
                    "Spending quality time with loved ones",
                    "Exploring new experiences and adventures",
                    "Reading, reflecting, and resting"
                ]
            },
            {
                q: "When making decisions, you prioritize:",
                a: [
                    "Logic and practical outcomes",
                    "How it affects others' feelings",
                    "Following my intuition and passion",
                    "Deep reflection and wisdom"
                ]
            },
            {
                q: "Your energy level is usually:",
                a: [
                    "Steady and focused",
                    "Warm and nurturing",
                    "High and enthusiastic",
                    "Quiet and contemplative"
                ]
            },
            {
                q: "In social situations, you tend to:",
                a: [
                    "Observe and contribute strategically",
                    "Connect emotionally with everyone",
                    "Be the life of the party",
                    "Prefer small, meaningful conversations"
                ]
            },
            {
                q: "What motivates you most?",
                a: [
                    "Achieving clear, measurable goals",
                    "Helping others and making a difference",
                    "Creative expression and innovation",
                    "Understanding deeper truths"
                ]
            },
            {
                q: "Your approach to challenges:",
                a: [
                    "Create a strategic plan",
                    "Seek support from my circle",
                    "Jump in with enthusiasm",
                    "Take time to understand the root cause"
                ]
            },
            {
                q: "People often describe you as:",
                a: [
                    "Reliable and organized",
                    "Caring and empathetic",
                    "Energetic and inspiring",
                    "Wise and introspective"
                ]
            },
            {
                q: "Your ideal work environment:",
                a: [
                    "Structured with clear objectives",
                    "Collaborative and supportive",
                    "Dynamic and fast-paced",
                    "Quiet and focused"
                ]
            },
            {
                q: "When facing change, you:",
                a: [
                    "Adapt with careful planning",
                    "Check in with how others are coping",
                    "Embrace it with excitement",
                    "Reflect on its deeper meaning"
                ]
            },
            {
                q: "Your creative outlet is:",
                a: [
                    "Problem-solving and strategy",
                    "Connecting and helping people",
                    "Art, music, or performance",
                    "Writing, philosophy, or meditation"
                ]
            },
            {
                q: "At the end of 2026, you want to feel:",
                a: [
                    "Accomplished and successful",
                    "Loved and connected",
                    "Alive and fulfilled",
                    "Peaceful and wise"
                ]
            },
            {
                q: "Your relationship with nature:",
                a: [
                    "I appreciate its order and patterns",
                    "It's where I feel most connected",
                    "It energizes and inspires me",
                    "It's essential for my reflection"
                ]
            },
            {
                q: "When someone needs help, you:",
                a: [
                    "Offer practical solutions",
                    "Provide emotional support",
                    "Bring optimism and energy",
                    "Share wisdom and perspective"
                ]
            }
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
            downloadButton: "📥 Download Image",
            shareButton: "📤 Share Result",
            retryButton: "🔄 Try Again"
        },
        colors: {
            coolBlue: {
                name: "Cool Blue",
                subtitle: "The Calm Strategist",
                keywords: ["Strategic", "Calm", "Reliable"],
                description: "Your aura radiates a cool, composed energy. You approach life with logic and clarity, making you a natural problem-solver. In 2026, your steady presence will be your greatest strength.",
                strengths: [
                    "Excellent at strategic planning and analysis",
                    "Maintains composure under pressure",
                    "Trusted for reliable and thoughtful advice",
                    "Creates order from chaos"
                ],
                recommendations: [
                    "Lead projects that require careful planning",
                    "Share your insights through writing or teaching",
                    "Balance logic with creative exploration",
                    "Create spaces of calm in chaotic environments"
                ]
            },
            vampPurple: {
                name: "Vamp Purple",
                subtitle: "The Mystical Creator",
                keywords: ["Mysterious", "Creative", "Intense"],
                description: "Your aura carries an enchanting, mysterious energy. You see beauty in darkness and depth in complexity. Your creative intensity draws others into your unique world.",
                strengths: [
                    "Deep creative vision and artistic talent",
                    "Comfortable with complexity and nuance",
                    "Magnetic presence that intrigues others",
                    "Transforms darkness into beauty"
                ],
                recommendations: [
                    "Embrace your unique creative style",
                    "Share your art with the world boldly",
                    "Create atmospheric spaces that inspire",
                    "Explore gothic, romantic, or dramatic aesthetics"
                ]
            },
            solarGold: {
                name: "Solar Gold",
                subtitle: "The Radiant Leader",
                keywords: ["Energetic", "Inspiring", "Confident"],
                description: "Your aura shines like the sun, illuminating everything around you. Your infectious energy and optimism make you a natural leader who brings warmth wherever you go.",
                strengths: [
                    "Natural charisma and leadership ability",
                    "Energizes and motivates others",
                    "Optimistic outlook that uplifts teams",
                    "Thrives in dynamic, fast-paced environments"
                ],
                recommendations: [
                    "Take on leadership roles in 2026",
                    "Share your enthusiasm through public speaking",
                    "Surround yourself with ambitious people",
                    "Channel energy into bold new ventures"
                ]
            },
            forestGreen: {
                name: "Forest Green",
                subtitle: "The Balanced Harmonizer",
                keywords: ["Balanced", "Grounded", "Peaceful"],
                description: "Your aura flows with natural, harmonious energy. Like a forest, you provide shelter and balance. You understand that true strength comes from equilibrium and connection to nature.",
                strengths: [
                    "Exceptional at creating harmony and balance",
                    "Grounded and stable presence",
                    "Natural mediator in conflicts",
                    "Deeply connected to nature and rhythms"
                ],
                recommendations: [
                    "Create balanced routines in 2026",
                    "Spend regular time in nature",
                    "Help others find their center",
                    "Explore sustainable and mindful living"
                ]
            },
            softRose: {
                name: "Soft Rose",
                subtitle: "The Compassionate Healer",
                keywords: ["Empathetic", "Nurturing", "Loving"],
                description: "Your aura glows with gentle, healing energy. You possess a rare gift of deep empathy, making others feel truly seen and cared for. Your presence itself is a form of healing.",
                strengths: [
                    "Deep emotional intelligence and empathy",
                    "Natural ability to comfort and heal",
                    "Creates safe spaces for vulnerability",
                    "Sees the best in everyone"
                ],
                recommendations: [
                    "Pursue helping professions or volunteer work",
                    "Set healthy boundaries while caring for others",
                    "Create beauty and warmth in your environment",
                    "Practice self-care as seriously as caring for others"
                ]
            },
            midnightBlack: {
                name: "Midnight Black",
                subtitle: "The Deep Philosopher",
                keywords: ["Introspective", "Wise", "Profound"],
                description: "Your aura holds the depth of midnight, where the greatest insights emerge. You seek meaning beyond the surface, and your contemplative nature reveals truths others miss.",
                strengths: [
                    "Profound philosophical and analytical thinking",
                    "Comfortable with complexity and ambiguity",
                    "Sees connections others overlook",
                    "Wisdom that comes from deep reflection"
                ],
                recommendations: [
                    "Share your insights through writing or teaching",
                    "Create time for solitude and deep thinking",
                    "Explore philosophy, psychology, or spirituality",
                    "Trust your intuition and inner wisdom"
                ]
            }
        },
        footer: {
            privacy: "Privacy Policy",
            contact: "Contact"
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
        home: {
            title: "2026 나의 아우라 컬러",
            subtitle: "심리학 기반 성격 분석으로 당신의 에너지 컬러를 찾아보세요",
            startButton: "테스트 시작",
            info: "⏱️ 2분 소요 | 📝 15개 질문 | 🎨 6가지 컬러"
        },
        questions: [
            {
                q: "2026년 아침, 하루를 시작할 때 가장 먼저 드는 생각은?",
                a: [
                    "오늘은 어떤 목표를 달성할까?",
                    "평화롭고 차분한 하루이길",
                    "오늘은 뭔가 신나는 일이 있을 것 같아!",
                    "혼자만의 시간이 필요해"
                ]
            },
            {
                q: "스트레스를 받을 때 당신은?",
                a: [
                    "문제를 논리적으로 분석한다",
                    "가까운 사람들과 대화한다",
                    "창작 활동에 몰입한다",
                    "혼자만의 시간이 필요하다"
                ]
            },
            {
                q: "2026년 이상적인 주말은?",
                a: [
                    "개인 프로젝트를 계획하고 실행",
                    "사랑하는 사람들과 시간 보내기",
                    "새로운 경험과 모험 탐험",
                    "독서, 사색, 그리고 휴식"
                ]
            },
            {
                q: "결정을 내릴 때 가장 중요한 것은?",
                a: [
                    "논리와 실질적인 결과",
                    "다른 사람의 감정에 미치는 영향",
                    "직관과 열정 따르기",
                    "깊은 성찰과 지혜"
                ]
            },
            {
                q: "당신의 에너지 레벨은 보통?",
                a: [
                    "안정적이고 집중적",
                    "따뜻하고 배려심 있는",
                    "높고 열정적인",
                    "조용하고 사색적인"
                ]
            },
            {
                q: "사회적 상황에서 당신은?",
                a: [
                    "관찰하고 전략적으로 기여",
                    "모두와 감정적으로 연결",
                    "분위기 메이커",
                    "소수와 깊은 대화 선호"
                ]
            },
            {
                q: "당신에게 가장 큰 동기부여는?",
                a: [
                    "명확하고 측정 가능한 목표 달성",
                    "다른 사람 돕고 변화 만들기",
                    "창의적 표현과 혁신",
                    "더 깊은 진리 이해하기"
                ]
            },
            {
                q: "도전에 대한 당신의 접근 방식은?",
                a: [
                    "전략적 계획 수립",
                    "주변 사람들의 지원 구하기",
                    "열정적으로 뛰어들기",
                    "근본 원인 파악에 시간 투자"
                ]
            },
            {
                q: "사람들이 당신을 묘사할 때 자주 하는 말은?",
                a: [
                    "믿을 수 있고 체계적",
                    "배려심 있고 공감력 높음",
                    "에너지 넘치고 영감을 줌",
                    "지혜롭고 내성적"
                ]
            },
            {
                q: "이상적인 업무 환경은?",
                a: [
                    "명확한 목표가 있는 구조화된 환경",
                    "협력적이고 서로 지원하는 환경",
                    "역동적이고 빠른 속도",
                    "조용하고 집중 가능한 환경"
                ]
            },
            {
                q: "변화를 마주할 때, 당신은?",
                a: [
                    "신중한 계획으로 적응",
                    "다른 사람들은 어떻게 대처하는지 확인",
                    "흥분하며 받아들임",
                    "더 깊은 의미 성찰"
                ]
            },
            {
                q: "당신의 창의적 표현 방식은?",
                a: [
                    "문제 해결과 전략",
                    "사람들과 연결하고 돕기",
                    "예술, 음악, 또는 공연",
                    "글쓰기, 철학, 또는 명상"
                ]
            },
            {
                q: "2026년 말, 당신이 느끼고 싶은 감정은?",
                a: [
                    "성취감과 성공",
                    "사랑받고 연결됨",
                    "살아있고 충만함",
                    "평화롭고 현명함"
                ]
            },
            {
                q: "자연과의 관계는?",
                a: [
                    "질서와 패턴을 감상",
                    "가장 연결감을 느끼는 곳",
                    "활력과 영감을 줌",
                    "성찰에 필수적"
                ]
            },
            {
                q: "누군가 도움이 필요할 때, 당신은?",
                a: [
                    "실용적인 해결책 제시",
                    "감정적 지원 제공",
                    "낙관과 에너지 가져옴",
                    "지혜와 관점 공유"
                ]
            }
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
            downloadButton: "📥 이미지 저장",
            shareButton: "📤 결과 공유",
            retryButton: "🔄 다시 하기"
        },
        colors: {
            coolBlue: {
                name: "쿨 블루",
                subtitle: "차분한 전략가",
                keywords: ["전략적", "차분함", "신뢰감"],
                description: "당신의 아우라는 차분하고 침착한 에너지를 발산합니다. 논리와 명확함으로 삶에 접근하여 자연스러운 문제 해결사입니다. 2026년, 당신의 안정적인 존재감이 가장 큰 강점이 될 것입니다.",
                strengths: [
                    "전략적 계획과 분석에 뛰어남",
                    "압박 속에서도 침착함 유지",
                    "신뢰할 수 있고 사려 깊은 조언",
                    "혼돈에서 질서를 창조"
                ],
                recommendations: [
                    "신중한 계획이 필요한 프로젝트 주도",
                    "글쓰기나 교육을 통해 통찰력 공유",
                    "논리와 창의적 탐구의 균형",
                    "혼란한 환경에 평온한 공간 만들기"
                ]
            },
            vampPurple: {
                name: "뱀프 퍼플",
                subtitle: "신비로운 창작자",
                keywords: ["신비로운", "창의적", "강렬한"],
                description: "당신의 아우라는 매혹적이고 신비로운 에너지를 담고 있습니다. 어둠 속에서 아름다움을, 복잡함 속에서 깊이를 봅니다. 당신의 창의적 강렬함은 다른 이들을 독특한 세계로 끌어들입니다.",
                strengths: [
                    "깊은 창의적 비전과 예술적 재능",
                    "복잡함과 뉘앙스에 편안함",
                    "호기심을 자극하는 자기장적 존재감",
                    "어둠을 아름다움으로 변형"
                ],
                recommendations: [
                    "독특한 창의적 스타일 포용",
                    "과감하게 예술 세계와 공유",
                    "영감을 주는 분위기 있는 공간 창조",
                    "고딕, 로맨틱, 드라마틱한 미학 탐구"
                ]
            },
            solarGold: {
                name: "솔라 골드",
                subtitle: "빛나는 리더",
                keywords: ["활력적", "영감주는", "자신감"],
                description: "당신의 아우라는 태양처럼 빛나며 주변 모든 것을 밝힙니다. 전염성 있는 에너지와 낙관주의로 어디를 가든 따뜻함을 가져오는 타고난 리더입니다.",
                strengths: [
                    "타고난 카리스마와 리더십 능력",
                    "다른 이들에게 활력과 동기 부여",
                    "팀을 고양시키는 낙관적 태도",
                    "역동적이고 빠른 환경에서 번성"
                ],
                recommendations: [
                    "2026년 리더십 역할 맡기",
                    "대중 연설을 통해 열정 공유",
                    "야심찬 사람들로 둘러싸기",
                    "에너지를 대담한 새 벤처에 집중"
                ]
            },
            forestGreen: {
                name: "포레스트 그린",
                subtitle: "균형잡힌 조화자",
                keywords: ["균형잡힌", "안정적", "평화로운"],
                description: "당신의 아우라는 자연스럽고 조화로운 에너지로 흐릅니다. 숲처럼, 당신은 피난처와 균형을 제공합니다. 진정한 힘은 평형과 자연과의 연결에서 온다는 것을 이해합니다.",
                strengths: [
                    "조화와 균형 창조에 탁월",
                    "안정적이고 든든한 존재감",
                    "갈등 상황의 자연스러운 중재자",
                    "자연과 리듬에 깊이 연결"
                ],
                recommendations: [
                    "2026년 균형잡힌 루틴 만들기",
                    "정기적으로 자연에서 시간 보내기",
                    "다른 이들이 중심 찾도록 돕기",
                    "지속가능하고 마음챙김 있는 삶 탐구"
                ]
            },
            softRose: {
                name: "소프트 로즈",
                subtitle: "자비로운 치유자",
                keywords: ["공감력", "돌봄", "사랑"],
                description: "당신의 아우라는 부드럽고 치유하는 에너지로 빛납니다. 깊은 공감의 희귀한 재능을 가지고 있어, 다른 이들이 진정으로 보이고 돌봄 받는다고 느끼게 합니다. 당신의 존재 자체가 치유의 형태입니다.",
                strengths: [
                    "깊은 감성 지능과 공감 능력",
                    "위로하고 치유하는 타고난 능력",
                    "취약함을 위한 안전한 공간 창조",
                    "모든 이의 최고를 봄"
                ],
                recommendations: [
                    "도움 직업이나 자원봉사 추구",
                    "다른 이 돌보면서도 건강한 경계 설정",
                    "환경에 아름다움과 따뜻함 창조",
                    "남을 돌보는 만큼 진지하게 자기관리"
                ]
            },
            midnightBlack: {
                name: "미드나잇 블랙",
                subtitle: "깊은 철학자",
                keywords: ["내성적", "지혜로운", "심오한"],
                description: "당신의 아우라는 자정의 깊이를 담고 있으며, 그곳에서 가장 위대한 통찰이 나옵니다. 표면 너머의 의미를 추구하고, 관조적 본성은 다른 이들이 놓치는 진실을 드러냅니다.",
                strengths: [
                    "심오한 철학적이고 분석적 사고",
                    "복잡함과 모호함에 편안함",
                    "다른 이들이 놓치는 연결을 봄",
                    "깊은 성찰에서 나오는 지혜"
                ],
                recommendations: [
                    "글쓰기나 교육을 통해 통찰력 공유",
                    "고독과 깊은 사고를 위한 시간 만들기",
                    "철학, 심리학, 또는 영성 탐구",
                    "직관과 내면의 지혜 신뢰"
                ]
            }
        },
        footer: {
            privacy: "개인정보 처리방침",
            contact: "문의하기"
        }
    },
    ja: {
        meta: {
            title: "あなたの2026年オーラカラーは？",
            description: "心理学に基づいた性格分析で、あなたの2026年のエネルギーカラーを見つけましょう！"
        },
        shareMessage: "私の2026年のオーラカラーは [COLOR]! ✨ あなたのエネルギーカラー도 今すぐチェック！",
        linkCopied: "結果링크가 복사되었습니다! 친구들에게 공유해보세요.",
        canvasTitle: "2026 私のオーラカラー",
        home: {
            title: "2026 オー라カラーテスト",
            subtitle: "心理学に基づいた性格分析であなたのエネルギーカラーを発見",
            startButton: "テスト開始",
            info: "⏱️ 2분 | 📝 15問 | 🎨 6色の結果"
        },
        questions: [
            {
                q: "2026年の朝、一日を始めるとき最初に思うことは？",
                a: [
                    "今日はどんな目標を達成しようか？",
                    "平和で穏やかな一日でありますように",
                    "今日は何かワクワクすることがありそう！",
                    "一人の時間が必要"
                ]
            },
            {
                q: "ストレスを感じたとき、あなたは？",
                a: [
                    "問題を論理적으로 분석한다",
                    "가까운 사람들과 대화한다",
                    "創作活動에 몰입한다",
                    "一人の時間が必要"
                ]
            },
            {
                q: "2026年の理想的な週末은？",
                a: [
                    "個人プロジェクト를 계획하고 실행",
                    "愛하는 사람들과 시간 보내기",
                    "新しい体験과 모험 탐험",
                    "読書, 사색, 그리고 휴식"
                ]
            },
            {
                q: "決断을 내릴 때 가장 중요한 것은?",
                a: [
                    "論理와 실질적인 결과",
                    "他人の感情에 미치는 영향",
                    "直感과 열정 따르기",
                    "深い内省과 지혜"
                ]
            },
            {
                q: "あなたのエネルギーレベル은 보통?",
                a: [
                    "安定して集中的",
                    "溫かく 배려심 있는",
                    "高く熱情的",
                    "靜かで 사색적인"
                ]
            },
            {
                q: "社交的な状況에서 당신은?",
                a: [
                    "観察し 전략적으로 기여",
                    "みんな와 감정적으로 연결",
                    "ムードメーカー",
                    "少数と 깊은 대화 선호"
                ]
            },
            {
                q: "あなたを最も動機づけるものは？",
                a: [
                    "明確で 측정 가능한 목표 달성",
                    "他人을 돕고 변화 만들기",
                    "創造的表現과 혁신",
                    "より深い真理 이해하기"
                ]
            },
            {
                q: "困難에 대한 당신의 접근 방식은?",
                a: [
                    "戦略的計画 수립",
                    "周囲の人々の 지원 구하기",
                    "熱情적으로 뛰어들기",
                    "根本原因 파악에 시간 투자"
                ]
            },
            {
                q: "人々가 당신을 묘사할 때 자주 하는 말은?",
                a: [
                    "信頼できて 체계적",
                    "思いやりがあり共感力 높음",
                    "エネルギッシュで 영감을 줌",
                    "賢明で 내성적"
                ]
            },
            {
                q: "理想的な労働環境은?",
                a: [
                    "明確な目標가 있는 구조화된 환경",
                    "協力적이고 서로 지원하는 환경",
                    "ダイナミックで 빠른 속도",
                    "靜かで 집중 가능한 환경"
                ]
            },
            {
                q: "変化를 마주할 때, 당신은?",
                a: [
                    "愼重한 계획으로 적응",
                    "他の人が 어떻게 대처하는지 확인",
                    "ワクワク하며 받아들임",
                    "より深い意味 성찰"
                ]
            },
            {
                q: "あなたの創造的表現方法은?",
                a: [
                    "問題解決과 전략",
                    "人々와 연결하고 돕기",
                    "芸術, 音楽, 또는 공연",
                    "執筆, 哲学, 또는 명상"
                ]
            },
            {
                q: "2026年末に感じたい感情은?",
                a: [
                    "達成感과 성공",
                    "愛されつながっている",
                    "生きていて 충만함",
                    "平和で 현명함"
                ]
            },
            {
                q: "自然과의 관계는?",
                a: [
                    "秩序와 패턴을 감상",
                    "最もつながりを感じる場所",
                    "活力과 인스피레이션",
                    "内省에 필수적"
                ]
            },
            {
                q: "誰かが助け를 필요로 할 때, 당신은?",
                a: [
                    "実用的な解決策 제시",
                    "感情的サポート 제공",
                    "楽観과 에너지 가져옴",
                    "知恵와 관점 공유"
                ]
            }
        ],
        loading: {
            analyzing: "オーラ分析中...",
            step1: "エネルギーパターン 추출 중...",
            step2: "カラー周波数 매핑 중...",
            step3: "2026オーラ 공개 중..."
        },
        result: {
            aboutTitle: "あなたのオーラについて",
            strengthsTitle: "あなたの強み",
            recommendationsTitle: "2026年の推奨事項",
            downloadButton: "📥 画像保存",
            shareButton: "📤 結果共有",
            retryButton: "🔄 もう一度"
        },
        colors: {
            coolBlue: {
                name: "クールブルー",
                subtitle: "冷静なストラテジスト",
                keywords: ["戦略的", "冷静", "信頼"],
                description: "あなたのオーラは冷静で落ち着いたエネルギーを放っています。論理と明晰さで人生に取り組み, 自然な問題解決者です. 2026年, あなたの安定した存在感が最大の強みになります.",
                strengths: [
                    "戦略的計画と分析에 뛰어남",
                    "プレッシャー下에서도 침착함 유지",
                    "信頼できる 사려 깊은 조언",
                    "混沌から 질서를 창조"
                ],
                recommendations: [
                    "慎重な計画이 필요한 프로젝트 주도",
                    "執筆이나 教育을 통해 통찰력 공유",
                    "論理와 創造的探求의 균형",
                    "混沌とした環境에 평온한 공간 만들기"
                ]
            },
            vampPurple: {
                name: "ヴァンプパープル",
                subtitle: "神秘的なクリエイ터",
                keywords: ["神秘的", "創造的", "強烈"],
                description: "あなたのオーラは魅惑的で神秘的なエネルギーを 담고 있습니다. 暗闇の中に美を, 複雑さの中に深さを 봅니다. あなたの創造的な強烈さ는 他者を あなたの独特な世界로 끌어들입니다.",
                strengths: [
                    "深い創造的비전과 예술적 재능",
                    "複雑さと 뉘앙스에 편안함",
                    "好奇心を刺激하는 자기장적 존재감",
                    "暗闇を 아름다움으로 변형"
                ],
                recommendations: [
                    "独自の創造的 스타일 포용",
                    "Boldly share your art with the world",
                    "インスピレーション을 주는 분위기 있는 공간 창조",
                    "고딕, 로맨틱, 드라마틱한 미학 탐구"
                ]
            },
            solarGold: {
                name: "ソーラーゴールド",
                subtitle: "輝くリーダー",
                keywords: ["エネルギッシュ", "インスパイア", "自信"],
                description: "あなたのオーラは太陽のように輝き, 周囲のすべてを照らします. 感染性のあるエネルギー와 楽観主義로 어디를 가든 温かさを 가져오는 타고난 리더입니다.",
                strengths: [
                    "生まれつきのカリスマ와 리더십 능력",
                    "他者に活力과 동기 부여",
                    "チーム을 고양시키는 낙관적 태도",
                    "ダイナミックで 빠른 환경에서 번성"
                ],
                recommendations: [
                    "2026年に리더십 역할 맡기",
                    "公開スピーチ를 통해 열정 공유",
                    "野心的な人々に 둘러싸기",
                    "エネルギー를 대담한 새 벤처에 집중"
                ]
            },
            forestGreen: {
                name: "フォレストグリーン",
                subtitle: "バランスのとれた調和者",
                keywords: ["バランス", "安定", "平和"],
                description: "あなたのオーラ는 自然で調和のとれたエネルギーで流れています. 森のように, あなた는 避難所와 균형을 제공합니다. 真の強さ는 平衡과 自然와의 연결에서 온다는 것을 이해합니다.",
                strengths: [
                    "調和와 균형 창조에 탁월",
                    "安定した 확고한 존재감",
                    "対立状況의 자연스러운 중재자",
                    "自然과 リズム에 깊이 연결"
                ],
                recommendations: [
                    "2026年にバランスのとれた 루틴 만들기",
                    "定期的に自然で 시간을 보내기",
                    "他者が 중심을 찾도록 돕기",
                    "持続可能で 마인드풀한 生活 탐구"
                ]
            },
            softRose: {
                name: "ソフトローズ",
                subtitle: "慈悲深いヒーラー",
                keywords: ["共感的", "育む", "愛"],
                description: "あなたのオーラ는 優しく癒すエネルギーで輝いています. 深い共感의 稀な才能을 가지고 있어, 他者が 本当に見られ, ケアされていると感じさせます. あなたの存在自体が 癒しの形です.",
                strengths: [
                    "深い感情的知性와 공감 능력",
                    "慰め癒す 타고난 능력",
                    "脆弱性을 위한 안전한 공간 창조",
                    "すべての人の 최고를 봄"
                ],
                recommendations: [
                    "援助職業이나 자원봉사 추구",
                    "他者を ケア하면서도 건강한 경계 설정",
                    "環境에 아름다움과 따뜻함 창조",
                    "他者を ケア하는 것만큼 진지하게 자기관리"
                ]
            },
            midnightBlack: {
                name: "ミッドナイトブラック",
                subtitle: "深い哲学者",
                keywords: ["内省的", "賢明", "深遠"],
                description: "あなたのオーラ는 真夜中の深さを持ち, そこから 가장 위대한 통찰이 나옵니다. 表面を超えた 의미를 구하고, 瞑想的な性質은 他者が 놓치는 真実을 드러냅니다.",
                strengths: [
                    "深遠な哲学的이고 분석적 사고",
                    "複雑さと 曖昧さに 편안함",
                    "他者が 놓치는 연결을 봄",
                    "深い内省에서 나오는 지혜"
                ],
                recommendations: [
                    "執筆이나 교육을 통해 통찰력 공유",
                    "孤独과 깊은 사고를 위한 시간 만들기",
                    "哲学, 心理学, 또는 영성 탐구",
                    "直感과 내면의 지혜 신뢰"
                ]
            }
        },
        footer: {
            privacy: "プライバシーポリシー",
            contact: "お問い合わせ"
        }
    },
    es: {
        meta: {
            title: "¿Cuál es tu Color de Aura 2026?",
            description: "¡Descubre tu color de energía para el 2026 a través del análisis de personalidad basado en psicología!"
        },
        shareMessage: "¡Mi color de aura para 2026 es [COLOR]! ✨ ¡Descubre tu color de energía ahora!",
        linkCopied: "¡Enlace del resultado copiado! Compártelo con tus amigos.",
        canvasTitle: "Tu Aura 2026",
        home: {
            title: "Test de Color de Aura 2026",
            subtitle: "Descubre tu color de energía a través del análisis de personalidad basado en psicología",
            startButton: "Iniciar Test",
            info: "⏱️ 2 minutos | 📝 15 preguntas | 🎨 6 colores"
        },
        questions: [
            {
                q: "Al comenzar tu día en 2026, ¿cuál es tu primer pensamiento?",
                a: [
                    "¿Qué metas lograré hoy?",
                    "Espero que hoy traiga paz y calma",
                    "¡Veamos qué cosas emocionantes suceden!",
                    "Necesito tiempo para recargarme solo"
                ]
            },
            {
                q: "¿Cómo manejas el estrés?",
                a: [
                    "Analizo el problema lógicamente",
                    "Lo hablo con amigos cercanos",
                    "Me sumerjo en actividades creativas",
                    "Necesito soledad para procesarlo"
                ]
            },
            {
                q: "¿Cuál es tu fin de semana ideal en 2026?",
                a: [
                    "Planificar y ejecutar un proyecto personal",
                    "Pasar tiempo de calidad con seres queridos",
                    "Explorar nuevas experiencias y aventuras",
                    "Leer, reflexionar y descansar"
                ]
            },
            {
                q: "Al tomar decisiones, priorizas:",
                a: [
                    "Lógica y resultados prácticos",
                    "Cómo afecta los sentimientos de otros",
                    "Seguir mi intuición y pasión",
                    "Reflexión profunda y sabiduría"
                ]
            },
            {
                q: "Tu nivel de energía suele ser:",
                a: [
                    "Estable y enfocado",
                    "Cálido y nutritivo",
                    "Alto y entusiasta",
                    "Tranquilo y contemplativo"
                ]
            },
            {
                q: "En situaciones sociales, tiendes a:",
                a: [
                    "Observar y contribuir estratégicamente",
                    "Conectar emocionalmente con todos",
                    "Ser el alma de la fiesta",
                    "Preferir conversaciones pequeñas y significativas"
                ]
            },
            {
                q: "¿Qué te motiva más?",
                a: [
                    "Lograr metas claras y medibles",
                    "Ayudar a otros y hacer una diferencia",
                    "Expresión creativa e innovación",
                    "Comprender verdades más profundas"
                ]
            },
            {
                q: "Tu enfoque ante desafíos:",
                a: [
                    "Crear un plan estratégico",
                    "Buscar apoyo de mi círculo",
                    "Saltar con entusiasmo",
                    "Tomar tiempo para entender la causa raíz"
                ]
            },
            {
                q: "La gente a menudo te describe como:",
                a: [
                    "Confiable y organizado",
                    "Cariñoso y empático",
                    "Energético e inspirador",
                    "Sabio e introspectivo"
                ]
            },
            {
                q: "Tu entorno de trabajo ideal:",
                a: [
                    "Estructurado con objetivos claros",
                    "Colaborativo y de apoyo",
                    "Dinámico y de ritmo rápido",
                    "Tranquilo y enfocado"
                ]
            },
            {
                q: "Al enfrentar cambios, tú:",
                a: [
                    "Te adaptas con planificación cuidadosa",
                    "Verificas cómo otros están lidiando",
                    "Lo abrazas con emoción",
                    "Reflexionas sobre su significado más profundo"
                ]
            },
            {
                q: "Tu salida creativa es:",
                a: [
                    "Resolución de problemas y estrategia",
                    "Conectar y ayudar a la gente",
                    "Arte, música o actuación",
                    "Escritura, filosofía o meditación"
                ]
            },
            {
                q: "Al final de 2026, quieres sentirte:",
                a: [
                    "Realizado y exitoso",
                    "Amado y conectado",
                    "Vivo y pleno",
                    "Pacífico y sabio"
                ]
            },
            {
                q: "Tu relación con la naturaleza:",
                a: [
                    "Aprecio su orden y patrones",
                    "Es donde me siento más conectado",
                    "Me energiza e inspira",
                    "Es esencial para mi reflexión"
                ]
            },
            {
                q: "Cuando alguien necesita ayuda, tú:",
                a: [
                    "Ofreces soluciones prácticas",
                    "Brindas apoyo emocional",
                    "Traes optimismo y energía",
                    "Compartes sabiduría y perspectiva"
                ]
            }
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
            downloadButton: "📥 Descargar Imagen",
            shareButton: "📤 Compartir Resultado",
            retryButton: "🔄 Intentar Nuevo"
        },
        colors: {
            coolBlue: {
                name: "Azul Fresco",
                subtitle: "El Estratega Tranquilo",
                keywords: ["Estratégico", "Tranquilo", "Confiable"],
                description: "Tu aura irradia una energía fresca y compuesta. Abordas la vida con lógica y claridad, convirtiéndote en un solucionador de problemas natural. En 2026, tu presencia estable será tu mayor fortaleza.",
                strengths: [
                    "Excelente en planificación estratégica y análisis",
                    "Mantiene la compostura bajo presión",
                    "Confiable para consejos reflexivos",
                    "Crea orden del caos"
                ],
                recommendations: [
                    "Lidera proyectos que requieran planificación cuidadosa",
                    "Comparte tus ideas a través de escritura o enseñanza",
                    "Equilibra lógica con exploración creativa",
                    "Crea espacios de calma en entornos caóticos"
                ]
            },
            vampPurple: {
                name: "Púrpura Vamp",
                subtitle: "El Creador Místico",
                keywords: ["Misterioso", "Creativo", "Intenso"],
                description: "Tu aura lleva una energía encantadora y misteriosa. Ves belleza en la oscuridad y profundidad en la complejidad. Tu intensidad creativa atrae a otros a tu mundo único.",
                strengths: [
                    "Visión creativa profunda y talento artístico",
                    "Cómodo con complejidad y matices",
                    "Presencia magnética que intriga a otros",
                    "Transforma oscuridad en belleza"
                ],
                recommendations: [
                    "Abraza tu estilo creativo único",
                    "Comparte tu arte con el mundo audazmente",
                    "Crea espacios atmosféricos que inspiren",
                    "Explora estéticas góticas, románticas o dramáticas"
                ]
            },
            solarGold: {
                name: "Oro Solar",
                subtitle: "El Líder Radiante",
                keywords: ["Energético", "Inspirador", "Confiado"],
                description: "Tu aura brilla como el sol, iluminando todo a tu alrededor. Tu energía contagiosa y optimismo te convierten en un líder natural que trae calidez donde quiera que vayas.",
                strengths: [
                    "Carisma natural y habilidad de liderazgo",
                    "Energiza y motiva a otros",
                    "Perspectiva optimista que eleva equipos",
                    "Prospera en entornos dinámicos y de ritmo rápido"
                ],
                recommendations: [
                    "Asume roles de liderazgo en 2026",
                    "Comparte tu entusiasmo a través de hablar en público",
                    "Rodéate de personas ambiciosas",
                    "Canaliza energía en nuevas empresas audaces"
                ]
            },
            forestGreen: {
                name: "Verde Bosque",
                subtitle: "El Armonizador Equilibrado",
                keywords: ["Equilibrado", "Centrado", "Pacífico"],
                description: "Tu aura fluye con energía natural y armoniosa. Como un bosque, proporcionas refugio y equilibrio. Entiendes que la verdadera fuerza viene del equilibrio y la conexión con la naturaleza.",
                strengths: [
                    "Excepcional en crear armonía y equilibrio",
                    "Presencia centrada y estable",
                    "Mediador natural en conflictos",
                    "Profundamente conectado con la naturaleza y ritmos"
                ],
                recommendations: [
                    "Crea rutinas equilibradas en 2026",
                    "Pasa tiempo regular en la naturaleza",
                    "Ayuda a otros a encontrar su centro",
                    "Explora vida sostenible y consciente"
                ]
            },
            softRose: {
                name: "Rosa Suave",
                subtitle: "La Sanadora Compasiva",
                keywords: ["Empático", "Nutritivo", "Amoroso"],
                description: "Tu aura brilla con energía sanadora suave. Posees un raro don de empatía profunda, haciendo que otros se sientan verdaderamente vistos y cuidados. Tu presencia misma es una forma de sanación.",
                strengths: [
                    "Profunda inteligencia emocional y empatía",
                    "Habilidad natural para consolar y sanar",
                    "Crea espacios seguros para vulnerabilidad",
                    "Ve lo mejor en todos"
                ],
                recommendations: [
                    "Persigue profesiones de ayuda o trabajo voluntario",
                    "Establece límites saludables mientras cuidas a otros",
                    "Crea belleza y calidez en tu entorno",
                    "Practica autocuidado tan seriamente como cuidar a otros"
                ]
            },
            midnightBlack: {
                name: "Negro Medianoche",
                subtitle: "El Filósofo Profundo",
                keywords: ["Introspectivo", "Sabio", "Profundo"],
                description: "Tu aura sostiene la profundidad de medianoche, donde emergen las mayores ideas. Buscas significado más allá de la superficie, y tu naturaleza contemplativa revela verdades que otros pierden.",
                strengths: [
                    "Pensamiento filosófico y analítico profundo",
                    "Cómodo con complejidad y ambigüedad",
                    "Ve conexiones que otros pasan por alto",
                    "Sabiduría que viene de reflexión profunda"
                ],
                recommendations: [
                    "Comparte tus ideas a través de escritura o enseñanza",
                    "Crea tiempo para soledad y pensamiento profundo",
                    "Explora filosofía, psicología o espiritualidad",
                    "Confía en tu intuición y sabiduría interior"
                ]
            }
        },
        footer: {
            privacy: "Política de Privacidad",
            contact: "Contacto"
        }
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
