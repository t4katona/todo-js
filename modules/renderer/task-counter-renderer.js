import { containers, counters } from "../constants/ui-dom-elements.constants.js"

// * Render task counters *
export const renderTaskCounters = () => {
  counters.counterTodo.innerHTML = containers.todoContainer.childElementCount;
  counters.counterInProgress.innerHTML =
    containers.inProgressContainer.childElementCount;
  counters.counterCompleted.innerHTML =
    containers.completedContainer.childElementCount;
  counters.counterOnHold.innerHTML =
    containers.onHoldContainer.childElementCount;
};
