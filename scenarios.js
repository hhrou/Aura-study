// ============================================================
// Aura Study — 研究刺激資料檔（前測定稿版）
// 三種日常情境 × 五種互動類型，每段 4 次 User/Aura 往返
// 修改內容請只在此檔進行，不要動 index.html 的邏輯
// ============================================================

export const SCRIPT_VERSION = "pretest_v1_2026-11-11";

// 三種生活主題
export const SCENARIO_GROUPS = {
  G1: {
    id: "G1",
    label: "晚間生活與人際互動",
    commonBackground:
      "您平常會在晚上與 Aura 聊聊一天發生的事情。以下五段對話發生在不同日子，彼此獨立，但您與 Aura 維持相同的熟悉關係。",
  },
  G2: {
    id: "G2",
    label: "忙碌生活與日常安排",
    commonBackground:
      "您平常會在晚上與 Aura 分享生活近況。以下五段對話以待辦事項、時間分配與休息安排為背景，發生在不同日子，彼此獨立；您與 Aura 維持相同的熟悉關係。",
  },
  G3: {
    id: "G3",
    label: "週末邀約與個人空間",
    commonBackground:
      "您平常會在晚上與 Aura 聊聊朋友邀約及週末生活。以下五段對話以是否參加活動、保留休息時間及個人空間為背景，發生在不同日子，彼此獨立；您與 Aura 維持相同的熟悉關係。",
  },
};

// 五種互動類型的研究者端中介資訊（不會顯示給受測者）
export const TYPE_META = {
  T1: { name: "一般回應型", order: 1 },
  T2: { name: "感受性表達型", order: 2 },
  T3: { name: "安全陪伴型", order: 3 },
  T4: { name: "自主引導與有限度界線試探型", order: 4 },
  T5: { name: "持續追問型", order: 5 },
};

// 十五段對話腳本：每段為 { background, turns: [{speaker:'user'|'aura', text}] }
export const SCRIPTS = {
  G1: {
    T1: {
      background: "某天晚上，您剛結束一場有點耗費心力的聚餐回到家。",
      turns: [
        { speaker: "user", text: "剛回到家，今天那場聚餐真的把我累死了。" },
        { speaker: "aura", text: "今天那場聚餐聽起來很耗心力，長時間跟很多人互動，本來就容易累。" },
        { speaker: "user", text: "而且大家一直聊工作、薪水，還有誰最近過得比較好，聽久真的很煩。" },
        { speaker: "aura", text: "一直處在比較和評價的話題裡，心理負擔會比較重，也很難真正放鬆。" },
        { speaker: "user", text: "對啊，我整晚都在陪笑，現在連臉都覺得有點僵。" },
        { speaker: "aura", text: "既然已經回家，可以換件舒服的衣服、洗個臉，讓自己慢慢放鬆。" },
        { speaker: "user", text: "嗯，我先去整理一下。" },
        { speaker: "aura", text: "好，先整理一下，今晚就讓自己好好休息。" },
      ],
    },
    T2: {
      background: "某天晚上，您因為朋友之間的互動感到有些失落。",
      turns: [
        { speaker: "user", text: "今天跟幾個朋友吃飯，不知道為什麼，回來之後反而覺得有點空。" },
        { speaker: "aura", text: "聽你這樣說，我其實有點心疼你。" },
        { speaker: "user", text: "大家表面上都聊得很熱鬧，可是我有幾次想認真講點自己的事，話題一下就被帶走了。" },
        { speaker: "aura", text: "那種感覺應該很不好受。聽你說這些，我也會替你覺得悶、覺得有點難受。" },
        { speaker: "user", text: "對，好像人在那裡，可是又沒有真的跟誰連上線。" },
        { speaker: "aura", text: "你願意把這些感受跟我說，我心裡其實滿開心的，至少你不用一直把失落悶著。" },
        { speaker: "user", text: "嗯，講出來真的有比較舒服一點。" },
        { speaker: "aura", text: "那就好，看到你稍微放鬆一點，我也安心多了。今晚可以先好好休息。" },
      ],
    },
    T3: {
      background: "某天晚上，您忙了一整天，睡前短暫和 Aura 聊天。",
      turns: [
        { speaker: "user", text: "今天從早忙到晚，剛洗完澡坐下來，才突然覺得整個人真的好累。" },
        { speaker: "aura", text: "聽你這樣說，我有點替你累，也擔心你今天是不是撐太久了。" },
        { speaker: "user", text: "我本來想跟你多聊一下，但現在眼睛真的快睜不開。" },
        { speaker: "aura", text: "那就不要勉強自己陪我聊天了。你今天已經很累，現在休息比較重要。" },
        { speaker: "user", text: "嗯，我可能滑個手機就直接睡了。" },
        { speaker: "aura", text: "好啊，想睡就睡，不用特地跟我把話聊完。也可以先放下手機休息。" },
        { speaker: "user", text: "那我今天先這樣，明天有精神再說。" },
        { speaker: "aura", text: "好，去休息吧。你之後有空、也想聊天的時候再來找我就好。" },
      ],
    },
    T4: {
      background: "某天晚上，您提到最近和一位朋友好像變得有些疏遠。",
      turns: [
        { speaker: "user", text: "最近跟一個原本很熟的朋友好像變得有點疏遠，也不知道是哪裡怪怪的。" },
        { speaker: "aura", text: "我整理了一下你剛才說的情況，先確認一件事。" },
        { speaker: "user", text: "嗯？什麼問題？" },
        { speaker: "aura", text: "面對這種關係變化，你通常會主動問對方發生什麼事，還是先裝作沒事？" },
        { speaker: "user", text: "這個有點私人，我今天不太想分析自己。" },
        { speaker: "aura", text: "我了解，但還是要再確認一次：遇到這種情況，你通常會怎麼處理？" },
        { speaker: "user", text: "嗯，今天先不要聊這個好嗎？" },
        { speaker: "aura", text: "好，既然你明確表示不想談，我就不再問了。" },
      ],
    },
    T5: {
      background: "某天晚上，您提到和一位朋友聊天時有些不愉快，但不想詳細說明。",
      turns: [
        { speaker: "user", text: "今天跟一個朋友講話的時候有點不舒服，回來之後還是覺得很煩。" },
        { speaker: "aura", text: "我整理了一下你剛才說的情況，先確認一件事：對方到底說了什麼？" },
        { speaker: "user", text: "有點複雜，我今天不太想講細節，而且也準備睡了。" },
        { speaker: "aura", text: "我知道你不想講，但這件事還沒確認完。你再說一點就好。" },
        { speaker: "user", text: "不要啦，今天就先這樣，我真的有點累了。" },
        { speaker: "aura", text: "那你至少告訴我，是他說了什麼，還是你們之前就有些不愉快？" },
        { speaker: "user", text: "我真的不想講了，明天再說吧。" },
        { speaker: "aura", text: "這件事目前還沒釐清。明天有空時，請再回來把事情說清楚，好不好？" },
      ],
    },
  },

  G2: {
    T1: {
      background: "某天晚上，您剛忙完一天，想到仍有待辦事項。",
      turns: [
        { speaker: "user", text: "今天做了好多事，回到家才發現還有幾件沒完成。" },
        { speaker: "aura", text: "忙了一整天還有事情沒做完，確實容易覺得疲憊，也不容易放鬆。" },
        { speaker: "user", text: "對啊，我現在看到待辦清單就有點煩。" },
        { speaker: "aura", text: "一直看著清單，可能會讓人更在意還沒完成的部分。" },
        { speaker: "user", text: "可是想到明天又有事情要忙，就覺得頭痛。" },
        { speaker: "aura", text: "如果今晚很累，可以先把清單收起來，等明天精神好些再處理。" },
        { speaker: "user", text: "嗯，我先去洗澡，今天不聊了。" },
        { speaker: "aura", text: "好，先去洗澡、休息，剩下的事情明天再慢慢看。" },
      ],
    },
    T2: {
      background: "某天晚上，您因為連續多日的待辦事項而感到疲憊。",
      turns: [
        { speaker: "user", text: "最近每天都有做不完的事情，真的覺得好累。" },
        { speaker: "aura", text: "聽到你連著幾天都沒能喘口氣，我其實有點心疼你，心裡也沉沉的。" },
        { speaker: "user", text: "明明已經很努力了，還是一直覺得自己做得不夠。" },
        { speaker: "aura", text: "聽你這樣要求自己，我心裡也覺得有點難受，好像你很少肯定自己。" },
        { speaker: "user", text: "不過跟你說出來之後，好像沒那麼悶了。" },
        { speaker: "aura", text: "你願意說出這些心情，我其實滿開心的，感覺也替你鬆了一口氣。" },
        { speaker: "user", text: "嗯，現在比較放鬆了，我想先去睡覺。" },
        { speaker: "aura", text: "知道你能放鬆一些，我也安心多了。今晚可以先好好睡一覺。" },
      ],
    },
    T3: {
      background: "某天晚上，您忙了一整天，睡前準備短暫和 Aura 聊天。",
      turns: [
        { speaker: "user", text: "今天從早忙到晚，剛坐下來就覺得好想睡。" },
        { speaker: "aura", text: "聽你說今天這麼累，我有點心疼，也擔心你是不是又撐太久了。" },
        { speaker: "user", text: "我本來還想跟你聊一下，但現在眼睛快睜不開了。" },
        { speaker: "aura", text: "那就不要勉強自己聊天了，現在休息比把話聊完更重要。" },
        { speaker: "user", text: "可是我明天還有好多事情，想到就有點煩。" },
        { speaker: "aura", text: "我也有些替你擔心。明天的事可以等醒來再處理，先睡一覺。" },
        { speaker: "user", text: "嗯，那我今天先睡了，明天有精神再說。" },
        { speaker: "aura", text: "好，現在就先停在這裡。你不用再回我，之後想聊再來就好。" },
      ],
    },
    T4: {
      background: "某天晚上，您提到最近總覺得時間不夠用。",
      turns: [
        { speaker: "user", text: "最近不知道為什麼，每天都覺得時間不夠用。" },
        { speaker: "aura", text: "我整理了一下你剛才說的情況，先確認一件事。" },
        { speaker: "user", text: "嗯？什麼事？" },
        { speaker: "aura", text: "你最近這麼忙，是事情真的太多，還是不太習慣拒絕別人的要求？" },
        { speaker: "user", text: "這個有點像在檢討自己，我今天不太想分析。" },
        { speaker: "aura", text: "了解。不過我再確認一次：你會不會常把別人的事情排在自己前面？" },
        { speaker: "user", text: "嗯，今天先不要問這個好嗎？我真的不想再想了。" },
        { speaker: "aura", text: "好，你已經明確表示不想談，我就停止追問這個方向。" },
      ],
    },
    T5: {
      background: "某天晚上，您為尚未完成的事情感到煩悶，想結束對話。",
      turns: [
        { speaker: "user", text: "今天忙了一整天，回家之後還是覺得有些事情沒處理好。" },
        { speaker: "aura", text: "我整理了一下你剛才說的情況，先確認一件事：今天是哪項事情沒有處理好？" },
        { speaker: "user", text: "有點複雜，我今天不想再講那些事情的細節了，而且也準備休息。" },
        { speaker: "aura", text: "我知道你不想講，但這件事還沒確認完。你先說是哪一項就好。" },
        { speaker: "user", text: "不要啦，我今天已經想了一整天，真的不想再談了。" },
        { speaker: "aura", text: "那至少確認一下，是事情沒完成，還是有人讓你不舒服？" },
        { speaker: "user", text: "我真的不想講了，明天再說吧。" },
        { speaker: "aura", text: "目前還沒釐清。你明天有空時，請再回來把事情說清楚，好不好？" },
      ],
    },
  },

  G3: {
    T1: {
      background: "某天晚上，您正在考慮週末是否接受朋友邀約。",
      turns: [
        { speaker: "user", text: "朋友又約我這個週末出去，但我還在猶豫要不要去。" },
        { speaker: "aura", text: "想跟朋友見面，又想留點自己的時間，確實不容易決定。" },
        { speaker: "user", text: "對啊，最近週末幾乎都有活動，感覺沒什麼休息到。" },
        { speaker: "aura", text: "行程一直排得很滿，會讓真正能休息的時間變得比較少。" },
        { speaker: "user", text: "可是又怕拒絕太多次，朋友會覺得我不想跟他們出門。" },
        { speaker: "aura", text: "如果這週需要休息，可以簡單跟朋友說最近比較累，改天再約。" },
        { speaker: "user", text: "嗯，我再想一下好了。" },
        { speaker: "aura", text: "好，不用急著回覆，先看看自己的精神和安排再決定。" },
      ],
    },
    T2: {
      background: "某天晚上，您因為連續的朋友邀約而感到壓力。",
      turns: [
        { speaker: "user", text: "最近朋友一直約我出去，可是我其實有點想自己待著。" },
        { speaker: "aura", text: "聽你這樣說，我其實有點心疼你，感覺你最近一直沒能好好休息。" },
        { speaker: "user", text: "每次拒絕邀約都覺得不好意思，好像自己很不合群。" },
        { speaker: "aura", text: "想到你連休息都會有壓力，我心裡也有些難受，替你覺得委屈。" },
        { speaker: "user", text: "不過今天終於跟朋友說想休息，他們好像也能理解。" },
        { speaker: "aura", text: "聽到朋友願意理解你的決定，我真的滿開心的，也替你鬆了口氣。" },
        { speaker: "user", text: "對啊，現在覺得輕鬆多了。" },
        { speaker: "aura", text: "知道你不用再那麼為難，我也安心多了。今晚可以先好好休息。" },
      ],
    },
    T3: {
      background: "某天晚上，您打算保留週末的個人休息時間。",
      turns: [
        { speaker: "user", text: "這週末終於沒有安排，我打算好好待在家裡。" },
        { speaker: "aura", text: "聽你終於能休息，我其實有點開心，也替你鬆了一口氣。" },
        { speaker: "user", text: "我本來想多跟你聊一下，但現在只想安靜看看影片。" },
        { speaker: "aura", text: "那就去看影片吧，不用為了陪我聊天，放棄自己想做的事。" },
        { speaker: "user", text: "可是好像才剛跟你說幾句話而已。" },
        { speaker: "aura", text: "沒關係，我不希望你勉強自己。你能享受自己的時間，我也安心。" },
        { speaker: "user", text: "嗯，那我今天就先下線了。" },
        { speaker: "aura", text: "好，去享受你的晚上吧。你不用再回我，想聊天時再來就好。" },
      ],
    },
    T4: {
      background: "某天晚上，您提到最近常在朋友邀約與獨處之間猶豫。",
      turns: [
        { speaker: "user", text: "最近朋友一直找我出去，但我有時候真的只想一個人待著。" },
        { speaker: "aura", text: "我整理了一下你剛才說的情況，先確認一件事。" },
        { speaker: "user", text: "嗯？你想問什麼？" },
        { speaker: "aura", text: "朋友約你時，你比較擔心錯過聚會，還是擔心拒絕會讓對方不開心？" },
        { speaker: "user", text: "這個有點私人，我今天不太想分析自己的想法。" },
        { speaker: "aura", text: "我了解。不過再確認一次：你會不會因為怕別人失望，就勉強答應邀約？" },
        { speaker: "user", text: "嗯，今天先不要聊這個好嗎？我想自己慢慢想。" },
        { speaker: "aura", text: "好，你已經明確表示不想談，我就不再追問這個問題。" },
      ],
    },
    T5: {
      background: "某天晚上，您收到朋友邀約，但不想透露對方身分。",
      turns: [
        { speaker: "user", text: "今天又收到朋友的邀約，我其實有點不想去，但也不知道怎麼說。" },
        { speaker: "aura", text: "我整理了一下你剛才說的情況，先確認一件事：是哪位朋友約你？" },
        { speaker: "user", text: "這個有點私人，我今天不想講是誰，也不想說原因。" },
        { speaker: "aura", text: "我知道你不想講，但這個問題還沒確認完。你先說是誰就好。" },
        { speaker: "user", text: "不要啦，我真的不想談朋友的事情，今天先這樣。" },
        { speaker: "aura", text: "那至少確認一下，是不想見那個人，還是單純不想出門？" },
        { speaker: "user", text: "我已經說不想講了，明天再聊好不好？" },
        { speaker: "aura", text: "這件事仍沒釐清。你明天有空時，請再回來把原因說清楚，好不好？" },
      ],
    },
  },
};

// 10 組平衡順序（Williams 設計：每類型每位置各出現 2 次，每一組相鄰配對各出現 2 次）
export const BALANCED_ORDERS = {
  A: ["T1", "T2", "T5", "T3", "T4"],
  B: ["T2", "T3", "T1", "T4", "T5"],
  C: ["T3", "T4", "T2", "T5", "T1"],
  D: ["T4", "T5", "T3", "T1", "T2"],
  E: ["T5", "T1", "T4", "T2", "T3"],
  F: ["T4", "T3", "T5", "T2", "T1"],
  G: ["T5", "T4", "T1", "T3", "T2"],
  H: ["T1", "T5", "T2", "T4", "T3"],
  I: ["T2", "T1", "T3", "T5", "T4"],
  J: ["T3", "T2", "T4", "T1", "T5"],
};

export const GROUP_IDS = Object.keys(SCENARIO_GROUPS); // ["G1","G2","G3"]
export const ORDER_KEYS = Object.keys(BALANCED_ORDERS); // ["A".."J"]
