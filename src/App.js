import "./styles.css";
import { useStateMachine } from "./useStateMachine";
import cn from "classnames";

export default function App() {
  const { currentState, allStates } = useStateMachine();

  return (
    <div className="App">
      <h1>State Machine :)</h1>
      <div className="box-container">
        <div
          className={cn("box stop", {
            active: currentState === allStates.stop
          })}
        />
        <div
          className={cn("box ready", {
            active: currentState === allStates.ready
          })}
        />
        <div
          className={cn("box go", {
            active: currentState === allStates.go
          })}
        />
      </div>
    </div>
  );
}
