/**
 * Blog post: "Best cool-down stretches after strength training".
 * Citations in copy are written as {n} and point at CD_SOURCES[n - 1].
 * Every number in the copy comes from a cited source (checked against the
 * abstract or page text on 27 Oct 2026). No client results, no quotes, no prices.
 * The copy says plainly what a cool-down does not do (soreness, injury).
 * Translations were drafted for this batch and need a native-speaker review
 * before launch (see CHANGES-grokbot.md).
 */

import { type BlogPost, type PostCopy } from "./shared";

export const CD_SLUG = "best-cool-down-stretches-after-strength-training";
export const CD_PUBLISHED = "2026-10-27";
export const CD_MODIFIED = "2026-10-27";

export const CD_SOURCES = [
  {
    cite: "Van Hooren B, Peake JM. Do we need a cool-down after exercise? A narrative review of the psychophysiological effects and the effects on performance, injuries and the long-term adaptive response. Sports Med. 2018;48(7):1575–1595.",
    url: "https://doi.org/10.1007/s40279-018-0916-2",
  },
  {
    cite: "Garber CE, Blissmer B, Deschenes MR, et al. Quantity and quality of exercise for developing and maintaining cardiorespiratory, musculoskeletal, and neuromotor fitness in apparently healthy adults (ACSM position stand). Med Sci Sports Exerc. 2011;43(7):1334–1359.",
    url: "https://doi.org/10.1249/MSS.0b013e318213fefb",
  },
  {
    cite: "Herbert RD, de Noronha M, Kamper SJ. Stretching to prevent or reduce muscle soreness after exercise. Cochrane Database Syst Rev. 2011;(7):CD004577.",
    url: "https://doi.org/10.1002/14651858.CD004577.pub3",
  },
  {
    cite: "Behm DG, Blazevich AJ, Kay AD, McHugh M. Acute effects of muscle stretching on physical performance, range of motion, and injury incidence in healthy active individuals: a systematic review. Appl Physiol Nutr Metab. 2016;41(1):1–11.",
    url: "https://doi.org/10.1139/apnm-2015-0235",
  },
  {
    cite: "Afonso J, Ramirez-Campillo R, Moscão J, et al. Strength training versus stretching for improving range of motion: a systematic review and meta-analysis. Healthcare (Basel). 2021;9(4):427.",
    url: "https://doi.org/10.3390/healthcare9040427",
  },
  {
    cite: "Riebe D, Franklin BA, Thompson PD, et al. Updating ACSM's recommendations for exercise preparticipation health screening. Med Sci Sports Exerc. 2015;47(11):2473–2479.",
    url: "https://doi.org/10.1249/MSS.0000000000000664",
  },
] as const;

const en: PostCopy = {
  metaTitle: "Best Cool-Down Stretches After Strength Training: 7 | Jalan PT",
  metaDescription:
    "The 7 best cool-down stretches after strength training. What the research says about soreness, how long to hold each stretch, and a sample 10-minute cool-down.",
  h1: "Best cool-down stretches after strength training: 7 to finish with",
  dek: "Ten minutes. Breathing down, range back, session closed.",
  updated: "Updated 27 October 2026",
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
    whatsappText: "Hi Susmit, I read the article on cool-down stretches after strength training and want to book a consultation",
    skip: "Skip to content",
    crumb: "Best cool-down stretches after strength training",
  },
  intro: [
    "Last set done. Don't reach for the phone yet. Ten minutes left.",
    "First, be clear on what a cool-down does. A review of the research found an active cool-down does not reliably cut muscle soreness or prevent injuries. It does bring heart rate and breathing back toward rest faster, and clears lactate from the blood sooner.{1}",
    "Stretching won't stop soreness either. A Cochrane review of 12 trials found stretching after exercise cut next-day soreness by about 1 point on a 100-point scale.{3} Not something you would feel.",
    "So why do it? Your muscles are warm, and ACSM says that is when flexibility work works best.{2} The range-of-motion work gets done while you are already on the mat. And the session ends calm.",
  ],
  listHeading: "The 7 best cool-down stretches after strength training",
  items: [
    {
      name: "Easy walk or slow cycling, 3 to 5 minutes",
      why: "Bring the system down first. Compared with stopping dead, an active cool-down speeds the recovery of heart rate and breathing.{1}",
      how: "Walk around the room, march gently on the spot, or spin an easy bike. Breathe through the nose if you can. You should be able to talk in full sentences.",
      dose: "3 to 5 minutes, easy. Talking pace.",
    },
    {
      name: "Lying hamstring stretch with a towel",
      why: "After squats, hinges and lunges, the back of the thighs has done a lot of work. Lying down keeps the lower back supported.",
      how: "Lie on your back. Loop a towel or band around one foot. Raise that leg toward the ceiling until you feel a pull behind the thigh. The other knee bent, foot flat. Hips stay down.",
      dose: "2 to 4 holds of 10 to 30 seconds each leg, about 60 seconds in total.{2}",
    },
    {
      name: "Standing quad stretch, one hand on a wall",
      why: "The front of the thighs, after squats and lunges. Holding a wall keeps it a stretch, not a balance test.",
      how: "Stand tall, one hand on a wall. Bend one knee and hold that ankle behind you. Knees side by side. Tuck the tailbone a little, so the pull is at the front of the thigh, not in the lower back. Can't reach? Rest the foot on a chair behind you.",
      dose: "2 to 4 holds of 10 to 30 seconds each leg.{2}",
    },
    {
      name: "Figure-four glute stretch, lying down",
      why: "Glutes and the outside of the hip, after hinges and step-ups.",
      how: "Lie on your back, knees bent. Cross one ankle over the other knee. Hold behind the lower thigh and draw it toward your chest until the crossed hip stretches. Head and shoulders stay down. Had a hip replacement? Ask your surgeon or physio before this one.",
      dose: "2 to 4 holds of 10 to 30 seconds each side.{2}",
    },
    {
      name: "Calf stretch against a wall",
      why: "The calves work on every squat, lunge and carry. Two knee positions reach both main calf muscles.",
      how: "Hands on a wall. One foot back, heel down, back knee straight. Lean in until you feel the calf. Then bend the back knee a little, heel still down, to move the stretch lower.",
      dose: "1 to 2 holds of 15 to 30 seconds in each position, each leg.{2}",
    },
    {
      name: "Doorway chest stretch",
      why: "Chest and the front of the shoulders, after push-ups and presses. A gentle stretch, not a crank on the joint.",
      how: "Stand in a doorway. Forearms on the frame, elbows a little below shoulder height. Step one foot through until you feel a stretch across the chest. Ribs down. Pain at the front of the shoulder? Lower the elbows or step back.",
      dose: "2 to 4 holds of 10 to 30 seconds.{2}",
    },
    {
      name: "Child's pose with slow breathing",
      why: "Lats and upper back, after rows. And a quiet minute before you get up and go back to your day.",
      how: "Kneel, big toes together, knees apart. Sit back toward your heels and walk your hands forward. Forehead on the floor or a cushion. Breathe slowly into your back. Knees complain? Put a pillow between heels and hips.",
      dose: "About 60 seconds. Slow breaths.",
    },
  ],
  enoughHeading: "How long to hold, and how often?",
  enough: [
    "Hold: 10 to 30 seconds for most adults. For older adults, 30 to 60 seconds may help more.{2}",
    "Total: about 60 seconds per stretch, split into 2 to 4 holds.{2}",
    "How hard: to tightness or slight discomfort. Never pain.{2}",
    "How often: 2 to 3 days a week works. Daily gives the biggest gains in range.{2} Stretching after each strength session gets you to 2 or 3.",
    "Long holds belong at the end. In a review, static stretching of 60 seconds or more per muscle right before testing cut performance by about 4.6%. Under 60 seconds, by about 1.1%.{4} That is why the long holds sit in the cool-down, not before your heavy sets.",
    "The lifts do mobility work too. A review of 11 trials found strength training improved range of motion about as much as stretching did. The studies varied a lot.{5}",
  ],
  sampleHeading: "A sample 10-minute cool-down",
  sampleLabel: "Sample only. Not a prescription. Adjust it to your body and to the session you just did.",
  sample: [
    "Minutes 0 to 3: easy walk or slow bike.",
    "Minutes 3 to 5: lying hamstring stretch, 2 holds of 30 seconds each leg.",
    "Minutes 5 to 6: figure-four glute stretch, 30 seconds each side.",
    "Minutes 6 to 7: standing quad stretch, 30 seconds each leg.",
    "Minutes 7 to 8: calf stretch, straight knee then bent knee, each leg.",
    "Minutes 8 to 9: doorway chest stretch, 2 holds of 30 seconds.",
    "Minutes 9 to 10: child's pose, slow breathing.",
  ],
  coachedHeading: "Want it coached live?",
  coached: [
    "In Iron Hour the cool-down starts at minute 50. 60 minutes, 1:1. Set-up at minute 0. Warm-up from minute 4. The primary lift starts at minute 14. Accessories at 28.",
    "The stretches are picked for what you just trained. Squat day: more hips and thighs. Press day: more chest and shoulders.",
    "Coming back after time off? Return is 45 minutes, 12 alternate-day sessions a month. Lean Reset is 20 sessions a month, 1:1. Open Floor is a small group.",
    "Coached live on Google Meet, Zoom or FaceTime. From Pune. In Hindi or English. On IST. Not sure yet? Start with a 30-minute consultation. It is a conversation, not training. Booking holds a time. The fee is agreed directly.",
  ],
  safetyHeading: "Before you start",
  safety:
    "General information, not medical advice. ACSM's screening model says: if you are inactive, have no symptoms and no known heart, metabolic or kidney disease, you can start light to moderate exercise without medical clearance and build up gradually. If you have one of those conditions, or symptoms such as chest pain, unusual breathlessness or dizziness, get medical clearance first.{6} Stretch to mild tension only. Stop if you feel sharp pain, numbness or tingling. After joint surgery or an injury, use the positions your surgeon or physio gives you. Get advice first if you are pregnant or have recently given birth.",
};

const ar: PostCopy = {
  metaTitle: "أفضل تمارين الإطالة للتهدئة بعد تمارين القوة: 7 تمارين | Jalan PT",
  metaDescription:
    "أفضل 7 تمارين إطالة للتهدئة بعد تمارين القوة. ماذا تقول الأبحاث عن ألم العضلات، وكم تثبت كل إطالة، مع نموذج لتهدئة مدتها 10 دقائق.",
  h1: "أفضل تمارين الإطالة للتهدئة بعد تمارين القوة: 7 تمارين تختم بها",
  dek: "عشر دقائق. تنفّس أهدأ، ومدى حركة يعود، وجلسة تُختم.",
  updated: "تم التحديث في 27 أكتوبر 2026",
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
    whatsappText: "مرحباً سوسميت، قرأت مقال تمارين الإطالة للتهدئة بعد تمارين القوة وأريد حجز استشارة",
    skip: "انتقل إلى المحتوى",
    crumb: "أفضل تمارين الإطالة للتهدئة بعد تمارين القوة",
  },
  intro: [
    "انتهت آخر مجموعة. لا تمسك الهاتف بعد. بقيت عشر دقائق.",
    "أولاً، كن واضحاً بشأن ما تفعله التهدئة. وجدت مراجعة للأبحاث أن التهدئة النشطة لا تقلّل ألم العضلات بشكل موثوق ولا تمنع الإصابات. لكنها تعيد نبض القلب والتنفس نحو الراحة أسرع، وتزيل اللاكتات من الدم أبكر.{1}",
    "والإطالة لن تمنع الألم أيضاً. وجدت مراجعة كوكرين لـ 12 تجربة أن الإطالة بعد التمرين خفّضت ألم اليوم التالي بنحو نقطة واحدة على مقياس من 100 نقطة.{3} لن تشعر بالفرق.",
    "فلماذا نفعلها؟ عضلاتك دافئة، وتقول ACSM إن هذا هو الوقت الذي تنجح فيه تمارين المرونة أكثر.{2} تُنجز عمل مدى الحركة وأنت على الحصيرة أصلاً. وتنتهي الجلسة بهدوء.",
  ],
  listHeading: "أفضل 7 تمارين إطالة للتهدئة بعد تمارين القوة",
  items: [
    {
      name: "مشي هادئ أو دراجة ببطء، 3 إلى 5 دقائق",
      why: "أنزِل الجسم أولاً. مقارنةً بالتوقف المفاجئ، تُسرّع التهدئة النشطة عودة نبض القلب والتنفس.{1}",
      how: "امشِ في الغرفة، أو سِر في مكانك بهدوء، أو دوّر دراجة بسهولة. تنفّس من الأنف إن استطعت. يجب أن تقدر على الكلام بجمل كاملة.",
      dose: "3 إلى 5 دقائق، بسهولة. بسرعة تسمح بالكلام.",
    },
    {
      name: "إطالة أوتار الركبة مستلقياً بمنشفة",
      why: "بعد القرفصاء وثني الورك والطعنات، عملت مؤخرة الفخذين كثيراً. الاستلقاء يُبقي أسفل الظهر مسنوداً.",
      how: "استلقِ على ظهرك. لُفّ منشفة أو شريطاً مطاطياً حول قدم واحدة. ارفع تلك الساق نحو السقف حتى تشعر بشدّ خلف الفخذ. الركبة الأخرى مثنية والقدم على الأرض. الوركان يبقيان على الأرض.",
      dose: "2 إلى 4 ثباتات من 10 إلى 30 ثانية لكل ساق، نحو 60 ثانية إجمالاً.{2}",
    },
    {
      name: "إطالة عضلة الفخذ الأمامية واقفاً، ويد على الحائط",
      why: "مقدمة الفخذين، بعد القرفصاء والطعنات. الإمساك بالحائط يجعلها إطالة، لا اختبار توازن.",
      how: "قف مستقيماً، ويد على الحائط. اثنِ ركبة واحدة وأمسك الكاحل خلفك. الركبتان متجاورتان. أدخل عظم العصعص قليلاً، ليكون الشدّ في مقدمة الفخذ لا في أسفل الظهر. لا تصل؟ ضع القدم على كرسي خلفك.",
      dose: "2 إلى 4 ثباتات من 10 إلى 30 ثانية لكل ساق.{2}",
    },
    {
      name: "إطالة الألوية على شكل رقم 4، مستلقياً",
      why: "الألوية وجانب الورك الخارجي، بعد ثني الورك والصعود على الدرج.",
      how: "استلقِ على ظهرك، والركبتان مثنيتان. ضع كاحلاً فوق الركبة الأخرى. أمسك خلف الفخذ السفلي واسحبه نحو صدرك حتى يشدّ الورك المتقاطع. الرأس والكتفان على الأرض. أجريت عملية استبدال ورك؟ اسأل جرّاحك أو أخصائي العلاج الطبيعي قبل هذا التمرين.",
      dose: "2 إلى 4 ثباتات من 10 إلى 30 ثانية لكل جانب.{2}",
    },
    {
      name: "إطالة السمانة على الحائط",
      why: "تعمل السمانة في كل قرفصاء وطعنة وحمل. وضعيتان للركبة تصلان إلى عضلتي السمانة الرئيسيتين.",
      how: "اليدان على الحائط. قدم واحدة للخلف، الكعب على الأرض، والركبة الخلفية مستقيمة. مِل إلى الأمام حتى تشعر بالسمانة. ثم اثنِ الركبة الخلفية قليلاً، والكعب ما زال على الأرض، لينتقل الشدّ إلى أسفل.",
      dose: "ثبات أو ثباتان من 15 إلى 30 ثانية في كل وضعية، لكل ساق.{2}",
    },
    {
      name: "إطالة الصدر عند إطار الباب",
      why: "الصدر ومقدمة الكتفين، بعد تمارين الضغط والدفع. إطالة لطيفة، لا ليّ للمفصل.",
      how: "قف عند باب. الساعدان على الإطار، والمرفقان أسفل مستوى الكتف قليلاً. تقدّم بقدم واحدة حتى تشعر بشدّ عبر الصدر. الأضلاع للأسفل. ألم في مقدمة الكتف؟ اخفض المرفقين أو ارجع خطوة.",
      dose: "2 إلى 4 ثباتات من 10 إلى 30 ثانية.{2}",
    },
    {
      name: "وضعية الطفل مع تنفّس بطيء",
      why: "العضلات الظهرية العريضة وأعلى الظهر، بعد تمارين السحب. ودقيقة هادئة قبل أن تنهض وتعود إلى يومك.",
      how: "اجثُ على ركبتيك، إبهاما القدمين متلامسان والركبتان متباعدتان. اجلس للخلف نحو كعبيك وامشِ بيديك للأمام. الجبهة على الأرض أو على وسادة. تنفّس ببطء نحو ظهرك. تتألم ركبتاك؟ ضع وسادة بين الكعبين والوركين.",
      dose: "نحو 60 ثانية. أنفاس بطيئة.",
    },
  ],
  enoughHeading: "كم تثبت، وكم مرة؟",
  enough: [
    "الثبات: 10 إلى 30 ثانية لمعظم البالغين. لكبار السن، قد يفيد 30 إلى 60 ثانية أكثر.{2}",
    "الإجمالي: نحو 60 ثانية لكل إطالة، مقسّمة على 2 إلى 4 ثباتات.{2}",
    "الشدّة: حتى الشعور بالشدّ أو بانزعاج خفيف. لا ألم أبداً.{2}",
    "التكرار: يومان إلى 3 أيام في الأسبوع تكفي. والممارسة اليومية تعطي أكبر تحسّن في المدى.{2} الإطالة بعد كل جلسة قوة توصلك إلى يومين أو ثلاثة.",
    "الثباتات الطويلة مكانها في النهاية. في مراجعة، خفّضت الإطالة الثابتة لمدة 60 ثانية أو أكثر لكل عضلة قبل الاختبار مباشرة الأداء بنحو 4.6%. وأقل من 60 ثانية خفّضته بنحو 1.1%.{4} لهذا توضع الثباتات الطويلة في التهدئة، لا قبل مجموعاتك الثقيلة.",
    "الرفعات نفسها تعمل على المرونة أيضاً. وجدت مراجعة لـ 11 تجربة أن تمارين القوة حسّنت مدى الحركة بقدر الإطالة تقريباً. واختلفت الدراسات كثيراً فيما بينها.{5}",
  ],
  sampleHeading: "نموذج لتهدئة مدتها 10 دقائق",
  sampleLabel: "نموذج فقط. ليس وصفة. عدّله بحسب جسمك والجلسة التي أنهيتها للتو.",
  sample: [
    "الدقائق 0 إلى 3: مشي هادئ أو دراجة ببطء.",
    "الدقائق 3 إلى 5: إطالة أوتار الركبة مستلقياً، ثباتان من 30 ثانية لكل ساق.",
    "الدقائق 5 إلى 6: إطالة الألوية على شكل رقم 4، ‏30 ثانية لكل جانب.",
    "الدقائق 6 إلى 7: إطالة الفخذ الأمامية واقفاً، ‏30 ثانية لكل ساق.",
    "الدقائق 7 إلى 8: إطالة السمانة، الركبة مستقيمة ثم مثنية، لكل ساق.",
    "الدقائق 8 إلى 9: إطالة الصدر عند الباب، ثباتان من 30 ثانية.",
    "الدقائق 9 إلى 10: وضعية الطفل، تنفّس بطيء.",
  ],
  coachedHeading: "تريد تدريباً مباشراً؟",
  coached: [
    "في Iron Hour تبدأ التهدئة في الدقيقة 50. ‏60 دقيقة، فردية. التجهيز في الدقيقة 0. الإحماء من الدقيقة 4. تبدأ الرفعة الرئيسية في الدقيقة 14. التمارين المساندة في 28.",
    "تُختار الإطالات بحسب ما تدرّبت عليه للتو. يوم القرفصاء: وركان وفخذان أكثر. يوم الدفع: صدر وكتفان أكثر.",
    "تعود بعد انقطاع؟ Return: ‏45 دقيقة، 12 جلسة شهرياً يوماً بعد يوم. Lean Reset: ‏20 جلسة شهرياً، فردية. Open Floor مجموعة صغيرة.",
    "تدريب مباشر عبر Google Meet أو Zoom أو FaceTime. من بونه. بالهندية أو الإنجليزية. بتوقيت الهند (IST). لست متأكداً بعد؟ ابدأ باستشارة مدتها 30 دقيقة. إنها محادثة، وليست تدريباً. الحجز يثبّت موعداً. والرسوم يُتفق عليها مباشرة.",
  ],
  safetyHeading: "قبل أن تبدأ",
  safety:
    "معلومات عامة، وليست نصيحة طبية. وفق نموذج الفحص لدى ACSM: إذا كنت غير نشط، بلا أعراض، ولا تعاني من مرض معروف في القلب أو الأيض أو الكلى، يمكنك البدء بتمارين خفيفة إلى معتدلة دون إذن طبي والتدرّج. إن كانت لديك إحدى هذه الحالات، أو أعراض مثل ألم الصدر أو ضيق نفس غير معتاد أو دوار، فاحصل على إذن طبي أولاً.{6} أطِل حتى شدّ خفيف فقط. توقف إذا شعرت بألم حاد أو خدر أو وخز. بعد جراحة في مفصل أو إصابة، استخدم الوضعيات التي يعطيك إياها جرّاحك أو أخصائي العلاج الطبيعي. واطلبي المشورة أولاً إن كنتِ حاملاً أو أنجبتِ حديثاً.",
};

const hi: PostCopy = {
  metaTitle: "स्ट्रेंथ ट्रेनिंग के बाद सबसे अच्छे कूल-डाउन स्ट्रेच: 7 | Jalan PT",
  metaDescription:
    "स्ट्रेंथ ट्रेनिंग के बाद 7 सबसे अच्छे कूल-डाउन स्ट्रेच। मांसपेशियों के दर्द पर रिसर्च क्या कहती है, हर स्ट्रेच कितनी देर रोकें, और 10 मिनट का सैंपल कूल-डाउन।",
  h1: "स्ट्रेंथ ट्रेनिंग के बाद सबसे अच्छे कूल-डाउन स्ट्रेच: सेशन ख़त्म करने के 7 मूव",
  dek: "दस मिनट। साँस धीमी, रेंज वापस, सेशन पूरा।",
  updated: "अपडेट: 27 अक्टूबर 2026",
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
    whatsappText: "नमस्ते सुस्मित, मैंने स्ट्रेंथ ट्रेनिंग के बाद कूल-डाउन स्ट्रेच वाला लेख पढ़ा और कंसल्टेशन बुक करना है",
    skip: "सामग्री पर जाएँ",
    crumb: "स्ट्रेंथ ट्रेनिंग के बाद कूल-डाउन स्ट्रेच",
  },
  intro: [
    "आख़िरी सेट हो गया। अभी फ़ोन मत उठाइए। दस मिनट बाकी हैं।",
    "पहले साफ़ समझ लें कि कूल-डाउन क्या करता है। रिसर्च की एक समीक्षा में पाया गया कि एक्टिव कूल-डाउन से मांसपेशियों का दर्द भरोसे से कम नहीं होता और चोट से बचाव नहीं होता। हाँ, इससे दिल की धड़कन और साँस जल्दी आराम की ओर लौटती है, और ख़ून से लैक्टेट जल्दी साफ़ होता है।{1}",
    "स्ट्रेचिंग भी दर्द नहीं रोकेगी। 12 ट्रायल की एक Cochrane समीक्षा में व्यायाम के बाद स्ट्रेचिंग से अगले दिन का दर्द 100 पॉइंट के पैमाने पर लगभग 1 पॉइंट कम हुआ।{3} इतना फ़र्क़ महसूस नहीं होता।",
    "तो फिर क्यों? मांसपेशियाँ गर्म हैं, और ACSM कहता है कि फ़्लेक्सिबिलिटी का काम तभी सबसे अच्छा असर करता है।{2} आप पहले से मैट पर हैं, रेंज ऑफ़ मोशन का काम वहीं हो जाता है। और सेशन शांति से ख़त्म होता है।",
  ],
  listHeading: "स्ट्रेंथ ट्रेनिंग के बाद 7 सबसे अच्छे कूल-डाउन स्ट्रेच",
  items: [
    {
      name: "आराम से चलना या धीमी साइकिलिंग, 3 से 5 मिनट",
      why: "पहले शरीर को नीचे लाइए। अचानक रुकने की तुलना में, एक्टिव कूल-डाउन से धड़कन और साँस जल्दी सामान्य होती है।{1}",
      how: "कमरे में चलिए, अपनी जगह पर धीरे मार्च कीजिए, या साइकिल हल्के से चलाइए। हो सके तो नाक से साँस लीजिए। पूरे वाक्य बोल पाने चाहिए।",
      dose: "3 से 5 मिनट, आराम से। बात करने लायक़ रफ़्तार।",
    },
    {
      name: "लेटकर तौलिये से हैमस्ट्रिंग स्ट्रेच",
      why: "स्क्वॉट, हिंज और लंज के बाद जाँघ के पीछे के हिस्से ने बहुत काम किया है। लेटने से कमर के निचले हिस्से को सहारा मिलता है।",
      how: "पीठ के बल लेटिए। एक पैर के तलवे पर तौलिया या बैंड लपेटिए। उस पैर को छत की ओर उठाइए जब तक जाँघ के पीछे खिंचाव न लगे। दूसरा घुटना मुड़ा, पैर ज़मीन पर। कूल्हे ज़मीन पर ही रहें।",
      dose: "हर पैर पर 10 से 30 सेकंड के 2 से 4 होल्ड, कुल लगभग 60 सेकंड।{2}",
    },
    {
      name: "खड़े होकर क्वाड स्ट्रेच, एक हाथ दीवार पर",
      why: "जाँघ का आगे का हिस्सा, स्क्वॉट और लंज के बाद। दीवार पकड़ने से यह स्ट्रेच रहता है, बैलेंस का टेस्ट नहीं बनता।",
      how: "सीधे खड़े हों, एक हाथ दीवार पर। एक घुटना मोड़िए और उस टखने को पीछे पकड़िए। दोनों घुटने साथ-साथ। टेलबोन थोड़ा अंदर कीजिए, ताकि खिंचाव जाँघ के आगे हो, कमर में नहीं। हाथ नहीं पहुँचता? पैर पीछे रखी कुर्सी पर टिकाइए।",
      dose: "हर पैर पर 10 से 30 सेकंड के 2 से 4 होल्ड।{2}",
    },
    {
      name: "लेटकर फ़िगर-फ़ोर ग्लूट स्ट्रेच",
      why: "ग्लूट्स और कूल्हे का बाहरी हिस्सा, हिंज और स्टेप-अप के बाद।",
      how: "पीठ के बल लेटिए, घुटने मुड़े। एक टखना दूसरे घुटने पर रखिए। नीचे वाली जाँघ के पीछे पकड़कर उसे सीने की ओर लाइए, जब तक ऊपर वाले कूल्हे में खिंचाव न लगे। सिर और कंधे ज़मीन पर। हिप रिप्लेसमेंट हुआ है? यह मूव करने से पहले अपने सर्जन या फ़िज़ियो से पूछिए।",
      dose: "हर तरफ़ 10 से 30 सेकंड के 2 से 4 होल्ड।{2}",
    },
    {
      name: "दीवार के सहारे काफ़ स्ट्रेच",
      why: "पिंडलियाँ हर स्क्वॉट, लंज और कैरी में काम करती हैं। घुटने की दो पोज़िशन से पिंडली की दोनों मुख्य मांसपेशियों तक खिंचाव पहुँचता है।",
      how: "हाथ दीवार पर। एक पैर पीछे, एड़ी ज़मीन पर, पीछे वाला घुटना सीधा। आगे झुकिए जब तक पिंडली में खिंचाव न लगे। फिर पीछे वाला घुटना थोड़ा मोड़िए, एड़ी ज़मीन पर ही, ताकि खिंचाव नीचे की ओर जाए।",
      dose: "हर पोज़िशन में, हर पैर पर 15 से 30 सेकंड के 1 या 2 होल्ड।{2}",
    },
    {
      name: "दरवाज़े पर चेस्ट स्ट्रेच",
      why: "सीना और कंधों का आगे का हिस्सा, पुश-अप और प्रेस के बाद। हल्का स्ट्रेच, जोड़ पर ज़ोर नहीं।",
      how: "दरवाज़े में खड़े हों। कोहनी से हाथ तक का हिस्सा फ़्रेम पर, कोहनियाँ कंधे से थोड़ी नीचे। एक पैर आगे बढ़ाइए जब तक सीने में खिंचाव न लगे। पसलियाँ नीचे। कंधे के आगे दर्द? कोहनियाँ नीचे कीजिए या पीछे हटिए।",
      dose: "10 से 30 सेकंड के 2 से 4 होल्ड।{2}",
    },
    {
      name: "धीमी साँस के साथ चाइल्ड्स पोज़ (बालासन)",
      why: "लैट्स और ऊपरी पीठ, रो के बाद। और उठकर अपने दिन में लौटने से पहले एक शांत मिनट।",
      how: "घुटनों के बल बैठिए, पैरों के अंगूठे साथ, घुटने अलग। एड़ियों की ओर पीछे बैठिए और हाथ आगे बढ़ाइए। माथा ज़मीन या तकिये पर। धीरे-धीरे पीठ में साँस भरिए। घुटनों में तकलीफ़? एड़ियों और कूल्हों के बीच तकिया रखिए।",
      dose: "लगभग 60 सेकंड। धीमी साँसें।",
    },
  ],
  enoughHeading: "कितनी देर रोकें, और कितनी बार?",
  enough: [
    "होल्ड: ज़्यादातर वयस्कों के लिए 10 से 30 सेकंड। बुज़ुर्गों के लिए 30 से 60 सेकंड ज़्यादा फ़ायदा दे सकता है।{2}",
    "कुल: हर स्ट्रेच के लिए लगभग 60 सेकंड, 2 से 4 होल्ड में बाँटकर।{2}",
    "कितना ज़ोर: खिंचाव या हल्की असुविधा तक। दर्द कभी नहीं।{2}",
    "कितनी बार: हफ़्ते में 2 से 3 दिन काफ़ी है। रोज़ करने से रेंज में सबसे ज़्यादा सुधार होता है।{2} हर स्ट्रेंथ सेशन के बाद स्ट्रेच करें, तो 2 या 3 दिन अपने आप हो जाते हैं।",
    "लंबे होल्ड आख़िर में। एक समीक्षा में, टेस्ट से ठीक पहले हर मांसपेशी पर 60 सेकंड या ज़्यादा का स्टैटिक स्ट्रेच परफ़ॉर्मेंस लगभग 4.6% घट गई। 60 सेकंड से कम पर लगभग 1.1%।{4} इसीलिए लंबे होल्ड कूल-डाउन में हैं, भारी सेट से पहले नहीं।",
    "लिफ़्ट्स भी मोबिलिटी का काम करती हैं। 11 ट्रायल की एक समीक्षा में स्ट्रेंथ ट्रेनिंग से रेंज ऑफ़ मोशन लगभग उतना ही सुधरा जितना स्ट्रेचिंग से। स्टडीज़ आपस में काफ़ी अलग थीं।{5}",
  ],
  sampleHeading: "10 मिनट का एक सैंपल कूल-डाउन",
  sampleLabel: "सिर्फ़ सैंपल। प्रिस्क्रिप्शन नहीं। अपने शरीर और अभी किए सेशन के हिसाब से बदलिए।",
  sample: [
    "मिनट 0 से 3: आराम से चलना या धीमी साइकिल।",
    "मिनट 3 से 5: लेटकर हैमस्ट्रिंग स्ट्रेच, हर पैर पर 30 सेकंड के 2 होल्ड।",
    "मिनट 5 से 6: फ़िगर-फ़ोर ग्लूट स्ट्रेच, हर तरफ़ 30 सेकंड।",
    "मिनट 6 से 7: खड़े होकर क्वाड स्ट्रेच, हर पैर पर 30 सेकंड।",
    "मिनट 7 से 8: काफ़ स्ट्रेच, सीधा घुटना फिर मुड़ा घुटना, हर पैर।",
    "मिनट 8 से 9: दरवाज़े पर चेस्ट स्ट्रेच, 30 सेकंड के 2 होल्ड।",
    "मिनट 9 से 10: चाइल्ड्स पोज़, धीमी साँस।",
  ],
  coachedHeading: "लाइव कोचिंग चाहिए?",
  coached: [
    "Iron Hour में कूल-डाउन मिनट 50 पर शुरू होता है। 60 मिनट, 1:1। मिनट 0 पर सेट-अप। मिनट 4 से वार्म-अप। मुख्य लिफ़्ट मिनट 14 पर। एक्सेसरीज़ 28 पर।",
    "स्ट्रेच उसी हिसाब से चुने जाते हैं जो आपने अभी ट्रेन किया। स्क्वॉट का दिन: कूल्हे और जाँघें ज़्यादा। प्रेस का दिन: सीना और कंधे ज़्यादा।",
    "ब्रेक के बाद लौट रहे हैं? Return: 45 मिनट, महीने में 12 सेशन, एक दिन छोड़कर। Lean Reset: महीने में 20 सेशन, 1:1। Open Floor छोटा ग्रुप है।",
    "Google Meet, Zoom या FaceTime पर लाइव कोचिंग। पुणे से। हिंदी या अंग्रेज़ी में। IST पर। अभी पक्का नहीं? 30 मिनट के कंसल्टेशन से शुरू करें। यह बातचीत है, ट्रेनिंग नहीं। बुकिंग एक समय रोकती है। फ़ीस सीधे तय होती है।",
  ],
  safetyHeading: "शुरू करने से पहले",
  safety:
    "सामान्य जानकारी, चिकित्सा सलाह नहीं। ACSM के स्क्रीनिंग मॉडल के अनुसार: अगर आप निष्क्रिय हैं, कोई लक्षण नहीं हैं और हृदय, मेटाबॉलिक या किडनी की कोई ज्ञात बीमारी नहीं है, तो आप बिना मेडिकल अनुमति के हल्का से मध्यम व्यायाम शुरू करके धीरे-धीरे बढ़ा सकते हैं। अगर इनमें से कोई बीमारी है, या सीने में दर्द, असामान्य साँस फूलना या चक्कर जैसे लक्षण हैं, तो पहले मेडिकल अनुमति लें।{6} सिर्फ़ हल्के खिंचाव तक स्ट्रेच करें। तेज़ दर्द, सुन्नपन या झनझनाहट हो तो रुक जाइए। जोड़ की सर्जरी या चोट के बाद वही पोज़िशन अपनाइए जो आपके सर्जन या फ़िज़ियो बताएँ। गर्भावस्था में या हाल में बच्चा होने के बाद पहले सलाह लें।",
};

const es: PostCopy = {
  metaTitle: "Estiramientos de vuelta a la calma tras la fuerza: 7 | Jalan PT",
  metaDescription:
    "Los 7 mejores estiramientos de vuelta a la calma tras la fuerza. Qué dice la ciencia sobre las agujetas, cuánto mantener cada uno y una rutina de 10 minutos.",
  h1: "Mejores estiramientos de vuelta a la calma después del entrenamiento de fuerza: 7 para cerrar",
  dek: "Diez minutos. Respiración que baja, movilidad que vuelve, sesión cerrada.",
  updated: "Actualizado el 27 de octubre de 2026",
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
    whatsappText: "Hola Susmit, leí el artículo sobre estiramientos de vuelta a la calma después de la fuerza y quiero reservar una consulta",
    skip: "Saltar al contenido",
    crumb: "Estiramientos de vuelta a la calma después de la fuerza",
  },
  intro: [
    "Última serie hecha. No cojas el móvil todavía. Quedan diez minutos.",
    "Primero, ten claro qué hace la vuelta a la calma. Una revisión de la investigación encontró que una vuelta a la calma activa no reduce de forma fiable las agujetas ni previene lesiones. Sí ayuda a que el pulso y la respiración vuelvan antes al reposo, y elimina antes el lactato de la sangre.{1}",
    "Estirar tampoco evita las agujetas. Una revisión Cochrane de 12 ensayos encontró que estirar después del ejercicio redujo las agujetas del día siguiente en cerca de 1 punto en una escala de 100.{3} No lo notarías.",
    "¿Entonces para qué? Tus músculos están calientes, y el ACSM dice que es cuando mejor funciona el trabajo de flexibilidad.{2} El trabajo de movilidad queda hecho mientras ya estás en la esterilla. Y la sesión termina con calma.",
  ],
  listHeading: "Los 7 mejores estiramientos de vuelta a la calma después de la fuerza",
  items: [
    {
      name: "Caminar suave o pedalear despacio, de 3 a 5 minutos",
      why: "Primero, baja el ritmo. Frente a pararse en seco, una vuelta a la calma activa acelera la recuperación del pulso y la respiración.{1}",
      how: "Camina por la habitación, marcha suave en el sitio o pedalea fácil. Respira por la nariz si puedes. Deberías poder hablar con frases completas.",
      dose: "De 3 a 5 minutos, fácil. Ritmo de conversación.",
    },
    {
      name: "Estiramiento de isquiotibiales tumbado, con una toalla",
      why: "Tras sentadillas, bisagras y zancadas, la parte de atrás de los muslos ha trabajado mucho. Tumbado, la zona lumbar queda apoyada.",
      how: "Túmbate boca arriba. Pasa una toalla o una banda por un pie. Sube esa pierna hacia el techo hasta notar tensión detrás del muslo. La otra rodilla doblada, el pie apoyado. Las caderas no se levantan.",
      dose: "De 2 a 4 mantenimientos de 10 a 30 segundos por pierna, unos 60 segundos en total.{2}",
    },
    {
      name: "Estiramiento de cuádriceps de pie, con una mano en la pared",
      why: "La parte delantera de los muslos, tras sentadillas y zancadas. Apoyarte en la pared lo mantiene como estiramiento, no como prueba de equilibrio.",
      how: "De pie, erguido, una mano en la pared. Dobla una rodilla y sujeta ese tobillo por detrás. Rodillas juntas. Mete un poco el coxis, para que la tensión esté delante del muslo y no en la zona lumbar. ¿No llegas? Apoya el pie en una silla detrás de ti.",
      dose: "De 2 a 4 mantenimientos de 10 a 30 segundos por pierna.{2}",
    },
    {
      name: "Estiramiento de glúteo en figura de cuatro, tumbado",
      why: "Glúteos y la parte externa de la cadera, tras bisagras y subidas al escalón.",
      how: "Túmbate boca arriba, rodillas dobladas. Cruza un tobillo sobre la otra rodilla. Sujeta por detrás el muslo de abajo y llévalo hacia el pecho hasta que estire la cadera cruzada. Cabeza y hombros en el suelo. ¿Tienes una prótesis de cadera? Pregunta a tu cirujano o fisioterapeuta antes de hacerlo.",
      dose: "De 2 a 4 mantenimientos de 10 a 30 segundos por lado.{2}",
    },
    {
      name: "Estiramiento de gemelos contra la pared",
      why: "Los gemelos trabajan en cada sentadilla, zancada y acarreo. Dos posiciones de rodilla llegan a los dos músculos principales de la pantorrilla.",
      how: "Manos en la pared. Un pie atrás, talón en el suelo, rodilla de atrás estirada. Inclínate hasta notar la pantorrilla. Luego dobla un poco la rodilla de atrás, con el talón aún abajo, para llevar el estiramiento más abajo.",
      dose: "1 o 2 mantenimientos de 15 a 30 segundos en cada posición, por pierna.{2}",
    },
    {
      name: "Estiramiento de pecho en el marco de una puerta",
      why: "Pecho y parte delantera de los hombros, tras flexiones y presses. Un estiramiento suave, sin forzar la articulación.",
      how: "Ponte en una puerta. Antebrazos en el marco, codos un poco por debajo de los hombros. Adelanta un pie hasta notar el estiramiento en el pecho. Costillas abajo. ¿Duele la parte delantera del hombro? Baja los codos o da un paso atrás.",
      dose: "De 2 a 4 mantenimientos de 10 a 30 segundos.{2}",
    },
    {
      name: "Postura del niño con respiración lenta",
      why: "Dorsales y parte alta de la espalda, tras los remos. Y un minuto tranquilo antes de levantarte y volver a tu día.",
      how: "De rodillas, dedos gordos juntos, rodillas separadas. Siéntate hacia los talones y avanza las manos. Frente en el suelo o en un cojín. Respira despacio hacia la espalda. ¿Molestan las rodillas? Pon una almohada entre talones y caderas.",
      dose: "Unos 60 segundos. Respiraciones lentas.",
    },
  ],
  enoughHeading: "¿Cuánto mantener y con qué frecuencia?",
  enough: [
    "Mantener: de 10 a 30 segundos para la mayoría de los adultos. En personas mayores, de 30 a 60 segundos puede ayudar más.{2}",
    "Total: unos 60 segundos por estiramiento, repartidos en 2 a 4 mantenimientos.{2}",
    "Intensidad: hasta notar tensión o una ligera molestia. Nunca dolor.{2}",
    "Frecuencia: de 2 a 3 días por semana funciona. A diario da las mayores mejoras de movilidad.{2} Estirar tras cada sesión de fuerza ya te lleva a 2 o 3.",
    "Los mantenimientos largos van al final. En una revisión, estirar de forma estática 60 segundos o más por músculo justo antes de una prueba redujo el rendimiento en torno a un 4,6 %. Con menos de 60 segundos, en torno a un 1,1 %.{4} Por eso los mantenimientos largos están en la vuelta a la calma, no antes de tus series pesadas.",
    "Los levantamientos también trabajan la movilidad. Una revisión de 11 ensayos encontró que el entrenamiento de fuerza mejoró el rango de movimiento más o menos lo mismo que estirar. Los estudios eran muy distintos entre sí.{5}",
  ],
  sampleHeading: "Una vuelta a la calma de ejemplo, 10 minutos",
  sampleLabel: "Solo un ejemplo. No es una prescripción. Ajústalo a tu cuerpo y a la sesión que acabas de hacer.",
  sample: [
    "Minutos 0 a 3: caminar suave o bici despacio.",
    "Minutos 3 a 5: isquiotibiales tumbado, 2 mantenimientos de 30 segundos por pierna.",
    "Minutos 5 a 6: glúteo en figura de cuatro, 30 segundos por lado.",
    "Minutos 6 a 7: cuádriceps de pie, 30 segundos por pierna.",
    "Minutos 7 a 8: gemelos, rodilla estirada y luego doblada, por pierna.",
    "Minutos 8 a 9: pecho en la puerta, 2 mantenimientos de 30 segundos.",
    "Minutos 9 a 10: postura del niño, respiración lenta.",
  ],
  coachedHeading: "¿Lo quieres con entrenador en directo?",
  coached: [
    "En Iron Hour la vuelta a la calma empieza en el minuto 50. 60 minutos, 1:1. Preparación en el minuto 0. Calentamiento desde el minuto 4. El levantamiento principal empieza en el 14. Accesorios en el 28.",
    "Los estiramientos se eligen según lo que acabas de entrenar. Día de sentadilla: más cadera y muslos. Día de press: más pecho y hombros.",
    "¿Vuelves tras un parón? Return: 45 minutos, 12 sesiones al mes en días alternos. Lean Reset: 20 sesiones al mes, 1:1. Open Floor es un grupo pequeño.",
    "Entrenamiento en directo por Google Meet, Zoom o FaceTime. Desde Pune. En hindi o inglés. En horario IST. ¿Aún no lo tienes claro? Empieza con una consulta de 30 minutos. Es una conversación, no un entrenamiento. La reserva guarda una hora. La tarifa se acuerda directamente.",
  ],
  safetyHeading: "Antes de empezar",
  safety:
    "Información general, no consejo médico. Según el modelo de evaluación del ACSM: si eres inactivo, no tienes síntomas ni enfermedad cardíaca, metabólica o renal conocida, puedes empezar con ejercicio ligero a moderado sin autorización médica e ir subiendo poco a poco. Si tienes alguna de esas enfermedades, o síntomas como dolor en el pecho, falta de aire inusual o mareo, pide autorización médica primero.{6} Estira solo hasta una tensión suave. Para si notas dolor agudo, entumecimiento u hormigueo. Tras una cirugía articular o una lesión, usa las posiciones que te indique tu cirujano o fisioterapeuta. Consulta antes si estás embarazada o has dado a luz hace poco.",
};

const zh: PostCopy = {
  metaTitle: "力量训练后最佳放松拉伸：7个动作 | Jalan PT",
  metaDescription:
    "力量训练后的7个最佳放松拉伸。研究对肌肉酸痛怎么说，每个拉伸保持多久，附一套10分钟放松示例。",
  h1: "力量训练后最佳放松拉伸：收尾的7个动作",
  dek: "十分钟。呼吸放缓，活动度回来，训练收尾。",
  updated: "更新于2026年10月27日",
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
    whatsappText: "你好Susmit，我读了关于力量训练后放松拉伸的文章，想预约一次咨询",
    skip: "跳到正文",
    crumb: "力量训练后最佳放松拉伸",
  },
  intro: [
    "最后一组做完了。先别拿手机。还有十分钟。",
    "先搞清楚放松能做什么。一篇研究综述发现，主动放松并不能可靠地减轻肌肉酸痛，也不能预防受伤。但它能让心率和呼吸更快回到安静状态，并更早清除血液中的乳酸。{1}",
    "拉伸也挡不住酸痛。一篇纳入12项试验的Cochrane综述发现，运动后拉伸只让第二天的酸痛在100分制上降低约1分。{3}你感觉不到。",
    "那为什么还要做？肌肉是热的，而ACSM指出，这时做柔韧性练习效果最好。{2}你本来就在垫子上，活动度练习顺手就完成了。训练也能平静地收尾。",
  ],
  listHeading: "力量训练后7个最佳放松拉伸",
  items: [
    {
      name: "轻松步行或慢骑单车，3到5分钟",
      why: "先让身体降下来。与突然停下相比，主动放松能加快心率和呼吸的恢复。{1}",
      how: "在房间里走动，原地轻轻踏步，或轻松蹬单车。能用鼻子呼吸就用鼻子。要能说完整的句子。",
      dose: "3到5分钟，轻松。能聊天的速度。",
    },
    {
      name: "仰卧毛巾腘绳肌拉伸",
      why: "深蹲、髋铰链和弓步之后，大腿后侧做了很多工作。躺着做能让下背部有支撑。",
      how: "仰卧。用毛巾或弹力带套住一只脚。把这条腿抬向天花板，直到大腿后侧有拉伸感。另一侧膝盖弯曲，脚踩地。髋部不离地。",
      dose: "每侧2到4次，每次保持10到30秒，总共约60秒。{2}",
    },
    {
      name: "扶墙站姿股四头肌拉伸",
      why: "大腿前侧，深蹲和弓步之后。扶墙让它是拉伸，而不是平衡测试。",
      how: "站直，一只手扶墙。弯曲一侧膝盖，在身后抓住脚踝。两膝并拢。尾骨稍微内收，让拉伸感在大腿前侧，而不是下背部。够不到？把脚放在身后的椅子上。",
      dose: "每侧2到4次，每次保持10到30秒。{2}",
    },
    {
      name: "仰卧“4”字臀部拉伸",
      why: "臀部和髋部外侧，髋铰链和登台阶之后。",
      how: "仰卧，屈膝。把一侧脚踝搭在另一侧膝盖上。抱住下方大腿的后侧，把它拉向胸口，直到交叉一侧的髋部有拉伸感。头和肩贴地。做过髋关节置换？先问你的外科医生或物理治疗师。",
      dose: "每侧2到4次，每次保持10到30秒。{2}",
    },
    {
      name: "扶墙小腿拉伸",
      why: "每次深蹲、弓步和负重行走，小腿都在工作。两种膝盖姿势能照顾到小腿的两块主要肌肉。",
      how: "双手扶墙。一只脚向后，脚跟着地，后侧膝盖伸直。身体前倾，直到小腿有拉伸感。然后后侧膝盖稍微弯曲，脚跟仍然着地，让拉伸感往下移。",
      dose: "每种姿势、每侧1到2次，每次保持15到30秒。{2}",
    },
    {
      name: "门框胸部拉伸",
      why: "胸部和肩前侧，俯卧撑和推举之后。轻柔的拉伸，不要硬压关节。",
      how: "站在门框里。前臂贴在门框上，肘部略低于肩。一只脚向前迈，直到胸前有拉伸感。肋骨下沉。肩前侧疼？把肘部放低，或往后退一点。",
      dose: "2到4次，每次保持10到30秒。{2}",
    },
    {
      name: "婴儿式配合慢呼吸",
      why: "划船之后的背阔肌和上背部。也是起身回到日常之前安静的一分钟。",
      how: "跪姿，两脚大脚趾并拢，膝盖分开。臀部向后坐向脚跟，双手向前伸。额头放在地上或垫子上。慢慢往背部吸气。膝盖不舒服？在脚跟和臀部之间放个枕头。",
      dose: "约60秒。慢慢呼吸。",
    },
  ],
  enoughHeading: "保持多久，多久做一次？",
  enough: [
    "保持：大多数成年人10到30秒。年长者保持30到60秒可能更有益。{2}",
    "总量：每个拉伸约60秒，分成2到4次。{2}",
    "强度：拉到有紧绷感或轻微不适。绝不要痛。{2}",
    "频率：每周2到3天就有效。每天做，活动度提升最大。{2}每次力量训练后都拉伸，自然就有2到3天。",
    "长时间保持放在最后。一篇综述发现，测试前每块肌肉静态拉伸60秒或更久，表现下降约4.6%；少于60秒，下降约1.1%。{4}所以长时间保持安排在放松环节，而不是大重量组之前。",
    "力量动作本身也在练活动度。一篇纳入11项试验的综述发现，力量训练改善活动度的效果与拉伸大致相当。不过各研究之间差异很大。{5}",
  ],
  sampleHeading: "10分钟放松示例",
  sampleLabel: "仅为示例，不是处方。请根据你的身体和刚完成的训练调整。",
  sample: [
    "第0到3分钟：轻松步行或慢骑单车。",
    "第3到5分钟：仰卧腘绳肌拉伸，每侧2次，每次30秒。",
    "第5到6分钟：“4”字臀部拉伸，每侧30秒。",
    "第6到7分钟：站姿股四头肌拉伸，每侧30秒。",
    "第7到8分钟：小腿拉伸，先直膝再屈膝，每侧。",
    "第8到9分钟：门框胸部拉伸，2次，每次30秒。",
    "第9到10分钟：婴儿式，慢呼吸。",
  ],
  coachedHeading: "想要真人实时指导？",
  coached: [
    "在Iron Hour中，放松从第50分钟开始。60分钟，一对一。第0分钟准备。第4分钟开始热身。第14分钟开始主项。第28分钟辅助训练。",
    "拉伸动作根据你刚练的内容来选。深蹲日：多练髋部和大腿。推举日：多练胸部和肩部。",
    "停练后回归？Return：每次45分钟，每月12次，隔天进行。Lean Reset：每月20次，一对一。Open Floor是小组课。",
    "通过Google Meet、Zoom或FaceTime实时指导。来自浦那。用印地语或英语。按印度标准时间（IST）。还不确定？先从30分钟咨询开始。这是一次对话，不是训练。预约只是保留时间。费用直接商定。",
  ],
  safetyHeading: "开始之前",
  safety:
    "一般信息，不是医疗建议。根据ACSM的筛查模型：如果你平时不运动、没有症状，也没有已知的心脏、代谢或肾脏疾病，可以不经医生许可从低到中等强度开始，并逐步增加。如果你有上述疾病之一，或有胸痛、异常气短或头晕等症状，请先获得医生许可。{6}拉伸只到轻微紧绷即可。如果出现剧痛、麻木或刺痛，立即停止。关节手术或受伤后，请按外科医生或物理治疗师给你的姿势来做。怀孕或刚生完孩子，请先咨询专业人士。",
};

const ja: PostCopy = {
  metaTitle: "筋トレ後のクールダウンストレッチ7選 | Jalan PT",
  metaDescription:
    "筋トレ後におすすめのクールダウンストレッチ7種目。筋肉痛について研究が示すこと、各ストレッチを何秒保つか、10分間のクールダウンのサンプル。",
  h1: "筋トレ後に最適なクールダウンストレッチ：締めくくりの7種目",
  dek: "10分間。呼吸を落ち着け、可動域を戻し、セッションを締める。",
  updated: "2026年10月27日更新",
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
    whatsappText: "こんにちは、Susmitさん。筋トレ後のクールダウンストレッチの記事を読みました。相談を予約したいです",
    skip: "本文へスキップ",
    crumb: "筋トレ後に最適なクールダウンストレッチ",
  },
  intro: [
    "最後のセットが終わりました。まだスマホは見ないで。あと10分あります。",
    "まず、クールダウンで何ができるかをはっきりさせましょう。研究のレビューでは、アクティブなクールダウンは筋肉痛を確実に減らすわけでも、けがを防ぐわけでもありませんでした。ただし、心拍と呼吸を早く安静時に近づけ、血中の乳酸を早く取り除きます。{1}",
    "ストレッチでも筋肉痛は防げません。12件の試験をまとめたコクランレビューでは、運動後のストレッチで翌日の筋肉痛は100点満点で約1点しか下がりませんでした。{3}体感できる差ではありません。",
    "では、なぜやるのか。筋肉が温まっているからです。ACSMは、柔軟性トレーニングは筋肉が温まっているときに最も効果的だとしています。{2}すでにマットの上にいるうちに、可動域のトレーニングが済みます。そして、セッションを落ち着いて終えられます。",
  ],
  listHeading: "筋トレ後のクールダウンストレッチ ベスト7",
  items: [
    {
      name: "軽いウォーキングかゆっくりバイク、3〜5分",
      why: "まず体を落ち着かせます。急に止まるのに比べ、アクティブなクールダウンは心拍と呼吸の回復を早めます。{1}",
      how: "部屋の中を歩く、その場で軽く足踏みする、またはバイクを軽くこぐ。できれば鼻で呼吸。会話が普通にできる程度で。",
      dose: "3〜5分、楽に。話せるペースで。",
    },
    {
      name: "タオルを使った仰向けハムストリングストレッチ",
      why: "スクワット、ヒップヒンジ、ランジの後は、太ももの裏がたくさん働いています。仰向けなら腰が支えられます。",
      how: "仰向けに寝ます。片足にタオルかバンドをかけます。その脚を天井に向けて上げ、太ももの裏が伸びるところまで。反対の膝は曲げて足裏を床に。お尻は床から浮かせません。",
      dose: "片脚につき10〜30秒を2〜4回、合計約60秒。{2}",
    },
    {
      name: "壁に手をついた立位の大腿四頭筋ストレッチ",
      why: "スクワットやランジの後の太もも前側。壁を持てば、バランステストではなくストレッチになります。",
      how: "まっすぐ立ち、片手を壁に。片膝を曲げ、その足首を後ろでつかみます。両膝はそろえて。尾骨を少し巻き込み、腰ではなく太ももの前が伸びるように。届かない場合は、後ろの椅子に足をのせます。",
      dose: "片脚につき10〜30秒を2〜4回。{2}",
    },
    {
      name: "仰向けの「4の字」お尻ストレッチ",
      why: "ヒップヒンジやステップアップの後のお尻と股関節の外側。",
      how: "仰向けで膝を曲げます。片方の足首を反対の膝にのせます。下の太ももの裏を抱えて胸に引き寄せ、組んだ側のお尻が伸びるところまで。頭と肩は床に。人工股関節の手術を受けた方は、先に担当医か理学療法士に確認してください。",
      dose: "左右それぞれ10〜30秒を2〜4回。{2}",
    },
    {
      name: "壁を使ったふくらはぎストレッチ",
      why: "ふくらはぎはスクワット、ランジ、キャリーのたびに働いています。膝の角度を2つ変えると、ふくらはぎの2つの主な筋肉に届きます。",
      how: "両手を壁に。片足を後ろに引き、かかとは床、後ろの膝は伸ばします。ふくらはぎが伸びるまで体を前へ。次に、かかとを床につけたまま後ろの膝を少し曲げ、伸びる場所を下へ移します。",
      dose: "それぞれの姿勢で、片脚につき15〜30秒を1〜2回。{2}",
    },
    {
      name: "ドア枠を使った胸のストレッチ",
      why: "腕立て伏せやプレスの後の胸と肩の前側。関節をねじ込まず、やさしく伸ばします。",
      how: "ドア枠に立ちます。前腕を枠にあて、肘は肩より少し低く。胸が伸びるまで片足を前に踏み出します。肋骨は下げたまま。肩の前が痛むなら、肘を下げるか一歩下がります。",
      dose: "10〜30秒を2〜4回。{2}",
    },
    {
      name: "ゆっくり呼吸しながらチャイルドポーズ",
      why: "ロウの後の広背筋と背中上部。そして、立ち上がって一日に戻る前の静かな1分。",
      how: "膝をつき、足の親指をそろえて膝を開きます。かかとに向かってお尻を引き、両手を前へ。額は床かクッションに。背中に息を入れるようにゆっくり呼吸。膝がつらいなら、かかととお尻の間に枕をはさみます。",
      dose: "約60秒。ゆっくり呼吸。",
    },
  ],
  enoughHeading: "何秒保つ？どれくらいの頻度で？",
  enough: [
    "保持：ほとんどの成人は10〜30秒。高齢者は30〜60秒のほうが効果が大きい可能性があります。{2}",
    "合計：1つのストレッチにつき約60秒を、2〜4回に分けて。{2}",
    "強さ：張りや軽い不快感を感じるところまで。痛みは決して出さないこと。{2}",
    "頻度：週2〜3日で効果があります。毎日行うと可動域の伸びが最も大きくなります。{2}筋トレのたびにストレッチすれば、自然と週2〜3日になります。",
    "長い保持は最後に。あるレビューでは、テスト直前に1つの筋肉につき60秒以上の静的ストレッチをすると、パフォーマンスが約4.6%低下しました。60秒未満では約1.1%でした。{4}だから長い保持はクールダウンに入れ、重いセットの前には入れません。",
    "リフト自体も可動域のトレーニングになります。11件の試験をまとめたレビューでは、筋力トレーニングはストレッチとほぼ同じくらい可動域を改善しました。ただし研究どうしのばらつきは大きいものでした。{5}",
  ],
  sampleHeading: "10分間のクールダウンのサンプル",
  sampleLabel: "あくまでサンプルです。処方ではありません。あなたの体と、終えたばかりのセッションに合わせて調整してください。",
  sample: [
    "0〜3分：軽いウォーキングかゆっくりバイク。",
    "3〜5分：仰向けハムストリングストレッチ、片脚30秒を2回。",
    "5〜6分：「4の字」お尻ストレッチ、左右30秒ずつ。",
    "6〜7分：立位の大腿四頭筋ストレッチ、片脚30秒ずつ。",
    "7〜8分：ふくらはぎストレッチ、膝を伸ばして、次に曲げて、片脚ずつ。",
    "8〜9分：ドア枠の胸のストレッチ、30秒を2回。",
    "9〜10分：チャイルドポーズ、ゆっくり呼吸。",
  ],
  coachedHeading: "ライブで指導を受けたい？",
  coached: [
    "Iron Hourでは、クールダウンは50分から始まります。60分、1対1。0分にセットアップ。4分からウォームアップ。14分にメインリフト。28分に補助種目。",
    "ストレッチは、その日に鍛えた部位に合わせて選びます。スクワットの日は股関節と太ももを多めに。プレスの日は胸と肩を多めに。",
    "ブランクからの再開なら、Return：45分、月12回、1日おき。Lean Reset：月20回、1対1。Open Floorは少人数グループです。",
    "Google Meet、Zoom、FaceTimeでのライブ指導。プネーから。ヒンディー語または英語で。インド標準時（IST）です。まだ迷っているなら、30分の相談から。会話であってトレーニングではありません。予約は時間を確保するものです。料金は直接ご相談のうえ決めます。",
  ],
  safetyHeading: "始める前に",
  safety:
    "一般的な情報であり、医学的な助言ではありません。ACSMのスクリーニングモデルでは、運動習慣がなく、症状がなく、心臓・代謝・腎臓の病気が知られていなければ、医師の許可なしに軽い〜中程度の運動を始め、少しずつ増やしてよいとされています。これらの病気がある場合や、胸の痛み、いつもと違う息切れ、めまいなどの症状がある場合は、先に医師の許可を得てください。{6}ストレッチは軽い張りまでにしてください。鋭い痛み、しびれ、ピリピリ感があればやめてください。関節の手術やけがの後は、担当医や理学療法士に指示された姿勢で行ってください。妊娠中や出産後まもない場合は、先に専門家に相談してください。",
};

const gu: PostCopy = {
  metaTitle: "સ્ટ્રેન્થ ટ્રેનિંગ પછી શ્રેષ્ઠ કૂલ-ડાઉન સ્ટ્રેચ: 7 | Jalan PT",
  metaDescription:
    "સ્ટ્રેન્થ ટ્રેનિંગ પછી 7 શ્રેષ્ઠ કૂલ-ડાઉન સ્ટ્રેચ. સ્નાયુના દુખાવા વિશે રિસર્ચ શું કહે છે, દરેક સ્ટ્રેચ કેટલો સમય રોકવો, અને 10 મિનિટનું સેમ્પલ કૂલ-ડાઉન.",
  h1: "સ્ટ્રેન્થ ટ્રેનિંગ પછી શ્રેષ્ઠ કૂલ-ડાઉન સ્ટ્રેચ: સેશન પૂરું કરવાના 7 મૂવ",
  dek: "દસ મિનિટ. શ્વાસ ધીમો, રેન્જ પાછી, સેશન પૂરું.",
  updated: "અપડેટ: 27 ઑક્ટોબર 2026",
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
    whatsappText: "નમસ્તે સુસ્મિત, મેં સ્ટ્રેન્થ ટ્રેનિંગ પછીના કૂલ-ડાઉન સ્ટ્રેચ વિશેનો લેખ વાંચ્યો અને કન્સલ્ટેશન બુક કરવા માંગું છું",
    skip: "સામગ્રી પર જાઓ",
    crumb: "સ્ટ્રેન્થ ટ્રેનિંગ પછી કૂલ-ડાઉન સ્ટ્રેચ",
  },
  intro: [
    "છેલ્લો સેટ પૂરો. હજી ફોન ન ઉપાડો. દસ મિનિટ બાકી છે.",
    "પહેલાં સ્પષ્ટ સમજી લો કે કૂલ-ડાઉન શું કરે છે. રિસર્ચની એક સમીક્ષામાં જોવા મળ્યું કે એક્ટિવ કૂલ-ડાઉન સ્નાયુનો દુખાવો ભરોસાપૂર્વક ઘટાડતું નથી અને ઈજા અટકાવતું નથી. પણ તે હૃદયના ધબકારા અને શ્વાસને ઝડપથી આરામની સ્થિતિ તરફ લાવે છે, અને લોહીમાંથી લેક્ટેટ વહેલું સાફ કરે છે.{1}",
    "સ્ટ્રેચિંગ પણ દુખાવો નહીં રોકે. 12 ટ્રાયલની એક Cochrane સમીક્ષામાં કસરત પછી સ્ટ્રેચિંગથી બીજા દિવસનો દુખાવો 100 પોઇન્ટના માપ પર લગભગ 1 પોઇન્ટ ઘટ્યો.{3} એટલો ફરક અનુભવાતો નથી.",
    "તો પછી શા માટે? સ્નાયુ ગરમ છે, અને ACSM કહે છે કે ફ્લેક્સિબિલિટીનું કામ ત્યારે જ સૌથી સારું અસર કરે છે.{2} તમે પહેલેથી મૅટ પર છો, રેન્જ ઑફ મોશનનું કામ ત્યાં જ થઈ જાય છે. અને સેશન શાંતિથી પૂરું થાય છે.",
  ],
  listHeading: "સ્ટ્રેન્થ ટ્રેનિંગ પછી 7 શ્રેષ્ઠ કૂલ-ડાઉન સ્ટ્રેચ",
  items: [
    {
      name: "આરામથી ચાલવું કે ધીમી સાઇકલિંગ, 3 થી 5 મિનિટ",
      why: "પહેલાં શરીરને નીચે લાવો. અચાનક અટકવાની સરખામણીમાં, એક્ટિવ કૂલ-ડાઉનથી ધબકારા અને શ્વાસ ઝડપથી સામાન્ય થાય છે.{1}",
      how: "રૂમમાં ચાલો, જગ્યા પર ધીમે માર્ચ કરો, કે સાઇકલ હળવેથી ચલાવો. બને તો નાકથી શ્વાસ લો. આખાં વાક્ય બોલી શકાવાં જોઈએ.",
      dose: "3 થી 5 મિનિટ, આરામથી. વાત કરી શકાય એવી ઝડપ.",
    },
    {
      name: "સૂઈને ટુવાલથી હૅમસ્ટ્રિંગ સ્ટ્રેચ",
      why: "સ્ક્વૉટ, હિન્જ અને લંજ પછી સાથળના પાછળના ભાગે ઘણું કામ કર્યું છે. સૂવાથી કમરના નીચલા ભાગને ટેકો મળે છે.",
      how: "પીઠ પર સૂઈ જાઓ. એક પગના તળિયે ટુવાલ કે બેન્ડ વીંટાળો. તે પગને છત તરફ ઊંચો કરો, જ્યાં સુધી સાથળની પાછળ ખેંચાણ ન લાગે. બીજો ઘૂંટણ વાળેલો, પગ જમીન પર. થાપા જમીન પર જ રહે.",
      dose: "દરેક પગે 10 થી 30 સેકન્ડના 2 થી 4 હોલ્ડ, કુલ લગભગ 60 સેકન્ડ.{2}",
    },
    {
      name: "ઊભા રહીને ક્વૉડ સ્ટ્રેચ, એક હાથ દીવાલ પર",
      why: "સાથળનો આગળનો ભાગ, સ્ક્વૉટ અને લંજ પછી. દીવાલ પકડવાથી આ સ્ટ્રેચ રહે છે, બૅલેન્સની કસોટી નહીં.",
      how: "સીધા ઊભા રહો, એક હાથ દીવાલ પર. એક ઘૂંટણ વાળો અને તે પગની ઘૂંટી પાછળથી પકડો. બંને ઘૂંટણ સાથે. પૂંછડીનું હાડકું સહેજ અંદર લો, જેથી ખેંચાણ સાથળની આગળ લાગે, કમરમાં નહીં. હાથ નથી પહોંચતો? પગ પાછળ મૂકેલી ખુરશી પર ટેકવો.",
      dose: "દરેક પગે 10 થી 30 સેકન્ડના 2 થી 4 હોલ્ડ.{2}",
    },
    {
      name: "સૂઈને ફિગર-ફોર ગ્લૂટ સ્ટ્રેચ",
      why: "ગ્લૂટ્સ અને થાપાનો બહારનો ભાગ, હિન્જ અને સ્ટેપ-અપ પછી.",
      how: "પીઠ પર સૂઈ જાઓ, ઘૂંટણ વાળેલા. એક પગની ઘૂંટી બીજા ઘૂંટણ પર મૂકો. નીચેના સાથળની પાછળ પકડીને તેને છાતી તરફ લાવો, જ્યાં સુધી ઉપરના થાપામાં ખેંચાણ ન લાગે. માથું અને ખભા જમીન પર. હિપ રિપ્લેસમેન્ટ થયું છે? આ મૂવ પહેલાં તમારા સર્જન કે ફિઝિયોને પૂછો.",
      dose: "દરેક બાજુ 10 થી 30 સેકન્ડના 2 થી 4 હોલ્ડ.{2}",
    },
    {
      name: "દીવાલના ટેકે કાફ સ્ટ્રેચ",
      why: "પિંડીઓ દરેક સ્ક્વૉટ, લંજ અને કૅરીમાં કામ કરે છે. ઘૂંટણની બે પોઝિશનથી પિંડીના બંને મુખ્ય સ્નાયુ સુધી ખેંચાણ પહોંચે છે.",
      how: "હાથ દીવાલ પર. એક પગ પાછળ, એડી જમીન પર, પાછળનો ઘૂંટણ સીધો. આગળ ઝૂકો જ્યાં સુધી પિંડીમાં ખેંચાણ ન લાગે. પછી પાછળનો ઘૂંટણ સહેજ વાળો, એડી જમીન પર જ, જેથી ખેંચાણ નીચે તરફ જાય.",
      dose: "દરેક પોઝિશનમાં, દરેક પગે 15 થી 30 સેકન્ડના 1 કે 2 હોલ્ડ.{2}",
    },
    {
      name: "દરવાજામાં ચેસ્ટ સ્ટ્રેચ",
      why: "છાતી અને ખભાનો આગળનો ભાગ, પુશ-અપ અને પ્રેસ પછી. હળવો સ્ટ્રેચ, સાંધા પર જોર નહીં.",
      how: "દરવાજામાં ઊભા રહો. કોણીથી હાથ સુધીનો ભાગ ફ્રેમ પર, કોણી ખભાથી સહેજ નીચે. એક પગ આગળ મૂકો જ્યાં સુધી છાતીમાં ખેંચાણ ન લાગે. પાંસળીઓ નીચે. ખભાની આગળ દુખાવો? કોણી નીચે કરો કે પાછળ ખસો.",
      dose: "10 થી 30 સેકન્ડના 2 થી 4 હોલ્ડ.{2}",
    },
    {
      name: "ધીમા શ્વાસ સાથે ચાઇલ્ડ્સ પોઝ (બાલાસન)",
      why: "રો પછી લૅટ્સ અને ઉપલી પીઠ. અને ઊઠીને તમારા દિવસમાં પાછા જતાં પહેલાં એક શાંત મિનિટ.",
      how: "ઘૂંટણ પર બેસો, પગના અંગૂઠા સાથે, ઘૂંટણ અલગ. એડી તરફ પાછળ બેસો અને હાથ આગળ લંબાવો. કપાળ જમીન કે ગાદી પર. ધીમે ધીમે પીઠમાં શ્વાસ ભરો. ઘૂંટણમાં તકલીફ? એડી અને થાપા વચ્ચે ઓશીકું મૂકો.",
      dose: "લગભગ 60 સેકન્ડ. ધીમા શ્વાસ.",
    },
  ],
  enoughHeading: "કેટલો સમય રોકવું, અને કેટલી વાર?",
  enough: [
    "હોલ્ડ: મોટા ભાગના પુખ્તો માટે 10 થી 30 સેકન્ડ. વડીલો માટે 30 થી 60 સેકન્ડ વધુ ફાયદો આપી શકે.{2}",
    "કુલ: દરેક સ્ટ્રેચ માટે લગભગ 60 સેકન્ડ, 2 થી 4 હોલ્ડમાં વહેંચીને.{2}",
    "કેટલું જોર: ખેંચાણ કે હળવી અસુવિધા સુધી. દુખાવો ક્યારેય નહીં.{2}",
    "કેટલી વાર: અઠવાડિયામાં 2 થી 3 દિવસ પૂરતા છે. રોજ કરવાથી રેન્જમાં સૌથી વધુ સુધારો થાય છે.{2} દરેક સ્ટ્રેન્થ સેશન પછી સ્ટ્રેચ કરો, તો 2 કે 3 દિવસ આપોઆપ થઈ જાય.",
    "લાંબા હોલ્ડ છેલ્લે. એક સમીક્ષામાં, ટેસ્ટ પહેલાં તરત દરેક સ્નાયુ પર 60 સેકન્ડ કે વધુનો સ્ટેટિક સ્ટ્રેચ કરવાથી પરફોર્મન્સ લગભગ 4.6% ઘટ્યું. 60 સેકન્ડથી ઓછામાં લગભગ 1.1%.{4} એટલે લાંબા હોલ્ડ કૂલ-ડાઉનમાં છે, ભારે સેટ પહેલાં નહીં.",
    "લિફ્ટ્સ પણ મોબિલિટીનું કામ કરે છે. 11 ટ્રાયલની એક સમીક્ષામાં સ્ટ્રેન્થ ટ્રેનિંગથી રેન્જ ઑફ મોશન લગભગ એટલું જ સુધર્યું જેટલું સ્ટ્રેચિંગથી. સ્ટડીઝ એકબીજાથી ઘણી અલગ હતી.{5}",
  ],
  sampleHeading: "10 મિનિટનું એક સેમ્પલ કૂલ-ડાઉન",
  sampleLabel: "ફક્ત સેમ્પલ. પ્રિસ્ક્રિપ્શન નથી. તમારા શરીર અને હમણાં કરેલા સેશન મુજબ બદલો.",
  sample: [
    "મિનિટ 0 થી 3: આરામથી ચાલવું કે ધીમી સાઇકલ.",
    "મિનિટ 3 થી 5: સૂઈને હૅમસ્ટ્રિંગ સ્ટ્રેચ, દરેક પગે 30 સેકન્ડના 2 હોલ્ડ.",
    "મિનિટ 5 થી 6: ફિગર-ફોર ગ્લૂટ સ્ટ્રેચ, દરેક બાજુ 30 સેકન્ડ.",
    "મિનિટ 6 થી 7: ઊભા રહીને ક્વૉડ સ્ટ્રેચ, દરેક પગે 30 સેકન્ડ.",
    "મિનિટ 7 થી 8: કાફ સ્ટ્રેચ, સીધો ઘૂંટણ પછી વાળેલો ઘૂંટણ, દરેક પગે.",
    "મિનિટ 8 થી 9: દરવાજામાં ચેસ્ટ સ્ટ્રેચ, 30 સેકન્ડના 2 હોલ્ડ.",
    "મિનિટ 9 થી 10: ચાઇલ્ડ્સ પોઝ, ધીમા શ્વાસ.",
  ],
  coachedHeading: "લાઇવ કોચિંગ જોઈએ છે?",
  coached: [
    "Iron Hour માં કૂલ-ડાઉન મિનિટ 50 પર શરૂ થાય છે. 60 મિનિટ, 1:1. મિનિટ 0 પર સેટ-અપ. મિનિટ 4 થી વૉર્મ-અપ. મુખ્ય લિફ્ટ મિનિટ 14 પર. એક્સેસરીઝ 28 પર.",
    "સ્ટ્રેચ એ મુજબ પસંદ થાય છે જે તમે હમણાં ટ્રેન કર્યું. સ્ક્વૉટનો દિવસ: થાપા અને સાથળ વધુ. પ્રેસનો દિવસ: છાતી અને ખભા વધુ.",
    "બ્રેક પછી પાછા આવો છો? Return: 45 મિનિટ, મહિને 12 સેશન, એક દિવસ છોડીને. Lean Reset: મહિને 20 સેશન, 1:1. Open Floor નાનું ગ્રુપ છે.",
    "Google Meet, Zoom અથવા FaceTime પર લાઇવ કોચિંગ. પુણેથી. હિન્દી કે અંગ્રેજીમાં. IST પર. હજી નક્કી નથી? 30 મિનિટના કન્સલ્ટેશનથી શરૂ કરો. આ વાતચીત છે, ટ્રેનિંગ નહીં. બુકિંગ એક સમય રોકે છે. ફી સીધી નક્કી થાય છે.",
  ],
  safetyHeading: "શરૂ કરતાં પહેલાં",
  safety:
    "સામાન્ય માહિતી, તબીબી સલાહ નહીં. ACSM ના સ્ક્રીનિંગ મોડલ મુજબ: જો તમે નિષ્ક્રિય છો, કોઈ લક્ષણ નથી અને હૃદય, મેટાબોલિક કે કિડનીની કોઈ જાણીતી બીમારી નથી, તો તમે તબીબી મંજૂરી વગર હળવી થી મધ્યમ કસરત શરૂ કરીને ધીમે ધીમે વધારી શકો છો. જો આમાંની કોઈ બીમારી હોય, અથવા છાતીમાં દુખાવો, અસામાન્ય હાંફ કે ચક્કર જેવા લક્ષણો હોય, તો પહેલાં તબીબી મંજૂરી લો.{6} ફક્ત હળવા ખેંચાણ સુધી સ્ટ્રેચ કરો. તીવ્ર દુખાવો, ખાલી ચડવી કે ઝણઝણાટી થાય તો રોકાઈ જાઓ. સાંધાની સર્જરી કે ઈજા પછી એ જ પોઝિશન અપનાવો જે તમારા સર્જન કે ફિઝિયો કહે. ગર્ભાવસ્થામાં કે તાજેતરમાં બાળક થયા પછી પહેલાં સલાહ લો.",
};

export const coolDownPost: BlogPost = {
  slug: CD_SLUG,
  published: CD_PUBLISHED,
  modified: CD_MODIFIED,
  about: "Cool-down stretches after strength training",
  sources: CD_SOURCES,
  copy: { en, ar, hi, es, zh, ja, gu },
};
