const lessons = [
  {
    title: "الدرس الأول: مفهوم قواعد البيانات",
    questions: [
      ["ما المقصود بقاعدة البيانات؟", ["مجموعة منظمة من البيانات يمكن تخزينها وإدارتها", "برنامج للرسم فقط", "جهاز لإدخال النصوص", "شبكة إنترنت"], 0],
      ["ما الهدف الأساسي من قواعد البيانات؟", ["تنظيم البيانات وسهولة الوصول إليها", "زيادة حجم الملفات", "إيقاف الحاسوب", "تغيير نظام التشغيل"], 0],
      ["أي مما يلي مثال على قاعدة بيانات؟", ["سجل بيانات الطلاب", "لوحة المفاتيح", "الشاشة", "الطابعة"], 0],
      ["البيانات هي:", ["حقائق أو معلومات يمكن تخزينها ومعالجتها", "أجهزة الحاسوب فقط", "برامج الألعاب", "أسلاك الشبكة"], 0],
      ["من فوائد تنظيم البيانات في قاعدة بيانات:", ["سهولة البحث والتحديث", "صعوبة الوصول للمعلومات", "حذف جميع البيانات", "منع إدخال البيانات"], 0]
    ]
  },
  {
    title: "الدرس الثاني: الجداول والحقول والسجلات",
    questions: [
      ["يتكون الجدول في قاعدة البيانات من:", ["صفوف وأعمدة", "صور فقط", "مجلدات فقط", "برامج"], 0],
      ["يسمى العمود في جدول قاعدة البيانات:", ["حقل", "سجل", "قاعدة", "استعلام"], 0],
      ["يسمى الصف في جدول قاعدة البيانات:", ["سجل", "حقل", "نموذج", "تقرير"], 0],
      ["في جدول الطلاب، اسم الطالب ورقم الطالب يمثلان:", ["حقولًا", "سجلات كاملة", "جداول", "تقارير"], 0],
      ["كل سجل في جدول يمثل عادةً:", ["عنصرًا أو كيانًا واحدًا", "قاعدة بيانات كاملة", "برنامجًا", "جهازًا"], 0]
    ]
  },
  {
    title: "الدرس الثالث: المفتاح الأساسي والعلاقات",
    questions: [
      ["ما وظيفة المفتاح الأساسي؟", ["تمييز كل سجل بشكل فريد", "حذف الجدول", "تغيير لون الجدول", "طباعة البيانات فقط"], 0],
      ["يجب أن تكون قيمة المفتاح الأساسي:", ["فريدة لكل سجل", "متكررة دائمًا", "فارغة دائمًا", "نصًا طويلًا دائمًا"], 0],
      ["العلاقة بين جدولين تساعد على:", ["ربط البيانات ذات الصلة", "حذف البيانات تلقائيًا", "إيقاف قاعدة البيانات", "تغيير كلمة المرور"], 0],
      ["إذا كان لكل طالب رقم مميز، فإن الرقم يمكن أن يكون:", ["مفتاحًا أساسيًا", "تقريرًا", "نموذجًا", "استعلامًا"], 0],
      ["العلاقة التي يكون فيها سجل واحد مرتبطًا بعدة سجلات تسمى:", ["واحد إلى متعدد", "واحد إلى واحد", "متعدد إلى صفر", "صفر إلى واحد"], 0]
    ]
  },
  {
    title: "الدرس الرابع: الاستعلامات والنماذج والتقارير",
    questions: [
      ["ما وظيفة الاستعلام؟", ["البحث عن بيانات محددة واسترجاعها", "إيقاف الحاسوب", "رسم الصور فقط", "إنشاء شبكة"], 0],
      ["النموذج يستخدم غالبًا من أجل:", ["إدخال البيانات وعرضها بطريقة سهلة", "حذف نظام التشغيل", "تصفح الإنترنت فقط", "تشغيل الألعاب"], 0],
      ["التقرير يستخدم عادةً من أجل:", ["عرض البيانات وتنسيقها للطباعة أو العرض", "إدخال كلمة مرور الجهاز", "إنشاء لوحة مفاتيح", "حذف قاعدة البيانات"], 0],
      ["إذا أردنا العثور على الطلاب الذين حصلوا على درجة أعلى من 90 نستخدم:", ["استعلامًا", "طابعة", "لوحة مفاتيح", "مجلدًا"], 0],
      ["من مزايا الاستعلامات:", ["استخراج معلومات محددة من البيانات", "زيادة عدد أجهزة الحاسوب", "تغيير حجم الشاشة", "إيقاف الطابعة"], 0]
    ]
  },
  {
    title: "الدرس الخامس: إدارة البيانات وأمنها",
    questions: [
      ["من الممارسات الجيدة لحماية قاعدة البيانات:", ["استخدام كلمات مرور ونسخ احتياطية", "مشاركة كلمة المرور مع الجميع", "حذف النسخ الاحتياطية", "ترك البيانات دون حماية"], 0],
      ["النسخ الاحتياطي يعني:", ["إنشاء نسخة من البيانات لاستعادتها عند الحاجة", "حذف البيانات", "تغيير أسماء الحقول", "طباعة التقرير"], 0],
      ["لماذا يجب تحديث البيانات؟", ["للحفاظ على دقتها وحداثتها", "لزيادة الأخطاء", "لمنع البحث", "لحذف السجلات"], 0],
      ["من مخاطر مشاركة بيانات المستخدمين دون إذن:", ["انتهاك الخصوصية", "زيادة سرعة الجهاز", "تحسين الطباعة", "تنظيم الجداول"], 0],
      ["أفضل تصرف عند اكتشاف خطأ في بيانات سجل هو:", ["تصحيحه بطريقة مناسبة بعد التحقق منه", "تجاهله دائمًا", "حذف قاعدة البيانات كاملة", "مشاركة الخطأ مع الجميع"], 0]
    ]
  }
];

const $ = id => document.getElementById(id);
let quizQuestions = [], current = 0, score = 0, answered = false, lastMode = null;

function shuffle(array) {
  const a = [...array];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function buildQuestions(indices) {
  const list = [];
  indices.forEach(i => {
    lessons[i].questions.forEach(q => {
      const choices = q[1].map((text, index) => ({ text, correct: index === q[2] }));
      list.push({ lesson: lessons[i].title, text: q[0], choices: shuffle(choices) });
    });
  });
  return shuffle(list);
}

function renderLessons() {
  const grid = $("lessonGrid");
  grid.innerHTML = lessons.map((lesson, i) => `
    <button class="lesson" data-lesson="${i}">
      <div class="num">الدرس ${i + 1}</div>
      <strong>${lesson.title.replace(/^الدرس \S+: /, "")}</strong>
      <span>5 أسئلة • ابدأ الاختبار ←</span>
    </button>
  `).join("");
  grid.querySelectorAll(".lesson").forEach(btn => btn.addEventListener("click", () => startQuiz([Number(btn.dataset.lesson)])));
}

function startQuiz(indices) {
  lastMode = indices;
  quizQuestions = buildQuestions(indices);
  current = 0;
  score = 0;
  $("home").classList.add("hidden");
  $("result").classList.add("hidden");
  $("quiz").classList.remove("hidden");
  showQuestion();
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function showQuestion() {
  const q = quizQuestions[current];
  answered = false;
  $("lessonName").textContent = q.lesson;
  $("questionMeta").textContent = `السؤال ${current + 1} من ${quizQuestions.length}`;
  $("questionText").textContent = q.text;
  $("scoreLive").textContent = `الدرجة: ${score}`;
  $("progressBar").style.width = `${(current / quizQuestions.length) * 100}%`;
  $("feedback").className = "feedback hidden";
  $("feedback").textContent = "";
  $("nextBtn").textContent = current === quizQuestions.length - 1 ? "إنهاء الاختبار ✓" : "السؤال التالي →";

  const options = $("options");
  options.innerHTML = "";
  q.choices.forEach((choice, i) => {
    const btn = document.createElement("button");
    btn.className = "option";
    btn.textContent = `${String.fromCharCode(1575 + i)}) ${choice.text}`;
    btn.addEventListener("click", () => chooseAnswer(choice, btn));
    options.appendChild(btn);
  });
}

function chooseAnswer(choice, clicked) {
  if (answered) return;
  answered = true;
  const buttons = [...document.querySelectorAll(".option")];
  buttons.forEach((btn, i) => {
    btn.disabled = true;
    if (quizQuestions[current].choices[i].correct) btn.classList.add("correct");
  });
  if (choice.correct) {
    score++;
    clicked.classList.add("selected");
    $("feedback").textContent = "✅ إجابة صحيحة! أحسنت.";
    $("feedback").className = "feedback ok";
  } else {
    clicked.classList.add("wrong");
    $("feedback").textContent = "❌ إجابة غير صحيحة. تمت إضاءة الإجابة الصحيحة باللون الأخضر.";
    $("feedback").className = "feedback bad";
  }
  $("scoreLive").textContent = `الدرجة: ${score}`;
  $("progressBar").style.width = `${((current + 1) / quizQuestions.length) * 100}%`;
}

function nextQuestion() {
  if (!answered) {
    $("feedback").textContent = "⚠️ اختر إجابة أولًا.";
    $("feedback").className = "feedback bad";
    return;
  }
  if (current < quizQuestions.length - 1) {
    current++;
    showQuestion();
  } else {
    showResult();
  }
}

function showResult() {
  $("quiz").classList.add("hidden");
  $("result").classList.remove("hidden");
  const total = quizQuestions.length;
  const percent = Math.round((score / total) * 100);
  $("finalScore").textContent = `${score} / ${total} (${percent}%)`;
  let msg = percent === 100 ? "🌟 ممتاز جدًا! إجاباتك كلها صحيحة." : percent >= 80 ? "👏 ممتاز! أداء رائع، استمر." : percent >= 60 ? "👍 جيد جدًا! راجع بعض النقاط وحاول تحسين نتيجتك." : "📚 لا بأس، راجع الدرس وحاول مرة أخرى.";
  $("resultMessage").textContent = msg;
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function goHome() {
  $("quiz").classList.add("hidden");
  $("result").classList.add("hidden");
  $("home").classList.remove("hidden");
  window.scrollTo({ top: 0, behavior: "smooth" });
}

$("nextBtn").addEventListener("click", nextQuestion);
$("backBtn").addEventListener("click", goHome);
$("homeBtn").addEventListener("click", goHome);
$("restartBtn").addEventListener("click", () => startQuiz(lastMode));
$("allTestBtn").addEventListener("click", () => startQuiz([0,1,2,3,4]));
renderLessons();
