export default function DocSection({ title, description, level, tags }) {
  return (
    <section className="bg-gray-800 border border-gray-700 rounded-xl p-6 space-y-4">

      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold">{title}</h2>
        <span className="text-xs px-3 py-1 bg-gray-700 text-gray-300 rounded-full">Level: {level}</span>
      </div>

      <p className="text-gray-400">
        {description}
      </p>

      <div className="flex gap-2 p-2">
        {
          tags.map((tag, index) => (
            <span key={index} className="text-xs bg-gray-900 border border-gray-700 px-2 py-1 rounded-lg">
              {tag}
            </span>
          ))
        }
      </div>

    </section>
  );
}