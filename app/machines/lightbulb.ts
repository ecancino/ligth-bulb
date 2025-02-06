import { assign, createMachine } from "xstate";

const id = "lightBulb";
const initial = "unlit";
const context = {
  location: "kitchen",
  color: "transparent",
  replacement: null,
} as const;

const LIT = "lit";
const UNLIT = "unlit";
const BROKEN = "broken";

const randomHexColor = () =>
  "#" + Math.floor(Math.random() * 16777215).toString(16);

const buyANewBulb = async () => {
  const replacement = await fetch("https://fakestoreapi.com/products/1").then(
    (response) => response.json()
  );
  console.log(replacement);
  return assign({ replacement: "done" });
};

const lit = {
  on: {
    BREAK: {
      target: BROKEN,
    },
    TOGGLE: {
      target: UNLIT,
      actions: ["setTransparent"],
    },
    CHANGE_COLOR: {
      actions: ["changeColor"],
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
      actions: ["changeColor"],
    },
  },
};

const broken = {
  states: {
    // id: 'broken',
    // initial: 'idle',
    // context: {},
    // idle: {
    //   on: {
    //     FETCH: '#broken.REPLACE',
    //   },
    // },
    // loading: {
    //   invoke: {
    //     src: 'fetchUser',
    //     input: ({ context }) => ({ name: context.name }),
    //     onDone: {
    //       target: 'success',
    //       actions: assign({
    //         data: ({ event }) => event.output,
    //       }),
    //     },
    //     onError: 'failure',
    //   },
    // },
    // success: {},
    // failure: {
    //   after: {
    //     1000: 'loading',
    //   },
    //   on: {
    //     RETRY: 'loading',
    //   },
    // },
  },
  on: {
    REPLACE: {
      target: "unlit",
    },
  },
};

const config = {
  actions: {
    buyANewBulb,
    changeColor: assign({
      color: () => randomHexColor(),
    }),
    setTransparent: assign({
      color: "transparent",
    }),
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
});
// .withConfig(config);
