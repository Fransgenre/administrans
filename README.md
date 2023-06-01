# Administrans

Administrans est un outil gratuit conçu pour vous aider dans votre transition administrative.

Il est directement inspiré du projet Trans-CEC lancé par Maria Climent-Pommeret,
et des différentes versions qui ont ensuites été améliorées et maintenues par des volontaires.

Le projet n'est pas encore fini, mais vous pouvez commencer à regarder le résultat ici :
https://administrans.agate.blue/

# Contribuer

[Informations de contact pour contribuer](https://administrans.agate.blue/#/a-propos#contact)

## Utiliser administrans et transmettre vos retours

À l'heure actuelle, l'action de contribution la plus utile est de simplement utiliser le service
pour vos démarches et faire remonter vos retours, positifs comme négatifs.

## Remonter des bugs et demandes de fonctionnalités

Si vous constatez des problèmes sur les contenus, des bugs ou des fonctionnalités manquantes, n'hésitez pas à prendre contact afin que nous puissions en tenir compte pour améliorer le service.

## Contribuer au code

Administrans est un projet écrit en Javascript, HTML et CSS, fonctionnant avec Vue 3 et Vite.

Vous pouvez lancer et modifier le projet localement.

Pour rajouter de nouveaux documents ou modifier les existants, les fichiers importants sont :

- `src/documents.js` qui contient la définition des différents documents et des champs de formulaires associés
- `src/documents-templates/` qui contient tous les fichiers de rendu des documents

### Installation initiale

Il vous faudra NodeJS, et Yarn installé au préalable.

```sh
git clone git@github.com:agateblue/administrans.git
cd administrans
yarn install
```

### Lancer le serveur de développement

```sh
yarn dev
```

Vous pouvez à ce stade accéder au service en visitant http://localhost:5173/.

### Compiler le site de production

```sh
yarn build
```

Le site final sera compilé dans le dossier `dist/` et peut-être déployé tel quel sur n'importe quel serveur web.
