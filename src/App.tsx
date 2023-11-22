import { Close } from "@/assets";
import { TextField } from "@/components/ui/text-field";

export function App() {
  return (
    <div>
      <div>Hello</div>
      <TextField
        iconEnd={<Close />}
        iconStart={<Close />}
        id={"1"}
        label={"Input"}
        name={"Input"}
        placeholder={"lll"}
      ></TextField>
    </div>
  );
}
