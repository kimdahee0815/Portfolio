/* Language toggle (EN / KO) for the portfolio site. */
(function () {
    var TRANSLATIONS = {
        en: {
            site_name: "Dahee Kim",
            nav_who: "Who I Am",
            nav_drives: "What Drives Me",
            nav_bring: "What I Bring",
            nav_work: "My Work",
            nav_blog: "Blog",
            nav_contact: "Contact",
            resume_title: "Download Resume",
            resume_label: "Resume",
            portfolio_title: "Download Portfolio",
            portfolio_label: "Portfolio",
            lang_toggle: "KO",

            intro_roles: "Software Engineer,Full-Stack Developer,Front-End Developer,Back-End Developer",
            btn_more: "More",
            btn_next: "Next",

            three_title: "Who I Am",
            three_body:
                "👋 Hi, there!\n<br>\nI'm a <strong>full-stack software engineer</strong> who believes great ideas can be built from anywhere.\n<br><br>\n💡 <strong>Questions</strong> become <strong>projects.</strong>\n<br>\n🚀 <strong>Projects</strong> become <strong>experience.</strong>\n<br>\n🌱 <strong>Experience</strong> becomes <strong>growth.</strong>\n<br>\n<br>\nTo me, the best workplace is wherever <strong>great people</strong> and <strong>meaningful problems</strong> come together. \n<br> \nI believe the best opportunities are the ones where I can <strong>learn from others</strong> and <strong>build something that truly helps people.</strong>",

            one_title: "What Drives Me",
            one_body:
                "💡 <strong>Curiosity</strong> is what starts every journey for me. A simple question often grows into a project, and <strong>every project teaches me something new.</strong>\n<br><br>\n🐞 I believe the best learning happens during <strong>debugging.</strong> Every bug gives me a reason to ask <strong>\"why?\"</strong>, uncover <strong>how things really work</strong>, and discover <strong>something I didn't know before.</strong>\n<br><br>\n🤝 <strong>The people I work with</strong> are one of my biggest motivations. I enjoy learning from those who <strong>challenge me</strong>, <strong>inspire me</strong>, and help me become a <strong>better engineer</strong>.\n<br><br>\n🌱 I'm motivated by the idea that the things I build can make life <strong>a little easier</strong>, <strong>a little simpler</strong>, or <strong>a little more enjoyable</strong> for the people who use them.\n<br><br>\n🚀 Every project is a chance to <strong>learn</strong>, <strong>grow with great people</strong>, and create <strong>something meaningful</strong>.",

            two_title: "What I Bring",
            two_body:
                "💻 <strong>Full-Stack Development</strong><br>\nI'm comfortable working across the <strong>entire development lifecycle</strong>, building modern <strong>frontend</strong>, scalable <strong>backend systems</strong>, and <strong>production-ready applications</strong>.\n<br><br>\n\n🤖 <strong>AI & Cloud</strong><br>\nI've built projects using <strong>LLMs</strong>, <strong>RAG</strong>, <strong>LangChain</strong>, <strong>MCP</strong>, and <strong>Computer Vision</strong>, while deploying applications with <strong>AWS</strong> and <strong>Docker</strong>.\n<br><br>\n\n🛠️ <strong>Tech Stack</strong><br>\nExperienced with <strong>React</strong>, <strong>Next.js</strong>, <strong>Node.js</strong>, <strong>Nest.js</strong>, <strong>Spring Boot</strong>, <strong>PostgreSQL</strong>, <strong>MongoDB</strong>, <strong>MySQL</strong>, and <strong>Redis</strong>.\n<br><br>\n\n🌍 <strong>Adaptability</strong><br>\nOne of my strengths is <strong>learning new technologies quickly</strong> and applying them to real projects, allowing me to step in quickly and make meaningful contributions wherever the product needs it most.",

            work_title: "My Work",
            work_body:
                "This is a showcase of full-stack and frontend web applications I built, <br/>including web applications such as: <br/>- a CCTV-based industrial safety monitoring system<br/>- a full-stack platform for global developer collaboration (Currently in development)<br/>- a tour booking system<br/>- a wedding planning tool<br/>- a movie search engine<br/>- a video sharing site<br/>- a recipe finder <br/>Each project is either fully deployed or presented with a preview and source code.",

            blog_title: "My Blog",
            blog_body: "My digital lab where I document things I learn, build, and break 😄",
            blog_excerpt: "Curious at heart, figuring things out through trial, error, and a lot of messy code! 🤠",

            contact_title: "Say Hello!",
            contact_body:
                "Got a project in mind, thinking about collaborating, or just want to talk code?\n\t\t\t\t\t\t\t<br>Feel free to reach out anytime.\n\t\t\t\t\t\t<br/>\tDrop me a message, and I'll get back to you faster than a build error on deployment. 😉",
            placeholder_name: "Name",
            placeholder_email: "Email",
            placeholder_message: "Message",
            btn_send: "Send Message",

            video_fallback: "this browser does not support the video tag.",

            alert_success: "✅ Sent Your Message successfully!",
            alert_fail: "❌ Try again!",
            alert_error: "⚠️ Server error!",
        },
        ko: {
            site_name: "김다희",
            nav_who: "소개",
            nav_drives: "가치관",
            nav_bring: "강점",
            nav_work: "프로젝트",
            nav_blog: "블로그",
            nav_contact: "연락처",
            resume_title: "이력서 다운로드",
            resume_label: "이력서",
            portfolio_title: "포트폴리오 다운로드",
            portfolio_label: "포트폴리오",
            lang_toggle: "EN",

            intro_roles: "소프트웨어 엔지니어,풀스택 개발자,프론트엔드 개발자,백엔드 개발자",
            btn_more: "더보기",
            btn_next: "다음",

            three_title: "저는 이런 개발자입니다",
            three_body:
                "👋 안녕하세요!\n<br>\n저는 <strong>좋은 아이디어는 어디서든 시작될 수 있다</strong>고 믿는 <strong>풀스택 개발자</strong>입니다.\n<br><br>\n💡 <strong>질문</strong>은 <strong>프로젝트</strong>가 됩니다.\n<br>\n🚀 <strong>프로젝트</strong>는 <strong>경험</strong>이 됩니다.\n<br>\n🌱 <strong>경험</strong>은 <strong>성장</strong>이 됩니다.\n<br>\n<br>\n저에게 최고의 일터란 <strong>좋은 사람들</strong>과 <strong>의미 있는 문제</strong>가 만나는 곳입니다.\n<br> \n저는 <strong>좋은 사람들과 함께 배우고</strong>, <strong>사람들에게 실질적인 도움이 되는 서비스를 만드는 일</strong>이 가장 가치 있는 기회라고 믿습니다.",

            one_title: "가치관",
            one_body:
                '💡 <strong>호기심</strong>은 제가 새로운 도전을 시작하는 가장 큰 원동력입니다. 사소한 질문 하나가 종종 프로젝트로 자라나고, <strong>모든 프로젝트는 저에게 새로운 것을 가르쳐줍니다.</strong>\n<br><br>\n🐞 저는 <strong>디버깅</strong>을 할 때 가장 많이 배운다고 믿습니다. 버그를 마주할 때마다 <strong>"왜 이런 문제가 발생했을까?"</strong>를 고민하게 되고, 그 과정에서 시스템이 실제로 어떻게 동작하는지 깊이 이해하게 됩니다.\n<br><br>\n🤝 함께 일하는 사람들은 저에게 가장 큰 성장의 원동력입니다. 저는 제게 <strong>도전 의식을 불어넣고</strong>, <strong>영감을 주고</strong>, <strong>더 나은 엔지니어</strong>로 성장하도록 도와주는 사람들에게 배우는 것을 즐깁니다.\n<br><br>\n🌱 제가 만드는 서비스들이 사람들의 삶을 <strong>조금 더 편하게</strong>, <strong>조금 더 단순하게</strong>, <strong>조금 더 즐겁게</strong> 만들 수 있다는 생각이 저를 움직입니다.\n<br><br>\n🚀 모든 프로젝트는 <strong>배우고</strong>, <strong>좋은 사람들과 함께 성장하고</strong>, <strong>의미 있는 무언가를 만들</strong> 기회입니다.',

            two_title: "강점",
            two_body:
                "💻 <strong>풀스택 개발</strong><br>\n<strong>기획부터 개발, 배포까지</strong> 전 과정을 수행할 수 있으며, 모던한 <strong>프론트엔드</strong>, 확장 가능한 <strong>백엔드 시스템</strong>, <strong>실제 서비스 수준의 애플리케이션</strong>을 만듭니다.\n<br><br>\n\n🤖 <strong>AI & 클라우드</strong><br>\n<strong>LLM</strong>, <strong>RAG</strong>, <strong>LangChain</strong>, <strong>MCP</strong>, <strong>컴퓨터 비전</strong>을 활용한 프로젝트를 만들었고, <strong>AWS</strong>와 <strong>Docker</strong>로 애플리케이션을 배포합니다.\n<br><br>\n\n🛠️ <strong>기술 스택</strong><br>\n<strong>React</strong>, <strong>Next.js</strong>, <strong>Node.js</strong>, <strong>Nest.js</strong>, <strong>Spring Boot</strong>, <strong>PostgreSQL</strong>, <strong>MongoDB</strong>, <strong>MySQL</strong>, <strong>Redis</strong> 경험이 있습니다.\n<br><br>\n\n🌍 <strong>적응력</strong><br>\n저의 강점 중 하나는 <strong>새로운 기술을 빠르게 습득</strong>해 실제 프로젝트에 적용하는 것으로, 새로운 기술을 빠르게 익혀 실제 프로젝트에 적용하며, 필요한 역할을 빠르게 수행할 수 있습니다.",

            work_title: "프로젝트",
            work_body:
                "제가 직접 기획하고 개발한 다양한 웹 프로젝트를 소개합니다. <br/>다음과 같은 프로젝트들을 포함합니다: <br/>- CCTV 기반 산업 안전 모니터링 시스템<br/>- 글로벌 개발자 협업을 위한 풀스택 플랫폼 (개발 중)<br/>- 투어 예약 시스템<br/>- 웨딩 플래닝 도구<br/>- 영화 검색 엔진<br/>- 영상 공유 사이트<br/>- 레시피 찾기 사이트 <br/>각 프로젝트는 실제 배포되어 있거나, 미리보기와 소스 코드로 확인하실 수 있습니다.",

            blog_title: "블로그",
            blog_body: "새로운 기술을 배우고 실험하며 기록하는 공간입니다. 😄",
            blog_excerpt: "호기심을 바탕으로 시행착오를 기록하고, 직접 부딪히며 배운 것들을 공유하는 장소에요! 🤠",

            contact_title: "여러분!",
            contact_body:
                "염두에 둔 프로젝트가 있거나, 협업을 고민 중이거나, 그냥 코드 이야기를 나누고 싶으신가요?\n\t\t\t\t\t\t\t<br>언제든 편하게 연락 주세요.\n\t\t\t\t\t\t<br/>\t메시지를 남겨주시면 배포 중 빌드 에러보다 빠르게 답장 드릴게요.  😉",
            placeholder_name: "이름",
            placeholder_email: "이메일",
            placeholder_message: "메시지",
            btn_send: "메시지 보내기",

            video_fallback: "이 브라우저는 video 태그를 지원하지 않습니다.",

            alert_success: "✅ 메시지가 성공적으로 전송되었습니다!",
            alert_fail: "❌ 다시 시도해주세요!",
            alert_error: "⚠️ 서버 오류가 발생했습니다!",
        },
    };

    function getInitialLang() {
        var saved = null;
        try {
            saved = localStorage.getItem("site-lang");
        } catch (e) {}

        if (saved === "en" || saved === "ko") return saved;

        return "en";
    }

    function applyTranslations(lang) {
        var dict = TRANSLATIONS[lang];

        document.querySelectorAll("[data-i18n]").forEach(function (el) {
            var key = el.getAttribute("data-i18n");
            if (dict[key] !== undefined) el.textContent = dict[key];
        });

        document.querySelectorAll("[data-i18n-html]").forEach(function (el) {
            var key = el.getAttribute("data-i18n-html");
            if (dict[key] !== undefined) el.innerHTML = dict[key];
        });

        document.querySelectorAll("[data-i18n-placeholder]").forEach(function (el) {
            var key = el.getAttribute("data-i18n-placeholder");
            if (dict[key] !== undefined) el.setAttribute("placeholder", dict[key]);
        });

        document.querySelectorAll("[data-i18n-attr]").forEach(function (el) {
            el.getAttribute("data-i18n-attr")
                .split(";")
                .forEach(function (pair) {
                    var parts = pair.split(":");
                    var attr = parts[0];
                    var key = parts[1];
                    if (attr && key && dict[key] !== undefined) el.setAttribute(attr, dict[key]);
                });
        });

        document.querySelectorAll("[data-i18n-value]").forEach(function (el) {
            var key = el.getAttribute("data-i18n-value");
            if (dict[key] !== undefined) el.setAttribute("value", dict[key]);
        });
    }

    function refreshTypedStrings(lang) {
        if (typeof Typed === "undefined") return;

        var stringsHolder = document.querySelector(".text-slider-items");
        if (!stringsHolder) return;

        if (window.typedInstance) {
            window.typedInstance.destroy();
        }

        window.typedInstance = new Typed(".text-slider", {
            strings: stringsHolder.textContent.split(","),
            typeSpeed: 80,
            loop: true,
            backDelay: 1100,
            backSpeed: 30,
        });
    }

    window.setSiteLanguage = function (lang) {
        if (lang !== "en" && lang !== "ko") return;

        window.currentLang = lang;
        document.documentElement.setAttribute("lang", lang === "ko" ? "ko" : "en");
        applyTranslations(lang);
        refreshTypedStrings(lang);

        try {
            localStorage.setItem("site-lang", lang);
        } catch (e) {}

        var toggleBtn = document.getElementById("lang-toggle");
        if (toggleBtn) {
            var dict = TRANSLATIONS[lang];
            toggleBtn.textContent = dict.lang_toggle;
        }
    };

    var initialLang = getInitialLang();
    window.currentLang = initialLang;
    document.documentElement.setAttribute("lang", initialLang === "ko" ? "ko" : "en");
    applyTranslations(initialLang);

    document.addEventListener("click", function (e) {
        var btn = e.target.closest && e.target.closest("#lang-toggle");
        if (!btn) return;
        e.preventDefault();
        window.setSiteLanguage(window.currentLang === "en" ? "ko" : "en");
    });

    var toggleBtnInit = document.getElementById("lang-toggle");
    if (toggleBtnInit) {
        toggleBtnInit.textContent = TRANSLATIONS[initialLang].lang_toggle;
    }
})();
