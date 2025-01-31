import { initializeState } from '../../3-business-logic/initialize-state.js';

import { numberInputComponent } from '../components/number-input.js';

export const loadHandler = () => {
  initializeState({
    numbers: [],
  });

  const numberInputEl = numberInputComponent(3);
  document.getElementById('input-root').appendChild(numberInputEl);
};
