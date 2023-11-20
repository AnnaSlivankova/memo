import { Logout } from "@/assets";
import { Button } from "@/components/ui/button";

export function App() {
  return (
    <div>
      <div>Hello</div>
      <Button>
        <Logout />
        primary
      </Button>
    </div>
  );
}
