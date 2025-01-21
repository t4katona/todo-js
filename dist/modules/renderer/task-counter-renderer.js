import { containers, counters } from "../constants/ui-dom-elements.constants";
// * Render task counters *
export const renderTaskCounters = () => {
    counters.counterTodo.innerHTML =
        containers.todoContainer.childElementCount.toString();
    console.log("todo: ", containers.todoContainer.childElementCount.toString());
    counters.counterInProgress.innerHTML =
        containers.inProgressContainer.childElementCount.toString();
    counters.counterCompleted.innerHTML =
        containers.completedContainer.childElementCount.toString();
    counters.counterOnHold.innerHTML =
        containers.onHoldContainer.childElementCount.toString();
};
