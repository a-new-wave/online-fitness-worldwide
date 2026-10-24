/**
 * Blog post: "Best strength exercises for women over 40".
 * Citations in copy are written as {n} and point at W40_SOURCES[n - 1].
 * Every number in the copy comes from a cited source (checked against the
 * abstract or page text). No client results, no quotes, no prices.
 * Translations were drafted for this batch and need a native-speaker review
 * before launch (see CHANGES-grokbot.md).
 */

import { type BlogPost, type PostCopy } from "./shared";

export const W40_SLUG = "best-strength-exercises-for-women-over-40";
export const W40_PUBLISHED = "2026-10-24";
export const W40_MODIFIED = "2026-10-24";

export const W40_SOURCES = [
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
    cite: "American College of Sports Medicine. Position stand: Progression models in resistance training for healthy adults. Med Sci Sports Exerc. 2009;41(3):687–708.",
    url: "https://doi.org/10.1249/MSS.0b013e3181915670",
  },
  {
    cite: "Westcott WL. Resistance training is medicine: effects of strength training on health. Curr Sports Med Rep. 2012;11(4):209–216.",
    url: "https://doi.org/10.1249/JSR.0b013e31825dabb8",
  },
  {
    cite: "Watson SL, Weeks BK, Weis LJ, et al. High-intensity resistance and impact training improves bone mineral density and physical function in postmenopausal women with osteopenia and osteoporosis: the LIFTMOR randomized controlled trial. J Bone Miner Res. 2018;33(2):211–220.",
    url: "https://doi.org/10.1002/jbmr.3284",
  },
  {
    cite: "Brooke-Wavell K, Skelton DA, Barker KL, et al. Strong, steady and straight: UK consensus statement on physical activity and exercise for osteoporosis. Br J Sports Med. 2022;56(15):837–846.",
    url: "https://doi.org/10.1136/bjsports-2021-104634",
  },
  {
    cite: "Momma H, Kawakami R, Honda T, Sawada SS. Muscle-strengthening activities are associated with lower risk and mortality in major non-communicable diseases: a systematic review and meta-analysis of cohort studies. Br J Sports Med. 2022;56(13):755–763.",
    url: "https://doi.org/10.1136/bjsports-2021-105061",
  },
  {
    cite: "Riebe D, Franklin BA, Thompson PD, et al. Updating ACSM's recommendations for exercise preparticipation health screening. Med Sci Sports Exerc. 2015;47(11):2473–2479.",
    url: "https://doi.org/10.1249/MSS.0000000000000664",
  },
] as const;

const en: PostCopy = {
  metaTitle: "Best Strength Exercises for Women Over 40: 7 Moves | Jalan PT",
  metaDescription:
    "The 7 best strength exercises for women over 40, for muscle, bone and balance. What WHO, the NHS, ACSM and bone research say, plus a sample week.",
  h1: "Best strength exercises for women over 40: 7 moves to start with",
  dek: "Forty is not a warning sign. It is a good time to start lifting properly.",
  updated: "Updated 24 October 2026",
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
    whatsappText: "Hi Susmit, I read the article on strength training for women over 40 and want to book a consultation",
    skip: "Skip to content",
    crumb: "Best strength exercises for women over 40",
  },
  intro: [
    "Work. Family. Parents. Your own training slides to the bottom of the list. It happens.",
    "Here is the short version. Lift something, at least twice a week. WHO and the NHS both ask adults to train all the major muscle groups on 2 or more days a week.{1}{2}",
    "Why it matters more now: one widely cited review puts the muscle loss in inactive adults at 3 to 8% per decade.{5} Strength work is how you push back.",
    "You need a chair, a wall, some floor, and a backpack or two dumbbells.",
  ],
  listHeading: "The 7 best strength exercises for women over 40",
  items: [
    {
      name: "Squat to a chair",
      why: "Legs and hips do most of the work of daily life. Stairs, the floor, the car. ACSM advises doing big, multi-joint moves like this first in a session.{4}",
      how: "Feet hip-width apart. Sit back to the chair, touch it lightly, stand up. Knees follow the toes. Chest tall. Too easy? Hold a dumbbell or a backpack at your chest.",
      dose: "2 to 3 sets of 8 to 12. ACSM's starting range for beginners is a load you can lift 8 to 12 times.{4}",
    },
    {
      name: "Hip hinge with dumbbells or a backpack",
      why: "The back of the body: glutes, hamstrings, back. All on the NHS list of major muscle groups.{2} It is also the pattern for lifting things off the floor.",
      how: "Soft knees. Push the hips back. The weight slides down the front of the thighs. Back long and flat, not rounded. Stand up by squeezing the glutes.",
      dose: "2 to 3 sets of 8 to 12. Slow on the way down.",
    },
    {
      name: "Press-up: wall, then desk, then floor",
      why: "Chest, shoulders and arms. The NHS starts at the wall with 3 sets of 5 to 10.{3} The lower your hands, the harder it gets.",
      how: "Body in one straight line. Elbows angle back, not out to the sides. Lower with control. Push the wall, desk or floor away.",
      dose: "3 sets of 5 to 10. When 10 is easy, move your hands lower.",
    },
    {
      name: "One-arm row",
      why: "Upper back and arms. It balances all the pushing, and all the hours at a desk or on a phone. Back, shoulders and arms are major muscle groups too.{2}",
      how: "One hand on a chair or bench. Flat back. Pull the dumbbell or backpack to your hip. Pause. Lower slowly.",
      dose: "2 to 3 sets of 10 to 12 each side.",
    },
    {
      name: "Split squat or step-up",
      why: "One leg at a time. ACSM recommends both two-leg and single-leg exercises.{4} Single-leg work also asks for balance, which you use on every step you climb.",
      how: "Split squat: one foot forward, one back, lower the back knee towards the floor. Step-up: a sturdy step, whole foot on it, drive up through the front heel. Hold a wall if you need to.",
      dose: "2 sets of 8 to 10 each leg.",
    },
    {
      name: "Back extension, lying face down",
      why: "The UK consensus statement on exercise for osteoporosis recommends spinal extension exercise to improve posture.{7} It trains the muscles that hold you upright.",
      how: "Face down, forehead on a towel, arms by your sides. Lift the chest a few centimetres. Shoulders back and down. Lower slowly. No big arch.",
      dose: "2 sets of 8 to 10. Hold 2 seconds at the top.",
    },
    {
      name: "Heel drops and small hops, if your bones allow",
      why: "Bone responds to impact as well as load. The same consensus statement recommends resistance and impact exercise to maximise bone strength.{7}",
      how: "Heel drops: rise onto your toes, then drop onto your heels with a firm thud. Ready for more? Small, quiet hops on the spot. Land soft.",
      dose: "Start with 10 to 20 heel drops on most days. Hops only once the drops are easy and pain-free.",
    },
  ],
  enoughHeading: "How much is enough?",
  enough: [
    "The target for adults: 150 to 300 minutes a week of moderate activity, plus strength work for all major muscle groups on 2 or more days.{1}{2} For beginners, ACSM suggests 2 to 3 strength days a week.{4}",
    "Then progress. ACSM's rule: when you can do 1 or 2 reps more than your target, add 2 to 10% to the load.{4}",
    "Heavy lifting can be safe when it is coached. In the LIFTMOR trial, 101 postmenopausal women with low bone mass trained twice a week for 8 months. The group doing 30-minute supervised sessions of heavy lifts and impact work (5 sets of 5, above 85% of their maximum) gained 2.9% in spine bone density. A low-intensity home group lost 1.2%. One minor adverse event was reported.{6} Those sessions were closely supervised and the women were screened first. It is not a home plan.",
    "Strength counts for long-term health too. A meta-analysis of cohort studies linked muscle-strengthening activity with a 10 to 17% lower risk of death from any cause, and of heart disease, cancer and diabetes. The biggest drop was at about 30 to 60 minutes a week.{8} That is observational. A good reason, not a guarantee.",
  ],
  sampleHeading: "A sample week",
  sampleLabel: "Sample only. Not a prescription. Adjust it to your body, your history and your diary.",
  sample: [
    "Day A, for example Monday: squat to a chair, press-up, one-arm row, back extension. 2 rounds to start, then 3.",
    "Day B, for example Thursday: hip hinge, split squat or step-up, one-arm row, back extension. Same rounds.",
    "Most days: heel drops and a brisk walk.",
    "Stop each set with 2 or 3 good reps left. Keep at least one day between strength days.",
  ],
  coachedHeading: "Want it coached live?",
  coached: [
    "Iron Hour is the strength session. 60 minutes, 1:1. Set-up, warm-up, primary lift, accessories, cool-down. We watch every rep and set the load for today.",
    "Coming back after years off? Return is 45 minutes, 12 alternate-day sessions a month. Want more structure? Lean Reset is 20 sessions a month, 1:1. Prefer company? Open Floor is a small group.",
    "Coached live on Google Meet, Zoom or FaceTime. From Pune. In Hindi or English. On IST.",
    "Not sure yet? Start with a 30-minute consultation. It is a conversation, not training. Booking holds a time. The fee is agreed directly.",
  ],
  safetyHeading: "Before you start",
  safety:
    "General information, not medical advice. ACSM's screening model says: if you are inactive, have no symptoms and no known heart, metabolic or kidney disease, you can start light to moderate exercise without medical clearance and build up gradually. If you have one of those conditions, or symptoms such as chest pain, unusual breathlessness or dizziness, get medical clearance first.{9} If you have osteoporosis or have had a fracture, get specialist advice. The UK consensus advises avoiding postures with a lot of forward bending of the spine, and says people with a vertebral fracture or several low-trauma fractures should usually keep impact to the level of brisk walking.{7} Pregnant, recently had a baby, or have pelvic floor symptoms: clearance first. Not exercised for some time? The NHS suggests speaking to your GP first.{2}",
};

const ar: PostCopy = {
  metaTitle: "أفضل تمارين القوة للنساء فوق 40: 7 حركات | Jalan PT",
  metaDescription:
    "أفضل 7 تمارين قوة للنساء فوق الأربعين، للعضلات والعظام والتوازن. ما تقوله منظمة الصحة العالمية وNHS وACSM وأبحاث العظام، مع نموذج لأسبوع تدريب.",
  h1: "أفضل تمارين القوة للنساء فوق الأربعين: 7 حركات للبداية",
  dek: "الأربعون ليست إشارة تحذير. إنها وقت جيد لتبدئي رفع الأوزان بشكل صحيح.",
  updated: "تم التحديث في 24 أكتوبر 2026",
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
    whatsappText: "مرحباً سوسميت، قرأت مقال تمارين القوة للنساء فوق الأربعين وأريد حجز استشارة",
    skip: "انتقل إلى المحتوى",
    crumb: "أفضل تمارين القوة للنساء فوق الأربعين",
  },
  intro: [
    "العمل. العائلة. الوالدان. وتدريبك أنتِ ينزل إلى آخر القائمة. يحدث هذا.",
    "باختصار: ارفعي شيئاً، مرتين في الأسبوع على الأقل. تطلب منظمة الصحة العالمية وNHS من البالغين تقوية كل المجموعات العضلية الرئيسية يومين أو أكثر في الأسبوع.{1}{2}",
    "لماذا يهم ذلك أكثر الآن: تقدّر مراجعة علمية مشهورة أن البالغين غير النشطين يفقدون 3 إلى 8% من كتلتهم العضلية كل عشر سنوات.{5} تمارين القوة هي طريقتك للمقاومة.",
    "تحتاجين إلى كرسي وجدار ومساحة على الأرض، وحقيبة ظهر أو دمبلين.",
  ],
  listHeading: "أفضل 7 تمارين قوة للنساء فوق الأربعين",
  items: [
    {
      name: "القرفصاء إلى الكرسي",
      why: "الساقان والوركان يقومان بمعظم عمل الحياة اليومية: الدرج، النزول إلى الأرض، السيارة. تنصح ACSM بأداء الحركات الكبيرة متعددة المفاصل مثل هذه في بداية الجلسة.{4}",
      how: "القدمان بعرض الوركين. اجلسي للخلف نحو الكرسي، المسيه بخفة، ثم قفي. الركبتان تتبعان أصابع القدمين. الصدر مرفوع. سهل جداً؟ احملي دمبل أو حقيبة ظهر أمام صدرك.",
      dose: "2 إلى 3 مجموعات من 8 إلى 12. نطاق البداية لدى ACSM للمبتدئين هو وزن تستطيعين رفعه 8 إلى 12 مرة.{4}",
    },
    {
      name: "ثني الورك بالدمبل أو بحقيبة الظهر",
      why: "الجزء الخلفي من الجسم: الألوية، أوتار الركبة، الظهر. كلها ضمن قائمة NHS للعضلات الرئيسية.{2} وهو أيضاً نمط رفع الأشياء عن الأرض.",
      how: "الركبتان مرتختان قليلاً. ادفعي الوركين للخلف. ينزلق الوزن على مقدمة الفخذين. الظهر طويل ومستقيم، غير مقوّس. قفي بشدّ الألوية.",
      dose: "2 إلى 3 مجموعات من 8 إلى 12. ببطء عند النزول.",
    },
    {
      name: "الضغط: على الجدار، ثم المكتب، ثم الأرض",
      why: "الصدر والكتفان والذراعان. تبدأ NHS من الجدار بثلاث مجموعات من 5 إلى 10.{3} كلما انخفضت يداك، زادت الصعوبة.",
      how: "الجسم في خط مستقيم واحد. المرفقان للخلف بزاوية، لا للجانبين. انزلي بتحكّم. ادفعي الجدار أو المكتب أو الأرض بعيداً.",
      dose: "3 مجموعات من 5 إلى 10. عندما تصبح 10 سهلة، اخفضي مستوى يديك.",
    },
    {
      name: "السحب بذراع واحدة",
      why: "أعلى الظهر والذراعان. يوازن كل حركات الدفع، وكل الساعات أمام المكتب أو الهاتف. الظهر والكتفان والذراعان مجموعات عضلية رئيسية أيضاً.{2}",
      how: "يد واحدة على كرسي أو مقعد. الظهر مستقيم. اسحبي الدمبل أو الحقيبة نحو الورك. توقّفي لحظة. أنزلي ببطء.",
      dose: "2 إلى 3 مجموعات من 10 إلى 12 لكل جهة.",
    },
    {
      name: "القرفصاء المنقسمة أو الصعود على درجة",
      why: "ساق واحدة في كل مرة. توصي ACSM بتمارين بالساقين معاً وبساق واحدة.{4} وتمارين الساق الواحدة تتطلب توازناً، تستخدمينه في كل درجة تصعدينها.",
      how: "القرفصاء المنقسمة: قدم للأمام وقدم للخلف، أنزلي الركبة الخلفية نحو الأرض. الصعود: درجة ثابتة، القدم كلها عليها، ادفعي للأعلى بكعب القدم الأمامية. استندي إلى جدار إن احتجتِ.",
      dose: "مجموعتان من 8 إلى 10 لكل ساق.",
    },
    {
      name: "تمديد الظهر وأنتِ مستلقية على البطن",
      why: "يوصي البيان التوافقي البريطاني حول التمارين وهشاشة العظام بتمارين تمديد العمود الفقري لتحسين القوام.{7} إنها تقوّي العضلات التي تُبقيك منتصبة.",
      how: "على البطن، الجبهة على منشفة، الذراعان بجانبك. ارفعي الصدر بضعة سنتيمترات. الكتفان للخلف وللأسفل. أنزلي ببطء. بلا تقوّس كبير.",
      dose: "مجموعتان من 8 إلى 10. اثبتي ثانيتين في الأعلى.",
    },
    {
      name: "إسقاط الكعبين وقفزات صغيرة، إن سمحت عظامك",
      why: "العظم يستجيب للصدمات كما يستجيب للأوزان. يوصي البيان التوافقي نفسه بتمارين المقاومة والصدمات لتعظيم قوة العظام.{7}",
      how: "إسقاط الكعبين: ارتفعي على أصابع القدمين، ثم أسقطي الكعبين على الأرض بضربة واضحة. مستعدة للمزيد؟ قفزات صغيرة هادئة في المكان. هبوط ناعم.",
      dose: "ابدئي بـ10 إلى 20 إسقاطاً في معظم الأيام. القفزات فقط عندما يصبح الإسقاط سهلاً وبلا ألم.",
    },
  ],
  enoughHeading: "كم يكفي؟",
  enough: [
    "الهدف للبالغين: 150 إلى 300 دقيقة أسبوعياً من النشاط المعتدل، مع تمارين تقوية لكل المجموعات العضلية الرئيسية يومين أو أكثر.{1}{2} للمبتدئين تقترح ACSM يومين إلى ثلاثة أيام قوة في الأسبوع.{4}",
    "ثم تقدّمي. قاعدة ACSM: عندما تستطيعين أداء تكرار أو تكرارين أكثر من هدفك، أضيفي 2 إلى 10% إلى الوزن.{4}",
    "الرفع الثقيل قد يكون آمناً عندما يكون تحت إشراف. في تجربة LIFTMOR، تدرّبت 101 امرأة بعد سن اليأس لديهن انخفاض في كتلة العظام مرتين أسبوعياً لمدة 8 أشهر. المجموعة التي أدّت جلسات مُشرَف عليها مدتها 30 دقيقة من الرفع الثقيل وتمارين الصدمات (5 مجموعات من 5، فوق 85% من أقصى وزن) زادت كثافة عظام العمود الفقري بنسبة 2.9%. أما مجموعة التمارين المنزلية منخفضة الشدة فخسرت 1.2%. سُجّل حدث سلبي بسيط واحد.{6} كانت الجلسات تحت إشراف دقيق وخضعت النساء لفحص مسبق. ليست خطة منزلية.",
    "وللقوة أهمية للصحة على المدى الطويل أيضاً. ربط تحليل تجميعي لدراسات أترابية بين تمارين تقوية العضلات وانخفاض بنسبة 10 إلى 17% في خطر الوفاة لأي سبب، وفي أمراض القلب والسرطان والسكري. وكان أكبر انخفاض عند نحو 30 إلى 60 دقيقة أسبوعياً.{8} نتيجة رصدية. سبب وجيه، لا ضمان.",
  ],
  sampleHeading: "نموذج لأسبوع",
  sampleLabel: "نموذج فقط. ليس وصفة. عدّليه بحسب جسمك وتاريخك وجدولك.",
  sample: [
    "اليوم أ، مثلاً الاثنين: القرفصاء إلى الكرسي، الضغط، السحب بذراع واحدة، تمديد الظهر. جولتان في البداية، ثم ثلاث.",
    "اليوم ب، مثلاً الخميس: ثني الورك، القرفصاء المنقسمة أو الصعود، السحب بذراع واحدة، تمديد الظهر. نفس عدد الجولات.",
    "معظم الأيام: إسقاط الكعبين ومشي سريع.",
    "أنهي كل مجموعة وما زال لديك تكراران أو ثلاثة جيدة. اتركي يوماً على الأقل بين أيام القوة.",
  ],
  coachedHeading: "تريدين تدريباً مباشراً؟",
  coached: [
    "Iron Hour هي جلسة القوة. 60 دقيقة، فردية. تجهيز، إحماء، رفعة رئيسية، تمارين مساندة، تهدئة. نراقب كل تكرار ونحدد الوزن المناسب لليوم.",
    "تعودين بعد سنوات من التوقف؟ Return: ‏45 دقيقة، 12 جلسة شهرياً يوماً بعد يوم. تريدين هيكلاً أكثر؟ Lean Reset: ‏20 جلسة شهرياً، فردية. تفضّلين الرفقة؟ Open Floor مجموعة صغيرة.",
    "تدريب مباشر عبر Google Meet أو Zoom أو FaceTime. من بونه. بالهندية أو الإنجليزية. بتوقيت الهند (IST).",
    "لستِ متأكدة بعد؟ ابدئي باستشارة مدتها 30 دقيقة. إنها محادثة، وليست تدريباً. الحجز يثبّت موعداً. والرسوم يُتفق عليها مباشرة.",
  ],
  safetyHeading: "قبل أن تبدئي",
  safety:
    "معلومات عامة، وليست نصيحة طبية. وفق نموذج الفحص لدى ACSM: إذا كنتِ غير نشطة، بلا أعراض، ولا تعانين من مرض معروف في القلب أو الأيض أو الكلى، يمكنك البدء بتمارين خفيفة إلى معتدلة دون إذن طبي والتدرّج. إن كانت لديك إحدى هذه الحالات، أو أعراض مثل ألم الصدر أو ضيق نفس غير معتاد أو دوار، فاحصلي على إذن طبي أولاً.{9} إن كنتِ مصابة بهشاشة العظام أو تعرّضتِ لكسر، فاطلبي رأي مختص. ينصح البيان التوافقي البريطاني بتجنّب الوضعيات التي فيها انحناء كبير للعمود الفقري إلى الأمام، ويقول إن من لديهم كسر في فقرة أو عدة كسور ناتجة عن صدمات خفيفة يجب عادةً أن يبقوا الصدمات بمستوى المشي السريع.{7} حامل، أو أنجبتِ حديثاً، أو لديك أعراض في قاع الحوض: الإذن الطبي أولاً. لم تمارسي الرياضة منذ مدة؟ تنصح NHS بالتحدث مع طبيبك أولاً.{2}",
};

const hi: PostCopy = {
  metaTitle: "40 के बाद महिलाओं के लिए सबसे अच्छी स्ट्रेंथ एक्सरसाइज़: 7 मूव्स | Jalan PT",
  metaDescription:
    "40 के बाद महिलाओं के लिए 7 सबसे अच्छी स्ट्रेंथ एक्सरसाइज़, मांसपेशियों, हड्डियों और बैलेंस के लिए। WHO, NHS, ACSM और हड्डियों पर शोध क्या कहते हैं, साथ में एक सैंपल हफ़्ता।",
  h1: "40 के बाद महिलाओं के लिए सबसे अच्छी स्ट्रेंथ एक्सरसाइज़: शुरुआत के लिए 7 मूव्स",
  dek: "40 कोई चेतावनी नहीं है। सही तरीके से वज़न उठाना शुरू करने का यह अच्छा समय है।",
  updated: "अपडेट: 24 अक्टूबर 2026",
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
    whatsappText: "नमस्ते सुस्मित, मैंने 40 के बाद महिलाओं की स्ट्रेंथ ट्रेनिंग वाला लेख पढ़ा और कंसल्टेशन बुक करना चाहती हूँ",
    skip: "सामग्री पर जाएँ",
    crumb: "40 के बाद महिलाओं के लिए स्ट्रेंथ एक्सरसाइज़",
  },
  intro: [
    "काम। परिवार। माता-पिता। आपकी अपनी ट्रेनिंग लिस्ट में सबसे नीचे चली जाती है। ऐसा होता है।",
    "छोटी बात: कुछ उठाइए, हफ़्ते में कम से कम दो बार। WHO और NHS दोनों कहते हैं कि वयस्क हफ़्ते में 2 या ज़्यादा दिन सभी मुख्य मांसपेशी समूहों पर काम करें।{1}{2}",
    "अब यह ज़्यादा क्यों ज़रूरी है: एक जानी-मानी समीक्षा के अनुसार निष्क्रिय वयस्क हर दशक में 3 से 8% मांसपेशी खोते हैं।{5} स्ट्रेंथ ट्रेनिंग इसका जवाब है।",
    "आपको चाहिए: एक कुर्सी, एक दीवार, थोड़ी फ़र्श, और एक बैकपैक या दो डम्बल।",
  ],
  listHeading: "40 के बाद महिलाओं के लिए 7 सबसे अच्छी स्ट्रेंथ एक्सरसाइज़",
  items: [
    {
      name: "कुर्सी तक स्क्वैट",
      why: "रोज़मर्रा का ज़्यादातर काम पैर और कूल्हे करते हैं। सीढ़ियाँ, फ़र्श, गाड़ी। ACSM सलाह देता है कि ऐसे बड़े, कई जोड़ों वाले मूव्स सेशन में पहले करें।{4}",
      how: "पैर कूल्हों की चौड़ाई पर। पीछे कुर्सी की ओर बैठिए, हल्का छुइए, खड़े हो जाइए। घुटने पंजों की दिशा में। सीना ऊपर। आसान लगे? सीने के पास डम्बल या बैकपैक पकड़िए।",
      dose: "8 से 12 के 2 से 3 सेट। ACSM के अनुसार शुरुआती लोगों के लिए ऐसा वज़न जो आप 8 से 12 बार उठा सकें।{4}",
    },
    {
      name: "डम्बल या बैकपैक के साथ हिप हिंज",
      why: "शरीर का पिछला हिस्सा: ग्लूट्स, हैमस्ट्रिंग, पीठ। सब NHS की मुख्य मांसपेशियों की सूची में हैं।{2} फ़र्श से चीज़ें उठाने का पैटर्न भी यही है।",
      how: "घुटने हल्के मुड़े। कूल्हे पीछे धकेलिए। वज़न जाँघों के आगे से नीचे सरकता है। पीठ लंबी और सीधी, गोल नहीं। ग्लूट्स कसकर खड़े होइए।",
      dose: "8 से 12 के 2 से 3 सेट। नीचे जाते समय धीरे।",
    },
    {
      name: "पुश-अप: दीवार, फिर डेस्क, फिर फ़र्श",
      why: "सीना, कंधे और बाँहें। NHS दीवार से शुरू करता है, 5 से 10 के 3 सेट।{3} हाथ जितने नीचे, काम उतना कठिन।",
      how: "शरीर एक सीधी रेखा में। कोहनियाँ तिरछी पीछे, बगल में नहीं। नियंत्रण से नीचे जाइए। दीवार, डेस्क या फ़र्श को दूर धकेलिए।",
      dose: "5 से 10 के 3 सेट। जब 10 आसान हो, हाथ नीचे ले जाइए।",
    },
    {
      name: "वन-आर्म रो",
      why: "ऊपरी पीठ और बाँहें। यह सारे पुशिंग मूव्स और डेस्क या फ़ोन पर बिताए घंटों का संतुलन है। पीठ, कंधे और बाँहें भी मुख्य मांसपेशी समूह हैं।{2}",
      how: "एक हाथ कुर्सी या बेंच पर। पीठ सीधी। डम्बल या बैकपैक को कूल्हे की ओर खींचिए। रुकिए। धीरे नीचे।",
      dose: "हर तरफ़ 10 से 12 के 2 से 3 सेट।",
    },
    {
      name: "स्प्लिट स्क्वैट या स्टेप-अप",
      why: "एक बार में एक पैर। ACSM दोनों पैरों वाले और एक पैर वाले, दोनों तरह के व्यायाम सुझाता है।{4} एक पैर वाला काम बैलेंस भी माँगता है, जो हर सीढ़ी चढ़ते समय लगता है।",
      how: "स्प्लिट स्क्वैट: एक पैर आगे, एक पीछे, पीछे वाला घुटना फ़र्श की ओर। स्टेप-अप: मज़बूत सीढ़ी, पूरा पैर उस पर, आगे वाली एड़ी से ऊपर धकेलिए। ज़रूरत हो तो दीवार पकड़िए।",
      dose: "हर पैर 8 से 10 के 2 सेट।",
    },
    {
      name: "पेट के बल लेटकर बैक एक्सटेंशन",
      why: "ऑस्टियोपोरोसिस और व्यायाम पर UK का सहमति-वक्तव्य पोस्चर सुधारने के लिए रीढ़ को पीछे की ओर फैलाने वाले व्यायाम की सलाह देता है।{7} यह उन मांसपेशियों को मज़बूत करता है जो आपको सीधा रखती हैं।",
      how: "पेट के बल, माथा तौलिये पर, बाँहें बगल में। सीना कुछ सेंटीमीटर उठाइए। कंधे पीछे और नीचे। धीरे नीचे। ज़्यादा मोड़ नहीं।",
      dose: "8 से 10 के 2 सेट। ऊपर 2 सेकंड रुकिए।",
    },
    {
      name: "हील ड्रॉप और छोटी कूद, अगर हड्डियाँ अनुमति दें",
      why: "हड्डी वज़न के साथ-साथ झटके (इम्पैक्ट) पर भी प्रतिक्रिया देती है। वही सहमति-वक्तव्य हड्डियों की मज़बूती के लिए रेज़िस्टेंस और इम्पैक्ट व्यायाम की सलाह देता है।{7}",
      how: "हील ड्रॉप: पंजों पर उठिए, फिर एड़ियों को ठक से नीचे गिराइए। और तैयार? जगह पर छोटी, हल्की कूद। नरम लैंडिंग।",
      dose: "ज़्यादातर दिनों 10 से 20 हील ड्रॉप से शुरू करें। कूद तभी, जब ड्रॉप आसान और दर्द-रहित हों।",
    },
  ],
  enoughHeading: "कितना काफ़ी है?",
  enough: [
    "वयस्कों का लक्ष्य: हफ़्ते में 150 से 300 मिनट मध्यम गतिविधि, और 2 या ज़्यादा दिन सभी मुख्य मांसपेशी समूहों के लिए स्ट्रेंथ ट्रेनिंग।{1}{2} शुरुआती लोगों के लिए ACSM हफ़्ते में 2 से 3 स्ट्रेंथ दिन सुझाता है।{4}",
    "फिर आगे बढ़िए। ACSM का नियम: जब आप लक्ष्य से 1 या 2 रेप ज़्यादा कर सकें, वज़न 2 से 10% बढ़ाइए।{4}",
    "भारी वज़न देखरेख में सुरक्षित हो सकता है। LIFTMOR ट्रायल में कम बोन मास वाली 101 रजोनिवृत्त (पोस्टमेनोपॉज़ल) महिलाओं ने 8 महीने हफ़्ते में दो बार ट्रेनिंग की। 30 मिनट के निगरानी वाले सेशन में भारी लिफ़्ट और इम्पैक्ट (5 के 5 सेट, अधिकतम के 85% से ऊपर) करने वाले समूह की रीढ़ की बोन डेंसिटी 2.9% बढ़ी। कम तीव्रता वाले घरेलू समूह में 1.2% घटी। केवल एक मामूली प्रतिकूल घटना दर्ज हुई।{6} वे सेशन कड़ी निगरानी में थे और महिलाओं की पहले जाँच हुई थी। यह घर का प्लान नहीं है।",
    "लंबी सेहत के लिए भी स्ट्रेंथ मायने रखती है। कोहोर्ट अध्ययनों के एक मेटा-विश्लेषण ने मांसपेशी मज़बूत करने वाली गतिविधि को किसी भी कारण से मृत्यु, और हृदय रोग, कैंसर व डायबिटीज़ के 10 से 17% कम जोखिम से जोड़ा। सबसे बड़ी गिरावट हफ़्ते में लगभग 30 से 60 मिनट पर थी।{8} यह अवलोकन-आधारित है। अच्छा कारण, गारंटी नहीं।",
  ],
  sampleHeading: "एक सैंपल हफ़्ता",
  sampleLabel: "सिर्फ़ सैंपल। प्रिस्क्रिप्शन नहीं। अपने शरीर, इतिहास और दिनचर्या के हिसाब से बदलें।",
  sample: [
    "दिन A, जैसे सोमवार: कुर्सी तक स्क्वैट, पुश-अप, वन-आर्म रो, बैक एक्सटेंशन। शुरू में 2 राउंड, फिर 3।",
    "दिन B, जैसे गुरुवार: हिप हिंज, स्प्लिट स्क्वैट या स्टेप-अप, वन-आर्म रो, बैक एक्सटेंशन। उतने ही राउंड।",
    "ज़्यादातर दिन: हील ड्रॉप और तेज़ चाल से सैर।",
    "हर सेट तब रोकें जब 2 या 3 अच्छे रेप बाकी हों। स्ट्रेंथ दिनों के बीच कम से कम एक दिन रखें।",
  ],
  coachedHeading: "लाइव कोचिंग चाहिए?",
  coached: [
    "Iron Hour स्ट्रेंथ सेशन है। 60 मिनट, 1:1। सेट-अप, वार्म-अप, मुख्य लिफ़्ट, एक्सेसरीज़, कूल-डाउन। हम हर रेप देखते हैं और आज का वज़न तय करते हैं।",
    "सालों बाद लौट रही हैं? Return: 45 मिनट, महीने में 12 सेशन, एक दिन छोड़कर। ज़्यादा ढाँचा चाहिए? Lean Reset: महीने में 20 सेशन, 1:1। साथ पसंद है? Open Floor छोटा ग्रुप है।",
    "Google Meet, Zoom या FaceTime पर लाइव कोचिंग। पुणे से। हिंदी या अंग्रेज़ी में। IST पर।",
    "अभी पक्का नहीं? 30 मिनट के कंसल्टेशन से शुरू करें। यह बातचीत है, ट्रेनिंग नहीं। बुकिंग एक समय रोकती है। फ़ीस सीधे तय होती है।",
  ],
  safetyHeading: "शुरू करने से पहले",
  safety:
    "सामान्य जानकारी, चिकित्सा सलाह नहीं। ACSM के स्क्रीनिंग मॉडल के अनुसार: अगर आप निष्क्रिय हैं, कोई लक्षण नहीं हैं और हृदय, मेटाबॉलिक या किडनी की कोई ज्ञात बीमारी नहीं है, तो आप बिना मेडिकल अनुमति के हल्का से मध्यम व्यायाम शुरू करके धीरे-धीरे बढ़ा सकती हैं। अगर इनमें से कोई बीमारी है, या सीने में दर्द, असामान्य साँस फूलना या चक्कर जैसे लक्षण हैं, तो पहले मेडिकल अनुमति लें।{9} ऑस्टियोपोरोसिस है या कभी फ़्रैक्चर हुआ है, तो विशेषज्ञ की सलाह लें। UK सहमति-वक्तव्य रीढ़ को ज़्यादा आगे मोड़ने वाली मुद्राओं से बचने की सलाह देता है, और कहता है कि जिन्हें रीढ़ की हड्डी (वर्टिब्रा) का फ़्रैक्चर या कई हल्की चोट वाले फ़्रैक्चर हुए हैं, उन्हें आमतौर पर इम्पैक्ट तेज़ सैर के स्तर तक रखना चाहिए।{7} गर्भवती हैं, हाल में बच्चा हुआ है, या पेल्विक फ़्लोर की तकलीफ़ है: पहले मेडिकल अनुमति। काफ़ी समय से व्यायाम नहीं किया? NHS पहले अपने डॉक्टर से बात करने की सलाह देता है।{2}",
};

const es: PostCopy = {
  metaTitle: "Mejores ejercicios de fuerza para mujeres de más de 40: 7 | Jalan PT",
  metaDescription:
    "Los 7 mejores ejercicios de fuerza para mujeres de más de 40, para músculo, hueso y equilibrio. Qué dicen la OMS, el NHS, el ACSM y la investigación ósea, más una semana de ejemplo.",
  h1: "Mejores ejercicios de fuerza para mujeres de más de 40: 7 para empezar",
  dek: "Los cuarenta no son una señal de alarma. Son un buen momento para empezar a levantar peso en serio.",
  updated: "Actualizado el 24 de octubre de 2026",
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
    whatsappText: "Hola Susmit, leí el artículo sobre fuerza para mujeres de más de 40 y quiero reservar una consulta",
    skip: "Saltar al contenido",
    crumb: "Ejercicios de fuerza para mujeres de más de 40",
  },
  intro: [
    "Trabajo. Familia. Padres. Tu propio entrenamiento baja al final de la lista. Pasa.",
    "Versión corta: levanta algo, al menos dos veces por semana. La OMS y el NHS piden a los adultos trabajar todos los grandes grupos musculares 2 o más días por semana.{1}{2}",
    "Por qué importa más ahora: una revisión muy citada sitúa la pérdida muscular de los adultos inactivos en un 3 a 8% por década.{5} El trabajo de fuerza es tu respuesta.",
    "Necesitas una silla, una pared, algo de suelo y una mochila o dos mancuernas.",
  ],
  listHeading: "Los 7 mejores ejercicios de fuerza para mujeres de más de 40",
  items: [
    {
      name: "Sentadilla a la silla",
      why: "Piernas y caderas hacen casi todo el trabajo del día a día. Escaleras, el suelo, el coche. El ACSM aconseja hacer primero los movimientos grandes y multiarticulares como este.{4}",
      how: "Pies al ancho de las caderas. Siéntate hacia atrás, toca la silla con suavidad, levántate. Las rodillas siguen la línea de los pies. Pecho alto. ¿Muy fácil? Sujeta una mancuerna o una mochila contra el pecho.",
      dose: "2 a 3 series de 8 a 12. El rango inicial del ACSM para principiantes es un peso que puedas levantar de 8 a 12 veces.{4}",
    },
    {
      name: "Bisagra de cadera con mancuernas o mochila",
      why: "La parte de atrás del cuerpo: glúteos, isquiotibiales, espalda. Todos en la lista de grandes grupos musculares del NHS.{2} Es también el patrón para levantar cosas del suelo.",
      how: "Rodillas suaves. Lleva la cadera atrás. El peso baja por delante de los muslos. Espalda larga y plana, no redonda. Sube apretando los glúteos.",
      dose: "2 a 3 series de 8 a 12. Lento al bajar.",
    },
    {
      name: "Flexiones: pared, luego mesa, luego suelo",
      why: "Pecho, hombros y brazos. El NHS empieza en la pared con 3 series de 5 a 10.{3} Cuanto más bajas las manos, más cuesta.",
      how: "Cuerpo en una línea recta. Codos en diagonal hacia atrás, no abiertos. Baja con control. Empuja la pared, la mesa o el suelo.",
      dose: "3 series de 5 a 10. Cuando 10 sea fácil, baja las manos.",
    },
    {
      name: "Remo a una mano",
      why: "Espalda alta y brazos. Equilibra todo el empuje, y todas las horas de escritorio o de móvil. Espalda, hombros y brazos también son grandes grupos musculares.{2}",
      how: "Una mano en una silla o banco. Espalda plana. Lleva la mancuerna o la mochila hacia la cadera. Pausa. Baja despacio.",
      dose: "2 a 3 series de 10 a 12 por lado.",
    },
    {
      name: "Sentadilla búlgara sin banco o subida al escalón",
      why: "Una pierna cada vez. El ACSM recomienda ejercicios a dos piernas y a una pierna.{4} El trabajo a una pierna también pide equilibrio, el mismo que usas en cada escalón.",
      how: "Zancada fija: un pie delante, otro detrás, baja la rodilla de atrás hacia el suelo. Subida: un escalón firme, el pie entero encima, sube empujando con el talón de delante. Apóyate en una pared si lo necesitas.",
      dose: "2 series de 8 a 10 por pierna.",
    },
    {
      name: "Extensión de espalda, boca abajo",
      why: "La declaración de consenso del Reino Unido sobre ejercicio y osteoporosis recomienda ejercicios de extensión de columna para mejorar la postura.{7} Entrena los músculos que te mantienen erguida.",
      how: "Boca abajo, frente sobre una toalla, brazos a los lados. Eleva el pecho unos centímetros. Hombros atrás y abajo. Baja despacio. Sin arquear de más.",
      dose: "2 series de 8 a 10. Mantén 2 segundos arriba.",
    },
    {
      name: "Caídas de talón y saltitos, si tus huesos lo permiten",
      why: "El hueso responde al impacto además de a la carga. La misma declaración de consenso recomienda ejercicio de fuerza y de impacto para maximizar la fortaleza ósea.{7}",
      how: "Caída de talón: sube de puntillas y deja caer los talones con un golpe firme. ¿Lista para más? Saltitos pequeños y silenciosos en el sitio. Aterriza suave.",
      dose: "Empieza con 10 a 20 caídas de talón casi todos los días. Saltitos solo cuando las caídas sean fáciles y sin dolor.",
    },
  ],
  enoughHeading: "¿Cuánto es suficiente?",
  enough: [
    "El objetivo para adultos: 150 a 300 minutos semanales de actividad moderada, más fuerza para todos los grandes grupos musculares 2 o más días.{1}{2} Para principiantes, el ACSM sugiere 2 a 3 días de fuerza por semana.{4}",
    "Después, progresa. La regla del ACSM: cuando puedas hacer 1 o 2 repeticiones más que tu objetivo, sube la carga entre un 2 y un 10%.{4}",
    "Levantar pesado puede ser seguro si está supervisado. En el ensayo LIFTMOR, 101 mujeres posmenopáusicas con baja masa ósea entrenaron dos veces por semana durante 8 meses. El grupo con sesiones supervisadas de 30 minutos de levantamientos pesados e impacto (5 series de 5, por encima del 85% de su máximo) ganó un 2,9% de densidad ósea en la columna. Un grupo en casa de baja intensidad perdió un 1,2%. Se registró un único efecto adverso leve.{6} Las sesiones estaban muy supervisadas y las mujeres fueron evaluadas antes. No es un plan para casa.",
    "La fuerza también cuenta para la salud a largo plazo. Un metaanálisis de estudios de cohortes asoció la actividad de fortalecimiento muscular con un riesgo entre un 10 y un 17% menor de muerte por cualquier causa, y de enfermedad cardíaca, cáncer y diabetes. La mayor reducción se vio con unos 30 a 60 minutos semanales.{8} Es observacional. Una buena razón, no una garantía.",
  ],
  sampleHeading: "Una semana de ejemplo",
  sampleLabel: "Solo un ejemplo. No es una prescripción. Ajústalo a tu cuerpo, tu historia y tu agenda.",
  sample: [
    "Día A, por ejemplo el lunes: sentadilla a la silla, flexiones, remo a una mano, extensión de espalda. 2 vueltas al principio, luego 3.",
    "Día B, por ejemplo el jueves: bisagra de cadera, zancada fija o subida al escalón, remo a una mano, extensión de espalda. Mismas vueltas.",
    "Casi todos los días: caídas de talón y un paseo a buen ritmo.",
    "Termina cada serie con 2 o 3 buenas repeticiones de reserva. Deja al menos un día entre los días de fuerza.",
  ],
  coachedHeading: "¿Lo quieres con entrenador en directo?",
  coached: [
    "Iron Hour es la sesión de fuerza. 60 minutos, 1:1. Preparación, calentamiento, levantamiento principal, accesorios, vuelta a la calma. Vemos cada repetición y ajustamos la carga de hoy.",
    "¿Vuelves tras años sin entrenar? Return: 45 minutos, 12 sesiones al mes en días alternos. ¿Quieres más estructura? Lean Reset: 20 sesiones al mes, 1:1. ¿Prefieres compañía? Open Floor es un grupo pequeño.",
    "Entrenamiento en directo por Google Meet, Zoom o FaceTime. Desde Pune. En hindi o inglés. En horario IST.",
    "¿Aún no lo tienes claro? Empieza con una consulta de 30 minutos. Es una conversación, no un entrenamiento. La reserva guarda una hora. La tarifa se acuerda directamente.",
  ],
  safetyHeading: "Antes de empezar",
  safety:
    "Información general, no consejo médico. Según el modelo de evaluación del ACSM: si eres inactiva, no tienes síntomas ni enfermedad cardíaca, metabólica o renal conocida, puedes empezar con ejercicio ligero a moderado sin autorización médica e ir subiendo poco a poco. Si tienes alguna de esas enfermedades, o síntomas como dolor en el pecho, falta de aire inusual o mareo, pide autorización médica primero.{9} Si tienes osteoporosis o has tenido una fractura, busca consejo especializado. El consenso del Reino Unido aconseja evitar posturas con mucha flexión de la columna hacia delante, y dice que quien tenga una fractura vertebral o varias fracturas por traumatismo leve debería, por lo general, limitar el impacto al de caminar a paso ligero.{7} Embarazada, parto reciente o síntomas de suelo pélvico: autorización primero. ¿Hace tiempo que no haces ejercicio? El NHS recomienda hablar antes con tu médico de cabecera.{2}",
};

const zh: PostCopy = {
  metaTitle: "40岁以上女性最佳力量训练：7个动作 | Jalan PT",
  metaDescription:
    "40岁以上女性的7个最佳力量训练动作，强健肌肉、骨骼与平衡。WHO、NHS、ACSM与骨骼研究怎么说，附一周训练示例。",
  h1: "40岁以上女性最佳力量训练：从这7个动作开始",
  dek: "40岁不是警告信号。这是开始认真举重的好时机。",
  updated: "更新于2026年10月24日",
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
    whatsappText: "你好Susmit，我读了关于40岁以上女性力量训练的文章，想预约一次咨询",
    skip: "跳到正文",
    crumb: "40岁以上女性最佳力量训练",
  },
  intro: [
    "工作。家庭。父母。你自己的训练被排到了最后。这很常见。",
    "简单说：举点东西，每周至少两次。WHO和NHS都建议成年人每周至少2天锻炼所有主要肌群。{1}{2}",
    "为什么现在更重要：一篇被广泛引用的综述指出，不运动的成年人每十年会流失3%到8%的肌肉量。{5}力量训练就是你的应对方式。",
    "你需要：一把椅子、一面墙、一块地面，再加一个背包或两只哑铃。",
  ],
  listHeading: "40岁以上女性的7个最佳力量训练动作",
  items: [
    {
      name: "坐椅深蹲",
      why: "日常生活的大部分工作靠腿和髋完成。上楼梯、蹲到地面、上下车。ACSM建议把这类大肌群、多关节动作放在训练前段。{4}",
      how: "双脚与髋同宽。向后坐向椅子，轻触即起。膝盖朝向脚尖。胸口挺起。太简单？在胸前抱一只哑铃或背包。",
      dose: "2到3组，每组8到12次。ACSM给初学者的起始范围是能举8到12次的重量。{4}",
    },
    {
      name: "哑铃或背包髋铰链",
      why: "身体后侧：臀部、腘绳肌、背部。都在NHS的主要肌群名单上。{2}这也是从地上提起东西的动作模式。",
      how: "膝盖微屈。臀部向后推。重量沿大腿前侧下滑。背部伸长、平直，不要弓背。夹紧臀部站起。",
      dose: "2到3组，每组8到12次。下放时放慢。",
    },
    {
      name: "俯卧撑：墙、再到桌子、再到地面",
      why: "胸、肩和手臂。NHS从扶墙开始，3组，每组5到10次。{3}手放得越低，越难。",
      how: "身体呈一条直线。肘部斜向后，不要向两侧张开。有控制地下放。把墙、桌子或地面推开。",
      dose: "3组，每组5到10次。10次变轻松后，把手放低。",
    },
    {
      name: "单臂划船",
      why: "上背和手臂。平衡所有推的动作，也平衡久坐办公桌或看手机的时间。背、肩和手臂同样是主要肌群。{2}",
      how: "一只手撑在椅子或长凳上。背部平直。把哑铃或背包拉向髋部。停顿。慢慢放下。",
      dose: "每侧2到3组，每组10到12次。",
    },
    {
      name: "分腿蹲或踏台阶",
      why: "一次一条腿。ACSM建议双腿和单腿练习都要做。{4}单腿训练还需要平衡，每上一级台阶都用得到。",
      how: "分腿蹲：一脚在前、一脚在后，后膝向地面下沉。踏台阶：选稳固的台阶，整只脚踩上去，用前脚脚跟发力上蹬。需要时扶墙。",
      dose: "每条腿2组，每组8到10次。",
    },
    {
      name: "俯卧背伸",
      why: "英国关于骨质疏松与运动的共识声明建议做脊柱伸展练习来改善体态。{7}它锻炼让你保持挺拔的肌肉。",
      how: "俯卧，额头垫毛巾，双臂放在身体两侧。把胸口抬离地面几厘米。肩膀向后向下。慢慢放下。不要大幅后仰。",
      dose: "2组，每组8到10次。顶端停2秒。",
    },
    {
      name: "脚跟下落和小跳，前提是骨骼允许",
      why: "骨骼对冲击和负重都会产生反应。同一份共识声明建议通过抗阻和冲击练习来最大化骨骼强度。{7}",
      how: "脚跟下落：踮起脚尖，再让脚跟有力地落地。准备好进阶？原地轻轻小跳。落地要轻。",
      dose: "大多数日子从10到20次脚跟下落开始。下落轻松且无痛后，再加小跳。",
    },
  ],
  enoughHeading: "多少才够？",
  enough: [
    "成年人的目标：每周150到300分钟中等强度活动，加上每周至少2天针对所有主要肌群的力量训练。{1}{2}对初学者，ACSM建议每周2到3天力量训练。{4}",
    "然后逐步加量。ACSM的规则：当你能比目标多做1到2次时，把重量增加2%到10%。{4}",
    "在指导下，大重量训练可以是安全的。在LIFTMOR试验中，101名骨量偏低的绝经后女性每周训练两次，持续8个月。接受30分钟有监督的大重量与冲击训练（5组×5次，超过最大重量的85%）的一组，腰椎骨密度提高了2.9%；低强度居家训练组则下降了1.2%。只报告了一例轻微不良事件。{6}这些训练有严格监督，参与者事先经过筛查。这不是居家方案。",
    "力量对长期健康也很重要。一项队列研究的荟萃分析发现，肌肉强化活动与全因死亡以及心脏病、癌症和糖尿病风险降低10%到17%相关。每周约30到60分钟时降幅最大。{8}这是观察性结果。是好理由，不是保证。",
  ],
  sampleHeading: "一周示例",
  sampleLabel: "仅为示例，不是处方。请根据你的身体、病史和日程调整。",
  sample: [
    "A日，例如周一：坐椅深蹲、俯卧撑、单臂划船、俯卧背伸。开始做2轮，之后3轮。",
    "B日，例如周四：髋铰链、分腿蹲或踏台阶、单臂划船、俯卧背伸。轮数相同。",
    "大多数日子：脚跟下落，加一段快走。",
    "每组结束时还留有2到3次标准动作的余力。力量训练日之间至少间隔一天。",
  ],
  coachedHeading: "想要真人实时指导？",
  coached: [
    "Iron Hour是力量课。60分钟，一对一。准备、热身、主项、辅助训练、放松。我们看着每一次动作，并确定今天的重量。",
    "停练多年后回归？Return：每次45分钟，每月12次，隔天进行。想要更多安排？Lean Reset：每月20次，一对一。喜欢有人陪练？Open Floor是小组课。",
    "通过Google Meet、Zoom或FaceTime实时指导。来自浦那。用印地语或英语。按印度标准时间（IST）。",
    "还不确定？先从30分钟咨询开始。这是一次对话，不是训练。预约只是保留时间。费用直接商定。",
  ],
  safetyHeading: "开始之前",
  safety:
    "一般信息，不是医疗建议。根据ACSM的筛查模型：如果你平时不运动、没有症状，也没有已知的心脏、代谢或肾脏疾病，可以不经医生许可从低到中等强度开始，并逐步增加。如果你有上述疾病之一，或有胸痛、异常气短或头晕等症状，请先获得医生许可。{9}如果你有骨质疏松或曾经骨折，请寻求专科建议。英国共识声明建议避免脊柱大幅前屈的姿势，并指出有椎体骨折或多次轻微外伤骨折的人，通常应把冲击控制在快走的水平。{7}怀孕、刚生完孩子或有盆底症状：先获得医生许可。很久没运动了？NHS建议先咨询你的家庭医生。{2}",
};

const ja: PostCopy = {
  metaTitle: "40代からの女性に最適な筋トレ7選 | Jalan PT",
  metaDescription:
    "40歳以上の女性におすすめの筋力トレーニング7種目。筋肉、骨、バランスのために。WHO、NHS、ACSM、骨の研究が示すことと、1週間のサンプル。",
  h1: "40歳以上の女性に最適な筋力トレーニング：まずはこの7種目",
  dek: "40歳は警告サインではありません。きちんとウエイトを始めるのにいいタイミングです。",
  updated: "2026年10月24日更新",
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
    whatsappText: "こんにちは、Susmitさん。40歳以上の女性の筋トレの記事を読みました。相談を予約したいです",
    skip: "本文へスキップ",
    crumb: "40歳以上の女性に最適な筋力トレーニング",
  },
  intro: [
    "仕事。家族。親のこと。自分のトレーニングはリストの一番下へ。よくあることです。",
    "結論から。何かを持ち上げましょう。週2回以上。WHOもNHSも、成人は週2日以上すべての主要な筋肉群を鍛えるよう勧めています。{1}{2}",
    "今それがより大切な理由：広く引用されているレビューでは、運動しない成人は10年ごとに筋肉量の3〜8%を失うとされています。{5}筋トレがその対抗策です。",
    "必要なのは、椅子、壁、床のスペース、そしてリュックかダンベル2つ。",
  ],
  listHeading: "40歳以上の女性に最適な筋力トレーニング7種目",
  items: [
    {
      name: "椅子スクワット",
      why: "日常の動きのほとんどは脚と股関節が担います。階段、床からの立ち上がり、車の乗り降り。ACSMは、こうした大きな多関節種目をセッションの最初に行うよう勧めています。{4}",
      how: "足は腰幅。椅子に向かって後ろに座り、軽く触れたら立ち上がる。膝はつま先の方向へ。胸を高く。簡単すぎたら、胸の前でダンベルかリュックを抱えます。",
      dose: "8〜12回を2〜3セット。ACSMの初心者向けの目安は、8〜12回持ち上げられる重さです。{4}",
    },
    {
      name: "ダンベルまたはリュックでのヒップヒンジ",
      why: "体の後ろ側：お尻、ハムストリング、背中。どれもNHSの主要な筋肉群のリストにあります。{2}床から物を持ち上げる動きの基本でもあります。",
      how: "膝は軽く曲げる。お尻を後ろへ引く。重りは太ももの前を滑り下りる。背中は長く平らに、丸めない。お尻を締めて立ち上がる。",
      dose: "8〜12回を2〜3セット。下ろすときはゆっくり。",
    },
    {
      name: "腕立て伏せ：壁、次に机、次に床",
      why: "胸、肩、腕。NHSは壁で5〜10回を3セットから始めます。{3}手の位置が低いほどきつくなります。",
      how: "体は一直線。肘は斜め後ろへ、横に開かない。コントロールして下ろす。壁、机、床を押し離す。",
      dose: "5〜10回を3セット。10回が楽になったら手の位置を下げます。",
    },
    {
      name: "ワンアームロー",
      why: "背中の上部と腕。押す動きや、デスクやスマホに向かう長い時間とのバランスを取ります。背中、肩、腕も主要な筋肉群です。{2}",
      how: "片手を椅子かベンチにつく。背中は平ら。ダンベルかリュックを腰に向かって引く。止める。ゆっくり下ろす。",
      dose: "左右それぞれ10〜12回を2〜3セット。",
    },
    {
      name: "スプリットスクワットまたはステップアップ",
      why: "片脚ずつ。ACSMは両脚と片脚、両方の種目を勧めています。{4}片脚の動きはバランスも必要で、階段を一段上るたびに使います。",
      how: "スプリットスクワット：片足を前、片足を後ろにして、後ろの膝を床へ近づける。ステップアップ：しっかりした段に足全体を乗せ、前足のかかとで押し上げる。必要なら壁に手を添えて。",
      dose: "片脚8〜10回を2セット。",
    },
    {
      name: "うつ伏せのバックエクステンション",
      why: "骨粗しょう症と運動に関する英国のコンセンサス声明は、姿勢改善のために背骨を反らす（伸展）運動を勧めています。{7}体をまっすぐ支える筋肉を鍛えます。",
      how: "うつ伏せで額をタオルに乗せ、腕は体の横。胸を数センチ持ち上げる。肩は後ろへ、下へ。ゆっくり下ろす。大きく反らさない。",
      dose: "8〜10回を2セット。上で2秒キープ。",
    },
    {
      name: "かかと落としと小さなジャンプ（骨の状態が許せば）",
      why: "骨は負荷だけでなく衝撃にも反応します。同じコンセンサス声明は、骨の強さを最大限にするために筋力運動と衝撃のある運動を勧めています。{7}",
      how: "かかと落とし：つま先立ちになり、かかとをトンと落とす。次の段階は、その場で小さく静かなジャンプ。着地はやわらかく。",
      dose: "ほぼ毎日、かかと落とし10〜20回から。ジャンプは、かかと落としが楽で痛みがなくなってから。",
    },
  ],
  enoughHeading: "どれくらいやれば十分？",
  enough: [
    "成人の目標：週150〜300分の中強度の活動と、週2日以上すべての主要な筋肉群の筋トレ。{1}{2}初心者には、ACSMは週2〜3日の筋トレを勧めています。{4}",
    "そして少しずつ上げていく。ACSMのルール：目標より1〜2回多くできるようになったら、重さを2〜10%増やします。{4}",
    "高重量も、指導のもとなら安全に行えます。LIFTMOR試験では、骨量が少ない閉経後の女性101人が週2回、8か月間トレーニングしました。30分の監督付きセッションで高重量と衝撃のトレーニング（5回×5セット、最大重量の85%超）を行ったグループは、腰椎の骨密度が2.9%上がりました。低強度の自宅運動グループは1.2%下がりました。報告された有害事象は軽いもの1件のみでした。{6}セッションは厳密に監督され、参加者は事前にスクリーニングを受けています。自宅向けのプランではありません。",
    "筋力は長期的な健康にも関わります。コホート研究のメタ分析では、筋力を高める活動が、あらゆる原因による死亡、そして心臓病、がん、糖尿病のリスクの10〜17%低下と関連していました。最も大きな低下は週およそ30〜60分のときでした。{8}観察研究です。良い理由ではあっても、保証ではありません。",
  ],
  sampleHeading: "1週間のサンプル",
  sampleLabel: "あくまでサンプルです。処方ではありません。ご自身の体、既往歴、予定に合わせて調整してください。",
  sample: [
    "A日（例：月曜）：椅子スクワット、腕立て伏せ、ワンアームロー、バックエクステンション。最初は2周、慣れたら3周。",
    "B日（例：木曜）：ヒップヒンジ、スプリットスクワットまたはステップアップ、ワンアームロー、バックエクステンション。周回数は同じ。",
    "ほぼ毎日：かかと落としと早歩き。",
    "各セットは、良いフォームであと2〜3回できる余裕を残して終える。筋トレの日の間は少なくとも1日あける。",
  ],
  coachedHeading: "ライブで指導を受けたい？",
  coached: [
    "Iron Hourは筋力のセッションです。60分、1対1。セットアップ、ウォームアップ、メインリフト、補助種目、クールダウン。すべてのレップを見て、その日の重さを決めます。",
    "何年かぶりの再開なら、Return：45分、月12回、1日おき。もっと枠組みがほしいなら、Lean Reset：月20回、1対1。仲間と一緒がいいなら、Open Floorは少人数グループです。",
    "Google Meet、Zoom、FaceTimeでのライブ指導。プネーから。ヒンディー語または英語で。インド標準時（IST）です。",
    "まだ迷っているなら、30分の相談から。会話であってトレーニングではありません。予約は時間を確保するものです。料金は直接ご相談のうえ決めます。",
  ],
  safetyHeading: "始める前に",
  safety:
    "一般的な情報であり、医学的な助言ではありません。ACSMのスクリーニングモデルでは、運動習慣がなく、症状がなく、心臓・代謝・腎臓の病気が知られていなければ、医師の許可なしに軽い〜中程度の運動を始め、少しずつ増やしてよいとされています。これらの病気がある場合や、胸の痛み、いつもと違う息切れ、めまいなどの症状がある場合は、先に医師の許可を得てください。{9}骨粗しょう症がある方や骨折したことがある方は、専門家に相談してください。英国のコンセンサス声明は、背骨を大きく前に曲げる姿勢を避けるよう勧めており、椎体骨折や軽い外傷による骨折を複数経験した人は、通常、衝撃を早歩き程度にとどめるべきとしています。{7}妊娠中、出産後まもない、または骨盤底の症状がある場合：まず医師の許可を。しばらく運動していない場合、NHSはまずかかりつけ医に相談するよう勧めています。{2}",
};

const gu: PostCopy = {
  metaTitle: "40 પછી મહિલાઓ માટે શ્રેષ્ઠ સ્ટ્રેન્થ એક્સરસાઇઝ: 7 મૂવ્સ | Jalan PT",
  metaDescription:
    "40 પછી મહિલાઓ માટે 7 શ્રેષ્ઠ સ્ટ્રેન્થ એક્સરસાઇઝ, સ્નાયુ, હાડકાં અને બેલેન્સ માટે. WHO, NHS, ACSM અને હાડકાં પરનું સંશોધન શું કહે છે, સાથે એક સેમ્પલ અઠવાડિયું.",
  h1: "40 પછી મહિલાઓ માટે શ્રેષ્ઠ સ્ટ્રેન્થ એક્સરસાઇઝ: શરૂઆત માટે 7 મૂવ્સ",
  dek: "40 કોઈ ચેતવણી નથી. યોગ્ય રીતે વજન ઉપાડવાનું શરૂ કરવાનો આ સારો સમય છે.",
  updated: "અપડેટ: 24 ઑક્ટોબર 2026",
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
    whatsappText: "નમસ્તે સુસ્મિત, મેં 40 પછી મહિલાઓની સ્ટ્રેન્થ ટ્રેનિંગ વિશેનો લેખ વાંચ્યો અને કન્સલ્ટેશન બુક કરવા માંગું છું",
    skip: "સામગ્રી પર જાઓ",
    crumb: "40 પછી મહિલાઓ માટે સ્ટ્રેન્થ એક્સરસાઇઝ",
  },
  intro: [
    "કામ. પરિવાર. માતા-પિતા. તમારી પોતાની ટ્રેનિંગ યાદીમાં છેલ્લે જતી રહે છે. એવું થાય છે.",
    "ટૂંકમાં: કંઈક ઉપાડો, અઠવાડિયામાં ઓછામાં ઓછું બે વાર. WHO અને NHS બંને કહે છે કે પુખ્ત વયના લોકો અઠવાડિયામાં 2 કે વધુ દિવસ બધા મુખ્ય સ્નાયુ જૂથો પર કામ કરે.{1}{2}",
    "હવે તે વધુ કેમ મહત્વનું છે: એક જાણીતી સમીક્ષા મુજબ નિષ્ક્રિય પુખ્તો દર દાયકે 3 થી 8% સ્નાયુ ગુમાવે છે.{5} સ્ટ્રેન્થ ટ્રેનિંગ તેનો જવાબ છે.",
    "તમને જોઈએ: એક ખુરશી, એક દીવાલ, થોડી ફર્શ, અને એક બેકપેક અથવા બે ડમ્બેલ.",
  ],
  listHeading: "40 પછી મહિલાઓ માટે 7 શ્રેષ્ઠ સ્ટ્રેન્થ એક્સરસાઇઝ",
  items: [
    {
      name: "ખુરશી સુધી સ્ક્વૉટ",
      why: "રોજિંદું મોટાભાગનું કામ પગ અને કૂલા કરે છે. સીડી, ફર્શ, ગાડી. ACSM સલાહ આપે છે કે આવા મોટા, અનેક સાંધાવાળા મૂવ્સ સેશનમાં પહેલા કરો.{4}",
      how: "પગ કૂલાની પહોળાઈએ. ખુરશી તરફ પાછળ બેસો, હળવો સ્પર્શ કરો, ઊભા થાઓ. ઘૂંટણ પંજાની દિશામાં. છાતી ઊંચી. સહેલું લાગે? છાતી પાસે ડમ્બેલ કે બેકપેક પકડો.",
      dose: "8 થી 12 ના 2 થી 3 સેટ. ACSM મુજબ શરૂઆત કરનારા માટે એવું વજન જે તમે 8 થી 12 વાર ઉપાડી શકો.{4}",
    },
    {
      name: "ડમ્બેલ કે બેકપેક સાથે હિપ હિન્જ",
      why: "શરીરનો પાછળનો ભાગ: ગ્લૂટ્સ, હેમસ્ટ્રિંગ, પીઠ. બધા NHS ની મુખ્ય સ્નાયુઓની યાદીમાં છે.{2} ફર્શ પરથી વસ્તુ ઉપાડવાની પેટર્ન પણ આ જ છે.",
      how: "ઘૂંટણ સહેજ વાળેલા. કૂલા પાછળ ધકેલો. વજન જાંઘની આગળથી નીચે સરકે. પીઠ લાંબી અને સીધી, ગોળ નહીં. ગ્લૂટ્સ કસીને ઊભા થાઓ.",
      dose: "8 થી 12 ના 2 થી 3 સેટ. નીચે જતાં ધીમે.",
    },
    {
      name: "પુશ-અપ: દીવાલ, પછી ડેસ્ક, પછી ફર્શ",
      why: "છાતી, ખભા અને હાથ. NHS દીવાલથી શરૂ કરે છે, 5 થી 10 ના 3 સેટ.{3} હાથ જેટલા નીચા, કામ એટલું અઘરું.",
      how: "શરીર એક સીધી રેખામાં. કોણી ત્રાંસી પાછળ, બાજુમાં નહીં. નિયંત્રણથી નીચે જાઓ. દીવાલ, ડેસ્ક કે ફર્શને દૂર ધકેલો.",
      dose: "5 થી 10 ના 3 સેટ. 10 સહેલા થાય ત્યારે હાથ નીચે લઈ જાઓ.",
    },
    {
      name: "વન-આર્મ રો",
      why: "ઉપરની પીઠ અને હાથ. તે બધા પુશિંગ મૂવ્સ અને ડેસ્ક કે ફોન પરના કલાકોનું સંતુલન કરે છે. પીઠ, ખભા અને હાથ પણ મુખ્ય સ્નાયુ જૂથો છે.{2}",
      how: "એક હાથ ખુરશી કે બેન્ચ પર. પીઠ સીધી. ડમ્બેલ કે બેકપેક કૂલા તરફ ખેંચો. રોકાઓ. ધીમે નીચે.",
      dose: "દરેક બાજુ 10 થી 12 ના 2 થી 3 સેટ.",
    },
    {
      name: "સ્પ્લિટ સ્ક્વૉટ અથવા સ્ટેપ-અપ",
      why: "એક સમયે એક પગ. ACSM બંને પગવાળી અને એક પગવાળી, બંને પ્રકારની કસરતો સૂચવે છે.{4} એક પગવાળું કામ બેલેન્સ પણ માંગે છે, જે દરેક પગથિયું ચડતાં વપરાય છે.",
      how: "સ્પ્લિટ સ્ક્વૉટ: એક પગ આગળ, એક પાછળ, પાછળનો ઘૂંટણ ફર્શ તરફ. સ્ટેપ-અપ: મજબૂત પગથિયું, આખો પગ તેના પર, આગળની એડીથી ઉપર ધકેલો. જરૂર હોય તો દીવાલ પકડો.",
      dose: "દરેક પગ 8 થી 10 ના 2 સેટ.",
    },
    {
      name: "પેટ પર સૂઈને બેક એક્સટેન્શન",
      why: "ઑસ્ટિયોપોરોસિસ અને કસરત પરનું UK નું સર્વસંમતિ નિવેદન પોશ્ચર સુધારવા માટે કરોડરજ્જુને પાછળ ખેંચતી કસરતની ભલામણ કરે છે.{7} તે એ સ્નાયુઓને મજબૂત કરે છે જે તમને સીધા રાખે છે.",
      how: "પેટ પર, કપાળ ટુવાલ પર, હાથ બાજુમાં. છાતી થોડા સેન્ટિમીટર ઉપાડો. ખભા પાછળ અને નીચે. ધીમે નીચે. વધુ વળાંક નહીં.",
      dose: "8 થી 10 ના 2 સેટ. ઉપર 2 સેકન્ડ રોકાઓ.",
    },
    {
      name: "હીલ ડ્રૉપ અને નાના કૂદકા, જો હાડકાં મંજૂરી આપે",
      why: "હાડકું વજન ઉપરાંત ઝટકા (ઇમ્પેક્ટ) પર પણ પ્રતિભાવ આપે છે. એ જ સર્વસંમતિ નિવેદન હાડકાંની મજબૂતી માટે રેઝિસ્ટન્સ અને ઇમ્પેક્ટ કસરતની ભલામણ કરે છે.{7}",
      how: "હીલ ડ્રૉપ: પંજા પર ઊંચા થાઓ, પછી એડીઓ ઠક દઈને નીચે પાડો. વધુ માટે તૈયાર? જગ્યા પર નાના, હળવા કૂદકા. નરમ લેન્ડિંગ.",
      dose: "મોટાભાગના દિવસોમાં 10 થી 20 હીલ ડ્રૉપથી શરૂ કરો. કૂદકા ત્યારે જ, જ્યારે ડ્રૉપ સહેલા અને દુખાવા વગરના હોય.",
    },
  ],
  enoughHeading: "કેટલું પૂરતું છે?",
  enough: [
    "પુખ્તો માટેનું લક્ષ્ય: અઠવાડિયે 150 થી 300 મિનિટ મધ્યમ પ્રવૃત્તિ, અને 2 કે વધુ દિવસ બધા મુખ્ય સ્નાયુ જૂથો માટે સ્ટ્રેન્થ ટ્રેનિંગ.{1}{2} શરૂઆત કરનારા માટે ACSM અઠવાડિયે 2 થી 3 સ્ટ્રેન્થ દિવસ સૂચવે છે.{4}",
    "પછી આગળ વધો. ACSM નો નિયમ: જ્યારે તમે લક્ષ્ય કરતાં 1 કે 2 રેપ વધુ કરી શકો, ત્યારે વજન 2 થી 10% વધારો.{4}",
    "ભારે વજન દેખરેખ હેઠળ સુરક્ષિત હોઈ શકે છે. LIFTMOR ટ્રાયલમાં ઓછા બોન માસવાળી 101 રજોનિવૃત્ત (પોસ્ટમેનોપૉઝલ) મહિલાઓએ 8 મહિના અઠવાડિયે બે વાર ટ્રેનિંગ કરી. 30 મિનિટના દેખરેખવાળા સેશનમાં ભારે લિફ્ટ અને ઇમ્પેક્ટ (5 ના 5 સેટ, મહત્તમના 85% થી વધુ) કરનાર જૂથની કરોડની બોન ડેન્સિટી 2.9% વધી. ઓછી તીવ્રતાવાળા ઘરેલુ જૂથમાં 1.2% ઘટી. ફક્ત એક નાની પ્રતિકૂળ ઘટના નોંધાઈ.{6} એ સેશન કડક દેખરેખ હેઠળ હતા અને મહિલાઓની પહેલાં તપાસ થઈ હતી. આ ઘરનો પ્લાન નથી.",
    "લાંબા ગાળાના આરોગ્ય માટે પણ સ્ટ્રેન્થ મહત્વની છે. કોહોર્ટ અભ્યાસોના એક મેટા-વિશ્લેષણે સ્નાયુ મજબૂત કરતી પ્રવૃત્તિને કોઈપણ કારણે મૃત્યુ, અને હૃદયરોગ, કેન્સર અને ડાયાબિટીસના 10 થી 17% ઓછા જોખમ સાથે જોડી. સૌથી મોટો ઘટાડો અઠવાડિયે લગભગ 30 થી 60 મિનિટે હતો.{8} આ નિરીક્ષણ-આધારિત છે. સારું કારણ, ગેરંટી નહીં.",
  ],
  sampleHeading: "એક સેમ્પલ અઠવાડિયું",
  sampleLabel: "ફક્ત સેમ્પલ. પ્રિસ્ક્રિપ્શન નથી. તમારા શરીર, ઇતિહાસ અને દિનચર્યા મુજબ બદલો.",
  sample: [
    "દિવસ A, જેમ કે સોમવાર: ખુરશી સુધી સ્ક્વૉટ, પુશ-અપ, વન-આર્મ રો, બેક એક્સટેન્શન. શરૂઆતમાં 2 રાઉન્ડ, પછી 3.",
    "દિવસ B, જેમ કે ગુરુવાર: હિપ હિન્જ, સ્પ્લિટ સ્ક્વૉટ અથવા સ્ટેપ-અપ, વન-આર્મ રો, બેક એક્સટેન્શન. એટલા જ રાઉન્ડ.",
    "મોટાભાગના દિવસો: હીલ ડ્રૉપ અને ઝડપી ચાલ.",
    "દરેક સેટ ત્યારે રોકો જ્યારે 2 કે 3 સારા રેપ બાકી હોય. સ્ટ્રેન્થ દિવસો વચ્ચે ઓછામાં ઓછો એક દિવસ રાખો.",
  ],
  coachedHeading: "લાઇવ કોચિંગ જોઈએ છે?",
  coached: [
    "Iron Hour સ્ટ્રેન્થ સેશન છે. 60 મિનિટ, 1:1. સેટ-અપ, વૉર્મ-અપ, મુખ્ય લિફ્ટ, એક્સેસરીઝ, કૂલ-ડાઉન. અમે દરેક રેપ જોઈએ છીએ અને આજનું વજન નક્કી કરીએ છીએ.",
    "વર્ષો પછી પાછા આવો છો? Return: 45 મિનિટ, મહિને 12 સેશન, એક દિવસ છોડીને. વધુ માળખું જોઈએ? Lean Reset: મહિને 20 સેશન, 1:1. સાથ ગમે છે? Open Floor નાનું ગ્રુપ છે.",
    "Google Meet, Zoom અથવા FaceTime પર લાઇવ કોચિંગ. પુણેથી. હિન્દી કે અંગ્રેજીમાં. IST પર.",
    "હજી નક્કી નથી? 30 મિનિટના કન્સલ્ટેશનથી શરૂ કરો. આ વાતચીત છે, ટ્રેનિંગ નહીં. બુકિંગ એક સમય રોકે છે. ફી સીધી નક્કી થાય છે.",
  ],
  safetyHeading: "શરૂ કરતાં પહેલાં",
  safety:
    "સામાન્ય માહિતી, તબીબી સલાહ નહીં. ACSM ના સ્ક્રીનિંગ મોડલ મુજબ: જો તમે નિષ્ક્રિય છો, કોઈ લક્ષણ નથી અને હૃદય, મેટાબોલિક કે કિડનીની કોઈ જાણીતી બીમારી નથી, તો તમે તબીબી મંજૂરી વગર હળવી થી મધ્યમ કસરત શરૂ કરીને ધીમે ધીમે વધારી શકો છો. જો આમાંની કોઈ બીમારી હોય, અથવા છાતીમાં દુખાવો, અસામાન્ય હાંફ કે ચક્કર જેવા લક્ષણો હોય, તો પહેલાં તબીબી મંજૂરી લો.{9} ઑસ્ટિયોપોરોસિસ હોય કે ક્યારેય ફ્રેક્ચર થયું હોય, તો નિષ્ણાતની સલાહ લો. UK નું સર્વસંમતિ નિવેદન કરોડરજ્જુને વધુ આગળ વાળતી મુદ્રાઓ ટાળવાની સલાહ આપે છે, અને કહે છે કે જેમને કરોડના મણકાનું ફ્રેક્ચર કે હળવી ઈજાથી થયેલા અનેક ફ્રેક્ચર હોય, તેમણે સામાન્ય રીતે ઇમ્પેક્ટ ઝડપી ચાલના સ્તર સુધી રાખવો જોઈએ.{7} ગર્ભવતી છો, તાજેતરમાં બાળક થયું છે, કે પેલ્વિક ફ્લોરની તકલીફ છે: પહેલાં તબીબી મંજૂરી. ઘણા સમયથી કસરત નથી કરી? NHS પહેલાં તમારા ડૉક્ટર સાથે વાત કરવાની સલાહ આપે છે.{2}",
};

export const womenOver40Post: BlogPost = {
  slug: W40_SLUG,
  published: W40_PUBLISHED,
  modified: W40_MODIFIED,
  about: "Strength training for women over 40",
  sources: W40_SOURCES,
  copy: { en, ar, hi, es, zh, ja, gu },
};
