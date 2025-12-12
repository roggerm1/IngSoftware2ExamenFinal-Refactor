
import * as MovementModule from './Movement';

const movementRegistry = {
  income: MovementModule.IncomeMovement,
  expense: MovementModule.ExpenseMovement,
  transfer: MovementModule.TransferMovement,
  refund: MovementModule.RefundMovement,
  fee: MovementModule.FeeMovement
};

export function registerMovementType(type, ctor) {
  movementRegistry[type] = ctor;
}

export function createMovement(type, props) {
  const MovementClass = movementRegistry[type];
  if (!MovementClass) throw new Error(`Movement type not registered: ${type}`);
  return new MovementClass(props);
}
