export type Lang = "fr" | "ar";

export const t = {
  fr: {
    announce: "Livraison gratuite dès 100 DT • Paiement à la livraison partout en Tunisie",
    nav: { home: "Accueil", shop: "Boutique", about: "Notre Histoire", contact: "Contact" },
    cart: "Panier",
    hero: {
      eyebrow: "Marque Tunisienne • 100% Naturelle",
      title1: "La beauté",
      title2: "puisée dans la",
      title3: "nature",
      lead: "Cosmétiques bio inspirés des trésors ancestraux de Tunisie. Argan, nigelle, aloe vera — formulés avec soin, livrés chez vous.",
      cta: "Découvrir la collection",
      cta2: "Nos best-sellers",
      badge: "Paiement à la livraison",
      badgeSub: "Partout en Tunisie",
    },
    featured: { eye: "Coups de cœur", title: "Nos produits phares", sub: "Sélectionnés pour vous, formulés avec passion." },
    bestsellers: { eye: "Best-sellers", title: "Les favoris de nos clientes", sub: "Approuvés par des milliers de Tunisiennes." },
    benefits: {
      eye: "Pourquoi Natura",
      title: "Un engagement, une promesse",
      items: [
        { t: "100% Naturel", d: "Ingrédients bio sélectionnés à la source en Tunisie." },
        { t: "Fait Localement", d: "Formulé et conditionné dans nos ateliers tunisiens." },
        { t: "Sans Cruauté", d: "Jamais testé sur les animaux. Vegan friendly." },
        { t: "Livraison Rapide", d: "Partout en Tunisie sous 24-48h." },
      ],
    },
    testimonials: {
      eye: "Avis vérifiés", title: "Elles nous font confiance",
      items: [
        { q: "L'huile d'argan a transformé mes cheveux. Je ne peux plus m'en passer !", n: "Salma B.", c: "Sousse" },
        { q: "Produits authentiques, livraison rapide. Mon nouveau rituel beauté.", n: "Yasmine K.", c: "Tunis" },
        { q: "Le coffret spa est magnifique, parfait en cadeau pour ma sœur.", n: "Ines M.", c: "Sfax" },
      ],
    },
    faq: {
      eye: "Questions", title: "Tout ce qu'il faut savoir",
      items: [
        { q: "Comment se passe la livraison ?", a: "Nous livrons partout en Tunisie sous 24 à 48h. Livraison gratuite à partir de 100 DT d'achat." },
        { q: "Comment payer ma commande ?", a: "Le paiement se fait à la livraison (cash). Pas de carte bancaire nécessaire, c'est simple et sécurisé." },
        { q: "Vos produits sont-ils vraiment naturels ?", a: "Oui, 100% naturels et fabriqués en Tunisie. Sans parabens, sans sulfates, sans tests sur animaux." },
        { q: "Puis-je retourner un produit ?", a: "Vous disposez de 7 jours pour échanger un produit non ouvert. Contactez-nous." },
      ],
    },
    news: { title: "Rejoignez la famille Natura", sub: "Conseils beauté, nouveautés et offres exclusives directement dans votre boîte mail.", placeholder: "Votre email", cta: "S'inscrire" },
    catalog: { title: "Notre Boutique", sub: "Découvrez toute la collection de soins naturels.", search: "Rechercher un produit...", filters: "Filtres", category: "Catégorie", price: "Prix" },
    pd: { add: "Ajouter au panier", buy: "Acheter maintenant", tabs: { desc: "Description", bene: "Bienfaits", ing: "Ingrédients", use: "Utilisation" }, trust: ["Naturel & Bio", "Livraison 24-48h", "Paiement à la livraison"], related: "Vous aimerez aussi" },
    cartPage: {
      title: "Mon Panier", empty: "Votre panier est vide", emptyDesc: "Découvrez nos produits naturels et commencez votre rituel beauté.", continue: "Continuer mes achats",
      subtotal: "Sous-total", shipping: "Livraison", free: "Gratuite", total: "Total", checkout: "Passer commande",
      cod: "Paiement à la livraison partout en Tunisie. Aucune avance demandée.",
    },
    checkout: {
      title: "Finaliser ma commande", contact: "Informations de contact", delivery: "Adresse de livraison",
      first: "Prénom", last: "Nom", phone: "Téléphone", gov: "Gouvernorat", city: "Ville", addr: "Adresse complète", notes: "Notes (optionnel)",
      placeOrder: "Confirmer ma commande", back: "Retour au panier",
    },
    confirm: { title: "Commande confirmée !", desc: "Merci pour votre confiance. Nous vous appellerons sous peu pour confirmer la livraison.", num: "N° de commande", home: "Retour à l'accueil" },
    footer: {
      tag: "Beauté naturelle. Origine Tunisie.",
      shop: "Boutique", help: "Aide", company: "Entreprise",
      links: { all: "Tous les produits", hair: "Cheveux", oils: "Huiles", spa: "Spa", faq: "FAQ", ship: "Livraison", contact: "Contact", about: "À propos", story: "Notre histoire" },
      rights: "Tous droits réservés.",
    },
  },
  ar: {
    announce: "توصيل مجاني ابتداء من 100 د.ت • الدفع عند الاستلام في كامل تونس",
    nav: { home: "الرئيسية", shop: "المتجر", about: "قصتنا", contact: "اتصل بنا" },
    cart: "السلة",
    hero: {
      eyebrow: "علامة تونسية • طبيعية 100%",
      title1: "الجمال",
      title2: "من قلب",
      title3: "الطبيعة",
      lead: "مستحضرات تجميل عضوية مستوحاة من كنوز تونس العريقة. الأرغان، الحبة السوداء، الصبار — مصنوعة بعناية، تصلك إلى بيتك.",
      cta: "اكتشفي المجموعة",
      cta2: "الأكثر مبيعا",
      badge: "الدفع عند الاستلام",
      badgeSub: "في كامل تونس",
    },
    featured: { eye: "المفضلة", title: "منتجاتنا الرائدة", sub: "اختيرت لك، صنعت بشغف." },
    bestsellers: { eye: "الأكثر مبيعا", title: "المفضلة لدى زبوناتنا", sub: "موثوقة من آلاف التونسيات." },
    benefits: {
      eye: "لماذا ناتورا",
      title: "التزام ووعد",
      items: [
        { t: "طبيعي 100%", d: "مكونات عضوية مختارة من المصدر في تونس." },
        { t: "صناعة محلية", d: "مصنوعة ومعبأة في ورشاتنا التونسية." },
        { t: "بدون قسوة", d: "لا تُختبر على الحيوانات. صديقة للنباتيين." },
        { t: "توصيل سريع", d: "في كامل تونس خلال 24-48 ساعة." },
      ],
    },
    testimonials: {
      eye: "آراء موثقة", title: "يثقن فينا",
      items: [
        { q: "زيت الأرغان غيّر شعري. لم أعد أستطيع الاستغناء عنه!", n: "سلمى ب.", c: "سوسة" },
        { q: "منتجات أصلية وتوصيل سريع. روتين جمالي جديد.", n: "ياسمين ك.", c: "تونس" },
        { q: "علبة السبا رائعة، هدية مثالية لأختي.", n: "ايناس م.", c: "صفاقس" },
      ],
    },
    faq: {
      eye: "أسئلة", title: "كل ما تحتاجين معرفته",
      items: [
        { q: "كيف يتم التوصيل؟", a: "نوصّل في كامل تونس خلال 24-48 ساعة. التوصيل مجاني ابتداء من 100 د.ت." },
        { q: "كيف أدفع طلبيتي؟", a: "الدفع عند الاستلام نقدا. لا حاجة لبطاقة بنكية، الأمر بسيط وآمن." },
        { q: "هل منتجاتكم طبيعية فعلا؟", a: "نعم، طبيعية 100% وتُصنع في تونس. بدون بارابين، بدون سلفات، بدون اختبارات على الحيوانات." },
        { q: "هل يمكنني إرجاع منتج؟", a: "لديك 7 أيام لتبديل أي منتج غير مفتوح. اتصلي بنا." },
      ],
    },
    news: { title: "انضمي إلى عائلة ناتورا", sub: "نصائح جمال، جديدنا وعروض حصرية مباشرة في بريدك.", placeholder: "بريدك الإلكتروني", cta: "اشتراك" },
    catalog: { title: "متجرنا", sub: "اكتشفي كامل مجموعة العناية الطبيعية.", search: "ابحثي عن منتج...", filters: "تصفية", category: "الصنف", price: "السعر" },
    pd: { add: "أضف للسلة", buy: "اشري توا", tabs: { desc: "الوصف", bene: "الفوائد", ing: "المكونات", use: "الاستعمال" }, trust: ["طبيعي وعضوي", "توصيل 24-48س", "الدفع عند الاستلام"], related: "قد يعجبك أيضا" },
    cartPage: {
      title: "سلتي", empty: "سلتك فارغة", emptyDesc: "اكتشفي منتجاتنا الطبيعية وابدئي روتينك الجمالي.", continue: "متابعة التسوق",
      subtotal: "المجموع الفرعي", shipping: "التوصيل", free: "مجاني", total: "المجموع", checkout: "إتمام الطلب",
      cod: "الدفع عند الاستلام في كامل تونس. لا تُطلب أي دفعة مسبقة.",
    },
    checkout: {
      title: "إتمام طلبيتي", contact: "معلومات الاتصال", delivery: "عنوان التوصيل",
      first: "الاسم", last: "اللقب", phone: "الهاتف", gov: "الولاية", city: "المدينة", addr: "العنوان الكامل", notes: "ملاحظات (اختياري)",
      placeOrder: "أكد الطلب", back: "العودة للسلة",
    },
    confirm: { title: "تم تأكيد الطلب!", desc: "شكرا لثقتك. سنتصل بك قريبا لتأكيد التوصيل.", num: "رقم الطلب", home: "العودة للرئيسية" },
    footer: {
      tag: "جمال طبيعي. منشأ تونس.",
      shop: "المتجر", help: "المساعدة", company: "الشركة",
      links: { all: "كل المنتجات", hair: "الشعر", oils: "الزيوت", spa: "السبا", faq: "الأسئلة", ship: "التوصيل", contact: "اتصل بنا", about: "من نحن", story: "قصتنا" },
      rights: "كل الحقوق محفوظة.",
    },
  },
} as const;
