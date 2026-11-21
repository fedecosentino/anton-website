import type { StatusKind } from '../data/sample';
import type { Dict } from './es';

// Português europeu (pt-PT), de "tu". Mesma voz que es.ts e en.ts (ver BRAND-VOICE.md).
const pt: Dict = {
  lang: {
    code: 'pt',
    groupLabel: 'Idioma',
    es: 'Español',
    en: 'English',
    pt: 'Português',
  },
  common: {
    sample: 'Dados de exemplo',
    disclaimer:
      'A ANTON ainda não é uma instituição financeira autorizada e não oferece serviços bancários. Hoje construímos o Passaporte, a camada de identidade para agentes. Os ecrãs, os valores e os tempos são dados de exemplo.',
    joinShort: 'Entrar na lista',
    joinLong: 'Entrar na lista de espera',
    skip: 'Saltar para o conteúdo',
    backHome: 'Voltar ao início',
  },
  preloader: {
    welcome: 'Bem-vindo à',
    skip: 'Saltar intro',
  },
  nav: {
    main: 'Navegação principal',
    home: 'ANTON, ir para o início',
    personal: 'Pessoal',
    empresas: 'Empresas',
    builders: 'Builders',
    company: 'Sobre',
    manifesto: 'Manifesto',
    team: 'Equipa',
    investors: 'Investidores',
    openMenu: 'Abrir menu',
    closeMenu: 'Fechar menu',
  },
  footer: {
    tagline: 'O banco para agentes de IA, governado por humanos.',
    forWhom: 'Para quem',
    product: 'Produto',
    company: 'Sobre',
    passport: 'Passaporte',
    accounts: 'Contas e regras',
    observatory: 'Observatory',
    demo: 'Demo (em breve)',
    waitlist: 'Lista de espera',
    privacy: 'Privacidade',
    legal: 'Aviso legal',
    legalNav: 'Legal',
    copyright: '© {year} ANTON',
  },
  status: {
    auto: 'Autónoma',
    ok: 'Precisa do teu OK',
    okDone: 'Com o teu OK',
    blocked: 'Bloqueada',
  },
  agent: {
    name: 'Compras de Juan',
    owner: 'Juan Doe, verificado',
    level: 'Nível 1 · verificado por ti',
  },
  rule: {
    label: 'A tua regra',
    sentence: 'Pode gastar até $80 por compra e $300 por mês. Pede o meu OK se for mais, ou se for uma loja nova.',
    chips: ['Por compra $80', 'Por mês $300', 'Pedir OK: loja nova ou valor maior'],
    previewLabel: 'Antevisão',
    previewParts: [
      { n: 11, label: 'autónomas' },
      { n: 1, label: 'pede o teu OK' },
      { n: 0, label: 'bloqueadas' },
    ],
  },
  phone: {
    walletAria: 'Exemplo da aplicação: saldo do agente Compras de Juan, três operações e o botão para o congelar.',
    balance: 'Saldo do agente',
    monthly: '$69 de $300 este mês',
    monthlyLabel: 'Gasto do mês',
    recent: 'Últimas operações',
    freeze: 'Congelar agente',
    frozen: 'Agente congelado',
    ops: [
      { title: 'Auscultadores sem fios', meta: 'Tienda Norte · 14:44', amount: '$69', status: 'auto' as StatusKind },
      { title: 'Auscultadores melhores', meta: 'Tienda Norte · 14:46', amount: '$179', status: 'ok' as StatusKind },
      { title: 'Tentativa de pagamento suspeita', meta: '14:48 · 9 ms', amount: '$1,900', status: 'blocked' as StatusKind },
    ],
  },
  approval: {
    aria: 'Exemplo da aplicação: o agente Compras de Juan pede o teu OK para pagar $179 na Tienda Norte.',
    header: 'Pede o teu OK',
    title: 'Auscultadores melhores',
    store: 'Tienda Norte · Hoje 14:46',
    amount: '$179',
    whyLabel: 'Porque pergunta',
    why: 'Passa do teu limite de $80 por compra.',
    approve: 'Dar o meu OK',
    reject: 'Dizer que não',
    approved: 'em 11 s',
  },
  policy: {
    aria: 'Exemplo da aplicação: política do agente Compras de Juan com o seu responsável e as suas regras.',
    header: 'Política do agente',
    ownerLabel: 'Responsável',
    levelLabel: 'Passaporte',
    rulesLabel: 'Regras',
    exceptions: 'As exceções chegam ao responsável.',
  },
  ruleScreen: {
    aria: 'Exemplo da aplicação: a regra do agente escrita numa frase, os seus limites e a antevisão.',
    header: 'Regra do agente',
    active: 'Regra ativa',
  },
  timeline: {
    aria: 'Exemplo da aplicação: cronologia com as operações do agente Compras de Juan.',
    header: 'Observatory',
    whyLabel: 'Porquê',
    items: [
      { day: 'Hoje', time: '14:48', title: 'Tentativa de pagamento suspeita', store: '', amount: '$1,900', status: 'blocked' as StatusKind, detail: '9 ms', why: 'Passa do teu limite de $300 por mês. Não foi pago.' },
      { day: 'Hoje', time: '14:46', title: 'Auscultadores melhores', store: 'Tienda Norte', amount: '$179', status: 'okDone' as StatusKind, detail: 'aprovado em 11 s', why: 'Passa de $80 por compra: pediu o teu OK e tu aprovaste.' },
      { day: 'Hoje', time: '14:44', title: 'Auscultadores sem fios', store: 'Tienda Norte', amount: '$69', status: 'auto' as StatusKind, detail: '4.1 s', why: 'Dentro da tua regra: menos de $80 por compra.' },
      { day: 'Ontem', time: '19:02', title: 'Subscrição de ferramentas', store: '', amount: '$12', status: 'auto' as StatusKind, detail: '', why: 'Dentro da tua regra.' },
      { day: 'Seg', time: '10:15', title: 'Carregamento do passe', store: '', amount: '$20', status: 'auto' as StatusKind, detail: '', why: 'Dentro da tua regra.' },
    ],
  },
  passport: {
    aria: 'Exemplo de passaporte do agente Compras de Juan, com selo de verificado.',
    kicker: 'Passaporte de agente',
    nameLabel: 'Nome',
    idLabel: 'ID',
    ownerLabel: 'Dono',
    keyLabel: 'Chave pública',
    levelLabel: 'Nível',
    stamp: 'Verificado',
  },
  marquee: {
    label: 'Atividade de exemplo',
    pause: 'Pausar actividade',
    play: 'Retomar faixa',
    items: [
      'Pago $69 · Autónoma',
      'Passaporte verificado · AID-3F7A',
      'O teu OK · $179 · aprovado em 11 s',
      'Regra ativa · $80 por compra',
      'Bloqueado em 9 ms · $1,900',
      'Agente congelado por ti',
    ],
  },
  form: {
    profileLegend: 'Sou',
    profiles: { persona: 'Pessoa', empresa: 'Empresa', builder: 'Builder', inversor: 'Investidor' },
    name: 'Nome',
    email: 'E-mail',
    emailPlaceholder: 'tu@email.com',
    company: 'Empresa',
    fund: 'Fundo ou empresa',
    optional: '(opcional)',
    message: 'A tua mensagem',
    consent: 'Aceito que a ANTON me escreva sobre a lista de espera. Posso sair quando quiser.',
    privacyLink: 'Política de privacidade',
    submit: 'Entrar na lista de espera',
    submitContact: 'Enviar mensagem',
    errors: {
      nameRequired: 'Escreve o teu nome.',
      emailRequired: 'Escreve o teu e-mail.',
      email: 'Este e-mail não parece válido. Confirma que tem @ e domínio, como tu@email.com.',
      messageRequired: 'Conta-nos algo na mensagem.',
      consent: 'Assinala a caixa para te podermos escrever.',
      summary: 'Falta algo: revê os campos assinalados.',
    },
    success: {
      title: 'Quase. A lista ainda não abriu.',
      body: 'Este formulário é de teste: não guardamos nem enviamos os teus dados. Quando abrir a sério, vais ter de te inscrever outra vez.',
      again: 'Voltar ao formulário',
    },
    successContact: {
      title: 'Obrigado, mas ainda não nos chega.',
      body: 'Este formulário é de teste: não guardamos nem enviamos a tua mensagem. Em breve chegará à nossa equipa.',
      again: 'Voltar ao formulário',
    },
  },
  photos: {
    hero: 'Um homem de barba e gorro ri à gargalhada a olhar para o telemóvel, sentado num parque.',
    personal: 'Uma mulher de cabelo encaracolado ri enquanto fala ao telemóvel na rua.',
    empresas: 'Duas colegas riem juntas em frente a um portátil numa mesa de trabalho.',
    builders: 'Um homem de óculos sorri para a câmara enquanto escreve no portátil num escritório partilhado.',
    retrato: 'Retrato próximo de uma mulher que ri a olhar para a câmara em plena rua.',
    control: 'Grande plano de umas mãos a segurar um telemóvel, com o polegar prestes a tocar no ecrã.',
    calle: 'Uma mulher sorri sentada na bicicleta, com o telemóvel na mão.',
  },
  waitlistBlock: {
    eyebrow: 'Lista de espera',
    title: 'Sê dos primeiros.',
    body: 'Deixa o teu e-mail e avisamos-te quando abrirmos. O primeiro a chegar é o Passaporte do teu agente.',
  },

  home: {
    meta: {
      title: 'ANTON · O banco para agentes de IA, governado por humanos',
      description: 'O teu agente gasta. Tu mandas. Dá-lhe dinheiro, define as regras numa frase e vê tudo o que ele faz. Entra na lista de espera da ANTON.',
    },
    hero: {
      eyebrow: 'Identidade · Dinheiro · Regras',
      titleLead: 'O teu agente já sabe comprar. Agora dá-lhe',
      titleAccent: 'um banco.',
      body: 'Ele compra, tu segues com a tua vida. Defines uma regra numa frase e ele só te procura quando é preciso.',
    },
    heroCta2: 'Ver como funciona',
    heroCards: {
      paid: 'Pago',
      store: 'Tienda Norte',
      note: 'Dentro da tua regra, sem te pedir nada.',
    },
    day: {
      eyebrow: 'Um dia qualquer',
      title: 'Ele compra. Tu segues o teu dia.',
      moments: [
        { when: 'Ao pequeno-almoço', text: 'Renova a tua subscrição de ferramentas: $12. Não te interrompe.', status: 'auto' as StatusKind },
        { when: 'A meio da reunião', text: 'Encontra os auscultadores que querias por $69. Compra-os.', status: 'auto' as StatusKind },
        { when: 'Dois minutos depois', text: 'Vê uns melhores por $179. É mais do que o combinado, por isso pergunta. Tu dizes que sim.', status: 'okDone' as StatusKind },
        { when: 'E se algo correr mal', text: 'Alguém tenta cobrar-lhe $1,900. Bloqueado em 9 ms. Tu nem pousas o café.', status: 'blocked' as StatusKind },
      ],
    },
    idea: {
      eyebrow: 'A ideia',
      title: 'O teu agente gasta. Tu mandas.',
      body: 'Dás-lhe identidade, dinheiro e regras. O controlo fica contigo.',
      pillars: [
        { name: 'Passaporte', line: 'Sabes quem ele é.', body: 'Uma identidade que as lojas podem verificar, ligada a ti.' },
        { name: 'Contas e regras', line: 'Sabes quanto ele pode.', body: 'Saldo próprio e os teus limites, escritos numa frase.' },
        { name: 'Observatory', line: 'Sabes o que ele fez.', body: 'Cada compra, com o porquê.' },
      ],
    },
    flow: {
      eyebrow: 'Passo a passo',
      title: 'Como trabalha o teu agente',
      progress: 'Passo {n} de {total}',
      steps: [
        { n: '01', title: 'Tu defines a regra.', body: 'Escreve-a como a dirias a alguém de confiança: quanto pode gastar e quando deve perguntar.' },
        { n: '02', title: 'Ele compra sozinho.', body: 'Uns auscultadores de $69 cabem na tua regra. Paga em 4.1 s, sem te incomodar.' },
        { n: '03', title: 'Pede o teu OK se sair da regra.', body: 'Uns de $179 passam do teu limite por compra. Chega ao teu telemóvel, dás o teu OK e ele segue.' },
        { n: '04', title: 'A ANTON bloqueia o resto.', body: 'Uma tentativa de $1,900 é bloqueada em 9 ms. E se algo não bater certo, congelas o agente com um toque.' },
      ],
    },
    code: {
      eyebrow: 'Porquê confiar',
      title: 'A regra vive em código. Nenhum prompt a convence.',
      points: [
        { title: 'Limites que não se negoceiam', body: 'A regra é verificada fora do modelo, em cada compra.' },
        { title: 'O teu OK nas exceções', body: 'Se uma compra sai da regra, chega ao teu telemóvel e quem decide és tu.' },
        { title: 'Congelar com um toque', body: 'O teu agente deixa de gastar e nada é apagado. Reativas quando quiseres.' },
        { title: 'Lojas com identidade', body: 'O teu agente sabe com quem está a lidar, e a loja sabe quem é o teu agente.' },
        { title: 'Registo com o porquê', body: 'Cada decisão fica anotada com a regra que a explica.' },
      ],
    },
    watch: {
      eyebrow: 'Observatory',
      title: 'Vê tudo o que ele faz. E porquê.',
      body: 'Cada compra fica numa cronologia: o que foi, onde, quanto demorou e que regra decidiu.',
      link: 'Ver o Observatory',
    },
    audience: {
      eyebrow: 'Para quem',
      title: 'Para ti, para a tua equipa, para o que constróis.',
      personal: { title: 'Pessoal', body: 'Deixa o teu agente comprar por ti, sem o vigiar.', cta: 'Para ti' },
      empresas: { title: 'Empresas', body: 'Uma só política para toda a frota e um responsável por agente.', cta: 'Para a tua equipa' },
      builders: { title: 'Builders', body: 'Um passaporte para o teu agente: as lojas sabem quem ele é e quem responde.', cta: 'Para quem constrói' },
    },
    status: {
      eyebrow: 'Onde estamos',
      title: 'Ainda não somos um banco.',
      body: 'Começamos pelo que um banco faz primeiro: saber quem és. Por isso o Passaporte, a identidade do teu agente, chega antes do dinheiro. Vimos do setor bancário e sabemos por que ordem se faz bem.',
      signature: '[NOME], [CARGO]',
      link: 'Ler o manifesto',
      photoSlot: 'Foto própria pendente: equipa fundadora',
    },
    why: {
      eyebrow: 'Porque o fazemos',
      title: 'Vimos da banca. Sabemos o que falta.',
      body: 'Todas as contas, identidades e pagamentos assumem que há uma pessoa do outro lado. Os agentes não encaixam, por isso hoje alguém lhes empresta um cartão. Queremos fazê-lo bem.',
      signature: '[NOME], [CARGO]',
      link: 'Ler o manifesto',
      photoSlot: 'Foto própria pendente: equipa fundadora',
    },
    waitlist: {
      title: 'Dá um banco ao teu agente.',
      body: 'Primeiro chega o Passaporte, a identidade do teu agente. Deixa o teu e-mail e avisamos-te quando abrir.',
    },
  },

  personal: {
    meta: {
      title: 'Pessoal · ANTON',
      description: 'Deixa o teu agente comprar por ti sem o vigiar: dás-lhe um orçamento e uma regra, e ele só te procura quando é preciso.',
    },
    hero: {
      eyebrow: 'Pessoal',
      titleLead: 'Deixa o teu agente comprar por ti,',
      titleAccent: 'sem o vigiar.',
      body: 'Dás-lhe um orçamento e uma regra. Ele trata das compras de sempre e só te procura quando algo foge ao normal.',
    },
    steps: {
      eyebrow: 'Para começar',
      title: 'Três coisas e ele já pode comprar.',
      items: [
        { n: '01', title: 'Pões dinheiro', body: 'Uma transferência para a conta dele. Só pode gastar o que lhe deste, nem um dólar a mais.' },
        { n: '02', title: 'Dizes como gastar', body: 'Pelas tuas palavras, como dirias a alguém de confiança. A ANTON transforma-as em limites.' },
        { n: '03', title: 'Ele pergunta o que é estranho', body: 'Se uma compra sai da regra, chega ao teu telemóvel. Dás o teu OK ou dizes que não, com um toque.' },
      ],
    },
    rule: {
      eyebrow: 'A tua regra',
      title: 'Escreve como falas.',
      previewTitle: 'Antes de ativar, vê o que teria acontecido.',
      previewBody: 'Testamos com as compras recentes dele: quais teria feito sozinho, quais teria perguntado e quais seriam bloqueadas.',
    },
    approve: {
      eyebrow: 'No teu telemóvel',
      title: 'O que é estranho, ele pergunta.',
      body: 'Vês o que ele quer comprar, onde, por quanto e porque está a perguntar. Dás o teu OK e ele segue. Tu também.',
    },
    freeze: {
      eyebrow: 'Pelo sim, pelo não',
      title: 'Algo não bate certo? Congela.',
      body: 'Um toque e o teu agente deixa de gastar. O saldo e o histórico ficam como estavam até o reativares.',
    },
    waitlist: {
      title: 'Ele compra. Tu continuas a mandar.',
      body: 'Entra na lista e escrevemos-te quando puderes dar um passaporte ao teu agente.',
    },
  },

  empresas: {
    meta: {
      title: 'Empresas · ANTON',
      description: 'Uma frota de agentes, uma só política: limites por agente, um responsável por cada um e um registo com o porquê de cada compra.',
    },
    hero: {
      eyebrow: 'Empresas',
      titleLead: 'Uma frota de agentes,',
      titleAccent: 'uma só política.',
      body: 'Deixa de dar o OK à mão a cada compra. Escreves a política uma vez, defines um responsável por agente e revês cada decisão com o porquê.',
    },
    pain: {
      eyebrow: 'Hoje',
      title: 'Cada compra de um agente acaba na secretária de alguém.',
      items: [
        { title: 'Horas a dar OK à mão', body: 'Todas as semanas, alguém da equipa revê uma a uma as compras que os agentes querem fazer.' },
        { title: 'Ninguém responde', body: 'Se um agente paga algo que não devia, não fica claro quem respondia por ele nem porque aconteceu.' },
      ],
    },
    patch: {
      eyebrow: 'O remendo de hoje',
      title: 'O que usas hoje, ao lado da ANTON.',
      todayLabel: 'Hoje',
      antonLabel: 'Com a ANTON',
      rows: [
        { today: 'O cartão de alguém', todayBody: 'O agente gasta em nome de alguém que não está a ver.', anton: 'Uma conta por agente', antonBody: 'Com o passaporte dele e um responsável que responde por ele.' },
        { today: 'Uma API key para todos', todayBody: 'Vários agentes com a mesma chave: não sabes quem fez o quê.', anton: 'Uma identidade por agente', antonBody: 'Cada compra fica ligada ao agente que a fez.' },
        { today: 'Pré-pago com teto', todayBody: 'Um limite de saldo, mas nenhuma regra sobre o quê, onde ou quando.', anton: 'Uma política escrita', antonBody: 'Limites por compra e por mês, e o OK de uma pessoa quando é preciso.' },
      ],
    },
    features: {
      eyebrow: 'Controlo',
      title: 'Governa a frota sem a travar.',
      items: [
        { title: 'Uma política por agente', body: 'Cada agente com os seus limites: por compra, por mês e por loja. Mudas e vale a partir da compra seguinte.' },
        { title: 'Uma pessoa por agente', body: 'Cada agente tem um responsável verificado. O que sai da política chega a essa pessoa, não à equipa toda.' },
        { title: 'Registo com o porquê', body: 'Cada compra fica anotada com a regra que a deixou passar, a parou para pedir OK ou a bloqueou.' },
      ],
    },
    waitlist: {
      title: 'Põe ordem na tua frota de agentes.',
      body: 'Fala-nos da tua equipa e escrevemos-te quando abrirmos para empresas.',
    },
  },

  builders: {
    meta: {
      title: 'Builders · ANTON',
      description: 'Um passaporte para o teu agente: identidade verificável, dono verificado e chave pública para as lojas saberem quem paga.',
    },
    hero: {
      eyebrow: 'Builders',
      titleLead: 'Um passaporte para',
      titleAccent: 'o teu agente.',
      body: 'O teu agente já sabe comprar. Falta-lhe poder dizer quem é. O passaporte dá-lhe uma identidade que lojas e serviços podem verificar.',
    },
    kya: {
      eyebrow: 'O que é KYA',
      title: 'Conhece o teu agente.',
      body1: 'KYA vem de Know Your Agent: conhece o teu agente. Tal como um banco precisa de saber quem é o seu cliente, uma loja precisa de saber quem é o agente que paga.',
      body2: 'O passaporte responde a três perguntas antes de cada compra: quem é este agente, quem responde por ele e se pode fazer o que está a tentar.',
    },
    contents: {
      eyebrow: 'O que leva dentro',
      title: 'Cinco dados. Nada mais.',
      items: [
        { label: 'Nome', value: 'Compras de Juan', body: 'Como o teu agente se apresenta.' },
        { label: 'ID', value: 'AID-3F7A', body: 'Um identificador único que não muda.' },
        { label: 'Dono verificado', value: 'Juan Doe, verificado', body: 'A pessoa que responde por ele.' },
        { label: 'Chave pública', value: 'ed25519:3f7a...c19e', body: 'Com ela assina o que faz. Ninguém se pode fazer passar por ele.' },
        { label: 'Nível', value: 'Nível 1 · verificado por ti', body: 'Quanto já foi verificado sobre o agente e o seu dono.' },
      ],
    },
    connect: {
      eyebrow: 'Como se liga',
      title: 'Explicas uma vez e ele já sabe usar.',
      body: 'É assim que ficariam as instruções para o teu agente. É um exemplo: a integração ainda não está disponível.',
      tabsLabel: 'Plataforma do agente',
      whereLabel: 'Onde colar',
      tabs: [
        { name: 'Claude', where: 'Nas instruções do teu projeto.' },
        { name: 'ChatGPT', where: 'Nas instruções do teu GPT.' },
        { name: 'Gemini', where: 'Nas instruções do teu Gem.' },
      ],
      code: [
        'Tens um passaporte ANTON.',
        'Agente: Compras de Juan · AID-3F7A',
        '',
        'Antes de qualquer compra:',
        '1. Mostra o teu passaporte à loja.',
        '2. Pede permissão à ANTON com valor e loja.',
        '3. Se a resposta for "precisa de OK",',
        '   espera pelo OK do teu dono.',
        '4. Se for "bloqueada", não tentes de novo.',
        '   Avisa o teu dono e conta o que aconteceu.',
        '',
        'Nunca partilhes a tua chave privada.',
      ],
    },
    validate: {
      eyebrow: 'Vamos falar',
      title: 'Os teus agentes precisam de pagar?',
      body: 'Estamos a construir isto com quem vive o problema. Conta-nos o que te trava hoje e como o estás a resolver.',
      cta: 'Escrever à equipa',
    },
    waitlist: {
      title: 'Dá identidade ao teu agente antes de todos.',
      body: 'Entra como builder e escrevemos-te quando o Passaporte abrir.',
    },
  },

  pasaporte: {
    meta: {
      title: 'Passaporte · ANTON',
      description: 'O Passaporte da ANTON: uma identidade para o teu agente de IA que as lojas podem verificar, ligada à pessoa que responde por ele.',
    },
    hero: {
      eyebrow: 'Produto · Passaporte',
      titleLead: 'Quem é o teu agente e',
      titleAccent: 'quem responde.',
      body: 'É a primeira coisa que construímos, porque é a primeira coisa que um banco faz: saber quem és. Uma identidade para o teu agente, ligada a ti.',
    },
    identity: {
      eyebrow: 'Identidade',
      title: 'Um agente, uma identidade.',
      items: [
        { title: 'Sempre o mesmo', body: 'Apresenta-se da mesma forma em todo o lado, com um nome e um ID que não mudam.' },
        { title: 'Assinatura própria', body: 'Tudo o que faz leva a assinatura dele. Ninguém se pode fazer passar por ele.' },
        { title: 'Com dono', body: 'Por trás de cada passaporte há uma pessoa verificada.' },
      ],
    },
    levels: {
      eyebrow: 'Níveis',
      title: 'Três níveis de confiança.',
      body: 'Cada nível acrescenta verificações sobre o agente e o seu dono.',
      items: [
        { name: 'Nível 1', title: 'Verificado por ti', body: 'Confirmas que o agente é teu. É o ponto de partida.' },
        { name: 'Nível 2', title: '[CRITÉRIO NÍVEL 2]', body: '[DESCRIÇÃO DO NÍVEL 2 A DEFINIR]' },
        { name: 'Nível 3', title: '[CRITÉRIO NÍVEL 3]', body: '[DESCRIÇÃO DO NÍVEL 3 A DEFINIR]' },
      ],
    },
    responsible: {
      eyebrow: 'Quem responde',
      title: 'Por trás de cada agente há uma pessoa.',
      body: 'O passaporte diz quem é o dono e que alguém o verificou. Se algo correr mal, sabe-se a quem recorrer. Ninguém tem de adivinhar.',
    },
    waitlist: {
      title: 'Pede o passaporte do teu agente.',
      body: 'É a primeira coisa que vamos abrir. Entra na lista e escrevemos-te.',
    },
  },

  cuentas: {
    meta: {
      title: 'Contas e regras · ANTON',
      description: 'Uma conta para o teu agente com limites por compra e por mês, o teu OK quando é preciso, bloqueio do que quebra a regra e um botão para congelar.',
    },
    hero: {
      eyebrow: 'Produto · Contas e regras',
      titleLead: 'O dinheiro é dele.',
      titleAccent: 'As regras, tuas.',
      body: 'O teu agente tem a sua própria conta. Tu decides quanto pode gastar e quando deve perguntar, e nenhum prompt muda isso.',
    },
    rule: {
      eyebrow: 'A regra',
      title: 'Uma frase, três limites.',
      previewTitle: 'Testa antes de ativar.',
      previewBody: 'A antevisão mostra o que teria acontecido com as compras recentes dele.',
    },
    features: {
      eyebrow: 'O que acontece em cada caso',
      title: 'O que ele precisa para comprar, e nada mais.',
      items: [
        { title: 'Saldo próprio', body: 'Pões dinheiro com uma transferência. Ele só gasta o que há na conta.' },
        { title: 'Dois limites', body: 'Por compra e por mês. No exemplo, $80 e $300. Os números são teus.' },
        { title: 'O teu OK', body: 'Se for uma loja nova ou custar mais do que o combinado, pergunta antes de pagar.' },
        { title: 'Bloqueio', body: 'O que quebra a regra não passa. No exemplo, uma tentativa de $1,900 foi bloqueada em 9 ms.' },
        { title: 'Congelar', body: 'Um toque e ele deixa de gastar até tu dizeres.' },
      ],
    },
    waitlist: {
      title: 'Dá regras ao teu agente.',
      body: 'Entra na lista. Primeiro chega o Passaporte; a conta, depois.',
    },
  },

  observatory: {
    meta: {
      title: 'Observatory · ANTON',
      description: 'Observatory: tudo o que o teu agente faz numa cronologia, com o porquê de cada compra. Autónoma, com o teu OK ou bloqueada.',
    },
    hero: {
      eyebrow: 'Produto · Observatory',
      titleLead: 'Tudo o que o teu agente faz, com',
      titleAccent: 'o porquê.',
      body: 'Não precisas de vigiar. Mas quando quiseres olhar, está lá tudo: o que comprou, quanto demorou e que regra decidiu.',
    },
    states: {
      eyebrow: 'Estados',
      title: 'Sozinho, com o teu OK ou bloqueada.',
      auto: 'Cabia na tua regra. O teu agente pagou sozinho.',
      okDone: 'Saía da regra. Ele perguntou e tu disseste que sim.',
      blocked: 'Quebrava a regra. Não foi pago e ficou anotado.',
    },
    explorer: {
      eyebrow: 'Filtros',
      title: 'Encontra o que procuras.',
      body: 'Filtra por estado e lê o porquê de cada operação.',
      filterLabel: 'Filtrar por estado',
      all: 'Todas',
      count: 'A mostrar {n} de {total}',
    },
    why: {
      eyebrow: 'O porquê',
      title: 'Cada decisão, explicada.',
      body: 'Não vês só que algo foi bloqueado: vês que regra o bloqueou. Assim ajustas a tua regra com factos, não com palpites.',
    },
    waitlist: {
      title: 'Vê o que ele faz desde o primeiro dia.',
      body: 'Entra na lista e escrevemos-te quando abrirmos.',
    },
  },

  manifiesto: {
    meta: {
      title: 'Manifesto · ANTON',
      description: 'Porque existe a ANTON: cinco convicções sobre agentes, dinheiro e quem responde.',
    },
    hero: {
      eyebrow: 'Manifesto',
      titleLead: 'Os agentes já compram. Falta',
      titleAccent: 'quem responda.',
      body: 'Cinco coisas em que acreditamos, e porque construímos a ANTON.',
    },
    quote: 'O teu agente gasta. Tu mandas.',
    quoteBy: 'A ideia da ANTON',
    teamLink: 'Conhecer a equipa',
    blocks: [
      {
        n: '01',
        title: 'Todo o pagamento assume um humano.',
        paragraphs: [
          'Todas as contas, todas as identidades e todos os pagamentos que existem hoje assumem que do outro lado há uma pessoa. Um nome, uma assinatura, um telefone para confirmar.',
          'Os agentes já sabem procurar, comparar e decidir o que comprar. Mas na hora de pagar não conseguem dizer quem são nem quem responde por eles.',
          'Por isso improvisamos: emprestamos-lhes o nosso cartão, partilhamos uma API key entre vários ou damos-lhes um pré-pago com teto. Funciona até algo correr mal. E aí ninguém sabe quem fez o quê, nem porquê.',
        ],
      },
      {
        n: '02',
        title: 'Delegar não é largar.',
        paragraphs: [
          'Deixamos cada vez mais coisas nas mãos de agentes, e muitas acabam numa compra: uma subscrição, um carregamento, uns auscultadores.',
          'Queremos que o façam sozinhos. Não queremos deixar de mandar. As duas coisas ao mesmo tempo só são possíveis se o agente tiver limites claros e alguém que responda por ele.',
          'As lojas precisam do mesmo, do outro lado: saber com quem estão a lidar.',
        ],
      },
      {
        n: '03',
        title: 'As regras não se negoceiam.',
        paragraphs: [
          'A ANTON é o banco para agentes de IA, governado por humanos. Tem três peças: um Passaporte para saber quem é o agente, uma conta com regras para decidir quanto pode gastar e o Observatory para ver tudo o que fez e porquê.',
          'A regra és tu que a escreves, pelas tuas palavras, e vive em código, não no modelo. Nenhum prompt a convence. Se uma compra sai da regra, ele pergunta. Se quebra a regra, é bloqueada. E se algo não bater certo, congelas com um toque.',
        ],
      },
      {
        n: '04',
        title: 'Primeiro identidade, depois dinheiro.',
        paragraphs: [
          'Vimos de bancos globais, de produto e do empreendedorismo. Sabemos como o dinheiro se move quando as regras são rígidas, e por que ordem as coisas se fazem bem.',
          'Por isso começamos pelo Passaporte. Movimentar dinheiro de forma regulada vem depois. Hoje não somos um banco: estamos a construir passo a passo, e preferimos dizê-lo.',
        ],
      },
      {
        n: '05',
        title: 'Isto decide-se agora.',
        paragraphs: [
          'Os agentes passaram de responder a perguntas a fazer tarefas. O passo seguinte é pagar, e o que isso exige ainda não existe.',
          'A identidade, as regras e quem responde decidem-se no início, não no fim. Queremos construir agora, com quem vai usar.',
          'Se isto te faz sentido, vem connosco.',
        ],
      },
    ],
    waitlist: {
      title: 'Vamos fazê-lo juntos.',
      body: 'Entra na lista. O Passaporte é a primeira coisa que vamos abrir.',
    },
  },

  equipo: {
    meta: {
      title: 'Equipa · ANTON',
      description: 'A equipa por trás da ANTON: experiência em bancos globais, produto e empreendedorismo.',
    },
    hero: {
      eyebrow: 'Equipa',
      titleLead: 'Gente que percebe de dinheiro e',
      titleAccent: 'de produto.',
      body: 'Vimos de bancos globais, de produto e do empreendedorismo. Juntou-nos o mesmo problema.',
    },
    cardTitle: 'Bancos globais · Produto · Empreendedorismo',
    initialsAria: 'Iniciais pendentes',
    section: {
      eyebrow: 'Quem somos',
      title: 'Quatro fundadores, um mesmo problema.',
      body: 'Nomes e rostos, em breve.',
    },
    member: { name: '[NOME]', role: '[CARGO]', bio: '[BIO DE DUAS LINHAS]', initials: '[IN]' },
    waitlist: {
      title: 'Queres construir isto connosco?',
      body: 'Começa pela lista de espera. Escrevemos-te quando abrirmos.',
    },
  },

  inversores: {
    meta: {
      title: 'Investidores · ANTON',
      description: 'A tese da ANTON em quatro partes: o problema, porquê agora, o primeiro produto e o caminho até à licença.',
    },
    hero: {
      eyebrow: 'Investidores',
      titleLead: 'A camada de confiança para',
      titleAccent: 'agentes que pagam.',
      body: 'Identidade, dinheiro e regras para que agentes de IA possam pagar, sempre com uma pessoa que responde.',
    },
    heroCta: 'Escrever à equipa',
    cardTitle: 'Tese',
    thesis: {
      eyebrow: 'Tese',
      title: 'A nossa tese, em quatro partes.',
      blocks: [
        { n: '01', title: 'O problema', body: 'Os pagamentos assumem que há uma pessoa. Um agente que precisa de pagar não consegue dizer quem é nem quem responde por ele. Hoje resolve-se com remendos: cartões emprestados, API keys partilhadas e pré-pago.' },
        { n: '02', title: 'Porquê agora', body: 'Os agentes já fazem tarefas completas e muitas acabam numa compra. A camada de identidade e de responsabilidade ainda não existe, e as suas regras estão a ser escritas agora.' },
        { n: '03', title: 'Primeiro produto', body: 'O Passaporte: uma identidade para agentes que pode ser verificada, ligada a um dono verificado. Sobre ela assentam as contas, as regras e o registo.' },
        { n: '04', title: 'Caminho até à licença', body: 'Com o Passaporte em uso, o passo seguinte é movimentar dinheiro de forma regulada. A licença faz parte do plano, não do presente: hoje a ANTON não é uma instituição financeira.' },
      ],
    },
    contact: {
      eyebrow: 'Contacto',
      title: 'Vamos falar.',
      body: 'Se investes em infraestrutura financeira ou em IA e queres saber mais, escreve-nos.',
    },
  },

  listaDeEspera: {
    meta: {
      title: 'Lista de espera · ANTON',
      description: 'Entra na lista de espera da ANTON como pessoa, empresa, builder ou investidor.',
    },
    hero: {
      eyebrow: 'Lista de espera',
      titleLead: 'Sê dos primeiros a dar um banco ao',
      titleAccent: 'teu agente.',
      body: 'Deixa os teus dados. O primeiro a chegar é o Passaporte, e escrevemos-te quando abrir.',
    },
    next: {
      eyebrow: 'O que vem depois',
      title: 'O que acontece quando entras.',
      items: [
        { n: '01', title: 'Avisamos-te', body: 'Quando abrirmos, para o e-mail que deixares. Para mais nada.' },
        { n: '02', title: 'Começas pelo Passaporte', body: 'A primeira coisa que vais poder usar é a identidade do teu agente.' },
        { n: '03', title: 'Contas-nos como correu', body: 'Construímos com quem usa. O que disseres muda o produto.' },
      ],
    },
  },

  demo: {
    meta: {
      title: 'Demo · Em breve · ANTON',
      description: 'A versão de teste da ANTON chega em breve. Entra na lista de espera e escrevemos-te.',
    },
    hero: {
      eyebrow: 'Em breve',
      titleLead: 'Em breve',
      titleAccent: 'testas sozinho.',
      body: 'Estamos a terminar uma versão de teste para brincares com a ANTON e dados de exemplo. Entra na lista e escrevemos-te quando estiver pronta.',
    },
    waitlist: {
      title: 'Escrevemos-te quando estiver pronta.',
      body: 'Deixa o teu e-mail. Só te vamos escrever sobre isto e sobre a lista de espera.',
    },
  },

  privacidad: {
    meta: {
      title: 'Privacidade · ANTON',
      description: 'Como a ANTON trata os teus dados pessoais.',
    },
    eyebrow: 'Legal',
    title: 'Como tratamos os teus dados',
    updated: 'Última atualização: [DATA]',
    template: 'Modelo pendente de revisão jurídica. Os textos entre parênteses retos são preenchidos antes de publicar.',
    sections: [
      { title: 'Quem é o responsável', body: '[DENOMINAÇÃO SOCIAL], com sede em [MORADA], é responsável pelo tratamento dos teus dados pessoais.' },
      { title: 'Que dados recolhemos', body: 'Hoje, nenhuns. Os formulários deste site são uma versão de teste: verificam o que escreves no navegador, mas não enviam nem guardam nada. Quando forem ativados, poderemos recolher o teu nome, e-mail, empresa e perfil.' },
      { title: 'Para que os usaríamos', body: 'Para te avisar quando a lista de espera abrir e para falar contigo sobre a ANTON. [FINALIDADES SECUNDÁRIAS, SE HOUVER].' },
      { title: 'Cookies e analítica', body: 'Este site não usa analítica nem cookies de terceiros. Só guarda no teu navegador o idioma que escolheste e se já viste a intro. Os tipos de letra são carregados a partir do Google Fonts.' },
      { title: 'Os teus direitos', body: 'Podes aceder, corrigir, apagar ou opor-te ao uso dos teus dados escrevendo para [E-MAIL DE CONTACTO]. [PROCEDIMENTO E PRAZOS DE RESPOSTA].' },
      { title: 'Alterações a esta política', body: 'Publicaremos qualquer alteração nesta página, com a data de atualização.' },
    ],
  },

  avisoLegal: {
    meta: {
      title: 'Aviso legal · ANTON',
      description: 'Informações legais sobre a ANTON e este site.',
    },
    eyebrow: 'Legal',
    title: 'Aviso legal',
    updated: 'Última atualização: [DATA]',
    template: 'Modelo pendente de revisão jurídica. Os textos entre parênteses retos são preenchidos antes de publicar.',
    sections: [
      { title: 'Titular do site', body: '[DENOMINAÇÃO SOCIAL], com sede em [MORADA]. [DADOS DE REGISTO].' },
      { title: 'O que a ANTON é hoje', body: 'A ANTON ainda não é uma instituição financeira autorizada e não oferece serviços bancários. Hoje construímos o Passaporte, a camada de identidade para agentes. Os ecrãs, os valores e os tempos são dados de exemplo.' },
      { title: 'Dados de exemplo', body: 'Os ecrãs, valores, tempos, nomes e identificadores deste site são de exemplo. Não representam operações nem pessoas reais.' },
      { title: 'Propriedade intelectual', body: 'A marca ANTON e o conteúdo deste site pertencem a [DENOMINAÇÃO SOCIAL]. [CONDIÇÕES DE USO].' },
      { title: 'Contacto', body: 'Escreve para [E-MAIL DE CONTACTO].' },
      { title: 'Lei aplicável', body: '[LEI E FORO APLICÁVEIS].' },
    ],
  },

  notFound: {
    meta: {
      title: 'Página não encontrada · ANTON',
      description: 'Esta página não existe.',
    },
    led: {
      top: 'Página não encontrada',
      channels: ['Sinal perdido', 'Sem o teu OK', 'Rota bloqueada'],
      cta: 'Voltar ao início',
      hint: 'Clica no ecrã para mudar de canal',
      channel: 'Canal {n} de {total}: {name}',
    },
    eyebrow: 'Erro 404',
    titleLead: 'Esta página',
    titleAccent: 'não existe.',
    body: 'A ligação está errada ou a página mudou de sítio. A partir do início chegas a tudo.',
  },
};

export default pt;
