export default function About() {
  return (
    <section className="min-h-screen bg-gray-900 text-gray-300 flex items-center justify-center">
      <div className="max-w-xl text-center space-y-4">
        <h1 className="text-4xl font-bold">About</h1>

        <p className="text-gray-400">
          Esta es mi primer aplicacion con Next JS
        </p>

        <div className="flex gap-4 justify-center mt-6">
          <span className="px-3 py-1 bg-gray-700 rounded-lg text-sm">
            Nuestro primer articulo
          </span>
          <a href="/" className="px-3 py-1 bg-gray-700 rounded-lg text-sm">
            Home
          </a>
          <a href="/blog" className="px-3 py-1 bg-gray-700 rounded-lg text-sm">
            Blog
          </a>
        </div>
      </div>
    </section>
  );
}