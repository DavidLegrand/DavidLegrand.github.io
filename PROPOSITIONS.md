# 💡 Propositions d'amélioration du site

## 1. 🎨 Dark Mode

### Implémentation suggérée

**Étape 1 : Ajouter le toggle dans la navigation**

Créer `src/_includes/components/theme-toggle.njk` :
```html
<button
  id="theme-toggle"
  class="fixed bottom-4 right-4 md:bottom-auto md:right-auto md:relative p-3 rounded-full bg-slate-800 hover:bg-slate-700 transition z-30"
  aria-label="Basculer le thème sombre/clair">
  <svg class="w-6 h-6 text-white dark-icon hidden" fill="currentColor" viewBox="0 0 20 20">
    <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path>
  </svg>
  <svg class="w-6 h-6 text-white light-icon" fill="currentColor" viewBox="0 0 20 20">
    <path fill-rule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clip-rule="evenodd"></path>
  </svg>
</button>
```

**Étape 2 : JavaScript pour le toggle**

Ajouter dans `src/scripts/main.js` :
```javascript
// Dark mode toggle
const themeToggle = document.getElementById('theme-toggle');
const html = document.documentElement;
const darkIcon = document.querySelector('.dark-icon');
const lightIcon = document.querySelector('.light-icon');

// Check for saved theme preference or default to light mode
const currentTheme = localStorage.getItem('theme') || 'light';
if (currentTheme === 'dark') {
  html.classList.add('dark');
  darkIcon?.classList.remove('hidden');
  lightIcon?.classList.add('hidden');
}

themeToggle?.addEventListener('click', () => {
  html.classList.toggle('dark');

  const isDark = html.classList.contains('dark');
  localStorage.setItem('theme', isDark ? 'dark' : 'light');

  darkIcon?.classList.toggle('hidden');
  lightIcon?.classList.toggle('hidden');
});
```

**Étape 3 : Styles CSS dark mode**

Ajouter dans `src/styles/main.css` :
```css
/* Dark mode colors */
@layer base {
  .dark body {
    @apply bg-slate-900 text-neutral-200;
  }

  .dark .bg-white {
    @apply bg-slate-800;
  }

  .dark h1, .dark h2, .dark h3, .dark h4, .dark h5, .dark h6 {
    @apply text-neutral-100;
  }

  .dark a:not(.secondary) {
    @apply text-amber-400;
  }

  .dark a:hover {
    @apply text-amber-300;
  }
}
```

**Effort :** 2-3 heures
**Impact :** Moyen (confort utilisateur)

---

## 2. 📊 Analytics avec Plausible

### Pourquoi Plausible ?

- ✅ RGPD compliant (pas besoin de bannière cookies)
- ✅ Ultra léger (<1KB)
- ✅ Hébergé en UE
- ✅ Dashboard simple et clair
- ✅ €9/mois (ou self-hosted gratuit)

### Installation

**Étape 1 : S'inscrire sur plausible.io**

**Étape 2 : Ajouter dans `base.njk`**
```html
<script defer data-domain="david-legrand.com" src="https://plausible.io/js/script.js"></script>
```

**Alternative gratuite : Plausible Self-Hosted**
```bash
docker run -d \
  --name plausible \
  -p 8000:8000 \
  plausible/analytics:latest
```

**Effort :** 15 minutes
**Impact :** Fort (connaissance audience)

---

## 3. 🎯 Section Portfolio/Projets

### Structure des données

Créer `src/_data/projects.json` :
```json
{
  "items": [
    {
      "title": "Kizeo Forms Mobile",
      "subtitle": "Application SaaS B2B de saisie terrain",
      "description": "Application React Native utilisée par 100k+ utilisateurs dans 50 pays pour la saisie de données sur le terrain.",
      "tech": ["React Native", "Expo", "TypeScript", "MobX", "Firebase"],
      "image": "kizeo-forms.webp",
      "link": "https://www.kizeo-forms.com",
      "github": null,
      "stats": [
        { "label": "Utilisateurs", "value": "100k+" },
        { "label": "Pays", "value": "50+" },
        { "label": "Note App Store", "value": "4.8/5" }
      ],
      "highlights": [
        "Architecture scalable supportant des milliers d'utilisateurs simultanés",
        "Offline-first avec synchronisation automatique",
        "Tests unitaires et E2E avec 85% de couverture"
      ]
    },
    {
      "title": "MobiPilot",
      "subtitle": "Gestion de flottes automobiles",
      "description": "Plateforme de gestion complète pour flottes de véhicules : suivi GPS, maintenance, conducteurs.",
      "tech": ["Vue.js", "Vuex", "Vuetify", "Node.js", "PostgreSQL"],
      "image": "mobipilot.webp",
      "link": "https://mobipilot.fr",
      "highlights": [
        "Architecture from scratch",
        "API REST complète avec authentification JWT",
        "Dashboard temps réel avec WebSockets"
      ]
    },
    {
      "title": "Week & Go",
      "subtitle": "Marketplace camping-cars",
      "description": "Plateforme de location peer-to-peer de camping-cars et vans aménagés.",
      "tech": ["React", "Redux", "Node.js", "Stripe", "AWS"],
      "image": "weekandgo.webp",
      "highlights": [
        "Système de paiement sécurisé avec Stripe",
        "Géolocalisation et recherche avancée",
        "Système de notation et reviews"
      ]
    }
  ]
}
```

### Template section

Créer `src/sections/projects.njk` :
```html
---
title: "Projets"
name: "Projets"
id: projects
permalink: false
tags: sections
order: 3
icon: "fa-code"
---

<div class="grid grid-cols-1 gap-8">
  {% for project in projects.items %}
  <article class="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
    <div class="md:flex">
      {% if project.image %}
      <div class="md:w-1/3">
        <img
          src="/img/projects/{{ project.image }}"
          alt="{{ project.title }}"
          class="w-full h-64 md:h-full object-cover"
          loading="lazy">
      </div>
      {% endif %}
      <div class="p-6 md:w-2/3">
        <div class="flex justify-between items-start mb-4">
          <div>
            <h3 class="h3 mb-2">{{ project.title }}</h3>
            <p class="text-amber-600 font-semibold">{{ project.subtitle }}</p>
          </div>
          {% if project.link %}
          <a
            href="{{ project.link }}"
            target="_blank"
            rel="noopener noreferrer"
            class="text-slate-600 hover:text-amber-600 transition"
            aria-label="Voir le projet {{ project.title }}">
            <i class="fas fa-external-link-alt"></i>
          </a>
          {% endif %}
        </div>

        <p class="mb-4">{{ project.description }}</p>

        {% if project.stats %}
        <div class="grid grid-cols-3 gap-4 mb-4 p-4 bg-slate-50 rounded">
          {% for stat in project.stats %}
          <div class="text-center">
            <p class="h4 text-amber-600">{{ stat.value }}</p>
            <p class="text-sm">{{ stat.label }}</p>
          </div>
          {% endfor %}
        </div>
        {% endif %}

        {% if project.highlights %}
        <ul class="mb-4 space-y-2">
          {% for highlight in project.highlights %}
          <li class="flex items-start">
            <i class="fas fa-check-circle text-amber-600 mr-2 mt-1"></i>
            <span>{{ highlight }}</span>
          </li>
          {% endfor %}
        </ul>
        {% endif %}

        <div class="flex flex-wrap gap-2">
          {% for tech in project.tech %}
          <span class="px-3 py-1 bg-slate-100 rounded-full text-sm">{{ tech }}</span>
          {% endfor %}
        </div>
      </div>
    </div>
  </article>
  {% endfor %}
</div>
```

**Effort :** 4-6 heures (avec screenshots de qualité)
**Impact :** Fort (démonstration compétences)

---

## 4. ✨ Animations au scroll (AOS - Animate On Scroll)

### Installation

```bash
npm install --save aos
```

### Configuration

Dans `src/scripts/main.js` :
```javascript
import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init({
  duration: 800,
  easing: 'ease-in-out',
  once: true,
  offset: 100
});
```

### Utilisation dans les templates

```html
<section data-aos="fade-up">
  <!-- Contenu -->
</section>

<div data-aos="fade-left" data-aos-delay="200">
  <!-- Contenu -->
</div>
```

**Effort :** 1-2 heures
**Impact :** Moyen (effet "wow")

---

## 5. 🖼️ Optimisation des images

### Conversion BMP → WebP

```bash
# Installer cwebp
brew install webp  # macOS
# ou
sudo apt install webp  # Linux

# Convertir les images
cwebp -q 80 img/mobipilot.bmp -o img/mobipilot.webp
cwebp -q 80 img/weekandgo.bmp -o img/weekandgo.webp
cwebp -q 80 img/profil.png -o img/profil-optimized.webp

# Supprimer les anciens formats
rm img/*.bmp
```

### Lazy loading automatique

Ajouter dans tous les `<img>` :
```html
<img
  src="image.webp"
  loading="lazy"
  decoding="async"
  alt="Description">
```

**Effort :** 30 minutes
**Impact :** Fort (performance +40%)

---

## 6. 🎨 Micro-interactions

### Exemples d'améliorations CSS

**Boutons avec effet ripple :**
```css
.btn-ripple {
  position: relative;
  overflow: hidden;
}

.btn-ripple::after {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  width: 0;
  height: 0;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.5);
  transform: translate(-50%, -50%);
  transition: width 0.6s, height 0.6s;
}

.btn-ripple:active::after {
  width: 300px;
  height: 300px;
}
```

**Cartes avec effet 3D au hover :**
```css
.card-3d {
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.card-3d:hover {
  transform: translateY(-10px) rotateX(5deg);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
}
```

**Effort :** 2-3 heures
**Impact :** Moyen (polish)

---

## 7. 📱 Progressive Web App (PWA)

### Avantages

- ✅ Installation sur mobile/desktop
- ✅ Mode offline
- ✅ Notifications push (optionnel)
- ✅ Icône sur l'écran d'accueil

### Implémentation

**Étape 1 : Créer le manifest**

`src/manifest.json` :
```json
{
  "name": "David Legrand - CTO & Tech Lead",
  "short_name": "David Legrand",
  "description": "Site CV de David Legrand",
  "start_url": "/",
  "display": "standalone",
  "background_color": "#1e293b",
  "theme_color": "#d97706",
  "icons": [
    {
      "src": "/img/android-chrome-192x192.png",
      "sizes": "192x192",
      "type": "image/png"
    },
    {
      "src": "/img/android-chrome-512x512.png",
      "sizes": "512x512",
      "type": "image/png"
    }
  ]
}
```

**Étape 2 : Service Worker basique**

`src/sw.js` :
```javascript
const CACHE_NAME = 'davidlegrand-v1';
const urlsToCache = [
  '/',
  '/assets/main.css',
  '/assets/main.js',
  '/img/profil.webp'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then((response) => response || fetch(event.request))
  );
});
```

**Étape 3 : Enregistrer le SW**

Dans `main.js` :
```javascript
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/sw.js');
}
```

**Effort :** 3-4 heures
**Impact :** Moyen (installation app)

---

## 8. 💬 Call-to-Action optimisé

### Suggestions de remplacement

**Actuel :** "On s'prend un café ?☕"

**Options plus professionnelles :**

1. **Directif :**
   - "Discutons de votre projet"
   - "Prenons rendez-vous"
   - "Échangeons sur vos besoins"

2. **Engageant :**
   - "Un projet en tête ?"
   - "Besoin d'un CTO ?"
   - "Envie de collaborer ?"

3. **Mixte (perso + pro) :**
   - "Prenons un café virtuel ☕"
   - "Parlons techno autour d'un café"
   - "Échangeons, autour d'un café ou non ☕"

**Recommandation personnelle :**
"Parlons techno autour d'un café ☕" → Garde ton ton perso tout en étant pro.

---

## 9. 🔍 SEO avancé

### Structured Data (Schema.org)

Ajouter dans `<head>` :
```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "David Legrand",
  "jobTitle": "CTO",
  "worksFor": {
    "@type": "Organization",
    "name": "Kizeo"
  },
  "url": "https://www.david-legrand.com",
  "sameAs": [
    "https://www.linkedin.com/in/david-legrand-71989688/",
    "https://github.com/DavidLegrand"
  ],
  "knowsAbout": [
    "JavaScript",
    "React",
    "Vue.js",
    "React Native",
    "Leadership technique",
    "Agilité"
  ]
}
</script>
```

**Effort :** 1 heure
**Impact :** Moyen (SEO++)

---

## 10. 📧 Formulaire de contact

### Avec Formspree (gratuit)

```html
<form action="https://formspree.io/f/YOUR_ID" method="POST">
  <label>
    Email:
    <input type="email" name="email" required>
  </label>
  <label>
    Message:
    <textarea name="message" required></textarea>
  </label>
  <button type="submit">Envoyer</button>
</form>
```

**Alternative : Netlify Forms** (si hébergé sur Netlify)

**Effort :** 1-2 heures
**Impact :** Moyen (facilite contact)

---

## Priorités recommandées

### 🔥 Urgent (faire maintenant)
1. ✅ Optimisation images BMP → WebP (30 min)
2. ✅ Build production avec CSS optimisé (5 min)

### 📈 Important (cette semaine)
3. Analytics (Plausible) (15 min)
4. Section Portfolio (6 heures)
5. Dark mode (3 heures)

### 💎 Nice to have (ce mois-ci)
6. Animations AOS (2 heures)
7. SEO structured data (1 heure)
8. PWA basique (4 heures)

### 🎨 Polish (quand tu as le temps)
9. Micro-interactions (3 heures)
10. Formulaire contact (2 heures)

---

Veux-tu que je t'aide à implémenter l'une de ces fonctionnalités maintenant ?
