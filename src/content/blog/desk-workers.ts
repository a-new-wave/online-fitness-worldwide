/**
 * Blog post: "Best exercises for desk workers".
 * Citations in copy are written as {n} and point at SOURCES[n - 1].
 * Every number in the copy comes from a cited source. No client results.
 * Translations were drafted for this batch and should get a native-speaker
 * review before launch (see CHANGES-grokbot.md).
 */

import {
  alternatesFor,
  isPostLang,
  LANG_META,
  POST_LANGS,
  postPathFor,
  type BlogPost,
  type PostCopy,
  type PostLang,
} from "./shared";

export const POST_SLUG = "best-exercises-for-desk-workers";
export const POST_PUBLISHED = "2026-10-22";
export const POST_MODIFIED = "2026-10-22";

// Re-exported so older imports keep working.
export { isPostLang, LANG_META, POST_LANGS, type PostCopy, type PostLang };

export function postPath(lang: PostLang): string {
  return postPathFor(POST_SLUG, lang);
}

export const POST_ALTERNATES = alternatesFor(POST_SLUG);

export const SOURCES = [
  {
    cite: "World Health Organization. WHO guidelines on physical activity and sedentary behaviour. Geneva: WHO; 2020.",
    url: "https://www.who.int/publications/i/item/9789240015128",
  },
  {
    cite: "Bull FC, Al-Ansari SS, Biddle S, et al. World Health Organization 2020 guidelines on physical activity and sedentary behaviour. Br J Sports Med. 2020;54(24):1451–1462.",
    url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC7719906/",
  },
  {
    cite: "NHS. Physical activity guidelines for adults aged 19 to 64.",
    url: "https://www.nhs.uk/live-well/exercise/physical-activity-guidelines-for-adults-aged-19-to-64/",
  },
  {
    cite: "Dunstan DW, Kingwell BA, Larsen R, et al. Breaking up prolonged sitting reduces postprandial glucose and insulin responses. Diabetes Care. 2012;35(5):976–983.",
    url: "https://doi.org/10.2337/dc11-1931",
  },
  {
    cite: "Andersen LL, Saervoll CA, Mortensen OS, et al. Effectiveness of small daily amounts of progressive resistance training for frequent neck/shoulder pain: randomised controlled trial. Pain. 2011;152(2):440–446.",
    url: "https://doi.org/10.1016/j.pain.2010.11.016",
  },
  {
    cite: "Ekelund U, Steene-Johannessen J, Brown WJ, et al. Does physical activity attenuate, or even eliminate, the detrimental association of sitting time with mortality? A harmonised meta-analysis of data from more than 1 million men and women. Lancet. 2016;388(10051):1302–1310.",
    url: "https://doi.org/10.1016/S0140-6736(16)30370-1",
  },
] as const;

const en: PostCopy = {
  metaTitle: "Best Exercises for Desk Workers: 7 Moves for a Workday | Jalan PT",
  metaDescription:
    "The best exercises for desk workers, from walk breaks to band raises and chair squats. What WHO, the NHS and research say, and how to fit it around work.",
  h1: "Best exercises for desk workers: 7 moves that fit a workday",
  dek: "You sit for work. Fine. Here is what to do about it, in the order I would coach it.",
  updated: "Updated 22 October 2026",
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
    whatsappText: "Hi Susmit, I read the desk workers article and want to book a consultation",
    skip: "Skip to content",
    crumb: "Best exercises for desk workers",
  },
  intro: [
    "Most desk days look the same. Long sits. Short walks. A stiff neck by four.",
    "The guidance is simple. WHO and the NHS both say: sit less, break up long sits, and train every major muscle group on at least two days a week.{1}{3}",
    "None of this needs a gym. A chair, a desk, a backpack and a resistance band will do.",
  ],
  listHeading: "The 7 best exercises for desk workers",
  items: [
    {
      name: "Walk breaks, every 20 to 30 minutes",
      why: "The cheapest move on this list. In a small lab study, adults who got up for 2-minute walks every 20 minutes had lower blood sugar and insulin after a drink than when they sat straight through.{4}",
      how: "Set a timer. Stand, walk to the far tap, take one flight of stairs. Calls on your feet count.",
      dose: "2 to 3 minutes. Every 20 to 30 minutes of sitting.",
    },
    {
      name: "Band lateral raise, for the neck and shoulders",
      why: "In a randomised trial of office workers with frequent neck and shoulder pain, 2 minutes a day of band lateral raises, 5 days a week for 10 weeks, reduced pain compared with a control group.{5}",
      how: "Stand on the band. Arms slightly forward, elbows soft. Up to shoulder height in about 2 seconds. Down in about 2.",
      dose: "One set, about 2 minutes, most workdays. Heavier band when it gets easy.",
    },
    {
      name: "Sit-to-stand (chair squat)",
      why: "Legs and hips are the biggest muscles you own, and a desk uses them least. This is a squat with the chair as your depth check.",
      how: "Feet hip-width. Sit back until you touch the chair. Don't flop. Stand up through the whole foot.",
      dose: "3 sets of 8 to 12. Hold a backpack when 12 is easy.",
    },
    {
      name: "Backpack hip hinge",
      why: "Trains the back of the body: glutes, hamstrings, back. The NHS lists legs, hips and back among the major muscle groups to strengthen.{3}",
      how: "Hug a loaded backpack. Soft knees. Push the hips back, back flat, until the hamstrings tighten. Stand tall.",
      dose: "3 sets of 10.",
    },
    {
      name: "Band or backpack row",
      why: "Typing keeps your arms in front of you for hours. A row trains the other direction: the upper back.",
      how: "Band round a table leg or door handle. Pull the elbows to your ribs. Pause. Return slow.",
      dose: "3 sets of 10 to 15.",
    },
    {
      name: "Desk push-up (incline push-up)",
      why: "Chest, shoulders and arms, which are also on the NHS list.{3} The desk sets the difficulty. Higher is easier.",
      how: "Hands on a sturdy desk edge. Body in one line. Chest to the edge. Push away.",
      dose: "3 sets. Stop 2 reps before your form breaks.",
    },
    {
      name: "Half-kneeling hip flexor stretch",
      why: "After a long sit, many people feel tight at the front of the hip. It is the stretch we close the hour with.",
      how: "One knee on a cushion. Squeeze the glute on that side. Shift forward a little. Breathe.",
      dose: "30 to 60 seconds a side. After the strength work, or after a long call.",
    },
  ],
  enoughHeading: "How much is enough?",
  enough: [
    "WHO: 150 to 300 minutes a week of moderate activity, plus muscle-strengthening on 2 or more days.{1}{2}",
    "If you sit a lot, more helps. A meta-analysis of over a million adults found that about 60 to 75 minutes a day of moderate activity appeared to remove the higher risk of death linked to sitting more than 8 hours a day.{6} That is an observational finding, not a promise.",
    "Don't start there. Start with the breaks and two strength days.",
  ],
  sampleHeading: "A desk-day week",
  sampleLabel: "Sample only. Not a prescription. Adjust it to your body and your diary.",
  sample: [
    "Every workday: walk breaks, and one set of band raises.",
    "Two days a week, for example Monday and Thursday: moves 3 to 6, three rounds.",
    "After the last call: the hip flexor stretch.",
  ],
  coachedHeading: "Want it coached live?",
  coached: [
    "This is the work we coach live on Google Meet, Zoom or FaceTime. From Pune. In Hindi or English. On IST.",
    "Iron Hour is a 60-minute 1:1 session. Lean Reset is 20 sessions a month, 1:1. Open Floor is a small group.",
    "Coming back after a long break? Return is 45 minutes, 12 alternate-day sessions a month.",
    "Not sure? Start with a 30-minute consultation. It is a conversation, not training. Booking holds a time. The fee is agreed directly.",
  ],
  safetyHeading: "Before you start",
  safety:
    "General information, not medical advice. Pain that is sharp, spreading or getting worse, or a medical condition: check with a doctor or physiotherapist first. The NHS advises talking to a GP first if you have not exercised for some time.{3}",
};

const ar: PostCopy = {
  metaTitle: "أفضل التمارين لموظفي المكاتب: 7 حركات تناسب يوم العمل | Jalan PT",
  metaDescription:
    "أفضل التمارين لمن يعمل على المكتب: فواصل المشي، رفع الذراعين بالشريط المطاطي، القرفصاء على الكرسي. ماذا تقول منظمة الصحة العالمية وNHS والأبحاث.",
  h1: "أفضل التمارين لموظفي المكاتب: 7 حركات تناسب يوم العمل",
  dek: "عملك يتطلب الجلوس. لا بأس. هذا ما تفعله حيال ذلك، بالترتيب الذي أدرّبه.",
  updated: "تم التحديث في 22 أكتوبر 2026",
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
    whatsappText: "مرحباً سوسميت، قرأت مقال موظفي المكاتب وأريد حجز استشارة",
    skip: "انتقل إلى المحتوى",
    crumb: "أفضل التمارين لموظفي المكاتب",
  },
  intro: [
    "معظم أيام المكتب متشابهة. جلوس طويل. مشي قليل. رقبة متيبّسة عند الرابعة.",
    "الإرشادات بسيطة. منظمة الصحة العالمية وNHS تقولان: اجلس أقل، قطّع فترات الجلوس الطويلة، ودرّب كل مجموعة عضلية رئيسية يومين على الأقل في الأسبوع.{1}{3}",
    "لا تحتاج إلى نادٍ رياضي. يكفي كرسي ومكتب وحقيبة ظهر وشريط مقاومة.",
  ],
  listHeading: "أفضل 7 تمارين لموظفي المكاتب",
  items: [
    {
      name: "فواصل مشي كل 20 إلى 30 دقيقة",
      why: "أرخص حركة في القائمة. في دراسة مخبرية صغيرة، البالغون الذين قاموا للمشي دقيقتين كل 20 دقيقة كان لديهم سكر دم وإنسولين أقل بعد مشروب، مقارنةً بالجلوس المتواصل.{4}",
      how: "اضبط مؤقتاً. قف، امشِ إلى أبعد صنبور، اصعد طابقاً واحداً. المكالمات وأنت واقف تُحتسب.",
      dose: "دقيقتان إلى 3 دقائق، كل 20 إلى 30 دقيقة من الجلوس.",
    },
    {
      name: "رفع جانبي بالشريط المطاطي للرقبة والكتفين",
      why: "في تجربة عشوائية على موظفي مكاتب يعانون ألماً متكرراً في الرقبة والكتف، دقيقتان يومياً من الرفع الجانبي بالشريط، 5 أيام أسبوعياً لمدة 10 أسابيع، خفّفت الألم مقارنةً بمجموعة ضابطة.{5}",
      how: "قف على الشريط. الذراعان للأمام قليلاً والمرفقان مرتخيان. ارفع إلى مستوى الكتف في نحو ثانيتين، وأنزل في نحو ثانيتين.",
      dose: "مجموعة واحدة، نحو دقيقتين، في معظم أيام العمل. شريط أثقل عندما يصبح سهلاً.",
    },
    {
      name: "الجلوس والوقوف (قرفصاء الكرسي)",
      why: "الساقان والوركان أكبر عضلاتك، والمكتب يستخدمها أقل من غيرها. هذه قرفصاء والكرسي يضبط العمق.",
      how: "القدمان بعرض الوركين. اجلس للخلف حتى تلمس الكرسي دون أن ترتمي. قف بالضغط على القدم كاملة.",
      dose: "3 مجموعات من 8 إلى 12. احمل حقيبة الظهر عندما تصبح 12 سهلة.",
    },
    {
      name: "انحناء الورك مع حقيبة الظهر",
      why: "يدرّب الجهة الخلفية من الجسم: الألوية وأوتار الركبة والظهر. تذكر NHS الساقين والوركين والظهر ضمن المجموعات العضلية الرئيسية.{3}",
      how: "احتضن حقيبة ظهر محمّلة. ركبتان مرتخيتان. ادفع الوركين للخلف والظهر مستقيم حتى تشعر بشدّ خلف الفخذ. ثم قف مستقيماً.",
      dose: "3 مجموعات من 10.",
    },
    {
      name: "السحب بالشريط أو بحقيبة الظهر",
      why: "الكتابة تُبقي ذراعيك أمامك لساعات. السحب يدرّب الاتجاه المعاكس: أعلى الظهر.",
      how: "لفّ الشريط حول رجل طاولة أو مقبض باب. اسحب المرفقين نحو الأضلاع. توقّف لحظة. ارجع ببطء.",
      dose: "3 مجموعات من 10 إلى 15.",
    },
    {
      name: "تمرين الضغط على المكتب (ضغط مائل)",
      why: "الصدر والكتفان والذراعان، وهي أيضاً على قائمة NHS.{3} المكتب يحدّد الصعوبة: كلما ارتفع كان أسهل.",
      how: "اليدان على حافة مكتب ثابت. الجسم في خط واحد. الصدر نحو الحافة. ثم ادفع.",
      dose: "3 مجموعات. توقّف قبل أن يختلّ الأداء بتكرارين.",
    },
    {
      name: "إطالة ثنية الورك على ركبة واحدة",
      why: "بعد جلوس طويل، يشعر كثيرون بشدّ في مقدمة الورك. هذه الإطالة التي نختم بها الساعة.",
      how: "ركبة على وسادة. شدّ عضلة الألية في الجهة نفسها. انتقل للأمام قليلاً. تنفّس.",
      dose: "30 إلى 60 ثانية لكل جهة. بعد تمارين القوة أو بعد مكالمة طويلة.",
    },
  ],
  enoughHeading: "كم يكفي؟",
  enough: [
    "منظمة الصحة العالمية: 150 إلى 300 دقيقة أسبوعياً من النشاط المعتدل، مع تمارين تقوية يومين أو أكثر.{1}{2}",
    "إن كنت تجلس كثيراً، فالمزيد يفيد. وجد تحليل تجميعي لأكثر من مليون بالغ أن نحو 60 إلى 75 دقيقة يومياً من النشاط المعتدل بدت كافية لإزالة ارتفاع خطر الوفاة المرتبط بالجلوس أكثر من 8 ساعات يومياً.{6} هذه نتيجة رصدية، وليست وعداً.",
    "لا تبدأ من هناك. ابدأ بالفواصل ويومي تقوية.",
  ],
  sampleHeading: "أسبوع يوم المكتب",
  sampleLabel: "نموذج فقط. ليس وصفة. عدّله بحسب جسمك وجدولك.",
  sample: [
    "كل يوم عمل: فواصل المشي، ومجموعة واحدة من الرفع بالشريط.",
    "يومان في الأسبوع، مثلاً الاثنين والخميس: الحركات من 3 إلى 6، ثلاث جولات.",
    "بعد آخر مكالمة: إطالة ثنية الورك.",
  ],
  coachedHeading: "تريد تدريباً مباشراً؟",
  coached: [
    "هذا هو العمل الذي ندرّبه مباشرة عبر Google Meet أو Zoom أو FaceTime. من بونه. بالهندية أو الإنجليزية. بتوقيت الهند.",
    "Iron Hour جلسة فردية مدتها 60 دقيقة. Lean Reset عشرون جلسة فردية في الشهر. Open Floor مجموعة صغيرة.",
    "عائد بعد انقطاع طويل؟ Return جلسات مدتها 45 دقيقة، 12 جلسة في الشهر يوماً بعد يوم.",
    "لست متأكداً؟ ابدأ باستشارة مدتها 30 دقيقة. إنها محادثة، وليست تدريباً. الحجز يثبّت الموعد. والرسوم يُتفق عليها مباشرة.",
  ],
  safetyHeading: "قبل أن تبدأ",
  safety:
    "معلومات عامة، وليست نصيحة طبية. إن كان لديك ألم حاد أو منتشر أو يزداد، أو حالة صحية: راجع طبيباً أو أخصائي علاج طبيعي أولاً. تنصح NHS بالتحدث إلى الطبيب أولاً إن لم تمارس الرياضة منذ مدة.{3}",
};

const hi: PostCopy = {
  metaTitle: "डेस्क पर काम करने वालों के लिए सबसे अच्छी एक्सरसाइज़: 7 मूव | Jalan PT",
  metaDescription:
    "डेस्क जॉब वालों के लिए सबसे अच्छी एक्सरसाइज़: वॉक ब्रेक, बैंड रेज़, चेयर स्क्वॉट। WHO, NHS और रिसर्च क्या कहते हैं, और काम के बीच इन्हें कैसे करें।",
  h1: "डेस्क पर काम करने वालों के लिए सबसे अच्छी एक्सरसाइज़: काम के दिन में फिट होने वाले 7 मूव",
  dek: "काम बैठकर होता है। ठीक है। इसके बारे में क्या करना है, उसी क्रम में जिसमें मैं कोच करता हूँ।",
  updated: "अपडेट: 22 अक्टूबर 2026",
  byline: "लेखक: सुस्मित जालान, कोच, Jalan PT, पुणे।",
  credentialsNote:
    "ASCA लेवल 1 (स्ट्रेंथ एंड कंडीशनिंग) और ACE (एनाटॉमी और बायोमैकेनिक्स)। ये कोच के क्रेडेंशियल हैं। इनमें से कोई भी संस्था इस बिज़नेस या इस लेख का समर्थन नहीं करती।",
  labels: {
    home: "होम",
    blog: "ब्लॉग",
    why: "क्यों",
    how: "कैसे",
    dose: "कितना",
    sources: "स्रोत",
    readIn: "दूसरी भाषा में पढ़ें",
    programs: "प्रोग्राम देखें",
    whatsapp: "WhatsApp पर पूछें",
    whatsappText: "Hi Susmit, मैंने डेस्क वर्कर्स वाला लेख पढ़ा, मुझे कंसल्टेशन बुक करनी है",
    skip: "सामग्री पर जाएँ",
    crumb: "डेस्क वर्कर्स के लिए एक्सरसाइज़",
  },
  intro: [
    "ज़्यादातर डेस्क वाले दिन एक जैसे होते हैं। लंबा बैठना। थोड़ा चलना। चार बजे तक गर्दन अकड़ी हुई।",
    "गाइडलाइन सीधी है। WHO और NHS दोनों कहते हैं: कम बैठें, लंबे समय तक बैठने को बीच-बीच में तोड़ें, और हफ़्ते में कम से कम दो दिन हर बड़े मसल ग्रुप को ट्रेन करें।{1}{3}",
    "इसके लिए जिम ज़रूरी नहीं। एक कुर्सी, एक डेस्क, एक बैकपैक और एक रेज़िस्टेंस बैंड काफ़ी है।",
  ],
  listHeading: "डेस्क वर्कर्स के लिए 7 सबसे अच्छी एक्सरसाइज़",
  items: [
    {
      name: "हर 20 से 30 मिनट में वॉक ब्रेक",
      why: "इस लिस्ट का सबसे आसान मूव। एक छोटी लैब स्टडी में, जो वयस्क हर 20 मिनट पर 2 मिनट चले, उनका ड्रिंक के बाद ब्लड शुगर और इंसुलिन लगातार बैठे रहने की तुलना में कम रहा।{4}",
      how: "टाइमर लगाइए। उठिए, दूर वाले नल तक जाइए, एक मंज़िल सीढ़ी चढ़िए। खड़े होकर की गई कॉल भी गिनी जाती है।",
      dose: "2 से 3 मिनट। हर 20 से 30 मिनट बैठने के बाद।",
    },
    {
      name: "बैंड लेटरल रेज़, गर्दन और कंधों के लिए",
      why: "बार-बार गर्दन और कंधे के दर्द वाले ऑफ़िस कर्मचारियों पर एक रैंडमाइज़्ड ट्रायल में, रोज़ 2 मिनट बैंड लेटरल रेज़, हफ़्ते में 5 दिन, 10 हफ़्ते तक करने से कंट्रोल ग्रुप की तुलना में दर्द कम हुआ।{5}",
      how: "बैंड पर खड़े हों। हाथ थोड़ा आगे, कोहनी ढीली। लगभग 2 सेकंड में कंधे की ऊँचाई तक उठाएँ, लगभग 2 में नीचे लाएँ।",
      dose: "एक सेट, लगभग 2 मिनट, ज़्यादातर काम के दिनों में। आसान लगे तो भारी बैंड।",
    },
    {
      name: "सिट-टू-स्टैंड (चेयर स्क्वॉट)",
      why: "पैर और हिप्स आपकी सबसे बड़ी मांसपेशियाँ हैं, और डेस्क इन्हें सबसे कम इस्तेमाल करती है। यह स्क्वॉट है, कुर्सी गहराई बताती है।",
      how: "पैर हिप-चौड़ाई पर। पीछे बैठें जब तक कुर्सी छू न जाए। धम्म से न बैठें। पूरे पैर से ज़ोर लगाकर खड़े हों।",
      dose: "8 से 12 के 3 सेट। 12 आसान लगे तो बैकपैक पकड़ें।",
    },
    {
      name: "बैकपैक हिप हिंज",
      why: "शरीर का पिछला हिस्सा: ग्लूट्स, हैमस्ट्रिंग, पीठ। NHS पैर, हिप्स और पीठ को उन बड़े मसल ग्रुप में गिनता है जिन्हें मज़बूत करना है।{3}",
      how: "भरा हुआ बैकपैक सीने से लगाएँ। घुटने ढीले। पीठ सीधी रखते हुए हिप्स पीछे धकेलें, जब तक हैमस्ट्रिंग में खिंचाव न लगे। सीधे खड़े हों।",
      dose: "10 के 3 सेट।",
    },
    {
      name: "बैंड या बैकपैक रो",
      why: "टाइपिंग में हाथ घंटों आगे रहते हैं। रो उल्टी दिशा को ट्रेन करता है: ऊपरी पीठ।",
      how: "बैंड को टेबल के पाए या दरवाज़े के हैंडल पर लपेटें। कोहनियाँ पसलियों तक खींचें। रुकें। धीरे वापस।",
      dose: "10 से 15 के 3 सेट।",
    },
    {
      name: "डेस्क पुश-अप (इनक्लाइन पुश-अप)",
      why: "छाती, कंधे और बाँहें, ये भी NHS की लिस्ट में हैं।{3} डेस्क कठिनाई तय करती है। ऊँची डेस्क यानी आसान।",
      how: "हाथ मज़बूत डेस्क के किनारे पर। शरीर एक सीधी लाइन में। छाती किनारे तक। फिर धकेलें।",
      dose: "3 सेट। फ़ॉर्म बिगड़ने से 2 रेप पहले रुकें।",
    },
    {
      name: "हाफ़-नीलिंग हिप फ़्लेक्सर स्ट्रेच",
      why: "लंबे समय बैठने के बाद बहुत लोगों को हिप के आगे जकड़न लगती है। इसी स्ट्रेच से हम घंटा ख़त्म करते हैं।",
      how: "एक घुटना कुशन पर। उसी तरफ़ का ग्लूट कसें। थोड़ा आगे खिसकें। साँस लें।",
      dose: "हर तरफ़ 30 से 60 सेकंड। स्ट्रेंथ के बाद, या लंबी कॉल के बाद।",
    },
  ],
  enoughHeading: "कितना काफ़ी है?",
  enough: [
    "WHO: हफ़्ते में 150 से 300 मिनट मध्यम गतिविधि, और 2 या ज़्यादा दिन मसल-स्ट्रेंथनिंग।{1}{2}",
    "अगर आप बहुत बैठते हैं, तो ज़्यादा मदद करता है। दस लाख से ज़्यादा वयस्कों के एक मेटा-एनालिसिस में पाया गया कि रोज़ लगभग 60 से 75 मिनट मध्यम गतिविधि से, दिन में 8 घंटे से ज़्यादा बैठने से जुड़ा मृत्यु का बढ़ा जोखिम ख़त्म होता दिखा।{6} यह ऑब्ज़र्वेशनल नतीजा है, वादा नहीं।",
    "वहाँ से शुरू न करें। ब्रेक और हफ़्ते के दो स्ट्रेंथ दिनों से शुरू करें।",
  ],
  sampleHeading: "डेस्क वाला एक हफ़्ता",
  sampleLabel: "सिर्फ़ सैंपल। प्रिस्क्रिप्शन नहीं। अपने शरीर और अपने शेड्यूल के हिसाब से बदलें।",
  sample: [
    "हर काम के दिन: वॉक ब्रेक, और बैंड रेज़ का एक सेट।",
    "हफ़्ते में दो दिन, जैसे सोमवार और गुरुवार: मूव 3 से 6, तीन राउंड।",
    "आख़िरी कॉल के बाद: हिप फ़्लेक्सर स्ट्रेच।",
  ],
  coachedHeading: "लाइव कोचिंग चाहिए?",
  coached: [
    "यही काम हम Google Meet, Zoom या FaceTime पर लाइव कोच करते हैं। पुणे से। हिंदी या अंग्रेज़ी में। IST पर।",
    "Iron Hour 60 मिनट का 1:1 सेशन है। Lean Reset महीने में 20 सेशन, 1:1। Open Floor छोटा ग्रुप है।",
    "लंबे ब्रेक के बाद वापसी? Return 45 मिनट का है, महीने में 12 सेशन, एक दिन छोड़कर।",
    "पक्का नहीं? 30 मिनट की कंसल्टेशन से शुरू करें। यह बातचीत है, ट्रेनिंग नहीं। बुकिंग समय होल्ड करती है। फ़ीस सीधे तय होती है।",
  ],
  safetyHeading: "शुरू करने से पहले",
  safety:
    "यह सामान्य जानकारी है, मेडिकल सलाह नहीं। तेज़, फैलता हुआ या बढ़ता दर्द हो, या कोई मेडिकल कंडीशन हो: पहले डॉक्टर या फ़िज़ियोथेरेपिस्ट से मिलें। NHS की सलाह है कि अगर आपने कुछ समय से व्यायाम नहीं किया है तो पहले डॉक्टर से बात करें।{3}",
};

const es: PostCopy = {
  metaTitle: "Mejores ejercicios para quien trabaja sentado: 7 movimientos | Jalan PT",
  metaDescription:
    "Los mejores ejercicios para trabajadores de oficina: pausas para caminar, elevaciones con banda y sentadilla a la silla. Lo que dicen la OMS, el NHS y la ciencia.",
  h1: "Los mejores ejercicios para quien trabaja en un escritorio: 7 movimientos que caben en la jornada",
  dek: "Trabajas sentado. Vale. Esto es lo que puedes hacer, en el orden en que lo entrenaría.",
  updated: "Actualizado el 22 de octubre de 2026",
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
    whatsapp: "Pregunta por WhatsApp",
    whatsappText: "Hola Susmit, leí el artículo para trabajadores de oficina y quiero reservar una consulta",
    skip: "Saltar al contenido",
    crumb: "Ejercicios para trabajo de escritorio",
  },
  intro: [
    "Casi todos los días de oficina se parecen. Mucho tiempo sentado. Paseos cortos. El cuello rígido a las cuatro.",
    "La pauta es sencilla. La OMS y el NHS coinciden: siéntate menos, interrumpe los ratos largos sentado y entrena todos los grupos musculares principales al menos dos días por semana.{1}{3}",
    "No hace falta gimnasio. Basta con una silla, un escritorio, una mochila y una banda elástica.",
  ],
  listHeading: "Los 7 mejores ejercicios para trabajadores de oficina",
  items: [
    {
      name: "Pausas para caminar, cada 20 a 30 minutos",
      why: "El movimiento más barato de la lista. En un pequeño estudio de laboratorio, los adultos que se levantaban a caminar 2 minutos cada 20 minutos tuvieron menos glucosa e insulina tras una bebida que cuando permanecían sentados sin parar.{4}",
      how: "Pon un temporizador. Levántate, ve al grifo más lejano, sube un tramo de escaleras. Las llamadas de pie cuentan.",
      dose: "2 a 3 minutos. Cada 20 a 30 minutos sentado.",
    },
    {
      name: "Elevación lateral con banda, para cuello y hombros",
      why: "En un ensayo aleatorizado con oficinistas con dolor frecuente de cuello y hombro, 2 minutos al día de elevaciones laterales con banda, 5 días por semana durante 10 semanas, redujeron el dolor frente a un grupo control.{5}",
      how: "Pisa la banda. Brazos un poco hacia delante, codos sueltos. Sube hasta la altura del hombro en unos 2 segundos. Baja en unos 2.",
      dose: "Una serie, unos 2 minutos, la mayoría de días laborables. Banda más dura cuando sea fácil.",
    },
    {
      name: "Sentarse y levantarse (sentadilla a la silla)",
      why: "Piernas y caderas son tus músculos más grandes, y el escritorio es lo que menos los usa. Es una sentadilla con la silla como control de profundidad.",
      how: "Pies al ancho de cadera. Siéntate hacia atrás hasta tocar la silla, sin dejarte caer. Levántate empujando con todo el pie.",
      dose: "3 series de 8 a 12. Sujeta una mochila cuando 12 sea fácil.",
    },
    {
      name: "Bisagra de cadera con mochila",
      why: "Entrena la parte de atrás del cuerpo: glúteos, isquiotibiales y espalda. El NHS incluye piernas, caderas y espalda entre los grupos musculares principales.{3}",
      how: "Abraza una mochila cargada. Rodillas sueltas. Lleva la cadera atrás, espalda plana, hasta notar los isquiotibiales. Vuelve a subir alto.",
      dose: "3 series de 10.",
    },
    {
      name: "Remo con banda o con mochila",
      why: "Al teclear, los brazos pasan horas delante del cuerpo. El remo entrena la dirección contraria: la parte alta de la espalda.",
      how: "Banda alrededor de una pata de mesa o del pomo de una puerta. Lleva los codos a las costillas. Pausa. Vuelve despacio.",
      dose: "3 series de 10 a 15.",
    },
    {
      name: "Flexión en el escritorio (flexión inclinada)",
      why: "Pecho, hombros y brazos, también en la lista del NHS.{3} El escritorio marca la dificultad: cuanto más alto, más fácil.",
      how: "Manos en el borde de un escritorio firme. Cuerpo en línea. Pecho al borde. Empuja.",
      dose: "3 series. Para 2 repeticiones antes de que se rompa la técnica.",
    },
    {
      name: "Estiramiento de flexores de cadera, con una rodilla en el suelo",
      why: "Tras mucho rato sentado, mucha gente nota tensión en la parte delantera de la cadera. Con este estiramiento cerramos la hora.",
      how: "Una rodilla sobre un cojín. Aprieta el glúteo de ese lado. Desplázate un poco hacia delante. Respira.",
      dose: "30 a 60 segundos por lado. Después de la fuerza o de una llamada larga.",
    },
  ],
  enoughHeading: "¿Cuánto es suficiente?",
  enough: [
    "OMS: de 150 a 300 minutos semanales de actividad moderada, más fortalecimiento muscular 2 o más días.{1}{2}",
    "Si pasas mucho tiempo sentado, más ayuda. Un metaanálisis con más de un millón de adultos encontró que unos 60 a 75 minutos diarios de actividad moderada parecían eliminar el mayor riesgo de muerte asociado a estar sentado más de 8 horas al día.{6} Es un hallazgo observacional, no una promesa.",
    "No empieces por ahí. Empieza por las pausas y dos días de fuerza.",
  ],
  sampleHeading: "Una semana de oficina",
  sampleLabel: "Solo un ejemplo. No es una prescripción. Ajústalo a tu cuerpo y a tu agenda.",
  sample: [
    "Cada día laborable: pausas para caminar y una serie de elevaciones con banda.",
    "Dos días por semana, por ejemplo lunes y jueves: movimientos 3 a 6, tres vueltas.",
    "Tras la última llamada: el estiramiento de flexores de cadera.",
  ],
  coachedHeading: "¿Lo quieres con entrenador en directo?",
  coached: [
    "Este es el trabajo que entrenamos en directo por Google Meet, Zoom o FaceTime. Desde Pune. En hindi o inglés. En horario IST.",
    "Iron Hour es una sesión 1:1 de 60 minutos. Lean Reset son 20 sesiones al mes, 1:1. Open Floor es un grupo reducido.",
    "¿Vuelves tras un parón largo? Return son sesiones de 45 minutos, 12 al mes en días alternos.",
    "¿Dudas? Empieza con una consulta de 30 minutos. Es una conversación, no un entrenamiento. Reservar fija una hora. La tarifa se acuerda directamente.",
  ],
  safetyHeading: "Antes de empezar",
  safety:
    "Información general, no consejo médico. Si tienes un dolor agudo, que se extiende o que empeora, o una afección médica, consulta antes con un médico o fisioterapeuta. El NHS aconseja hablar primero con el médico si llevas tiempo sin hacer ejercicio.{3}",
};

const zh: PostCopy = {
  metaTitle: "久坐上班族的最佳运动：适合工作日的 7 个动作 | Jalan PT",
  metaDescription:
    "适合办公室久坐人群的最佳运动：起身走动、弹力带侧平举、椅子深蹲等。世卫组织、英国NHS和研究怎么说，以及如何在工作间隙完成。",
  h1: "久坐上班族的最佳运动：适合工作日的 7 个动作",
  dek: "你的工作需要坐着。没关系。下面是应对方法，按我带课的顺序排列。",
  updated: "更新于 2026 年 10 月 22 日",
  byline: "作者：Susmit Jalan，Jalan PT 教练，浦那。",
  credentialsNote:
    "ASCA 一级（体能训练）和 ACE（解剖学与生物力学）。这些是教练本人持有的资质。两家机构均未为本业务或本文背书。",
  labels: {
    home: "首页",
    blog: "博客",
    why: "为什么",
    how: "怎么做",
    dose: "做多少",
    sources: "参考资料",
    readIn: "其他语言",
    programs: "查看课程",
    whatsapp: "通过 WhatsApp 咨询",
    whatsappText: "Hi Susmit，我读了久坐上班族那篇文章，想预约咨询",
    skip: "跳到正文",
    crumb: "久坐上班族的最佳运动",
  },
  intro: [
    "大多数坐办公室的日子都差不多。久坐。走动很少。到下午四点脖子就僵了。",
    "建议其实很简单。世卫组织和英国 NHS 都说：少坐，打断长时间久坐，每周至少两天训练所有主要肌群。{1}{3}",
    "这些都不需要健身房。一把椅子、一张桌子、一个背包和一根弹力带就够了。",
  ],
  listHeading: "久坐上班族的 7 个最佳运动",
  items: [
    {
      name: "每 20 到 30 分钟起身走动",
      why: "清单上成本最低的动作。在一项小型实验室研究中，每 20 分钟起身步行 2 分钟的成年人，喝下测试饮料后的血糖和胰岛素低于一直坐着的时候。{4}",
      how: "定个闹钟。站起来，走到最远的水龙头，爬一层楼梯。站着打电话也算。",
      dose: "2 到 3 分钟。每坐 20 到 30 分钟一次。",
    },
    {
      name: "弹力带侧平举，照顾颈部和肩膀",
      why: "一项针对颈肩经常疼痛的办公室员工的随机对照试验中，每天 2 分钟弹力带侧平举，每周 5 天，持续 10 周，与对照组相比疼痛减轻。{5}",
      how: "踩住弹力带。手臂略向前，肘部放松。约 2 秒抬到肩高，约 2 秒放下。",
      dose: "一组，约 2 分钟，大多数工作日。变轻松了就换更重的弹力带。",
    },
    {
      name: "坐站起立（椅子深蹲）",
      why: "腿和髋部是你最大的肌肉，而坐办公桌最少用到它们。这就是深蹲，椅子帮你确认深度。",
      how: "双脚与髋同宽。向后坐到碰到椅子，不要一屁股坐下。用整个脚掌发力站起。",
      dose: "3 组，每组 8 到 12 次。12 次变轻松时抱一个背包。",
    },
    {
      name: "背包髋铰链",
      why: "训练身体后侧：臀部、腘绳肌和背部。NHS 把腿、髋和背列为需要加强的主要肌群。{3}",
      how: "抱住装了东西的背包。膝盖微屈。背部保持平直，髋部向后推，直到大腿后侧有拉紧感。然后站直。",
      dose: "3 组，每组 10 次。",
    },
    {
      name: "弹力带或背包划船",
      why: "打字时双臂一连几个小时都在身体前方。划船训练的是相反方向：上背部。",
      how: "把弹力带绕在桌腿或门把手上。把肘部拉向肋骨。停一下。慢慢还原。",
      dose: "3 组，每组 10 到 15 次。",
    },
    {
      name: "桌边俯卧撑（上斜俯卧撑）",
      why: "胸、肩和手臂，同样在 NHS 的清单上。{3} 桌子决定难度：越高越容易。",
      how: "双手撑在稳固的桌沿。身体成一条直线。胸口贴近桌沿。再推开。",
      dose: "3 组。在动作变形前 2 次就停。",
    },
    {
      name: "单膝跪姿髋屈肌拉伸",
      why: "久坐之后，很多人会觉得髋部前侧发紧。这也是我们每节课结束时做的拉伸。",
      how: "一侧膝盖跪在垫子上。收紧同侧臀部。身体稍微前移。呼吸。",
      dose: "每侧 30 到 60 秒。力量训练后，或长时间通话后。",
    },
  ],
  enoughHeading: "做多少才够？",
  enough: [
    "世卫组织：每周 150 到 300 分钟中等强度活动，外加每周 2 天或以上的肌肉强化训练。{1}{2}",
    "如果你坐得很多，多动更有帮助。一项涵盖一百多万成年人的荟萃分析发现，每天约 60 到 75 分钟的中等强度活动，似乎可以消除每天久坐超过 8 小时带来的较高死亡风险。{6} 这是观察性研究的发现，不是保证。",
    "别一上来就这样。先从起身走动和每周两天力量训练开始。",
  ],
  sampleHeading: "办公室一周安排",
  sampleLabel: "仅为示例，并非处方。请根据你的身体和日程调整。",
  sample: [
    "每个工作日：起身走动，加一组弹力带侧平举。",
    "每周两天，例如周一和周四：动作 3 到 6，做三轮。",
    "最后一个电话之后：髋屈肌拉伸。",
  ],
  coachedHeading: "想要教练实时指导？",
  coached: [
    "这正是我们通过 Google Meet、Zoom 或 FaceTime 实时指导的内容。在浦那授课。使用印地语或英语。印度标准时间。",
    "Iron Hour 是 60 分钟一对一课程。Lean Reset 是每月 20 节一对一课程。Open Floor 是小组课。",
    "停练很久想重新开始？Return 每节 45 分钟，每月 12 节，隔天一次。",
    "还不确定？先约一次 30 分钟咨询。这是一次交流，不是训练。预约只是锁定时间，费用直接商定。",
  ],
  safetyHeading: "开始之前",
  safety:
    "本文为一般信息，不构成医疗建议。如有剧烈、扩散或加重的疼痛，或有健康问题，请先咨询医生或物理治疗师。NHS 建议，如果你已有一段时间没有运动，先和医生谈谈。{3}",
};

const ja: PostCopy = {
  metaTitle: "デスクワーカーに最適な運動：仕事の日に収まる7つの動き | Jalan PT",
  metaDescription:
    "デスクワークの人に最適な運動：歩く休憩、バンドでのサイドレイズ、椅子スクワットなど。WHO・英国NHS・研究が示すことと、仕事の合間での取り入れ方。",
  h1: "デスクワーカーに最適な運動：仕事の日に収まる7つの動き",
  dek: "仕事は座ってするもの。それでいい。ではどうするか。私が指導する順番で紹介します。",
  updated: "2026年10月22日更新",
  byline: "執筆：スシュミット・ジャラン（Jalan PT コーチ、プネー）",
  credentialsNote:
    "ASCA レベル1（ストレングス＆コンディショニング）、ACE（解剖学とバイオメカニクス）。これらはコーチ個人の資格です。いずれの団体も当事業や本記事を推薦・保証するものではありません。",
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
    whatsappText: "Hi Susmit、デスクワーカーの記事を読みました。相談を予約したいです",
    skip: "本文へスキップ",
    crumb: "デスクワーカーの運動",
  },
  intro: [
    "デスクの日はたいてい同じです。長く座る。少しだけ歩く。夕方4時には首がこっている。",
    "指針はシンプルです。WHOも英国NHSも、座る時間を減らし、長い座りっぱなしを区切り、週2日以上すべての主要な筋肉群を鍛えるよう勧めています。{1}{3}",
    "ジムは要りません。椅子、机、リュック、レジスタンスバンドがあれば十分です。",
  ],
  listHeading: "デスクワーカーに最適な7つの運動",
  items: [
    {
      name: "20〜30分ごとの歩く休憩",
      why: "このリストで一番手軽な動き。小規模な実験研究では、20分ごとに2分歩いた大人は、ずっと座っていたときより、飲料摂取後の血糖とインスリンが低くなりました。{4}",
      how: "タイマーをセット。立って、一番遠い水道まで歩く。階段を1階分上る。立ったままの通話もカウントします。",
      dose: "2〜3分。座って20〜30分ごとに。",
    },
    {
      name: "首と肩のためのバンド・サイドレイズ",
      why: "首や肩の痛みをよく感じる会社員を対象にしたランダム化比較試験で、1日2分のバンド・サイドレイズを週5日、10週間行うと、対照群に比べて痛みが軽くなりました。{5}",
      how: "バンドを踏む。腕はやや前、肘は軽く曲げる。約2秒で肩の高さまで上げ、約2秒で下ろす。",
      dose: "1セット約2分、ほとんどの勤務日に。楽になったら強いバンドへ。",
    },
    {
      name: "椅子からの立ち座り（チェアスクワット）",
      why: "脚と股関節は体で一番大きな筋肉で、デスクワークでは最も使われません。椅子を深さの目安にしたスクワットです。",
      how: "足は腰幅。椅子に触れるまで後ろに座る。ドスンと落ちない。足裏全体で押して立つ。",
      dose: "8〜12回を3セット。12回が楽ならリュックを抱えて。",
    },
    {
      name: "リュックでのヒップヒンジ",
      why: "体の後ろ側、つまりお尻、ハムストリングス、背中を鍛えます。NHSは脚・股関節・背中を、鍛えるべき主要な筋肉群に挙げています。{3}",
      how: "荷物を入れたリュックを胸に抱える。膝は軽く曲げる。背中をまっすぐ保ち、もも裏が張るまでお尻を後ろへ。まっすぐ立つ。",
      dose: "10回を3セット。",
    },
    {
      name: "バンドまたはリュックでのロウ",
      why: "タイピング中、腕は何時間も体の前にあります。ロウは逆方向、つまり背中の上部を鍛えます。",
      how: "バンドを机の脚かドアノブにかける。肘を肋骨へ引く。一瞬止める。ゆっくり戻す。",
      dose: "10〜15回を3セット。",
    },
    {
      name: "デスク・プッシュアップ（インクライン腕立て）",
      why: "胸・肩・腕。これもNHSのリストにあります。{3} 机が難易度を決めます。高いほど簡単です。",
      how: "しっかりした机の縁に手をつく。体を一直線に。胸を縁へ。押し返す。",
      dose: "3セット。フォームが崩れる2回手前で止める。",
    },
    {
      name: "片膝立ちの股関節屈筋ストレッチ",
      why: "長く座ったあと、股関節の前が張ると感じる人は多いです。セッションの最後に行うストレッチです。",
      how: "片膝をクッションにつく。同じ側のお尻を締める。少し前へ体重移動。呼吸する。",
      dose: "片側30〜60秒。筋トレの後、または長い通話の後に。",
    },
  ],
  enoughHeading: "どれくらいで十分？",
  enough: [
    "WHO：中強度の活動を週150〜300分、加えて週2日以上の筋力トレーニング。{1}{2}",
    "座る時間が長いなら、もっと動くほど良い。100万人以上の大人を対象にしたメタ分析では、1日約60〜75分の中強度の活動で、1日8時間以上座ることに伴う死亡リスクの上昇が見られなくなるようでした。{6} これは観察研究の結果で、約束ではありません。",
    "いきなりそこを目指さないこと。まずは休憩と週2日の筋トレから。",
  ],
  sampleHeading: "デスクワークの1週間",
  sampleLabel: "あくまでサンプルです。処方ではありません。体と予定に合わせて調整してください。",
  sample: [
    "毎勤務日：歩く休憩と、バンド・サイドレイズを1セット。",
    "週2日（例：月曜と木曜）：動き3〜6を3周。",
    "最後の通話の後：股関節屈筋ストレッチ。",
  ],
  coachedHeading: "ライブで指導を受けたい？",
  coached: [
    "これは私たちが Google Meet、Zoom、FaceTime でライブ指導している内容です。プネーから。ヒンディー語か英語で。インド標準時で。",
    "Iron Hour は60分の1対1セッション。Lean Reset は月20回の1対1。Open Floor は少人数グループです。",
    "長いブランクから再開するなら、Return は45分、月12回の隔日セッションです。",
    "迷ったら、まず30分の相談から。会話であって、トレーニングではありません。予約で時間を確保し、料金は直接相談して決めます。",
  ],
  safetyHeading: "始める前に",
  safety:
    "一般的な情報であり、医学的助言ではありません。鋭い痛み、広がる痛み、悪化する痛みがある場合や持病がある場合は、まず医師か理学療法士に相談してください。NHSは、しばらく運動していない場合はまず医師に相談するよう勧めています。{3}",
};

const gu: PostCopy = {
  metaTitle: "ડેસ્ક પર કામ કરનારાઓ માટે શ્રેષ્ઠ કસરતો: 7 મૂવ | Jalan PT",
  metaDescription:
    "ડેસ્ક જોબ કરનારાઓ માટે શ્રેષ્ઠ કસરતો: વૉક બ્રેક, બેન્ડ રેઝ, ચેર સ્ક્વૉટ. WHO, NHS અને સંશોધન શું કહે છે, અને કામની વચ્ચે તેને કેવી રીતે કરવી.",
  h1: "ડેસ્ક પર કામ કરનારાઓ માટે શ્રેષ્ઠ કસરતો: કામના દિવસમાં બંધબેસતા 7 મૂવ",
  dek: "કામ બેસીને થાય છે. ઠીક છે. તેના વિશે શું કરવું, એ જ ક્રમમાં જેમાં હું કોચ કરું છું.",
  updated: "અપડેટ: 22 ઑક્ટોબર 2026",
  byline: "લેખક: સુસ્મિત જાલાન, કોચ, Jalan PT, પુણે.",
  credentialsNote:
    "ASCA લેવલ 1 (સ્ટ્રેન્થ એન્ડ કન્ડિશનિંગ) અને ACE (એનાટોમી અને બાયોમિકેનિક્સ). આ કોચના ક્રેડેન્શિયલ છે. આમાંથી કોઈ સંસ્થા આ બિઝનેસ કે આ લેખને સમર્થન આપતી નથી.",
  labels: {
    home: "હોમ",
    blog: "બ્લૉગ",
    why: "કેમ",
    how: "કેવી રીતે",
    dose: "કેટલું",
    sources: "સ્રોત",
    readIn: "બીજી ભાષામાં વાંચો",
    programs: "પ્રોગ્રામ જુઓ",
    whatsapp: "WhatsApp પર પૂછો",
    whatsappText: "Hi Susmit, મેં ડેસ્ક વર્કર્સ વાળો લેખ વાંચ્યો, મારે કન્સલ્ટેશન બુક કરવી છે",
    skip: "સામગ્રી પર જાઓ",
    crumb: "ડેસ્ક વર્કર્સ માટે કસરતો",
  },
  intro: [
    "મોટાભાગના ડેસ્કના દિવસો સરખા હોય છે. લાંબું બેસવું. થોડું ચાલવું. ચાર વાગ્યા સુધીમાં ગરદન જકડાઈ જાય.",
    "માર્ગદર્શન સીધું છે. WHO અને NHS બંને કહે છે: ઓછું બેસો, લાંબા સમય સુધી બેસવાનું વચ્ચે-વચ્ચે તોડો, અને અઠવાડિયામાં ઓછામાં ઓછા બે દિવસ દરેક મુખ્ય સ્નાયુ જૂથને ટ્રેન કરો.{1}{3}",
    "આ માટે જિમની જરૂર નથી. એક ખુરશી, એક ડેસ્ક, એક બેકપૅક અને એક રેઝિસ્ટન્સ બેન્ડ પૂરતાં છે.",
  ],
  listHeading: "ડેસ્ક વર્કર્સ માટે 7 શ્રેષ્ઠ કસરતો",
  items: [
    {
      name: "દર 20 થી 30 મિનિટે વૉક બ્રેક",
      why: "આ યાદીનો સૌથી સસ્તો મૂવ. એક નાના લૅબ અભ્યાસમાં, જે પુખ્તો દર 20 મિનિટે 2 મિનિટ ચાલ્યા, તેમનું પીણા પછી બ્લડ શુગર અને ઇન્સ્યુલિન સતત બેસી રહેવા કરતાં ઓછું રહ્યું.{4}",
      how: "ટાઇમર મૂકો. ઊભા થાઓ, દૂરના નળ સુધી જાઓ, એક માળ દાદર ચડો. ઊભા રહીને કરેલા કૉલ પણ ગણાય.",
      dose: "2 થી 3 મિનિટ. દર 20 થી 30 મિનિટ બેઠા પછી.",
    },
    {
      name: "બેન્ડ લેટરલ રેઝ, ગરદન અને ખભા માટે",
      why: "વારંવાર ગરદન અને ખભાના દુખાવાવાળા ઑફિસ કર્મચારીઓ પરના એક રેન્ડમાઇઝ્ડ ટ્રાયલમાં, રોજ 2 મિનિટ બેન્ડ લેટરલ રેઝ, અઠવાડિયામાં 5 દિવસ, 10 અઠવાડિયા સુધી કરવાથી કંટ્રોલ ગ્રુપની સરખામણીમાં દુખાવો ઘટ્યો.{5}",
      how: "બેન્ડ પર ઊભા રહો. હાથ થોડા આગળ, કોણી ઢીલી. લગભગ 2 સેકન્ડમાં ખભાની ઊંચાઈ સુધી ઉઠાવો, લગભગ 2 માં નીચે લાવો.",
      dose: "એક સેટ, લગભગ 2 મિનિટ, મોટાભાગના કામના દિવસોમાં. સહેલું લાગે ત્યારે ભારે બેન્ડ.",
    },
    {
      name: "સિટ-ટુ-સ્ટેન્ડ (ચેર સ્ક્વૉટ)",
      why: "પગ અને હિપ્સ તમારા સૌથી મોટા સ્નાયુ છે, અને ડેસ્ક તેમનો સૌથી ઓછો ઉપયોગ કરે છે. આ સ્ક્વૉટ છે, ખુરશી ઊંડાઈ બતાવે છે.",
      how: "પગ હિપ જેટલા પહોળા. ખુરશીને અડો ત્યાં સુધી પાછળ બેસો. ધબ દઈને ન બેસો. આખા પગથી જોર લગાવીને ઊભા થાઓ.",
      dose: "8 થી 12 ના 3 સેટ. 12 સહેલા લાગે ત્યારે બેકપૅક પકડો.",
    },
    {
      name: "બેકપૅક હિપ હિન્જ",
      why: "શરીરનો પાછળનો ભાગ: ગ્લૂટ્સ, હેમસ્ટ્રિંગ, પીઠ. NHS પગ, હિપ્સ અને પીઠને મજબૂત કરવાના મુખ્ય સ્નાયુ જૂથોમાં ગણે છે.{3}",
      how: "ભરેલું બેકપૅક છાતીએ પકડો. ઘૂંટણ ઢીલા. પીઠ સીધી રાખી હિપ્સ પાછળ ધકેલો, જ્યાં સુધી હેમસ્ટ્રિંગમાં ખેંચાણ ન લાગે. સીધા ઊભા થાઓ.",
      dose: "10 ના 3 સેટ.",
    },
    {
      name: "બેન્ડ અથવા બેકપૅક રો",
      why: "ટાઇપિંગમાં હાથ કલાકો સુધી આગળ રહે છે. રો ઊલટી દિશાને ટ્રેન કરે છે: ઉપરની પીઠ.",
      how: "બેન્ડને ટેબલના પાયા કે દરવાજાના હેન્ડલ પર વીંટાળો. કોણીઓ પાંસળી સુધી ખેંચો. અટકો. ધીમે પાછા.",
      dose: "10 થી 15 ના 3 સેટ.",
    },
    {
      name: "ડેસ્ક પુશ-અપ (ઇન્ક્લાઇન પુશ-અપ)",
      why: "છાતી, ખભા અને હાથ, જે પણ NHS ની યાદીમાં છે.{3} ડેસ્ક મુશ્કેલી નક્કી કરે છે. ઊંચું એટલે સહેલું.",
      how: "હાથ મજબૂત ડેસ્કની ધાર પર. શરીર એક સીધી લીટીમાં. છાતી ધાર સુધી. પછી ધકેલો.",
      dose: "3 સેટ. ફૉર્મ બગડે તેના 2 રેપ પહેલાં અટકો.",
    },
    {
      name: "હાફ-નીલિંગ હિપ ફ્લેક્સર સ્ટ્રેચ",
      why: "લાંબું બેઠા પછી ઘણા લોકોને હિપના આગળના ભાગમાં જકડાટ લાગે છે. આ જ સ્ટ્રેચથી અમે કલાક પૂરો કરીએ છીએ.",
      how: "એક ઘૂંટણ કુશન પર. એ જ બાજુનું ગ્લૂટ કસો. થોડા આગળ ખસો. શ્વાસ લો.",
      dose: "દરેક બાજુ 30 થી 60 સેકન્ડ. સ્ટ્રેન્થ પછી, કે લાંબા કૉલ પછી.",
    },
  ],
  enoughHeading: "કેટલું પૂરતું છે?",
  enough: [
    "WHO: અઠવાડિયે 150 થી 300 મિનિટ મધ્યમ પ્રવૃત્તિ, અને 2 કે વધુ દિવસ સ્નાયુ મજબૂત કરતી કસરત.{1}{2}",
    "જો તમે ઘણું બેસો છો, તો વધુ મદદ કરે છે. દસ લાખથી વધુ પુખ્તોના એક મેટા-એનાલિસિસમાં જોવા મળ્યું કે રોજ લગભગ 60 થી 75 મિનિટ મધ્યમ પ્રવૃત્તિથી, દિવસમાં 8 કલાકથી વધુ બેસવા સાથે જોડાયેલું મૃત્યુનું વધેલું જોખમ દૂર થતું દેખાયું.{6} આ નિરીક્ષણ આધારિત તારણ છે, વચન નથી.",
    "ત્યાંથી શરૂ ન કરો. બ્રેક અને અઠવાડિયાના બે સ્ટ્રેન્થ દિવસોથી શરૂ કરો.",
  ],
  sampleHeading: "ડેસ્ક વાળું એક અઠવાડિયું",
  sampleLabel: "માત્ર સેમ્પલ. પ્રિસ્ક્રિપ્શન નથી. તમારા શરીર અને શેડ્યૂલ પ્રમાણે બદલો.",
  sample: [
    "દરેક કામના દિવસે: વૉક બ્રેક, અને બેન્ડ રેઝનો એક સેટ.",
    "અઠવાડિયામાં બે દિવસ, જેમ કે સોમવાર અને ગુરુવાર: મૂવ 3 થી 6, ત્રણ રાઉન્ડ.",
    "છેલ્લા કૉલ પછી: હિપ ફ્લેક્સર સ્ટ્રેચ.",
  ],
  coachedHeading: "લાઇવ કોચિંગ જોઈએ છે?",
  coached: [
    "આ જ કામ અમે Google Meet, Zoom કે FaceTime પર લાઇવ કોચ કરીએ છીએ. પુણેથી. હિન્દી કે અંગ્રેજીમાં. IST પર.",
    "Iron Hour 60 મિનિટનું 1:1 સેશન છે. Lean Reset મહિને 20 સેશન, 1:1. Open Floor નાનું ગ્રુપ છે.",
    "લાંબા બ્રેક પછી પાછા આવો છો? Return 45 મિનિટનું છે, મહિને 12 સેશન, એક દિવસ છોડીને.",
    "ખાતરી નથી? 30 મિનિટની કન્સલ્ટેશનથી શરૂ કરો. આ વાતચીત છે, ટ્રેનિંગ નહીં. બુકિંગ સમય હોલ્ડ કરે છે. ફી સીધી નક્કી થાય છે.",
  ],
  safetyHeading: "શરૂ કરતાં પહેલાં",
  safety:
    "આ સામાન્ય માહિતી છે, તબીબી સલાહ નથી. તીવ્ર, ફેલાતો કે વધતો દુખાવો હોય, અથવા કોઈ તબીબી સ્થિતિ હોય: પહેલાં ડૉક્ટર કે ફિઝિયોથેરાપિસ્ટની સલાહ લો. NHS સલાહ આપે છે કે જો તમે થોડા સમયથી કસરત ન કરી હોય તો પહેલાં ડૉક્ટર સાથે વાત કરો.{3}",
};

export const POST: Record<PostLang, PostCopy> = { en, ar, hi, es, zh, ja, gu };

export const deskWorkersPost: BlogPost = {
  slug: POST_SLUG,
  published: POST_PUBLISHED,
  modified: POST_MODIFIED,
  about: "Exercise for desk workers",
  sources: SOURCES,
  copy: POST,
};
