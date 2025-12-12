# Refactor de Movimientos Bancarios — Factory Pattern + OCP

Este proyecto fue refactorizado para eliminar el acoplamiento entre la UI y las clases concretas de movimientos (IncomeMovement, ExpenseMovement, TransferMovement, RefundMovement).  
La solución implementa el **Factory Pattern** y el **Principio Abierto/Cerrado (OCP)**, permitiendo agregar nuevos tipos de movimiento sin modificar la interfaz de usuario.

---
 Objetivos del Refactor

 1. Desacoplar la UI del dominio
Antes del refactor, el componente `MovementList.jsx` importaba clases concretas como:

```js
import { Deposit } from '../models/Deposit';
import { Payment } from '../models/Payment';

## Refactor: Factory Pattern + OCP

- Se creó MovementFactory.js para centralizar la creación de movimientos.
- La UI ya no instancia concreciones ni usa switch.
- Se añadió FeeMovement para demostrar OCP.
- Pasos para extender:
  1. Crear nueva clase en Movement.js
  2. Registrar en MovementFactory
  3. Sin tocar la UI.

Esto generaba:

Alto acoplamiento

Violación de OCP

Dependencia innecesaria de la UI hacia el dominio

El refactor elimina completamente estas importaciones.


import { createMovement } from '../models/MovementFactory';

function buildMovement(data) {
  return createMovement(data.type, data);
}

Intrucciones para ejecutar el proyecto
npm run dev




