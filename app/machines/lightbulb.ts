import { useMachine } from "@xstate/react";
import { assign, createMachine } from "xstate";
import { randomHexColor } from "~/common/colors";

const unlitColor = "#FFFFFF";

const id = "lightBulb";
const initial = "unlit";
const context = {
  location: "kitchen",
  color: unlitColor,
  replacement: null,
};

const LIT = "lit";
const UNLIT = "unlit";
const BROKEN = "broken";

const lit = {
  on: {
    BREAK: {
      target: BROKEN,
    },
    TOGGLE: {
      target: UNLIT,
      actions: [{ type: "setTransparent" }],
    },
    CHANGE_COLOR: {
      actions: [{ type: "changeColor" }],
    },
  },
};

const unlit = {
  on: {
    BREAK: {
      target: BROKEN,
    },
    TOGGLE: {
      target: LIT,
      actions: [{ type: "changeColor" }],
    },
  },
};

const broken = {
  on: {
    REPLACE: {
      target: "unlit",
    },
  },
};

export const machine = createMachine({
  id,
  initial,
  context,
  states: {
    unlit,
    broken,
    lit,
  },
}).provide({
  actions: {
    changeColor: assign({
      color: ({ event }) => event?.color ?? randomHexColor(),
    }),
    setTransparent: assign({
      color: unlitColor,
    }),
  },
});

export const useLightBulb = () => useMachine(machine);
