/* =========================================================
   PORTFOLIO CONTENT  —  edit THIS file to update your site
   ---------------------------------------------------------
   This is the only file you need to touch to add a new job,
   project, skill, or interest. The layout/design lives in
   index.html + css/styles.css and renders this data for you.
   Just follow the existing pattern, save, and refresh.
   ========================================================= */

const PORTFOLIO = {

  /* ---- Basic info & links (used in hero + contact + footer) ---- */
  profile: {
    email:    "harsharan.2308@gmail.com",
    linkedin: "https://www.linkedin.com/in/harsharan-preet/",
    github:   "https://github.com/Harsh-5",
    location: "Arlington, VA",
    // Put your résumé PDF in this folder and keep this filename, or change it:
    resume:   "Harsharan_Gorli_Resume.pdf",
  },

  /* ---- "What I'm great at" card in the About section ---- */
  strengths: [
    "Building trustworthy data pipelines (SharePoint → Microsoft Fabric Lakehouse, PySpark)",
    "Turning raw data into executive-ready Power BI dashboards (DAX, semantic models)",
    "Data governance, compliance & audit for federal and private grants",
    "Applied ML & NLP — forecasting, recommenders, sentiment, LLM/RAG",
    "Translating model results into decisions leadership can act on",
    "Enabling teams through training, SOPs, and clear documentation",
  ],

  /* ---- Experience timeline (most recent first) ---- */
  experience: [
    {
      role: "Data Analyst & Compliance Specialist",
      team: "Business Enablement & Intelligence",
      org: "Goodwill Industries International",
      location: "Rockville, MD",
      date: "May 2023 – Present",
      points: [
        "Built and own SharePoint → Microsoft Fabric Lakehouse pipelines (Fabric Notebooks, PySpark) cleaning and aggregating KPI data across 40+ partner sites — cutting reporting cycle time by 30%.",
        "Automated monthly KPI delivery via Fabric → Power BI semantic models (DAX), hitting 98%+ accuracy for compliance audits and enabling self-serve leadership dashboards.",
        "Grew scope from 1 federal grant to 7 grants (5 federal + 2 private) plus LMI analyses — standardizing KPI frameworks across 16 grant programs with risk and audit stakeholders.",
        "Authored 12+ user guides, SOPs, data dictionaries and exit checklists and trained 20+ case managers — cutting onboarding bottlenecks 25% and boosting data completeness.",
      ],
      stack: ["Microsoft Fabric", "PySpark", "Power BI / DAX", "SQL", "Python", "SharePoint", "Smartsheet"],
    },
    {
      role: "Financial & Economic Analyst Intern",
      org: "Murrow Capital",
      location: "Washington, DC",
      date: "May 2022 – Aug 2022",
      points: [
        "Built Python ML forecasting models (scikit-learn, XGBoost) for ESG portfolios that outperformed industry benchmarks by 103% over a 10-year backtest with quarterly rebalancing.",
        "Deployed an NLP sentiment-analysis pipeline (TextBlob, NLTK, BeautifulSoup) across 250+ companies to surface high-value, impact-first investment targets.",
        "Designed interactive Power BI dashboards quantifying the correlation between social impact and economic value for senior management.",
      ],
      stack: ["Python", "scikit-learn", "XGBoost", "NLTK / TextBlob", "AWS", "Power BI"],
    },
    {
      role: "Data Science Consultant Intern",
      org: "World Wildlife Fund",
      location: "Washington, DC",
      date: "Jan 2022 – May 2022",
      points: [
        "Built 3 production ML recommendation services (collaborative filtering with h2o & surprise) from web-scraped data across 250+ species pages — increasing visitor retention by 20%.",
        "Presented ML-driven engagement insights and visualizations to WWF leadership sponsors and program faculty, translating model outcomes into strategy.",
      ],
      stack: ["Python", "h2o", "surprise", "BeautifulSoup", "SAS Viya", "Tableau", "MySQL"],
    },
    {
      role: "Data Analyst",
      org: "Scalend Technologies",
      orgNote: "Incubated by PayPal India",
      location: "Bangalore, India",
      date: "Mar 2020 – Jul 2021",
      points: [
        "Architected and shipped 100% of core features for a SaaS analytics platform used across client portfolios (Azure, MySQL, REST APIs).",
        "Led a web-development team launching 20+ websites and 117 optimized pages, improving search visibility by 45%.",
        "Cut processing time 30% and lifted data accuracy 20% by automating legacy-to-modern integration pipelines end to end.",
      ],
      stack: ["Python", "JavaScript", "Azure", "MySQL", "REST APIs", "Google Analytics"],
    },
    {
      role: "Web Developer",
      org: "Opel Constructions",
      location: "Visakhapatnam, India",
      date: "Sep 2017 – Mar 2020",
      points: [
        "Led technical implementation of 3 custom web applications, collaborating with product and scrum teams to architect scalable business solutions.",
      ],
      stack: ["HTML/CSS", "JavaScript", "Web Apps"],
    },
  ],

  /* ---- Projects — mix of work & personal. type: "work" | "personal" ---- */
  projects: [
    {
      title: "Centralized Grant Compliance Data Hub",
      type: "work",
      icon: "🗂️",
      date: "2023 – Present",
      blurb: "An end-to-end analytics ecosystem unifying KPI data from 40+ Goodwill sites into a Microsoft Fabric Lakehouse, feeding audited Power BI dashboards that 8+ mission teams use to track placements, benefits, and grant compliance in real time.",
      stack: ["Microsoft Fabric", "PySpark", "Power BI", "DAX", "SQL"],
      links: [],
    },
    {
      title: "ESG Impact-Investing ML Model",
      type: "work",
      icon: "📈",
      date: "2022",
      blurb: "A machine-learning ranking and forecasting model for ESG portfolios that beat industry benchmarks by 103% over a 10-year backtest, paired with an NLP sentiment pipeline scanning 250+ firms for socially impactful, financially sound bets.",
      stack: ["Python", "XGBoost", "scikit-learn", "TextBlob", "NLTK"],
      links: [],
    },
    {
      title: "WWF Species Recommendation Engine",
      type: "work",
      icon: "🐾",
      date: "2022",
      blurb: "Three collaborative-filtering recommendation models built on web-scraped data from 250+ species pages to personalize content and lift visitor retention by 20% for the World Wildlife Fund's digital platform.",
      stack: ["Python", "h2o", "surprise", "BeautifulSoup"],
      links: [],
    },
    {
      title: "NLP Text Summarization (BERT · GPT-2 · XLNet)",
      type: "personal",
      icon: "📝",
      date: "Nov 2022",
      blurb: "Implemented and compared transformer models (BERT, GPT-2, XLNet) to summarize long documents and extract key information — an early hands-on dive into the LLM techniques I'm now building on in my Agentic AI work.",
      stack: ["Python", "Transformers", "Google Colab"],
      links: [{ label: "GitHub", url: "https://github.com/Harsh-5" }],
    },
    {
      title: "Dimensional Modeling of COVID-19 Data",
      type: "personal",
      icon: "🦠",
      date: "Dec 2021",
      blurb: "Wrangled and modeled the JHU COVID-19 time-series dataset, running regression analysis and building visualizations to surface actionable public-health insights at scale using a Spark SQL + AWS stack.",
      stack: ["Spark SQL", "AWS", "Python"],
      links: [{ label: "GitHub", url: "https://github.com/Harsh-5" }],
    },
    {
      title: "Agentic AI — RAG & Guardrails (In Progress)",
      type: "personal",
      icon: "🤖",
      date: "2025 – Present",
      blurb: "Currently in an Agentic AI bootcamp building production-minded LLM apps: retrieval-augmented generation, agent and tool design, evaluation, and safety guardrails. Project write-ups coming soon.",
      stack: ["RAG", "LLMs", "Agents", "Evaluation", "Guardrails"],
      links: [],
    },
  ],

  /* ---- Skills, grouped. Add/rename groups freely. ---- */
  skills: [
    { group: "AI / ML & LLMs", items: ["LLMs (BERT, GPT-2, XLNet)", "Hugging Face", "RAG / Retrieval", "Agentic AI", "NLP", "Recommenders", "Forecasting (ARIMA, XGBoost)", "Classification / Regression", "Clustering / PCA", "CNN / RNN", "Model Evaluation", "Guardrails"] },
    { group: "Languages & Backend", items: ["Python", "SQL", "R", "Java", "JavaScript", "C / C++", "REST APIs", "Git", "Jupyter"] },
    { group: "Data & Cloud", items: ["Microsoft Fabric", "PySpark", "Azure", "Databricks", "AWS", "Snowflake", "Spark", "Hive", "MySQL / Postgres", "ETL / ELT"] },
    { group: "BI & Visualization", items: ["Power BI (DAX)", "Tableau", "SAS Viya", "Advanced Excel"] },
    { group: "Delivery & Governance", items: ["Compliance & Audit", "Data Governance", "Agile / Scrum", "Stakeholder Comms", "Executive Readouts", "Documentation & SOPs"] },
  ],

  /* ---- Certifications ---- */
  certifications: [
    "Google Data Analytics Professional Certificate",
    "IBM Data Warehouse Engineer Professional Certificate",
    "IBM Full Stack Developer Professional Certificate",
    "Google Analytics Individual Qualification",
  ],

  /* ---- Beyond Work: interests / hobbies ---- */
  interests: [
    { icon: "📷", title: "Nature Photography", text: "I chase good light on weekends — slowing down to really see a place is its own kind of data collection." },
    { icon: "🥾", title: "Hiking", text: "Trails are where I think best. Long climbs are great for untangling a hard problem (or just unplugging)." },
    { icon: "✍️", title: "Poetry", text: "Writing poetry keeps me sharp at the thing analytics secretly needs most: saying a lot in very few words." },
    { icon: "🌏", title: "Languages & Culture", text: "Growing up multilingual made me a natural translator — between languages, and between technical and non-technical teams." },
  ],

  /* ---- Languages (level 1–3: intermediate→native/fluent) ---- */
  languages: [
    { name: "English", note: "Fluent", level: 3 },
    { name: "Hindi", note: "Native", level: 3 },
    { name: "Telugu", note: "Native", level: 3 },
    { name: "Punjabi", note: "Native", level: 3 },
    { name: "Tamil", note: "Intermediate", level: 2 },
    { name: "Marathi", note: "Intermediate", level: 2 },
  ],

  /* ---- Communities & memberships ---- */
  communities: [
    "AWIS — Association for Women in Science (Member since 2021)",
    "GW Data (Member since 2022)",
    "GWU Desis (Member since 2022)",
  ],

  /* ---- Education ---- */
  education: [
    {
      degree: "M.S., Business Analytics",
      school: "The George Washington University, School of Business",
      location: "Washington, DC",
      date: "Aug 2021 – May 2023",
      detail: "Concentration in Machine Learning & AI. Coursework: Decision Models, Data Management, Machine Learning, Data Visualization, Digital Analytics.",
      gpa: "GPA 3.56",
    },
    {
      degree: "B.Tech., Computer Science & Engineering",
      school: "Amrita Vishwa Vidyapeetham, School of Engineering",
      location: "Coimbatore, India",
      date: "2013 – 2017",
      detail: "Bottom-up engineering foundation — algorithms, systems, and the fundamentals that let me reason about cost and trade-offs, not just call an API.",
      gpa: "GPA 3.82",
    },
    {
      degree: "Agentic AI Bootcamp",
      school: "Self-directed, in progress",
      location: "2025 – Present",
      date: "In progress",
      detail: "Production LLM apps: RAG, agent & tool design, evaluation, and guardrails. Where my hands-on agentic AI practice lives.",
      gpa: "Ongoing",
    },
  ],

  /* =========================================================
     "HOW I BUILT THIS WITH AI" — the meta / making-of section.
     Edit the copy freely. The `stats` are an HONEST ESTIMATE —
     replace the values with real figures if you track them.
     ========================================================= */
  buildWithAI: {
    intro:
      "This site is itself the demo. I built it in a single collaborative session with an AI coding agent — yes, it's “vibe coded,” and I'd rather show you how than pretend otherwise. Anyone can type a request into an AI. The skill recruiters actually need right now is doing it efficiently: getting a working result without burning hours or runaway cost. So here's the process, the trade-offs, and what I'd sharpen next time.",

    // Honest estimate — swap in real numbers if you have them.
    stats: [
      { value: "1", label: "focused session, start to deployable" },
      { value: "~$1–2", label: "estimated model cost (replace with your real figure)" },
      { value: "≈5 lines", label: "to add a future job — not a rebuild" },
    ],

    efficiency: [
      "Front-loaded the context. I handed over my résumé, my goals, and my style preferences up front, so the agent never had to re-derive who I am. Fewer round-trips means fewer tokens.",
      "Batched the decisions. Instead of slow one-question-at-a-time back-and-forth, I answered design, deployment, and role-focus choices in single bundled prompts.",
      "Built it data-driven. All content lives in one file (data.js). Adding a role later is a tiny edit, not a full regeneration — so the efficiency compounds over the whole life of the site.",
      "Verified cheaply. The build was checked with a lightweight headless DOM test to confirm every section renders, instead of burning tokens on repeated full-page screenshot loops.",
      "Reused one design system. CSS variables drive every color and spacing value, so nothing had to be re-styled section by section.",
    ],

    improvements: [
      "Hand over assets as files first. I pasted my photo inline, which couldn't be bundled — a 10-second upload would have saved a step.",
      "Lock the deployment target before building, not after, so the output is shaped for its destination from line one.",
      "Keep a running content doc. A single source of truth means the agent never has to re-read source files to remember a detail.",
    ],

    principle:
      "The bigger principle: efficiency isn't using less AI — it's using the right AI. My master's was in machine learning and AI, so I know when a regression, a gradient-boosted model, or a recommender will be cheaper, faster, and more reliable than a large language model — and when an LLM or agent genuinely earns its cost. Knowing the difference is the part that's hard to fake.",
  },
};

// Expose to the renderer (do not remove this line).
window.PORTFOLIO = PORTFOLIO;
