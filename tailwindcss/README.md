# Bienvenue sur TailwindCSS 👋

## Installation

Pour installer tailwindCSS, il faut aller sur la documentation officiel de [Tailwind CSS](https://tailwindcss.com/docs/installation). (Et [ici](https://tailwindcss.com/docs/guides/vite), si on part de 0 avec Vite)

### Steps

1/ `npm install -D tailwindcss postcss autoprefixer`

2/ `npx tailwindcss init -p`

3/ Copier / coller le code suivant dans le fichier `tailwind.config.js`

```js
/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {},
	},
	plugins: [],
};
```

4/ On peut suppimer le fichier `App.css` et effacer le contenu du fichier `index.css` pour y mettre

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

5/ Et voilà !

## Comment ça fonctionne ?

[tailwind]: https://tailwindcss.com/
[bootstrap]: https://getbootstrap.com/docs/5.0/getting-started/introduction/

Avec les frameworks CSS, généralement, tout est une question de classe. On appelle ça des 'classe utilitaire'.

Une classe utilitaire est une classe CSS qui a un seul et unique but.
Exemple `.bg-white`. Cette classe a pour but de donner un `background-color: white;` à l’élément.

Prenons un exemple avec [Bootstrap][bootstrap] qui sur le principe fonctionne de la même manière que TailwindCSS, mais sur la forme pas du tout !

## Et la sémantique dans tout ça ?

Comme vous avez pu le constater avec vos TP ou vos propres créations, la sémantique n'est pas "vraiment" respecté ici. Et oui, on nous demande de faire la page HTML avec les `id` les `class` adéquat et là, quand on regarde la documentation, on ne respect plus réellement cette structure sémantique. Et bien [Adam Wathan](https://adamwathan.me/) à expliqué dans un article que justement, imposer ça (classe css sémantique) été l'un des freins majeurs pour un projet à long terme.

Voici un [site](https://builtwithtailwind.com/) qui enregistre les sites développer avec TailwindCSS

## Exemple entre Bootstrap & Tailwind

Ici, nous avons le code CSS pour générer un bouton avec bootstrap. [ICI](https://codepen.io/gorski_anthony/pen/ExNEqMw)

Et là, la même chose, mais pour Tailwind CSS. [ICI](https://codepen.io/gorski_anthony/pen/GRNdKRa?editors=1010)

🤔 Quel est la différence ?

Comme vous l'avez remarqué, sur bootstrap, nous utilisons des classes préfabriquées. `.btn`, `.btn-primary`, etc.

Alors que pour Tailwind, nous avons la possibilité de personnaliser assez profondément chacun de nos éléments, car nous ne sommes pas limitées aux classes préfabriqué comme bootstrap.

De plus ce lui ci inclut énormément de choses que ne sont pas la majoritairement pas utilisé.

⚠️ L'avantage de bootstrap.

Pour les gros projets, boiotstrap est un allié, car permet à l'ensemble de la team de développeur d'avoir une syntaxe similaire et donc d'avoir les mêmes choses partout, à l'inverse, tailwind est tellement personnalisable que nous devons passer un certain temps par définir la syntaxe à aborder, etc.

## La personnalisation

Ok, on a beaucoup parlé de Tailwind, mais ça donne quoi en vrai ?

[Tailwind][tailwind] a mit à disposition un éditeur de code qui permet de tester celui-ci directement !

Allons faire un tour et découvrir ce qu'il propose.

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
