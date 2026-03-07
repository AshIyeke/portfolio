import { ModeToggle } from "./components/mode-toggle";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-zinc-50 text-zinc-900 transition-colors dark:bg-zinc-950 dark:text-zinc-50">
      <h1 className="mb-4 text-4xl font-bold">Theme Test</h1>
      <p className="mb-8 text-lg text-zinc-600 dark:text-yellow-500">
        Toggle the button below to switch between light and dark modes.
      </p>
      <ModeToggle />
    </div>
  );
}
