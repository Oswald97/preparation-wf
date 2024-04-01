import { Outlet } from "react-router-dom";
import { Toaster } from "./components/ui/sonner";
import { Header, NavMenu } from "./layouts";

export function App() {
  return (
    <div className="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
      <div className="hidden border-r bg-muted/40 md:block">
        <NavMenu />
      </div>
      <div className="flex flex-col">
        {/* Header goes here */}
        <Header />
        <main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6">
          <Outlet />
        </main>
      </div>
      <Toaster closeButton />
    </div>
  );
}

export default App;
