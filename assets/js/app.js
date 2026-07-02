document.addEventListener("DOMContentLoaded", () => {
  const languages = [
    { code: "fr", short: "FR", label: "Français", native: "Français", dir: "ltr" },
    { code: "en", short: "EN", label: "Anglais", native: "English", dir: "ltr" },
    { code: "zh", short: "ZH", label: "Chinois", native: "中文", dir: "ltr" },
    { code: "pt", short: "PT", label: "Portugais", native: "Português", dir: "ltr" },
    { code: "ar", short: "AR", label: "Arabe", native: "العربية", dir: "rtl" },
    { code: "es", short: "ES", label: "Espagnol", native: "Español", dir: "ltr" },
    { code: "ja", short: "JA", label: "Japonais", native: "日本語", dir: "ltr" },
  ];

  const translations = {
    en: {
      "Passer l'intro": "Skip intro",
      "Aller au contenu": "Skip to content",
      "L'art pour révéler les talents": "Art to reveal talent",
      "Une fondation internationale en naissance": "An international foundation taking shape",
      "Academy": "Academy",
      "Premier programme d'ateliers · ouverture annoncée": "First workshop program · opening announced",
      "Rejoindre": "Join",
      "Vision": "Vision",
      "L'art comme langage universel de transmission": "Art as a universal language of transmission",
      "Accueil": "Home",
      "Manifeste": "Manifesto",
      "Institut XXVII": "XXVII Institute",
      "Galerie": "Gallery",
      "Mécénat": "Patronage",
      "Maison XXVII": "Maison XXVII",
      "Contact": "Contact",
      "Fondation internationale · Art & Transmission": "International Foundation · Art & Transmission",
      "L'art comme langage de transmission, d'élévation et de reconnaissance.": "Art as a language of transmission, elevation and recognition.",
      "La transmission est le pont entre ceux qui ont ouvert la voie et ceux qui vont la réinventer.": "Transmission is the bridge between those who opened the way and those who will reinvent it.",
      "L'art": "Art",
      "n'est": "is",
      "pas": "not",
      "un": "a",
      "supplément": "supplement",
      "d'âme.": "to the soul.",
      "C'est": "It is",
      "une": "a",
      "manière": "way",
      "d'entrer": "of entering",
      "dans": "into",
      "le": "the",
      "monde.": "world.",
      "Fondation XXVII — Manifeste fondateur": "Fondation XXVII — Founding Manifesto",
      "Rejoindre la Fondation": "Join the Foundation",
      "Lire le manifeste": "Read the manifesto",
      "Manifeste XXVII": "XXVII Manifesto",
      "La Fondation XXVII affirme une conviction simple : l'art n'est pas un supplément d'âme. Il est une manière d'apprendre à regarder, à transmettre et impacter dans le monde.": "Fondation XXVII affirms a simple belief: art is not an extra touch of soul. It is a way to learn how to look, transmit and make an impact in the world.",
      "Trois gestes fondateurs": "Three founding gestures",
      "Soutenir, accompagner et relier : trois gestes pour faire passer le talent de l'ombre vers la reconnaissance.": "Support, accompany and connect: three gestures that move talent from the shadows toward recognition.",
      "Soutenir": "Support",
      "Des espaces où le geste artistique devient transmission, confiance et reconnaissance.": "Spaces where the artistic gesture becomes transmission, confidence and recognition.",
      "Accompagner": "Accompany",
      "Les jeunes créateurs dans le passage du geste intime vers l'oeuvre partagée.": "Young creators as they move from an intimate gesture to a shared work.",
      "Relier": "Connect",
      "Artistes, enfants, institutions et mécènes autour d'une même exigence de transmission.": "Artists, children, institutions and patrons gathered around the same demand for transmission.",
      "La main comme premier lieu de confiance.": "The hand as the first place of trust.",
      "Accompagner le passage du geste à l'oeuvre.": "Accompany the passage from gesture to artwork.",
      "Pourquoi la Suisse ?": "Why Switzerland?",
      "La Suisse incarne la neutralité, l'excellence et l'ouverture internationale. C'est un ancrage naturel pour une fondation qui souhaite agir à l'échelle mondiale, en dialogue avec les institutions, les mécènes et les acteurs culturels internationaux.": "Switzerland embodies neutrality, excellence and international openness. It is a natural anchor for a foundation that wants to act globally, in dialogue with institutions, patrons and international cultural actors.",
      "Notre raison d'être": "Our purpose",
      "Pas une école d'art. Pas un programme éducatif. Un mouvement. Une révolution silencieuse. Un engagement culturel.": "Not an art school. Not an educational program. A movement. A silent revolution. A cultural commitment.",
      "Pourquoi agir ?": "Why act?",
      "Parce qu'un enfant qui crée ne produit pas seulement une image. Il apprend à regarder, à choisir et à exister dans le monde.": "Because a child who creates does not only produce an image. They learn to look, choose and exist in the world.",
      "l'école développe l'esprit, mais laisse souvent l'imaginaire en marge": "school develops the mind, but often leaves imagination on the margins",
      "les écrans capturent l'attention, mais rarement le talent": "screens capture attention, but rarely talent",
      "le geste artistique redonne une place à la main, au regard et à la confiance": "the artistic gesture restores a place for the hand, the gaze and trust",
      "l'art ne devrait jamais être un luxe, mais une voie d'accès à soi et aux autres": "art should never be a luxury, but a path to oneself and to others",
      "Continuer vers l'institut": "Continue to the institute",
      "Institut": "Institute",
      "INSTITUT XXVII": "XXVII INSTITUTE",
      "Un laboratoire international de recherche, d'observation et d'expérimentation dédié aux transformations de l'art, de la transmission et des imaginaires.": "An international research, observation and experimentation laboratory dedicated to transformations in art, transmission and imagination.",
      "L'Institut éclaire les mutations culturelles, mesure l'impact réel de l'art et fait émerger de nouveaux modèles de transmission.": "The Institute sheds light on cultural shifts, measures the real impact of art and brings new models of transmission to life.",
      "Votre navigateur ne peut pas lire cette vidéo.": "Your browser cannot play this video.",
      "Séminaire Institut XXVII — art, transmission et recherche.": "XXVII Institute seminar — art, transmission and research.",
      "Nos missions": "Our missions",
      "Observer, comprendre, anticiper, expérimenter : quatre gestes pour penser l'avenir de l'art.": "Observe, understand, anticipate, experiment: four gestures to think about the future of art.",
      "Observer": "Observe",
      "Décrypter les grandes mutations du monde de l'art, de la transmission culturelle et des usages de l'attention, de l'émotion et de l'imaginaire dans nos sociétés à l'ère des technologies et de l'intelligence artificielle.": "Decode the major shifts in the art world, cultural transmission and the uses of attention, emotion and imagination in our societies in the age of technology and artificial intelligence.",
      "Comprendre": "Understand",
      "Réunir artistes, chercheurs, neuroscientifiques, acteurs culturels et technologiques pour mesurer l'impact réel de l'art sur l'apprentissage, l'inclusion, la créativité et l'interculturalité.": "Bring together artists, researchers, neuroscientists, cultural and technological actors to measure the real impact of art on learning, inclusion, creativity and interculturality.",
      "Anticiper": "Anticipate",
      "Prévoir les mutations sociétales, environnementales et technologiques pour anticiper les défis de demain et accomplir les transitions nécessaires dans les secteurs de l'art, de l'éducation et de la recherche.": "Foresee social, environmental and technological shifts in order to anticipate tomorrow's challenges and carry out the necessary transitions in art, education and research.",
      "Expérimenter": "Experiment",
      "Créer un laboratoire vivant où art, sciences, institutions, chercheurs, entreprises et technologies testent de nouveaux modèles de transmission, d'éducation, d'expérience culturelle et de dialogue.": "Create a living laboratory where art, science, institutions, researchers, companies and technologies test new models of transmission, education, cultural experience and dialogue.",
      "Continuer vers l'Academy": "Continue to the Academy",
      "XXVII ACADEMY": "XXVII ACADEMY",
      "Incubateur d'artistes": "Artist incubator",
      "Un incubateur d'artistes dédié aux enfants et jeunes talents, fondé sur le mentorat intergénérationnel, l'exigence artistique et l'ouverture internationale. Ici, l'art n'est pas un loisir.": "An artist incubator dedicated to children and young talents, based on intergenerational mentorship, artistic standards and international openness. Here, art is not a pastime.",
      "Le premier face-à-face avec l'œuvre commence souvent dans le silence du regard.": "The first encounter with a work often begins in the silence of the gaze.",
      "Notre modèle : mentorat intergénérationnel": "Our model: intergenerational mentorship",
      "Un artiste confirmé accompagne un enfant ou un jeune talent dans la durée. Une enfant révèle un artiste. Transmission inversée, co-inspiration, regards croisés : deux générations qui se rencontrent. La transmission est au cœur du parcours, dans un dialogue où l'expérience rencontre l'élan créatif.": "An established artist supports a child or young talent over time. A child reveals an artist. Reversed transmission, co-inspiration, crossed perspectives: two generations meeting. Transmission is at the heart of the journey, in a dialogue where experience meets creative momentum.",
      "Des expositions réunissant enfants, artistes émergents et professionnels dans un même espace de valorisation.": "Exhibitions bringing together children, emerging artists and professionals in one shared space of recognition.",
      "Affiche de l’exposition internationale 2026 — Un dialogue entre les maîtres et la nouvelle génération.": "Poster for the 2026 international exhibition — A dialogue between the masters and the new generation.",
      "L'atelier comme lieu d'exigence, de patience et de métamorphose.": "The studio as a place of discipline, patience and metamorphosis.",
      "Sortir de l'atelier pour rencontrer les formes du monde contemporain.": "Leaving the studio to encounter the forms of the contemporary world.",
      "Exemple": "Example",
      "Sohan, 6 ans, lauréat de la première édition, peint depuis l'âge de deux ans. Curieux et plein de vie, il transforme tout ce qu'il voit en couleur et en mouvement. Ses toiles racontent ce que ses mots ne savaient pas encore dire. L'art l'a aidé à se concentrer, à apaiser son énergie et à découvrir la beauté du partage.": "Sohan, age 6, winner of the first edition, has painted since he was two. Curious and full of life, he turns everything he sees into color and movement. His canvases tell what his words could not yet say. Art helped him focus, calm his energy and discover the beauty of sharing.",
      "Continuer vers la galerie": "Continue to the gallery",
      "Galerie XXVII": "XXVII Gallery",
      "GALERIE": "GALLERY",
      "Chaque image porte une scène de transmission : une main, un regard, un passage vers l’œuvre.": "Each image carries a scene of transmission: a hand, a gaze, a passage toward the work.",
      "Devant Calder — l’enfant entre dans l’histoire de l’art.": "Before Calder — the child enters art history.",
      "Face aux maîtres, le regard des enfants ouvre un dialogue nouveau.": "Facing the masters, children's gaze opens a new dialogue.",
      "Le musée devient un lieu de passage entre générations.": "The museum becomes a place of passage between generations.",
      "La transmission commence là où l’enfant ose laisser une trace.": "Transmission begins where the child dares to leave a trace.",
      "Faire passer le geste de l’intime vers le public.": "Moving the gesture from the intimate to the public.",
      "Avant les mots, il y a la main, la couleur et le regard.": "Before words, there is the hand, color and the gaze.",
      "Devant Monet — le regard d’aujourd’hui rencontre les maîtres.": "Before Monet — today's gaze meets the masters.",
      "Face à la sculpture — deux regards apprennent ensemble le silence de l’œuvre.": "Facing sculpture — two gazes learn together the silence of the work.",
      "Rendre l’art accessible, sans réduire son exigence.": "Making art accessible without reducing its demands.",
      "Placer l’œuvre du jeune talent au centre du regard.": "Placing the young talent's work at the center of attention.",
      "Soutenir un enfant créateur, c’est ouvrir un monde possible.": "Supporting a child creator means opening a possible world.",
      "Créer ensemble, apprendre à regarder ensemble.": "Creating together, learning to look together.",
      "Continuer vers le mécénat": "Continue to patronage",
      "Mécénat & Partenariats": "Patronage & Partnerships",
      "Participer à la naissance d’une fondation": "Take part in the birth of a foundation",
      "Rejoindre la Fondation XXVII dès son lancement, c’est inscrire son nom dans l’acte fondateur. Nous cherchons des mécènes, des partenaires institutionnels et des collaborateurs qui partagent la conviction que l’art est un droit, pas un privilège.": "Joining Fondation XXVII from its launch means placing your name in the founding act. We are looking for patrons, institutional partners and collaborators who share the conviction that art is a right, not a privilege.",
      "Nous écrire": "Write to us",
      "Être mécène fondateur": "Become a founding patron",
      "Votre soutien dès l’origine vous inscrit dans l’histoire de la Fondation. Votre nom figure dans tous les documents institutionnels fondateurs.": "Your support from the very beginning places you in the Foundation's history. Your name appears in all founding institutional documents.",
      "Visibilité internationale": "International visibility",
      "Une fondation présente sur cinq continents, avec des relais à Genève, Paris, São Paulo, Shanghai et Tokyo.": "A foundation present on five continents, with relays in Geneva, Paris, São Paulo, Shanghai and Tokyo.",
      "Accès privilégié": "Privileged access",
      "Rencontres avec les artistes, invitations aux premières expositions et aux événements de lancement dans chaque territoire.": "Meetings with artists, invitations to first exhibitions and launch events in each territory.",
      "Un acte de sens": "A meaningful act",
      "Chaque partenariat finance directement l’accès à l’art pour des jeunes créateurs qui n’auraient pas eu cette chance sans vous.": "Each partnership directly funds access to art for young creators who would not have had that chance without you.",
      "Devenir mécène ou partenaire": "Become a patron or partner",
      "La Fondation XXVII privilégie une prise de contact directe afin de construire des engagements adaptés : soutien financier, mécénat de compétence, partenariat institutionnel ou accompagnement d’un programme artistique.": "Fondation XXVII favors direct contact in order to build tailored commitments: financial support, skills-based patronage, institutional partnership or support for an artistic program.",
      "Contacter la Fondation": "Contact the Foundation",
      "Continuer vers Maison XXVII": "Continue to Maison XXVII",
      "MAISON XXVII": "MAISON XXVII",
      "L'ancrage français de la vision XXVII": "The French anchor of the XXVII vision",
      "Maison XXVII est l'association française dédiée au déploiement territorial de la vision portée par la Fondation XXVII. Elle développe ses propres programmes artistiques, éducatifs et culturels afin de faire de l'art un outil concret de transmission, d'inclusion, d'ouverture interculturelle et de développement des compétences humaines essentielles au monde de demain.": "Maison XXVII is the French association dedicated to the territorial deployment of the vision carried by Fondation XXVII. It develops its own artistic, educational and cultural programs to make art a concrete tool for transmission, inclusion, intercultural openness and the development of human skills essential to tomorrow's world.",
      "Un laboratoire d'action en France": "A laboratory for action in France",
      "Maison XXVII développe des programmes propres autour de la transmission artistique, de l'accompagnement des jeunes talents, de l'inclusion par l'art, des rencontres intergénérationnelles, des expositions, des ateliers pédagogiques et des compétences humaines révélées par la création.": "Maison XXVII develops its own programs around artistic transmission, support for young talents, inclusion through art, intergenerational encounters, exhibitions, educational workshops and human skills revealed through creation.",
      "Elle agit comme un laboratoire français de la transmission par l'art, en expérimentant de nouveaux formats avec les artistes, les chercheurs, les éducateurs, les acteurs culturels, les entreprises, les mécènes et les institutions.": "It acts as a French laboratory for transmission through art, experimenting with new formats alongside artists, researchers, educators, cultural actors, companies, patrons and institutions.",
      "CONTACT": "CONTACT",
      "Pour toute demande officielle, partenariat, mécénat ou échange institutionnel avec la Fondation XXVII.": "For any official request, partnership, patronage or institutional exchange with Fondation XXVII.",
      "Email de la Fondation": "Foundation email"
    },
    zh: {
      "Passer l'intro": "跳过开场",
      "Aller au contenu": "跳至内容",
      "L'art pour révéler les talents": "以艺术发现天赋",
      "Une fondation internationale en naissance": "一个正在诞生的国际基金会",
      "Academy": "学院",
      "Premier programme d'ateliers · ouverture annoncée": "首个工作坊项目 · 即将开放",
      "Rejoindre": "加入",
      "Vision": "愿景",
      "L'art comme langage universel de transmission": "艺术作为传承的通用语言",
      "Accueil": "首页",
      "Manifeste": "宣言",
      "Institut XXVII": "XXVII 研究院",
      "Galerie": "画廊",
      "Mécénat": "赞助",
      "Maison XXVII": "XXVII 之家",
      "Contact": "联系",
      "Fondation internationale · Art & Transmission": "国际基金会 · 艺术与传承",
      "L'art comme langage de transmission, d'élévation et de reconnaissance.": "艺术是一种传承、提升与认可的语言。",
      "La transmission est le pont entre ceux qui ont ouvert la voie et ceux qui vont la réinventer.": "传承是连接开路者与未来重新发明道路者的桥梁。",
      "L'art": "艺术",
      "n'est": "不是",
      "pas": "并非",
      "un": "一种",
      "supplément": "附加品",
      "d'âme.": "灵魂装饰。",
      "C'est": "它是",
      "une": "一种",
      "manière": "方式",
      "d'entrer": "进入",
      "dans": "到",
      "le": "这个",
      "monde.": "世界。",
      "Fondation XXVII — Manifeste fondateur": "Fondation XXVII — 创始宣言",
      "Rejoindre la Fondation": "加入基金会",
      "Lire le manifeste": "阅读宣言",
      "Manifeste XXVII": "XXVII 宣言",
      "La Fondation XXVII affirme une conviction simple : l'art n'est pas un supplément d'âme. Il est une manière d'apprendre à regarder, à transmettre et impacter dans le monde.": "Fondation XXVII 坚持一个简单信念：艺术不是灵魂的附加装饰。它是一种学习观看、传承并影响世界的方式。",
      "Trois gestes fondateurs": "三个创始行动",
      "Soutenir, accompagner et relier : trois gestes pour faire passer le talent de l'ombre vers la reconnaissance.": "支持、陪伴、连接：让天赋从阴影走向认可的三个行动。",
      "Soutenir": "支持",
      "Des espaces où le geste artistique devient transmission, confiance et reconnaissance.": "让艺术行动成为传承、信任与认可的空间。",
      "Accompagner": "陪伴",
      "Les jeunes créateurs dans le passage du geste intime vers l'oeuvre partagée.": "陪伴年轻创作者从私密表达走向共享作品。",
      "Relier": "连接",
      "Artistes, enfants, institutions et mécènes autour d'une même exigence de transmission.": "让艺术家、儿童、机构与赞助者围绕同一种传承要求相聚。",
      "La main comme premier lieu de confiance.": "手，是信任最初发生的地方。",
      "Accompagner le passage du geste à l'oeuvre.": "陪伴从动作到作品的转化。",
      "Pourquoi la Suisse ?": "为什么是瑞士？",
      "La Suisse incarne la neutralité, l'excellence et l'ouverture internationale. C'est un ancrage naturel pour une fondation qui souhaite agir à l'échelle mondiale, en dialogue avec les institutions, les mécènes et les acteurs culturels internationaux.": "瑞士象征中立、卓越与国际开放。对于一个希望在全球范围行动，并与机构、赞助者和国际文化参与者对话的基金会而言，这是天然的锚点。",
      "Notre raison d'être": "我们的存在意义",
      "Pas une école d'art. Pas un programme éducatif. Un mouvement. Une révolution silencieuse. Un engagement culturel.": "不是艺术学校。不是教育项目。是一场运动。一场静默的革命。一项文化承诺。",
      "Pourquoi agir ?": "为什么行动？",
      "Parce qu'un enfant qui crée ne produit pas seulement une image. Il apprend à regarder, à choisir et à exister dans le monde.": "因为一个创作的孩子不只是产生一幅图像。他学会观看、选择，并在世界中存在。",
      "l'école développe l'esprit, mais laisse souvent l'imaginaire en marge": "学校培养理性，却常常让想象力留在边缘",
      "les écrans capturent l'attention, mais rarement le talent": "屏幕捕获注意力，却很少发现天赋",
      "le geste artistique redonne une place à la main, au regard et à la confiance": "艺术行动重新给予手、目光与信任以位置",
      "l'art ne devrait jamais être un luxe, mais une voie d'accès à soi et aux autres": "艺术不应是奢侈品，而应是通向自我与他人的路径",
      "Continuer vers l'institut": "继续前往研究院",
      "Institut": "研究院",
      "INSTITUT XXVII": "XXVII 研究院",
      "Un laboratoire international de recherche, d'observation et d'expérimentation dédié aux transformations de l'art, de la transmission et des imaginaires.": "一个国际研究、观察与实验实验室，致力于艺术、传承与想象力的转变。",
      "L'Institut éclaire les mutations culturelles, mesure l'impact réel de l'art et fait émerger de nouveaux modèles de transmission.": "研究院照亮文化变迁，衡量艺术的真实影响，并催生新的传承模式。",
      "Votre navigateur ne peut pas lire cette vidéo.": "您的浏览器无法播放此视频。",
      "Séminaire Institut XXVII — art, transmission et recherche.": "XXVII 研究院研讨会 — 艺术、传承与研究。",
      "Nos missions": "我们的使命",
      "Observer, comprendre, anticiper, expérimenter : quatre gestes pour penser l'avenir de l'art.": "观察、理解、预见、实验：思考艺术未来的四个动作。",
      "Observer": "观察",
      "Décrypter les grandes mutations du monde de l'art, de la transmission culturelle et des usages de l'attention, de l'émotion et de l'imaginaire dans nos sociétés à l'ère des technologies et de l'intelligence artificielle.": "解读艺术世界、文化传承，以及技术与人工智能时代社会中注意力、情感和想象力使用方式的重大变化。",
      "Comprendre": "理解",
      "Réunir artistes, chercheurs, neuroscientifiques, acteurs culturels et technologiques pour mesurer l'impact réel de l'art sur l'apprentissage, l'inclusion, la créativité et l'interculturalité.": "汇聚艺术家、研究者、神经科学家、文化与技术参与者，衡量艺术对学习、包容、创造力和跨文化交流的真实影响。",
      "Anticiper": "预见",
      "Prévoir les mutations sociétales, environnementales et technologiques pour anticiper les défis de demain et accomplir les transitions nécessaires dans les secteurs de l'art, de l'éducation et de la recherche.": "预判社会、环境与技术变迁，以应对明日挑战，并完成艺术、教育和研究领域所需的转型。",
      "Expérimenter": "实验",
      "Créer un laboratoire vivant où art, sciences, institutions, chercheurs, entreprises et technologies testent de nouveaux modèles de transmission, d'éducation, d'expérience culturelle et de dialogue.": "创建一个活的实验室，让艺术、科学、机构、研究者、企业与技术共同测试传承、教育、文化体验和对话的新模式。",
      "Continuer vers l'Academy": "继续前往学院",
      "XXVII ACADEMY": "XXVII 学院",
      "Incubateur d'artistes": "艺术家孵化器",
      "Un incubateur d'artistes dédié aux enfants et jeunes talents, fondé sur le mentorat intergénérationnel, l'exigence artistique et l'ouverture internationale. Ici, l'art n'est pas un loisir.": "一个面向儿童与年轻天才的艺术家孵化器，建立在代际导师制、艺术要求和国际开放之上。在这里，艺术不是消遣。",
      "Le premier face-à-face avec l'œuvre commence souvent dans le silence du regard.": "与作品的第一次面对面，常常始于目光的沉默。",
      "Notre modèle : mentorat intergénérationnel": "我们的模式：代际导师制",
      "Un artiste confirmé accompagne un enfant ou un jeune talent dans la durée. Une enfant révèle un artiste. Transmission inversée, co-inspiration, regards croisés : deux générations qui se rencontrent. La transmission est au cœur du parcours, dans un dialogue où l'expérience rencontre l'élan créatif.": "一位成熟艺术家长期陪伴一个孩子或年轻天才。一个孩子也揭示一位艺术家。反向传承、共同启发、交叉目光：两代人在此相遇。传承处于整个路径的核心，在经验与创造冲动相遇的对话中展开。",
      "Des expositions réunissant enfants, artistes émergents et professionnels dans un même espace de valorisation.": "让儿童、新兴艺术家与专业艺术家在同一认可空间中相聚的展览。",
      "Affiche de l’exposition internationale 2026 — Un dialogue entre les maîtres et la nouvelle génération.": "2026 国际展览海报 — 大师与新一代之间的对话。",
      "L'atelier comme lieu d'exigence, de patience et de métamorphose.": "工作室是要求、耐心与蜕变之地。",
      "Sortir de l'atelier pour rencontrer les formes du monde contemporain.": "走出工作室，去遇见当代世界的形式。",
      "Exemple": "案例",
      "Sohan, 6 ans, lauréat de la première édition, peint depuis l'âge de deux ans. Curieux et plein de vie, il transforme tout ce qu'il voit en couleur et en mouvement. Ses toiles racontent ce que ses mots ne savaient pas encore dire. L'art l'a aidé à se concentrer, à apaiser son énergie et à découvrir la beauté du partage.": "Sohan，6岁，第一届获奖者，从两岁开始画画。他充满好奇与生命力，把所见的一切转化为颜色与运动。他的画布讲述了语言尚未能表达的东西。艺术帮助他集中注意力、安抚能量，并发现分享之美。",
      "Continuer vers la galerie": "继续前往画廊",
      "Galerie XXVII": "XXVII 画廊",
      "GALERIE": "画廊",
      "Chaque image porte une scène de transmission : une main, un regard, un passage vers l’œuvre.": "每一张图像都承载一个传承场景：一只手、一道目光、一次通向作品的过渡。",
      "Devant Calder — l’enfant entre dans l’histoire de l’art.": "在 Calder 面前 — 孩子进入艺术史。",
      "Face aux maîtres, le regard des enfants ouvre un dialogue nouveau.": "面对大师，孩子们的目光开启新的对话。",
      "Le musée devient un lieu de passage entre générations.": "博物馆成为代际之间的通道。",
      "La transmission commence là où l’enfant ose laisser une trace.": "传承始于孩子敢于留下痕迹之处。",
      "Faire passer le geste de l’intime vers le public.": "让私密的动作走向公众。",
      "Avant les mots, il y a la main, la couleur et le regard.": "在语言之前，有手、颜色与目光。",
      "Devant Monet — le regard d’aujourd’hui rencontre les maîtres.": "在 Monet 面前 — 今日的目光遇见大师。",
      "Face à la sculpture — deux regards apprennent ensemble le silence de l’œuvre.": "面对雕塑 — 两道目光共同学习作品的沉默。",
      "Rendre l’art accessible, sans réduire son exigence.": "让艺术可及，而不降低其要求。",
      "Placer l’œuvre du jeune talent au centre du regard.": "把年轻天才的作品置于目光中心。",
      "Soutenir un enfant créateur, c’est ouvrir un monde possible.": "支持一个儿童创作者，就是打开一个可能的世界。",
      "Créer ensemble, apprendre à regarder ensemble.": "共同创作，共同学习观看。",
      "Continuer vers le mécénat": "继续前往赞助",
      "Mécénat & Partenariats": "赞助与合作",
      "Participer à la naissance d’une fondation": "参与一个基金会的诞生",
      "Rejoindre la Fondation XXVII dès son lancement, c’est inscrire son nom dans l’acte fondateur. Nous cherchons des mécènes, des partenaires institutionnels et des collaborateurs qui partagent la conviction que l’art est un droit, pas un privilège.": "从 Fondation XXVII 创立之初加入，就是把名字写入创始行动。我们寻找赞助者、机构伙伴和合作者，他们相信艺术是一项权利，而不是特权。",
      "Nous écrire": "联系我们",
      "Être mécène fondateur": "成为创始赞助者",
      "Votre soutien dès l’origine vous inscrit dans l’histoire de la Fondation. Votre nom figure dans tous les documents institutionnels fondateurs.": "您从一开始的支持，将被写入基金会历史。您的名字将出现在所有创始机构文件中。",
      "Visibilité internationale": "国际可见度",
      "Une fondation présente sur cinq continents, avec des relais à Genève, Paris, São Paulo, Shanghai et Tokyo.": "一个遍布五大洲的基金会，在日内瓦、巴黎、圣保罗、上海和东京设有连接点。",
      "Accès privilégié": "优先接触",
      "Rencontres avec les artistes, invitations aux premières expositions et aux événements de lancement dans chaque territoire.": "与艺术家会面，受邀参加首批展览和各地区启动活动。",
      "Un acte de sens": "有意义的行动",
      "Chaque partenariat finance directement l’accès à l’art pour des jeunes créateurs qui n’auraient pas eu cette chance sans vous.": "每一项合作都直接资助年轻创作者接触艺术；没有您，他们可能无法获得这样的机会。",
      "Devenir mécène ou partenaire": "成为赞助者或合作伙伴",
      "La Fondation XXVII privilégie une prise de contact directe afin de construire des engagements adaptés : soutien financier, mécénat de compétence, partenariat institutionnel ou accompagnement d’un programme artistique.": "Fondation XXVII 倾向于直接联系，以建立合适的承诺：资金支持、技能赞助、机构合作或艺术项目陪伴。",
      "Contacter la Fondation": "联系基金会",
      "Continuer vers Maison XXVII": "继续前往 XXVII 之家",
      "MAISON XXVII": "XXVII 之家",
      "L'ancrage français de la vision XXVII": "XXVII 愿景在法国的锚点",
      "Maison XXVII est l'association française dédiée au déploiement territorial de la vision portée par la Fondation XXVII. Elle développe ses propres programmes artistiques, éducatifs et culturels afin de faire de l'art un outil concret de transmission, d'inclusion, d'ouverture interculturelle et de développement des compétences humaines essentielles au monde de demain.": "Maison XXVII 是法国协会，致力于在地域层面展开 Fondation XXVII 所承载的愿景。它发展自己的艺术、教育和文化项目，使艺术成为传承、包容、跨文化开放以及培养未来世界所需人类能力的具体工具。",
      "Un laboratoire d'action en France": "法国的行动实验室",
      "Maison XXVII développe des programmes propres autour de la transmission artistique, de l'accompagnement des jeunes talents, de l'inclusion par l'art, des rencontres intergénérationnelles, des expositions, des ateliers pédagogiques et des compétences humaines révélées par la création.": "Maison XXVII 围绕艺术传承、年轻天才陪伴、通过艺术实现包容、代际相遇、展览、教育工作坊以及创作所揭示的人类能力发展自己的项目。",
      "Elle agit comme un laboratoire français de la transmission par l'art, en expérimentant de nouveaux formats avec les artistes, les chercheurs, les éducateurs, les acteurs culturels, les entreprises, les mécènes et les institutions.": "它作为法国艺术传承实验室，与艺术家、研究者、教育者、文化参与者、企业、赞助者和机构共同实验新的形式。",
      "CONTACT": "联系",
      "Pour toute demande officielle, partenariat, mécénat ou échange institutionnel avec la Fondation XXVII.": "如有任何正式请求、合作、赞助或机构交流，请联系 Fondation XXVII。",
      "Email de la Fondation": "基金会邮箱"
    },
    pt: {
      "Passer l'intro": "Pular introdução",
      "Aller au contenu": "Ir para o conteúdo",
      "L'art pour révéler les talents": "A arte para revelar talentos",
      "Une fondation internationale en naissance": "Uma fundação internacional em nascimento",
      "Academy": "Academy",
      "Premier programme d'ateliers · ouverture annoncée": "Primeiro programa de oficinas · abertura anunciada",
      "Rejoindre": "Participar",
      "Vision": "Visão",
      "L'art comme langage universel de transmission": "A arte como linguagem universal de transmissão",
      "Accueil": "Início",
      "Manifeste": "Manifesto",
      "Institut XXVII": "Instituto XXVII",
      "Galerie": "Galeria",
      "Mécénat": "Mecenato",
      "Maison XXVII": "Maison XXVII",
      "Contact": "Contato",
      "Fondation internationale · Art & Transmission": "Fundação internacional · Arte & Transmissão",
      "L'art comme langage de transmission, d'élévation et de reconnaissance.": "A arte como linguagem de transmissão, elevação e reconhecimento.",
      "La transmission est le pont entre ceux qui ont ouvert la voie et ceux qui vont la réinventer.": "A transmissão é a ponte entre aqueles que abriram o caminho e aqueles que irão reinventá-lo.",
      "L'art": "A arte",
      "n'est": "não é",
      "pas": "",
      "un": "um",
      "supplément": "suplemento",
      "d'âme.": "da alma.",
      "C'est": "É",
      "une": "uma",
      "manière": "maneira",
      "d'entrer": "de entrar",
      "dans": "no",
      "le": "o",
      "monde.": "mundo.",
      "Fondation XXVII — Manifeste fondateur": "Fondation XXVII — Manifesto fundador",
      "Rejoindre la Fondation": "Participar da Fundação",
      "Lire le manifeste": "Ler o manifesto",
      "Manifeste XXVII": "Manifesto XXVII",
      "La Fondation XXVII affirme une conviction simple : l'art n'est pas un supplément d'âme. Il est une manière d'apprendre à regarder, à transmettre et impacter dans le monde.": "A Fondation XXVII afirma uma convicção simples: a arte não é um suplemento da alma. É uma forma de aprender a olhar, transmitir e gerar impacto no mundo.",
      "Trois gestes fondateurs": "Três gestos fundadores",
      "Soutenir, accompagner et relier : trois gestes pour faire passer le talent de l'ombre vers la reconnaissance.": "Apoiar, acompanhar e conectar: três gestos para levar o talento da sombra ao reconhecimento.",
      "Soutenir": "Apoiar",
      "Des espaces où le geste artistique devient transmission, confiance et reconnaissance.": "Espaços onde o gesto artístico se torna transmissão, confiança e reconhecimento.",
      "Accompagner": "Acompanhar",
      "Les jeunes créateurs dans le passage du geste intime vers l'oeuvre partagée.": "Jovens criadores na passagem do gesto íntimo à obra compartilhada.",
      "Relier": "Conectar",
      "Artistes, enfants, institutions et mécènes autour d'une même exigence de transmission.": "Artistas, crianças, instituições e mecenas reunidos em torno da mesma exigência de transmissão.",
      "La main comme premier lieu de confiance.": "A mão como primeiro lugar de confiança.",
      "Accompagner le passage du geste à l'oeuvre.": "Acompanhar a passagem do gesto à obra.",
      "Pourquoi la Suisse ?": "Por que a Suíça?",
      "La Suisse incarne la neutralité, l'excellence et l'ouverture internationale. C'est un ancrage naturel pour une fondation qui souhaite agir à l'échelle mondiale, en dialogue avec les institutions, les mécènes et les acteurs culturels internationaux.": "A Suíça encarna neutralidade, excelência e abertura internacional. É uma base natural para uma fundação que deseja atuar em escala mundial, em diálogo com instituições, mecenas e atores culturais internacionais.",
      "Notre raison d'être": "Nossa razão de ser",
      "Pas une école d'art. Pas un programme éducatif. Un mouvement. Une révolution silencieuse. Un engagement culturel.": "Não uma escola de arte. Não um programa educativo. Um movimento. Uma revolução silenciosa. Um compromisso cultural.",
      "Pourquoi agir ?": "Por que agir?",
      "Parce qu'un enfant qui crée ne produit pas seulement une image. Il apprend à regarder, à choisir et à exister dans le monde.": "Porque uma criança que cria não produz apenas uma imagem. Ela aprende a olhar, escolher e existir no mundo.",
      "l'école développe l'esprit, mais laisse souvent l'imaginaire en marge": "a escola desenvolve a mente, mas muitas vezes deixa o imaginário à margem",
      "les écrans capturent l'attention, mais rarement le talent": "as telas capturam a atenção, mas raramente o talento",
      "le geste artistique redonne une place à la main, au regard et à la confiance": "o gesto artístico devolve lugar à mão, ao olhar e à confiança",
      "l'art ne devrait jamais être un luxe, mais une voie d'accès à soi et aux autres": "a arte nunca deveria ser um luxo, mas um caminho de acesso a si e aos outros",
      "Continuer vers l'institut": "Continuar para o instituto",
      "Institut": "Instituto",
      "INSTITUT XXVII": "INSTITUTO XXVII",
      "Un laboratoire international de recherche, d'observation et d'expérimentation dédié aux transformations de l'art, de la transmission et des imaginaires.": "Um laboratório internacional de pesquisa, observação e experimentação dedicado às transformações da arte, da transmissão e dos imaginários.",
      "L'Institut éclaire les mutations culturelles, mesure l'impact réel de l'art et fait émerger de nouveaux modèles de transmission.": "O Instituto ilumina as mutações culturais, mede o impacto real da arte e faz emergir novos modelos de transmissão.",
      "Votre navigateur ne peut pas lire cette vidéo.": "Seu navegador não pode reproduzir este vídeo.",
      "Séminaire Institut XXVII — art, transmission et recherche.": "Seminário Instituto XXVII — arte, transmissão e pesquisa.",
      "Nos missions": "Nossas missões",
      "Observer, comprendre, anticiper, expérimenter : quatre gestes pour penser l'avenir de l'art.": "Observar, compreender, antecipar, experimentar: quatro gestos para pensar o futuro da arte.",
      "Observer": "Observar",
      "Décrypter les grandes mutations du monde de l'art, de la transmission culturelle et des usages de l'attention, de l'émotion et de l'imaginaire dans nos sociétés à l'ère des technologies et de l'intelligence artificielle.": "Decifrar as grandes mutações do mundo da arte, da transmissão cultural e dos usos da atenção, da emoção e do imaginário em nossas sociedades na era das tecnologias e da inteligência artificial.",
      "Comprendre": "Compreender",
      "Réunir artistes, chercheurs, neuroscientifiques, acteurs culturels et technologiques pour mesurer l'impact réel de l'art sur l'apprentissage, l'inclusion, la créativité et l'interculturalité.": "Reunir artistas, pesquisadores, neurocientistas e atores culturais e tecnológicos para medir o impacto real da arte na aprendizagem, inclusão, criatividade e interculturalidade.",
      "Anticiper": "Antecipar",
      "Prévoir les mutations sociétales, environnementales et technologiques pour anticiper les défis de demain et accomplir les transitions nécessaires dans les secteurs de l'art, de l'éducation et de la recherche.": "Prever as mutações sociais, ambientais e tecnológicas para antecipar os desafios de amanhã e realizar as transições necessárias nos setores da arte, educação e pesquisa.",
      "Expérimenter": "Experimentar",
      "Créer un laboratoire vivant où art, sciences, institutions, chercheurs, entreprises et technologies testent de nouveaux modèles de transmission, d'éducation, d'expérience culturelle et de dialogue.": "Criar um laboratório vivo onde arte, ciências, instituições, pesquisadores, empresas e tecnologias testem novos modelos de transmissão, educação, experiência cultural e diálogo.",
      "Continuer vers l'Academy": "Continuar para a Academy",
      "XXVII ACADEMY": "XXVII ACADEMY",
      "Incubateur d'artistes": "Incubadora de artistas",
      "Un incubateur d'artistes dédié aux enfants et jeunes talents, fondé sur le mentorat intergénérationnel, l'exigence artistique et l'ouverture internationale. Ici, l'art n'est pas un loisir.": "Uma incubadora de artistas dedicada a crianças e jovens talentos, baseada no mentorado intergeracional, na exigência artística e na abertura internacional. Aqui, a arte não é lazer.",
      "Le premier face-à-face avec l'œuvre commence souvent dans le silence du regard.": "O primeiro encontro com a obra muitas vezes começa no silêncio do olhar.",
      "Notre modèle : mentorat intergénérationnel": "Nosso modelo: mentorado intergeracional",
      "Un artiste confirmé accompagne un enfant ou un jeune talent dans la durée. Une enfant révèle un artiste. Transmission inversée, co-inspiration, regards croisés : deux générations qui se rencontrent. La transmission est au cœur du parcours, dans un dialogue où l'expérience rencontre l'élan créatif.": "Um artista consolidado acompanha uma criança ou jovem talento ao longo do tempo. Uma criança revela um artista. Transmissão invertida, co-inspiração, olhares cruzados: duas gerações que se encontram. A transmissão está no coração do percurso, em um diálogo onde a experiência encontra o impulso criativo.",
      "Des expositions réunissant enfants, artistes émergents et professionnels dans un même espace de valorisation.": "Exposições reunindo crianças, artistas emergentes e profissionais em um mesmo espaço de valorização.",
      "Affiche de l’exposition internationale 2026 — Un dialogue entre les maîtres et la nouvelle génération.": "Cartaz da exposição internacional 2026 — Um diálogo entre os mestres e a nova geração.",
      "L'atelier comme lieu d'exigence, de patience et de métamorphose.": "O ateliê como lugar de exigência, paciência e metamorfose.",
      "Sortir de l'atelier pour rencontrer les formes du monde contemporain.": "Sair do ateliê para encontrar as formas do mundo contemporâneo.",
      "Exemple": "Exemplo",
      "Sohan, 6 ans, lauréat de la première édition, peint depuis l'âge de deux ans. Curieux et plein de vie, il transforme tout ce qu'il voit en couleur et en mouvement. Ses toiles racontent ce que ses mots ne savaient pas encore dire. L'art l'a aidé à se concentrer, à apaiser son énergie et à découvrir la beauté du partage.": "Sohan, 6 anos, vencedor da primeira edição, pinta desde os dois anos. Curioso e cheio de vida, transforma tudo o que vê em cor e movimento. Suas telas contam o que suas palavras ainda não sabiam dizer. A arte o ajudou a se concentrar, acalmar sua energia e descobrir a beleza do compartilhamento.",
      "Continuer vers la galerie": "Continuar para a galeria",
      "Galerie XXVII": "Galeria XXVII",
      "GALERIE": "GALERIA",
      "Chaque image porte une scène de transmission : une main, un regard, un passage vers l’œuvre.": "Cada imagem carrega uma cena de transmissão: uma mão, um olhar, uma passagem em direção à obra.",
      "Devant Calder — l’enfant entre dans l’histoire de l’art.": "Diante de Calder — a criança entra na história da arte.",
      "Face aux maîtres, le regard des enfants ouvre un dialogue nouveau.": "Diante dos mestres, o olhar das crianças abre um novo diálogo.",
      "Le musée devient un lieu de passage entre générations.": "O museu se torna um lugar de passagem entre gerações.",
      "La transmission commence là où l’enfant ose laisser une trace.": "A transmissão começa onde a criança ousa deixar uma marca.",
      "Faire passer le geste de l’intime vers le public.": "Levar o gesto do íntimo ao público.",
      "Avant les mots, il y a la main, la couleur et le regard.": "Antes das palavras, há a mão, a cor e o olhar.",
      "Devant Monet — le regard d’aujourd’hui rencontre les maîtres.": "Diante de Monet — o olhar de hoje encontra os mestres.",
      "Face à la sculpture — deux regards apprennent ensemble le silence de l’œuvre.": "Diante da escultura — dois olhares aprendem juntos o silêncio da obra.",
      "Rendre l’art accessible, sans réduire son exigence.": "Tornar a arte acessível sem reduzir sua exigência.",
      "Placer l’œuvre du jeune talent au centre du regard.": "Colocar a obra do jovem talento no centro do olhar.",
      "Soutenir un enfant créateur, c’est ouvrir un monde possible.": "Apoiar uma criança criadora é abrir um mundo possível.",
      "Créer ensemble, apprendre à regarder ensemble.": "Criar juntos, aprender a olhar juntos.",
      "Continuer vers le mécénat": "Continuar para o mecenato",
      "Mécénat & Partenariats": "Mecenato & Parcerias",
      "Participer à la naissance d’une fondation": "Participar do nascimento de uma fundação",
      "Rejoindre la Fondation XXVII dès son lancement, c’est inscrire son nom dans l’acte fondateur. Nous cherchons des mécènes, des partenaires institutionnels et des collaborateurs qui partagent la conviction que l’art est un droit, pas un privilège.": "Participar da Fondation XXVII desde seu lançamento é inscrever seu nome no ato fundador. Buscamos mecenas, parceiros institucionais e colaboradores que compartilhem a convicção de que a arte é um direito, não um privilégio.",
      "Nous écrire": "Escreva para nós",
      "Être mécène fondateur": "Ser mecenas fundador",
      "Votre soutien dès l’origine vous inscrit dans l’histoire de la Fondation. Votre nom figure dans tous les documents institutionnels fondateurs.": "Seu apoio desde a origem o inscreve na história da Fundação. Seu nome aparece em todos os documentos institucionais fundadores.",
      "Visibilité internationale": "Visibilidade internacional",
      "Une fondation présente sur cinq continents, avec des relais à Genève, Paris, São Paulo, Shanghai et Tokyo.": "Uma fundação presente em cinco continentes, com pontos de ligação em Genebra, Paris, São Paulo, Xangai e Tóquio.",
      "Accès privilégié": "Acesso privilegiado",
      "Rencontres avec les artistes, invitations aux premières expositions et aux événements de lancement dans chaque territoire.": "Encontros com artistas, convites para as primeiras exposições e eventos de lançamento em cada território.",
      "Un acte de sens": "Um ato com sentido",
      "Chaque partenariat finance directement l’accès à l’art pour des jeunes créateurs qui n’auraient pas eu cette chance sans vous.": "Cada parceria financia diretamente o acesso à arte para jovens criadores que não teriam essa oportunidade sem você.",
      "Devenir mécène ou partenaire": "Tornar-se mecenas ou parceiro",
      "La Fondation XXVII privilégie une prise de contact directe afin de construire des engagements adaptés : soutien financier, mécénat de compétence, partenariat institutionnel ou accompagnement d’un programme artistique.": "A Fondation XXVII privilegia o contato direto para construir compromissos adaptados: apoio financeiro, mecenato de competência, parceria institucional ou acompanhamento de um programa artístico.",
      "Contacter la Fondation": "Contatar a Fundação",
      "Continuer vers Maison XXVII": "Continuar para Maison XXVII",
      "MAISON XXVII": "MAISON XXVII",
      "L'ancrage français de la vision XXVII": "A base francesa da visão XXVII",
      "Maison XXVII est l'association française dédiée au déploiement territorial de la vision portée par la Fondation XXVII. Elle développe ses propres programmes artistiques, éducatifs et culturels afin de faire de l'art un outil concret de transmission, d'inclusion, d'ouverture interculturelle et de développement des compétences humaines essentielles au monde de demain.": "Maison XXVII é a associação francesa dedicada ao desenvolvimento territorial da visão levada pela Fondation XXVII. Ela desenvolve seus próprios programas artísticos, educativos e culturais para fazer da arte uma ferramenta concreta de transmissão, inclusão, abertura intercultural e desenvolvimento das competências humanas essenciais ao mundo de amanhã.",
      "Un laboratoire d'action en France": "Um laboratório de ação na França",
      "Maison XXVII développe des programmes propres autour de la transmission artistique, de l'accompagnement des jeunes talents, de l'inclusion par l'art, des rencontres intergénérationnelles, des expositions, des ateliers pédagogiques et des compétences humaines révélées par la création.": "Maison XXVII desenvolve programas próprios em torno da transmissão artística, do acompanhamento de jovens talentos, da inclusão pela arte, dos encontros intergeracionais, das exposições, das oficinas pedagógicas e das competências humanas reveladas pela criação.",
      "Elle agit comme un laboratoire français de la transmission par l'art, en expérimentant de nouveaux formats avec les artistes, les chercheurs, les éducateurs, les acteurs culturels, les entreprises, les mécènes et les institutions.": "Ela atua como um laboratório francês da transmissão pela arte, experimentando novos formatos com artistas, pesquisadores, educadores, atores culturais, empresas, mecenas e instituições.",
      "CONTACT": "CONTATO",
      "Pour toute demande officielle, partenariat, mécénat ou échange institutionnel avec la Fondation XXVII.": "Para qualquer solicitação oficial, parceria, mecenato ou troca institucional com a Fondation XXVII.",
      "Email de la Fondation": "Email da Fundação"
    },
    ar: {
      "Passer l'intro": "تخطي المقدمة",
      "Aller au contenu": "الانتقال إلى المحتوى",
      "L'art pour révéler les talents": "الفن لكشف المواهب",
      "Une fondation internationale en naissance": "مؤسسة دولية في طور النشأة",
      "Academy": "الأكاديمية",
      "Premier programme d'ateliers · ouverture annoncée": "أول برنامج ورشات · سيتم الإعلان عن الافتتاح",
      "Rejoindre": "الانضمام",
      "Vision": "الرؤية",
      "L'art comme langage universel de transmission": "الفن كلغة عالمية للتناقل",
      "Accueil": "الرئيسية",
      "Manifeste": "البيان",
      "Institut XXVII": "معهد XXVII",
      "Galerie": "المعرض",
      "Mécénat": "الرعاية",
      "Maison XXVII": "دار XXVII",
      "Contact": "اتصال",
      "Fondation internationale · Art & Transmission": "مؤسسة دولية · الفن والتناقل",
      "FONDATION XXVII": "مؤسسة XXVII",
      "L'art comme langage de transmission, d'élévation et de reconnaissance.": "الفن كلغة للتناقل والارتقاء والاعتراف.",
      "La transmission est le pont entre ceux qui ont ouvert la voie et ceux qui vont la réinventer.": "التناقل هو الجسر بين من فتحوا الطريق ومن سيعيدون ابتكاره.",
      "L'art": "الفن",
      "n'est": "ليس",
      "pas": "",
      "un": "مجرد",
      "supplément": "إضافة",
      "d'âme.": "للروح.",
      "C'est": "إنه",
      "une": "طريقة",
      "manière": "نهج",
      "d'entrer": "لدخول",
      "dans": "إلى",
      "le": "هذا",
      "monde.": "العالم.",
      "Fondation XXVII — Manifeste fondateur": "مؤسسة XXVII — البيان التأسيسي",
      "Rejoindre la Fondation": "الانضمام إلى المؤسسة",
      "Lire le manifeste": "قراءة البيان",
      "Manifeste XXVII": "بيان XXVII",
      "La Fondation XXVII affirme une conviction simple : l'art n'est pas un supplément d'âme. Il est une manière d'apprendre à regarder, à transmettre et impacter dans le monde.": "تؤكد مؤسسة XXVII قناعة بسيطة: الفن ليس إضافة للروح. إنه طريقة لتعلم النظر والتناقل والتأثير في العالم.",
      "Trois gestes fondateurs": "ثلاث مبادرات تأسيسية",
      "Soutenir, accompagner et relier : trois gestes pour faire passer le talent de l'ombre vers la reconnaissance.": "الدعم والمرافقة والربط: ثلاث مبادرات تنقل الموهبة من الظل إلى الاعتراف.",
      "Soutenir": "دعم",
      "Des espaces où le geste artistique devient transmission, confiance et reconnaissance.": "مساحات يصبح فيها الفعل الفني تناقلا وثقة واعترافا.",
      "Accompagner": "مرافقة",
      "Les jeunes créateurs dans le passage du geste intime vers l'oeuvre partagée.": "مرافقة المبدعين الشباب في انتقال الفعل الحميم إلى عمل مشترك.",
      "Relier": "ربط",
      "Artistes, enfants, institutions et mécènes autour d'une même exigence de transmission.": "فنانون وأطفال ومؤسسات ورعاة حول مطلب واحد للتناقل.",
      "La main comme premier lieu de confiance.": "اليد كأول مكان للثقة.",
      "Accompagner le passage du geste à l'oeuvre.": "مرافقة الانتقال من الفعل إلى العمل الفني.",
      "Pourquoi la Suisse ?": "لماذا سويسرا؟",
      "La Suisse incarne la neutralité, l'excellence et l'ouverture internationale. C'est un ancrage naturel pour une fondation qui souhaite agir à l'échelle mondiale, en dialogue avec les institutions, les mécènes et les acteurs culturels internationaux.": "تجسد سويسرا الحياد والتميز والانفتاح الدولي. إنها قاعدة طبيعية لمؤسسة ترغب في العمل على نطاق عالمي، في حوار مع المؤسسات والرعاة والفاعلين الثقافيين الدوليين.",
      "Notre raison d'être": "سبب وجودنا",
      "Pas une école d'art. Pas un programme éducatif. Un mouvement. Une révolution silencieuse. Un engagement culturel.": "ليست مدرسة فن. ليست برنامجا تعليميا. بل حركة. ثورة صامتة. التزام ثقافي.",
      "Pourquoi agir ?": "لماذا نتحرك؟",
      "Parce qu'un enfant qui crée ne produit pas seulement une image. Il apprend à regarder, à choisir et à exister dans le monde.": "لأن الطفل الذي يبدع لا ينتج صورة فقط. بل يتعلم النظر والاختيار والوجود في العالم.",
      "l'école développe l'esprit, mais laisse souvent l'imaginaire en marge": "المدرسة تنمي العقل، لكنها غالبا تترك الخيال على الهامش",
      "les écrans capturent l'attention, mais rarement le talent": "الشاشات تلتقط الانتباه، لكنها نادرا ما تكشف الموهبة",
      "le geste artistique redonne une place à la main, au regard et à la confiance": "الفعل الفني يعيد مكانة اليد والنظر والثقة",
      "l'art ne devrait jamais être un luxe, mais une voie d'accès à soi et aux autres": "لا ينبغي للفن أن يكون ترفا، بل طريقا إلى الذات وإلى الآخرين",
      "Continuer vers l'institut": "المتابعة إلى المعهد",
      "Institut": "المعهد",
      "INSTITUT XXVII": "معهد XXVII",
      "Un laboratoire international de recherche, d'observation et d'expérimentation dédié aux transformations de l'art, de la transmission et des imaginaires.": "مختبر دولي للبحث والملاحظة والتجريب مخصص لتحولات الفن والتناقل والخيال.",
      "L'Institut éclaire les mutations culturelles, mesure l'impact réel de l'art et fait émerger de nouveaux modèles de transmission.": "يلقي المعهد الضوء على التحولات الثقافية، ويقيس الأثر الحقيقي للفن، ويبرز نماذج جديدة للتناقل.",
      "Votre navigateur ne peut pas lire cette vidéo.": "لا يستطيع متصفحك تشغيل هذا الفيديو.",
      "Séminaire Institut XXVII — art, transmission et recherche.": "ندوة معهد XXVII — الفن والتناقل والبحث.",
      "Nos missions": "مهامنا",
      "Observer, comprendre, anticiper, expérimenter : quatre gestes pour penser l'avenir de l'art.": "الملاحظة والفهم والاستباق والتجريب: أربعة أفعال للتفكير في مستقبل الفن.",
      "Observer": "ملاحظة",
      "Décrypter les grandes mutations du monde de l'art, de la transmission culturelle et des usages de l'attention, de l'émotion et de l'imaginaire dans nos sociétés à l'ère des technologies et de l'intelligence artificielle.": "فك رموز التحولات الكبرى في عالم الفن والتناقل الثقافي واستخدامات الانتباه والعاطفة والخيال في مجتمعاتنا في عصر التكنولوجيا والذكاء الاصطناعي.",
      "Comprendre": "فهم",
      "Réunir artistes, chercheurs, neuroscientifiques, acteurs culturels et technologiques pour mesurer l'impact réel de l'art sur l'apprentissage, l'inclusion, la créativité et l'interculturalité.": "جمع الفنانين والباحثين وعلماء الأعصاب والفاعلين الثقافيين والتكنولوجيين لقياس الأثر الحقيقي للفن على التعلم والإدماج والإبداع والتعدد الثقافي.",
      "Anticiper": "استباق",
      "Prévoir les mutations sociétales, environnementales et technologiques pour anticiper les défis de demain et accomplir les transitions nécessaires dans les secteurs de l'art, de l'éducation et de la recherche.": "استشراف التحولات الاجتماعية والبيئية والتكنولوجية لاستباق تحديات الغد وإنجاز الانتقالات الضرورية في مجالات الفن والتعليم والبحث.",
      "Expérimenter": "تجريب",
      "Créer un laboratoire vivant où art, sciences, institutions, chercheurs, entreprises et technologies testent de nouveaux modèles de transmission, d'éducation, d'expérience culturelle et de dialogue.": "إنشاء مختبر حي تختبر فيه الفنون والعلوم والمؤسسات والباحثون والشركات والتقنيات نماذج جديدة للتناقل والتعليم والتجربة الثقافية والحوار.",
      "Continuer vers l'Academy": "المتابعة إلى الأكاديمية",
      "XXVII ACADEMY": "أكاديمية XXVII",
      "Incubateur d'artistes": "حاضنة للفنانين",
      "Un incubateur d'artistes dédié aux enfants et jeunes talents, fondé sur le mentorat intergénérationnel, l'exigence artistique et l'ouverture internationale. Ici, l'art n'est pas un loisir.": "حاضنة فنانين مخصصة للأطفال والمواهب الشابة، تقوم على الإرشاد بين الأجيال، والصرامة الفنية، والانفتاح الدولي. هنا، الفن ليس تسلية.",
      "Le premier face-à-face avec l'œuvre commence souvent dans le silence du regard.": "غالبا ما يبدأ اللقاء الأول مع العمل الفني في صمت النظرة.",
      "Notre modèle : mentorat intergénérationnel": "نموذجنا: إرشاد بين الأجيال",
      "Un artiste confirmé accompagne un enfant ou un jeune talent dans la durée. Une enfant révèle un artiste. Transmission inversée, co-inspiration, regards croisés : deux générations qui se rencontrent. La transmission est au cœur du parcours, dans un dialogue où l'expérience rencontre l'élan créatif.": "يرافق فنان متمرس طفلا أو موهبة شابة على المدى الطويل. يكشف الطفل فنانا. تناقل معكوس، إلهام مشترك، ونظرات متقاطعة: جيلان يلتقيان. التناقل في قلب المسار، في حوار تلتقي فيه الخبرة بالدفعة الإبداعية.",
      "Des expositions réunissant enfants, artistes émergents et professionnels dans un même espace de valorisation.": "معارض تجمع الأطفال والفنانين الصاعدين والمحترفين في مساحة واحدة للتقدير.",
      "Affiche de l’exposition internationale 2026 — Un dialogue entre les maîtres et la nouvelle génération.": "ملصق المعرض الدولي 2026 — حوار بين الأساتذة والجيل الجديد.",
      "L'atelier comme lieu d'exigence, de patience et de métamorphose.": "المرسم كمكان للصرامة والصبر والتحول.",
      "Sortir de l'atelier pour rencontrer les formes du monde contemporain.": "الخروج من المرسم للقاء أشكال العالم المعاصر.",
      "Exemple": "مثال",
      "Sohan, 6 ans, lauréat de la première édition, peint depuis l'âge de deux ans. Curieux et plein de vie, il transforme tout ce qu'il voit en couleur et en mouvement. Ses toiles racontent ce que ses mots ne savaient pas encore dire. L'art l'a aidé à se concentrer, à apaiser son énergie et à découvrir la beauté du partage.": "سوهان، 6 سنوات، فائز بالدورة الأولى، يرسم منذ سن الثانية. فضولي ومليء بالحياة، يحول كل ما يراه إلى لون وحركة. لوحاته تقول ما لم تكن كلماته تعرف قوله بعد. ساعده الفن على التركيز وتهدئة طاقته واكتشاف جمال المشاركة.",
      "Continuer vers la galerie": "المتابعة إلى المعرض",
      "Galerie XXVII": "معرض XXVII",
      "GALERIE": "المعرض",
      "Chaque image porte une scène de transmission : une main, un regard, un passage vers l’œuvre.": "كل صورة تحمل مشهدا من التناقل: يد، نظرة، وعبور نحو العمل.",
      "Devant Calder — l’enfant entre dans l’histoire de l’art.": "أمام كالدر — يدخل الطفل تاريخ الفن.",
      "Face aux maîtres, le regard des enfants ouvre un dialogue nouveau.": "أمام الأساتذة، تفتح نظرة الأطفال حوارا جديدا.",
      "Le musée devient un lieu de passage entre générations.": "يصبح المتحف مكان عبور بين الأجيال.",
      "La transmission commence là où l’enfant ose laisser une trace.": "يبدأ التناقل حيث يجرؤ الطفل على ترك أثر.",
      "Faire passer le geste de l’intime vers le public.": "نقل الفعل من الحميم إلى العام.",
      "Avant les mots, il y a la main, la couleur et le regard.": "قبل الكلمات، هناك اليد واللون والنظرة.",
      "Devant Monet — le regard d’aujourd’hui rencontre les maîtres.": "أمام مونيه — تلتقي نظرة اليوم بالأساتذة.",
      "Face à la sculpture — deux regards apprennent ensemble le silence de l’œuvre.": "أمام النحت — نظرتان تتعلمان معا صمت العمل.",
      "Rendre l’art accessible, sans réduire son exigence.": "جعل الفن متاحا دون تقليل صرامته.",
      "Placer l’œuvre du jeune talent au centre du regard.": "وضع عمل الموهبة الشابة في مركز النظر.",
      "Soutenir un enfant créateur, c’est ouvrir un monde possible.": "دعم طفل مبدع هو فتح عالم ممكن.",
      "Créer ensemble, apprendre à regarder ensemble.": "نبدع معا، ونتعلم النظر معا.",
      "Continuer vers le mécénat": "المتابعة إلى الرعاية",
      "Mécénat & Partenariats": "الرعاية والشراكات",
      "Participer à la naissance d’une fondation": "المشاركة في ولادة مؤسسة",
      "Rejoindre la Fondation XXVII dès son lancement, c’est inscrire son nom dans l’acte fondateur. Nous cherchons des mécènes, des partenaires institutionnels et des collaborateurs qui partagent la conviction que l’art est un droit, pas un privilège.": "الانضمام إلى مؤسسة XXVII منذ انطلاقها يعني تسجيل الاسم في الفعل التأسيسي. نبحث عن رعاة وشركاء مؤسساتيين ومتعاونين يشاركون القناعة بأن الفن حق وليس امتيازا.",
      "Nous écrire": "راسلونا",
      "Lire le manifeste": "قراءة البيان",
      "Être mécène fondateur": "كن راعيا مؤسسا",
      "Votre soutien dès l’origine vous inscrit dans l’histoire de la Fondation. Votre nom figure dans tous les documents institutionnels fondateurs.": "دعمك منذ البداية يضعك في تاريخ المؤسسة. يظهر اسمك في جميع الوثائق المؤسسية التأسيسية.",
      "Visibilité internationale": "حضور دولي",
      "Une fondation présente sur cinq continents, avec des relais à Genève, Paris, São Paulo, Shanghai et Tokyo.": "مؤسسة حاضرة في خمس قارات، مع نقاط اتصال في جنيف وباريس وساو باولو وشنغهاي وطوكيو.",
      "Accès privilégié": "وصول مميز",
      "Rencontres avec les artistes, invitations aux premières expositions et aux événements de lancement dans chaque territoire.": "لقاءات مع الفنانين، ودعوات إلى المعارض الأولى وفعاليات الإطلاق في كل منطقة.",
      "Un acte de sens": "فعل ذو معنى",
      "Chaque partenariat finance directement l’accès à l’art pour des jeunes créateurs qui n’auraient pas eu cette chance sans vous.": "كل شراكة تمول مباشرة وصول مبدعين شباب إلى الفن، ممن لم تكن لهم هذه الفرصة بدونكم.",
      "Devenir mécène ou partenaire": "كن راعيا أو شريكا",
      "La Fondation XXVII privilégie une prise de contact directe afin de construire des engagements adaptés : soutien financier, mécénat de compétence, partenariat institutionnel ou accompagnement d’un programme artistique.": "تفضل مؤسسة XXVII التواصل المباشر لبناء التزامات مناسبة: دعم مالي، رعاية بالخبرة، شراكة مؤسساتية أو مرافقة برنامج فني.",
      "Contacter la Fondation": "الاتصال بالمؤسسة",
      "Continuer vers Maison XXVII": "المتابعة إلى دار XXVII",
      "MAISON XXVII": "دار XXVII",
      "L'ancrage français de la vision XXVII": "المرتكز الفرنسي لرؤية XXVII",
      "Maison XXVII est l'association française dédiée au déploiement territorial de la vision portée par la Fondation XXVII. Elle développe ses propres programmes artistiques, éducatifs et culturels afin de faire de l'art un outil concret de transmission, d'inclusion, d'ouverture interculturelle et de développement des compétences humaines essentielles au monde de demain.": "دار XXVII هي الجمعية الفرنسية المكرسة لنشر الرؤية التي تحملها مؤسسة XXVII على المستوى المحلي. تطور برامجها الفنية والتعليمية والثقافية لجعل الفن أداة ملموسة للتناقل والإدماج والانفتاح بين الثقافات وتنمية المهارات الإنسانية الأساسية لعالم الغد.",
      "Un laboratoire d'action en France": "مختبر عمل في فرنسا",
      "Maison XXVII développe des programmes propres autour de la transmission artistique, de l'accompagnement des jeunes talents, de l'inclusion par l'art, des rencontres intergénérationnelles, des expositions, des ateliers pédagogiques et des compétences humaines révélées par la création.": "تطور دار XXVII برامج خاصة حول التناقل الفني، ومرافقة المواهب الشابة، والإدماج عبر الفن، واللقاءات بين الأجيال، والمعارض، والورشات التعليمية، والمهارات الإنسانية التي تكشفها الإبداعات.",
      "Elle agit comme un laboratoire français de la transmission par l'art, en expérimentant de nouveaux formats avec les artistes, les chercheurs, les éducateurs, les acteurs culturels, les entreprises, les mécènes et les institutions.": "تعمل كمختبر فرنسي للتناقل عبر الفن، من خلال تجربة صيغ جديدة مع الفنانين والباحثين والمربين والفاعلين الثقافيين والشركات والرعاة والمؤسسات.",
      "CONTACT": "اتصال",
      "Pour toute demande officielle, partenariat, mécénat ou échange institutionnel avec la Fondation XXVII.": "لأي طلب رسمي أو شراكة أو رعاية أو تبادل مؤسساتي مع مؤسسة XXVII.",
      "Email de la Fondation": "البريد الإلكتروني للمؤسسة"
    },
    es: {
      "Passer l'intro": "Saltar intro",
      "Aller au contenu": "Ir al contenido",
      "L'art pour révéler les talents": "El arte para revelar talentos",
      "Une fondation internationale en naissance": "Una fundación internacional en nacimiento",
      "Academy": "Academy",
      "Premier programme d'ateliers · ouverture annoncée": "Primer programa de talleres · apertura anunciada",
      "Rejoindre": "Unirse",
      "Vision": "Visión",
      "L'art comme langage universel de transmission": "El arte como lenguaje universal de transmisión",
      "Accueil": "Inicio",
      "Manifeste": "Manifiesto",
      "Institut XXVII": "Instituto XXVII",
      "Galerie": "Galería",
      "Mécénat": "Mecenazgo",
      "Maison XXVII": "Maison XXVII",
      "Contact": "Contacto",
      "Fondation internationale · Art & Transmission": "Fundación internacional · Arte & Transmisión",
      "FONDATION XXVII": "FONDATION XXVII",
      "L'art comme langage de transmission, d'élévation et de reconnaissance.": "El arte como lenguaje de transmisión, elevación y reconocimiento.",
      "La transmission est le pont entre ceux qui ont ouvert la voie et ceux qui vont la réinventer.": "La transmisión es el puente entre quienes abrieron el camino y quienes lo reinventarán.",
      "L'art": "El arte",
      "n'est": "no es",
      "pas": "",
      "un": "un",
      "supplément": "suplemento",
      "d'âme.": "del alma.",
      "C'est": "Es",
      "une": "una",
      "manière": "manera",
      "d'entrer": "de entrar",
      "dans": "en",
      "le": "el",
      "monde.": "mundo.",
      "Fondation XXVII — Manifeste fondateur": "Fondation XXVII — Manifiesto fundador",
      "Rejoindre la Fondation": "Unirse a la Fundación",
      "Lire le manifeste": "Leer el manifiesto",
      "Manifeste XXVII": "Manifiesto XXVII",
      "La Fondation XXVII affirme une conviction simple : l'art n'est pas un supplément d'âme. Il est une manière d'apprendre à regarder, à transmettre et impacter dans le monde.": "Fondation XXVII afirma una convicción simple: el arte no es un suplemento del alma. Es una manera de aprender a mirar, transmitir e impactar en el mundo.",
      "Trois gestes fondateurs": "Tres gestos fundadores",
      "Soutenir, accompagner et relier : trois gestes pour faire passer le talent de l'ombre vers la reconnaissance.": "Apoyar, acompañar y conectar: tres gestos para llevar el talento de la sombra al reconocimiento.",
      "Soutenir": "Apoyar",
      "Des espaces où le geste artistique devient transmission, confiance et reconnaissance.": "Espacios donde el gesto artístico se convierte en transmisión, confianza y reconocimiento.",
      "Accompagner": "Acompañar",
      "Les jeunes créateurs dans le passage du geste intime vers l'oeuvre partagée.": "A los jóvenes creadores en el paso del gesto íntimo a la obra compartida.",
      "Relier": "Conectar",
      "Artistes, enfants, institutions et mécènes autour d'une même exigence de transmission.": "Artistas, niños, instituciones y mecenas alrededor de una misma exigencia de transmisión.",
      "La main comme premier lieu de confiance.": "La mano como primer lugar de confianza.",
      "Accompagner le passage du geste à l'oeuvre.": "Acompañar el paso del gesto a la obra.",
      "Pourquoi la Suisse ?": "¿Por qué Suiza?",
      "La Suisse incarne la neutralité, l'excellence et l'ouverture internationale. C'est un ancrage naturel pour une fondation qui souhaite agir à l'échelle mondiale, en dialogue avec les institutions, les mécènes et les acteurs culturels internationaux.": "Suiza encarna la neutralidad, la excelencia y la apertura internacional. Es un anclaje natural para una fundación que desea actuar a escala mundial, en diálogo con instituciones, mecenas y actores culturales internacionales.",
      "Notre raison d'être": "Nuestra razón de ser",
      "Pas une école d'art. Pas un programme éducatif. Un mouvement. Une révolution silencieuse. Un engagement culturel.": "No una escuela de arte. No un programa educativo. Un movimiento. Una revolución silenciosa. Un compromiso cultural.",
      "Pourquoi agir ?": "¿Por qué actuar?",
      "Parce qu'un enfant qui crée ne produit pas seulement une image. Il apprend à regarder, à choisir et à exister dans le monde.": "Porque un niño que crea no produce solo una imagen. Aprende a mirar, elegir y existir en el mundo.",
      "l'école développe l'esprit, mais laisse souvent l'imaginaire en marge": "la escuela desarrolla la mente, pero a menudo deja la imaginación al margen",
      "les écrans capturent l'attention, mais rarement le talent": "las pantallas capturan la atención, pero rara vez el talento",
      "le geste artistique redonne une place à la main, au regard et à la confiance": "el gesto artístico devuelve un lugar a la mano, la mirada y la confianza",
      "l'art ne devrait jamais être un luxe, mais une voie d'accès à soi et aux autres": "el arte nunca debería ser un lujo, sino una vía de acceso a uno mismo y a los demás",
      "Continuer vers l'institut": "Continuar al instituto",
      "Institut": "Instituto",
      "INSTITUT XXVII": "INSTITUTO XXVII",
      "Un laboratoire international de recherche, d'observation et d'expérimentation dédié aux transformations de l'art, de la transmission et des imaginaires.": "Un laboratorio internacional de investigación, observación y experimentación dedicado a las transformaciones del arte, la transmisión y los imaginarios.",
      "L'Institut éclaire les mutations culturelles, mesure l'impact réel de l'art et fait émerger de nouveaux modèles de transmission.": "El Instituto ilumina las mutaciones culturales, mide el impacto real del arte y hace emerger nuevos modelos de transmisión.",
      "Votre navigateur ne peut pas lire cette vidéo.": "Tu navegador no puede reproducir este vídeo.",
      "Séminaire Institut XXVII — art, transmission et recherche.": "Seminario Instituto XXVII — arte, transmisión e investigación.",
      "Nos missions": "Nuestras misiones",
      "Observer, comprendre, anticiper, expérimenter : quatre gestes pour penser l'avenir de l'art.": "Observar, comprender, anticipar, experimentar: cuatro gestos para pensar el futuro del arte.",
      "Observer": "Observar",
      "Décrypter les grandes mutations du monde de l'art, de la transmission culturelle et des usages de l'attention, de l'émotion et de l'imaginaire dans nos sociétés à l'ère des technologies et de l'intelligence artificielle.": "Descifrar las grandes mutaciones del mundo del arte, de la transmisión cultural y de los usos de la atención, la emoción y la imaginación en nuestras sociedades en la era de las tecnologías y la inteligencia artificial.",
      "Comprendre": "Comprender",
      "Réunir artistes, chercheurs, neuroscientifiques, acteurs culturels et technologiques pour mesurer l'impact réel de l'art sur l'apprentissage, l'inclusion, la créativité et l'interculturalité.": "Reunir a artistas, investigadores, neurocientíficos y actores culturales y tecnológicos para medir el impacto real del arte en el aprendizaje, la inclusión, la creatividad y la interculturalidad.",
      "Anticiper": "Anticipar",
      "Prévoir les mutations sociétales, environnementales et technologiques pour anticiper les défis de demain et accomplir les transitions nécessaires dans les secteurs de l'art, de l'éducation et de la recherche.": "Prever las mutaciones sociales, ambientales y tecnológicas para anticipar los desafíos de mañana y realizar las transiciones necesarias en los sectores del arte, la educación y la investigación.",
      "Expérimenter": "Experimentar",
      "Créer un laboratoire vivant où art, sciences, institutions, chercheurs, entreprises et technologies testent de nouveaux modèles de transmission, d'éducation, d'expérience culturelle et de dialogue.": "Crear un laboratorio vivo donde arte, ciencias, instituciones, investigadores, empresas y tecnologías prueben nuevos modelos de transmisión, educación, experiencia cultural y diálogo.",
      "Continuer vers l'Academy": "Continuar a la Academy",
      "XXVII ACADEMY": "XXVII ACADEMY",
      "Incubateur d'artistes": "Incubadora de artistas",
      "Un incubateur d'artistes dédié aux enfants et jeunes talents, fondé sur le mentorat intergénérationnel, l'exigence artistique et l'ouverture internationale. Ici, l'art n'est pas un loisir.": "Una incubadora de artistas dedicada a niños y jóvenes talentos, basada en el mentorazgo intergeneracional, la exigencia artística y la apertura internacional. Aquí, el arte no es un pasatiempo.",
      "Le premier face-à-face avec l'œuvre commence souvent dans le silence du regard.": "El primer cara a cara con la obra suele comenzar en el silencio de la mirada.",
      "Notre modèle : mentorat intergénérationnel": "Nuestro modelo: mentorazgo intergeneracional",
      "Un artiste confirmé accompagne un enfant ou un jeune talent dans la durée. Une enfant révèle un artiste. Transmission inversée, co-inspiration, regards croisés : deux générations qui se rencontrent. La transmission est au cœur du parcours, dans un dialogue où l'expérience rencontre l'élan créatif.": "Un artista consolidado acompaña a un niño o joven talento a largo plazo. Un niño revela a un artista. Transmisión inversa, coinspiración, miradas cruzadas: dos generaciones que se encuentran. La transmisión está en el centro del recorrido, en un diálogo donde la experiencia se encuentra con el impulso creativo.",
      "Des expositions réunissant enfants, artistes émergents et professionnels dans un même espace de valorisation.": "Exposiciones que reúnen a niños, artistas emergentes y profesionales en un mismo espacio de valoración.",
      "Affiche de l’exposition internationale 2026 — Un dialogue entre les maîtres et la nouvelle génération.": "Cartel de la exposición internacional 2026 — Un diálogo entre los maestros y la nueva generación.",
      "L'atelier comme lieu d'exigence, de patience et de métamorphose.": "El taller como lugar de exigencia, paciencia y metamorfosis.",
      "Sortir de l'atelier pour rencontrer les formes du monde contemporain.": "Salir del taller para encontrar las formas del mundo contemporáneo.",
      "Exemple": "Ejemplo",
      "Sohan, 6 ans, lauréat de la première édition, peint depuis l'âge de deux ans. Curieux et plein de vie, il transforme tout ce qu'il voit en couleur et en mouvement. Ses toiles racontent ce que ses mots ne savaient pas encore dire. L'art l'a aidé à se concentrer, à apaiser son énergie et à découvrir la beauté du partage.": "Sohan, de 6 años, ganador de la primera edición, pinta desde los dos años. Curioso y lleno de vida, transforma todo lo que ve en color y movimiento. Sus lienzos cuentan lo que sus palabras aún no sabían decir. El arte le ayudó a concentrarse, calmar su energía y descubrir la belleza de compartir.",
      "Continuer vers la galerie": "Continuar a la galería",
      "Galerie XXVII": "Galería XXVII",
      "GALERIE": "GALERÍA",
      "Chaque image porte une scène de transmission : une main, un regard, un passage vers l’œuvre.": "Cada imagen lleva una escena de transmisión: una mano, una mirada, un paso hacia la obra.",
      "Devant Calder — l’enfant entre dans l’histoire de l’art.": "Ante Calder — el niño entra en la historia del arte.",
      "Face aux maîtres, le regard des enfants ouvre un dialogue nouveau.": "Frente a los maestros, la mirada de los niños abre un nuevo diálogo.",
      "Le musée devient un lieu de passage entre générations.": "El museo se convierte en un lugar de paso entre generaciones.",
      "La transmission commence là où l’enfant ose laisser une trace.": "La transmisión comienza donde el niño se atreve a dejar una huella.",
      "Faire passer le geste de l’intime vers le public.": "Llevar el gesto de lo íntimo a lo público.",
      "Avant les mots, il y a la main, la couleur et le regard.": "Antes de las palabras, están la mano, el color y la mirada.",
      "Devant Monet — le regard d’aujourd’hui rencontre les maîtres.": "Ante Monet — la mirada de hoy se encuentra con los maestros.",
      "Face à la sculpture — deux regards apprennent ensemble le silence de l’œuvre.": "Ante la escultura — dos miradas aprenden juntas el silencio de la obra.",
      "Rendre l’art accessible, sans réduire son exigence.": "Hacer accesible el arte sin reducir su exigencia.",
      "Placer l’œuvre du jeune talent au centre du regard.": "Situar la obra del joven talento en el centro de la mirada.",
      "Soutenir un enfant créateur, c’est ouvrir un monde possible.": "Apoyar a un niño creador es abrir un mundo posible.",
      "Créer ensemble, apprendre à regarder ensemble.": "Crear juntos, aprender a mirar juntos.",
      "Continuer vers le mécénat": "Continuar al mecenazgo",
      "Mécénat & Partenariats": "Mecenazgo & Alianzas",
      "Participer à la naissance d’une fondation": "Participar en el nacimiento de una fundación",
      "Rejoindre la Fondation XXVII dès son lancement, c’est inscrire son nom dans l’acte fondateur. Nous cherchons des mécènes, des partenaires institutionnels et des collaborateurs qui partagent la conviction que l’art est un droit, pas un privilège.": "Unirse a Fondation XXVII desde su lanzamiento es inscribir su nombre en el acto fundador. Buscamos mecenas, socios institucionales y colaboradores que compartan la convicción de que el arte es un derecho, no un privilegio.",
      "Nous écrire": "Escríbanos",
      "Être mécène fondateur": "Ser mecenas fundador",
      "Votre soutien dès l’origine vous inscrit dans l’histoire de la Fondation. Votre nom figure dans tous les documents institutionnels fondateurs.": "Su apoyo desde el origen lo inscribe en la historia de la Fundación. Su nombre figura en todos los documentos institucionales fundadores.",
      "Visibilité internationale": "Visibilidad internacional",
      "Une fondation présente sur cinq continents, avec des relais à Genève, Paris, São Paulo, Shanghai et Tokyo.": "Una fundación presente en cinco continentes, con enlaces en Ginebra, París, São Paulo, Shanghái y Tokio.",
      "Accès privilégié": "Acceso privilegiado",
      "Rencontres avec les artistes, invitations aux premières expositions et aux événements de lancement dans chaque territoire.": "Encuentros con artistas, invitaciones a las primeras exposiciones y a los eventos de lanzamiento en cada territorio.",
      "Un acte de sens": "Un acto con sentido",
      "Chaque partenariat finance directement l’accès à l’art pour des jeunes créateurs qui n’auraient pas eu cette chance sans vous.": "Cada alianza financia directamente el acceso al arte para jóvenes creadores que no habrían tenido esta oportunidad sin usted.",
      "Devenir mécène ou partenaire": "Convertirse en mecenas o socio",
      "La Fondation XXVII privilégie une prise de contact directe afin de construire des engagements adaptés : soutien financier, mécénat de compétence, partenariat institutionnel ou accompagnement d’un programme artistique.": "Fondation XXVII privilegia el contacto directo para construir compromisos adaptados: apoyo financiero, mecenazgo de competencias, alianza institucional o acompañamiento de un programa artístico.",
      "Contacter la Fondation": "Contactar con la Fundación",
      "Continuer vers Maison XXVII": "Continuar a Maison XXVII",
      "MAISON XXVII": "MAISON XXVII",
      "L'ancrage français de la vision XXVII": "El anclaje francés de la visión XXVII",
      "Maison XXVII est l'association française dédiée au déploiement territorial de la vision portée par la Fondation XXVII. Elle développe ses propres programmes artistiques, éducatifs et culturels afin de faire de l'art un outil concret de transmission, d'inclusion, d'ouverture interculturelle et de développement des compétences humaines essentielles au monde de demain.": "Maison XXVII es la asociación francesa dedicada al despliegue territorial de la visión impulsada por Fondation XXVII. Desarrolla sus propios programas artísticos, educativos y culturales para hacer del arte una herramienta concreta de transmisión, inclusión, apertura intercultural y desarrollo de competencias humanas esenciales para el mundo de mañana.",
      "Un laboratoire d'action en France": "Un laboratorio de acción en Francia",
      "Maison XXVII développe des programmes propres autour de la transmission artistique, de l'accompagnement des jeunes talents, de l'inclusion par l'art, des rencontres intergénérationnelles, des expositions, des ateliers pédagogiques et des compétences humaines révélées par la création.": "Maison XXVII desarrolla programas propios en torno a la transmisión artística, el acompañamiento de jóvenes talentos, la inclusión a través del arte, los encuentros intergeneracionales, las exposiciones, los talleres pedagógicos y las competencias humanas reveladas por la creación.",
      "Elle agit comme un laboratoire français de la transmission par l'art, en expérimentant de nouveaux formats avec les artistes, les chercheurs, les éducateurs, les acteurs culturels, les entreprises, les mécènes et les institutions.": "Actúa como un laboratorio francés de transmisión por el arte, experimentando nuevos formatos con artistas, investigadores, educadores, actores culturales, empresas, mecenas e instituciones.",
      "CONTACT": "CONTACTO",
      "Pour toute demande officielle, partenariat, mécénat ou échange institutionnel avec la Fondation XXVII.": "Para cualquier solicitud oficial, alianza, mecenazgo o intercambio institucional con Fondation XXVII.",
      "Email de la Fondation": "Email de la Fundación"
    },
    ja: {
      "Passer l'intro": "イントロをスキップ",
      "Aller au contenu": "コンテンツへ移動",
      "L'art pour révéler les talents": "才能をひらくためのアート",
      "Une fondation internationale en naissance": "誕生しつつある国際財団",
      "Academy": "アカデミー",
      "Premier programme d'ateliers · ouverture annoncée": "初のワークショッププログラム · 開始予定",
      "Rejoindre": "参加",
      "Vision": "ビジョン",
      "L'art comme langage universel de transmission": "継承の普遍言語としてのアート",
      "Accueil": "ホーム",
      "Manifeste": "マニフェスト",
      "Institut XXVII": "XXVII インスティテュート",
      "Galerie": "ギャラリー",
      "Mécénat": "メセナ",
      "Maison XXVII": "Maison XXVII",
      "Contact": "お問い合わせ",
      "Fondation internationale · Art & Transmission": "国際財団 · アートと継承",
      "FONDATION XXVII": "FONDATION XXVII",
      "L'art comme langage de transmission, d'élévation et de reconnaissance.": "継承、高揚、認知の言語としてのアート。",
      "La transmission est le pont entre ceux qui ont ouvert la voie et ceux qui vont la réinventer.": "継承とは、道を切り開いた人々と、それを再発明する人々を結ぶ橋です。",
      "L'art": "アートは",
      "n'est": "ただの",
      "pas": "ものでは",
      "un": "ない",
      "supplément": "付け足し",
      "d'âme.": "ではありません。",
      "C'est": "それは",
      "une": "ひとつの",
      "manière": "方法",
      "d'entrer": "入るための",
      "dans": "",
      "le": "",
      "monde.": "世界への道です。",
      "Fondation XXVII — Manifeste fondateur": "Fondation XXVII — 創設マニフェスト",
      "Rejoindre la Fondation": "財団に参加する",
      "Lire le manifeste": "マニフェストを読む",
      "Manifeste XXVII": "XXVII マニフェスト",
      "La Fondation XXVII affirme une conviction simple : l'art n'est pas un supplément d'âme. Il est une manière d'apprendre à regarder, à transmettre et impacter dans le monde.": "Fondation XXVII は、シンプルな信念を掲げます。アートは心の装飾ではありません。見ること、伝えること、世界に影響を与えることを学ぶ方法です。",
      "Trois gestes fondateurs": "三つの創設的な行為",
      "Soutenir, accompagner et relier : trois gestes pour faire passer le talent de l'ombre vers la reconnaissance.": "支える、伴走する、つなぐ。才能を影から認知へと導く三つの行為です。",
      "Soutenir": "支える",
      "Des espaces où le geste artistique devient transmission, confiance et reconnaissance.": "芸術的な行為が、継承、信頼、認知へと変わる場所。",
      "Accompagner": "伴走する",
      "Les jeunes créateurs dans le passage du geste intime vers l'oeuvre partagée.": "若い創作者が、個人的な行為から共有される作品へ進む過程に寄り添う。",
      "Relier": "つなぐ",
      "Artistes, enfants, institutions et mécènes autour d'une même exigence de transmission.": "アーティスト、子ども、機関、メセナを、同じ継承への志で結ぶ。",
      "La main comme premier lieu de confiance.": "手は信頼が最初に宿る場所。",
      "Accompagner le passage du geste à l'oeuvre.": "行為から作品への移行に寄り添う。",
      "Pourquoi la Suisse ?": "なぜスイスなのか？",
      "La Suisse incarne la neutralité, l'excellence et l'ouverture internationale. C'est un ancrage naturel pour une fondation qui souhaite agir à l'échelle mondiale, en dialogue avec les institutions, les mécènes et les acteurs culturels internationaux.": "スイスは中立性、卓越性、国際的な開かれを体現しています。世界規模で活動し、機関、メセナ、国際的な文化関係者と対話する財団にとって自然な拠点です。",
      "Notre raison d'être": "私たちの存在理由",
      "Pas une école d'art. Pas un programme éducatif. Un mouvement. Une révolution silencieuse. Un engagement culturel.": "美術学校ではありません。教育プログラムでもありません。これは運動であり、静かな革命であり、文化的なコミットメントです。",
      "Pourquoi agir ?": "なぜ行動するのか？",
      "Parce qu'un enfant qui crée ne produit pas seulement une image. Il apprend à regarder, à choisir et à exister dans le monde.": "創作する子どもは、単にイメージを作るのではありません。見ること、選ぶこと、世界の中で存在することを学びます。",
      "l'école développe l'esprit, mais laisse souvent l'imaginaire en marge": "学校は知性を育てますが、想像力を周縁に置きがちです",
      "les écrans capturent l'attention, mais rarement le talent": "画面は注意を奪いますが、才能を見つけることはまれです",
      "le geste artistique redonne une place à la main, au regard et à la confiance": "芸術的な行為は、手、まなざし、信頼に再び場所を与えます",
      "l'art ne devrait jamais être un luxe, mais une voie d'accès à soi et aux autres": "アートは贅沢品ではなく、自分自身と他者へ向かう道であるべきです",
      "Continuer vers l'institut": "インスティテュートへ進む",
      "Institut": "インスティテュート",
      "INSTITUT XXVII": "XXVII インスティテュート",
      "Un laboratoire international de recherche, d'observation et d'expérimentation dédié aux transformations de l'art, de la transmission et des imaginaires.": "アート、継承、想像力の変化に捧げられた国際的な研究・観察・実験のラボ。",
      "L'Institut éclaire les mutations culturelles, mesure l'impact réel de l'art et fait émerger de nouveaux modèles de transmission.": "インスティテュートは文化の変化を照らし、アートの実際の影響を測り、新しい継承モデルを生み出します。",
      "Votre navigateur ne peut pas lire cette vidéo.": "お使いのブラウザではこの動画を再生できません。",
      "Séminaire Institut XXVII — art, transmission et recherche.": "XXVII インスティテュート・セミナー — アート、継承、研究。",
      "Nos missions": "私たちのミッション",
      "Observer, comprendre, anticiper, expérimenter : quatre gestes pour penser l'avenir de l'art.": "観察し、理解し、予見し、実験する。アートの未来を考える四つの行為。",
      "Observer": "観察する",
      "Décrypter les grandes mutations du monde de l'art, de la transmission culturelle et des usages de l'attention, de l'émotion et de l'imaginaire dans nos sociétés à l'ère des technologies et de l'intelligence artificielle.": "テクノロジーと人工知能の時代における、アートの世界、文化的継承、注意、感情、想像力の使われ方の大きな変化を読み解く。",
      "Comprendre": "理解する",
      "Réunir artistes, chercheurs, neuroscientifiques, acteurs culturels et technologiques pour mesurer l'impact réel de l'art sur l'apprentissage, l'inclusion, la créativité et l'interculturalité.": "アーティスト、研究者、神経科学者、文化・技術分野の関係者を集め、学び、包摂、創造性、異文化性に対するアートの実際の影響を測る。",
      "Anticiper": "予見する",
      "Prévoir les mutations sociétales, environnementales et technologiques pour anticiper les défis de demain et accomplir les transitions nécessaires dans les secteurs de l'art, de l'éducation et de la recherche.": "社会、環境、技術の変化を見通し、明日の課題を先取りし、アート、教育、研究の分野で必要な移行を実現する。",
      "Expérimenter": "実験する",
      "Créer un laboratoire vivant où art, sciences, institutions, chercheurs, entreprises et technologies testent de nouveaux modèles de transmission, d'éducation, d'expérience culturelle et de dialogue.": "アート、科学、機関、研究者、企業、テクノロジーが、継承、教育、文化体験、対話の新しいモデルを試す生きたラボをつくる。",
      "Continuer vers l'Academy": "アカデミーへ進む",
      "XXVII ACADEMY": "XXVII ACADEMY",
      "Incubateur d'artistes": "アーティスト・インキュベーター",
      "Un incubateur d'artistes dédié aux enfants et jeunes talents, fondé sur le mentorat intergénérationnel, l'exigence artistique et l'ouverture internationale. Ici, l'art n'est pas un loisir.": "子どもと若い才能のためのアーティスト・インキュベーター。世代間メンタリング、芸術的な厳しさ、国際的な開かれを基盤とします。ここでアートは娯楽ではありません。",
      "Le premier face-à-face avec l'œuvre commence souvent dans le silence du regard.": "作品との最初の対面は、しばしばまなざしの沈黙から始まります。",
      "Notre modèle : mentorat intergénérationnel": "私たちのモデル：世代間メンタリング",
      "Un artiste confirmé accompagne un enfant ou un jeune talent dans la durée. Une enfant révèle un artiste. Transmission inversée, co-inspiration, regards croisés : deux générations qui se rencontrent. La transmission est au cœur du parcours, dans un dialogue où l'expérience rencontre l'élan créatif.": "確立したアーティストが、子どもや若い才能に長期的に伴走します。子どもがアーティストを照らし出す。逆方向の継承、共創的なインスピレーション、交差するまなざし。二つの世代が出会います。経験と創造の衝動が出会う対話の中で、継承は道の中心にあります。",
      "Des expositions réunissant enfants, artistes émergents et professionnels dans un même espace de valorisation.": "子ども、新進アーティスト、プロフェッショナルを同じ評価の場に集める展覧会。",
      "Affiche de l’exposition internationale 2026 — Un dialogue entre les maîtres et la nouvelle génération.": "2026年国際展ポスター — 巨匠たちと新世代の対話。",
      "L'atelier comme lieu d'exigence, de patience et de métamorphose.": "アトリエは、厳しさ、忍耐、変容の場所です。",
      "Sortir de l'atelier pour rencontrer les formes du monde contemporain.": "アトリエを出て、現代世界の形に出会う。",
      "Exemple": "例",
      "Sohan, 6 ans, lauréat de la première édition, peint depuis l'âge de deux ans. Curieux et plein de vie, il transforme tout ce qu'il voit en couleur et en mouvement. Ses toiles racontent ce que ses mots ne savaient pas encore dire. L'art l'a aidé à se concentrer, à apaiser son énergie et à découvrir la beauté du partage.": "Sohan、6歳、第1回の受賞者。2歳から絵を描いています。好奇心にあふれ、生命力に満ち、見たものすべてを色と動きへ変えます。彼のキャンバスは、まだ言葉では言えなかったことを語ります。アートは彼が集中し、エネルギーを落ち着け、分かち合う美しさを発見する助けになりました。",
      "Continuer vers la galerie": "ギャラリーへ進む",
      "Galerie XXVII": "XXVII ギャラリー",
      "GALERIE": "ギャラリー",
      "Chaque image porte une scène de transmission : une main, un regard, un passage vers l’œuvre.": "それぞれのイメージには継承の場面があります。手、まなざし、作品へ向かう通路。",
      "Devant Calder — l’enfant entre dans l’histoire de l’art.": "カルダーの前で — 子どもは美術史へ入っていく。",
      "Face aux maîtres, le regard des enfants ouvre un dialogue nouveau.": "巨匠たちを前に、子どもたちのまなざしが新しい対話を開きます。",
      "Le musée devient un lieu de passage entre générations.": "美術館は世代間の通路になります。",
      "La transmission commence là où l’enfant ose laisser une trace.": "継承は、子どもが痕跡を残す勇気を持つ場所から始まります。",
      "Faire passer le geste de l’intime vers le public.": "親密な行為を公共へと移す。",
      "Avant les mots, il y a la main, la couleur et le regard.": "言葉の前に、手、色、まなざしがあります。",
      "Devant Monet — le regard d’aujourd’hui rencontre les maîtres.": "モネの前で — 今日のまなざしが巨匠たちと出会う。",
      "Face à la sculpture — deux regards apprennent ensemble le silence de l’œuvre.": "彫刻を前に — 二つのまなざしが作品の沈黙を共に学ぶ。",
      "Rendre l’art accessible, sans réduire son exigence.": "アートを身近にしながら、その厳しさを減らさない。",
      "Placer l’œuvre du jeune talent au centre du regard.": "若い才能の作品をまなざしの中心に置く。",
      "Soutenir un enfant créateur, c’est ouvrir un monde possible.": "創作する子どもを支えることは、可能な世界を開くことです。",
      "Créer ensemble, apprendre à regarder ensemble.": "共に創り、共に見ることを学ぶ。",
      "Continuer vers le mécénat": "メセナへ進む",
      "Mécénat & Partenariats": "メセナ & パートナーシップ",
      "Participer à la naissance d’une fondation": "財団の誕生に参加する",
      "Rejoindre la Fondation XXVII dès son lancement, c’est inscrire son nom dans l’acte fondateur. Nous cherchons des mécènes, des partenaires institutionnels et des collaborateurs qui partagent la conviction que l’art est un droit, pas un privilège.": "Fondation XXVII の立ち上げから参加することは、創設の行為に名前を刻むことです。アートは特権ではなく権利であるという信念を共有するメセナ、機関パートナー、協力者を求めています。",
      "Nous écrire": "お問い合わせ",
      "Être mécène fondateur": "創設メセナになる",
      "Votre soutien dès l’origine vous inscrit dans l’histoire de la Fondation. Votre nom figure dans tous les documents institutionnels fondateurs.": "創設時からの支援は、財団の歴史にあなたの名を刻みます。あなたの名前はすべての創設機関文書に記載されます。",
      "Visibilité internationale": "国際的な可視性",
      "Une fondation présente sur cinq continents, avec des relais à Genève, Paris, São Paulo, Shanghai et Tokyo.": "ジュネーブ、パリ、サンパウロ、上海、東京に拠点を持ち、五大陸に存在する財団。",
      "Accès privilégié": "特別なアクセス",
      "Rencontres avec les artistes, invitations aux premières expositions et aux événements de lancement dans chaque territoire.": "アーティストとの出会い、最初の展覧会や各地域でのローンチイベントへの招待。",
      "Un acte de sens": "意味ある行為",
      "Chaque partenariat finance directement l’accès à l’art pour des jeunes créateurs qui n’auraient pas eu cette chance sans vous.": "それぞれのパートナーシップは、あなたなしには機会を得られなかった若い創作者のアートへのアクセスを直接支えます。",
      "Devenir mécène ou partenaire": "メセナまたはパートナーになる",
      "La Fondation XXVII privilégie une prise de contact directe afin de construire des engagements adaptés : soutien financier, mécénat de compétence, partenariat institutionnel ou accompagnement d’un programme artistique.": "Fondation XXVII は、適切な関与を築くために直接の連絡を重視します。資金支援、スキルメセナ、機関パートナーシップ、または芸術プログラムの伴走などです。",
      "Contacter la Fondation": "財団に連絡する",
      "Continuer vers Maison XXVII": "Maison XXVII へ進む",
      "MAISON XXVII": "MAISON XXVII",
      "L'ancrage français de la vision XXVII": "XXVII ビジョンのフランスにおける拠点",
      "Maison XXVII est l'association française dédiée au déploiement territorial de la vision portée par la Fondation XXVII. Elle développe ses propres programmes artistiques, éducatifs et culturels afin de faire de l'art un outil concret de transmission, d'inclusion, d'ouverture interculturelle et de développement des compétences humaines essentielles au monde de demain.": "Maison XXVII は、Fondation XXVII が掲げるビジョンをフランス国内で展開するためのフランスの協会です。アートを、継承、包摂、異文化への開かれ、そして明日の世界に不可欠な人間的能力の発展のための具体的な道具にする独自の芸術・教育・文化プログラムを展開します。",
      "Un laboratoire d'action en France": "フランスにおける行動のラボ",
      "Maison XXVII développe des programmes propres autour de la transmission artistique, de l'accompagnement des jeunes talents, de l'inclusion par l'art, des rencontres intergénérationnelles, des expositions, des ateliers pédagogiques et des compétences humaines révélées par la création.": "Maison XXVII は、芸術的継承、若い才能の伴走、アートによる包摂、世代間の出会い、展覧会、教育ワークショップ、創作によって明らかになる人間的能力を軸に、独自のプログラムを展開します。",
      "Elle agit comme un laboratoire français de la transmission par l'art, en expérimentant de nouveaux formats avec les artistes, les chercheurs, les éducateurs, les acteurs culturels, les entreprises, les mécènes et les institutions.": "それは、アーティスト、研究者、教育者、文化関係者、企業、メセナ、機関と共に新しい形式を実験する、アートによる継承のフランスのラボとして機能します。",
      "CONTACT": "お問い合わせ",
      "Pour toute demande officielle, partenariat, mécénat ou échange institutionnel avec la Fondation XXVII.": "公式なご依頼、パートナーシップ、メセナ、または Fondation XXVII との機関交流については、こちらからお問い合わせください。",
      "Email de la Fondation": "財団メール"
    }
  };

  const localizeUi = {
    fr: { language: "Langue", close: "Fermer le choix de langue", open: "Ouvrir le choix de langue", goToImage: "Aller à l’image " },
    en: { language: "Language", close: "Close language selector", open: "Open language selector", goToImage: "Go to image " },
    zh: { language: "语言", close: "关闭语言选择", open: "打开语言选择", goToImage: "前往图片 " },
    pt: { language: "Idioma", close: "Fechar seleção de idioma", open: "Abrir seleção de idioma", goToImage: "Ir para a imagem " },
    ar: { language: "اللغة", close: "إغلاق اختيار اللغة", open: "فتح اختيار اللغة", goToImage: "الانتقال إلى الصورة " },
    es: { language: "Idioma", close: "Cerrar selector de idioma", open: "Abrir selector de idioma", goToImage: "Ir a la imagen " },
    ja: { language: "言語", close: "言語選択を閉じる", open: "言語選択を開く", goToImage: "画像へ移動 " }
  };

  const normalizeText = (value) => value.replace(/\s+/g, " ").trim();
  const getLanguage = (code) => languages.find((language) => language.code === code) || languages[0];
  const translate = (text, code) => {
    const key = normalizeText(text);
    if (code === "fr") return key;
    return (translations[code] && translations[code][key]) || key;
  };

  const queryLanguage = new URLSearchParams(window.location.search).get("lang");
  let currentLanguage = getLanguage(queryLanguage || localStorage.getItem("xxvii-language") || "fr").code;

  function createLanguageSwitcher() {
    const topbar = document.querySelector(".topbar");
    if (!topbar || document.querySelector(".xxvii-lang-switcher")) return null;

    const switcher = document.createElement("div");
    switcher.className = "xxvii-lang-switcher";

    const button = document.createElement("button");
    button.className = "xxvii-lang-toggle";
    button.type = "button";
    button.setAttribute("aria-haspopup", "true");
    button.setAttribute("aria-expanded", "false");
    button.innerHTML = '<span class="xxvii-lang-icon" aria-hidden="true">◎</span><span class="xxvii-lang-current">FR</span>';

    const menu = document.createElement("div");
    menu.className = "xxvii-lang-menu";
    menu.setAttribute("role", "menu");

    languages.forEach((language) => {
      const option = document.createElement("button");
      option.type = "button";
      option.className = "xxvii-lang-option";
      option.dataset.lang = language.code;
      option.setAttribute("role", "menuitem");
      option.innerHTML = '<span>' + language.short + '</span><strong>' + language.native + '</strong>';
      option.addEventListener("click", () => {
        applyLanguage(language.code);
        closeMenu();
      });
      menu.appendChild(option);
    });

    function openMenu() {
      switcher.classList.add("is-open");
      button.setAttribute("aria-expanded", "true");
      button.setAttribute("aria-label", localizeUi[currentLanguage].close);
    }

    function closeMenu() {
      switcher.classList.remove("is-open");
      button.setAttribute("aria-expanded", "false");
      button.setAttribute("aria-label", localizeUi[currentLanguage].open);
    }

    button.addEventListener("click", () => {
      switcher.classList.contains("is-open") ? closeMenu() : openMenu();
    });

    document.addEventListener("click", (event) => {
      if (!switcher.contains(event.target)) closeMenu();
    });

    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape") closeMenu();
    });

    switcher.append(button, menu);
    topbar.appendChild(switcher);
    return { switcher, button, menu };
  }

  const languageSwitcher = createLanguageSwitcher();
  const originalTitle = document.title;
  const textNodes = [];
  const attributeNodes = [];

  function collectTranslatableNodes() {
    const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, {
      acceptNode(node) {
        if (!normalizeText(node.nodeValue)) return NodeFilter.FILTER_REJECT;
        const parent = node.parentElement;
        if (!parent || parent.closest("script, style, noscript, .xxvii-lang-switcher")) {
          return NodeFilter.FILTER_REJECT;
        }
        return NodeFilter.FILTER_ACCEPT;
      }
    });

    while (walker.nextNode()) {
      const node = walker.currentNode;
      textNodes.push({
        node,
        original: normalizeText(node.nodeValue),
        leading: node.nodeValue.match(/^\s*/)[0],
        trailing: node.nodeValue.match(/\s*$/)[0]
      });
    }

    document.querySelectorAll("[aria-label], [alt], [title]").forEach((element) => {
      if (element.closest(".xxvii-lang-switcher")) return;
      ["aria-label", "alt", "title"].forEach((attribute) => {
        const value = element.getAttribute(attribute);
        if (value && normalizeText(value)) {
          attributeNodes.push({ element, attribute, original: normalizeText(value) });
        }
      });
    });
  }

  function updateLanguageSwitcher(language) {
    if (!languageSwitcher) return;
    const ui = localizeUi[language.code];
    const current = languageSwitcher.switcher.querySelector(".xxvii-lang-current");
    current.textContent = language.short;
    languageSwitcher.button.setAttribute("aria-label", ui.open);
    languageSwitcher.menu.setAttribute("aria-label", ui.language);
    languageSwitcher.menu.querySelectorAll(".xxvii-lang-option").forEach((option) => {
      const active = option.dataset.lang === language.code;
      option.classList.toggle("is-active", active);
      option.setAttribute("aria-current", active ? "true" : "false");
    });
  }

  function updateSliderLabels() {
    document.querySelectorAll("[data-slider] .dots").forEach((dots) => {
      dots.querySelectorAll("button").forEach((dot, index) => {
        dot.setAttribute("aria-label", localizeUi[currentLanguage].goToImage + (index + 1));
      });
    });
  }

  function applyLanguage(code) {
    const language = getLanguage(code);
    currentLanguage = language.code;
    localStorage.setItem("xxvii-language", language.code);
    document.documentElement.lang = language.code === "zh" ? "zh-CN" : language.code;
    document.documentElement.dir = "ltr";
    document.body.classList.toggle("xxvii-rtl", language.dir === "rtl");
    document.title = translate(originalTitle, language.code);

    textNodes.forEach((entry) => {
      entry.node.nodeValue = entry.leading + translate(entry.original, language.code) + entry.trailing;
    });

    attributeNodes.forEach((entry) => {
      entry.element.setAttribute(entry.attribute, translate(entry.original, language.code));
    });

    updateLanguageSwitcher(language);
    updateSliderLabels();
  }

  collectTranslatableNodes();
  applyLanguage(currentLanguage);

  document.querySelectorAll("[data-slider]").forEach((slider) => {
    const slides = Array.from(slider.querySelectorAll(".slide"));
    const prev = slider.querySelector(".slider-btn.prev");
    const next = slider.querySelector(".slider-btn.next");
    const dots = slider.querySelector(".dots");

    if (!slides.length) return;

    let index = slides.findIndex((slide) => slide.classList.contains("active"));
    if (index < 0) index = 0;

    let timer = null;
    const delay = 4200;

    function render() {
      slides.forEach((slide, i) => {
        slide.classList.toggle("active", i === index);
      });

      if (dots) {
        dots.innerHTML = "";
        slides.forEach((_, i) => {
          const dot = document.createElement("button");
          dot.type = "button";
          dot.setAttribute("aria-label", localizeUi[currentLanguage].goToImage + (i + 1));
          dot.classList.toggle("active", i === index);
          dot.addEventListener("click", () => {
            index = i;
            render();
            restart();
          });
          dots.appendChild(dot);
        });
      }
    }

    function goNext() {
      index = (index + 1) % slides.length;
      render();
    }

    function restart() {
      if (timer) clearInterval(timer);
      timer = setInterval(goNext, delay);
    }

    if (prev) {
      prev.addEventListener("click", () => {
        index = (index - 1 + slides.length) % slides.length;
        render();
        restart();
      });
    }

    if (next) {
      next.addEventListener("click", () => {
        goNext();
        restart();
      });
    }

    slider.addEventListener("mouseenter", () => {
      if (timer) clearInterval(timer);
    });

    slider.addEventListener("mouseleave", restart);

    slider.addEventListener("touchstart", () => {
      if (timer) clearInterval(timer);
    }, { passive: true });

    slider.addEventListener("touchend", restart, { passive: true });

    render();
    restart();
  });
});
