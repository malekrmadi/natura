import vaseline from "@/assets/vaseline.png";
import kebrit from "@/assets/kebrit.png";
import derma from "@/assets/derma.png";
import brosse from "@/assets/brosse.png";
import applicateur from "@/assets/applicateur.png";
import kebritVaseline from "@/assets/kebrit + vaseline.png";

export type Category = "soin" | "outil" | "accessoire";

export interface Product {
  id: string;
  slug: string;
  name: { fr: string; ar: string };
  category: Category;
  price: number;
  oldPrice?: number;
  image: string;
  gallery: string[];
  tag?: { fr: string; ar: string };
  featured?: boolean;
  bestseller?: boolean;
  short: { fr: string; ar: string };
  benefits: { fr: string[]; ar: string[] };
  ingredients: { fr: string; ar: string };
  usage: { fr: string; ar: string };
  unit: { fr: string; ar: string };
  isPack?: boolean;
  sibling?: string; // slug of the other variant
}

export const products: Product[] = [
  // ── PRODUIT 1 : VASELINE À L'HUILE DE NIGELLE ────────────────────────────
  {
    id: "1",
    slug: "vaseline-nigelle",
    name: {
      fr: "Vaseline Naturelle à l'Huile de Nigelle – Herbia",
      ar: "فازلين طبيعي بزيت الحبة السوداء – Herbia",
    },
    category: "soin",
    price: 29.9,
    oldPrice: 34.9,
    image: vaseline,
    gallery: [vaseline],
    tag: { fr: "Naturel", ar: "طبيعي" },
    featured: true,
    bestseller: true,
    short: {
      fr: "Le soin réparateur intense pour les peaux très sèches. Idéal pour adoucir les pieds, soigner les talons fendillés et nourrir les zones rugueuses.",
      ar: "العناية المكثفة لإصلاح البشرة شديدة الجفاف. مثالي لتنعيم الأقدام، علاج تشققات الكعبين وتغذية المناطق الخشنة.",
    },
    benefits: {
      fr: ["Répare les peaux très sèches", "Adoucit les pieds et talons", "Nourrit les zones rugueuses", "Formule à base de nigelle"],
      ar: ["يُصلح البشرة شديدة الجفاف", "ينعّم القدمين والكعبين", "يُغذّي المناطق الخشنة", "تركيبة بزيت الحبة السوداء"],
    },
    ingredients: {
      fr: "Vaseline purifiée, huile de nigelle (Nigella sativa), extraits naturels apaisants.",
      ar: "فازلين نقي، زيت الحبة السوداء (Nigella sativa)، مستخلصات طبيعية مهدئة.",
    },
    usage: {
      fr: "Appliquer en couche généreuse sur les zones sèches avant le coucher. Masser jusqu'à absorption.",
      ar: "ضعي طبقة سخية على المناطق الجافة قبل النوم. ادلكي حتى التشرب.",
    },
    unit: { fr: "1 pot", ar: "عبوة واحدة" },
    isPack: false,
    sibling: "vaseline-nigelle-pack",
  },
  {
    id: "2",
    slug: "vaseline-nigelle-pack",
    name: {
      fr: "Pack Duo Vaseline Réparatrice – Herbia",
      ar: "العرض الثنائي: فازلين الحبة السوداء – Herbia",
    },
    category: "soin",
    price: 49.9,
    oldPrice: 59.8,
    image: vaseline,
    gallery: [vaseline],
    tag: { fr: "Pack Duo", ar: "عرض ثنائي" },
    featured: false,
    bestseller: false,
    short: {
      fr: "Profitez de notre offre spéciale avec ce lot de 2 pots de vaseline à la nigelle pour une hydratation continue de toute la famille.",
      ar: "استفيدوا من عرضنا الخاص مع طقم متكون من عبوتين من فازلين الحبة السوداء لترطيب مستمر لجميع أفراد العائلة.",
    },
    benefits: {
      fr: ["2 pots au prix avantageux", "Hydratation pour toute la famille", "Économie sur l'achat groupé", "Formule réparatrice intense"],
      ar: ["عبوتان بسعر مميز", "ترطيب لجميع أفراد العائلة", "اقتصاد على الشراء الجماعي", "تركيبة مرممة مكثفة"],
    },
    ingredients: {
      fr: "Vaseline purifiée, huile de nigelle (Nigella sativa), extraits naturels apaisants.",
      ar: "فازلين نقي، زيت الحبة السوداء، مستخلصات طبيعية مهدئة.",
    },
    usage: {
      fr: "Appliquer sur les zones sèches. Idéal pour toute la famille.",
      ar: "ضعي على المناطق الجافة. مثالي لجميع أفراد العائلة.",
    },
    unit: { fr: "2 pots", ar: "عبوتان" },
    isPack: true,
    sibling: "vaseline-nigelle",
  },

  // ── PRODUIT 2 : CRÈME DE SOUFRE ──────────────────────────────────────────
  {
    id: "3",
    slug: "creme-soufre",
    name: {
      fr: "Crème de Soufre Authentique – Herbia",
      ar: "دهان الكبريت المغربي الأصيل – Herbia",
    },
    category: "soin",
    price: 34.9,
    oldPrice: 39.9,
    image: kebrit,
    gallery: [kebrit],
    tag: { fr: "Traitement", ar: "علاجي" },
    featured: true,
    bestseller: true,
    short: {
      fr: "Un traitement ciblé et efficace pour éliminer les mycoses des ongles, apaiser l'eczéma et calmer les irritations cutanées.",
      ar: "علاج مستهدف وفعال للقضاء على فطريات الأظافر، تهدئة الأكزيما والتخفيف من حساسية وتيج الجلد.",
    },
    benefits: {
      fr: ["Élimine les mycoses des ongles", "Apaise l'eczéma", "Calme les irritations cutanées", "Formule au soufre naturel"],
      ar: ["يقضي على فطريات الأظافر", "يهدئ الأكزيما", "يخفف من تهيج الجلد", "تركيبة بالكبريت الطبيعي"],
    },
    ingredients: {
      fr: "Soufre sublimé, base crème hydratante, huiles essentielles purifiantes.",
      ar: "كبريت مصعّد، قاعدة كريم مرطبة، زيوت عطرية منقية.",
    },
    usage: {
      fr: "Appliquer sur la zone concernée 1 à 2 fois par jour. Laisser agir et ne pas rincer.",
      ar: "ضعي على المنطقة المعنية 1 إلى 2 مرة يوميا. اتركي تفعل مفعولها دون شطف.",
    },
    unit: { fr: "1 pot", ar: "عبوة واحدة" },
    isPack: false,
    sibling: "creme-soufre-pack",
  },
  {
    id: "4",
    slug: "creme-soufre-pack",
    name: {
      fr: "Pack Solution \"Pieds Sains & Réparés\" – Herbia",
      ar: "باقة \"الأقدام السليمة والنقية\" – Herbia",
    },
    category: "soin",
    price: 54.9,
    oldPrice: 64.8,
    image: kebrit,
    gallery: [kebrit, vaseline],
    tag: { fr: "Pack Solution", ar: "باقة حل" },
    featured: false,
    bestseller: false,
    short: {
      fr: "Le combo ultime : La Crème de Soufre pour traiter les mycoses + La Vaseline à la Nigelle pour hydrater et réparer les talons.",
      ar: "الثنائي المثالي: دهان الكبريت لعلاج الفطريات + فازلين الحبة السوداء لترطيب مكثف وإصلاح تشققات الكعبين.",
    },
    benefits: {
      fr: ["Traitement antifongique complet", "Réparation et hydratation des talons", "2 produits complémentaires", "Solution globale pieds"],
      ar: ["علاج مضاد للفطريات شامل", "إصلاح وترطيب الكعبين", "منتجان متكاملان", "حل شامل للقدمين"],
    },
    ingredients: {
      fr: "Crème de soufre + Vaseline à la nigelle. Voir fiches individuelles.",
      ar: "دهان الكبريت + فازلين الحبة السوداء. انظر البطاقات الفردية.",
    },
    usage: {
      fr: "Appliquer d'abord la crème de soufre sur les zones touchées, puis la vaseline pour hydrater.",
      ar: "ضعي أولا دهان الكبريت على المناطق المصابة، ثم الفازلين للترطيب.",
    },
    unit: { fr: "Pack 2 produits", ar: "طقم منتجين" },
    isPack: true,
    sibling: "creme-soufre",
  },

  // ── PRODUIT 2B : PACK KEBRIT + VASELINE (produit dédié avec sa propre image) ──
  {
    id: "4b",
    slug: "pack-kebrit-vaseline",
    name: {
      fr: "Pack Spécial Kebrit + Vaseline Nigelle – Herbia",
      ar: "طقم الكبريت + فازلين الحبة السوداء – Herbia",
    },
    category: "soin",
    price: 49.9,
    oldPrice: 64.8,
    image: kebritVaseline,
    gallery: [kebritVaseline, kebrit, vaseline],
    tag: { fr: "⭐ Offre Spéciale", ar: "⭐ عرض خاص" },
    featured: true,
    bestseller: true,
    short: {
      fr: "Notre duo best-seller : la Crème de Soufre Kebrit pour traiter les mycoses et irritations + la Vaseline Nigelle pour réparer et hydrater en profondeur.",
      ar: "ثنائينا الأكثر مبيعاً: دهان الكبريت لعلاج الفطريات والتهيج + فازلين الحبة السوداء للإصلاح والترطيب العميق.",
    },
    benefits: {
      fr: ["Traitement antifongique (Kebrit)", "Hydratation & réparation profonde (Vaseline)", "Combo idéal pieds, talons, ongles", "Économisez 14,900 DT vs achat séparé"],
      ar: ["علاج الفطريات (الكبريت)", "ترطيب وإصلاح عميق (الفازلين)", "ثنائي مثالي للقدمين والكعبين والأظافر", "وفر 14,900 د.ت مقارنة بالشراء المنفصل"],
    },
    ingredients: {
      fr: "Crème de soufre (Nigella sativa, soufre sublimé) + Vaseline purifiée à l'huile de nigelle.",
      ar: "دهان الكبريت (حبة سوداء، كبريت مصعّد) + فازلين نقي بزيت الحبة السوداء.",
    },
    usage: {
      fr: "Matin : Appliquer la crème de soufre sur les zones infectées. Soir : Appliquer la vaseline en massage nourrissant.",
      ar: "صباحاً: ضعي دهان الكبريت على المناطق المصابة. مساءً: ضعي الفازلين بتدليك مغذٍّ.",
    },
    unit: { fr: "Pack 2 produits", ar: "طقم منتجين" },
    isPack: false, // traité comme produit autonome dans le catalogue
    sibling: undefined,
  },

  // ── PRODUIT 3 : DERMA ROLLER ──────────────────────────────────────────────
  {
    id: "5",
    slug: "derma-roller",
    name: {
      fr: "Derma Roller Pro (540 Aiguilles) – Herbia",
      ar: "جهاز ديرما رولر التيتانيوم – Herbia",
    },
    category: "outil",
    price: 39.9,
    oldPrice: 49.9,
    image: derma,
    gallery: [derma],
    tag: { fr: "Pro", ar: "احترافي" },
    featured: true,
    bestseller: true,
    short: {
      fr: "Stimulez le collagène naturel de votre peau. Idéal pour réduire les cicatrices d'acné, lisser le teint et stimuler la pousse des cheveux ou de la barbe.",
      ar: "حافزي الكولاجين الطبيعي لبشرتك. مثالي لتقليل آثار حب الشباب، تنعيم البشرة وتحفيز نمو شعر الرأس أو اللحية.",
    },
    benefits: {
      fr: ["Stimule la production de collagène", "Réduit les cicatrices d'acné", "Lisse et unifie le teint", "Stimule la pousse cheveux & barbe"],
      ar: ["يحفز إنتاج الكولاجين", "يقلل آثار حب الشباب", "ينعم ويوحد البشرة", "يحفز نمو الشعر واللحية"],
    },
    ingredients: {
      fr: "540 micro-aiguilles en titane. Rouleau ergonomique.",
      ar: "540 إبرة دقيقة من التيتانيوم. مقبض مريح.",
    },
    usage: {
      fr: "Rouler délicatement sur peau propre et sèche. Appliquer votre sérum immédiatement après.",
      ar: "دحرجي بلطف على بشرة نظيفة وجافة. ضعي السيروم مباشرة بعد الاستخدام.",
    },
    unit: { fr: "1 rouleau", ar: "جهاز واحد" },
    isPack: false,
    sibling: "derma-roller-pack",
  },
  {
    id: "6",
    slug: "derma-roller-pack",
    name: {
      fr: "Pack Booster Capillaire & Barbe – Herbia",
      ar: "باقة تحفيز نمو الشعر واللحية – Herbia",
    },
    category: "outil",
    price: 54.9,
    oldPrice: 69.9,
    image: derma,
    gallery: [derma],
    tag: { fr: "Pack Booster", ar: "باقة محفزة" },
    featured: false,
    bestseller: false,
    short: {
      fr: "Le Derma Roller 540 aiguilles conçu pour ouvrir les pores et maximiser à 100% l'absorption de vos huiles de pousse et sérums.",
      ar: "جهاز الديرما رولر المصمم لفتح مسام الفروة ومضاعفة امتصاص زيوت وسيرومات إنبات الشعر بنسبة 100%.",
    },
    benefits: {
      fr: ["Absorption maximisée des sérums", "Résultats x2 avec vos huiles", "Idéal croissance cheveux & barbe", "Technologie titane premium"],
      ar: ["امتصاص أقصى للسيرومات", "نتائج مضاعفة مع زيوتك", "مثالي لنمو الشعر واللحية", "تقنية تيتانيوم متميزة"],
    },
    ingredients: {
      fr: "540 micro-aiguilles en titane spécialement calibrées pour le cuir chevelu.",
      ar: "540 إبرة دقيقة من التيتانيوم مصممة خصيصا لفروة الرأس.",
    },
    usage: {
      fr: "Utiliser sur cuir chevelu sec, puis appliquer huile ou sérum de croissance.",
      ar: "استخدمي على فروة رأس جافة، ثم ضعي زيت أو سيروم النمو.",
    },
    unit: { fr: "1 rouleau", ar: "جهاز واحد" },
    isPack: true,
    sibling: "derma-roller",
  },

  // ── PRODUIT 4 : BROSSE MASSAGE CUIR CHEVELU ───────────────────────────────
  {
    id: "7",
    slug: "brosse-scalp",
    name: {
      fr: "Brosse Scalp Massage en Silicone – Herbia",
      ar: "فرشاة السيليكون لتدليك فروة الرأس – Herbia",
    },
    category: "accessoire",
    price: 26.9,
    oldPrice: 34.9,
    image: brosse,
    gallery: [brosse],
    tag: { fr: "Soin cheveux", ar: "عناية بالشعر" },
    featured: true,
    bestseller: false,
    short: {
      fr: "Améliorez votre routine de lavage. Cette brosse masse doucement le cuir chevelu, active la circulation et élimine efficacement les pellicules.",
      ar: "طوري روتين غسيل شعرك. فرشاة مرنة لتدليك الفروة برفق، تنشيط الدورة الدموية والتخلص الفعال من القشرة.",
    },
    benefits: {
      fr: ["Masse le cuir chevelu en douceur", "Active la circulation sanguine", "Élimine les pellicules", "Compatible avec tous shampoings"],
      ar: ["تدلك الفروة بلطف", "تنشط الدورة الدموية", "تتخلص من القشرة بفعالية", "متوافقة مع كل الشامبو"],
    },
    ingredients: {
      fr: "Silicone médical souple, poignée ergonomique résistante à l'eau.",
      ar: "سيليكون طبي مرن، مقبض مريح مقاوم للماء.",
    },
    usage: {
      fr: "Utiliser sur cheveux mouillés avec shampoing. Masser en mouvements circulaires.",
      ar: "استخدمي على الشعر المبلل مع الشامبو. ادلكي بحركات دائرية.",
    },
    unit: { fr: "1 brosse", ar: "فرشاة واحدة" },
    isPack: false,
    sibling: "brosse-scalp-pack",
  },
  {
    id: "8",
    slug: "brosse-scalp-pack",
    name: {
      fr: "Pack Soin Détox Cuir Chevelu – Herbia",
      ar: "باقة العناية وتنقية فروة الرأس – Herbia",
    },
    category: "accessoire",
    price: 39.9,
    oldPrice: 49.9,
    image: brosse,
    gallery: [brosse],
    tag: { fr: "Pack Détox", ar: "باقة تنقية" },
    featured: false,
    bestseller: false,
    short: {
      fr: "Une brosse de massage en silicone souple idéale pour nettoyer en profondeur et stimuler la racine des cheveux lors de vos soins.",
      ar: "فرشاة تدليك من السيليكون الناعم، مثالية للتنظيف العميق وتحفيز جذور الشعر أثناء تطبيق العلاجات والزيوت.",
    },
    benefits: {
      fr: ["Nettoyage profond du cuir chevelu", "Stimule les racines capillaires", "Optimise les soins et masques", "Détoxifie le cuir chevelu"],
      ar: ["تنظيف عميق للفروة", "تحفز جذور الشعر", "تُحسّن امتصاص العلاجات والأقنعة", "تنقية فروة الرأس"],
    },
    ingredients: {
      fr: "Silicone médical souple haute qualité.",
      ar: "سيليكون طبي ناعم عالي الجودة.",
    },
    usage: {
      fr: "Appliquer votre masque ou soin, puis masser avec la brosse pour optimiser la pénétration.",
      ar: "ضعي قناعك أو علاجك، ثم ادلكي بالفرشاة لتحسين التغلغل.",
    },
    unit: { fr: "1 brosse", ar: "فرشاة واحدة" },
    isPack: true,
    sibling: "brosse-scalp",
  },

  // ── PRODUIT 5 : APPLICATEUR D'HUILE ──────────────────────────────────────
  {
    id: "9",
    slug: "applicateur-huile",
    name: {
      fr: "Flacon Applicateur d'Huile Précision – Herbia",
      ar: "زجاجة توزيع وتطبيق الزيوت بدقة – Herbia",
    },
    category: "accessoire",
    price: 22.9,
    oldPrice: 29.9,
    image: applicateur,
    gallery: [applicateur],
    tag: { fr: "Pratique", ar: "عملي" },
    featured: true,
    bestseller: false,
    short: {
      fr: "Appliquez vos bains d'huile et soins directement sur la racine des cheveux sans gaspillage et sans fessier grâce à son embout peigne intégré.",
      ar: "طبقي حمامات الزيت وعلاجاتك مباشرة على فروة الرأس دون هدر أو فوضى بفضل الرأس المبتكر على شكل مشط.",
    },
    benefits: {
      fr: ["Application précise sur les racines", "Zéro gaspillage d'huile", "Embout peigne intégré", "Idéal pour les bains d'huile"],
      ar: ["تطبيق دقيق على الجذور", "صفر هدر للزيت", "رأس مشط مدمج", "مثالي لحمامات الزيت"],
    },
    ingredients: {
      fr: "Flacon en plastique résistant, embout applicateur peigne multifonction.",
      ar: "زجاجة بلاستيك متين، رأس تطبيق مشط متعدد الوظائف.",
    },
    usage: {
      fr: "Remplir avec votre huile ou soin préféré. Appliquer directement sur le cuir chevelu en séparant les cheveux.",
      ar: "امليء بزيتك أو علاجك المفضل. طبقي مباشرة على الفروة مع فصل الشعر.",
    },
    unit: { fr: "1 flacon", ar: "زجاجة واحدة" },
    isPack: false,
    sibling: "applicateur-huile-pack",
  },
  {
    id: "10",
    slug: "applicateur-huile-pack",
    name: {
      fr: "Lot de 2 Flacons Applicateurs de Soins – Herbia",
      ar: "طقم زجاجتين لتوزيع زيوت وصبغات الشعر – Herbia",
    },
    category: "accessoire",
    price: 34.9,
    oldPrice: 45.8,
    image: applicateur,
    gallery: [applicateur],
    tag: { fr: "Lot ×2", ar: "طقم ×2" },
    featured: false,
    bestseller: false,
    short: {
      fr: "Pratique pour séparer vos mélanges : un flacon dédié à vos bains d'huiles et un second pour vos lotions ou teintures capillaires.",
      ar: "عملي لتنظيم علاجاتك: زجاجة مخصصة لحمامات الزيت وأخرى لتطبيق اللوشنات أو صبغات الشعر بسهولة.",
    },
    benefits: {
      fr: ["2 flacons pour 2 usages", "Organisez vos soins facilement", "Un pour huiles, un pour lotions", "Embout peigne pour chaque flacon"],
      ar: ["زجاجتان لاستعمالين مختلفين", "نظمي عناياتك بسهولة", "إحداهما للزيوت والأخرى للصبغات", "رأس مشط لكل زجاجة"],
    },
    ingredients: {
      fr: "2 flacons en plastique résistant avec embouts applicateurs peigne.",
      ar: "زجاجتان من البلاستيك المتين مع رؤوس تطبيق مشط.",
    },
    usage: {
      fr: "Dédier un flacon aux bains d'huile et l'autre aux lotions ou teintures.",
      ar: "خصصي زجاجة لحمامات الزيت والأخرى للوشنات أو الصبغات.",
    },
    unit: { fr: "2 flacons", ar: "زجاجتان" },
    isPack: true,
    sibling: "applicateur-huile",
  },
];

export const categories: { id: Category | "all"; fr: string; ar: string }[] = [
  { id: "all", fr: "Tout", ar: "الكل" },
  { id: "soin", fr: "Soins", ar: "العناية" },
  { id: "outil", fr: "Outils", ar: "أدوات" },
  { id: "accessoire", fr: "Accessoires", ar: "إكسسوارات" },
];

export const governorates = [
  "Tunis", "Ariana", "Ben Arous", "Manouba", "Nabeul", "Zaghouan", "Bizerte",
  "Béja", "Jendouba", "Kef", "Siliana", "Sousse", "Monastir", "Mahdia",
  "Sfax", "Kairouan", "Kasserine", "Sidi Bouzid", "Gabès", "Médenine",
  "Tataouine", "Gafsa", "Tozeur", "Kébili",
];

// ─────────────────────────────────────────────────────────────────────────────
// ANCIENS PRODUITS — conservés pour usage futur
// ─────────────────────────────────────────────────────────────────────────────
/*
import argan from "@/assets/p-argan.jpg";
import shampoo from "@/assets/p-shampoo.jpg";
import conditioner from "@/assets/p-conditioner.jpg";
import castor from "@/assets/p-castor.jpg";
import blackseed from "@/assets/p-blackseed.jpg";
import soap from "@/assets/p-soap.jpg";
import massage from "@/assets/p-massage.jpg";
import mask from "@/assets/p-mask.jpg";
import giftbox from "@/assets/p-giftbox.jpg";
import bundle from "@/assets/p-bundle.jpg";
// ... (anciens produits conservés ici)
*/
