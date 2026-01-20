export default function About() {
  return (
    <section className="min-h-screen bg-gray-900 text-gray-300 flex items-center justify-center">
      <div className="max-w-xl text-center space-y-4">
        <h1 className="text-4xl font-blod">Blog</h1>

        <p>
          En esta seccion apareceran los articulos de nuestro blog
        </p>

        <div className="flex gap-4 justify-center mt-6">
          <span className="px-3 py-1 bg-gray-700 rounded-lg text-sm">
            Nuestro primer articulo
          </span>
          <a href="/" className="px-3 py-1 bg-gray-700 rounded-lg text-sm">
            Home
          </a>
          <a href="/about" className="px-3 py-1 bg-gray-700 rounded-lg text-sm">
            About
          </a>
        </div>
      </div>
    </section>
  );
}