import { Slider } from "@/components/ui/slider";

export function App() {
  return (
    <div>
      <div>Hello</div>
      <Slider
        max={100}
        min={0}
        onChangeValues={(min, max) => {
          alert(`min: ${min}, max: ${max}`);
        }}
      />
    </div>
  );
}
