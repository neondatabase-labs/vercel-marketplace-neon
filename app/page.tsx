import PostgresVersion from "./version";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow flex flex-col items-center justify-center text-black dark:text-white">
        <h1 className="font-semibold text-2xl mb-4">Vercel + Neon</h1>
        <PostgresVersion />
      </main>
    </div>
  );
}
