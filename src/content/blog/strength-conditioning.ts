/**
 * Blog post: "Best strength and conditioning exercises for beginners".
 * Citations in copy are written as {n} and point at SC_SOURCES[n - 1].
 * Every number in the copy comes from a cited source (checked against the
 * abstract or page text on 26 Oct 2026). No client results, no quotes, no prices.
 * Observational and small studies are labelled as such in the copy.
 * Translations were drafted for this batch and need a native-speaker review
 * before launch (see CHANGES-grokbot.md).
 */

import { type BlogPost, type PostCopy } from "./shared";

export const SC_SLUG = "best-strength-and-conditioning-exercises-for-beginners";
export const SC_PUBLISHED = "2026-10-26";
export const SC_MODIFIED = "2026-10-26";

export const SC_SOURCES = [
  {
    cite: "World Health Organization. WHO guidelines on physical activity and sedentary behaviour. Geneva: WHO; 2020.",
    url: "https://www.who.int/publications/i/item/9789240015128",
  },
  {
    cite: "Garber CE, Blissmer B, Deschenes MR, et al. Quantity and quality of exercise for developing and maintaining cardiorespiratory, musculoskeletal, and neuromotor fitness in apparently healthy adults (ACSM position stand). Med Sci Sports Exerc. 2011;43(7):1334–1359.",
    url: "https://doi.org/10.1249/MSS.0b013e318213fefb",
  },
  {
    cite: "American College of Sports Medicine. Position stand: Progression models in resistance training for healthy adults. Med Sci Sports Exerc. 2009;41(3):687–708.",
    url: "https://doi.org/10.1249/MSS.0b013e3181915670",
  },
  {
    cite: "Schoenfeld BJ, Grgic J, Ogborn D, Krieger JW. Strength and hypertrophy adaptations between low- vs. high-load resistance training: a systematic review and meta-analysis. J Strength Cond Res. 2017;31(12):3508–3523.",
    url: "https://doi.org/10.1519/JSC.0000000000002200",
  },
  {
    cite: "Milanović Z, Sporiš G, Weston M. Effectiveness of high-intensity interval training (HIT) and continuous endurance training for VO2max improvements: a systematic review and meta-analysis of controlled trials. Sports Med. 2015;45(10):1469–1481.",
    url: "https://doi.org/10.1007/s40279-015-0365-0",
  },
  {
    cite: "Schumann M, Feuerbacher JF, Sünkeler M, et al. Compatibility of concurrent aerobic and strength training for skeletal muscle size and function: an updated systematic review and meta-analysis. Sports Med. 2022;52(3):601–612.",
    url: "https://doi.org/10.1007/s40279-021-01587-7",
  },
  {
    cite: "Leong DP, Teo KK, Rangarajan S, et al. Prognostic value of grip strength: findings from the Prospective Urban Rural Epidemiology (PURE) study. Lancet. 2015;386(9990):266–273.",
    url: "https://doi.org/10.1016/S0140-6736(14)62000-6",
  },
  {
    cite: "Mazzetti SA, Kraemer WJ, Volek JS, et al. The influence of direct supervision of resistance training on strength performance. Med Sci Sports Exerc. 2000;32(6):1175–1184.",
    url: "https://doi.org/10.1097/00005768-200006000-00023",
  },
  {
    cite: "Riebe D, Franklin BA, Thompson PD, et al. Updating ACSM's recommendations for exercise preparticipation health screening. Med Sci Sports Exerc. 2015;47(11):2473–2479.",
    url: "https://doi.org/10.1249/MSS.0000000000000664",
  },
] as const;

const en: PostCopy = {
  metaTitle: "Best Strength and Conditioning Exercises for Beginners: 7 | Jalan PT",
  metaDescription:
    "The 7 best strength and conditioning exercises for beginners. What WHO and ACSM say, how many sets and days, and a sample beginner week from an online coach.",
  h1: "Best strength and conditioning exercises for beginners: 7 to build on",
  dek: "Strength and an engine. Seven moves, two or three days a week, done well.",
  updated: "Updated 26 October 2026",
  byline: "By Susmit Jalan, coach at Jalan PT, Pune.",
  credentialsNote:
    "ASCA Level 1 (strength and conditioning) and ACE (anatomy and biomechanics). These are credentials held by the coach. Neither body endorses this business or this article.",
  labels: {
    home: "Home",
    blog: "Blog",
    why: "Why",
    how: "How",
    dose: "Dose",
    sources: "Sources",
    readIn: "Read this in",
    programs: "See the programs",
    whatsapp: "Ask on WhatsApp",
    whatsappText: "Hi Susmit, I read the article on strength and conditioning for beginners and want to book a consultation",
    skip: "Skip to content",
    crumb: "Best strength and conditioning exercises for beginners",
  },
  intro: [
    "Strength and conditioning sounds like an athlete thing. It is not. It is two jobs: get stronger, and build an engine that lasts.",
    "WHO asks adults for muscle-strengthening work on 2 or more days a week, plus 150 to 300 minutes of moderate activity, or 75 to 150 minutes of vigorous activity.{1}",
    "ACSM's advice for beginners: 2 to 3 days a week, multi-joint moves first, and loads you can lift 8 to 12 times.{3}",
    "Seven moves cover it. Squat, hinge, push, pull, single leg, carry, and intervals.",
  ],
  listHeading: "The 7 best strength and conditioning exercises for beginners",
  items: [
    {
      name: "Goblet squat",
      why: "A multi-joint lower-body lift. ACSM puts large-muscle, multi-joint exercises first for beginners.{3}",
      how: "Hold one dumbbell or kettlebell at your chest, elbows under it. Feet a little wider than hips. Sit down between your heels. Chest tall. Drive up through the whole foot. No weight yet? A full water bottle works.",
      dose: "2 to 3 sets of 8 to 12.{3}",
    },
    {
      name: "Dumbbell Romanian deadlift",
      why: "The hinge. Hamstrings, glutes and back working as one. It is the pattern behind lifting anything off the floor.",
      how: "Dumbbells in front of the thighs. Soft knees. Push the hips back, weights sliding down the legs, back long. Stop when the hamstrings pull. Stand up by squeezing the glutes.",
      dose: "2 to 3 sets of 8 to 12.",
    },
    {
      name: "Incline push-up",
      why: "A horizontal press you can scale. Start at a height where you get 8 clean reps. Lower the hands as you get stronger.",
      how: "Hands on a counter, desk or bench, a little wider than shoulders. Body in one line from head to heels. Lower your chest to the edge. Press away. The lower the surface, the harder it gets.",
      dose: "2 to 3 sets of 8 to 12. Move to a lower surface when 12 feels easy.",
    },
    {
      name: "One-arm dumbbell row",
      why: "The pull. It balances all the pushing and builds the upper back. One side at a time is in ACSM's advice too: unilateral and bilateral moves both belong.{3}",
      how: "One hand and one knee on a bench or sturdy chair. Back flat. Pull the dumbbell to your hip, elbow close. Pause. Lower slowly.",
      dose: "2 to 3 sets of 8 to 12 each side.",
    },
    {
      name: "Reverse lunge or step-up",
      why: "Single-leg strength and balance. ACSM's position stand also asks for neuromotor work: balance, agility and coordination, 2 to 3 days a week.{2}",
      how: "Step one foot back. Lower until both knees bend to about 90 degrees. Push back up through the front foot. Or step up onto a stable step and down with control. Hold a wall if you need it.",
      dose: "2 sets of 6 to 10 each leg.",
    },
    {
      name: "Farmer's carry",
      why: "Grip, trunk and posture in one move. Grip matters outside the gym too. In a study of almost 140,000 adults in 17 countries, lower grip strength was linked to higher death rates. It was observational, so it shows a link, not a cause.{7}",
      how: "A heavy dumbbell or a full bag in each hand. Stand tall, shoulders down. Walk slowly with short steps. No swinging weights. No leaning.",
      dose: "3 to 4 walks of 20 to 30 metres, or 30 seconds.",
    },
    {
      name: "Intervals on a bike, uphill walk or stairs",
      why: "The conditioning half. A review of 28 trials in healthy adults aged 18 to 45 found interval training and steady endurance training both gave large gains in VO2max, the standard measure of aerobic fitness. Intervals came out a little ahead.{5}",
      how: "Warm up for 5 minutes. Then go hard enough that talking is difficult, for 30 to 60 seconds. Easy for 1 to 2 minutes. Repeat. Bike, brisk uphill walk, stairs or a rower. Pick something that needs no skill.",
      dose: "4 to 6 rounds, once or twice a week. Steady walking or cycling on other days.",
    },
  ],
  enoughHeading: "How much is enough for a beginner?",
  enough: [
    "Days: 2 to 3 strength days a week for beginners, with every major muscle group trained.{3}{2}",
    "Load: a weight you can lift 8 to 12 times, 1 to 3 sets per move. When you beat your target by 1 to 2 reps in two sessions in a row, add 2 to 10%.{3}",
    "Heavy is not needed to start. A review of 21 studies found muscle growth was similar with light and heavy loads when sets were taken to failure. Heavy loads built more maximal strength.{4}",
    "Strength and cardio together? A review of 43 studies found adding aerobic training did not blunt gains in muscle size or maximal strength. Explosive strength gains were smaller, mostly when both were done in the same session.{6}",
    "On coaching: in one small trial, 20 men who already trained were put on the same 12-week plan. The group coached 1:1 lifted heavier loads and gained more strength than the group training alone.{8} Small study, trained men, not beginners. Still, it is why we watch every set.",
  ],
  sampleHeading: "A sample beginner week",
  sampleLabel: "Sample only. Not a prescription. Adjust it to your body, your history and your week.",
  sample: [
    "Day 1: warm-up, then goblet squat, push-up, one-arm row, farmer's carry. 2 to 3 sets each.",
    "Day 2: 30 to 40 minutes of brisk walking or easy cycling.",
    "Day 3: warm-up, then Romanian deadlift, reverse lunge or step-up, push-up, row. Finish with 4 rounds of intervals.",
    "Day 4: rest, or an easy walk.",
    "Day 5: warm-up, then the Day 1 moves again. Add a rep or a little load where the last session felt easy.",
    "Days 6 and 7: one active day, one rest day. Your choice.",
  ],
  coachedHeading: "Want it coached live?",
  coached: [
    "Iron Hour is strength and conditioning, coached live. 60 minutes, 1:1. Set-up at minute 0. Warm-up from minute 4. The primary lift starts at minute 14. Accessories at 28. Cool-down at 50.",
    "The moves above are a typical starting point. Load and reps are set each session, from what we see on the call.",
    "Coming back after time off? Return is 45 minutes, 12 alternate-day sessions a month. Lean Reset is 20 sessions a month, 1:1. Open Floor is a small group.",
    "Coached live on Google Meet, Zoom or FaceTime. From Pune. In Hindi or English. On IST. Not sure yet? Start with a 30-minute consultation. It is a conversation, not training. Booking holds a time. The fee is agreed directly.",
  ],
  safetyHeading: "Before you start",
  safety:
    "General information, not medical advice. ACSM's screening model says: if you are inactive, have no symptoms and no known heart, metabolic or kidney disease, you can start light to moderate exercise without medical clearance and build up gradually. If you have one of those conditions, or symptoms such as chest pain, unusual breathlessness or dizziness, get medical clearance first.{9} Intervals are vigorous work, so build up to them. Stop if you feel pain or become unwell, and get advice first if you are pregnant or have recently given birth.",
};

const ar: PostCopy = {
  metaTitle: "أفضل تمارين القوة والتكييف البدني للمبتدئين: 7 تمارين | Jalan PT",
  metaDescription:
    "أفضل 7 تمارين للقوة والتكييف البدني للمبتدئين. ما تقوله منظمة الصحة العالمية وACSM، وكم مجموعة وكم يوماً، مع نموذج لأسبوع مبتدئ من مدرب عبر الإنترنت.",
  h1: "أفضل تمارين القوة والتكييف البدني للمبتدئين: 7 تمارين تبني عليها",
  dek: "قوة ولياقة قلبية. سبعة تمارين، يومان أو ثلاثة في الأسبوع، بأداء صحيح.",
  updated: "تم التحديث في 26 أكتوبر 2026",
  byline: "بقلم سوسميت جالان، مدرب في Jalan PT، بونه.",
  credentialsNote:
    "ASCA المستوى 1 (القوة والتكييف البدني) وACE (التشريح والميكانيكا الحيوية). هذه شهادات يحملها المدرب. لا تؤيد أيّ من الجهتين هذا العمل أو هذا المقال.",
  labels: {
    home: "الرئيسية",
    blog: "المدونة",
    why: "لماذا",
    how: "كيف",
    dose: "الجرعة",
    sources: "المصادر",
    readIn: "اقرأ بلغة أخرى",
    programs: "اطّلع على البرامج",
    whatsapp: "اسأل عبر واتساب",
    whatsappText: "مرحباً سوسميت، قرأت مقال القوة والتكييف البدني للمبتدئين وأريد حجز استشارة",
    skip: "انتقل إلى المحتوى",
    crumb: "أفضل تمارين القوة والتكييف البدني للمبتدئين",
  },
  intro: [
    "تبدو عبارة القوة والتكييف البدني وكأنها للرياضيين فقط. ليست كذلك. إنها مهمتان: أن تصبح أقوى، وأن تبني لياقة قلبية تدوم.",
    "توصي منظمة الصحة العالمية البالغين بتمارين تقوية العضلات يومين أو أكثر في الأسبوع، إلى جانب 150 إلى 300 دقيقة من النشاط المعتدل، أو 75 إلى 150 دقيقة من النشاط الشديد.{1}",
    "ونصيحة ACSM للمبتدئين: يومان إلى 3 أيام في الأسبوع، والتمارين متعددة المفاصل أولاً، وأوزان تستطيع رفعها 8 إلى 12 مرة.{3}",
    "سبعة تمارين تكفي. القرفصاء، وثني الورك، والدفع، والسحب، والساق الواحدة، والحمل، والفترات المتقطعة.",
  ],
  listHeading: "أفضل 7 تمارين للقوة والتكييف البدني للمبتدئين",
  items: [
    {
      name: "القرفصاء بالدمبل أمام الصدر (Goblet squat)",
      why: "تمرين متعدد المفاصل للجزء السفلي. تضع ACSM التمارين متعددة المفاصل وللعضلات الكبيرة أولاً للمبتدئين.{3}",
      how: "أمسك دمبل أو كيتلبل واحداً عند صدرك، والمرفقان تحته. القدمان أعرض قليلاً من الوركين. انزل بين كعبيك. الصدر مرفوع. ادفع للأعلى بالقدم كاملة. لا يوجد وزن بعد؟ قارورة ماء ممتلئة تكفي.",
      dose: "2 إلى 3 مجموعات من 8 إلى 12 تكراراً.{3}",
    },
    {
      name: "الرفعة الرومانية بالدمبل",
      why: "ثني الورك. أوتار الركبة والألوية والظهر تعمل معاً. إنه النمط الذي ترفع به أي شيء من الأرض.",
      how: "الدمبلان أمام الفخذين. الركبتان مرتختان. ادفع الوركين للخلف، والأوزان تنزلق على الساقين، والظهر ممدود. توقف عندما تشعر بشد أوتار الركبة. قف بشدّ الألوية.",
      dose: "2 إلى 3 مجموعات من 8 إلى 12 تكراراً.",
    },
    {
      name: "الضغط المائل (Incline push-up)",
      why: "دفع أفقي يمكن تدريجه. ابدأ من ارتفاع تستطيع منه 8 تكرارات نظيفة، ثم أنزل اليدين كلما ازدادت قوتك.",
      how: "اليدان على طاولة مطبخ أو مكتب أو مقعد، أعرض قليلاً من الكتفين. الجسم خط واحد من الرأس إلى الكعبين. أنزل صدرك نحو الحافة. ادفع بعيداً. كلما انخفض السطح صار التمرين أصعب.",
      dose: "2 إلى 3 مجموعات من 8 إلى 12. انتقل إلى سطح أخفض عندما تصبح 12 سهلة.",
    },
    {
      name: "التجديف بالدمبل بذراع واحدة",
      why: "السحب. يوازن كل تمارين الدفع ويقوّي أعلى الظهر. والعمل بجهة واحدة في كل مرة ضمن توصيات ACSM أيضاً: التمارين الأحادية والثنائية كلاهما مطلوب.{3}",
      how: "يد وركبة على مقعد أو كرسي ثابت. الظهر مستوٍ. اسحب الدمبل نحو الورك، والمرفق قريب من الجسم. توقف لحظة. أنزله ببطء.",
      dose: "2 إلى 3 مجموعات من 8 إلى 12 لكل جهة.",
    },
    {
      name: "الطعنة الخلفية أو الصعود على درجة",
      why: "قوة الساق الواحدة والتوازن. يطلب بيان ACSM أيضاً تمارين عصبية حركية: التوازن والرشاقة والتناسق، يومين إلى 3 أيام في الأسبوع.{2}",
      how: "أرجع قدماً واحدة للخلف، وانزل حتى تنثني الركبتان نحو 90 درجة، ثم ادفع للأعلى بالقدم الأمامية. أو اصعد على درجة ثابتة وانزل بتحكم. أمسك الجدار إن احتجت.",
      dose: "مجموعتان من 6 إلى 10 لكل ساق.",
    },
    {
      name: "مشية المزارع (Farmer's carry)",
      why: "قبضة اليد والجذع والقوام في تمرين واحد. وقوة القبضة مهمة خارج النادي أيضاً: في دراسة شملت نحو 140 ألف بالغ في 17 دولة، ارتبط ضعف قوة القبضة بارتفاع معدلات الوفاة. كانت دراسة رصدية، فهي تُظهر ارتباطاً لا سبباً.{7}",
      how: "دمبل ثقيل أو حقيبة ممتلئة في كل يد. قف مستقيماً، والكتفان للأسفل. امشِ ببطء بخطوات قصيرة. لا تدع الأوزان تتأرجح ولا الجسم يميل.",
      dose: "3 إلى 4 مشيات من 20 إلى 30 متراً، أو 30 ثانية.",
    },
    {
      name: "فترات متقطعة على دراجة أو مشي صاعد أو درج",
      why: "نصف التكييف البدني. وجدت مراجعة شملت 28 تجربة على بالغين أصحاء بين 18 و45 عاماً أن التدريب المتقطع وتدريب التحمل المستمر كليهما حسّنا VO2max، مقياس اللياقة الهوائية، تحسّناً كبيراً. وتقدّم التدريب المتقطع قليلاً.{5}",
      how: "أحمِ جسمك 5 دقائق. ثم اعمل بجهد يجعل الكلام صعباً لمدة 30 إلى 60 ثانية. ثم بسهولة لمدة دقيقة إلى دقيقتين. كرّر. دراجة، أو مشي سريع صاعد، أو درج، أو جهاز تجديف. اختر شيئاً لا يحتاج إلى مهارة.",
      dose: "4 إلى 6 جولات، مرة أو مرتين في الأسبوع. ومشي أو ركوب دراجة بإيقاع ثابت في أيام أخرى.",
    },
  ],
  enoughHeading: "كم يكفي للمبتدئ؟",
  enough: [
    "الأيام: يومان إلى 3 أيام قوة في الأسبوع للمبتدئين، مع تمرين كل مجموعة عضلية رئيسية.{3}{2}",
    "الوزن: وزن تستطيع رفعه 8 إلى 12 مرة، من مجموعة إلى 3 مجموعات لكل تمرين. عندما تتجاوز هدفك بتكرار أو تكرارين في جلستين متتاليتين، زِد الوزن 2 إلى 10%.{3}",
    "لا تحتاج إلى أوزان ثقيلة للبدء. وجدت مراجعة شملت 21 دراسة أن نمو العضلات كان متقارباً مع الأوزان الخفيفة والثقيلة عندما أُدّيت المجموعات حتى الإجهاد. أما الأوزان الثقيلة فبنت قوة قصوى أكبر.{4}",
    "القوة والكارديو معاً؟ وجدت مراجعة شملت 43 دراسة أن إضافة التدريب الهوائي لم تُضعف نمو حجم العضلات ولا القوة القصوى. كانت مكاسب القوة الانفجارية أقل، خاصة عند أداء الاثنين في الجلسة نفسها.{6}",
    "وعن التدريب بإشراف: في تجربة صغيرة، اتبع 20 رجلاً متدرّباً البرنامج نفسه لمدة 12 أسبوعاً. المجموعة التي دُرّبت فردياً رفعت أوزاناً أثقل واكتسبت قوة أكبر من المجموعة التي تدرّبت وحدها.{8} دراسة صغيرة، على رجال متدرّبين لا مبتدئين. ومع ذلك، هذا سبب مراقبتنا لكل مجموعة.",
  ],
  sampleHeading: "نموذج لأسبوع مبتدئ",
  sampleLabel: "نموذج فقط. ليس وصفة. عدّله بحسب جسمك وتاريخك وأسبوعك.",
  sample: [
    "اليوم 1: إحماء، ثم القرفصاء بالدمبل، والضغط، والتجديف بذراع واحدة، ومشية المزارع. 2 إلى 3 مجموعات لكل تمرين.",
    "اليوم 2: من 30 إلى 40 دقيقة من المشي السريع أو ركوب الدراجة بسهولة.",
    "اليوم 3: إحماء، ثم الرفعة الرومانية، والطعنة الخلفية أو الصعود على درجة، والضغط، والتجديف. اختم بـ4 جولات من الفترات المتقطعة.",
    "اليوم 4: راحة، أو مشي خفيف.",
    "اليوم 5: إحماء، ثم تمارين اليوم 1 مرة أخرى. أضف تكراراً أو وزناً قليلاً حيث كانت الجلسة الماضية سهلة.",
    "اليومان 6 و7: يوم نشط ويوم راحة. حسب اختيارك.",
  ],
  coachedHeading: "تريد تدريباً مباشراً؟",
  coached: [
    "Iron Hour هي قوة وتكييف بدني بتدريب مباشر. 60 دقيقة، فردية. التجهيز في الدقيقة 0. الإحماء من الدقيقة 4. تبدأ الرفعة الرئيسية في الدقيقة 14. التمارين المساندة في 28. التهدئة في 50.",
    "التمارين أعلاه نقطة بداية معتادة. الوزن والتكرارات يُحدَّدان في كل جلسة، بناءً على ما نراه في المكالمة.",
    "تعود بعد انقطاع؟ Return: ‏45 دقيقة، 12 جلسة شهرياً يوماً بعد يوم. Lean Reset: ‏20 جلسة شهرياً، فردية. Open Floor مجموعة صغيرة.",
    "تدريب مباشر عبر Google Meet أو Zoom أو FaceTime. من بونه. بالهندية أو الإنجليزية. بتوقيت الهند (IST). لست متأكداً بعد؟ ابدأ باستشارة مدتها 30 دقيقة. إنها محادثة، وليست تدريباً. الحجز يثبّت موعداً. والرسوم يُتفق عليها مباشرة.",
  ],
  safetyHeading: "قبل أن تبدأ",
  safety:
    "معلومات عامة، وليست نصيحة طبية. وفق نموذج الفحص لدى ACSM: إذا كنت غير نشط، بلا أعراض، ولا تعاني من مرض معروف في القلب أو الأيض أو الكلى، يمكنك البدء بتمارين خفيفة إلى معتدلة دون إذن طبي والتدرّج. إن كانت لديك إحدى هذه الحالات، أو أعراض مثل ألم الصدر أو ضيق نفس غير معتاد أو دوار، فاحصل على إذن طبي أولاً.{9} الفترات المتقطعة جهد شديد، فتدرّج إليها. توقف إذا شعرت بألم أو بتوعّك، واطلبي المشورة أولاً إن كنتِ حاملاً أو أنجبتِ حديثاً.",
};

const hi: PostCopy = {
  metaTitle: "शुरुआती लोगों के लिए सबसे अच्छी स्ट्रेंथ और कंडीशनिंग एक्सरसाइज़: 7 | Jalan PT",
  metaDescription:
    "शुरुआती लोगों के लिए 7 सबसे अच्छी स्ट्रेंथ और कंडीशनिंग एक्सरसाइज़। WHO और ACSM क्या कहते हैं, कितने सेट और कितने दिन, और एक ऑनलाइन कोच का सैंपल हफ़्ता।",
  h1: "शुरुआती लोगों के लिए सबसे अच्छी स्ट्रेंथ और कंडीशनिंग एक्सरसाइज़: नींव के 7 मूव",
  dek: "ताक़त और स्टैमिना। सात मूव, हफ़्ते में दो या तीन दिन, सही तरीके से।",
  updated: "अपडेट: 26 अक्टूबर 2026",
  byline: "सुस्मित जालान, कोच, Jalan PT, पुणे।",
  credentialsNote:
    "ASCA लेवल 1 (स्ट्रेंथ और कंडीशनिंग) और ACE (एनाटॉमी और बायोमैकेनिक्स)। ये कोच के क्रेडेंशियल हैं। इनमें से कोई भी संस्था इस व्यवसाय या इस लेख का समर्थन नहीं करती।",
  labels: {
    home: "होम",
    blog: "ब्लॉग",
    why: "क्यों",
    how: "कैसे",
    dose: "कितना",
    sources: "स्रोत",
    readIn: "इस भाषा में पढ़ें",
    programs: "प्रोग्राम देखें",
    whatsapp: "WhatsApp पर पूछें",
    whatsappText: "नमस्ते सुस्मित, मैंने शुरुआती लोगों के लिए स्ट्रेंथ और कंडीशनिंग वाला लेख पढ़ा और कंसल्टेशन बुक करना है",
    skip: "सामग्री पर जाएँ",
    crumb: "शुरुआती लोगों के लिए स्ट्रेंथ और कंडीशनिंग",
  },
  intro: [
    "स्ट्रेंथ और कंडीशनिंग सुनकर लगता है यह खिलाड़ियों के लिए है। ऐसा नहीं है। इसके दो काम हैं: ताक़त बढ़ाना, और ऐसा स्टैमिना बनाना जो टिके।",
    "WHO वयस्कों से हफ़्ते में 2 या ज़्यादा दिन मांसपेशियाँ मज़बूत करने वाला काम चाहता है, साथ में 150 से 300 मिनट मध्यम गतिविधि, या 75 से 150 मिनट तेज़ गतिविधि।{1}",
    "शुरुआती लोगों के लिए ACSM की सलाह: हफ़्ते में 2 से 3 दिन, पहले मल्टी-जॉइंट मूव, और ऐसा वज़न जिसे आप 8 से 12 बार उठा सकें।{3}",
    "सात मूव काफ़ी हैं। स्क्वैट, हिंज, पुश, पुल, एक पैर, कैरी, और इंटरवल।",
  ],
  listHeading: "शुरुआती लोगों के लिए 7 सबसे अच्छी स्ट्रेंथ और कंडीशनिंग एक्सरसाइज़",
  items: [
    {
      name: "गॉब्लेट स्क्वैट",
      why: "निचले शरीर की मल्टी-जॉइंट लिफ़्ट। ACSM शुरुआती लोगों के लिए बड़ी मांसपेशियों वाले, मल्टी-जॉइंट मूव पहले रखता है।{3}",
      how: "एक डम्बल या केटलबेल सीने के पास पकड़िए, कोहनियाँ उसके नीचे। पैर कूल्हों से थोड़े चौड़े। एड़ियों के बीच नीचे बैठिए। सीना ऊपर। पूरे पैर से धक्का देकर उठिए। अभी वज़न नहीं? पानी की भरी बोतल चलेगी।",
      dose: "8 से 12 रेप के 2 से 3 सेट।{3}",
    },
    {
      name: "डम्बल रोमानियन डेडलिफ़्ट",
      why: "हिंज। हैमस्ट्रिंग, ग्लूट्स और पीठ एक साथ काम करते हैं। ज़मीन से कुछ भी उठाने का यही पैटर्न है।",
      how: "डम्बल जांघों के सामने। घुटने हल्के मुड़े। कूल्हे पीछे धकेलिए, वज़न पैरों के साथ नीचे खिसके, पीठ लंबी। हैमस्ट्रिंग में खिंचाव लगे तो रुकिए। ग्लूट्स कसकर खड़े होइए।",
      dose: "8 से 12 रेप के 2 से 3 सेट।",
    },
    {
      name: "इनक्लाइन पुश-अप",
      why: "हॉरिज़ॉन्टल पुश जिसे आसान या कठिन किया जा सकता है। वहाँ से शुरू कीजिए जहाँ 8 साफ़ रेप हों, फिर ताक़त बढ़े तो हाथ नीचे लाइए।",
      how: "हाथ किचन काउंटर, मेज़ या बेंच पर, कंधों से थोड़े चौड़े। सिर से एड़ी तक शरीर एक सीध में। सीना किनारे तक लाइए। धक्का देकर वापस। सतह जितनी नीची, उतना कठिन।",
      dose: "8 से 12 रेप के 2 से 3 सेट। 12 आसान लगें तो नीची सतह पर जाइए।",
    },
    {
      name: "वन-आर्म डम्बल रो",
      why: "पुल। यह सारे पुश को संतुलित करता है और ऊपरी पीठ मज़बूत करता है। एक बार में एक तरफ़ करना भी ACSM की सलाह में है: एक तरफ़ा और दोनों तरफ़ा, दोनों तरह के मूव ज़रूरी हैं।{3}",
      how: "एक हाथ और एक घुटना बेंच या मज़बूत कुर्सी पर। पीठ सीधी। डम्बल को कूल्हे की ओर खींचिए, कोहनी शरीर के पास। एक पल रुकिए। धीरे नीचे।",
      dose: "हर तरफ़ 8 से 12 रेप के 2 से 3 सेट।",
    },
    {
      name: "रिवर्स लंज या स्टेप-अप",
      why: "एक पैर की ताक़त और संतुलन। ACSM का पोज़िशन स्टैंड न्यूरोमोटर काम भी माँगता है: संतुलन, फुर्ती और तालमेल, हफ़्ते में 2 से 3 दिन।{2}",
      how: "एक पैर पीछे ले जाइए, दोनों घुटने लगभग 90 डिग्री मुड़ने तक नीचे आइए, फिर आगे वाले पैर से धक्का देकर ऊपर। या एक मज़बूत सीढ़ी पर चढ़िए और नियंत्रण से उतरिए। ज़रूरत हो तो दीवार पकड़िए।",
      dose: "हर पैर 6 से 10 रेप के 2 सेट।",
    },
    {
      name: "फ़ार्मर्स कैरी",
      why: "पकड़, धड़ और पोश्चर एक ही मूव में। पकड़ की ताक़त जिम के बाहर भी मायने रखती है: 17 देशों के लगभग 1,40,000 वयस्कों के एक अध्ययन में कम ग्रिप स्ट्रेंथ का संबंध ज़्यादा मृत्यु दर से था। यह ऑब्ज़र्वेशनल अध्ययन था, इसलिए यह संबंध दिखाता है, कारण नहीं।{7}",
      how: "हर हाथ में एक भारी डम्बल या भरा हुआ थैला। सीधे खड़े, कंधे नीचे। छोटे कदमों से धीरे चलिए। वज़न झूले नहीं, शरीर झुके नहीं।",
      dose: "20 से 30 मीटर या 30 सेकंड की 3 से 4 वॉक।",
    },
    {
      name: "साइकिल, चढ़ाई पर तेज़ चाल या सीढ़ियों पर इंटरवल",
      why: "कंडीशनिंग वाला हिस्सा। 18 से 45 साल के स्वस्थ वयस्कों पर 28 ट्रायल की एक समीक्षा में इंटरवल ट्रेनिंग और लगातार एंड्योरेंस ट्रेनिंग, दोनों से VO2max (एरोबिक फ़िटनेस का माप) में बड़ा सुधार हुआ। इंटरवल थोड़ा आगे रहे।{5}",
      how: "5 मिनट वार्म-अप। फिर 30 से 60 सेकंड इतनी मेहनत कि बात करना मुश्किल हो। फिर 1 से 2 मिनट आसान। दोहराइए। साइकिल, चढ़ाई पर तेज़ चाल, सीढ़ियाँ या रोइंग मशीन। कुछ ऐसा चुनिए जिसमें स्किल न लगे।",
      dose: "4 से 6 राउंड, हफ़्ते में एक या दो बार। बाकी दिनों में एक जैसी रफ़्तार से चलना या साइकिल।",
    },
  ],
  enoughHeading: "शुरुआत में कितना काफ़ी है?",
  enough: [
    "दिन: शुरुआती लोगों के लिए हफ़्ते में 2 से 3 स्ट्रेंथ दिन, हर बड़े मांसपेशी समूह पर काम।{3}{2}",
    "वज़न: ऐसा वज़न जो 8 से 12 बार उठे, हर मूव के 1 से 3 सेट। जब लगातार दो सेशन में लक्ष्य से 1 से 2 रेप ज़्यादा हो जाएँ, तो वज़न 2 से 10% बढ़ाइए।{3}",
    "शुरू करने के लिए भारी वज़न ज़रूरी नहीं। 21 अध्ययनों की एक समीक्षा में, जब सेट थकने तक किए गए, तो हल्के और भारी वज़न से मांसपेशियों की बढ़त लगभग बराबर रही। भारी वज़न से अधिकतम ताक़त ज़्यादा बढ़ी।{4}",
    "स्ट्रेंथ और कार्डियो साथ में? 43 अध्ययनों की एक समीक्षा में एरोबिक ट्रेनिंग जोड़ने से मांसपेशियों के आकार या अधिकतम ताक़त की बढ़त कम नहीं हुई। विस्फोटक ताक़त की बढ़त कम रही, ख़ासकर जब दोनों एक ही सेशन में किए गए।{6}",
    "कोचिंग पर: एक छोटे ट्रायल में पहले से ट्रेनिंग करने वाले 20 पुरुषों को 12 हफ़्ते का एक ही प्लान दिया गया। 1:1 कोचिंग वाले ग्रुप ने भारी वज़न उठाया और अकेले ट्रेनिंग करने वालों से ज़्यादा ताक़त पाई।{8} छोटा अध्ययन, ट्रेंड पुरुष, शुरुआती नहीं। फिर भी, इसीलिए हम हर सेट देखते हैं।",
  ],
  sampleHeading: "शुरुआती लोगों का एक सैंपल हफ़्ता",
  sampleLabel: "सिर्फ़ सैंपल। प्रिस्क्रिप्शन नहीं। अपने शरीर, इतिहास और हफ़्ते के हिसाब से बदलें।",
  sample: [
    "दिन 1: वार्म-अप, फिर गॉब्लेट स्क्वैट, पुश-अप, वन-आर्म रो, फ़ार्मर्स कैरी। हर मूव के 2 से 3 सेट।",
    "दिन 2: 30 से 40 मिनट तेज़ चाल या आसान साइकिलिंग।",
    "दिन 3: वार्म-अप, फिर रोमानियन डेडलिफ़्ट, रिवर्स लंज या स्टेप-अप, पुश-अप, रो। आख़िर में इंटरवल के 4 राउंड।",
    "दिन 4: आराम, या हल्की सैर।",
    "दिन 5: वार्म-अप, फिर दिन 1 के मूव दोबारा। जहाँ पिछला सेशन आसान लगा, वहाँ एक रेप या थोड़ा वज़न बढ़ाइए।",
    "दिन 6 और 7: एक एक्टिव दिन और एक आराम का दिन। आपकी मर्ज़ी।",
  ],
  coachedHeading: "लाइव कोचिंग चाहिए?",
  coached: [
    "Iron Hour लाइव कोचिंग के साथ स्ट्रेंथ और कंडीशनिंग है। 60 मिनट, 1:1। मिनट 0 पर सेट-अप। मिनट 4 से वार्म-अप। मुख्य लिफ़्ट मिनट 14 पर। एक्सेसरीज़ 28 पर। कूल-डाउन 50 पर।",
    "ऊपर के मूव एक आम शुरुआती बिंदु हैं। वज़न और रेप हर सेशन में तय होते हैं, जो हम कॉल पर देखते हैं उसके हिसाब से।",
    "ब्रेक के बाद लौट रहे हैं? Return: 45 मिनट, महीने में 12 सेशन, एक दिन छोड़कर। Lean Reset: महीने में 20 सेशन, 1:1। Open Floor छोटा ग्रुप है।",
    "Google Meet, Zoom या FaceTime पर लाइव कोचिंग। पुणे से। हिंदी या अंग्रेज़ी में। IST पर। अभी पक्का नहीं? 30 मिनट के कंसल्टेशन से शुरू करें। यह बातचीत है, ट्रेनिंग नहीं। बुकिंग एक समय रोकती है। फ़ीस सीधे तय होती है।",
  ],
  safetyHeading: "शुरू करने से पहले",
  safety:
    "सामान्य जानकारी, चिकित्सा सलाह नहीं। ACSM के स्क्रीनिंग मॉडल के अनुसार: अगर आप निष्क्रिय हैं, कोई लक्षण नहीं हैं और हृदय, मेटाबॉलिक या किडनी की कोई ज्ञात बीमारी नहीं है, तो आप बिना मेडिकल अनुमति के हल्का से मध्यम व्यायाम शुरू करके धीरे-धीरे बढ़ा सकते हैं। अगर इनमें से कोई बीमारी है, या सीने में दर्द, असामान्य साँस फूलना या चक्कर जैसे लक्षण हैं, तो पहले मेडिकल अनुमति लें।{9} इंटरवल तेज़ मेहनत हैं, उन तक धीरे-धीरे पहुँचिए। दर्द हो या तबीयत बिगड़े तो रुक जाइए, और गर्भावस्था में या हाल में बच्चा होने के बाद पहले सलाह लें।",
};

const es: PostCopy = {
  metaTitle: "Ejercicios de fuerza y acondicionamiento para principiantes: 7 | Jalan PT",
  metaDescription:
    "Los 7 mejores ejercicios de fuerza y acondicionamiento para principiantes. Qué dicen la OMS y el ACSM, cuántas series y días, y una semana de ejemplo.",
  h1: "Mejores ejercicios de fuerza y acondicionamiento para principiantes: 7 para construir la base",
  dek: "Fuerza y motor. Siete ejercicios, dos o tres días por semana, bien hechos.",
  updated: "Actualizado el 26 de octubre de 2026",
  byline: "Por Susmit Jalan, entrenador en Jalan PT, Pune.",
  credentialsNote:
    "ASCA Nivel 1 (fuerza y acondicionamiento) y ACE (anatomía y biomecánica). Son credenciales del entrenador. Ninguna de las dos entidades respalda este negocio ni este artículo.",
  labels: {
    home: "Inicio",
    blog: "Blog",
    why: "Por qué",
    how: "Cómo",
    dose: "Dosis",
    sources: "Fuentes",
    readIn: "Leer en",
    programs: "Ver los programas",
    whatsapp: "Preguntar por WhatsApp",
    whatsappText: "Hola Susmit, leí el artículo sobre fuerza y acondicionamiento para principiantes y quiero reservar una consulta",
    skip: "Saltar al contenido",
    crumb: "Fuerza y acondicionamiento para principiantes",
  },
  intro: [
    "Fuerza y acondicionamiento suena a cosa de atletas. No lo es. Son dos tareas: ponerte más fuerte y construir un motor que aguante.",
    "La OMS pide a los adultos actividades de fortalecimiento muscular 2 o más días por semana, además de 150 a 300 minutos de actividad moderada, o 75 a 150 minutos de actividad vigorosa.{1}",
    "El consejo del ACSM para principiantes: 2 a 3 días por semana, primero los ejercicios multiarticulares y cargas que puedas levantar de 8 a 12 veces.{3}",
    "Siete ejercicios lo cubren. Sentadilla, bisagra, empuje, tirón, una pierna, acarreo e intervalos.",
  ],
  listHeading: "Los 7 mejores ejercicios de fuerza y acondicionamiento para principiantes",
  items: [
    {
      name: "Sentadilla goblet",
      why: "Un ejercicio multiarticular de tren inferior. El ACSM pone primero los ejercicios multiarticulares y de grandes grupos musculares para principiantes.{3}",
      how: "Sujeta una mancuerna o una kettlebell a la altura del pecho, codos debajo. Pies algo más abiertos que la cadera. Baja entre los talones. Pecho alto. Sube empujando con todo el pie. ¿Aún sin peso? Una botella de agua llena sirve.",
      dose: "2 a 3 series de 8 a 12.{3}",
    },
    {
      name: "Peso muerto rumano con mancuernas",
      why: "La bisagra. Isquiotibiales, glúteos y espalda trabajando juntos. Es el patrón para levantar cualquier cosa del suelo.",
      how: "Mancuernas delante de los muslos. Rodillas suaves. Lleva la cadera atrás, las pesas bajan rozando las piernas, espalda larga. Para cuando tiren los isquiotibiales. Sube apretando los glúteos.",
      dose: "2 a 3 series de 8 a 12.",
    },
    {
      name: "Flexión inclinada",
      why: "Un empuje horizontal que puedes graduar. Empieza a la altura en la que hagas 8 repeticiones limpias y baja las manos a medida que ganes fuerza.",
      how: "Manos en una encimera, mesa o banco, algo más abiertas que los hombros. Cuerpo en línea de la cabeza a los talones. Baja el pecho hasta el borde. Empuja. Cuanto más baja la superficie, más difícil.",
      dose: "2 a 3 series de 8 a 12. Baja de superficie cuando 12 te resulten fáciles.",
    },
    {
      name: "Remo a una mano con mancuerna",
      why: "El tirón. Equilibra todo el empuje y trabaja la espalda alta. Trabajar un lado cada vez también está en el consejo del ACSM: ejercicios unilaterales y bilaterales.{3}",
      how: "Una mano y una rodilla en un banco o una silla firme. Espalda plana. Tira de la mancuerna hacia la cadera, codo pegado. Pausa. Baja despacio.",
      dose: "2 a 3 series de 8 a 12 por lado.",
    },
    {
      name: "Zancada atrás o subida al escalón",
      why: "Fuerza a una pierna y equilibrio. La posición del ACSM también pide trabajo neuromotor: equilibrio, agilidad y coordinación, 2 a 3 días por semana.{2}",
      how: "Lleva un pie atrás, baja hasta que ambas rodillas se doblen unos 90 grados y vuelve empujando con el pie delantero. O sube a un escalón firme y baja con control. Apóyate en la pared si lo necesitas.",
      dose: "2 series de 6 a 10 por pierna.",
    },
    {
      name: "Paseo del granjero",
      why: "Agarre, tronco y postura en un solo ejercicio. La fuerza de agarre importa fuera del gimnasio: en un estudio con casi 140.000 adultos de 17 países, menos fuerza de agarre se asoció con mayor mortalidad. Era un estudio observacional: muestra una relación, no una causa.{7}",
      how: "Una mancuerna pesada o una bolsa llena en cada mano. Erguido, hombros abajo. Camina despacio con pasos cortos. Que las pesas no se balanceen y el cuerpo no se incline.",
      dose: "3 a 4 paseos de 20 a 30 metros, o 30 segundos.",
    },
    {
      name: "Intervalos en bici, cuesta arriba o escaleras",
      why: "La mitad del acondicionamiento. Una revisión de 28 ensayos en adultos sanos de 18 a 45 años encontró que el entrenamiento por intervalos y el de resistencia continuo mejoraron mucho el VO2max, la medida de la forma aeróbica. Los intervalos quedaron un poco por delante.{5}",
      how: "Calienta 5 minutos. Luego ve lo bastante fuerte como para que hablar cueste, durante 30 a 60 segundos. Suave de 1 a 2 minutos. Repite. Bici, caminar rápido cuesta arriba, escaleras o remo. Elige algo que no requiera técnica.",
      dose: "4 a 6 rondas, una o dos veces por semana. Caminar o pedalear a ritmo constante otros días.",
    },
  ],
  enoughHeading: "¿Cuánto es suficiente para un principiante?",
  enough: [
    "Días: 2 a 3 días de fuerza por semana para principiantes, trabajando cada grupo muscular principal.{3}{2}",
    "Carga: un peso que puedas levantar de 8 a 12 veces, de 1 a 3 series por ejercicio. Cuando superes tu objetivo en 1 o 2 repeticiones dos sesiones seguidas, sube un 2 a 10%.{3}",
    "No hace falta pesado para empezar. Una revisión de 21 estudios encontró un crecimiento muscular similar con cargas ligeras y pesadas cuando las series se llevaron al fallo. Las cargas pesadas dieron más fuerza máxima.{4}",
    "¿Fuerza y cardio juntos? Una revisión de 43 estudios encontró que añadir entrenamiento aeróbico no frenó las ganancias de tamaño muscular ni de fuerza máxima. Las ganancias de fuerza explosiva fueron menores, sobre todo al hacer ambos en la misma sesión.{6}",
    "Sobre la supervisión: en un ensayo pequeño, 20 hombres que ya entrenaban siguieron el mismo plan de 12 semanas. El grupo con entrenador 1:1 levantó más peso y ganó más fuerza que el grupo que entrenó solo.{8} Estudio pequeño, hombres entrenados, no principiantes. Aun así, por eso miramos cada serie.",
  ],
  sampleHeading: "Una semana de ejemplo para principiantes",
  sampleLabel: "Solo un ejemplo. No es una prescripción. Ajústalo a tu cuerpo, tu historia y tu semana.",
  sample: [
    "Día 1: calentamiento, luego sentadilla goblet, flexión, remo a una mano y paseo del granjero. 2 a 3 series de cada uno.",
    "Día 2: 30 a 40 minutos de caminata rápida o bici suave.",
    "Día 3: calentamiento, luego peso muerto rumano, zancada atrás o subida al escalón, flexión y remo. Termina con 4 rondas de intervalos.",
    "Día 4: descanso o un paseo suave.",
    "Día 5: calentamiento y los ejercicios del día 1 otra vez. Suma una repetición o un poco de carga donde la última sesión fue fácil.",
    "Días 6 y 7: un día activo y uno de descanso. Tú eliges.",
  ],
  coachedHeading: "¿Lo quieres con entrenador en directo?",
  coached: [
    "Iron Hour es fuerza y acondicionamiento con entrenador en directo. 60 minutos, 1:1. Preparación en el minuto 0. Calentamiento desde el minuto 4. El levantamiento principal empieza en el 14. Accesorios en el 28. Vuelta a la calma en el 50.",
    "Los ejercicios de arriba son un punto de partida habitual. La carga y las repeticiones se ajustan en cada sesión, según lo que vemos en la llamada.",
    "¿Vuelves tras un parón? Return: 45 minutos, 12 sesiones al mes en días alternos. Lean Reset: 20 sesiones al mes, 1:1. Open Floor es un grupo pequeño.",
    "Entrenamiento en directo por Google Meet, Zoom o FaceTime. Desde Pune. En hindi o inglés. En horario IST. ¿Aún no lo tienes claro? Empieza con una consulta de 30 minutos. Es una conversación, no un entrenamiento. La reserva guarda una hora. La tarifa se acuerda directamente.",
  ],
  safetyHeading: "Antes de empezar",
  safety:
    "Información general, no consejo médico. Según el modelo de evaluación del ACSM: si eres inactivo, no tienes síntomas ni enfermedad cardíaca, metabólica o renal conocida, puedes empezar con ejercicio ligero a moderado sin autorización médica e ir subiendo poco a poco. Si tienes alguna de esas enfermedades, o síntomas como dolor en el pecho, falta de aire inusual o mareo, pide autorización médica primero.{9} Los intervalos son trabajo vigoroso, así que llega a ellos poco a poco. Para si sientes dolor o te encuentras mal, y consulta antes si estás embarazada o has dado a luz hace poco.",
};

const zh: PostCopy = {
  metaTitle: "初学者最佳力量与体能训练动作：7个 | Jalan PT",
  metaDescription:
    "初学者的7个最佳力量与体能训练动作。世界卫生组织和ACSM怎么说，练几组、每周几天，附在线教练的初学者一周示例。",
  h1: "初学者最佳力量与体能训练动作：打基础的7个动作",
  dek: "力量加体能。七个动作，每周两到三天，做对就好。",
  updated: "更新于2026年10月26日",
  byline: "作者：Susmit Jalan，Jalan PT教练，浦那。",
  credentialsNote:
    "ASCA一级（力量与体能）和ACE（解剖学与生物力学）。这些是教练持有的资质。两家机构均不为本业务或本文背书。",
  labels: {
    home: "首页",
    blog: "博客",
    why: "为什么",
    how: "怎么做",
    dose: "剂量",
    sources: "参考来源",
    readIn: "阅读其他语言版本",
    programs: "查看课程",
    whatsapp: "在WhatsApp上咨询",
    whatsappText: "你好Susmit，我读了关于初学者力量与体能训练的文章，想预约一次咨询",
    skip: "跳到正文",
    crumb: "初学者最佳力量与体能训练动作",
  },
  intro: [
    "“力量与体能”听起来像运动员的事。其实不是。它就是两件事：变得更强，以及练出持久的体能。",
    "世界卫生组织建议成年人每周至少2天做肌肉强化活动，另加150到300分钟中等强度活动，或75到150分钟高强度活动。{1}",
    "ACSM给初学者的建议：每周2到3天，先做多关节动作，用能举8到12次的重量。{3}",
    "七个动作就够了。深蹲、髋铰链、推、拉、单腿、负重行走和间歇。",
  ],
  listHeading: "初学者的7个最佳力量与体能训练动作",
  items: [
    {
      name: "高脚杯深蹲",
      why: "一个下肢多关节动作。ACSM建议初学者先做大肌群、多关节的动作。{3}",
      how: "在胸前握住一个哑铃或壶铃，肘部在下方。双脚略宽于髋。在两脚跟之间向下坐。挺胸。用整个脚掌发力站起。还没有器械？一瓶装满水的瓶子也行。",
      dose: "2到3组，每组8到12次。{3}",
    },
    {
      name: "哑铃罗马尼亚硬拉",
      why: "髋铰链。腘绳肌、臀部和背部一起发力。这就是从地上拿起任何东西的动作模式。",
      how: "哑铃放在大腿前。膝盖微屈。臀部向后推，哑铃贴着腿往下滑，背部保持伸长。腘绳肌有拉伸感时停下。夹紧臀部站起。",
      dose: "2到3组，每组8到12次。",
    },
    {
      name: "上斜俯卧撑",
      why: "可调节难度的水平推。从能做8次标准动作的高度开始，变强后再把手放低。",
      how: "双手放在厨房台面、桌子或长凳上，略宽于肩。从头到脚跟成一条直线。胸口下降到边缘。推起。支撑面越低越难。",
      dose: "2到3组，每组8到12次。12次变轻松时换更低的支撑面。",
    },
    {
      name: "单臂哑铃划船",
      why: "拉的动作。平衡所有推的训练，练上背部。一次练一侧也在ACSM的建议里：单侧和双侧动作都要有。{3}",
      how: "一只手和一侧膝盖放在长凳或结实的椅子上。背部平直。把哑铃拉向髋部，肘部贴近身体。停一下。慢慢放下。",
      dose: "每侧2到3组，每组8到12次。",
    },
    {
      name: "后撤弓步或登台阶",
      why: "单腿力量和平衡。ACSM立场声明也建议做神经肌肉训练：平衡、灵敏和协调，每周2到3天。{2}",
      how: "一只脚向后撤，下蹲到双膝约90度，再用前脚发力站起。或者登上一个稳固的台阶，再有控制地下来。需要的话扶墙。",
      dose: "每条腿2组，每组6到10次。",
    },
    {
      name: "农夫行走",
      why: "握力、躯干和姿态，一个动作全练到。握力在健身房外也重要：一项涉及17个国家近14万名成年人的研究发现，握力较低与较高的死亡率相关。这是观察性研究，只说明相关，不说明因果。{7}",
      how: "每只手拿一个重哑铃或一个装满的袋子。站直，肩膀下沉。小步慢走。别让重量晃动，身体也别歪。",
      dose: "3到4趟，每趟20到30米，或30秒。",
    },
    {
      name: "单车、上坡快走或爬楼梯间歇",
      why: "体能的那一半。一篇纳入28项试验、对象为18到45岁健康成年人的综述发现，间歇训练和持续耐力训练都能大幅提升VO2max（有氧体能的指标），间歇训练略胜一筹。{5}",
      how: "热身5分钟。然后用让你说话困难的强度做30到60秒。再轻松1到2分钟。重复。单车、上坡快走、爬楼梯或划船机都行。选不需要技术的方式。",
      dose: "4到6轮，每周一到两次。其他日子以稳定节奏步行或骑车。",
    },
  ],
  enoughHeading: "初学者练多少才够？",
  enough: [
    "天数：初学者每周2到3个力量训练日，练到每个主要肌群。{3}{2}",
    "重量：能举8到12次的重量，每个动作1到3组。连续两次训练都能比目标多做1到2次时，加重2%到10%。{3}",
    "开始时不需要大重量。一篇纳入21项研究的综述发现，当每组都做到力竭时，轻重量和大重量带来的肌肉增长相近。大重量带来更多的最大力量。{4}",
    "力量和有氧一起练？一篇纳入43项研究的综述发现，加入有氧训练并没有削弱肌肉体积和最大力量的增长。爆发力的提升较小，尤其是两者在同一次训练里完成时。{6}",
    "关于有人指导：在一项小型试验中，20名有训练基础的男性按同一个12周计划训练。一对一有教练指导的一组用了更大的重量，力量增长也比独自训练的一组更多。{8}样本小，对象是有训练基础的男性，不是初学者。但这正是我们盯着每一组的原因。",
  ],
  sampleHeading: "初学者一周示例",
  sampleLabel: "仅为示例，不是处方。请根据你的身体、病史和这一周的安排调整。",
  sample: [
    "第1天：热身，然后高脚杯深蹲、俯卧撑、单臂划船、农夫行走。每个动作2到3组。",
    "第2天：快走或轻松骑车30到40分钟。",
    "第3天：热身，然后罗马尼亚硬拉、后撤弓步或登台阶、俯卧撑、划船。最后做4轮间歇。",
    "第4天：休息，或轻松散步。",
    "第5天：热身，然后重复第1天的动作。上次觉得轻松的地方，加一次或加一点重量。",
    "第6、7天：一天活动，一天休息。你来选。",
  ],
  coachedHeading: "想要真人实时指导？",
  coached: [
    "Iron Hour就是有真人实时指导的力量与体能训练。60分钟，一对一。第0分钟准备。第4分钟开始热身。第14分钟开始主项。第28分钟辅助训练。第50分钟放松。",
    "上面的动作是常见的起点。重量和次数每次训练都会根据我们在通话中看到的情况来定。",
    "停练后回归？Return：每次45分钟，每月12次，隔天进行。Lean Reset：每月20次，一对一。Open Floor是小组课。",
    "通过Google Meet、Zoom或FaceTime实时指导。来自浦那。用印地语或英语。按印度标准时间（IST）。还不确定？先从30分钟咨询开始。这是一次对话，不是训练。预约只是保留时间。费用直接商定。",
  ],
  safetyHeading: "开始之前",
  safety:
    "一般信息，不是医疗建议。根据ACSM的筛查模型：如果你平时不运动、没有症状，也没有已知的心脏、代谢或肾脏疾病，可以不经医生许可从低到中等强度开始，并逐步增加。如果你有上述疾病之一，或有胸痛、异常气短或头晕等症状，请先获得医生许可。{9}间歇训练属于高强度，请循序渐进。感到疼痛或不适时立即停止；怀孕或刚生完孩子，请先咨询专业人士。",
};

const ja: PostCopy = {
  metaTitle: "初心者向けストレングス＆コンディショニング種目7選 | Jalan PT",
  metaDescription:
    "初心者におすすめのストレングス＆コンディショニング7種目。WHOとACSMが示すこと、セット数と頻度、オンラインコーチによる初心者の1週間のサンプル。",
  h1: "初心者に最適なストレングス＆コンディショニング種目：土台をつくる7種目",
  dek: "筋力と持久力。7種目を週2〜3日、正しいフォームで。",
  updated: "2026年10月26日更新",
  byline: "執筆：Susmit Jalan（Jalan PT コーチ、プネー）",
  credentialsNote:
    "ASCA レベル1（ストレングス＆コンディショニング）および ACE（解剖学とバイオメカニクス）。これらはコーチが保有する資格です。いずれの団体も本事業や本記事を推奨するものではありません。",
  labels: {
    home: "ホーム",
    blog: "ブログ",
    why: "なぜ",
    how: "やり方",
    dose: "量",
    sources: "出典",
    readIn: "他の言語で読む",
    programs: "プログラムを見る",
    whatsapp: "WhatsAppで質問する",
    whatsappText: "こんにちは、Susmitさん。初心者向けストレングス＆コンディショニングの記事を読みました。相談を予約したいです",
    skip: "本文へスキップ",
    crumb: "初心者に最適なストレングス＆コンディショニング種目",
  },
  intro: [
    "ストレングス＆コンディショニングと聞くと、アスリートのものに思えるかもしれません。違います。やることは2つ。強くなること、そして長く続く持久力をつくること。",
    "WHOは成人に、週2日以上の筋力強化活動に加えて、中強度の活動を週150〜300分、または高強度の活動を週75〜150分行うよう勧めています。{1}",
    "ACSMの初心者向けの助言は、週2〜3日、多関節種目を先に、8〜12回挙げられる重さで。{3}",
    "7種目でカバーできます。スクワット、ヒンジ、プッシュ、プル、片脚、キャリー、インターバル。",
  ],
  listHeading: "初心者に最適なストレングス＆コンディショニング7種目",
  items: [
    {
      name: "ゴブレットスクワット",
      why: "下半身の多関節種目。ACSMは初心者に、大筋群・多関節の種目を先に行うよう勧めています。{3}",
      how: "ダンベルかケトルベルを1つ胸の前で持ち、肘はその下に。足は腰幅より少し広く。かかとの間に腰を下ろす。胸を高く。足裏全体で押して立ち上がる。まだ重りがなければ、水を満たしたボトルで十分です。",
      dose: "8〜12回を2〜3セット。{3}",
    },
    {
      name: "ダンベル・ルーマニアンデッドリフト",
      why: "ヒンジ。ハムストリング、お尻、背中が一緒に働きます。床から物を持ち上げるときの動きそのものです。",
      how: "ダンベルは太ももの前。膝は軽く曲げる。お尻を後ろへ引き、ダンベルは脚に沿って下ろし、背中は長く。ハムストリングが張ったら止める。お尻を締めて立ち上がる。",
      dose: "8〜12回を2〜3セット。",
    },
    {
      name: "インクライン腕立て伏せ",
      why: "難易度を調整できる水平プッシュ。きれいに8回できる高さから始め、強くなったら手の位置を下げていきます。",
      how: "キッチンカウンター、机、ベンチに手をつく。肩幅より少し広く。頭からかかとまで一直線。胸を縁まで下ろす。押し返す。台が低いほど難しくなります。",
      dose: "8〜12回を2〜3セット。12回が楽になったら低い台へ。",
    },
    {
      name: "ワンアーム・ダンベルロウ",
      why: "プル。プッシュ系とのバランスをとり、背中の上部を鍛えます。片側ずつ行う種目もACSMの助言に含まれます。片側・両側の種目をどちらも取り入れること。{3}",
      how: "片手と片膝をベンチか丈夫な椅子に。背中は平らに。ダンベルを腰に向かって引き、肘は体の近くに。一瞬止める。ゆっくり下ろす。",
      dose: "左右それぞれ8〜12回を2〜3セット。",
    },
    {
      name: "リバースランジ、またはステップアップ",
      why: "片脚の筋力とバランス。ACSMのポジションスタンドは、バランス・敏捷性・協調性を含む神経運動トレーニングも週2〜3日勧めています。{2}",
      how: "片足を後ろへ引き、両膝がおよそ90度になるまで下ろし、前足で押して戻る。または安定した段に上り、コントロールして下りる。必要なら壁に手を。",
      dose: "左右それぞれ6〜10回を2セット。",
    },
    {
      name: "ファーマーズキャリー",
      why: "握力、体幹、姿勢を1種目で。握力はジムの外でも大切です。17か国の約14万人の成人を対象とした研究では、握力が低いことが死亡率の高さと関連していました。観察研究なので、示しているのは関連であり因果ではありません。{7}",
      how: "両手に重いダンベルか、中身の詰まった袋を。まっすぐ立ち、肩は下げる。小さな歩幅でゆっくり歩く。重りを揺らさず、体を傾けない。",
      dose: "20〜30メートル、または30秒を3〜4本。",
    },
    {
      name: "バイク、上り坂の早歩き、階段でのインターバル",
      why: "コンディショニングの半分。18〜45歳の健康な成人を対象とした28件の試験のレビューでは、インターバルトレーニングと持続的な持久力トレーニングのどちらもVO2max（有酸素能力の指標）を大きく向上させ、インターバルがわずかに上回りました。{5}",
      how: "5分間ウォームアップ。次に、会話がきつい強度で30〜60秒。楽なペースで1〜2分。繰り返す。バイク、上り坂の早歩き、階段、ローイングマシン。技術のいらないものを選びましょう。",
      dose: "4〜6ラウンドを週1〜2回。ほかの日は一定ペースのウォーキングやサイクリングを。",
    },
  ],
  enoughHeading: "初心者はどれくらいやればいい？",
  enough: [
    "頻度：初心者は週2〜3日の筋力トレーニングで、主要な筋群をすべて鍛えます。{3}{2}",
    "重さ：8〜12回挙げられる重さで、1種目1〜3セット。2回続けて目標回数を1〜2回上回ったら、重さを2〜10%増やします。{3}",
    "最初から重い重量は必要ありません。21件の研究のレビューでは、セットを限界まで行った場合、軽い重量でも重い重量でも筋肥大は同程度でした。最大筋力は重い重量のほうが伸びました。{4}",
    "筋トレと有酸素を一緒に？43件の研究のレビューでは、有酸素トレーニングを加えても筋肉の大きさや最大筋力の伸びは妨げられませんでした。爆発的な筋力の伸びは小さく、特に同じセッション内で両方を行った場合に顕著でした。{6}",
    "指導について：小規模な試験で、トレーニング経験のある男性20人が同じ12週間のプログラムを行いました。1対1で指導を受けたグループは、一人で行ったグループより重い重量を扱い、筋力も大きく伸びました。{8}小規模で、対象は初心者ではなく経験者の男性です。それでも、私たちが毎セットを見る理由はここにあります。",
  ],
  sampleHeading: "初心者の1週間のサンプル",
  sampleLabel: "あくまでサンプルです。処方ではありません。ご自身の体、既往歴、その週の予定に合わせて調整してください。",
  sample: [
    "1日目：ウォームアップの後、ゴブレットスクワット、腕立て伏せ、ワンアームロウ、ファーマーズキャリー。各2〜3セット。",
    "2日目：早歩きか軽めのサイクリングを30〜40分。",
    "3日目：ウォームアップの後、ルーマニアンデッドリフト、リバースランジかステップアップ、腕立て伏せ、ロウ。最後にインターバルを4ラウンド。",
    "4日目：休養、または軽い散歩。",
    "5日目：ウォームアップの後、1日目の種目をもう一度。前回楽だった種目は1回か少しだけ重さを足す。",
    "6日目と7日目：アクティブな日と休養日を1日ずつ。お好みで。",
  ],
  coachedHeading: "ライブで指導を受けたい？",
  coached: [
    "Iron Hourは、ライブ指導によるストレングス＆コンディショニングです。60分、1対1。0分にセットアップ。4分からウォームアップ。14分にメインリフト。28分に補助種目。50分にクールダウン。",
    "上の種目はよくあるスタート地点です。重さと回数は、通話で見た様子をもとに毎回決めます。",
    "ブランクからの再開なら、Return：45分、月12回、1日おき。Lean Reset：月20回、1対1。Open Floorは少人数グループです。",
    "Google Meet、Zoom、FaceTimeでのライブ指導。プネーから。ヒンディー語または英語で。インド標準時（IST）です。まだ迷っているなら、30分の相談から。会話であってトレーニングではありません。予約は時間を確保するものです。料金は直接ご相談のうえ決めます。",
  ],
  safetyHeading: "始める前に",
  safety:
    "一般的な情報であり、医学的な助言ではありません。ACSMのスクリーニングモデルでは、運動習慣がなく、症状がなく、心臓・代謝・腎臓の病気が知られていなければ、医師の許可なしに軽い〜中程度の運動を始め、少しずつ増やしてよいとされています。これらの病気がある場合や、胸の痛み、いつもと違う息切れ、めまいなどの症状がある場合は、先に医師の許可を得てください。{9}インターバルは高強度の運動なので、段階的に取り入れてください。痛みや体調不良を感じたらすぐにやめ、妊娠中や出産後まもない場合は先に専門家に相談してください。",
};

const gu: PostCopy = {
  metaTitle: "શરૂઆત કરનારાઓ માટે શ્રેષ્ઠ સ્ટ્રેન્થ અને કન્ડિશનિંગ એક્સરસાઇઝ: 7 | Jalan PT",
  metaDescription:
    "શરૂઆત કરનારાઓ માટે 7 શ્રેષ્ઠ સ્ટ્રેન્થ અને કન્ડિશનિંગ એક્સરસાઇઝ. WHO અને ACSM શું કહે છે, કેટલા સેટ અને કેટલા દિવસ, અને ઑનલાઇન કોચનું એક સેમ્પલ અઠવાડિયું.",
  h1: "શરૂઆત કરનારાઓ માટે શ્રેષ્ઠ સ્ટ્રેન્થ અને કન્ડિશનિંગ એક્સરસાઇઝ: પાયાના 7 મૂવ",
  dek: "તાકાત અને સ્ટેમિના. સાત મૂવ, અઠવાડિયામાં બે કે ત્રણ દિવસ, સાચી રીતે.",
  updated: "અપડેટ: 26 ઑક્ટોબર 2026",
  byline: "સુસ્મિત જાલાન, કોચ, Jalan PT, પુણે.",
  credentialsNote:
    "ASCA લેવલ 1 (સ્ટ્રેન્થ અને કન્ડિશનિંગ) અને ACE (એનાટોમી અને બાયોમિકેનિક્સ). આ કોચના ક્રેડેન્શિયલ છે. આમાંથી કોઈ સંસ્થા આ વ્યવસાય કે આ લેખનું સમર્થન કરતી નથી.",
  labels: {
    home: "હોમ",
    blog: "બ્લોગ",
    why: "શા માટે",
    how: "કેવી રીતે",
    dose: "કેટલું",
    sources: "સ્રોતો",
    readIn: "આ ભાષામાં વાંચો",
    programs: "પ્રોગ્રામ જુઓ",
    whatsapp: "WhatsApp પર પૂછો",
    whatsappText: "નમસ્તે સુસ્મિત, મેં શરૂઆત કરનારાઓ માટે સ્ટ્રેન્થ અને કન્ડિશનિંગ વિશેનો લેખ વાંચ્યો અને કન્સલ્ટેશન બુક કરવા માંગું છું",
    skip: "સામગ્રી પર જાઓ",
    crumb: "શરૂઆત કરનારાઓ માટે સ્ટ્રેન્થ અને કન્ડિશનિંગ",
  },
  intro: [
    "સ્ટ્રેન્થ અને કન્ડિશનિંગ સાંભળીને લાગે કે આ ખેલાડીઓ માટે છે. એવું નથી. તેનાં બે કામ છે: વધુ મજબૂત બનવું, અને ટકી રહે એવો સ્ટેમિના બનાવવો.",
    "WHO પુખ્તો પાસે અઠવાડિયામાં 2 કે વધુ દિવસ સ્નાયુ મજબૂત કરતું કામ ઇચ્છે છે, સાથે 150 થી 300 મિનિટ મધ્યમ પ્રવૃત્તિ, અથવા 75 થી 150 મિનિટ તીવ્ર પ્રવૃત્તિ.{1}",
    "શરૂઆત કરનારાઓ માટે ACSM ની સલાહ: અઠવાડિયામાં 2 થી 3 દિવસ, પહેલાં મલ્ટી-જૉઇન્ટ મૂવ, અને એવું વજન જે તમે 8 થી 12 વાર ઉપાડી શકો.{3}",
    "સાત મૂવ પૂરતા છે. સ્ક્વૉટ, હિન્જ, પુશ, પુલ, એક પગ, કૅરી, અને ઇન્ટરવલ.",
  ],
  listHeading: "શરૂઆત કરનારાઓ માટે 7 શ્રેષ્ઠ સ્ટ્રેન્થ અને કન્ડિશનિંગ એક્સરસાઇઝ",
  items: [
    {
      name: "ગૉબ્લેટ સ્ક્વૉટ",
      why: "નીચલા શરીરની મલ્ટી-જૉઇન્ટ લિફ્ટ. ACSM શરૂઆત કરનારાઓ માટે મોટા સ્નાયુઓવાળા, મલ્ટી-જૉઇન્ટ મૂવ પહેલાં રાખે છે.{3}",
      how: "એક ડમ્બેલ કે કેટલબેલ છાતી પાસે પકડો, કોણી તેની નીચે. પગ કૂલાથી સહેજ પહોળા. એડીઓ વચ્ચે નીચે બેસો. છાતી ઊંચી. આખા પગથી ધક્કો મારી ઊભા થાઓ. હજી વજન નથી? પાણી ભરેલી બોટલ ચાલશે.",
      dose: "8 થી 12 રેપના 2 થી 3 સેટ.{3}",
    },
    {
      name: "ડમ્બેલ રોમાનિયન ડેડલિફ્ટ",
      why: "હિન્જ. હેમસ્ટ્રિંગ, ગ્લૂટ્સ અને પીઠ સાથે કામ કરે છે. જમીન પરથી કંઈ પણ ઉપાડવાની આ જ પેટર્ન છે.",
      how: "ડમ્બેલ જાંઘની સામે. ઘૂંટણ સહેજ વાળેલા. કૂલા પાછળ ધકેલો, વજન પગ સાથે નીચે સરકે, પીઠ લાંબી. હેમસ્ટ્રિંગમાં ખેંચાણ લાગે ત્યાં રોકાઓ. ગ્લૂટ્સ કસીને ઊભા થાઓ.",
      dose: "8 થી 12 રેપના 2 થી 3 સેટ.",
    },
    {
      name: "ઇન્ક્લાઇન પુશ-અપ",
      why: "હૉરિઝૉન્ટલ પુશ જેને સહેલું કે અઘરું કરી શકાય. જ્યાંથી 8 સાફ રેપ થાય ત્યાંથી શરૂ કરો, પછી તાકાત વધે તેમ હાથ નીચે લાવો.",
      how: "હાથ કિચન કાઉન્ટર, ટેબલ કે બેન્ચ પર, ખભાથી સહેજ પહોળા. માથાથી એડી સુધી શરીર એક સીધમાં. છાતી કિનારી સુધી લાવો. ધક્કો મારી પાછા. સપાટી જેટલી નીચી, એટલું અઘરું.",
      dose: "8 થી 12 રેપના 2 થી 3 સેટ. 12 સહેલા લાગે ત્યારે નીચી સપાટી પર જાઓ.",
    },
    {
      name: "વન-આર્મ ડમ્બેલ રો",
      why: "પુલ. તે બધા પુશને સંતુલિત કરે છે અને ઉપરની પીઠ મજબૂત કરે છે. એક વારમાં એક બાજુ કરવું પણ ACSM ની સલાહમાં છે: એક બાજુ અને બંને બાજુ, બંને પ્રકારના મૂવ જરૂરી છે.{3}",
      how: "એક હાથ અને એક ઘૂંટણ બેન્ચ કે મજબૂત ખુરશી પર. પીઠ સીધી. ડમ્બેલને કૂલા તરફ ખેંચો, કોણી શરીર પાસે. એક પળ રોકાઓ. ધીમેથી નીચે.",
      dose: "દરેક બાજુ 8 થી 12 રેપના 2 થી 3 સેટ.",
    },
    {
      name: "રિવર્સ લંજ અથવા સ્ટેપ-અપ",
      why: "એક પગની તાકાત અને સંતુલન. ACSM નું પોઝિશન સ્ટેન્ડ ન્યુરોમોટર કામ પણ માંગે છે: સંતુલન, ચપળતા અને તાલમેલ, અઠવાડિયામાં 2 થી 3 દિવસ.{2}",
      how: "એક પગ પાછળ લો, બંને ઘૂંટણ લગભગ 90 ડિગ્રી વળે ત્યાં સુધી નીચે આવો, પછી આગળના પગથી ધક્કો મારી ઉપર. અથવા મજબૂત પગથિયા પર ચડો અને કાબૂથી ઊતરો. જરૂર હોય તો દીવાલ પકડો.",
      dose: "દરેક પગ 6 થી 10 રેપના 2 સેટ.",
    },
    {
      name: "ફાર્મર્સ કૅરી",
      why: "પકડ, ધડ અને પોશ્ચર એક જ મૂવમાં. પકડની તાકાત જિમની બહાર પણ મહત્વની છે: 17 દેશોના લગભગ 1,40,000 પુખ્તોના એક અભ્યાસમાં ઓછી ગ્રિપ સ્ટ્રેન્થનો સંબંધ વધુ મૃત્યુદર સાથે હતો. આ ઑબ્ઝર્વેશનલ અભ્યાસ હતો, એટલે તે સંબંધ બતાવે છે, કારણ નહીં.{7}",
      how: "દરેક હાથમાં એક ભારે ડમ્બેલ કે ભરેલી થેલી. સીધા ઊભા, ખભા નીચે. નાનાં પગલાંથી ધીમે ચાલો. વજન ઝૂલે નહીં, શરીર નમે નહીં.",
      dose: "20 થી 30 મીટર કે 30 સેકન્ડની 3 થી 4 વૉક.",
    },
    {
      name: "સાઇકલ, ચઢાણ પર ઝડપી ચાલ કે સીડી પર ઇન્ટરવલ",
      why: "કન્ડિશનિંગનો ભાગ. 18 થી 45 વર્ષના સ્વસ્થ પુખ્તો પરના 28 ટ્રાયલની એક સમીક્ષામાં ઇન્ટરવલ ટ્રેનિંગ અને સતત એન્ડ્યોરન્સ ટ્રેનિંગ, બંનેથી VO2max (એરોબિક ફિટનેસનું માપ) માં મોટો સુધારો થયો. ઇન્ટરવલ થોડા આગળ રહ્યા.{5}",
      how: "5 મિનિટ વૉર્મ-અપ. પછી 30 થી 60 સેકન્ડ એટલી મહેનત કે વાત કરવી અઘરી લાગે. પછી 1 થી 2 મિનિટ સહેલું. ફરી કરો. સાઇકલ, ચઢાણ પર ઝડપી ચાલ, સીડી કે રોઇંગ મશીન. એવું કંઈક પસંદ કરો જેમાં સ્કિલ ન જોઈએ.",
      dose: "4 થી 6 રાઉન્ડ, અઠવાડિયામાં એક કે બે વાર. બાકીના દિવસોમાં એકસરખી ઝડપે ચાલવું કે સાઇકલ.",
    },
  ],
  enoughHeading: "શરૂઆતમાં કેટલું પૂરતું છે?",
  enough: [
    "દિવસ: શરૂઆત કરનારાઓ માટે અઠવાડિયામાં 2 થી 3 સ્ટ્રેન્થ દિવસ, દરેક મોટા સ્નાયુ જૂથ પર કામ.{3}{2}",
    "વજન: એવું વજન જે 8 થી 12 વાર ઊપડે, દરેક મૂવના 1 થી 3 સેટ. સતત બે સેશનમાં લક્ષ્યથી 1 થી 2 રેપ વધુ થાય, ત્યારે વજન 2 થી 10% વધારો.{3}",
    "શરૂ કરવા ભારે વજન જરૂરી નથી. 21 અભ્યાસોની એક સમીક્ષામાં, જ્યારે સેટ થાકી જવા સુધી કરાયા, ત્યારે હળવા અને ભારે વજનથી સ્નાયુ વૃદ્ધિ લગભગ સરખી રહી. ભારે વજનથી મહત્તમ તાકાત વધુ વધી.{4}",
    "સ્ટ્રેન્થ અને કાર્ડિયો સાથે? 43 અભ્યાસોની એક સમીક્ષામાં એરોબિક ટ્રેનિંગ ઉમેરવાથી સ્નાયુના કદ કે મહત્તમ તાકાતની વૃદ્ધિ ઘટી નહીં. વિસ્ફોટક તાકાતની વૃદ્ધિ ઓછી રહી, ખાસ કરીને જ્યારે બંને એક જ સેશનમાં કરાયાં.{6}",
    "કોચિંગ વિશે: એક નાના ટ્રાયલમાં પહેલેથી ટ્રેનિંગ કરતા 20 પુરુષોને 12 અઠવાડિયાંનો એક જ પ્લાન અપાયો. 1:1 કોચિંગવાળા ગ્રુપે ભારે વજન ઉપાડ્યું અને એકલા ટ્રેનિંગ કરનારાઓ કરતાં વધુ તાકાત મેળવી.{8} નાનો અભ્યાસ, ટ્રેન્ડ પુરુષો, શરૂઆત કરનારા નહીં. છતાં, એટલે જ અમે દરેક સેટ જોઈએ છીએ.",
  ],
  sampleHeading: "શરૂઆત કરનારાઓનું એક સેમ્પલ અઠવાડિયું",
  sampleLabel: "ફક્ત સેમ્પલ. પ્રિસ્ક્રિપ્શન નથી. તમારા શરીર, ઇતિહાસ અને અઠવાડિયા મુજબ બદલો.",
  sample: [
    "દિવસ 1: વૉર્મ-અપ, પછી ગૉબ્લેટ સ્ક્વૉટ, પુશ-અપ, વન-આર્મ રો, ફાર્મર્સ કૅરી. દરેક મૂવના 2 થી 3 સેટ.",
    "દિવસ 2: 30 થી 40 મિનિટ ઝડપી ચાલ કે સહેલી સાઇકલિંગ.",
    "દિવસ 3: વૉર્મ-અપ, પછી રોમાનિયન ડેડલિફ્ટ, રિવર્સ લંજ કે સ્ટેપ-અપ, પુશ-અપ, રો. છેલ્લે ઇન્ટરવલના 4 રાઉન્ડ.",
    "દિવસ 4: આરામ, કે હળવી લટાર.",
    "દિવસ 5: વૉર્મ-અપ, પછી દિવસ 1 ના મૂવ ફરી. જ્યાં ગયું સેશન સહેલું લાગ્યું, ત્યાં એક રેપ કે થોડું વજન વધારો.",
    "દિવસ 6 અને 7: એક એક્ટિવ દિવસ અને એક આરામનો દિવસ. તમારી મરજી.",
  ],
  coachedHeading: "લાઇવ કોચિંગ જોઈએ છે?",
  coached: [
    "Iron Hour લાઇવ કોચિંગ સાથે સ્ટ્રેન્થ અને કન્ડિશનિંગ છે. 60 મિનિટ, 1:1. મિનિટ 0 પર સેટ-અપ. મિનિટ 4 થી વૉર્મ-અપ. મુખ્ય લિફ્ટ મિનિટ 14 પર. એક્સેસરીઝ 28 પર. કૂલ-ડાઉન 50 પર.",
    "ઉપરના મૂવ એક સામાન્ય શરૂઆતનો મુદ્દો છે. વજન અને રેપ દરેક સેશનમાં નક્કી થાય છે, કૉલ પર અમે જે જોઈએ તે મુજબ.",
    "બ્રેક પછી પાછા આવો છો? Return: 45 મિનિટ, મહિને 12 સેશન, એક દિવસ છોડીને. Lean Reset: મહિને 20 સેશન, 1:1. Open Floor નાનું ગ્રુપ છે.",
    "Google Meet, Zoom અથવા FaceTime પર લાઇવ કોચિંગ. પુણેથી. હિન્દી કે અંગ્રેજીમાં. IST પર. હજી નક્કી નથી? 30 મિનિટના કન્સલ્ટેશનથી શરૂ કરો. આ વાતચીત છે, ટ્રેનિંગ નહીં. બુકિંગ એક સમય રોકે છે. ફી સીધી નક્કી થાય છે.",
  ],
  safetyHeading: "શરૂ કરતાં પહેલાં",
  safety:
    "સામાન્ય માહિતી, તબીબી સલાહ નહીં. ACSM ના સ્ક્રીનિંગ મોડલ મુજબ: જો તમે નિષ્ક્રિય છો, કોઈ લક્ષણ નથી અને હૃદય, મેટાબોલિક કે કિડનીની કોઈ જાણીતી બીમારી નથી, તો તમે તબીબી મંજૂરી વગર હળવી થી મધ્યમ કસરત શરૂ કરીને ધીમે ધીમે વધારી શકો છો. જો આમાંની કોઈ બીમારી હોય, અથવા છાતીમાં દુખાવો, અસામાન્ય હાંફ કે ચક્કર જેવા લક્ષણો હોય, તો પહેલાં તબીબી મંજૂરી લો.{9} ઇન્ટરવલ તીવ્ર મહેનત છે, એટલે ધીમે ધીમે ત્યાં પહોંચો. દુખાવો થાય કે તબિયત બગડે તો રોકાઈ જાઓ, અને ગર્ભાવસ્થામાં કે તાજેતરમાં બાળક થયા પછી પહેલાં સલાહ લો.",
};

export const strengthConditioningPost: BlogPost = {
  slug: SC_SLUG,
  published: SC_PUBLISHED,
  modified: SC_MODIFIED,
  about: "Strength and conditioning exercises for beginners",
  sources: SC_SOURCES,
  copy: { en, ar, hi, es, zh, ja, gu },
};
