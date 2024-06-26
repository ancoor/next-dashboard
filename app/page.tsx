import Tasks from "@/components/todovex/task";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between p-24">
      <h1>Global Panel</h1>
      <Button>Hi</Button>
      <Tasks/>
    </main>
  );
}
