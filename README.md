# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.



## Refactor: Factory-based creation + OCP

Se añadió `src/domain/MovementFactory.js` que centraliza la creación de movimientos y un nuevo tipo `FeeMovement`.
La UI (`MovementList`) deja de instanciar clases concretas y usa `createMovement(type, props)`.

Pasos para agregar un nuevo tipo sin tocar la UI:
1. Crear la clase del movimiento en `src/domain/Movement.js`.
2. Registrar el tipo en `MovementFactory.js` (o usar `registerMovementType`).
3. El nuevo tipo aparecerá en la UI automáticamente.

Instrucciones para correr:
```
npm install
npm run dev
```
