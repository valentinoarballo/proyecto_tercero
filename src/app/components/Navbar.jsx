export default function Navbar() {
  return (
    <nav className="border-b border-gray-800">
      <div className="max-w-4xl mx-auto flex justify-between items-center p-4">
        <h1 className="text-lg font-bold"> Documentacion Next </h1>

        <div className="flex gap-4 text-zinc-400">
          <a href="/" className="hover:text-white">Home</a>
          <a href="/about" className="hover:text-white">About</a>
          <a href="/notas" className="hover:text-white">Notas</a>
        </div>
      </div>
    </nav>
  );
}