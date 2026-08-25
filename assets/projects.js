// Shared project data for project.html detail pages.
const PROJECTS = {
  1: {
    cover: 'cards/services-landing.webp',
    badge: { en: 'featured', ru: 'избранное' },
    year: 2026,
    title: { en: 'Services Landing: Priced-in-the-Open Freelance Page', ru: 'Лендинг услуг: цены открыто, без «свяжитесь с нами»' },
    desc: {
      en: [
        '<span class="text-white">Challenge:</span> most freelance pages hide the price behind "contact us", so the visitor has to start a conversation before they know if it is even worth their time. I wanted the opposite: the whole offer readable in one scroll.',
        '<span class="text-white">Result:</span> a conversion-focused landing page with <span class="text-white">four service cards carrying real price bands and delivery times</span>, a written-only process section, and a <span class="text-white">working chatbot demo that runs entirely in the browser</span>: keyword-matched answers, no model, no API key, nothing leaving the page, so it costs nothing at any traffic level. The hero avatar tracks the cursor, a scroll-progress rail follows the reader, and every reveal respects <span class="font-mono text-sm">prefers-reduced-motion</span>. One HTML file, zero dependencies, zero backend, deployed on Vercel.'
      ],
      ru: [
        '<span class="text-white">Задача:</span> большинство фриланс-страниц прячут цену за «свяжитесь с нами», и посетителю приходится начинать разговор ещё до того, как он поймёт, стоит ли это его времени. Я хотел обратного: всё предложение читается за один скролл.',
        '<span class="text-white">Результат:</span> лендинг, заточенный под конверсию: <span class="text-white">четыре карточки услуг с реальными вилками цен и сроками</span>, блок процесса «только переписка» и <span class="text-white">рабочее демо чат-бота, которое целиком работает в браузере</span>: ответы по ключевым словам, без модели, без API-ключа, ничего не уходит со страницы — поэтому оно ничего не стоит при любом трафике. Аватар в шапке следит за курсором, полоса прогресса ведёт читателя по странице, а все появления уважают <span class="font-mono text-sm">prefers-reduced-motion</span>. Один HTML-файл, ноль зависимостей, ноль бэкенда, задеплоено на Vercel.'
      ]
    },
    stats: [
      { value: '1', label: { en: 'HTML file', ru: 'HTML-файл' } },
      { value: '0', label: { en: 'dependencies', ru: 'зависимостей' } },
      { value: '4', label: { en: 'priced services', ru: 'услуги с ценой' } }
    ],
    process: [
      { title: { en: 'Framing the offer', ru: 'Формулировка оферты' }, text: { en: 'Wrote the pricing and delivery times first, so the page had something concrete to be built around.', ru: 'Сначала написал цены и сроки, чтобы у страницы было конкретное ядро, вокруг которого строить.' } },
      { title: { en: 'Designing in one scroll', ru: 'Дизайн в один скролл' }, text: { en: 'Laid out four service cards, a written process section and the proof, all readable without a single click.', ru: 'Разложил четыре карточки услуг, блок процесса и доказательства так, чтобы всё читалось без единого клика.' } },
      { title: { en: 'Shipping it static', ru: 'Выпуск в статике' }, text: { en: 'Built the chatbot demo to run fully in-browser, so the page stays free to host at any traffic level.', ru: 'Сделал демо чат-бота полностью в браузере, чтобы хостинг оставался бесплатным при любом трафике.' } }
    ],
    chips: ['landing-page','vanilla-js','zero-dependency','conversion-copy','vercel'],
    images: ['price-landing.webp','price-landing-pricing.webp','price-landing-chatbot.webp'],
    live: 'https://price-landing.vercel.app/',
    source: 'https://github.com/niktofy/price-landing'
  },
  2: {
    cover: 'logos/dropfix-coin.png',
    badge: { en: 'telegram mini app', ru: 'telegram mini app' },
    year: 2026,
    title: { en: 'DROPFIX: Crypto Mining Platform', ru: 'DROPFIX: платформа крипто-майнинга' },
    desc: {
      en: [
        '<span class="text-white">Challenge:</span> build a complete play-to-earn mining platform as a Telegram Mini App. Not just the game, but the token economy, real crypto payment rails and the operations tools behind it.',
        '<span class="text-white">Result:</span> a shipped two-sided product. <span class="text-white">Player side:</span> DFX token with live price feed and 24h charts, a mining hall of tiered animated GPU rigs, real <span class="text-white">BTC / LTC / USDT deposits &amp; withdrawals</span> (TRC20 &amp; BEP20, per-user QR addresses), and a wheel-of-fortune with purchasable spin credits. <span class="text-white">Operator side:</span> a full admin console: role management, withdrawal review queue, user broadcast, audit log, SQL runner and revenue analytics.'
      ],
      ru: [
        '<span class="text-white">Задача:</span> собрать полноценную play-to-earn майнинг-платформу как Telegram Mini App. Не только игру, но и экономику токена, реальные крипто-платежи и операционные инструменты за ними.',
        '<span class="text-white">Результат:</span> выпущенный двусторонний продукт. <span class="text-white">Со стороны игрока:</span> токен DFX с живым курсом и 24-часовыми графиками, майнинг-зал с анимированными GPU-ригами разных уровней, реальные <span class="text-white">ввод и вывод BTC / LTC / USDT</span> (TRC20 и BEP20, персональные QR-адреса) и колесо фортуны с покупкой спинов. <span class="text-white">Со стороны оператора:</span> полноценная админка: роли, очередь проверки выводов, рассылка пользователям, журнал действий, SQL-раннер и аналитика выручки.'
      ]
    },
    stats: [
      { value: '2', label: { en: 'sided product', ru: 'стороны продукта' } },
      { value: '3', label: { en: 'currencies', ru: 'валюты' } },
      { value: '2', label: { en: 'chains', ru: 'сети' } }
    ],
    process: [
      { title: { en: 'Modelling the economy', ru: 'Модель экономики' }, text: { en: 'Designed the DFX token, rig tiers and payout curve before writing any interface code.', ru: 'Спроектировал токен DFX, уровни ригов и кривую выплат ещё до первой строки интерфейса.' } },
      { title: { en: 'Building the player app', ru: 'Приложение игрока' }, text: { en: 'Animated mining hall, live price feed and the wheel, tuned to stay smooth inside a Telegram WebView.', ru: 'Анимированный майнинг-зал, живой курс и колесо — отлажены под плавность в Telegram WebView.' } },
      { title: { en: 'Wiring real payments', ru: 'Реальные платежи' }, text: { en: 'Per-user deposit addresses on two chains, plus an admin console to review every withdrawal by hand.', ru: 'Персональные адреса пополнения в двух сетях и админка для ручной проверки каждого вывода.' } }
    ],
    chips: ['telegram-mini-app','crypto-payments','tokenomics','admin-console','full-stack'],
    images: ['dropfix-app.webp','dropfix-admin.webp','dropfix-charts.webp','dropfix-deposit.webp','dropfix-wheel.webp'],
    source: 'https://github.com/niktofy/dropfix'
  },
  3: {
    cover: 'logos/focus-quest-logo.png',
    badge: { en: 'desktop app', ru: 'десктоп-приложение' },
    year: 2026,
    title: { en: 'Focus Quest: Gamified Productivity App', ru: 'Focus Quest: геймифицированный трекер задач' },
    desc: {
      en: [
        '<span class="text-white">Challenge:</span> task managers feel flat and don\'t motivate follow-through, so I turned productivity into an RPG.',
        '<span class="text-white">Result:</span> a full native desktop app: XP &amp; HP system, weekly boss fights, skill tree, streaks, focus timer, voice commands and system-tray integration. Django backend + PyWebView native shell.'
      ],
      ru: [
        '<span class="text-white">Задача:</span> таск-менеджеры ощущаются плоско и не мотивируют доводить дела до конца, поэтому я превратил продуктивность в RPG.',
        '<span class="text-white">Результат:</span> полноценное десктопное приложение: система XP и HP, еженедельные боссы, дерево навыков, серии, таймер фокуса, голосовые команды и интеграция с системным треем. Бэкенд на Django + нативная оболочка PyWebView.'
      ]
    },
    stats: [
      { value: 'XP', label: { en: 'progression system', ru: 'система прогресса' } },
      { value: '7d', label: { en: 'boss cycle', ru: 'цикл боссов' } },
      { value: '2', label: { en: 'input modes', ru: 'способа ввода' } }
    ],
    process: [
      { title: { en: 'Borrowing from RPGs', ru: 'Заимствование из RPG' }, text: { en: 'Mapped everyday tasks onto XP, HP and a skill tree, so finishing work actually moves a bar.', ru: 'Наложил обычные задачи на XP, HP и дерево навыков, чтобы завершённое дело реально двигало полоску.' } },
      { title: { en: 'Making it native', ru: 'Нативная оболочка' }, text: { en: 'Django handles the logic, PyWebView wraps it as a real desktop app with system-tray presence.', ru: 'Django отвечает за логику, PyWebView оборачивает всё в настоящее десктоп-приложение с треем.' } },
      { title: { en: 'Removing friction', ru: 'Убрать трение' }, text: { en: 'Added voice commands and a focus timer so logging progress never interrupts the work itself.', ru: 'Добавил голосовые команды и таймер фокуса, чтобы учёт прогресса не прерывал саму работу.' } }
    ],
    chips: ['python','django','pywebview','speech-recognition','gamification'],
    images: ['focusquest.webp','focusquest-quests.webp','focusquest-quests2.webp','focusquest-focus.webp','focusquest-objectives.webp','focusquest-skilltree.webp','focusquest-shop.webp','focusquest-stats.webp','focusquest-settings.webp'],
    source: 'https://github.com/niktofy/focus-quest'
  },
  4: {
    cover: 'cards/neonhud.webp',
    badge: { en: 'crypto dashboard', ru: 'крипто-дашборд' },
    year: 2026,
    title: { en: 'NeonHUD: Interactive Crypto Markets App', ru: 'NeonHUD: интерактивное приложение крипторынков' },
    desc: {
      en: [
        '<span class="text-white">Challenge:</span> a full trading-desk experience on <span class="text-white">real market data</span>: interactive, stateful and fast, from a single HTML file with no backend.',
        '<span class="text-white">Result:</span> 10 live coins from the CoinGecko API with <span class="text-white">click-to-chart selection, 24H/7D/30D timeframes, search, sortable columns, 7-day sparklines per coin, a persistent ★ watchlist (localStorage) and a live USD ⇄ coin converter</span>, plus graceful simulated fallback when the API is unreachable.'
      ],
      ru: [
        '<span class="text-white">Задача:</span> ощущение полноценного торгового терминала на <span class="text-white">реальных рыночных данных</span>: интерактивно, с состоянием и быстро — из одного HTML-файла без бэкенда.',
        '<span class="text-white">Результат:</span> 10 монет в реальном времени через API CoinGecko: <span class="text-white">выбор монеты кликом с перерисовкой графика, таймфреймы 24H/7D/30D, поиск, сортировка колонок, 7-дневные спарклайны по каждой монете, постоянный ★ watchlist (localStorage) и живой конвертер USD ⇄ монета</span>, плюс аккуратный переход на симулированные данные, когда API недоступен.'
      ]
    },
    stats: [
      { value: '10', label: { en: 'live coins', ru: 'монет вживую' } },
      { value: '3', label: { en: 'timeframes', ru: 'таймфрейма' } },
      { value: '0', label: { en: 'backend', ru: 'бэкенда' } }
    ],
    process: [
      { title: { en: 'Pulling real data', ru: 'Реальные данные' }, text: { en: 'Wired the CoinGecko API directly from the browser, with a simulated fallback when it is unreachable.', ru: 'Подключил API CoinGecko прямо из браузера, с симулированным откатом, когда он недоступен.' } },
      { title: { en: 'Making it stateful', ru: 'Состояние на клиенте' }, text: { en: 'Click-to-chart selection, sortable columns and a ★ watchlist that survives a reload via localStorage.', ru: 'Выбор монеты кликом, сортировка колонок и ★ watchlist, переживающий перезагрузку через localStorage.' } },
      { title: { en: 'Keeping it one file', ru: 'Всё в одном файле' }, text: { en: 'Everything ships as a single HTML document, so it hosts anywhere with no build step at all.', ru: 'Всё поставляется одним HTML-документом — хостится где угодно, без единого шага сборки.' } }
    ],
    chips: ['rest-api','chart.js','state-management','real-time','zero-backend'],
    images: ['neonhud-v3.webp'],
    source: 'https://github.com/niktofy/Portofolio/blob/main/demos/neonhud.html'
  },
  5: {
    cover: 'cards/supportdesk.webp',
    badge: { en: 'ai chatbot', ru: 'ai чат-бот' },
    year: 2026,
    title: { en: 'SupportDesk AI: Support Chatbot Widget', ru: 'SupportDesk AI: виджет чат-бота поддержки' },
    desc: {
      en: [
        '<span class="text-white">Challenge:</span> businesses want an AI support chat on their site, but pure-LLM bots hallucinate prices and policies, and that is a real liability.',
        '<span class="text-white">Result:</span> an embeddable chat widget with a <span class="text-white">retrieval-grounded brain</span>: it indexes the client\'s own docs and every answer cites its source. An optional AI mode composes replies strictly from retrieved context, with automatic fallback. Two-line embed on any site, brandable, zero dependencies.'
      ],
      ru: [
        '<span class="text-white">Задача:</span> бизнесу нужен AI-чат поддержки на сайте, но чистые LLM-боты выдумывают цены и условия, а это уже реальный риск.',
        '<span class="text-white">Результат:</span> встраиваемый чат-виджет с <span class="text-white">мозгом на retrieval</span>: он индексирует документы самого клиента, и каждый ответ ссылается на источник. Опциональный AI-режим формулирует ответ строго из найденного контекста, с автоматическим откатом. Встраивание в две строки на любом сайте, под ваш бренд, без зависимостей.'
      ]
    },
    stats: [
      { value: '2', label: { en: 'lines to embed', ru: 'строки для встройки' } },
      { value: '100%', label: { en: 'answers cited', ru: 'ответов с источником' } },
      { value: '0', label: { en: 'dependencies', ru: 'зависимостей' } }
    ],
    process: [
      { title: { en: 'Naming the risk', ru: 'Обозначить риск' }, text: { en: 'Pure-LLM bots invent prices and policies, which is a liability, so retrieval had to come first.', ru: 'Чистые LLM-боты выдумывают цены и условия — это риск, поэтому retrieval был первым.' } },
      { title: { en: 'Grounding every reply', ru: 'Обосновать каждый ответ' }, text: { en: 'The widget indexes the client’s own documents and attaches the source to every single answer.', ru: 'Виджет индексирует документы самого клиента и прикрепляет источник к каждому ответу.' } },
      { title: { en: 'Making it droppable', ru: 'Простая встройка' }, text: { en: 'Two lines of embed code, brandable to the client’s colours, with no framework required.', ru: 'Две строки кода встройки, перекрашивается под бренд клиента, без всякого фреймворка.' } }
    ],
    chips: ['python','llm-api','rag / retrieval','embeddable-widget'],
    images: ['supportdesk.webp'],
    source: 'https://github.com/niktofy/supportdesk-ai'
  },
  6: {
    cover: 'logos/portfolio-logo.png',
    badge: { en: 'web design', ru: 'веб-дизайн' },
    year: 2026,
    title: { en: 'This Website: Custom Portfolio Site', ru: 'Этот сайт: портфолио, сделанное с нуля' },
    desc: {
      en: [
        '<span class="text-white">Challenge:</span> stand out among template portfolios with a fully custom identity, designed, built and shipped without any site builder.',
        '<span class="text-white">Result:</span> a complete design system (Unbounded / Space Grotesk / JetBrains Mono, neon pink &amp; cyan), an animated terminal hero, an EN/RU language switch, scroll-reveal motion that respects <span class="font-mono text-sm">prefers-reduced-motion</span>, keyboard-accessible screenshot lightbox, responsive from 375px up, optimized WebP images. One HTML file, no build step, deployed via GitHub Actions. I build landing pages and sites like this for clients.'
      ],
      ru: [
        '<span class="text-white">Задача:</span> выделиться среди шаблонных портфолио полностью собственной айдентикой — спроектированной, написанной и выпущенной без конструкторов сайтов.',
        '<span class="text-white">Результат:</span> целостная дизайн-система (Unbounded / Space Grotesk / JetBrains Mono, неоновый розовый и циан), анимированная терминальная шапка, переключатель языка EN/RU, появление по скроллу с уважением к <span class="font-mono text-sm">prefers-reduced-motion</span>, лайтбокс скриншотов с управлением с клавиатуры, адаптив от 375px, оптимизированные WebP-картинки. Один HTML-файл, без сборки, деплой через GitHub Actions. Такие лендинги и сайты я делаю и для клиентов.'
      ]
    },
    stats: [
      { value: '2', label: { en: 'languages', ru: 'языка' } },
      { value: '375px', label: { en: 'min width', ru: 'мин. ширина' } },
      { value: '0', label: { en: 'site builders', ru: 'конструкторов' } }
    ],
    process: [
      { title: { en: 'Building a design system', ru: 'Дизайн-система' }, text: { en: 'Picked the type scale, palette and spacing grid first, so every later screen stayed consistent.', ru: 'Сначала выбрал типографику, палитру и сетку отступов, чтобы все экраны остались согласованными.' } },
      { title: { en: 'Writing it twice', ru: 'Написано дважды' }, text: { en: 'Every string exists in English and Russian, swapped live without a page reload or a router.', ru: 'Каждая строка есть на английском и русском, переключается вживую без перезагрузки и роутера.' } },
      { title: { en: 'Respecting the visitor', ru: 'Уважение к посетителю' }, text: { en: 'Keyboard-reachable controls, reduced-motion support and optimized WebP images throughout.', ru: 'Управление с клавиатуры, поддержка reduced-motion и оптимизированные WebP по всему сайту.' } }
    ],
    chips: ['web-design','tailwind','animations','accessibility','i18n','ci/cd'],
    images: ['website.webp'],
    source: 'https://github.com/niktofy/Portofolio'
  },
  7: {
    cover: 'logos/rick-assistant-logo.jpg',
    badge: { en: 'desktop app', ru: 'десктоп-приложение' },
    year: 2026,
    title: { en: 'Rick Assistant: Voice Desktop Assistant', ru: 'Rick Assistant: голосовой ассистент для десктопа' },
    desc: {
      en: [
        '<span class="text-white">Challenge:</span> a JARVIS for your PC that actually does things, with a personality of its own instead of another gray tray utility.',
        '<span class="text-white">Result:</span> a voice-controlled assistant with an animated portal at its core. Say or type <span class="font-mono text-sm">"open youtube"</span>, <span class="font-mono text-sm">"launch notepad"</span> or <span class="font-mono text-sm">"search anything"</span> and it acts, answers out loud, and logs it all in a chat. Live dashboard widgets show RAM, drives and uptime, while file automations (organize downloads, clean temp, batch rename) preview as dry runs before touching anything. New commands drop in as single Python functions.'
      ],
      ru: [
        '<span class="text-white">Задача:</span> JARVIS для вашего ПК, который действительно что-то делает, и со своим характером вместо очередной серой утилиты в трее.',
        '<span class="text-white">Результат:</span> голосовой ассистент с анимированным порталом в центре. Скажите или напишите <span class="font-mono text-sm">"open youtube"</span>, <span class="font-mono text-sm">"launch notepad"</span> или <span class="font-mono text-sm">"search anything"</span> — он выполнит, ответит вслух и запишет всё в чат. Виджеты дашборда показывают RAM, диски и аптайм, а файловые автоматизации (разбор загрузок, чистка temp, пакетное переименование) сначала прогоняются вхолостую, прежде чем что-то тронуть. Новые команды добавляются одной функцией на Python.'
      ]
    },
    stats: [
      { value: '2', label: { en: 'input modes', ru: 'способа ввода' } },
      { value: '3', label: { en: 'live widgets', ru: 'живых виджета' } },
      { value: '1', label: { en: 'function per command', ru: 'функция на команду' } }
    ],
    process: [
      { title: { en: 'Giving it a face', ru: 'Дать ему лицо' }, text: { en: 'An animated portal anchors the interface, so it reads as a character rather than a tray utility.', ru: 'Анимированный портал держит интерфейс — он читается как персонаж, а не утилита в трее.' } },
      { title: { en: 'Making it act', ru: 'Научить действовать' }, text: { en: 'Voice or typed commands launch apps and run searches, then answer out loud and log to the chat.', ru: 'Голосовые или текстовые команды запускают приложения и поиск, отвечают вслух и пишут в чат.' } },
      { title: { en: 'Staying safe', ru: 'Безопасность' }, text: { en: 'File automations preview as dry runs first, so nothing on disk changes without being shown.', ru: 'Файловые автоматизации сначала прогоняются вхолостую — ничего не меняется без предпросмотра.' } }
    ],
    chips: ['python','voice-control','speech-recognition','pywebview','automation'],
    images: ['rick2.webp'],
    source: 'https://github.com/niktofy/rick-assistant'
  }
};

const UI = {
  en: { back: '← Back to portfolio', stack: 'Tech Stack', live: 'Live Demo', source: 'Source Code', caseStudy: 'case_study', process: 'How it was built', next: 'More work' },
  ru: { back: '← Назад в портфолио', stack: 'Технологии', live: 'Смотреть демо', source: 'Исходный код', caseStudy: 'кейс', process: 'Как это сделано', next: 'Другие работы' }
};
