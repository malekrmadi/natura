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

export type Category = "hair" | "oils" | "spa";

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
}

export const products: Product[] = [
  {
    id: "1",
    slug: "shampoing-bio-reparateur",
    name: { fr: "Shampoing Bio Réparateur", ar: "شامبو عضوي مرمم" },
    category: "hair",
    price: 38,
    image: shampoo,
    gallery: [shampoo, mask, bundle],
    tag: { fr: "Bestseller", ar: "الأكثر مبيعا" },
    featured: true,
    bestseller: true,
    short: {
      fr: "Restaure les cheveux abîmés avec un mélange d'huiles essentielles tunisiennes.",
      ar: "يعيد للشعر التالف حيويته بمزيج من الزيوت العطرية التونسية.",
    },
    benefits: {
      fr: ["Répare en profondeur", "Sans sulfates ni parabens", "Brillance naturelle", "Convient à tous les types de cheveux"],
      ar: ["إصلاح عميق", "خالٍ من السلفات والبارابين", "لمعان طبيعي", "مناسب لجميع أنواع الشعر"],
    },
    ingredients: { fr: "Huile d'argan, huile d'olive, aloe vera, extrait de romarin, huiles essentielles.", ar: "زيت الأرغان، زيت الزيتون، الصبار، خلاصة إكليل الجبل، زيوت عطرية." },
    usage: { fr: "Appliquer sur cheveux mouillés, masser et rincer. Utiliser 2 à 3 fois par semaine.", ar: "يوضع على الشعر المبلل، يدلك ثم يشطف. يستعمل 2 إلى 3 مرات أسبوعيا." },
    unit: { fr: "250ml", ar: "250 مل" },
  },
  {
    id: "2",
    slug: "apres-shampoing-nourrissant",
    name: { fr: "Après-Shampoing Nourrissant", ar: "بلسم مغذي" },
    category: "hair",
    price: 36,
    image: conditioner,
    gallery: [conditioner, shampoo, bundle],
    featured: true,
    short: { fr: "Nourrit et démêle pour des cheveux soyeux au quotidien.", ar: "يغذي ويفك التشابك للحصول على شعر حريري كل يوم." },
    benefits: { fr: ["Démêlage facile", "Hydratation longue durée", "Sans silicone", "Parfum doux et naturel"], ar: ["فك التشابك بسهولة", "ترطيب طويل الأمد", "خالٍ من السيليكون", "رائحة طبيعية لطيفة"] },
    ingredients: { fr: "Beurre de karité, huile de coco, protéines de soie, eau de fleur d'oranger.", ar: "زبدة الشيا، زيت جوز الهند، بروتينات الحرير، ماء زهر البرتقال." },
    usage: { fr: "Appliquer après le shampoing, laisser poser 2 minutes puis rincer.", ar: "يوضع بعد الشامبو، يترك لمدة دقيقتين ثم يشطف." },
    unit: { fr: "250ml", ar: "250 مل" },
  },
  {
    id: "3",
    slug: "duo-shampoing-apres-shampoing",
    name: { fr: "Duo Shampoing + Après-Shampoing", ar: "باقة شامبو + بلسم" },
    category: "hair",
    price: 65,
    oldPrice: 74,
    image: bundle,
    gallery: [bundle, shampoo, conditioner],
    tag: { fr: "-15%", ar: "-15%" },
    bestseller: true,
    short: { fr: "Le duo essentiel pour une routine capillaire complète et économique.", ar: "الثنائي الأساسي لروتين شعر كامل واقتصادي." },
    benefits: { fr: ["Économisez 15%", "Routine complète", "Résultats visibles dès 2 semaines"], ar: ["وفّر 15%", "روتين كامل", "نتائج مرئية خلال أسبوعين"] },
    ingredients: { fr: "Voir fiches produits individuelles.", ar: "انظر بطاقات المنتج الفردية." },
    usage: { fr: "Suivre le rituel : shampoing puis après-shampoing.", ar: "اتبع الطقس: الشامبو ثم البلسم." },
    unit: { fr: "2 x 250ml", ar: "2 × 250 مل" },
  },
  {
    id: "4",
    slug: "masque-reparateur-cheveux",
    name: { fr: "Masque Réparateur Cheveux", ar: "قناع مرمم للشعر" },
    category: "hair",
    price: 45,
    image: mask,
    gallery: [mask, shampoo, conditioner],
    short: { fr: "Soin intense hebdomadaire pour cheveux secs et abîmés.", ar: "علاج مكثف أسبوعي للشعر الجاف والتالف." },
    benefits: { fr: ["Réparation intense", "Cheveux doux et brillants", "Action longue durée"], ar: ["إصلاح مكثف", "شعر ناعم ولامع", "تأثير طويل الأمد"] },
    ingredients: { fr: "Avocat, argan, miel, beurre de karité.", ar: "الأفوكادو، الأرغان، العسل، زبدة الشيا." },
    usage: { fr: "Appliquer sur cheveux humides, laisser poser 15-20 min, rincer.", ar: "يوضع على شعر رطب، يترك 15-20 دقيقة، يشطف." },
    unit: { fr: "200ml", ar: "200 مل" },
  },
  {
    id: "5",
    slug: "huile-argan-pure",
    name: { fr: "Huile d'Argan Pure", ar: "زيت الأرغان النقي" },
    category: "oils",
    price: 55,
    image: argan,
    gallery: [argan, mask, soap],
    tag: { fr: "100% Pure", ar: "نقي 100%" },
    featured: true,
    bestseller: true,
    short: { fr: "Or liquide du Maghreb, première pression à froid, pour peau et cheveux.", ar: "ذهب المغرب السائل، عصر بارد أول، للبشرة والشعر." },
    benefits: { fr: ["Anti-âge naturel", "Hydratation profonde", "Riche en vitamine E", "Pressée à froid"], ar: ["مضاد للشيخوخة طبيعي", "ترطيب عميق", "غني بفيتامين E", "معصور على البارد"] },
    ingredients: { fr: "100% huile d'argan pure (Argania spinosa) — origine Tunisie.", ar: "100% زيت أرغان نقي (Argania spinosa) — منشأ تونس." },
    usage: { fr: "Quelques gouttes sur peau ou cheveux, masser délicatement.", ar: "قطرات قليلة على البشرة أو الشعر، تدلك بلطف." },
    unit: { fr: "50ml", ar: "50 مل" },
  },
  {
    id: "6",
    slug: "huile-de-ricin",
    name: { fr: "Huile de Ricin", ar: "زيت الخروع" },
    category: "oils",
    price: 28,
    image: castor,
    gallery: [castor, argan, blackseed],
    short: { fr: "Stimule la pousse des cheveux, cils et sourcils.", ar: "يحفز نمو الشعر والرموش والحواجب." },
    benefits: { fr: ["Stimule la pousse", "Fortifie cheveux et ongles", "100% naturelle"], ar: ["يحفز النمو", "يقوي الشعر والأظافر", "طبيعي 100%"] },
    ingredients: { fr: "100% huile de ricin pressée à froid.", ar: "100% زيت خروع معصور على البارد." },
    usage: { fr: "Appliquer sur racines ou cils le soir.", ar: "يوضع على جذور الشعر أو الرموش مساءً." },
    unit: { fr: "100ml", ar: "100 مل" },
  },
  {
    id: "7",
    slug: "huile-de-nigelle",
    name: { fr: "Huile de Nigelle (Habba Sawda)", ar: "زيت الحبة السوداء" },
    category: "oils",
    price: 42,
    image: blackseed,
    gallery: [blackseed, argan, castor],
    short: { fr: "Trésor ancestral, purifiante et fortifiante pour la peau.", ar: "كنز الأجداد، تطهر وتقوي البشرة." },
    benefits: { fr: ["Purifie la peau", "Anti-imperfections", "Booste l'immunité"], ar: ["تنقي البشرة", "ضد العيوب", "تعزز المناعة"] },
    ingredients: { fr: "100% huile de nigelle pure (Nigella sativa).", ar: "100% زيت حبة سوداء نقي." },
    usage: { fr: "1 cuillère à café par jour ou en application locale.", ar: "ملعقة صغيرة يوميا أو موضعيا." },
    unit: { fr: "100ml", ar: "100 مل" },
  },
  {
    id: "8",
    slug: "huile-massage-relaxante",
    name: { fr: "Huile de Massage Relaxante", ar: "زيت تدليك مرخي" },
    category: "spa",
    price: 48,
    image: massage,
    gallery: [massage, soap, giftbox],
    featured: true,
    short: { fr: "Évasion sensorielle aux roses et eucalyptus de Tunisie.", ar: "رحلة حسية بالورد والكينا التونسية." },
    benefits: { fr: ["Détente musculaire", "Parfum apaisant", "Texture soyeuse"], ar: ["استرخاء العضلات", "رائحة مهدئة", "ملمس حريري"] },
    ingredients: { fr: "Huile d'amande douce, jojoba, huiles essentielles de rose et eucalyptus.", ar: "زيت اللوز الحلو، الجوجوبا، زيوت الورد والكينا العطرية." },
    usage: { fr: "Masser doucement le corps après la douche.", ar: "يدلك الجسم بلطف بعد الاستحمام." },
    unit: { fr: "150ml", ar: "150 مل" },
  },
  {
    id: "9",
    slug: "savon-aloe-vera",
    name: { fr: "Savon Naturel à l'Aloe Vera", ar: "صابون طبيعي بالصبار" },
    category: "spa",
    price: 18,
    image: soap,
    gallery: [soap, massage, giftbox],
    short: { fr: "Saponification à froid, pour peaux sensibles.", ar: "تصبن بارد، للبشرة الحساسة." },
    benefits: { fr: ["Apaise les peaux sensibles", "Hydrate", "Fait main en Tunisie"], ar: ["يهدئ البشرة الحساسة", "يرطب", "صناعة يدوية تونسية"] },
    ingredients: { fr: "Huile d'olive, aloe vera, soude, huiles essentielles.", ar: "زيت الزيتون، الصبار، الصودا، زيوت عطرية." },
    usage: { fr: "Utiliser quotidiennement sous la douche.", ar: "يستعمل يوميا تحت الدش." },
    unit: { fr: "100g", ar: "100غ" },
  },
  {
    id: "10",
    slug: "coffret-spa-bien-etre",
    name: { fr: "Coffret Spa Bien-Être", ar: "علبة هدايا سبا" },
    category: "spa",
    price: 145,
    oldPrice: 175,
    image: giftbox,
    gallery: [giftbox, massage, soap],
    tag: { fr: "Cadeau", ar: "هدية" },
    bestseller: true,
    featured: true,
    short: { fr: "L'expérience spa complète à offrir ou s'offrir.", ar: "تجربة سبا كاملة للإهداء أو لنفسك." },
    benefits: { fr: ["Économisez 30 DT", "Emballage cadeau premium", "5 produits stars"], ar: ["وفّر 30 د.ت", "تغليف هدايا فاخر", "5 منتجات نجمة"] },
    ingredients: { fr: "Huile d'argan, huile de massage, savon aloe vera, masque cheveux, échantillon.", ar: "زيت الأرغان، زيت التدليك، صابون الصبار، قناع الشعر، عينة." },
    usage: { fr: "Suivre les instructions de chaque produit.", ar: "اتبع تعليمات كل منتج." },
    unit: { fr: "Coffret", ar: "علبة" },
  },
];

export const categories: { id: Category | "all"; fr: string; ar: string }[] = [
  { id: "all", fr: "Tout", ar: "الكل" },
  { id: "hair", fr: "Soins Cheveux", ar: "العناية بالشعر" },
  { id: "oils", fr: "Huiles Naturelles", ar: "الزيوت الطبيعية" },
  { id: "spa", fr: "Spa & Corps", ar: "السبا والجسم" },
];

export const governorates = [
  "Tunis", "Ariana", "Ben Arous", "Manouba", "Nabeul", "Zaghouan", "Bizerte",
  "Béja", "Jendouba", "Kef", "Siliana", "Sousse", "Monastir", "Mahdia",
  "Sfax", "Kairouan", "Kasserine", "Sidi Bouzid", "Gabès", "Médenine",
  "Tataouine", "Gafsa", "Tozeur", "Kébili",
];
