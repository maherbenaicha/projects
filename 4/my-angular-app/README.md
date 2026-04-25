# MyAngularApp

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 21.2.8.

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Vitest](https://vitest.dev/) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.

## Parcours d'apprentissage rapide (Todo App)

Utilise ce plan en 5 etapes pour apprendre Angular en construisant ce projet:

1. Comprendre la structure
- Ouvre `src/app/app.ts` et `src/app/app.html` pour voir comment le composant racine charge le composant Todo.
- Ouvre `src/app/todo/todo.ts`, `src/app/todo/todo.html`, `src/app/todo/todo.css` pour voir la separation logique/template/style.

2. Maitriser les bases du template
- `[(ngModel)]` lie l'input a la variable `task`.
- `*ngFor` affiche la liste des taches.
- `(click)` appelle les methodes `addTask`, `toggleDone`, `deleteTask`.

3. Faire evoluer le projet
- Ajoute un filtre: toutes, actives, terminees.
- Ajoute un compteur: nombre total et nombre termine.
- Ajoute un bouton "Tout supprimer".

4. Introduire la persistance
- Sauvegarde la liste dans localStorage apres chaque modification.
- Recharge les donnees au demarrage du composant.

5. Aller vers un niveau intermediaire
- Creer un service Todo (separer logique et UI).
- Ajouter des tests unitaires pour `addTask`, `deleteTask`, `toggleDone`.
- Ajouter le routage pour separer page d'accueil et page Todo.
