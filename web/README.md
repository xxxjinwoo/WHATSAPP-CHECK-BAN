# WhatsApp Check Ban - PWA (Progressive Web App)

## 🌐 Vérifiez votre statut WhatsApp en ligne

Cette application web progressive vous permet de vérifier rapidement si votre compte WhatsApp est banni.

## ✨ Fonctionnalités

- ✅ **Fonctionne hors ligne** - Grâce au Service Worker
- ✅ **Installable** - Comme une application mobile native
- ✅ **Rapide** - Chargement instantané
- ✅ **Responsive** - Fonctionne sur tous les appareils
- ✅ **Sécurisé** - Aucune donnée n'est envoyée
- ✅ **Dark Mode** - Support du mode sombre
- ✅ **Historique** - Garder trace de vos vérifications

## 🚀 Déploiement

### Netlify (Recommandé)

1. Fork ce projet
2. Connectez-vous à [Netlify](https://netlify.com)
3. Cliquez sur "New site from Git"
4. Sélectionnez votre repo
5. Configurez:
   - **Build command:** (laisser vide)
   - **Publish directory:** `web`
6. Déployez!

### GitHub Pages

1. Accédez aux paramètres du repo
2. Pages → Source → Deploy from branch
3. Sélectionnez `main` branch et dossier `web`
4. Sauvegardez
5. Votre site sera disponible à: `https://xxxjinwoo.github.io/WHATSAPP-CHECK-BAN/`

### Vercel

1. Allez sur [Vercel](https://vercel.com)
2. Importez le projet
3. Configurez le root directory: `web`
4. Déployez!

### Localement

```bash
cd web
python -m http.server 8000
# Ou avec Node.js:
npx http-server
```

Puis ouvrez `http://localhost:8000`

## 📁 Structure des fichiers

```
web/
├── index.html       # Page principale
├── style.css        # Styles (responsive + dark mode)
├── app.js          # Logique de l'app
├── sw.js           # Service Worker (offline)
├── manifest.json   # Configuration PWA
└── README.md       # Documentation
```

## 🎯 Utilisation

1. Accédez au site web
2. Entrez votre numéro WhatsApp (+33612345678 ou 0612345678)
3. Cliquez sur "Vérifier le statut"
4. Obtenez votre résultat instantanément

## 📱 Installer comme application

### Sur mobile:

**iOS:**
1. Ouvrez Safari
2. Visitez le site
3. Appuyez sur Partager → Ajouter à l'écran d'accueil

**Android:**
1. Ouvrez Chrome ou Firefox
2. Visitez le site
3. Appuyez sur le menu (⋮) → "Installer l'app"
4. Ou appuyez sur la barre d'URL (bannière d'installation)

### Sur PC/Mac:

1. Ouvrez le site dans Chrome/Edge
2. Cliquez sur l'icône d'installation (adresse bar)
3. Confirmez

## 🔒 Sécurité & Confidentialité

- ❌ Aucun serveur n'est utilisé
- ❌ Aucune donnée n'est collectée
- ❌ Aucun cookie n'est stocké
- ✅ Tout fonctionne localement sur votre appareil
- ✅ Données stockées localement via localStorage

## 🛠️ Technologie

- **HTML5** - Structure
- **CSS3** - Design responsive + animations
- **JavaScript (Vanilla)** - Logique
- **Service Worker** - Fonctionnement hors ligne
- **PWA** - Installation comme app

## 📊 Résultats possibles

- ✅ **Compte actif** - Votre compte fonctionne normalement
- ❌ **Compte banni** - Votre compte a été suspendu
- ⚠️ **Avertissement** - Votre compte est sous surveillance

## 🌍 Compatibilité

- ✅ Chrome/Edge 51+
- ✅ Firefox 44+
- ✅ Safari 11.1+
- ✅ Samsung Internet 5+
- ✅ Tous les navigateurs modernes

## 📄 Licence

MIT License - Libre d'utilisation

## 👨‍💻 Auteur

[@xxxjinwoo](https://github.com/xxxjinwoo)

---

**🎉 Profitez de l'app! N'hésitez pas à laisser une ⭐ si vous l'aimez!**
