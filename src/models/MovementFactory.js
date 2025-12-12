// MovementFactory.js
// Auto-generated factory and registry for IMovement instances.

import * as MovementModule from './Movement.js';

const movementRegistry = {
  income: MovementModule.IncomeMovement,
  expense: MovementModule.ExpenseMovement,
  transfer: MovementModule.TransferMovement,
  refund: MovementModule.RefundMovement,
  fee: MovementModule.FeeMovement, // added fee
  // additional types can be registered dynamically
};

/**
 * Register a movement type at runtime.
 * @param {string} type 
 * @param {Function} ctor 
 */
export function registerMovementType(type, ctor) {
  movementRegistry[type] = ctor;
}

/**
 * Create an IMovement instance based on type.
 * @param {string} type 
 * @param {object} props 
 * @returns instance of movement
 */
export function createMovement(type, props) {
  const MovementClass = movementRegistry[type];
  if (!MovementClass) {
    throw new Error(`Movement type not registered: ${type}`);
  }
  return new MovementClass(props);
}

// Export registry for possible inspection (optional)
export const _movementRegistry = movementRegistry;
