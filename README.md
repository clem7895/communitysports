# Community Sports — Spots extérieurs gratuits

Petit projet React (Vite) pour partager et consulter des spots où faire du sport gratuitement en extérieur.

Prérequis
- Node.js (version 16+ recommandée)

Installer et lancer (PowerShell sous Windows)

```powershell
# depuis le dossier du projet
npm install
npm run dev

# ouvrez l'URL indiquée par Vite (par défaut http://localhost:5173)
```

Notes
- Les spots sont sauvegardés localement dans le navigateur via localStorage.
- Ceci est une base frontend minimale. Pour production et multi-utilisateurs, il faudra ajouter un backend (API + base de données) et une authentification.

Déployer automatiquement sur GitHub Pages
--------------------------------------

J'ai ajouté un workflow GitHub Actions (`.github/workflows/deploy.yml`) qui construit l'application et publie le contenu du dossier `dist` sur la branche `gh-pages` à chaque push sur `main`.

Pour activer le déploiement automatique :

1. Assure-toi d'avoir poussé (push) la branche `main` vers GitHub :

```powershell
git add .
git commit -m "Add GitHub Actions deploy"
git push origin main
```

2. Une fois poussé, GitHub Actions lancera le workflow. Après quelques minutes le site sera disponible à l'URL :

```
https://<TON_UTILISATEUR>.github.io/<NOM_DU_REPO>/
```

Remarque : si tu préfères que je pousse et déclenche le déploiement pour toi depuis cette machine, dis-le-moi et je peux exécuter les commandes git (push) ici — tu dois être authentifié(e) localement pour que le push réussisse.

