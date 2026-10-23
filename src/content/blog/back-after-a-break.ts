/**
 * Blog post: "Best exercises after a long break".
 * Citations in copy are written as {n} and point at SOURCES[n - 1].
 * Every number in the copy comes from a cited source. No client results.
 * Translations were drafted for this batch and should get a native-speaker
 * review before launch (see CHANGES-grokbot.md).
 */

import { type BlogPost, type PostCopy, type PostLang } from "./shared";

export const BACK_SLUG = "best-exercises-after-a-long-break";
export const BACK_PUBLISHED = "2026-10-23";
export const BACK_MODIFIED = "2026-10-23";

export const BACK_SOURCES = [
  {
    cite: "World Health Organization. WHO guidelines on physical activity and sedentary behaviour. Geneva: WHO; 2020.",
    url: "https://www.who.int/publications/i/item/9789240015128",
  },
  {
    cite: "NHS. Physical activity guidelines for adults aged 19 to 64.",
    url: "https://www.nhs.uk/live-well/exercise/physical-activity-guidelines-for-adults-aged-19-to-64/",
  },
  {
    cite: "NHS. Strength exercises (page last reviewed 28 February 2024).",
    url: "https://www.nhs.uk/live-well/exercise/strength-exercises/",
  },
  {
    cite: "NHS Better Health. Get running with Couch to 5K.",
    url: "https://www.nhs.uk/live-well/exercise/running-and-aerobic-exercises/get-running-with-couch-to-5k/",
  },
  {
    cite: "Riebe D, Franklin BA, Thompson PD, et al. Updating ACSM's recommendations for exercise preparticipation health screening. Med Sci Sports Exerc. 2015;47(11):2473–2479.",
    url: "https://doi.org/10.1249/MSS.0000000000000664",
  },
  {
    cite: "Paluch AE, Bajpai S, Bassett DR, et al. Daily steps and all-cause mortality: a meta-analysis of 15 international cohorts. Lancet Public Health. 2022;7(3):e219–e228.",
    url: "https://doi.org/10.1016/S2468-2667(21)00302-9",
  },
  {
    cite: "Momma H, Kawakami R, Honda T, Sawada SS. Muscle-strengthening activities are associated with lower risk and mortality in major non-communicable diseases: a systematic review and meta-analysis of cohort studies. Br J Sports Med. 2022;56(13):755–763.",
    url: "https://doi.org/10.1136/bjsports-2021-105061",
  },
  {
    cite: "Ogasawara R, Yasuda T, Ishii N, Abe T. Comparison of muscle hypertrophy following 6-month of continuous and periodic strength training. Eur J Appl Physiol. 2013;113(4):975–985.",
    url: "https://doi.org/10.1007/s00421-012-2511-9",
  },
] as const;

const en: PostCopy = {
  metaTitle: "Best Exercises After a Long Break: 7 to Start With | Jalan PT",
  metaDescription:
    "Getting back into exercise after a long break? The 7 best exercises to restart with at home, what WHO, the NHS and ACSM advise, and a sample first month.",
  h1: "Best exercises for getting back into exercise after a long break: 7 to start with",
  dek: "It has been a while. Fine. We start where you are, not where you were.",
  updated: "Updated 23 October 2026",
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
    whatsappText: "Hi Susmit, I read the article on getting back into exercise and want to book a consultation",
    skip: "Skip to content",
    crumb: "Best exercises after a long break",
  },
  intro: [
    "Months off. Maybe years. Work, a baby, an injury, life. It happens.",
    "WHO is clear on this: some activity is better than none. Start small. Then add how often, how long and how hard, a little at a time.{1}",
    "You need a chair, a wall, some floor and a band or a backpack. No gym yet.",
  ],
  listHeading: "The 7 best exercises for getting back into exercise",
  items: [
    {
      name: "Brisk walking, most days",
      why: "The easiest way back in. In a meta-analysis of 15 cohorts, the risk of death kept falling as daily steps rose, levelling off at about 6,000 to 8,000 steps a day in adults 60 and over, and 8,000 to 10,000 in younger adults.{6} That is an observational finding, not a promise.",
      how: "A pace where you can talk but not sing. That is moderate, by the NHS definition.{2} Flat route first. Hills later.",
      dose: "10 to 20 minutes, most days. Add about 5 minutes a week.",
    },
    {
      name: "Sit-to-stand",
      why: "The first strength move the NHS lists for people who have not done much for a while.{3} Legs and hips do most of the work of daily life.",
      how: "Sit on the front of a solid chair. Lean forward a little. Stand up with your legs, not your arms. Sit down slowly.",
      dose: "Start with 5 slow reps.{3} Build to 3 sets of 10. Then hold a backpack.",
    },
    {
      name: "Wall press-up, then desk, then floor",
      why: "Chest, shoulders and arms. The NHS suggests 3 sets of 5 to 10 at the wall.{3} The lower your hands, the harder it gets.",
      how: "Hands on the wall at chest height. Body straight. Bend the elbows, close the gap, push back.",
      dose: "3 sets of 5 to 10. When 10 is easy, move to a desk edge.",
    },
    {
      name: "Glute bridge",
      why: "The back of the hips and legs. Easy on the knees, and lying down means no balance to worry about. Hips and legs are on the NHS list of major muscles.{2}",
      how: "On your back, knees bent, feet flat. Push through the heels. Lift the hips until knees, hips and shoulders line up. Lower slowly.",
      dose: "2 to 3 sets of 10. Pause 2 seconds at the top.",
    },
    {
      name: "Band or backpack row",
      why: "Back, shoulders and arms are on the same NHS list.{2} After a long break the upper back is usually the part nobody trained.",
      how: "Band round a door handle or table leg. Stand tall. Pull the elbows back to the ribs. Pause. Return slow.",
      dose: "2 to 3 sets of 10 to 15.",
    },
    {
      name: "Dead bug",
      why: "Trunk control without strain on the back. The abdomen is a major muscle group too.{2} It is also how we teach the brace before any loaded lift.",
      how: "On your back, arms up, knees over hips. Press the low back gently into the floor. Reach one arm and the opposite leg away. Return. Switch.",
      dose: "2 to 3 sets of 6 to 8 a side. Slow.",
    },
    {
      name: "Walk-run intervals, when walking is easy",
      why: "A tested ramp from walking to running. NHS Couch to 5K starts with 1-minute runs and 90-second walks, 3 times a week with rest days between, and builds over 9 weeks or longer.{4}",
      how: "Run easy. If you cannot speak a short sentence, slow down or walk.",
      dose: "3 non-consecutive days a week. Repeat a week if it felt hard.",
    },
  ],
  enoughHeading: "How much is enough?",
  enough: [
    "The target for adults: 150 to 300 minutes a week of moderate activity, plus strength work for all major muscle groups on 2 or more days.{1}{2}",
    "Strength counts on its own. A meta-analysis of cohort studies linked muscle-strengthening activity with a 10 to 17% lower risk of death from any cause, heart disease, cancer and diabetes. The biggest drop was at about 30 to 60 minutes a week.{7} Observational again. A good reason, not a guarantee.",
    "The break is not a full reset. In one small trial of 14 young men, three-week breaks between training blocks did not stop them matching the muscle and strength gains of men who trained straight through for 24 weeks.{8} Small study. Short breaks. But the pattern comes back faster than you think.",
    "Don't start at the target. Start with the walks and two strength days.",
  ],
  sampleHeading: "A first month back",
  sampleLabel: "Sample only. Not a prescription. Adjust it to your body, your history and your diary.",
  sample: [
    "Weeks 1 and 2: walk 10 to 15 minutes on most days. Two strength days, for example Monday and Thursday: moves 2 to 6, one or two rounds. Stop each set with 2 or 3 reps still in the tank.",
    "Weeks 3 and 4: walk 15 to 20 minutes. Two or three strength days, two or three rounds. Keep a day between strength days.",
    "Sore the next day? Keep the next session easy. Sharp pain? Stop, and get it checked.",
    "When a 30-minute walk feels easy, try the walk-run intervals on three days a week.",
  ],
  coachedHeading: "Want it coached live?",
  coached: [
    "This is what Return is for. 45 minutes. 12 alternate-day sessions a month. We rebuild the pattern before the load.",
    "Coached live on Google Meet, Zoom or FaceTime. From Pune. In Hindi or English. On IST.",
    "Want more later? Iron Hour is a 60-minute 1:1 session. Lean Reset is 20 sessions a month, 1:1. Open Floor is a small group.",
    "Not sure? Start with a 30-minute consultation. It is a conversation, not training. Booking holds a time. The fee is agreed directly.",
  ],
  safetyHeading: "Before you start",
  safety:
    "General information, not medical advice. ACSM's screening model says: if you are inactive, have no symptoms and no known heart, metabolic or kidney disease, you can start light to moderate exercise without medical clearance and build up gradually. If you have one of those conditions, or symptoms such as chest pain, unusual breathlessness or dizziness, get medical clearance first.{5} Coming back from injury, surgery or a baby: clearance first. If you are worried about your health, the NHS advises speaking to a GP before you start.{4}",
};

const ar: PostCopy = {
  metaTitle: "أفضل التمارين بعد انقطاع طويل: 7 تمارين للبداية | Jalan PT",
  metaDescription:
    "تعود إلى الرياضة بعد انقطاع طويل؟ أفضل 7 تمارين للبدء في المنزل، وما تنصح به منظمة الصحة العالمية وNHS وACSM، ونموذج لشهرك الأول.",
  h1: "أفضل التمارين للعودة إلى الرياضة بعد انقطاع طويل: 7 تمارين للبداية",
  dek: "مرّ وقت طويل. لا بأس. نبدأ من حيث أنت الآن، لا من حيث كنت.",
  updated: "تم التحديث في 23 أكتوبر 2026",
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
    whatsappText: "مرحباً سوسميت، قرأت مقال العودة إلى الرياضة وأريد حجز استشارة",
    skip: "انتقل إلى المحتوى",
    crumb: "أفضل التمارين بعد انقطاع طويل",
  },
  intro: [
    "أشهر من التوقف. ربما سنوات. عمل، طفل، إصابة، الحياة. يحدث هذا.",
    "منظمة الصحة العالمية واضحة: بعض النشاط أفضل من لا شيء. ابدأ بالقليل. ثم زِد عدد المرات والمدة والشدّة، شيئاً فشيئاً.{1}",
    "تحتاج إلى كرسي وجدار ومساحة على الأرض وشريط مقاومة أو حقيبة ظهر. لا نادي بعد.",
  ],
  listHeading: "أفضل 7 تمارين للعودة إلى الرياضة",
  items: [
    {
      name: "المشي السريع في معظم الأيام",
      why: "أسهل طريق للعودة. في تحليل تجميعي لـ15 مجموعة سكانية، استمر خطر الوفاة في الانخفاض مع زيادة الخطوات اليومية، ثم استقر عند نحو 6,000 إلى 8,000 خطوة يومياً لمن هم في الستين وما فوق، و8,000 إلى 10,000 للأصغر سناً.{6} هذه نتيجة رصدية، وليست وعداً.",
      how: "وتيرة تستطيع فيها الكلام لكن لا تستطيع الغناء. هذا هو النشاط المعتدل بحسب تعريف NHS.{2} طريق مستوٍ أولاً، والمرتفعات لاحقاً.",
      dose: "10 إلى 20 دقيقة في معظم الأيام. أضف نحو 5 دقائق كل أسبوع.",
    },
    {
      name: "الجلوس والوقوف من الكرسي",
      why: "أول تمرين قوة تذكره NHS لمن لم يمارس الكثير منذ مدة.{3} الساقان والوركان يقومان بمعظم عمل الحياة اليومية.",
      how: "اجلس على مقدمة كرسي ثابت. مِل للأمام قليلاً. قف بقوة ساقيك لا ذراعيك. اجلس ببطء.",
      dose: "ابدأ بـ5 تكرارات بطيئة.{3} ثم وصولاً إلى 3 مجموعات من 10. بعدها احمل حقيبة ظهر.",
    },
    {
      name: "الضغط على الجدار، ثم المكتب، ثم الأرض",
      why: "الصدر والكتفان والذراعان. تقترح NHS ثلاث مجموعات من 5 إلى 10 على الجدار.{3} كلما انخفضت يداك، زادت الصعوبة.",
      how: "اليدان على الجدار بمستوى الصدر. الجسم مستقيم. اثنِ المرفقين، قرّب صدرك، ثم ادفع للخلف.",
      dose: "3 مجموعات من 5 إلى 10. عندما تصبح 10 سهلة، انتقل إلى حافة مكتب.",
    },
    {
      name: "جسر الألوية",
      why: "خلف الوركين والساقين. لطيف على الركبتين، وبما أنك مستلقٍ فلا قلق من التوازن. الوركان والساقان ضمن قائمة NHS للعضلات الرئيسية.{2}",
      how: "على ظهرك، الركبتان مثنيتان والقدمان على الأرض. ادفع بالكعبين. ارفع الوركين حتى تصطف الركبتان والوركان والكتفان. أنزل ببطء.",
      dose: "2 إلى 3 مجموعات من 10. توقّف ثانيتين في الأعلى.",
    },
    {
      name: "السحب بالشريط أو بحقيبة الظهر",
      why: "الظهر والكتفان والذراعان على قائمة NHS نفسها.{2} بعد انقطاع طويل، أعلى الظهر عادةً هو الجزء الذي لم يدرّبه أحد.",
      how: "لفّ الشريط حول مقبض باب أو رجل طاولة. قف مستقيماً. اسحب المرفقين للخلف نحو الأضلاع. توقّف لحظة. ارجع ببطء.",
      dose: "2 إلى 3 مجموعات من 10 إلى 15.",
    },
    {
      name: "تمرين الحشرة الميتة (Dead bug)",
      why: "تحكّم في الجذع دون إجهاد الظهر. البطن أيضاً مجموعة عضلية رئيسية.{2} وبه نعلّم شدّ الجذع قبل أي رفع بوزن.",
      how: "على ظهرك، الذراعان للأعلى والركبتان فوق الوركين. اضغط أسفل الظهر برفق نحو الأرض. مدّ ذراعاً والساق المقابلة بعيداً. ارجع. بدّل.",
      dose: "2 إلى 3 مجموعات من 6 إلى 8 لكل جهة. ببطء.",
    },
    {
      name: "تناوب المشي والجري، عندما يصبح المشي سهلاً",
      why: "تدرّج مجرَّب من المشي إلى الجري. يبدأ برنامج Couch to 5K من NHS بجري لدقيقة ومشي لدقيقة ونصف، 3 مرات أسبوعياً مع أيام راحة بينها، ويتدرّج على 9 أسابيع أو أكثر.{4}",
      how: "اجرِ بسهولة. إن لم تستطع قول جملة قصيرة، خفّف السرعة أو امشِ.",
      dose: "3 أيام غير متتالية في الأسبوع. كرّر الأسبوع إن شعرت أنه صعب.",
    },
  ],
  enoughHeading: "كم يكفي؟",
  enough: [
    "الهدف للبالغين: 150 إلى 300 دقيقة أسبوعياً من النشاط المعتدل، مع تمارين تقوية لكل المجموعات العضلية الرئيسية يومين أو أكثر.{1}{2}",
    "تمارين القوة مهمة بحد ذاتها. ربط تحليل تجميعي لدراسات أترابية بين تمارين تقوية العضلات وانخفاض خطر الوفاة لأي سبب، وأمراض القلب، والسرطان، والسكري بنسبة 10 إلى 17%. وكان أكبر انخفاض عند نحو 30 إلى 60 دقيقة أسبوعياً.{7} نتيجة رصدية أيضاً. سبب وجيه، لا ضمان.",
    "الانقطاع ليس بداية من الصفر. في تجربة صغيرة على 14 شاباً، لم تمنعهم فترات توقف من ثلاثة أسابيع بين كتل التدريب من مجاراة مكاسب العضلات والقوة لدى من تدرّبوا دون توقف لمدة 24 أسبوعاً.{8} دراسة صغيرة وتوقفات قصيرة. لكن النمط يعود أسرع مما تظن.",
    "لا تبدأ من الهدف. ابدأ بالمشي ويومي تقوية.",
  ],
  sampleHeading: "شهرك الأول بعد العودة",
  sampleLabel: "نموذج فقط. ليس وصفة. عدّله بحسب جسمك وتاريخك وجدولك.",
  sample: [
    "الأسبوعان 1 و2: امشِ 10 إلى 15 دقيقة في معظم الأيام. يوما تقوية، مثلاً الاثنين والخميس: الحركات من 2 إلى 6، جولة أو جولتان. أنهِ كل مجموعة وما زال لديك 2 أو 3 تكرارات.",
    "الأسبوعان 3 و4: امشِ 15 إلى 20 دقيقة. يومان أو ثلاثة للتقوية، جولتان أو ثلاث. اترك يوماً بين أيام التقوية.",
    "تشعر بألم عضلي في اليوم التالي؟ اجعل الجلسة التالية خفيفة. ألم حاد؟ توقّف وافحصه.",
    "عندما يصبح مشي 30 دقيقة سهلاً، جرّب تناوب المشي والجري ثلاثة أيام في الأسبوع.",
  ],
  coachedHeading: "تريد تدريباً مباشراً؟",
  coached: [
    "لهذا وُجد Return. جلسات مدتها 45 دقيقة. 12 جلسة في الشهر يوماً بعد يوم. نعيد بناء الحركة قبل الوزن.",
    "تدريب مباشر عبر Google Meet أو Zoom أو FaceTime. من بونه. بالهندية أو الإنجليزية. بتوقيت الهند.",
    "تريد المزيد لاحقاً؟ Iron Hour جلسة فردية مدتها 60 دقيقة. Lean Reset عشرون جلسة فردية في الشهر. Open Floor مجموعة صغيرة.",
    "لست متأكداً؟ ابدأ باستشارة مدتها 30 دقيقة. إنها محادثة، وليست تدريباً. الحجز يثبّت الموعد. والرسوم يُتفق عليها مباشرة.",
  ],
  safetyHeading: "قبل أن تبدأ",
  safety:
    "معلومات عامة، وليست نصيحة طبية. يقول نموذج الفحص لدى ACSM: إن كنت غير نشط، ولا تعاني أعراضاً، وليس لديك مرض معروف في القلب أو الأيض أو الكلى، فيمكنك بدء تمارين خفيفة إلى معتدلة دون إذن طبي والتدرّج فيها. إن كانت لديك إحدى هذه الحالات، أو أعراض مثل ألم الصدر أو ضيق تنفّس غير معتاد أو دوار، فاحصل على إذن طبي أولاً.{5} عائد بعد إصابة أو جراحة أو ولادة: الإذن الطبي أولاً. وإن كنت قلقاً على صحتك، تنصح NHS بالتحدث إلى الطبيب قبل البدء.{4}",
};

const hi: PostCopy = {
  metaTitle: "लंबे ब्रेक के बाद सबसे अच्छी एक्सरसाइज़: शुरुआत के लिए 7 | Jalan PT",
  metaDescription:
    "लंबे ब्रेक के बाद एक्सरसाइज़ में वापसी? घर पर दोबारा शुरू करने की 7 सबसे अच्छी एक्सरसाइज़, WHO, NHS और ACSM क्या कहते हैं, और पहले महीने का एक नमूना।",
  h1: "लंबे ब्रेक के बाद एक्सरसाइज़ में वापसी के लिए सबसे अच्छी एक्सरसाइज़: शुरुआत के लिए 7",
  dek: "काफ़ी समय हो गया। कोई बात नहीं। हम वहाँ से शुरू करते हैं जहाँ आप अभी हैं, जहाँ पहले थे वहाँ से नहीं।",
  updated: "अपडेट: 23 अक्टूबर 2026",
  byline: "लेखक: सुस्मित जालान, कोच, Jalan PT, पुणे।",
  credentialsNote:
    "ASCA लेवल 1 (स्ट्रेंथ और कंडीशनिंग) और ACE (एनाटॉमी और बायोमैकेनिक्स)। ये कोच के पास मौजूद प्रमाणपत्र हैं। इनमें से कोई भी संस्था इस व्यवसाय या इस लेख का समर्थन नहीं करती।",
  labels: {
    home: "होम",
    blog: "ब्लॉग",
    why: "क्यों",
    how: "कैसे",
    dose: "मात्रा",
    sources: "स्रोत",
    readIn: "इसे इस भाषा में पढ़ें",
    programs: "प्रोग्राम देखें",
    whatsapp: "WhatsApp पर पूछें",
    whatsappText: "नमस्ते सुस्मित, मैंने एक्सरसाइज़ में वापसी वाला लेख पढ़ा और कंसल्टेशन बुक करना चाहता/चाहती हूँ",
    skip: "सामग्री पर जाएँ",
    crumb: "लंबे ब्रेक के बाद सबसे अच्छी एक्सरसाइज़",
  },
  intro: [
    "महीनों का ब्रेक। शायद सालों का। काम, बच्चा, चोट, ज़िंदगी। ऐसा होता है।",
    "WHO साफ़ कहता है: कुछ गतिविधि, कुछ न करने से बेहतर है। छोटे से शुरू करें। फिर कितनी बार, कितनी देर और कितनी मेहनत, थोड़ा-थोड़ा बढ़ाएँ।{1}",
    "एक कुर्सी, एक दीवार, थोड़ी ज़मीन, और एक बैंड या बैकपैक। अभी जिम नहीं।",
  ],
  listHeading: "एक्सरसाइज़ में वापसी के लिए 7 सबसे अच्छी एक्सरसाइज़",
  items: [
    {
      name: "तेज़ चलना, ज़्यादातर दिन",
      why: "वापसी का सबसे आसान रास्ता। 15 कोहोर्ट के एक मेटा-एनालिसिस में, रोज़ के कदम बढ़ने के साथ मृत्यु का जोखिम घटता गया, और 60 साल और उससे ऊपर के लोगों में लगभग 6,000 से 8,000 कदम पर, और कम उम्र वालों में 8,000 से 10,000 कदम पर स्थिर हो गया।{6} यह एक ऑब्ज़र्वेशनल नतीजा है, वादा नहीं।",
      how: "इतनी रफ़्तार कि आप बात कर सकें पर गा न सकें। NHS की परिभाषा में यही मध्यम गतिविधि है।{2} पहले समतल रास्ता। चढ़ाई बाद में।",
      dose: "10 से 20 मिनट, ज़्यादातर दिन। हर हफ़्ते लगभग 5 मिनट जोड़ें।",
    },
    {
      name: "सिट-टू-स्टैंड (कुर्सी से उठना-बैठना)",
      why: "जिन्होंने काफ़ी समय से ज़्यादा कुछ नहीं किया, उनके लिए NHS की सूची में पहली स्ट्रेंथ एक्सरसाइज़।{3} रोज़ का ज़्यादातर काम पैर और कूल्हे करते हैं।",
      how: "मज़बूत कुर्सी के आगे वाले हिस्से पर बैठें। थोड़ा आगे झुकें। हाथों से नहीं, पैरों से उठें। धीरे बैठें।",
      dose: "5 धीमे रेप से शुरू करें।{3} फिर 10 के 3 सेट तक। उसके बाद बैकपैक पकड़ें।",
    },
    {
      name: "दीवार पर पुश-अप, फिर डेस्क, फिर ज़मीन",
      why: "छाती, कंधे और बाँहें। NHS दीवार पर 5 से 10 के 3 सेट सुझाता है।{3} हाथ जितने नीचे, उतना कठिन।",
      how: "हाथ दीवार पर, छाती की ऊँचाई पर। शरीर सीधा। कोहनियाँ मोड़ें, दूरी कम करें, वापस धकेलें।",
      dose: "5 से 10 के 3 सेट। जब 10 आसान लगें, डेस्क के किनारे पर जाएँ।",
    },
    {
      name: "ग्लूट ब्रिज",
      why: "कूल्हों और पैरों का पिछला हिस्सा। घुटनों पर हल्का, और लेटे होने से संतुलन की चिंता नहीं। कूल्हे और पैर NHS की मुख्य मांसपेशियों की सूची में हैं।{2}",
      how: "पीठ के बल लेटें, घुटने मुड़े, पैर ज़मीन पर। एड़ियों से धकेलें। कूल्हे तब तक उठाएँ जब तक घुटने, कूल्हे और कंधे एक लाइन में न हों। धीरे नीचे।",
      dose: "10 के 2 से 3 सेट। ऊपर 2 सेकंड रुकें।",
    },
    {
      name: "बैंड या बैकपैक रो",
      why: "पीठ, कंधे और बाँहें भी NHS की उसी सूची में हैं।{2} लंबे ब्रेक के बाद ऊपरी पीठ अक्सर वह हिस्सा होता है जिसे किसी ने ट्रेन नहीं किया।",
      how: "बैंड दरवाज़े के हैंडल या मेज़ के पाए पर लपेटें। सीधे खड़े हों। कोहनियाँ पसलियों तक पीछे खींचें। रुकें। धीरे लौटें।",
      dose: "10 से 15 के 2 से 3 सेट।",
    },
    {
      name: "डेड बग",
      why: "पीठ पर ज़ोर डाले बिना धड़ पर नियंत्रण। पेट भी एक मुख्य मांसपेशी समूह है।{2} किसी भी वज़न वाली लिफ्ट से पहले ब्रेस करना हम ऐसे ही सिखाते हैं।",
      how: "पीठ के बल, हाथ ऊपर, घुटने कूल्हों के ऊपर। कमर का निचला हिस्सा हल्के से ज़मीन पर दबाएँ। एक हाथ और उल्टा पैर दूर ले जाएँ। लौटें। बदलें।",
      dose: "हर तरफ़ 6 से 8 के 2 से 3 सेट। धीरे।",
    },
    {
      name: "चलना-दौड़ना इंटरवल, जब चलना आसान हो जाए",
      why: "चलने से दौड़ने तक का एक परखा हुआ रास्ता। NHS Couch to 5K 1 मिनट दौड़ और 90 सेकंड चलने से शुरू होता है, हफ़्ते में 3 बार, बीच में आराम के दिन, और 9 हफ़्ते या उससे ज़्यादा में आगे बढ़ता है।{4}",
      how: "आराम से दौड़ें। अगर एक छोटा वाक्य न बोल पाएँ, तो धीमे हों या चलें।",
      dose: "हफ़्ते में 3 दिन, लगातार नहीं। हफ़्ता कठिन लगा तो उसे दोहराएँ।",
    },
  ],
  enoughHeading: "कितना काफ़ी है?",
  enough: [
    "वयस्कों का लक्ष्य: हफ़्ते में 150 से 300 मिनट मध्यम गतिविधि, साथ में हफ़्ते में 2 या ज़्यादा दिन सभी मुख्य मांसपेशी समूहों की स्ट्रेंथ ट्रेनिंग।{1}{2}",
    "स्ट्रेंथ का अपना महत्व है। कोहोर्ट स्टडीज़ के एक मेटा-एनालिसिस ने मांसपेशी मज़बूत करने वाली गतिविधि को किसी भी कारण से मृत्यु, हृदय रोग, कैंसर और डायबिटीज़ के 10 से 17% कम जोखिम से जोड़ा। सबसे बड़ी गिरावट हफ़्ते में लगभग 30 से 60 मिनट पर दिखी।{7} यह भी ऑब्ज़र्वेशनल है। अच्छा कारण, गारंटी नहीं।",
    "ब्रेक का मतलब पूरी तरह शून्य से शुरुआत नहीं। 14 युवा पुरुषों के एक छोटे ट्रायल में, ट्रेनिंग ब्लॉक्स के बीच तीन-तीन हफ़्ते के ब्रेक के बावजूद, उन्होंने 24 हफ़्ते बिना रुके ट्रेन करने वालों जितनी मांसपेशी और ताकत हासिल की।{8} छोटी स्टडी। छोटे ब्रेक। फिर भी पैटर्न आपकी सोच से जल्दी लौटता है।",
    "लक्ष्य से शुरू न करें। चलने और दो स्ट्रेंथ दिनों से शुरू करें।",
  ],
  sampleHeading: "वापसी का पहला महीना",
  sampleLabel: "सिर्फ़ नमूना। प्रिस्क्रिप्शन नहीं। अपने शरीर, अपने इतिहास और अपने शेड्यूल के हिसाब से बदलें।",
  sample: [
    "हफ़्ता 1 और 2: ज़्यादातर दिन 10 से 15 मिनट चलें। दो स्ट्रेंथ दिन, जैसे सोमवार और गुरुवार: मूव 2 से 6, एक या दो राउंड। हर सेट तब रोकें जब 2 या 3 रेप बाकी हों।",
    "हफ़्ता 3 और 4: 15 से 20 मिनट चलें। दो या तीन स्ट्रेंथ दिन, दो या तीन राउंड। स्ट्रेंथ दिनों के बीच एक दिन छोड़ें।",
    "अगले दिन मांसपेशियों में दर्द? अगला सेशन हल्का रखें। तेज़ दर्द? रुकें, और जाँच करवाएँ।",
    "जब 30 मिनट चलना आसान लगे, हफ़्ते में तीन दिन चलना-दौड़ना इंटरवल आज़माएँ।",
  ],
  coachedHeading: "लाइव कोचिंग चाहिए?",
  coached: [
    "Return इसी के लिए है। 45 मिनट। महीने में 12 सेशन, एक दिन छोड़कर। पहले मूवमेंट दोबारा बनाते हैं, फिर वज़न।",
    "Google Meet, Zoom या FaceTime पर लाइव कोचिंग। पुणे से। हिंदी या अंग्रेज़ी में। IST पर।",
    "बाद में और चाहिए? Iron Hour 60 मिनट का 1:1 सेशन है। Lean Reset महीने में 20 सेशन, 1:1। Open Floor एक छोटा ग्रुप है।",
    "पक्का नहीं? 30 मिनट के कंसल्टेशन से शुरू करें। यह बातचीत है, ट्रेनिंग नहीं। बुकिंग एक समय रोकती है। फ़ीस सीधे तय होती है।",
  ],
  safetyHeading: "शुरू करने से पहले",
  safety:
    "सामान्य जानकारी, मेडिकल सलाह नहीं। ACSM का स्क्रीनिंग मॉडल कहता है: अगर आप निष्क्रिय हैं, कोई लक्षण नहीं हैं, और दिल, मेटाबॉलिक या किडनी की कोई ज्ञात बीमारी नहीं है, तो आप बिना मेडिकल क्लीयरेंस के हल्की से मध्यम एक्सरसाइज़ शुरू करके धीरे-धीरे बढ़ा सकते हैं। अगर इनमें से कोई बीमारी है, या सीने में दर्द, असामान्य साँस फूलना या चक्कर जैसे लक्षण हैं, तो पहले मेडिकल क्लीयरेंस लें।{5} चोट, सर्जरी या डिलीवरी के बाद लौट रहे हैं: पहले क्लीयरेंस। अगर सेहत को लेकर चिंता है, तो NHS शुरू करने से पहले डॉक्टर से बात करने की सलाह देता है।{4}",
};

const es: PostCopy = {
  metaTitle: "Mejores ejercicios tras un parón largo: 7 para empezar | Jalan PT",
  metaDescription:
    "¿Vuelves al ejercicio tras un parón largo? Los 7 mejores ejercicios para retomar en casa, qué aconsejan la OMS, el NHS y el ACSM, y un primer mes de ejemplo.",
  h1: "Mejores ejercicios para volver a entrenar después de un parón largo: 7 para empezar",
  dek: "Ha pasado tiempo. No pasa nada. Empezamos donde estás, no donde estabas.",
  updated: "Actualizado el 23 de octubre de 2026",
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
    whatsappText: "Hola Susmit, leí el artículo sobre volver al ejercicio y quiero reservar una consulta",
    skip: "Ir al contenido",
    crumb: "Mejores ejercicios tras un parón largo",
  },
  intro: [
    "Meses sin entrenar. Quizá años. Trabajo, un bebé, una lesión, la vida. Pasa.",
    "La OMS lo deja claro: algo de actividad es mejor que nada. Empieza poco. Después aumenta la frecuencia, la duración y la intensidad, poco a poco.{1}",
    "Necesitas una silla, una pared, algo de suelo y una banda o una mochila. Todavía no hace falta gimnasio.",
  ],
  listHeading: "Los 7 mejores ejercicios para volver a entrenar",
  items: [
    {
      name: "Caminar a paso ligero, casi todos los días",
      why: "La forma más fácil de volver. En un metaanálisis de 15 cohortes, el riesgo de muerte siguió bajando al aumentar los pasos diarios, y se estabilizó en unos 6.000 a 8.000 pasos al día en adultos de 60 años o más, y en 8.000 a 10.000 en adultos más jóvenes.{6} Es un hallazgo observacional, no una promesa.",
      how: "Un ritmo al que puedas hablar pero no cantar. Eso es actividad moderada, según el NHS.{2} Primero en llano. Las cuestas, después.",
      dose: "De 10 a 20 minutos, casi todos los días. Suma unos 5 minutos por semana.",
    },
    {
      name: "Sentarse y levantarse de la silla",
      why: "El primer ejercicio de fuerza que propone el NHS para quien lleva tiempo sin hacer mucho.{3} Piernas y caderas hacen casi todo el trabajo del día a día.",
      how: "Siéntate en el borde de una silla firme. Inclínate un poco hacia delante. Levántate con las piernas, no con los brazos. Siéntate despacio.",
      dose: "Empieza con 5 repeticiones lentas.{3} Llega a 3 series de 10. Luego sujeta una mochila.",
    },
    {
      name: "Flexiones en la pared, luego en la mesa, luego en el suelo",
      why: "Pecho, hombros y brazos. El NHS sugiere 3 series de 5 a 10 en la pared.{3} Cuanto más bajas las manos, más difícil.",
      how: "Manos en la pared a la altura del pecho. Cuerpo recto. Dobla los codos, acércate y empuja hacia atrás.",
      dose: "3 series de 5 a 10. Cuando 10 sea fácil, pasa al borde de una mesa.",
    },
    {
      name: "Puente de glúteos",
      why: "La parte de atrás de caderas y piernas. Suave con las rodillas, y tumbado no hay equilibrio del que preocuparse. Caderas y piernas están en la lista de músculos principales del NHS.{2}",
      how: "Boca arriba, rodillas dobladas, pies apoyados. Empuja con los talones. Sube la cadera hasta alinear rodillas, cadera y hombros. Baja despacio.",
      dose: "2 a 3 series de 10. Pausa de 2 segundos arriba.",
    },
    {
      name: "Remo con banda o con mochila",
      why: "Espalda, hombros y brazos están en la misma lista del NHS.{2} Tras un parón largo, la parte alta de la espalda suele ser la que nadie entrenó.",
      how: "Banda alrededor de un pomo o de la pata de una mesa. Erguido. Lleva los codos hacia atrás, a las costillas. Pausa. Vuelve despacio.",
      dose: "2 a 3 series de 10 a 15.",
    },
    {
      name: "Dead bug (bicho muerto)",
      why: "Control del tronco sin cargar la espalda. El abdomen también es un grupo muscular principal.{2} Es como enseñamos a bloquear el tronco antes de cualquier levantamiento con carga.",
      how: "Boca arriba, brazos arriba, rodillas sobre la cadera. Apoya suavemente la zona lumbar en el suelo. Estira un brazo y la pierna contraria. Vuelve. Cambia.",
      dose: "2 a 3 series de 6 a 8 por lado. Despacio.",
    },
    {
      name: "Intervalos de caminar y correr, cuando caminar sea fácil",
      why: "Una rampa probada de caminar a correr. El programa Couch to 5K del NHS empieza con carreras de 1 minuto y caminatas de 90 segundos, 3 veces por semana con días de descanso entre medias, y progresa en 9 semanas o más.{4}",
      how: "Corre suave. Si no puedes decir una frase corta, baja el ritmo o camina.",
      dose: "3 días no consecutivos por semana. Repite la semana si se hizo dura.",
    },
  ],
  enoughHeading: "¿Cuánto es suficiente?",
  enough: [
    "El objetivo para adultos: de 150 a 300 minutos semanales de actividad moderada, más fuerza para todos los grupos musculares principales 2 o más días.{1}{2}",
    "La fuerza cuenta por sí sola. Un metaanálisis de estudios de cohortes asoció la actividad de fortalecimiento muscular con un riesgo de un 10 a un 17% menor de muerte por cualquier causa, enfermedad cardiovascular, cáncer y diabetes. La mayor reducción se vio con unos 30 a 60 minutos por semana.{7} También es observacional. Una buena razón, no una garantía.",
    "El parón no lo borra todo. En un pequeño ensayo con 14 hombres jóvenes, pausas de tres semanas entre bloques de entrenamiento no les impidieron igualar las ganancias de músculo y fuerza de quienes entrenaron sin parar durante 24 semanas.{8} Estudio pequeño. Pausas cortas. Pero el patrón vuelve antes de lo que crees.",
    "No empieces por el objetivo. Empieza por las caminatas y dos días de fuerza.",
  ],
  sampleHeading: "Un primer mes de vuelta",
  sampleLabel: "Solo un ejemplo. No es una prescripción. Ajústalo a tu cuerpo, tu historial y tu agenda.",
  sample: [
    "Semanas 1 y 2: camina de 10 a 15 minutos casi todos los días. Dos días de fuerza, por ejemplo lunes y jueves: ejercicios 2 a 6, una o dos vueltas. Termina cada serie con 2 o 3 repeticiones en reserva.",
    "Semanas 3 y 4: camina de 15 a 20 minutos. Dos o tres días de fuerza, dos o tres vueltas. Deja un día entre días de fuerza.",
    "¿Agujetas al día siguiente? Haz suave la siguiente sesión. ¿Dolor agudo? Para y que te lo revisen.",
    "Cuando caminar 30 minutos sea fácil, prueba los intervalos de caminar y correr tres días por semana.",
  ],
  coachedHeading: "¿Lo quieres con entrenador en directo?",
  coached: [
    "Para esto existe Return. 45 minutos. 12 sesiones al mes, en días alternos. Reconstruimos el movimiento antes que la carga.",
    "En directo por Google Meet, Zoom o FaceTime. Desde Pune. En hindi o inglés. En horario IST.",
    "¿Quieres más después? Iron Hour es una sesión 1:1 de 60 minutos. Lean Reset son 20 sesiones al mes, 1:1. Open Floor es un grupo reducido.",
    "¿No lo tienes claro? Empieza con una consulta de 30 minutos. Es una conversación, no un entrenamiento. La reserva guarda un horario. La tarifa se acuerda directamente.",
  ],
  safetyHeading: "Antes de empezar",
  safety:
    "Información general, no consejo médico. El modelo de cribado del ACSM dice: si eres inactivo, no tienes síntomas ni enfermedad cardiaca, metabólica o renal conocida, puedes empezar con ejercicio ligero a moderado sin autorización médica y progresar poco a poco. Si tienes alguna de esas enfermedades, o síntomas como dolor en el pecho, falta de aire inusual o mareo, consigue autorización médica primero.{5} Si vuelves tras una lesión, una cirugía o un parto: autorización primero. Si te preocupa tu salud, el NHS aconseja hablar con un médico antes de empezar.{4}",
};

const zh: PostCopy = {
  metaTitle: "长期中断后最适合的运动：7个入门动作 | Jalan PT",
  metaDescription:
    "长时间中断后重新开始运动？在家重新起步的7个最佳动作，世界卫生组织、NHS和ACSM的建议，以及第一个月的示例安排。",
  h1: "长期中断后重新开始运动的最佳动作：7个入门动作",
  dek: "已经很久没练了。没关系。我们从你现在的状态开始，而不是从你以前的状态开始。",
  updated: "更新于2026年10月23日",
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
    whatsapp: "通过WhatsApp咨询",
    whatsappText: "你好Susmit，我读了关于重新开始运动的文章，想预约一次咨询",
    skip: "跳到正文",
    crumb: "长期中断后最适合的运动",
  },
  intro: [
    "停了几个月，也许几年。工作、孩子、伤病、生活。这很正常。",
    "世界卫生组织说得很清楚：有一点活动总比没有好。从少量开始，再一点点增加频率、时长和强度。{1}",
    "你需要一把椅子、一面墙、一块地面，以及一根弹力带或一个背包。暂时不需要健身房。",
  ],
  listHeading: "重新开始运动的7个最佳动作",
  items: [
    {
      name: "快走，大多数日子",
      why: "最容易的回归方式。一项涵盖15个队列的荟萃分析发现，随着每日步数增加，死亡风险持续下降：60岁及以上的成年人在每天约6,000至8,000步时趋于平稳，较年轻的成年人则在8,000至10,000步。{6}这是观察性结果，不是承诺。",
      how: "能说话但不能唱歌的速度。按NHS的定义，这就是中等强度。{2}先走平路，坡路以后再说。",
      dose: "每次10至20分钟，大多数日子。每周增加约5分钟。",
    },
    {
      name: "坐站练习",
      why: "对于有一段时间没怎么活动的人，NHS列出的第一个力量动作。{3}日常生活中大部分工作靠腿和髋完成。",
      how: "坐在稳固椅子的前端，身体稍微前倾。用腿站起来，不要用手撑。慢慢坐下。",
      dose: "从5次慢速重复开始。{3}逐步增加到3组，每组10次。然后抱一个背包。",
    },
    {
      name: "扶墙俯卧撑，然后桌子，然后地面",
      why: "胸、肩和手臂。NHS建议扶墙做3组，每组5至10次。{3}手的位置越低，难度越大。",
      how: "双手放在墙上，与胸同高。身体保持一条直线。屈肘靠近墙，再推回。",
      dose: "3组，每组5至10次。10次变轻松后，改为扶桌沿。",
    },
    {
      name: "臀桥",
      why: "髋部和腿部后侧。对膝盖友好，而且躺着做，不用担心平衡。髋和腿都在NHS的主要肌群清单上。{2}",
      how: "仰卧，屈膝，双脚踩地。用脚跟发力，抬起髋部，直到膝、髋、肩成一条线。慢慢放下。",
      dose: "2至3组，每组10次。顶端停留2秒。",
    },
    {
      name: "弹力带或背包划船",
      why: "背部、肩部和手臂也在同一份NHS清单上。{2}长期中断后，上背部通常是最没人练的部位。",
      how: "把弹力带绕在门把手或桌腿上。站直。把肘部向后拉到肋骨旁。停顿。慢慢还原。",
      dose: "2至3组，每组10至15次。",
    },
    {
      name: "死虫式",
      why: "控制躯干，又不给背部压力。腹部也是主要肌群之一。{2}我们也用它来教你在任何负重动作前如何收紧核心。",
      how: "仰卧，双臂向上，膝盖在髋部正上方。轻轻把下背部压向地面。伸出一侧手臂和对侧腿。还原。换边。",
      dose: "2至3组，每侧6至8次。慢一点。",
    },
    {
      name: "走跑交替，等快走变轻松以后",
      why: "一个经过检验的从走到跑的过渡方法。NHS的Couch to 5K从1分钟跑步加90秒步行开始，每周3次，中间安排休息日，用9周或更长时间逐步推进。{4}",
      how: "轻松地跑。如果说不出一句短句，就放慢或改为步行。",
      dose: "每周3天，不连续。如果某一周感觉吃力，就重复那一周。",
    },
  ],
  enoughHeading: "多少才够？",
  enough: [
    "成年人的目标：每周150至300分钟中等强度活动，外加每周2天或以上针对所有主要肌群的力量训练。{1}{2}",
    "力量训练本身就有价值。一项队列研究的荟萃分析发现，肌肉强化活动与全因死亡、心血管疾病、癌症和糖尿病风险降低10%至17%相关，最大降幅出现在每周约30至60分钟。{7}这同样是观察性结果。是个好理由，不是保证。",
    "中断不等于一切归零。在一项只有14名年轻男性的小型试验中，训练周期之间各停练三周，并没有妨碍他们在24周后达到与不间断训练者相近的肌肉和力量增长。{8}研究规模小，停练时间也短。但动作模式回来得比你想象的快。",
    "别一开始就冲目标。先从步行和每周两天力量训练开始。",
  ],
  sampleHeading: "回归的第一个月",
  sampleLabel: "仅为示例，并非处方。请根据你的身体、经历和日程调整。",
  sample: [
    "第1至2周：大多数日子步行10至15分钟。两天力量训练，例如周一和周四：动作2至6，做一到两轮。每组在还能再做2至3次时停止。",
    "第3至4周：步行15至20分钟。两到三天力量训练，两到三轮。力量训练日之间隔一天。",
    "第二天肌肉酸痛？下一次训练放轻松。尖锐的疼痛？停下来，去检查。",
    "当步行30分钟变得轻松时，每周三天尝试走跑交替。",
  ],
  coachedHeading: "想要实时指导？",
  coached: [
    "这正是Return的用途。每次45分钟，每月12次，隔天进行。先重建动作，再加负重。",
    "通过Google Meet、Zoom或FaceTime实时指导。来自浦那。使用印地语或英语。按印度标准时间（IST）。",
    "以后想要更多？Iron Hour是60分钟一对一课程。Lean Reset是每月20次一对一课程。Open Floor是小组课。",
    "不确定？先预约30分钟咨询。这是一次交流，不是训练。预约只是保留时间，费用直接商定。",
  ],
  safetyHeading: "开始之前",
  safety:
    "一般信息，不构成医疗建议。ACSM的筛查模型指出：如果你目前不运动、没有症状，也没有已知的心脏、代谢或肾脏疾病，可以在无需医疗许可的情况下开始轻度至中等强度运动，并逐步增加。如果你有上述疾病，或有胸痛、异常气短或头晕等症状，请先获得医疗许可。{5}从伤病、手术或分娩后恢复：先获得许可。如果担心自己的健康，NHS建议在开始前先咨询医生。{4}",
};

const ja: PostCopy = {
  metaTitle: "長いブランク後に最適なエクササイズ：まず始める7種目 | Jalan PT",
  metaDescription:
    "長いブランクから運動を再開？自宅で始める最適なエクササイズ7種目、WHO・NHS・ACSMの推奨、そして最初の1か月の例を紹介します。",
  h1: "長いブランクから運動を再開するための最適なエクササイズ：まず始める7種目",
  dek: "久しぶりですね。大丈夫。以前のあなたではなく、今のあなたから始めます。",
  updated: "2026年10月23日更新",
  byline: "執筆：Susmit Jalan（Jalan PTコーチ、プネー）",
  credentialsNote:
    "ASCAレベル1（ストレングス＆コンディショニング）およびACE（解剖学とバイオメカニクス）。これらはコーチが保有する資格です。いずれの団体も、この事業や本記事を推奨するものではありません。",
  labels: {
    home: "ホーム",
    blog: "ブログ",
    why: "理由",
    how: "やり方",
    dose: "目安",
    sources: "出典",
    readIn: "ほかの言語で読む",
    programs: "プログラムを見る",
    whatsapp: "WhatsAppで質問する",
    whatsappText: "こんにちはSusmitさん、運動再開の記事を読みました。コンサルテーションを予約したいです",
    skip: "本文へスキップ",
    crumb: "長いブランク後に最適なエクササイズ",
  },
  intro: [
    "数か月のブランク。もしかすると数年。仕事、出産、けが、生活。よくあることです。",
    "WHOははっきり言っています。少しでも体を動かすほうが、何もしないよりよい。少しから始めて、頻度、時間、強度を少しずつ増やしましょう。{1}",
    "必要なのは椅子、壁、床のスペース、そしてバンドかリュック。ジムはまだいりません。",
  ],
  listHeading: "運動再開に最適なエクササイズ7種目",
  items: [
    {
      name: "早歩き、ほぼ毎日",
      why: "いちばん簡単な戻り方です。15のコホートをまとめたメタ分析では、1日の歩数が増えるほど死亡リスクは下がり続け、60歳以上では1日およそ6,000〜8,000歩、それより若い成人では8,000〜10,000歩で横ばいになりました。{6}これは観察研究の結果で、約束ではありません。",
      how: "話せるけれど歌えないくらいのペース。NHSの定義では、これが中強度です。{2}まずは平らな道で。坂はあとで。",
      dose: "10〜20分、ほぼ毎日。1週間ごとに約5分ずつ増やします。",
    },
    {
      name: "椅子からの立ち座り",
      why: "しばらくあまり動いていない人向けに、NHSが最初に挙げている筋力エクササイズです。{3}日常の動作の多くは脚と股関節が担っています。",
      how: "しっかりした椅子の前のほうに座ります。少し前に傾きます。腕ではなく脚で立ち上がります。ゆっくり座ります。",
      dose: "ゆっくり5回から始めます。{3}10回×3セットまで増やします。その後リュックを抱えます。",
    },
    {
      name: "壁腕立て伏せ、次に机、次に床",
      why: "胸、肩、腕。NHSは壁で5〜10回×3セットを勧めています。{3}手の位置が低いほど難しくなります。",
      how: "胸の高さで壁に手をつきます。体はまっすぐ。肘を曲げて壁に近づき、押し戻します。",
      dose: "5〜10回×3セット。10回が楽になったら机の縁へ。",
    },
    {
      name: "グルートブリッジ",
      why: "お尻と脚の裏側。膝にやさしく、寝た姿勢なのでバランスの心配もありません。股関節と脚はNHSの主要な筋群のリストに入っています。{2}",
      how: "仰向けで膝を曲げ、足裏を床に。かかとで押して、膝・股関節・肩が一直線になるまでお尻を上げます。ゆっくり下ろします。",
      dose: "10回×2〜3セット。上で2秒止めます。",
    },
    {
      name: "バンドまたはリュックでのロウ",
      why: "背中、肩、腕も同じNHSのリストにあります。{2}長いブランクのあと、背中の上部はたいてい誰も鍛えていなかった場所です。",
      how: "バンドをドアノブか机の脚にかけます。まっすぐ立ちます。肘を肋骨の横まで引きます。止めて、ゆっくり戻します。",
      dose: "10〜15回×2〜3セット。",
    },
    {
      name: "デッドバグ",
      why: "腰に負担をかけずに体幹をコントロールします。腹部も主要な筋群のひとつです。{2}重りを使う種目の前に、体幹の固め方を教えるのもこの動きです。",
      how: "仰向けで腕を上に、膝は股関節の真上。腰を軽く床に押しつけます。片腕と反対の脚を遠くへ伸ばします。戻して、入れ替えます。",
      dose: "左右6〜8回×2〜3セット。ゆっくり。",
    },
    {
      name: "ウォーク・ラン・インターバル（歩くのが楽になったら）",
      why: "歩くことから走ることへの、実績のある段階的な方法です。NHSのCouch to 5Kは1分走って90秒歩くことから始まり、週3回、間に休養日をはさみ、9週間以上かけて進みます。{4}",
      how: "楽に走ります。短い文が話せなければ、ペースを落とすか歩きます。",
      dose: "週3日、連続しない日に。きつかった週はもう一度くり返します。",
    },
  ],
  enoughHeading: "どれくらいで十分？",
  enough: [
    "成人の目標：週150〜300分の中強度の活動に加え、週2日以上、すべての主要な筋群の筋力トレーニング。{1}{2}",
    "筋力トレーニングはそれだけで意味があります。コホート研究のメタ分析では、筋力を高める活動は、全死因死亡、心血管疾患、がん、糖尿病のリスクが10〜17%低いことと関連していました。最も大きな低下は週およそ30〜60分で見られました。{7}これも観察研究です。よい理由ですが、保証ではありません。",
    "ブランクは完全なリセットではありません。若い男性14人の小さな試験では、トレーニング期間の間に3週間ずつ休んでも、24週間休まず続けた人と同じくらいの筋肉と筋力の向上が得られました。{8}小規模な研究で、休みも短いものです。それでも、動きの感覚は思ったより早く戻ってきます。",
    "いきなり目標から始めないこと。ウォーキングと週2日の筋トレから始めましょう。",
  ],
  sampleHeading: "再開して最初の1か月",
  sampleLabel: "あくまで例です。処方ではありません。体、これまでの経験、予定に合わせて調整してください。",
  sample: [
    "1〜2週目：ほぼ毎日10〜15分歩く。筋トレは週2日、たとえば月曜と木曜：種目2〜6を1〜2周。各セットは、あと2〜3回できる余裕を残して終える。",
    "3〜4週目：15〜20分歩く。筋トレは週2〜3日、2〜3周。筋トレの日の間は1日空ける。",
    "翌日に筋肉痛？次のセッションは軽めに。鋭い痛み？中止して、診てもらいましょう。",
    "30分歩くのが楽になったら、週3日ウォーク・ラン・インターバルを試しましょう。",
  ],
  coachedHeading: "ライブで指導を受けたい？",
  coached: [
    "Returnはまさにそのためのプログラムです。45分。月12回、1日おき。重さより先に、動きを作り直します。",
    "Google Meet、Zoom、FaceTimeでライブ指導。プネーから。ヒンディー語または英語で。インド標準時（IST）で。",
    "もっと先へ進みたくなったら？Iron Hourは60分の1対1セッション。Lean Resetは月20回の1対1。Open Floorは少人数グループです。",
    "迷ったら？まず30分のコンサルテーションから。トレーニングではなく、話し合いです。予約は時間を押さえるだけ。料金は直接相談して決めます。",
  ],
  safetyHeading: "始める前に",
  safety:
    "一般的な情報であり、医学的な助言ではありません。ACSMのスクリーニングモデルでは、現在運動しておらず、症状がなく、心臓・代謝・腎臓の病気が知られていなければ、医師の許可なしに軽〜中強度の運動を始め、少しずつ進めてよいとしています。これらの病気がある場合や、胸の痛み、いつもと違う息切れ、めまいなどの症状がある場合は、まず医師の許可を得てください。{5}けが、手術、出産からの復帰：まず許可を。健康に不安がある場合、NHSは始める前に医師に相談するよう勧めています。{4}",
};

const gu: PostCopy = {
  metaTitle: "લાંબા વિરામ પછી શ્રેષ્ઠ કસરતો: શરૂઆત માટે 7 | Jalan PT",
  metaDescription:
    "લાંબા વિરામ પછી કસરતમાં પાછા ફરો છો? ઘરે ફરી શરૂ કરવા માટેની 7 શ્રેષ્ઠ કસરતો, WHO, NHS અને ACSM શું કહે છે, અને પહેલા મહિનાનો એક નમૂનો.",
  h1: "લાંબા વિરામ પછી કસરતમાં પાછા ફરવા માટેની શ્રેષ્ઠ કસરતો: શરૂઆત માટે 7",
  dek: "ઘણો સમય થઈ ગયો. કોઈ વાંધો નહીં. તમે પહેલાં જ્યાં હતા ત્યાંથી નહીં, અત્યારે જ્યાં છો ત્યાંથી શરૂ કરીએ.",
  updated: "અપડેટ: 23 ઑક્ટોબર 2026",
  byline: "લેખક: સુસ્મિત જાલાન, કોચ, Jalan PT, પુણે.",
  credentialsNote:
    "ASCA લેવલ 1 (સ્ટ્રેન્થ અને કન્ડિશનિંગ) અને ACE (એનાટોમી અને બાયોમિકેનિક્સ). આ કોચ પાસેનાં પ્રમાણપત્રો છે. આમાંની કોઈ પણ સંસ્થા આ વ્યવસાય કે આ લેખને સમર્થન આપતી નથી.",
  labels: {
    home: "હોમ",
    blog: "બ્લોગ",
    why: "શા માટે",
    how: "કેવી રીતે",
    dose: "માત્રા",
    sources: "સ્રોતો",
    readIn: "આ ભાષામાં વાંચો",
    programs: "પ્રોગ્રામ જુઓ",
    whatsapp: "WhatsApp પર પૂછો",
    whatsappText: "નમસ્તે સુસ્મિત, મેં કસરતમાં પાછા ફરવા વિશેનો લેખ વાંચ્યો અને કન્સલ્ટેશન બુક કરવું છે",
    skip: "સામગ્રી પર જાઓ",
    crumb: "લાંબા વિરામ પછી શ્રેષ્ઠ કસરતો",
  },
  intro: [
    "મહિનાઓનો વિરામ. કદાચ વર્ષોનો. કામ, બાળક, ઈજા, જિંદગી. આવું થાય છે.",
    "WHO સ્પષ્ટ કહે છે: થોડી પ્રવૃત્તિ, કંઈ ન કરવા કરતાં સારી છે. નાનાથી શરૂ કરો. પછી કેટલી વાર, કેટલો સમય અને કેટલી મહેનત, ધીમે ધીમે વધારો.{1}",
    "એક ખુરશી, એક દીવાલ, થોડી જમીન, અને એક બૅન્ડ કે બૅકપૅક. હજી જિમની જરૂર નથી.",
  ],
  listHeading: "કસરતમાં પાછા ફરવા માટેની 7 શ્રેષ્ઠ કસરતો",
  items: [
    {
      name: "ઝડપી ચાલવું, મોટા ભાગના દિવસો",
      why: "પાછા ફરવાનો સૌથી સહેલો રસ્તો. 15 કોહોર્ટના એક મેટા-એનાલિસિસમાં, રોજનાં પગલાં વધતાં મૃત્યુનું જોખમ ઘટતું ગયું, અને 60 વર્ષ અને તેથી વધુ ઉંમરના લોકોમાં લગભગ 6,000 થી 8,000 પગલાં પર, અને નાની ઉંમરના લોકોમાં 8,000 થી 10,000 પગલાં પર સ્થિર થયું.{6} આ એક ઑબ્ઝર્વેશનલ તારણ છે, વચન નહીં.",
      how: "એટલી ઝડપ કે તમે વાત કરી શકો પણ ગાઈ ન શકો. NHS ની વ્યાખ્યા મુજબ આ જ મધ્યમ પ્રવૃત્તિ છે.{2} પહેલાં સપાટ રસ્તો. ચઢાણ પછી.",
      dose: "10 થી 20 મિનિટ, મોટા ભાગના દિવસો. દર અઠવાડિયે લગભગ 5 મિનિટ ઉમેરો.",
    },
    {
      name: "સિટ-ટુ-સ્ટૅન્ડ (ખુરશી પરથી ઊઠવું-બેસવું)",
      why: "જેમણે ઘણા સમયથી ખાસ કંઈ કર્યું નથી, તેમના માટે NHS ની યાદીમાં પહેલી સ્ટ્રેન્થ કસરત.{3} રોજિંદા જીવનનું મોટા ભાગનું કામ પગ અને થાપા કરે છે.",
      how: "મજબૂત ખુરશીના આગળના ભાગ પર બેસો. થોડા આગળ ઝૂકો. હાથથી નહીં, પગથી ઊભા થાઓ. ધીમે બેસો.",
      dose: "5 ધીમાં રેપથી શરૂ કરો.{3} પછી 10 ના 3 સેટ સુધી. ત્યાર બાદ બૅકપૅક પકડો.",
    },
    {
      name: "દીવાલ પર પુશ-અપ, પછી ડેસ્ક, પછી જમીન",
      why: "છાતી, ખભા અને હાથ. NHS દીવાલ પર 5 થી 10 ના 3 સેટ સૂચવે છે.{3} હાથ જેટલા નીચા, એટલું અઘરું.",
      how: "હાથ દીવાલ પર, છાતીની ઊંચાઈએ. શરીર સીધું. કોણી વાળો, અંતર ઘટાડો, પાછા ધકેલો.",
      dose: "5 થી 10 ના 3 સેટ. 10 સહેલાં લાગે ત્યારે ડેસ્કની કિનારી પર જાઓ.",
    },
    {
      name: "ગ્લૂટ બ્રિજ",
      why: "થાપા અને પગનો પાછળનો ભાગ. ઘૂંટણ પર હળવું, અને સૂતા હોવાથી સંતુલનની ચિંતા નહીં. થાપા અને પગ NHS ની મુખ્ય સ્નાયુઓની યાદીમાં છે.{2}",
      how: "પીઠ પર સૂઈ જાઓ, ઘૂંટણ વાળેલા, પગ જમીન પર. એડીથી ધકેલો. ઘૂંટણ, થાપા અને ખભા એક લાઇનમાં આવે ત્યાં સુધી થાપા ઉપાડો. ધીમે નીચે.",
      dose: "10 ના 2 થી 3 સેટ. ઉપર 2 સેકન્ડ રોકાઓ.",
    },
    {
      name: "બૅન્ડ કે બૅકપૅક રો",
      why: "પીઠ, ખભા અને હાથ પણ NHS ની એ જ યાદીમાં છે.{2} લાંબા વિરામ પછી ઉપરની પીઠ સામાન્ય રીતે એ ભાગ હોય છે જેને કોઈએ ટ્રેન કર્યો નથી.",
      how: "બૅન્ડ દરવાજાના હૅન્ડલ કે ટેબલના પાયા પર વીંટાળો. સીધા ઊભા રહો. કોણી પાંસળી સુધી પાછળ ખેંચો. રોકાઓ. ધીમે પાછા ફરો.",
      dose: "10 થી 15 ના 2 થી 3 સેટ.",
    },
    {
      name: "ડેડ બગ",
      why: "પીઠ પર ભાર નાખ્યા વગર ધડ પર નિયંત્રણ. પેટ પણ એક મુખ્ય સ્નાયુ સમૂહ છે.{2} કોઈ પણ વજનવાળી લિફ્ટ પહેલાં બ્રેસ કરવાનું અમે આ રીતે જ શીખવીએ છીએ.",
      how: "પીઠ પર, હાથ ઉપર, ઘૂંટણ થાપાની ઉપર. કમરનો નીચેનો ભાગ હળવેથી જમીન પર દબાવો. એક હાથ અને સામેનો પગ દૂર લઈ જાઓ. પાછા લાવો. બદલો.",
      dose: "દરેક બાજુ 6 થી 8 ના 2 થી 3 સેટ. ધીમે.",
    },
    {
      name: "ચાલવું-દોડવું ઇન્ટરવલ, ચાલવું સહેલું થાય ત્યારે",
      why: "ચાલવાથી દોડવા સુધીનો એક પરખાયેલો રસ્તો. NHS Couch to 5K 1 મિનિટ દોડ અને 90 સેકન્ડ ચાલવાથી શરૂ થાય છે, અઠવાડિયામાં 3 વાર, વચ્ચે આરામના દિવસો સાથે, અને 9 અઠવાડિયાં કે તેથી વધુમાં આગળ વધે છે.{4}",
      how: "આરામથી દોડો. એક નાનું વાક્ય ન બોલી શકો તો ધીમા પડો કે ચાલો.",
      dose: "અઠવાડિયામાં 3 દિવસ, સળંગ નહીં. અઠવાડિયું અઘરું લાગ્યું તો ફરી કરો.",
    },
  ],
  enoughHeading: "કેટલું પૂરતું છે?",
  enough: [
    "પુખ્તો માટેનું લક્ષ્ય: અઠવાડિયે 150 થી 300 મિનિટ મધ્યમ પ્રવૃત્તિ, સાથે અઠવાડિયામાં 2 કે વધુ દિવસ બધા મુખ્ય સ્નાયુ સમૂહોની સ્ટ્રેન્થ ટ્રેનિંગ.{1}{2}",
    "સ્ટ્રેન્થનું પોતાનું મહત્ત્વ છે. કોહોર્ટ સ્ટડીઝના એક મેટા-એનાલિસિસે સ્નાયુ મજબૂત કરતી પ્રવૃત્તિને કોઈ પણ કારણે મૃત્યુ, હૃદયરોગ, કૅન્સર અને ડાયાબિટીસના 10 થી 17% ઓછા જોખમ સાથે જોડી. સૌથી મોટો ઘટાડો અઠવાડિયે લગભગ 30 થી 60 મિનિટે દેખાયો.{7} આ પણ ઑબ્ઝર્વેશનલ છે. સારું કારણ, ગૅરંટી નહીં.",
    "વિરામ એટલે સંપૂર્ણ શૂન્યથી શરૂઆત નહીં. 14 યુવાન પુરુષોના એક નાના ટ્રાયલમાં, ટ્રેનિંગ બ્લૉક્સ વચ્ચે ત્રણ-ત્રણ અઠવાડિયાંના વિરામ છતાં, તેમણે 24 અઠવાડિયાં સતત ટ્રેન કરનારા જેટલી સ્નાયુ અને તાકાત મેળવી.{8} નાનો અભ્યાસ. ટૂંકા વિરામ. છતાં પૅટર્ન તમે ધારો એના કરતાં જલદી પાછી આવે છે.",
    "લક્ષ્યથી શરૂઆત ન કરો. ચાલવાથી અને બે સ્ટ્રેન્થ દિવસોથી શરૂ કરો.",
  ],
  sampleHeading: "પાછા ફર્યા પછીનો પહેલો મહિનો",
  sampleLabel: "માત્ર નમૂનો. પ્રિસ્ક્રિપ્શન નહીં. તમારા શરીર, તમારા ઇતિહાસ અને તમારા શેડ્યૂલ મુજબ બદલો.",
  sample: [
    "અઠવાડિયું 1 અને 2: મોટા ભાગના દિવસો 10 થી 15 મિનિટ ચાલો. બે સ્ટ્રેન્થ દિવસ, જેમ કે સોમવાર અને ગુરુવાર: મૂવ 2 થી 6, એક કે બે રાઉન્ડ. દરેક સેટ ત્યારે રોકો જ્યારે 2 કે 3 રેપ બાકી હોય.",
    "અઠવાડિયું 3 અને 4: 15 થી 20 મિનિટ ચાલો. બે કે ત્રણ સ્ટ્રેન્થ દિવસ, બે કે ત્રણ રાઉન્ડ. સ્ટ્રેન્થ દિવસો વચ્ચે એક દિવસ છોડો.",
    "બીજા દિવસે સ્નાયુઓમાં દુખાવો? આગલું સેશન હળવું રાખો. તીવ્ર દુખાવો? રોકાઓ, અને તપાસ કરાવો.",
    "30 મિનિટ ચાલવું સહેલું લાગે ત્યારે, અઠવાડિયામાં ત્રણ દિવસ ચાલવું-દોડવું ઇન્ટરવલ અજમાવો.",
  ],
  coachedHeading: "લાઇવ કોચિંગ જોઈએ છે?",
  coached: [
    "Return આ માટે જ છે. 45 મિનિટ. મહિનામાં 12 સેશન, એકાંતરે દિવસે. પહેલાં મૂવમેન્ટ ફરી બનાવીએ, પછી વજન.",
    "Google Meet, Zoom કે FaceTime પર લાઇવ કોચિંગ. પુણેથી. હિન્દી કે અંગ્રેજીમાં. IST પર.",
    "પછી વધુ જોઈએ છે? Iron Hour 60 મિનિટનું 1:1 સેશન છે. Lean Reset મહિનામાં 20 સેશન, 1:1. Open Floor એક નાનું ગ્રુપ છે.",
    "ખાતરી નથી? 30 મિનિટના કન્સલ્ટેશનથી શરૂ કરો. આ વાતચીત છે, ટ્રેનિંગ નહીં. બુકિંગ એક સમય રોકે છે. ફી સીધી નક્કી થાય છે.",
  ],
  safetyHeading: "શરૂ કરતાં પહેલાં",
  safety:
    "સામાન્ય માહિતી, તબીબી સલાહ નહીં. ACSM નું સ્ક્રીનિંગ મૉડલ કહે છે: જો તમે નિષ્ક્રિય છો, કોઈ લક્ષણો નથી, અને હૃદય, મેટાબોલિક કે કિડનીની કોઈ જાણીતી બીમારી નથી, તો તમે તબીબી મંજૂરી વગર હળવી થી મધ્યમ કસરત શરૂ કરીને ધીમે ધીમે વધારી શકો છો. જો આમાંની કોઈ બીમારી હોય, અથવા છાતીમાં દુખાવો, અસામાન્ય હાંફ કે ચક્કર જેવાં લક્ષણો હોય, તો પહેલાં તબીબી મંજૂરી લો.{5} ઈજા, સર્જરી કે ડિલિવરી પછી પાછા ફરો છો: પહેલાં મંજૂરી. જો સ્વાસ્થ્યની ચિંતા હોય, તો NHS શરૂ કરતાં પહેલાં ડૉક્ટર સાથે વાત કરવાની સલાહ આપે છે.{4}",
};

export const BACK_COPY: Record<PostLang, PostCopy> = { en, ar, hi, es, zh, ja, gu };

export const backAfterBreakPost: BlogPost = {
  slug: BACK_SLUG,
  published: BACK_PUBLISHED,
  modified: BACK_MODIFIED,
  about: "Getting back into exercise after a long break",
  sources: BACK_SOURCES,
  copy: BACK_COPY,
};
