import Mints from "./components/Mints";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="font-bold text-3xl mb-4">HIGHER MINTS</div>
      <Mints />
    </main>
  );
}
