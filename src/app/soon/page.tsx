export default function SoonPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-zinc-100 dark:bg-zinc-900">
      <div className="bg-white dark:bg-zinc-800 rounded-2xl shadow-xl p-10 flex flex-col items-center">
        <span className="text-6xl mb-4">🚧</span>
        <h1 className="text-3xl font-bold mb-2 text-zinc-800 dark:text-zinc-100">Em construção</h1>
        <p className="text-lg text-zinc-600 dark:text-zinc-300 text-center">
          Esta página estará disponível em breve.<br />
          Aguarde novidades!
        </p>
      </div>
    </div>
  );
}