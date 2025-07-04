export default function LoginPage() {
  return (
    <section className="max-w-md mx-auto mt-12">
      <h1 className="text-2xl font-bold mb-4">Login</h1>
      <form className="space-y-4">
        <input
          type="email"
          placeholder="Email"
          className="w-full border p-2 rounded"
        />
        <input
          type="password"
          placeholder="Senha"
          className="w-full border p-2 rounded"
        />
        <button className="bg-blue-600 text-white w-full py-2 rounded">
          Entrar
        </button>
      </form>
    </section>
  );
}