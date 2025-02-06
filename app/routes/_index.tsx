import { useState } from "react";
import type { MetaFunction } from "@remix-run/node";

import LightBulb from "~/components/LightBulb";
import Button from "~/components/Button/Button";

import { colors } from "~/common/colors";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

const lightBulbSize = "500px";

export default function Index() {
  const [lightColor, setLightColor] = useState("#2F71A8");

  return (
    <main style={{ display: "flex", justifyContent: "center" }}>
      <ul
        style={{
          width: "60em",
          display: "flex",
          flexFlow: "row wrap",
          justifyContent: "space-between",
        }}
      >
        {colors.map((color) => (
          <li key={color} style={{ display: "block" }}>
            <Button
              disabled={lightColor === color}
              onClick={() => setLightColor(color)}
            >
              {color.toLocaleUpperCase()}
            </Button>
          </li>
        ))}
      </ul>

      <section className="light-bulb" style={{ width: lightBulbSize }}>
        <LightBulb bulbColor={lightColor} />
      </section>
    </main>
  );
}
