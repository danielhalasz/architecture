import { initializeState } from '../../../../business-logic/initialize-state.js';

export const initialize = async () => {
  await initializeState('../../../../data/friendly.json', import.meta);
};
