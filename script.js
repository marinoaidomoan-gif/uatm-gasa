(function () {
  'use strict';

  console.log('[UATM] Site initialisé');

  const translations = {
    fr: {
      "meta.home.title": "UATM-GASA Formation — Le Générateur d'Avenir | Première université privée du Bénin",
      "meta.home.description": "Première université privée du Bénin depuis 1992 : 4 UFR, 23 filières agréées par l'État, plus de 3 000 étudiants et 5 campus. Licence et Master en présentiel ou en e-learning.",
      "a11y.skip": "Aller au contenu principal",
      "a11y.home_link": "UATM-GASA Formation — retour à l'accueil",
      "a11y.main_nav": "Navigation principale",
      "a11y.lang_group": "Choix de la langue",
      "a11y.mobile_nav": "Navigation mobile",
      "a11y.back_to_top": "Retour en haut de page",
      "a11y.breadcrumb": "Fil d'Ariane",
      "a11y.menu_open": "Ouvrir le menu",
      "a11y.menu_close": "Fermer le menu",
      "nav.home": "Accueil",
      "nav.why": "Pourquoi nous ?",
      "nav.programs": "Filières",
      "nav.figures": "Chiffres",
      "nav.campus": "Campus",
      "nav.admissions": "Admissions",
      "cta.apply": "Pré-inscription",
      "hero.badge": "Depuis 1992 · Cotonou, Bénin",
      "hero.title_1": "Le Générateur",
      "hero.title_2": "d'Avenir",
      "hero.subtitle": "Première université privée du Bénin depuis 1992, l'UATM-GASA Formation forme les meilleurs ingénieurs, entrepreneurs, comptables, agronomes et juristes de demain.",
      "hero.cta_programs": "Découvrir nos filières",
      "hero.cta_apply": "Pré-inscription",
      "hero.trust_1": "23 filières agréées par l'État",
      "hero.trust_2": "Licence · Master · Doctorat",
      "hero.trust_3": "Présentiel & e-learning",
      "hero.years_label": "ans d'excellence",
      "hero.card1_title": "1er de la CEDEAO",
      "hero.card1_text": "HUAWEI ICT Competition",
      "hero.card2_title": "Bourses jusqu'à 100 %",
      "hero.card2_text": "Excellence, mérite & social",
      "hero.scroll": "Défiler",
      "hero.img_alt": "Étudiantes et étudiants de l'UATM-GASA Formation en uniforme, révisant ensemble sur le campus",
      "hero.scroll_aria": "Défiler vers la section suivante",
      "why.eyebrow": "Nos atouts",
      "why.title": "Pourquoi choisir l'UATM-GASA ?",
      "why.lead": "Plus qu'une université : un tremplin vers votre réussite professionnelle, au Bénin comme à l'international.",
      "why.c1_title": "Le choix de l'excellence",
      "why.c1_text": "Premier de la CEDEAO à la HUAWEI ICT Competition et prix d'excellence GAB School Award 2015.",
      "why.c2_title": "Moyens exceptionnels",
      "why.c2_text": "6 laboratoires de TP, 2 laboratoires de recherche, des bibliothèques, 250 ha de terres cultivables et la fibre optique.",
      "why.c3_title": "Réseau dynamique",
      "why.c3_text": "Des milliers d'anciens étudiants présents sur les 5 continents pour faciliter votre insertion professionnelle.",
      "why.c4_title": "Formation pratique",
      "why.c4_text": "Certifications HUAWEI et formations courtes (développement web, énergie solaire, marketing digital) dès la 1<sup>re</sup> année.",
      "why.c5_title": "Bourses disponibles",
      "why.c5_text": "Bourses d'excellence (100 %), de mérite (50 %) et sociales (25 %) selon vos résultats et votre situation.",
      "why.c6_title": "Vie étudiante enrichissante",
      "why.c6_text": "Clubs de basketball, football, musique, danse, journalisme et développement personnel.",
      "why.c7_title": "Ouverture internationale",
      "why.c7_text": "Des enseignants venus du monde entier et des étudiants de plus de 14 nationalités.",
      "why.c8_title": "Technologies avancées",
      "why.c8_text": "Intelligence artificielle, robotique, énergies renouvelables, marketing digital et big data au programme.",
      "programs.eyebrow": "Nos formations",
      "programs.title": "4 UFR, 23 filières agréées par l'État",
      "programs.lead": "Licence (3 ans) et Master (5 ans), en cours du jour, du soir ou en e-learning, pour construire une carrière qui vous ressemble.",
      "programs.count_label": "filières",
      "programs.st_title": "Sciences &amp; Techniques",
      "programs.st_tagline": "Informatique, réseaux, énergie &amp; industrie",
      "programs.degree": "Licence · Master",
      "programs.apply": "Je candidate",
      "programs.agro_title": "Sciences Agronomiques",
      "programs.agro_tagline": "Productions animale et végétale, agro-économie",
      "programs.mgmt_title": "Sciences de Gestion",
      "programs.mgmt_tagline": "Finance, marketing, RH &amp; logistique",
      "programs.law_title": "Sciences Juridiques &amp; Politiques",
      "programs.law_tagline": "Droit, communication &amp; relations internationales",
      "programs.note": "Astuce : cliquez sur une filière pour la présélectionner dans le formulaire de pré-inscription.",
      "programs.img_st": "Étudiants en travaux pratiques sur une baie de brassage réseau",
      "programs.img_agro": "Étudiants en agronomie lors d'une sortie de terrain",
      "programs.img_mgmt": "Étudiantes en gestion travaillant sur un exercice de comptabilité",
      "programs.img_law": "Maillet de juge posé sur des livres de droit",
      "prog.rit": "Réseaux Informatiques et Télécommunications",
      "prog.sil": "Systèmes Informatiques et Logiciels",
      "prog.sec": "Sécurité Informatique",
      "prog.si": "Systèmes Industriels",
      "prog.geer": "Génie Électrique et Énergie Renouvelable",
      "prog.iim": "Informatique Industrielle et Maintenance",
      "prog.fc": "Froid et Climatisation",
      "prog.bio": "Biotechnologie",
      "prog.pa": "Production Animale",
      "prog.pv": "Production Végétale",
      "prog.ae": "Agro-Économie",
      "prog.fca": "Finance, Comptabilité et Audit",
      "prog.bfa": "Banque, Finance et Assurance",
      "prog.mcc": "Marketing, Communication et Commerce",
      "prog.md": "Marketing Digital",
      "prog.mrh": "Management des Ressources Humaines",
      "prog.tl": "Transport et Logistique",
      "prog.egp": "Entrepreneuriat et Gestion de Projets",
      "prog.tvn": "Techniques de Ventes et Négociations",
      "prog.dpu": "Droit Public",
      "prog.dpr": "Droit Privé",
      "prog.daf": "Droit des Affaires",
      "prog.cri": "Communication et Relations Internationales",
      "figures.eyebrow": "L'UATM en chiffres",
      "figures.title": "Plus de trois décennies d'excellence",
      "figures.lead": "Depuis sa création par le Dr Théophane AYI, l'UATM-GASA est passée de 60 étudiants et 2 filières à une université de référence en Afrique de l'Ouest.",
      "figures.s1_label": "Année de création",
      "figures.s1_sub": "Première université privée du Bénin",
      "figures.s2_label": "Étudiants inscrits",
      "figures.s2_sub": "Venus de toute l'Afrique",
      "figures.s3_label": "Filières agréées",
      "figures.s3_sub": "Par l'État béninois",
      "figures.s4_label": "Professeurs",
      "figures.s4_sub": "Dont 36 enseignants internationaux",
      "figures.m1": "Campus au Bénin",
      "figures.m2": "Unités de Formation et de Recherche",
      "figures.m3": "Nationalités représentées",
      "figures.m4": "De terres cultivables",
      "figures.quote": "« Notre ambition est de former des hommes et des femmes compétents, capables de transformer positivement leur environnement et de s'imposer partout dans le monde. »",
      "figures.quote_role": "Président-Fondateur de l'UATM-GASA Formation",
      "figures.founder_alt": "Portrait du Dr Théophane AYI, fondateur de l'UATM-GASA Formation",
      "campus.eyebrow": "Vie étudiante &amp; campus",
      "campus.title": "5 campus, une seule famille",
      "campus.text1": "De Cotonou à Porto-Novo en passant par Abomey-Calavi, l'UATM-GASA vous accueille sur <strong>5 campus</strong> équipés de laboratoires modernes, de bibliothèques, d'une connexion fibre optique et d'espaces sportifs.",
      "campus.text2": "Ici, on apprend aussi en dehors des cours : sport, culture, projets associatifs… Une vie étudiante intense, avec des étudiants de plus de 14 nationalités.",
      "campus.clubs_title": "Nos clubs étudiants",
      "campus.club_basket": "Basketball",
      "campus.club_foot": "Football",
      "campus.club_music": "Musique",
      "campus.club_dance": "Danse",
      "campus.club_journalism": "Journalisme",
      "campus.club_dev": "Développement personnel",
      "campus.main_tag": "Campus principal",
      "campus.gbegamey_addr": "2ème rue à gauche après le CEG Gbégamey",
      "campus.calavi_addr": "2ème étage, bâtiment Continental Bank, face à la Mairie",
      "campus.akpakpa_addr": "À la descente du nouveau pont et PK6, route de Porto-Novo, carrefour Abattoir",
      "campus.agla_addr": "Von du Commissariat de Kouhounnou, Agla",
      "campus.porto_addr": "Dangbéklounon, rue allant à Gbèdjromédé",
      "campus.g1_title": "Campus principal de Gbégamey",
      "campus.g1_text": "Un bâtiment moderne de plusieurs étages au cœur de Cotonou.",
      "campus.g2_tag": "Laboratoires",
      "campus.g2_title": "Labo de biotechnologie",
      "campus.g2_text": "Analyses biochimiques, transformation et contrôle qualité.",
      "campus.g3_tag": "Vie étudiante",
      "campus.g3_title": "Une communauté soudée",
      "campus.g3_text": "Plus de 3 000 étudiants de 14 nationalités.",
      "campus.g4_tag": "Agronomie",
      "campus.g4_title": "Bassins de pisciculture",
      "campus.g4_text": "1 ha de bassins et 250 ha de terres pour la pratique.",
      "campus.gallery_title": "Galerie photo du campus",
      "campus.g1_alt": "Bâtiment principal de l'UATM-GASA Formation à Gbégamey, Cotonou",
      "campus.g2_alt": "Salle de travaux pratiques de biotechnologie entièrement équipée",
      "campus.g3_alt": "Groupe d'étudiants souriants de l'UATM-GASA en uniforme",
      "campus.g4_alt": "Bassins piscicoles de l'UATM-GASA utilisés pour la formation en aquaculture",
      "admissions.eyebrow": "Admissions 2026-2027",
      "admissions.title": "Réservez votre place pour la rentrée",
      "admissions.text": "Remplissez ce formulaire en moins d'une minute : notre équipe vous recontacte sous 48 h pour vous conseiller et finaliser votre inscription.",
      "admissions.step1_title": "Pré-inscription en ligne",
      "admissions.step1_text": "Choisissez votre filière et laissez vos coordonnées.",
      "admissions.step2_title": "Échange avec un conseiller",
      "admissions.step2_text": "Nous vous rappelons sous 48 h (téléphone, e-mail ou WhatsApp).",
      "admissions.step3_title": "Dossier &amp; inscription",
      "admissions.step3_text": "Déposez vos documents et réglez les frais (Mobile Money, carte ou espèces).",
      "admissions.contact_title": "Une question ? Contactez-nous",
      "admissions.whatsapp": "Écrivez-nous sur WhatsApp",
      "admissions.hours": "Lun – Ven : 8h – 17h",
      "form.title": "Formulaire de pré-inscription",
      "form.subtitle": "Les champs marqués d'un * sont obligatoires.",
      "form.name_label": "Nom complet",
      "form.email_label": "Adresse e-mail",
      "form.phone_label": "Téléphone",
      "form.program_label": "Filière souhaitée",
      "form.program_ph": "Choisissez une filière",
      "form.consent": "J'accepte que mes données soient utilisées pour traiter ma demande, conformément à la <a href=\"politique-confidentialite.html\">politique de confidentialité</a>.",
      "form.submit": "Envoyer ma demande",
      "form.reassure_1": "Réponse sous 48 h",
      "form.reassure_2": "Données protégées",
      "form.reassure_3": "Sans engagement",
      "form.success_title": "Demande envoyée avec succès !",
      "form.whatsapp_btn": "Accélérer via WhatsApp",
      "form.reset_btn": "Nouvelle demande",
      "form.name_ph": "Ex. : Koffi ADJOVI",
      "form.email_ph": "vous@exemple.com",
      "form.sending": "Envoi en cours…",
      "form.err_required": "Ce champ est obligatoire.",
      "form.err_name": "Veuillez indiquer votre nom complet (2 caractères minimum).",
      "form.err_email": "Veuillez saisir une adresse e-mail valide (ex. : nom@exemple.com).",
      "form.err_phone": "Veuillez saisir un numéro de téléphone valide (8 à 15 chiffres).",
      "form.err_program": "Veuillez choisir une filière.",
      "form.err_consent": "Veuillez accepter la politique de confidentialité pour continuer.",
      "form.err_summary": "Merci de corriger les champs signalés.",
      "form.success_text": "Merci <strong>{name}</strong> ! Votre demande de pré-inscription en <strong>{program}</strong> a bien été enregistrée. Notre équipe vous recontactera sous 48 h.",
      "form.whatsapp_msg": "Bonjour UATM-GASA, je viens d'effectuer une demande de pré-inscription sur votre site.\nNom : {name}\nFilière : {program}\nTéléphone : {phone}\nE-mail : {email}",
      "form.error_generic": "Désolé, une erreur est survenue lors de l'envoi. Veuillez réessayer ou nous appeler au (+229) 01 65 78 77 21.",
      "footer.desc": "Première et plus ancienne université privée du Bénin, l'UATM-GASA Formation forme depuis 1992 les ingénieurs, entrepreneurs, comptables, agronomes et juristes de demain.",
      "footer.agreement": "Établissement agréé par l'État béninois",
      "footer.quick_links": "Liens rapides",
      "footer.ufr": "Nos UFR",
      "footer.contact": "Contact",
      "footer.address": "2ème rue à gauche après le CEG Gbégamey, Cotonou, Bénin",
      "footer.hours": "Lundi – Vendredi : 8h – 17h",
      "footer.rights": "Tous droits réservés",
      "footer.privacy": "Politique de confidentialité",
      "footer.terms": "CGU",
      "footer.legal": "Mentions légales"
    },
    en: {
      "meta.home.title": "UATM-GASA Formation — The Future Generator | Benin's First Private University",
      "meta.home.description": "Benin's first private university since 1992: 4 faculties, 23 state-accredited programs, over 3,000 students and 5 campuses. Bachelor's and Master's degrees on campus or through e-learning.",
      "a11y.skip": "Skip to main content",
      "a11y.home_link": "UATM-GASA Formation — back to home",
      "a11y.main_nav": "Main navigation",
      "a11y.lang_group": "Language selection",
      "a11y.mobile_nav": "Mobile navigation",
      "a11y.back_to_top": "Back to top",
      "a11y.breadcrumb": "Breadcrumb",
      "a11y.menu_open": "Open menu",
      "a11y.menu_close": "Close menu",
      "nav.home": "Home",
      "nav.why": "Why us?",
      "nav.programs": "Programs",
      "nav.figures": "Key Figures",
      "nav.campus": "Campus",
      "nav.admissions": "Admissions",
      "cta.apply": "Apply Now",
      "hero.badge": "Since 1992 · Cotonou, Benin",
      "hero.title_1": "The Future",
      "hero.title_2": "Generator",
      "hero.subtitle": "First private university in Benin since 1992, UATM-GASA Formation trains tomorrow's finest engineers, entrepreneurs, accountants, agronomists and lawyers.",
      "hero.cta_programs": "Explore our programs",
      "hero.cta_apply": "Apply Now",
      "hero.trust_1": "23 state-accredited programs",
      "hero.trust_2": "Bachelor · Master · PhD",
      "hero.trust_3": "On-campus & e-learning",
      "hero.years_label": "years of excellence",
      "hero.card1_title": "#1 in ECOWAS",
      "hero.card1_text": "HUAWEI ICT Competition",
      "hero.card2_title": "Scholarships up to 100%",
      "hero.card2_text": "Excellence, merit & need-based",
      "hero.scroll": "Scroll",
      "hero.img_alt": "UATM-GASA Formation students in uniform studying together on campus",
      "hero.scroll_aria": "Scroll to the next section",
      "why.eyebrow": "Our strengths",
      "why.title": "Why choose UATM-GASA?",
      "why.lead": "More than a university: a springboard to professional success, in Benin and around the world.",
      "why.c1_title": "The choice of excellence",
      "why.c1_text": "Ranked first in ECOWAS at the HUAWEI ICT Competition and winner of the 2015 GAB School Award for excellence.",
      "why.c2_title": "Exceptional facilities",
      "why.c2_text": "6 practical labs, 2 research labs, libraries, 250 hectares of farmland and fibre-optic internet.",
      "why.c3_title": "A dynamic network",
      "why.c3_text": "Thousands of alumni across 5 continents to help you launch your career.",
      "why.c4_title": "Hands-on training",
      "why.c4_text": "HUAWEI certifications and short courses (web development, solar energy, digital marketing) from the very first year.",
      "why.c5_title": "Scholarships available",
      "why.c5_text": "Excellence (100%), merit (50%) and need-based (25%) scholarships depending on your results and circumstances.",
      "why.c6_title": "A rich student life",
      "why.c6_text": "Basketball, football, music, dance, journalism and personal development clubs.",
      "why.c7_title": "International outlook",
      "why.c7_text": "Lecturers from all over the world and students from more than 14 countries.",
      "why.c8_title": "Cutting-edge technologies",
      "why.c8_text": "Artificial intelligence, robotics, renewable energy, digital marketing and big data on the curriculum.",
      "programs.eyebrow": "Our programs",
      "programs.title": "4 faculties, 23 state-accredited programs",
      "programs.lead": "Bachelor's (3 years) and Master's (5 years) degrees, in day, evening or e-learning classes, to build a career that suits you.",
      "programs.count_label": "programs",
      "programs.st_title": "Science &amp; Technology",
      "programs.st_tagline": "Computing, networks, energy &amp; industry",
      "programs.degree": "Bachelor · Master",
      "programs.apply": "Apply",
      "programs.agro_title": "Agricultural Sciences",
      "programs.agro_tagline": "Animal and crop production, agri-economics",
      "programs.mgmt_title": "Management Sciences",
      "programs.mgmt_tagline": "Finance, marketing, HR &amp; logistics",
      "programs.law_title": "Law &amp; Political Science",
      "programs.law_tagline": "Law, communication &amp; international relations",
      "programs.note": "Tip: click on a program to preselect it in the pre-registration form.",
      "programs.img_st": "Students doing practical work on a network patch rack",
      "programs.img_agro": "Agronomy students on a field trip",
      "programs.img_mgmt": "Management students working on an accounting exercise",
      "programs.img_law": "Judge's gavel resting on law books",
      "prog.rit": "Computer Networks & Telecommunications",
      "prog.sil": "Computer Systems & Software",
      "prog.sec": "Cybersecurity",
      "prog.si": "Industrial Systems",
      "prog.geer": "Electrical Engineering & Renewable Energy",
      "prog.iim": "Industrial Computing & Maintenance",
      "prog.fc": "Refrigeration & Air Conditioning",
      "prog.bio": "Biotechnology",
      "prog.pa": "Animal Production",
      "prog.pv": "Crop Production",
      "prog.ae": "Agricultural Economics",
      "prog.fca": "Finance, Accounting & Audit",
      "prog.bfa": "Banking, Finance & Insurance",
      "prog.mcc": "Marketing, Communication & Commerce",
      "prog.md": "Digital Marketing",
      "prog.mrh": "Human Resources Management",
      "prog.tl": "Transport & Logistics",
      "prog.egp": "Entrepreneurship & Project Management",
      "prog.tvn": "Sales & Negotiation Techniques",
      "prog.dpu": "Public Law",
      "prog.dpr": "Private Law",
      "prog.daf": "Business Law",
      "prog.cri": "Communication & International Relations",
      "figures.eyebrow": "UATM in figures",
      "figures.title": "More than three decades of excellence",
      "figures.lead": "Since its founding by Dr Théophane AYI, UATM-GASA has grown from 60 students and 2 programs into a leading university in West Africa.",
      "figures.s1_label": "Year founded",
      "figures.s1_sub": "Benin's first private university",
      "figures.s2_label": "Enrolled students",
      "figures.s2_sub": "From all over Africa",
      "figures.s3_label": "Accredited programs",
      "figures.s3_sub": "By the State of Benin",
      "figures.s4_label": "Lecturers",
      "figures.s4_sub": "Including 36 international lecturers",
      "figures.m1": "Campuses in Benin",
      "figures.m2": "Teaching & Research Units (UFR)",
      "figures.m3": "Nationalities represented",
      "figures.m4": "Of farmland",
      "figures.quote": "“Our ambition is to train competent men and women, capable of positively transforming their environment and of making their mark anywhere in the world.”",
      "figures.quote_role": "President & Founder of UATM-GASA Formation",
      "figures.founder_alt": "Portrait of Dr Théophane AYI, founder of UATM-GASA Formation",
      "campus.eyebrow": "Student life &amp; campus",
      "campus.title": "5 campuses, one family",
      "campus.text1": "From Cotonou to Porto-Novo via Abomey-Calavi, UATM-GASA welcomes you on <strong>5 campuses</strong> equipped with modern labs, libraries, fibre-optic internet and sports facilities.",
      "campus.text2": "Here, learning continues outside the classroom: sports, culture, student projects… A vibrant student life, with students from more than 14 countries.",
      "campus.clubs_title": "Our student clubs",
      "campus.club_basket": "Basketball",
      "campus.club_foot": "Football",
      "campus.club_music": "Music",
      "campus.club_dance": "Dance",
      "campus.club_journalism": "Journalism",
      "campus.club_dev": "Personal development",
      "campus.main_tag": "Main campus",
      "campus.gbegamey_addr": "2nd street on the left after CEG Gbégamey",
      "campus.calavi_addr": "2nd floor, Continental Bank building, opposite the Town Hall",
      "campus.akpakpa_addr": "At the foot of the new bridge and PK6, Porto-Novo road, Abattoir junction",
      "campus.agla_addr": "Side street of the Kouhounnou police station, Agla",
      "campus.porto_addr": "Dangbéklounon, on the street leading to Gbèdjromédé",
      "campus.g1_title": "Gbégamey main campus",
      "campus.g1_text": "A modern multi-storey building in the heart of Cotonou.",
      "campus.g2_tag": "Labs",
      "campus.g2_title": "Biotechnology lab",
      "campus.g2_text": "Biochemical analysis, food processing and quality control.",
      "campus.g3_tag": "Student life",
      "campus.g3_title": "A close-knit community",
      "campus.g3_text": "Over 3,000 students from 14 countries.",
      "campus.g4_tag": "Agronomy",
      "campus.g4_title": "Fish farming ponds",
      "campus.g4_text": "1 ha of ponds and 250 ha of land for hands-on training.",
      "campus.gallery_title": "Campus photo gallery",
      "campus.g1_alt": "Main UATM-GASA Formation building in Gbégamey, Cotonou",
      "campus.g2_alt": "Fully equipped biotechnology practical lab",
      "campus.g3_alt": "Group of smiling UATM-GASA students in uniform",
      "campus.g4_alt": "UATM-GASA fish ponds used for aquaculture training",
      "admissions.eyebrow": "Admissions 2026-2027",
      "admissions.title": "Reserve your place for the new academic year",
      "admissions.text": "Fill in this form in less than a minute: our team will contact you within 48 hours to advise you and finalise your enrolment.",
      "admissions.step1_title": "Online pre-registration",
      "admissions.step1_text": "Choose your program and leave your contact details.",
      "admissions.step2_title": "Talk with an advisor",
      "admissions.step2_text": "We call you back within 48 hours (phone, email or WhatsApp).",
      "admissions.step3_title": "Application &amp; enrolment",
      "admissions.step3_text": "Submit your documents and pay the fees (Mobile Money, card or cash).",
      "admissions.contact_title": "Questions? Contact us",
      "admissions.whatsapp": "Message us on WhatsApp",
      "admissions.hours": "Mon – Fri: 8 am – 5 pm",
      "form.title": "Pre-registration form",
      "form.subtitle": "Fields marked with * are required.",
      "form.name_label": "Full name",
      "form.email_label": "Email address",
      "form.phone_label": "Phone number",
      "form.program_label": "Desired program",
      "form.program_ph": "Choose a program",
      "form.consent": "I agree that my data may be used to process my request, in accordance with the <a href=\"politique-confidentialite.html\">privacy policy</a>.",
      "form.submit": "Send my request",
      "form.reassure_1": "Reply within 48 h",
      "form.reassure_2": "Data protected",
      "form.reassure_3": "No commitment",
      "form.success_title": "Request sent successfully!",
      "form.whatsapp_btn": "Speed things up on WhatsApp",
      "form.reset_btn": "New request",
      "form.name_ph": "e.g. Koffi ADJOVI",
      "form.email_ph": "you@example.com",
      "form.sending": "Sending…",
      "form.err_required": "This field is required.",
      "form.err_name": "Please enter your full name (at least 2 characters).",
      "form.err_email": "Please enter a valid email address (e.g. name@example.com).",
      "form.err_phone": "Please enter a valid phone number (8 to 15 digits).",
      "form.err_program": "Please choose a program.",
      "form.err_consent": "Please accept the privacy policy to continue.",
      "form.err_summary": "Please correct the highlighted fields.",
      "form.success_text": "Thank you <strong>{name}</strong>! Your pre-registration request for <strong>{program}</strong> has been received. Our team will contact you within 48 hours.",
      "form.whatsapp_msg": "Hello UATM-GASA, I have just submitted a pre-registration request on your website.\nName: {name}\nProgram: {program}\nPhone: {phone}\nEmail: {email}",
      "form.error_generic": "Sorry, an error occurred while sending your request. Please try again or call us at (+229) 01 65 78 77 21.",
      "footer.desc": "Benin's first and oldest private university, UATM-GASA Formation has been training tomorrow's engineers, entrepreneurs, accountants, agronomists and lawyers since 1992.",
      "footer.agreement": "Institution accredited by the State of Benin",
      "footer.quick_links": "Quick links",
      "footer.ufr": "Our faculties",
      "footer.contact": "Contact",
      "footer.address": "2nd street on the left after CEG Gbégamey, Cotonou, Benin",
      "footer.hours": "Monday – Friday: 8 am – 5 pm",
      "footer.rights": "All rights reserved",
      "footer.privacy": "Privacy Policy",
      "footer.terms": "Terms of Use",
      "footer.legal": "Legal Notice"
    }
  };

  let currentLang = 'fr';

  function t(key, vars) {
    let str = translations[currentLang][key] || translations['fr'][key] || key;
    if (vars) {
      Object.keys(vars).forEach(k => {
        str = str.replace(new RegExp('{' + k + '}', 'g'), vars[k]);
      });
    }
    return str;
  }

  function applyTranslations(lang) {
    document.documentElement.lang = lang;
    
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.dataset.i18n;
      const val = t(key);
      if (val) el.innerHTML = val;
    });

    document.querySelectorAll('[data-i18n-attr]').forEach(el => {
      const parts = el.dataset.i18nAttr.split(':');
      if (parts.length === 2) {
        el.setAttribute(parts[0].trim(), t(parts[1].trim()));
      }
    });

    document.querySelectorAll('.lang-btn').forEach(btn => {
      btn.classList.toggle('is-active', btn.getAttribute('lang') === lang);
    });

    localStorage.setItem('uatm-lang', lang);
    
    if (typeof initCounters === 'function') {
      document.querySelectorAll('[data-counter]').forEach(el => {
        if (el.dataset.counted !== 'false') {
          const to = Number(el.dataset.to);
          el.textContent = el.dataset.format === 'plain' ? String(to) : new Intl.NumberFormat(lang === 'fr' ? 'fr-FR' : 'en-US').format(to);
        }
      });
    }
  }

  function initLanguage() {
    const savedLang = localStorage.getItem('uatm-lang') || 'fr';
    currentLang = savedLang;
    
    if (savedLang !== 'fr') {
      applyTranslations(savedLang);
    }

    document.querySelectorAll('.lang-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const lang = btn.getAttribute('lang');
        if (lang !== currentLang) {
          currentLang = lang;
          applyTranslations(lang);
        }
      });
    });
  }

  function initYear() {
    document.querySelectorAll('[data-year]').forEach(el => el.textContent = new Date().getFullYear());
  }

  function initHeaderScroll() {
    const header = document.querySelector('[data-header]');
    if (!header || header.classList.contains('is-scrolled')) return;
    window.addEventListener('scroll', () => {
      header.classList.toggle('is-scrolled', window.scrollY > 50);
    }, { passive: true });
  }

  function initRevealAnimations() {
    if (!('IntersectionObserver' in window)) return;
    document.documentElement.classList.add('js-anim');
    const elements = document.querySelectorAll('.feature-card, .ufr-card, .stat-card, .mini-stat, .founder-card, .campus-item, .gallery-item, .admission-info, .admission-form-wrap, .section-head, .campus-text');
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-revealed');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15, rootMargin: "0px 0px -50px 0px" });
    
    elements.forEach(el => observer.observe(el));
  }

  function initCounters() {
    const counters = document.querySelectorAll('[data-counter]');
    if (!counters.length || !('IntersectionObserver' in window)) return;

    const animateCounter = (el) => {
      const to = Number(el.dataset.to);
      const isPlain = el.dataset.format === 'plain';
      const duration = 2000;
      const start = performance.now();

      const update = (now) => {
        const progress = Math.min((now - start) / duration, 1);
        const ease = 1 - Math.pow(1 - progress, 4);
        el.textContent = isPlain ? String(Math.round(to * ease)) : new Intl.NumberFormat(currentLang === 'fr' ? 'fr-FR' : 'en-US').format(Math.round(to * ease));
        if (progress < 1) requestAnimationFrame(update);
        else {
          el.textContent = isPlain ? String(to) : new Intl.NumberFormat(currentLang === 'fr' ? 'fr-FR' : 'en-US').format(to);
          el.dataset.counted = 'true';
        }
      };
      requestAnimationFrame(update);
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          animateCounter(entry.target);
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.6 });

    counters.forEach((el) => {
      el.dataset.counted = 'false';
      el.textContent = '0';
      observer.observe(el);
    });
  }

  function initForm() {
    const form = document.getElementById('preinscription-form');
    if (!form) return;

    const fields = {
      name: form.querySelector('[name="name"]'),
      email: form.querySelector('[name="email"]'),
      phone: form.querySelector('[name="phone"]'),
      program: form.querySelector('[name="program"]'),
      consent: form.querySelector('[name="consent"]')
    };
    
    const submitBtn = form.querySelector('[data-submit]');
    const submitLabel = form.querySelector('[data-submit-label]');
    const submitIcon = form.querySelector('[data-submit-icon]');
    const successBox = form.parentElement.querySelector('[data-form-success]');
    const alertBox = form.querySelector('[data-form-alert]');
    const alertText = form.querySelector('[data-form-alert-text]');
    const successMsg = form.parentElement.querySelector('[data-success-message]');
    const whatsappLink = form.parentElement.querySelector('[data-whatsapp-link]');
    const resetBtn = form.parentElement.querySelector('[data-form-reset]');
    const honeypot = form.querySelector('[name="website"]');

    const validators = {
      name: (el) => {
        const v = el.value.trim();
        if (!v) return t('form.err_required');
        if (v.length < 2) return t('form.err_name');
        return '';
      },
      email: (el) => {
        const v = el.value.trim();
        if (!v) return t('form.err_required');
        return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v) ? '' : t('form.err_email');
      },
      phone: (el) => {
        const v = el.value.trim();
        if (!v) return t('form.err_required');
        const digits = v.replace(/\D/g, '');
        return digits.length >= 8 && digits.length <= 15 ? '' : t('form.err_phone');
      },
      program: (el) => el.value ? '' : t('form.err_program'),
      consent: (el) => el.checked ? '' : t('form.err_consent')
    };

    function setFieldState(name, error) {
      const el = fields[name];
      const field = el.closest('.field');
      const errEl = document.getElementById('err-' + name);
      field.classList.toggle('has-error', !!error);
      field.classList.toggle('is-valid', !error && name !== 'consent' && el.value !== '');
      el.setAttribute('aria-invalid', error ? 'true' : 'false');
      if (error) errEl.textContent = error;
      else errEl.textContent = '';
    }

    function validateField(name) {
      const error = validators[name](fields[name]);
      setFieldState(name, error);
      return !error;
    }

    Object.keys(fields).forEach((name) => {
      const el = fields[name];
      const isCheck = name === 'consent' || name === 'program';
      el.addEventListener(isCheck ? 'change' : 'blur', () => {
        if (isCheck || el.value.trim() !== '') validateField(name);
      });
      el.addEventListener('input', () => {
        if (name === 'phone') el.value = el.value.replace(/[^\d+\s().-]/g, '');
        if (el.closest('.field').classList.contains('has-error')) validateField(name);
      });
    });

    function setLoading(on) {
      submitBtn.disabled = on;
      submitLabel.textContent = on ? t('form.sending') : t('form.submit');
      submitIcon.className = on ? 'fa-solid fa-spinner fa-spin' : 'fa-solid fa-paper-plane';
    }

    function showSuccess(data) {
      form.hidden = true;
      successBox.hidden = false;
      successBox.focus();
      
      const programLabel = fields.program.options[fields.program.selectedIndex].text;
      successMsg.innerHTML = t('form.success_text', { name: data.name, program: programLabel });

      const waText = t('form.whatsapp_msg', { name: data.name, program: programLabel, phone: data.phone, email: data.email });
      whatsappLink.href = `https://wa.me/2290165787721?text=${encodeURIComponent(waText)}`;
      
      successBox.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }

    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      alertBox.hidden = true;
      if (honeypot && honeypot.value) return;

      const invalid = Object.keys(fields).filter((name) => !validateField(name));
      if (invalid.length > 0) {
        alertText.textContent = t('form.err_summary');
        alertBox.hidden = false;
        fields[invalid[0]].focus();
        return;
      }

      const data = {
        name: fields.name.value.trim(),
        email: fields.email.value.trim(),
        phone: fields.phone.value.trim(),
        program: fields.program.value
      };

      setLoading(true);
      try {
        await new Promise((resolve) => setTimeout(resolve, 1500));
        showSuccess(data);
      } catch (err) {
        alertText.textContent = t('form.error_generic');
        alertBox.hidden = false;
      } finally {
        setLoading(false);
      }
    });

    resetBtn.addEventListener('click', () => {
      form.reset();
      Object.keys(fields).forEach((name) => {
        const field = fields[name].closest('.field');
        field.classList.remove('has-error', 'is-valid');
        document.getElementById('err-' + name).textContent = '';
      });
      alertBox.hidden = true;
      successBox.hidden = true;
      form.hidden = false;
      fields.name.focus();
    });
  }

  function initLegalToc() {
    const links = document.querySelectorAll('[data-toc-link]');
    if (!links.length || !('IntersectionObserver' in window)) return;
    
    const byId = new Map();
    links.forEach(a => byId.set(a.hash.slice(1), a));
    
    const io = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        links.forEach(a => a.classList.remove('is-active'));
        const link = byId.get(entry.target.id);
        if (link) link.classList.add('is-active');
      });
    }, { rootMargin: '-25% 0px -65% 0px' });
    
    byId.forEach((link, id) => {
      const section = document.getElementById(id);
      if (section) io.observe(section);
    });
  }

  function initBackToTop() {
    const btn = document.querySelector('[data-back-to-top]');
    if (!btn) return;
    
    const ring = btn.querySelector('.ring');
    const circumference = 2 * Math.PI * 24; 
    if (ring) ring.style.strokeDasharray = circumference.toFixed(1);

    function updateScroll() {
      const y = window.scrollY;
      btn.classList.toggle('is-visible', y > 600);
      if (ring) {
        const max = document.documentElement.scrollHeight - window.innerHeight;
        const progress = max > 0 ? Math.min(1, y / max) : 0;
        ring.style.strokeDashoffset = (circumference * (1 - progress)).toFixed(1);
      }
    }

    window.addEventListener('scroll', updateScroll, { passive: true });
    updateScroll();

    btn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  function initMobileMenu() {
    const btn = document.querySelector('.burger');
    const menu = document.getElementById('mobile-menu');
    if (!btn || !menu) return;

    function toggleMenu() {
      const isOpen = menu.classList.contains('is-open');
      btn.classList.toggle('is-active', !isOpen);
      menu.classList.toggle('is-open', !isOpen);
      document.body.classList.toggle('menu-open', !isOpen);
      btn.setAttribute('aria-expanded', !isOpen);
      menu.setAttribute('aria-hidden', isOpen);
      if (!isOpen) {
        menu.removeAttribute('inert');
      } else {
        menu.setAttribute('inert', '');
      }
    }

    btn.addEventListener('click', toggleMenu);
    const links = menu.querySelectorAll('a');
    links.forEach(link => {
      link.addEventListener('click', () => {
        if (menu.classList.contains('is-open')) toggleMenu();
      });
    });
  }

  function init() {
    initLanguage();
    initYear();
    initHeaderScroll();
    initRevealAnimations();
    initCounters();
    initForm();
    initLegalToc();
    initBackToTop();
    initMobileMenu();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();