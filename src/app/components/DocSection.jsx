export default function DocSection({ title, description, level, tags, children }) {
  return (
    <section className="bg-zinc-800 border border-zinc-700 rounded-xl p-6 space-y-4">

      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold">{title}</h2>
        <span className="text-xs px-3 py-1 bg-zinc-700 text-zinc-300 rounded-full">Level: {level}</span>
      </div>

      <p className="text-zinc-400">
        {description}
      </p>

      <div className="flex gap-2 p-2">
        {
          tags.map((tag, index) => (
            <span key={index} className="text-xs bg-zinc-900 border border-zinc-700 px-2 py-1 rounded-lg">
              {tag}
            </span>
          ))
        }
      </div>

      {children}

    </section>
  );
}