<h1 align="center">Bienvenue sur pandacss 👋</h1>
<p>
  <img alt="Version" src="https://img.shields.io/badge/version-0.0.0-blue.svg?cacheSeconds=2592000" />
  <a href="https://twitter.com/Gorski_anthony" target="_blank">
    <img alt="Twitter: Gorski_anthony" src="https://img.shields.io/twitter/follow/Gorski_anthony.svg?style=social" />
  </a>
</p>

## Installation

Pour installer PandaCSS, il faut aller sur la documentation officiel de [PandaCSS](https://panda-css.com/docs). (Et si on passe par Vite, il faut se rendre [ici](https://panda-css.com/docs/installation/vite)).

### Steps

1. `npm install -D @pandacss/dev`
2. `npx panda init --postcss`
3. Il faut mettre à jour le `package.json` pour ajouter le script suivant :

```diff
"scripts": {
+ "prepare": "panda codegen",
		"dev": "vite",
		"build": "vite build",
		"lint": "eslint . --ext js,jsx --report-unused-disable-directives --max-warnings 0",
		"preview": "vite preview"
}
```

4. Il demande de vérifier si le fichier `panda.config.mjs` possède bien la ligne suivante :

```js
// Ici, ./src/**/*.css est le chemin de votre fichier CSS avec * qui signifie que tous les fichiers CSS seront compilés
	include: ["./src/**/*.{js,jsx,ts,tsx}", "./pages/**/*.{js,jsx,ts,tsx}"],
```

5. Et voilà ! vous pouvez commencer à utiliser PandaCSS.

Si vous avez besoin de comprendre ce que possède PandaCSS, vous pouvez vous rendre sur la [documentation | customization](https://panda-css.com/docs/customization/theme).

Pour allez plus loin, n'hésitez pas à consulter des ressources 🚀

## 📚 Exemples

-   [Panda-CSS 🐼: Unleashing Power 🦸 and Efficiency 🤖 in Styling 💃. Pt. 2 | Medium](https://oluwadaprof.medium.com/panda-css-unleashing-power-and-efficiency-in-styling-pt-2-cd69d5ee3edc)

## Usage

```sh
npm install
```

## Start

```sh
npm run dev
```

## Auteur

👤 **Anthony Gorski**

-   𝕏 - (Twitter): [@Gorski_Anthony](https://twitter.com/Gorski_Anthony)
-   GitHub: [@GorskiAnthony](https://github.com/GorskiAnthony)

## Affichez votre soutien

## Donnez un ⭐️ si ce projet vous a aidé !

### 🗃️ Version

-   **v0.0.0** - First commit

---

### 👋 Qui suis-je ?

Je suis **Anthony Gorski**, développeur web et formateur à la [Wild Code School](https://www.wildcodeschool.com/fr-FR).
