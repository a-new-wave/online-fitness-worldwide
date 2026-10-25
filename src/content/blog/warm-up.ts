/**
 * Blog post: "Best warm-up exercises before strength training".
 * Citations in copy are written as {n} and point at WARMUP_SOURCES[n - 1].
 * Every number in the copy comes from a cited source (checked against the
 * abstract or page text on 25 Oct 2026). No client results, no quotes, no prices.
 * Translations were drafted for this batch and need a native-speaker review
 * before launch (see CHANGES-grokbot.md).
 */

import { type BlogPost, type PostCopy } from "./shared";

export const WARMUP_SLUG = "best-warm-up-exercises-before-strength-training";
export const WARMUP_PUBLISHED = "2026-10-25";
export const WARMUP_MODIFIED = "2026-10-25";

export const WARMUP_SOURCES = [
  {
    cite: "NHS. How to warm up before exercising.",
    url: "https://www.nhs.uk/live-well/exercise/how-to-warm-up-before-exercising/",
  },
  {
    cite: "American Heart Association. Warm up, cool down.",
    url: "https://www.heart.org/en/healthy-living/exercise-and-physical-activity/fitness-basics/warm-up-cool-down",
  },
  {
    cite: "Fradkin AJ, Zazryn TR, Smoliga JM. Effects of warming-up on physical performance: a systematic review with meta-analysis. J Strength Cond Res. 2010;24(1):140–148.",
    url: "https://doi.org/10.1519/JSC.0b013e3181c643a0",
  },
  {
    cite: "Behm DG, Chaouachi A. A review of the acute effects of static and dynamic stretching on performance. Eur J Appl Physiol. 2011;111(11):2633–2651.",
    url: "https://doi.org/10.1007/s00421-011-1879-2",
  },
  {
    cite: "McCrary JM, Ackermann BJ, Halaki M. A systematic review of the effects of upper body warm-up on performance and injury. Br J Sports Med. 2015;49(14):935–942.",
    url: "https://doi.org/10.1136/bjsports-2014-094228",
  },
  {
    cite: "Ribeiro AS, Romanzini M, Schoenfeld BJ, Souza MF, Avelar A, Cyrino ES. Effect of different warm-up procedures on the performance of resistance training exercises. Percept Mot Skills. 2014;119(1):133–145.",
    url: "https://doi.org/10.2466/25.29.PMS.119c17z7",
  },
  {
    cite: "Riebe D, Franklin BA, Thompson PD, et al. Updating ACSM's recommendations for exercise preparticipation health screening. Med Sci Sports Exerc. 2015;47(11):2473–2479.",
    url: "https://doi.org/10.1249/MSS.0000000000000664",
  },
] as const;

const en: PostCopy = {
  metaTitle: "Best Warm-Up Exercises Before Strength Training: 7 | Jalan PT",
  metaDescription:
    "The 7 best warm-up exercises before strength training. What the NHS, the AHA and warm-up research say, how long to warm up, and a sample 10-minute routine.",
  h1: "Best warm-up exercises before strength training: 7 to do first",
  dek: "Ten minutes. Warm body, rehearsed pattern, ready for the first heavy set.",
  updated: "Updated 25 October 2026",
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
    whatsappText: "Hi Susmit, I read the article on warming up before strength training and want to book a consultation",
    skip: "Skip to content",
    crumb: "Best warm-up exercises before strength training",
  },
  intro: [
    "You walk in cold. You load the bar. The first set feels heavy and wrong. Sound familiar?",
    "A warm-up fixes that. A review of 32 studies found warming up improved performance in 79% of the outcomes measured, with little evidence of harm.{3}",
    "The research points to one order: easy movement to get warm, then big dynamic stretches, then lighter sets of the lift itself.{4}",
    "That is the list below. No kit needed, except whatever you lift today.",
  ],
  listHeading: "The 7 best warm-up exercises before strength training",
  items: [
    {
      name: "March on the spot or brisk walk",
      why: "Step one is getting warm. The NHS warm-up starts with 3 minutes of marching on the spot, arms pumping.{1}",
      how: "March in place. Then forwards and backwards. Elbows bent, fists soft. Build the pace until you breathe a little harder.",
      dose: "2 to 3 minutes. Longer on a cold morning.",
    },
    {
      name: "Bodyweight squat",
      why: "Hips, knees and ankles move through their range before they carry load. That is why the NHS routine ends with knee bends.{1}",
      how: "Feet shoulder-width. Sit down between your heels, as deep as feels easy. Stand up tall. Put a chair behind you if you want a target.",
      dose: "10 slow reps.",
    },
    {
      name: "Leg swings, front to back and side to side",
      why: "A large-amplitude dynamic stretch. Dynamic stretching either has no effect on performance or improves it.{4}",
      how: "Hold a wall. Swing one leg forward and back, relaxed, a little higher each time. Then across the body and out to the side.",
      dose: "10 each direction, each leg.",
    },
    {
      name: "Lunge with a reach",
      why: "Hip flexors, glutes and upper back in one move. Before lifting, moving through range beats holding a long stretch.{4}",
      how: "Step into a long lunge. Back knee down if you need it. Reach the arm on the front-leg side up to the ceiling. Step back. Switch.",
      dose: "5 each side.",
    },
    {
      name: "Shoulder rolls and band pull-aparts",
      why: "Shoulders and upper back, ready for pressing and pulling. The NHS warm-up uses shoulder rolls, 2 sets of 10.{1}",
      how: "Roll the shoulders forwards 5 times, backwards 5. Then hold a band at chest height, arms straight, and pull it apart until it touches your chest. No band? Squeeze the shoulder blades with arms out wide.",
      dose: "2 rounds of 10 rolls, then 10 to 15 pull-aparts.",
    },
    {
      name: "Hip hinge drill with a broomstick",
      why: "A specific warm-up: the movement of the main lift, at low intensity. It rehearses the pattern, not just the temperature.{6}",
      how: "Stick along your spine, touching head, upper back and tailbone. Soft knees. Push the hips back until you feel the hamstrings. The stick stays in contact. Stand up.",
      dose: "8 to 10 slow reps.",
    },
    {
      name: "Ramp-up sets of your first lift",
      why: "A review of upper-body warm-ups found strong evidence that high-load dynamic warm-ups improve strength and power.{5} In plain words: lighter sets of the lift you are about to do.",
      how: "Start with the empty bar or a light dumbbell. Add load each set. Fewer reps as it gets heavier. Stop well short of tiring yourself.",
      dose: "3 to 4 sets, building towards your working weight.",
    },
  ],
  enoughHeading: "How long should a warm-up be?",
  enough: [
    "The NHS routine takes at least 6 minutes, longer if you feel you need it.{1} The AHA says 5 to 10 minutes, and the more intense the session, the longer the warm-up.{2}",
    "Stretching: keep static holds short. A review found static stretching under about 90 seconds in total was less likely to hurt performance. Longer holds are better saved for the cool-down or a separate session.{4}",
    "Honest note: a warm-up is not magic. In one small trial, 15 men did sets to failure at 80% of their maximum. They did the same number of reps with or without a warm-up.{6} The warm-up's job is to get you warm and practise the pattern, so the heavy sets go where you aim them.",
    "And on injury: the upper-body review found no trials that tested whether warming up prevents injury.{5} We warm up for better, cleaner sets. We do not promise it prevents every niggle.",
  ],
  sampleHeading: "A sample 10-minute warm-up",
  sampleLabel: "Sample only. Not a prescription. Adjust it to your body, your history and the lift of the day.",
  sample: [
    "Minutes 0 to 3: march on the spot, building the pace.",
    "Minutes 3 to 6: 10 bodyweight squats, 10 leg swings each way, 5 lunges with a reach each side.",
    "Minutes 6 to 7: shoulder rolls and 10 band pull-aparts. Or 8 hinge drills on a lower-body day.",
    "Minutes 7 to 10: ramp-up sets of the first lift. Empty bar or light, then two or three heavier sets with fewer reps.",
  ],
  coachedHeading: "Want it coached live?",
  coached: [
    "Iron Hour is built this way. 60 minutes, 1:1. Set-up at minute 0. Warm-up from minute 4. The primary lift starts at minute 14. Accessories at 28. Cool-down at 50.",
    "The warm-up is written for that day's lift. Pattern first, then ramp-up sets to the working load. Not a general loosen-up.",
    "Coming back after time off? Return is 45 minutes, 12 alternate-day sessions a month. Lean Reset is 20 sessions a month, 1:1. Open Floor is a small group.",
    "Coached live on Google Meet, Zoom or FaceTime. From Pune. In Hindi or English. On IST. Not sure yet? Start with a 30-minute consultation. It is a conversation, not training. Booking holds a time. The fee is agreed directly.",
  ],
  safetyHeading: "Before you start",
  safety:
    "General information, not medical advice. ACSM's screening model says: if you are inactive, have no symptoms and no known heart, metabolic or kidney disease, you can start light to moderate exercise without medical clearance and build up gradually. If you have one of those conditions, or symptoms such as chest pain, unusual breathlessness or dizziness, get medical clearance first.{7} Stop if you feel pain or become unwell, and get advice first if you are pregnant or have recently given birth.{1}",
};

const ar: PostCopy = {
  metaTitle: "أفضل تمارين الإحماء قبل تمارين القوة: 7 تمارين | Jalan PT",
  metaDescription:
    "أفضل 7 تمارين إحماء قبل تمارين القوة. ما تقوله NHS وجمعية القلب الأمريكية وأبحاث الإحماء، وكم يجب أن يستمر الإحماء، مع نموذج لإحماء مدته 10 دقائق.",
  h1: "أفضل تمارين الإحماء قبل تمارين القوة: 7 تمارين تبدأ بها",
  dek: "عشر دقائق. جسم دافئ، ونمط حركة تدرّبت عليه، وجاهزية لأول مجموعة ثقيلة.",
  updated: "تم التحديث في 25 أكتوبر 2026",
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
    whatsappText: "مرحباً سوسميت، قرأت مقال الإحماء قبل تمارين القوة وأريد حجز استشارة",
    skip: "انتقل إلى المحتوى",
    crumb: "أفضل تمارين الإحماء قبل تمارين القوة",
  },
  intro: [
    "تدخل والجسم بارد. تحمّل البار. أول مجموعة تبدو ثقيلة وغير صحيحة. مألوف؟",
    "الإحماء يحل ذلك. وجدت مراجعة شملت 32 دراسة أن الإحماء حسّن الأداء في 79% من النتائج التي قيست، مع أدلة قليلة على أي ضرر.{3}",
    "وتشير الأبحاث إلى ترتيب واحد: حركة سهلة لتدفئة الجسم، ثم إطالة ديناميكية واسعة المدى، ثم مجموعات أخف من التمرين نفسه.{4}",
    "هذه هي القائمة أدناه. لا تحتاج إلى أدوات، سوى ما سترفعه اليوم.",
  ],
  listHeading: "أفضل 7 تمارين إحماء قبل تمارين القوة",
  items: [
    {
      name: "المشي في المكان أو المشي السريع",
      why: "الخطوة الأولى هي التدفئة. يبدأ إحماء NHS بثلاث دقائق من المشي في المكان مع تحريك الذراعين.{1}",
      how: "امشِ في مكانك. ثم إلى الأمام والخلف. المرفقان مثنيان، والقبضتان مرتختان. زِد السرعة حتى يتسارع تنفسك قليلاً.",
      dose: "دقيقتان إلى 3 دقائق. أطول في الصباح البارد.",
    },
    {
      name: "القرفصاء بوزن الجسم",
      why: "تتحرك الوركان والركبتان والكاحلان في مداها قبل أن تحمل الوزن. لهذا ينتهي روتين NHS بثني الركبتين.{1}",
      how: "القدمان بعرض الكتفين. انزل بين كعبيك بالعمق المريح. قف مستقيماً. ضع كرسياً خلفك إن أردت هدفاً.",
      dose: "10 تكرارات ببطء.",
    },
    {
      name: "أرجحة الساق للأمام والخلف وللجانبين",
      why: "إطالة ديناميكية واسعة المدى. الإطالة الديناميكية إما لا تؤثر على الأداء أو تحسّنه.{4}",
      how: "استند إلى جدار. أرجح ساقاً واحدة للأمام والخلف باسترخاء، أعلى قليلاً في كل مرة. ثم عبر الجسم وإلى الجانب.",
      dose: "10 في كل اتجاه، لكل ساق.",
    },
    {
      name: "الطعنة مع مدّ الذراع",
      why: "عضلات ثني الورك والألوية وأعلى الظهر في حركة واحدة. قبل الرفع، الحركة عبر المدى أفضل من الثبات الطويل في الإطالة.{4}",
      how: "اخطُ خطوة طويلة إلى الأمام. أنزل الركبة الخلفية إن احتجت. مدّ الذراع في جهة الساق الأمامية نحو السقف. عُد للخلف. بدّل.",
      dose: "5 لكل جهة.",
    },
    {
      name: "تدوير الكتفين وفتح الشريط المطاطي",
      why: "الكتفان وأعلى الظهر جاهزان للدفع والسحب. يستخدم إحماء NHS تدوير الكتفين، مجموعتين من 10.{1}",
      how: "دوّر الكتفين للأمام 5 مرات وللخلف 5. ثم أمسك شريطاً مطاطياً بمستوى الصدر، والذراعان مستقيمتان، وافتحه حتى يلمس صدرك. لا يوجد شريط؟ اضغط لوحي الكتف والذراعان ممدودتان للجانبين.",
      dose: "جولتان من 10 تدويرات، ثم 10 إلى 15 فتحاً للشريط.",
    },
    {
      name: "تمرين ثني الورك بعصا المكنسة",
      why: "إحماء خاص: حركة التمرين الرئيسي نفسها بشدة منخفضة. إنه يدرّب النمط، لا الحرارة فقط.{6}",
      how: "العصا على طول ظهرك، تلمس الرأس وأعلى الظهر وأسفل العمود الفقري. الركبتان مرتختان. ادفع الوركين للخلف حتى تشعر بأوتار الركبة. تبقى العصا ملامسة. قف.",
      dose: "8 إلى 10 تكرارات ببطء.",
    },
    {
      name: "مجموعات تمهيدية متدرجة لأول تمرين",
      why: "وجدت مراجعة لإحماء الجزء العلوي من الجسم أدلة قوية على أن الإحماء الديناميكي بأحمال عالية يحسّن القوة والقدرة.{5} بعبارة بسيطة: مجموعات أخف من التمرين الذي ستؤديه.",
      how: "ابدأ بالبار الفارغ أو دمبل خفيف. زِد الوزن في كل مجموعة. تكرارات أقل كلما ثقل الوزن. توقف قبل التعب بكثير.",
      dose: "3 إلى 4 مجموعات، تتدرج نحو وزن العمل.",
    },
  ],
  enoughHeading: "كم يجب أن يستمر الإحماء؟",
  enough: [
    "يستغرق روتين NHS ست دقائق على الأقل، وأطول إن شعرت بالحاجة.{1} وتقول جمعية القلب الأمريكية 5 إلى 10 دقائق، وكلما زادت شدة الجلسة طال الإحماء.{2}",
    "الإطالة: اجعل الثبات الساكن قصيراً. وجدت مراجعة أن الإطالة الساكنة التي تقل عن نحو 90 ثانية إجمالاً كانت أقل احتمالاً لأن تضر بالأداء. والأفضل ترك الثبات الأطول للتهدئة أو لجلسة منفصلة.{4}",
    "ملاحظة صريحة: الإحماء ليس سحراً. في تجربة صغيرة، أدى 15 رجلاً مجموعات حتى الإجهاد عند 80% من أقصى وزن لديهم. كان عدد التكرارات نفسه مع الإحماء ودونه.{6} مهمة الإحماء هي تدفئتك والتدرّب على النمط، لتذهب المجموعات الثقيلة حيث تريد.",
    "وعن الإصابات: لم تجد مراجعة الجزء العلوي أي تجارب اختبرت ما إذا كان الإحماء يمنع الإصابات.{5} نُحمّي الجسم لمجموعات أفضل وأنظف. ولا نعد بأنه يمنع كل ألم بسيط.",
  ],
  sampleHeading: "نموذج لإحماء مدته 10 دقائق",
  sampleLabel: "نموذج فقط. ليس وصفة. عدّله بحسب جسمك وتاريخك وتمرين اليوم.",
  sample: [
    "الدقائق 0 إلى 3: المشي في المكان مع زيادة السرعة.",
    "الدقائق 3 إلى 6: ‏10 قرفصاءات بوزن الجسم، و10 أرجحات للساق في كل اتجاه، و5 طعنات مع مدّ الذراع لكل جهة.",
    "الدقائق 6 إلى 7: تدوير الكتفين و10 فتحات للشريط. أو 8 تكرارات لتمرين ثني الورك في يوم الجزء السفلي.",
    "الدقائق 7 إلى 10: مجموعات تمهيدية لأول تمرين. البار الفارغ أو وزن خفيف، ثم مجموعتان أو ثلاث أثقل بتكرارات أقل.",
  ],
  coachedHeading: "تريد تدريباً مباشراً؟",
  coached: [
    "Iron Hour مبنية بهذه الطريقة. 60 دقيقة، فردية. التجهيز في الدقيقة 0. الإحماء من الدقيقة 4. تبدأ الرفعة الرئيسية في الدقيقة 14. التمارين المساندة في 28. التهدئة في 50.",
    "الإحماء مكتوب لرفعة ذلك اليوم. النمط أولاً، ثم مجموعات متدرجة حتى وزن العمل. ليس مجرد تليين عام.",
    "تعود بعد انقطاع؟ Return: ‏45 دقيقة، 12 جلسة شهرياً يوماً بعد يوم. Lean Reset: ‏20 جلسة شهرياً، فردية. Open Floor مجموعة صغيرة.",
    "تدريب مباشر عبر Google Meet أو Zoom أو FaceTime. من بونه. بالهندية أو الإنجليزية. بتوقيت الهند (IST). لست متأكداً بعد؟ ابدأ باستشارة مدتها 30 دقيقة. إنها محادثة، وليست تدريباً. الحجز يثبّت موعداً. والرسوم يُتفق عليها مباشرة.",
  ],
  safetyHeading: "قبل أن تبدأ",
  safety:
    "معلومات عامة، وليست نصيحة طبية. وفق نموذج الفحص لدى ACSM: إذا كنت غير نشط، بلا أعراض، ولا تعاني من مرض معروف في القلب أو الأيض أو الكلى، يمكنك البدء بتمارين خفيفة إلى معتدلة دون إذن طبي والتدرّج. إن كانت لديك إحدى هذه الحالات، أو أعراض مثل ألم الصدر أو ضيق نفس غير معتاد أو دوار، فاحصل على إذن طبي أولاً.{7} توقف إذا شعرت بألم أو بتوعّك، واطلبي المشورة أولاً إن كنتِ حاملاً أو أنجبتِ حديثاً.{1}",
};

const hi: PostCopy = {
  metaTitle: "स्ट्रेंथ ट्रेनिंग से पहले सबसे अच्छी वार्म-अप एक्सरसाइज़: 7 | Jalan PT",
  metaDescription:
    "स्ट्रेंथ ट्रेनिंग से पहले 7 सबसे अच्छी वार्म-अप एक्सरसाइज़। NHS, AHA और वार्म-अप पर शोध क्या कहते हैं, वार्म-अप कितना लंबा हो, और 10 मिनट का एक सैंपल रूटीन।",
  h1: "स्ट्रेंथ ट्रेनिंग से पहले सबसे अच्छी वार्म-अप एक्सरसाइज़: पहले ये 7",
  dek: "दस मिनट। गर्म शरीर, अभ्यास किया हुआ पैटर्न, पहले भारी सेट के लिए तैयार।",
  updated: "अपडेट: 25 अक्टूबर 2026",
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
    whatsappText: "नमस्ते सुस्मित, मैंने स्ट्रेंथ ट्रेनिंग से पहले वार्म-अप वाला लेख पढ़ा और कंसल्टेशन बुक करना है",
    skip: "सामग्री पर जाएँ",
    crumb: "स्ट्रेंथ ट्रेनिंग से पहले वार्म-अप एक्सरसाइज़",
  },
  intro: [
    "आप ठंडे शरीर के साथ आते हैं। बार पर वज़न चढ़ाते हैं। पहला सेट भारी और गलत लगता है। जाना-पहचाना?",
    "वार्म-अप इसे ठीक करता है। 32 अध्ययनों की एक समीक्षा में वार्म-अप ने मापे गए 79% नतीजों में प्रदर्शन बेहतर किया, और नुकसान के बहुत कम सबूत मिले।{3}",
    "शोध एक क्रम बताता है: पहले हल्की हलचल से शरीर गर्म, फिर बड़ी डायनामिक स्ट्रेचिंग, फिर उसी लिफ़्ट के हल्के सेट।{4}",
    "नीचे यही लिस्ट है। कोई सामान नहीं चाहिए, बस वह जो आप आज उठाएँगे।",
  ],
  listHeading: "स्ट्रेंथ ट्रेनिंग से पहले 7 सबसे अच्छी वार्म-अप एक्सरसाइज़",
  items: [
    {
      name: "जगह पर मार्च या तेज़ चाल",
      why: "पहला कदम है शरीर गर्म करना। NHS का वार्म-अप 3 मिनट जगह पर मार्च से शुरू होता है, बाँहें चलाते हुए।{1}",
      how: "जगह पर मार्च कीजिए। फिर आगे और पीछे। कोहनियाँ मुड़ी, मुट्ठियाँ ढीली। रफ़्तार बढ़ाइए जब तक साँस थोड़ी तेज़ न हो।",
      dose: "2 से 3 मिनट। ठंडी सुबह में ज़्यादा।",
    },
    {
      name: "बॉडीवेट स्क्वैट",
      why: "वज़न उठाने से पहले कूल्हे, घुटने और टखने अपनी पूरी रेंज में चलें। इसीलिए NHS का रूटीन घुटने मोड़ने (नी बेंड) पर खत्म होता है।{1}",
      how: "पैर कंधों की चौड़ाई पर। एड़ियों के बीच नीचे बैठिए, जितना आराम से जा सकें। सीधे खड़े होइए। चाहें तो पीछे कुर्सी रखिए।",
      dose: "10 धीमे रेप।",
    },
    {
      name: "लेग स्विंग, आगे-पीछे और दाएँ-बाएँ",
      why: "बड़ी रेंज वाली डायनामिक स्ट्रेचिंग। डायनामिक स्ट्रेचिंग या तो प्रदर्शन पर कोई असर नहीं डालती या उसे बेहतर करती है।{4}",
      how: "दीवार पकड़िए। एक पैर को ढीला रखकर आगे-पीछे झुलाइए, हर बार थोड़ा ऊँचा। फिर शरीर के आर-पार और बगल में।",
      dose: "हर दिशा में 10, हर पैर।",
    },
    {
      name: "हाथ ऊपर उठाकर लंज",
      why: "हिप फ़्लेक्सर, ग्लूट्स और ऊपरी पीठ एक ही मूव में। लिफ़्ट से पहले लंबा स्ट्रेच पकड़ने से बेहतर है रेंज में हिलना।{4}",
      how: "लंबा कदम आगे लेकर लंज। ज़रूरत हो तो पीछे वाला घुटना ज़मीन पर। आगे वाले पैर की तरफ़ का हाथ छत की ओर। वापस आइए। बदलिए।",
      dose: "हर तरफ़ 5।",
    },
    {
      name: "शोल्डर रोल और बैंड पुल-अपार्ट",
      why: "कंधे और ऊपरी पीठ, पुश और पुल के लिए तैयार। NHS के वार्म-अप में शोल्डर रोल हैं, 10 के 2 सेट।{1}",
      how: "कंधे 5 बार आगे, 5 बार पीछे घुमाइए। फिर सीने की ऊँचाई पर बैंड पकड़िए, बाँहें सीधी, और उसे फैलाइए जब तक वह सीने को न छुए। बैंड नहीं? बाँहें फैलाकर शोल्डर ब्लेड पीछे दबाइए।",
      dose: "10 रोल के 2 राउंड, फिर 10 से 15 पुल-अपार्ट।",
    },
    {
      name: "झाड़ू की डंडी के साथ हिप हिंज ड्रिल",
      why: "स्पेसिफ़िक वार्म-अप: मुख्य लिफ़्ट वाली हरकत, कम तीव्रता पर। यह सिर्फ़ गर्मी नहीं, पैटर्न का अभ्यास कराता है।{6}",
      how: "डंडी रीढ़ के साथ, सिर, ऊपरी पीठ और टेलबोन को छूती हुई। घुटने हल्के मुड़े। कूल्हे पीछे धकेलिए जब तक हैमस्ट्रिंग में खिंचाव न लगे। डंडी छूती रहे। खड़े होइए।",
      dose: "8 से 10 धीमे रेप।",
    },
    {
      name: "पहली लिफ़्ट के रैंप-अप सेट",
      why: "ऊपरी शरीर के वार्म-अप की एक समीक्षा में मज़बूत सबूत मिले कि भारी वज़न वाले डायनामिक वार्म-अप ताक़त और पावर बढ़ाते हैं।{5} सीधी भाषा में: जो लिफ़्ट करने वाले हैं, उसी के हल्के सेट।",
      how: "खाली बार या हल्के डम्बल से शुरू कीजिए। हर सेट में वज़न बढ़ाइए। वज़न बढ़े तो रेप कम। थकने से काफ़ी पहले रुकिए।",
      dose: "3 से 4 सेट, अपने वर्किंग वज़न की ओर बढ़ते हुए।",
    },
  ],
  enoughHeading: "वार्म-अप कितना लंबा हो?",
  enough: [
    "NHS का रूटीन कम से कम 6 मिनट का है, ज़रूरत लगे तो ज़्यादा।{1} AHA कहता है 5 से 10 मिनट, और सेशन जितना तीव्र, वार्म-अप उतना लंबा।{2}",
    "स्ट्रेचिंग: स्टैटिक होल्ड छोटे रखिए। एक समीक्षा के अनुसार कुल लगभग 90 सेकंड से कम की स्टैटिक स्ट्रेचिंग से प्रदर्शन बिगड़ने की संभावना कम थी। लंबे होल्ड कूल-डाउन या अलग सेशन के लिए बेहतर हैं।{4}",
    "सच्ची बात: वार्म-अप कोई जादू नहीं है। एक छोटे ट्रायल में 15 पुरुषों ने अपने अधिकतम के 80% पर थकने तक सेट किए। वार्म-अप के साथ और बिना, रेप की संख्या बराबर रही।{6} वार्म-अप का काम है आपको गर्म करना और पैटर्न का अभ्यास कराना, ताकि भारी सेट वहीं जाएँ जहाँ आप चाहते हैं।",
    "और चोट पर: ऊपरी शरीर वाली समीक्षा को ऐसा कोई ट्रायल नहीं मिला जिसने जाँचा हो कि वार्म-अप चोट से बचाता है या नहीं।{5} हम बेहतर, साफ़ सेट के लिए वार्म-अप करते हैं। हर छोटे दर्द से बचाने का वादा नहीं करते।",
  ],
  sampleHeading: "10 मिनट का एक सैंपल वार्म-अप",
  sampleLabel: "सिर्फ़ सैंपल। प्रिस्क्रिप्शन नहीं। अपने शरीर, इतिहास और आज की लिफ़्ट के हिसाब से बदलें।",
  sample: [
    "मिनट 0 से 3: जगह पर मार्च, रफ़्तार बढ़ाते हुए।",
    "मिनट 3 से 6: 10 बॉडीवेट स्क्वैट, हर दिशा में 10 लेग स्विंग, हर तरफ़ 5 लंज हाथ ऊपर के साथ।",
    "मिनट 6 से 7: शोल्डर रोल और 10 बैंड पुल-अपार्ट। या लोअर-बॉडी के दिन 8 हिंज ड्रिल।",
    "मिनट 7 से 10: पहली लिफ़्ट के रैंप-अप सेट। खाली बार या हल्का वज़न, फिर कम रेप के साथ दो या तीन भारी सेट।",
  ],
  coachedHeading: "लाइव कोचिंग चाहिए?",
  coached: [
    "Iron Hour इसी तरह बना है। 60 मिनट, 1:1। मिनट 0 पर सेट-अप। मिनट 4 से वार्म-अप। मुख्य लिफ़्ट मिनट 14 पर। एक्सेसरीज़ 28 पर। कूल-डाउन 50 पर।",
    "वार्म-अप उस दिन की लिफ़्ट के लिए लिखा जाता है। पहले पैटर्न, फिर वर्किंग वज़न तक रैंप-अप सेट। सामान्य ढील नहीं।",
    "ब्रेक के बाद लौट रहे हैं? Return: 45 मिनट, महीने में 12 सेशन, एक दिन छोड़कर। Lean Reset: महीने में 20 सेशन, 1:1। Open Floor छोटा ग्रुप है।",
    "Google Meet, Zoom या FaceTime पर लाइव कोचिंग। पुणे से। हिंदी या अंग्रेज़ी में। IST पर। अभी पक्का नहीं? 30 मिनट के कंसल्टेशन से शुरू करें। यह बातचीत है, ट्रेनिंग नहीं। बुकिंग एक समय रोकती है। फ़ीस सीधे तय होती है।",
  ],
  safetyHeading: "शुरू करने से पहले",
  safety:
    "सामान्य जानकारी, चिकित्सा सलाह नहीं। ACSM के स्क्रीनिंग मॉडल के अनुसार: अगर आप निष्क्रिय हैं, कोई लक्षण नहीं हैं और हृदय, मेटाबॉलिक या किडनी की कोई ज्ञात बीमारी नहीं है, तो आप बिना मेडिकल अनुमति के हल्का से मध्यम व्यायाम शुरू करके धीरे-धीरे बढ़ा सकते हैं। अगर इनमें से कोई बीमारी है, या सीने में दर्द, असामान्य साँस फूलना या चक्कर जैसे लक्षण हैं, तो पहले मेडिकल अनुमति लें।{7} दर्द हो या तबीयत बिगड़े तो रुक जाइए, और गर्भावस्था में या हाल में बच्चा होने के बाद पहले सलाह लें।{1}",
};

const es: PostCopy = {
  metaTitle: "Mejores ejercicios de calentamiento antes de la fuerza: 7 | Jalan PT",
  metaDescription:
    "Los 7 mejores ejercicios de calentamiento antes del entrenamiento de fuerza. Qué dicen el NHS, la AHA y la investigación, cuánto debe durar y una rutina de ejemplo de 10 minutos.",
  h1: "Mejores ejercicios de calentamiento antes del entrenamiento de fuerza: 7 para empezar",
  dek: "Diez minutos. Cuerpo caliente, patrón ensayado, listo para la primera serie pesada.",
  updated: "Actualizado el 25 de octubre de 2026",
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
    whatsappText: "Hola Susmit, leí el artículo sobre el calentamiento antes de la fuerza y quiero reservar una consulta",
    skip: "Saltar al contenido",
    crumb: "Ejercicios de calentamiento antes de la fuerza",
  },
  intro: [
    "Llegas en frío. Cargas la barra. La primera serie se siente pesada y rara. ¿Te suena?",
    "El calentamiento lo arregla. Una revisión de 32 estudios encontró que calentar mejoró el rendimiento en el 79% de los resultados medidos, con poca evidencia de daño.{3}",
    "La investigación apunta a un orden: movimiento suave para entrar en calor, luego estiramientos dinámicos amplios y después series más ligeras del propio ejercicio.{4}",
    "Esa es la lista de abajo. No necesitas material, salvo lo que vayas a levantar hoy.",
  ],
  listHeading: "Los 7 mejores ejercicios de calentamiento antes del entrenamiento de fuerza",
  items: [
    {
      name: "Marcha en el sitio o caminata rápida",
      why: "El primer paso es entrar en calor. El calentamiento del NHS empieza con 3 minutos de marcha en el sitio, moviendo los brazos.{1}",
      how: "Marcha en el sitio. Luego hacia delante y hacia atrás. Codos doblados, puños sueltos. Sube el ritmo hasta respirar un poco más fuerte.",
      dose: "2 a 3 minutos. Más en una mañana fría.",
    },
    {
      name: "Sentadilla con el peso del cuerpo",
      why: "Caderas, rodillas y tobillos recorren su rango antes de cargar peso. Por eso la rutina del NHS termina con flexiones de rodilla.{1}",
      how: "Pies al ancho de los hombros. Baja entre los talones hasta donde te resulte cómodo. Sube bien erguido. Pon una silla detrás si quieres una referencia.",
      dose: "10 repeticiones lentas.",
    },
    {
      name: "Balanceos de pierna, delante-atrás y a los lados",
      why: "Un estiramiento dinámico de gran amplitud. El estiramiento dinámico o no afecta al rendimiento o lo mejora.{4}",
      how: "Apóyate en una pared. Balancea una pierna hacia delante y atrás, suelta, un poco más alto cada vez. Luego cruzando el cuerpo y hacia fuera.",
      dose: "10 en cada dirección, por pierna.",
    },
    {
      name: "Zancada con alcance",
      why: "Flexores de cadera, glúteos y espalda alta en un solo movimiento. Antes de levantar, moverse por el rango es mejor que mantener un estiramiento largo.{4}",
      how: "Da un paso largo a una zancada. Apoya la rodilla de atrás si lo necesitas. Lleva el brazo del lado de la pierna delantera hacia el techo. Vuelve. Cambia.",
      dose: "5 por lado.",
    },
    {
      name: "Círculos de hombros y aperturas con banda",
      why: "Hombros y espalda alta listos para empujar y tirar. El calentamiento del NHS usa círculos de hombros, 2 series de 10.{1}",
      how: "Gira los hombros 5 veces hacia delante y 5 hacia atrás. Luego sujeta una banda a la altura del pecho, brazos rectos, y ábrela hasta que toque el pecho. ¿Sin banda? Junta las escápulas con los brazos abiertos.",
      dose: "2 vueltas de 10 círculos y luego 10 a 15 aperturas.",
    },
    {
      name: "Bisagra de cadera con un palo de escoba",
      why: "Un calentamiento específico: el movimiento del ejercicio principal a baja intensidad. Ensaya el patrón, no solo la temperatura.{6}",
      how: "Palo a lo largo de la espalda, tocando cabeza, espalda alta y coxis. Rodillas suaves. Lleva la cadera atrás hasta notar los isquiotibiales. El palo no se separa. Sube.",
      dose: "8 a 10 repeticiones lentas.",
    },
    {
      name: "Series de aproximación del primer ejercicio",
      why: "Una revisión sobre el calentamiento del tren superior encontró evidencia sólida de que los calentamientos dinámicos con carga alta mejoran la fuerza y la potencia.{5} Dicho fácil: series más ligeras del ejercicio que vas a hacer.",
      how: "Empieza con la barra vacía o una mancuerna ligera. Sube el peso en cada serie. Menos repeticiones a medida que pesa más. Para mucho antes de cansarte.",
      dose: "3 a 4 series, subiendo hacia tu peso de trabajo.",
    },
  ],
  enoughHeading: "¿Cuánto debe durar el calentamiento?",
  enough: [
    "La rutina del NHS dura al menos 6 minutos, más si lo necesitas.{1} La AHA habla de 5 a 10 minutos, y cuanto más intensa la sesión, más largo el calentamiento.{2}",
    "Estiramientos: mantén cortos los estáticos. Una revisión encontró que el estiramiento estático de menos de unos 90 segundos en total tenía menos probabilidad de empeorar el rendimiento. Los más largos, mejor para la vuelta a la calma o una sesión aparte.{4}",
    "Nota honesta: el calentamiento no es magia. En un ensayo pequeño, 15 hombres hicieron series al fallo al 80% de su máximo. Hicieron las mismas repeticiones con y sin calentamiento.{6} Su función es calentarte y ensayar el patrón, para que las series pesadas vayan donde tú quieres.",
    "Y sobre lesiones: la revisión del tren superior no encontró ensayos que comprobaran si calentar previene lesiones.{5} Calentamos para hacer series mejores y más limpias. No prometemos que evite cada molestia.",
  ],
  sampleHeading: "Un calentamiento de ejemplo de 10 minutos",
  sampleLabel: "Solo un ejemplo. No es una prescripción. Ajústalo a tu cuerpo, tu historia y el ejercicio del día.",
  sample: [
    "Minutos 0 a 3: marcha en el sitio, subiendo el ritmo.",
    "Minutos 3 a 6: 10 sentadillas con el peso del cuerpo, 10 balanceos de pierna en cada dirección, 5 zancadas con alcance por lado.",
    "Minutos 6 a 7: círculos de hombros y 10 aperturas con banda. O 8 bisagras con palo en un día de tren inferior.",
    "Minutos 7 a 10: series de aproximación del primer ejercicio. Barra vacía o peso ligero, y luego dos o tres series más pesadas con menos repeticiones.",
  ],
  coachedHeading: "¿Lo quieres con entrenador en directo?",
  coached: [
    "Iron Hour está hecha así. 60 minutos, 1:1. Preparación en el minuto 0. Calentamiento desde el minuto 4. El levantamiento principal empieza en el 14. Accesorios en el 28. Vuelta a la calma en el 50.",
    "El calentamiento se escribe para el levantamiento de ese día. Primero el patrón, luego series de aproximación hasta el peso de trabajo. No un simple soltar el cuerpo.",
    "¿Vuelves tras un parón? Return: 45 minutos, 12 sesiones al mes en días alternos. Lean Reset: 20 sesiones al mes, 1:1. Open Floor es un grupo pequeño.",
    "Entrenamiento en directo por Google Meet, Zoom o FaceTime. Desde Pune. En hindi o inglés. En horario IST. ¿Aún no lo tienes claro? Empieza con una consulta de 30 minutos. Es una conversación, no un entrenamiento. La reserva guarda una hora. La tarifa se acuerda directamente.",
  ],
  safetyHeading: "Antes de empezar",
  safety:
    "Información general, no consejo médico. Según el modelo de evaluación del ACSM: si eres inactivo, no tienes síntomas ni enfermedad cardíaca, metabólica o renal conocida, puedes empezar con ejercicio ligero a moderado sin autorización médica e ir subiendo poco a poco. Si tienes alguna de esas enfermedades, o síntomas como dolor en el pecho, falta de aire inusual o mareo, pide autorización médica primero.{7} Para si sientes dolor o te encuentras mal, y consulta antes si estás embarazada o has dado a luz hace poco.{1}",
};

const zh: PostCopy = {
  metaTitle: "力量训练前最佳热身动作：7个 | Jalan PT",
  metaDescription:
    "力量训练前的7个最佳热身动作。NHS、美国心脏协会（AHA）和热身研究怎么说，热身该多长，附10分钟热身示例。",
  h1: "力量训练前最佳热身动作：先做这7个",
  dek: "十分钟。身体热起来，动作模式练过一遍，准备好第一组大重量。",
  updated: "更新于2026年10月25日",
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
    whatsappText: "你好Susmit，我读了关于力量训练前热身的文章，想预约一次咨询",
    skip: "跳到正文",
    crumb: "力量训练前最佳热身动作",
  },
  intro: [
    "身体还是冷的就进场。上杠铃。第一组又沉又别扭。熟悉吗？",
    "热身能解决这个问题。一篇纳入32项研究的综述发现，热身在79%的测量指标上提升了表现，几乎没有证据显示有害。{3}",
    "研究指向一个顺序：先用轻松的活动让身体热起来，再做大幅度的动态拉伸，然后做主项本身的轻重量组。{4}",
    "下面就是这份清单。不需要器材，只需要你今天要举的东西。",
  ],
  listHeading: "力量训练前的7个最佳热身动作",
  items: [
    {
      name: "原地踏步或快走",
      why: "第一步是让身体热起来。NHS的热身从3分钟原地踏步开始，手臂随之摆动。{1}",
      how: "原地踏步。然后向前、向后走。肘部弯曲，拳头放松。逐渐加快，直到呼吸稍微加重。",
      dose: "2到3分钟。寒冷的早晨再久一点。",
    },
    {
      name: "徒手深蹲",
      why: "在负重之前，让髋、膝、踝先走一遍活动范围。所以NHS的热身以屈膝下蹲收尾。{1}",
      how: "双脚与肩同宽。在两脚跟之间向下坐，舒服的深度即可。站直。想要参照的话，在身后放一把椅子。",
      dose: "慢速10次。",
    },
    {
      name: "前后、左右摆腿",
      why: "大幅度的动态拉伸。动态拉伸要么不影响表现，要么能提升表现。{4}",
      how: "扶墙。一条腿放松地前后摆动，每次稍高一点。然后横过身体、再向外侧摆。",
      dose: "每个方向10次，每条腿。",
    },
    {
      name: "弓步加上举伸展",
      why: "一个动作照顾到髋屈肌、臀部和上背。举重前，在活动范围内动起来，比长时间静态拉伸更好。{4}",
      how: "向前迈一大步成弓步。需要的话后膝着地。前腿同侧的手臂伸向天花板。收回。换边。",
      dose: "每侧5次。",
    },
    {
      name: "绕肩和弹力带拉开",
      why: "让肩和上背为推和拉做好准备。NHS的热身包括绕肩，2组，每组10次。{1}",
      how: "肩膀向前绕5次，向后绕5次。然后在胸前高度握住弹力带，手臂伸直，向两侧拉开直到碰到胸口。没有弹力带？双臂张开，夹紧肩胛骨。",
      dose: "绕肩2轮各10次，然后弹力带拉开10到15次。",
    },
    {
      name: "扫帚棍髋铰链练习",
      why: "专项热身：以低强度做主项的动作。它练的是动作模式，而不只是体温。{6}",
      how: "棍子贴着脊柱，接触后脑、上背和尾骨。膝盖微屈。臀部向后推，直到感到腘绳肌拉伸。棍子保持贴住。站起。",
      dose: "慢速8到10次。",
    },
    {
      name: "第一个主项的递增热身组",
      why: "一篇关于上肢热身的综述发现，有强有力的证据表明高负荷动态热身能提升力量和爆发力。{5}说白了：就是你接下来要做的动作的轻重量组。",
      how: "从空杆或轻哑铃开始。每组加重量。越重次数越少。远在疲劳之前停下。",
      dose: "3到4组，逐步加到你的训练重量。",
    },
  ],
  enoughHeading: "热身要多长？",
  enough: [
    "NHS的热身至少6分钟，觉得需要可以更久。{1}美国心脏协会建议5到10分钟，训练强度越高，热身越长。{2}",
    "拉伸：静态拉伸要短。一篇综述发现，总时长约90秒以内的静态拉伸较不容易影响表现。更长时间的拉伸最好留到放松环节或单独的训练。{4}",
    "说句实话：热身不是魔法。在一项小型试验中，15名男性以最大重量的80%做到力竭。有没有热身，完成的次数都一样。{6}热身的作用是让你热起来、练好动作模式，让大重量组按你想要的方式完成。",
    "关于受伤：那篇上肢综述没有找到任何检验热身能否预防受伤的试验。{5}我们热身是为了更好、更干净的训练组，不承诺它能避免每一处小伤痛。",
  ],
  sampleHeading: "10分钟热身示例",
  sampleLabel: "仅为示例，不是处方。请根据你的身体、病史和当天的主项调整。",
  sample: [
    "第0到3分钟：原地踏步，逐渐加快。",
    "第3到6分钟：徒手深蹲10次，每个方向摆腿10次，弓步上举每侧5次。",
    "第6到7分钟：绕肩和弹力带拉开10次。下肢日可改为髋铰链练习8次。",
    "第7到10分钟：第一个主项的递增热身组。先空杆或轻重量，再做两到三组更重、次数更少的组。",
  ],
  coachedHeading: "想要真人实时指导？",
  coached: [
    "Iron Hour就是这样安排的。60分钟，一对一。第0分钟准备。第4分钟开始热身。第14分钟开始主项。第28分钟辅助训练。第50分钟放松。",
    "热身是为当天的主项写的。先练动作模式，再递增到训练重量。不是泛泛地活动一下。",
    "停练后回归？Return：每次45分钟，每月12次，隔天进行。Lean Reset：每月20次，一对一。Open Floor是小组课。",
    "通过Google Meet、Zoom或FaceTime实时指导。来自浦那。用印地语或英语。按印度标准时间（IST）。还不确定？先从30分钟咨询开始。这是一次对话，不是训练。预约只是保留时间。费用直接商定。",
  ],
  safetyHeading: "开始之前",
  safety:
    "一般信息，不是医疗建议。根据ACSM的筛查模型：如果你平时不运动、没有症状，也没有已知的心脏、代谢或肾脏疾病，可以不经医生许可从低到中等强度开始，并逐步增加。如果你有上述疾病之一，或有胸痛、异常气短或头晕等症状，请先获得医生许可。{7}感到疼痛或不适时立即停止；怀孕或刚生完孩子，请先咨询专业人士。{1}",
};

const ja: PostCopy = {
  metaTitle: "筋トレ前に最適なウォームアップ7選 | Jalan PT",
  metaDescription:
    "筋力トレーニング前におすすめのウォームアップ7種目。NHS、米国心臓協会（AHA）、ウォームアップ研究が示すこと、必要な長さ、10分間のサンプル。",
  h1: "筋力トレーニング前に最適なウォームアップ：まずはこの7種目",
  dek: "10分間。体を温め、動きを確認し、最初の重いセットに備える。",
  updated: "2026年10月25日更新",
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
    whatsappText: "こんにちは、Susmitさん。筋トレ前のウォームアップの記事を読みました。相談を予約したいです",
    skip: "本文へスキップ",
    crumb: "筋力トレーニング前に最適なウォームアップ",
  },
  intro: [
    "体が冷えたまま来る。バーに重りをつける。最初のセットが重くて、しっくりこない。覚えがありますか？",
    "ウォームアップで変わります。32件の研究をまとめたレビューでは、ウォームアップによって測定項目の79%でパフォーマンスが向上し、害を示す証拠はほとんどありませんでした。{3}",
    "研究が示す順番は一つ。軽い動きで体を温め、次に大きく動く動的ストレッチ、そしてその種目自体の軽いセット。{4}",
    "それが下のリストです。道具は不要。今日持ち上げるもの以外は。",
  ],
  listHeading: "筋力トレーニング前に最適なウォームアップ7種目",
  items: [
    {
      name: "その場足踏み、または早歩き",
      why: "最初の一歩は体を温めること。NHSのウォームアップは、腕を振りながらのその場足踏み3分から始まります。{1}",
      how: "その場で足踏み。次に前後へ。肘は曲げ、拳はゆるく。少し息が上がるまでペースを上げます。",
      dose: "2〜3分。寒い朝はもう少し長く。",
    },
    {
      name: "自重スクワット",
      why: "負荷をかける前に、股関節、膝、足首を可動域いっぱいに動かします。NHSのルーティンが膝の曲げ伸ばしで終わるのはそのためです。{1}",
      how: "足は肩幅。かかとの間に腰を下ろすように、楽に行ける深さまで。まっすぐ立ち上がる。目安がほしければ後ろに椅子を。",
      dose: "ゆっくり10回。",
    },
    {
      name: "レッグスイング（前後・左右）",
      why: "大きな可動域の動的ストレッチ。動的ストレッチはパフォーマンスに影響しないか、向上させるとされています。{4}",
      how: "壁に手をつく。片脚を力を抜いて前後に振り、少しずつ高く。次に体の前を横切るように、そして外側へ。",
      dose: "各方向10回、左右それぞれ。",
    },
    {
      name: "腕を伸ばすランジ",
      why: "股関節の前側、お尻、背中の上部を一度に。持ち上げる前は、長く静止するストレッチより可動域の中で動くほうが向いています。{4}",
      how: "大きく一歩踏み出してランジ。必要なら後ろの膝を床に。前脚側の腕を天井へ伸ばす。戻る。反対側も。",
      dose: "左右5回ずつ。",
    },
    {
      name: "肩回しとバンドプルアパート",
      why: "押す・引く動きに向けて肩と背中の上部を準備します。NHSのウォームアップには肩回し10回×2セットがあります。{1}",
      how: "肩を前に5回、後ろに5回回す。次に胸の高さでバンドを持ち、腕を伸ばしたまま胸に触れるまで左右に引き開く。バンドがなければ、腕を横に広げて肩甲骨を寄せます。",
      dose: "肩回し10回を2周、その後プルアパート10〜15回。",
    },
    {
      name: "ほうきの柄でヒップヒンジ練習",
      why: "専門的ウォームアップ：メイン種目の動きを低い強度で行う。体温だけでなく、動きのパターンを確認します。{6}",
      how: "柄を背骨に沿わせ、後頭部、背中の上部、尾骨に当てる。膝は軽く曲げる。ハムストリングが伸びるまでお尻を後ろへ。柄は離さない。立ち上がる。",
      dose: "ゆっくり8〜10回。",
    },
    {
      name: "最初の種目のランプアップセット",
      why: "上半身のウォームアップに関するレビューでは、高負荷の動的ウォームアップが筋力とパワーを高めるという強い証拠が見つかりました。{5}つまり、これから行う種目の軽いセットです。",
      how: "空のバーか軽いダンベルから。セットごとに重さを足す。重くなるほど回数は少なく。疲れるずっと手前でやめます。",
      dose: "3〜4セット、使用重量に向けて上げていく。",
    },
  ],
  enoughHeading: "ウォームアップはどれくらい？",
  enough: [
    "NHSのルーティンは少なくとも6分。必要だと感じたらもっと長く。{1}AHAは5〜10分とし、強度の高いセッションほどウォームアップを長くするよう勧めています。{2}",
    "ストレッチ：静的ストレッチは短く。レビューによると、合計およそ90秒未満の静的ストレッチはパフォーマンスを下げにくいとされています。長いものはクールダウンや別のセッションに回しましょう。{4}",
    "正直に言うと、ウォームアップは魔法ではありません。小規模な試験で、男性15人が最大重量の80%で限界までセットを行いました。ウォームアップの有無で回数は変わりませんでした。{6}ウォームアップの役割は、体を温めて動きを確認し、重いセットを狙いどおりに行うことです。",
    "ケガについて：上半身のレビューでは、ウォームアップがケガを防ぐかを調べた試験は見つかりませんでした。{5}私たちはより良く、きれいなセットのためにウォームアップをします。あらゆる痛みを防ぐとは約束しません。",
  ],
  sampleHeading: "10分間ウォームアップのサンプル",
  sampleLabel: "あくまでサンプルです。処方ではありません。ご自身の体、既往歴、その日の種目に合わせて調整してください。",
  sample: [
    "0〜3分：その場足踏み、少しずつペースアップ。",
    "3〜6分：自重スクワット10回、レッグスイング各方向10回、腕を伸ばすランジ左右5回ずつ。",
    "6〜7分：肩回しとバンドプルアパート10回。下半身の日はヒンジ練習8回に。",
    "7〜10分：最初の種目のランプアップセット。空のバーか軽い重さから、回数を減らしながら重いセットを2〜3つ。",
  ],
  coachedHeading: "ライブで指導を受けたい？",
  coached: [
    "Iron Hourはこの流れでできています。60分、1対1。0分にセットアップ。4分からウォームアップ。14分にメインリフト。28分に補助種目。50分にクールダウン。",
    "ウォームアップはその日のリフトのために組みます。まず動きのパターン、次に使用重量までのランプアップセット。全身をなんとなくほぐすだけではありません。",
    "ブランクからの再開なら、Return：45分、月12回、1日おき。Lean Reset：月20回、1対1。Open Floorは少人数グループです。",
    "Google Meet、Zoom、FaceTimeでのライブ指導。プネーから。ヒンディー語または英語で。インド標準時（IST）です。まだ迷っているなら、30分の相談から。会話であってトレーニングではありません。予約は時間を確保するものです。料金は直接ご相談のうえ決めます。",
  ],
  safetyHeading: "始める前に",
  safety:
    "一般的な情報であり、医学的な助言ではありません。ACSMのスクリーニングモデルでは、運動習慣がなく、症状がなく、心臓・代謝・腎臓の病気が知られていなければ、医師の許可なしに軽い〜中程度の運動を始め、少しずつ増やしてよいとされています。これらの病気がある場合や、胸の痛み、いつもと違う息切れ、めまいなどの症状がある場合は、先に医師の許可を得てください。{7}痛みや体調不良を感じたらすぐにやめ、妊娠中や出産後まもない場合は先に専門家に相談してください。{1}",
};

const gu: PostCopy = {
  metaTitle: "સ્ટ્રેન્થ ટ્રેનિંગ પહેલાં શ્રેષ્ઠ વૉર્મ-અપ એક્સરસાઇઝ: 7 | Jalan PT",
  metaDescription:
    "સ્ટ્રેન્થ ટ્રેનિંગ પહેલાં 7 શ્રેષ્ઠ વૉર્મ-અપ એક્સરસાઇઝ. NHS, AHA અને વૉર્મ-અપ પરનું સંશોધન શું કહે છે, વૉર્મ-અપ કેટલું લાંબું હોય, અને 10 મિનિટનું એક સેમ્પલ રૂટિન.",
  h1: "સ્ટ્રેન્થ ટ્રેનિંગ પહેલાં શ્રેષ્ઠ વૉર્મ-અપ એક્સરસાઇઝ: પહેલાં આ 7",
  dek: "દસ મિનિટ. ગરમ શરીર, અભ્યાસ કરેલી પેટર્ન, પહેલા ભારે સેટ માટે તૈયાર.",
  updated: "અપડેટ: 25 ઑક્ટોબર 2026",
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
    whatsappText: "નમસ્તે સુસ્મિત, મેં સ્ટ્રેન્થ ટ્રેનિંગ પહેલાંના વૉર્મ-અપ વિશેનો લેખ વાંચ્યો અને કન્સલ્ટેશન બુક કરવા માંગું છું",
    skip: "સામગ્રી પર જાઓ",
    crumb: "સ્ટ્રેન્થ ટ્રેનિંગ પહેલાં વૉર્મ-અપ એક્સરસાઇઝ",
  },
  intro: [
    "તમે ઠંડા શરીરે આવો છો. બાર પર વજન ચડાવો છો. પહેલો સેટ ભારે અને ખોટો લાગે છે. જાણીતું લાગે છે?",
    "વૉર્મ-અપ આ સુધારે છે. 32 અભ્યાસોની એક સમીક્ષામાં વૉર્મ-અપે માપેલા 79% પરિણામોમાં પ્રદર્શન સુધાર્યું, અને નુકસાનના બહુ ઓછા પુરાવા મળ્યા.{3}",
    "સંશોધન એક ક્રમ બતાવે છે: પહેલાં હળવી હલનચલનથી શરીર ગરમ, પછી મોટી ડાયનેમિક સ્ટ્રેચિંગ, પછી એ જ લિફ્ટના હળવા સેટ.{4}",
    "નીચે એ જ યાદી છે. કોઈ સાધન નથી જોઈતું, બસ જે તમે આજે ઉપાડશો.",
  ],
  listHeading: "સ્ટ્રેન્થ ટ્રેનિંગ પહેલાં 7 શ્રેષ્ઠ વૉર્મ-અપ એક્સરસાઇઝ",
  items: [
    {
      name: "જગ્યા પર માર્ચ અથવા ઝડપી ચાલ",
      why: "પહેલું પગલું છે શરીર ગરમ કરવું. NHS નું વૉર્મ-અપ હાથ હલાવતાં 3 મિનિટ જગ્યા પર માર્ચથી શરૂ થાય છે.{1}",
      how: "જગ્યા પર માર્ચ કરો. પછી આગળ અને પાછળ. કોણી વાળેલી, મુઠ્ઠી ઢીલી. શ્વાસ થોડો ઝડપી થાય ત્યાં સુધી ઝડપ વધારો.",
      dose: "2 થી 3 મિનિટ. ઠંડી સવારે વધુ.",
    },
    {
      name: "બૉડીવેટ સ્ક્વૉટ",
      why: "વજન ઉપાડતાં પહેલાં કૂલા, ઘૂંટણ અને ઘૂંટી તેમની પૂરી રેન્જમાં ચાલે. એટલે જ NHS નું રૂટિન ઘૂંટણ વાળવા (ની બેન્ડ) સાથે પૂરું થાય છે.{1}",
      how: "પગ ખભાની પહોળાઈએ. એડીઓ વચ્ચે નીચે બેસો, જેટલું આરામથી જઈ શકો. સીધા ઊભા થાઓ. જોઈએ તો પાછળ ખુરશી રાખો.",
      dose: "10 ધીમા રેપ.",
    },
    {
      name: "લેગ સ્વિંગ, આગળ-પાછળ અને બાજુમાં",
      why: "મોટી રેન્જવાળી ડાયનેમિક સ્ટ્રેચિંગ. ડાયનેમિક સ્ટ્રેચિંગ કાં તો પ્રદર્શન પર કોઈ અસર નથી કરતી અથવા તેને સુધારે છે.{4}",
      how: "દીવાલ પકડો. એક પગ ઢીલો રાખી આગળ-પાછળ ઝુલાવો, દર વખતે થોડો ઊંચો. પછી શરીરની આરપાર અને બહારની બાજુ.",
      dose: "દરેક દિશામાં 10, દરેક પગ.",
    },
    {
      name: "હાથ ઊંચો કરીને લંજ",
      why: "હિપ ફ્લેક્સર, ગ્લૂટ્સ અને ઉપરની પીઠ એક જ મૂવમાં. લિફ્ટ પહેલાં લાંબો સ્ટ્રેચ પકડી રાખવા કરતાં રેન્જમાં હલવું વધુ સારું છે.{4}",
      how: "લાંબું પગલું આગળ લઈ લંજ. જરૂર હોય તો પાછળનો ઘૂંટણ જમીન પર. આગળના પગ બાજુનો હાથ છત તરફ. પાછા આવો. બદલો.",
      dose: "દરેક બાજુ 5.",
    },
    {
      name: "શોલ્ડર રોલ અને બેન્ડ પુલ-અપાર્ટ",
      why: "ખભા અને ઉપરની પીઠ, પુશ અને પુલ માટે તૈયાર. NHS ના વૉર્મ-અપમાં શોલ્ડર રોલ છે, 10 ના 2 સેટ.{1}",
      how: "ખભા 5 વાર આગળ, 5 વાર પાછળ ફેરવો. પછી છાતીની ઊંચાઈએ બેન્ડ પકડો, હાથ સીધા, અને તે છાતીને અડે ત્યાં સુધી ફેલાવો. બેન્ડ નથી? હાથ ફેલાવીને શોલ્ડર બ્લેડ પાછળ દબાવો.",
      dose: "10 રોલના 2 રાઉન્ડ, પછી 10 થી 15 પુલ-અપાર્ટ.",
    },
    {
      name: "સાવરણીની લાકડી સાથે હિપ હિન્જ ડ્રિલ",
      why: "સ્પેસિફિક વૉર્મ-અપ: મુખ્ય લિફ્ટની હલનચલન, ઓછી તીવ્રતાએ. તે ફક્ત ગરમી નહીં, પેટર્નનો અભ્યાસ કરાવે છે.{6}",
      how: "લાકડી કરોડ સાથે, માથું, ઉપરની પીઠ અને ટેલબોનને અડેલી. ઘૂંટણ સહેજ વાળેલા. હેમસ્ટ્રિંગમાં ખેંચાણ લાગે ત્યાં સુધી કૂલા પાછળ ધકેલો. લાકડી અડેલી રહે. ઊભા થાઓ.",
      dose: "8 થી 10 ધીમા રેપ.",
    },
    {
      name: "પહેલી લિફ્ટના રેમ્પ-અપ સેટ",
      why: "ઉપરના શરીરના વૉર્મ-અપની એક સમીક્ષામાં મજબૂત પુરાવા મળ્યા કે ભારે વજનવાળા ડાયનેમિક વૉર્મ-અપ તાકાત અને પાવર વધારે છે.{5} સાદી ભાષામાં: જે લિફ્ટ કરવાના છો, તેના જ હળવા સેટ.",
      how: "ખાલી બાર કે હળવા ડમ્બેલથી શરૂ કરો. દરેક સેટમાં વજન વધારો. વજન વધે તેમ રેપ ઓછા. થાકતાં ઘણા પહેલાં રોકાઓ.",
      dose: "3 થી 4 સેટ, તમારા વર્કિંગ વજન તરફ વધતાં.",
    },
  ],
  enoughHeading: "વૉર્મ-અપ કેટલું લાંબું હોય?",
  enough: [
    "NHS નું રૂટિન ઓછામાં ઓછું 6 મિનિટનું છે, જરૂર લાગે તો વધુ.{1} AHA કહે છે 5 થી 10 મિનિટ, અને સેશન જેટલું તીવ્ર, વૉર્મ-અપ એટલું લાંબું.{2}",
    "સ્ટ્રેચિંગ: સ્ટેટિક હોલ્ડ ટૂંકા રાખો. એક સમીક્ષા મુજબ કુલ લગભગ 90 સેકન્ડથી ઓછી સ્ટેટિક સ્ટ્રેચિંગથી પ્રદર્શન બગડવાની શક્યતા ઓછી હતી. લાંબા હોલ્ડ કૂલ-ડાઉન કે અલગ સેશન માટે વધુ સારા છે.{4}",
    "સાચી વાત: વૉર્મ-અપ કોઈ જાદુ નથી. એક નાના ટ્રાયલમાં 15 પુરુષોએ તેમના મહત્તમના 80% પર થાકી જાય ત્યાં સુધી સેટ કર્યા. વૉર્મ-અપ સાથે અને વગર, રેપની સંખ્યા સરખી રહી.{6} વૉર્મ-અપનું કામ છે તમને ગરમ કરવું અને પેટર્નનો અભ્યાસ કરાવવો, જેથી ભારે સેટ ત્યાં જ જાય જ્યાં તમે ઇચ્છો.",
    "અને ઈજા વિશે: ઉપરના શરીરવાળી સમીક્ષાને એવો કોઈ ટ્રાયલ ન મળ્યો જેણે તપાસ્યું હોય કે વૉર્મ-અપ ઈજા અટકાવે છે કે નહીં.{5} અમે વધુ સારા, સ્વચ્છ સેટ માટે વૉર્મ-અપ કરીએ છીએ. દરેક નાના દુખાવાથી બચાવવાનું વચન નથી આપતા.",
  ],
  sampleHeading: "10 મિનિટનું એક સેમ્પલ વૉર્મ-અપ",
  sampleLabel: "ફક્ત સેમ્પલ. પ્રિસ્ક્રિપ્શન નથી. તમારા શરીર, ઇતિહાસ અને આજની લિફ્ટ મુજબ બદલો.",
  sample: [
    "મિનિટ 0 થી 3: જગ્યા પર માર્ચ, ઝડપ વધારતાં.",
    "મિનિટ 3 થી 6: 10 બૉડીવેટ સ્ક્વૉટ, દરેક દિશામાં 10 લેગ સ્વિંગ, દરેક બાજુ 5 લંજ હાથ ઊંચો કરીને.",
    "મિનિટ 6 થી 7: શોલ્ડર રોલ અને 10 બેન્ડ પુલ-અપાર્ટ. અથવા લોઅર-બૉડીના દિવસે 8 હિન્જ ડ્રિલ.",
    "મિનિટ 7 થી 10: પહેલી લિફ્ટના રેમ્પ-અપ સેટ. ખાલી બાર કે હળવું વજન, પછી ઓછા રેપ સાથે બે કે ત્રણ ભારે સેટ.",
  ],
  coachedHeading: "લાઇવ કોચિંગ જોઈએ છે?",
  coached: [
    "Iron Hour આ રીતે જ બનેલું છે. 60 મિનિટ, 1:1. મિનિટ 0 પર સેટ-અપ. મિનિટ 4 થી વૉર્મ-અપ. મુખ્ય લિફ્ટ મિનિટ 14 પર. એક્સેસરીઝ 28 પર. કૂલ-ડાઉન 50 પર.",
    "વૉર્મ-અપ એ દિવસની લિફ્ટ માટે લખાય છે. પહેલાં પેટર્ન, પછી વર્કિંગ વજન સુધી રેમ્પ-અપ સેટ. સામાન્ય ઢીલ નહીં.",
    "બ્રેક પછી પાછા આવો છો? Return: 45 મિનિટ, મહિને 12 સેશન, એક દિવસ છોડીને. Lean Reset: મહિને 20 સેશન, 1:1. Open Floor નાનું ગ્રુપ છે.",
    "Google Meet, Zoom અથવા FaceTime પર લાઇવ કોચિંગ. પુણેથી. હિન્દી કે અંગ્રેજીમાં. IST પર. હજી નક્કી નથી? 30 મિનિટના કન્સલ્ટેશનથી શરૂ કરો. આ વાતચીત છે, ટ્રેનિંગ નહીં. બુકિંગ એક સમય રોકે છે. ફી સીધી નક્કી થાય છે.",
  ],
  safetyHeading: "શરૂ કરતાં પહેલાં",
  safety:
    "સામાન્ય માહિતી, તબીબી સલાહ નહીં. ACSM ના સ્ક્રીનિંગ મોડલ મુજબ: જો તમે નિષ્ક્રિય છો, કોઈ લક્ષણ નથી અને હૃદય, મેટાબોલિક કે કિડનીની કોઈ જાણીતી બીમારી નથી, તો તમે તબીબી મંજૂરી વગર હળવી થી મધ્યમ કસરત શરૂ કરીને ધીમે ધીમે વધારી શકો છો. જો આમાંની કોઈ બીમારી હોય, અથવા છાતીમાં દુખાવો, અસામાન્ય હાંફ કે ચક્કર જેવા લક્ષણો હોય, તો પહેલાં તબીબી મંજૂરી લો.{7} દુખાવો થાય કે તબિયત બગડે તો રોકાઈ જાઓ, અને ગર્ભાવસ્થામાં કે તાજેતરમાં બાળક થયા પછી પહેલાં સલાહ લો.{1}",
};

export const warmUpPost: BlogPost = {
  slug: WARMUP_SLUG,
  published: WARMUP_PUBLISHED,
  modified: WARMUP_MODIFIED,
  about: "Warm-up exercises before strength training",
  sources: WARMUP_SOURCES,
  copy: { en, ar, hi, es, zh, ja, gu },
};
