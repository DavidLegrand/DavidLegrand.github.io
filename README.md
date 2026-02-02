# David Legrand - Site CV

Site CV personnel construit avec Eleventy et TailwindCSS.

## 🚀 Démarrage rapide

### Installation

```bash
npm install
```

### Développement

```bash
npm start
```

Le site sera accessible sur `http://localhost:8080`

### Build pour production

```bash
npm run build
```

Les fichiers buildés seront générés à la racine (pour GitHub Pages).

## 📁 Structure du projet

```
.
├── src/
│   ├── _data/           # Données JSON (experiences, skills, etc.)
│   ├── _includes/       # Templates Nunjucks
│   │   ├── components/  # Composants réutilisables
│   │   └── layouts/     # Layouts de page
│   ├── sections/        # Sections du CV
│   ├── scripts/         # JavaScript source
│   ├── styles/          # CSS source (Tailwind)
│   └── img/             # Images
├── assets/              # Assets buildés (CSS, JS)
├── img/                 # Images copiées
└── index.html           # Page générée
```

## ✅ Corrections effectuées

- ✅ Années d'expérience JavaScript mises à jour (2024, 2025)
- ✅ URLs Open Graph corrigées
- ✅ Typo "apperçu" → "aperçu"
- ✅ Fonts Google optimisées (font-display: swap)
- ✅ Accessibilité améliorée (ARIA labels, focus visible)
- ✅ Menu burger avec animations fluides
- ✅ Système de build complet créé

## 💡 Propositions d'amélioration

### 1. CSS Tailwind compilé (actuellement ~300Ko)

**Solution recommandée :**
```bash
npm run build
```
Cela activera PurgeCSS automatiquement et réduira le CSS à ~10-15Ko.

### 2. Images BMP (mobipilot.bmp, weekandgo.bmp)

**À faire :**
```bash
# Convertir en WebP (meilleure compression)
cwebp -q 80 img/mobipilot.bmp -o img/mobipilot.webp
cwebp -q 80 img/weekandgo.bmp -o img/weekandgo.webp

# Puis supprimer les .bmp
rm img/*.bmp
```

Ensuite, mettre à jour les références dans le code.

### 3. Contenu "Accélérateur de croissance digitale"

**Alternatives proposées :**
- "Architecte technique & leader d'équipe"
- "Stratège technologique"
- "CTO passionné par l'excellence technique"
- "Bâtisseur de solutions innovantes"

À modifier dans [src/index.njk:16](src/index.njk#L16)

### 4. FontAwesome (actuellement 800Ko+)

**Solutions :**

**Option A - Subset custom :**
Utiliser seulement les icônes nécessaires via un subset builder.

**Option B - Remplacer par SVG inline :**
Plus léger et performant, mais nécessite plus de travail.

**Option C - Lucide Icons :**
Alternative moderne et légère à FontAwesome.

### 5. Analytics (Google Analytics, Plausible, etc.)

**Recommandation : Plausible Analytics**
- Respectueux de la vie privée (RGPD compliant)
- Léger (<1KB)
- Hébergé en UE

**À ajouter dans `base.njk` :**
```html
<script defer data-domain="david-legrand.com" src="https://plausible.io/js/script.js"></script>
```

### 6. Dark Mode

**Fichiers à créer/modifier :**
- Ajouter un toggle dans la navigation
- Utiliser `prefers-color-scheme` CSS
- Stocker la préférence en localStorage

**Effort estimé :** 2-3 heures

### 7. Portfolio de projets

**À créer :**
- `src/_data/projects.json` (structure similaire à experiences.json)
- `src/sections/projects.njk`
- Ajouter des screenshots dans `src/img/projects/`

**Exemple de données :**
```json
{
  "items": [
    {
      "title": "Kizeo Forms Mobile",
      "description": "Application React Native de saisie de données terrain",
      "tech": ["React Native", "Expo", "TypeScript"],
      "image": "kizeo-forms.webp",
      "link": "https://www.kizeo-forms.com"
    }
  ]
}
```

### 8. Animations au scroll

**À ajouter :**
```bash
npm install --save-dev aos
```

Dans le JS, importer AOS et l'initialiser.

### 9. Call-to-action plus impactant

**Suggestions de remplacements pour "On s'prend un café ?" :**

- "Discutons de votre projet"
- "Travaillons ensemble"
- "Échangeons sur vos besoins"
- "Contactez-moi pour un échange"

## 🌐 Déploiement GitHub Pages

1. Pusher les fichiers buildés sur la branche `master`
2. Aller dans Settings > Pages
3. Sélectionner "Deploy from branch" → `master` → `/` (root)
4. Le site sera disponible sur `https://davidlegrand.github.io`

## 🔄 Workflow de développement

1. Modifier les fichiers dans `src/`
2. Le site se recharge automatiquement en dev
3. Une fois satisfait, lancer `npm run build`
4. Commit et push sur GitHub

## 📝 Notes importantes

- Les fichiers buildés (`index.html`, `assets/`) sont versionnés pour GitHub Pages
- Ne pas modifier directement `index.html` ou `assets/main.css` (ils seront écrasés au build)
- Toutes les modifications doivent être faites dans `src/`

## 🐛 Problèmes connus

Aucun pour le moment !

## 📞 Contact

David Legrand - [contact@david-legrand.com](mailto:contact@david-legrand.com)
