// 定义通用选项
const commonOptions = [
    { text: "A、完全符合", score: 2 },
    { text: "B、比较符合", score: 1 },
    { text: "C、介于中间", score: 0 },
    { text: "D、比较不符合", score: -1 },
    { text: "E、完全不符合", score: -2 }
];

// 定义问题列表
const questions = [
    {
        id: 1,
        text: "做事力求稳妥，不做无把握的事。",
        type: "phlegmatic" // 粘液质题目
    },
    {
        id: 2,
        text: "遇到可气的事就怒不可遏，想把心里话说出来才痛快。",
        type: "choleric" // 胆汁质题目
    },
    {
        id: 3,
        text: "宁可一个人干事，不愿很多人在一起。",
        type: "melancholic" // 抑郁质题目
    },
    {
        id: 4,
        text: "到一个新环境很快就能适应。",
        type: "sanguine" // 多血质题目
    },
    {
        id: 5,
        text: "厌恶那些强烈的刺激，如尖叫、噪音、危险镜头等。",
        type: "melancholic" // 抑郁质题目
    },
    {
        id: 6,
        text: "和人争吵时，总是先发制人，喜欢挑衅。",
        type: "choleric" // 胆汁质题目
    },
    {
        id: 7,
        text: "喜欢安静的环境。",
        type: "phlegmatic" // 粘液质题目
    },
    {
        id: 8,
        text: "喜欢和人交往。",
        type: "sanguine" // 多血质题目
    },
    {
        id: 9,
        text: "羡慕那些善于克制自己感情的人。",
        type: "choleric" // 胆汁质题目（反向题）
    },
    {
        id: 10,
        text: "生活有规律，很少违反作息时间。",
        type: "phlegmatic" // 粘液质题目
    },
    {
        id: 11,
        text: "在多数情况下情绪是乐观的。", // 修复乱码
        type: "sanguine" // 多血质题目
    },
    {
        id: 12,
        text: "碰到陌生人觉得很拘束。",
        type: "melancholic" // 抑郁质题目
    },
    {
        id: 13,
        text: "遇到令人气愤的事，很好地自我克制。",
        type: "phlegmatic" // 粘液质题目
    },
    {
        id: 14,
        text: "做事总是有旺盛的精力。",
        type: "choleric" // 胆汁质题目
    },
    {
        id: 15,
        text: "遇到问题常常举棋不定，优柔寡断。",
        type: "melancholic" // 抑郁质题目
    },
    {
        id: 16,
        text: "在人群中从不觉得过分拘束。",
        type: "sanguine" // 多血质题目
    },
    {
        id: 17,
        text: "情绪高昂时，觉得干什么都有趣，情绪低落时，觉得干什么都没有意思。",
        type: "choleric" // 胆汁质题目
    },
    {
        id: 18,
        text: "当注意力集中于一事物时，别的事物就很难使我分心。",
        type: "phlegmatic" // 粘液质题目
    },
    {
        id: 19,
        text: "理解问题总比别人快。",
        type: "sanguine" // 多血质题目
    },
    {
        id: 20,
        text: "遇到不顺心的事能从不向他人说。",
        type: "melancholic" // 抑郁质题目
    },
    {
        id: 21,
        text: "记忆能力强。",
        type: "choleric" // 胆汁质题目
    },
    {
        id: 22,
        text: "能够长时间做枯燥、单调的事。",
        type: "phlegmatic" // 粘液质题目
    },
    {
        id: 23,
        text: "符合兴趣的事，干起来劲头十足，否则就不想干。",
        type: "sanguine" // 多血质题目
    },
    {
        id: 24,
        text: "一点小事就能引起情绪波动。",
        type: "melancholic" // 抑郁质题目
    },
    {
        id: 25,
        text: "讨厌做那种需要耐心、细致的工作。",
        type: "sanguine" // 多血质题目（反向题）
    },
    {
        id: 26,
        text: "与人交往不卑不亢。",
        type: "phlegmatic" // 粘液质题目
    },
    {
        id: 27,
        text: "喜欢参加热烈的活动。",
        type: "choleric" // 胆汁质题目
    },
    {
        id: 28,
        text: "爱看感情细腻、描写人物内心活动的文学作品。",
        type: "melancholic" // 抑郁质题目
    },
    {
        id: 29,
        text: "工作学习时间长了，常感到厌倦。",
        type: "sanguine" // 多血质题目
    },
    {
        id: 30,
        text: "不喜欢长时间谈论一个话题，愿意实际动手干。",
        type: "phlegmatic" // 粘液质题目
    },
    {
        id: 31,
        text: "宁愿侃侃而谈，不愿窃窃私语。",
        type: "choleric" // 胆汁质题目
    },
    {
        id: 32,
        text: "别人说我总是闷闷不乐。",
        type: "melancholic" // 抑郁质题目
    },
    {
        id: 33,
        text: "理解问题时常比别人慢些。",
        type: "phlegmatic" // 粘液质题目
    },
    {
        id: 34,
        text: "疲倦时只要短暂的休息就能精神抖擞，重新投入工作。",
        type: "sanguine" // 多血质题目
    },
    {
        id: 35,
        text: "心里有事，宁愿自己想，不愿说出来。",
        type: "melancholic" // 抑郁质题目
    },
    {
        id: 36,
        text: "认准一个目标就希望尽快实现，不达目的，誓不罢休。",
        type: "choleric" // 胆汁质题目
    },
    {
        id: 37,
        text: "同样和别人学习、工作一段时间后，常比别人更疲倦。",
        type: "melancholic" // 抑郁质题目
    },
    {
        id: 38,
        text: "做事有些莽撞，常常不考虑后果。",
        type: "choleric" // 胆汁质题目
    },
    {
        id: 39,
        text: "别人讲授新知识、技术时，总是希望他讲慢些，多重复。",
        type: "phlegmatic" // 粘液质题目
    },
    {
        id: 40,
        text: "能够很快忘记那些不愉快的事情。",
        type: "sanguine" // 多血质题目
    },
    {
        id: 41,
        text: "做作业或完成一件工作时总比别人花费的时间多。",
        type: "melancholic" // 抑郁质题目
    },
    {
        id: 42,
        text: "喜欢运动量大的剧烈活动，或参加各种文体活动。",
        type: "choleric" // 胆汁质题目
    },
    {
        id: 43,
        text: "不能很快地把注意力从一件事转移到另一件事上去。",
        type: "phlegmatic" // 粘液质题目
    },
    {
        id: 44,
        text: "接受一个任务后，就希望把它迅速解决。",
        type: "sanguine" // 多血质题目
    },
    {
        id: 45,
        text: "认为墨守成规要比冒风险强些。",
        type: "phlegmatic" // 粘液质题目
    },
    {
        id: 46,
        text: "能够同时注意几件事物。",
        type: "sanguine" // 多血质题目
    },
    {
        id: 47,
        text: "当我烦闷的时候，别人很难使我高兴。",
        type: "melancholic" // 抑郁质题目
    },
    {
        id: 48,
        text: "爱看情节起伏跌宕、激动人心的小说。",
        type: "choleric" // 胆汁质题目
    },
    {
        id: 49,
        text: "对工作抱认真谨慎、始终如一的态度。",
        type: "phlegmatic" // 粘液质题目
    },
    {
        id: 50,
        text: "和周围人们的关系总是相处不好。",
        type: "choleric" // 胆汁质题目
    },
    {
        id: 51,
        text: "喜欢复习学过的知识，重复做已经掌握的工作。",
        type: "melancholic" // 抑郁质题目
    },
    {
        id: 52,
        text: "喜欢做变化大、花样多的工作。",
        type: "sanguine" // 多血质题目
    },
    {
        id: 53,
        text: "小时候会背的诗歌，我似乎比别人记得清楚。",
        type: "melancholic" // 抑郁质题目
    },
    {
        id: 54,
        text: '别人说我"出语伤人"，可我并不觉得这样。',
        type: "choleric" // 胆汁质题目
    },
    {
        id: 55,
        text: "在体育运动中，常因反应慢而落后。",
        type: "phlegmatic" // 粘液质题目
    },
    {
        id: 56,
        text: "反应敏捷，大脑机智。",
        type: "sanguine" // 多血质题目
    },
    {
        id: 57,
        text: "喜欢有条理而不甚麻烦的工作。",
        type: "phlegmatic" // 粘液质题目
    },
    {
        id: 58,
        text: "兴奋的事情常使我失眠。",
        type: "choleric" // 胆汁质题目
    },
    {
        id: 59,
        text: "别人讲新概念，我常常听不懂，但是弄懂以后就很难忘记。",
        type: "melancholic" // 抑郁质题目
    },
    {
        id: 60,
        text: "假如工作枯燥无味，马上就会情绪低落。",
        type: "sanguine" // 多血质题目
    }
    // ... 继续添加其他题目
];

const results = {
    sanguine: {
        title: "多血质",
        description: "多血质的人活泼好动、反应迅速、适应性强，但注意力容易分散，粗心大意。",
        characteristics: [
            "活泼开朗，善于交际",
            "热情洋溢，富有表现欲",
            "反应灵敏，动作敏捷",
            "适应性强，但意志力较弱",
            "感情丰富，但不够持久"
        ],
        suggestions: [
            "培养专注力和耐心",
            "加强自我约束能力",
            "培养持之以恒的习惯",
            "注意控制情绪波动",
            "提高工作的条理性"
        ]
    },
    choleric: {
        title: "胆汁质",
        description: "胆汁质的人精力充沛、意志坚强、目标明确，但易怒好斗、固执己见。",
        characteristics: [
            "精力充沛，干劲十足",
            "意志坚强，目标明确",
            "勇于进取，不怕困难",
            "易怒好斗，固执己见",
            "行动果断，但欠缺耐心"
        ],
        suggestions: [
            "学会控制情绪",
            "培养耐心和宽容",
            "注意倾听他人意见",
            "避免过于固执己见",
            "保持适度的灵活性"
        ]
    },
    melancholic: {
        title: "抑郁质",
        description: "抑郁质的人细心谨慎、富有同情心、追求完美，但优柔寡断、情绪波动大。",
        characteristics: [
            "细心谨慎，追求完美",
            "富有同情心和同理心",
            "思维深刻，有创造力",
            "情绪敏感，内向含蓄",
            "责任心强，但优柔寡断"
        ],
        suggestions: [
            "培养乐观积极的心态",
            "加强社交活动",
            "学会适时放松",
            "提高决断能力",
            "避免过分自我苛求"
        ]
    },
    phlegmatic: {
        title: "粘液质",
        description: "粘液质的人沉着冷静、性格温和、工作踏实，但缺乏激情、行动迟缓。",
        characteristics: [
            "沉着冷静，性格温和",
            "工作踏实，有耐心",
            "为人随和，易相处",
            "情绪稳定，不易冲动",
            "做事有条理，但缺乏激情"
        ],
        suggestions: [
            "培养积极主动的态度",
            "增强行动力和效率",
            "适当提高表达欲望",
            "扩大社交圈子",
            "保持适度的竞争意识"
        ]
    }
};

window.questionsData = {
    questions: questions,
    options: commonOptions,
    results: results
};
