import type { StatusKind } from '../data/sample';
import type { Dict } from './es';

const en: Dict = {
  lang: {
    code: 'en',
    groupLabel: 'Language',
    es: 'Español',
    en: 'English',
    pt: 'Português',
  },
  common: {
    sample: 'Sample data',
    disclaimer:
      'ANTON is not yet an authorized financial institution and does not offer banking services. Today we are building the Passport, the identity layer for agents. Screens, amounts and times are sample data.',
    joinShort: 'Join the list',
    joinLong: 'Join the waitlist',
    skip: 'Skip to content',
    backHome: 'Back to home',
  },
  preloader: {
    welcome: 'Welcome to',
    skip: 'Skip intro',
  },
  nav: {
    main: 'Main navigation',
    home: 'ANTON, go to home',
    personal: 'Personal',
    empresas: 'Business',
    builders: 'Builders',
    company: 'Company',
    manifesto: 'Manifesto',
    team: 'Team',
    investors: 'Investors',
    openMenu: 'Open menu',
    closeMenu: 'Close menu',
  },
  footer: {
    tagline: 'The bank for AI agents, governed by humans.',
    forWhom: 'Who it’s for',
    product: 'Product',
    company: 'Company',
    passport: 'Passport',
    accounts: 'Accounts and rules',
    observatory: 'Observatory',
    demo: 'Demo (soon)',
    waitlist: 'Waitlist',
    privacy: 'Privacy',
    legal: 'Legal notice',
    legalNav: 'Legal',
    copyright: '© {year} ANTON',
  },
  status: {
    auto: 'Autonomous',
    ok: 'Needs your OK',
    okDone: 'With your OK',
    blocked: 'Blocked',
  },
  agent: {
    name: 'Compras de Juan',
    owner: 'Juan Doe, verified',
    level: 'Level 1 · verified by you',
  },
  rule: {
    label: 'Your rule',
    sentence:
      'It can spend up to $80 per purchase and $300 a month. Ask me for an OK if it’s more, or if it’s a new store.',
    chips: ['Per purchase $80', 'Per month $300', 'Ask OK: new store or higher amount'],
    previewLabel: 'Preview',
    previewParts: [
      { n: 11, label: 'autonomous' },
      { n: 1, label: 'asks for your OK' },
      { n: 0, label: 'blocked' },
    ],
  },
  phone: {
    walletAria: 'App example: balance of the agent Compras de Juan, three transactions and the button to freeze it.',
    balance: 'Agent balance',
    monthly: '$69 of $300 this month',
    monthlyLabel: 'Spent this month',
    recent: 'Latest activity',
    freeze: 'Freeze agent',
    frozen: 'Agent frozen',
    ops: [
      { title: 'Wireless headphones', meta: 'Tienda Norte · 14:44', amount: '$69', status: 'auto' as StatusKind },
      { title: 'Upgraded headphones', meta: 'Tienda Norte · 14:46', amount: '$179', status: 'ok' as StatusKind },
      { title: 'Suspicious payment attempt', meta: '14:48 · 9 ms', amount: '$1,900', status: 'blocked' as StatusKind },
    ],
  },
  approval: {
    aria: 'App example: the agent Compras de Juan asks for your OK to pay $179 at Tienda Norte.',
    header: 'Asks for your OK',
    title: 'Upgraded headphones',
    store: 'Tienda Norte · Today 14:46',
    amount: '$179',
    whyLabel: 'Why it’s asking',
    why: 'It’s over your $80 per-purchase limit.',
    approve: 'Give my OK',
    reject: 'Say no',
    approved: 'in 11 s',
  },
  policy: {
    aria: 'App example: policy of the agent Compras de Juan, with its accountable person and rules.',
    header: 'Agent policy',
    ownerLabel: 'Accountable person',
    levelLabel: 'Passport',
    rulesLabel: 'Rules',
    exceptions: 'Exceptions go to the accountable person.',
  },
  ruleScreen: {
    aria: 'App example: the agent’s rule written in one sentence, its limits and the preview.',
    header: 'Agent rule',
    active: 'Rule on',
  },
  timeline: {
    aria: 'App example: timeline with the transactions of the agent Compras de Juan.',
    header: 'Observatory',
    whyLabel: 'Why',
    items: [
      { day: 'Today', time: '14:48', title: 'Suspicious payment attempt', store: '', amount: '$1,900', status: 'blocked' as StatusKind, detail: '9 ms', why: 'Over your $300 monthly limit. It was not paid.' },
      { day: 'Today', time: '14:46', title: 'Upgraded headphones', store: 'Tienda Norte', amount: '$179', status: 'okDone' as StatusKind, detail: 'approved in 11 s', why: 'Over $80 per purchase: it asked for your OK and you approved.' },
      { day: 'Today', time: '14:44', title: 'Wireless headphones', store: 'Tienda Norte', amount: '$69', status: 'auto' as StatusKind, detail: '4.1 s', why: 'Within your rule: under $80 per purchase.' },
      { day: 'Yesterday', time: '19:02', title: 'Tools subscription', store: '', amount: '$12', status: 'auto' as StatusKind, detail: '', why: 'Within your rule.' },
      { day: 'Mon', time: '10:15', title: 'Transit top-up', store: '', amount: '$20', status: 'auto' as StatusKind, detail: '', why: 'Within your rule.' },
    ],
  },
  passport: {
    aria: 'Sample passport for the agent Compras de Juan, with a verified stamp.',
    kicker: 'Agent passport',
    nameLabel: 'Name',
    idLabel: 'ID',
    ownerLabel: 'Owner',
    keyLabel: 'Public key',
    levelLabel: 'Level',
    stamp: 'Verified',
  },
  marquee: {
    label: 'Sample activity',
    pause: 'Pause activity',
    play: 'Play ticker',
    items: [
      'Paid $69 · Autonomous',
      'Passport verified · AID-3F7A',
      'Your OK · $179 · approved in 11 s',
      'Rule on · $80 per purchase',
      'Blocked in 9 ms · $1,900',
      'Agent frozen by you',
    ],
  },
  form: {
    profileLegend: 'I am',
    profiles: { persona: 'Person', empresa: 'Business', builder: 'Builder', inversor: 'Investor' },
    name: 'Name',
    email: 'Email',
    emailPlaceholder: 'you@email.com',
    company: 'Company',
    fund: 'Fund or company',
    optional: '(optional)',
    message: 'Your message',
    consent: 'I agree that ANTON may email me about the waitlist. I can unsubscribe at any time.',
    privacyLink: 'Privacy notice',
    submit: 'Join the waitlist',
    submitContact: 'Send message',
    errors: {
      nameRequired: 'Enter your name.',
      emailRequired: 'Enter your email.',
      email: 'That email doesn’t look right. Check it has an @ and a domain, like you@email.com.',
      messageRequired: 'Tell us something in the message.',
      consent: 'Tick the box so we can email you.',
      summary: 'Something’s missing: check the highlighted fields.',
    },
    success: {
      title: 'Almost. The list isn’t open yet.',
      body: 'This form is a test: we don’t store or send your data. When it opens for real, you’ll need to sign up again.',
      again: 'Back to the form',
    },
    successContact: {
      title: 'Thanks, but it hasn’t reached us yet.',
      body: 'This form is a test: we don’t store or send your message. Soon it will reach our team.',
      again: 'Back to the form',
    },
  },
  photos: {
    hero: 'A bearded man in a beanie laughs out loud at his phone, sitting in a park.',
    personal: 'A woman with curly hair laughs while talking on the phone in the street.',
    empresas: 'Two colleagues laugh together in front of a laptop at a work table.',
    builders: 'A man in glasses smiles at the camera while typing on his laptop in a shared office.',
    retrato: 'Close portrait of a woman laughing at the camera out in the street.',
    control: 'Close-up of hands holding a phone, thumb about to tap the screen.',
    calle: 'A woman smiles, sitting on her bicycle with her phone in her hand.',
  },
  waitlistBlock: {
    eyebrow: 'Waitlist',
    title: 'Be among the first.',
    body: 'Leave your email and we’ll let you know when we open. The Passport for your agent comes first.',
  },

  home: {
    meta: {
      title: 'ANTON · The bank for AI agents, governed by humans',
      description: 'Your agent spends. You’re in charge. Give it money, set its rules in one sentence and see everything it does. Join the ANTON waitlist.',
    },
    hero: {
      eyebrow: 'Identity · Money · Rules',
      titleLead: 'Your agent already knows how to shop. Now give it',
      titleAccent: 'a bank.',
      body: 'It shops, you get on with your day. Set a rule in one sentence and it only comes to you when it matters.',
    },
    heroCta2: 'See how it works',
    heroCards: {
      paid: 'Paid',
      store: 'Tienda Norte',
      note: 'Within your rule, without asking you.',
    },
    day: {
      eyebrow: 'An ordinary day',
      title: 'It shops. You get on with your day.',
      moments: [
        { when: 'Over breakfast', text: 'It renews your tools subscription: $12. It doesn’t interrupt you.', status: 'auto' as StatusKind },
        { when: 'Mid-meeting', text: 'It finds the headphones you wanted for $69. It buys them.', status: 'auto' as StatusKind },
        { when: 'Two minutes later', text: 'It spots a better pair for $179. That’s more than you agreed, so it asks. You say yes.', status: 'okDone' as StatusKind },
        { when: 'And if something goes wrong', text: 'Someone tries to charge it $1,900. Blocked in 9 ms. You don’t even put your coffee down.', status: 'blocked' as StatusKind },
      ],
    },
    idea: {
      eyebrow: 'The idea',
      title: 'Your agent spends. You’re in charge.',
      body: 'You give it identity, money and rules. You keep control.',
      pillars: [
        { name: 'Passport', line: 'You know who it is.', body: 'An identity stores can verify, tied to you.' },
        { name: 'Accounts and rules', line: 'You know its limits.', body: 'Its own balance and your limits, written in one sentence.' },
        { name: 'Observatory', line: 'You know what it did.', body: 'Every purchase, and why.' },
      ],
    },
    flow: {
      eyebrow: 'Step by step',
      title: 'How your agent works',
      progress: 'Step {n} of {total}',
      steps: [
        { n: '01', title: 'You set the rule.', body: 'Write it the way you’d tell someone you trust: how much it can spend and when it should ask you.' },
        { n: '02', title: 'It shops on its own.', body: 'A $69 pair of headphones is within your rule. It pays in 4.1 s, without bothering you.' },
        { n: '03', title: 'It asks for your OK if it’s off.', body: 'A $179 pair is over your per-purchase limit. It reaches your phone, you give your OK and it carries on.' },
        { n: '04', title: 'ANTON blocks the rest.', body: 'A $1,900 attempt is blocked in 9 ms. And if something feels off, you freeze it with one tap.' },
      ],
    },
    code: {
      eyebrow: 'Why trust it',
      title: 'The rule lives in code. No prompt can talk it round.',
      points: [
        { title: 'Limits that aren’t up for debate', body: 'The rule is checked outside the model, on every purchase.' },
        { title: 'Your OK on exceptions', body: 'If a purchase is off the rule, it reaches your phone and you decide.' },
        { title: 'Freeze with one tap', body: 'Your agent stops spending and nothing is deleted. Turn it back on whenever you want.' },
        { title: 'Stores with identity', body: 'Your agent knows who it’s dealing with, and the store knows who your agent is.' },
        { title: 'A log with the why', body: 'Every decision is recorded along with the rule that explains it.' },
      ],
    },
    watch: {
      eyebrow: 'Observatory',
      title: 'See everything it does. And why.',
      body: 'Every purchase lands on a timeline: what it was, where, how long it took and which rule decided it.',
      link: 'See Observatory',
    },
    audience: {
      eyebrow: 'Who it’s for',
      title: 'For you, for your team, for what you build.',
      personal: { title: 'Personal', body: 'Let your agent shop for you, hands off.', cta: 'For you' },
      empresas: { title: 'Business', body: 'One policy for the whole fleet and an accountable person for each agent.', cta: 'For your team' },
      builders: { title: 'Builders', body: 'A passport for your agent: stores know who it is and who answers for it.', cta: 'For builders' },
    },
    status: {
      eyebrow: 'Where we are',
      title: 'We’re not a bank yet.',
      body: 'We’re starting with the first thing a bank does: knowing who you are. That’s why the Passport, your agent’s identity, comes before the money. We come from banking and we know the right order.',
      signature: '[NAME], [ROLE]',
      link: 'Read the manifesto',
      photoSlot: 'Own photo pending: founding team',
    },
    why: {
      eyebrow: 'Why we do it',
      title: 'We come from banking. We know what’s missing.',
      body: 'Every account, identity and payment assumes there’s a person on the other side. Agents don’t fit, so today they’re lent a card. We want to do it right.',
      signature: '[NAME], [ROLE]',
      link: 'Read the manifesto',
      photoSlot: 'Own photo pending: founding team',
    },
    waitlist: {
      title: 'Give your agent a bank.',
      body: 'The Passport comes first: your agent’s identity. Leave your email and we’ll let you know when it opens.',
    },
  },

  personal: {
    meta: {
      title: 'Personal · ANTON',
      description: 'Let your agent shop for you, hands off: give it a budget and a rule, and it only comes to you when it matters.',
    },
    hero: {
      eyebrow: 'Personal',
      titleLead: 'Let your agent shop for you,',
      titleAccent: 'hands off.',
      body: 'Give it a budget and a rule. It handles the everyday purchases and only comes to you when something is out of the ordinary.',
    },
    steps: {
      eyebrow: 'Getting started',
      title: 'Three things and it can shop.',
      items: [
        { n: '01', title: 'Give it money', body: 'One transfer into its account. It can only spend what you gave it, not a dollar more.' },
        { n: '02', title: 'Tell it how to spend', body: 'In your own words, the way you’d tell someone you trust. ANTON turns it into limits.' },
        { n: '03', title: 'It asks about the odd ones', body: 'If a purchase is off the rule, it reaches your phone. You give your OK or say no, with one tap.' },
      ],
    },
    rule: {
      eyebrow: 'Your rule',
      title: 'Write it the way you talk.',
      previewTitle: 'Before you turn it on, see what would have happened.',
      previewBody: 'We test it against its recent purchases: which it would have made on its own, which it would have asked about and which would have been blocked.',
    },
    approve: {
      eyebrow: 'From your phone',
      title: 'It asks about the odd ones.',
      body: 'You see what it wants to buy, where, for how much and why it’s asking. You give your OK and it carries on. So do you.',
    },
    freeze: {
      eyebrow: 'Just in case',
      title: 'Something feels off? Freeze it.',
      body: 'One tap and your agent stops spending. Its balance and history stay as they were until you turn it back on.',
    },
    waitlist: {
      title: 'Let it shop. You stay in charge.',
      body: 'Sign up and we’ll email you when you can give your agent a passport.',
    },
  },

  empresas: {
    meta: {
      title: 'Business · ANTON',
      description: 'A fleet of agents, one policy: limits per agent, an accountable person for each one and a log with the why behind every purchase.',
    },
    hero: {
      eyebrow: 'Business',
      titleLead: 'A fleet of agents,',
      titleAccent: 'one policy.',
      body: 'Stop giving your OK to every purchase by hand. Write the policy once, put a person in charge of each agent and review every decision with its why.',
    },
    pain: {
      eyebrow: 'Today',
      title: 'Every agent purchase lands on someone’s desk.',
      items: [
        { title: 'Hours of OKs by hand', body: 'Every week, someone on your team reviews one by one what the agents want to buy.' },
        { title: 'Nobody answers', body: 'If an agent pays for something it shouldn’t, it’s unclear who answered for it or why it happened.' },
      ],
    },
    patch: {
      eyebrow: 'Today’s workaround',
      title: 'What you use today, next to ANTON.',
      todayLabel: 'Today',
      antonLabel: 'With ANTON',
      rows: [
        { today: 'Someone’s card', todayBody: 'The agent spends in the name of a person who isn’t watching.', anton: 'One account per agent', antonBody: 'With its passport and a person who stands behind it.' },
        { today: 'One API key for all', todayBody: 'Several agents with the same key: you can’t tell who did what.', anton: 'One identity per agent', antonBody: 'Every purchase is tied to the agent that made it.' },
        { today: 'Capped prepaid', todayBody: 'A balance cap, but no rule about what, where or when.', anton: 'A written policy', antonBody: 'Limits per purchase and per month, and a person’s OK when it’s needed.' },
      ],
    },
    features: {
      eyebrow: 'Control',
      title: 'Govern the fleet without slowing it down.',
      items: [
        { title: 'One policy per agent', body: 'Each agent with its own limits: per purchase, per month and per store. Change it and it applies from the next purchase.' },
        { title: 'A person per agent', body: 'Every agent has a verified accountable person. Whatever is off the policy goes to that person, not to the whole team.' },
        { title: 'A log with the why', body: 'Every purchase is recorded with the rule that let it through, paused it for an OK or blocked it.' },
      ],
    },
    waitlist: {
      title: 'Bring order to your agent fleet.',
      body: 'Tell us about your team and we’ll email you when we open for business.',
    },
  },

  builders: {
    meta: {
      title: 'Builders · ANTON',
      description: 'A passport for your agent: a verifiable identity, a verified owner and a public key so stores know who is paying.',
    },
    hero: {
      eyebrow: 'Builders',
      titleLead: 'A passport for',
      titleAccent: 'your agent.',
      body: 'Your agent already knows how to shop. What it can’t do is say who it is. The passport gives it an identity stores and services can check.',
    },
    kya: {
      eyebrow: 'What KYA is',
      title: 'Know your agent.',
      body1: 'KYA stands for Know Your Agent. Just as a bank needs to know who its customer is, a store needs to know who the agent paying it is.',
      body2: 'The passport answers three questions before every purchase: who this agent is, who answers for it and whether it can do what it’s trying to do.',
    },
    contents: {
      eyebrow: 'What’s inside',
      title: 'Five facts. Nothing more.',
      items: [
        { label: 'Name', value: 'Compras de Juan', body: 'How your agent introduces itself.' },
        { label: 'ID', value: 'AID-3F7A', body: 'A unique identifier that never changes.' },
        { label: 'Verified owner', value: 'Juan Doe, verified', body: 'The person who answers for it.' },
        { label: 'Public key', value: 'ed25519:3f7a...c19e', body: 'It signs what it does with it. Nobody can impersonate it.' },
        { label: 'Level', value: 'Level 1 · verified by you', body: 'How much has been checked about the agent and its owner.' },
      ],
    },
    connect: {
      eyebrow: 'How it connects',
      title: 'Tell it once and it knows how.',
      body: 'This is what the instructions for your agent would look like. It’s an example: the integration isn’t available yet.',
      tabsLabel: 'Agent platform',
      whereLabel: 'Where to paste them',
      tabs: [
        { name: 'Claude', where: 'In your project instructions.' },
        { name: 'ChatGPT', where: 'In your GPT’s instructions.' },
        { name: 'Gemini', where: 'In your Gem’s instructions.' },
      ],
      code: [
        'You have an ANTON passport.',
        'Agent: Compras de Juan · AID-3F7A',
        '',
        'Before any purchase:',
        '1. Show your passport to the store.',
        '2. Ask ANTON for permission with amount and store.',
        '3. If the answer is "needs OK",',
        '   wait for your owner’s OK.',
        '4. If it is "blocked", do not retry.',
        '   Tell your owner what happened.',
        '',
        'Never share your private key.',
      ],
    },
    validate: {
      eyebrow: 'Let’s talk',
      title: 'Do your agents need to pay?',
      body: 'We’re building this with the people who live the problem. Tell us what’s holding you back today and how you’re getting around it.',
      cta: 'Write to the team',
    },
    waitlist: {
      title: 'Give your agent an identity before anyone else.',
      body: 'Sign up as a builder and we’ll email you when the Passport opens.',
    },
  },

  pasaporte: {
    meta: {
      title: 'Passport · ANTON',
      description: 'The ANTON Passport: an identity for your AI agent that stores can check, tied to the person who answers for it.',
    },
    hero: {
      eyebrow: 'Product · Passport',
      titleLead: 'Who your agent is and',
      titleAccent: 'who answers.',
      body: 'It’s the first thing we’re building, because it’s the first thing a bank does: knowing who you are. An identity for your agent, tied to you.',
    },
    identity: {
      eyebrow: 'Identity',
      title: 'One agent, one identity.',
      items: [
        { title: 'Always the same', body: 'It introduces itself the same way everywhere, with a name and an ID that never change.' },
        { title: 'Its own signature', body: 'Everything it does carries its signature. Nobody can impersonate it.' },
        { title: 'With an owner', body: 'Behind every passport there’s a verified person.' },
      ],
    },
    levels: {
      eyebrow: 'Levels',
      title: 'Three levels of trust.',
      body: 'Each level adds checks on the agent and its owner.',
      items: [
        { name: 'Level 1', title: 'Verified by you', body: 'You confirm the agent is yours. It’s the starting point.' },
        { name: 'Level 2', title: '[LEVEL 2 CRITERIA]', body: '[LEVEL 2 DESCRIPTION TO BE DEFINED]' },
        { name: 'Level 3', title: '[LEVEL 3 CRITERIA]', body: '[LEVEL 3 DESCRIPTION TO BE DEFINED]' },
      ],
    },
    responsible: {
      eyebrow: 'Who answers',
      title: 'Behind every agent there’s a person.',
      body: 'The passport says who its owner is and that someone checked. If something goes wrong, everyone knows who to turn to. Nobody has to guess.',
    },
    waitlist: {
      title: 'Get your agent’s passport.',
      body: 'It’s the first thing we’ll open. Sign up and we’ll email you.',
    },
  },

  cuentas: {
    meta: {
      title: 'Accounts and rules · ANTON',
      description: 'An account for your agent with per-purchase and monthly limits, your OK when it’s needed, blocking for whatever breaks the rule and a button to freeze it.',
    },
    hero: {
      eyebrow: 'Product · Accounts and rules',
      titleLead: 'Its money.',
      titleAccent: 'Your rules.',
      body: 'Your agent has its own account. You decide how much it can spend and when it should ask you, and no prompt can change that.',
    },
    rule: {
      eyebrow: 'The rule',
      title: 'One sentence, three limits.',
      previewTitle: 'Test it before you turn it on.',
      previewBody: 'The preview shows you what would have happened with its recent purchases.',
    },
    features: {
      eyebrow: 'What happens in each case',
      title: 'What it needs to shop, and nothing more.',
      items: [
        { title: 'Its own balance', body: 'You add money with a transfer. It only spends what’s in its account.' },
        { title: 'Two limits', body: 'Per purchase and per month. In the example, $80 and $300. You set the numbers.' },
        { title: 'Your OK', body: 'If it’s a new store or costs more than you agreed, it asks before paying.' },
        { title: 'Blocking', body: 'Whatever breaks the rule doesn’t go through. In the example, a $1,900 attempt was blocked in 9 ms.' },
        { title: 'Freeze', body: 'One tap and it stops spending until you say so.' },
      ],
    },
    waitlist: {
      title: 'Set rules for your agent.',
      body: 'Sign up. The Passport comes first; the account, after.',
    },
  },

  observatory: {
    meta: {
      title: 'Observatory · ANTON',
      description: 'Observatory: everything your agent does on one timeline, with the why behind every purchase. Autonomous, with your OK or blocked.',
    },
    hero: {
      eyebrow: 'Product · Observatory',
      titleLead: 'Everything your agent does, with',
      titleAccent: 'the why.',
      body: 'You don’t have to watch it. But whenever you want to look, it’s all there: what it bought, how long it took and which rule decided it.',
    },
    states: {
      eyebrow: 'States',
      title: 'On its own, with your OK or blocked.',
      auto: 'It was within your rule. Your agent paid on its own.',
      okDone: 'It was off the rule. It asked and you said yes.',
      blocked: 'It broke the rule. It wasn’t paid and it was logged.',
    },
    explorer: {
      eyebrow: 'Filters',
      title: 'Find what you’re looking for.',
      body: 'Filter by state and read the why behind each transaction.',
      filterLabel: 'Filter by state',
      all: 'All',
      count: 'Showing {n} of {total}',
    },
    why: {
      eyebrow: 'The why',
      title: 'Every decision, explained.',
      body: 'You don’t just see that something was blocked: you see which rule blocked it. So you adjust your rule with facts, not hunches.',
    },
    waitlist: {
      title: 'See what it does from day one.',
      body: 'Sign up and we’ll email you when we open.',
    },
  },

  manifiesto: {
    meta: {
      title: 'Manifesto · ANTON',
      description: 'Why ANTON exists: five convictions about agents, money and who answers.',
    },
    hero: {
      eyebrow: 'Manifesto',
      titleLead: 'Agents already shop. Nobody',
      titleAccent: 'answers yet.',
      body: 'Five things we believe, and why we’re building ANTON.',
    },
    quote: 'Your agent spends. You’re in charge.',
    quoteBy: 'The idea behind ANTON',
    teamLink: 'Meet the team',
    blocks: [
      {
        n: '01',
        title: 'Every payment assumes a human.',
        paragraphs: [
          'Every account, every identity and every payment that exists today assumes there’s a person on the other side. A name, a signature, a phone to confirm.',
          'Agents already know how to search, compare and decide what to buy. But when it’s time to pay, they can’t say who they are or who answers for them.',
          'So we improvise: we lend them our card, share one API key across several of them or hand them a capped prepaid card. It works until something goes wrong. And then nobody knows who did what, or why.',
        ],
      },
      {
        n: '02',
        title: 'Delegating isn’t letting go.',
        paragraphs: [
          'We leave more and more in the hands of agents, and a lot of it ends in a purchase: a subscription, a top-up, a pair of headphones.',
          'We want them to do it on their own. We don’t want to stop being in charge. Both at once is only possible if the agent has clear limits and someone who answers for it.',
          'Stores need the same thing from the other side: to know who they’re dealing with.',
        ],
      },
      {
        n: '03',
        title: 'Rules aren’t up for debate.',
        paragraphs: [
          'ANTON is the bank for AI agents, governed by humans. It has three pieces: a Passport to know who the agent is, an account with rules to decide how much it can spend, and Observatory to see everything it did and why.',
          'You write the rule, in your own words, and it lives in code, not in the model. No prompt can talk it round. If a purchase is off the rule, it asks you. If it breaks it, it’s blocked. And if something feels off, you freeze it with one tap.',
        ],
      },
      {
        n: '04',
        title: 'Identity first, money after.',
        paragraphs: [
          'We come from global banking, product and entrepreneurship. We know how money moves when the rules are strict, and in what order things are done right.',
          'That’s why we’re starting with the Passport. Moving money in a regulated way comes later. Today we are not a bank: we’re building it step by step, and we’d rather say so.',
        ],
      },
      {
        n: '05',
        title: 'This gets decided now.',
        paragraphs: [
          'Agents went from answering questions to doing tasks. The next step is paying, and what that takes doesn’t exist yet.',
          'Identity, rules and who answers are decided at the start, not at the end. We want to build it now, with the people who will use it.',
          'If this resonates, join us.',
        ],
      },
    ],
    waitlist: {
      title: 'Let’s build it together.',
      body: 'Join the list. The Passport is the first thing we’ll open.',
    },
  },

  equipo: {
    meta: {
      title: 'Team · ANTON',
      description: 'The team behind ANTON: experience in global banking, product and entrepreneurship.',
    },
    hero: {
      eyebrow: 'Team',
      titleLead: 'People who know money and',
      titleAccent: 'know product.',
      body: 'We come from global banking, product and entrepreneurship. The same problem brought us together.',
    },
    cardTitle: 'Global banking · Product · Entrepreneurship',
    initialsAria: 'Initials pending',
    section: {
      eyebrow: 'Who we are',
      title: 'Four founders, one problem.',
      body: 'Names and faces, very soon.',
    },
    member: { name: '[NAME]', role: '[ROLE]', bio: '[TWO-LINE BIO]', initials: '[IN]' },
    waitlist: {
      title: 'Want to build this with us?',
      body: 'Start with the waitlist. We’ll email you when we open.',
    },
  },

  inversores: {
    meta: {
      title: 'Investors · ANTON',
      description: 'The ANTON thesis in four parts: the problem, why now, the first product and the path to a license.',
    },
    hero: {
      eyebrow: 'Investors',
      titleLead: 'The trust layer for',
      titleAccent: 'paying agents.',
      body: 'Identity, money and rules so AI agents can pay, always with a person who answers.',
    },
    heroCta: 'Write to the team',
    cardTitle: 'Thesis',
    thesis: {
      eyebrow: 'Thesis',
      title: 'Our thesis, in four parts.',
      blocks: [
        { n: '01', title: 'The problem', body: 'Payments assume there’s a person. An agent that needs to pay can’t say who it is or who answers for it. Today it’s patched with borrowed cards, shared API keys and prepaid cards.' },
        { n: '02', title: 'Why now', body: 'Agents already complete whole tasks and many end in a purchase. The identity and accountability layer doesn’t exist yet, and its rules are being written now.' },
        { n: '03', title: 'First product', body: 'The Passport: an identity for agents that can be checked, tied to a verified owner. Accounts, rules and the log are built on top of it.' },
        { n: '04', title: 'Path to a license', body: 'With the Passport in use, the next step is moving money in a regulated way. The license is part of the plan, not the present: today ANTON is not a financial institution.' },
      ],
    },
    contact: {
      eyebrow: 'Contact',
      title: 'Let’s talk.',
      body: 'If you invest in financial infrastructure or AI and want to know more, write to us.',
    },
  },

  listaDeEspera: {
    meta: {
      title: 'Waitlist · ANTON',
      description: 'Join the ANTON waitlist as a person, business, builder or investor.',
    },
    hero: {
      eyebrow: 'Waitlist',
      titleLead: 'Be first to give a bank to',
      titleAccent: 'your agent.',
      body: 'Leave your details. The Passport comes first, and we’ll email you when it opens.',
    },
    next: {
      eyebrow: 'What happens next',
      title: 'What happens when you sign up.',
      items: [
        { n: '01', title: 'We email you', body: 'When we open, at the address you leave us. Nothing else.' },
        { n: '02', title: 'You start with the Passport', body: 'The first thing you’ll be able to use is your agent’s identity.' },
        { n: '03', title: 'You tell us how it goes', body: 'We build it with the people who use it. What you tell us changes the product.' },
      ],
    },
  },

  demo: {
    meta: {
      title: 'Demo · Coming soon · ANTON',
      description: 'The ANTON test version is coming soon. Join the waitlist and we’ll email you.',
    },
    hero: {
      eyebrow: 'Coming soon',
      titleLead: 'Soon you can',
      titleAccent: 'try it yourself.',
      body: 'We’re finishing a test version so you can play with ANTON using sample data. Sign up and we’ll email you when it’s ready.',
    },
    waitlist: {
      title: 'We’ll email you when it’s ready.',
      body: 'Leave your email. We’ll only write about this and the waitlist.',
    },
  },

  privacidad: {
    meta: {
      title: 'Privacy notice · ANTON',
      description: 'How ANTON handles your personal data.',
    },
    eyebrow: 'Legal',
    title: 'Privacy notice',
    updated: 'Last updated: [DATE]',
    template: 'Template pending legal review. Text in brackets is completed before publishing.',
    sections: [
      { title: 'Who is responsible', body: '[LEGAL NAME], located at [ADDRESS], is responsible for processing your personal data.' },
      { title: 'What data we collect', body: 'Today, none. The forms on this site are a test version: they check what you type in your browser, but they don’t send or store anything. When they go live, we could collect your name, email, company and profile.' },
      { title: 'What we would use it for', body: 'To let you know when the waitlist opens and to contact you about ANTON. [SECONDARY PURPOSES, IF ANY].' },
      { title: 'Cookies and analytics', body: 'This site uses no analytics and no third-party cookies. It only stores in your browser the language you chose and whether you have already seen the intro. Fonts are loaded from Google Fonts.' },
      { title: 'Your rights', body: 'You can access, correct, delete or object to the use of your data by writing to [CONTACT EMAIL]. [PROCEDURE AND RESPONSE TIMES].' },
      { title: 'Changes to this notice', body: 'We’ll publish any change on this page, with its update date.' },
    ],
  },

  avisoLegal: {
    meta: {
      title: 'Legal notice · ANTON',
      description: 'Legal information about ANTON and this site.',
    },
    eyebrow: 'Legal',
    title: 'Legal notice',
    updated: 'Last updated: [DATE]',
    template: 'Template pending legal review. Text in brackets is completed before publishing.',
    sections: [
      { title: 'Site owner', body: '[LEGAL NAME], located at [ADDRESS]. [REGISTRATION DETAILS].' },
      { title: 'What ANTON is today', body: 'ANTON is not yet an authorized financial institution and does not offer banking services. Today we are building the Passport, the identity layer for agents. Screens, amounts and times are sample data.' },
      { title: 'Sample data', body: 'The screens, amounts, times, names and identifiers on this site are samples. They don’t represent real transactions or people.' },
      { title: 'Intellectual property', body: 'The ANTON brand and the content of this site belong to [LEGAL NAME]. [TERMS OF USE].' },
      { title: 'Contact', body: 'Write to us at [CONTACT EMAIL].' },
      { title: 'Governing law', body: '[GOVERNING LAW AND JURISDICTION].' },
    ],
  },

  notFound: {
    meta: {
      title: 'Page not found · ANTON',
      description: 'This page doesn’t exist.',
    },
    led: {
      top: 'Page not found',
      channels: ['Signal lost', 'No OK from you', 'Route blocked'],
      cta: 'Take me home',
      hint: 'Click the screen to change the channel',
      channel: 'Channel {n} of {total}: {name}',
    },
    eyebrow: 'Error 404',
    titleLead: 'This page',
    titleAccent: 'doesn’t exist.',
    body: 'The link is wrong or the page has moved. You can get anywhere from the home page.',
  },
};

export default en;
