// Profil fictif créé comme démonstration interne Portfolio For U.
// Personnes, établissements et chiffres sont inventés.

export const profile = {
  name: 'Margaux Vidal',
  firstName: 'Margaux',
  role: 'Cheffe de cuisine',
  city: 'Lyon',
  tagline: 'Cuisine de saison, gestes précis, produits qui ont une adresse.',
  intro:
    "Douze ans en cuisine, de commis à cheffe. Je construis des cartes courtes qui changent avec le marché, je travaille en direct avec une vingtaine de producteurs autour de Lyon, et je tiens à ce qu'une brigade sorte du service fatiguée, jamais épuisée.",
  status: 'Ouverte à un poste de cheffe ou à une ouverture de maison — printemps 2027',
  email: 'margaux.vidal@example.com',
  phone: '06 00 00 00 00',
  linkedin: 'https://www.linkedin.com/',
  instagram: 'https://www.instagram.com/',
}

export const keyFigures = [
  { value: '12', label: 'années en cuisine' },
  { value: '9', label: 'personnes en brigade encadrées' },
  { value: '22', label: 'producteurs en circuit court' },
]

export const philosophy = [
  {
    title: 'Le marché décide',
    text: 'La carte se réécrit chaque semaine à partir de ce qui arrive le mardi matin. Six entrées, six plats, quatre desserts — pas un de plus.',
  },
  {
    title: 'Rien ne part à la poubelle',
    text: 'Fanes, arêtes, parures : tout a une deuxième vie en bouillon, pickles ou beurre composé. La perte matière est suivie chaque semaine.',
  },
  {
    title: 'Une brigade qui tient',
    text: 'Plannings annoncés trois semaines à l’avance, deux jours de repos consécutifs, une réunion de dix minutes avant chaque service.',
  },
]

export type Experience = {
  period: string
  title: string
  place: string
  city: string
  summary: string
  highlights: string[]
}

export const experiences: Experience[] = [
  {
    period: '2022 — aujourd’hui',
    title: 'Cheffe de cuisine',
    place: 'Maison Lierre',
    city: 'Lyon 2e',
    summary:
      'Bistronomie de 48 couverts, carte hebdomadaire. Recrutement et encadrement d’une brigade de 9 personnes, gestion complète des achats et du coût matière.',
    highlights: [
      'Coût matière ramené de 34 % à 28 % en un an sans baisser les grammages',
      'Réseau de 22 producteurs locaux, dont 14 à moins de 60 km',
      'Turnover de la brigade divisé par deux après la réorganisation des plannings',
    ],
  },
  {
    period: '2019 — 2022',
    title: 'Sous-cheffe',
    place: 'Auberge du Val-Clair',
    city: 'Annecy',
    summary:
      'Restaurant gastronomique de 32 couverts. Seconde du chef sur la création des menus dégustation, responsable du poste chaud et des commandes.',
    highlights: [
      'Co-création de 3 menus dégustation saisonniers',
      'Mise en place d’un plan HACCP entièrement numérique',
      'Formation de 6 apprentis, tous diplômés',
    ],
  },
  {
    period: '2016 — 2019',
    title: 'Cheffe de partie — poissons',
    place: 'Brasserie Atelier Sept',
    city: 'Lyon 7e',
    summary:
      'Brasserie de 120 couverts à deux services. Responsable du poste poissonnerie, de la découpe à l’envoi.',
    highlights: [
      'Jusqu’à 180 assiettes de poisson par service le week-end',
      'Refonte des fiches techniques du poste',
    ],
  },
  {
    period: '2014 — 2016',
    title: 'Commis puis demi-cheffe de partie',
    place: 'Le Petit Quai',
    city: 'Vienne',
    summary: 'Premières années en brigade : garde-manger, entremets, puis poste chaud.',
    highlights: ['Passage de commis à demi-cheffe de partie en 14 mois'],
  },
]

export const education = [
  { period: '2014', title: 'BP Arts de la cuisine', place: 'Lycée hôtelier — Lyon' },
  { period: '2012', title: 'CAP Cuisine', place: 'CFA des métiers de bouche — Vienne' },
]

export type SkillGroup = {
  title: string
  intro: string
  items: { name: string; detail: string }[]
}

export const skillGroups: SkillGroup[] = [
  {
    title: 'En cuisine',
    intro: 'Les gestes du quotidien, travaillés jusqu’à devenir des réflexes.',
    items: [
      { name: 'Poissonnerie', detail: 'Découpe, maturation, cuissons basse température' },
      { name: 'Sauces & fonds', detail: 'Fonds bruns et blancs, émulsions, beurres montés' },
      { name: 'Fermentation', detail: 'Lacto-fermentation, pickles, garums maison' },
      { name: 'Pâtisserie de restaurant', detail: 'Desserts à l’assiette, glaces, pâtes de base' },
    ],
  },
  {
    title: 'Gestion',
    intro: 'Une cuisine qui tourne bien, c’est aussi des chiffres qui tiennent.',
    items: [
      { name: 'Coût matière', detail: 'Fiches techniques chiffrées, suivi hebdomadaire des pertes' },
      { name: 'Achats', detail: 'Négociation producteurs, commandes, gestion des stocks' },
      { name: 'Hygiène', detail: 'Plan de maîtrise sanitaire, HACCP, traçabilité' },
      { name: 'Plannings', detail: 'Organisation de brigade, respect des temps de repos' },
    ],
  },
  {
    title: 'Humain',
    intro: 'Transmettre, recruter, faire grandir une équipe.',
    items: [
      { name: 'Encadrement', detail: 'Brigade jusqu’à 9 personnes' },
      { name: 'Formation', detail: 'Tutrice d’apprentis CAP et BP' },
      { name: 'Recrutement', detail: 'Entretiens, périodes d’essai, intégration' },
      { name: 'Relation salle', detail: 'Briefs communs cuisine / salle avant chaque service' },
    ],
  },
]

export type PlateStyle = {
  base: string
  accent: string
  elements: 'swirl' | 'dots' | 'crescent' | 'stack' | 'leaf' | 'ring'
}

export type Creation = {
  slug: string
  title: string
  season: string
  category: 'Entrée' | 'Plat' | 'Dessert' | 'Menu'
  place: string
  year: string
  short: string
  context: string
  intention: string
  components: { name: string; detail: string }[]
  steps: { title: string; text: string }[]
  techSheet: { label: string; value: string }[]
  producers?: { name: string; product: string; distance: string }[]
  learnings: string[]
  plate: PlateStyle
}

export const creations: Creation[] = [
  {
    slug: 'truite-betterave',
    title: 'Truite fumée au foin, betteraves en trois textures',
    season: 'Automne',
    category: 'Entrée',
    place: 'Maison Lierre',
    year: '2025',
    short: 'Une truite des Monts du Lyonnais fumée minute, betterave crue, rôtie et fermentée.',
    context:
      'La pisciculture avec qui je travaille livrait des truites plus grosses que prévu : il fallait une entrée qui valorise des filets épais sans gaspiller les parures.',
    intention:
      'Jouer sur la fumée et l’acidité : le foin apporte une note douce et herbacée, la betterave fermentée coupe le gras du poisson.',
    components: [
      { name: 'Truite', detail: 'Filet mi-cuit à 42 °C, fumé au foin sous cloche devant le client' },
      { name: 'Betterave crue', detail: 'Tranchée à la mandoline, marinée au vinaigre de cidre' },
      { name: 'Betterave rôtie', detail: 'Rôtie en croûte de sel, taillée en quartiers' },
      { name: 'Betterave fermentée', detail: 'Lacto-fermentée 10 jours, réduite en gel' },
      { name: 'Crème de raifort', detail: 'Crème crue montée, raifort frais râpé' },
    ],
    steps: [
      { title: 'J-10', text: 'Mise en fermentation des betteraves (saumure à 2 %).' },
      { title: 'J-1', text: 'Salage des filets 20 minutes, séchage à découvert en chambre froide.' },
      { title: 'Mise en place', text: 'Cuisson des betteraves en croûte, gel, crème de raifort.' },
      { title: 'Envoi', text: 'Cuisson de la truite à la commande, fumage sous cloche en salle.' },
    ],
    techSheet: [
      { label: 'Coût matière / assiette', value: '4,10 €' },
      { label: 'Prix carte', value: '16 €' },
      { label: 'Ratio', value: '25,6 %' },
      { label: 'Temps d’envoi', value: '6 min' },
    ],
    producers: [
      { name: 'Pisciculture des Crêts', product: 'Truite', distance: '38 km' },
      { name: 'Ferme du Grand Pré', product: 'Betteraves, raifort', distance: '22 km' },
    ],
    learnings: [
      'Le fumage en salle a fait de ce plat le plus commandé de la carte d’automne.',
      'Les parures de truite servent désormais aux rillettes du menu déjeuner.',
    ],
    plate: { base: '#b64d5a', accent: '#c3d86e', elements: 'crescent' },
  },
  {
    slug: 'volaille-champignons',
    title: 'Volaille de Bresse, champignons des bois et jus corsé',
    season: 'Automne',
    category: 'Plat',
    place: 'Maison Lierre',
    year: '2025',
    short: 'Suprême rôti sur coffre, cuisse confite, champignons sauvages et jus réduit.',
    context:
      'Un plat signature demandé par la direction pour la carte d’automne, à un prix accessible malgré un produit noble.',
    intention:
      'Utiliser la volaille entière : suprême rôti, cuisse confite en cromesquis, carcasse pour le jus. Le prix tient parce que rien n’est perdu.',
    components: [
      { name: 'Suprême', detail: 'Rôti sur coffre, arrosé au beurre noisette' },
      { name: 'Cuisse', detail: 'Confite 6 h, effilochée, panée en cromesquis' },
      { name: 'Champignons', detail: 'Cèpes et girolles poêlés, persillade à l’ail noir' },
      { name: 'Jus', detail: 'Carcasses rôties, réduction lente, monté au beurre' },
    ],
    steps: [
      { title: 'Réception', text: 'Découpe des volailles, carcasses rôties le jour même.' },
      { title: 'Jus', text: 'Six heures de cuisson, passé, réduit de moitié.' },
      { title: 'Cuisses', text: 'Confites, effilochées, façonnées et panées la veille.' },
      { title: 'Envoi', text: 'Suprême rôti à la commande, repos 4 minutes avant tranchage.' },
    ],
    techSheet: [
      { label: 'Coût matière / assiette', value: '8,90 €' },
      { label: 'Prix carte', value: '29 €' },
      { label: 'Ratio', value: '30,7 %' },
      { label: 'Temps d’envoi', value: '11 min' },
    ],
    learnings: [
      'Un seul poulet donne deux assiettes et le jus de dix : l’équation n’a tenu qu’avec la bête entière.',
      'Les cromesquis ont été repris seuls au bar, à l’apéritif.',
    ],
    plate: { base: '#8a5a33', accent: '#d68a5c', elements: 'stack' },
  },
  {
    slug: 'menu-printemps',
    title: 'Menu « Premier marché » — six temps',
    season: 'Printemps',
    category: 'Menu',
    place: 'Auberge du Val-Clair',
    year: '2021',
    short: 'Un menu dégustation construit en deux semaines autour des premiers légumes de l’année.',
    context:
      'Co-création avec le chef de l’Auberge pour la réouverture de printemps. Contrainte : aucun produit importé, tout devait venir de Savoie ou de Haute-Savoie.',
    intention:
      'Raconter le passage de l’hiver au printemps : on commence sur des racines et des conserves, on finit sur des herbes fraîches et des fruits crus.',
    components: [
      { name: 'Temps 1', detail: 'Bouillon de légumes racines, huile de livèche' },
      { name: 'Temps 2', detail: 'Asperges vertes, sabayon au vin de Savoie' },
      { name: 'Temps 3', detail: 'Féra du lac, beurre blanc à l’oseille' },
      { name: 'Temps 4', detail: 'Agneau de lait, petits pois, jus aux herbes' },
      { name: 'Temps 5', detail: 'Tomme de Savoie affinée, miel de pissenlit' },
      { name: 'Temps 6', detail: 'Rhubarbe crue et pochée, glace au foin' },
    ],
    steps: [
      { title: 'Semaine 1', text: 'Tournée des producteurs, liste des produits disponibles.' },
      { title: 'Semaine 2', text: 'Trois séances d’essais, dégustation avec la salle.' },
      { title: 'Ouverture', text: 'Menu servi 11 semaines, ajusté chaque vendredi.' },
    ],
    techSheet: [
      { label: 'Coût matière / couvert', value: '21 €' },
      { label: 'Prix du menu', value: '78 €' },
      { label: 'Ratio', value: '26,9 %' },
      { label: 'Durée du repas', value: '2 h 15' },
    ],
    producers: [
      { name: 'Pêcheur du lac', product: 'Féra', distance: '6 km' },
      { name: 'Bergerie des Aravis', product: 'Agneau de lait', distance: '31 km' },
      { name: 'Jardin de la Côte', product: 'Asperges, oseille, rhubarbe', distance: '14 km' },
    ],
    learnings: [
      'La contrainte « 100 % local » a fait naître les meilleures idées du menu.',
      'Faire goûter la salle en amont a évité plusieurs allers-retours en service.',
    ],
    plate: { base: '#4f7a4a', accent: '#dfeaa9', elements: 'leaf' },
  },
  {
    slug: 'maquereau-agrumes',
    title: 'Maquereau mariné, agrumes et condiment de fanes',
    season: 'Hiver',
    category: 'Entrée',
    place: 'Maison Lierre',
    year: '2024',
    short: 'Un poisson modeste, une marinade courte et un condiment fait avec ce qu’on jetait.',
    context:
      'Hiver, peu de légumes frais, des fanes de carottes en quantité. Il fallait une entrée à moins de 3 € de matière.',
    intention: 'Prouver qu’un poisson bon marché peut porter une assiette de restaurant.',
    components: [
      { name: 'Maquereau', detail: 'Mariné 15 minutes au citron et sel fumé, flambé au chalumeau' },
      { name: 'Agrumes', detail: 'Suprêmes de pamplemousse et d’orange sanguine' },
      { name: 'Condiment de fanes', detail: 'Fanes de carottes, câpres, huile d’olive' },
    ],
    steps: [
      { title: 'Matin', text: 'Levée des filets, désarêtage, marinade à la commande.' },
      { title: 'Mise en place', text: 'Suprêmes d’agrumes, condiment de fanes.' },
      { title: 'Envoi', text: 'Flambage de la peau au dernier moment.' },
    ],
    techSheet: [
      { label: 'Coût matière / assiette', value: '2,70 €' },
      { label: 'Prix carte', value: '13 €' },
      { label: 'Ratio', value: '20,8 %' },
      { label: 'Temps d’envoi', value: '4 min' },
    ],
    learnings: ['Plat le plus rentable de la carte d’hiver, repris à chaque saison froide depuis.'],
    plate: { base: '#3d6a8a', accent: '#e8a14f', elements: 'dots' },
  },
  {
    slug: 'poire-sarrasin',
    title: 'Poire rôtie, sarrasin torréfié et caramel au miso',
    season: 'Hiver',
    category: 'Dessert',
    place: 'Maison Lierre',
    year: '2024',
    short: 'Un dessert d’hiver peu sucré, croustillant, avec une note salée qui surprend.',
    context: 'La maison n’a pas de pâtissier : le dessert devait se dresser en moins de trois minutes par le poste froid.',
    intention: 'Un dessert qui tient sur trois éléments préparés à l’avance, et un seul geste chaud.',
    components: [
      { name: 'Poire', detail: 'Rôtie au beurre et vanille, servie tiède' },
      { name: 'Sarrasin', detail: 'Graines torréfiées, crumble au beurre demi-sel' },
      { name: 'Caramel', detail: 'Caramel au miso blanc, légèrement salé' },
      { name: 'Glace', detail: 'Glace au lait ribot' },
    ],
    steps: [
      { title: 'Veille', text: 'Turbinage de la glace, crumble, caramel.' },
      { title: 'Service', text: 'Poires rôties par six, maintenues tièdes.' },
      { title: 'Envoi', text: 'Dressage en 2 min 30 par le poste froid.' },
    ],
    techSheet: [
      { label: 'Coût matière / assiette', value: '2,20 €' },
      { label: 'Prix carte', value: '11 €' },
      { label: 'Ratio', value: '20 %' },
      { label: 'Temps d’envoi', value: '2 min 30' },
    ],
    learnings: ['Le caramel au miso a fait parler de lui : il est désormais vendu en pot à emporter.'],
    plate: { base: '#c28b3e', accent: '#f2e3c2', elements: 'swirl' },
  },
  {
    slug: 'menu-anti-gaspi',
    title: 'Menu déjeuner « Zéro chute »',
    season: 'Toute l’année',
    category: 'Menu',
    place: 'Maison Lierre',
    year: '2023',
    short: 'Un menu déjeuner à 22 € construit uniquement à partir des parures et surplus du soir.',
    context:
      'Le suivi des pertes montrait près de 9 % de matière jetée chaque semaine. Objectif : passer sous les 3 % sans changer la carte du soir.',
    intention: 'Faire du reste un menu à part entière, avec sa propre identité, pas un plat du jour de rattrapage.',
    components: [
      { name: 'Entrée', detail: 'Rillettes de parures de poisson, pickles de tiges' },
      { name: 'Plat', detail: 'Effiloché de la veille, légumes glacés, jus réduit' },
      { name: 'Dessert', detail: 'Pain perdu au pain de la veille, fruits de fin de semaine' },
    ],
    steps: [
      { title: 'Chaque soir', text: 'Pesée et inventaire des parures après le service.' },
      { title: 'Chaque matin', text: 'Écriture du menu du jour à partir de l’inventaire.' },
      { title: 'Chaque semaine', text: 'Bilan des pertes et ajustement des commandes.' },
    ],
    techSheet: [
      { label: 'Pertes avant', value: '9 %' },
      { label: 'Pertes après 6 mois', value: '2,6 %' },
      { label: 'Prix du menu', value: '22 €' },
      { label: 'Couverts / midi', value: '35 en moyenne' },
    ],
    learnings: [
      'Le midi est passé de 20 à 35 couverts en moyenne.',
      'La brigade s’est approprié le menu : chaque poste propose une idée par semaine.',
    ],
    plate: { base: '#6b6f3a', accent: '#c3d86e', elements: 'ring' },
  },
]
