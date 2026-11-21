import type { StatusKind } from '../data/sample';

const es = {
  lang: {
    code: 'es',
    groupLabel: 'Idioma',
    es: 'Español',
    en: 'English',
    pt: 'Português',
  },
  common: {
    sample: 'Datos de ejemplo',
    disclaimer:
      'ANTON todavía no es una entidad financiera autorizada y no ofrece servicios bancarios. Hoy construimos el Pasaporte, la capa de identidad para agentes. Las pantallas, importes y tiempos son datos de ejemplo.',
    joinShort: 'Unirme a la lista',
    joinLong: 'Unirme a la lista de espera',
    skip: 'Saltar al contenido',
    backHome: 'Volver al inicio',
  },
  preloader: {
    welcome: 'Bienvenido a',
    skip: 'Saltar intro',
  },
  nav: {
    main: 'Navegación principal',
    home: 'ANTON, ir al inicio',
    personal: 'Personal',
    empresas: 'Empresas',
    builders: 'Builders',
    company: 'Nosotros',
    manifesto: 'Manifiesto',
    team: 'Equipo',
    investors: 'Inversores',
    openMenu: 'Abrir menú',
    closeMenu: 'Cerrar menú',
  },
  footer: {
    tagline: 'El banco para agentes IA, gobernado por humanos.',
    forWhom: 'Para quién',
    product: 'Producto',
    company: 'Nosotros',
    passport: 'Pasaporte',
    accounts: 'Cuentas y reglas',
    observatory: 'Observatory',
    demo: 'Demo (pronto)',
    waitlist: 'Lista de espera',
    privacy: 'Privacidad',
    legal: 'Aviso legal',
    legalNav: 'Legal',
    copyright: '© {year} ANTON',
  },
  status: {
    auto: 'Autónoma',
    ok: 'Necesita tu OK',
    okDone: 'Con tu OK',
    blocked: 'Bloqueada',
  },
  agent: {
    name: 'Compras de Juan',
    owner: 'Juan Doe, verificado',
    level: 'Nivel 1 · verificado por ti',
  },
  rule: {
    label: 'Tu regla',
    sentence:
      'Puede gastar hasta $80 por compra y $300 al mes. Pídeme OK si es más, o si es una tienda nueva.',
    chips: ['Por compra $80', 'Al mes $300', 'Pedir OK: tienda nueva o importe mayor'],
    previewLabel: 'Vista previa',
    previewParts: [
      { n: 11, label: 'autónomas' },
      { n: 1, label: 'te pide OK' },
      { n: 0, label: 'bloqueadas' },
    ],
  },
  phone: {
    walletAria:
      'Ejemplo de la app: saldo del agente Compras de Juan, tres operaciones y el botón para congelarlo.',
    balance: 'Saldo del agente',
    monthly: '$69 de $300 este mes',
    monthlyLabel: 'Gasto del mes',
    recent: 'Últimas operaciones',
    freeze: 'Congelar agente',
    frozen: 'Agente congelado',
    ops: [
      { title: 'Auriculares inalámbricos', meta: 'Tienda Norte · 14:44', amount: '$69', status: 'auto' as StatusKind },
      { title: 'Auriculares mejorados', meta: 'Tienda Norte · 14:46', amount: '$179', status: 'ok' as StatusKind },
      { title: 'Intento de pago sospechoso', meta: '14:48 · 9 ms', amount: '$1,900', status: 'blocked' as StatusKind },
    ],
  },
  approval: {
    aria: 'Ejemplo de la app: el agente Compras de Juan pide tu OK para pagar $179 en Tienda Norte.',
    header: 'Pide tu OK',
    title: 'Auriculares mejorados',
    store: 'Tienda Norte · Hoy 14:46',
    amount: '$179',
    whyLabel: 'Por qué te pregunta',
    why: 'Supera tu límite de $80 por compra.',
    approve: 'Dar mi OK',
    reject: 'Decir que no',
    approved: 'en 11 s',
  },
  policy: {
    aria: 'Ejemplo de la app: política del agente Compras de Juan con su responsable y sus reglas.',
    header: 'Política del agente',
    ownerLabel: 'Responsable',
    levelLabel: 'Pasaporte',
    rulesLabel: 'Reglas',
    exceptions: 'Las excepciones le llegan a su responsable.',
  },
  ruleScreen: {
    aria: 'Ejemplo de la app: la regla del agente escrita en una frase, sus límites y la vista previa.',
    header: 'Regla del agente',
    active: 'Regla activa',
  },
  timeline: {
    aria: 'Ejemplo de la app: línea de tiempo con las operaciones del agente Compras de Juan.',
    header: 'Observatory',
    whyLabel: 'Por qué',
    items: [
      { day: 'Hoy', time: '14:48', title: 'Intento de pago sospechoso', store: '', amount: '$1,900', status: 'blocked' as StatusKind, detail: '9 ms', why: 'Supera tu límite de $300 al mes. No se pagó.' },
      { day: 'Hoy', time: '14:46', title: 'Auriculares mejorados', store: 'Tienda Norte', amount: '$179', status: 'okDone' as StatusKind, detail: 'aprobado en 11 s', why: 'Supera $80 por compra: te pidió OK y lo aprobaste.' },
      { day: 'Hoy', time: '14:44', title: 'Auriculares inalámbricos', store: 'Tienda Norte', amount: '$69', status: 'auto' as StatusKind, detail: '4.1 s', why: 'Dentro de tu regla: menos de $80 por compra.' },
      { day: 'Ayer', time: '19:02', title: 'Suscripción de herramientas', store: '', amount: '$12', status: 'auto' as StatusKind, detail: '', why: 'Dentro de tu regla.' },
      { day: 'Lun', time: '10:15', title: 'Recarga de transporte', store: '', amount: '$20', status: 'auto' as StatusKind, detail: '', why: 'Dentro de tu regla.' },
    ],
  },
  passport: {
    aria: 'Ejemplo de pasaporte del agente Compras de Juan, con sello de verificado.',
    kicker: 'Pasaporte de agente',
    nameLabel: 'Nombre',
    idLabel: 'ID',
    ownerLabel: 'Dueño',
    keyLabel: 'Clave pública',
    levelLabel: 'Nivel',
    stamp: 'Verificado',
  },
  marquee: {
    label: 'Actividad de ejemplo',
    pause: 'Pausar actividad',
    play: 'Reanudar cinta',
    items: [
      'Pagado $69 · Autónoma',
      'Pasaporte verificado · AID-3F7A',
      'Tu OK · $179 · aprobado en 11 s',
      'Regla activa · $80 por compra',
      'Bloqueado en 9 ms · $1,900',
      'Agente congelado por ti',
    ],
  },
  form: {
    profileLegend: 'Soy',
    profiles: { persona: 'Persona', empresa: 'Empresa', builder: 'Builder', inversor: 'Inversor' },
    name: 'Nombre',
    email: 'Correo',
    emailPlaceholder: 'tu@correo.com',
    company: 'Empresa',
    fund: 'Fondo o empresa',
    optional: '(opcional)',
    message: 'Tu mensaje',
    consent: 'Acepto que ANTON me escriba sobre la lista de espera. Puedo darme de baja cuando quiera.',
    privacyLink: 'Política de privacidad',
    submit: 'Unirme a la lista de espera',
    submitContact: 'Enviar mensaje',
    errors: {
      nameRequired: 'Escribe tu nombre.',
      emailRequired: 'Escribe tu correo.',
      email: 'Ese correo no parece válido. Revisa que tenga @ y dominio, como tu@correo.com.',
      messageRequired: 'Cuéntanos algo en el mensaje.',
      consent: 'Marca la casilla para que podamos escribirte.',
      summary: 'Falta algo: revisa los campos marcados.',
    },
    success: {
      title: 'Casi. La lista aún no está abierta.',
      body: 'Este formulario es de prueba: no guardamos ni enviamos tus datos. Cuando abra de verdad, tendrás que volver a apuntarte.',
      again: 'Volver al formulario',
    },
    successContact: {
      title: 'Gracias, pero aún no nos llega.',
      body: 'Este formulario es de prueba: no guardamos ni enviamos tu mensaje. Muy pronto llegará a nuestro equipo.',
      again: 'Volver al formulario',
    },
  },
  photos: {
    hero: 'Un hombre con barba y gorro se ríe a carcajadas mirando su teléfono, sentado en un parque.',
    personal: 'Una mujer de pelo rizado se ríe mientras habla por teléfono en la calle.',
    empresas: 'Dos compañeras se ríen juntas frente a un portátil en una mesa de trabajo.',
    builders: 'Un hombre con gafas sonríe a cámara mientras escribe en su portátil en una oficina compartida.',
    retrato: 'Retrato cercano de una mujer que se ríe mirando a cámara en plena calle.',
    control: 'Primer plano de unas manos con un teléfono, con el pulgar a punto de tocar la pantalla.',
    calle: 'Una mujer sonríe sentada en su bicicleta, con el teléfono en la mano.',
  },
  waitlistBlock: {
    eyebrow: 'Lista de espera',
    title: 'Sé de los primeros.',
    body: 'Déjanos tu correo y te avisamos cuando abramos. Lo primero que llega es el Pasaporte para tu agente.',
  },

  home: {
    meta: {
      title: 'ANTON · El banco para agentes IA, gobernado por humanos',
      description: 'Tu agente gasta. Tú mandas. Dale dinero, ponle reglas en una frase y mira todo lo que hace. Únete a la lista de espera de ANTON.',
    },
    hero: {
      eyebrow: 'Identidad · Dinero · Reglas',
      titleLead: 'Tu agente ya sabe comprar. Ahora dale',
      titleAccent: 'un banco.',
      body: 'Él compra, tú sigues con lo tuyo. Le pones una regla en una frase y solo te busca cuando hace falta.',
    },
    heroCta2: 'Ver cómo funciona',
    heroCards: {
      paid: 'Pagado',
      store: 'Tienda Norte',
      note: 'Dentro de tu regla, sin pedirte nada.',
    },
    day: {
      eyebrow: 'Un día cualquiera',
      title: 'Él compra. Tú sigues con tu día.',
      moments: [
        { when: 'Mientras desayunas', text: 'Renueva tu suscripción de herramientas: $12. No te interrumpe.', status: 'auto' as StatusKind },
        { when: 'En plena reunión', text: 'Encuentra los auriculares que querías por $69. Los compra.', status: 'auto' as StatusKind },
        { when: 'Dos minutos después', text: 'Ve unos mejores por $179. Es más de lo acordado, así que te pregunta. Dices que sí.', status: 'okDone' as StatusKind },
        { when: 'Y si algo va mal', text: 'Alguien intenta cobrarle $1,900. Se bloquea en 9 ms. Tú ni sueltas el café.', status: 'blocked' as StatusKind },
      ],
    },
    idea: {
      eyebrow: 'La idea',
      title: 'Tu agente gasta. Tú mandas.',
      body: 'Le das identidad, dinero y reglas. Tú te quedas con el control.',
      pillars: [
        { name: 'Pasaporte', line: 'Sabes quién es.', body: 'Una identidad que las tiendas pueden verificar, ligada a ti.' },
        { name: 'Cuentas y reglas', line: 'Sabes cuánto puede.', body: 'Su propio saldo y tus límites, escritos en una frase.' },
        { name: 'Observatory', line: 'Sabes qué hizo.', body: 'Cada compra, con su porqué.' },
      ],
    },
    flow: {
      eyebrow: 'Paso a paso',
      title: 'Así trabaja tu agente',
      progress: 'Paso {n} de {total}',
      steps: [
        { n: '01', title: 'Tú pones la regla.', body: 'Escríbela como se la dirías a alguien de confianza: cuánto puede gastar y cuándo debe preguntarte.' },
        { n: '02', title: 'Él compra solo.', body: 'Unos auriculares de $69 entran en tu regla. Los paga en 4.1 s, sin molestarte.' },
        { n: '03', title: 'Te pide OK si se sale.', body: 'Unos de $179 superan tu límite por compra. Te llega al teléfono, das tu OK y él sigue.' },
        { n: '04', title: 'ANTON bloquea el resto.', body: 'Un intento de $1,900 se bloquea en 9 ms. Y si algo no te cuadra, lo congelas con un toque.' },
      ],
    },
    code: {
      eyebrow: 'Por qué fiarte',
      title: 'La regla vive en código. Ningún prompt la convence.',
      points: [
        { title: 'Límites que no se negocian', body: 'La regla se revisa fuera del modelo, en cada compra.' },
        { title: 'Tu OK en las excepciones', body: 'Si una compra se sale de la regla, te llega al teléfono y decides tú.' },
        { title: 'Congelar con un toque', body: 'Tu agente deja de gastar y no se borra nada. Lo reactivas cuando quieras.' },
        { title: 'Tiendas con identidad', body: 'Tu agente sabe con quién trata, y la tienda sabe quién es tu agente.' },
        { title: 'Registro con el porqué', body: 'Cada decisión queda anotada junto con la regla que la explica.' },
      ],
    },
    watch: {
      eyebrow: 'Observatory',
      title: 'Mira todo lo que hace. Y por qué.',
      body: 'Cada compra queda en una línea de tiempo: qué fue, dónde, cuánto tardó y qué regla la decidió.',
      link: 'Ver Observatory',
    },
    audience: {
      eyebrow: 'Para quién',
      title: 'Para ti, para tu equipo, para lo que construyes.',
      personal: { title: 'Personal', body: 'Que tu agente compre por ti, sin vigilarlo.', cta: 'Para ti' },
      empresas: { title: 'Empresas', body: 'Una sola política para toda la flota y un responsable por cada agente.', cta: 'Para tu equipo' },
      builders: { title: 'Builders', body: 'Un pasaporte para tu agente: las tiendas saben quién es y quién responde.', cta: 'Para quien construye' },
    },
    status: {
      eyebrow: 'Dónde estamos',
      title: 'Todavía no somos un banco.',
      body: 'Empezamos por lo primero que hace un banco: saber quién eres. Por eso el Pasaporte, la identidad de tu agente, llega antes que el dinero. Venimos de la banca y sabemos en qué orden se hace bien.',
      signature: '[NOMBRE], [CARGO]',
      link: 'Leer el manifiesto',
      photoSlot: 'Foto propia pendiente: equipo fundador',
    },
    why: {
      eyebrow: 'Por qué lo hacemos',
      title: 'Venimos de la banca. Sabemos qué falta.',
      body: 'Toda cuenta, identidad y pago asume que hay una persona al otro lado. Los agentes no encajan, así que hoy se les presta una tarjeta. Queremos hacerlo bien.',
      signature: '[NOMBRE], [CARGO]',
      link: 'Leer el manifiesto',
      photoSlot: 'Foto propia pendiente: equipo fundador',
    },
    waitlist: {
      title: 'Dale un banco a tu agente.',
      body: 'Primero llega el Pasaporte, la identidad de tu agente. Déjanos tu correo y te avisamos cuando abra.',
    },
  },

  personal: {
    meta: {
      title: 'Personal · ANTON',
      description: 'Que tu agente compre por ti sin vigilarlo: le pones un presupuesto y una regla, y solo te busca cuando hace falta.',
    },
    hero: {
      eyebrow: 'Personal',
      titleLead: 'Que tu agente compre por ti,',
      titleAccent: 'sin vigilarlo.',
      body: 'Le das un presupuesto y una regla. Él se encarga de las compras de siempre y solo te busca cuando algo se sale de lo normal.',
    },
    steps: {
      eyebrow: 'Para empezar',
      title: 'Tres cosas y ya puede comprar.',
      items: [
        { n: '01', title: 'Le pones dinero', body: 'Una transferencia a su cuenta. Solo puede gastar lo que tú le diste, ni un dólar más.' },
        { n: '02', title: 'Le dices cómo gastar', body: 'Con tus palabras, como se lo dirías a alguien de confianza. ANTON lo convierte en límites.' },
        { n: '03', title: 'Te pregunta lo raro', body: 'Si una compra se sale de la regla, te llega al teléfono. Das tu OK o dices que no, con un toque.' },
      ],
    },
    rule: {
      eyebrow: 'Tu regla',
      title: 'Escríbela como hablas.',
      previewTitle: 'Antes de activarla, mira qué habría pasado.',
      previewBody: 'La probamos con sus compras recientes: cuáles habría hecho solo, cuáles te habría preguntado y cuáles se habrían bloqueado.',
    },
    approve: {
      eyebrow: 'Desde tu teléfono',
      title: 'Lo raro, te lo pregunta.',
      body: 'Ves qué quiere comprar, dónde, por cuánto y por qué te pregunta. Das tu OK y él sigue con lo suyo. Tú, con lo tuyo.',
    },
    freeze: {
      eyebrow: 'Por si acaso',
      title: '¿Algo no te cuadra? Congélalo.',
      body: 'Un toque y tu agente deja de gastar. Su saldo y su historial se quedan como estaban hasta que lo reactives.',
    },
    waitlist: {
      title: 'Que compre él. Tú sigues mandando.',
      body: 'Apúntate y te escribimos cuando puedas darle un pasaporte a tu agente.',
    },
  },

  empresas: {
    meta: {
      title: 'Empresas · ANTON',
      description: 'Una flota de agentes, una sola política: límites por agente, un responsable por cada uno y un registro con el porqué de cada compra.',
    },
    hero: {
      eyebrow: 'Empresas',
      titleLead: 'Una flota de agentes,',
      titleAccent: 'una sola política.',
      body: 'Deja de dar el OK a mano a cada compra. Escribes la política una vez, pones un responsable por agente y revisas cada decisión con su porqué.',
    },
    pain: {
      eyebrow: 'Hoy',
      title: 'Cada compra de un agente acaba en la mesa de alguien.',
      items: [
        { title: 'Horas dando el OK a mano', body: 'Cada semana, alguien del equipo revisa una por una las compras que quieren hacer los agentes.' },
        { title: 'Nadie responde', body: 'Si un agente paga algo que no debía, no queda claro quién respondía por él ni por qué pasó.' },
      ],
    },
    patch: {
      eyebrow: 'El parche de hoy',
      title: 'Lo que usas hoy, frente a ANTON.',
      todayLabel: 'Hoy',
      antonLabel: 'Con ANTON',
      rows: [
        { today: 'La tarjeta de alguien', todayBody: 'El agente gasta a nombre de una persona que no está mirando.', anton: 'Una cuenta por agente', antonBody: 'Con su pasaporte y un responsable que da la cara por él.' },
        { today: 'Una API key para todos', todayBody: 'Varios agentes con la misma llave: no sabes quién hizo qué.', anton: 'Una identidad por agente', antonBody: 'Cada compra queda ligada al agente que la hizo.' },
        { today: 'Prepago con tope', todayBody: 'Un límite de saldo, pero ninguna regla sobre qué, dónde ni cuándo.', anton: 'Una política escrita', antonBody: 'Límites por compra y al mes, y el OK de una persona cuando hace falta.' },
      ],
    },
    features: {
      eyebrow: 'Control',
      title: 'Gobierna la flota sin frenarla.',
      items: [
        { title: 'Una política por agente', body: 'Cada agente con sus límites: por compra, al mes y por tienda. La cambias y vale desde la siguiente compra.' },
        { title: 'Una persona por agente', body: 'Cada agente tiene un responsable verificado. Lo que se sale de la política le llega a esa persona, no a todo el equipo.' },
        { title: 'Registro con el porqué', body: 'Cada compra queda anotada con la regla que la dejó pasar, la paró para pedir OK o la bloqueó.' },
      ],
    },
    waitlist: {
      title: 'Pon orden en tu flota de agentes.',
      body: 'Cuéntanos de tu equipo y te escribimos cuando abramos para empresas.',
    },
  },

  builders: {
    meta: {
      title: 'Builders · ANTON',
      description: 'Un pasaporte para tu agente: identidad verificable, dueño verificado y clave pública para que las tiendas sepan quién paga.',
    },
    hero: {
      eyebrow: 'Builders',
      titleLead: 'Un pasaporte para',
      titleAccent: 'tu agente.',
      body: 'Tu agente ya sabe comprar. Le falta poder decir quién es. El pasaporte le da una identidad que tiendas y servicios pueden comprobar.',
    },
    kya: {
      eyebrow: 'Qué es KYA',
      title: 'Conoce a tu agente.',
      body1: 'KYA viene de Know Your Agent: conoce a tu agente. Así como un banco necesita saber quién es su cliente, una tienda necesita saber quién es el agente que le paga.',
      body2: 'El pasaporte responde tres preguntas antes de cada compra: quién es este agente, quién responde por él y si puede hacer lo que intenta.',
    },
    contents: {
      eyebrow: 'Qué lleva dentro',
      title: 'Cinco datos. Nada más.',
      items: [
        { label: 'Nombre', value: 'Compras de Juan', body: 'Cómo se presenta tu agente.' },
        { label: 'ID', value: 'AID-3F7A', body: 'Un identificador único que no cambia.' },
        { label: 'Dueño verificado', value: 'Juan Doe, verificado', body: 'La persona que responde por él.' },
        { label: 'Clave pública', value: 'ed25519:3f7a...c19e', body: 'Con ella firma lo que hace. Nadie puede hacerse pasar por él.' },
        { label: 'Nivel', value: 'Nivel 1 · verificado por ti', body: 'Cuánto se ha comprobado sobre el agente y su dueño.' },
      ],
    },
    connect: {
      eyebrow: 'Cómo se conecta',
      title: 'Se lo explicas una vez y ya sabe usarlo.',
      body: 'Así se verían las instrucciones para tu agente. Es un ejemplo: la integración todavía no está disponible.',
      tabsLabel: 'Plataforma del agente',
      whereLabel: 'Dónde pegarlas',
      tabs: [
        { name: 'Claude', where: 'En las instrucciones de tu proyecto.' },
        { name: 'ChatGPT', where: 'En las instrucciones de tu GPT.' },
        { name: 'Gemini', where: 'En las instrucciones de tu Gem.' },
      ],
      code: [
        'Tienes un pasaporte ANTON.',
        'Agente: Compras de Juan · AID-3F7A',
        '',
        'Antes de cualquier compra:',
        '1. Enseña tu pasaporte a la tienda.',
        '2. Pide permiso a ANTON con importe y tienda.',
        '3. Si la respuesta es "necesita OK",',
        '   espera el OK de tu dueño.',
        '4. Si es "bloqueada", no lo reintentes.',
        '   Avisa a tu dueño y cuéntale qué pasó.',
        '',
        'Nunca compartas tu clave privada.',
      ],
    },
    validate: {
      eyebrow: 'Hablemos',
      title: '¿Tus agentes necesitan pagar?',
      body: 'Estamos construyendo esto con quienes viven el problema. Cuéntanos qué te frena hoy y cómo lo estás resolviendo.',
      cta: 'Escribir al equipo',
    },
    waitlist: {
      title: 'Dale identidad a tu agente antes que nadie.',
      body: 'Apúntate como builder y te escribimos cuando abra el Pasaporte.',
    },
  },

  pasaporte: {
    meta: {
      title: 'Pasaporte · ANTON',
      description: 'El Pasaporte de ANTON: una identidad para tu agente IA que las tiendas pueden comprobar, ligada a la persona que responde por él.',
    },
    hero: {
      eyebrow: 'Producto · Pasaporte',
      titleLead: 'Quién es tu agente y',
      titleAccent: 'quién responde.',
      body: 'Es lo primero que construimos, porque es lo primero que hace un banco: saber quién eres. Una identidad para tu agente, ligada a ti.',
    },
    identity: {
      eyebrow: 'Identidad',
      title: 'Un agente, una identidad.',
      items: [
        { title: 'Siempre el mismo', body: 'Se presenta igual en todas partes, con un nombre y un ID que no cambian.' },
        { title: 'Firma propia', body: 'Cada cosa que hace lleva su firma. Nadie puede hacerse pasar por él.' },
        { title: 'Con dueño', body: 'Detrás de cada pasaporte hay una persona verificada.' },
      ],
    },
    levels: {
      eyebrow: 'Niveles',
      title: 'Tres niveles de confianza.',
      body: 'Cada nivel añade comprobaciones sobre el agente y su dueño.',
      items: [
        { name: 'Nivel 1', title: 'Verificado por ti', body: 'Tú confirmas que el agente es tuyo. Es el punto de partida.' },
        { name: 'Nivel 2', title: '[CRITERIO NIVEL 2]', body: '[DESCRIPCIÓN DEL NIVEL 2 POR DEFINIR]' },
        { name: 'Nivel 3', title: '[CRITERIO NIVEL 3]', body: '[DESCRIPCIÓN DEL NIVEL 3 POR DEFINIR]' },
      ],
    },
    responsible: {
      eyebrow: 'Quién responde',
      title: 'Detrás de cada agente hay una persona.',
      body: 'El pasaporte dice quién es su dueño y que alguien lo comprobó. Si algo sale mal, se sabe a quién acudir. Nadie tiene que adivinar.',
    },
    waitlist: {
      title: 'Pide el pasaporte de tu agente.',
      body: 'Es lo primero que abrimos. Apúntate y te escribimos.',
    },
  },

  cuentas: {
    meta: {
      title: 'Cuentas y reglas · ANTON',
      description: 'Una cuenta para tu agente con límites por compra y al mes, tu OK cuando hace falta, bloqueo de lo que rompe la regla y un botón para congelarlo.',
    },
    hero: {
      eyebrow: 'Producto · Cuentas y reglas',
      titleLead: 'Su dinero.',
      titleAccent: 'Tus reglas.',
      body: 'Tu agente tiene su propia cuenta. Tú decides cuánto puede gastar y cuándo debe preguntarte, y eso no lo cambia ningún prompt.',
    },
    rule: {
      eyebrow: 'La regla',
      title: 'Una frase, tres límites.',
      previewTitle: 'Pruébala antes de activarla.',
      previewBody: 'La vista previa te enseña qué habría pasado con sus compras recientes.',
    },
    features: {
      eyebrow: 'Qué pasa en cada caso',
      title: 'Lo que necesita para comprar, y nada más.',
      items: [
        { title: 'Saldo propio', body: 'Le pones dinero con una transferencia. Solo gasta lo que hay en su cuenta.' },
        { title: 'Dos límites', body: 'Por compra y al mes. En el ejemplo, $80 y $300. Los números los pones tú.' },
        { title: 'Tu OK', body: 'Si es una tienda nueva o cuesta más de lo acordado, te pregunta antes de pagar.' },
        { title: 'Bloqueo', body: 'Lo que rompe la regla no pasa. En el ejemplo, un intento de $1,900 se bloqueó en 9 ms.' },
        { title: 'Congelar', body: 'Un toque y deja de gastar hasta que tú digas.' },
      ],
    },
    waitlist: {
      title: 'Ponle reglas a tu agente.',
      body: 'Apúntate. Primero llega el Pasaporte; la cuenta, después.',
    },
  },

  observatory: {
    meta: {
      title: 'Observatory · ANTON',
      description: 'Observatory: todo lo que hace tu agente en una línea de tiempo, con el porqué de cada compra. Autónoma, con tu OK o bloqueada.',
    },
    hero: {
      eyebrow: 'Producto · Observatory',
      titleLead: 'Todo lo que hace tu agente, con',
      titleAccent: 'su porqué.',
      body: 'No tienes que vigilarlo. Pero cuando quieras mirar, está todo: qué compró, cuánto tardó y qué regla lo decidió.',
    },
    states: {
      eyebrow: 'Estados',
      title: 'Solo, con tu OK o bloqueada.',
      auto: 'Entraba en tu regla. Tu agente la pagó solo.',
      okDone: 'Se salía de la regla. Te preguntó y dijiste que sí.',
      blocked: 'Rompía la regla. No se pagó y quedó anotado.',
    },
    explorer: {
      eyebrow: 'Filtros',
      title: 'Encuentra lo que buscas.',
      body: 'Filtra por estado y lee el porqué de cada operación.',
      filterLabel: 'Filtrar por estado',
      all: 'Todas',
      count: 'Mostrando {n} de {total}',
    },
    why: {
      eyebrow: 'El porqué',
      title: 'Cada decisión, explicada.',
      body: 'No solo ves que algo se bloqueó: ves qué regla lo bloqueó. Así ajustas tu regla con hechos, no con corazonadas.',
    },
    waitlist: {
      title: 'Mira lo que hace desde el primer día.',
      body: 'Apúntate y te escribimos cuando abramos.',
    },
  },

  manifiesto: {
    meta: {
      title: 'Manifiesto · ANTON',
      description: 'Por qué existe ANTON: cinco convicciones sobre agentes, dinero y quién responde.',
    },
    hero: {
      eyebrow: 'Manifiesto',
      titleLead: 'Los agentes ya compran. Falta',
      titleAccent: 'quién responda.',
      body: 'Cinco cosas que creemos, y por qué construimos ANTON.',
    },
    quote: 'Tu agente gasta. Tú mandas.',
    quoteBy: 'La idea de ANTON',
    teamLink: 'Conocer al equipo',
    blocks: [
      {
        n: '01',
        title: 'Todo pago asume un humano.',
        paragraphs: [
          'Toda cuenta, toda identidad y todo pago que existe hoy da por hecho que al otro lado hay una persona. Un nombre, una firma, un teléfono para confirmar.',
          'Los agentes ya saben buscar, comparar y decidir qué comprar. Pero a la hora de pagar no pueden decir quién son ni quién responde por ellos.',
          'Así que improvisamos: les prestamos nuestra tarjeta, compartimos una API key entre varios o les damos un prepago con tope. Funciona hasta que algo sale mal. Y entonces nadie sabe quién hizo qué, ni por qué.',
        ],
      },
      {
        n: '02',
        title: 'Delegar no es soltar.',
        paragraphs: [
          'Cada vez dejamos más cosas en manos de agentes, y muchas acaban en una compra: una suscripción, una recarga, unos auriculares.',
          'Queremos que lo hagan solos. No queremos dejar de mandar. Las dos cosas a la vez solo son posibles si el agente tiene límites claros y alguien que responde por él.',
          'Las tiendas necesitan lo mismo desde el otro lado: saber con quién tratan.',
        ],
      },
      {
        n: '03',
        title: 'Las reglas no se negocian.',
        paragraphs: [
          'ANTON es el banco para agentes IA, gobernado por humanos. Tiene tres piezas: un Pasaporte para saber quién es el agente, una cuenta con reglas para decidir cuánto puede gastar y Observatory para ver todo lo que hizo y por qué.',
          'La regla la escribes tú, con tus palabras, y vive en código, no en el modelo. Ningún prompt la convence. Si una compra se sale, te pregunta. Si la rompe, se bloquea. Y si algo no te cuadra, lo congelas con un toque.',
        ],
      },
      {
        n: '04',
        title: 'Primero identidad, después dinero.',
        paragraphs: [
          'Venimos de la banca global, del producto y del emprendimiento. Sabemos cómo se mueve el dinero cuando las reglas son estrictas, y en qué orden se hacen bien las cosas.',
          'Por eso empezamos por el Pasaporte. Mover dinero de forma regulada viene después. Hoy no somos un banco: lo estamos construyendo paso a paso, y preferimos decirlo.',
        ],
      },
      {
        n: '05',
        title: 'Esto se decide ahora.',
        paragraphs: [
          'Los agentes pasaron de contestar preguntas a hacer tareas. El siguiente paso es pagar, y lo que hace falta para eso todavía no existe.',
          'La identidad, las reglas y quién responde se deciden al principio, no al final. Queremos construirlo ahora, con quienes lo van a usar.',
          'Si esto te suena, súmate.',
        ],
      },
    ],
    waitlist: {
      title: 'Hagámoslo juntos.',
      body: 'Apúntate a la lista. El Pasaporte es lo primero que abrimos.',
    },
  },

  equipo: {
    meta: {
      title: 'Equipo · ANTON',
      description: 'El equipo detrás de ANTON: experiencia en banca global, producto y emprendimiento.',
    },
    hero: {
      eyebrow: 'Equipo',
      titleLead: 'Gente que sabe de dinero y',
      titleAccent: 'de producto.',
      body: 'Venimos de la banca global, del producto y del emprendimiento. Nos juntó el mismo problema.',
    },
    cardTitle: 'Banca global · Producto · Emprendimiento',
    initialsAria: 'Iniciales pendientes',
    section: {
      eyebrow: 'Quiénes somos',
      title: 'Cuatro fundadores, un mismo problema.',
      body: 'Nombres y caras, muy pronto.',
    },
    member: { name: '[NOMBRE]', role: '[CARGO]', bio: '[BIO DE DOS LÍNEAS]', initials: '[IN]' },
    waitlist: {
      title: '¿Quieres construir esto con nosotros?',
      body: 'Empieza por la lista de espera. Te escribimos cuando abramos.',
    },
  },

  inversores: {
    meta: {
      title: 'Inversores · ANTON',
      description: 'La tesis de ANTON en cuatro partes: el problema, por qué ahora, el primer producto y el camino a la licencia.',
    },
    hero: {
      eyebrow: 'Inversores',
      titleLead: 'La capa de confianza para',
      titleAccent: 'agentes que pagan.',
      body: 'Identidad, dinero y reglas para que los agentes IA puedan pagar, siempre con una persona que responde.',
    },
    heroCta: 'Escribir al equipo',
    cardTitle: 'Tesis',
    thesis: {
      eyebrow: 'Tesis',
      title: 'Nuestra tesis, en cuatro partes.',
      blocks: [
        { n: '01', title: 'El problema', body: 'Los pagos dan por hecho que hay una persona. Un agente que necesita pagar no puede decir quién es ni quién responde por él. Hoy se resuelve con parches: tarjetas prestadas, API keys compartidas y prepago.' },
        { n: '02', title: 'Por qué ahora', body: 'Los agentes ya hacen tareas completas y muchas acaban en una compra. La capa de identidad y de responsabilidad todavía no existe, y sus reglas se están escribiendo ahora.' },
        { n: '03', title: 'Primer producto', body: 'El Pasaporte: una identidad para agentes que se puede comprobar, ligada a un dueño verificado. Sobre ella se apoyan las cuentas, las reglas y el registro.' },
        { n: '04', title: 'Camino a la licencia', body: 'Con el Pasaporte en uso, el siguiente paso es mover dinero de forma regulada. La licencia es parte del plan, no del presente: hoy ANTON no es una entidad financiera.' },
      ],
    },
    contact: {
      eyebrow: 'Contacto',
      title: 'Hablemos.',
      body: 'Si inviertes en infraestructura financiera o en IA y quieres saber más, escríbenos.',
    },
  },

  listaDeEspera: {
    meta: {
      title: 'Lista de espera · ANTON',
      description: 'Únete a la lista de espera de ANTON como persona, empresa, builder o inversor.',
    },
    hero: {
      eyebrow: 'Lista de espera',
      titleLead: 'Sé de los primeros en darle un banco a',
      titleAccent: 'tu agente.',
      body: 'Déjanos tus datos. Lo primero que llega es el Pasaporte, y te escribimos cuando abra.',
    },
    next: {
      eyebrow: 'Qué pasa después',
      title: 'Qué pasa cuando te apuntas.',
      items: [
        { n: '01', title: 'Te escribimos', body: 'Cuando abramos, al correo que nos dejes. Para nada más.' },
        { n: '02', title: 'Empiezas con el Pasaporte', body: 'Lo primero que podrás usar es la identidad de tu agente.' },
        { n: '03', title: 'Nos cuentas cómo te va', body: 'Lo construimos con quienes lo usan. Lo que nos digas cambia el producto.' },
      ],
    },
  },

  demo: {
    meta: {
      title: 'Demo · Próximamente · ANTON',
      description: 'La versión de prueba de ANTON llega pronto. Apúntate a la lista de espera y te escribimos.',
    },
    hero: {
      eyebrow: 'Próximamente',
      titleLead: 'Pronto podrás',
      titleAccent: 'probarlo tú.',
      body: 'Estamos terminando una versión de prueba para que juegues con ANTON y datos de ejemplo. Apúntate y te escribimos cuando esté lista.',
    },
    waitlist: {
      title: 'Te escribimos cuando esté lista.',
      body: 'Déjanos tu correo. Solo te escribiremos por esto y por la lista de espera.',
    },
  },

  privacidad: {
    meta: {
      title: 'Política de privacidad · ANTON',
      description: 'Cómo trata ANTON tus datos personales.',
    },
    eyebrow: 'Legal',
    title: 'Política de privacidad',
    updated: 'Última actualización: [FECHA]',
    template: 'Plantilla pendiente de revisión legal. Los textos entre corchetes se completan antes de publicar.',
    sections: [
      { title: 'Quién es responsable', body: '[RAZÓN SOCIAL], con domicilio en [DOMICILIO], es responsable del tratamiento de tus datos personales.' },
      { title: 'Qué datos recogemos', body: 'Hoy, ninguno. Los formularios de este sitio son una versión de prueba: revisan lo que escribes en tu navegador, pero no envían ni guardan nada. Cuando se activen, podríamos recoger tu nombre, correo, empresa y perfil.' },
      { title: 'Para qué los usaríamos', body: 'Para avisarte cuando abra la lista de espera y para contactarte sobre ANTON. [FINALIDADES SECUNDARIAS, SI LAS HAY].' },
      { title: 'Cookies y analítica', body: 'Este sitio no usa analítica ni cookies de terceros. Solo guarda en tu navegador el idioma que elegiste y si ya viste la intro. Las tipografías se cargan desde Google Fonts.' },
      { title: 'Tus derechos', body: 'Puedes acceder, rectificar, cancelar u oponerte al uso de tus datos escribiendo a [CORREO DE CONTACTO]. [PROCEDIMIENTO Y PLAZOS DE RESPUESTA].' },
      { title: 'Cambios en esta política', body: 'Publicaremos cualquier cambio en esta página, con su fecha de actualización.' },
    ],
  },

  avisoLegal: {
    meta: {
      title: 'Aviso legal · ANTON',
      description: 'Información legal sobre ANTON y este sitio.',
    },
    eyebrow: 'Legal',
    title: 'Aviso legal',
    updated: 'Última actualización: [FECHA]',
    template: 'Plantilla pendiente de revisión legal. Los textos entre corchetes se completan antes de publicar.',
    sections: [
      { title: 'Titular del sitio', body: '[RAZÓN SOCIAL], con domicilio en [DOMICILIO]. [DATOS DE REGISTRO].' },
      { title: 'Qué es ANTON hoy', body: 'ANTON todavía no es una entidad financiera autorizada y no ofrece servicios bancarios. Hoy construimos el Pasaporte, la capa de identidad para agentes. Las pantallas, importes y tiempos son datos de ejemplo.' },
      { title: 'Datos de ejemplo', body: 'Las pantallas, importes, tiempos, nombres e identificadores de este sitio son de ejemplo. No representan operaciones ni personas reales.' },
      { title: 'Propiedad intelectual', body: 'La marca ANTON y los contenidos de este sitio pertenecen a [RAZÓN SOCIAL]. [CONDICIONES DE USO].' },
      { title: 'Contacto', body: 'Escríbenos a [CORREO DE CONTACTO].' },
      { title: 'Ley aplicable', body: '[LEY Y JURISDICCIÓN APLICABLES].' },
    ],
  },

  notFound: {
    meta: {
      title: 'Página no encontrada · ANTON',
      description: 'Esta página no existe.',
    },
    led: {
      top: 'Página no encontrada',
      channels: ['Señal perdida', 'Sin tu OK', 'Ruta bloqueada'],
      cta: 'Llévame al inicio',
      hint: 'Haz clic en la pantalla para cambiar de canal',
      channel: 'Canal {n} de {total}: {name}',
    },
    eyebrow: 'Error 404',
    titleLead: 'Esta página',
    titleAccent: 'no existe.',
    body: 'El enlace está mal o la página se movió. Desde el inicio llegas a todo.',
  },
};

export type Dict = typeof es;
export default es;
