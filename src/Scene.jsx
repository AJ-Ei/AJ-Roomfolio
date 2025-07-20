import { Chair } from "./components/Chair";
import Room from "./components/Room";
import Tablet from "./components/Tablet";
import Monitor from "./components/Monitor";
import Base from "./components/Base";
import Switch from "./components/Switch";

export default function Scene() {
  return (
    <group>
      <Chair />
      <Room />
      <Tablet />
      <Monitor />
      <Base />
      <Switch />
    </group>
  );
}
