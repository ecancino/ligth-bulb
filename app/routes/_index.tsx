import type { MetaFunction } from "@remix-run/node";

import { useLightBulb } from "~/machines/lightbulb";

import LightBulb from "~/components/LightBulb/LightBulb";
import Button from "~/components/Button/Button";

import { app, lightBulb, controls } from "~/styles/index.css";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  const [snapshot, send] = useLightBulb();

  // console.log(snapshot.machine.states[snapshot.value]);

  return (
    <>
      <main className={app}>
        <section className={controls}>
          {!snapshot.matches("broken") && (
            <Button onClick={() => send({ type: "TOGGLE" })}>Toggle</Button>
          )}

          {snapshot.matches("broken") && (
            <Button onClick={() => send({ type: "REPLACE" })}>Replace</Button>
          )}

          {snapshot.matches("lit") && (
            <>
              <Button onClick={() => send({ type: "CHANGE_COLOR" })}>
                Change color
              </Button>

              <Button
                disabled={snapshot.context.color === "#FF0000"}
                onClick={() => send({ type: "CHANGE_COLOR", color: "#FF0000" })}
              >
                Make it red
              </Button>
            </>
          )}

          {!snapshot.matches("broken") && (
            <Button onClick={() => send({ type: "BREAK" })}>Break</Button>
          )}
        </section>

        <section className={lightBulb}>
          <LightBulb
            bulbColor={snapshot.context.color}
            broken={snapshot.matches("broken")}
          />
        </section>
      </main>
    </>
  );
}
