# Bienvenue sur Panda 🐼

## Installation

Pour installer PandaCSS, il faut aller sur la documentation officiel de [PandaCSS](https://panda-css.com/docs).

(Et si on passe par Vite, il faut se rendre [ici](https://panda-css.com/docs/installation/vite)).

### Steps

1/ `npm install -D @pandacss/dev`

2/ `npx panda init --postcss`

3/ Il faut mettre à jour le `package.json` pour ajouter le script suivant :

```diff
"scripts": {
+ 	"prepare": "panda codegen",
	"dev": "vite",
	"build": "vite build",
	"lint": "eslint . --ext js,jsx --report-unused-disable-directives --max-warnings 0",
	"preview": "vite preview"
}
```

4/ Il demande de vérifier si le fichier `panda.config.mjs` possède bien la ligne suivante :

```js
// Ici, ./src/**/*.css est le chemin de votre fichier CSS avec * qui signifie que tous les fichiers CSS seront compilés
	include: ["./src/**/*.{js,jsx,ts,tsx}", "./pages/**/*.{js,jsx,ts,tsx}"],
```

5/ Et voilà ! vous pouvez commencer à utiliser PandaCSS.

### De la documentation

Si vous avez besoin de comprendre ce que possède PandaCSS, vous pouvez vous rendre sur la [documentation](https://panda-css.com/docs/customization/theme)

Pour allez plus loin, n'hésitez pas à consulter des ressources 🚀

## 📚 Article de blog

[Panda-CSS 🐼: Unleashing Power 🦸 and Efficiency 🤖 in Styling 💃. Pt. 2 ](https://oluwadaprof.medium.com/panda-css-unleashing-power-and-efficiency-in-styling-pt-2-cd69d5ee3edc)

## Comment ça fonctionne ?

### Installation

```sh
npm install
```

### Start

```sh
npm run dev
```

[🏠 Accueil](./index.html)
