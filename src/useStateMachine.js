import { useEffect, useState } from "react";

const states = {
  go: "go",
  stop: "stop",
  ready: "ready"
};

const machine = {
  states,
  go: {
    on: (state, changeState) => {
      console.log("I am green", state);

      setTimeout(() => {
        changeState(states.stop);
      }, 1000);
    }
  },
  stop: {
    on: (state, changeState) => {
      console.log("I am red", state);

      setTimeout(() => {
        changeState(states.ready);
      }, 1000);
    }
  },
  ready: {
    on: (state, changeState) => {
      console.log("I am yellow", state);

      setTimeout(() => {
        changeState(states.go);
      }, 1000);
    }
  }
};

export const useStateMachine = () => {
  const [state, setState] = useState(machine.states.go);

  useEffect(() => {
    machine[state].on(state, setState);
  }, [state]);

  return {
    currentState: state,
    allStates: machine.states
  };
};
