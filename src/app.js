import './style.css';

const topics = [
  { id: 'early', number: '01', title: 'الكون المبكر', description: 'من المراحل الأولى للكون إلى تكوّن الجسيمات والذرات.', evidence: 'نماذج مدعومة' },
  { id: 'structures', number: '02', title: 'نشأة البُنى الكونية', description: 'كيف تشكّلت النجوم والمجرات والعناقيد واسعة النطاق.', evidence: 'دعم رصدي قوي' },
  { id: 'dark', number: '03', title: 'المادة والطاقة المظلمتان', description: 'ما نرصده، وما لا نزال نحاول فهمه عن مكوّنات الكون.', evidence: 'بحث نشط' },
  { id: 'black-holes', number: '04', title: 'الثقوب السوداء', description: 'الجاذبية القصوى، أفق الحدث، وملاحظات الثقوب السوداء.', evidence: 'دعم رصدي قوي' },
];

const app = document.querySelector('#app');

app.innerHTML = `
  <header class="topbar">
    <a class="brand" href="#" aria-label="Cosmos Origin الرئيسية">
      <span class="brand-mark" aria-hidden="true">✦</span>
      <span>COSMOS <b>ORIGIN</b></span>
    </a>
    <nav aria-label="التنقل الرئيسي">
      <a href="#explore">استكشف</a>
      <a href="#method">منهجنا العلمي</a>
      <a href="https://github.com/Berlin193/cosmos-origin" target="_blank" rel="noreferrer">GitHub</a>
    </nav>
  </header>

  <main>
    <section class="hero">
      <div class="hero-copy">
        <p class="eyebrow"><span></span> مشروع علمي مفتوح المعرفة</p>
        <h1>رحلة لفهم<br /><em>أصل الكون</em></h1>
        <p class="hero-text">من اللحظات الأولى بعد الانفجار العظيم إلى المجرات والثقوب السوداء. معرفة منظمة تفرّق بين ما نعرفه، وما نبحث عنه، وما لا نزال نجهله.</p>
        <a class="primary-link" href="#explore">ابدأ الاستكشاف <span aria-hidden="true">←</span></a>
      </div>
      <div class="cosmos-art" role="img" aria-label="تصوير فني لمجرة حلزونية وسط النجوم">
        <div class="orbit orbit-one"></div><div class="orbit orbit-two"></div>
        <div class="galaxy"></div><div class="star star-a"></div><div class="star star-b"></div><div class="star star-c"></div>
        <span class="art-caption">OBSERVE · QUESTION · UNDERSTAND</span>
      </div>
    </section>

    <section id="explore" class="section">
      <div class="section-heading">
        <div><p class="eyebrow">مكتبة المعرفة</p><h2>استكشف موضوعات الكون</h2></div>
        <span class="section-index">01 / 04</span>
      </div>
      <div class="topic-grid">
        ${topics.map(topic => `
          <article class="topic-card">
            <div class="topic-top"><span>${topic.number}</span><span class="evidence">${topic.evidence}</span></div>
            <h3>${topic.title}</h3><p>${topic.description}</p>
            <a href="${topic.id === 'black-holes' ? '/data/black-holes.md' : '/docs/big-bang.md'}" aria-label="اقرأ المزيد عن ${topic.title}">اقرأ المزيد <span aria-hidden="true">↗</span></a>
          </article>`).join('')}
      </div>
    </section>

    <section id="method" class="method">
      <p class="eyebrow">كيف نعرض المعرفة؟</p>
      <h2>الدليل أولاً،<br /><em>والاستنتاج بوضوح.</em></h2>
      <p>نصنّف المعلومات بحسب قوة الأدلة، ونفصل بين الرصد والنموذج العلمي والفرضية والأسئلة المفتوحة. لا نقدّم التخمين على أنه حقيقة.</p>
      <div class="method-tags"><span>رصد مؤكد</span><span>نموذج مدعوم</span><span>فرضية</span><span>سؤال مفتوح</span></div>
    </section>
  </main>

  <footer><span>COSMOS ORIGIN</span><span>المعرفة تتطور مع الأدلة.</span><a href="https://github.com/Berlin193/cosmos-origin" target="_blank" rel="noreferrer">المصدر المفتوح ↗</a></footer>
`;
